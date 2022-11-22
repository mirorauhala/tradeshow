terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  backend "s3" {
    bucket = "tradeshow-tf-state"
    key    = "terraform"
    region = "eu-west-1"
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "eu-west-1"
}

resource "aws_vpc" "default" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_apprunner_connection" "github" {
  connection_name = "github"
  provider_type   = "GITHUB"

  lifecycle {
    prevent_destroy = true
  }
}

module "frontend-apprunner" {
  source = "./modules/apprunner"

  apprunner_name = "tradeshow-front"
  repository_url = "https://github.com/mirorauhala/trade-front"
  build_command  = "npm ci"
  start_command  = "npm run start"
  runtime_environment_variables = {
    PORT = "3000"
  }
}

module "backend-apprunner" {
  source = "./modules/apprunner"

  apprunner_name = "tradeshow-back"
  repository_url = "https://github.com/mirorauhala/trade-back"
  build_command  = "npm ci"
  start_command  = "npm run start"
  runtime_environment_variables = {
    PORT = "3000"
  }

}
