package mainPackage;

import mainPackage.elexonRestService.ElexonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ElexonService elexonService;

    @GetMapping("/projects")
    public List<Project> getProjects() {
        List<Project> projects = (List<Project>) projectRepository.findAll();
        return projects;
    }

    @GetMapping("/elexon")
    public String getElexon() {
        return elexonService.updateElexonValues();
    }
}
