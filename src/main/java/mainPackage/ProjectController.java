package mainPackage;

import mainPackage.Project;
import mainPackage.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return (List<Project>) projectRepository.findAll();
    }

    @PostMapping("/projects")
    void addProject(@RequestBody Project project) {
        projectRepository.save(project);
        System.out.println("ADDED NEW PROJECT");
    }

}
