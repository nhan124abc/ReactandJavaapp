package com.example.demo.mapper;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee emp) {
    return new EmployeeDto(
            emp.getId(),
            emp.getName(),
            emp.getEmail()
    );

    }

    public static Employee mapToEmployee(EmployeeDto empDto) {
        return new Employee(
                empDto.getId(),
                empDto.getName(),
                empDto.getEmail()
        );
    }
}
