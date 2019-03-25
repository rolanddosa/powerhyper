package mainPackage;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(ProjectRepository projectRepository) {
        return args -> {
            Stream.of("Solar", "Wind", "Hydro").forEach(name -> {
                Project project = new Project(name, name.toLowerCase() + "@domain.com");
                projectRepository.save(project);
            });
            projectRepository.findAll().forEach(System.out::println);
        };
    }
}
