terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

resource "aws_apprunner_auto_scaling_configuration_version" "nodejs" {
  auto_scaling_configuration_name = "nodejs"
  max_concurrency                 = 100
  max_size                        = 1
  min_size                        = 1
}

resource "aws_apprunner_service" "apprunner-service" {
  service_name                   = var.apprunner_name
  auto_scaling_configuration_arn = aws_apprunner_auto_scaling_configuration_version.nodejs.arn

  instance_configuration {
    cpu    = "1024"
    memory = "2048"
  }

  source_configuration {
    auto_deployments_enabled = true

    authentication_configuration {
      # hardcoded connection arn
      connection_arn = "arn:aws:apprunner:eu-west-1:732129224661:connection/github/86313f7b01ef4c6a8cdd29454171c21d"
    }

    code_repository {
      repository_url = var.repository_url

      code_configuration {
        configuration_source = "API"

        code_configuration_values {
          build_command                 = var.build_command
          port                          = var.port
          runtime                       = "NODEJS_16"
          start_command                 = var.start_command
          runtime_environment_variables = var.runtime_environment_variables
        }
      }

      source_code_version {
        type  = "BRANCH"
        value = "main"
      }
    }
  }

  network_configuration {
    ingress_configuration {
      is_publicly_accessible = true
    }
  }

  health_check_configuration {
    healthy_threshold   = 1
    interval            = 5
    path                = "/"
    protocol            = "HTTP"
    timeout             = 5
    unhealthy_threshold = 1
  }
}
