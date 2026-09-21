/* ============================================================
   Baode BI - 财务指标统一数据流引擎 (BaodeFinanceStore)
   支持按月模板导入、自动差异核算、终审发布与版本历史追溯
   ============================================================ */
var BaodeFinanceStore = (function () {
    var STORAGE_KEY = 'BAODE_BI_FINANCE_STORE_2026_V1';

    var INDICATOR_DEFS = [
        { name: '营业收入', category: '营业收支', unit: '万元', isExpense: false },
        { name: '主营业务成本', category: '成本费用', unit: '万元', isExpense: true },
        { name: '毛利额', category: '盈利成果', unit: '万元', isExpense: false },
        { name: '销售费用', category: '期间费用', unit: '万元', isExpense: true },
        { name: '管理费用', category: '期间费用', unit: '万元', isExpense: true },
        { name: '研发费用', category: '期间费用', unit: '万元', isExpense: true },
        { name: '财务费用', category: '期间费用', unit: '万元', isExpense: true },
        { name: '期间费用合计', category: '期间费用', unit: '万元', isExpense: true },
        { name: '营业利润', category: '盈利成果', unit: '万元', isExpense: false },
        { name: '利润总额', category: '盈利成果', unit: '万元', isExpense: false },
        { name: '净利润', category: '盈利成果', unit: '万元', isExpense: false },
        { name: '息税折旧摊销前利润(EBITDA)', category: '盈利成果', unit: '万元', isExpense: false },
        { name: '经营活动现金流量净额', category: '现金流量', unit: '万元', isExpense: false },
        { name: '投资活动现金流量净额', category: '现金流量', unit: '万元', isExpense: false },
        { name: '筹资活动现金流量净额', category: '现金流量', unit: '万元', isExpense: false },
        { name: '资产负债率', category: '运营效率', unit: '%', isExpense: true },
        { name: '应收账款周转天数', category: '运营效率', unit: '天', isExpense: true },
        { name: '存货周转天数', category: '运营效率', unit: '天', isExpense: true }
    ];

    // 预设真实感业务基础数据基准 (1月 ~ 9月)
    function generateInitialRows() {
        var rows = [];
        var idCounter = 1;

        // 9个月度的基准数值
        var monthBaseData = {
            1: { revP: 2420, revA: 2465, cstP: 2045, cstA: 2072, gpP: 375, gpA: 393, sP: 72, sA: 70, mP: 66, mA: 64, rP: 98, rA: 95, fP: 12, fA: 11, npP: 125, npA: 138, cfP: 185, cfA: 198, debP: 53.2, debA: 52.8, arP: 66, arA: 64, invP: 79, invA: 76 },
            2: { revP: 2280, revA: 2315, cstP: 1930, cstA: 1950, gpP: 350, gpA: 365, sP: 68, sA: 67, mP: 63, mA: 62, rP: 92, rA: 90, fP: 11, fA: 10, npP: 112, npA: 124, cfP: 172, cfA: 180, debP: 53.0, debA: 52.6, arP: 67, arA: 65, invP: 80, invA: 77 },
            3: { revP: 2650, revA: 2710, cstP: 2235, cstA: 2270, gpP: 415, gpA: 440, sP: 78, sA: 76, mP: 70, mA: 68, rP: 106, rA: 104, fP: 13, fA: 12, npP: 145, npA: 162, cfP: 215, cfA: 228, debP: 52.8, debA: 52.3, arP: 65, arA: 63, invP: 78, invA: 75 },
            4: { revP: 2580, revA: 2630, cstP: 2178, cstA: 2205, gpP: 402, gpA: 425, sP: 75, sA: 74, mP: 68, mA: 66, rP: 102, rA: 100, fP: 12, fA: 11, npP: 138, npA: 154, cfP: 205, cfA: 216, debP: 52.6, debA: 52.1, arP: 64, arA: 62, invP: 77, invA: 74 },
            5: { revP: 2610, revA: 2675, cstP: 2202, cstA: 2240, gpP: 408, gpA: 435, sP: 76, sA: 75, mP: 69, mA: 67, rP: 104, rA: 102, fP: 12, fA: 11, npP: 142, npA: 158, cfP: 210, cfA: 222, debP: 52.4, debA: 51.9, arP: 64, arA: 62, invP: 76, invA: 73 },
            6: { revP: 2750, revA: 2840, cstP: 2315, cstA: 2370, gpP: 435, gpA: 470, sP: 82, sA: 80, mP: 73, mA: 71, rP: 110, rA: 108, fP: 14, fA: 13, npP: 156, npA: 178, cfP: 230, cfA: 246, debP: 52.2, debA: 51.6, arP: 63, arA: 61, invP: 75, invA: 72 },
            7: { revP: 2680, revA: 2735, cstP: 2260, cstA: 2292, gpP: 420, gpA: 443, sP: 79, sA: 78, mP: 71, mA: 69, rP: 108, rA: 105, fP: 13, fA: 12, npP: 148, npA: 165, cfP: 220, cfA: 232, debP: 52.0, debA: 51.5, arP: 63, arA: 61, invP: 75, invA: 71 },
            8: { revP: 2720, revA: 2790, cstP: 2295, cstA: 2335, gpP: 425, gpA: 455, sP: 80, sA: 79, mP: 72, mA: 70, rP: 109, rA: 106, fP: 13, fA: 12, npP: 152, npA: 172, cfP: 225, cfA: 238, debP: 51.8, debA: 51.3, arP: 62, arA: 60, invP: 74, invA: 70 },
            9: { revP: 2650, revA: 2780, cstP: 2180, cstA: 2230, gpP: 470, gpA: 550, sP: 82, sA: 80, mP: 72, mA: 70, rP: 110, rA: 112, fP: 14, fA: 13, npP: 178, npA: 215, cfP: 235, cfA: 258, debP: 51.5, debA: 50.8, arP: 61, arA: 59, invP: 73, invA: 69 }
        };

        for (var m = 1; m <= 9; m++) {
            var d = monthBaseData[m];
            var mStr = m + '月';

            var expP = d.sP + d.mP + d.rP + d.fP;
            var expA = d.sA + d.mA + d.rA + d.fA;
            var opP = d.gpP - expP;
            var opA = d.gpA - expA;
            var ebitdaP = Math.round(opP + 78);
            var ebitdaA = Math.round(opA + 82);

            var items = [
                { name: '营业收入', plan: d.revP, actual: d.revA, remark: '主营板换订单交付稳健，大客户需求如期放量' },
                { name: '主营业务成本', plan: d.cstP, actual: d.cstA, remark: '铜铝原材料价格平稳，产能利用率保持高位' },
                { name: '毛利额', plan: d.gpP, actual: d.gpA, remark: '高毛利特种钎焊换热器占比提升带动综合毛利超额' },
                { name: '销售费用', plan: d.sP, actual: d.sA, remark: '战区商务差旅精细化管控，展会预算合理使用' },
                { name: '管理费用', plan: d.mP, actual: d.mA, remark: '数字化办公降本增效成效显著' },
                { name: '研发费用', plan: d.rP, actual: d.rA, remark: '高效微通道板型新模具试验投入如期推进' },
                { name: '财务费用', plan: d.fP, actual: d.fA, remark: '利息支出及汇兑损益在可控区间内' },
                { name: '期间费用合计', plan: expP, actual: expA, remark: '四项期间费用整体受控，费用率优化0.4%' },
                { name: '营业利润', plan: opP, actual: opA, remark: '毛利增厚与费用管控双向驱动营业利润达成' },
                { name: '利润总额', plan: Math.round(opP + 4), actual: Math.round(opA + 6), remark: '含政府研发专项补贴及营业外收支' },
                { name: '净利润', plan: d.npP, actual: d.npA, remark: '当月高质交付兑现，净利润达标且超出预期' },
                { name: '息税折旧摊销前利润(EBITDA)', plan: ebitdaP, actual: ebitdaA, remark: '核心经营性盈利现金能力表现充沛' },
                { name: '经营活动现金流量净额', plan: d.cfP, actual: d.cfA, remark: '重点项目销售回款提速，现金流充裕' },
                { name: '投资活动现金流量净额', plan: -65, actual: -58, remark: '自动化钎焊炉技改二期设备按进度付款' },
                { name: '筹资活动现金流量净额', plan: -35, actual: -32, remark: '按期偿还银行短期流动资金借款本息' },
                { name: '资产负债率', plan: d.debP, actual: d.debA, remark: '资产结构持续健康，负债率保持在51%以内安全边界' },
                { name: '应收账款周转天数', plan: d.arP, actual: d.arA, remark: '应收催收机制生效，账期周转优于计划天数' },
                { name: '存货周转天数', plan: d.invP, actual: d.invA, remark: '精益拉动生产减少车间在制品，在库周转加快' }
            ];

            items.forEach(function (it) {
                var def = INDICATOR_DEFS.find(function (x) { return x.name === it.name; }) || { category: '综合经营', unit: '万元', isExpense: false };
                var diff = Number((it.actual - it.plan).toFixed(2));
                var diffRateVal = it.plan !== 0 ? Number(((it.actual - it.plan) / Math.abs(it.plan) * 100).toFixed(2)) : 0;
                var diffRateStr = Math.abs(diffRateVal).toFixed(2) + '%';

                var status = '达成';
                if (def.isExpense) {
                    if (it.actual <= it.plan) status = '受控';
                    else if (diffRateVal > 5) status = '超支预警';
                    else status = '偏高';
                } else {
                    if (it.actual >= it.plan) status = '达成';
                    else if (diffRateVal < -5) status = '未达标';
                    else status = '基本持平';
                }

                rows.push({
                    id: idCounter++,
                    indicator: it.name,
                    category: def.category,
                    month: mStr,
                    plan: it.plan,
                    actual: it.actual,
                    diffAmount: diff,
                    diffRate: diffRateStr,
                    diffRateNum: diffRateVal,
                    unit: def.unit,
                    isExpense: def.isExpense,
                    status: status,
                    remark: it.remark
                });
            });
        }

        return rows;
    }

    var defaultStoreData = {
        versionNo: '2026.09_FIN_V1.0',
        versionName: '2026年9月财务经营指标-初版定稿',
        status: '已终审',
        auditor: '财务管理部 / 经管会（王总监、李经理）',
        auditTime: '2026-09-02 15:30:00',
        remark: '9月财务指标核算无误，计划与实际差异分析完成，经管会终审通过',
        rows: generateInitialRows(),
        historyVersions: [
            {
                versionNo: '2026.09_FIN_V1.0',
                versionName: '2026年9月财务经营指标-初版定稿',
                status: '战略终审',
                auditor: '财务管理部 / 经管会（王总监、李经理）',
                auditTime: '2026-09-02 15:30:00',
                remark: '9月财务指标核算无误，计划与实际差异分析完成，经管会终审通过',
                recordCount: 162,
                scope: '18 项经营指标 · 1~9月',
                totalRevPlan: 23140,
                totalRevActual: 23745,
                totalProfitPlan: 1253,
                totalProfitActual: 1405
            }
        ]
    };

    function loadStore() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                var parsed = JSON.parse(raw);
                if (parsed && parsed.rows && parsed.rows.length > 0) {
                    return parsed;
                }
            }
        } catch (e) {
            console.warn('[BaodeFinanceStore] Load failed, fallback to default:', e);
        }
        saveStore(defaultStoreData);
        return defaultStoreData;
    }

    function saveStore(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('[BaodeFinanceStore] Save failed:', e);
        }
    }

    return {
        INDICATORS: INDICATOR_DEFS,

        getRows: function (monthFilter) {
            var store = loadStore();
            if (!monthFilter) return store.rows;
            var mStr = typeof monthFilter === 'number' ? (monthFilter + '月') : monthFilter;
            return store.rows.filter(function (r) { return r.month === mStr; });
        },

        getRowsByMonth: function (monthFilter) {
            return this.getRows(monthFilter);
        },

        getAllRows: function () {
            return loadStore().rows;
        },

        getVersionInfo: function () {
            var s = loadStore();
            return {
                versionNo: s.versionNo,
                versionName: s.versionName,
                status: s.status,
                auditor: s.auditor,
                auditTime: s.auditTime,
                remark: s.remark
            };
        },

        getVersionHistory: function () {
            return loadStore().historyVersions || [];
        },

        getKpiSummary: function (month) {
            var mStr = typeof month === 'number' ? (month + '月') : (month || '9月');
            var rows = this.getRows(mStr);

            function findItem(name) {
                return rows.find(function (r) { return r.indicator === name; }) || { plan: 0, actual: 0, diffAmount: 0, diffRate: '0.0%' };
            }

            var rev = findItem('营业收入');
            var cost = findItem('主营业务成本');
            var gp = findItem('毛利额');
            var np = findItem('净利润');
            var opex = findItem('期间费用合计');

            return {
                month: mStr,
                revenue: rev,
                cost: cost,
                grossProfit: gp,
                netProfit: np,
                opex: opex
            };
        },

        publishFinanceVersion: function (params) {
            var store = loadStore();
            var newVerNo = '2026.09_FIN_V' + (store.historyVersions.length + 1) + '.0';
            var nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);

            var rows = params.rows || store.rows;

            var revP = 0, revA = 0, npP = 0, npA = 0;
            rows.forEach(function (r) {
                if (r.indicator === '营业收入') { revP += r.plan; revA += r.actual; }
                if (r.indicator === '净利润') { npP += r.plan; npA += r.actual; }
            });

            var newVer = {
                versionNo: newVerNo,
                versionName: (params.versionName || '财务指标月度终审修订版') + ' (' + newVerNo + ')',
                status: '战略终审',
                auditor: params.auditor || '财务管理部 / 经管会',
                auditTime: nowStr,
                remark: params.remark || '业务人员按模板导入财务指标，经管会终审发布生效',
                recordCount: rows.length,
                scope: '财务指标体系 · 共 ' + rows.length + ' 条记录',
                totalRevPlan: Math.round(revP),
                totalRevActual: Math.round(revA),
                totalProfitPlan: Math.round(npP),
                totalProfitActual: Math.round(npA)
            };

            store.versionNo = newVer.versionNo;
            store.versionName = newVer.versionName;
            store.status = '已终审';
            store.auditor = newVer.auditor;
            store.auditTime = newVer.auditTime;
            store.remark = newVer.remark;
            store.rows = rows;
            store.historyVersions.unshift(newVer);

            saveStore(store);
            return newVer;
        },

        parseFinanceExcel: function (jsonRows) {
            if (!jsonRows || jsonRows.length < 2) return [];

            // 寻找表头所在行（包含“经营指标”或“指标”的行）
            var headerRowIdx = -1;
            for (var r = 0; r < Math.min(jsonRows.length, 5); r++) {
                var rowStr = (jsonRows[r] || []).join(' ');
                if (rowStr.indexOf('经营指标') !== -1 || rowStr.indexOf('指标') !== -1) {
                    headerRowIdx = r;
                    break;
                }
            }
            if (headerRowIdx === -1) headerRowIdx = 0;

            var headerRow = jsonRows[headerRowIdx] || [];
            var colMap = {};
            headerRow.forEach(function (colName, cIdx) {
                if (!colName) return;
                var clean = String(colName).trim().replace(/\s+/g, '');
                if (clean.indexOf('经营指标') !== -1 || clean === '指标') colMap.indicator = cIdx;
                else if (clean.indexOf('指标类别') !== -1 || clean === '类别') colMap.category = cIdx;
                else if (clean.indexOf('序号') !== -1) colMap.seq = cIdx;
                else if (clean.indexOf('月份') !== -1 || clean === '月') colMap.month = cIdx;
                else if (clean.indexOf('计划') !== -1) colMap.plan = cIdx;
                else if (clean.indexOf('实际') !== -1) colMap.actual = cIdx;
                else if (clean.indexOf('差异率') !== -1) colMap.diffRate = cIdx;
                else if (clean.indexOf('差异金额') !== -1 || clean.indexOf('差异额') !== -1) colMap.diffAmount = cIdx;
                else if (clean.indexOf('备注') !== -1 || clean.indexOf('差异分析') !== -1) colMap.remark = cIdx;
            });

            if (colMap.indicator === undefined || colMap.plan === undefined || colMap.actual === undefined) {
                throw new Error('Excel 表头缺少核心列（必须包含：经营指标、计划、实际；建议包含：月份、差异率、差异金额）！');
            }

            var parsedRows = [];
            var idCounter = 1;

            for (var i = headerRowIdx + 1; i < jsonRows.length; i++) {
                var r = jsonRows[i];
                if (!r || r.length === 0) continue;

                var indName = r[colMap.indicator];
                if (!indName) continue;
                indName = String(indName).trim();
                if (!indName) continue;

                var mVal = colMap.month !== undefined && r[colMap.month] ? String(r[colMap.month]).trim() : '9月';
                if (mVal && !mVal.endsWith('月') && !isNaN(Number(mVal))) mVal = Number(mVal) + '月';

                var planVal = colMap.plan !== undefined && r[colMap.plan] !== undefined && r[colMap.plan] !== '' ? Number(r[colMap.plan]) : 0;
                var actualVal = colMap.actual !== undefined && r[colMap.actual] !== undefined && r[colMap.actual] !== '' ? Number(r[colMap.actual]) : 0;
                if (isNaN(planVal)) planVal = 0;
                if (isNaN(actualVal)) actualVal = 0;

                // 差异金额：若 Excel 填报为空白，严格视为空白，不默认填 0，避免业务歧义
                var diffAmt = '';
                if (colMap.diffAmount !== undefined && r[colMap.diffAmount] !== undefined && r[colMap.diffAmount] !== null) {
                    var rawDiffAmt = String(r[colMap.diffAmount]).trim();
                    if (rawDiffAmt !== '' && rawDiffAmt !== '-' && !isNaN(Number(rawDiffAmt))) {
                        diffAmt = Number(Number(rawDiffAmt).toFixed(2));
                    }
                }

                // 差异率：若 Excel 填报为空白，严格视为空白，不默认填 0%
                var diffRateStr = '';
                var diffRateVal = null;
                if (colMap.diffRate !== undefined && r[colMap.diffRate] !== undefined && r[colMap.diffRate] !== null) {
                    var rawDiffRate = String(r[colMap.diffRate]).trim();
                    if (rawDiffRate !== '' && rawDiffRate !== '-') {
                        var cleanRateNum = parseFloat(rawDiffRate.replace('%', ''));
                        if (!isNaN(cleanRateNum)) {
                            diffRateVal = cleanRateNum;
                            if (!rawDiffRate.endsWith('%')) {
                                if (Math.abs(cleanRateNum) <= 1 && cleanRateNum !== 0) cleanRateNum = cleanRateNum * 100;
                                diffRateStr = (cleanRateNum > 0 ? '+' : '') + cleanRateNum.toFixed(2) + '%';
                            } else {
                                diffRateStr = (cleanRateNum > 0 && !rawDiffRate.startsWith('+') ? '+' : '') + rawDiffRate;
                            }
                        } else {
                            diffRateStr = rawDiffRate;
                        }
                    }
                }

                var remarkVal = colMap.remark !== undefined && r[colMap.remark] ? String(r[colMap.remark]).trim() : '';

                var def = INDICATOR_DEFS.find(function (x) { return x.name === indName; }) || { category: '综合经营', unit: '万元', isExpense: false };
                var categoryVal = (colMap.category !== undefined && r[colMap.category]) ? String(r[colMap.category]).trim() : def.category;

                var status = '达成';
                if (def.isExpense) {
                    if (actualVal <= planVal) status = '受控';
                    else if (diffRateVal > 5) status = '超支预警';
                    else status = '偏高';
                } else {
                    if (actualVal >= planVal) status = '达成';
                    else if (diffRateVal < -5) status = '未达标';
                    else status = '基本持平';
                }

                parsedRows.push({
                    id: idCounter++,
                    indicator: indName,
                    category: categoryVal || def.category,
                    month: mVal,
                    plan: planVal,
                    actual: actualVal,
                    diffAmount: diffAmt,
                    diffRate: diffRateStr,
                    diffRateNum: diffRateVal,
                    unit: def.unit,
                    isExpense: def.isExpense,
                    status: status,
                    remark: remarkVal
                });
            }

            return parsedRows;
        },

        downloadTemplate: function () {
            if (typeof XLSX === 'undefined') {
                var prefix = window.location.pathname.replace(/\\/g, '/').indexOf('/finance/') !== -1 ? '../' : '';
                window.location.href = prefix + 'assets/templates/财务指标填报模板_v1.0.xlsx';
                return;
            }

            // 纯空白模板：仅包含标准表头，不预置任何数据行，便于业务直接录入
            var sampleRows = [
                ['序号', '指标类别', '经营指标', '月份', '计划', '实际', '差异率', '差异金额', '差异分析/备注']
            ];

            var ws = XLSX.utils.aoa_to_sheet(sampleRows);
            ws['!cols'] = [
                { wch: 8 },  // 序号
                { wch: 14 }, // 指标类别
                { wch: 30 }, // 经营指标 (加宽)
                { wch: 10 }, // 月份
                { wch: 15 }, // 计划
                { wch: 15 }, // 实际
                { wch: 14 }, // 差异率
                { wch: 16 }, // 差异金额
                { wch: 38 }  // 差异分析/备注
            ];

            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, '财务指标填报');
            XLSX.writeFile(wb, '财务指标月度导入模板_v1.0.xlsx');
        },

        exportCurrentFinanceExcel: function (monthFilter) {
            if (typeof XLSX === 'undefined') {
                alert('XLSX 导出库正在加载中，请稍后再试！');
                return;
            }

            var rows = this.getRows(monthFilter);
            var mStr = typeof monthFilter === 'number' ? (monthFilter + '月') : (monthFilter || '全部');

            var exportData = [
                ['序号', '指标类别', '经营指标', '月份', '计划', '实际', '差异率', '差异金额', '差异分析/备注']
            ];

            rows.forEach(function (r, idx) {
                var outDiffRate = '';
                if (r.diffRate !== null && r.diffRate !== undefined && String(r.diffRate).trim() !== '' && String(r.diffRate).trim() !== '-') {
                    var rNum = parseFloat(String(r.diffRate).replace('%', ''));
                    if (!isNaN(rNum)) {
                        outDiffRate = Math.abs(rNum).toFixed(2) + '%';
                    } else {
                        outDiffRate = String(r.diffRate).replace(/^[+-]/, '');
                    }
                }

                var outDiffAmt = '';
                if (r.diffAmount !== null && r.diffAmount !== undefined && String(r.diffAmount).trim() !== '' && !isNaN(Number(r.diffAmount))) {
                    outDiffAmt = Number(Math.abs(Number(r.diffAmount)).toFixed(2));
                }

                exportData.push([
                    idx + 1,
                    r.category,
                    r.indicator,
                    r.month,
                    r.plan,
                    r.actual,
                    outDiffRate,
                    outDiffAmt,
                    r.remark
                ]);
            });

            var ws = XLSX.utils.aoa_to_sheet(exportData);
            ws['!cols'] = [
                { wch: 8 },  // 序号
                { wch: 14 }, // 指标类别
                { wch: 30 }, // 经营指标 (加宽)
                { wch: 10 }, // 月份
                { wch: 15 }, // 计划
                { wch: 15 }, // 实际
                { wch: 14 }, // 差异率
                { wch: 16 }, // 差异金额
                { wch: 38 }  // 差异分析/备注
            ];

            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, '财务经营指标导出');
            XLSX.writeFile(wb, '财务经营指标明细表_' + mStr + '.xlsx');
        },

        resetToDefault: function () {
            saveStore(defaultStoreData);
            return defaultStoreData;
        }
    };
})();
