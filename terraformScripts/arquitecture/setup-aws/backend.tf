#S3 Backend File

terraform {
  backend "s3" {
    bucket  = "backends.terraform.us-east-1"
    key     = "my-terraform.tfstate"
    region  = "us-east-1"
    encrypt = "false"
    acl     = "bucket-owner-full-control"
  }
}