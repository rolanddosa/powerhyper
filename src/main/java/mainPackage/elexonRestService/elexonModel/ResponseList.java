package mainPackage.elexonRestService.elexonModel;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "responseList")
@XmlAccessorType(XmlAccessType.FIELD)
public class ResponseList {
    @XmlElement(name="item")
    private List<ElexonItem> items = null;

    public List<ElexonItem> getItems() {
        return items;
    }

    public void setItems(List<ElexonItem> items) {
        this.items = items;
    }
}