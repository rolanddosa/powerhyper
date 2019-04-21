package mainPackage.elexonRestService;

import mainPackage.elexonRestService.elexonModel.Response;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import java.io.StringReader;

@Repository
@EnableWebMvc
public class ElexonRestRepository {

    private Response response;
    private JAXBContext jaxbContext;

    RestTemplate restTemplate = new RestTemplate();

    public Response callElexon() {
        String responseAsXmlString = restTemplate.getForObject("https://api.bmreports.com/BMRS/FUELINSTHHCUR/v1?APIKey=piukxcg98wqcs17&FuelType=&ServiceType=xml", String.class);
        try {
            jaxbContext = JAXBContext.newInstance(Response.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
            Response responseObject = (Response) unmarshaller.unmarshal(new StringReader(responseAsXmlString));
            this.response = responseObject;
        } catch (Exception e) {
        }
        return response;
    }
}