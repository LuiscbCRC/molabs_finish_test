provider "aws" {
    region = var.region
}

resource "aws_key_pair" "AWS_key_for_terraform" {
  key_name_prefix = "AWS_key_for_terraform"
  public_key      = var.public_key
}

module "freetier" {
  source        = "./freetier"
  region        = var.region
  ami           = var.amis-ebs-ssd[var.region]
  key_name      = aws_key_pair.AWS_key_for_terraform.key_name
  Name          = var.Name
  waited_on     = ""
 }