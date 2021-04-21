# Get current AWS user data (id)
data "aws_caller_identity" "current" {
}

data "template_file" "instance_setup" {
  template = file("freetier/instance_setup.yaml")

  vars = {
    region = var.region
  }
}

resource "aws_instance" "freetier_instances" {
  ami                    = var.ami
  instance_type          = var.freetier_instance
  key_name               = var.key_name
  subnet_id              = aws_subnet.subnet_1.id
  vpc_security_group_ids = [aws_security_group.freetier_instances.id]
  user_data              = data.template_file.instance_setup.rendered

  tags = {
    Name      = var.Name
    waited_on = var.waited_on
  }
}

resource "aws_eip" "freeone" {
  vpc = true

  instance                  = aws_instance.freetier_instances.id
  depends_on                = [aws_internet_gateway.gateway]
}
output "instance_ips" {
    value = aws_instance.freetier_instances.public_ip   
}
