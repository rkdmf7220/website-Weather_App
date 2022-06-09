/*export const getAreaInfo = (city, local) => {
    let areaInfo = {
        seoul: {
            cityName: "서울특별시",
            code: "11B10101",
            gangnam: {
                stationName: "강남구",
                nx: "61",
                ny: "126",
                areaNo: "1168000000",
                lat: 37.514575,
                lng: 127.0495555
            },
            gangdong: {
                stationName: "강동구",
                nx: "62",
                ny: "126",
                areaNo: "1174000000",
                lat: 37.52736667,
                lng: 127.1258639
            },
            gangbuk: {
                stationName: "강북구",
                nx: "61",
                ny: "128",
                areaNo: "1130500000",
                lat: 37.63695556,
                lng: 127.0277194
            },
            gangseo: {
                stationName: "강서구",
                nx: "58",
                ny: "126",
                areaNo: "1150000000",
                lat: 37.54815556,
                lng: 126.851675
            },
            someArea: {
                stationName: "",
                nx: "",
                ny: "",
                areaNo: "",
                lat: 2,
                lng: 1
            }
        }
    }
    return [areaInfo[city].code, areaInfo[city].cityName, areaInfo[city][local]]
}*/
export const areaInfo = {
        seoul: {
            cityId: 'seoul',
            cityName: "서울특별시",
            landRegId: "11B00000",
            temperatureRegId: "11B10101",
            stations: [
                {
                    stationName: "강남구",
                    nx: "61",
                    ny: "126",
                    areaNo: "1168000000",
                    lat: 37.514575,
                    lng: 127.0495555
                },
                {
                    stationName: "강동구",
                    nx: "62",
                    ny: "126",
                    areaNo: "1174000000",
                    lat: 37.52736667,
                    lng: 127.1258639
                },
                {
                    stationName: "강북구",
                    nx: "61",
                    ny: "128",
                    areaNo: "1130500000",
                    lat: 37.63695556,
                    lng: 127.0277194
                },
                {
                    stationName: "강서구",
                    nx: "58",
                    ny: "126",
                    areaNo: "1150000000",
                    lat: 37.54815556,
                    lng: 126.851675
                },
                {
                    stationName: "관악구",
                    nx: "59",
                    ny: "125",
                    areaNo: "1162000000",
                    lat: 37.47538611,
                    lng: 126.95384444
                },
                {
                    stationName: "광진구",
                    nx: "62",
                    ny: "126",
                    areaNo: "1121500000",
                    lat: 37.53573888,
                    lng: 127.08453333
                },
                {
                    stationName: "구로구",
                    nx: "58",
                    ny: "125",
                    areaNo: "1153000000",
                    lat: 37.49265,
                    lng: 126.88959722
                },
                {
                    stationName: "금천구",
                    nx: "59",
                    ny: "124",
                    areaNo: "1154500000",
                    lat: 37.44910833,
                    lng: 126.90419722
                },
                {
                    stationName: "노원구",
                    nx: "61",
                    ny: "129",
                    areaNo: "1135000000",
                    lat: 37.65146111,
                    lng: 127.05838888
                },
                {
                    stationName: "도봉구",
                    nx: "61",
                    ny: "129",
                    areaNo: "1132000000",
                    lat: 37.66583333,
                    lng: 127.04952222222222
                },
                {
                    stationName: "동대문구",
                    nx: "61",
                    ny: "127",
                    areaNo: "1123000000",
                    lat: 37.57162500,
                    lng: 127.04214166
                },
                {
                    stationName: "동작구",
                    nx: "59",
                    ny: "125",
                    areaNo: "1159000000",
                    lat: 37.50965555,
                    lng: 126.941575
                },
                {
                    stationName: "마포구",
                    nx: "59",
                    ny: "127",
                    areaNo: "1144000000",
                    lat: 37.56070555,
                    lng: 126.91053055
                },
                {
                    stationName: "서대문구",
                    nx: "59",
                    ny: "127",
                    areaNo: "1141000000",
                    lat: 37.57636666,
                    lng: 126.93889722
                },
                {
                    stationName: "서초구",
                    nx: "61",
                    ny: "125",
                    areaNo: "1165000000",
                    lat: 37.48078611,
                    lng: 127.03481111
                },
                {
                    stationName: "성동구",
                    nx: "61",
                    ny: "127",
                    areaNo: "1120000000",
                    lat: 37.56061111,
                    lng: 127.039
                },
                {
                    stationName: "성북구",
                    nx: "61",
                    ny: "127",
                    areaNo: "1129000000",
                    lat: 37.58638333,
                    lng: 127.02033333
                },
                {
                    stationName: "송파구",
                    nx: "62",
                    ny: "126",
                    areaNo: "1171000000",
                    lat: 37.51175555,
                    lng: 127.10793055
                },
                {
                    stationName: "양천구",
                    nx: "58",
                    ny: "126",
                    areaNo: "1147000000",
                    lat: 37.51423055,
                    lng: 126.86870833
                },
                {
                    stationName: "영등포구",
                    nx: "58",
                    ny: "126",
                    areaNo: "1156000000",
                    lat: 37.52361111,
                    lng: 126.89834166
                },
                {
                    stationName: "용산구",
                    nx: "60",
                    ny: "126",
                    areaNo: "1117000000",
                    lat: 37.53609444,
                    lng: 126.96752222
                },
                {
                    stationName: "은평구",
                    nx: "59",
                    ny: "127",
                    areaNo: "1138000000",
                    lat: 37.59996944,
                    lng: 126.93124166
                },
                {
                    stationName: "종로구",
                    nx: "60",
                    ny: "127",
                    areaNo: "1111000000",
                    lat: 37.57037777,
                    lng: 126.98164166
                },
                {
                    stationName: "중구",
                    nx: "60",
                    ny: "127",
                    areaNo: "1114000000",
                    lat: 37.56100277,
                    lng: 126.99964166
                },
                {
                    stationName: "중랑구",
                    nx: "62",
                    ny: "128",
                    areaNo: "1126000000",
                    lat: 37.60380555,
                    lng: 127.09477777
                }/*,
                {
                    stationName: "",
                    nx: "",
                    ny: "",
                    areaNo: "",
                    lat: 2,
                    lng: 1
                }*/
            ]
        }
}
