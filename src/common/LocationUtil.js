import {areaInfo} from "./areaInfo";

const LocationUtil = {
    /**
     *
     * @returns {{isSaved: boolean, station}}
     */
    getLocale() {
        let areaNo = localStorage.getItem("areaNo")
        if (areaNo) {
            return {
                station: areaInfo.seoul.stations.find(item => item.areaNo === areaNo),
                isSaved: true
            }
        } else {
            return {
                station: areaInfo.seoul.stations.find(item => item.areaNo === "1168000000"),
                isSaved: false
            }
        }
    },
    setLocale(selectedStation, callback) {
        localStorage.setItem("areaNo", selectedStation)
        let station = areaInfo.seoul.stations.find(item => item.areaNo === selectedStation);
        if (station) {
            callback(station);
        }
    },
}

export default LocationUtil