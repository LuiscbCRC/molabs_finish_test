resource "aws_security_group" "freetier_instances" {
  name        = "${var.freetier_instance}_SG"
  description = "allow all inbound ssh traffic, use this group only for jump host"
  vpc_id      = aws_vpc.terraform_vpc.id

   ingress {
    from_port = 8080
    to_port = 8080
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group_rule" "all_egress" {
  type              = "egress"
  protocol          = "tcp"
  from_port         = 0
  to_port           = 65535
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.freetier_instances.id
}