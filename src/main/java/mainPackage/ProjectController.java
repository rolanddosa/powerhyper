package mainPackage;

import mainPackage.elexonRestService.ElexonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ElexonService elexonService;

    @GetMapping(value = "api/elexon")
    public String getElexon() {
        return elexonService.updateElexonValues();
    }
}
