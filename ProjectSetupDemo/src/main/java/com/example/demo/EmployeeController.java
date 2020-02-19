package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;

	@GetMapping("/getEmployees")
	public ResponseEntity<List<Employee>> getAllEmployees() {

		List<Employee> employeeList = employeeService.getAllEmployees();

		return new ResponseEntity<List<Employee>>(employeeList, HttpStatus.OK);

	}

}
