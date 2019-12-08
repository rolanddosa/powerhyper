package mainPackage.elexonRestService;

import com.google.gson.Gson;
import mainPackage.elexonRestService.elexonModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static org.springframework.util.ObjectUtils.isEmpty;

@Service
public class ElexonService {

    private LocalDateTime lastRetrievedTimestamp;

    private Response elexonDto;

    private String myString;


    @Autowired
    private ElexonRestRepository elexonRestRepository;

    public String updateElexonValues() {
        if (isEmpty(elexonDto) || lastRetrievedTimestamp.isBefore(LocalDateTime.now().minusMinutes(5L))) {
            elexonDto = elexonRestRepository.callElexon();
            lastRetrievedTimestamp = LocalDateTime.now();
        }
        Gson gson = new Gson();
        myString = gson.toJson(elexonDto);
        return myString;
    }
}
