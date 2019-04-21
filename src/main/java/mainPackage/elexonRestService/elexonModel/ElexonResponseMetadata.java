package mainPackage.elexonRestService.elexonModel;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "responseMetadata")
public class ElexonResponseMetadata {
    private String httpCode;
    private String errorType;
    private String description;
    private String cappingApplied;
    private String cappingLimit;
    private String queryString;

    public String getHttpCode() {
        return httpCode;
    }

    public void setHttpCode(String httpCode) {
        this.httpCode = httpCode;
    }

    public String getErrorType() {
        return errorType;
    }

    public void setErrorType(String errorType) {
        this.errorType = errorType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCappingApplied() {
        return cappingApplied;
    }

    public void setCappingApplied(String cappingApplied) {
        this.cappingApplied = cappingApplied;
    }

    public String getCappingLimit() {
        return cappingLimit;
    }

    public void setCappingLimit(String cappingLimit) {
        this.cappingLimit = cappingLimit;
    }

    public String getQueryString() {
        return queryString;
    }

    public void setQueryString(String queryString) {
        this.queryString = queryString;
    }
}
