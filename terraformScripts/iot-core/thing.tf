provider "molabs_aws" {
   region = "us-east-1"
   version = "~&gt; 2.0"
}
resource "aws_iot_thing" "iot-thing-data" {
   name = "thing-1"
}