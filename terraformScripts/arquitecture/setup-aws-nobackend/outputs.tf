output "vpc_id" {
    value = "${aws_vpc.main.id}"
}
output "subnet_ids" {
    value = ["${aws_subnet.public.*.id}"]
}
output "instance_id" {
    value = "${aws_instance.web.id}"
}
output "instance_ip" {
    value = "${aws_instance.web.public_ip}"
}
output "datadog_monitor_id" {
    value = "${datadog_monitor.foo.id}"
}
