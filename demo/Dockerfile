# Sử dụng OpenJDK 17 nhẹ (Alpine)
FROM eclipse-temurin:17-jdk-alpine

# Thư mục làm việc trong container
WORKDIR /app

# Copy file jar từ thư mục target vào container
COPY target/myapp-0.0.1-SNAPSHOT.jar app.jar

# Cấu hình biến môi trường PORT (Render sẽ gán giá trị)
ENV PORT=8080

# Chạy ứng dụng Spring Boot với PORT từ biến môi trường
ENTRYPOINT ["sh", "-c", "java -jar app.jar --server.port=$PORT"]
