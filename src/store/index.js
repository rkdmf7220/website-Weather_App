import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const API_KEY = "1"

Vue.use(Vuex)

const URL = {
  mediumLandForecast: 'https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?numOfRows=10&pageNo=1',
}

export default new Vuex.Store({
  state: {
    mediumLandForecast: {},
    mediumTemperature: {},
    villageForecast: [],
    windChillTemperature: {},
    ultraviolet: {},
    airQuality: {}
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
    }
  },
  actions: {
    updateMediumLandForecast({commit}, {regId, tmFc}) {
      axios.get(`${URL.mediumLandForecast}&regId=${regId}&tmFc=${tmFc}&dataType=JSON&serviceKey=${API_KEY}`)
          .then(result => {
            console.log("updateMediumLandForecast() response 응답 확인",result)
            if (result.statusText === "OK") {
              let item = result?.data?.response?.body?.items?.item?.[0];

              console.log("updateMediumLandForecast() item", item);
              commit('mediumLandForecast', item || helper.getMediumLandForecastItem())
            }

          })
    },
    updateVillageForecast({commit}, payload) {
      axios.get('https://my-weather-server.herokuapp.com/http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=MFzG02frmQYYfBqpExZRsa8M19660fOWJryWWZHgSYG1RDNihLRj5rM276rXcPZDjM7th9Zm9b6CEWpbn88FNQ%3D%3D&numOfRows=500&pageNo=1&base_date=20220507&base_time=0500&nx=55&ny=127&dataType=JSON')
          .then(result => {
            console.log("단기예보", result, payload)
            commit('villageForecast')
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
  }
}