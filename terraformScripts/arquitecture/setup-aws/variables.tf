variable "public_key" {
  type = string
}

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "Name" {
    type = string
    default = "ByTerraform"
}

variable "amis-ebs-ssd" {
  type = map(string)   # wget -qO- https://cloud-images.ubuntu.com/query/focal/server/released.current.txt | grep -E "amd64" | grep "ebs-ssd" | grep "hvm" | awk '{ print $7 " = " "\"" $8 "\"" }'
  default = {
    us-east-1 = "ami-06c8ff16263f3db59"
    us-east-2 = "ami-045a25a3e38518838"
    }
}