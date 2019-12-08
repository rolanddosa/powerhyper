package mainPackage.elexonRestService.elexonModel;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "responseBody")
@XmlAccessorType(XmlAccessType.FIELD)
public class ElexonResponseBody {

    @XmlElement(name = "total")
    private Total total;

    @XmlElement(name = "responseList")
    private ResponseList responseList;

    @XmlElement(name = "biddingZoneTotalGeneration")
    private BiddingZoneTotalGeneration biddingZoneTotalGeneration;

    private String dataLastUpdated;

    public Total getTotal() {
        return total;
    }

    public void setTotal(Total total) {
        this.total = total;
    }

    public ResponseList getResponseList() {
        return responseList;
    }

    public void setResponseList(ResponseList responseList) {
        this.responseList = responseList;
    }

//    public BiddingZoneTotalGeneration getBiddingZoneTotalGeneration() {
//        return biddingZoneTotalGeneration;
//    }
//
//    public void setBiddingZoneTotalGeneration(BiddingZoneTotalGeneration biddingZoneTotalGeneration) {
//        this.biddingZoneTotalGeneration = biddingZoneTotalGeneration;
//    }

    public String getDataLastUpdated() {
        return dataLastUpdated;
    }

    public void setDataLastUpdated(String dataLastUpdated) {
        this.dataLastUpdated = dataLastUpdated;
    }
}
