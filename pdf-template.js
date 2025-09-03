/**
 * PDF Template Generator for ESG Assessment
 * This file contains the HTML template generation logic for PDF creation
 */

/**
 * Determines ESG level based on score percentage
 * @param {number} percent - ESG score percentage
 * @returns {string} ESG level ('low', 'medium', 'high')
 */
function getEsgLevel(percent) {
    if (percent <= 30) return 'low';
    if (percent <= 60) return 'medium';
    return 'high';
}

/**
 * Gets random version (A, B, or C) for ESG content
 * @returns {string} Random version ('A', 'B', or 'C')
 */
function getRandomVersion() {
    const versions = ['A', 'B', 'C'];
    const selectedVersion = versions[Math.floor(Math.random() * versions.length)];
    
    console.log('🎲 Random Selection:', selectedVersion);
    
    return selectedVersion;
}





/**
 * Gets ESG content based on level and version
 * @param {string} level - ESG level ('low', 'medium', 'high')
 * @param {string} version - Version ('A', 'B', or 'C')
 * @param {string} language - Language ('en' or 'pl')
 * @returns {Object} ESG content object
 */
function getEsgContent(level, version, language) {
    const content = {
        low: {
            A: {
                summary: language === 'pl' 
                    ? 'Twój wynik plasuje firmę na początkowym etapie dojrzałości ESG. Oznacza to, że brakuje kluczowych polityk, kontroli i procesów. Takie luki tworzą realne ryzyka – od trudności w wygrywaniu nowych kontraktów, po wykluczenie z przetargów, po negatywną percepcję wśród inwestorów. To nie jest stan, który możesz utrzymać długo, jeśli myślisz o wzroście.'
                    : 'Your score places the company at the initial stage of ESG maturity. This means that key policies, controls, and processes are missing. Such gaps create real risks – from difficulties in winning new contracts, to exclusion from tenders, to negative perception among investors. This is not a state you can maintain for long if you are thinking about growth.',
                nextSteps: language === 'pl' 
                    ? ['Utwórz podstawowe polityki ESG (środowisko, BHP, sygnalizowanie).', 'Ustal minimalne pomiary – zużycie energii, emisje Scope 1 i 2, rotacja pracowników.', 'Wyznacz właściciela ESG w firmie i wprowadź coroczny przegląd ryzyka.']
                    : ['Create basic ESG policies (environment, OHS, whistleblowing).', 'Establish minimum measurements – energy consumption, Scope 1 and 2 emissions, employee turnover.', 'Appoint an ESG owner within the company and introduce an annual risk review.'],
                cta: language === 'pl'
                    ? 'Czy chcesz szybko zbudować fundament i uniknąć niepowodzeń podczas audytu? Skontaktuj się z nami: esgsync.pro | esgsync@protonmail.com'
                    : 'Do you want to quickly build a foundation and avoid failures during an audit? Contact us: esgsync.pro | esgsync@protonmail.com',
                premiumTeaser: language === 'pl'
                    ? 'Premium wersja raportu pokaże Ci dokładnie, które polityki i KPI wdrożyć oraz jak przygotować firmę do wymagań CSRD.'
                    : 'The premium version of the report will show you exactly which policies and KPIs to implement and how to prepare your company for CSRD requirements.'
            },
            B: {
                summary: language === 'pl'
                    ? 'Niski wynik oznacza, że firma działa bez spójnego fundamentu ESG. Nawet proste mechanizmy, takie jak monitoring energii czy polityka antykorupcyjna, są nieobecne, co bezpośrednio przekłada się na ryzyko finansowe i reputacyjne. Jeśli nie działasz teraz, w ciągu roku Twoja firma może być uznana za wysokiego ryzyka partnera w łańcuchu dostaw.'
                    : 'A low score means the company operates without a coherent ESG foundation. Even simple mechanisms, such as energy monitoring or an anti-corruption policy, are missing, which directly translates into financial and reputational risk. If you don\'t act now, within a year your company may be considered a high-risk partner in the supply chain.',
                nextSteps: language === 'pl'
                    ? ['Ustaw 3-miesięczny plan działania: dane → kontrole → raport.', 'Wprowadź zasadę czterech oczu dla raportowania danych ESG.', 'Zacznij od corocznego zbierania danych ESG, następnie zwiększ częstotliwość.']
                    : ['Set up a 3-month action plan: data → controls → report.', 'Introduce a four-eyes principle for ESG data reporting.', 'Start with annual ESG data collection, then increase frequency.'],
                cta: language === 'pl'
                    ? 'Twoja firma pilnie potrzebuje uporządkować podstawy ESG. Skontaktuj się z nami: esgsync.pro | esgsync@protonmail.com'
                    : 'Your company urgently needs to put ESG basics in order. Reach out to us: esgsync.pro | esgsync@protonmail.com',
                premiumTeaser: language === 'pl'
                    ? 'Premium wersja raportu zawiera 12-miesięczny plan działania i gotowe szablony polityk ESG – oszczędzając Ci miesiące pracy.'
                    : 'The premium report version includes a 12-month action plan and ready-made ESG policy templates – saving you months of work.'
            },
            C: {
                summary: language === 'pl'
                    ? 'Niski wynik to czerwona flaga. Brakuje niezbędnych fundamentów, co czyni firmę nieprzygotowaną na wymagania CSRD lub oczekiwania klientów i partnerów. Każde kwartalne opóźnienie zwiększa ryzyko utraty kontraktów i reputacji.'
                    : 'A low score is a red flag. Essential foundations are missing, which makes the company unprepared for CSRD requirements or customer and partner expectations. Every quarter of delay increases the risk of losing contracts and reputation.',
                nextSteps: language === 'pl'
                    ? ['Uczyń ESG priorytetem zarządu.', 'Zdefiniuj minimalne KPI: emisje Scope 1–2, rotacja, wskaźnik wypadków.', 'Przygotuj pierwszą politykę ESG i raport do końca roku.']
                    : ['Make ESG a management board priority.', 'Define minimum KPIs: Scope 1–2 emissions, turnover, accident rate.', 'Prepare your first ESG policy and report by year-end.'],
                cta: language === 'pl'
                    ? 'To ostatni moment na wprowadzenie podstaw ESG. Zarezerwuj konsultację z ESGSyncPRO: esgsync.pro | esgsync@protonmail.com'
                    : 'This is the last moment to introduce ESG basics. Book a consultation with ESGSyncPRO: esgsync.pro | esgsync@protonmail.com',
                premiumTeaser: language === 'pl'
                    ? 'Z wersją premium otrzymasz benchmark branżowy i konkretne szablony polityk – gotowe do natychmiastowego wdrożenia.'
                    : 'With the premium version, you\'ll receive an industry benchmark and concrete policy templates – ready for immediate implementation.'
            }
        },
        medium: {
            A: {
                summary: language === 'pl'
                    ? 'Średni poziom ESG oznacza, że masz fundament, ale procesy są rozfragmentowane. Nie ma spójności między działami, jasnych celów ani rytmu raportowania. Jeśli pozostaniesz na tym etapie, rynek i Twoja konkurencja szybko Cię wyprzedzą.'
                    : 'A medium ESG level means you have a foundation, but processes are fragmented. There is no consistency between departments, no clear goals, and no reporting rhythm. If you stay at this stage, the market and your competition will quickly overtake you.',
                nextSteps: language === 'pl'
                    ? ['Skonsoliduj źródła danych (jedna tabela "źródło prawdy").', 'Dodaj cele redukcji emisji i KPI HR.', 'Wprowadź kwartalny rytm raportowania do zarządu.']
                    : ['Consolidate data sources (one single "source of truth" table).', 'Add emission reduction targets and HR KPIs.', 'Introduce quarterly reporting rhythm to the board.'],
                cta: language === 'pl'
                    ? 'Nie pozwól, aby średni wynik stał się Twoim sufitem. Zarezerwuj rozmowę z ESGSyncPRO: esgsync.pro | esgsync@protonmail.com'
                    : 'Don\'t let an average score become your ceiling. Schedule a call with ESGSyncPRO: esgsync.pro | esgsync@protonmail.com',
                premiumTeaser: language === 'pl'
                    ? 'Wersja premium zawiera porównanie z konkurencją i szczegółowy plan osiągnięcia 80% w ciągu 12 miesięcy.'
                    : 'The premium version includes competitor comparison and a detailed plan to reach 80% within 12 months.'
            },
            B: {
                summary: language === 'pl'
                    ? 'Masz solidne fundamenty, ale Twoje ESG działa jak silnik pracujący z połową mocy. Polityki istnieją, niektóre pomiary istnieją, ale brakuje pełnego obrazu. Tu leżą szybkie wygrane – decyzje wdrożone teraz mogą radykalnie poprawić wyniki w przyszłym roku.'
                    : 'You have solid foundations, but your ESG works like an engine running at half power. Policies exist, some measurements exist, but the full picture is missing. This is where quick wins lie – decisions implemented now can radically improve results in the next year.',
                nextSteps: language === 'pl'
                    ? ['Rozszerz monitoring emisji na Scope 1–2 (ostatecznie Scope 3).', 'Wdróż sygnalizowanie i politykę antykorupcyjną.', 'Przygotuj dashboard ESG dla zarządu.']
                    : ['Expand emission monitoring to Scope 1–2 (ultimately Scope 3).', 'Implement whistleblowing and an anti-corruption policy.', 'Prepare an ESG dashboard for the management board.'],
                cta: language === 'pl'
                    ? 'Masz potencjał osiągnięcia wysokiego poziomu ESG w ciągu 6–12 miesięcy. Skontaktuj się z nami: esgsync.pro | esgsync@protonmail.com'
                    : 'You have the potential to reach a high ESG level within 6–12 months. Contact us: esgsync.pro | esgsync@protonmail.com',
                premiumTeaser: language === 'pl'
                    ? 'Premium wersja raportu daje Ci precyzyjny benchmark branżowy i priorytety działań krok po kroku.'
                    : 'The premium version of the report gives you a precise industry benchmark and step-by-step action priorities.'
            },
            C: {
                summary: language === 'pl'
                    ? 'Twój wynik pokazuje, że ESG istnieje w Twojej firmie, ale nadal jest traktowane jako "dodatkowy projekt". Brakuje systematyzacji i integracji z kluczowymi procesami biznesowymi. Bez tego nie zbudujesz przewagi rynkowej.'
                    : 'Your score shows that ESG exists in your company but is still treated as an "extra project." What\'s missing is systematization and integration with key business processes. Without this, you won\'t build a market advantage.',
                nextSteps: language === 'pl'
                    ? ['Powiąż wynagrodzenie zarządu z KPI ESG.', 'Ustal cele w szkoleniach i BHP.', 'Przejdź od corocznego zbierania danych do kwartalnego.']
                    : ['Link management board compensation with ESG KPIs.', 'Set targets in training and OHS.', 'Move from annual data collection to quarterly.'],
                cta: language === 'pl'
                    ? 'Czy chcesz dołączyć do grupy liderów ESG? Zrób następny krok z nami: esgsync.pro | esgsync@protonmail.com'
                    : 'Do you want to join the group of ESG leaders? Take the next step with us: esgsync.pro | esgsync@protonmail.com',
                premiumTeaser: language === 'pl'
                    ? 'Z wersją premium zobaczysz, jak wygląda top 25% w Twojej branży – i jak tam dotrzeć.'
                    : 'With the premium version, you\'ll see what the top 25% in your industry look like – and how to get there.'
            }
        },
        high: {
            A: {
                summary: language === 'pl'
                    ? 'Twój wynik demonstruje dojrzałość ESG. Masz procesy i kontrole na miejscu – co czyni to najlepszym czasem, aby pójść dalej: ciągłe zbieranie danych, audyty zewnętrzne, Scope 3. Jeśli zatrzymasz się tutaj, stracisz szansę na przewagę nad konkurencją.'
                    : 'Your score demonstrates ESG maturity. You have processes and controls in place – which makes this the best time to go further: continuous data collection, external audits, Scope 3. If you stop here, you\'ll lose the opportunity to gain an edge over your competition.',
                nextSteps: language === 'pl'
                    ? ['Rozszerz raportowanie na Scope 3.', 'Wprowadź niezależne audyty wybranych metryk ESG.', 'Zintegruj wynagrodzenie zarządu z KPI ESG.']
                    : ['Extend reporting to Scope 3.', 'Introduce independent audits of selected ESG metrics.', 'Integrate board compensation with ESG KPIs.'],
                cta: language === 'pl'
                    ? 'Twoja firma jest blisko statusu lidera ESG. Chcesz pokazać swoją przewagę inwestorom i rynkowi? Skontaktuj się z nami: esgsync.pro | esgsync@protonmail.com'
                    : 'Your company is close to ESG leader status. Want to showcase your advantage to investors and the market? Contact us: esgsync.pro | esgsync@protonmail.com',
                premiumTeaser: language === 'pl'
                    ? 'Premium wersja raportu da Ci pełny zestaw rekomendacji i benchmarking do przedstawienia partnerom biznesowym i inwestorom.'
                    : 'The premium report version will give you a full set of recommendations and benchmarking to present to business partners and investors.'
            },
            B: {
                summary: language === 'pl'
                    ? 'Wysoki wynik dowodzi, że ESG funkcjonuje w Twojej firmie. Ale rynek i regulatorzy podnoszą poprzeczkę każdego roku. To, co jest Twoją przewagą dzisiaj, stanie się standardem jutra. Musisz być na czele, aby utrzymać status lidera.'
                    : 'A high score proves ESG is functioning in your company. But the market and regulators raise the bar every year. What is your advantage today will become tomorrow\'s standard. You need to stay ahead to maintain leader status.',
                nextSteps: language === 'pl'
                    ? ['Wdróż system ciągłego monitoringu (IoT/ETL).', 'Zwiększ udział energii odnawialnej do 50%+.', 'Publikuj kwartalne raporty ESG dla inwestorów.']
                    : ['Implement a continuous monitoring system (IoT/ETL).', 'Increase renewable energy share to 50%+.', 'Publish quarterly ESG reports for investors.'],
                cta: language === 'pl'
                    ? 'Nie zatrzymuj się na obecnym poziomie – pokaż rynkowi, że jesteś liderem. ESGSyncPRO pomoże Ci być na czele: esgsync.pro | esgsync@protonmail.com'
                    : 'Don\'t stop at your current level – show the market you\'re a leader. ESGSyncPRO will help you stay ahead: esgsync.pro | esgsync@protonmail.com',
                premiumTeaser: language === 'pl'
                    ? 'Wersja premium to Twoje narzędzie do pokazania przewagi na zewnątrz – benchmark branżowy i raportowanie gotowe dla inwestorów.'
                    : 'The premium version is your tool to showcase your advantage externally – industry benchmark and investor-ready reporting.'
            },
            C: {
                summary: language === 'pl'
                    ? 'Twój wynik plasuje Cię wśród liderów – ale to dopiero początek. Lider ESG to nie tylko compliance, ale także przewaga kosztowa, zaufanie inwestorów i top employer branding. Masz potencjał, aby stać się wzorem dla całej branży.'
                    : 'Your score places you among the frontrunners – but this is only the beginning. An ESG leader is not just about compliance, but also cost advantage, investor trust, and top employer branding. You have the potential to become a role model for the entire industry.',
                nextSteps: language === 'pl'
                    ? ['Przejdź zbieranie danych ESG w tryb czasu rzeczywistego.', 'Rozszerz polityki ESG na cały łańcuch dostaw.', 'Uruchom program rozwoju dostawców.']
                    : ['Move ESG data collection to real-time mode.', 'Extend ESG policies across the supply chain.', 'Launch a supplier development program.'],
                cta: language === 'pl'
                    ? 'Czas pokazać swoją przewagę światu. ESGSyncPRO pomoże Ci przygotować raport ESG, który wygra Ci rynek: esgsync.pro | esgsync@protonmail.com'
                    : 'It\'s time to show your advantage to the world. ESGSyncPRO will help you prepare an ESG report that will win you the market: esgsync.pro | esgsync@protonmail.com',
                premiumTeaser: language === 'pl'
                    ? 'Premium wersja raportu zapewni Ci narzędzia do publikowania wyników ESG na poziomie globalnym i wzmocnienia pozycji lidera w branży.'
                    : 'The premium version of the report will provide you with tools to publish ESG results at a global level and strengthen your leadership position in the industry.'
            }
        }
    };
    
    return content[level][version];
}

/**
 * Generates HTML content for PDF based on assessment scores and language
 * @param {Object} scores - Assessment scores object
 * @param {string} currentLanguage - Current language ('pl' or 'en')
 * @param {Function} t - Translation function
 * @param {Object} recommendations - Recommendations object
 * @param {Object} clientDetails - Client details from survey form
 * @returns {string} HTML content string
 */
