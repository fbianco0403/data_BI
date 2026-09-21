# 宝得企业经营管理与 BI 决策分析平台 (Baode BI Platform)

## 📌 项目简介
**宝得企业经营管理与 BI 决策分析平台** 是一套面向制造与高科技企业集团的一体化企业经营驾驶舱与多维运营分析大盘系统。平台围绕企业价值链核心环节，覆盖集团经营驾驶舱、销售分析中心、研发效能、敏捷生产、供应链采购、品质管理、设备运维、财务资金管控及目标填报录入等核心业务模块，帮助管理层与各业务单元（SBU）实现由宏观指标到微观明细数据的无缝下钻与智能决策。

---

## 🚀 核心模块与功能

### 1. 核心决策层
- **企业经营驾驶舱 (`executive-dashboard.html`)**：
  - 汇总企业全盘核心 KPI（营收、接单额、毛利率、净利润、交付达成率等）；
  - 核心经营指标支持多维点击穿透与明细数据弹窗下钻；
  - 动态关联筛选器（SBU、时间维度、产品线等）；
  - 支持将穿透下钻明细直接导出为规范的 **Excel (.xlsx)** 报表。
- **综合门户 (`portal.html` / `index.html`)**：快速直达各中心模块的导航台。

### 2. 销售与营销中心
- **销售全景分析中心 (`sales-center.html`)**：业绩目标达成率、销售漏斗、大区/行业分布分布。
- **行业细分维度看板 (`sales-industry.html`)**：按垂直行业深度分析客户渗透与市场份额。
- **销售代表看板 (`sales-rep.html`)**：人员业绩考核、回款跟进与商机画像。

### 3. 研发与项目管理
- **研发分析中心 (`rd-center.html`)**：项目研发投入产出比、交付周期、研发人效、专利与版本发布进度。
- **项目管理中心 (`project-center.html`)**：重点里程碑阶段管理与甘特视图。
- **任务与工单中心 (`task-center.html`)**：跨部门协作工单跟踪与逾期预警。

### 4. 生产制造与品质设备
- **生产分析中心 (`production-center.html`)**：车间排产进度、产能负荷、标准工时与交付履约率。
- **质量管理中心 (`quality-center.html`)**：来料/制程/成品不良率趋势、一次检验合格率（FPY）、质量客诉闭环分析。
- **设备运行中心 (`equipment-center.html`)**：设备综合效率（OEE）、稼动率、故障停机时长与维保计划。

### 5. 供应链与仓储库存
- **采购分析中心 (`procurement-center.html`)**：供应商综合交期达成率、采购降本趋势、供应商评级。
- **库存管理中心 (`inventory-center.html`)**：原料/半成品/成品呆滞分析、周转天数（ITO）、库容利用率。
- **备库与计划中心 (`plan-inventory-center.html`)**：安全库存预警与生产备料计划。

### 6. 财务与资金管控
- **财务分析中心 (`finance-center.html`)**：三张表核心指标、成本结构构成、应收账款（AR）账龄分析。
- **资金管理中心 (`funds-center.html`)**：现金流量预警、资金头寸与收支平衡预测。

### 7. 数据填报与基础管理
- **目标填报中心 (`target-entry.html`)**：SBU 目标导入分解，支持基于模板的 Excel 批量录入与校验。
- **实绩录入中心 (`actual-entry.html` / `finance-entry.html`)**：各周期业务与财务实际数据录入。
- **主数据管理 (`mdm-center.html`)**：组织架构、客户基础信息、物料与产品字典维护。

---

## 🛠️ 技术栈说明

- **前端展示**：标准 HTML5 + 原生 JavaScript (ES6+)
- **样式与布局**：[Tailwind CSS](https://tailwindcss.com/) + 自定义企业级响应式样式 (`assets/css/alfa.css`)
- **图表与可视化**：[Apache ECharts 5.x](https://echarts.apache.org/)
- **图标与动效**：FontAwesome 6.x
- **数据导出与解析**：[SheetJS (xlsx.full.min.js)](https://sheetjs.com/)，支持客户端零依赖无损解析与生成 `.xlsx` 工作簿
- **轻量服务**：内置 Python 微型 HTTP 本地调试服务器

---

## 💻 快速启动 (Quick Start)

### 方式一：使用内置批处理脚本（Windows 推荐）
双击运行根目录下的脚本：
```cmd
start_server.bat
```

### 方式二：使用 Python 命令行启动
在项目根目录下打开终端，执行以下命令：
```bash
python start_server.py
```
启动后，在浏览器中打开：
```
http://localhost:8765/
```
访问经营驾驶舱主页面：
```
http://localhost:8765/dashboard/executive-dashboard.html
```

---

## 📁 模块化目录结构

```plaintext
Baode_BI/
├── assets/                             # [公共资源] 全局样式、共享状态管理脚本、Excel模板
│   ├── css/                            # 样式表 (alfa.css 等)
│   ├── js/                             # 数据状态管理器与核心业务逻辑 (layout.js, sales-target-store.js 等)
│   └── templates/                      # 目标填报与财务导入 Excel 模板
├── index.html                          # [公共主入口] 平台系统门户导航台
├── portal.html                         # [公共门户] 综合门户页面
├── README.md                           # [公共文档] 工程说明文档
├── GEMINI.md                           # [公共规范] 助手交互规范
├── .gitignore                          # [公共配置] Git 忽略规则
├── start_server.bat                    # [公共脚本] 本地服务启动脚本
├── start_server.py                     # [公共脚本] Python HTTP 服务
├── 宝得指标规格说明书_全量.xlsx          # [公共业务文档] 集团全量指标规格蓝图
│
├── dashboard/                          # 【模块1：经营驾驶舱】
│   └── executive-dashboard.html        # 企业经营驾驶舱主页面（含穿透下钻与导出）
│
├── sales/                              # 【模块2：销售分析中心】
│   ├── sales-center.html               # 销售全景分析看板
│   ├── sales-industry.html             # 行业细分维度看板
│   └── sales-rep.html                  # 销售代表业绩看板
│
├── rd/                                 # 【模块3：研发分析中心】
│   └── rd-center.html                  # 研发效能与项目进度分析看板
│
├── production/                         # 【模块4：生产制造与品质分析】
│   ├── production-center.html          # 生产与交付分析看板
│   ├── equipment-center.html           # 设备运行与 OEE 分析看板
│   └── quality-center.html             # 质量控制分析看板
│
├── supply-chain/                       # 【模块5：供应链采购与仓储】
│   ├── procurement-center.html         # 采购与供应商分析看板
│   ├── inventory-center.html           # 仓储与高库龄呆滞物料分析看板
│   └── plan-inventory-center.html      # 备库计划中心看板
│
├── finance/                            # 【模块6：财务与资金中心】
│   ├── finance-center.html             # 财务指标与三张表中心
│   ├── funds-center.html               # 资金调度与现金流中心
│   └── finance-entry.html              # 财务指标实绩录入填报
│
├── project/                            # 【模块7：项目与工单任务】
│   ├── project-center.html             # 重点项目里程碑与分析中心
│   └── task-center.html                # 协作工单与任务跟踪中心
│
├── target/                             # 【模块8：目标与实绩填报】
│   ├── target-entry.html               # SBU 年度/月度目标填报中心
│   ├── actual-entry.html               # 实际业务数据录入中心
│   ├── 目标填报模板_SBU行业管理.xlsx    # SBU 目标填报专属模板
│   └── 目标填报模板_SBU行业管理_v10_示例数据.xlsx
│
└── mdm/                                # 【模块9：主数据管理】
    └── mdm-center.html                 # 基础数据字典与组织架构维护
```
