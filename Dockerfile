# Sử dụng Node.js bản nhẹ (alpine) để giảm kích thước image
FROM node:20-alpine

# Tạo thư mục ứng dụng bên trong container
WORKDIR /app

# Copy package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies (chỉ production để tối ưu)
RUN npm install --omit=dev

# Copy toàn bộ code vào container
COPY . .

# Thông báo port ứng dụng (mặc dù code hiện tại chưa dùng port)
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]
