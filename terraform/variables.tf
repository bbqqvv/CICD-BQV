variable "user_name" {
  description = "Tên của người dùng để hiển thị trong file"
  type        = string
  default     = "Người dùng bí ẩn"
}

variable "output_filename" {
  description = "Tên của file hạ tầng sẽ được tạo ra"
  type        = string
  default     = "ha-tang-bien-dong.txt"
}
