package mainPackage.elexonRestService.elexonModel;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "total")
public class Total {
    private String currentTotalMW;
    private String currentTotalPercentage;
    private String lastHalfHourTotalMW;
    private String lastHalfHourTotalpercentage;
    private String last24HourTotalMWh;
    private String last24HourTotalPercentage;

    public String getCurrentTotalMW() {
        return currentTotalMW;
    }

    public void setCurrentTotalMW(String currentTotalMW) {
        this.currentTotalMW = currentTotalMW;
    }

    public String getCurrentTotalPercentage() {
        return currentTotalPercentage;
    }

    public void setCurrentTotalPercentage(String currentTotalPercentage) {
        this.currentTotalPercentage = currentTotalPercentage;
    }

    public String getLastHalfHourTotalMW() {
        return lastHalfHourTotalMW;
    }

    public void setLastHalfHourTotalMW(String lastHalfHourTotalMW) {
        this.lastHalfHourTotalMW = lastHalfHourTotalMW;
    }

    public String getLastHalfHourTotalPercentage() {
        return lastHalfHourTotalpercentage;
    }

    public void setLastHalfHourTotalPercentage(String lastHalfHourTotalPercentage) {
        this.lastHalfHourTotalpercentage = lastHalfHourTotalPercentage;
    }

    public String getLast24HourTotalMWh() {
        return last24HourTotalMWh;
    }

    public void setLast24HourTotalMWh(String last24HourTotalMWh) {
        this.last24HourTotalMWh = last24HourTotalMWh;
    }

    public String getLast24HourTotalPercentage() {
        return last24HourTotalPercentage;
    }

    public void setLast24HourTotalPercentage(String last24HourTotalPercentage) {
        this.last24HourTotalPercentage = last24HourTotalPercentage;
    }
}