function generatePdfHtmlContent(scores, currentLanguage, t, recommendations, clientDetails) {
    // Determine ESG level and get random version
    const esgLevel = getEsgLevel(scores.percent);
    const version = getRandomVersion();
    const esgContent = getEsgContent(esgLevel, version, currentLanguage);
    
    const levels = {
        beginner: t('survey.level.beginner', currentLanguage === 'pl' ? 'Początkowy poziom' : 'Beginner level'),
        intermediate: t('survey.level.intermediate', currentLanguage === 'pl' ? 'Średni poziom' : 'Intermediate level'),
        advanced: t('survey.level.advanced', currentLanguage === 'pl' ? 'Zaawansowany poziom' : 'Advanced level')
    };
    
    const interp = scores.percent >= 61 ? levels.advanced : (scores.percent >= 31 ? levels.intermediate : levels.beginner);
    
    const supplyLabel = t('survey.result.cat.sup','Supply');
    const overallLabel = t('survey.result.overall','Score');
    const logobase64 = "PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA3MSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yNS4yNDQgOS4wODA4QzI3LjQzOTMgMTAuNzg0OCAyOC42NjQ2IDEzLjUwNTggMjkuMDE3NiAxNi4xNTEzQzI5LjQ1NDIgMjAuMDI3MyAyNy44NDEyIDIyLjk1NTkgMjUuNjkwNSAyNi4wNDg4QzI0LjgyMTUgMjcuMzA0MSAyNC4wNzYxIDI4LjQwNTUgMjMuOTA3IDI5LjkyNkMyMy43OCAzMC43NTI4IDIzLjY1IDMxLjM4NDIgMjIuOTk5MSAzMS45ODAxQzIxLjA4MTMgMzMuMjYwNSAxOC44MTEyIDMzLjY2NjEgMTYuNTM4OCAzMy4yNzFDMTUuMTE4NCAzMi45NTU2IDEzLjc0MDggMzIuNDU0IDEyLjgwMjkgMzEuMzI4NUMxMi41Mzg1IDMwLjkxOTUgMTIuNDg1NSAzMC40NzMxIDEyLjQyMzkgMzAuMDA0QzEyLjA5NDYgMjguMDMxMSAxMS4wMDEgMjYuNDg5NyA5LjgzNjcxIDI0Ljg3QzcuNzM3NjIgMjEuOTQyOCA2LjgzMDU5IDE4LjgzOTUgNy40Mzk4IDE1LjI3MDVDNy45MDkxNiAxMi43NTQ0IDkuMjc5OTMgMTAuNDA2OSAxMS4zOTQ2IDguODM5QzE1LjcyMjYgNS45OTUyNyAyMS4wMjQ4IDYuMDk5NTMgMjUuMjQ0IDkuMDgwOFpNMTAuOTI5MiAxMS4xMDNDOS4wNDA3MiAxMy4yODc2IDguNDEyNTMgMTUuOTQ2NCA4LjYzNzk0IDE4LjczNjNDOC45ODk4MSAyMS4zMzIzIDEwLjMzNTUgMjMuMzQxNiAxMS44ODY5IDI1LjQxNTRDMTIuMjk0MyAyNS45NzI0IDEyLjY0MjMgMjYuNTUxMyAxMi45Nzg4IDI3LjE1MDJDMTMuMDI3MiAyNy4yMzQ5IDEzLjA3NTYgMjcuMzE5NSAxMy4xMjU1IDI3LjQwNjdDMTMuNTY2MSAyOC4yMTExIDEzLjgwODEgMjkuMDE2NiAxMy44MjkxIDI5LjkzNDZDMTMuODgyNiAzMC40Mzc0IDEzLjkyNTUgMzAuNTIxMiAxNC4yOTQ1IDMwLjkyMzVDMTUuODcxIDMxLjk3NiAxNy42NTU0IDMyLjIyMDMgMTkuNTIxNCAzMS45MjFDMjAuNjI5MyAzMS42NTEzIDIxLjcyNzYgMzEuMzUwOCAyMi4zODU1IDMwLjM5NDRDMjIuNDMzIDMwLjEyMSAyMi40NzA1IDI5Ljg0NTkgMjIuNTAxOCAyOS41NzAzQzIyLjc1NzEgMjcuODU2IDIzLjU4NzkgMjYuNTI1OCAyNC41ODcyIDI1LjEyMTRDMjYuNjc5NSAyMi4xOCAyNy45NTU1IDE5LjQ5MjUgMjcuNDY4NyAxNS44MzQ3QzI3LjAwMDQgMTMuNDkwNiAyNS44NjY3IDExLjIyODEgMjMuODEwOCA5LjgzNTk5QzE5LjY4MjIgNy4yODU4NyAxNC4zNjgyIDcuNTI0NjYgMTAuOTI5MiAxMS4xMDNaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNNjkuNDEgMy40NTIzNEM3MC4zMDY5IDQuMTU1MDcgNzAuNjAxNCA0Ljg5NDk4IDcwLjc4ODMgNS45Njc4NUM3MC4yODY5IDYuMDU0MyA2OS44NTM2IDYuMDg4MzQgNjkuMzU2MyA1Ljk2Nzg1QzY5LjA3NzggNS42NDAzMyA2OC45MDY4IDUuMzA0NjUgNjguNzExOSA0LjkyNTMyQzY4LjMyOTUgNC4zMTA2IDY3Ljc0NDUgNC4xMzE5MSA2Ny4wNTg5IDMuOTQ1MTRDNjUuOTg3NSAzLjcxOTIzIDY1LjAyMjIgNC4wMDc4OSA2NC4wOTM2IDQuNTE5MjZDNjIuOTU0NyA1LjcxNDk5IDYyLjg0NyA3LjExNTYzIDYyLjg3MTkgOC42NjMzNkM2Mi45MTQgOS42NTg0NyA2My4xODYzIDEwLjQ1OTggNjMuODI1MSAxMS4yNDE4QzY0LjU4NDUgMTEuODAyNiA2NS4yMzY4IDEyLjAxMzUgNjYuMTg3OSAxMi4wMDUxQzY2LjI4OTEgMTIuMDA0NSA2Ni4zOTAzIDEyLjAwMzkgNjYuNDk0NiAxMi4wMDMzQzY3LjU3NjEgMTEuOTY5MSA2OC4xMTcxIDExLjYyOTQgNjguODM3MiAxMC44OTQ4QzY5LjMwMDUgMTAuMjA0IDY5LjM3NDggOS43MjgxNSA2OS40OTk1IDguODgyMzhDNjguNDEyNiA4Ljg4MjM4IDY3LjMyNTcgOC44ODIzOCA2Ni4yMDU4IDguODgyMzhDNjYuMjA1OCA4LjQyNDM4IDY2LjIwNTggNy45NjYzOSA2Ni4yMDU4IDcuNDk0NTFDNjcuNzY1MyA3LjQ5NDUxIDY5LjMyNDggNy40OTQ1MSA3MC45MzE1IDcuNDk0NTFDNzAuOTMxNSA5LjM3MjMgNzAuOTMxNSAxMS4yNTAxIDcwLjkzMTUgMTMuMTg0OEM3MC42MDA3IDEzLjE4NDggNzAuMjY5OSAxMy4xODQ4IDY5LjkyOTEgMTMuMTg0OEM2OS43ODczIDEyLjgxODQgNjkuNjQ1NiAxMi40NTIgNjkuNDk5NSAxMi4wNzQ1QzY5LjM2OTYgMTIuMjAwNCA2OS4yMzk2IDEyLjMyNjQgNjkuMTA1NyAxMi40NTYyQzY4LjE2NDEgMTMuMjM0MiA2Ni45MjM0IDEzLjU2MjggNjUuNjk2OCAxMy41MDc0QzY0LjE3NzcgMTMuMzEyMiA2My4wMzIzIDEyLjY1NTYgNjIuMDUyOSAxMS41MTkzQzYxLjAxMTggOS45MzI0IDYwLjk1MzggNy45NjQ3IDYxLjI4NzEgNi4xNTQzNUM2MS43MTQ1IDQuNzc0OTEgNjIuNjE2NiAzLjYyOTQ0IDYzLjkxNDYgMi45MTQ1NEM2NS43Njc1IDIuMDg3MTggNjcuNzY5OSAyLjM0MTk5IDY5LjQxIDMuNDUyMzRaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNNTguMDc5IDMuMDE4NjJDNTguNzE1OCAzLjUyMzU5IDU5LjI1NjUgNC4wNjczNiA1OS40NzUyIDQuODU3NTVDNTkuNDg2MiA1LjE4MTIxIDU5LjQ4ODMgNS41MDU0NyA1OS40NzUyIDUuODI5MDZDNTkuMDAyNyA1LjgyOTA2IDU4LjUzMDEgNS44MjkwNiA1OC4wNDMyIDUuODI5MDZDNTcuOTkgNS42MzQ0MSA1Ny45MzY5IDUuNDM5NzYgNTcuODgyMSA1LjIzOTIxQzU3LjcwOTYgNC43MzU0IDU3LjYyNjkgNC41OTA5OCA1Ny4xOTI5IDQuMjMzMDFDNTYuMzM0NiAzLjgyNTU4IDU1LjM4MjkgMy43MzA4NyA1NC40NDg2IDMuOTU5NzdDNTMuOTI0OSA0LjE1ODQ2IDUzLjU0OSA0LjM1NjA5IDUzLjMxNzUgNC44NTc1NUM1My4yMDIgNS42MjcxMiA1My4yMDIgNS42MjcxMiA1My40ODA5IDYuMzE4NjFDNTMuODQzOCA2LjU5NzIzIDU0LjE3NTMgNi42NTcxNyA1NC42MjU5IDYuNzU2NjZDNTQuODAwMiA2Ljc5NjY0IDU0Ljk3NDYgNi44MzY2MyA1NS4xNTQyIDYuODc3ODJDNTUuNDI3OSA2LjkzODM0IDU1LjQyNzkgNi45MzgzNCA1NS43MDcyIDcuMDAwMDhDNTguNzUyNSA3LjY3NDY0IDU4Ljc1MjUgNy42NzQ2NCA1OS40NzkyIDguNjE5OThDNTkuOTI5MSA5LjQ2NzU4IDYwLjAxMDggMTAuNDU5NiA1OS43NDQ5IDExLjM3MTNDNTkuMzc5NiAxMi4xOTk5IDU4Ljc1NzcgMTIuNzE3MyA1Ny45MTg1IDEzLjA3NjlDNTYuNTMwMyAxMy41NjgxIDU1LjAxMzIgMTMuNjU5IDUzLjYwMzkgMTMuMTg0OEM1Mi42MTgzIDEyLjczNjEgNTEuODU4MSAxMi4wNjcxIDUxLjQwMjEgMTEuMTAzQzUxLjMwMDYgMTAuNjMwNiA1MS4yOTI4IDEwLjE5NjMgNTEuMzEyNiA5LjcxNTFDNTEuNzg1MiA5LjcxNTEgNTIuMjU3OCA5LjcxNTEgNTIuNzQ0NyA5LjcxNTFDNTIuNzkzNCAxMC4wMDI4IDUyLjc5MzQgMTAuMDAyOCA1Mi44NDMxIDEwLjI5NjNDNTIuOTg5NSAxMC45MzE2IDUzLjIwMzUgMTEuMjUzOCA1My43NDcxIDExLjY1ODFDNTQuMzQ3MyAxMS45NTM3IDU0LjkxMTQgMTEuOTg0MiA1NS41NzI5IDExLjk3OTFDNTUuNjc0MSAxMS45Nzg1IDU1Ljc3NTMgMTEuOTc3OSA1NS44Nzk1IDExLjk3NzNDNTYuNjkwMSAxMS45NjA0IDU3LjMxNjIgMTEuODY1NCA1OC4wNDMyIDExLjUxOTNDNTguMjQ3NyAxMC45OTExIDU4LjI4MjIgMTAuNDA4OSA1OC4xODY0IDkuODUzODlDNTcuNTU5NSA4Ljk0MjU5IDU2LjQ4NTUgOC44MzY2MiA1NS40NDkzIDguNjE5NDRDNTIuODcwOSA4LjA3MzYzIDUyLjg3MDkgOC4wNzM2MyA1MS45NTcgNy4xMjE1MkM1MS41NjgyIDYuMjg5MjIgNTEuNDkyIDUuNDk1MjYgNTEuNzYwMSA0LjYxNDY3QzUyLjEzNjUgMy42ODcyNiA1Mi42OTIgMy4xNTk3MyA1My42MDg5IDIuNzQyNjdDNTQuOTg2OCAyLjIyNDk4IDU2Ljc4MTcgMi4zNDE1OSA1OC4wNzkgMy4wMTg2MloiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik01MS40NTU4IDI3LjIwMjNDNTIuOTAwMSAyNy4xODA4IDUyLjkwMDEgMjcuMTgwOCA1NC4zNzM2IDI3LjE1ODlDNTQuODI1MSAyNy4xNDk0IDU0LjgyNTEgMjcuMTQ5NCA1NS4yODU2IDI3LjEzOThDNTcuOTI3MSAyNy4xMDczIDU3LjkyNzEgMjcuMTA3MyA1OC45MDI0IDI3Ljg5NjJDNTkuNDc1NiAyOC41MzE5IDU5LjY1MzIgMjkuMjgxNSA1OS42MTg1IDMwLjExNjhDNTkuNDUwOSAzMS4wNDc0IDU5LjAwNzggMzEuNjc1OSA1OC4zMjk2IDMyLjMzNzRDNTguNDE1MyAzMi4zNjg5IDU4LjUwMDkgMzIuNDAwNCA1OC41ODkyIDMyLjQzMjhDNTkuMDIxOSAzMi42ODQ1IDU5LjEzMjMgMzIuODUzMyA1OS4zMzIgMzMuMzA4OUM1OS40MTczIDMzLjg0MTggNTkuNDUxNCAzNC4zNzU2IDU5LjQ4NDIgMzQuOTEzNkM1OS41MDI3IDM1LjIwMDEgNTkuNTIyMiAzNS40ODY2IDU5LjU0MjkgMzUuNzcyOUM1OS41NTQ2IDM1Ljk2MjUgNTkuNTU0NiAzNS45NjI1IDU5LjU2NjUgMzYuMTU2QzU5LjYwNzEgMzYuNTUxNCA1OS42MDcxIDM2LjU1MTQgNTkuOTA0OSAzNy4wNTYyQzU5LjMzNzggMzcuMDU2MiA1OC43NzA3IDM3LjA1NjIgNTguMTg2NCAzNy4wNTYyQzU4LjA1NDIgMzYuNjcxNyA1OC4wMTEgMzYuMzgxNCA1Ny45ODE3IDM1Ljk4MTFDNTcuOTcxMiAzNS44NTM1IDU3Ljk2MDYgMzUuNzI1OCA1Ny45NDk4IDM1LjU5NDNDNTcuOTI4NiAzNS4zMjYyIDU3LjkwODQgMzUuMDU4IDU3Ljg4OTQgMzQuNzg5OEM1Ny44Nzg1IDM0LjY2MTkgNTcuODY3NiAzNC41MzQxIDU3Ljg1NjQgMzQuNDAyNEM1Ny44NDMxIDM0LjIyNzYgNTcuODQzMSAzNC4yMjc2IDU3LjgyOTYgMzQuMDQ5MkM1Ny43NDI0IDMzLjY2MSA1Ny42MDYxIDMzLjQ1OTEgNTcuMzI3MiAzMy4xNzAxQzU2Ljg1NDMgMzMuMDE3NCA1Ni40NzY0IDMzLjAwMjcgNTUuOTc4NSAzMi45ODc0QzU1LjczNTkgMzIuOTc5NSA1NS43MzU5IDMyLjk3OTUgNTUuNDg4NCAzMi45NzE0QzU1LjI4MyAzMi45NjU0IDU1LjA3NzUgMzIuOTU5NCA1NC44NjU5IDMyLjk1MzNDNTQuMjEzMSAzMi45MzMyIDUzLjU2MDQgMzIuOTEzMiA1Mi44ODc5IDMyLjg5MjZDNTIuODg3OSAzNC4yNjY1IDUyLjg4NzkgMzUuNjQwNSA1Mi44ODc5IDM3LjA1NjJDNTIuNDE1MyAzNy4wNTYyIDUxLjk0MjcgMzcuMDU2MiA1MS40NTU4IDM3LjA1NjJDNTEuNDU1OCAzMy44MDQ0IDUxLjQ1NTggMzAuNTUyNiA1MS40NTU4IDI3LjIwMjNaTTUyLjg4NzkgMjguMzEyNkM1Mi44ODc5IDI5LjQxMTggNTIuODg3OSAzMC41MTEgNTIuODg3OSAzMS42NDM1QzUzLjUxNzQgMzEuNjUxIDU0LjE0NjggMzEuNjU2NSA1NC43NzY0IDMxLjY2MDhDNTUuMDQ0IDMxLjY2NDMgNTUuMDQ0IDMxLjY2NDMgNTUuMzE3IDMxLjY2NzlDNTUuNDg5MiAzMS42Njg4IDU1LjY2MTMgMzEuNjY5NyA1NS44Mzg3IDMxLjY3MDZDNTUuOTk2OSAzMS42NzIgNTYuMTU1MSAzMS42NzM1IDU2LjMxODIgMzEuNjc1QzU2LjkzOSAzMS42MzAxIDU3LjMzMTkgMzEuNDgyIDU3LjgwMTYgMzEuMDg4M0M1OC4xNDQyIDMwLjQ5NzkgNTguMTM5MSAyOS45NDg0IDU4LjA0MzIgMjkuMjg0MUM1Ny45MDU5IDI4Ljg0ODcgNTcuNzg0MyAyOC43NDQ5IDU3LjM3NTIgMjguNTA3QzU2Ljg1MjIgMjguMjk0MSA1Ni41MDA4IDI4LjI2NDQgNTUuOTM2NiAyOC4yNzE5QzU1LjY2OTMgMjguMjczOSA1NS42NjkzIDI4LjI3MzkgNTUuMzk2NyAyOC4yNzZDNTUuMTIwNyAyOC4yODEyIDU1LjEyMDcgMjguMjgxMiA1NC44MzkgMjguMjg2NkM1NC42NTE3IDI4LjI4ODQgNTQuNDY0MyAyOC4yOTAzIDU0LjI3MTIgMjguMjkyMkM1My44MTAxIDI4LjI5NzEgNTMuMzQ5IDI4LjMwNDYgNTIuODg3OSAyOC4zMTI2WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTY4LjU2NTkgMjcuNDA1QzY5LjgwNDQgMjguMTM4MyA3MC4zNSAyOS4xODgxIDcwLjgzMzEgMzAuNDgxMUM3MS4yMTkzIDMyLjI3MjggNzAuOTM2MSAzMy45Mzk3IDY5Ljk3MzkgMzUuNTAzNUM2OS4yNTI2IDM2LjQ4NTMgNjguMTM5NSAzNy4xMTM1IDY2LjkyMTggMzcuMzMzN0M2NS4zNjk0IDM3LjQ3IDYzLjk3MTIgMzcuMzAzMSA2Mi43NDIxIDM2LjMyMzJDNjEuNDc4NSAzNS4xNjIgNjAuOTg1NyAzMy43NDQ3IDYwLjkwMjMgMzIuMDc4OEM2MC45MTk2IDMwLjU3NzEgNjEuNDM2NCAyOS4yNDU1IDYyLjQ5MzIgMjguMTQ0NUM2NC4xMzI2IDI2LjY2ODQgNjYuNTgzNCAyNi40NjQxIDY4LjU2NTkgMjcuNDA1Wk02My4zNTkxIDI5LjE1NzhDNjIuNDA2NSAzMC40NTkxIDYyLjMwMjEgMzEuODcyNyA2Mi41NDQxIDMzLjQyNjZDNjIuODE1OCAzNC40NzgzIDYzLjQxNyAzNS4yMzY0IDY0LjM3MSAzNS43OTg0QzY1LjQ0NTkgMzYuMTkxOSA2Ni40MDE0IDM2LjE5MTIgNjcuNDc5NiAzNS44MDI3QzY4LjQxMDcgMzUuMzg3NSA2OC44NTc3IDM0Ljc1NjYgNjkuMjEzMSAzMy44NjQxQzY5LjY4MTEgMzIuNTM2NyA2OS41NTM0IDMxLjI4ODggNjkuMDY5OSAyOS45NzhDNjguNjE1NyAyOS4xNTY0IDY4LjA2NTYgMjguNzEyMSA2Ny4yMDgyIDI4LjMxMjZDNjcuMTEzNyAyOC4yNjY4IDY3LjAxOTIgMjguMjIxIDY2LjkyMTggMjguMTczOEM2NS41NjMzIDI4LjAzOTggNjQuMzE3IDI4LjEyNTIgNjMuMzU5MSAyOS4xNTc4WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTQyLjAwNDQgMi43NzU3NEM0NC41NTYzIDIuNzc1NzQgNDcuMTA4MiAyLjc3NTc0IDQ5LjczNzQgMi43NzU3NEM0OS43Mzc0IDMuMTg3OTQgNDkuNzM3NCAzLjYwMDE0IDQ5LjczNzQgNC4wMjQ4M0M0Ny42NTgxIDQuMDI0ODMgNDUuNTc4OCA0LjAyNDgzIDQzLjQzNjQgNC4wMjQ4M0M0My40MzY0IDUuMDc4MjIgNDMuNDM2NCA2LjEzMTYxIDQzLjQzNjQgNy4yMTY5M0M0NS4zNzQgNy4yMTY5MyA0Ny4zMTE1IDcuMjE2OTMgNDkuMzA3OCA3LjIxNjkzQzQ5LjMwNzggNy42MjkxMyA0OS4zMDc4IDguMDQxMzMgNDkuMzA3OCA4LjQ2NjAxQzQ3LjM3MDIgOC40NjYwMSA0NS40MzI3IDguNDY2MDEgNDMuNDM2NCA4LjQ2NjAxQzQzLjQzNjQgOS41NjUyMSA0My40MzY0IDEwLjY2NDQgNDMuNDM2NCAxMS43OTY5QzQ1LjU2MyAxMS43OTY5IDQ3LjY4OTYgMTEuNzk2OSA0OS44ODA2IDExLjc5NjlDNDkuODgwNiAxMi4yNTQ5IDQ5Ljg4MDYgMTIuNzEyOSA0OS44ODA2IDEzLjE4NDhDNDcuMjgxNSAxMy4xODQ4IDQ0LjY4MjMgMTMuMTg0OCA0Mi4wMDQ0IDEzLjE4NDhDNDIuMDA0NCA5Ljc0OTc5IDQyLjAwNDQgNi4zMTQ4MSA0Mi4wMDQ0IDIuNzc1NzRaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNNDIuMDA0NCAyNy4yMDIzQzQyLjg3ODcgMjcuMTkwOCA0My43NTI5IDI3LjE3OTQgNDQuNjUzNyAyNy4xNjc2QzQ0LjkyNzMgMjcuMTYyNSA0NS4yMDEgMjcuMTU3NSA0NS40ODMgMjcuMTUyM0M0NS43MDMzIDI3LjE1MDYgNDUuOTIzNiAyNy4xNDkyIDQ2LjE0MzkgMjcuMTQ4MUM0Ni4yNTU1IDI3LjE0NTIgNDYuMzY3MSAyNy4xNDI0IDQ2LjQ4MjIgMjcuMTM5NUM0Ny4zNzkgMjcuMTM4OSA0OC4xMzk2IDI3LjM1MyA0OC44MTA5IDI3Ljk1MzRDNDkuNDg0NiAyOC42OTQgNDkuNjYyNyAyOS4zNDE4IDQ5LjYzODkgMzAuMzA3MUM0OS41NDIxIDMxLjA5NjQgNDkuMjI3NSAzMS43ODc3IDQ4LjYxODYgMzIuMzI4N0M0Ny41NDU0IDMzLjAwMTcgNDYuNDc2NSAzMi45MjY4IDQ1LjIzNTQgMzIuOTA5OUM0NC42NDE4IDMyLjkwNDIgNDQuMDQ4MSAzMi44OTg0IDQzLjQzNjQgMzIuODkyNUM0My40MzY0IDM0LjI2NjUgNDMuNDM2NCAzNS42NDA1IDQzLjQzNjQgMzcuMDU2MkM0Mi45NjM5IDM3LjA1NjIgNDIuNDkxMyAzNy4wNTYyIDQyLjAwNDQgMzcuMDU2MkM0Mi4wMDQ0IDMzLjgwNDQgNDIuMDA0NCAzMC41NTI2IDQyLjAwNDQgMjcuMjAyM1pNNDMuNDM2NCAyOC4zMTI2QzQzLjQzNjQgMjkuNDU3NiA0My40MzY0IDMwLjYwMjYgNDMuNDM2NCAzMS43ODIyQzQzLjg4NTQgMzEuNzg4IDQ0LjMzNDMgMzEuNzkzNyA0NC43OTY5IDMxLjc5OTZDNDQuOTM2IDMxLjgwMjEgNDUuMDc1MSAzMS44MDQ2IDQ1LjIxODQgMzEuODA3M0M0Ni4xMzAyIDMxLjgxMjggNDcuMDUzMyAzMS44MDczIDQ3Ljc5NTIgMzEuMjM1OEM0OC4yMjI5IDMwLjY4ODYgNDguMjU0IDMwLjA4NiA0OC4xNjIyIDI5LjQyMjlDNDcuOTE4OCAyOC45MzMxIDQ3Ljc1NDIgMjguNjY2OSA0Ny4yNDQ4IDI4LjQyOTdDNDYuNTA0MSAyOC4yNjExIDQ1Ljc4NzEgMjguMjgzNiA0NS4wMjk2IDI4LjI5NTJDNDQuMjQxIDI4LjMwMzggNDQuMjQxIDI4LjMwMzggNDMuNDM2NCAyOC4zMTI2WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTIyLjYwOTMgMTUuNjkxNkMyMi45NTgzIDE1LjgyMTcgMjIuOTU4MyAxNS44MjE3IDIzLjE1NjMgMTYuMDkwNkMyMy4yOTc5IDE2Ljc3MTUgMjIuOTk0NyAxNy4yNzEzIDIyLjcxNjcgMTcuODk0OUMyMi42NTQ2IDE4LjAzOTIgMjIuNTkyNSAxOC4xODM2IDIyLjUyODYgMTguMzMyNEMyMi4zODEyIDE4LjY3NTIgMjIuMjMyOCAxOS4wMTc2IDIyLjA4MzYgMTkuMzU5N0MyMS43NjIgMjAuMDk5NSAyMS40NDkyIDIwLjg0MjcgMjEuMTM1OCAyMS41ODU3QzIwLjg5MzIgMjIuMTU5NyAyMC42NTA0IDIyLjczMzYgMjAuNDA3NSAyMy4zMDc2QzIwLjM0OCAyMy40NDgyIDIwLjI4ODYgMjMuNTg4OSAyMC4yMjczIDIzLjczMzlDMjAuMDU0MyAyNC4xNDI2IDE5Ljg4MDYgMjQuNTUxMSAxOS43MDY2IDI0Ljk1OTRDMTkuNjU1MyAyNS4wODA5IDE5LjYwNCAyNS4yMDI0IDE5LjU1MTIgMjUuMzI3NkMxOS4xOTY3IDI2LjE1NzEgMTguOCAyNi45NTkzIDE4LjM3NTggMjcuNzU3NEMxNy44MDI0IDI3LjgyNDMgMTcuNTc2NCAyNy44MDAxIDE3LjEwMzUgMjcuNDYyN0MxNi45NjAzIDI3LjMyODQgMTYuODE5NSAyNy4xOTE4IDE2LjY4MDggMjcuMDUzMkMxNi42MDU4IDI2Ljk4MDkgMTYuNTMwNyAyNi45MDg2IDE2LjQ1MzQgMjYuODM0MUMxNi4yOTU2IDI2LjY4MTIgMTYuMTM5IDI2LjUyNzMgMTUuOTgzNCAyNi4zNzI0QzE1Ljc0NDkgMjYuMTM1OCAxNS41MDI2IDI1LjkwMzYgMTUuMjU5NCAyNS42NzE1QzE1LjEwNjUgMjUuNTIyMiAxNC45NTM3IDI1LjM3MjcgMTQuODAxMyAyNS4yMjI5QzE0LjcyODggMjUuMTUzNiAxNC42NTYzIDI1LjA4NDQgMTQuNTgxNiAyNS4wMTNDMTQuMjY2MiAyNC42OTQ3IDE0LjA5IDI0LjQ4ODQgMTQuMDE2NyAyNC4wNDcxQzE0LjA3OTcgMjMuNzMyNiAxNC4wNzk3IDIzLjczMjYgMTQuMzY2MSAyMy40NTVDMTQuODA1IDIzLjM5NCAxNS4wMDYzIDIzLjQwMTggMTUuMzY5MiAyMy42NTY3QzE1LjQ1OTYgMjMuNzQ4OCAxNS41NSAyMy44NDEgMTUuNjQzMiAyMy45MzU5QzE1Ljc0MjkgMjQuMDM1NSAxNS44NDI3IDI0LjEzNSAxNS45NDU1IDI0LjIzNzZDMTYuMDQ3NSAyNC4zNDI5IDE2LjE0OTUgMjQuNDQ4MiAxNi4yNTQ2IDI0LjU1NjZDMTYuNDU5MiAyNC43NjM1IDE2LjY2NDEgMjQuOTcgMTYuODY5NCAyNS4xNzYzQzE2Ljk1OTMgMjUuMjY4NiAxNy4wNDkyIDI1LjM2MDkgMTcuMTQxOSAyNS40NTZDMTcuMzYzMiAyNS42ODg0IDE3LjM2MzIgMjUuNjg4NCAxNy42NTk4IDI1LjgxNDRDMTcuNjg0MiAyNS43Mzk3IDE3LjcwODcgMjUuNjY1IDE3LjczMzkgMjUuNTg4MUMxOC4wMDI3IDI0Ljc4NDggMTguMzE1NSAyNC4wMDggMTguNjU0OSAyMy4yMzA2QzE4LjcwODggMjMuMTA2MSAxOC43NjI3IDIyLjk4MTcgMTguODE4MiAyMi44NTM1QzE4Ljk4OTUgMjIuNDU4MiAxOS4xNjE1IDIyLjA2MzIgMTkuMzMzNSAyMS42NjgxQzE5LjQ0NiAyMS40MDg2IDE5LjU1ODYgMjEuMTQ5MSAxOS42NzExIDIwLjg4OTZDMTkuODM4MSAyMC41MDQyIDIwLjAwNTQgMjAuMTE4OSAyMC4xNzM0IDE5LjczMzlDMjAuNDUgMTkuMSAyMC43MjM1IDE4LjQ2NTIgMjAuOTkwNyAxNy44Mjc1QzIxLjA0MjMgMTcuNzA1NyAyMS4wOTM4IDE3LjU4MzggMjEuMTQ2OSAxNy40NTgzQzIxLjI0NDEgMTcuMjI4MSAyMS4zNDA0IDE2Ljk5NzQgMjEuNDM1NCAxNi43NjYzQzIxLjg5OSAxNS42NzQ4IDIxLjg5OSAxNS42NzQ4IDIyLjYwOTMgMTUuNjkxNloiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik01Ni42MTEyIDE2LjM3NjlDNTcuOSAxNi4zNzY5IDU3LjkgMTYuMzc2OSA1OC4yMjczIDE2LjY3NTFDNTguMzExMiAxNi44MjI4IDU4LjM5NTIgMTYuOTcwNiA1OC40ODE4IDE3LjEyMjlDNTguNTg2MiAxNy4yOTgyIDU4LjY5MDggMTcuNDczNSA1OC43OTU2IDE3LjY0ODdDNTguODU0OSAxNy43NTEzIDU4LjkxNDEgMTcuODUzOCA1OC45NzUyIDE3Ljk1OTVDNTkuMjMyMiAxOC4zOTMgNTkuNTAyMyAxOC44MTggNTkuNzc0NSAxOS4yNDI2QzU5LjgyNjIgMTkuMzIzMyA1OS44NzggMTkuNDA0MSA1OS45MzEzIDE5LjQ4NzJDNjAuMDM2NyAxOS42NTE4IDYwLjE0MjIgMTkuODE2NCA2MC4yNDc4IDE5Ljk4MDlDNjAuNTAzMiAyMC4zNzk5IDYwLjc1NjggMjAuNzggNjEuMDEwMiAyMS4xODAyQzYxLjA5NzMgMjEuMzE3NiA2MS4xODQzIDIxLjQ1NDkgNjEuMjc0IDIxLjU5NjRDNjEuNDgwMSAyMS45Mjg0IDYxLjQ4MDEgMjEuOTI4NCA2MS42MjMzIDIyLjIwNTlDNjEuNjcwNiAyMC4yODIzIDYxLjcxNzggMTguMzU4OCA2MS43NjY1IDE2LjM3NjlDNjIuMDk3MyAxNi4zNzY5IDYyLjQyODEgMTYuMzc2OSA2Mi43Njg5IDE2LjM3NjlDNjIuNzY4OSAxOC44OTU5IDYyLjc2ODkgMjEuNDE0OCA2Mi43Njg5IDI0LjAxMDJDNjEuNjIzMyAyNC4wMTAyIDYxLjYyMzMgMjQuMDEwMiA2MS4zMzA4IDIzLjc2NjNDNjEuMjYxIDIzLjY1MjkgNjEuMTkxMiAyMy41Mzk0IDYxLjExOTMgMjMuNDIyNUM2MC45OTczIDIzLjIzMjEgNjAuOTk3MyAyMy4yMzIxIDYwLjg3MjggMjMuMDM3OEM2MC43NDgxIDIyLjgzMjEgNjAuNzQ4MSAyMi44MzIxIDYwLjYyMDkgMjIuNjIyM0M2MC40Mzg3IDIyLjM0MzggNjAuMjU2MSAyMi4wNjU1IDYwLjA3MzIgMjEuNzg3NEM1OS44ODg0IDIxLjQ5OTIgNTkuNzA0IDIxLjIxMDggNTkuNTIgMjAuOTIyMkM1OS4zMzQ2IDIwLjYzMjIgNTkuMTQ5MSAyMC4zNDI0IDU4Ljk2MzQgMjAuMDUyNkM1OC44ODI4IDE5LjkyNjIgNTguODAyMiAxOS43OTk5IDU4LjcxOTEgMTkuNjY5N0M1OC40NTMxIDE5LjI2MTEgNTguMTc4MSAxOC44NTk3IDU3LjkgMTguNDU4N0M1Ny44OTY0IDE4LjYyMTkgNTcuODkyOCAxOC43ODUyIDU3Ljg4OTEgMTguOTUzM0M1Ny44NzU3IDE5LjU1NjggNTcuODYxMyAyMC4xNjAyIDU3Ljg0NjcgMjAuNzYzNkM1Ny44NDA1IDIxLjAyNTIgNTcuODM0NSAyMS4yODY4IDU3LjgyODggMjEuNTQ4NEM1Ny44MjA2IDIxLjkyMzUgNTcuODExNCAyMi4yOTg3IDU3LjgwMjEgMjIuNjczOEM1Ny43OTg1IDIyLjg1MDMgNTcuNzk4NSAyMi44NTAzIDU3Ljc5NDkgMjMuMDMwNEM1Ny43NzMxIDIzLjg1NTYgNTcuNzczMSAyMy44NTU2IDU3LjYxMzYgMjQuMDEwMkM1Ny4yODI4IDI0LjAxMDIgNTYuOTUyIDI0LjAxMDIgNTYuNjExMiAyNC4wMTAyQzU2LjYxMTIgMjEuNDkxMiA1Ni42MTEyIDE4Ljk3MjIgNTYuNjExMiAxNi4zNzY5WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTEzLjIyMDUgMzUuMzkwN0MxMy45MjY2IDM1LjQxODEgMTQuNDMxIDM1LjYwMDIgMTUuMDI3MyAzNS45NDFDMTUuOTY4IDM2LjMzNzEgMTYuOTU4NCAzNi40MTI1IDE3Ljk3MyAzNi40MDU2QzE4LjA5MDYgMzYuNDA1IDE4LjIwODEgMzYuNDA0NCAxOC4zMjkyIDM2LjQwMzhDMTkuODA3NSAzNi4zNzc2IDIxLjExNTIgMzYuMTUwMyAyMi4zODU1IDM1LjM5MDdDMjIuNzg4MyAzNS4zMzg3IDIyLjc4ODMgMzUuMzM4NyAyMy4xMDE1IDM1LjM5MDdDMjMuMzg3OSAzNS42NjgzIDIzLjM4NzkgMzUuNjY4MyAyMy40MzI3IDM2LjExOTNDMjMuMTcxOCAzNi44NDE4IDIyLjc0OTYgMzYuOTc5NiAyMi4wNjUgMzcuMzExQzIxLjY2OTUgMzcuNDcyNSAyMS42Njk1IDM3LjQ3MjUgMjEuMzUzNCAzNy41MjM1QzIxLjA2NDcgMzcuNTkyNiAyMS4wNjQ3IDM3LjU5MjYgMjAuOTE0MyAzNy45MDQxQzIwLjg2MjIgMzguMDI1IDIwLjgxMDIgMzguMTQ1OSAyMC43NTY2IDM4LjI3MDVDMjAuMzcxNyAzOS4wNzE1IDE5Ljk4NDMgMzkuNDQ1MiAxOS4xODEzIDM5Ljg3NTNDMTguMjMyOSA0MC4xMTYgMTcuNTEyNiA0MC4wMDc5IDE2LjY1NzMgMzkuNTU0M0MxNi4xMjMgMzkuMTA3MSAxNS41NzMzIDM4LjU5MDYgMTUuNDcwOSAzNy44ODUxQzE1LjM5MzMgMzcuNTgzMSAxNS4zOTMzIDM3LjU4MzEgMTUuMDcxNSAzNy40NTUyQzE0Ljk0OCAzNy40MTUxIDE0LjgyNDUgMzcuMzc1IDE0LjY5NzIgMzcuMzMzN0MxNC4wMzcgMzcuMTAxOCAxMy40MzkzIDM2Ljg1MTkgMTIuOTM0IDM2LjM2MjJDMTIuOTA3MiAzNi4wMjM5IDEyLjkwNzIgMzYuMDIzOSAxMi45MzQgMzUuNjY4M0MxMy4wMjg2IDM1LjU3NjcgMTMuMTIzMSAzNS40ODUxIDEzLjIyMDUgMzUuMzkwN1pNMTYuOTQzOCAzNy44ODg5QzE3LjU1MzYgMzguNjEyMiAxNy41NTM2IDM4LjYxMjIgMTguMTYxIDM4LjY2OTZDMTguNzY4MyAzOC42MTIyIDE4Ljc2ODMgMzguNjEyMiAxOS4zNzgyIDM3Ljg4ODlDMTguNTc0OCAzNy44ODg5IDE3Ljc3MTUgMzcuODg4OSAxNi45NDM4IDM3Ljg4ODlaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNNDYuODczMyAxNi42NTQ1QzQ3LjMyMjkgMTcuMDE2IDQ3LjY4OSAxNy4zNjA1IDQ3Ljg3NTggMTcuOTAzNUM0Ny44OTM3IDE4LjM1NDYgNDcuODkzNyAxOC4zNTQ2IDQ3Ljg3NTggMTguNzM2M0M0Ny41OTIyIDE4LjczNjMgNDcuMzA4NyAxOC43MzYzIDQ3LjAxNjUgMTguNzM2M0M0Ni45ODE4IDE4LjY1OTMgNDYuOTQ3MSAxOC41ODI0IDQ2LjkxMTQgMTguNTAzMUM0Ni44NjM0IDE4LjQwMjYgNDYuODE1NCAxOC4zMDIxIDQ2Ljc2NTkgMTguMTk4NUM0Ni42OTYyIDE4LjA0ODcgNDYuNjk2MiAxOC4wNDg3IDQ2LjYyNSAxNy44OTU5QzQ2LjQwMiAxNy41NjM4IDQ2LjI1NjIgMTcuNDc3MiA0NS44NzA5IDE3LjM0ODRDNDUuMDYzNCAxNy4yNDYxIDQ0LjM4MDMgMTcuMjA0IDQzLjY4NzEgMTcuNjQzM0M0My4zOTM3IDE4LjExMDMgNDMuMzI4MiAxOC4zMzg3IDQzLjQzNjQgMTguODc1QzQzLjkzNjIgMTkuMzgzNiA0NC41ODExIDE5LjQyOTcgNDUuMjYyMyAxOS41NTE2QzQ2LjM5NTkgMTkuNzc2OCA0Ny4zMTkxIDE5Ljk3NzEgNDguMDE5IDIwLjkzMDhDNDguMjYxMSAyMS42Nzg3IDQ4LjI5ODggMjIuMzAxIDQ3LjkzODQgMjMuMDA0QzQ3LjU1IDIzLjU5MDcgNDcuMDA4MiAyMy44NzkgNDYuMzI1NyAyNC4wOTE1QzQ1LjA5OTIgMjQuMzE3NyA0My45NDg5IDI0LjI1NjUgNDIuOTA5NSAyMy41NzQ4QzQyLjQyNjkgMjMuMjIwMSA0Mi4xNDgxIDIyLjkxNTcgNDIuMDA0NCAyMi4zNDQ3QzQxLjk4NjUgMjEuODg1IDQxLjk4NjUgMjEuODg1IDQyLjAwNDQgMjEuNTEyQzQyLjMzNTIgMjEuNTEyIDQyLjY2NiAyMS41MTIgNDMuMDA2OCAyMS41MTJDNDMuMDQzNCAyMS42MjUgNDMuMDQzNCAyMS42MjUgNDMuMDgwNyAyMS43NDAyQzQzLjM1MDEgMjIuNTMyNyA0My4zNTAxIDIyLjUzMjcgNDQuMDA5MyAyMy4wMzg3QzQ0Ljg0MzEgMjMuMzQ1MiA0NS43ODAyIDIzLjIxNTYgNDYuNTg2OSAyMi44OTk5QzQ2Ljk1MTYgMjIuNTAyMyA0Ny4wMTg2IDIyLjMwNDIgNDcuMDA3NiAyMS43NzIyQzQ2Ljg0OTMgMjEuMzAxOSA0Ni43MjQzIDIxLjIxNDggNDYuMzAwNSAyMC45NTY5QzQ1Ljk4NTYgMjAuODQ4MiA0NS45ODU2IDIwLjg0ODIgNDUuNjQ4MyAyMC43ODM5QzQ1LjUyNDggMjAuNzU2NCA0NS40MDEzIDIwLjcyOSA0NS4yNzQgMjAuNzAwN0M0NS4wMTY4IDIwLjY0NjIgNDQuNzU5NSAyMC41OTIgNDQuNTAyMSAyMC41MzgxQzQzLjY2NTEgMjAuMzUxMyA0Mi45MDA5IDIwLjE1OTMgNDIuMzgzNyAxOS40Mzc4QzQyLjE0NDEgMTguNzAyMiA0Mi4xODA2IDE3Ljk4NjYgNDIuNTIzNSAxNy4yOTYzQzQzLjcwMjIgMTYuMDMzOCA0NS4zMzI1IDE1LjkyMzggNDYuODczMyAxNi42NTQ1WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTY5LjM4MjYgMTYuNDkxOEM3MC4wNzk3IDE2LjkyNzcgNzAuNjE4NCAxNy41NDQzIDcwLjg1MSAxOC4zMTk5QzcwLjg3NzYgMTguNDU3MyA3MC45MDQyIDE4LjU5NDcgNzAuOTMxNiAxOC43MzYzQzcwLjU1MzUgMTguNzM2MyA3MC4xNzU1IDE4LjczNjMgNjkuNzg1OSAxOC43MzYzQzY5LjcxMjEgMTguNTg0NSA2OS42MzgzIDE4LjQzMjggNjkuNTYyMiAxOC4yNzY1QzY5LjIyMTYgMTcuNzA0MyA2OC44NzM0IDE3LjUzMDQgNjguMjEwNyAxNy4zNDg0QzY3LjQ0NzkgMTcuMjQ2OSA2Ni44NDY1IDE3LjMzNyA2Ni4yMDU4IDE3Ljc2NDdDNjUuMzY5NiAxOC42NzE2IDY1LjMwMzQgMTkuNDQ3NCA2NS4zMTU5IDIwLjY0MjRDNjUuMzcwOCAyMS40NTEyIDY1LjU4MzQgMjEuOTg2MyA2Ni4xMzQyIDIyLjYxMzZDNjYuNzI0MSAyMy4wODUyIDY3LjI1OSAyMy4wODYgNjcuOTk0OCAyMy4wNzc3QzY4LjUyNjggMjMuMDE5OSA2OC44MiAyMi44MjczIDY5LjIxMzEgMjIuNDgzNUM2OS41MzUzIDIyLjA0ODYgNjkuNzM3MiAyMS41OTY0IDY5LjkyOTEgMjEuMDk1NkM3MC4yNTk5IDIxLjA5NTYgNzAuNTkwNyAyMS4wOTU2IDcwLjkzMTYgMjEuMDk1NkM3MC44OTUxIDIyLjA2ODYgNzAuNjIgMjIuNzM2MyA2OS45MjkxIDIzLjQ1NUM2OS4wNjQgMjQuMTA1OCA2OC4xNzA3IDI0LjI2MjYgNjcuMDkxNCAyNC4yMTQ2QzY2LjIxNjkgMjQuMDg4NyA2NS41MzE0IDIzLjgwODUgNjQuOTM0NCAyMy4xNjVDNjQuMDAxOCAyMS44OTA5IDYzLjkzMjggMjAuNTIwOCA2NC4wNTc4IDE5LjAxMzhDNjQuMTc4MiAxOC41Mzk3IDY0LjM1MjkgMTguMTcwNSA2NC42MzA2IDE3Ljc2NDdDNjQuNjkxMyAxNy42NzUzIDY0Ljc1MjEgMTcuNTg1OCA2NC44MTQ2IDE3LjQ5MzdDNjUuODY4NiAxNi4xMzk0IDY3Ljc5ODYgMTUuODEyNCA2OS4zODI2IDE2LjQ5MThaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMTMuNzAyMSAzMy4wNjIyQzE0LjEwMiAzMy4xNzY1IDE0LjQ0OTQgMzMuMzI4NCAxNC44MjI2IDMzLjUwODRDMTYuNzg4MiAzNC4zODYxIDE5LjA1MTQgMzQuMzk4MyAyMS4wOTY3IDMzLjcyNTNDMjEuNDQ2NSAzMy41NTYyIDIxLjc3MzMgMzMuMzc3NiAyMi4wOTkxIDMzLjE2ODVDMjIuNDU4OSAzMi45OTYyIDIyLjcwNSAzMi45ODc3IDIzLjEwMTUgMzMuMDMxM0MyMy4zODc5IDMzLjMwODkgMjMuMzg3OSAzMy4zMDg5IDIzLjQ4NjQgMzMuNjkwNkMyMy4zNzIyIDM0LjIxMzUgMjMuMjkyMyAzNC4yNzI5IDIyLjg1OTkgMzQuNTc1M0MyMC42OTkyIDM1LjgzNTcgMTguMDI5IDM1LjkyNjEgMTUuNjIyNSAzNS40MDUzQzE0LjczMTMgMzUuMTUyMyAxMy44MDczIDM0Ljg0NzIgMTMuMDc3MyAzNC4yODA0QzEyLjk1MDggMzMuNzYyMSAxMi45NTA4IDMzLjc2MjEgMTIuOTM0MSAzMy4zMDg5QzEzLjM2MzcgMzMuMDMxMyAxMy4zNjM3IDMzLjAzMTMgMTMuNzAyMSAzMy4wNjIyWiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTQ4Ljg3ODIgMTYuMzc2OUM0OS41NzEzIDE2LjIyNjkgNDkuNTcxMyAxNi4yMjY5IDUwLjAyMzggMTYuMzc2OUM1MC40OTkzIDE2Ljg5OTYgNTAuODI3OCAxNy41MDIxIDUxLjE2OTQgMTguMTExN0M1MS4yNjczIDE4LjI3OTEgNTEuMzY1NiAxOC40NDYzIDUxLjQ2NDIgMTguNjEzMkM1MS43MDQgMTkuMDIyNCA1MS45Mzk2IDE5LjQzMzMgNTIuMTcxOSAxOS44NDY2QzUyLjcxMjYgMTkuMDczMSA1My4yMzA5IDE4LjI5MiA1My43MjAyIDE3LjQ4NzJDNTQuMzAyIDE2LjUzMyA1NC4zMDIgMTYuNTMzIDU0LjQ2MzEgMTYuMzc2OUM1NC44NDU2IDE2LjM1NzMgNTUuMjI1NiAxNi4zNzEgNTUuNjA4NyAxNi4zNzY5QzU1LjM5NjMgMTcuMTM3MSA1NS4wMTY0IDE3LjcxNjMgNTQuNTcwNSAxOC4zNjMzQzU0LjUwMzkgMTguNDYxNiA1NC40MzcyIDE4LjU1OTkgNTQuMzY4NiAxOC42NjEyQzU0LjMwMTYgMTguNzU5OCA1NC4yMzQ2IDE4Ljg1ODUgNTQuMTY1NSAxOC45NjAyQzU0LjA5NzkgMTkuMDYwNiA1NC4wMzAzIDE5LjE2MTEgNTMuOTYwNiAxOS4yNjQ3QzUzLjgxNyAxOS40NjkzIDUzLjY2NiAxOS42NjkxIDUzLjUwODUgMTkuODYzOEM1Mi44Mzg0IDIwLjcyMiA1Mi43NTk4IDIxLjQzMjIgNTIuNzYyNiAyMi40OTIyQzUyLjc1OTYgMjIuNjM4OCA1Mi43NTY3IDIyLjc4NTQgNTIuNzUzNiAyMi45MzY1QzUyLjc0NjkgMjMuMjk0NSA1Mi43NDQgMjMuNjUyMSA1Mi43NDQ3IDI0LjAxMDJDNTIuNDEzOSAyNC4wMTAyIDUyLjA4MzEgMjQuMDEwMiA1MS43NDIyIDI0LjAxMDJDNTEuNzQ2OSAyMy45MzIyIDUxLjc1MTYgMjMuODU0MiA1MS43NTY0IDIzLjc3MzlDNTEuODUzNCAyMS42MDY3IDUxLjM3NjggMjAuMjM4NSA1MC4wOTQ0IDE4LjQ3NTRDNDkuODA2MyAxOC4wNzg4IDQ5LjUzOTQgMTcuNjcxNyA0OS4yNzIgMTcuMjYxNkM0OS4xOTQ1IDE3LjE0ODIgNDkuMTE2OSAxNy4wMzQ4IDQ5LjAzNyAxNi45MTc5QzQ4Ljg3ODIgMTYuNjU0NCA0OC44NzgyIDE2LjY1NDQgNDguODc4MiAxNi4zNzY5WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTE3LjUxNjYgOS40Mzc1MkMxNy42MTUgOS44Mjc4NiAxNy42MTUgOS44Mjc4NiAxNy42NTk4IDEwLjI3MDJDMTcuMzMwNCAxMC43Mjk5IDE2LjkwMTYgMTAuODAxNiAxNi4zNjIgMTAuOTM4MkMxNC43Nzk0IDExLjM5MzQgMTMuODAzOSAxMi4xMzgxIDEyLjcyNTQgMTMuMzFDMTIuMzYxMiAxMy42MDExIDEyLjM2MTIgMTMuNjAxMSAxMS45NjU3IDEzLjU4NDNDMTEuNjQ1MiAxMy40NjIzIDExLjY0NTIgMTMuNDYyMyAxMS41MDIgMTMuMzIzNkMxMS40NDUxIDEyLjgyNDcgMTEuNDUxMiAxMi41Njc4IDExLjczMzYgMTIuMTQwMUMxMy4yMDEyIDEwLjYyMTggMTUuMjI5OSA4Ljk3NTgyIDE3LjUxNjYgOS40Mzc1MloiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0zMS45ODkxIDE4Ljk3OTFDMzIuMTI3OSAxOS4wMzY0IDMyLjI2NjcgMTkuMDkzNiAzMi40MDk3IDE5LjE1MjZDMzIuNDU3IDE5LjI5IDMyLjUwNDMgMTkuNDI3NCAzMi41NTI5IDE5LjU2OUMzMi42MjY4IDE5LjQ5NzQgMzIuNzAwNiAxOS40MjU5IDMyLjc3NjcgMTkuMzUyMUMzMy4yNzUzIDE5LjA2NzEgMzMuNTc4NyAxOS4xNTU5IDM0LjEyODIgMTkuMjkxNEMzNC40MDU2IDE5LjUwODMgMzQuNDA1NiAxOS41MDgzIDM0LjU1NzggMTkuNzA3OEMzNC42OTk2IDE5LjYxNjIgMzQuODQxMyAxOS41MjQ2IDM0Ljk4NzQgMTkuNDMwMkMzNS4zMzY1IDE5LjM2OTUgMzUuMzM2NSAxOS4zNjk1IDM1LjcwMzQgMTkuNDMwMkMzNi4wNDM1IDE5LjcyNTEgMzYuMDQzNSAxOS43MjUxIDM2LjI3NjIgMjAuMTI0MUMzNi4yNzYyIDIwLjYyMSAzNi4yMjc1IDIwLjg1NTUgMzUuODgyNCAyMS4yMjU4QzM1LjU2MDIgMjEuMzczMiAzNS41NjAyIDIxLjM3MzIgMzUuMjAyMiAyMS4zNjQ1QzM0Ljc3OTMgMjEuMjEwOCAzNC41NjU2IDIxLjAwNjYgMzQuMjcxNCAyMC42NzkzQzM0LjE3NjkgMjAuNzcwOSAzNC4wODI0IDIwLjg2MjUgMzMuOTg1IDIwLjk1NjlDMzMuNDE1OSAyMS4wMzA0IDMzLjE5MTQgMjEuMDAxMSAzMi43MTQgMjAuNjc5M0MzMi42MTM2IDIwLjU4NzcgMzIuNTEzMiAyMC40OTYxIDMyLjQwOTcgMjAuNDAxN0MzMi4zMTUyIDIwLjQ5MzMgMzIuMjIwNyAyMC41ODQ5IDMyLjEyMzMgMjAuNjc5M0MzMS42Nzg5IDIwLjcyNTEgMzEuMzg0NyAyMC43NDk0IDMwLjk5NTYgMjAuNTIzMUMzMC43NTg4IDIwLjE0MDcgMzAuNzc4MSAxOS44NjczIDMwLjgzNDUgMTkuNDMwMkMzMS4xODM1IDE4Ljk4NDMgMzEuNDE2MyAxOC44NDMyIDMxLjk4OTEgMTguOTc5MVoiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0xOC4zMTMxIDAuMDI2MDE0NUMxOC44MDU0IDAuMTM4Nzc5IDE4LjgwNTQgMC4xMzg3NzkgMTkuMDkxOCAwLjU1NTE0QzE5LjAyNyAxLjQ1MDcxIDE5LjAyNyAxLjQ1MDcxIDE4LjY2MjIgMS44MDQyMkMxOC43MzYgMS44NzU3OSAxOC44MDk5IDEuOTQ3MzUgMTguODg2IDIuMDIxMDhDMTkuMTc3NiAyLjUwMDQgMTkuMDc5OSAyLjgwMjE1IDE4Ljk0ODYgMy4zMzA4OEMxOC44NTQxIDMuNDIyNDggMTguNzU5NiAzLjUxNDA4IDE4LjY2MjIgMy42MDg0NkMxOC43NzMgMy42ODE0NSAxOC43NzMgMy42ODE0NSAxOC44ODYgMy43NTU5MkMxOS4wOTE4IDQuMDI0ODIgMTkuMDkxOCA0LjAyNDgyIDE5LjA2NSA0LjUxOTI1QzE4Ljk0ODYgNC45OTYzMyAxOC45NDg2IDQuOTk2MzMgMTguNjYyMiA1LjI3MzlDMTguMTQyIDUuMzM5NjYgMTcuODk1NSA1LjMzNzYzIDE3LjQ2MjkgNS4wMzk3QzE3LjIzMDIgNC43MTg3NSAxNy4yMzAyIDQuNzE4NzUgMTcuMTY3NSA0LjM3MTc5QzE3LjI0MDEgMy45Njk1MiAxNy4zODI1IDMuNzcxOTcgMTcuNjU5OCAzLjQ2OTY3QzE3LjU4ODkgMy40MTgxNSAxNy41MTggMy4zNjY2MiAxNy40NDUgMy4zMTM1M0MxNy4yMzAyIDMuMDUzMzEgMTcuMjMwMiAzLjA1MzMxIDE3LjE3NjUgMi42NDU2MkMxNy4yMzQ1IDIuMTg1OTEgMTcuMzQwMyAyLjAwMDg0IDE3LjY1OTggMS42NjU0NEMxNy41ODU5IDEuNjE2NzggMTcuNTEyMSAxLjU2ODExIDE3LjQzNiAxLjUxNzk4QzE3LjIzMDIgMS4yNDkwOCAxNy4yMzAyIDEuMjQ5MDggMTcuMjQ4MSAwLjc1NDY0N0MxNy40MjI2IDAuMDkwMTEyNCAxNy42MTMyIC0wLjAwOTY5MDQyIDE4LjMxMzEgMC4wMjYwMTQ1WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTM0LjAwMjkgOS45MjMyOEMzNC40MTQ2IDkuOTkyNjcgMzQuNDE0NiA5Ljk5MjY3IDM0LjY3NDEgMTAuMTY2MkMzNC44Njk4IDEwLjQ0NTcgMzQuOTU1OCAxMC42MjY4IDM0Ljk4NzQgMTAuOTY0MkMzNC44Njc2IDExLjMyMzEgMzQuNzU3MSAxMS40Nzk5IDM0LjQ0MTQgMTEuNzAxNUMzNC4wNTA2IDExLjgyMDUgMzMuODAyMSAxMS43NjMxIDMzLjQxMjIgMTEuNjU4MUMzMy4zMTE3IDExLjc5ODQgMzMuMjExMyAxMS45Mzg2IDMzLjEwNzkgMTIuMDgzMkMzMi45MTI2IDEyLjMxNDYgMzIuOTEyNiAxMi4zMTQ2IDMyLjY5NjEgMTIuNDkwOEMzMi4yMjE4IDEyLjQ3MzUgMzIuMjIxOCAxMi40NzM1IDMxLjgzNjkgMTIuMzUyMUMzMS43NjAxIDEyLjQ2MzcgMzEuNjgzMyAxMi41NzUzIDMxLjYwNDIgMTIuNjkwM0MzMS4yNjQxIDEzLjA0NiAzMS4yNjQxIDEzLjA0NiAzMC44MzQ1IDEzLjE5MzVDMzAuNDA0OSAxMy4xODQ4IDMwLjQwNDkgMTMuMTg0OCAzMC4wNjQ4IDEyLjk2NzlDMjkuNzY0MyAxMi41MzEyIDI5LjczMjQgMTIuMzEyIDI5LjgzMjEgMTEuNzk2OUMzMC4xNDUzIDExLjQ1ODYgMzAuMTQ1MyAxMS40NTg2IDMwLjU0ODEgMTEuMjQxOEMzMC45NTA4IDExLjI3NjUgMzAuOTUwOCAxMS4yNzY1IDMxLjI2NDEgMTEuMzgwNUMzMS4zMzc5IDExLjI2NiAzMS40MTE4IDExLjE1MTUgMzEuNDg3OSAxMS4wMzM2QzMxLjYwMyAxMC45MTkxIDMxLjcxODIgMTAuODA0NiAzMS44MzY5IDEwLjY4NjZDMzIuMTcxMSAxMC42ODY2IDMyLjUwNTIgMTAuNjg2NiAzMi44MzkzIDEwLjY4NjZDMzMuNTc2OCA5Ljk4OTM1IDMzLjU3NjggOS45ODkzNSAzNC4wMDI5IDkuOTIzMjhaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMjcuNjkzIDIuNjQ1NjRDMjguMzQwOSAyLjg0NjA0IDI4LjM0MDkgMi44NDYwNCAyOC41NDMyIDMuMTkyMTFDMjguNTUyMiAzLjY2OTE5IDI4LjU1MjIgMy42NjkxOSAyOC40IDQuMTYzNjJDMjguMTE0NSA0LjM0OTk3IDI3LjgyODIgNC41MzUwOSAyNy41NDA4IDQuNzE4NzdDMjcuNTA1IDUuMTQwOTQgMjcuNTA1IDUuMTQwOTQgMjcuNTQwOCA1LjU1MTQ5QzI3LjMxNzkgNS44NjQ3OSAyNy4xNzE5IDUuOTQ5MzcgMjYuNzk3OSA2LjA2MzI3QzI2LjcxMjMgNi4wNzc1OCAyNi42MjY2IDYuMDkxODkgMjYuNTM4NCA2LjEwNjY0QzI2LjU0NzIgNi4yMzU0NSAyNi41NTYxIDYuMzY0MjYgMjYuNTY1MiA2LjQ5Njk4QzI2LjUzODQgNi45MzkzNiAyNi41Mzg0IDYuOTM5MzYgMjYuMzU5NCA3LjE5MDkxQzI2LjA2NCA3LjM4NTE1IDI1Ljg5NDcgNy40NzQwNiAyNS41MzYgNy40OTQ1MUMyNS4xNTExIDcuMzQ3MDUgMjUuMTUxMSA3LjM0NzA1IDI0LjgxOTkgNy4wNzgxNUMyNC42Njc4IDYuNjcwNDYgMjQuNjY3OCA2LjY3MDQ2IDI0LjY3NjcgNi4yNDU0M0MyNC45NDYyIDUuODg3NTYgMjUuMTM3OSA1LjcyNjM0IDI1LjU3MTggNS41ODYxOUMyNS42OTU4IDUuNTY5MDEgMjUuNjk1OCA1LjU2OTAxIDI1LjgyMjQgNS41NTE0OUMyNS43NzUxIDUuNTA1NjkgMjUuNzI3OSA1LjQ1OTg5IDI1LjY3OTIgNS40MTI3QzI1LjYyNTUgNS4wOTE3NiAyNS42MjU1IDUuMDkxNzYgMjUuNjc5MiA0LjcxODc3QzI1Ljk5NzYgNC40MjY0IDI2LjI5IDQuMjE0NjEgMjYuNjgxNiA0LjAyNDgzQzI2LjY2OTggMy44OTg4OCAyNi42NTggMy43NzI5NCAyNi42NDU4IDMuNjQzMTdDMjYuNjgxNiAzLjE5MjExIDI2LjY4MTYgMy4xOTIxMSAyNi45MTQzIDIuODUzODJDMjcuMjU0NCAyLjYzNjk2IDI3LjI1NDQgMi42MzY5NiAyNy42OTMgMi42NDU2NFoiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik00LjYzNzE4IDE4Ljg4MzdDNS4yODUxMSAxOS4wODQxIDUuMjg1MTEgMTkuMDg0MSA1LjQ4NzQ1IDE5LjQzMDJDNS40Njk1NSAxOS45MjQ2IDUuNDY5NTUgMTkuOTI0NiA1LjM0NDI1IDIwLjQwMTdDNC44NDk4NCAyMC43MjExIDQuNjM1NzYgMjAuNzI3MSA0LjA1NTQyIDIwLjY3OTNDMy45NjA5IDIwLjU4NzcgMy44NjYzOSAyMC40OTYxIDMuNzY5MDEgMjAuNDAxN0MzLjY5MjIxIDIwLjQ5MzMgMy42MTU0MiAyMC41ODQ5IDMuNTM2MyAyMC42NzkzQzMuMTk2MTkgMjAuOTU2OSAzLjE5NjE5IDIwLjk1NjkgMi43NTc2MyAyMS4wMDg5QzIuMzM2OTcgMjAuOTU2OSAyLjMzNjk3IDIwLjk1NjkgMS45MDczNiAyMC42NzkzQzEuODU3MTUgMjAuNzcwOSAxLjgwNjk0IDIwLjg2MjUgMS43NTUyMSAyMC45NTY5QzEuNDc3NzUgMjEuMjM0NCAxLjQ3Nzc1IDIxLjIzNDQgMC45NzY1MzUgMjEuMjk1MUMwLjQ3NTMyMiAyMS4yMzQ0IDAuNDc1MzIyIDIxLjIzNDQgMC4xOTc4NjUgMjEuMDc4M0MtMC4wMzMwMDE4IDIwLjY4MzQgLTAuMDI5MzExNCAyMC40MzA3IDAuMDQ1NzExMSAxOS45ODUzQzAuMzU4OTY5IDE5LjY0NzEgMC4zNTg5NjkgMTkuNjQ3MSAwLjc2MTczIDE5LjQzMDJDMS4yNTE5NiAxOS40NTIzIDEuNDE1MTkgMTkuNTA4NCAxLjc2NDE2IDE5Ljg0NjZDMS44NjQ1OCAxOS43MjkyIDEuOTY1IDE5LjYxMTggMi4wNjg0NiAxOS40OTA5QzIuNDgwMTcgMTkuMTUyNiAyLjQ4MDE3IDE5LjE1MjYgMi45MzY2NCAxOS4xN0MzLjMzOTQgMTkuMjkxNCAzLjMzOTQgMTkuMjkxNCAzLjYyNTggMTkuNDMwMkMzLjcwMjYgMTkuMzM1NyAzLjc3OTM5IDE5LjI0MTMgMy44NTg1MSAxOS4xNDM5QzQuMTk4NjIgMTguODc1IDQuMTk4NjIgMTguODc1IDQuNjM3MTggMTguODgzN1oiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0yLjQwODU3IDkuOTkyNjdDMi45MDk3OCAxMC4xMzE1IDIuOTA5NzggMTAuMTMxNSAzLjE4NzI0IDEwLjQ4NzFDMy4yMzc0NSAxMC41OTg3IDMuMjg3NjYgMTAuNzEwNCAzLjMzOTM5IDEwLjgyNTRDMy40NjkzNSAxMC43OTM5IDMuNTk5MzEgMTAuNzYyNCAzLjczMzIgMTAuNzNDNC4xOTg2MSAxMC42ODY2IDQuMTk4NjEgMTAuNjg2NiA0LjUyMDgyIDEwLjg2MDFDNC43NzE0MyAxMS4xMDMgNC43NzE0MyAxMS4xMDMgNS4wNTc4NCAxMS41MTkzQzUuMTA1MDkgMTEuNDczNSA1LjE1MjM1IDExLjQyNzcgNS4yMDEwNCAxMS4zODA1QzUuNjkzMyAxMS40MTUyIDUuNjkzMyAxMS40MTUyIDYuMjAzNDcgMTEuNTE5M0M2LjUzNDY3IDEyLjAwMDggNi41NTA3IDEyLjIwMjQgNi40ODk4NyAxMi43Njg0QzYuMzI4NzcgMTMuMDI4NiA2LjMyODc3IDEzLjAyODYgNi4wNjAyNiAxMy4xODQ4QzUuNjM5NiAxMy4yNDU1IDUuNjM5NiAxMy4yNDU1IDUuMjAxMDQgMTMuMTg0OEM0Ljg3MTI4IDEyLjkyNTYgNC42NzQzIDEyLjcxODkgNC40ODUwMiAxMi4zNTIxQzQuNDM3NzYgMTIuMzk3OSA0LjM5MDUxIDEyLjQ0MzcgNC4zNDE4MiAxMi40OTA4QzMuODU4NTEgMTIuNDczNSAzLjg1ODUxIDEyLjQ3MzUgMy4zMzkzOSAxMi4zNTIxQzMuMDYxOTQgMTEuOTk2NCAzLjA2MTk0IDExLjk5NjQgMi45MDk3OCAxMS42NTgxQzIuNjc5NCAxMS43MTM5IDIuNjc5NCAxMS43MTM5IDIuNDQ0MzcgMTEuNzcwOUMxLjkwNzM2IDExLjc5NjkgMS45MDczNiAxMS43OTY5IDEuNTQ5MzUgMTEuNTAyQzEuMzM0NTQgMTEuMTAzIDEuMzM0NTQgMTEuMTAzIDEuMzQzNDkgMTAuNzM4N0MxLjU4OTkzIDEwLjEzMzYgMS43MTE0NyA5Ljk5MjY3IDIuNDA4NTcgOS45OTI2N1oiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0yOC40ODA2IDI1LjY5M0MyOC44NjA2IDI1LjgyNTIgMjkuMDMyOCAyNS45MDczIDI5LjI1OTMgMjYuMjMwOEMyOS4yODYxIDI2LjYwMzggMjkuMjg2MSAyNi42MDM4IDI5LjI1OTMgMjYuOTI0N0MyOS40MTU4IDI2LjkxMzIgMjkuNTcyMyAyNi45MDE4IDI5LjczMzYgMjYuODlDMzAuMjYxNyAyNi45MjQ3IDMwLjI2MTcgMjYuOTI0NyAzMC41MzAyIDI3LjE2NzZDMzAuNjgxIDI3LjQ1OTkgMzAuNzc1NCAyNy43MTQxIDMwLjgzNDUgMjguMDM1QzMwLjk3MDQgMjguMDUyMiAzMS4xMDYyIDI4LjA2OTMgMzEuMjQ2MiAyOC4wODdDMzEuNjkzNyAyOC4xNzM4IDMxLjY5MzcgMjguMTczOCAzMS45ODAxIDI4LjQ1MTRDMzIuMDQ4IDI4Ljk1NTUgMzIuMDQ1OSAyOS4xOTQ0IDMxLjczODUgMjkuNjEzN0MzMS40MDczIDI5LjgzOTIgMzEuNDA3MyAyOS44MzkyIDMxLjA0OTMgMjkuOTE3M0MzMC42OTEzIDI5LjgzOTIgMzAuNjkxMyAyOS44MzkyIDMwLjM2MDEgMjkuNTI3QzMwLjExODUgMjkuMTQ1MyAzMC4xMTg1IDI5LjE0NTMgMzAuMTE4NSAyOC41OTAxQzMwLjAzODcgMjguNjI0NSAyOS45NTkgMjguNjU4OCAyOS44NzY4IDI4LjY5NDJDMjkuNTQ1NyAyOC43Mjg5IDI5LjU0NTcgMjguNzI4OSAyOS4xNTE5IDI4LjUwMzRDMjguODI5NyAyOC4xNzM4IDI4LjgyOTcgMjguMTczOCAyOC43ODQ5IDI3Ljc5MjFDMjguNzk5NyAyNy42ODkxIDI4LjgxNDQgMjcuNTg2IDI4LjgyOTcgMjcuNDc5OEMyOC42OTk3IDI3LjQ5NDIgMjguNTY5NyAyNy41MDg1IDI4LjQzNTggMjcuNTIzMkMyNy45NzA0IDI3LjQ3OTggMjcuOTcwNCAyNy40Nzk4IDI3LjYyMTQgMjcuMTc2M0MyNy4zOTc2IDI2Ljc4NTkgMjcuMzk3NiAyNi43ODU5IDI3LjM5NzYgMjYuNDIxNkMyNy42MjYxIDI1Ljg5NTYgMjcuODc4NCAyNS42NjQ1IDI4LjQ4MDYgMjUuNjkzWiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTguMzUxNTIgMjUuODE0NEM4LjcwMDU4IDI2LjExOCA4LjcwMDU4IDI2LjExOCA4LjkyNDMzIDI2LjUwODNDOC45MjQzMyAyNi45NTg4IDguODUyOTEgMjcuMTMwMiA4LjUzMDUyIDI3LjQ1MzhDOC4xNTUxMSAyNy42NDU4IDcuOTEwOTIgMjcuNjUyNCA3LjQ5MjMgMjcuNjE4NkM3LjUwMTE2IDI3LjcyNDUgNy41MTAwMiAyNy44MzA1IDcuNTE5MTUgMjcuOTM5NkM3LjQ5MjMgMjguMzEyNiA3LjQ5MjMgMjguMzEyNiA3LjMzMTE5IDI4LjU2NDFDNi45NTE2NSAyOC43OTcxIDYuNjQyNzUgMjguNzU3MyA2LjIwMzQ2IDI4LjcyODlDNi4xOTc1NiAyOC44NTc3IDYuMTkxNjUgMjguOTg2NiA2LjE4NTU2IDI5LjExOTNDNi4wNjAyNiAyOS41NjE3IDYuMDYwMjYgMjkuNTYxNyA1LjY2NjQ1IDI5Ljg0NzlDNS4yMDEwNCAyOS45NzggNS4yMDEwNCAyOS45NzggNC43OTgyOCAyOS44MDQ1QzQuNDg1MDIgMjkuNTYxNyA0LjQ4NTAyIDI5LjU2MTcgNC4zNDE4MSAyOS40MjI5QzQuMjc2NTYgMjguNjk1NiA0LjI3NjU2IDI4LjY5NTYgNC41MDI5MiAyOC4zMjk5QzQuODgzMTggMjguMTA4OCA1LjE5NjQ0IDI4LjE0NTcgNS42MzA2NSAyOC4xNzM4QzUuNjQyNDYgMjguMDQ1IDUuNjU0MjggMjcuOTE2MiA1LjY2NjQ1IDI3Ljc4MzRDNS43NzM4NSAyNy4zNDExIDUuNzczODUgMjcuMzQxMSA2LjAzMzQxIDI3LjA4MDhDNi4zNDY2NyAyNi45MjQ3IDYuMzQ2NjcgMjYuOTI0NyA2LjkxOTQ4IDI2LjkyNDdDNi45NjA4MyAyNi43NjczIDcuMDAyMTggMjYuNjA5OCA3LjA0NDc4IDI2LjQ0NzZDNy4wOTc5NSAyNi4yODQ1IDcuMTUxMTEgMjYuMTIxMyA3LjIwNTg5IDI1Ljk1MzJDNy42MTc1NiAyNS43NTM3IDcuODk1OTggMjUuNzYxNCA4LjM1MTUyIDI1LjgxNDRaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNOS4yMTA3NSAyLjc3NTc0QzkuNDk3MTUgMi45MjMyIDkuNDk3MTUgMi45MjMyIDkuNjQwMzYgMy4xOTIxQzkuNTk1NjEgMy43MDM4OCA5LjU5NTYxIDMuNzAzODggOS40OTcxNSA0LjE2MzYxQzkuNjA2NDQgNC4xNzUwNiA5LjcxNTcyIDQuMTg2NTEgOS44MjgzMSA0LjE5ODMxQzEwLjIxMzIgNC4zMDI0IDEwLjIxMzIgNC4zMDI0IDEwLjQ4MTcgNC41NDUyOEMxMC42ODU0IDQuOTQwMDkgMTAuNjMwMSA1LjEzNzM2IDEwLjQ5OTYgNS41NTE0OEMxMC42MzU0IDUuNTg4NyAxMC43NzEzIDUuNjI1OTEgMTAuOTExMyA1LjY2NDI1QzExLjM1ODggNS44MjkwNiAxMS4zNTg4IDUuODI5MDYgMTEuNjQ1MiA2LjI0NTQyQzExLjYzNjMgNi42NjE3OCAxMS42MzYzIDYuNjYxNzggMTEuNTAyIDcuMDc4MTRDMTEuMTc5OCA3LjM1NTcyIDExLjE3OTggNy4zNTU3MiAxMC43ODYgNy40OTQ1QzEwLjMzMTQgNy4zODE4IDEwLjExNTUgNy4yNjEwOSA5Ljc4MzU2IDYuOTM5MzVDOS43NjU2NiA2LjUwNTY0IDkuNzY1NjYgNi41MDU2NCA5Ljc4MzU2IDYuMTA2NjNDOS42NDQ3NCA2LjA0MDc5IDkuNTA1OTIgNS45NzQ5NiA5LjM2MjkgNS45MDcxMkM4LjkyNDM0IDUuNjkwMjcgOC45MjQzNCA1LjY5MDI3IDguNzgxMTQgNS41NTE0OEM4Ljc3NTI3IDUuMjI3NyA4Ljc3NTA2IDQuOTAzNzYgOC43ODExNCA0LjU3OTk3QzguNjY4OSA0LjU0Mjc2IDguNTU2NjYgNC41MDU1NSA4LjQ0MTAzIDQuNDY3MjFDOC4wNjUxMiA0LjMwMjQgOC4wNjUxMiA0LjMwMjQgNy43Nzg3MSAzLjg4NjA0QzcuNzI4NjcgMy40OTgwOSA3LjcyNTM5IDMuMjgwMjUgNy45MzA4NiAyLjk0MDU1QzguMzY0OTUgMi42ODI3IDguNzE0NDMgMi43MjQyIDkuMjEwNzUgMi43NzU3NFoiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0zNC40MTQ2IDkuOTkyNjhDMzQuNzE4MyAxMC4xOTU3IDM0LjgxODggMTAuMzUwNCAzNC45NjA2IDEwLjY3NzlDMzQuOTk1NiAxMS4wNTE3IDM0LjkyMjIgMTEuMjEzMSAzNC43MDEgMTEuNTE5M0MzNC4zMzcxIDExLjc3NDggMzQuMTg0MiAxMS44MDQzIDMzLjczNDQgMTEuNzQ0OUMzMy42MjggMTEuNzE2MiAzMy41MjE3IDExLjY4NzYgMzMuNDEyMiAxMS42NTgxQzMzLjMyMzYgMTEuNzcyNiAzMy4yMzUgMTEuODg3MSAzMy4xNDM3IDEyLjAwNTFDMzIuOTkzIDEyLjE3NjggMzIuOTkzIDEyLjE3NjggMzIuODM5NCAxMi4zNTIxQzMyLjc0NDggMTIuMzUyMSAzMi42NTAzIDEyLjM1MjEgMzIuNTUyOSAxMi4zNTIxQzMyLjU1MjkgMTEuODk0MSAzMi41NTI5IDExLjQzNjEgMzIuNTUyOSAxMC45NjQyQzMyLjY5NDcgMTAuOTE4NCAzMi44MzY1IDEwLjg3MjYgMzIuOTgyNiAxMC44MjU0QzMzLjA4MzEgMTAuNTk2MSAzMy4xNzg3IDEwLjM2NDcgMzMuMjY5IDEwLjEzMTVDMzMuNjY5OCA5LjkzNzI2IDMzLjk3MTQgOS45NTc2MiAzNC40MTQ2IDkuOTkyNjhaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNOS4yMTA3NSAyLjc3NTc0QzkuNDk3MTUgMi45MjMyIDkuNDk3MTUgMi45MjMyIDkuNjQwMzYgMy4xOTIxQzkuNTk1NjEgMy43MDM4OCA5LjU5NTYxIDMuNzAzODggOS40OTcxNSA0LjE2MzYxQzkuNjM4OTMgNC4yMDk0MSA5Ljc4MDcgNC4yNTUyMSA5LjkyNjc2IDQuMzAyNEM5LjczNzc0IDQuMzAyNCA5LjU0ODcxIDQuMzAyNCA5LjM1Mzk1IDQuMzAyNEM5LjM1Mzk1IDQuODA2MiA5LjM1Mzk1IDUuMzA5OTkgOS4zNTM5NSA1LjgyOTA2QzkuMTY0OTIgNS43Mzc0NiA4Ljk3NTg5IDUuNjQ1ODYgOC43ODExNCA1LjU1MTQ4QzguNzgxMTQgNS4yMzA4OCA4Ljc4MTE0IDQuOTEwMjkgOC43ODExNCA0LjU3OTk3QzguNjY4OSA0LjU0Mjc2IDguNTU2NjYgNC41MDU1NSA4LjQ0MTAzIDQuNDY3MjFDOC4wNjUxMiA0LjMwMjQgOC4wNjUxMiA0LjMwMjQgNy43Nzg3MSAzLjg4NjA0QzcuNzI4NjcgMy40OTgwOSA3LjcyNTM5IDMuMjgwMjUgNy45MzA4NiAyLjk0MDU1QzguMzY0OTUgMi42ODI3IDguNzE0NDMgMi43MjQyIDkuMjEwNzUgMi43NzU3NFoiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0yNi4yNTIgNC4zMDI0QzI2LjI1MiA0LjgwNjIgMjYuMjUyIDUuMzEgMjYuMjUyIDUuODI5MDZDMjYuMzQ2NSA1Ljg3NDg2IDI2LjQ0MSA1LjkyMDY2IDI2LjUzODQgNS45Njc4NUMyNi41OTA3IDYuODYzMzIgMjYuNTkwNyA2Ljg2MzMyIDI2LjM1OTQgNy4xOTk1OEMyNi4wNjM1IDcuMzgzOTUgMjUuODg5OSA3LjQ3NDMzIDI1LjUzNiA3LjQ5NDVDMjUuMTUxMSA3LjM0NzA0IDI1LjE1MTEgNy4zNDcwNCAyNC44MTk5IDcuMDc4MTRDMjQuNjY3OCA2LjY3MDQ2IDI0LjY2NzggNi42NzA0NiAyNC42NzY3IDYuMjQ1NDJDMjQuOTQ2MiA1Ljg4NzU2IDI1LjEzNzkgNS43MjYzMyAyNS41NzE4IDUuNTg2MThDMjUuNjk1OCA1LjU2OTAxIDI1LjY5NTggNS41NjkwMSAyNS44MjI0IDUuNTUxNDhDMjUuNzc1MSA1LjUwNTY4IDI1LjcyNzkgNS40NTk4OSAyNS42NzkyIDUuNDEyN0MyNS42MzQ0IDUuMDAwNzggMjUuNjE0NCA0Ljc5Nzk0IDI1Ljg4NSA0LjQ2NzIxQzI2LjEwODggNC4zMDI0IDI2LjEwODggNC4zMDI0IDI2LjI1MiA0LjMwMjRaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMi40MDg1NyA5Ljk5MjY3QzIuOTA5NzggMTAuMTMxNSAyLjkwOTc4IDEwLjEzMTUgMy4xNjkzNCAxMC40Nzg0QzMuMjI1NDYgMTAuNTkyOSAzLjI4MTU3IDEwLjcwNzQgMy4zMzkzOSAxMC44MjU0QzMuNDMzOTEgMTAuODcxMiAzLjUyODQyIDEwLjkxNyAzLjYyNTggMTAuOTY0MkMzLjUzMTI5IDExLjM3NjQgMy40MzY3NyAxMS43ODg2IDMuMzM5MzkgMTIuMjEzM0MzLjE5NzYyIDEyLjAzMDEgMy4wNTU4NSAxMS44NDY5IDIuOTA5NzggMTEuNjU4MUMyLjY3OTQgMTEuNzEzOSAyLjY3OTQgMTEuNzEzOSAyLjQ0NDM3IDExLjc3MDlDMS45MDczNiAxMS43OTY5IDEuOTA3MzYgMTEuNzk2OSAxLjU0OTM1IDExLjUwMkMxLjMzNDU0IDExLjEwMyAxLjMzNDU0IDExLjEwMyAxLjM0MzQ5IDEwLjczODdDMS41ODk5MyAxMC4xMzM2IDEuNzExNDcgOS45OTI2NyAyLjQwODU3IDkuOTkyNjdaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMTcuOTQ2MiAwQzE3Ljk0NjIgMS43NDAzOSAxNy45NDYyIDMuNDgwNzggMTcuOTQ2MiA1LjI3MzkxQzE3Ljc1NzEgNS4xODIzMSAxNy41NjgxIDUuMDkwNzEgMTcuMzczNCA0Ljk5NjM0QzE3LjIzOTEgNC41Mjc5MyAxNy4yMzkxIDQuNTI3OTMgMTcuMjMwMiA0LjAyNDgzQzE3LjQzNiAzLjY4NjUzIDE3LjQzNiAzLjY4NjUzIDE3LjY1OTggMy40Njk2OEMxNy41ODg5IDMuNDE4MTUgMTcuNTE4IDMuMzY2NjMgMTcuNDQ1IDMuMzEzNTRDMTcuMjMwMiAzLjA1MzMyIDE3LjIzMDIgMy4wNTMzMiAxNy4xNzY1IDIuNjQ1NjNDMTcuMjM0NSAyLjE4NTkyIDE3LjM0MDMgMi4wMDA4NSAxNy42NTk4IDEuNjY1NDVDMTcuNTg1OSAxLjYxNjc4IDE3LjUxMjEgMS41NjgxMiAxNy40MzYgMS41MTc5OEMxNy4yMzAyIDEuMjQ5MDggMTcuMjMwMiAxLjI0OTA4IDE3LjI0ODEgMC43NTQ2NTVDMTcuNDQ2MyAwIDE3LjQ0NjMgMCAxNy45NDYyIDBaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNNS42MzA2NSAyNy42MTg2QzUuOTU1MjMgMjguMTgwNCA2LjI4NTEzIDI4LjgxOTkgNi4xMjI5MSAyOS40NjYyQzUuODM3ODkgMjkuNzkwNSA1LjYzMTUgMjkuODkwNyA1LjIwMTA0IDI5Ljk3OEM0Ljg2NTcgMjkuODIyOSA0LjYwNDg1IDI5LjY3NzggNC4zNDE4MSAyOS40MjI5QzQuMjc2NTYgMjguNjk1NiA0LjI3NjU2IDI4LjY5NTYgNC41MDI5MiAyOC4zMjk5QzQuODgzMTggMjguMTA4OCA1LjE5NjQ0IDI4LjE0NTcgNS42MzA2NSAyOC4xNzM4QzUuNjMwNjUgMjcuOTkwNiA1LjYzMDY1IDI3LjgwNzQgNS42MzA2NSAyNy42MTg2WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTMwLjg3OTMgMjguMDAwM0MzMS40MDczIDI4LjAzNSAzMS40MDczIDI4LjAzNSAzMS43NTY0IDI4LjE5MTFDMzEuOTgwMSAyOC40NTE0IDMxLjk4MDEgMjguNDUxNCAzMi4wNTE3IDI4Ljg1OUMzMS45ODAxIDI5LjI4NDEgMzEuOTgwMSAyOS4yODQxIDMxLjczODUgMjkuNjEzN0MzMS40MDczIDI5LjgzOTIgMzEuNDA3MyAyOS44MzkyIDMxLjA0MDQgMjkuODk5OUMzMC42MjM2IDI5LjgyNzUgMzAuNTE3OCAyOS43NDM2IDMwLjI2MTcgMjkuNDIyOUMzMC4yMTQ3IDI5LjExMzkgMzAuMjE0NyAyOS4xMTM5IDMwLjIyNTkgMjguNzgxQzMwLjIyODEgMjguNjcwNCAzMC4yMzAzIDI4LjU1OTkgMzAuMjMyNiAyOC40NDU5QzMwLjI4MjUgMjcuOTc5IDMwLjM3NjkgMjguMDM3IDMwLjg3OTMgMjguMDAwM1oiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0yOC40ODk1IDI1LjcwMTZDMjguODI5NyAyNS44MTQ0IDI4LjgyOTcgMjUuODE0NCAyOS4xMTYxIDI2LjA5MkMyOS4wMjE1IDI2LjA5MiAyOC45MjcgMjYuMDkyIDI4LjgyOTcgMjYuMDkyQzI4Ljg3NjkgMjYuNzc5IDI4LjkyNDIgMjcuNDY2IDI4Ljk3MjkgMjguMTczOEMyOC45MjU2IDI4LjE3MzggMjguODc4MyAyOC4xNzM4IDI4LjgyOTcgMjguMTczOEMyOC44Mjk3IDI3Ljk0NDggMjguODI5NyAyNy43MTU4IDI4LjgyOTcgMjcuNDc5OEMyOC42OTk3IDI3LjQ5NDIgMjguNTY5NyAyNy41MDg1IDI4LjQzNTggMjcuNTIzMkMyNy45NzA0IDI3LjQ3OTggMjcuOTcwNCAyNy40Nzk4IDI3LjYyMTQgMjcuMTc2M0MyNy4zOTc2IDI2Ljc4NTkgMjcuMzk3NiAyNi43ODU5IDI3LjM5NzYgMjYuNDIxNkMyNy42Mjg1IDI1Ljg5MDEgMjcuODgxNSAyNS42NTk1IDI4LjQ4OTUgMjUuNzAxNloiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0xOC4yMzI2IDEuODA0MjNDMTguNTg3IDEuOTQxNjMgMTguNTg3IDEuOTQxNjMgMTguOTQ4NiAyLjA4MTgxQzE5LjE0MjUgMi45NzAwNSAxOS4xNDI1IDIuOTcwMDUgMTguODg1OSAzLjM5MTYxQzE4LjgxMjEgMy40NjMxNyAxOC43MzgzIDMuNTM0NzQgMTguNjYyMiAzLjYwODQ3QzE4LjczNiAzLjY1NzEzIDE4LjgwOTkgMy43MDU3OSAxOC44ODU5IDMuNzU1OTNDMTkuMDkxOCA0LjAyNDgzIDE5LjA5MTggNC4wMjQ4MyAxOS4wNDcxIDQuNTM2NkMxOS4wMTQ2IDQuNjg4MzIgMTguOTgyMSA0Ljg0MDAzIDE4Ljk0ODYgNC45OTYzNEMxOC43NTk2IDUuMDQyMTQgMTguNTcwNSA1LjA4Nzk0IDE4LjM3NTggNS4xMzUxMkMxOC4yNDY4IDQuMDIxNTkgMTguMjE2IDIuOTI0MjkgMTguMjMyNiAxLjgwNDIzWiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTcuNjM1NTEgMjUuODE0NEM3Ljk1NzcxIDI1Ljc3MSA3Ljk1NzcxIDI1Ljc3MSA4LjM1MTUyIDI1LjgxNDRDOC42OTE2MyAyNi4xMTggOC42OTE2MyAyNi4xMTggOC45MjQzNCAyNi41MDgzQzguOTAxNTQgMjYuOTgzNSA4Ljg0MzcgMjcuMTQxNiA4LjQ5NDczIDI3LjQ3OThDNy45NzU2MSAyNy40OTcyIDcuOTc1NjEgMjcuNDk3MiA3LjQ5MjMgMjcuNDc5OEM3LjQ4ODQ0IDI3LjI1NDMgNy40ODU2NiAyNy4wMjg4IDcuNDgzMzUgMjYuODAzM0M3LjQ4MTY5IDI2LjY3NzcgNy40ODAwMyAyNi41NTIxIDcuNDc4MzIgMjYuNDIyN0M3LjQ5MjMgMjYuMDkyIDcuNDkyMyAyNi4wOTIgNy42MzU1MSAyNS44MTQ0WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTEwLjM1NjQgNS42OTAyN0MxMS4yMTU2IDUuNjkwMjcgMTEuMjE1NiA1LjY5MDI3IDExLjQ5MzEgNS45MTU4QzExLjcwMzEgNi4zNzA4NiAxMS42NjY4IDYuNjA5MDUgMTEuNTAyIDcuMDc4MTRDMTEuMTYxOSA3LjM0NzA0IDExLjE2MTkgNy4zNDcwNCAxMC43ODYgNy40OTQ1MUMxMC42NDQyIDcuNDQ4NzEgMTAuNTAyNCA3LjQwMjkxIDEwLjM1NjQgNy4zNTU3MkMxMC4zNTY0IDYuODA2MTIgMTAuMzU2NCA2LjI1NjUyIDEwLjM1NjQgNS42OTAyN1oiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0yNy4zOTc2IDIuNzc1NzRDMjguMTEzNiAyLjc3NTc0IDI4LjExMzYgMi43NzU3NCAyOC4zODIxIDIuOTIzMkMyOC42NDA3IDMuMzU0NzggMjguNTE0NSAzLjY5NDE1IDI4LjQgNC4xNjM2MUMyOC4zMDU1IDQuMjU1MjEgMjguMjExIDQuMzQ2ODEgMjguMTEzNiA0LjQ0MTE5QzI3Ljg3NzMgNC40NDExOSAyNy42NDExIDQuNDQxMTkgMjcuMzk3NiA0LjQ0MTE5QzI3LjM5NzYgMy44OTE1OSAyNy4zOTc2IDMuMzQxOTkgMjcuMzk3NiAyLjc3NTc0WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTYuOTE5NDkgMjcuMDYzNUM2Ljg3MjI0IDI3LjU2NzMgNi44MjQ5OCAyOC4wNzExIDYuNzc2MjkgMjguNTkwMUM2Ljg3MDggMjguNjM1OSA2Ljk2NTMyIDI4LjY4MTcgNy4wNjI3IDI4LjcyODlDNi42NTk5NCAyOC43NjM2IDYuNjU5OTQgMjguNzYzNiA2LjIwMzQ3IDI4LjcyODlDNS44MzMyNiAyOC40MTggNS43ODA0NyAyOC4yMTg2IDUuNzExMjEgMjcuNzQ4N0M1Ljc3Mzg2IDI3LjM0MTEgNS43NzM4NiAyNy4zNDExIDYuMDI0NDcgMjcuMDcyMkM2LjM0NjY4IDI2LjkyNDcgNi4zNDY2OCAyNi45MjQ3IDYuOTE5NDkgMjcuMDYzNVoiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0yNy41NzY2IDIuNjcxNjVDMjcuNjU5MyAyLjcwNiAyNy43NDIgMi43NDAzNSAyNy44MjcyIDIuNzc1NzRDMjcuNzEyIDIuODIxNTQgMjcuNTk2OSAyLjg2NzM0IDI3LjQ3ODIgMi45MTQ1M0MyNy4wOTM0IDMuMTQ4OTcgMjcuMDkzNCAzLjE0ODk3IDI3LjAzMTggMy40NjY5N0MyNi45OTg0IDMuNzQ0MzIgMjYuOTgyMiA0LjAyMzUgMjYuOTY4IDQuMzAyNEMyNi44NzM1IDQuMzAyNCAyNi43NzkgNC4zMDI0IDI2LjY4MTYgNC4zMDI0QzI2LjY4MTYgNC44MDYyIDI2LjY4MTYgNS4zMSAyNi42ODE2IDUuODI5MDZDMjYuODIzNCA1Ljg3NDg2IDI2Ljk2NTEgNS45MjA2NiAyNy4xMTEyIDUuOTY3ODVDMjYuODI3NyA1LjkyMjA1IDI2LjU0NDEgNS44NzYyNSAyNi4yNTIgNS44MjkwNkMyNi4yNDA0IDUuNTgwNSAyNi4yMzIxIDUuMzMxOCAyNi4yMjUxIDUuMDgzMDhDMjYuMjIwMiA0Ljk0NDYxIDI2LjIxNTIgNC44MDYxMyAyNi4yMSA0LjY2MzQ3QzI2LjIyMzkgNC41NDQzMSAyNi4yMzc3IDQuNDI1MTYgMjYuMjUyIDQuMzAyNEMyNi4zOTM4IDQuMjEwOCAyNi41MzU1IDQuMTE5MiAyNi42ODE2IDQuMDI0ODNDMjYuNjc4NiAzLjg5MzE1IDI2LjY3NTcgMy43NjE0OCAyNi42NzI3IDMuNjI1ODJDMjYuNjgxNiAzLjE5MjExIDI2LjY4MTYgMy4xOTIxMSAyNi45MzIyIDIuODUzODFDMjcuMjU0NCAyLjYzNjk2IDI3LjI1NDQgMi42MzY5NiAyNy41NzY2IDIuNjcxNjVaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMzEuMTIwOSAyOC4xNzM4QzMxLjgzNjkgMjguMzEyNiAzMS44MzY5IDI4LjMxMjYgMzEuOTgwMSAyOC40NTE0QzMyLjAxNzggMjkuMDEwOSAzMi4wMjIyIDI5LjIyMjkgMzEuNjkzNyAyOS43MDA0QzMxLjUwNDcgMjkuNzAwNCAzMS4zMTU3IDI5LjcwMDQgMzEuMTIwOSAyOS43MDA0QzMxLjEyMDkgMjkuMTk2NiAzMS4xMjA5IDI4LjY5MjggMzEuMTIwOSAyOC4xNzM4WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTguNjM3OTMgMi43NzU3NEM4LjYzNzkzIDMuMzI1MzQgOC42Mzc5MyAzLjg3NDk0IDguNjM3OTMgNC40NDExOUM4LjA2NTEyIDQuMzAyNCA4LjA2NTEyIDQuMzAyNCA3Ljc3ODcxIDMuODg2MDRDNy43MjYwNCAzLjQ3NzY2IDcuNzE0NjIgMy4yNzc4OCA3Ljk2NjY2IDIuOTQwNTVDOC4yMDgzMiAyLjc3NTc0IDguMjA4MzIgMi43NzU3NCA4LjYzNzkzIDIuNzc1NzRaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMjUuNTM2IDUuNjkwMjdDMjUuNTM2IDYuMjM5ODcgMjUuNTM2IDYuNzg5NDcgMjUuNTM2IDcuMzU1NzJDMjQuOTYzMiA3LjIxNjkzIDI0Ljk2MzIgNy4yMTY5MyAyNC42NzY4IDYuODAwNTdDMjQuNzAzNiA2LjM3NTUzIDI0LjcwMzYgNi4zNzU1MyAyNC44MiA1Ljk2Nzg1QzI1LjI0OTYgNS42OTAyNyAyNS4yNDk2IDUuNjkwMjcgMjUuNTM2IDUuNjkwMjdaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMTAuMDcgNC40NDExOUMxMC4yMTE3IDQuNDg2OTkgMTAuMzUzNSA0LjUzMjc5IDEwLjQ5OTYgNC41Nzk5N0MxMC42NjA3IDUuMjM5MjEgMTAuNjYwNyA1LjIzOTIxIDEwLjQ5OTYgNS41NTE0OEMxMC40NjY3IDUuODU3NDIgMTAuNDQwOCA2LjE2NDA4IDEwLjQxOSA2LjQ3MDk1QzEwLjQwNyA2LjYzNTkgMTAuMzk1IDYuODAwODUgMTAuMzgyNyA2Ljk3MDhDMTAuMzc0IDcuMDk3ODIgMTAuMzY1MyA3LjIyNDg0IDEwLjM1NjQgNy4zNTU3MkMxMC4yMTQ2IDcuMjY0MTIgMTAuMDcyOCA3LjE3MjUyIDkuOTI2NzYgNy4wNzgxNEM5Ljg5MTEzIDYuODA0NTcgOS44OTExMyA2LjgwNDU3IDkuOTE2MTMgNi40NzQyQzkuOTIzOTggNi4zNTYxMiA5LjkzMTgyIDYuMjM4MDUgOS45Mzk5MSA2LjExNjM5QzkuOTUwMzQgNS45OTI5NSA5Ljk2MDc3IDUuODY5NSA5Ljk3MTUxIDUuNzQyMzJDOS45ODAyOCA1LjYxNzggOS45ODkwNSA1LjQ5MzI4IDkuOTk4MDggNS4zNjQ5OUMxMC4wMjAxIDUuMDU2ODcgMTAuMDQ0MSA0Ljc0OTAyIDEwLjA3IDQuNDQxMTlaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMTguMzc1OCAwLjEzODc4NkMxOC41NjQ4IDAuMTg0NTg2IDE4Ljc1MzkgMC4yMzAzODYgMTguOTQ4NiAwLjI3NzU3M0MxOS4xMjc2IDEuMTk3MDQgMTkuMTI3NiAxLjE5NzA0IDE4LjgwNTQgMS42NjU0NEMxOC42NjM2IDEuNjY1NDQgMTguNTIxOSAxLjY2NTQ0IDE4LjM3NTggMS42NjU0NEMxOC4zNzU4IDEuMTYxNjUgMTguMzc1OCAwLjY1Nzg1IDE4LjM3NTggMC4xMzg3ODZaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMTAuMzU2NCA1LjY5MDI3QzEwLjQ5ODEgNS42OTAyNyAxMC42Mzk5IDUuNjkwMjcgMTAuNzg2IDUuNjkwMjdDMTAuNzg2IDYuMjg1NjcgMTAuNzg2IDYuODgxMDcgMTAuNzg2IDcuNDk0NTFDMTAuNjQ0MiA3LjQ0ODcxIDEwLjUwMjQgNy40MDI5MSAxMC4zNTY0IDcuMzU1NzJDMTAuMzU2NCA2LjgwNjEyIDEwLjM1NjQgNi4yNTY1MiAxMC4zNTY0IDUuNjkwMjdaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMjUuNTM2IDUuNjkwMjdDMjUuNjc3OCA1LjY5MDI3IDI1LjgxOTUgNS42OTAyNyAyNS45NjU2IDUuNjkwMjdDMjUuOTY1NiA2LjIzOTg3IDI1Ljk2NTYgNi43ODk0NyAyNS45NjU2IDcuMzU1NzJDMjUuODIzOCA3LjQwMTUyIDI1LjY4MiA3LjQ0NzMyIDI1LjUzNiA3LjQ5NDUxQzI1LjUzNiA2Ljg5OTExIDI1LjUzNiA2LjMwMzcxIDI1LjUzNiA1LjY5MDI3WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTE4LjUxOSAxLjk0MzAyQzE4LjY2MDggMS45ODg4MiAxOC44MDI1IDIuMDM0NjIgMTguOTQ4NiAyLjA4MTgxQzE5LjEwOTcgMy4wMTg2MiAxOS4xMDk3IDMuMDE4NjIgMTguOTQ4NiAzLjMzMDg5QzE4LjgwNjggMy4zMzA4OSAxOC42NjUxIDMuMzMwODkgMTguNTE5IDMuMzMwODlDMTguNTE5IDIuODcyODkgMTguNTE5IDIuNDE0OSAxOC41MTkgMS45NDMwMloiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0xOC41MTkgMy43NDcyNUMxOC44MDI1IDMuODg0NjUgMTguODAyNSAzLjg4NDY1IDE5LjA5MTggNC4wMjQ4M0MxOS4wNDQ2IDQuMzQ1NDIgMTguOTk3MyA0LjY2NjAyIDE4Ljk0ODYgNC45OTYzNEMxOC44MDY4IDUuMDQyMTQgMTguNjY1MSA1LjA4Nzk0IDE4LjUxOSA1LjEzNTEyQzE4LjUxOSA0LjY3NzEzIDE4LjUxOSA0LjIxOTEzIDE4LjUxOSAzLjc0NzI1WiIgZmlsbD0iIzc5QjUyQSIvPg0KPHBhdGggZD0iTTI3Ljk3MDQgMi45MTQ1M0MyOC4yNTQgMy4wNTE5MyAyOC4yNTQgMy4wNTE5MyAyOC41NDMyIDMuMTkyMUMyOC40OTYgMy41MTI3IDI4LjQ0ODcgMy44MzMzIDI4LjQgNC4xNjM2MUMyOC4yNTgzIDQuMjA5NDEgMjguMTE2NSA0LjI1NTIxIDI3Ljk3MDQgNC4zMDI0QzI3Ljk3MDQgMy44NDQ0IDI3Ljk3MDQgMy4zODY0MSAyNy45NzA0IDIuOTE0NTNaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMjcuODI3MiAyNS44MTQ0QzI3LjkyMTcgMjUuODYwMiAyOC4wMTYzIDI1LjkwNiAyOC4xMTM2IDI1Ljk1MzJDMjguMDY2NCAyNi4zNjU0IDI4LjAxOTEgMjYuNzc3NiAyNy45NzA0IDI3LjIwMjNDMjcuODI4NyAyNy4xNTY1IDI3LjY4NjkgMjcuMTEwNyAyNy41NDA4IDI3LjA2MzVDMjcuNDQyNCAyNi43NTEyIDI3LjQ0MjQgMjYuNzUxMiAyNy4zOTc2IDI2LjM2OTZDMjcuNjAzNSAyNi4wNDg2IDI3LjYwMzUgMjYuMDQ4NiAyNy44MjcyIDI1LjgxNDRaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMTcuNTE2NiAwLjEzODc4NkMxNy42MTExIDAuMTg0NTg2IDE3LjcwNTYgMC4yMzAzODYgMTcuODAzIDAuMjc3NTczQzE3Ljc1NTcgMC42ODk3NzEgMTcuNzA4NSAxLjEwMTk3IDE3LjY1OTggMS41MjY2NkMxNy41NjUyIDEuNTI2NjYgMTcuNDcwNyAxLjUyNjY2IDE3LjM3MzQgMS41MjY2NkMxNy4xOTQ0IDAuNjA3MTkzIDE3LjE5NDQgMC42MDcxOTMgMTcuNTE2NiAwLjEzODc4NloiIGZpbGw9IiM3OUI1MkEiLz4NCjxwYXRoIGQ9Ik0xNy41MTY2IDMuNzQ3MjVDMTcuNTYzOCAzLjc0NzI1IDE3LjYxMTEgMy43NDcyNSAxNy42NTk4IDMuNzQ3MjVDMTcuNjU5OCA0LjIwNTI1IDE3LjY1OTggNC42NjMyNSAxNy42NTk4IDUuMTM1MTJDMTcuMjMwMiA0LjcxODc2IDE3LjIzMDIgNC43MTg3NiAxNy4xODU0IDQuMzYzMTJDMTcuMjMwMiA0LjAyNDgzIDE3LjIzMDIgNC4wMjQ4MyAxNy41MTY2IDMuNzQ3MjVaIiBmaWxsPSIjNzlCNTJBIi8+DQo8cGF0aCBkPSJNMTguODA1NCAwLjQxNjM2MUMxOC44OTk5IDAuNDYyMTYxIDE4Ljk5NDQgMC41MDc5NiAxOS4wOTE4IDAuNTU1MTQ4QzE5LjA0NDUgMC44NzU3NDYgMTguOTk3MyAxLjE5NjM0IDE4Ljk0ODYgMS41MjY2NkMxOC44NTQxIDEuNTI2NjYgMTguNzU5NiAxLjUyNjY2IDE4LjY2MjIgMS41MjY2NkMxOC42NTYxIDEuMjAyODcgMTguNjU2MyAwLjg3ODkzNSAxOC42NjIyIDAuNTU1MTQ4QzE4LjcwOTQgMC41MDkzNDggMTguNzU2NyAwLjQ2MzU0OCAxOC44MDU0IDAuNDE2MzYxWiIgZmlsbD0iIzc5QjUyQSIvPg0KPC9zdmc+DQo="
    const interpretLabel = t('survey.result.interpretationLabel','Interpretation');
    
    // Get recommendations
    const rec = recommendations;
    const recTitle = templateString(rec.title, { score_overall: String(scores.percent) });
    const recHow = templateString(rec.how, { score_overall: String(scores.percent) });
    const logo = `data:image/svg+xml;base64,${logobase64}`;
    const recWhy = templateString(rec.why, { score_overall: String(scores.percent) });
    const recHeader = currentLanguage === 'pl' ? 'Rekomendacje' : 'Recommendations';

    // Calculate color based on score percentage
    const getScoreColor = (score, max) => {
        const percentage = (score / max) * 100;
        if (percentage >= 80) return '#22c55e'; // Green
        if (percentage >= 60) return '#eab308'; // Yellow
        return '#ef4444'; // Red
    };

    // Create radar chart data
    const radarChartData = {
        e: { score: scores.e, max: 25, color: getScoreColor(scores.e, 25) },
        s: { score: scores.s, max: 25, color: getScoreColor(scores.s, 25) },
        g: { score: scores.g, max: 20, color: getScoreColor(scores.g, 20) },
        sup: { score: scores.sup, max: 15, color: getScoreColor(scores.sup, 15) }
    };

    // Function to create radar chart SVG
    function createRadarChart(scores) {
        const centerX = 250;
        const centerY = 250;
        const radius = 120;
        
        // Calculate angles for each axis (E, S, G, Supply)
        const angles = {
            e: -Math.PI / 2, // Top
            s: 0, // Right
            g: Math.PI / 2, // Bottom
            sup: Math.PI // Left
        };
        
        // Calculate points for the radar polygon
        const points = [];
        Object.keys(angles).forEach(key => {
            const angle = angles[key];
            const score = scores[key];
            const max = radarChartData[key].max;
            const ratio = score / max;
            const x = centerX + radius * ratio * Math.cos(angle);
            const y = centerY + radius * ratio * Math.sin(angle);
            points.push(`${x},${y}`);
        });
        
        // Create SVG
        return `
            <svg width="400" height="400" viewBox="0 0 500 500" style="display: block; margin: 0 auto; max-width: 100%;">
                <!-- Background circles -->
                <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="none" stroke="#94a3b8" stroke-width="3" opacity="0.8"/>
                <circle cx="${centerX}" cy="${centerY}" r="${radius * 0.75}" fill="none" stroke="#94a3b8" stroke-width="3" opacity="0.8"/>
                <circle cx="${centerX}" cy="${centerY}" r="${radius * 0.5}" fill="none" stroke="#94a3b8" stroke-width="3" opacity="0.8"/>
                <circle cx="${centerX}" cy="${centerY}" r="${radius * 0.25}" fill="none" stroke="#94a3b8" stroke-width="3" opacity="0.8"/>
                
                <!-- Axes -->
                <line x1="${centerX}" y1="${centerY - radius}" x2="${centerX}" y2="${centerY + radius}" stroke="#64748b" stroke-width="3" opacity="0.9"/>
                <line x1="${centerX - radius}" y1="${centerY}" x2="${centerX + radius}" y2="${centerY}" stroke="#64748b" stroke-width="3" opacity="0.9"/>
                
                <!-- Radar polygon -->
                <polygon points="${points.join(' ')}" fill="rgba(163, 204, 75, 0.4)" stroke="#A3CC4B" stroke-width="4"/>
                
                <!-- Data points -->
                ${Object.keys(angles).map(key => {
                    const angle = angles[key];
                    const score = scores[key];
                    const max = radarChartData[key].max;
                    const ratio = score / max;
                    const x = centerX + radius * ratio * Math.cos(angle);
                    const y = centerY + radius * ratio * Math.sin(angle);
                    return `<circle cx="${x}" cy="${y}" r="8" fill="${radarChartData[key].color}" stroke="white" stroke-width="4"/>`;
                }).join('')}
                
                <!-- Labels -->
                <text x="${centerX}" y="${centerY - radius - 15}" text-anchor="middle" fill="#374151" font-size="16" font-weight="bold">E</text>
                <text x="${centerX + radius + 25}" y="${centerY}" text-anchor="middle" fill="#374151" font-size="16" font-weight="bold">S</text>
                <text x="${centerX}" y="${centerY + radius + 20}" text-anchor="middle" fill="#374151" font-size="16" font-weight="bold">G</text>
                <text x="${centerX - radius - 30}" y="${centerY}" text-anchor="middle" fill="#374151" font-size="16" font-weight="bold">${currentLanguage === 'pl' ? 'Dostawcy' : 'Supply'}</text>
            </svg>
        `;
    }

    // Industry benchmarking data
    const industryBenchmarks = {
        'Manufacturing': { median: 74, top25: 90, reporting: '80% firm produkcyjnych raportuje ESG' },
        'Service': { median: 67, top25: 85, reporting: '72% firm usługowych raportuje ESG' },
        'IT / Software': { median: 79, top25: 95, reporting: '84% firm technologicznych raportuje ESG' },
        'Retail': { median: 66, top25: 83, reporting: '70% firm detalicznych raportuje ESG' },
        'Transport / Logistic': { median: 62, top25: 80, reporting: '67% firm transportowych raportuje ESG' },
        'Global (Inne)': { median: 71, top25: 88, reporting: 'Średnia globalna wszystkich branż' }
    };

    // Function to get industry benchmark
    function getIndustryBenchmark(industry) {
        const normalizedIndustry = industry ? industry.trim() : '';
        
        // Check if industry matches any key
        for (const key in industryBenchmarks) {
            if (normalizedIndustry.toLowerCase().includes(key.toLowerCase().replace(' / ', ' ').replace('(', '').replace(')', ''))) {
                return industryBenchmarks[key];
            }
        }
        
        // Return global benchmark if no match
        return industryBenchmarks['Global (Inne)'];
    }

    // Get benchmark for current client
    const benchmark = getIndustryBenchmark(clientDetails.industry);

    // Create HTML template with full-page cover and proper page breaks
    const htmlContent = `
        <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; width: 794px; background: #ffffff;">
            <!-- Cover Page - Full A4 -->
            <div style="width: 794px; height: 1131px; padding: 60px 40px; box-sizing: border-box; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); position: relative; overflow: hidden;">
                <!-- Background pattern -->
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23A3CC4B" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg></div>
                
                <!-- Logo and branding -->
                <div style="text-align: center; margin-bottom: 60px; position: relative; z-index: 2;">
                    <div style="margin-bottom: 20px; display: flex; justify-content: center;">
                        <img src="${logo}" alt="ESGSyncPRO" style="margin-bottom: 15px; width: 140px; right: 0px; left: 0px;">
                    </div>
                    <div style="font-size: 42px; font-weight: bold; color: #A3CC4B; margin-bottom: 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">ESGSyncPRO</div>
                    <div style="font-size: 20px; color: #64748b; font-weight: 500;">${currentLanguage === 'pl' ? 'Raport oceny ESG' : 'ESG Assessment Report'}</div>
                </div>
                
                <!-- Main content box -->
                <div style="background: white; padding: 40px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.15); margin: 20px 0; position: relative; z-index: 2; border: 2px solid #A3CC4B;">
                    <h1 style="color: #1e293b; margin: 0 0 30px 0; font-size: 32px; text-align: center; color: #A3CC4B;">${t('survey.title', currentLanguage==='pl' ? 'Szybka ocena ESG' : 'ESG Quick Assessment Report')}</h1>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; text-align: left; margin: 30px 0;">
                        <div style="padding: 15px; background: #f8fafc; border-radius: 10px; border-left: 4px solid #A3CC4B;">
                            <div style="font-weight: bold; color: #475569; margin-bottom: 8px; font-size: 16px;">🌿 ${currentLanguage === 'pl' ? 'Branża' : 'Industry'}</div>
                            <div style="color: #1e293b; font-size: 18px;">${clientDetails.industry || 'N/A'}</div>
                        </div>
                        <div style="padding: 15px; background: #f8fafc; border-radius: 10px; border-left: 4px solid #A3CC4B;">
                            <div style="font-weight: bold; color: #475569; margin-bottom: 8px; font-size: 16px;">👥 ${currentLanguage === 'pl' ? 'Pracownicy' : 'Employees'}</div>
                            <div style="color: #1e293b; font-size: 18px;">${clientDetails.employees || 'N/A'}</div>
                        </div>
                        <div style="padding: 15px; background: #f8fafc; border-radius: 10px; border-left: 4px solid #A3CC4B;">
                            <div style="font-weight: bold; color: #475569; margin-bottom: 8px; font-size: 16px;">🏛️ ${currentLanguage === 'pl' ? 'Kraj' : 'Country'}</div>
                            <div style="color: #1e293b; font-size: 18px;">${clientDetails.country || 'N/A'}</div>
                        </div>
                        <div style="padding: 15px; background: #f8fafc; border-radius: 10px; border-left: 4px solid #A3CC4B;">
                            <div style="font-weight: bold; color: #475569; margin-bottom: 8px; font-size: 16px;">📦 ${currentLanguage === 'pl' ? 'Przychód' : 'Revenue'}</div>
                            <div style="color: #1e293b; font-size: 18px;">${clientDetails.revenue || 'N/A'}</div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 15px; border: 2px solid #A3CC4B;">
                        <div style="font-weight: bold; color: #475569; margin-bottom: 8px; font-size: 16px;">📧 ${currentLanguage === 'pl' ? 'Email' : 'Email'}</div>
                        <div style="color: #1e293b; font-size: 18px; font-weight: 500;">${clientDetails.email || 'N/A'}</div>
                    </div>
                </div>
                
                                 <!-- Date -->
                 <div style="position: absolute; top: 100px; left: 0px; right: 0px; text-align: center; position: relative; z-index: 2;">
                     <div style="color: #64748b; font-size: 16px; font-weight: 500;">
                         ${new Date().toLocaleDateString(currentLanguage === 'pl' ? 'pl-PL' : 'en-US', { 
                             year: 'numeric', 
                             month: 'long', 
                             day: 'numeric' 
                         })}
                     </div>
                 </div>
                 
                 <!-- Footer -->
                 <div style="position: absolute; bottom: 0; left: 0; right: 0; text-align: center; color: #A3CC4B; padding: 15px 20px;">
                     <div style="font-size: 14px; font-weight: 500;">Report generated by ESGSyncPRO | esgsync.pro | esgsync@protonmail.com</div>
                 </div>
            </div>

            <!-- Page Break -->
            <div style="page-break-before: always; height: 0; margin: 0; padding: 0;"></div>

            <!-- Main Content - Second Page -->
            <div style="width: 794px; padding: 50px 40px; min-height: 1131px; box-sizing: border-box; position: relative;">
                <h1 style="color: #1e293b; margin: 0 0 40px 0; font-size: 36px; text-align: center; color: #A3CC4B;">📊 ${currentLanguage === 'pl' ? 'Wyniki oceny ESG' : 'ESG Assessment Results'}</h1>
                
                <!-- Overall Score -->
                <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 4px solid ${getScoreColor(scores.total, 85)}; border-radius: 25px; padding: 40px; margin: 40px 0; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    <div style="font-size: 56px; font-weight: bold; color: ${getScoreColor(scores.total, 85)}; margin-bottom: 20px;">${scores.total}/85 (${scores.percent}%)</div>
                    <div style="font-size: 24px; color: #374151; margin-bottom: 15px;">${overallLabel}</div>
                    <div style="font-size: 20px; color: #6b7280; font-weight: 500;">${interpretLabel}: ${interp}</div>
                </div>
                
                <!-- Radar Chart Section -->
                <div style="margin: 0 0;">
                    <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 28px; text-align: center; color: #A3CC4B;">📊 ${currentLanguage === 'pl' ? 'Wyniki szczegółowe' : 'Detailed Results'}</h2>
                    
                    <!-- Radar Chart -->
                    <div style="background: white; padding: 20px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); margin: 20px 0; text-align: center; margin-right: 130px;">
                        ${createRadarChart(scores)}
                    </div>
                </div>
                
                <!-- Footer -->
                <div style="position: absolute; bottom: 0; left: 0; right: 0; text-align: center; color: #A3CC4B; padding: 15px 20px;">
                    <div style="font-size: 14px; font-weight: 500;">${currentLanguage === 'pl' ? 'Raport wygenerowany przez ESGSyncPRO' : 'Report generated by ESGSyncPRO'} | esgsync.pro | esgsync@protonmail.com</div>
                </div>
                
                <!-- Page Break -->
                <div style="page-break-before: always; height: 0; margin: 0; padding: 0;"></div>
            </div>
            
            <!-- Detailed Scores Page - Third Page -->
            <div style="width: 794px; padding: 50px 40px; min-height: 1131px; box-sizing: border-box; position: relative;">
                <h1 style="color: #1e293b; margin: 0 0 40px 0; font-size: 36px; text-align: center; color: #A3CC4B;">📋 ${currentLanguage === 'pl' ? 'Szczegółowe wyniki ESG' : 'Detailed ESG Scores'}</h1>
                
                <!-- Detailed Scores Grid -->
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin: 25px 0;">
                    <div style="background: #fef7ee; padding: 25px; border-radius: 20px; border-left: 6px solid ${radarChartData.e.color}; box-shadow: 0 5px 15px rgba(0,0,0,0.08);">
                        <div style="font-weight: bold; color: #1e293b; margin-bottom: 12px; font-size: 20px;">🌿 ${t('survey.result.cat.e', 'E')} - ${currentLanguage === 'pl' ? 'Środowisko' : 'Environment'}</div>
                        <div style="font-size: 28px; color: ${radarChartData.e.color}; font-weight: bold;">${scores.e}/25</div>
                        <div style="margin-top: 15px; background: #e5e7eb; height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: ${radarChartData.e.color}; height: 100%; width: ${(scores.e / 25) * 100}%; transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                    
                    <div style="background: #f0f9ff; padding: 25px; border-radius: 20px; border-left: 6px solid ${radarChartData.s.color}; box-shadow: 0 5px 15px rgba(0,0,0,0.08);">
                        <div style="font-weight: bold; color: #1e293b; margin-bottom: 12px; font-size: 20px;">👥 ${t('survey.result.cat.s', 'S')} - ${currentLanguage === 'pl' ? 'Społeczne' : 'Social'}</div>
                        <div style="font-size: 28px; color: ${radarChartData.s.color}; font-weight: bold;">${scores.s}/25</div>
                        <div style="margin-top: 15px; background: #e5e7eb; height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: ${radarChartData.s.color}; height: 100%; width: ${(scores.s / 25) * 100}%; transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                    
                    <div style="background: #fef2f2; padding: 25px; border-radius: 20px; border-left: 6px solid ${radarChartData.g.color}; box-shadow: 0 5px 15px rgba(0,0,0,0.08);">
                        <div style="font-weight: bold; color: #1e293b; margin-bottom: 12px; font-size: 20px;">🏛️ ${t('survey.result.cat.g', 'G')} - ${currentLanguage === 'pl' ? 'Ład korporacyjny' : 'Governance'}</div>
                        <div style="font-size: 28px; color: ${radarChartData.g.color}; font-weight: bold;">${scores.g}/20</div>
                        <div style="margin-top: 15px; background: #e5e7eb; height: 12px; border-radius: 6px; overflow: hidden;">
                            <div style="background: ${radarChartData.g.color}; height: 100%; width: ${(scores.g / 20) * 100}%; transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                    
                                            <div style="background: #f0fdf4; padding: 25px; border-radius: 20px; border-left: 6px solid ${radarChartData.sup.color}; box-shadow: 0 5px 15px rgba(0,0,0,0.08);">
                            <div style="font-weight: bold; color: #1e293b; margin-bottom: 12px; font-size: 20px;">📦 ${supplyLabel}</div>
                            <div style="font-size: 28px; color: ${radarChartData.sup.color}; font-weight: bold;">${scores.sup}/15</div>
                            <div style="margin-top: 15px; background: #e5e7eb; height: 12px; border-radius: 6px; overflow: hidden;">
                                <div style="background: ${radarChartData.sup.color}; height: 100%; width: ${(scores.sup / 15) * 100}%; transition: width 0.3s ease;"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Client Comment Section -->
                    ${clientDetails && clientDetails.comment && clientDetails.comment.trim() !== '' ? `
                    <div style="background: #f0f9ff; padding: 30px; border-radius: 20px; border: 2px solid #0ea5e9; box-shadow: 0 5px 15px rgba(0,0,0,0.08); margin: 40px 0;">
                        <div style="font-weight: bold; color: #1e293b; margin-bottom: 20px; font-size: 24px; text-align: center; color: #0ea5e9;">
                            💬 ${currentLanguage==='pl' ? 'Komentarz klienta:' : 'Client Comment:'}
                        </div>
                        <div style="color: #1e293b; line-height: 1.8; font-size: 18px; font-style: italic; text-align: center; padding: 20px; background: white; border-radius: 15px; border: 1px solid #e0f2fe;">
                            "${clientDetails.comment}"
                        </div>
                    </div>
                    ` : ''}
                    
                    <!-- Footer -->
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; text-align: center; color: #A3CC4B; padding: 15px 20px;">
                        <div style="font-size: 14px; font-weight: 500;">${currentLanguage === 'pl' ? 'Raport wygenerowany przez ESGSyncPRO' : 'Report generated by ESGSyncPRO'} | esgsync.pro | esgsync@protonmail.com</div>
                    </div>
                
                <!-- Page Break -->
                <div style="page-break-before: always; height: 0; margin: 0; padding: 0;"></div>
            </div>
            
            <!-- Industry Comparison Page - Fourth Page -->
            <div style="width: 794px; padding: 50px 40px; min-height: 1131px; box-sizing: border-box; position: relative;">
                <h1 style="color: #1e293b; margin: 0 0 40px 0; font-size: 36px; text-align: center; color: #A3CC4B;">🏭 ${currentLanguage === 'pl' ? 'Porównanie z branżą' : 'Industry Comparison'}</h1>
                
                <!-- Benchmark Table -->
                <div style="background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); margin: 30px 0;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; text-align: center; margin-bottom: 30px;">
                        <div style="padding: 20px; background: #f0fdf4; border-radius: 15px; border: 2px solid #A3CC4B;">
                            <div style="font-size: 14px; color: #64748b; margin-bottom: 8px; font-weight: 500;">${currentLanguage === 'pl' ? 'Twoja firma' : 'Your Company'}</div>
                            <div style="font-size: 32px; color: #A3CC4B; font-weight: bold;">${scores.percent}%</div>
                        </div>
                        <div style="padding: 20px; background: #fef3c7; border-radius: 15px; border: 2px solid #f59e0b;">
                            <div style="font-size: 14px; color: #64748b; margin-bottom: 8px; font-weight: 500;">${currentLanguage === 'pl' ? 'Mediana branży' : 'Industry Median'}</div>
                            <div style="font-size: 32px; color: #d97706; font-weight: bold;">${benchmark.median}%</div>
                        </div>
                        <div style="padding: 20px; background: #fef2f2; border-radius: 15px; border: 2px solid #ef4444;">
                            <div style="font-size: 14px; color: #64748b; margin-bottom: 8px; font-weight: 500;">${currentLanguage === 'pl' ? 'Top 25%' : 'Top 25%'}</div>
                            <div style="font-size: 32px; color: #dc2626; font-weight: bold;">${benchmark.top25}%</div>
                        </div>
                    </div>
                    
                    <!-- Bar Chart -->
                    <div style="background: white; padding: 30px; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.08); margin: 30px 0; text-align: center;">
                        <h3 style="color: #1e293b; margin: 0 0 25px 0; font-size: 22px; color: #A3CC4B;">📊 ${currentLanguage === 'pl' ? 'Wizualne porównanie' : 'Visual Comparison'}</h3>
                        
                        <!-- SVG Bar Chart -->
                        <div style="display: flex; justify-content: center; margin: 20px 0;">
                            <svg width="600" height="300" style="background: #f8fafc; border-radius: 10px; padding: 20px;">
                                <!-- Y-axis labels -->
                                <text x="30" y="30" font-family="Arial" font-size="12" fill="#64748b">100%</text>
                                <text x="30" y="80" font-family="Arial" font-size="12" fill="#64748b">75%</text>
                                <text x="30" y="130" font-family="Arial" font-size="12" fill="#64748b">50%</text>
                                <text x="30" y="180" font-family="Arial" font-size="12" fill="#64748b">25%</text>
                                <text x="15" y="100" font-family="Arial" font-size="14" fill="#1e293b" text-anchor="middle" font-weight="bold" transform="rotate(-90, 15, 100)">${currentLanguage === 'pl' ? 'Procent' : 'Percentage'}</text>
                                
                                <!-- Y-axis grid lines -->
                                <line x1="60" y1="30" x2="580" y2="30" stroke="#e2e8f0" stroke-width="1"/>
                                <line x1="60" y1="80" x2="580" y2="80" stroke="#e2e8f0" stroke-width="1"/>
                                <line x1="60" y1="130" x2="580" y2="130" stroke="#e2e8f0" stroke-width="1"/>
                                <line x1="60" y1="180" x2="580" y2="180" stroke="#e2e8f0" stroke-width="1"/>
                                
                                <!-- X-axis -->
                                <line x1="60" y1="180" x2="580" y2="180" stroke="#1e293b" stroke-width="2"/>
                                
                                <!-- Bars -->
                                <!-- Your Company Bar -->
                                <rect x="80" y="${180 - (scores.percent / 100) * 150}" width="120" height="${(scores.percent / 100) * 150}" fill="#A3CC4B" stroke="#1e293b" stroke-width="2"/>
                                <text x="140" y="${180 - (scores.percent / 100) * 150 - 10}" font-family="Arial" font-size="14" fill="#1e293b" text-anchor="middle" font-weight="bold">${scores.percent}%</text>
                                <text x="140" y="200" font-family="Arial" font-size="12" fill="#64748b" text-anchor="middle">${currentLanguage === 'pl' ? 'Twoja firma' : 'Your Company'}</text>
                                
                                <!-- Industry Median Bar -->
                                <rect x="220" y="${180 - (benchmark.median / 100) * 150}" width="120" height="${(benchmark.median / 100) * 150}" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
                                <text x="280" y="${180 - (benchmark.median / 100) * 150 - 10}" font-family="Arial" font-size="14" fill="#1e293b" text-anchor="middle" font-weight="bold">${benchmark.median}%</text>
                                <text x="280" y="200" font-family="Arial" font-size="12" fill="#64748b" text-anchor="middle">${currentLanguage === 'pl' ? 'Mediana branży' : 'Industry Median'}</text>
                                
                                <!-- Top 25% Bar -->
                                <rect x="360" y="${180 - (benchmark.top25 / 100) * 150}" width="120" height="${(benchmark.top25 / 100) * 150}" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
                                <text x="420" y="${180 - (benchmark.top25 / 100) * 150 - 10}" font-family="Arial" font-size="14" fill="#1e293b" text-anchor="middle" font-weight="bold">${benchmark.top25}%</text>
                                <text x="420" y="200" font-family="Arial" font-size="12" fill="#64748b" text-anchor="middle">${currentLanguage === 'pl' ? 'Top 25%' : 'Top 25%'}</text>
                                
                                <!-- Legend -->
                                <rect x="60" y="220" width="12" height="12" fill="#A3CC4B"/>
                                <text x="80" y="230" font-family="Arial" font-size="12" fill="#1e293b">${currentLanguage === 'pl' ? 'Twoja firma' : 'Your Company'}</text>
                                
                                <rect x="200" y="220" width="12" height="12" fill="#f59e0b"/>
                                <text x="220" y="230" font-family="Arial" font-size="12" fill="#1e293b">${currentLanguage === 'pl' ? 'Mediana branży' : 'Industry Median'}</text>
                                
                                <rect x="340" y="220" width="12" height="12" fill="#ef4444"/>
                                <text x="360" y="230" font-family="Arial" font-size="12" fill="#1e293b">${currentLanguage === 'pl' ? 'Top 25%' : 'Top 25%'}</text>
                            </svg>
                        </div>
                        
                        <!-- Chart description -->
                        <div style="color: #64748b; font-size: 14px; line-height: 1.5; margin-top: 15px;">
                            ${currentLanguage === 'pl' ? 
                                `Wykres pokazuje pozycję Twojej firmy (${scores.percent}%) w porównaniu z medianą branżową (${benchmark.median}%) i liderami (${benchmark.top25}%)` :
                                `The chart shows your company's position (${scores.percent}%) compared to industry median (${benchmark.median}%) and leaders (${benchmark.top25}%)`
                            }
                        </div>
                    </div>
                    
                    <!-- Two Info Cards in Row -->
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 30px 0;">
                        <!-- Industry Info -->
                        <div style="background: #f8fafc; padding: 20px; border-radius: 15px; border: 1px solid #e2e8f0; text-align: center;">
                            <div style="font-size: 14px; color: #475569; font-weight: 500;">
                                ${benchmark.reporting}
                            </div>
                        </div>
                        
                        <!-- Comparison Analysis -->
                        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 20px; border-radius: 15px; border: 2px solid #0ea5e9; text-align: center;">
                            <div style="font-size: 16px; color: #1e293b; line-height: 1.5;">
                                ${currentLanguage === 'pl' ? 
                                    `Twój wynik ${scores.percent}% jest o ${Math.abs(scores.percent - benchmark.median)} punktów procentowych ${scores.percent >= benchmark.median ? 'powyżej' : 'poniżej'} mediany (${benchmark.median}%).` :
                                    `Your score of ${scores.percent}% is ${Math.abs(scores.percent - benchmark.median)} percentage points ${scores.percent >= benchmark.median ? 'above' : 'below'} the median (${benchmark.median}%).`
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Footer -->
                <div style="position: absolute; bottom: 0; left: 0; right: 0; text-align: center; color: #A3CC4B; padding: 15px 20px;">
                    <div style="font-size: 14px; font-weight: 500;">${currentLanguage === 'pl' ? 'Raport wygenerowany przez ESGSyncPRO' : 'Report generated by ESGSyncPRO'} | esgsync.pro | esgsync@protonmail.com</div>
                </div>
                
                <!-- Page Break -->
                <div style="page-break-before: always; height: 0; margin: 0; padding: 0;"></div>
            </div>
                   
                   <!-- ESG Analytics & Recommendations - Fifth Page -->
                   <div style="width: 794px; padding: 50px 40px; min-height: 1131px; box-sizing: border-box; position: relative;">
                       <h1 style="color: #1e293b; margin: 0 0 40px 0; font-size: 36px; text-align: center; color: #A3CC4B;">💡 ${currentLanguage==='pl' ? 'Analiza ESG i Rekomendacje' : 'ESG Analysis & Recommendations'}</h1>

                       
                       <!-- ESG Analysis Section -->
                       <div style="background: #f8fafc; padding: 40px; border-radius: 20px; border: 2px solid #A3CC4B; box-shadow: 0 10px 25px rgba(0,0,0,0.1); margin: 40px 0;">
                           <div style="margin-bottom: 40px;">
                               <div style="font-weight: bold; color: #1e293b; margin-bottom: 15px; font-size: 22px;">🔍 ${currentLanguage==='pl' ? 'Analiza ESG:' : 'ESG Analysis:'}</div>
                               <div style="color: #475569; line-height: 1.8; font-size: 18px;">${esgContent.summary}</div>
                           </div>
                           <div style="margin-bottom: 40px;">
                               <div style="font-weight: bold; color: #1e293b; margin-bottom: 15px; font-size: 22px;">⚡ ${currentLanguage==='pl' ? 'Następne kroki:' : 'Next Steps:'}</div>
                               <div style="color: #475569; line-height: 1.8; font-size: 18px;">
                                   ${esgContent.nextSteps.map(step => `<div style="margin-bottom: 10px;">• ${step}</div>`).join('')}
                               </div>
                           </div>
                           <div style="margin-bottom: 0;">
                               <div style="font-weight: bold; color: #1e293b; margin-bottom: 15px; font-size: 22px;">🎯 ${currentLanguage==='pl' ? 'Dlaczego:' : 'Why:'}</div>
                               <div style="color: #475569; line-height: 1.8; font-size: 18px;">${recWhy}</div>
                           </div>
                       </div>
                       
                       <!-- Footer -->
                       <div style="position: absolute; bottom: 0; left: 0; right: 0; text-align: center; color: #A3CC4B; padding: 15px 20px;">
                           <div style="font-size: 14px; font-weight: 500;">${currentLanguage === 'pl' ? 'Raport wygenerowany przez ESGSyncPRO' : 'Report generated by ESGSyncPRO'} | esgsync.pro | esgsync@protonmail.com</div>
                       </div>
                   </div>
                   
                   <!-- Page Break -->
                   <div style="page-break-before: always; height: 0; margin: 0; padding: 0;"></div>
                   
                   <!-- Take Action - Sixth Page -->
                   <div style="width: 794px; padding: 50px 40px; min-height: 1131px; box-sizing: border-box; position: relative; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);">
                                              <h1 style="color: #1e293b; margin: 0 0 40px 0; font-size: 36px; text-align: center; color: #A3CC4B;">🚀 ${currentLanguage==='pl' ? 'Weź działanie' : 'Take Action'}</h1>
                       
                       <!-- Main CTA Block -->
                       <div style="background: white; padding: 60px; border-radius: 30px; box-shadow: 0 25px 50px rgba(0,0,0,0.15); margin: 40px 0; border: 3px solid #A3CC4B; text-align: center;">
                           <div style="font-size: 32px; color: #1e293b; margin-bottom: 20px; font-weight: bold;">
                               🚀 ${currentLanguage==='pl' ? 'Umów bezpłatną konsultację z ESGSyncPRO' : 'Schedule a free consultation with ESGSyncPRO'}
                           </div>
                           <p style="font-size: 18px; color: #64748b; line-height: 1.6; margin-bottom: 20px;">
                               ${esgContent.cta}
                           </p>
                       </div>
                       
                       <!-- Benefits Section -->
                       <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin: 50px 0;">
                           <div style="background: white; padding: 30px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border-left: 5px solid #A3CC4B;">
                               <div style="font-size: 48px; margin-bottom: 15px;">📈</div>
                               <div style="font-weight: bold; color: #1e293b; margin-bottom: 10px; font-size: 20px;">
                                   ${currentLanguage==='pl' ? 'Wzrost wyniku ESG' : 'ESG Score Growth'}
                               </div>
                               <div style="color: #64748b; line-height: 1.6;">
                                   ${currentLanguage==='pl' ? 'Średni wzrost o 20% w ciągu 6 miesięcy' : 'Average 20% increase within 6 months'}
                               </div>
                           </div>
                           
                                                      <div style="background: white; padding: 30px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border-left: 5px solid #A3CC4B;">
                               <div style="font-size: 48px; margin-bottom: 15px;">🎯</div>
                               <div style="font-weight: bold; color: #1e293b; margin-bottom: 10px; font-size: 20px;">
                                   ${currentLanguage==='pl' ? 'Spersonalizowany plan' : 'Personalized Plan'}
                               </div>
                               <div style="color: #64748b; line-height: 1.6;">
                                   ${currentLanguage==='pl' ? 'Indywidualne rekomendacje dla Twojej firmy' : 'Tailored recommendations for your company'}
                               </div>
                           </div>
                           
                           <div style="background: white; padding: 30px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border-left: 5px solid #A3CC4B;">
                               <div style="font-size: 48px; margin-bottom: 15px;">⚡</div>
                               <div style="font-weight: bold; color: #1e293b; margin-bottom: 10px; font-size: 20px;">
                                   ${currentLanguage==='pl' ? 'Szybkie wdrożenie' : 'Quick Implementation'}
                               </div>
                               <div style="color: #64748b; line-height: 1.6;">
                                   ${currentLanguage==='pl' ? 'Praktyczne kroki do natychmiastowego działania' : 'Practical steps for immediate action'}
                               </div>
                           </div>
                           
                                                          <div style="background: white; padding: 30px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border-left: 5px solid #A3CC4B;">
                                   <div style="font-size: 48px; margin-bottom: 15px;">🏆</div>
                                   <div style="font-weight: bold; color: #1e293b; margin-bottom: 10px; font-size: 20px;">
                                       ${currentLanguage==='pl' ? 'Przewaga konkurencyjna' : 'Competitive Advantage'}
                                   </div>
                                   <div style="color: #1e293b; line-height: 1.6;">
                                       ${currentLanguage==='pl' ? 'Wyróżnij się na rynku dzięki ESG' : 'Stand out in the market with ESG'}
                                   </div>
                               </div>
                           </div>
                           
                           <!-- Footer -->
                           <div style="position: absolute; bottom: 0; left: 0; right: 0; text-align: center; color: #A3CC4B; padding: 15px 20px;">
                               <div style="font-size: 14px; font-weight: 500;">Report generated by ESGSyncPRO | esgsync.pro | esgsync@protonmail.com</div>
                           </div>
                       
                       <!-- Page Break -->
                       <div style="page-break-before: always; height: 0; margin: 0; padding: 0;"></div>
                   </div>
                   
                   <!-- Next Step & Get in Touch - Seventh Page -->
                   <div style="width: 794px; padding: 50px 40px; min-height: 1131px; box-sizing: border-box; position: relative; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);">
                       <div style="text-align: center; margin-bottom: 40px;">
                           <h1 style="color: #1e293b; margin: 0 0 30px 0; font-size: 42px; color: #A3CC4B; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                               🚀 ${currentLanguage==='pl' ? 'Następny krok:' : 'Next Step:'}
                           </h1>

                       </div>
                       
                       <!-- Take Action Section -->
                       <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 30px; border-radius: 20px; border: 2px solid #f59e0b; box-shadow: 0 5px 15px rgba(0,0,0,0.08); margin: 40px 0;">
                           <div style="font-weight: bold; color: #1e293b; margin-bottom: 20px; font-size: 24px; text-align: center; color: #d97706;">
                               🚀 ${currentLanguage==='pl' ? 'Weź działanie:' : 'Take Action:'}
                           </div>
                           <div style="color: #1e293b; line-height: 1.8; font-size: 18px; text-align: center; margin-bottom: 20px;">
                               ${esgContent.cta}
                           </div>

                       </div>
                       
                       <!-- Contact Information -->
                       <div style="background: #1e293b; padding: 40px; border-radius: 25px; text-align: center; margin: 40px 0; border: 2px solid #A3CC4B;">
                           <div style="font-size: 24px; color: #A3CC4B; margin-bottom: 20px; font-weight: bold;">
                               📞 ${currentLanguage==='pl' ? 'Skontaktuj się z nami:' : 'Get in touch:'}
                           </div>
                           <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;">
                               <div style="text-align: center;">
                                   <div style="font-size: 20px; color: #A3CC4B; margin-bottom: 10px; font-weight: bold;">🌐</div>
                                   <div style="color: white; font-size: 18px; margin-bottom: 5px;">Website</div>
                                   <div style="color: #A3CC4B; font-size: 18px; font-weight: 500;">esgsync.pro</div>
                               </div>
                               <div style="text-align: center;">
                                   <div style="font-size: 20px; color: #A3CC4B; margin-bottom: 10px; font-weight: bold;">📧</div>
                                   <div style="color: white; font-size: 18px; margin-bottom: 5px;">Email</div>
                                   <div style="color: #A3CC4B; font-size: 18px; font-weight: 500;">esgsync@protonmail.com</div>
                               </div>
                           </div>
                       </div>
                       
                       <!-- Footer -->
                       <div style="position: absolute; bottom: 0; left: 0; right: 0; text-align: center; color: #A3CC4B; padding: 15px 20px;">
                           <div style="font-size: 14px; font-weight: 500;">${currentLanguage === 'pl' ? 'Raport wygenerowany przez ESGSyncPRO' : 'Report generated by ESGSyncPRO'} | esgsync.pro | esgsync@protonmail.com</div>
                       </div>
                       

               </div>
    `;

    return htmlContent;
}

/**
 * Helper function for template string replacement
 * @param {string} str - Template string
 * @param {Object} map - Replacement values
 * @returns {string} Processed string
 */
function templateString(str, map) {
    if (!str) return '';
    return str.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => (k in map ? String(map[k]) : ''));
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        generatePdfHtmlContent, 
        templateString,
        getRandomVersion
    };
} else {
    // Make functions available globally in browser
    window.generatePdfHtmlContent = generatePdfHtmlContent;
    window.templateString = templateString;
    window.getRandomVersion = getRandomVersion;
}
