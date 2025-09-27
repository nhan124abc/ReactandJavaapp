package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Cho phép các yêu cầu từ React app chạy trên localhost:3000
        registry.addMapping("/**")  // Áp dụng cho tất cả các endpoint
                .allowedOrigins("https://webtest-8akv.onrender.com/")  // Explicit, không "*"
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);  // Cho phép gửi thông tin xác thực (cookies, headers, v.v.)
    }
}
