import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from "moment";
const API_KEY = "MFzG02frmQYYfBqpExZRsa8M19660fOWJryWWZHgSYG1RDNihLRj5rM276rXcPZDjM7th9Zm9b6CEWpbn88FNQ%3D%3D"

Vue.use(Vuex)

const URL = {
  mediumLandForecast: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?numOfRows=10&pageNo=1&dataType=JSON',
  mediumTemperature: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?numOfRows=10&pageNo=1&dataType=JSON',
  villageForecast: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?numOfRows=830&pageNo=1&dataType=JSON',
  windChillTemperature: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getSenTaIdxV2?requestCode=A41&dataType=JSON',
  ultraviolet: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getUVIdxV2?dataType=JSON',
  airQuality: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?dataTerm=daily&pageNo=1&numOfRows=100&returnType=json&ver=1.0',
  airQuality2: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?pageNo=1&numOfRows=150&returnType=json&ver=1.0',
  weatherWarn: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/WthrWrnInfoService/getPwnStatus?numOfRows=10&pageNo=1&dataType=JSON',
  sunriseSunset: 'https://api.sunrise-sunset.org/json?'
}
/*const URL = {
  mediumLandForecast: 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?numOfRows=10&pageNo=1&dataType=JSON',
  mediumTemperature: 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?numOfRows=10&pageNo=1&dataType=JSON',
  villageForecast: 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?numOfRows=830&pageNo=1&dataType=JSON',
  windChillTemperature: 'http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getSenTaIdxV2?&requestCode=A41&dataType=JSON',
  ultraviolet: 'http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getUVIdxV2?dataType=JSON',
  airQuality: 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?dataTerm=daily&pageNo=1&numOfRows=100&returnType=json&ver=1.0',
  weatherWarn: 'http://apis.data.go.kr/1360000/WthrWrnInfoService/getPwnStatus?numOfRows=10&pageNo=1&dataType=JSON',
  sunriseSunset: 'https://api.sunrise-sunset.org/json?'
}*/

