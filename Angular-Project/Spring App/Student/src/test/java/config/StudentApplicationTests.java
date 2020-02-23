package config;

import static org.junit.Assert.assertEquals;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import Model.Student;
import Service.StudentService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StudentApplicationTests {
	private StudentService studentServiceMock = mock(StudentService.class);
	  @Test
	  public void saysHelloWorld() {
       when(studentServiceMock.helloWorld()).thenReturn("Hello World");
	       
	    String results = studentServiceMock.helloWorld();
	    assertEquals(results, "Hello World");
	  }
}
