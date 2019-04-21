package mainPackage.elexonRestService.elexonModel;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "response")
@XmlAccessorType(XmlAccessType.FIELD)
public class Response {
    @XmlElement(name = "responseMetadata")
    private ElexonResponseMetadata elexonResponseMetadata;

    @XmlElement(name = "responseHeader")
    private ElexonResponseHeader elexonResponseHeader;

    @XmlElement(name = "responseBody")
    private ElexonResponseBody elexonResponseBody;

    public ElexonResponseMetadata getElexonResponseMetadata() {
        return elexonResponseMetadata;
    }

    public void setElexonResponseMetadata(ElexonResponseMetadata elexonResponseMetadata) {
        this.elexonResponseMetadata = elexonResponseMetadata;
    }

    public ElexonResponseHeader getElexonResponseHeader() {
        return elexonResponseHeader;
    }

    public void setElexonResponseHeader(ElexonResponseHeader elexonResponseHeader) {
        this.elexonResponseHeader = elexonResponseHeader;
    }

    public ElexonResponseBody getElexonResponseBody() {
        return elexonResponseBody;
    }

    public void setElexonResponseBody(ElexonResponseBody elexonResponseBody) {
        this.elexonResponseBody = elexonResponseBody;
    }
}
