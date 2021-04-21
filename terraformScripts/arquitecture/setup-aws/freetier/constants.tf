variable "av_zone_1" {
  type = map(string)

  default = {
    us-east-1      = "us-east-1a"
    us-west-1      = "us-west-1b"
    us-west-2      = "us-west-2a"
  }
}