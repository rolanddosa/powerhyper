package mainPackage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

    private static Logger logger = LoggerFactory.getLogger(ProjectController.class);

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return (List<Project>) projectRepository.findAll();
    }

    @PostMapping("/projects")
    void addProject(@RequestBody Project project) {
        projectRepository.save(project);
        logger.info("Added new project: {}", project.toString());
    }

}
