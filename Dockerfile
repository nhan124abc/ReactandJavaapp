# ===== Stage 1: Build React frontend =====
FROM node:18 AS frontend
WORKDIR /frontend

# Copy package.json và cài dependency
COPY frontend/package*.json ./
RUN npm install

# Copy toàn bộ code React và build
COPY frontend/ ./
RUN npm run build

# ===== Stage 2: Build Spring Boot backend =====
FROM maven:3.9.6-eclipse-temurin-17 AS backend
WORKDIR /app

# Copy pom.xml trước để cache dependency
COPY backend/pom.xml ./
RUN mvn dependency:go-offline

# Copy toàn bộ code backend
COPY backend/src ./src

# Copy React build sang static resources của Spring Boot
COPY --from=frontend /frontend/build ./src/main/resources/static/

# Build jar file
RUN mvn clean package -DskipTests

# ===== Stage 3: Run App =====
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Cài thêm lib để tránh lỗi runtime (font, timezone…)
RUN apk add --no-cache fontconfig ttf-dejavu tzdata

# Copy jar từ stage build
COPY --from=backend /app/target/*.jar app.jar

EXPOSE 8080

# Chạy Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
