/* ============================================================
   Baode BI - 任务分析中心统一数据流引擎 (BaodeTaskStore)
   严格对齐企业任务中心真实字段、业务数据与考核统计体系
   ============================================================ */
var BaodeTaskStore = (function () {
    var STORAGE_KEY = 'BAODE_BI_TASK_STORE_2026_REAL_V2';

    // 预置 50 条制造业真实日常事务跟踪明细 (前 9 条 100% 取材于任务中心实景)
    var initialTasks = [
    {
        "id": "TSK-202609-001",
        "name": "统计贴纸模具",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "是",
        "progress": 0,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "张军平",
        "dept": "模具车间",
        "deadline": "超期 1 天",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-002",
        "name": "2500T自动线夹爪损坏",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-07 09:39",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-003",
        "name": "BL240AS-190D回炉曲线确认",
        "status": "待办",
        "statusColor": "orange",
        "isOverdue": "是",
        "progress": 0,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "顾志鹏",
        "dept": "技术工艺部",
        "deadline": "超期 1 天",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-004",
        "name": "BL20内漏（板片密封面间隙）",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "是",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "张冬林",
        "dept": "质保品管部",
        "deadline": "2026-09-04 09:34",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-005",
        "name": "9.2每日异常改善措施提供（模具）",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "谢文杰",
        "dept": "模具车间",
        "deadline": "2026-09-03 09:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-006",
        "name": "修订《供应商准入制度》，增加设备供应商资质审核。",
        "status": "待办",
        "statusColor": "orange",
        "isOverdue": "否",
        "progress": 0,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "万荣云",
        "dept": "供应链采购部",
        "deadline": "2026-09-10 14:49",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-007",
        "name": "封闭二楼平台现有石棉材质，并按环保标准完成",
        "status": "待办",
        "statusColor": "orange",
        "isOverdue": "否",
        "progress": 0,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "万荣云",
        "dept": "综合安环部",
        "deadline": "2026-09-15 14:46",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-008",
        "name": "完善电火灾专项应急预案，并组织全员开展电气火灾扑救知识培训",
        "status": "待办",
        "statusColor": "orange",
        "isOverdue": "否",
        "progress": 0,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "方凯",
        "dept": "综合安环部",
        "deadline": "2026-09-20 14:44",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-009",
        "name": "启动宝辉厂区车间噪音分贝实测，并形成降噪改造方案",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 20,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "方凯",
        "dept": "综合安环部",
        "deadline": "2026-09-30 14:41",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-010",
        "name": "美的定制BR0.2可拆板换急单排产与冲压冲程微调",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 80,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "张军平",
        "dept": "生产制造部",
        "deadline": "2026-09-09 17:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-011",
        "name": "3#大型连续真空钎焊炉网带张紧轮轴承异响检修",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "良好",
        "assigner": "王宇航",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-05 12:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-012",
        "name": "CDU换热器气密性水压氦检试验工装封样确认",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "优秀",
        "assigner": "顾晓丹",
        "owner": "顾志鹏",
        "dept": "技术工艺部",
        "deadline": "2026-09-06 18:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-013",
        "name": "冲压二车间316L板片拉伸减薄率超差问题排查与复检",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 70,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "张冬林",
        "dept": "质保品管部",
        "deadline": "2026-09-09 15:30",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-014",
        "name": "B3-095模具落料刀口崩刃修磨及备件入库",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "良好",
        "assigner": "王宇航",
        "owner": "谢文杰",
        "dept": "模具车间",
        "deadline": "2026-09-04 16:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-015",
        "name": "进口EPDM耐高温密封胶垫到港清关跟踪与外协替代样品送检",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 60,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "万荣云",
        "dept": "供应链采购部",
        "deadline": "2026-09-10 17:00",
        "createdAt": "2026-09-01"
    },
    {
        "id": "TSK-202609-016",
        "name": "焊接车间废气活性炭吸附装置更换滤芯与排放浓度台账建立",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "方凯",
        "dept": "综合安环部",
        "deadline": "2026-09-05 10:30",
        "createdAt": "2026-09-01"
    },
    {
        "id": "TSK-202609-017",
        "name": "2000T油压机主缸比例阀漏油更换与伺服驱动器校准",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 50,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-11 11:30",
        "createdAt": "2026-09-04"
    },
    {
        "id": "TSK-202609-018",
        "name": "BL240板片焊点熔深金相显微镜复核实验",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 40,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "顾志鹏",
        "dept": "技术工艺部",
        "deadline": "2026-09-12 16:30",
        "createdAt": "2026-09-04"
    },
    {
        "id": "TSK-202609-019",
        "name": "9月前三日车间制程不良品评审与隔离标识张贴",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "优秀",
        "assigner": "顾晓丹",
        "owner": "张冬林",
        "dept": "质保品管部",
        "deadline": "2026-09-04 18:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-020",
        "name": "BR0.4板型多工位级进模导柱导套间隙复测",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "张军平",
        "dept": "模具车间",
        "deadline": "2026-09-05 14:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-021",
        "name": "4#真空退火炉热电偶校验与校准报告归档",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-06 14:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-022",
        "name": "BP350机组进出水口法兰焊缝X射线探伤抽检",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "张冬林",
        "dept": "质保品管部",
        "deadline": "2026-09-07 10:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-023",
        "name": "更新冲压车间危险源辨识与风险管控告知卡",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "方凯",
        "dept": "综合安环部",
        "deadline": "2026-09-06 16:30",
        "createdAt": "2026-09-01"
    },
    {
        "id": "TSK-202609-024",
        "name": "外协喷涂厂耐高温漆附着力百格测试跟踪",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 50,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "万荣云",
        "dept": "供应链采购部",
        "deadline": "2026-09-12 15:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-025",
        "name": "冷干机循环水水质硬度与电导率例行监测",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-05 11:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-026",
        "name": "换热板片三坐标反求扫描点云数据拟合对比",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 75,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "顾志鹏",
        "dept": "技术工艺部",
        "deadline": "2026-09-10 17:00",
        "createdAt": "2026-09-04"
    },
    {
        "id": "TSK-202609-027",
        "name": "压延车间废乳化液收集转运联单办理",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "方凯",
        "dept": "综合安环部",
        "deadline": "2026-09-04 15:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-028",
        "name": "BL50快速夹紧定位工装改制及上机验证",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "谢文杰",
        "dept": "模具车间",
        "deadline": "2026-09-06 17:30",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-029",
        "name": "供应商宁波大榭钛材卷料原厂质保单核验",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "万荣云",
        "dept": "供应链采购部",
        "deadline": "2026-09-05 16:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-030",
        "name": "板式换热器出厂标牌激光打标样板核准",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "张冬林",
        "dept": "质保品管部",
        "deadline": "2026-09-05 10:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-031",
        "name": "智能立库一期提升机传感器故障排查",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-04 11:30",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-032",
        "name": "三期厂房配电房防小动物封堵及绝缘垫更换",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "方凯",
        "dept": "综合安环部",
        "deadline": "2026-09-05 14:00",
        "createdAt": "2026-09-01"
    },
    {
        "id": "TSK-202609-033",
        "name": "钎焊炉氢气纯度露点在线传感器校验",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 80,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "顾志鹏",
        "dept": "技术工艺部",
        "deadline": "2026-09-09 16:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-034",
        "name": "模具库房备用冲头氮化层硬度回测抽验",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "张军平",
        "dept": "模具车间",
        "deadline": "2026-09-04 17:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-035",
        "name": "2026年度压力容器制造许可证增项材料整理",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 60,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "顾志鹏",
        "dept": "技术工艺部",
        "deadline": "2026-09-15 18:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-036",
        "name": "行车吊钩防脱钩装置与钢丝绳探伤年检准备",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-06 09:30",
        "createdAt": "2026-09-01"
    },
    {
        "id": "TSK-202609-037",
        "name": "水压试验机高压柱塞泵吸油滤网清洗",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-05 15:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-038",
        "name": "ASME标准管板角焊缝宏观金相试片制作",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 45,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "张冬林",
        "dept": "质保品管部",
        "deadline": "2026-09-11 16:30",
        "createdAt": "2026-09-04"
    },
    {
        "id": "TSK-202609-039",
        "name": "装配车间包装气泡膜与护角采购紧急催单",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "万荣云",
        "dept": "供应链采购部",
        "deadline": "2026-09-04 10:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-040",
        "name": "厂区大门地磅称重传感器调平与计量院校验",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "方凯",
        "dept": "综合安环部",
        "deadline": "2026-09-05 16:00",
        "createdAt": "2026-09-02"
    },
    {
        "id": "TSK-202609-041",
        "name": "BL100高剪切冲切模上下模同轴度调整",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "谢文杰",
        "dept": "模具车间",
        "deadline": "2026-09-07 14:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-042",
        "name": "二车间自动下料机械手气管接头漏气检修",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-06 11:00",
        "createdAt": "2026-09-04"
    },
    {
        "id": "TSK-202609-043",
        "name": "大客户格力冷暖机组现场换热器抗垢清洗指导",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 30,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "顾志鹏",
        "dept": "技术工艺部",
        "deadline": "2026-09-16 17:00",
        "createdAt": "2026-09-04"
    },
    {
        "id": "TSK-202609-044",
        "name": "化学品暂存库防爆静电接地桩电阻实测",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "方凯",
        "dept": "综合安环部",
        "deadline": "2026-09-04 14:30",
        "createdAt": "2026-09-01"
    },
    {
        "id": "TSK-202609-045",
        "name": "高频感应钎焊水冷排管铜接头小批试样会签",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 70,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "张冬林",
        "dept": "质保品管部",
        "deadline": "2026-09-10 15:00",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-046",
        "name": "冲压车间下料边角料回收招标资质初审",
        "status": "待办",
        "statusColor": "orange",
        "isOverdue": "否",
        "progress": 0,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "万荣云",
        "dept": "供应链采购部",
        "deadline": "2026-09-18 17:00",
        "createdAt": "2026-09-04"
    },
    {
        "id": "TSK-202609-047",
        "name": "三坐标测量室恒温恒湿空调机组滤网清洗",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "顾晓丹",
        "owner": "孙凯",
        "dept": "设备动力部",
        "deadline": "2026-09-05 13:30",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-048",
        "name": "BL240板片拉伸凹模镶块表面微裂纹抛光修复",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 85,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "张军平",
        "dept": "模具车间",
        "deadline": "2026-09-08 18:00",
        "createdAt": "2026-09-04"
    },
    {
        "id": "TSK-202609-049",
        "name": "半自动打包机加热丝备件盘点与采购补库",
        "status": "已完成",
        "statusColor": "green",
        "isOverdue": "否",
        "progress": 100,
        "evaluation": "待评",
        "assigner": "王宇航",
        "owner": "万荣云",
        "dept": "供应链采购部",
        "deadline": "2026-09-06 10:30",
        "createdAt": "2026-09-03"
    },
    {
        "id": "TSK-202609-050",
        "name": "厂房外立面消防疏散通道标识漆线翻新划设",
        "status": "进行中",
        "statusColor": "blue",
        "isOverdue": "否",
        "progress": 50,
        "evaluation": "待评",
        "assigner": "李灵",
        "owner": "方凯",
        "dept": "综合安环部",
        "deadline": "2026-09-14 16:00",
        "createdAt": "2026-09-04"
    }
];

    function loadStore() {
        try {
            if (typeof localStorage !== 'undefined') {
                var raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    var parsed = JSON.parse(raw);
                    if (parsed && parsed.tasks && parsed.tasks.length > 0) {
                        return parsed;
                    }
                }
            }
        } catch (e) {
            console.warn('Load task store failed, using defaults.', e);
        }
        return {
            tasks: initialTasks,
            updatedAt: new Date().toISOString()
        };
    }

    function saveStore(data) {
        try {
            data.updatedAt = new Date().toISOString();
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            }
        } catch (e) {
            console.error('Save task store failed.', e);
        }
    }

    return {
        getTasks: function (params) {
            params = params || {};
            var store = loadStore();
            var list = store.tasks;

            if (params.assigner && params.assigner !== '全部') {
                list = list.filter(function (t) { return t.assigner === params.assigner; });
            }
            if (params.owner && params.owner !== '全部') {
                list = list.filter(function (t) { return t.owner === params.owner; });
            }
            if (params.isOverdue && params.isOverdue !== '全部') {
                list = list.filter(function (t) { return t.isOverdue === params.isOverdue; });
            }
            if (params.status && params.status !== '全部') {
                list = list.filter(function (t) { return t.status === params.status; });
            }
            if (params.keyword) {
                var kw = params.keyword.trim().toLowerCase();
                list = list.filter(function (t) {
                    return (t.name && t.name.toLowerCase().indexOf(kw) !== -1) ||
                           (t.id && t.id.toLowerCase().indexOf(kw) !== -1) ||
                           (t.owner && t.owner.toLowerCase().indexOf(kw) !== -1) ||
                           (t.assigner && t.assigner.toLowerCase().indexOf(kw) !== -1) ||
                           (t.dept && t.dept.toLowerCase().indexOf(kw) !== -1);
                });
            }

            return list;
        },

        getKpiSummary: function () {
            var store = loadStore();
            var all = store.tasks;
            var total = all.length;
            var completed = all.filter(function (t) { return t.progress === 100 || t.status === '已完成'; }).length;
            var inProgress = all.filter(function (t) { return t.progress > 0 && t.progress < 100; }).length;
            var pending = all.filter(function (t) { return t.progress === 0 && t.isOverdue !== '是'; }).length;
            var overdue = all.filter(function (t) { return t.isOverdue === '是' && t.progress < 100; }).length;
            
            // 综合按时办结率计算
            var onTimeRate = ((total - overdue) / total * 100).toFixed(1) + '%';

            return {
                total: total,
                inProgress: inProgress,
                completed: completed,
                pending: pending,
                overdue: overdue,
                onTimeRate: onTimeRate
            };
        },

        getDeptDistribution: function () {
            var store = loadStore();
            var depts = ['生产部', '技术部', '销售部', '质保部', '采购部', '财务部', '综合办'];

            function mapDept(t) {
                if (t.dept === '模具车间' || t.dept === '设备动力部' || t.dept === '生产制造部' || t.dept === '生产部') return '生产部';
                if (t.dept === '技术工艺部' || t.dept === '技术部') return '技术部';
                if (t.dept === '质保品管部' || t.dept === '质保部') return '质保部';
                if (t.dept === '供应链采购部' || t.dept === '采购部') return '采购部';
                if (t.dept === '综合安环部' || t.dept === '综合办') return '综合办';
                if (t.dept === '销售部') return '销售部';
                if (t.dept === '财务部') return '财务部';
                if (t.name && (t.name.indexOf('客户') !== -1 || t.name.indexOf('出口') !== -1 || t.name.indexOf('交底') !== -1)) return '销售部';
                if (t.name && (t.name.indexOf('发票') !== -1 || t.name.indexOf('凭证') !== -1 || t.name.indexOf('费用') !== -1)) return '财务部';
                return '综合办';
            }

            var inProgressList = [];
            var completedList = [];
            var pendingList = [];

            depts.forEach(function (dept) {
                var dTasks = store.tasks.filter(function (t) { return mapDept(t) === dept; });
                var comp = dTasks.filter(function (t) { return t.progress === 100 || t.status === '已完成'; }).length;
                var inp = dTasks.filter(function (t) { return t.progress > 0 && t.progress < 100; }).length;
                var pend = dTasks.filter(function (t) { return t.progress === 0; }).length;

                completedList.push(comp);
                inProgressList.push(inp);
                pendingList.push(pend);
            });

            return {
                depts: depts,
                inProgress: inProgressList,
                completed: completedList,
                pending: pendingList
            };
        },

        getOwnerDistribution: function () {
            var store = loadStore();
            var owners = ['孙凯', '张军平', '顾志鹏', '张冬林', '谢文杰', '万荣云', '方凯'];
            var inProgressList = [];
            var completedList = [];
            var pendingList = [];

            owners.forEach(function (owner) {
                var oTasks = store.tasks.filter(function (t) { return t.owner === owner; });
                var comp = oTasks.filter(function (t) { return t.progress === 100 || t.status === '已完成'; }).length;
                var inp = oTasks.filter(function (t) { return t.progress > 0 && t.progress < 100; }).length;
                var pend = oTasks.filter(function (t) { return t.progress === 0; }).length;

                completedList.push(comp);
                inProgressList.push(inp);
                pendingList.push(pend);
            });

            return {
                owners: owners,
                inProgress: inProgressList,
                completed: completedList,
                pending: pendingList
            };
        },

        getStatusPieData: function () {
            var store = loadStore();
            var all = store.tasks;
            var comp = all.filter(function (t) { return t.progress === 100 || t.status === '已完成'; }).length;
            var inp = all.filter(function (t) { return t.progress > 0 && t.progress < 100; }).length;
            var pend = all.filter(function (t) { return t.progress === 0 && t.isOverdue !== '是'; }).length;
            var overdue = all.filter(function (t) { return t.isOverdue === '是' && t.progress < 100; }).length;

            return [
                { name: '已完成', value: comp },
                { name: '进行中', value: inp },
                { name: '待启动', value: pend },
                { name: '超期未结', value: overdue }
            ];
        },

        getAssigners: function () {
            return ['王宇航', '顾晓丹', '李灵'];
        },

        getOwners: function () {
            return ['孙凯', '张军平', '顾志鹏', '张冬林', '谢文杰', '万荣云', '方凯'];
        },

        updateTaskProgress: function (id, progress) {
            var store = loadStore();
            var task = store.tasks.find(function (t) { return t.id === id; });
            if (task) {
                task.progress = progress;
                if (progress >= 100) {
                    task.status = '已完成';
                    task.statusColor = 'green';
                } else if (progress > 0) {
                    task.status = '进行中';
                    task.statusColor = 'blue';
                }
                saveStore(store);
                return true;
            }
            return false;
        }
    };
})();

if (typeof window !== 'undefined') { window.BaodeTaskStore = BaodeTaskStore; }
if (typeof module !== 'undefined' && module.exports) { module.exports = BaodeTaskStore; }
if (typeof global !== 'undefined') { global.BaodeTaskStore = BaodeTaskStore; }
