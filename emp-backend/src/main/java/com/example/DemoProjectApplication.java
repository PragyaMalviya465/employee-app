package com.example;

import com.example.modal.Employee;
import com.example.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoProjectApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoProjectApplication.class, args);
	}
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String...args) throws Exception{
//		Employee employee = new Employee();
//		employee.setFirstName("Hiral");
//		employee.setLastName("Pawar");
//		employee.setEmailId("hiral@gmail.com");
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee1.setFirstName("Swati");
//		employee1.setLastName("Chouhan");
//		employee1.setEmailId("swati@gmail.com");
//		employeeRepository.save(employee1);

	}
}
