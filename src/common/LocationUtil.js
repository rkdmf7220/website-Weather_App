import {areaInfo} from "./areaInfo";

const LocationUtil = {
    /**
     *
     * @returns {{isSaved: boolean, station}}
     */
    getLocale() {
        let cityName = localStorage.getItem("cityName")
        let areaNo = localStorage.getItem("areaNo")
        if (cityName) {
            if (areaNo) {
                return {
                    city: areaInfo[cityName],
                    station: areaInfo[cityName].stations.find(item => item.areaNo === areaNo),
                    isSaved: true
                }
            } else {
                return {
                    city: areaInfo.seoul,
                    station: areaInfo.seoul.stations.find(item => item.areaNo === "1168000000"),
                    isSaved: false
                }
            }
        } else {
            return {
                city: areaInfo.seoul,
                station: areaInfo.seoul.stations.find(item => item.areaNo === "1168000000"),
                isSaved: false
            }
        }
    },
    setLocale(selectedCity, selectedStation, callback) {
        localStorage.setItem("cityName", selectedCity)
        localStorage.setItem("areaNo", selectedStation)
        let station = areaInfo[selectedCity].stations.find(item => item.areaNo === selectedStation);
        if (station) {
            callback(station, areaInfo[selectedCity]);
        }
    },
}

export default LocationUtil