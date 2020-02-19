package com.example.demo;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class EmployeeServiceTest {

	@InjectMocks
	EmployeeService employeeService;

	@Mock
	EmployeeRepository employeeRepository;

	@Test
	public void getAllEmployees() {

		List<Employee> employeeList = new ArrayList<>();
		Employee emmp1 = new Employee();
		emmp1.setEmail("viru@gmail.com");
		emmp1.setEmployeeId(new Long(1));
		emmp1.setFirstName("Sehwag");
		emmp1.setLastName("Virendhar");

		Employee emmp2 = new Employee();
		emmp2.setEmail("dhoni@gmail.com");
		emmp2.setEmployeeId(new Long(2));
		emmp2.setFirstName("Dhoni");
		emmp2.setLastName("Mahinder");

		employeeList.add(emmp1);
		employeeList.add(emmp2);

		when(employeeRepository.findAll()).thenReturn(employeeList);

		List<Employee> allEmployees = employeeService.getAllEmployees();

		Assert.assertEquals(allEmployees.get(0).getFirstName(), employeeList.get(0).getFirstName());

	}
}
