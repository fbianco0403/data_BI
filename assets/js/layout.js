/* ============================================================
   Baode BI 分析 - 共享布局（与企业经营驾驶舱 100% 像素级一致）
   支持两级树形导航：销售分析中心、目标填报中心等多级子路由
   ============================================================ */
var BDLayout = (function () {
    var sysNow = new Date();
    var baseYear = Math.max(sysNow.getFullYear(), 2026);
    var currentSysYear = baseYear;
    var currentSysMonth = 9; // 经营平台当期标准默认：2026年 9月

    function safeGetStorage(key, defaultVal) {
        try {
            var v = sessionStorage.getItem(key);
            return v !== null ? v : defaultVal;
        } catch (e) {
            return defaultVal;
        }
    }

    function safeSetStorage(key, val) {
        try {
            sessionStorage.setItem(key, val);
        } catch (e) {}
    }

    var selectedYear = parseInt(safeGetStorage('bd_selected_year', '2026')) || 2026;
    var selectedMonth = parseInt(safeGetStorage('bd_selected_month', '9')) || 9; // 默认 9月

    var availableYears = [currentSysYear, currentSysYear - 1, currentSysYear - 2];

    function getBasePath() {
        var p = window.location.pathname.replace(/\\/g, '/');
        var subDirs = ['/dashboard/', '/sales/', '/rd/', '/production/', '/supply-chain/', '/finance/', '/project/', '/target/', '/mdm/'];
        for (var i = 0; i < subDirs.length; i++) {
            if (p.indexOf(subDirs[i]) !== -1) {
                return '../';
            }
        }
        return './';
    }

    // 全局导航配置（包含一级模块与二级子导航）
    var NAV = [
        {
            key: 'overview',
            href: 'dashboard/executive-dashboard.html',
            label: '企业经营驾驶舱',
            code: 'KP▶',
            icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
        {
            key: 'sales',
            href: 'sales/sales-center.html',
            label: '销售分析中心',
            code: 'SAL',
            icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
            children: [
                { key: 'sales-overview', href: 'sales/sales-center.html', label: '销售分析总览' },
                { key: 'sales-industry', href: 'sales/sales-industry.html', label: '行业经营分析表' },
                { key: 'sales-rep', href: 'sales/sales-rep.html', label: '业务员目标管理表' }
            ]
        },
        {
            key: 'rd',
            href: 'rd/rd-center.html',
            label: '研发分析中心',
            code: 'R&D',
            icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
        },
        {
            key: 'production',
            href: 'production/production-center.html',
            label: '生产分析中心',
            code: 'PRO',
            icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
            children: [
                { key: 'prod-delivery', href: 'production/production-center.html', label: '生产与交付' },
                { key: 'prod-inv', href: 'supply-chain/inventory-center.html', label: '库存管理' },
                { key: 'prod-quality', href: 'production/quality-center.html', label: '质量管控' },
                { key: 'prod-purch', href: 'supply-chain/procurement-center.html', label: '采购与供应商' },
                { key: 'prod-equip', href: 'production/equipment-center.html', label: '设备与能耗' }
            ]
        },
        {
            key: 'project',
            href: 'project/project-center.html',
            label: '项目分析中心',
            code: 'PRJ',
            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
        },
        {
            key: 'task',
            href: 'project/task-center.html',
            label: '任务分析中心',
            code: 'TSK',
            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
        },
        {
            key: 'finance',
            href: 'finance/finance-center.html',
            label: '财务分析中心',
            code: 'FIN',
            icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
            key: 'target',
            href: 'target/target-entry.html',
            label: '目标填报中心',
            code: 'TGT',
            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
            children: [
                { key: 'target-entry', href: 'target/target-entry.html', label: '目标填报' },
                { key: 'actual-entry', href: 'target/actual-entry.html', label: '实际数据' },
                { key: 'finance-entry', href: 'finance/finance-entry.html', label: '财务指标' }
            ]
        },
        {
            key: 'mdm',
            href: 'mdm/mdm-center.html',
            label: '主数据管理',
            code: 'MDM',
            icon: 'M4 6h16M4 12h16M4 18h16'
        }
    ];

    function renderSidebar(activeKey) {
        var el = document.getElementById('sidebar');
        if (!el) return;

        var isCollapsed = safeGetStorage('bd_sidebar_collapsed', 'false') === 'true';
        if (isCollapsed) {
            el.classList.add('collapsed');
            el.style.width = '68px';
            el.style.minWidth = '68px';
            el.style.maxWidth = '68px';
        } else {
            el.classList.remove('collapsed');
            el.style.width = '224px';
            el.style.minWidth = '224px';
            el.style.maxWidth = '224px';
        }

        var base = getBasePath();
        var currentFile = window.location.pathname.replace(/\\/g, '/').split('/').pop();

        var html = '' +
            '<!-- 浮动边缘收起/展开控制按钮（悬浮在侧边栏时展示） -->' +
            '<button type="button" onclick="BDLayout.toggleCollapse(event)" class="sidebar-toggle-edge" id="sidebarEdgeToggle" title="' + (isCollapsed ? '点击展开侧边栏' : '点击收起侧边栏') + '">' +
                '<svg class="w-3.5 h-3.5 transition-transform duration-200" id="collapseEdgeChevron" style="' + (isCollapsed ? 'transform: rotate(180deg);' : '') + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>' +
            '</button>' +
            '<!-- Logo 与顶部收起控制 -->' +
            '<div class="sidebar-logo-wrap p-4 transition-all">' +
                '<div class="flex items-center justify-between gap-2">' +
                    '<div class="flex items-center gap-3 cursor-pointer flex-1 overflow-hidden" onclick="window.location.href=\'' + base + 'index.html\'" title="点击返回门户工作台">' +
                        '<div class="logo-square w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-[rgba(0,87,184,0.22)] shadow-sm flex-shrink-0">' +
                            '<span class="font-black text-base tracking-tight text-[#0057B8]">BI</span>' +
                        '</div>' +
                        '<div class="sidebar-logo-text overflow-hidden">' +
                            '<div class="font-bold text-sm leading-tight text-[#1A2332] whitespace-nowrap">宝得经营平台</div>' +
                            '<div class="text-[9.5px] mt-0.5 tracking-wider font-semibold text-[#6B7A94] uppercase whitespace-nowrap">BAODE PLATFORM</div>' +
                        '</div>' +
                    '</div>' +
                    '<button type="button" onclick="BDLayout.toggleCollapse(event)" class="sidebar-top-toggle-btn w-7 h-7 rounded-lg flex items-center justify-center text-[#6B7A94] hover:text-[#0057B8] hover:bg-[#0057B8]/10 transition-all cursor-pointer flex-shrink-0" id="sidebarTopToggle" title="' + (isCollapsed ? '展开侧边栏' : '收起侧边栏') + '">' +
                        '<svg class="w-4 h-4 transition-transform duration-200" id="collapseTopChevron" style="' + (isCollapsed ? 'transform: rotate(180deg);' : '') + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/></svg>' +
                    '</button>' +
                '</div>' +
            '</div>' +
            '<!-- 导航菜单 -->' +
            '<nav class="p-2.5 flex-1 overflow-y-auto space-y-1">' +
                '<!-- 返回门户入口 -->' +
                '<a href="' + base + 'index.html" data-title="返回门户大厅" class="nav-item mb-2.5 flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0057B8] bg-[#0057B8]/8 hover:bg-[#0057B8]/15 border border-[#0057B8]/20 transition-all" title="返回门户大厅">' +
                    '<span class="w-5 h-5 flex items-center justify-center flex-shrink-0">' +
                        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>' +
                    '</span>' +
                    '<span class="flex-1 font-bold">返回门户大厅</span>' +
                '</a>';

        NAV.forEach(function (item) {
            var isGroup = Array.isArray(item.children) && item.children.length > 0;
            var isParentActive = (item.key === activeKey);
            var isChildActive = false;

            if (isGroup) {
                item.children.forEach(function (sub) {
                    if (sub.key === activeKey || sub.href.split('/').pop() === currentFile) {
                        isChildActive = true;
                    }
                });
            }

            var groupExpanded = isParentActive || isChildActive;

            if (!isGroup) {
                var isActive = (item.key === activeKey || item.href.split('/').pop() === currentFile);
                html += '<a href="' + base + item.href + '" data-title="' + item.label + '" class="nav-item ' + (isActive ? 'active' : '') + ' flex items-center gap-3 px-3 py-2.5 rounded-r text-sm" title="' + item.label + '">' +
                    '<span class="w-5 h-5 flex items-center justify-center flex-shrink-0">' +
                        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="' + item.icon + '"/></svg>' +
                    '</span>' +
                    '<span class="flex-1">' + item.label + '</span>' +
                    '<span class="nav-code">' + item.code + '</span>' +
                '</a>';
            } else {
                html += '<div class="nav-group ' + (groupExpanded ? 'expanded active' : '') + '">' +
                    '<a href="' + base + item.href + '" data-title="' + item.label + '" class="nav-item ' + (isParentActive && !isChildActive ? 'active' : '') + ' flex items-center gap-3 px-3 py-2.5 rounded-r text-sm" title="' + item.label + '">' +
                        '<span class="w-5 h-5 flex items-center justify-center flex-shrink-0">' +
                            '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="' + item.icon + '"/></svg>' +
                        '</span>' +
                        '<span class="flex-1 truncate font-medium">' + item.label + '</span>' +
                        '<div class="flex items-center gap-1.5 flex-shrink-0 nav-suffix">' +
                            '<span class="nav-code">' + item.code + '</span>' +
                            '<svg class="w-3.5 h-3.5 text-[#8A99B5] nav-arrow transition-transform ' + (groupExpanded ? 'rotate-180' : '') + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>' +
                        '</div>' +
                    '</a>' +
                    '<div class="nav-sub-menu pl-8 pr-1 space-y-1 py-1 ' + (groupExpanded ? '' : 'hidden') + '">';

                item.children.forEach(function (sub) {
                    var isSubMatch = (sub.key === activeKey || sub.href.split('/').pop() === currentFile);
                    html += '<a href="' + base + sub.href + '" data-title="' + sub.label + '" class="nav-sub-item ' + (isSubMatch ? 'active' : '') + ' flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs text-[#6B7A94] hover:text-[#0057B8] hover:bg-[rgba(0,87,184,0.06)] transition-all" title="' + sub.label + '">' +
                        '<span>' + sub.label + '</span>' +
                        (isSubMatch ? '<span class="w-1.5 h-1.5 rounded-full bg-[#0057B8]"></span>' : '') +
                    '</a>';
                });

                html += '</div></div>';
            }
        });

        html += '</nav>';
        el.innerHTML = html;
        var edgeBtn = document.getElementById('sidebarEdgeToggle');
        if (edgeBtn) edgeBtn.onclick = toggleCollapse;
        var topBtn = document.getElementById('sidebarTopToggle');
        if (topBtn) topBtn.onclick = toggleCollapse;
    }

    function renderYearDropdown() {
        var container = document.getElementById('yearDropdownOptions');
        if (!container) return;
        var html = '<div class="text-[10px] text-[#8A99B5] px-3 py-1 font-semibold uppercase tracking-wider">近三年年份</div>';
        availableYears.forEach(function(yr) {
            var isSelected = yr === selectedYear;
            html += '<div class="dropdown-item px-3 py-1.5 text-xs font-semibold text-[#1A2332] hover:bg-[#0057B8]/10 hover:text-[#0057B8] cursor-pointer flex items-center justify-between transition-colors" onclick="selectYear(' + yr + ')">' +
                        '<span>' + yr + ' 年</span>' +
                        (isSelected ? '<span class="text-[#0057B8] font-bold">✓</span>' : '<span class="text-transparent">✓</span>') +
                    '</div>';
        });
        container.innerHTML = html;
        var yrText = document.getElementById('currentYearText');
        if (yrText) yrText.innerText = selectedYear;
    }

    function renderMonthDropdown() {
        var grid = document.getElementById('monthOptionsGrid');
        if (!grid) return;
        var html = '';
        var tipEl = document.getElementById('monthLimitTip');
        if (tipEl) {
            if (selectedYear === currentSysYear) {
                tipEl.innerText = '当期最多至' + currentSysMonth + '月';
            } else {
                tipEl.innerText = '1~12月全量可选';
            }
        }

        for (var m = 1; m <= 12; m++) {
            var isFuture = (selectedYear === currentSysYear && m > currentSysMonth);
            var isSelected = (m === selectedMonth);
            var label = m + '月';

            if (isFuture) {
                html += '<div class="month-item text-center py-1.5 rounded-lg text-xs font-medium text-[#94A3B8] bg-slate-100/70 cursor-not-allowed select-none opacity-40" title="未来月份尚未发生，不可查询">' + label + '</div>';
            } else if (isSelected) {
                html += '<div class="month-item text-center py-1.5 rounded-lg text-xs font-bold bg-[#0057B8] text-white cursor-pointer transition-all shadow-sm" onclick="selectMonth(' + m + ')">' + label + '</div>';
            } else {
                html += '<div class="month-item text-center py-1.5 rounded-lg text-xs font-semibold text-[#1A2332] hover:bg-[#0057B8]/10 hover:text-[#0057B8] cursor-pointer transition-all" onclick="selectMonth(' + m + ')">' + label + '</div>';
            }
        }
        grid.innerHTML = html;
        var mText = document.getElementById('currentMonthText');
        if (mText) mText.innerText = selectedMonth + '月';
    }

    function toggleDropdown(menuId, e) {
        if (e) e.stopPropagation();
        var menu = document.getElementById(menuId);
        if (!menu) return;
        var isHidden = menu.classList.contains('hidden');
        
        var ym = document.getElementById('yearDropdownMenu');
        var mm = document.getElementById('monthDropdownMenu');
        var yc = document.getElementById('yearChevron');
        var mc = document.getElementById('monthChevron');

        if (ym) ym.classList.add('hidden');
        if (mm) mm.classList.add('hidden');
        if (yc) yc.style.transform = 'rotate(0deg)';
        if (mc) mc.style.transform = 'rotate(0deg)';

        if (isHidden) {
            menu.classList.remove('hidden');
            if (menuId === 'yearDropdownMenu') {
                if (yc) yc.style.transform = 'rotate(180deg)';
                renderYearDropdown();
            } else {
                if (mc) mc.style.transform = 'rotate(180deg)';
                renderMonthDropdown();
            }
        }
    }

    function toggleCollapse(e) {
        if (e && e.stopPropagation) e.stopPropagation();
        if (e && e.preventDefault) e.preventDefault();
        var el = document.getElementById('sidebar');
        if (!el) return;
        var isCollapsed = el.classList.toggle('collapsed');
        safeSetStorage('bd_sidebar_collapsed', isCollapsed ? 'true' : 'false');
        
        // 内联样式即时切换尺寸（百分之百保证各浏览器与缓存环境下必变）
        if (isCollapsed) {
            el.style.width = '68px';
            el.style.minWidth = '68px';
            el.style.maxWidth = '68px';
        } else {
            el.style.width = '224px';
            el.style.minWidth = '224px';
            el.style.maxWidth = '224px';
        }

        // 同步边缘收起/展开控制按钮状态
        var edgeChevron = document.getElementById('collapseEdgeChevron');
        if (edgeChevron) {
            edgeChevron.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        var edgeToggle = document.getElementById('sidebarEdgeToggle');
        if (edgeToggle) {
            edgeToggle.title = isCollapsed ? '点击展开侧边栏' : '点击收起侧边栏';
        }

        // 同步顶部收起/展开控制按钮状态
        var topChevron = document.getElementById('collapseTopChevron');
        if (topChevron) {
            topChevron.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        var topToggle = document.getElementById('sidebarTopToggle');
        if (topToggle) {
            topToggle.title = isCollapsed ? '展开侧边栏' : '收起侧边栏';
        }

        // 立即触发与动画完成后二次触发 resize
        window.dispatchEvent(new Event('resize'));
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 260);
    }

    function selectYear(yr) {
        selectedYear = parseInt(yr);
        sessionStorage.setItem('bd_selected_year', selectedYear);
        if (selectedYear === currentSysYear && selectedMonth > currentSysMonth) {
            selectedMonth = currentSysMonth;
            sessionStorage.setItem('bd_selected_month', selectedMonth);
        }
        var yrText = document.getElementById('currentYearText');
        if (yrText) yrText.innerText = selectedYear;
        renderYearDropdown();
        renderMonthDropdown();
        var ym = document.getElementById('yearDropdownMenu');
        var yc = document.getElementById('yearChevron');
        if (ym) ym.classList.add('hidden');
        if (yc) yc.style.transform = 'rotate(0deg)';
        if (typeof window.onPeriodChange === 'function') {
            try { window.onPeriodChange(); } catch (e) { console.warn('onPeriodChange error:', e); }
        }
        if (typeof window.updateMonthlyTargetChart === 'function') {
            try { window.updateMonthlyTargetChart(); } catch (e) { console.warn('updateMonthlyTargetChart error:', e); }
        }
    }

    function selectMonth(m) {
        var mNum = parseInt(m);
        if (selectedYear === currentSysYear && mNum > currentSysMonth) {
            return;
        }
        selectedMonth = mNum;
        sessionStorage.setItem('bd_selected_month', selectedMonth);
        var mText = document.getElementById('currentMonthText');
        if (mText) mText.innerText = selectedMonth + '月';
        renderMonthDropdown();
        var mm = document.getElementById('monthDropdownMenu');
        var mc = document.getElementById('monthChevron');
        if (mm) mm.classList.add('hidden');
        if (mc) mc.style.transform = 'rotate(0deg)';
        if (typeof window.onPeriodChange === 'function') {
            try { window.onPeriodChange(); } catch (e) { console.warn('onPeriodChange error:', e); }
        }
        if (typeof window.updateMonthlyTargetChart === 'function') {
            try { window.updateMonthlyTargetChart(); } catch (e) { console.warn('updateMonthlyTargetChart error:', e); }
        }
    }

    // 点击外部区域关闭下拉框
    document.addEventListener('click', function(e) {
        var ym = document.getElementById('yearDropdownMenu');
        var mm = document.getElementById('monthDropdownMenu');
        var yb = document.getElementById('yearDropdownBtn');
        var mb = document.getElementById('monthDropdownBtn');
        var yc = document.getElementById('yearChevron');
        var mc = document.getElementById('monthChevron');

        if (ym && !ym.contains(e.target) && yb && !yb.contains(e.target)) {
            ym.classList.add('hidden');
            if (yc) yc.style.transform = 'rotate(0deg)';
        }
        if (mm && !mm.contains(e.target) && mb && !mb.contains(e.target)) {
            mm.classList.add('hidden');
            if (mc) mc.style.transform = 'rotate(0deg)';
        }
    });

    function initDropdownUI() {
        var yrText = document.getElementById('currentYearText');
        if (yrText) yrText.innerText = selectedYear;
        var mText = document.getElementById('currentMonthText');
        if (mText) mText.innerText = selectedMonth + '月';
        var tipEl = document.getElementById('monthLimitTip');
        if (tipEl) tipEl.innerText = '当期最多至' + currentSysMonth + '月';
        renderYearDropdown();
        renderMonthDropdown();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDropdownUI);
    } else {
        initDropdownUI();
    }

    // 挂载到全局 window，供 HTML 行内 onclick="toggleDropdown(...)" 等直接调用
    window.toggleDropdown = toggleDropdown;
    window.selectYear = selectYear;
    window.selectMonth = selectMonth;
    window.renderYearDropdown = renderYearDropdown;
    window.renderMonthDropdown = renderMonthDropdown;

    return {
        render: function (cfg) {
            cfg = cfg || {};
            var active = cfg.active || 'overview';
            renderSidebar(active);
            renderYearDropdown();
            renderMonthDropdown();
        },
        getPeriod: function () {
            return {
                year: String(selectedYear),
                month: selectedMonth + '月',
                formatted: selectedYear + '-' + (selectedMonth < 10 ? '0' + selectedMonth : selectedMonth)
            };
        },
        setPeriod: function (yr, m) {
            if (yr) {
                selectedYear = parseInt(yr);
                sessionStorage.setItem('bd_selected_year', selectedYear);
            }
            if (m) {
                selectedMonth = parseInt(m);
                sessionStorage.setItem('bd_selected_month', selectedMonth);
            }
            renderYearDropdown();
            renderMonthDropdown();
            if (typeof window.onPeriodChange === 'function') {
                try { window.onPeriodChange(); } catch (e) { console.warn(e); }
            }
            if (typeof window.updateMonthlyTargetChart === 'function') {
                try { window.updateMonthlyTargetChart(); } catch (e) { console.warn(e); }
            }
        },
        getSBU: function () {
            return sessionStorage.getItem('bd_selected_sbu') || 'ALL';
        },
        setSBU: function (sbu) {
            if (sbu) sessionStorage.setItem('bd_selected_sbu', sbu);
        },
        toggleCollapse: toggleCollapse,
        toggleDropdown: toggleDropdown,
        selectYear: selectYear,
        selectMonth: selectMonth,
        renderYearDropdown: renderYearDropdown,
        renderMonthDropdown: renderMonthDropdown
    };
})();
window.BDLayout = BDLayout;


/* ---------- ECharts 共享主题（高管浅色系：蓝、灰、灰绿、灰蓝） ---------- */
var ALFA_COLORS = ['#2E6EB5', '#5F8E68', '#6B8EA8', '#8FAFC9', '#82A98B', '#9BB7CF', '#BCCFE0'];

function alfaBaseChartOpt() {
    return {
        color: ALFA_COLORS,
        textStyle: { fontFamily: 'Roboto, sans-serif', color: '#6B7A94' },
        grid: { left: 12, right: 16, top: 36, bottom: 12, containLabel: true },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(26, 35, 50, 0.92)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            padding: [8, 12],
            textStyle: { color: '#FFFFFF', fontSize: 12 },
            axisPointer: { type: 'shadow', shadowStyle: { color: 'rgba(46,110,181,0.06)' } }
        },
        legend: { top: 0, right: 0, itemWidth: 10, itemHeight: 8, textStyle: { fontSize: 11, color: '#6B7A94' } }
    };
}
window.alfaBaseChartOpt = alfaBaseChartOpt;
window.ALFA_COLORS = ALFA_COLORS;
