package mainPackage.elexonRestService.elexonModel;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "item")
public class ElexonBiddingZoneItem {
    private String biddingZone;
    private String recordType;
    private String currentMW;
    private String currentPercentage;
    private String lastHalfHourLocalStartTime;
    private String lastHalfHourLocalEndTime;
    private String lastHalfHourMW;
    private String lastHalfHourPercentage;
    private String last24HourLocalStartTime;
    private String last24HourLocalEndTime;
    private String last24HourMWh;
    private String last24HourPercentage;
    private String activeFlag;

    public String getBiddingZone() {
        return biddingZone;
    }

    public void setBiddingZone(String biddingZone) {
        this.biddingZone = biddingZone;
    }

    public String getRecordType() {
        return recordType;
    }

    public void setRecordType(String recordType) {
        this.recordType = recordType;
    }

    public String getCurrentMW() {
        return currentMW;
    }

    public void setCurrentMW(String currentMW) {
        this.currentMW = currentMW;
    }

    public String getCurrentPercentage() {
        return currentPercentage;
    }

    public void setCurrentPercentage(String currentPercentage) {
        this.currentPercentage = currentPercentage;
    }

    public String getLastHalfHourLocalStartTime() {
        return lastHalfHourLocalStartTime;
    }

    public void setLastHalfHourLocalStartTime(String lastHalfHourLocalStartTime) {
        this.lastHalfHourLocalStartTime = lastHalfHourLocalStartTime;
    }

    public String getLastHalfHourLocalEndTime() {
        return lastHalfHourLocalEndTime;
    }

    public void setLastHalfHourLocalEndTime(String lastHalfHourLocalEndTime) {
        this.lastHalfHourLocalEndTime = lastHalfHourLocalEndTime;
    }

    public String getLastHalfHourMW() {
        return lastHalfHourMW;
    }

    public void setLastHalfHourMW(String lastHalfHourMW) {
        this.lastHalfHourMW = lastHalfHourMW;
    }

    public String getLastHalfHourPercentage() {
        return lastHalfHourPercentage;
    }

    public void setLastHalfHourPercentage(String lastHalfHourPercentage) {
        this.lastHalfHourPercentage = lastHalfHourPercentage;
    }

    public String getLast24HourLocalStartTime() {
        return last24HourLocalStartTime;
    }

    public void setLast24HourLocalStartTime(String last24HourLocalStartTime) {
        this.last24HourLocalStartTime = last24HourLocalStartTime;
    }

    public String getLast24HourLocalEndTime() {
        return last24HourLocalEndTime;
    }

    public void setLast24HourLocalEndTime(String last24HourLocalEndTime) {
        this.last24HourLocalEndTime = last24HourLocalEndTime;
    }

    public String getLast24HourMWh() {
        return last24HourMWh;
    }

    public void setLast24HourMWh(String last24HourMWh) {
        this.last24HourMWh = last24HourMWh;
    }

    public String getLast24HourPercentage() {
        return last24HourPercentage;
    }

    public void setLast24HourPercentage(String last24HourPercentage) {
        this.last24HourPercentage = last24HourPercentage;
    }

    public String getActiveFlag() {
        return activeFlag;
    }

    public void setActiveFlag(String activeFlag) {
        this.activeFlag = activeFlag;
    }
}
