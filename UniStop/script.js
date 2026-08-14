/**
 * CampusPredict / UniPortal Engine - Ultimate Master Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. DATA INITIALIZATION & FALLBACK
    // -------------------------------------------------------------
    let dataset = [];

    if (typeof universitiesData !== 'undefined' && Array.isArray(universitiesData)) {
        dataset = universitiesData;
        initApp();
    } else {
        // Fallback fetch if data.js wasn't loaded properly
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                dataset = data;
                initApp();
            })
            .catch(err => console.error("Error loading university data:", err));
    }

    function initApp() {
        populateCityFilter();
        renderUniversityCards(dataset);
        setupSearchAndFilters();
        setupCalculator();
        setupComparisonEngine();
        setupModalHandlers();
        setupTabNavigation();
    }

    // -------------------------------------------------------------
    // 2. DOM ELEMENTS
    // -------------------------------------------------------------
    const uniGrid = document.getElementById('uni-grid') || document.getElementById('university-cards');
    const searchInput = document.getElementById('search-input');
    const cityFilter = document.getElementById('city-filter');
    const calcUniSelect = document.getElementById('calc-uni-select');
    const calcDeptSelect = document.getElementById('calc-dept-select');
    const modal = document.getElementById('uni-modal');
    const modalBody = document.getElementById('modal-body');

    // -------------------------------------------------------------
    // 3. UI RENDERING: CARDS & PROFILE MODAL
    // -------------------------------------------------------------
    function renderUniversityCards(list) {
        if (!uniGrid) return;
        uniGrid.innerHTML = '';

        if (!list || list.length === 0) {
            uniGrid.innerHTML = `
                <div class="col-span-full text-center py-12 bg-gray-800/80 rounded-2xl border border-gray-700">
                    <p class="text-xl text-gray-400 font-medium">No universities found matching your search criteria.</p>
                </div>
            `;
            return;
        }

        list.forEach(uni => {
            const card = document.createElement('div');
            card.className = "bg-gray-800/90 rounded-2xl border border-gray-700 p-6 flex flex-col justify-between hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group";
            
            card.innerHTML = `
                <div>
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="${uni.logo}" alt="${uni.name} Logo" class="w-14 h-14 object-contain bg-white rounded-xl p-1.5 shadow-md group-hover:scale-105 transition" onerror="this.src='https://via.placeholder.com/60?text=UNI'">
                        <div>
                            <h3 class="text-xl font-bold text-white group-hover:text-indigo-400 transition leading-tight">${uni.name}</h3>
                            <span class="inline-block mt-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">${uni.shortName} • ${uni.city}</span>
                        </div>
                    </div>
                    <p class="text-xs text-emerald-400 font-semibold mb-3 flex items-center gap-1">🏆 ${uni.qsRanking || 'Top Ranked'}</p>
                    <div class="space-y-1.5 text-sm text-gray-300 mb-4 bg-gray-900/40 p-3 rounded-lg border border-gray-700/40">
                        <p><strong class="text-gray-400">Overall Rating:</strong> ⭐ <span class="text-yellow-400 font-bold">${uni.overallRating || 'N/A'}</span>/10</p>
                        <p><strong class="text-gray-400">Entry Test:</strong> ${uni.formula ? (uni.formula.testName || 'Academic Merit') : 'N/A'}</p>
                        <p><strong class="text-gray-400">Programs:</strong> ${uni.departments ? uni.departments.length : 0} Offered</p>
                    </div>
                </div>
                <div class="pt-3 border-t border-gray-700/60 flex items-center justify-between text-indigo-400 group-hover:text-indigo-300 text-sm font-semibold">
                    <span>View Profile & Cutoffs</span>
                    <span class="transform group-hover:translate-x-1 transition">→</span>
                </div>
            `;

            card.addEventListener('click', () => openUniversityModal(uni.id));
            uniGrid.appendChild(card);
        });
    }

    function openUniversityModal(uniId) {
        const uni = dataset.find(u => u.id === uniId);
        if (!uni || !modal || !modalBody) return;

        const deptsHTML = (uni.departments || []).map(d => `
            <tr class="border-b border-gray-700/50 hover:bg-gray-700/30 text-sm transition">
                <td class="py-3 px-4 font-semibold text-white">${d.name}</td>
                <td class="py-3 px-4 text-emerald-400 font-bold">${d.closingMerit2025 || '--'}</td>
                <td class="py-3 px-4 text-gray-300">${d.closingMerit2024 || '--'}</td>
                <td class="py-3 px-4 text-gray-400">${d.closingMerit2023 || '--'}</td>
                <td class="py-3 px-4 text-gray-500">${d.closingMerit2022 || '--'}</td>
                <td class="py-3 px-4 text-gray-500">${d.closingMerit2021 || '--'}</td>
            </tr>
        `).join('');

        const scholarshipsHTML = (uni.scholarships || []).map(s => `<li class="flex items-center text-sm text-gray-300"><span class="text-indigo-400 mr-2">✓</span> ${s}</li>`).join('');

        modalBody.innerHTML = `
            <div class="flex items-start justify-between border-b border-gray-700 pb-4 mb-6">
                <div class="flex items-center space-x-4">
                    <img src="${uni.logo}" alt="${uni.name}" class="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-lg" onerror="this.src='https://via.placeholder.com/60?text=UNI'">
                    <div>
                        <h2 class="text-2xl font-bold text-white">${uni.name} (${uni.shortName})</h2>
                        <p class="text-sm text-gray-400">📍 ${uni.city} | 🏆 ${uni.qsRanking || 'Ranked'}</p>
                    </div>
                </div>
                <button id="close-modal-btn" class="text-gray-400 hover:text-white text-3xl font-bold p-1 leading-none">&times;</button>
            </div>

            <!-- Merit Formula Breakdown -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div class="bg-gray-900/80 p-3 rounded-xl border border-gray-700 text-center">
                    <span class="text-xs text-gray-400 block">Matric / SSC</span>
                    <span class="text-lg font-bold text-indigo-400">${uni.formula ? (uni.formula.matric * 100).toFixed(0) : 0}%</span>
                </div>
                <div class="bg-gray-900/80 p-3 rounded-xl border border-gray-700 text-center">
                    <span class="text-xs text-gray-400 block">FSc / HSSC</span>
                    <span class="text-lg font-bold text-indigo-400">${uni.formula ? (uni.formula.fsc * 100).toFixed(0) : 0}%</span>
                </div>
                <div class="bg-gray-900/80 p-3 rounded-xl border border-gray-700 text-center">
                    <span class="text-xs text-gray-400 block">Entry Test</span>
                    <span class="text-lg font-bold text-indigo-400">${uni.formula ? (uni.formula.test * 100).toFixed(0) : 0}%</span>
                </div>
                <div class="bg-gray-900/80 p-3 rounded-xl border border-gray-700 text-center">
                    <span class="text-xs text-gray-400 block">Overall Rating</span>
                    <span class="text-lg font-bold text-yellow-400">⭐ ${uni.overallRating || 'N/A'}/10</span>
                </div>
            </div>

            <!-- Requirements & Scholarships -->
            <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="bg-gray-900/50 p-4 rounded-xl border border-gray-700/80">
                    <h4 class="text-base font-semibold text-indigo-300 mb-2">📋 Admission Requirements</h4>
                    <p class="text-xs text-gray-300 mb-1"><strong>Minimum FSc:</strong> ${uni.requirements ? uni.requirements.fscMin : 'N/A'}</p>
                    <p class="text-xs text-gray-300 mb-1"><strong>Equivalence:</strong> ${uni.requirements ? uni.requirements.equivalence : 'N/A'}</p>
                    <p class="text-xs text-gray-300"><strong>Test Requirement:</strong> ${uni.requirements ? uni.requirements.testRequirement : 'N/A'}</p>
                </div>
                <div class="bg-gray-900/50 p-4 rounded-xl border border-gray-700/80">
                    <h4 class="text-base font-semibold text-indigo-300 mb-2">🎓 Financial Aid & Scholarships</h4>
                    <ul class="space-y-1">${scholarshipsHTML || '<li class="text-xs text-gray-400">Standard Merit & Need-based assistance available</li>'}</ul>
                </div>
            </div>

            <!-- Department Cutoff History Table -->
            <h3 class="text-lg font-bold text-white mb-3">📊 Department Cut-off History (5-Year Merit)</h3>
            <div class="overflow-x-auto rounded-xl border border-gray-700">
                <table class="w-full text-left bg-gray-900">
                    <thead class="bg-gray-800 text-xs text-gray-400 uppercase border-b border-gray-700">
                        <tr>
                            <th class="py-3 px-4">Program / Department</th>
                            <th class="py-3 px-4 text-emerald-400">2025</th>
                            <th class="py-3 px-4">2024</th>
                            <th class="py-3 px-4">2023</th>
                            <th class="py-3 px-4">2022</th>
                            <th class="py-3 px-4">2021</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-800">${deptsHTML}</tbody>
                </table>
            </div>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');

        document.getElementById('close-modal-btn')?.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
    }

    // -------------------------------------------------------------
    // 4. SEARCH & CITY FILTERS
    // -------------------------------------------------------------
    function populateCityFilter() {
        if (!cityFilter) return;
        const cities = [...new Set(dataset.map(u => u.city))].sort();
        cityFilter.innerHTML = '<option value="ALL">All Cities</option>';
        cities.forEach(city => {
            const opt = document.createElement('option');
            opt.value = city;
            opt.textContent = city;
            cityFilter.appendChild(opt);
        });
    }

    function setupSearchAndFilters() {
        function filterData() {
            const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
            const selectedCity = cityFilter ? cityFilter.value : 'ALL';

            const filtered = dataset.filter(uni => {
                const matchesSearch = uni.name.toLowerCase().includes(query) ||
                    uni.shortName.toLowerCase().includes(query) ||
                    uni.city.toLowerCase().includes(query) ||
                    (uni.departments && uni.departments.some(d => d.name.toLowerCase().includes(query)));

                const matchesCity = selectedCity === 'ALL' || uni.city.toLowerCase() === selectedCity.toLowerCase();

                return matchesSearch && matchesCity;
            });

            renderUniversityCards(filtered);
        }

        if (searchInput) searchInput.addEventListener('input', filterData);
        if (cityFilter) cityFilter.addEventListener('change', filterData);
    }

    // -------------------------------------------------------------
    // 5. ULTIMATE MERIT CALCULATOR ENGINE
    // -------------------------------------------------------------
    function setupCalculator() {
        if (!calcUniSelect) return;

        // Populate University Select Dropdown
        calcUniSelect.innerHTML = '<option value="">-- Choose Target University --</option>';
        dataset.forEach(uni => {
            const opt = document.createElement('option');
            opt.value = uni.id;
            opt.textContent = `${uni.name} (${uni.shortName})`;
            calcUniSelect.appendChild(opt);
        });

        const modeToggle = document.getElementById('calc-mode-toggle');
        const customWeightBox = document.getElementById('custom-weightages-box');
        const calcBtn = document.getElementById('calculate-btn');
        const resultDisplay = document.getElementById('calculator-result-display');

        // On University Selection Change
        calcUniSelect.addEventListener('change', (e) => {
            const uniId = e.target.value;
            const uni = dataset.find(u => u.id === uniId);
            
            if (!uni) return;

            // Load Formula Defaults
            if (uni.formula) {
                if (document.getElementById('weight-matric')) document.getElementById('weight-matric').value = (uni.formula.matric * 100).toFixed(0);
                if (document.getElementById('weight-fsc')) document.getElementById('weight-fsc').value = (uni.formula.fsc * 100).toFixed(0);
                if (document.getElementById('weight-test')) document.getElementById('weight-test').value = (uni.formula.test * 100).toFixed(0);
            }

            // Populate Program Dropdown
            if (calcDeptSelect && uni.departments) {
                calcDeptSelect.innerHTML = '<option value="">-- Choose Program (Optional) --</option>';
                uni.departments.forEach(dept => {
                    const opt = document.createElement('option');
                    opt.value = dept.name;
                    opt.textContent = `${dept.name} (2025 Cutoff: ${dept.closingMerit2025 || 'N/A'})`;
                    calcDeptSelect.appendChild(opt);
                });
            }
        });

        // Toggle Custom Weightages Visibility
        if (modeToggle) {
            modeToggle.addEventListener('change', (e) => {
                if (customWeightBox) {
                    customWeightBox.classList.toggle('hidden', !e.target.checked);
                }
            });
        }

        // Action Trigger
        if (calcBtn) {
            calcBtn.addEventListener('click', () => calculateAggregate(resultDisplay));
        }
    }

    function calculateAggregate(resultDisplay) {
        const uniId = calcUniSelect ? calcUniSelect.value : '';
        const deptName = calcDeptSelect ? calcDeptSelect.value : '';

        if (!uniId) {
            alert('Please select a target university first!');
            return;
        }

        const uni = dataset.find(u => u.id === uniId);
        const isCustomMode = document.getElementById('calc-mode-toggle')?.checked;

        // Marks Input
        const matricObtained = parseFloat(document.getElementById('matric-obtained')?.value) || 0;
        const matricTotal = parseFloat(document.getElementById('matric-total')?.value) || 1100;

        const fscObtained = parseFloat(document.getElementById('fsc-obtained')?.value) || 0;
        const fscTotal = parseFloat(document.getElementById('fsc-total')?.value) || 1100;

        const testObtained = parseFloat(document.getElementById('test-obtained')?.value) || 0;
        const testTotal = parseFloat(document.getElementById('test-total')?.value) || 100;

        // Weightages Setup
        let wMatric, wFsc, wTest;

        if (isCustomMode) {
            wMatric = (parseFloat(document.getElementById('weight-matric')?.value) || 0) / 100;
            wFsc = (parseFloat(document.getElementById('weight-fsc')?.value) || 0) / 100;
            wTest = (parseFloat(document.getElementById('weight-test')?.value) || 0) / 100;

            const sum = wMatric + wFsc + wTest;
            if (Math.abs(sum - 1.0) > 0.01) {
                alert(`Your custom weightages total ${(sum * 100).toFixed(0)}%. They must sum up to exactly 100%.`);
                return;
            }
        } else {
            wMatric = uni.formula ? uni.formula.matric : 0.10;
            wFsc = uni.formula ? uni.formula.fsc : 0.40;
            wTest = uni.formula ? uni.formula.test : 0.50;
        }

        // Calculation Logic
        const matricShare = (matricObtained / matricTotal) * wMatric * 100;
        const fscShare = (fscObtained / fscTotal) * wFsc * 100;
        const testShare = (testObtained / testTotal) * wTest * 100;

        const totalAggregate = matricShare + fscShare + testShare;

        // Evaluation against Department Cutoffs
        let chanceBadge = "";
        let selectedDept = uni.departments ? uni.departments.find(d => d.name === deptName) : null;

        if (selectedDept && selectedDept.closingMerit2025 && !selectedDept.closingMerit2025.includes("Holistic")) {
            const lastCutoff = parseFloat(selectedDept.closingMerit2025.replace('%', ''));
            const diff = totalAggregate - lastCutoff;

            if (diff >= 2.0) {
                chanceBadge = `
                    <div class="p-4 bg-emerald-900/40 border border-emerald-500/50 rounded-xl text-emerald-300 mt-4 text-left">
                        <div class="flex items-center space-x-2">
                            <span class="text-xl">🟢</span>
                            <span class="text-lg font-bold">HIGH CHANCE OF ADMISSION</span>
                        </div>
                        <p class="text-xs mt-1 text-emerald-200/80">Your aggregate (${totalAggregate.toFixed(2)}%) comfortably exceeds the 2025 closing cutoff of ${lastCutoff}% for ${selectedDept.name}.</p>
                    </div>`;
            } else if (diff >= -1.5 && diff < 2.0) {
                chanceBadge = `
                    <div class="p-4 bg-yellow-900/40 border border-yellow-500/50 rounded-xl text-yellow-300 mt-4 text-left">
                        <div class="flex items-center space-x-2">
                            <span class="text-xl">🟡</span>
                            <span class="text-lg font-bold">MODERATE / BORDERLINE CHANCE</span>
                        </div>
                        <p class="text-xs mt-1 text-yellow-200/80">Your aggregate (${totalAggregate.toFixed(2)}%) is within competitive range of the last cutoff (${lastCutoff}%).</p>
                    </div>`;
            } else {
                chanceBadge = `
                    <div class="p-4 bg-rose-900/40 border border-rose-500/50 rounded-xl text-rose-300 mt-4 text-left">
                        <div class="flex items-center space-x-2">
                            <span class="text-xl">🔴</span>
                            <span class="text-lg font-bold">HIGHLY COMPETITIVE / LOW CHANCE</span>
                        </div>
                        <p class="text-xs mt-1 text-rose-200/80">Your aggregate (${totalAggregate.toFixed(2)}%) falls below the 2025 closing cutoff (${lastCutoff}%). Consider backup options or improving entry test scores.</p>
                    </div>`;
            }
        } else if (selectedDept) {
            chanceBadge = `
                <div class="p-4 bg-indigo-900/40 border border-indigo-500/50 rounded-xl text-indigo-300 mt-4 text-left">
                    <span class="text-sm font-bold block mb-1">ℹ️ HOLISTIC / TEST-BASED SELECTION</span>
                    <p class="text-xs text-indigo-200/80">${selectedDept.name} evaluates candidates using holistic review, merit ranks, or interview rounds.</p>
                </div>`;
        }

        if (resultDisplay) {
            resultDisplay.innerHTML = `
                <div class="bg-gray-900 p-6 rounded-2xl border border-indigo-500/50 shadow-2xl space-y-4 animate-fade-in">
                    <div class="text-center">
                        <span class="text-gray-400 text-xs font-semibold uppercase tracking-wider block">Calculated Aggregate Score</span>
                        <h2 class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-emerald-400 to-teal-300 mt-1">${totalAggregate.toFixed(2)}%</h2>
                    </div>

                    <div class="grid grid-cols-3 gap-2 text-center text-xs py-3 border-y border-gray-800">
                        <div class="bg-gray-800/50 p-2 rounded-lg">
                            <span class="text-gray-400 block">Matric Contribution</span>
                            <strong class="text-indigo-400 text-sm">${matricShare.toFixed(2)}%</strong>
                        </div>
                        <div class="bg-gray-800/50 p-2 rounded-lg">
                            <span class="text-gray-400 block">FSc Contribution</span>
                            <strong class="text-indigo-400 text-sm">${fscShare.toFixed(2)}%</strong>
                        </div>
                        <div class="bg-gray-800/50 p-2 rounded-lg">
                            <span class="text-gray-400 block">Test Contribution</span>
                            <strong class="text-indigo-400 text-sm">${testShare.toFixed(2)}%</strong>
                        </div>
                    </div>

                    ${chanceBadge}
                </div>
            `;
        }
    }

    // -------------------------------------------------------------
    // 6. COMPARISON ENGINE
    // -------------------------------------------------------------
    function setupComparisonEngine() {
        const compSelectA = document.getElementById('compare-uni-a');
        const compSelectB = document.getElementById('compare-uni-b');
        const compareDisplay = document.getElementById('comparison-display');

        if (!compSelectA || !compSelectB) return;

        [compSelectA, compSelectB].forEach(sel => {
            sel.innerHTML = '<option value="">-- Select University --</option>';
            dataset.forEach(u => {
                const opt = document.createElement('option');
                opt.value = u.id;
                opt.textContent = `${u.name} (${u.shortName})`;
                sel.appendChild(opt);
            });
        });

        function renderComparison() {
            const uniA = dataset.find(u => u.id === compSelectA.value);
            const uniB = dataset.find(u => u.id === compSelectB.value);

            if (!uniA || !uniB) {
                if (compareDisplay) compareDisplay.innerHTML = `<p class="text-center text-gray-500 py-10">Select two universities above to render a detailed side-by-side comparison.</p>`;
                return;
            }

            compareDisplay.innerHTML = `
                <div class="grid md:grid-cols-2 gap-6 mt-6">
                    <div class="bg-gray-800 p-6 rounded-2xl border border-indigo-500/40">
                        <div class="flex items-center space-x-3 mb-4">
                            <img src="${uniA.logo}" class="w-12 h-12 bg-white rounded-xl p-1.5 object-contain" onerror="this.src='https://via.placeholder.com/50'">
                            <div>
                                <h3 class="text-xl font-bold text-white">${uniA.name}</h3>
                                <p class="text-xs text-indigo-400">${uniA.city}</p>
                            </div>
                        </div>
                        <ul class="space-y-2 text-sm text-gray-300">
                            <li><strong>QS Ranking:</strong> ${uniA.qsRanking || 'N/A'}</li>
                            <li><strong>Overall Rating:</strong> ⭐ ${uniA.overallRating || 'N/A'}/10</li>
                            <li><strong>Formula:</strong> Matric ${(uniA.formula?.matric * 100) || 0}% | FSc ${(uniA.formula?.fsc * 100) || 0}% | Test ${(uniA.formula?.test * 100) || 0}%</li>
                            <li><strong>Entry Test:</strong> ${uniA.formula?.testName || 'Academic Test'}</li>
                            <li><strong>Programs Offered:</strong> ${uniA.departments ? uniA.departments.length : 0}</li>
                        </ul>
                    </div>

                    <div class="bg-gray-800 p-6 rounded-2xl border border-purple-500/40">
                        <div class="flex items-center space-x-3 mb-4">
                            <img src="${uniB.logo}" class="w-12 h-12 bg-white rounded-xl p-1.5 object-contain" onerror="this.src='https://via.placeholder.com/50'">
                            <div>
                                <h3 class="text-xl font-bold text-white">${uniB.name}</h3>
                                <p class="text-xs text-purple-400">${uniB.city}</p>
                            </div>
                        </div>
                        <ul class="space-y-2 text-sm text-gray-300">
                            <li><strong>QS Ranking:</strong> ${uniB.qsRanking || 'N/A'}</li>
                            <li><strong>Overall Rating:</strong> ⭐ ${uniB.overallRating || 'N/A'}/10</li>
                            <li><strong>Formula:</strong> Matric ${(uniB.formula?.matric * 100) || 0}% | FSc ${(uniB.formula?.fsc * 100) || 0}% | Test ${(uniB.formula?.test * 100) || 0}%</li>
                            <li><strong>Entry Test:</strong> ${uniB.formula?.testName || 'Academic Test'}</li>
                            <li><strong>Programs Offered:</strong> ${uniB.departments ? uniB.departments.length : 0}</li>
                        </ul>
                    </div>
                </div>
            `;
        }

        compSelectA.addEventListener('change', renderComparison);
        compSelectB.addEventListener('change', renderComparison);
    }

    // -------------------------------------------------------------
    // 7. MODALS & TAB NAVIGATION
    // -------------------------------------------------------------
    function setupModalHandlers() {
        if (!modal) return;
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }

    function setupTabNavigation() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');

                tabBtns.forEach(b => b.classList.remove('active', 'border-indigo-500', 'text-indigo-400'));
                tabContents.forEach(c => c.classList.add('hidden'));

                btn.classList.add('active', 'border-indigo-500', 'text-indigo-400');
                const activeContent = document.getElementById(targetTab);
                if (activeContent) activeContent.classList.remove('hidden');
            });
        });
    }
});