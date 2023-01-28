import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from "moment";
const API_KEY = "MFzG02frmQYYfBqpExZRsa8M19660fOWJryWWZHgSYG1RDNihLRj5rM276rXcPZDjM7th9Zm9b6CEWpbn88FNQ%3D%3D"
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

Vue.use(Vuex)

const URL = {
  mediumLandForecast: '/1360000/MidFcstInfoService/getMidLandFcst?numOfRows=10&pageNo=1&dataType=JSON',
  mediumTemperature: '/1360000/MidFcstInfoService/getMidTa?numOfRows=10&pageNo=1&dataType=JSON',
  villageForecast: '/1360000/VilageFcstInfoService_2.0/getVilageFcst?numOfRows=830&pageNo=1&dataType=JSON',
  windChillTemperature: '/1360000/LivingWthrIdxServiceV3/getSenTaIdxV3?requestCode=A41&dataType=JSON',
  ultraviolet: '/1360000/LivingWthrIdxServiceV3/getUVIdxV3?dataType=JSON',
  airQuality: '/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?pageNo=1&numOfRows=150&returnType=json&ver=1.0',
  weatherWarn: '/1360000/WthrWrnInfoService/getPwnStatus?numOfRows=10&pageNo=1&dataType=JSON',
  sunriseSunset: 'https://api.sunrise-sunset.org/json?'
}

