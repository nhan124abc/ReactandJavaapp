# Sử dụng OpenJDK 17 nhẹ (Alpine)
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENV PORT=8080
ENTRYPOINT ["sh", "-c", "java -jar app.jar --server.port=$PORT"]
