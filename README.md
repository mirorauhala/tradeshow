# Tradeshow app

This is the Tradeshow app.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) v16.17 (not tested on other versions)
- [Docker](https://www.docker.com/) & docker-compose (for development)

### Installing

1. Clone the repository
2. Open three terminal tabs
3. Run `docker-compose up` in the first tab to start postgres
4. `cd frontend` in one tab
5. `cd strapi` in the other tab
6. On the both tabs, run `npm install` to install the dependencies for both services.
7. On the `frontend` tab, run `npm run dev` to start the frontend.
8. On the `strapi` tab, run `npm run dev` to start the backend.

## Production

### Prerequisites

- [Node.js](https://nodejs.org/en/) v16.17 (not tested on other versions)
- [Terraform](https://www.terraform.io/) v1.3.5
- AWS account with credentials configured

### Deploying

The terraform config will setup the infra on AWS while AppRunner will keep
the application in sync with the GitHub repository. Whenever AppRunner sees a
new commit on the main branch, it will build the application and deploy it. For
this you will need to create a GitHub repository and push the code there, since
AWS AppRunner only supports GitHub.

Terraform will create the following resources:

- AppRunner services for frontend and backend
- RDS postgres instance
- Secrets Manager for storing all the secrets
- S3 bucket for the Terraform state
- S3 bucket for uploaded assests
- VPC & Subnets

To change AWS services used, modify the terraform configuration files.
