package com.example.demo.controller;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Controller
public class FrontendController {

    @RequestMapping(value = {
            "/", 
            "/add",
            "/{x:[\\w\\-]+}",
            "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}"
    })
    public String forward() {
        // trả về index.html trong resources/static (React build)
        return "forward:/index.html";
    }
}