export default new Vuex.Store({
  state: {
    areaNo: null,
    cityInfo: null,
    villageForecast: [],
    windChillTemperature: {},
    airInfoList: [
      {
        id: 'pm10',
        title: '미세먼지',
        grade: undefined,
        value: undefined,
        unit: '㎍/㎥'
      },
      {
        id: 'pm25',
        title: '초미세먼지',
        grade: undefined,
        value: undefined,
        unit: '㎍/㎥'
      },
      {
        id: 'o3',
        title: '오존',
        grade: undefined,
        value: undefined,
        unit: 'ppm'
      },
      {
        id: 'ultraviolet',
        title: '자외선',
        grade: undefined,
        value: undefined,
        unit: 'uv'
      }
    ],
    sunriseSunsetList: [
      {
        id: 'today',
        day: '오늘',
        date: moment().format("MM/DD"),
        sunrise: undefined,
        sunset: undefined
      },
      {
        id: 'tomorrow',
        day: '내일',
        date: moment().add(1, 'days').format("MM/DD"),
        sunrise: undefined,
        sunset: undefined
      },
      {
        id: 'after-tomorrow',
        day: '모레',
        date: moment().add(2, 'days').format("MM/DD"),
        sunrise: undefined,
        sunset: undefined
      }
    ],
    weeklyInfoList: [
      {
        id: 'today',
        day: "오늘",
        cloud: undefined,
        rain: undefined,
        minTemperature: undefined,
        maxTemperature: undefined,
        rainfallProbability: undefined
      },
      {
        id: 'tomorrow',
        day: "내일",
        cloud: undefined,
        rain: undefined,
        minTemperature: undefined,
        maxTemperature: undefined,
        rainfallProbability: undefined
      },
      {
        id: '2days-later',
        day: undefined,
        cloud: undefined,
        rain: undefined,
        minTemperature: undefined,
        maxTemperature: undefined,
        rainfallProbability: undefined
      },
      {
        id: '3days-later',
        day: undefined,
        cloud: undefined,
        rain: undefined,
        minTemperature: undefined,
        maxTemperature: undefined,
        rainfallProbability: undefined
      },
      {
        id: '4days-later',
        day: undefined,
        cloud: undefined,
        rain: undefined,
        minTemperature: undefined,
        maxTemperature: undefined,
        rainfallProbability: undefined
      },
      {
        id: '5days-later',
        day: undefined,
        cloud: undefined,
        rain: undefined,
        minTemperature: undefined,
        maxTemperature: undefined,
        rainfallProbability: undefined
      }
    ],
    chartTemperatureList: [],
    chartWindList: [],
    chartRainfallList: [],
    chartHumidityList: [],
    completeCount: 10,
    loadingCount: 0,
    isLoadingLocationData: false
  },
  getters: {
    getCompleteCount(state) {
      return state.completeCount;
    }
  },
  mutations: {
    cityInfo(state, cityInfo) {
      state.cityInfo = cityInfo
    },
    areaNo(state, areaNo) {
      state.areaNo = areaNo
    },
    windChillTemperature(state, data) {
      state.windChillTemperature = data
    },
    weatherWarn(state, data) {
      state.weatherWarn = data
    },
    airInfoList(state, data) {
      state.airInfoList = data
    },
    weeklyInfoList(state, data) {
      state.weeklyInfoList = data
    },
    villageForecast(state, list) {
      state.villageForecast = list
    },
    sunriseSunsetList(state, data) {
      state.sunriseSunsetList = data
    },
    chartTemperatureList(state, data) {
      state.chartTemperatureList = data
    },
    chartWindList(state, data) {
      state.chartWindList = data
    },
    chartRainfallList(state, data) {
      state.chartRainfallList = data
    },
    chartHumidityList(state, data) {
      state.chartHumidityList = data
    },
    increaseLoadingCount(state) {
      state.loadingCount = state.loadingCount + 1;
    },
    resetLoadingCount(state) {
      state.loadingCount = 0
    },
    isLoadingLocationData(state, data) {
      state.isLoadingLocationData = data
    }
  },
  actions: {
    setCityInfo({commit}, cityInfo) {
      commit('cityInfo', cityInfo)
    },
    setAreaNo({commit}, areaNo) {
      commit('areaNo', areaNo)
    },
    updateWindChillTemperature({commit}, {areaNo, time}) {
      axios.get(`${PROXY}${URL.windChillTemperature}&areaNo=${areaNo}&time=${time}&serviceKey=${API_KEY}`)
          .then(result => {
            if(result.status === 200) {
              let item = result?.data?.response?.body?.items?.item?.[0];
              commit('windChillTemperature', item || helper.getWindChillTemperature())
              commit('increaseLoadingCount')
            }
          })
    },
    updateUltraviolet({commit, state}, {areaNo, time}) {
      axios.get(`${PROXY}${URL.ultraviolet}&areaNo=${areaNo}&time=${time}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.status === 200) {
              let item = result?.data?.response?.body?.items?.item?.[0];
              let list = helper.pushUltravioletData(state.airInfoList, item);
              commit('airInfoList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateAirQuality({commit, state}, {searchDate, cityName, stationName}) {
      axios.get(`${PROXY}${URL.airQuality}&searchDate=${searchDate}&sidoName=${cityName}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.status === 200) {
              let item = result?.data?.response?.body?.items;
              let list = helper.pushAirQualityData(state.airInfoList, item, stationName);
              commit('airInfoList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateWeatherWarn({commit}) {
      axios.get(`${PROXY}${URL.weatherWarn}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.status === 200) {
              let item = result?.data?.response?.body?.items?.item?.[0];
              commit('weatherWarn', item || helper.getWeatherWarn())
              commit('increaseLoadingCount')
            }
          })
    },
    updateTodaySunriseSunset({commit, state}, {lat, lng, date}) {
      // console.log("작동확인")
      axios.get(`${URL.sunriseSunset}lat=${lat}&lng=${lng}&date=${date}`)
          .then(result => {
            if (result.data.status === "OK") {
              let item = result?.data?.results
              let list = helper.pushTodaySunriseSunset(state.sunriseSunsetList, item)
              commit('sunriseSunsetList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateTomorrowSunriseSunset({commit, state}, {lat, lng, date}) {
      axios.get(`${URL.sunriseSunset}lat=${lat}&lng=${lng}&date=${date}`)
          .then(result => {
            if (result.data.status === "OK") {
              let item = result?.data?.results
              let list = helper.pushTomorrowSunriseSunset(state.sunriseSunsetList, item)
              commit('sunriseSunsetList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateAfterTomorrowSunriseSunset({commit, state}, {lat, lng, date}) {
      // console.log("작동확인")
      axios.get(`${URL.sunriseSunset}lat=${lat}&lng=${lng}&date=${date}`)
          .then(result => {
            if (result.data.status === "OK") {
              let item = result?.data?.results
              let list = helper.pushAfterTomorrowSunriseSunset(state.sunriseSunsetList, item)
              commit('sunriseSunsetList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateMediumLandForecast({commit, state}, {regId, tmFc}) {
      axios.get(`${PROXY}${URL.mediumLandForecast}&regId=${regId}&tmFc=${tmFc}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.status === 200) {
              let item = result?.data?.response?.body?.items?.item?.[0];
              let list = helper.pushWeeklyDataFromMidLand(state.weeklyInfoList, item)
              commit('weeklyInfoList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateMediumTemperature({commit, state}, {regId, tmFc}) {
      axios.get(`${PROXY}${URL.mediumTemperature}&regId=${regId}&tmFc=${tmFc}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.status === 200) {
              let item = result?.data?.response?.body?.items?.item?.[0];
              let list = helper.pushWeeklyDataFromMidTemp(state.weeklyInfoList, item)
              commit('weeklyInfoList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateVillageForecast({commit, state}, {base_date, base_time, nx, ny}) {
      axios.get(`${PROXY}${URL.villageForecast}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.status === 200) {
              let list = result?.data?.response?.body?.items?.item;
              let filteredList = helper.pushWeeklyDataFromVillage(state.weeklyInfoList, list)
              let chartTemperatureList = helper.pushChartTemperatureData(state.chartTemperatureList, list)
              let chartRainfallList = helper.pushChartRainfallList(state.chartRainfallList, list)
              let chartWindList = helper.pushChartWindList(state.chartWindList, list)
              let chartHumidityList = helper.pushChartHumidityList(state.chartHumidityList, list)
              if (list && Array.isArray(list)) {
                commit('villageForecast', list)
                commit('weeklyInfoList', filteredList)
                commit('chartTemperatureList', chartTemperatureList)
                commit('chartWindList', chartWindList)
                commit('chartRainfallList', chartRainfallList)
                commit('chartHumidityList', chartHumidityList)
                commit('increaseLoadingCount')
              }
            }
          })
    },
    updateLoadingLocationData({commit}, isLoading) {
      commit('isLoadingLocationData', isLoading)
    },
    resetLoadingCount({commit}) {
      commit('resetLoadingCount')
    }
  },
  modules: {
  }
})



const helper = {
  getWindChillTemperature: () => {
    return {
      areaNo: "A41",
      code: "",
      date: "",
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
      h7: "",
      h8: "",
      h9: "",
      h10: "",
      h11: "",
      h12: "",
      h13: "",
      h14: "",
      h15: "",
      h16: "",
      h17: "",
      h18: "",
      h19: "",
      h20: "",
      h21: "",
      h22: "",
      h23: "",
      h24: ""
    }
  },
  getWeatherWarn: () => {
    return {
      other: "",
      t6: "",
      t7: "",
      tmEf: "",
      tmFc: null,
      tmSeq: null
    }
  },
  pushAirQualityData: (airInfoList, data, stationName) => {
    let found = data.find(info => (
        info.stationName === stationName
    ))
    airInfoList.forEach((item, index) => {
      if (index === 0) {
        item.value = found.pm10Value
        item.grade = found.pm10Grade
      } else if (index === 1) {
        item.value = found.pm25Value
        item.grade = found.pm25Grade
      } else if (index === 2) {
        item.value = found.o3Value
        item.grade = found.o3Grade
      }
    })
    return [...airInfoList];
  },
  pushUltravioletData: (airInfoList, data) => {
    let info = airInfoList?.[3];
    if (info) {
      if (data.today !== "") {
        info.value = data.today
        info.grade = data.today
      } else {
        info.value = data.tomorrow
        info.grade = data.tomorrow
      }
    }
    return [...airInfoList]
  },
  pushWeeklyDataFromVillage: (weeklyInfoList, data) => {
    let referenceDate
    function findInfoData(category) {
      let found = data.find(info => (
          info?.category === category &&
          info?.fcstDate === referenceDate
      ))
      return found.fcstValue
    }
    weeklyInfoList.forEach((item, index) => {
      referenceDate = moment().add(index+1, 'days').format("YYYYMMDD")
      if (index <= 1) {
        item.cloud = findInfoData("SKY")
        item.rain = findInfoData("PTY")
        item.minTemperature = Math.round(findInfoData("TMN"))
        item.maxTemperature = Math.round(findInfoData("TMX"))
        item.rainfallProbability = findInfoData("POP")
      }
    })
    return [...weeklyInfoList]
  },
  pushWeeklyDataFromMidLand: (weeklyInfoList, data) => {
    /**
    * @key cloud = 0 === sunny(맑음)
    * @key cloud = 3 === cloudy(구름많음)
    * @key cloud = 3 === overcast(흐림)
    * @key rain = 0 === clear(없음)
    * @key rain = 1 === rain(비)
    * @key rain = 2 === snow(눈)
    * @key rain = 3 === Sleet(비/눈)
    * @key rain = 4 === showers(소나기)
    */

    weeklyInfoList.forEach((item, index) => {
      if (index > 1) {
        item.rainfallProbability = data[`rnSt${index+1}Am`]
        switch (data[`wf${index+1}Am`]) {
          case "맑음":
            item.cloud = "1"
            item.rain = "0"
            break;
          case "소나기":
            item.cloud = "1"
            item.rain = "1"
            break;
          case "비":
            item.cloud = "1"
            item.rain = "1"
            break;
          case "눈":
            item.cloud = "1"
            item.rain = "2"
            break;
          case "비/눈":
            item.cloud = "3"
            item.rain = "3"
            break;
          case "구름많음":
            item.cloud = "3"
            item.rain = "0"
            break;
          case "구름많고 소나기":
            item.cloud = "3"
            item.rain = "1"
            break;
          case "구름많고 비":
            item.cloud = "3"
            item.rain = "1"
            break;
          case "구름많고 눈":
            item.cloud = "3"
            item.rain = "2"
            break;
          case "구름많고 비/눈":
            item.cloud = "3"
            item.rain = "3"
            break;
          case "흐림":
            item.cloud = "4"
            item.rain = "0"
            break;
          case "흐리고 소나기":
            item.cloud = "4"
            item.rain = "1"
            break;
          case "흐리고 비":
            item.cloud = "4"
            item.rain = "1"
            break;
          case "흐리고 눈":
            item.cloud = "4"
            item.rain = "2"
            break;
          case "흐리고 비/눈":
            item.cloud = "4"
            item.rain = "3"
            break;
          default:
        }
      }
    })
    return [...weeklyInfoList]
  },
  pushWeeklyDataFromMidTemp: (weeklyInfoList, data) => {
    weeklyInfoList.forEach((item, index) => {
      if (index > 1) {
        item.day = moment().locale("ko").add(index, 'days').format("dddd")
        item.minTemperature = data[`taMin${index+1}`]
        item.maxTemperature = data[`taMax${index+1}`]
      }
    })
    return [...weeklyInfoList]
  },
  pushTodaySunriseSunset: (sunriseSunsetList, data) => {
    let info = sunriseSunsetList?.[0]
    if (info) {
      info.sunrise = moment(data.sunrise, 'hh:mm a').add(9, 'h').format('HH:mm')
      info.sunset = moment(data.sunset, 'hh:mm a').add(9, 'h').format('HH:mm')
    }
    return [...sunriseSunsetList]
  },
  pushTomorrowSunriseSunset: (sunriseSunsetList, data) => {
    let info = sunriseSunsetList?.[1]
    if (info) {
      info.sunrise = moment(data.sunrise, 'hh:mm a').add(9, 'h').format('HH:mm')
      info.sunset = moment(data.sunset, 'hh:mm a').add(9, 'h').format('HH:mm')
    }
    return [...sunriseSunsetList]
  },
  pushAfterTomorrowSunriseSunset: (sunriseSunsetList, data) => {
    let info = sunriseSunsetList?.[2]
    if (info) {
      info.sunrise = moment(data.sunrise, 'hh:mm a').add(9, 'h').format('HH:mm')
      info.sunset = moment(data.sunset, 'hh:mm a').add(9, 'h').format('HH:mm')
    }
    return [...sunriseSunsetList]
  },

  pushChartTemperatureData: (chartTemperatureList, data) => {
    if (chartTemperatureList !== []) {
      chartTemperatureList = []
    }
    let checkDate;
    let checkTime;
    function findWeatherData (category, checkDate, checkTime) {
      let found = data.find(info => (
        info?.category === category &&
        info?.fcstDate === checkDate &&
        info?.fcstTime === checkTime
      ))
      return found.fcstValue
    }
    for (let i = 0; i < 48; i++) {
      checkDate = moment().add(i, "hour").format("YYYYMMDD")
      checkTime = moment().add(i, "hour").format("HH00")
      let dayAgo
      switch (moment(moment().format("YYYYMMDD")).diff(moment(checkDate), "days")) {
        case 0:
          dayAgo = "today"
          break;
        case -1:
          dayAgo = "tomorrow"
          break;
        case -2:
          dayAgo = "after-tomorrow"
          break;
        default:
      }

      let found = {
        /**
         * @key x = x좌표(index)
         * @key y = 차트의 값(여기선 기온)
         * @key day = 오늘, 내일, 모레 판정
         */
        x: i+1,
        y: findWeatherData("TMP", checkDate, checkTime),
        hour: moment().add(i, "hour").format("HH"),
        cloud: findWeatherData("SKY", checkDate, checkTime),
        rain: findWeatherData("PTY", checkDate, checkTime),
        day: dayAgo
      }
      chartTemperatureList.push(found)
    }
    return [...chartTemperatureList]
  },
  pushChartWindList: (chartWindList, data) => {
    if (chartWindList !== []) {
      chartWindList = []
    }
    let checkDate;
    let checkTime;
    function findWindData (category, checkDate, checkTime) {
      let found = data.find(info => (
          info?.category === category &&
              info?.fcstDate === checkDate &&
              info?.fcstTime === checkTime
      ))
      return found.fcstValue;
    }
    for(let i = 0; i < 48; i++) {
      checkDate = moment().add(i, "hour").format("YYYYMMDD")
      checkTime = moment().add(i, "hour").format("HH00")
      let dayAgo;
      switch (moment(moment().format("YYYYMMDD")).diff(moment(checkDate), "days")) {
        case 0:
          dayAgo = "today"
              break;
        case -1:
          dayAgo = "tomorrow"
              break;
        case -2:
          dayAgo = "after-tomorrow"
              break;
        default:
      }
      let found = {
        x: i + 1,
        y: findWindData("WSD", checkDate, checkTime),
        windDirection: findWindData("VEC", checkDate, checkTime),
        hour: moment().add(i, "hour").format("HH"),
        day: dayAgo
      }
      chartWindList.push(found)
    }
    return [...chartWindList]
  },
  pushChartRainfallList: (chartRainfallList, data) => {
    if (chartRainfallList !== []) {
      chartRainfallList = []
    }
    let checkDate;
    let checkTime;
    function findRainfallValueData(checkDate, checkTime) {
      let value
      let found = data.find(info => (
          info?.category === "PCP" &&
              info?.fcstDate === checkDate &&
              info?.fcstTime === checkTime
      ))
      switch(found.fcstValue) {
        case "강수없음":
          value = "-"
              break;
        case "1.0mm 미만":
          value = "0.1~1"
            break;
        case "30.0~50.0mm":
          value =  "30~50"
            break;
        case "50.mm 이상":
          value = "50~"
            break;
        default:
          value = found.fcstValue.replace("mm","")
      }
      return value
    }
    function findRainfallProbabilityData (checkDate, checkTime) {
      let found = data.find(info => (
          info?.category === "POP" &&
          info?.fcstDate === checkDate &&
          info?.fcstTime === checkTime
      ))
      return found.fcstValue
    }
    for(let i = 0; i < 48; i++) {
      checkDate = moment().add(i, "hour").format("YYYYMMDD")
      checkTime = moment().add(i, "hour").format("HH00")
      let dayAgo;
      switch (moment(moment().format("YYYYMMDD")).diff(moment(checkDate), "days")) {
        case 0:
          dayAgo = "today"
          break;
        case -1:
          dayAgo = "tomorrow"
          break;
        case -2:
          dayAgo = "after-tomorrow"
          break;
        default:
      }
      let found = {
        x: i + 1,
        y: findRainfallValueData(checkDate, checkTime),
        rainfallProbability: findRainfallProbabilityData(checkDate, checkTime),
        hour: moment().add(i, "hour").format("HH"),
        day: dayAgo
      }
      chartRainfallList.push(found)
    }
    return [...chartRainfallList]
  },
  pushChartHumidityList: (chartHumidityList, data) => {
    if (chartHumidityList !== []) {
      chartHumidityList = []
    }
    let checkDate;
    let checkTime;
    function findHumidityData (checkDate, checkTime) {
      let found = data.find(info => (
        info?.category === "REH" &&
        info?.fcstDate === checkDate &&
        info?.fcstTime === checkTime
      ))
      return found.fcstValue
    }

    for(let i = 0; i < 48; i++) {
      checkDate = moment().add(i, "hour").format("YYYYMMDD")
      checkTime = moment().add(i, "hour").format("HH00")
      let dayAgo;
      switch (moment(moment().format("YYYYMMDD")).diff(moment(checkDate), "days")) {
        case 0:
          dayAgo = "today"
              break;
        case -1:
          dayAgo = "tomorrow"
              break;
        case -2:
          dayAgo = "after-tomorrow"
              break;
        default:
      }
      let found = {
        x: i + 1,
        y: findHumidityData(checkDate, checkTime),
        hour: moment().add(i, "hour").format("HH"),
        day: dayAgo
      }
      chartHumidityList.push(found)
    }
    return [...chartHumidityList]
  }
}