package mainPackage.elexonRestService.elexonModel;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "responseHeader")
public class ElexonResponseHeader {
    private String recordType;
    private String fileType;

    public String getRecordType() {
        return recordType;
    }

    public void setRecordType(String recordType) {
        this.recordType = recordType;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }
}
