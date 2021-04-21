# the ami image to use
variable "ami" {
  type = string
}

# the name of the ssh key
variable "key_name" {
  type = string
}

# the instance type of the jump host
variable "freetier_instance" {
  type    = string
  default = "t2.micro"
}

variable "region" {
  type = string
}

# The module it depends on
variable "waited_on" {
  type = string
}

variable "Name" {
    type = string
}