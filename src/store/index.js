import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const API_KEY = "MFzG02frmQYYfBqpExZRsa8M19660fOWJryWWZHgSYG1RDNihLRj5rM276rXcPZDjM7th9Zm9b6CEWpbn88FNQ%3D%3D"

Vue.use(Vuex)

const URL = {
  mediumLandForecast: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?numOfRows=10&pageNo=1&dataType=JSON',
  mediumTemperature: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?numOfRows=10&pageNo=1&dataType=JSON',
  villageForecast: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?numOfRows=600&pageNo=1&dataType=JSON',
  windChillTemperature: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getSenTaIdxV2?&requestCode=A41&dataType=JSON',
  ultraviolet: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getUVIdxV2?dataType=JSON',
  airQuality: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?dataTerm=daily&pageNo=1&numOfRows=100&returnType=json&ver=1.0',
  weatherWarn: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/WthrWrnInfoService/getPwnStatus?numOfRows=10&pageNo=1&dataType=JSON',
  sunriseSunset: 'https://api.sunrise-sunset.org/json?'
}

export default new Vuex.Store({
  state: {
    mediumLandForecast: {},
    mediumTemperature: {},
    villageForecast: [],
    windChillTemperature: {},
    ultraviolet: {},
    airQuality: {},
    sunriseSunset: {}
  },
  mutations: {
    mediumLandForecast(state, obj) {
      state.mediumLandForecast = obj
    },
    mediumTemperature(state, obj) {
      state.mediumTemperature = obj
    },
    villageForecast(state, list) {
      state.villageForecast = list
    },
    windChillTemperature(state, data) {
      state.windChillTemperature = data
    },
    ultraviolet(state, data) {
      state.ultraviolet = data
    },
    airQuality(state, data) {
      state.airQuality = data
    },
    weatherWarn(state, data) {
      state.weatherWarn = data
    },
    sunriseSunset(state, data) {
      state.sunriseSunset = data
    }
  },
  actions: {
    updateMediumLandForecast({commit}, {regId, tmFc}) {
      axios.get(`${URL.mediumLandForecast}&regId=${regId}&tmFc=${tmFc}&serviceKey=${API_KEY}`)
          .then(result => {
            // console.log("updateMediumLandForecast() response 응답 확인",result)
            if (result.statusText === "OK") {
              let item = result?.data?.response?.body?.items?.item?.[0];
              // console.log("updateMediumLandForecast() item", item);
              commit('mediumLandForecast', item || helper.getMediumLandForecastItem())
            }
          })
    },
    updateMediumTemperature({commit}, {regId, tmFc}) {
      axios.get(`${URL.mediumTemperature}&regId=${regId}&tmFc=${tmFc}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              // console.log("updateMediumTemperature / 중기기온 = ", result, {regId, tmFc})
              let item = result?.data?.response?.body?.items?.item?.[0];
              commit('mediumTemperature', item || helper.getMediumTemperature())
            }
          })
    },
    updateVillageForecast({commit}, {base_date, base_time, nx, ny}) {
      axios.get(`${URL.villageForecast}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}&serviceKey=${API_KEY}`)
          // axios.get(`https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=MFzG02frmQYYfBqpExZRsa8M19660fOWJryWWZHgSYG1RDNihLRj5rM276rXcPZDjM7th9Zm9b6CEWpbn88FNQ%3D%3D&numOfRows=10&pageNo=1&base_date=20220513&base_time=0500&nx=55&ny=127&dataType=JSON`)
          .then(result => {
            if (result.statusText === "OK") {
              // console.log("단기예보 / updateVillageForecast = ", result)
              // console.log(commit, base_date, base_time, nx, ny)
              let list = result?.data?.response?.body?.items?.item;
              if (list && Array.isArray(list)) {
                // console.log("단기예보 / updateVillageForecast items = ", list)
                commit('villageForecast', list)
              } else {
                // console.log('단기예보 / error', result)
              }
            }
          })
    },
    updateWindChillTemperature({commit}, {areaNo, time}) {
      axios.get(`${URL.windChillTemperature}&areaNo=${areaNo}&time=${time}&serviceKey=${API_KEY}`)
          .then(result => {
            if(result.statusText === "OK") {
              // console.log("체감온도 / windChillTemperature = ", result)
              // console.log("체감온도 / windChillTemperature = ", commit, areaNo, time)
              let item = result?.data?.response?.body?.items?.item?.[0];
              commit('windChillTemperature', item || helper.getWindChillTemperature())
            }
          })
    },
    updateUltraviolet({commit}, {areaNo, time}) {
      axios.get(`${URL.ultraviolet}&areaNo=${areaNo}&time=${time}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              // console.log("자외선지수 / ultraviolet = ", result)
              // console.log(commit)
              let item = result?.data?.response?.body?.items?.item?.[0];
              commit('ultraviolet', item || helper.getWindChillTemperature())
            }
          })
    },
    updateAirQuality({commit}, {stationName}) {
      axios.get(`${URL.airQuality}&stationName=${stationName}&serviceKey=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              // console.log("대기환경 / airQuality", result)
              // console.log(commit)
              let item = result?.data?.response?.body?.items?.[0];
              // console.log("AirQuality item", result?.data?.response?.body?.items?.[0])
              commit('airQuality', item || helper.getAirQuality())
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
            }
          })
    },
    updateSunriseSunset({commit}, {lat, lng, date}) {
      console.log("작동확인")
      axios.get(`${URL.sunriseSunset}lat=${lat}&lng=${lng}&date=${date}`)
          .then(result => {
            if (result.data.status === "OK") {
              let item = result?.data?.results
              console.log("일출일몰 / sunriseSunset", item)
              commit('sunriseSunset', item || helper.getSunriseSunset())
            }
          })
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
  getUltraviolet: () => {
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
  }
}