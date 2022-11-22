variable "apprunner_name" {
  type        = string
  description = "Name of the App Runner service"
}

variable "repository_url" {
  type        = string
  description = "The URL of the source repository."
}

variable "build_command" {
  type        = string
  description = "The build command of the source repository."
  default     = "npm ci"
}

variable "port" {
  type        = string
  description = "The port that your application listens to in the container."
  default     = "8080"
}

variable "start_command" {
  type        = string
  description = "The start command of the source repository."
  default     = "npm run start"
}

variable "runtime_environment_variables" {
  type        = map(string)
  description = "The environment variables that are available to your running App Runner service. You can specify up to 10 variables."
  default = {
    PORT = "3000"
  }
}
