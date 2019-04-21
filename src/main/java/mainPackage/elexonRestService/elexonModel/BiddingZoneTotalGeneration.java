package mainPackage.elexonRestService.elexonModel;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "biddingZoneTotalGeneration")
@XmlAccessorType(XmlAccessType.FIELD)
public class BiddingZoneTotalGeneration {
    @XmlElement(name="item")
    private List<ElexonBiddingZoneItem> items = null;

    public List<ElexonBiddingZoneItem> getItems() {
        return items;
    }

    public void setItems(List<ElexonBiddingZoneItem> items) {
        this.items = items;
    }
}
