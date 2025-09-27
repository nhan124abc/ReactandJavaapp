package com.example.demo.controller;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Controller
public class FrontendController {

     // Bắt tất cả request không chứa dấu chấm (file tĩnh), forward về index.html
    @RequestMapping(value = {"/{path:[^\\.]*}"})
    public String forward() {
        return "forward:/index.html";
    }
}
