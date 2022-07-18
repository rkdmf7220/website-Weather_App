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
            sidoName: "서울",
            landRegId: "11B00000",
            stations: [
                {
                    stationName: "강남구",
                    airStation: "강남구",
                    temperatureRegId: "11B10101",
                    nx: "61",
                    ny: "126",
                    areaNo: "1168000000",
                    lat: 37.514575,
                    lng: 127.0495555
                },
                {
                    stationName: "강동구",
                    airStation: "강동구",
                    temperatureRegId: "11B10101",
                    nx: "62",
                    ny: "126",
                    areaNo: "1174000000",
                    lat: 37.52736667,
                    lng: 127.1258639
                },
                {
                    stationName: "강북구",
                    airStation: "강북구",
                    temperatureRegId: "11B10101",
                    nx: "61",
                    ny: "128",
                    areaNo: "1130500000",
                    lat: 37.63695556,
                    lng: 127.0277194
                },
                {
                    stationName: "강서구",
                    airStation: "강서구",
                    temperatureRegId: "11B10101",
                    nx: "58",
                    ny: "126",
                    areaNo: "1150000000",
                    lat: 37.54815556,
                    lng: 126.851675
                },
                {
                    stationName: "관악구",
                    airStation: "관악구",
                    temperatureRegId: "11B10101",
                    nx: "59",
                    ny: "125",
                    areaNo: "1162000000",
                    lat: 37.47538611,
                    lng: 126.95384444
                },
                {
                    stationName: "광진구",
                    airStation: "광진구",
                    temperatureRegId: "11B10101",
                    nx: "62",
                    ny: "126",
                    areaNo: "1121500000",
                    lat: 37.53573888,
                    lng: 127.08453333
                },
                {
                    stationName: "구로구",
                    airStation: "구로구",
                    temperatureRegId: "11B10101",
                    nx: "58",
                    ny: "125",
                    areaNo: "1153000000",
                    lat: 37.49265,
                    lng: 126.88959722
                },
                {
                    stationName: "금천구",
                    airStation: "금천구",
                    temperatureRegId: "11B10101",
                    nx: "59",
                    ny: "124",
                    areaNo: "1154500000",
                    lat: 37.44910833,
                    lng: 126.90419722
                },
                {
                    stationName: "노원구",
                    airStation: "노원구",
                    temperatureRegId: "11B10101",
                    nx: "61",
                    ny: "129",
                    areaNo: "1135000000",
                    lat: 37.65146111,
                    lng: 127.05838888
                },
                {
                    stationName: "도봉구",
                    airStation: "도봉구",
                    temperatureRegId: "11B10101",
                    nx: "61",
                    ny: "129",
                    areaNo: "1132000000",
                    lat: 37.66583333,
                    lng: 127.04952222222222
                },
                {
                    stationName: "동대문구",
                    airStation: "동대문구",
                    temperatureRegId: "11B10101",
                    nx: "61",
                    ny: "127",
                    areaNo: "1123000000",
                    lat: 37.57162500,
                    lng: 127.04214166
                },
                {
                    stationName: "동작구",
                    airStation: "동작구",
                    temperatureRegId: "11B10101",
                    nx: "59",
                    ny: "125",
                    areaNo: "1159000000",
                    lat: 37.50965555,
                    lng: 126.941575
                },
                {
                    stationName: "마포구",
                    airStation: "마포구",
                    temperatureRegId: "11B10101",
                    nx: "59",
                    ny: "127",
                    areaNo: "1144000000",
                    lat: 37.56070555,
                    lng: 126.91053055
                },
                {
                    stationName: "서대문구",
                    airStation: "서대문구",
                    temperatureRegId: "11B10101",
                    nx: "59",
                    ny: "127",
                    areaNo: "1141000000",
                    lat: 37.57636666,
                    lng: 126.93889722
                },
                {
                    stationName: "서초구",
                    airStation: "서초구",
                    temperatureRegId: "11B10101",
                    nx: "61",
                    ny: "125",
                    areaNo: "1165000000",
                    lat: 37.48078611,
                    lng: 127.03481111
                },
                {
                    stationName: "성동구",
                    airStation: "성동구",
                    temperatureRegId: "11B10101",
                    nx: "61",
                    ny: "127",
                    areaNo: "1120000000",
                    lat: 37.56061111,
                    lng: 127.039
                },
                {
                    stationName: "성북구",
                    airStation: "성북구",
                    temperatureRegId: "11B10101",
                    nx: "61",
                    ny: "127",
                    areaNo: "1129000000",
                    lat: 37.58638333,
                    lng: 127.02033333
                },
                {
                    stationName: "송파구",
                    airStation: "송파구",
                    temperatureRegId: "11B10101",
                    nx: "62",
                    ny: "126",
                    areaNo: "1171000000",
                    lat: 37.51175555,
                    lng: 127.10793055
                },
                {
                    stationName: "양천구",
                    airStation: "양천구",
                    temperatureRegId: "11B10101",
                    nx: "58",
                    ny: "126",
                    areaNo: "1147000000",
                    lat: 37.51423055,
                    lng: 126.86870833
                },
                {
                    stationName: "영등포구",
                    airStation: "영등포구",
                    temperatureRegId: "11B10101",
                    nx: "58",
                    ny: "126",
                    areaNo: "1156000000",
                    lat: 37.52361111,
                    lng: 126.89834166
                },
                {
                    stationName: "용산구",
                    airStation: "용산구",
                    temperatureRegId: "11B10101",
                    nx: "60",
                    ny: "126",
                    areaNo: "1117000000",
                    lat: 37.53609444,
                    lng: 126.96752222
                },
                {
                    stationName: "은평구",
                    airStation: "은평구",
                    temperatureRegId: "11B10101",
                    nx: "59",
                    ny: "127",
                    areaNo: "1138000000",
                    lat: 37.59996944,
                    lng: 126.93124166
                },
                {
                    stationName: "종로구",
                    airStation: "종로구",
                    temperatureRegId: "11B10101",
                    nx: "60",
                    ny: "127",
                    areaNo: "1111000000",
                    lat: 37.57037777,
                    lng: 126.98164166
                },
                {
                    stationName: "중구",
                    airStation: "중구",
                    temperatureRegId: "11B10101",
                    nx: "60",
                    ny: "127",
                    areaNo: "1114000000",
                    lat: 37.56100277,
                    lng: 126.99964166
                },
                {
                    stationName: "중랑구",
                    airStation: "중랑구",
                    temperatureRegId: "11B10101",
                    nx: "62",
                    ny: "128",
                    areaNo: "1126000000",
                    lat: 37.60380555,
                    lng: 127.09477777
                }/*,
                {
                    stationName: "",
                    airStation: "",
                    landRegId: "",
                    temperatureRegId: "",
                    nx: "",
                    ny: "",
                    areaNo: "",
                    lat: 2,
                    lng: 1
                }*/
            ]
        },
        gyeonggi: {
            cityId: 'gyeonggi',
            cityName: "경기도",
            sidoName: "경기",
            landRegId: "11B00000",
            stations: [
                {
                    stationName: "가평군",
                    airStation: "가평",
                    temperatureRegId: "11B20404",
                    nx: "69",
                    ny: "133",
                    areaNo: "4128100000",
                    lat: 37.828830556,
                    lng: 127.511777777
                },
                {
                    stationName: "고양시",
                    airStation: "고읍",
                    temperatureRegId: "11B20302",
                    nx: "57",
                    ny: "128",
                    areaNo: "4128100000",
                    lat: 37.63458333,
                    lng: 126.83419722
                },
                {
                    stationName: "과천시",
                    airStation: "과천동",
                    temperatureRegId: "11B10102",
                    nx: "60",
                    ny: "124",
                    areaNo: "4129000000",
                    lat: 37.42637222,
                    lng: 126.9898
                },
                {
                    stationName: "광명시",
                    airStation: "철산동",
                    temperatureRegId: "11B10103",
                    nx: "58",
                    ny: "125",
                    areaNo: "4121000000",
                    lat: 37.47575000,
                    lng: 126.86670833
                },
                {
                    stationName: "광주시",
                    airStation: "경안동",
                    temperatureRegId: "11B20702",
                    nx: "65",
                    ny: "123",
                    areaNo: "4161000000",
                    lat: 37.41450555,
                    lng: 127.25778611
                },
                {
                    stationName: "구리시",
                    airStation: "교문동",
                    temperatureRegId: "11B20501",
                    nx: "62",
                    ny: "127",
                    areaNo: "4131000000",
                    lat: 37.591625,
                    lng: 127.13186388
                },
                {
                    stationName: "군포시",
                    airStation: "산본동",
                    temperatureRegId: "11B20610",
                    nx: "59",
                    ny: "122",
                    areaNo: "4141000000",
                    lat: 37.35865833,
                    lng: 126.9375
                },
                {
                    stationName: "김포시",
                    airStation: "사우동",
                    temperatureRegId: "11B20102",
                    nx: "55",
                    ny: "128",
                    areaNo: "4157000000",
                    lat: 37.61245833,
                    lng: 126.71777777
                },
                {
                    stationName: "남양주시",
                    airStation: "금곡동",
                    temperatureRegId: "11B20502",
                    nx: "64",
                    ny: "128",
                    areaNo: "4136000000",
                    lat: 37.63317777,
                    lng: 127.21863333
                },
                {
                    stationName: "동두천시",
                    airStation: "보산동",
                    temperatureRegId: "11B20401",
                    nx: "61",
                    ny: "134",
                    areaNo: "4125000000",
                    lat: 37.90091666,
                    lng: 127.06265277
                },
                {
                    stationName: "부천시",
                    airStation: "중2동",
                    temperatureRegId: "11B20204",
                    nx: "56",
                    ny: "125",
                    areaNo: "4119000000",
                    lat: 37.5035917,
                    lng: 126.766
                },
                {
                    stationName: "성남시",
                    airStation: "성남대로(모란역)",
                    temperatureRegId: "11B20605",
                    nx: "62",
                    ny: "123",
                    areaNo: "4113500000",
                    lat: 37.37996944,
                    lng: 127.12101944
                },
                {
                    stationName: "수원시",
                    airStation: "천천동",
                    temperatureRegId: "11B20601",
                    nx: "60",
                    ny: "121",
                    areaNo: "4111100000",
                    lat: 37.30101111,
                    lng: 127.01222222
                },
                {
                    stationName: "시흥시",
                    airStation: "장현동",
                    temperatureRegId: "11B20202",
                    nx: "57",
                    ny: "123",
                    areaNo: "4139000000",
                    lat: 37.37731944,
                    lng: 126.80507777
                },
                {
                    stationName: "안산시",
                    airStation: "고잔동",
                    temperatureRegId: "11B20203",
                    nx: "57",
                    ny: "121",
                    areaNo: "4127300000",
                    lat: 37.31672777,
                    lng: 126.81441944
                },
                {
                    stationName: "안성시",
                    airStation: "봉산동",
                    temperatureRegId: "11B20611",
                    nx: "65",
                    ny: "115",
                    areaNo: "4155000000",
                    lat: 37.005175,
                    lng: 127.28184444
                },
                {
                    stationName: "안양시",
                    airStation: "부림동",
                    temperatureRegId: "11B20602",
                    nx: "59",
                    ny: "123",
                    areaNo: "4117300000",
                    lat: 37.3897,
                    lng: 126.953355555
                },
                {
                    stationName: "양주시",
                    airStation: "백석읍",
                    temperatureRegId: "11B20304",
                    nx: "61",
                    ny: "131",
                    areaNo: "4163000000",
                    lat: 37.78245,
                    lng: 127.04781944
                },
                {
                    stationName: "양평군",
                    airStation: "양평읍",
                    temperatureRegId: "11B20503",
                    nx: "69",
                    ny: "125",
                    areaNo: "4183000000",
                    lat: 37.48893611,
                    lng: 127.48988611
                },
                {
                    stationName: "여주시",
                    airStation: "중앙동(경기)",
                    temperatureRegId: "11B20703",
                    nx: "71",
                    ny: "121",
                    areaNo: "4167000000",
                    lat: 37.29535833,
                    lng: 127.63962222
                },
                {
                    stationName: "연천군",
                    airStation: "연천",
                    temperatureRegId: "11B20402",
                    nx: "61",
                    ny: "138",
                    areaNo: "4180000000",
                    lat: 38.09336388,
                    lng: 127.07706666
                },
                {
                    stationName: "오산시",
                    airStation: "오산동",
                    temperatureRegId: "11B20603",
                    nx: "62",
                    ny: "118",
                    areaNo: "4137000000",
                    lat: 37.14691388,
                    lng: 127.07964166
                },
                {
                    stationName: "용인시",
                    airStation: "김량장동",
                    temperatureRegId: "11B20612",
                    nx: "64",
                    ny: "119",
                    areaNo: "4146100000",
                    lat: 37.23147777,
                    lng: 127.20384444
                },
                {
                    stationName: "의왕시",
                    airStation: "고천동",
                    temperatureRegId: "11B20609",
                    nx: "60",
                    ny: "122",
                    areaNo: "4143000000",
                    lat: 37.34195000,
                    lng: 126.97038888
                },
                {
                    stationName: "의정부시",
                    airStation: "의정부동",
                    temperatureRegId: "11B20301",
                    nx: "61",
                    ny: "130",
                    areaNo: "4115000000",
                    lat: 37.73528888,
                    lng: 127.03584166
                },
                {
                    stationName: "이천시",
                    airStation: "창전동",
                    temperatureRegId: "11B20701",
                    nx: "68",
                    ny: "121",
                    areaNo: "4150000000",
                    lat: 37.27543611,
                    lng: 127.44321944
                },
                {
                    stationName: "파주시",
                    airStation: "금촌동",
                    temperatureRegId: "11B20305",
                    nx: "56",
                    ny: "131",
                    areaNo: "4148000000",
                    lat: 37.75708333,
                    lng: 126.78195277
                },
                {
                    stationName: "평택시",
                    airStation: "비전동",
                    temperatureRegId: "11B20606",
                    nx: "62",
                    ny: "114",
                    areaNo: "4122000000",
                    lat: 36.98943888,
                    lng: 127.11465555
                },
                {
                    stationName: "포천시",
                    airStation: "선단동",
                    temperatureRegId: "11B20403",
                    nx: "64",
                    ny: "134",
                    areaNo: "4165000000",
                    lat: 37.89215555,
                    lng: 127.20241944
                },
                {
                    stationName: "하남시",
                    airStation: "미사",
                    temperatureRegId: "11B20504",
                    nx: "64",
                    ny: "126",
                    areaNo: "4145000000",
                    lat: 37.53649722,
                    lng: 127.217
                },
                {
                    stationName: "화성시",
                    airStation: "남양읍",
                    temperatureRegId: "11B20604",
                    nx: "57",
                    ny: "119",
                    areaNo: "4159000000",
                    lat: 37.19681666,
                    lng: 126.83353055
                }
                /*,
                {
                    stationName: "",
                    airStation: "",
                    temperatureRegId: "",
                    nx: "",
                    ny: "",
                    areaNo: "",
                    lat: 2,
                    lng: 1
                }*/
            ]
        },
        incheon: {
            cityId: 'incheon',
            cityName: "인천광역시",
            sidoName: "인천",
            landRegId: "11B00000",
            stations: [
                {
                    stationName: "강화군",
                    airStation: "길상",
                    temperatureRegId: "11B20101",
                    nx: "51",
                    ny: "130",
                    areaNo: "2871000000",
                    lat: 37.74385833,
                    lng: 126.49
                },
                {
                    stationName: "계양구",
                    airStation: "계산",
                    temperatureRegId: "11B20201",
                    nx: "56",
                    ny: "126",
                    areaNo: "2824500000",
                    lat: 37.53479166,
                    lng: 126.73975277
                },
                {
                    stationName: "남동구",
                    airStation: "구월동",
                    temperatureRegId: "11B20201",
                    nx: "56",
                    ny: "124",
                    areaNo: "2820000000",
                    lat: 37.44451944,
                    lng: 126.73379722
                },
                {
                    stationName: "동구",
                    airStation: "송현",
                    temperatureRegId: "11B20201",
                    nx: "54",
                    ny: "125",
                    areaNo: "2814000000",
                    lat: 37.47103611,
                    lng: 126.64536666
                },
                {
                    stationName: "미추홀구",
                    airStation: "주안",
                    temperatureRegId: "11B20201",
                    nx: "54",
                    ny: "124",
                    areaNo: "2817700000",
                    lat: 37.46068055,
                    lng: 126.65268611
                },
                {
                    stationName: "부평구",
                    airStation: "부평",
                    temperatureRegId: "11B20201",
                    nx: "55",
                    ny: "125",
                    areaNo: "2823700000",
                    lat: 37.50426666,
                    lng: 126.7241
                },
                {
                    stationName: "서구",
                    airStation: "연희",
                    temperatureRegId: "11B20201",
                    nx: "55",
                    ny: "126",
                    areaNo: "2826000000",
                    lat: 37.54269166,
                    lng: 126.6782
                },
                {
                    stationName: "연수구",
                    airStation: "동춘",
                    temperatureRegId: "11B20201",
                    nx: "55",
                    ny: "123",
                    areaNo: "2818500000",
                    lat: 37.40712222,
                    lng: 126.68044166
                },
                {
                    stationName: "옹진군",
                    airStation: "영흥",
                    temperatureRegId: "11B20201",
                    nx: "54",
                    ny: "124",
                    areaNo: "2872000000",
                    lat: 37.44372499,
                    lng: 126.63888888
                },
                {
                    stationName: "중구",
                    airStation: "인천항",
                    temperatureRegId: "11B20201",
                    nx: "54",
                    ny: "125",
                    areaNo: "2811000000",
                    lat: 37.47093333,
                    lng: 126.62356666
                }
            ]
        }
}
