# Định nghĩa Provider (Người thực hiện)
# Ở đây dùng "local" để Terraform làm việc với file trên máy bạn
terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5.0"
    }
  }
}

# Khai báo một "Tài nguyên" (Resource)
resource "local_file" "example" {
  filename = "${path.module}/${var.output_filename}"
  content  = "Chủ sở hữu: ${var.user_name}\nThời gian khởi tạo: ${timestamp()}"
}