export default new Vuex.Store({
  state: {
    areaNo: null,
    cityInfo: null,
    mediumLandForecast: {},
    mediumTemperature: {},
    villageForecast: [],
    windChillTemperature: {},
    ultraviolet: {},
    airQuality: {},
    airQuality2: {},
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
    sunriseSunset: {},
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
    },/*
    ultraviolet(state, data) {
      state.ultraviolet = data
    },
    airQuality(state, data) {
      state.airQuality = data
    },*/
    weatherWarn(state, data) {
      state.weatherWarn = data
    },
    airInfoList(state, data) {
      state.airInfoList = data
    },
    sunriseSunset(state, data) {
      state.sunriseSunset = data
    },
    weeklyInfoList(state, data) {
      state.weeklyInfoList = data
    },
    mediumLandForecast(state, obj) {
      state.mediumLandForecast = obj
    },
    mediumTemperature(state, obj) {
      state.mediumTemperature = obj
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
      axios.get(`${URL.windChillTemperature}&areaNo=${areaNo}&time=${time}&serviceKey=${API_KEY}`)
          .then(result => {
            if(result.statusText === "OK") {
              // console.log("체감온도 / windChillTemperature = ", result)
              // console.log("체감온도 / windChillTemperature = ", commit, areaNo, time)
              let item = result?.data?.response?.body?.items?.item?.[0];
              commit('windChillTemperature', item || helper.getWindChillTemperature())
              commit('increaseLoadingCount')
            }
          })
    },
    updateUltraviolet({commit, state}, {areaNo, time}) {
      axios.get(`${URL.ultraviolet}&areaNo=${areaNo}&time=${time}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              // console.log("자외선지수 / ultraviolet = ", result)
              // console.log(commit)
              let item = result?.data?.response?.body?.items?.item?.[0];
              let list = helper.pushUltravioletData(state.airInfoList, item);
              commit('airInfoList', list)
              commit('increaseLoadingCount')
              // commit('ultraviolet', item || helper.getUltraviolet())
              // console.log(commit, state)
            }
          })
    },
/*    updateAirQuality({commit, state}, {stationName}) {
      axios.get(`${URL.airQuality}&stationName=${stationName}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              // console.log("대기환경 / airQuality", result)
              // console.log(commit)
              let item = result?.data?.response?.body?.items?.[0];
              // console.log("AirQuality item", item, state.airInfoList)
              let list = helper.pushAirQualityData(state.airInfoList, item);
              commit('airInfoList', list)
              commit('increaseLoadingCount')
              // commit('airQuality', item || helper.getAirQuality())
            }
          })
    },*/
    updateAirQuality({commit, state}, {searchDate, cityName, stationName}) {
      axios.get(`${URL.airQuality2}&searchDate=${searchDate}&sidoName=${cityName}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              // console.log("대기환경 / airQuality", result)
              // console.log(commit)
              let item = result?.data?.response?.body?.items;
              // console.log("AirQuality item", item, state.airInfoList)
              // console.log('item : ', item)
              let list = helper.pushAirQualityData(state.airInfoList, item, stationName);
              commit('airInfoList', list)
              commit('increaseLoadingCount')
              // commit('airQuality', item || helper.getAirQuality())
            }
          })
    },
    updateWeatherWarn({commit}) {
      axios.get(`${URL.weatherWarn}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              // console.log("기상특보 / weatherWarn = ", result)
              // console.log(commit)
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
              // console.log("일출일몰 / sunriseSunset",`${URL.sunriseSunset}lat=${lat}&lng=${lng}&date=${date}`, item)
              let list = helper.pushTodaySunriseSunset(state.sunriseSunsetList, item)
              // commit('sunriseSunset', item || helper.getSunriseSunset())
              commit('sunriseSunsetList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateTomorrowSunriseSunset({commit, state}, {lat, lng, date}) {
      // console.log("작동확인")
      axios.get(`${URL.sunriseSunset}lat=${lat}&lng=${lng}&date=${date}`)
          .then(result => {
            if (result.data.status === "OK") {
              let item = result?.data?.results
              // console.log("일출일몰 / sunriseSunset",`${URL.sunriseSunset}lat=${lat}&lng=${lng}&date=${date}`, item)
              let list = helper.pushTomorrowSunriseSunset(state.sunriseSunsetList, item)
              // commit('sunriseSunset', item || helper.getSunriseSunset())
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
              // console.log("일출일몰 / sunriseSunset",`${URL.sunriseSunset}lat=${lat}&lng=${lng}&date=${date}`, item)
              let list = helper.pushAfterTomorrowSunriseSunset(state.sunriseSunsetList, item)
              // commit('sunriseSunset', item || helper.getSunriseSunset())
              commit('sunriseSunsetList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateMediumLandForecast({commit, state}, {regId, tmFc}) {
      axios.get(`${URL.mediumLandForecast}&regId=${regId}&tmFc=${tmFc}&serviceKey=${API_KEY}`)
          .then(result => {
            // console.log("updateMediumLandForecast() response 응답 확인",result)
            if (result.statusText === "OK") {
              let item = result?.data?.response?.body?.items?.item?.[0];
              // console.log("updateMediumLandForecast() item", item);
              let list = helper.pushWeeklyDataFromMidLand(state.weeklyInfoList, item)
              // commit('mediumLandForecast', item || helper.getMediumLandForecastItem())
              commit('weeklyInfoList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateMediumTemperature({commit, state}, {regId, tmFc}) {
      axios.get(`${URL.mediumTemperature}&regId=${regId}&tmFc=${tmFc}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              // console.log("updateMediumTemperature / 중기기온 = ", result, {regId, tmFc})
              let item = result?.data?.response?.body?.items?.item?.[0];
              let list = helper.pushWeeklyDataFromMidTemp(state.weeklyInfoList, item)
              // commit('mediumTemperature', item || helper.getMediumTemperature())
              commit('weeklyInfoList', list)
              commit('increaseLoadingCount')
            }
          })
    },
    updateVillageForecast({commit, state}, {base_date, base_time, nx, ny}) {
      axios.get(`${URL.villageForecast}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}&serviceKey=${API_KEY}`)
          // axios.get(`https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=MFzG02frmQYYfBqpExZRsa8M19660fOWJryWWZHgSYG1RDNihLRj5rM276rXcPZDjM7th9Zm9b6CEWpbn88FNQ%3D%3D&numOfRows=10&pageNo=1&base_date=20220513&base_time=0500&nx=55&ny=127&dataType=JSON`)
          .then(result => {
            if (result.statusText === "OK") {

              // console.log("단기예보 / updateVillageForecast = ", result)
              // console.log(commit, base_date, base_time, nx, ny)
              let list = result?.data?.response?.body?.items?.item;
              // console.log("단기예보 데이터 확인", list)
              // console.log("villageForecast에서", state.weeklyInfoList)
              let filteredList = helper.pushWeeklyDataFromVillage(state.weeklyInfoList, list)
              let chartTemperatureList = helper.pushChartTemperatureData(state.chartTemperatureList, list)
              let chartRainfallList = helper.pushChartRainfallList(state.chartRainfallList, list)
              let chartWindList = helper.pushChartWindList(state.chartWindList, list)
              let chartHumidityList = helper.pushChartHumidityList(state.chartHumidityList, list)
              // console.log(chartHumidityList)
              // console.log("filteredList", filteredList)
              if (list && Array.isArray(list)) {
                // console.log("단기예보 / updateVillageForecast items = ", list)
                commit('villageForecast', list)
                commit('weeklyInfoList', filteredList)
                commit('chartTemperatureList', chartTemperatureList)
                commit('chartWindList', chartWindList)
                commit('chartRainfallList', chartRainfallList)
                commit('chartHumidityList', chartHumidityList)
                // console.log("state확인", state.chartTemperatureList, chartTemperatureList)
                commit('increaseLoadingCount')
                // console.log(commit)
              } else {
                // console.log('단기예보 / error', result)
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
  getMediumLandForecastItem : () => {
    return {
      regId: null,
      rnSt3Am: null,
      rnSt3Pm: null,
      rnSt4Am: null,
      rnSt4Pm: null,
      rnSt5Am: null,
      rnSt5Pm: null,
      rnSt6Am: null,
      rnSt6Pm: null,
      rnSt7Am: null,
      rnSt7Pm: null,
      rnSt8: null,
      rnSt9: null,
      rnSt10: null,
      wf3Am: "",
      wf3Pm: "",
      wf4Am: "",
      wf4Pm: "",
      wf5Am: "",
      wf5Pm: "",
      wf6Am: "",
      wf6Pm: "",
      wf7Am: "",
      wf7Pm: "",
      wf8: "",
      wf9: "",
      wf10: ""
    }
  },
  getMediumTemperature: () => {
    return {
      regId: null,
      taMin3: null,
      taMin3Low: null,
      taMin3High: null,
      taMax3: null,
      taMax3Low: null,
      taMax3High: null,
      taMin4: null,
      taMin4Low: null,
      taMin4High: null,
      taMax4: null,
      taMax4Low: null,
      taMax4High: null,
      taMin5: null,
      taMin5Low: null,
      taMin5High: null,
      taMax5: null,
      taMax5Low: null,
      taMax5High: null,
      taMin6: null,
      taMin6Low: null,
      taMin6High: null,
      taMax6: null,
      taMax6Low: null,
      taMax6High: null,
      taMin7: null,
      taMin7Low: null,
      taMin7High: null,
      taMax7: null,
      taMax7Low: null,
      taMax7High: null,
      taMin8: null,
      taMin8Low: null,
      taMin8High: null,
      taMax8: null,
      taMax8Low: null,
      taMax8High: null,
      taMin9: null,
      taMin9Low: null,
      taMin9High: null,
      taMax9: null,
      taMax9Low: null,
      taMax9High: null,
      taMin10: null,
      taMin10Low: null,
      taMin10High: null,
      taMax10: null,
      taMax10Low: null,
      taMax10High: null
    }
  },
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
/*  getUltraviolet: () => {
    return {
      areaNo: "",
      code: "A07_1",
      date: "",
      dayaftertomorrow: "",
      today: "",
      tomorrow: "",
      twodaysaftertomorrow: ""
    }
  },
  getAirQuality: () => {
    return {
      coFlag: null,
      coGrade: "",
      coValue: "",
      dataTime: "",
      khaiGrade: "",
      khaiValue: "",
      no2Flag: null,
      no2Grade: "",
      no2Value: "",
      o3Flag: null,
      o3Grade: "",
      o3Value: "",
      pm10Flag: null,
      pm10Grade: "",
      pm10Value: "",
      pm25Flag: null,
      pm25Grade: "",
      pm25Value: "",
      so2Flag: null,
      so2Grade: "",
      so2Value: ""
    }
  },*/
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
  getSunriseSunset: () => {
    return {
      sunrise: "",
      sunset: "",
      solar_noon: "",
      day_length: "",
      civil_twilight_begin: "",
      civil_twilight_end: "",
      nautical_twilight_begin: "",
      nautical_twilight_end: "",
      astronomical_twilight_begin: "",
      astronomical_twilight_end: ""
    }
  },
/*  pushAirQualityData: (airInfoList, data) => {
    airInfoList.forEach((item, index) => {
      if (index === 0) {
        item.value = data.pm10Value
        item.grade = data.pm10Grade
      } else if (index === 1) {
        item.value = data.pm25Value
        item.grade = data.pm25Grade
      } else if (index === 2) {
        item.value = data.o3Value
        item.grade = data.o3Grade
      }
    })
    return [...airInfoList];
  },*/
  pushAirQualityData: (airInfoList, data, stationName) => {
    // console.log('stationName = ', stationName)
    let found = data.find(info => (
        info.stationName === stationName
    ))
    // console.log('공기 데이터 found = ', found)
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
/*  pushAirQualityData: (airInfoList, data) => {
    let found = []
    data.forEach((item) => {
      found.push(item.stationName)
    })
    console.log('found stationName', found)
/!*    airInfoList.forEach((item, index) => {
      if (index === 0) {
        item.value = data.pm10Value
        item.grade = data.pm10Grade
      } else if (index === 1) {
        item.value = data.pm25Value
        item.grade = data.pm25Grade
      } else if (index === 2) {
        item.value = data.o3Value
        item.grade = data.o3Grade
      }
    })*!/
    return [...airInfoList];
  },*/
  pushUltravioletData: (airInfoList, data) => {
    let info = airInfoList?.[3];
    if (info) {
      info.value = data.today
      info.grade = data.today
    }
    /*airInfoList.forEach((item, index) => {
      if (index === 3) {
        item.value = data.today
        item.grade = data.today
      }
    })*/
    return [...airInfoList]
  },
  pushWeeklyDataFromVillage: (weeklyInfoList, data) => {
    let referenceDate
    // console.log("push확인", weeklyInfoList, data)
    function findInfoData(category) {
      let found = data.find(info => (
          info?.category === category &&
          // info.fcstTime === referenceTime &&
          info?.fcstDate === referenceDate
      ))
      // console.log("함수작동확인",index," : ", category, found)
      // console.log("결과확인", found.fcstValue)
      // console.log("found", found)
      // console.log("found fcstValue", found.fcstValue)
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
    // console.log('pushWeeklyDataFromMidLand', weeklyInfoList)
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
        // item.cloud = data[`wf${index+1}Am`]
        // item.rain = data[`wf${index+1}Am`]
        item.rainfallProbability = data[`rnSt${index+1}Am`]
        // console.log("wf${index+1}Am", data[`wf${index+1}Am`])
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
    // console.log("정보 확인", chartTemperatureList, data)
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
    // console.log("chart 기온 정보", chartTemperatureList)
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
      // console.log("category : ", category, "found :", found)
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