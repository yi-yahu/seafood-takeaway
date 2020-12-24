
/**
 * 假设这是服务器获取的数据
 */

const constants = [
  {
    "id": "id1",
    "name": "🎉每日特价",
    "describe": "一毛钱就能吃大餐",
    "category": [
      {
        "categoryId": 1,
        "categoryName": "category1",
        "num":0,
      },
      {
        "categoryId": 2,
        "categoryName": "category2",
        "num": 0,
      },
      {
        "categoryId": 3,
        "categoryName": "category3",
        "num": 0,
      }
    ],
  },
  {
    "id": "id2",
    "name": "🍔招牌美食",
    "describe": "店长极力推荐这几种美食",
    "category": [
      {
        "categoryId": 4,
        "categoryName": "category4",
        "num": 0,
      },
      {
        "categoryId": 5,
        "categoryName": "category5",
        "num": 0,
      },
      {
        "categoryId": 6,
        "categoryName": "category6",
        "num": 0,
      },
      {
        "categoryId": 7,
        "categoryName": "category7",
        "num": 0,
      },
      {
        "categoryId": 8,
        "categoryName": "category8",
        "num": 0,
      }, {
        "categoryId": 9,
        "categoryName": "category9",
        "num": 0,
      },
      {
        "categoryId": 10,
        "categoryName": "category10",
        "num": 0,
      },
      {
        "categoryId": 11,
        "categoryName": "category11",
        "num": 0,
      },
      {
        "categoryId": 12,
        "categoryName": "category12",
        "num": 0,
      },
      {
        "categoryId": 13,
        "categoryName": "category13",
        "num": 0,
      },
      {
        "categoryId": 14,
        "categoryName": "category14",
        "num": 0,
      },
      {
        "categoryId": 15,
        "categoryName": "category15",
        "num": 0,
      },
      {
        "categoryId": 16,
        "categoryName": "category16",
        "num": 0,
      },
    ]
  },
  {
    "id": "id3",
    "name": "🍷清爽饮品",
    "describe": "炎炎夏日有它就够了",
    "category": [
      {
        "categoryId": 17,
        "categoryName": "category17",
        "num": 0,
      },
      {
        "categoryId": 18,
        "categoryName": "category18",
        "num": 0,
      },
      {
        "categoryId": 19,
        "categoryName": "category19",
        "num": 0,
      }
    ],
  },
  {
    "id": "id4",
    "name": "🙌情侣套餐",
    "describe": "不多不少刚刚好",
    "category": [
      {
        "categoryId": 20,
        "categoryName": "category20",
        "num": 0,
      },
      {
        "categoryId": 21,
        "categoryName": "category21",
        "num": 0,
      },
      {
        "categoryId": 22,
        "categoryName": "category22",
        "num": 0,
      },
      {
        "categoryId": 23,
        "categoryName": "category23",
        "num": 0,
      },
      {
        "categoryId": 24,
        "categoryName": "category24",
        "num": 0,
      },
      {
        "categoryId": 25,
        "categoryName": "category25",
        "num": 0,
      },
      {
        "categoryId": 26,
        "categoryName": "category26",
        "num": 0,
      },
      {
        "categoryId": 27,
        "categoryName": "category27",
        "num": 0,
      },
      {
        "categoryId": 28,
        "categoryName": "category28",
        "num": 0,
      },
      {
        "categoryId": 29,
        "categoryName": "category29",
        "num": 0,
      },
      {
        "categoryId": 30,
        "categoryName": "category30",
        "num": 0,
      },
      {
        "categoryId": 31,
        "categoryName": "category31",
        "num": 0,
      },
      {
        "categoryId": 32,
        "categoryName": "category32",
        "num": 0,
      }
    ],
  },
  {
    "id": "id5",
    "name": "🥚单人套餐",
    "describe": "慢慢一大份足够吃",
    "category": [
      {
        "categoryId": 33,
        "categoryName": "category33",
        "num": 0,
      },
      {
        "categoryId": 34,
        "categoryName": "category34",
        "num": 0,
      },
      {
        "categoryId": 35,
        "categoryName": "category35",
        "num": 0,
      }
    ],
  },
  {
    "id": "id6",
    "name": "🧀浓郁披萨",
    "describe": "这口感非常棒",
    "category": [
      {
        "categoryId": 36,
        "categoryName": "category36",
        "num": 0,
      },
      {
        "categoryId": 37,
        "categoryName": "category37",
        "num": 0,
      },
      {
        "categoryId": 38,
        "categoryName": "category38",
        "num": 0,
      }
    ],
  },
  {
    "id": "id7",
    "name": "🍲主食区域",
    "describe": "家常主食啥都有",
    "category": [
      {
        "categoryId": 39,
        "categoryName": "category39",
        "num": 0,
      },
      {
        "categoryId": 40,
        "categoryName": "category40",
        "num": 0,
      },
      {
        "categoryId": 41,
        "categoryName": "category41",
        "num": 0,
      }
    ],
  },
  {
    "id": "id8",
    "name": "🍻酒水饮料",
    "describe": "清凉解渴很爽",
    "category": [
      {
        "categoryId": 42,
        "categoryName": "category42",
        "num": 0,
      },
      {
        "categoryId": 43,
        "categoryName": "category43",
        "num": 0,
      },
      {
        "categoryId": 44,
        "categoryName": "category44",
        "num": 0,
      }
    ],
  },
  {
    "id": "id9",
    "name": "🥘土豪加料",
    "describe": "你想加的这里都有",
    "category": [
      {
        "categoryId": 45,
        "categoryName": "category45",
        "num": 0,
      },
      {
        "categoryId": 46,
        "categoryName": "category46",
        "num": 0,
      },
      {
        "categoryId": 47,
        "categoryName": "category47",
        "num": 0,
      }
    ],
  },
  {
    "id": "id10",
    "name": "🍟免费薯条",
    "describe": "0元薯条免费吃",
    "category": [
      {
        "categoryId": 48,
        "categoryName": "category48",
        "num": 0,
      },
      {
        "categoryId": 49,
        "categoryName": "category49",
        "num": 0,
      },
      {
        "categoryId": 50,
        "categoryName": "category50",
        "num": 0,
      }
    ],
  },
 
]

module.exports =  constants

