/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = 
{
    "APP_ID": "wxd2ce9c3637a1b44a",
    "APP_SECRET": "c0b12f369e122bd97ee21659c5389532",
    "IS_SHOW_COLOR": true,
    "CALLBACK_TEMPLATE_ID": "",
    "CALLBACK_USERS": [
        {
            "name": "汪业",
            "id": "oilFW6VDSF4gtpiR_gvFY0vGQYzM"
        }
    ],
    "USERS": [
        {
            "name": "yu",
            "id": "oilFW6VDSF4gtpiR_gvFY0vGQYzM",
            "useTemplateId": "HC1pYQD7t7mWMxb70z7mmaUHgE_VFEqV7cSKQPPePPE",
            "province": "广东省",
            "city": "深圳市",
            "horoscopeDate": "08-25",
            "horoscopeDateType": "今日",
            "openUrl": "https://shuangxunian.github.io/",
            "festivals": [
                {
                    "type": "生日",
                    "name": "生日",
                    "date": "08-05",
                    "year": "2024"
                },
                {
                    "type": "节日",
                    "name": "去阳朔",
                    "date": "09-14",
                    "year": "2024"
                },
                {
                    "type": "节日",
                    "name": "退休",
                    "date": "07-02",
                    "year": "2030"
                }
            ],
             customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-02' }
                 // ,
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ]
        }
    ],
    "SWITCH": {
        "weather": true,
        "holidaytts": true,
        "CIBA": true,
        "oneTalk": false,
        "earthyLoveWords": false,
        "momentCopyrighting": false,
        "poisonChickenSoup": false,
        "poetry": false,
        "horoscope": false,
        "birthdayMessage": true
    }
}


module.exports = USER_CONFIG
