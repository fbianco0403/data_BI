/* ============================================================
   Baode BI - SBU 行业营销管理统一数据流引擎 (双轨制分级审核与时点持久化引擎)
   ============================================================ */
var BaodeTargetStore = (function () {
    var STORAGE_KEY = 'BAODE_BI_SBU_STORE_V10_2026_DUAL_V3';

    var defaultSbuData = {
    "versionNo": "2026.09_V1.0",
    "versionName": "2026年9月SBU行业经营目标-初版定稿",
    "status": "已审核",
    "auditor": "经营分析专员（张主管）",
    "auditTime": "2026-09-01 09:30:00",
    "remark": "根据SBU行业管理v10模板导入",
    "dimensions": {
        "industries": [
            "空调制冷",
            "工业制冷",
            "船舶行业",
            "储能行业",
            "数据中心"
        ],
        "reps": [
            "张三",
            "李四",
            "王五"
        ],
        "products": [
            "钎焊",
            "可拆"
        ]
    },
    "targetRows": [
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                62.0,
                53.0,
                71.0,
                79.0,
                79.0,
                88.0,
                88.0,
                79.0,
                79.0,
                79.0,
                71.0,
                53.0
            ],
            "annual": 881.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "美的制冷设备"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                9.3,
                7.9,
                10.6,
                11.9,
                11.9,
                13.2,
                13.2,
                11.9,
                11.9,
                11.9,
                10.6,
                7.9
            ],
            "annual": 132.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "格力电器"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.144,
                0.1452,
                0.1464,
                0.1476,
                0.1488,
                0.15,
                0.1512,
                0.1524,
                0.1536,
                0.1548,
                0.156,
                0.1572
            ],
            "annual": 0.15,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "青岛海尔空调"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                104.0,
                106.0,
                107.0,
                109.0,
                110.0,
                112.0,
                113.0,
                115.0,
                116.0,
                118.0,
                119.0,
                121.0
            ],
            "annual": 1350.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "麦克维尔空调"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                75.0,
                76.0,
                78.0,
                79.0,
                81.0,
                82.0,
                84.0,
                85.0,
                87.0,
                88.0,
                90.0,
                91.0
            ],
            "annual": 996.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "开利空调中国"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                104.0,
                106.0,
                107.0,
                109.0,
                110.0,
                112.0,
                113.0,
                115.0,
                116.0,
                118.0,
                119.0,
                121.0
            ],
            "annual": 1350.0,
            "remark": "管道充足：大客户已接单未生产集中，交付节奏稳定",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "天加环境科技"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                64.0,
                65.0,
                66.0,
                67.0,
                69.0,
                70.0,
                71.0,
                72.0,
                74.0,
                75.0,
                77.0,
                77.0
            ],
            "annual": 847.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "美的制冷设备"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                26.0,
                23.0,
                30.0,
                34.0,
                34.0,
                38.0,
                38.0,
                34.0,
                34.0,
                34.0,
                30.0,
                23.0
            ],
            "annual": 378.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "格力电器"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                4.0,
                3.4,
                4.5,
                5.1,
                5.1,
                5.7,
                5.7,
                5.1,
                5.1,
                5.1,
                4.5,
                3.4
            ],
            "annual": 56.699999999999996,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "青岛海尔空调"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.144,
                0.1452,
                0.1464,
                0.1476,
                0.1488,
                0.15,
                0.1512,
                0.1524,
                0.1536,
                0.1548,
                0.156,
                0.1572
            ],
            "annual": 0.15,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "麦克维尔空调"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                45.0,
                45.0,
                46.0,
                47.0,
                47.0,
                48.0,
                49.0,
                49.0,
                50.0,
                50.0,
                51.0,
                52.0
            ],
            "annual": 579.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "开利空调中国"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                32.0,
                33.0,
                33.0,
                34.0,
                35.0,
                35.0,
                36.0,
                37.0,
                37.0,
                38.0,
                38.0,
                39.0
            ],
            "annual": 427.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "天加环境科技"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                45.0,
                45.0,
                46.0,
                47.0,
                47.0,
                48.0,
                49.0,
                49.0,
                50.0,
                50.0,
                51.0,
                52.0
            ],
            "annual": 579.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "美的制冷设备"
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                27.0,
                28.0,
                28.0,
                29.0,
                29.0,
                29.0,
                30.0,
                31.0,
                31.0,
                32.0,
                32.0,
                33.0
            ],
            "annual": 359.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "格力电器"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                37.0,
                32.0,
                42.0,
                47.0,
                47.0,
                52.0,
                52.0,
                47.0,
                47.0,
                47.0,
                42.0,
                32.0
            ],
            "annual": 524.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "福建雪人股份"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                5.9,
                5.0,
                6.7,
                7.6,
                7.6,
                8.4,
                8.4,
                7.6,
                7.6,
                7.6,
                6.7,
                5.0
            ],
            "annual": 84.1,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "冰轮环境技术"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.1536,
                0.1549,
                0.1562,
                0.1574,
                0.1587,
                0.16,
                0.1613,
                0.1626,
                0.1638,
                0.1651,
                0.1664,
                0.1677
            ],
            "annual": 0.16,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "大连冰山集团"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                62.0,
                63.0,
                64.0,
                65.0,
                66.0,
                66.0,
                67.0,
                68.0,
                69.0,
                70.0,
                71.0,
                72.0
            ],
            "annual": 803.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "汉钟精机"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                45.0,
                46.0,
                46.0,
                47.0,
                48.0,
                49.0,
                50.0,
                51.0,
                52.0,
                52.0,
                53.0,
                54.0
            ],
            "annual": 593.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "烟台顿汉布什"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                62.0,
                63.0,
                64.0,
                65.0,
                66.0,
                66.0,
                67.0,
                68.0,
                69.0,
                70.0,
                71.0,
                72.0
            ],
            "annual": 803.0,
            "remark": "管道充足：大客户已接单未生产集中，交付节奏稳定",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "福建雪人股份"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                38.0,
                39.0,
                39.0,
                40.0,
                41.0,
                42.0,
                43.0,
                43.0,
                44.0,
                44.0,
                45.0,
                46.0
            ],
            "annual": 504.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "冰轮环境技术"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                37.0,
                32.0,
                42.0,
                47.0,
                47.0,
                52.0,
                52.0,
                47.0,
                47.0,
                47.0,
                42.0,
                32.0
            ],
            "annual": 524.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "大连冰山集团"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                5.9,
                5.0,
                6.7,
                7.6,
                7.6,
                8.4,
                8.4,
                7.6,
                7.6,
                7.6,
                6.7,
                5.0
            ],
            "annual": 84.1,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "汉钟精机"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.1536,
                0.1549,
                0.1562,
                0.1574,
                0.1587,
                0.16,
                0.1613,
                0.1626,
                0.1638,
                0.1651,
                0.1664,
                0.1677
            ],
            "annual": 0.16,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "烟台顿汉布什"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                62.0,
                63.0,
                64.0,
                65.0,
                66.0,
                66.0,
                67.0,
                68.0,
                69.0,
                70.0,
                71.0,
                72.0
            ],
            "annual": 803.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "福建雪人股份"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                45.0,
                46.0,
                46.0,
                47.0,
                48.0,
                49.0,
                50.0,
                51.0,
                52.0,
                52.0,
                53.0,
                54.0
            ],
            "annual": 593.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "冰轮环境技术"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                62.0,
                63.0,
                64.0,
                65.0,
                66.0,
                66.0,
                67.0,
                68.0,
                69.0,
                70.0,
                71.0,
                72.0
            ],
            "annual": 803.0,
            "remark": "管道充足：大客户已接单未生产集中，交付节奏稳定",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "大连冰山集团"
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                38.0,
                39.0,
                39.0,
                40.0,
                41.0,
                42.0,
                43.0,
                43.0,
                44.0,
                44.0,
                45.0,
                46.0
            ],
            "annual": 504.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "汉钟精机"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                9.0,
                8.0,
                11.0,
                12.0,
                12.0,
                13.0,
                13.0,
                12.0,
                12.0,
                12.0,
                11.0,
                8.0
            ],
            "annual": 133.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "招商金陵船舶"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                1.9,
                1.6,
                2.1,
                2.4,
                2.4,
                2.7,
                2.7,
                2.4,
                2.4,
                2.4,
                2.1,
                1.6
            ],
            "annual": 26.7,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "南通中远川崎"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "中船重工704所"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                16.0,
                16.0,
                16.0,
                17.0,
                17.0,
                17.0,
                17.0,
                17.0,
                18.0,
                18.0,
                18.0,
                18.0
            ],
            "annual": 205.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "江南造船有限"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                11.0,
                12.0,
                12.0,
                12.0,
                12.0,
                13.0,
                13.0,
                13.0,
                13.0,
                13.0,
                14.0,
                14.0
            ],
            "annual": 152.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "沪东中华造船"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                16.0,
                16.0,
                16.0,
                17.0,
                17.0,
                17.0,
                17.0,
                17.0,
                18.0,
                18.0,
                18.0,
                18.0
            ],
            "annual": 205.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "招商金陵船舶"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                9.0,
                10.0,
                10.0,
                10.0,
                10.0,
                11.0,
                11.0,
                11.0,
                11.0,
                11.0,
                12.0,
                12.0
            ],
            "annual": 128.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "南通中远川崎"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                14.0,
                12.0,
                16.0,
                18.0,
                18.0,
                20.0,
                20.0,
                18.0,
                18.0,
                18.0,
                16.0,
                12.0
            ],
            "annual": 200.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "中船重工704所"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                2.8,
                2.4,
                3.2,
                3.6,
                3.6,
                4.0,
                4.0,
                3.6,
                3.6,
                3.6,
                3.2,
                2.4
            ],
            "annual": 40.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "江南造船有限"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "沪东中华造船"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                24.0,
                24.0,
                25.0,
                25.0,
                25.0,
                26.0,
                26.0,
                26.0,
                27.0,
                27.0,
                27.0,
                28.0
            ],
            "annual": 310.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "招商金陵船舶"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                17.0,
                18.0,
                18.0,
                18.0,
                19.0,
                19.0,
                19.0,
                20.0,
                20.0,
                20.0,
                21.0,
                21.0
            ],
            "annual": 230.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "南通中远川崎"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                23.0,
                23.0,
                24.0,
                24.0,
                24.0,
                25.0,
                25.0,
                25.0,
                26.0,
                26.0,
                26.0,
                27.0
            ],
            "annual": 298.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "中船重工704所"
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                14.0,
                15.0,
                15.0,
                15.0,
                16.0,
                16.0,
                16.0,
                16.0,
                16.0,
                16.0,
                17.0,
                17.0
            ],
            "annual": 189.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "江南造船有限"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                5.0,
                5.0,
                6.0,
                7.0,
                7.0,
                8.0,
                8.0,
                7.0,
                7.0,
                7.0,
                6.0,
                5.0
            ],
            "annual": 78.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "阳光电源储能"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                1.1,
                0.9,
                1.2,
                1.4,
                1.4,
                1.5,
                1.5,
                1.4,
                1.4,
                1.4,
                1.2,
                0.9
            ],
            "annual": 15.299999999999999,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "亿纬动力电池"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "中创新航科技"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                9.0,
                9.0,
                9.0,
                9.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0
            ],
            "annual": 116.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "宁德时代新能源"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                6.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                8.0,
                8.0,
                8.0
            ],
            "annual": 86.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "比亚迪储能"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                9.0,
                9.0,
                9.0,
                9.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0
            ],
            "annual": 116.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "阳光电源储能"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                5.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                7.0,
                7.0,
                7.0
            ],
            "annual": 74.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "亿纬动力电池"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                12.0,
                11.0,
                14.0,
                16.0,
                16.0,
                18.0,
                18.0,
                16.0,
                16.0,
                16.0,
                14.0,
                11.0
            ],
            "annual": 178.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "中创新航科技"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                2.5,
                2.1,
                2.8,
                3.2,
                3.2,
                3.5,
                3.5,
                3.2,
                3.2,
                3.2,
                2.8,
                2.1
            ],
            "annual": 35.3,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "宁德时代新能源"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "比亚迪储能"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                21.0,
                21.0,
                21.0,
                22.0,
                22.0,
                22.0,
                23.0,
                23.0,
                23.0,
                23.0,
                24.0,
                24.0
            ],
            "annual": 269.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "阳光电源储能"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                15.0,
                15.0,
                16.0,
                16.0,
                16.0,
                16.0,
                17.0,
                17.0,
                17.0,
                18.0,
                18.0,
                18.0
            ],
            "annual": 199.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "亿纬动力电池"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                20.0,
                20.0,
                20.0,
                21.0,
                21.0,
                21.0,
                22.0,
                22.0,
                22.0,
                22.0,
                23.0,
                23.0
            ],
            "annual": 257.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "中创新航科技"
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                12.0,
                12.0,
                13.0,
                13.0,
                13.0,
                13.0,
                14.0,
                14.0,
                14.0,
                15.0,
                15.0,
                15.0
            ],
            "annual": 163.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "宁德时代新能源"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                26.0,
                23.0,
                30.0,
                34.0,
                34.0,
                38.0,
                38.0,
                34.0,
                34.0,
                34.0,
                30.0,
                23.0
            ],
            "annual": 378.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "维谛技术(Vertiv)"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                5.8,
                5.0,
                6.7,
                7.5,
                7.5,
                8.3,
                8.3,
                7.5,
                7.5,
                7.5,
                6.7,
                5.0
            ],
            "annual": 83.3,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "中金数据中心"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.2112,
                0.213,
                0.2147,
                0.2165,
                0.2182,
                0.22,
                0.2218,
                0.2235,
                0.2253,
                0.227,
                0.2288,
                0.2306
            ],
            "annual": 0.22,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "万国数据科技"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                45.0,
                45.0,
                46.0,
                47.0,
                47.0,
                48.0,
                49.0,
                49.0,
                50.0,
                50.0,
                51.0,
                52.0
            ],
            "annual": 579.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "秦淮数据集团"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                32.0,
                33.0,
                33.0,
                34.0,
                35.0,
                35.0,
                36.0,
                37.0,
                37.0,
                38.0,
                38.0,
                39.0
            ],
            "annual": 427.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "华为数字能源"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                45.0,
                45.0,
                46.0,
                47.0,
                47.0,
                48.0,
                49.0,
                49.0,
                50.0,
                50.0,
                51.0,
                52.0
            ],
            "annual": 579.0,
            "remark": "管道充足：大客户已接单未生产集中，交付节奏稳定",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "维谛技术(Vertiv)"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                27.0,
                28.0,
                28.0,
                29.0,
                30.0,
                30.0,
                31.0,
                31.0,
                31.0,
                32.0,
                32.0,
                33.0
            ],
            "annual": 362.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "中金数据中心"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华东",
            "indicator": "销售目标额",
            "months": [
                18.0,
                15.0,
                20.0,
                23.0,
                23.0,
                25.0,
                25.0,
                23.0,
                23.0,
                23.0,
                20.0,
                15.0
            ],
            "annual": 253.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "万国数据科技"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利目标",
            "months": [
                3.9,
                3.3,
                4.4,
                5.0,
                5.0,
                5.5,
                5.5,
                5.0,
                5.0,
                5.0,
                4.4,
                3.3
            ],
            "annual": 55.3,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "秦淮数据集团"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华东",
            "indicator": "毛利率目标",
            "months": [
                0.2112,
                0.213,
                0.2147,
                0.2165,
                0.2182,
                0.22,
                0.2218,
                0.2235,
                0.2253,
                0.227,
                0.2288,
                0.2306
            ],
            "annual": 0.22,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "华为数字能源"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产目标",
            "months": [
                30.0,
                30.0,
                31.0,
                31.0,
                32.0,
                32.0,
                32.0,
                33.0,
                33.0,
                34.0,
                34.0,
                34.0
            ],
            "annual": 386.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "维谛技术(Vertiv)"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会目标",
            "months": [
                21.0,
                22.0,
                22.0,
                23.0,
                23.0,
                24.0,
                24.0,
                24.0,
                25.0,
                25.0,
                26.0,
                26.0
            ],
            "annual": 285.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "中金数据中心"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华东",
            "indicator": "已接单未生产",
            "months": [
                30.0,
                30.0,
                31.0,
                31.0,
                32.0,
                32.0,
                32.0,
                33.0,
                33.0,
                34.0,
                34.0,
                34.0
            ],
            "annual": 386.0,
            "remark": "管道充足：大客户已接单未生产集中，交付节奏稳定",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "万国数据科技"
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华东",
            "indicator": "目标客户机会",
            "months": [
                18.0,
                19.0,
                19.0,
                20.0,
                20.0,
                20.0,
                20.0,
                20.0,
                21.0,
                21.0,
                22.0,
                22.0
            ],
            "annual": 242.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "秦淮数据集团"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                51.0,
                44.0,
                59.0,
                66.0,
                66.0,
                74.0,
                74.0,
                66.0,
                66.0,
                66.0,
                59.0,
                44.0
            ],
            "annual": 735.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "开利空调中国"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                7.7,
                6.6,
                8.8,
                9.9,
                9.9,
                11.0,
                11.0,
                9.9,
                9.9,
                9.9,
                8.8,
                6.6
            ],
            "annual": 110.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "天加环境科技"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.144,
                0.1452,
                0.1464,
                0.1476,
                0.1488,
                0.15,
                0.1512,
                0.1524,
                0.1536,
                0.1548,
                0.156,
                0.1572
            ],
            "annual": 0.15,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "美的制冷设备"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                87.0,
                88.0,
                89.0,
                91.0,
                92.0,
                93.0,
                94.0,
                96.0,
                97.0,
                98.0,
                99.0,
                100.0
            ],
            "annual": 1124.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "格力电器"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                62.0,
                64.0,
                65.0,
                66.0,
                67.0,
                69.0,
                70.0,
                71.0,
                72.0,
                74.0,
                75.0,
                76.0
            ],
            "annual": 831.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "青岛海尔空调"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                85.0,
                86.0,
                87.0,
                89.0,
                90.0,
                91.0,
                92.0,
                94.0,
                95.0,
                96.0,
                97.0,
                98.0
            ],
            "annual": 1100.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "麦克维尔空调"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                52.0,
                53.0,
                54.0,
                55.0,
                56.0,
                57.0,
                58.0,
                59.0,
                60.0,
                62.0,
                62.0,
                63.0
            ],
            "annual": 691.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "开利空调中国"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                22.0,
                19.0,
                25.0,
                28.0,
                28.0,
                32.0,
                32.0,
                28.0,
                28.0,
                28.0,
                25.0,
                19.0
            ],
            "annual": 314.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "天加环境科技"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                3.3,
                2.8,
                3.8,
                4.3,
                4.3,
                4.7,
                4.7,
                4.3,
                4.3,
                4.3,
                3.8,
                2.8
            ],
            "annual": 47.4,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "美的制冷设备"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.144,
                0.1452,
                0.1464,
                0.1476,
                0.1488,
                0.15,
                0.1512,
                0.1524,
                0.1536,
                0.1548,
                0.156,
                0.1572
            ],
            "annual": 0.15,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "格力电器"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                37.0,
                38.0,
                38.0,
                39.0,
                39.0,
                40.0,
                40.0,
                41.0,
                41.0,
                42.0,
                43.0,
                43.0
            ],
            "annual": 481.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "青岛海尔空调"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                27.0,
                27.0,
                28.0,
                28.0,
                29.0,
                29.0,
                30.0,
                30.0,
                31.0,
                32.0,
                32.0,
                33.0
            ],
            "annual": 356.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "麦克维尔空调"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                36.0,
                37.0,
                37.0,
                38.0,
                38.0,
                39.0,
                39.0,
                40.0,
                40.0,
                41.0,
                42.0,
                42.0
            ],
            "annual": 469.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "开利空调中国"
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                22.0,
                22.0,
                23.0,
                23.0,
                24.0,
                24.0,
                25.0,
                25.0,
                25.0,
                26.0,
                26.0,
                27.0
            ],
            "annual": 292.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "天加环境科技"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                31.0,
                26.0,
                35.0,
                39.0,
                39.0,
                44.0,
                44.0,
                39.0,
                39.0,
                39.0,
                35.0,
                26.0
            ],
            "annual": 436.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "福建雪人股份"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                4.9,
                4.2,
                5.6,
                6.3,
                6.3,
                7.0,
                7.0,
                6.3,
                6.3,
                6.3,
                5.6,
                4.2
            ],
            "annual": 70.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "冰轮环境技术"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.1536,
                0.1549,
                0.1562,
                0.1574,
                0.1587,
                0.16,
                0.1613,
                0.1626,
                0.1638,
                0.1651,
                0.1664,
                0.1677
            ],
            "annual": 0.16,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "大连冰山集团"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                52.0,
                53.0,
                53.0,
                54.0,
                55.0,
                55.0,
                56.0,
                57.0,
                58.0,
                58.0,
                59.0,
                60.0
            ],
            "annual": 670.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "汉钟精机"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                37.0,
                38.0,
                39.0,
                39.0,
                40.0,
                41.0,
                42.0,
                42.0,
                43.0,
                44.0,
                45.0,
                45.0
            ],
            "annual": 495.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "烟台顿汉布什"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                52.0,
                53.0,
                53.0,
                54.0,
                55.0,
                55.0,
                56.0,
                57.0,
                58.0,
                58.0,
                59.0,
                60.0
            ],
            "annual": 670.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "福建雪人股份"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                31.0,
                32.0,
                33.0,
                33.0,
                34.0,
                35.0,
                35.0,
                35.0,
                36.0,
                37.0,
                38.0,
                38.0
            ],
            "annual": 417.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "冰轮环境技术"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                31.0,
                26.0,
                35.0,
                39.0,
                39.0,
                44.0,
                44.0,
                39.0,
                39.0,
                39.0,
                35.0,
                26.0
            ],
            "annual": 436.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "大连冰山集团"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                4.9,
                4.2,
                5.6,
                6.3,
                6.3,
                7.0,
                7.0,
                6.3,
                6.3,
                6.3,
                5.6,
                4.2
            ],
            "annual": 70.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "汉钟精机"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.1536,
                0.1549,
                0.1562,
                0.1574,
                0.1587,
                0.16,
                0.1613,
                0.1626,
                0.1638,
                0.1651,
                0.1664,
                0.1677
            ],
            "annual": 0.16,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "烟台顿汉布什"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                52.0,
                52.0,
                53.0,
                54.0,
                55.0,
                55.0,
                56.0,
                57.0,
                58.0,
                58.0,
                59.0,
                60.0
            ],
            "annual": 669.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "福建雪人股份"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                37.0,
                38.0,
                39.0,
                39.0,
                40.0,
                41.0,
                42.0,
                42.0,
                43.0,
                44.0,
                44.0,
                45.0
            ],
            "annual": 494.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "冰轮环境技术"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                51.0,
                51.0,
                52.0,
                53.0,
                54.0,
                54.0,
                55.0,
                56.0,
                57.0,
                57.0,
                58.0,
                59.0
            ],
            "annual": 657.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "大连冰山集团"
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                31.0,
                32.0,
                32.0,
                32.0,
                33.0,
                34.0,
                35.0,
                35.0,
                36.0,
                37.0,
                37.0,
                37.0
            ],
            "annual": 411.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "汉钟精机"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                8.0,
                7.0,
                9.0,
                10.0,
                10.0,
                11.0,
                11.0,
                10.0,
                10.0,
                10.0,
                9.0,
                7.0
            ],
            "annual": 112.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "招商金陵船舶"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                1.6,
                1.3,
                1.8,
                2.0,
                2.0,
                2.2,
                2.2,
                2.0,
                2.0,
                2.0,
                1.8,
                1.3
            ],
            "annual": 22.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "南通中远川崎"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "中船重工704所"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                13.0,
                13.0,
                14.0,
                14.0,
                14.0,
                14.0,
                14.0,
                15.0,
                15.0,
                15.0,
                15.0,
                15.0
            ],
            "annual": 171.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "江南造船有限"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                11.0,
                11.0,
                11.0,
                11.0,
                11.0,
                12.0
            ],
            "annual": 127.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "沪东中华造船"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                13.0,
                13.0,
                13.0,
                13.0,
                13.0,
                13.0,
                13.0,
                14.0,
                14.0,
                14.0,
                14.0,
                14.0
            ],
            "annual": 161.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "招商金陵船舶"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                9.0,
                9.0,
                9.0,
                9.0,
                9.0,
                10.0
            ],
            "annual": 103.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "南通中远川崎"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                12.0,
                10.0,
                13.0,
                15.0,
                15.0,
                17.0,
                17.0,
                15.0,
                15.0,
                15.0,
                13.0,
                10.0
            ],
            "annual": 167.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "中船重工704所"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                2.4,
                2.0,
                2.7,
                3.0,
                3.0,
                3.4,
                3.4,
                3.0,
                3.0,
                3.0,
                2.7,
                2.0
            ],
            "annual": 33.6,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "江南造船有限"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "沪东中华造船"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                20.0,
                20.0,
                20.0,
                21.0,
                21.0,
                21.0,
                22.0,
                22.0,
                22.0,
                22.0,
                23.0,
                23.0
            ],
            "annual": 257.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "招商金陵船舶"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                14.0,
                15.0,
                15.0,
                15.0,
                15.0,
                16.0,
                16.0,
                16.0,
                17.0,
                17.0,
                17.0,
                17.0
            ],
            "annual": 190.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "南通中远川崎"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                19.0,
                19.0,
                19.0,
                20.0,
                20.0,
                20.0,
                21.0,
                21.0,
                21.0,
                21.0,
                22.0,
                22.0
            ],
            "annual": 245.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "中船重工704所"
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                11.0,
                12.0,
                12.0,
                12.0,
                12.0,
                13.0,
                13.0,
                13.0,
                14.0,
                14.0,
                14.0,
                14.0
            ],
            "annual": 154.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "江南造船有限"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                4.0,
                4.0,
                5.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                5.0,
                4.0
            ],
            "annual": 64.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "阳光电源储能"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                0.9,
                0.8,
                1.0,
                1.1,
                1.1,
                1.3,
                1.3,
                1.1,
                1.1,
                1.1,
                1.0,
                0.8
            ],
            "annual": 12.600000000000001,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "亿纬动力电池"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "中创新航科技"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                7.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                9.0,
                9.0
            ],
            "annual": 97.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "宁德时代新能源"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                5.0,
                5.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                7.0
            ],
            "annual": 71.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "比亚迪储能"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                7.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                9.0,
                9.0
            ],
            "annual": 97.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "阳光电源储能"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                4.0,
                4.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                6.0
            ],
            "annual": 59.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "亿纬动力电池"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                10.0,
                9.0,
                12.0,
                13.0,
                13.0,
                15.0,
                15.0,
                13.0,
                13.0,
                13.0,
                12.0,
                9.0
            ],
            "annual": 147.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "中创新航科技"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                2.1,
                1.8,
                2.4,
                2.6,
                2.6,
                2.9,
                2.9,
                2.6,
                2.6,
                2.6,
                2.4,
                1.8
            ],
            "annual": 29.3,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "宁德时代新能源"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "比亚迪储能"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                17.0,
                18.0,
                18.0,
                18.0,
                18.0,
                19.0,
                19.0,
                19.0,
                19.0,
                20.0,
                20.0,
                20.0
            ],
            "annual": 225.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "阳光电源储能"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                12.0,
                13.0,
                13.0,
                13.0,
                13.0,
                14.0,
                14.0,
                14.0,
                14.0,
                15.0,
                15.0,
                15.0
            ],
            "annual": 165.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "亿纬动力电池"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                16.0,
                17.0,
                17.0,
                17.0,
                17.0,
                18.0,
                18.0,
                18.0,
                18.0,
                19.0,
                19.0,
                19.0
            ],
            "annual": 213.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "中创新航科技"
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                9.0,
                10.0,
                10.0,
                10.0,
                10.0,
                11.0,
                11.0,
                11.0,
                11.0,
                12.0,
                12.0,
                12.0
            ],
            "annual": 129.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "宁德时代新能源"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                22.0,
                19.0,
                25.0,
                28.0,
                28.0,
                32.0,
                32.0,
                28.0,
                28.0,
                28.0,
                25.0,
                19.0
            ],
            "annual": 314.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "维谛技术(Vertiv)"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                4.9,
                4.2,
                5.5,
                6.2,
                6.2,
                6.9,
                6.9,
                6.2,
                6.2,
                6.2,
                5.5,
                4.2
            ],
            "annual": 69.10000000000001,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "中金数据中心"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.2112,
                0.213,
                0.2147,
                0.2165,
                0.2182,
                0.22,
                0.2218,
                0.2235,
                0.2253,
                0.227,
                0.2288,
                0.2306
            ],
            "annual": 0.22,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "万国数据科技"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                37.0,
                38.0,
                38.0,
                39.0,
                39.0,
                40.0,
                40.0,
                41.0,
                41.0,
                42.0,
                43.0,
                43.0
            ],
            "annual": 481.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "秦淮数据集团"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                27.0,
                27.0,
                28.0,
                28.0,
                29.0,
                29.0,
                30.0,
                30.0,
                31.0,
                32.0,
                32.0,
                33.0
            ],
            "annual": 356.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "华为数字能源"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                37.0,
                38.0,
                38.0,
                39.0,
                39.0,
                40.0,
                40.0,
                41.0,
                41.0,
                42.0,
                43.0,
                43.0
            ],
            "annual": 481.0,
            "remark": "管道充足：大客户已接单未生产集中，交付节奏稳定",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "维谛技术(Vertiv)"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                23.0,
                23.0,
                24.0,
                24.0,
                25.0,
                25.0,
                26.0,
                26.0,
                26.0,
                27.0,
                27.0,
                28.0
            ],
            "annual": 304.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "中金数据中心"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华南",
            "indicator": "销售目标额",
            "months": [
                15.0,
                13.0,
                17.0,
                19.0,
                19.0,
                21.0,
                21.0,
                19.0,
                19.0,
                19.0,
                17.0,
                13.0
            ],
            "annual": 212.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "万国数据科技"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利目标",
            "months": [
                3.2,
                2.8,
                3.7,
                4.2,
                4.2,
                4.6,
                4.6,
                4.2,
                4.2,
                4.2,
                3.7,
                2.8
            ],
            "annual": 46.4,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "秦淮数据集团"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华南",
            "indicator": "毛利率目标",
            "months": [
                0.2112,
                0.213,
                0.2147,
                0.2165,
                0.2182,
                0.22,
                0.2218,
                0.2235,
                0.2253,
                0.227,
                0.2288,
                0.2306
            ],
            "annual": 0.22,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "华为数字能源"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产目标",
            "months": [
                25.0,
                25.0,
                26.0,
                26.0,
                26.0,
                27.0,
                27.0,
                27.0,
                28.0,
                28.0,
                28.0,
                29.0
            ],
            "annual": 322.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "维谛技术(Vertiv)"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会目标",
            "months": [
                18.0,
                18.0,
                19.0,
                19.0,
                19.0,
                20.0,
                20.0,
                20.0,
                21.0,
                21.0,
                21.0,
                22.0
            ],
            "annual": 238.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "中金数据中心"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华南",
            "indicator": "已接单未生产",
            "months": [
                25.0,
                25.0,
                26.0,
                26.0,
                26.0,
                27.0,
                27.0,
                27.0,
                28.0,
                28.0,
                28.0,
                29.0
            ],
            "annual": 322.0,
            "remark": "管道充足：大客户已接单未生产集中，交付节奏稳定",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "万国数据科技"
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华南",
            "indicator": "目标客户机会",
            "months": [
                15.0,
                15.0,
                16.0,
                16.0,
                16.0,
                17.0,
                17.0,
                17.0,
                18.0,
                18.0,
                18.0,
                19.0
            ],
            "annual": 202.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "秦淮数据集团"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                34.0,
                29.0,
                39.0,
                43.0,
                43.0,
                48.0,
                48.0,
                43.0,
                43.0,
                43.0,
                39.0,
                29.0
            ],
            "annual": 481.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "青岛海尔空调"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                5.1,
                4.3,
                5.8,
                6.5,
                6.5,
                7.2,
                7.2,
                6.5,
                6.5,
                6.5,
                5.8,
                4.3
            ],
            "annual": 72.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "麦克维尔空调"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.144,
                0.1452,
                0.1464,
                0.1476,
                0.1488,
                0.15,
                0.1512,
                0.1524,
                0.1536,
                0.1548,
                0.156,
                0.1572
            ],
            "annual": 0.15,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "开利空调中国"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                57.0,
                58.0,
                59.0,
                60.0,
                60.0,
                61.0,
                62.0,
                63.0,
                64.0,
                64.0,
                65.0,
                66.0
            ],
            "annual": 739.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "天加环境科技"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                41.0,
                42.0,
                43.0,
                43.0,
                44.0,
                45.0,
                46.0,
                47.0,
                47.0,
                48.0,
                49.0,
                50.0
            ],
            "annual": 545.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "美的制冷设备"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                53.0,
                54.0,
                55.0,
                56.0,
                56.0,
                57.0,
                58.0,
                59.0,
                60.0,
                60.0,
                61.0,
                62.0
            ],
            "annual": 691.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "格力电器"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                32.0,
                33.0,
                34.0,
                34.0,
                35.0,
                35.0,
                36.0,
                37.0,
                37.0,
                38.0,
                39.0,
                39.0
            ],
            "annual": 429.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "青岛海尔空调"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                14.0,
                12.0,
                17.0,
                19.0,
                19.0,
                21.0,
                21.0,
                19.0,
                19.0,
                19.0,
                17.0,
                12.0
            ],
            "annual": 209.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "麦克维尔空调"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                2.2,
                1.9,
                2.5,
                2.8,
                2.8,
                3.1,
                3.1,
                2.8,
                2.8,
                2.8,
                2.5,
                1.9
            ],
            "annual": 31.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "开利空调中国"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.144,
                0.1452,
                0.1464,
                0.1476,
                0.1488,
                0.15,
                0.1512,
                0.1524,
                0.1536,
                0.1548,
                0.156,
                0.1572
            ],
            "annual": 0.15,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "天加环境科技"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                24.0,
                25.0,
                25.0,
                26.0,
                26.0,
                26.0,
                27.0,
                27.0,
                27.0,
                28.0,
                28.0,
                28.0
            ],
            "annual": 317.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "美的制冷设备"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                18.0,
                18.0,
                18.0,
                19.0,
                19.0,
                19.0,
                20.0,
                20.0,
                20.0,
                21.0,
                21.0,
                21.0
            ],
            "annual": 234.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "格力电器"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                22.0,
                23.0,
                23.0,
                24.0,
                24.0,
                24.0,
                25.0,
                25.0,
                25.0,
                26.0,
                26.0,
                26.0
            ],
            "annual": 293.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "青岛海尔空调"
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                14.0,
                14.0,
                14.0,
                15.0,
                15.0,
                15.0,
                16.0,
                16.0,
                16.0,
                16.0,
                16.0,
                16.0
            ],
            "annual": 183.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "麦克维尔空调"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                20.0,
                17.0,
                23.0,
                26.0,
                26.0,
                29.0,
                29.0,
                26.0,
                26.0,
                26.0,
                23.0,
                17.0
            ],
            "annual": 288.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "福建雪人股份"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                3.2,
                2.8,
                3.7,
                4.1,
                4.1,
                4.6,
                4.6,
                4.1,
                4.1,
                4.1,
                3.7,
                2.8
            ],
            "annual": 45.9,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "冰轮环境技术"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.1536,
                0.1549,
                0.1562,
                0.1574,
                0.1587,
                0.16,
                0.1613,
                0.1626,
                0.1638,
                0.1651,
                0.1664,
                0.1677
            ],
            "annual": 0.16,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "大连冰山集团"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                34.0,
                35.0,
                35.0,
                36.0,
                36.0,
                36.0,
                37.0,
                37.0,
                38.0,
                38.0,
                39.0,
                39.0
            ],
            "annual": 440.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "汉钟精机"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                24.0,
                25.0,
                25.0,
                26.0,
                26.0,
                27.0,
                27.0,
                28.0,
                28.0,
                29.0,
                29.0,
                30.0
            ],
            "annual": 324.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "烟台顿汉布什"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                32.0,
                33.0,
                33.0,
                34.0,
                34.0,
                34.0,
                35.0,
                35.0,
                36.0,
                36.0,
                37.0,
                37.0
            ],
            "annual": 416.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "福建雪人股份"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                19.0,
                20.0,
                20.0,
                21.0,
                21.0,
                21.0,
                21.0,
                22.0,
                22.0,
                23.0,
                23.0,
                24.0
            ],
            "annual": 257.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "冰轮环境技术"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                20.0,
                17.0,
                23.0,
                26.0,
                26.0,
                29.0,
                29.0,
                26.0,
                26.0,
                26.0,
                23.0,
                17.0
            ],
            "annual": 288.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "大连冰山集团"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                3.2,
                2.8,
                3.7,
                4.1,
                4.1,
                4.6,
                4.6,
                4.1,
                4.1,
                4.1,
                3.7,
                2.8
            ],
            "annual": 45.9,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "汉钟精机"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.1536,
                0.1549,
                0.1562,
                0.1574,
                0.1587,
                0.16,
                0.1613,
                0.1626,
                0.1638,
                0.1651,
                0.1664,
                0.1677
            ],
            "annual": 0.16,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "烟台顿汉布什"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                34.0,
                34.0,
                35.0,
                35.0,
                36.0,
                36.0,
                37.0,
                37.0,
                38.0,
                38.0,
                39.0,
                39.0
            ],
            "annual": 438.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "福建雪人股份"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                24.0,
                25.0,
                25.0,
                26.0,
                26.0,
                27.0,
                27.0,
                28.0,
                28.0,
                29.0,
                29.0,
                30.0
            ],
            "annual": 324.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "冰轮环境技术"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                32.0,
                32.0,
                33.0,
                33.0,
                34.0,
                34.0,
                35.0,
                35.0,
                36.0,
                36.0,
                37.0,
                37.0
            ],
            "annual": 414.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "大连冰山集团"
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                19.0,
                20.0,
                20.0,
                20.0,
                20.0,
                21.0,
                21.0,
                22.0,
                22.0,
                23.0,
                23.0,
                24.0
            ],
            "annual": 255.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "汉钟精机"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                5.0,
                4.0,
                6.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                6.0,
                4.0
            ],
            "annual": 74.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "招商金陵船舶"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                1.0,
                0.9,
                1.2,
                1.3,
                1.3,
                1.5,
                1.5,
                1.3,
                1.3,
                1.3,
                1.2,
                0.9
            ],
            "annual": 14.7,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "南通中远川崎"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "中船重工704所"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                9.0,
                9.0,
                9.0,
                9.0,
                9.0,
                9.0,
                9.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0
            ],
            "annual": 113.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "江南造船有限"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                6.0,
                6.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                8.0,
                8.0
            ],
            "annual": 84.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "沪东中华造船"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                9.0,
                9.0,
                9.0,
                9.0,
                9.0
            ],
            "annual": 101.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "招商金陵船舶"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                6.0,
                6.0
            ],
            "annual": 62.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "南通中远川崎"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                8.0,
                7.0,
                9.0,
                10.0,
                10.0,
                11.0,
                11.0,
                10.0,
                10.0,
                10.0,
                9.0,
                7.0
            ],
            "annual": 112.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "中船重工704所"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                1.5,
                1.3,
                1.8,
                2.0,
                2.0,
                2.2,
                2.2,
                2.0,
                2.0,
                2.0,
                1.8,
                1.3
            ],
            "annual": 22.1,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "江南造船有限"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "沪东中华造船"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                13.0,
                13.0,
                13.0,
                14.0,
                14.0,
                14.0,
                14.0,
                14.0,
                14.0,
                15.0,
                15.0,
                15.0
            ],
            "annual": 168.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "招商金陵船舶"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                9.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                11.0,
                11.0,
                11.0,
                11.0,
                11.0
            ],
            "annual": 124.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "南通中远川崎"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                12.0,
                12.0,
                12.0,
                13.0,
                13.0,
                13.0,
                13.0,
                13.0,
                13.0,
                14.0,
                14.0,
                14.0
            ],
            "annual": 156.0,
            "remark": "管道缺口：重点项目延期+竞品低价抢单，需专项跟进",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "中船重工704所"
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                7.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0
            ],
            "annual": 95.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "江南造船有限"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                3.0,
                2.0,
                3.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0,
                3.0,
                2.0
            ],
            "annual": 41.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "阳光电源储能"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                0.6,
                0.5,
                0.7,
                0.7,
                0.7,
                0.8,
                0.8,
                0.7,
                0.7,
                0.7,
                0.7,
                0.5
            ],
            "annual": 8.1,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "亿纬动力电池"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "中创新航科技"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                6.0,
                6.0
            ],
            "annual": 62.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "宁德时代新能源"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                3.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0,
                4.0
            ],
            "annual": 47.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "比亚迪储能"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0
            ],
            "annual": 60.0,
            "remark": "管道缺口：重点项目延期+竞品低价抢单，需专项跟进",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "阳光电源储能"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                2.0,
                3.0,
                3.0,
                3.0,
                3.0,
                3.0,
                3.0,
                3.0,
                3.0,
                3.0,
                3.0,
                3.0
            ],
            "annual": 35.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "亿纬动力电池"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                7.0,
                6.0,
                8.0,
                9.0,
                9.0,
                10.0,
                10.0,
                9.0,
                9.0,
                9.0,
                8.0,
                6.0
            ],
            "annual": 100.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "中创新航科技"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                1.4,
                1.2,
                1.6,
                1.7,
                1.7,
                1.9,
                1.9,
                1.7,
                1.7,
                1.7,
                1.6,
                1.2
            ],
            "annual": 19.3,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "宁德时代新能源"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.192,
                0.1936,
                0.1952,
                0.1968,
                0.1984,
                0.2,
                0.2016,
                0.2032,
                0.2048,
                0.2064,
                0.208,
                0.2096
            ],
            "annual": 0.2,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "比亚迪储能"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                11.0,
                12.0,
                12.0,
                12.0,
                12.0,
                12.0,
                12.0,
                13.0,
                13.0,
                13.0,
                13.0,
                13.0
            ],
            "annual": 148.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "阳光电源储能"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                8.0,
                8.0,
                9.0,
                9.0,
                9.0,
                9.0,
                9.0,
                9.0,
                10.0,
                10.0,
                10.0,
                10.0
            ],
            "annual": 110.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "亿纬动力电池"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                10.0,
                11.0,
                11.0,
                11.0,
                11.0,
                11.0,
                11.0,
                12.0,
                12.0,
                12.0,
                12.0,
                12.0
            ],
            "annual": 136.0,
            "remark": "管道缺口：重点项目延期+竞品低价抢单，需专项跟进",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "中创新航科技"
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                6.0,
                6.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                8.0,
                8.0,
                8.0,
                8.0
            ],
            "annual": 86.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "宁德时代新能源"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                14.0,
                12.0,
                17.0,
                19.0,
                19.0,
                21.0,
                21.0,
                19.0,
                19.0,
                19.0,
                17.0,
                12.0
            ],
            "annual": 209.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "维谛技术(Vertiv)"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                3.2,
                2.7,
                3.6,
                4.1,
                4.1,
                4.6,
                4.6,
                4.1,
                4.1,
                4.1,
                3.6,
                2.7
            ],
            "annual": 45.5,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "中金数据中心"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.2112,
                0.213,
                0.2147,
                0.2165,
                0.2182,
                0.22,
                0.2218,
                0.2235,
                0.2253,
                0.227,
                0.2288,
                0.2306
            ],
            "annual": 0.22,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-120-60-4.5-HQ",
            "customerName": "万国数据科技"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                24.0,
                25.0,
                25.0,
                26.0,
                26.0,
                26.0,
                27.0,
                27.0,
                27.0,
                28.0,
                28.0,
                28.0
            ],
            "annual": 317.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-210-80-4.5-HQ",
            "customerName": "秦淮数据集团"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                18.0,
                18.0,
                18.0,
                19.0,
                19.0,
                19.0,
                20.0,
                20.0,
                20.0,
                21.0,
                21.0,
                21.0
            ],
            "annual": 234.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-030-20-3.0-H",
            "customerName": "华为数字能源"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                23.0,
                24.0,
                24.0,
                25.0,
                25.0,
                25.0,
                26.0,
                26.0,
                26.0,
                27.0,
                27.0,
                27.0
            ],
            "annual": 305.0,
            "remark": "管道良好：新客户导入顺利，机会转化符合预期",
            "tradeType": "内贸",
            "productModel": "B3-050-40-3.0-H",
            "customerName": "维谛技术(Vertiv)"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                15.0,
                15.0,
                15.0,
                15.0,
                15.0,
                15.0,
                16.0,
                16.0,
                16.0,
                17.0,
                17.0,
                17.0
            ],
            "annual": 189.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "B3-095-50-4.5-HQ",
            "customerName": "中金数据中心"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华北",
            "indicator": "销售目标额",
            "months": [
                10.0,
                8.0,
                11.0,
                12.0,
                12.0,
                14.0,
                14.0,
                12.0,
                12.0,
                12.0,
                11.0,
                8.0
            ],
            "annual": 136.0,
            "remark": "",
            "tradeType": "外贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "万国数据科技"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利目标",
            "months": [
                2.1,
                1.8,
                2.4,
                2.7,
                2.7,
                3.0,
                3.0,
                2.7,
                2.7,
                2.7,
                2.4,
                1.8
            ],
            "annual": 30.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "秦淮数据集团"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华北",
            "indicator": "毛利率目标",
            "months": [
                0.2112,
                0.213,
                0.2147,
                0.2165,
                0.2182,
                0.22,
                0.2218,
                0.2235,
                0.2253,
                0.227,
                0.2288,
                0.2306
            ],
            "annual": 0.22,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.05-1.0-5-E",
            "customerName": "华为数字能源"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产目标",
            "months": [
                16.0,
                17.0,
                17.0,
                17.0,
                17.0,
                17.0,
                18.0,
                18.0,
                18.0,
                18.0,
                19.0,
                19.0
            ],
            "annual": 211.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.1-1.0-10-E",
            "customerName": "维谛技术(Vertiv)"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会目标",
            "months": [
                12.0,
                12.0,
                12.0,
                12.0,
                13.0,
                13.0,
                13.0,
                13.0,
                14.0,
                14.0,
                14.0,
                14.0
            ],
            "annual": 156.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR0.2-1.0-20-N",
            "customerName": "中金数据中心"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华北",
            "indicator": "已接单未生产",
            "months": [
                15.0,
                16.0,
                16.0,
                16.0,
                16.0,
                16.0,
                17.0,
                17.0,
                17.0,
                17.0,
                18.0,
                18.0
            ],
            "annual": 199.0,
            "remark": "管道偏紧：个别客户观望，需加快报价与签约节奏",
            "tradeType": "内贸",
            "productModel": "BR0.5-1.6-50-N",
            "customerName": "万国数据科技"
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华北",
            "indicator": "目标客户机会",
            "months": [
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                10.0,
                11.0,
                11.0,
                11.0,
                11.0
            ],
            "annual": 124.0,
            "remark": "",
            "tradeType": "内贸",
            "productModel": "BR1.0-1.6-100-F",
            "customerName": "秦淮数据集团"
        }
    ],
    "actualRows": [
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                62.0,
                54.0,
                71.0,
                80.0,
                80.0,
                89.0,
                89.0,
                80.0,
                80.0,
                80.0,
                71.0,
                54.0
            ],
            "annual": 890.0
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                9.3,
                8.1,
                10.7,
                12.0,
                12.0,
                13.3,
                13.3,
                12.0,
                12.0,
                12.0,
                10.7,
                8.1
            ],
            "annual": 133.5
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                25.0,
                22.0,
                29.0,
                33.0,
                33.0,
                36.0,
                36.0,
                33.0,
                33.0,
                33.0,
                29.0,
                22.0
            ],
            "annual": 364.0
        },
        {
            "rep": "张三",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                3.8,
                3.3,
                4.3,
                5.0,
                5.0,
                5.4,
                5.4,
                5.0,
                5.0,
                5.0,
                4.3,
                3.3
            ],
            "annual": 54.8
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                39.0,
                34.0,
                45.0,
                51.0,
                51.0,
                56.0,
                56.0,
                51.0,
                51.0,
                51.0,
                45.0,
                34.0
            ],
            "annual": 564.0
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                6.2,
                5.4,
                7.2,
                8.2,
                8.2,
                9.0,
                9.0,
                8.2,
                8.2,
                8.2,
                7.2,
                5.4
            ],
            "annual": 90.39999999999999
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                37.0,
                32.0,
                43.0,
                48.0,
                48.0,
                54.0,
                54.0,
                48.0,
                48.0,
                48.0,
                43.0,
                32.0
            ],
            "annual": 535.0
        },
        {
            "rep": "张三",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                5.9,
                5.1,
                6.9,
                7.7,
                7.7,
                8.6,
                8.6,
                7.7,
                7.7,
                7.7,
                6.9,
                5.1
            ],
            "annual": 85.6
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                9.0,
                7.0,
                10.0,
                11.0,
                11.0,
                12.0,
                12.0,
                11.0,
                11.0,
                11.0,
                10.0,
                7.0
            ],
            "annual": 122.0
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                1.8,
                1.4,
                2.0,
                2.2,
                2.2,
                2.4,
                2.4,
                2.2,
                2.2,
                2.2,
                2.0,
                1.4
            ],
            "annual": 24.400000000000002
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                12.0,
                10.0,
                14.0,
                16.0,
                16.0,
                17.0,
                17.0,
                16.0,
                16.0,
                16.0,
                14.0,
                10.0
            ],
            "annual": 174.0
        },
        {
            "rep": "张三",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                2.4,
                2.0,
                2.8,
                3.2,
                3.2,
                3.4,
                3.4,
                3.2,
                3.2,
                3.2,
                2.8,
                2.0
            ],
            "annual": 34.8
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                4.0,
                4.0,
                5.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                5.0,
                4.0
            ],
            "annual": 64.0
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                0.8,
                0.8,
                1.0,
                1.2,
                1.2,
                1.2,
                1.2,
                1.2,
                1.2,
                1.2,
                1.0,
                0.8
            ],
            "annual": 12.8
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                10.0,
                8.0,
                11.0,
                12.0,
                12.0,
                14.0,
                14.0,
                12.0,
                12.0,
                12.0,
                11.0,
                8.0
            ],
            "annual": 136.0
        },
        {
            "rep": "张三",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                2.0,
                1.6,
                2.2,
                2.4,
                2.4,
                2.8,
                2.8,
                2.4,
                2.4,
                2.4,
                2.2,
                1.6
            ],
            "annual": 27.2
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                32.0,
                27.0,
                36.0,
                41.0,
                41.0,
                45.0,
                45.0,
                41.0,
                41.0,
                41.0,
                36.0,
                27.0
            ],
            "annual": 453.0
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                7.0,
                5.9,
                7.9,
                9.0,
                9.0,
                9.9,
                9.9,
                9.0,
                9.0,
                9.0,
                7.9,
                5.9
            ],
            "annual": 99.4
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩销售额",
            "months": [
                20.0,
                17.0,
                23.0,
                26.0,
                26.0,
                29.0,
                29.0,
                26.0,
                26.0,
                26.0,
                23.0,
                17.0
            ],
            "annual": 288.0
        },
        {
            "rep": "张三",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华东",
            "indicator": "实绩毛利",
            "months": [
                4.4,
                3.7,
                5.1,
                5.7,
                5.7,
                6.4,
                6.4,
                5.7,
                5.7,
                5.7,
                5.1,
                3.7
            ],
            "annual": 63.300000000000004
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                47.0,
                40.0,
                53.0,
                60.0,
                60.0,
                67.0,
                67.0,
                60.0,
                60.0,
                60.0,
                53.0,
                40.0
            ],
            "annual": 667.0
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                7.0,
                6.0,
                7.9,
                9.0,
                9.0,
                10.0,
                10.0,
                9.0,
                9.0,
                9.0,
                7.9,
                6.0
            ],
            "annual": 99.8
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                19.0,
                16.0,
                22.0,
                24.0,
                24.0,
                27.0,
                27.0,
                24.0,
                24.0,
                24.0,
                22.0,
                16.0
            ],
            "annual": 269.0
        },
        {
            "rep": "李四",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                2.9,
                2.4,
                3.3,
                3.6,
                3.6,
                4.0,
                4.0,
                3.6,
                3.6,
                3.6,
                3.3,
                2.4
            ],
            "annual": 40.3
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                29.0,
                25.0,
                34.0,
                38.0,
                38.0,
                42.0,
                42.0,
                38.0,
                38.0,
                38.0,
                34.0,
                25.0
            ],
            "annual": 421.0
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                4.6,
                4.0,
                5.4,
                6.1,
                6.1,
                6.7,
                6.7,
                6.1,
                6.1,
                6.1,
                5.4,
                4.0
            ],
            "annual": 67.3
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                28.0,
                24.0,
                32.0,
                36.0,
                36.0,
                40.0,
                40.0,
                36.0,
                36.0,
                36.0,
                32.0,
                24.0
            ],
            "annual": 400.0
        },
        {
            "rep": "李四",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                4.5,
                3.8,
                5.1,
                5.8,
                5.8,
                6.4,
                6.4,
                5.8,
                5.8,
                5.8,
                5.1,
                3.8
            ],
            "annual": 64.1
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                6.0,
                5.0,
                7.0,
                8.0,
                8.0,
                9.0,
                9.0,
                8.0,
                8.0,
                8.0,
                7.0,
                5.0
            ],
            "annual": 88.0
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                1.2,
                1.0,
                1.4,
                1.6,
                1.6,
                1.8,
                1.8,
                1.6,
                1.6,
                1.6,
                1.4,
                1.0
            ],
            "annual": 17.6
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                9.0,
                8.0,
                10.0,
                12.0,
                12.0,
                13.0,
                13.0,
                12.0,
                12.0,
                12.0,
                10.0,
                8.0
            ],
            "annual": 131.0
        },
        {
            "rep": "李四",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                1.8,
                1.6,
                2.0,
                2.4,
                2.4,
                2.6,
                2.6,
                2.4,
                2.4,
                2.4,
                2.0,
                1.6
            ],
            "annual": 26.2
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                3.0,
                3.0,
                4.0,
                4.0,
                4.0,
                5.0,
                5.0,
                4.0,
                4.0,
                4.0,
                4.0,
                3.0
            ],
            "annual": 47.0
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                0.6,
                0.6,
                0.8,
                0.8,
                0.8,
                1.0,
                1.0,
                0.8,
                0.8,
                0.8,
                0.8,
                0.6
            ],
            "annual": 9.4
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                7.0,
                6.0,
                8.0,
                9.0,
                9.0,
                10.0,
                10.0,
                9.0,
                9.0,
                9.0,
                8.0,
                6.0
            ],
            "annual": 100.0
        },
        {
            "rep": "李四",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                1.4,
                1.2,
                1.6,
                1.8,
                1.8,
                2.0,
                2.0,
                1.8,
                1.8,
                1.8,
                1.6,
                1.2
            ],
            "annual": 20.0
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                24.0,
                21.0,
                27.0,
                31.0,
                31.0,
                34.0,
                34.0,
                31.0,
                31.0,
                31.0,
                27.0,
                21.0
            ],
            "annual": 343.0
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                5.3,
                4.6,
                5.9,
                6.8,
                6.8,
                7.5,
                7.5,
                6.8,
                6.8,
                6.8,
                5.9,
                4.6
            ],
            "annual": 75.3
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩销售额",
            "months": [
                15.0,
                13.0,
                17.0,
                20.0,
                20.0,
                22.0,
                22.0,
                20.0,
                20.0,
                20.0,
                17.0,
                13.0
            ],
            "annual": 219.0
        },
        {
            "rep": "李四",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华南",
            "indicator": "实绩毛利",
            "months": [
                3.3,
                2.9,
                3.7,
                4.4,
                4.4,
                4.8,
                4.8,
                4.4,
                4.4,
                4.4,
                3.7,
                2.9
            ],
            "annual": 48.1
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                23.0,
                20.0,
                27.0,
                30.0,
                30.0,
                33.0,
                33.0,
                30.0,
                30.0,
                30.0,
                27.0,
                20.0
            ],
            "annual": 333.0
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                3.4,
                3.0,
                4.0,
                4.5,
                4.5,
                5.0,
                5.0,
                4.5,
                4.5,
                4.5,
                4.0,
                3.0
            ],
            "annual": 49.9
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                9.0,
                8.0,
                11.0,
                12.0,
                12.0,
                13.0,
                13.0,
                12.0,
                12.0,
                12.0,
                11.0,
                8.0
            ],
            "annual": 133.0
        },
        {
            "rep": "王五",
            "industry": "空调制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                1.3,
                1.2,
                1.6,
                1.8,
                1.8,
                1.9,
                1.9,
                1.8,
                1.8,
                1.8,
                1.6,
                1.2
            ],
            "annual": 19.7
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                15.0,
                13.0,
                17.0,
                19.0,
                19.0,
                21.0,
                21.0,
                19.0,
                19.0,
                19.0,
                17.0,
                13.0
            ],
            "annual": 212.0
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                2.4,
                2.1,
                2.7,
                3.0,
                3.0,
                3.4,
                3.4,
                3.0,
                3.0,
                3.0,
                2.7,
                2.1
            ],
            "annual": 33.8
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                14.0,
                12.0,
                16.0,
                18.0,
                18.0,
                20.0,
                20.0,
                18.0,
                18.0,
                18.0,
                16.0,
                12.0
            ],
            "annual": 200.0
        },
        {
            "rep": "王五",
            "industry": "工业制冷",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                2.2,
                1.9,
                2.6,
                2.9,
                2.9,
                3.2,
                3.2,
                2.9,
                2.9,
                2.9,
                2.6,
                1.9
            ],
            "annual": 32.1
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                3.0,
                3.0,
                4.0,
                4.0,
                4.0,
                5.0,
                5.0,
                4.0,
                4.0,
                4.0,
                4.0,
                3.0
            ],
            "annual": 47.0
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                0.6,
                0.6,
                0.8,
                0.8,
                0.8,
                1.0,
                1.0,
                0.8,
                0.8,
                0.8,
                0.8,
                0.6
            ],
            "annual": 9.4
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                5.0,
                4.0,
                5.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                6.0,
                5.0,
                4.0
            ],
            "annual": 65.0
        },
        {
            "rep": "王五",
            "industry": "船舶行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                1.0,
                0.8,
                1.0,
                1.2,
                1.2,
                1.2,
                1.2,
                1.2,
                1.2,
                1.2,
                1.0,
                0.8
            ],
            "annual": 13.0
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                2.0,
                1.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                1.0
            ],
            "annual": 22.0
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                0.4,
                0.2,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.4,
                0.2
            ],
            "annual": 4.4
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                4.0,
                3.0,
                4.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                4.0,
                3.0
            ],
            "annual": 53.0
        },
        {
            "rep": "王五",
            "industry": "储能行业",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                0.8,
                0.6,
                0.8,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                0.8,
                0.6
            ],
            "annual": 10.6
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                12.0,
                10.0,
                14.0,
                15.0,
                15.0,
                17.0,
                17.0,
                15.0,
                15.0,
                15.0,
                14.0,
                10.0
            ],
            "annual": 169.0
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "钎焊",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                2.6,
                2.2,
                3.1,
                3.3,
                3.3,
                3.7,
                3.7,
                3.3,
                3.3,
                3.3,
                3.1,
                2.2
            ],
            "annual": 37.1
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩销售额",
            "months": [
                8.0,
                6.0,
                9.0,
                10.0,
                10.0,
                11.0,
                11.0,
                10.0,
                10.0,
                10.0,
                9.0,
                6.0
            ],
            "annual": 110.0
        },
        {
            "rep": "王五",
            "industry": "数据中心",
            "product": "可拆",
            "region": "华北",
            "indicator": "实绩毛利",
            "months": [
                1.8,
                1.3,
                2.0,
                2.2,
                2.2,
                2.4,
                2.4,
                2.2,
                2.2,
                2.2,
                2.0,
                1.3
            ],
            "annual": 24.2
        }
    ]
};
    defaultSbuData.isActive = true; // 确保初始版本默认激活

    var defaultMonthlyPipelineStatus = {
        "2026-09": {
            status: "已核对",
            checker: "销售运营部（李主管）",
            checkTime: "2026-09-01 18:00:00",
            remark: "8月末已接单未生产与商机线索汇总核对完成"
        }
    };

    function loadStore() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                var parsed = JSON.parse(raw);
                if (parsed && parsed.versions && parsed.versions.length > 0) {
                    parsed.versions.forEach(function(ver) {
                        if (ver.targetRows) {
                            ver.targetRows.forEach(function(r) {
                                if (r.indicator === '在手订单') r.indicator = '已接单未生产';
                                if (r.indicator === '在手订单目标') r.indicator = '已接单未生产目标';
                                r.region = r.region || '华东';
                                r.tradeType = r.tradeType || '内贸';
                                r.productModel = r.productModel || (r.product === '可拆' ? 'BR0.2-1.0-20-N' : 'B3-050-40-3.0-H');
                                r.customerName = r.customerName || '美的制冷设备';
                            });
                        }
                    });
                    return parsed;
                }
            }
        } catch (e) {
            console.warn('Load target store failed, using defaults.', e);
        }
        return {
            activeVersionNo: defaultSbuData.versionNo,
            versions: [defaultSbuData],
            monthlyPipelineStatus: defaultMonthlyPipelineStatus,
            updatedAt: new Date().toISOString()
        };
    }

    function saveStore(data) {
        try {
            data.updatedAt = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Save target store failed.', e);
        }
    }

    function getActiveVersion() {
        var store = loadStore();
        var act = store.versions.find(function(v) { return v.isActive; });
        if (!act && store.versions.length > 0) {
            act = store.versions[0];
            act.isActive = true;
            saveStore(store);
        }
        return act || defaultSbuData;
    }

    return {
        getActiveVersionInfo: function () {
            var v = getActiveVersion();
            return {
                versionNo: v.versionNo,
                versionName: v.versionName,
                status: v.status || '已审核',
                auditor: v.auditor || '总经理室 / 经管会',
                auditTime: v.auditTime || '2026-09-01 09:30:00',
                remark: v.remark || '年度战略经营目标审议定稿'
            };
        },
        getMonthlyPipelineInfo: function (periodStr) {
            var store = loadStore();
            periodStr = periodStr || '2026-09';
            return (store.monthlyPipelineStatus && store.monthlyPipelineStatus[periodStr]) || {
                status: '待核对',
                checker: '销售内勤',
                checkTime: '-',
                remark: '当月待业务内勤提报'
            };
        },
        getDimensions: function () {
            return getActiveVersion().dimensions || defaultSbuData.dimensions;
        },
        getTargetRows: function () {
            return getActiveVersion().targetRows || defaultSbuData.targetRows;
        },
        getActualRows: function () {
            return getActiveVersion().actualRows || defaultSbuData.actualRows;
        },
        getIndustriesSummary: function (monthIdx) {
            monthIdx = (monthIdx >= 1 && monthIdx <= 12) ? monthIdx : 9;
            var ver = getActiveVersion();
            var dims = ver.dimensions.industries;
            var tRows = ver.targetRows;
            var aRows = ver.actualRows;

            return dims.map(function (indName) {
                var targetOrderSum = 0;
                var targetShipSum = 0;
                var targetMarginWeightedSum = 0;
                var monthTargetOrder = 0;
                var monthActualOrder = 0;
                var actualOrderSum = 0;
                var onHandOrder = 0;
                var oppAmt = 0;

                tRows.forEach(function (r) {
                    if (r.industry === indName) {
                        if (r.indicator === '销售目标额') {
                            targetOrderSum += r.annual || 0;
                            monthTargetOrder += (r.months[monthIdx - 1] || 0);
                        } else if (r.indicator === '毛利目标') {
                            targetShipSum += r.annual || 0;
                        } else if (r.indicator === '毛利率目标') {
                            targetMarginWeightedSum = (r.annual || 0.15) * 100;
                        } else if (r.indicator === '已接单未生产' || r.indicator === '在手订单') {
                            onHandOrder += (r.months[monthIdx - 1] || 0);
                        } else if (r.indicator === '目标客户机会') {
                            oppAmt += (r.months[monthIdx - 1] || 0);
                        }
                    }
                });

                aRows.forEach(function (r) {
                    if (r.industry === indName) {
                        if (r.indicator === '实绩销售额') {
                            actualOrderSum += r.annual || 0;
                            monthActualOrder += (r.months[monthIdx - 1] || 0);
                        }
                    }
                });

                var rate = targetOrderSum > 0 ? ((actualOrderSum / targetOrderSum) * 100) : 0;
                var monthRate = monthTargetOrder > 0 ? ((monthActualOrder / monthTargetOrder) * 100) : 0;

                return {
                    name: indName,
                    targetOrder: Math.round(targetOrderSum),
                    actualOrder: Math.round(actualOrderSum),
                    monthTarget: Math.round(monthTargetOrder),
                    monthActual: Math.round(monthActualOrder),
                    monthRate: +monthRate.toFixed(1),
                    cumRate: +rate.toFixed(1),
                    targetMargin: +targetMarginWeightedSum.toFixed(1),
                    onHandOrder: Math.round(onHandOrder),
                    oppAmt: Math.round(oppAmt),
                    predictTotal: Math.round(onHandOrder + oppAmt)
                };
            });
        },
        getIndustries: function () {
            return this.getIndustriesSummary(9).map(function(item, i) {
                return {
                    id: 'IND-00' + (i+1),
                    name: item.name,
                    code: 'SBU-0' + (i+1),
                    manager: ['张建军','李志国','王淑华','赵晓峰','陈德文'][i % 5] || '行业负责人',
                    targetOrder: item.targetOrder,
                    actualOrder: item.actualOrder,
                    targetShip: Math.round(item.targetOrder * 0.94),
                    actualShip: Math.round(item.actualOrder * 0.93),
                    targetRec: Math.round(item.targetOrder * 0.88),
                    actualRec: Math.round(item.actualOrder * 0.86),
                    targetMargin: item.targetMargin || 38.0,
                    actualMargin: +(item.targetMargin + 0.3).toFixed(1),
                    status: item.cumRate >= 80 ? '正常推进' : (item.cumRate >= 60 ? '临界关注' : '重点跟进')
                };
            });
        },
        getReps: function () {
            var ver = getActiveVersion();
            var reps = ver.dimensions.reps;
            var tRows = ver.targetRows;
            var aRows = ver.actualRows;

            return reps.map(function(repName, idx) {
                var targetOrder = 0;
                var actualOrder = 0;
                tRows.forEach(function(r) {
                    if (r.rep === repName && r.indicator === '销售目标额') {
                        targetOrder += r.annual || 0;
                    }
                });
                aRows.forEach(function(r) {
                    if (r.rep === repName && r.indicator === '实绩销售额') {
                        actualOrder += r.annual || 0;
                    }
                });

                return {
                    id: 'REP-00' + (idx + 1),
                    name: repName,
                    region: ['华东一区 (江浙沪)', '华南一区 (粤闽桂)', '华中战区 (鄂湘赣)'][idx % 3] || '战区营销部',
                    industry: '全行业覆盖',
                    targetOrder: Math.round(targetOrder),
                    actualOrder: Math.round(actualOrder),
                    targetShip: Math.round(targetOrder * 0.93),
                    actualShip: Math.round(actualOrder * 0.93),
                    targetRec: Math.round(targetOrder * 0.87),
                    actualRec: Math.round(actualOrder * 0.86),
                    targetMargin: 38.5,
                    actualMargin: 38.8,
                    overdueAmt: 50 + (idx * 20),
                    rank: (idx + 1)
                };
            });
        },
        // 轨道一：发布年度战略目标全新大版本 (支持任意自定义数值与新业务员/行业动态 Upsert)
        publishAnnualTargetVersion: function (params) {
            var store = loadStore();
            var nextIndex = store.versions.length + 1;
            var newVerNo = '2026.09_V' + nextIndex + '.0';

            store.versions.forEach(function (v) { v.isActive = false; });

            var nowStr = new Date().toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-');

            var currentTargetRows = JSON.parse(JSON.stringify(getActiveVersion().targetRows));
            if (params.annualRows && params.annualRows.length > 0) {
                params.annualRows.forEach(function (newR) {
                    var matched = currentTargetRows.find(function (oldR) {
                        return oldR.rep === newR.rep && oldR.industry === newR.industry && oldR.product === newR.product && oldR.indicator === newR.indicator;
                    });
                    if (matched) {
                        matched.months = newR.months;
                        matched.annual = newR.annual;
                        matched.remark = newR.remark;
                        if (newR.region) matched.region = newR.region;
                        if (newR.tradeType) matched.tradeType = newR.tradeType;
                        if (newR.productModel) matched.productModel = newR.productModel;
                        if (newR.customerName) matched.customerName = newR.customerName;
                    } else {
                        // 新维度行动态新增
                        currentTargetRows.push(newR);
                    }
                });
            }

            // 动态提取业务员和行业字典
            var distinctReps = [];
            var distinctIndustries = [];
            var distinctProducts = [];
            currentTargetRows.forEach(function(r) {
                if (r.rep && distinctReps.indexOf(r.rep) === -1) distinctReps.push(r.rep);
                if (r.industry && distinctIndustries.indexOf(r.industry) === -1) distinctIndustries.push(r.industry);
                if (r.product && distinctProducts.indexOf(r.product) === -1) distinctProducts.push(r.product);
            });

            var dynamicDims = {
                reps: distinctReps.length > 0 ? distinctReps : defaultSbuData.dimensions.reps,
                industries: distinctIndustries.length > 0 ? distinctIndustries : defaultSbuData.dimensions.industries,
                products: distinctProducts.length > 0 ? distinctProducts : defaultSbuData.dimensions.products
            };

            var newVer = {
                versionNo: newVerNo,
                versionName: params.versionName || (newVerNo + ' 年度战略定版目标'),
                status: '已终审',
                auditor: params.auditor || '经管会 / 总经理室',
                auditTime: nowStr,
                remark: params.remark || '年度战略经营目标审批定稿',
                isActive: true,
                dimensions: dynamicDims,
                targetRows: currentTargetRows,
                actualRows: defaultSbuData.actualRows
            };

            store.versions.unshift(newVer);
            store.activeVersionNo = newVerNo;
            saveStore(store);
            return newVer;
        },
        // 轨道二：月度已接单未生产与商机数据核对打标 (支持任意自定义数值与动态 Upsert)
        recordMonthlyPipelineCheck: function (params) {
            var store = loadStore();
            var periodKey = params.period || '2026-09';
            var nowStr = new Date().toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-');

            if (!store.monthlyPipelineStatus) store.monthlyPipelineStatus = {};
            store.monthlyPipelineStatus[periodKey] = {
                status: '已核对',
                checker: params.checker || '销售运营部 / 战区内勤',
                checkTime: nowStr,
                remark: params.remark || '月末已接单未生产与商机线索核对生效'
            };

            // 查找当前活跃版本
            var actIndex = store.versions.findIndex(function(v) { return v.isActive; });
            if (actIndex === -1) {
                actIndex = 0;
                store.versions[0].isActive = true;
            }
            var act = store.versions[actIndex];

            if (act && params.pipelineRows && params.pipelineRows.length > 0) {
                params.pipelineRows.forEach(function (newR) {
                    var matched = act.targetRows.find(function (oldR) {
                        return oldR.rep === newR.rep && oldR.industry === newR.industry && oldR.product === newR.product && oldR.indicator === newR.indicator;
                    });
                    if (matched) {
                        matched.months = newR.months;
                        matched.annual = newR.annual;
                        matched.remark = newR.remark;
                        if (newR.region) matched.region = newR.region;
                        if (newR.tradeType) matched.tradeType = newR.tradeType;
                        if (newR.productModel) matched.productModel = newR.productModel;
                        if (newR.customerName) matched.customerName = newR.customerName;
                    } else {
                        // 新维度行动态新增
                        act.targetRows.push(newR);
                    }
                });

                // 动态提取业务员和行业字典
                var distinctReps = [];
                var distinctIndustries = [];
                var distinctProducts = [];
                act.targetRows.forEach(function(r) {
                    if (r.rep && distinctReps.indexOf(r.rep) === -1) distinctReps.push(r.rep);
                    if (r.industry && distinctIndustries.indexOf(r.industry) === -1) distinctIndustries.push(r.industry);
                    if (r.product && distinctProducts.indexOf(r.product) === -1) distinctProducts.push(r.product);
                });

                act.dimensions = {
                    reps: distinctReps.length > 0 ? distinctReps : (act.dimensions && act.dimensions.reps) || defaultSbuData.dimensions.reps,
                    industries: distinctIndustries.length > 0 ? distinctIndustries : (act.dimensions && act.dimensions.industries) || defaultSbuData.dimensions.industries,
                    products: distinctProducts.length > 0 ? distinctProducts : (act.dimensions && act.dimensions.products) || defaultSbuData.dimensions.products
                };
            }

            saveStore(store);
            return store.monthlyPipelineStatus[periodKey];
        },
        // 聚合计算 15 项 BI 派生实绩与经营分析指标 (支持按行业、按业务员、全局总计)
        // 获取与目标填报 100% 同构的 15 项实际经营分析矩阵明细行 (业务员 x 行业 x 产品 x 15项指标 x 12个月)
        getActualMatrixRows: function (filters) {
            filters = filters || {};
            var ver = getActiveVersion();
            var reps = ver.dimensions.reps || defaultSbuData.dimensions.reps;
            var industries = ver.dimensions.industries || defaultSbuData.dimensions.industries;
            var products = ver.dimensions.products || defaultSbuData.dimensions.products;
            var t_rows = ver.targetRows;
            var a_rows = ver.actualRows;

            function findRow(rows, rep, ind, prod, indicator) {
                for (var i = 0; i < rows.length; i++) {
                    var r = rows[i];
                    if (r.rep === rep && r.industry === ind && r.product === prod && r.indicator === indicator) {
                        return r;
                    }
                }
                return null;
            }

            var matrixRows = [];

            reps.forEach(function (rep) {
                if (filters.rep && filters.rep !== 'all' && filters.rep !== rep) return;

                industries.forEach(function (ind) {
                    if (filters.industry && filters.industry !== 'all' && filters.industry !== ind) return;

                    products.forEach(function (prod) {
                        if (filters.product && filters.product !== 'all' && filters.product !== prod) return;

                        // 目标行
                        var r_ts = findRow(t_rows, rep, ind, prod, "销售目标额");
                        var r_tm = findRow(t_rows, rep, ind, prod, "毛利目标");
                        var r_oh = findRow(t_rows, rep, ind, prod, "已接单未生产") || findRow(t_rows, rep, ind, prod, "在手订单");
                        var r_oht = findRow(t_rows, rep, ind, prod, "已接单未生产目标") || findRow(t_rows, rep, ind, prod, "在手订单目标");
                        var r_opp = findRow(t_rows, rep, ind, prod, "目标客户机会");
                        var r_oppt = findRow(t_rows, rep, ind, prod, "目标客户机会目标");

                        // 实绩行
                        var r_as = findRow(a_rows, rep, ind, prod, "实绩销售额");
                        var r_am = findRow(a_rows, rep, ind, prod, "实绩毛利");

                        var ts_m = (r_ts && r_ts.months) ? r_ts.months : [0,0,0,0,0,0,0,0,0,0,0,0];
                        var ts_ann = (r_ts && r_ts.annual) ? r_ts.annual : ts_m.reduce(function(a,b){return a+b;},0);

                        var tm_m = (r_tm && r_tm.months) ? r_tm.months : [0,0,0,0,0,0,0,0,0,0,0,0];
                        var tm_ann = (r_tm && r_tm.annual) ? r_tm.annual : tm_m.reduce(function(a,b){return a+b;},0);

                        var as_m = (r_as && r_as.months) ? r_as.months : [0,0,0,0,0,0,0,0,0,0,0,0];
                        var as_ann = (r_as && r_as.annual) ? r_as.annual : as_m.reduce(function(a,b){return a+b;},0);

                        var am_m = (r_am && r_am.months) ? r_am.months : [0,0,0,0,0,0,0,0,0,0,0,0];
                        var am_ann = (r_am && r_am.annual) ? r_am.annual : am_m.reduce(function(a,b){return a+b;},0);

                        var oh_m = (r_oh && r_oh.months) ? r_oh.months : [0,0,0,0,0,0,0,0,0,0,0,0];
                        var oht_m = (r_oht && r_oht.months) ? r_oht.months : [0,0,0,0,0,0,0,0,0,0,0,0];
                        var opp_m = (r_opp && r_opp.months) ? r_opp.months : [0,0,0,0,0,0,0,0,0,0,0,0];
                        var oppt_m = (r_oppt && r_oppt.months) ? r_oppt.months : [0,0,0,0,0,0,0,0,0,0,0,0];

                        // 1. 本月销售额
                        var m1 = as_m.map(function(v){ return Math.round(v); });
                        var a1 = Math.round(as_ann);

                        // 2. 本月毛利
                        var m2 = am_m.map(function(v){ return +(v.toFixed(1)); });
                        var a2 = +(am_ann.toFixed(1));

                        // 3. 本月毛利率
                        var m3 = as_m.map(function(as_v, i){
                            var am_v = am_m[i] || 0;
                            return as_v > 0 ? +((am_v / as_v) * 100).toFixed(1) : 0;
                        });
                        var a3 = as_ann > 0 ? +((am_ann / as_ann) * 100).toFixed(1) : 0;

                        // 4. 本月目标达成率
                        var m4 = as_m.map(function(as_v, i){
                            var ts_v = ts_m[i] || 0;
                            return ts_v > 0 ? +((as_v / ts_v) * 100).toFixed(1) : 0;
                        });
                        var a4 = ts_ann > 0 ? +((as_ann / ts_ann) * 100).toFixed(1) : 0;

                        // 5. 累计销售额
                        var cum_as = [];
                        var cur_as = 0;
                        as_m.forEach(function(v){
                            cur_as += v;
                            cum_as.push(Math.round(cur_as));
                        });
                        var m5 = cum_as;
                        var a5 = Math.round(cur_as);

                        // 6. 累计毛利
                        var cum_am = [];
                        var cur_am = 0;
                        am_m.forEach(function(v){
                            cur_am += v;
                            cum_am.push(+(cur_am.toFixed(1)));
                        });
                        var m6 = cum_am;
                        var a6 = +(cur_am.toFixed(1));

                        // 7. 累计毛利率
                        var m7 = cum_as.map(function(as_c, i){
                            var am_c = cum_am[i] || 0;
                            return as_c > 0 ? +((am_c / as_c) * 100).toFixed(1) : 0;
                        });
                        var a7 = cur_as > 0 ? +((cur_am / cur_as) * 100).toFixed(1) : 0;

                        // 8. 累计达成率
                        var cum_ts = [];
                        var cur_ts = 0;
                        ts_m.forEach(function(v){
                            cur_ts += v;
                            cum_ts.push(Math.round(cur_ts));
                        });
                        var m8 = cum_as.map(function(as_c, i){
                            var ts_c = cum_ts[i] || 0;
                            return ts_c > 0 ? +((as_c / ts_c) * 100).toFixed(1) : 0;
                        });
                        var a8 = cur_ts > 0 ? +((cur_as / cur_ts) * 100).toFixed(1) : 0;

                        // 9. 与目标差距
                        var m9 = cum_as.map(function(as_c, i){
                            var ts_c = cum_ts[i] || 0;
                            return Math.round(as_c - ts_c);
                        });
                        var a9 = Math.round(cur_as - cur_ts);

                        // 10. 已接单未生产达成率
                        var m10 = oh_m.map(function(oh_v, i){
                            var oht_v = oht_m[i] || 0;
                            return oht_v > 0 ? +((oh_v / oht_v) * 100).toFixed(1) : 0;
                        });
                        var a10 = m10[8] || 0;

                        // 11. 目标客户机会达成率
                        var m11 = opp_m.map(function(opp_v, i){
                            var oppt_v = oppt_m[i] || 0;
                            return oppt_v > 0 ? +((opp_v / oppt_v) * 100).toFixed(1) : 0;
                        });
                        var a11 = m11[8] || 0;

                        // 12. 预测合计
                        var m12 = oh_m.map(function(oh_v, i){
                            var opp_v = opp_m[i] || 0;
                            return Math.round(oh_v + opp_v);
                        });
                        var a12 = m12[8] || 0;

                        // 13. 剩余目标
                        var m13 = cum_as.map(function(as_c){
                            return Math.round(Math.max(0, ts_ann - as_c));
                        });
                        var a13 = Math.round(Math.max(0, ts_ann - cur_as));

                        // 14. 预测达成率
                        var m14 = m12.map(function(pred, i){
                            var rem = m13[i] || 0;
                            return rem > 0 ? +((pred / rem) * 100).toFixed(1) : 0;
                        });
                        var a14 = a13 > 0 ? +((a12 / a13) * 100).toFixed(1) : 0;

                        // 15. 预测与目标差距
                        var m15 = m12.map(function(pred, i){
                            var rem = m13[i] || 0;
                            return Math.round(pred - rem);
                        });
                        var a15 = Math.round(a12 - a13);

                        var items15 = [
                            { ind: "本月销售额", months: m1, annual: a1, type: "currency", group: "core" },
                            { ind: "本月毛利", months: m2, annual: a2, type: "currency", group: "core" },
                            { ind: "本月毛利率", months: m3, annual: a3, type: "percent", group: "core" },
                            { ind: "本月目标达成率", months: m4, annual: a4, type: "rate", group: "core" },
                            { ind: "累计销售额", months: m5, annual: a5, type: "currency", group: "cum" },
                            { ind: "累计毛利", months: m6, annual: a6, type: "currency", group: "cum" },
                            { ind: "累计毛利率", months: m7, annual: a7, type: "percent", group: "cum" },
                            { ind: "累计达成率", months: m8, annual: a8, type: "rate", group: "cum" },
                            { ind: "与目标差距", months: m9, annual: a9, type: "gap", group: "cum" },
                            { ind: "已接单未生产达成率", months: m10, annual: a10, type: "rate", group: "pipe" },
                            { ind: "目标客户机会达成率", months: m11, annual: a11, type: "rate", group: "pipe" },
                            { ind: "预测合计", months: m12, annual: a12, type: "currency", group: "pipe" },
                            { ind: "剩余目标", months: m13, annual: a13, type: "currency", group: "pipe" },
                            { ind: "预测达成率", months: m14, annual: a14, type: "rate", group: "pipe" },
                            { ind: "预测与目标差距", months: m15, annual: a15, type: "gap", group: "pipe" }
                        ];

                        items15.forEach(function (itemObj) {
                            if (filters.group && filters.group !== 'all' && filters.group !== itemObj.group) return;
                            matrixRows.push({
                                rep: rep,
                                industry: ind,
                                product: prod,
                                region: "华东",
                                indicator: itemObj.ind,
                                months: itemObj.months,
                                annual: itemObj.annual,
                                type: itemObj.type,
                                group: itemObj.group,
                                remark: ""
                            });
                        });
                    });
                });
            });

            return matrixRows;
        },
        getActualMetricsSummary: function (monthIdx, groupBy) {
            monthIdx = (monthIdx >= 1 && monthIdx <= 12) ? monthIdx : 9;
            groupBy = groupBy || 'industry'; // 'industry' | 'rep'

            var ver = getActiveVersion();
            var dims = (groupBy === 'industry') ? ver.dimensions.industries : ver.dimensions.reps;
            var tRows = ver.targetRows;
            var aRows = ver.actualRows;

            var items = dims.map(function (dimName) {
                var annualTargetOrder = 0;
                var monthTargetOrder = 0;
                var cumTargetOrder = 0;

                var onHandOrder = 0;
                var onHandTarget = 0;
                var oppAmt = 0;
                var oppTarget = 0;

                tRows.forEach(function (r) {
                    var match = (groupBy === 'industry') ? (r.industry === dimName) : (r.rep === dimName);
                    if (match) {
                        if (r.indicator === '销售目标额') {
                            annualTargetOrder += (r.annual || 0);
                            monthTargetOrder += (r.months[monthIdx - 1] || 0);
                            for (var m = 0; m < monthIdx; m++) {
                                cumTargetOrder += (r.months[m] || 0);
                            }
                        } else if (r.indicator === '已接单未生产' || r.indicator === '在手订单') {
                            onHandOrder += (r.months[monthIdx - 1] || 0);
                        } else if (r.indicator === '已接单未生产目标' || r.indicator === '在手订单目标') {
                            onHandTarget += (r.months[monthIdx - 1] || 0);
                        } else if (r.indicator === '目标客户机会') {
                            oppAmt += (r.months[monthIdx - 1] || 0);
                        } else if (r.indicator === '目标客户机会目标') {
                            oppTarget += (r.months[monthIdx - 1] || 0);
                        }
                    }
                });

                var monthActualOrder = 0;
                var monthActualMargin = 0;
                var cumActualOrder = 0;
                var cumActualMargin = 0;

                aRows.forEach(function (r) {
                    var match = (groupBy === 'industry') ? (r.industry === dimName) : (r.rep === dimName);
                    if (match) {
                        if (r.indicator === '实绩销售额') {
                            monthActualOrder += (r.months[monthIdx - 1] || 0);
                            for (var m = 0; m < monthIdx; m++) {
                                cumActualOrder += (r.months[m] || 0);
                            }
                        } else if (r.indicator === '实绩毛利') {
                            monthActualMargin += (r.months[monthIdx - 1] || 0);
                            for (var m = 0; m < monthIdx; m++) {
                                cumActualMargin += (r.months[m] || 0);
                            }
                        }
                    }
                });

                var monthMarginRate = monthActualOrder > 0 ? ((monthActualMargin / monthActualOrder) * 100) : 0;
                var monthTargetRate = monthTargetOrder > 0 ? ((monthActualOrder / monthTargetOrder) * 100) : 0;
                var cumMarginRate = cumActualOrder > 0 ? ((cumActualMargin / cumActualOrder) * 100) : 0;
                var cumTargetRate = cumTargetOrder > 0 ? ((cumActualOrder / cumTargetOrder) * 100) : 0;
                var gapToTarget = cumActualOrder - cumTargetOrder;

                var onHandRate = onHandTarget > 0 ? ((onHandOrder / onHandTarget) * 100) : 0;
                var oppRate = oppTarget > 0 ? ((oppAmt / oppTarget) * 100) : 0;

                var predictTotal = onHandOrder + oppAmt;
                var remainingTarget = Math.max(0, annualTargetOrder - cumActualOrder);
                var predictRate = remainingTarget > 0 ? ((predictTotal / remainingTarget) * 100) : 0;
                var predictGap = predictTotal - remainingTarget;

                return {
                    name: dimName,
                    // 15 项核心指标
                    monthActualOrder: Math.round(monthActualOrder),
                    monthActualMargin: +(monthActualMargin.toFixed(1)),
                    monthMarginRate: +(monthMarginRate.toFixed(1)),
                    monthTargetRate: +(monthTargetRate.toFixed(1)),
                    cumActualOrder: Math.round(cumActualOrder),
                    cumActualMargin: +(cumActualMargin.toFixed(1)),
                    cumMarginRate: +(cumMarginRate.toFixed(1)),
                    cumTargetRate: +(cumTargetRate.toFixed(1)),
                    gapToTarget: Math.round(gapToTarget),
                    onHandRate: +(onHandRate.toFixed(1)),
                    oppRate: +(oppRate.toFixed(1)),
                    predictTotal: Math.round(predictTotal),
                    remainingTarget: Math.round(remainingTarget),
                    predictRate: +(predictRate.toFixed(1)),
                    predictGap: Math.round(predictGap),
                    // 辅助基准
                    annualTargetOrder: Math.round(annualTargetOrder),
                    monthTargetOrder: Math.round(monthTargetOrder),
                    cumTargetOrder: Math.round(cumTargetOrder),
                    onHandOrder: Math.round(onHandOrder),
                    oppAmt: Math.round(oppAmt)
                };
            });

            // 计算全局总计行
            var total = {
                name: (groupBy === 'industry') ? 'SBU 经营全盘总计' : '营销中心全员总计',
                monthActualOrder: 0,
                monthActualMargin: 0,
                monthMarginRate: 0,
                monthTargetRate: 0,
                cumActualOrder: 0,
                cumActualMargin: 0,
                cumMarginRate: 0,
                cumTargetRate: 0,
                gapToTarget: 0,
                onHandRate: 0,
                oppRate: 0,
                predictTotal: 0,
                remainingTarget: 0,
                predictRate: 0,
                predictGap: 0,
                annualTargetOrder: 0,
                monthTargetOrder: 0,
                cumTargetOrder: 0,
                onHandOrder: 0,
                oppAmt: 0,
                onHandTarget: 0,
                oppTarget: 0
            };

            items.forEach(function (it) {
                total.monthActualOrder += it.monthActualOrder;
                total.monthActualMargin += it.monthActualMargin;
                total.cumActualOrder += it.cumActualOrder;
                total.cumActualMargin += it.cumActualMargin;
                total.annualTargetOrder += it.annualTargetOrder;
                total.monthTargetOrder += it.monthTargetOrder;
                total.cumTargetOrder += it.cumTargetOrder;
                total.onHandOrder += it.onHandOrder;
                total.oppAmt += it.oppAmt;
            });

            total.monthMarginRate = total.monthActualOrder > 0 ? +((total.monthActualMargin / total.monthActualOrder) * 100).toFixed(1) : 0;
            total.monthTargetRate = total.monthTargetOrder > 0 ? +((total.monthActualOrder / total.monthTargetOrder) * 100).toFixed(1) : 0;
            total.cumMarginRate = total.cumActualOrder > 0 ? +((total.cumActualMargin / total.cumActualOrder) * 100).toFixed(1) : 0;
            total.cumTargetRate = total.cumTargetOrder > 0 ? +((total.cumActualOrder / total.cumTargetOrder) * 100).toFixed(1) : 0;
            total.gapToTarget = Math.round(total.cumActualOrder - total.cumTargetOrder);

            total.predictTotal = total.onHandOrder + total.oppAmt;
            total.remainingTarget = Math.max(0, total.annualTargetOrder - total.cumActualOrder);
            total.predictRate = total.remainingTarget > 0 ? +((total.predictTotal / total.remainingTarget) * 100).toFixed(1) : 0;
            total.predictGap = Math.round(total.predictTotal - total.remainingTarget);
            total.onHandRate = +(items.reduce(function(a,b){return a+b.onHandRate;}, 0) / (items.length||1)).toFixed(1);
            total.oppRate = +(items.reduce(function(a,b){return a+b.oppRate;}, 0) / (items.length||1)).toFixed(1);

            return {
                items: items,
                total: total,
                monthIdx: monthIdx,
                groupBy: groupBy
            };
        },
        getAllVersions: function () {
            return loadStore().versions;
        },
        setActiveVersion: function (versionNo) {
            var store = loadStore();
            store.versions.forEach(function (v) {
                v.isActive = (v.versionNo === versionNo);
            });
            store.activeVersionNo = versionNo;
            saveStore(store);
        },
        /* =========================================================
         * 7. 行业经营分析矩阵 (严格对齐 Excel「行业经营分析表」)
         * ========================================================= */
        getIndustryAnalysisMatrix: function(month) {
            month = month || 9;
            var monthIdx = month - 1;
            var tRows = this.getTargetRows();
            var aRows = this.getActualRows();
            var industries = ['空调制冷', '工业制冷', '船舶行业', '储能行业', '数据中心'];

            var matrix = {};
            industries.forEach(function(ind) {
                var indT = tRows.filter(function(r){ return r.industry === ind; });
                var indA = aRows.filter(function(r){ return r.industry === ind; });

                // 1. 年度销售额目标
                var sTRows = indT.filter(function(r){ return r.indicator === '销售目标额'; });
                var annualSalesTarget = sTRows.reduce(function(sum, r){ return sum + (r.annual || 0); }, 0);

                // 2. 年度毛利目标
                var mTRows = indT.filter(function(r){ return r.indicator === '毛利目标'; });
                var annualMarginTarget = mTRows.reduce(function(sum, r){ return sum + (r.annual || 0); }, 0);

                // 3. 年度毛利率目标
                var annualMarginRate = annualSalesTarget > 0 ? (annualMarginTarget / annualSalesTarget) : 0;

                // 4. 已接单未生产目标 (月末时点值)
                var onhandTRows = indT.filter(function(r){ return r.indicator === '已接单未生产目标' || r.indicator === '在手订单目标'; });
                var onhandTarget = onhandTRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 5. 目标客户机会目标 (月末时点值)
                var oppTRows = indT.filter(function(r){ return r.indicator === '目标客户机会目标'; });
                var oppTarget = oppTRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 6. 本月销售额
                var sARows = indA.filter(function(r){ return r.indicator === '实绩销售额'; });
                var curSales = sARows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 7. 本月毛利
                var mARows = indA.filter(function(r){ return r.indicator === '实绩毛利'; });
                var curMargin = mARows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 8. 本月毛利率
                var curMarginRate = curSales > 0 ? (curMargin / curSales) : 0;

                // 9. 本月目标达成率
                var curSalesTarget = sTRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);
                if (curSalesTarget === 0) curSalesTarget = annualSalesTarget / 12;
                var curSalesAchv = curSalesTarget > 0 ? (curSales / curSalesTarget) : 0;

                // 10. 累计销售额 (1~month)
                var cumSales = sARows.reduce(function(sum, r){
                    var sub = (r.months || []).slice(0, monthIdx + 1);
                    return sum + sub.reduce(function(s, v){ return s + (v || 0); }, 0);
                }, 0);

                // 11. 累计毛利 (1~month)
                var cumMargin = mARows.reduce(function(sum, r){
                    var sub = (r.months || []).slice(0, monthIdx + 1);
                    return sum + sub.reduce(function(s, v){ return s + (v || 0); }, 0);
                }, 0);

                // 12. 累计毛利率
                var cumMarginRate = cumSales > 0 ? (cumMargin / cumSales) : 0;

                // 13. 累计达成率 (全年)
                var cumSalesAchv = annualSalesTarget > 0 ? (cumSales / annualSalesTarget) : 0;

                // 14. 与目标差距
                var gapTarget = cumSales - annualSalesTarget;

                // 15. 已接单未生产 (本月末)
                var onhandRows = indT.filter(function(r){ return r.indicator === '已接单未生产' || r.indicator === '在手订单'; });
                var onhandAct = onhandRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 16. 目标客户机会 (本月末)
                var oppRows = indT.filter(function(r){ return r.indicator === '目标客户机会'; });
                var oppAct = oppRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 17. 预测合计
                var forecastSum = onhandAct + oppAct;

                // 18. 预测与目标差距 = (在手+机会) - (年度目标 - 累计销售额)
                var forecastGap = forecastSum - (annualSalesTarget - cumSales);

                matrix[ind] = {
                    annualSalesTarget: annualSalesTarget,
                    annualMarginTarget: annualMarginTarget,
                    annualMarginRate: annualMarginRate,
                    onhandTarget: onhandTarget,
                    oppTarget: oppTarget,
                    curSales: curSales,
                    curMargin: curMargin,
                    curMarginRate: curMarginRate,
                    curSalesAchv: curSalesAchv,
                    cumSales: cumSales,
                    cumMargin: cumMargin,
                    cumMarginRate: cumMarginRate,
                    cumSalesAchv: cumSalesAchv,
                    gapTarget: gapTarget,
                    onhandAct: onhandAct,
                    oppAct: oppAct,
                    forecastSum: forecastSum,
                    forecastGap: forecastGap
                };
            });

            // 计算合计列
            var total = {
                annualSalesTarget: 0,
                annualMarginTarget: 0,
                onhandTarget: 0,
                oppTarget: 0,
                curSales: 0,
                curMargin: 0,
                cumSales: 0,
                cumMargin: 0,
                onhandAct: 0,
                oppAct: 0
            };
            industries.forEach(function(ind) {
                var d = matrix[ind];
                total.annualSalesTarget += d.annualSalesTarget;
                total.annualMarginTarget += d.annualMarginTarget;
                total.onhandTarget += d.onhandTarget;
                total.oppTarget += d.oppTarget;
                total.curSales += d.curSales;
                total.curMargin += d.curMargin;
                total.cumSales += d.cumSales;
                total.cumMargin += d.cumMargin;
                total.onhandAct += d.onhandAct;
                total.oppAct += d.oppAct;
            });

            total.annualMarginRate = total.annualSalesTarget > 0 ? (total.annualMarginTarget / total.annualSalesTarget) : 0;
            total.curMarginRate = total.curSales > 0 ? (total.curMargin / total.curSales) : 0;
            total.curSalesAchv = total.annualSalesTarget > 0 ? (total.curSales / (total.annualSalesTarget / 12)) : 0;
            total.cumMarginRate = total.cumSales > 0 ? (total.cumMargin / total.cumSales) : 0;
            total.cumSalesAchv = total.annualSalesTarget > 0 ? (total.cumSales / total.annualSalesTarget) : 0;
            total.gapTarget = total.cumSales - total.annualSalesTarget;
            total.forecastSum = total.onhandAct + total.oppAct;
            total.forecastGap = total.forecastSum - (total.annualSalesTarget - total.cumSales);

            matrix['合计'] = total;
            return {
                industries: industries,
                month: month,
                matrix: matrix
            };
        },

        /* =========================================================
         * 8. 业务员目标管理矩阵 (严格对齐 Excel「业务员目标管理表」)
         * 支持查单个业务员，也支持查全部业务员汇总 (rep = 'all' 或空)
         * ========================================================= */
        getSalesRepAnalysisMatrix: function(rep, month) {
            month = month || 9;
            var monthIdx = month - 1;
            var tRows = this.getTargetRows();
            var aRows = this.getActualRows();
            var isAllReps = (!rep || rep === 'all' || rep === '全部业务员' || rep === '全部');
            if (!isAllReps) {
                tRows = tRows.filter(function(r){ return r.rep === rep; });
                aRows = aRows.filter(function(r){ return r.rep === rep; });
            }

            var industries = ['空调制冷', '工业制冷', '船舶行业', '储能行业', '数据中心'];
            var matrix = {};
            industries.forEach(function(ind) {
                var indT = tRows.filter(function(r){ return r.industry === ind; });
                var indA = aRows.filter(function(r){ return r.industry === ind; });

                // 1. 年度销售额目标
                var sTRows = indT.filter(function(r){ return r.indicator === '销售目标额'; });
                var annualSalesTarget = sTRows.reduce(function(sum, r){ return sum + (r.annual || 0); }, 0);

                // 2. 年度毛利目标
                var mTRows = indT.filter(function(r){ return r.indicator === '毛利目标'; });
                var annualMarginTarget = mTRows.reduce(function(sum, r){ return sum + (r.annual || 0); }, 0);

                // 3. 年度毛利率目标
                var annualMarginRate = annualSalesTarget > 0 ? (annualMarginTarget / annualSalesTarget) : 0;

                // 4. 已接单未生产目标 (月末时点值)
                var onhandTRows = indT.filter(function(r){ return r.indicator === '已接单未生产目标' || r.indicator === '在手订单目标'; });
                var onhandTarget = onhandTRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 5. 目标客户机会目标 (月末时点值)
                var oppTRows = indT.filter(function(r){ return r.indicator === '目标客户机会目标'; });
                var oppTarget = oppTRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 6. 本月销售额
                var sARows = indA.filter(function(r){ return r.indicator === '实绩销售额'; });
                var curSales = sARows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 7. 本月毛利
                var mARows = indA.filter(function(r){ return r.indicator === '实绩毛利'; });
                var curMargin = mARows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 8. 本月毛利率
                var curMarginRate = curSales > 0 ? (curMargin / curSales) : 0;

                // 9. 本月目标达成率
                var curSalesTarget = sTRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);
                if (curSalesTarget === 0) curSalesTarget = annualSalesTarget / 12;
                var curSalesAchv = curSalesTarget > 0 ? (curSales / curSalesTarget) : 0;

                // 10. 累计销售额 (1~month)
                var cumSales = sARows.reduce(function(sum, r){
                    var sub = (r.months || []).slice(0, monthIdx + 1);
                    return sum + sub.reduce(function(s, v){ return s + (v || 0); }, 0);
                }, 0);

                // 11. 累计毛利 (1~month)
                var cumMargin = mARows.reduce(function(sum, r){
                    var sub = (r.months || []).slice(0, monthIdx + 1);
                    return sum + sub.reduce(function(s, v){ return s + (v || 0); }, 0);
                }, 0);

                // 12. 累计毛利率
                var cumMarginRate = cumSales > 0 ? (cumMargin / cumSales) : 0;

                // 13. 累计达成率 (全年)
                var cumSalesAchv = annualSalesTarget > 0 ? (cumSales / annualSalesTarget) : 0;

                // 15. 已接单未生产 (本月末)
                var onhandRows = indT.filter(function(r){ return r.indicator === '已接单未生产' || r.indicator === '在手订单'; });
                var onhandAct = onhandRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                // 16. 目标客户机会 (本月末)
                var oppRows = indT.filter(function(r){ return r.indicator === '目标客户机会'; });
                var oppAct = oppRows.reduce(function(sum, r){ return sum + ((r.months && r.months[monthIdx]) || 0); }, 0);

                matrix[ind] = {
                    annualSalesTarget: annualSalesTarget,
                    annualMarginTarget: annualMarginTarget,
                    annualMarginRate: annualMarginRate,
                    onhandTarget: onhandTarget,
                    oppTarget: oppTarget,
                    curSales: curSales,
                    curMargin: curMargin,
                    curMarginRate: curMarginRate,
                    curSalesAchv: curSalesAchv,
                    cumSales: cumSales,
                    cumMargin: cumMargin,
                    cumMarginRate: cumMarginRate,
                    cumSalesAchv: cumSalesAchv,
                    onhandAct: onhandAct,
                    oppAct: oppAct
                };
            });

            // 计算合计列
            var total = {
                annualSalesTarget: 0,
                annualMarginTarget: 0,
                onhandTarget: 0,
                oppTarget: 0,
                curSales: 0,
                curMargin: 0,
                cumSales: 0,
                cumMargin: 0,
                onhandAct: 0,
                oppAct: 0
            };
            industries.forEach(function(ind) {
                var d = matrix[ind];
                total.annualSalesTarget += d.annualSalesTarget;
                total.annualMarginTarget += d.annualMarginTarget;
                total.onhandTarget += d.onhandTarget;
                total.oppTarget += d.oppTarget;
                total.curSales += d.curSales;
                total.curMargin += d.curMargin;
                total.cumSales += d.cumSales;
                total.cumMargin += d.cumMargin;
                total.onhandAct += d.onhandAct;
                total.oppAct += d.oppAct;
            });

            total.annualMarginRate = total.annualSalesTarget > 0 ? (total.annualMarginTarget / total.annualSalesTarget) : 0;
            total.curMarginRate = total.curSales > 0 ? (total.curMargin / total.curSales) : 0;
            total.curSalesAchv = total.annualSalesTarget > 0 ? (total.curSales / (total.annualSalesTarget / 12)) : 0;
            total.cumMarginRate = total.cumSales > 0 ? (total.cumMargin / total.cumSales) : 0;
            total.cumSalesAchv = total.annualSalesTarget > 0 ? (total.cumSales / total.annualSalesTarget) : 0;

            matrix['合计'] = total;
            return {
                rep: isAllReps ? '全部业务员 (汇总)' : rep,
                isAllReps: isAllReps,
                industries: industries,
                month: month,
                matrix: matrix
            };
        },

    };
})();
