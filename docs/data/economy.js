(function() {
window.GA_DATA = window.GA_DATA || {};
const H = window.GA_HELPERS;
const T = (...args) => H.topic(...args);
const tbl = H.table;

window.GA_DATA.economy = {
  id: 'economy',
  name: 'Economy',
  color: '#2d7a4f',
  icon: '💰',
  chapters: [
    {
      id: 'basic-concepts',
      name: 'Basic Concepts',
      topics: [
        {
          id: 'types-of-economy',
          title: 'Types of Economy',
          content: T(
            'Types of Economy',
            'An economy is how a country produces, distributes, and uses goods and services. Different countries follow different systems to decide who owns resources and who makes decisions.',
            H.h2('Main Types of Economic Systems') +
            H.p('Every country must answer three basic questions: <strong>What to produce?</strong> <strong>How to produce?</strong> and <strong>For whom to produce?</strong> The way these questions are answered defines the type of economy.') +
            tbl(
              ['Type', 'Who Owns Resources?', 'Who Decides?', 'Example'],
              [
                ['Capitalist / Market Economy', 'Private individuals and companies', 'Market (demand & supply)', 'USA, UK (mostly)'],
                ['Socialist / Command Economy', 'Government / State', 'Central planning by government', 'North Korea (mostly)'],
                ['Mixed Economy', 'Both private sector and government', 'Both market and government', 'India, France, Brazil'],
                ['Traditional Economy', 'Community / customs', 'Customs and traditions', 'Some tribal areas']
              ]
            ) +
            H.h3('Capitalist Economy') +
            H.p('In a capitalist economy, private people and businesses own factories, land, and shops. They produce goods to earn profit. Prices are decided by demand (how much people want) and supply (how much is available). The government plays a small role.') +
            H.h3('Socialist Economy') +
            H.p('In a socialist economy, the government owns most important industries like railways, mines, and banks. It decides what to produce and how much to charge. The goal is equal distribution of wealth among all citizens.') +
            H.h3('Mixed Economy — India\'s Model') +
            H.p('India follows a <strong>mixed economy</strong>. Private companies run businesses like IT, textiles, and retail. The government runs railways, defence, and public health. This balance helps growth while protecting the poor.') +
            H.h3('Indian Economy — Key Features') +
            tbl(
              ['Feature', 'Meaning'],
              [
                ['Developing economy', 'India is growing but not yet fully developed like the USA'],
                ['Agriculture-based', 'Many people still depend on farming for livelihood'],
                ['Large population', 'Over 140 crore people — huge market and workforce'],
                ['Democratic planning', 'Five Year Plans (now NITI Aayog) guide development']
              ]
            ),
            {
              examTip: 'India is always called a "Mixed Economy" in exams — never capitalist or socialist alone.',
              dontConfuse: 'Mixed Economy ≠ only capitalism. India has both private companies (Tata, Reliance) AND government companies (Indian Railways, SBI).',
              quickRevision: [
                'Capitalist = private ownership + profit motive',
                'Socialist = government ownership + equal distribution',
                'Mixed = both private and government (India follows this)',
                'Traditional = based on customs and traditions',
                'India = developing + mixed + democratic economy'
              ],
              examAsk: 'Which type of economy does India follow? / Difference between capitalist and socialist economy? / What is a mixed economy?'
            }
          )
        },
        {
          id: 'sectors-of-economy',
          title: 'Sectors of Economy',
          content: T(
            'Sectors of Economy',
            'The economy is divided into sectors based on the type of work people do — farming, manufacturing, or services. Each sector plays a different role in producing goods and creating jobs.',
            H.h2('Three Main Sectors') +
            tbl(
              ['Sector', 'Also Called', 'Activity', 'Examples'],
              [
                ['Primary', 'Agriculture Sector', 'Uses natural resources directly', 'Farming, fishing, mining, forestry'],
                ['Secondary', 'Industrial Sector', 'Makes finished goods from raw materials', 'Factories, construction, manufacturing'],
                ['Tertiary', 'Service Sector', 'Provides services, not physical goods', 'Banking, teaching, transport, IT, tourism']
              ]
            ) +
            H.h3('Primary Sector') +
            H.p('This is the oldest sector. People grow crops, catch fish, cut trees, or dig minerals from the earth. In India, about 45% of workers still work in agriculture, though it contributes less than 20% to GDP.') +
            H.h3('Secondary Sector') +
            H.p('Raw materials from the primary sector are processed here. Wheat becomes bread, cotton becomes cloth, iron ore becomes steel. This sector creates manufacturing jobs and adds value to raw products.') +
            H.h3('Tertiary Sector') +
            H.p('This is the fastest-growing sector in India today. Banks, schools, hospitals, software companies, and transport all belong here. It does not produce physical goods but provides useful services.') +
            H.h2('Organised vs Unorganised Sector') +
            tbl(
              ['Feature', 'Organised Sector', 'Unorganised Sector'],
              [
                ['Registration', 'Registered with government', 'Not registered'],
                ['Rules', 'Follows labour laws, fixed salary', 'No fixed rules, low pay'],
                ['Job security', 'High — pension, paid leave', 'Very low — can lose job anytime'],
                ['Examples', 'Government jobs, big companies', 'Street vendors, daily wage workers']
              ]
            ) +
            H.h2('Public vs Private Sector') +
            tbl(
              ['Sector', 'Ownership', 'Goal', 'Examples'],
              [
                ['Public Sector', 'Government owns', 'Public welfare + some profit', 'Indian Railways, BHEL, ONGC'],
                ['Private Sector', 'Private individuals/companies own', 'Profit', 'Tata, Infosys, Reliance']
              ]
            ),
            {
              examTip: 'Remember the order: Primary → Secondary → Tertiary. As a country develops, people shift from Primary to Tertiary sector.',
              memoryTrick: 'P-S-T: Primary = Plough (farming), Secondary = Steel (factories), Tertiary = Teaching (services).',
              quickRevision: [
                'Primary = agriculture, mining, fishing',
                'Secondary = manufacturing, construction',
                'Tertiary = services (banking, IT, education)',
                'Organised = registered, job security; Unorganised = no rules',
                'Public = govt owned; Private = company owned'
              ],
              examAsk: 'Name the three sectors of economy with examples. / Difference between organised and unorganised sector? / Which sector is largest employer in India?'
            }
          )
        },
        {
          id: 'gdp-gnp-ndp-nnp',
          title: 'GDP, GNP, NDP & NNP',
          content: T(
            'GDP, GNP, NDP & NNP',
            'These are ways to measure how much wealth a country produces in one year. They help us know whether the economy is growing or shrinking.',
            H.h2('What Do These Terms Mean?') +
            tbl(
              ['Term', 'Full Form', 'Simple Meaning'],
              [
                ['GDP', 'Gross Domestic Product', 'Total value of all goods & services produced INSIDE India in one year'],
                ['GNP', 'Gross National Product', 'Total value produced by INDIANS (inside + outside India) in one year'],
                ['NDP', 'Net Domestic Product', 'GDP minus wear-and-tear (depreciation) of machines and buildings'],
                ['NNP', 'Net National Product', 'GNP minus depreciation — true income of the nation']
              ]
            ) +
            H.h3('GDP — Most Important for Exams') +
            H.p('GDP counts everything produced within India\'s borders, no matter who produces it — Indians or foreigners. If a Japanese car company makes cars in India, it adds to India\'s GDP.') +
            H.h3('GNP vs GDP') +
            H.p('GNP includes income earned by Indians working abroad (like an Indian engineer in Dubai). It excludes income earned by foreigners in India. <strong>GNP = GDP + Net Factor Income from Abroad (NFIA)</strong>') +
            H.h3('Depreciation') +
            H.p('Machines, vehicles, and buildings wear out over time. This loss in value is called <strong>depreciation</strong>. NDP and NNP subtract this to show the real usable income.') +
            H.h2('Per Capita Income') +
            H.p('Per capita income = Total National Income ÷ Total Population. It shows average income per person. India\'s per capita income is much lower than developed countries like the USA or Japan.') +
            H.h2('Quick Comparison Table') +
            tbl(
              ['Measure', 'Formula Idea', 'Includes Depreciation?', 'Border or People?'],
              [
                ['GDP', 'Production inside country', 'Yes (Gross)', 'Inside borders'],
                ['GNP', 'Production by nationals', 'Yes (Gross)', 'By Indian citizens'],
                ['NDP', 'GDP − Depreciation', 'No (Net)', 'Inside borders'],
                ['NNP', 'GNP − Depreciation', 'No (Net)', 'By Indian citizens']
              ]
            ),
            {
              examTip: 'GDP is measured "inside borders"; GNP is measured "by citizens". India mainly uses GDP to track growth.',
              dontConfuse: 'GDP counts WHERE goods are made. GNP counts WHO makes them. A Ford factory in Chennai adds to India\'s GDP but not USA\'s GDP.',
              quickRevision: [
                'GDP = production inside India (most used measure)',
                'GNP = GDP + income of Indians abroad − income of foreigners in India',
                'NDP = GDP − depreciation',
                'NNP = GNP − depreciation (true national income)',
                'Per capita income = National income ÷ Population'
              ],
              examAsk: 'What is GDP? / Difference between GDP and GNP? / What is depreciation? / How is per capita income calculated?'
            }
          )
        },
        {
          id: 'national-income-methods',
          title: 'Methods of Measuring National Income',
          content: T(
            'Methods of Measuring National Income',
            'National income is the total money value of all final goods and services produced in a country in one year. Economists use three different methods to calculate it — all should give the same answer.',
            H.h2('Three Methods') +
            tbl(
              ['Method', 'Also Called', 'What It Measures', 'Simple Idea'],
              [
                ['Product Method', 'Value Added Method', 'Total value added at each stage of production', 'Add up value added by all industries'],
                ['Income Method', 'Factor Income Method', 'Total income earned by all factors of production', 'Add wages + rent + interest + profit'],
                ['Expenditure Method', 'Consumption Method', 'Total spending in the economy', 'Add consumption + investment + govt spending + exports − imports']
              ]
            ) +
            H.h3('1. Product (Value Added) Method') +
            H.p('Every industry adds some value to raw materials. A baker adds value to flour by making bread. We add the value added at each stage — farming, manufacturing, and services — to get total production.') +
            H.h3('2. Income Method') +
            H.p('All people who help in production earn income. Workers earn <strong>wages</strong>, landowners earn <strong>rent</strong>, lenders earn <strong>interest</strong>, and business owners earn <strong>profit</strong>. Adding all these gives national income.') +
            H.h3('3. Expenditure Method') +
            H.p('Everything produced is eventually bought by someone. So we add: what households buy (consumption) + what businesses invest + what government spends + exports, minus imports.') +
            H.h2('Four Factors of Production') +
            tbl(
              ['Factor', 'Income Earned', 'Example'],
              [
                ['Land', 'Rent', 'Farmer pays rent for agricultural land'],
                ['Labour', 'Wages / Salary', 'Factory worker\'s monthly pay'],
                ['Capital', 'Interest', 'Bank loan interest to business'],
                ['Enterprise', 'Profit', 'Shop owner\'s earnings after all costs']
              ]
            ) +
            H.h2('Who Calculates India\'s National Income?') +
            H.p('In India, the <strong>Central Statistical Office (CSO)</strong>, now part of <strong>Ministry of Statistics and Programme Implementation (MoSPI)</strong>, calculates national income. Data is published every year.') +
            H.p('Only <strong>final goods</strong> are counted — not raw materials twice. If we count wheat AND bread separately, we would double-count. That is why value added matters.'),
            {
              examTip: 'All three methods must give the same national income figure. Remember: Income Method uses Wages + Rent + Interest + Profit.',
              memoryTrick: 'PIE — Product, Income, Expenditure — three ways to measure the same pie (national income).',
              quickRevision: [
                'Product Method = sum of value added by all sectors',
                'Income Method = wages + rent + interest + profit',
                'Expenditure Method = C + I + G + (X − M)',
                'Four factors: Land, Labour, Capital, Enterprise',
                'Calculated by CSO / MoSPI in India'
              ],
              examAsk: 'Name the three methods of calculating national income. / What are the four factors of production? / Which body calculates national income in India?'
            }
          )
        },
        {
          id: 'real-vs-nominal-gdp',
          title: 'Real vs Nominal GDP',
          content: T(
            'Real vs Nominal GDP',
            'When we compare GDP across years, prices also change. Nominal GDP uses current prices; Real GDP uses fixed prices to show true growth without the effect of inflation.',
            H.h2('Nominal GDP') +
            H.p('Nominal GDP is calculated using <strong>current year prices</strong>. If prices of goods rise, nominal GDP rises even if the same quantity is produced. So it can be misleading when comparing different years.') +
            H.h2('Real GDP') +
            H.p('Real GDP is calculated using <strong>prices of a fixed base year</strong>. It shows how much production actually increased, without counting price rise. Real GDP gives the true picture of economic growth.') +
            tbl(
              ['Feature', 'Nominal GDP', 'Real GDP'],
              [
                ['Prices used', 'Current year prices', 'Fixed base year prices'],
                ['Shows', 'Money value at today\'s prices', 'Actual change in production'],
                ['Effect of inflation', 'Includes inflation', 'Removes inflation effect'],
                ['Better for', 'Current size of economy', 'Comparing growth over years']
              ]
            ) +
            H.h3('Simple Example') +
            H.p('Suppose India produced 100 units of rice in both 2020 and 2024. In 2020, rice cost ₹40/kg. In 2024, rice costs ₹60/kg.') +
            H.ul([
              'Nominal GDP rises from ₹4,000 to ₹6,000 — looks like 50% growth',
              'Real GDP stays at ₹4,000 (same quantity, base year prices) — actual growth is 0%',
              'The difference is due to inflation, not more production'
            ]) +
            H.h2('GDP Deflator') +
            H.p('The <strong>GDP Deflator</strong> measures inflation in the entire economy. Formula: <strong>GDP Deflator = (Nominal GDP ÷ Real GDP) × 100</strong>. If deflator rises, it means prices are rising (inflation).') +
            H.h2('Base Year') +
            H.p('India changes its base year periodically for accurate measurement. Earlier base year was 2011-12. Real GDP is always stated "at constant prices" and nominal GDP "at current prices".'),
            {
              examTip: 'If exam asks "true economic growth" — answer is Real GDP. Nominal GDP can rise just because of price increase.',
              dontConfuse: 'Nominal = current prices (includes inflation). Real = constant/base year prices (actual production growth).',
              quickRevision: [
                'Nominal GDP = current prices; can be inflated by price rise',
                'Real GDP = base year prices; shows actual production growth',
                'GDP Deflator = (Nominal ÷ Real) × 100',
                'Real GDP is better for comparing growth across years',
                'India uses base year prices for real GDP calculation'
              ],
              examAsk: 'Difference between nominal and real GDP? / What is GDP deflator? / Why is real GDP preferred for growth comparison?'
            }
          )
        }
      ]
    },
    {
      id: 'money-banking-finance',
      name: 'Money, Banking & Finance',
      topics: [
        {
          id: 'inflation',
          title: 'Inflation',
          content: T(
            'Inflation',
            'Inflation means a general rise in prices of goods and services over time. When inflation happens, the same ₹100 buys fewer things than before — so money loses its purchasing power.',
            H.h2('Types of Inflation') +
            tbl(
              ['Type', 'Cause', 'Simple Explanation'],
              [
                ['Demand-Pull Inflation', 'Too much demand', 'People want to buy more than what is available — prices go up'],
                ['Cost-Push Inflation', 'Rise in production cost', 'Raw materials or wages increase — producers raise prices'],
                ['Built-in Inflation', 'Wage-price spiral', 'Workers demand higher wages → costs rise → prices rise → workers demand more wages']
              ]
            ) +
            H.h2('How Is Inflation Measured in India?') +
            H.p('Two main indices measure inflation in India:') +
            tbl(
              ['Index', 'Full Form', 'What It Measures', 'Published By'],
              [
                ['CPI', 'Consumer Price Index', 'Price change of goods bought by common people (food, fuel, clothes)', 'CSO / MoSPI'],
                ['WPI', 'Wholesale Price Index', 'Price change of goods sold in bulk by wholesalers', 'Office of Economic Adviser, DPIIT']
              ]
            ) +
            H.p('The <strong>RBI targets CPI inflation</strong> at around <strong>4%</strong> with a band of 2% to 6%.') +
            H.h2('Effects of Inflation') +
            tbl(
              ['Effect On', 'What Happens'],
              [
                ['Common people (fixed income)', 'Hardship — salary stays same but prices rise'],
                ['Borrowers (debtors)', 'Benefit — they repay old loans with cheaper money'],
                ['Lenders (creditors)', 'Lose — money returned has less value'],
                ['Savings', 'Value of saved money decreases over time']
              ]
            ) +
            H.h3('Hyperinflation') +
            H.p('When inflation is extremely high (hundreds or thousands of percent per year), it is called hyperinflation. Money becomes almost worthless. Example: Zimbabwe in 2008.'),
            {
              examTip: 'RBI inflation target = 4% (±2%). CPI is the main measure for policy. WPI is wholesale level.',
              memoryTrick: 'CPI = Common People\'s Index (consumer goods). WPI = Wholesale (bulk goods).',
              quickRevision: [
                'Inflation = general rise in prices; money buys less',
                'Demand-pull = too much demand; Cost-push = higher costs',
                'CPI = retail/consumer prices; WPI = wholesale prices',
                'RBI targets 4% CPI inflation',
                'Borrowers gain, savers lose during inflation'
              ],
              examAsk: 'What is inflation? / Difference between CPI and WPI? / What is RBI\'s inflation target? / Who gains during inflation — borrower or lender?'
            }
          )
        },
        {
          id: 'deflation-disinflation-stagflation',
          title: 'Deflation, Disinflation & Stagflation',
          content: T(
            'Deflation, Disinflation & Stagflation',
            'These three terms describe different price situations in an economy. They sound similar but mean very different things — exams love to test this confusion!',
            H.h2('Three Terms Compared') +
            tbl(
              ['Term', 'Meaning', 'Prices', 'Economy'],
              [
                ['Deflation', 'General fall in prices', 'Prices going DOWN continuously', 'Usually slow growth, less spending'],
                ['Disinflation', 'Inflation rate slowing down', 'Prices still rising, but SLOWER', 'Inflation falling from high to low level'],
                ['Stagflation', 'Stagnation + Inflation together', 'Prices rising HIGH', 'Growth is very low or zero']
              ]
            ) +
            H.h3('Deflation') +
            H.p('In deflation, prices keep falling. People delay purchases hoping prices will drop further. Businesses earn less and may cut jobs. Japan faced long deflation in the 1990s-2000s.') +
            H.h3('Disinflation') +
            H.p('Disinflation is NOT deflation. Prices are still increasing, but the speed of increase slows down. Example: inflation drops from 8% to 4% — this is disinflation, not deflation.') +
            H.h3('Stagflation') +
            H.p('Stagflation is a dangerous combination — high inflation plus low economic growth (stagnation) plus unemployment. It is hard to fix because steps to control inflation can slow growth further. India saw stagflation-like conditions in the 1970s.') +
            H.h2('Quick Examples') +
            tbl(
              ['Situation', 'Term'],
              [
                ['Prices fell 3% this year', 'Deflation'],
                ['Inflation was 10%, now 5% — still rising but slower', 'Disinflation'],
                ['Prices rising fast but GDP growth is near zero', 'Stagflation'],
                ['Prices rising 6% every year steadily', 'Normal Inflation']
              ]
            ),
            {
              examTip: 'Disinflation = inflation is still positive but decreasing. Deflation = negative inflation (prices actually fall). Never confuse these two!',
              dontConfuse: 'Disinflation ≠ Deflation. Disinflation means prices still rise, just slower. Deflation means prices actually fall.',
              quickRevision: [
                'Deflation = prices fall; people stop buying',
                'Disinflation = inflation rate decreases (prices still rise)',
                'Stagflation = high inflation + low growth + unemployment',
                'Deflation hurts businesses and jobs',
                'Stagflation is difficult to solve'
              ],
              examAsk: 'Difference between deflation and disinflation? / What is stagflation? / Give an example of disinflation.'
            }
          )
        },
        {
          id: 'rbi',
          title: 'Reserve Bank of India (RBI)',
          content: T(
            'Reserve Bank of India (RBI)',
            'The RBI is India\'s central bank — the banker to the government and all other banks. It controls money supply, issues currency, and keeps the financial system stable.',
            H.h2('Basic Facts') +
            tbl(
              ['Fact', 'Detail'],
              [
                ['Established', '1 April 1935 (under RBI Act, 1934)'],
                ['Nationalised', '1949 — fully owned by Government of India'],
                ['Headquarters', 'Mumbai (originally Kolkata)'],
                ['Current Governor (2024)', 'Shaktikanta Das'],
                ['Tagline', '"India\'s Central Bank"']
              ]
            ) +
            H.h2('Main Functions of RBI') +
            tbl(
              ['Function', 'What RBI Does'],
              [
                ['Issue Currency', 'Only RBI prints and issues ₹ notes (coins by Government)'],
                ['Banker to Government', 'Manages government accounts and public debt'],
                ['Banker\'s Bank', 'All commercial banks keep accounts with RBI'],
                ['Monetary Policy', 'Controls money supply, interest rates, inflation'],
                ['Foreign Exchange', 'Manages forex reserves and exchange rate stability'],
                ['Bank Regulation', 'Licenses, supervises, and inspects all banks'],
                ['Lender of Last Resort', 'Helps banks in emergency when no one else will lend']
              ]
            ) +
            H.h2('RBI vs Commercial Banks') +
            tbl(
              ['Feature', 'RBI', 'Commercial Banks (SBI, HDFC)'],
              [
                ['Type', 'Central Bank', 'Public / Private banks'],
                ['Customers', 'Government and banks', 'General public and businesses'],
                ['Issues currency', 'Yes (notes)', 'No'],
                ['Profit motive', 'No — public service', 'Yes — earn profit']
              ]
            ) +
            H.p('RBI is managed by a <strong>Central Board of Directors</strong> appointed by the Government. The <strong>Governor</strong> is the head of RBI.'),
            {
              examTip: 'RBI was established in 1935, nationalised in 1949. HQ = Mumbai. Only RBI issues paper currency in India.',
              memoryTrick: 'RBI = Regulates Banks of India. It is the boss of all banks!',
              quickRevision: [
                'RBI = India\'s central bank; est. 1935, nationalised 1949',
                'HQ: Mumbai; Head: Governor',
                'Issues currency notes; coins by Govt',
                'Controls monetary policy and inflation',
                'Banker to government and to all banks'
              ],
              examAsk: 'When was RBI established? / What are the main functions of RBI? / Who issues currency in India? / Where is RBI headquarters?'
            }
          )
        },
        {
          id: 'monetary-policy-tools',
          title: 'Monetary Policy Tools',
          content: T(
            'Monetary Policy Tools',
            'Monetary policy is how RBI controls the amount of money in the economy and the cost of borrowing. It uses various tools to fight inflation or boost growth.',
            H.h2('Main Monetary Policy Tools') +
            tbl(
              ['Tool', 'What It Is', 'If RBI Increases It', 'If RBI Decreases It'],
              [
                ['Repo Rate', 'Rate at which RBI lends to banks', 'Loans costly → less money → inflation down', 'Loans cheap → more money → growth up'],
                ['Reverse Repo Rate', 'Rate at which RBI borrows from banks', 'Banks lend less to public', 'Banks lend more to public'],
                ['Bank Rate', 'Long-term lending rate to banks', 'Borrowing cost rises', 'Borrowing cost falls'],
                ['CRR', 'Cash Reserve Ratio — % of deposits banks must keep with RBI', 'Less money with banks → less lending', 'More money with banks → more lending'],
                ['SLR', 'Statutory Liquidity Ratio — % kept in gold/govt securities', 'Less money available for loans', 'More money available for loans'],
                ['Open Market Operations (OMO)', 'RBI buys/sells government securities', 'Sells securities → sucks money out', 'Buys securities → puts money in']
              ]
            ) +
            H.h3('Repo Rate — Most Important') +
            H.p('The <strong>Repo Rate</strong> is the most watched tool. When inflation is high, RBI raises repo rate — EMIs become costlier, people borrow less, spending drops, inflation cools. When growth is slow, RBI cuts repo rate to encourage borrowing and spending.') +
            H.h2('Monetary Policy Committee (MPC)') +
            tbl(
              ['Feature', 'Detail'],
              [
                ['Formed under', 'RBI Act amendment, 2016'],
                ['Members', '6 members — 3 from RBI + 3 appointed by Government'],
                ['Chairperson', 'RBI Governor'],
                ['Meets', 'Every 2 months (bi-monthly)'],
                ['Decision', 'By majority vote'],
                ['Target', 'CPI inflation at 4% (±2%)']
              ]
            ) +
            H.p('Before 2016, only the RBI Governor decided rates. Now the MPC decides democratically.'),
            {
              examTip: 'Repo Rate is the star of monetary policy questions. Increase repo rate = control inflation. Decrease = boost growth.',
              dontConfuse: 'Repo Rate = RBI lends TO banks. Reverse Repo = RBI borrows FROM banks. They move in the same direction but mean opposite flows.',
              quickRevision: [
                'Repo Rate = RBI lending rate to banks (key tool)',
                'CRR = cash banks must keep with RBI',
                'SLR = deposits in gold/govt bonds',
                'OMO = RBI buys/sells govt securities',
                'MPC decides rates; targets 4% inflation'
              ],
              examAsk: 'What is repo rate? / What happens when RBI increases repo rate? / What is CRR and SLR? / What is MPC?'
            }
          )
        },
        {
          id: 'banking-system',
          title: 'Banking System in India',
          content: T(
            'Banking System in India',
            'Banks accept deposits from people and lend money to those who need it. India has many types of banks serving different purposes — from village accounts to big business loans.',
            H.h2('Types of Banks in India') +
            tbl(
              ['Type', 'Examples', 'Main Role'],
              [
                ['Central Bank', 'RBI', 'Controls entire banking system'],
                ['Commercial Banks', 'SBI, HDFC, ICICI, PNB', 'Accept deposits, give loans to public'],
                ['Cooperative Banks', 'State Co-op Banks, Urban Co-op Banks', 'Serve farmers and local communities'],
                ['Regional Rural Banks (RRBs)', 'Punjab Gramin Bank, etc.', 'Banking in rural areas; sponsored by commercial banks'],
                ['Payment Banks', 'Paytm Payments Bank, Airtel Payments Bank', 'Small deposits (max ₹2 lakh); no loans'],
                ['Small Finance Banks', 'AU Small Finance Bank, Ujjivan', 'Banking for small businesses and poor sections'],
                ['Development Banks', 'NABARD, SIDBI, EXIM Bank', 'Long-term finance for specific sectors']
              ]
            ) +
            H.h2('Commercial Banks — Two Types') +
            tbl(
              ['Type', 'Ownership', 'Examples'],
              [
                ['Public Sector Banks', 'Majority owned by Government', 'SBI, PNB, Bank of Baroda, Canara Bank'],
                ['Private Sector Banks', 'Owned by private companies/individuals', 'HDFC, ICICI, Axis, Kotak Mahindra']
              ]
            ) +
            H.h2('Important Banking Terms') +
            tbl(
              ['Term', 'Meaning'],
              [
                ['Savings Account', 'Deposit money, earn small interest, withdraw anytime'],
                ['Fixed Deposit (FD)', 'Lock money for fixed period, earn higher interest'],
                ['Current Account', 'For businesses — no interest, unlimited transactions'],
                ['NPA', 'Non-Performing Asset — loan not repaid for 90+ days; bad loan'],
                ['NPAs hurt banks', 'Too many NPAs weaken a bank\'s health']
              ]
            ) +
            H.h3('Bank Nationalisation') +
            H.p('In <strong>1969</strong>, 14 major private banks were nationalised. In <strong>1980</strong>, 6 more were nationalised. This was done to spread banking to rural areas and support poor farmers. Many have been merged now — India has fewer but stronger public banks.'),
            {
              examTip: '14 banks nationalised in 1969, 6 more in 1980. SBI is the largest public sector bank. Payment Banks cannot give loans.',
              quickRevision: [
                'RBI = central bank; commercial banks serve public',
                'Public sector banks = govt owned (SBI, PNB)',
                'Private sector banks = HDFC, ICICI, Axis',
                'RRBs serve rural areas; Payment Banks take deposits only',
                'NPA = bad loan not repaid for 90+ days'
              ],
              examAsk: 'Name types of banks in India. / When were banks nationalised? / What is NPA? / Difference between public and private sector banks?'
            }
          )
        },
        {
          id: 'development-banks',
          title: 'Development Banks & Financial Institutions',
          content: T(
            'Development Banks & Financial Institutions',
            'Development banks provide long-term loans for big projects that commercial banks avoid — like building dams, factories, or helping farmers. They support national development goals.',
            H.h2('Major Development Financial Institutions') +
            tbl(
              ['Institution', 'Full Form', 'Established', 'Main Role'],
              [
                ['NABARD', 'National Bank for Agriculture and Rural Development', '1982', 'Credit for agriculture and rural development'],
                ['SIDBI', 'Small Industries Development Bank of India', '1990', 'Finance for MSMEs (small industries)'],
                ['NHB', 'National Housing Bank', '1988', 'Housing finance and regulation of housing loans'],
                ['EXIM Bank', 'Export-Import Bank of India', '1982', 'Finance for export and import trade'],
                ['IFCI', 'Industrial Finance Corporation of India', '1948', 'Long-term industrial finance (oldest DFI)'],
                ['IDBI', 'Industrial Development Bank of India', '1964', 'Industrial development (now a commercial bank)']
              ]
            ) +
            H.h3('NABARD — Very Important for Exams') +
            H.p('NABARD is the apex (top) body for rural credit. It supports cooperative banks and RRBs. It implements government schemes like Kisan Credit Card. RBI contributed initial capital; now fully owned by Government.') +
            H.h3('SIDBI') +
            H.p('SIDBI helps Micro, Small and Medium Enterprises (MSMEs). These small businesses create millions of jobs. SIDBI gives them loans when commercial banks hesitate.') +
            H.h2('Development Bank vs Commercial Bank') +
            tbl(
              ['Feature', 'Development Bank', 'Commercial Bank'],
              [
                ['Purpose', 'Long-term development projects', 'Day-to-day banking for public'],
                ['Loans', 'Long-term (years)', 'Short to medium term'],
                ['Deposits from public', 'Generally no', 'Yes — main source of funds'],
                ['Examples', 'NABARD, EXIM Bank', 'SBI, HDFC Bank']
              ]
            ) +
            H.h2('Other Important Bodies') +
            tbl(
              ['Body', 'Role'],
              [
                ['SEBI', 'Regulates stock market and protects investors'],
                ['IRDAI', 'Regulates insurance companies'],
                ['PFRDA', 'Regulates pension funds (NPS)']
              ]
            ),
            {
              examTip: 'NABARD = agriculture & rural. SIDBI = small industries. EXIM = export-import. IFCI = oldest development financial institution (1948).',
              memoryTrick: 'NABARD = National Agriculture Bank for Rural Development. Think "farmers and villages".',
              quickRevision: [
                'NABARD (1982) = apex rural & agriculture credit bank',
                'SIDBI (1990) = finance for MSMEs',
                'EXIM Bank = export-import trade finance',
                'NHB = housing finance regulator',
                'Development banks give long-term loans, not daily banking'
              ],
              examAsk: 'What is NABARD and its role? / Full form of SIDBI? / Difference between development bank and commercial bank? / Which is the oldest DFI in India?'
            }
          )
        },
        {
          id: 'financial-markets',
          title: 'Financial Markets',
          content: T(
            'Financial Markets',
            'Financial markets are places (physical or electronic) where people buy and sell financial assets like shares, bonds, and commodities. They help companies raise money and investors earn returns.',
            H.h2('Types of Financial Markets') +
            tbl(
              ['Market', 'What Is Traded', 'Duration', 'Examples in India'],
              [
                ['Money Market', 'Short-term funds (up to 1 year)', 'Short-term', 'Treasury Bills, Commercial Paper, Call Money'],
                ['Capital Market', 'Long-term funds (more than 1 year)', 'Long-term', 'Shares, Bonds, Debentures'],
                ['Primary Market', 'New securities issued first time', 'New issue', 'IPO — company first sells shares to public'],
                ['Secondary Market', 'Already issued securities traded', 'Trading', 'Stock Exchange — NSE, BSE']
              ]
            ) +
            H.h2('Stock Exchanges of India') +
            tbl(
              ['Exchange', 'Full Form', 'Established', 'Index'],
              [
                ['BSE', 'Bombay Stock Exchange', '1875 (Asia\'s oldest)', 'SENSEX (30 big companies)'],
                ['NSE', 'National Stock Exchange', '1992', 'NIFTY 50 (50 big companies)']
              ]
            ) +
            H.p('Both BSE and NSE are located in Mumbai. <strong>SEBI (Securities and Exchange Board of India)</strong> regulates all stock market activity since 1992.') +
            H.h2('Key Instruments') +
            tbl(
              ['Instrument', 'Meaning'],
              [
                ['Shares / Equity', 'Ownership in a company — you become part-owner'],
                ['Bonds / Debentures', 'Loan to company/government — fixed interest paid'],
                ['Mutual Fund', 'Pool of money from many investors, managed by experts'],
                ['Treasury Bill (T-Bill)', 'Short-term government borrowing (91, 182, 364 days)'],
                ['Commercial Paper', 'Short-term borrowing by companies']
              ]
            ) +
            H.h3('Bull vs Bear Market') +
            H.p('A <strong>Bull Market</strong> means share prices are rising — investors are confident. A <strong>Bear Market</strong> means prices are falling — investors are fearful.'),
            {
              examTip: 'BSE = oldest (1875), SENSEX. NSE = 1992, NIFTY 50. SEBI regulates capital market. Money market = short term; Capital market = long term.',
              dontConfuse: 'Primary Market = NEW shares (IPO). Secondary Market = OLD shares traded between investors (stock exchange).',
              quickRevision: [
                'Money Market = short-term (up to 1 year)',
                'Capital Market = long-term (shares, bonds)',
                'BSE (1875) = SENSEX; NSE (1992) = NIFTY 50',
                'SEBI regulates stock markets since 1992',
                'Primary = new issue; Secondary = trading of existing shares'
              ],
              examAsk: 'Difference between money market and capital market? / What is SENSEX and NIFTY? / What is SEBI? / Difference between primary and secondary market?'
            }
          )
        },
        {
          id: 'mutual-funds-ipo-fpo',
          title: 'Mutual Funds, IPO & FPO',
          content: T(
            'Mutual Funds, IPO & FPO',
            'These are ways for companies to raise money and for common people to invest. Understanding them helps in banking and SSC exams.',
            H.h2('Mutual Funds') +
            H.p('A mutual fund collects money from thousands of investors and invests it in shares, bonds, or gold. A professional fund manager decides where to invest. Even small investors can start with ₹500.') +
            tbl(
              ['Type of Mutual Fund', 'Invests In', 'Risk Level'],
              [
                ['Equity Fund', 'Shares of companies', 'High risk, high return potential'],
                ['Debt Fund', 'Bonds and fixed income', 'Low risk, moderate return'],
                ['Hybrid Fund', 'Mix of shares and bonds', 'Medium risk'],
                ['Index Fund', 'Tracks a market index (like NIFTY 50)', 'Moderate — follows market'],
                ['ELSS', 'Equity fund with tax saving (80C)', 'High risk, 3-year lock-in']
              ]
            ) +
            H.p('Mutual funds are regulated by <strong>SEBI</strong>. <strong>AMFI (Association of Mutual Funds in India)</strong> is the industry body.') +
            H.h2('IPO — Initial Public Offering') +
            H.p('When a private company sells its shares to the public for the <strong>first time</strong>, it is called an IPO. The company becomes listed on stock exchange (BSE/NSE). Example: when Zomato or Paytm first sold shares to public.') +
            tbl(
              ['Feature', 'IPO', 'FPO'],
              [
                ['Full Form', 'Initial Public Offering', 'Follow-on Public Offering'],
                ['When', 'First time company sells shares to public', 'Already listed company sells MORE shares'],
                ['Purpose', 'Raise fresh capital; become public company', 'Raise additional funds'],
                ['Example', 'Company\'s first share sale ever', 'SBI selling more shares after already listed']
              ]
            ) +
            H.h2('Other Related Terms') +
            tbl(
              ['Term', 'Meaning'],
              [
                ['Demat Account', 'Electronic account to hold shares (no paper certificates)'],
                ['Trading Account', 'Account used to buy and sell shares'],
                ['NAV', 'Net Asset Value — price of one mutual fund unit'],
                ['SIP', 'Systematic Investment Plan — invest fixed amount monthly'],
                ['Listing', 'Getting shares traded on stock exchange (BSE/NSE)']
              ]
            ),
            {
              examTip: 'IPO = first time share sale. FPO = additional share sale by already listed company. Mutual funds regulated by SEBI.',
              dontConfuse: 'IPO vs FPO: IPO is the FIRST public sale. FPO is when the same company sells shares again later.',
              quickRevision: [
                'Mutual Fund = pooled investment managed by experts',
                'Equity MF = shares; Debt MF = bonds',
                'IPO = first public share sale; FPO = further share sale',
                'SEBI regulates mutual funds and stock market',
                'SIP = invest small fixed amount every month'
              ],
              examAsk: 'What is a mutual fund? / Difference between IPO and FPO? / What is NAV? / What is SIP?'
            }
          )
        }
      ]
    },
    {
      id: 'public-finance',
      name: 'Public Finance',
      topics: [
        {
          id: 'union-budget',
          title: 'Union Budget',
          content: T(
            'Union Budget',
            'The Union Budget is the annual financial plan of the Government of India. It shows how much money the government expects to earn and how it plans to spend it in the coming year.',
            H.h2('Key Facts About Union Budget') +
            tbl(
              ['Fact', 'Detail'],
              [
                ['Presented by', 'Union Finance Minister'],
                ['When', 'Every year (usually 1 February since 2017)'],
                ['Approved by', 'Parliament (Lok Sabha + Rajya Sabha)'],
                ['Covers', '1 April to 31 March (financial year)'],
                ['Constitutional basis', 'Article 112 — Annual Financial Statement']
              ]
            ) +
            H.h2('Two Parts of Budget') +
            tbl(
              ['Part', 'Content'],
              [
                ['Revenue Budget', 'Day-to-day income and spending (salaries, subsidies, interest)'],
                ['Capital Budget', 'Long-term spending (roads, railways, buildings) and loans']
              ]
            ) +
            H.h2('Budget Documents') +
            tbl(
              ['Document', 'What It Contains'],
              [
                ['Annual Financial Statement', 'Estimated receipts and expenditure of government'],
                ['Finance Bill', 'Proposed changes in taxes'],
                ['Demand for Grants', 'Ministry-wise allocation of funds'],
                ['Economic Survey', 'Review of economy (presented one day before budget)'],
                ['Appropriation Bill', 'Parliament\'s approval to withdraw money from treasury']
              ]
            ) +
            H.h3('Important Terms') +
            tbl(
              ['Term', 'Meaning'],
              [
                ['Budget Estimates (BE)', 'Planned income/expenditure for the year'],
                ['Revised Estimates (RE)', 'Updated figures mid-year'],
                ['Actuals', 'Real money spent/earned at year end'],
                ['Plan Expenditure', 'Spending on development projects (now merged)'],
                ['Non-Plan Expenditure', 'Regular spending like salaries, defence, interest']
              ]
            ) +
            H.p('Since 2017, Railway Budget is merged with Union Budget. Earlier it was presented separately.'),
            {
              examTip: 'Budget presented on 1 Feb by Finance Minister. Article 112 = Annual Financial Statement. Economic Survey comes one day before.',
              quickRevision: [
                'Union Budget = annual financial plan (April to March)',
                'Presented by Finance Minister; approved by Parliament',
                'Revenue Budget = daily expenses; Capital Budget = long-term projects',
                'Article 112 = Annual Financial Statement',
                'Economic Survey presented one day before budget'
              ],
              examAsk: 'Who presents the Union Budget? / What is Article 112? / Difference between revenue and capital budget? / When is the budget presented?'
            }
          )
        },
        {
          id: 'deficits',
          title: 'Budget Deficits',
          content: T(
            'Budget Deficits',
            'When the government spends more money than it earns, the gap is called a deficit. India tracks several types of deficits to measure financial health.',
            H.h2('Types of Deficits') +
            tbl(
              ['Deficit', 'Formula', 'Simple Meaning'],
              [
                ['Fiscal Deficit', 'Total Expenditure − Total Receipts (excluding borrowings)', 'How much govt must borrow to meet expenses'],
                ['Revenue Deficit', 'Revenue Expenditure − Revenue Receipts', 'Govt spending on daily needs exceeds daily income'],
                ['Primary Deficit', 'Fiscal Deficit − Interest payments on old loans', 'Borrowing needed excluding interest on past debt'],
                ['Budget Deficit', 'Total Expenditure − Total Receipts', 'Overall gap between spending and earning']
              ]
            ) +
            H.h3('Fiscal Deficit — Most Important') +
            H.p('Fiscal deficit tells us how much the government needs to borrow. High fiscal deficit means heavy borrowing, which can lead to more debt and inflation. India\'s fiscal deficit target is usually around 3% of GDP (may vary in special years).') +
            H.h2('Example (Simple Numbers)') +
            tbl(
              ['Item', 'Amount (₹ crore)'],
              [
                ['Total Expenditure', '100'],
                ['Total Receipts (without borrowing)', '70'],
                ['Fiscal Deficit', '30 (must borrow)'],
                ['Interest on old loans', '10'],
                ['Primary Deficit', '20 (30 − 10)']
              ]
            ) +
            H.h2('How Does Government Finance Deficit?') +
            H.ul([
              'Borrowing from public (government bonds, treasury bills)',
              'Borrowing from RBI (deficit financing — printing money)',
              'Foreign loans from IMF, World Bank, or foreign governments',
              'Disinvestment — selling shares of government companies'
            ]) +
            H.p('High deficits are not always bad — during COVID-19, governments worldwide increased spending to help people, causing higher deficits.'),
            {
              examTip: 'Fiscal Deficit = Total Exp − Total Receipts (excluding borrowings). Primary Deficit = Fiscal Deficit − Interest payments. Know the formulas!',
              dontConfuse: 'Revenue Deficit = daily income vs daily spending gap. Fiscal Deficit = total borrowing needed including capital spending.',
              quickRevision: [
                'Fiscal Deficit = expenditure minus receipts (excl. borrowing)',
                'Revenue Deficit = revenue spending exceeds revenue income',
                'Primary Deficit = fiscal deficit minus interest payments',
                'High fiscal deficit = more borrowing = more debt',
                'Govt finances deficit through bonds, RBI, foreign loans'
              ],
              examAsk: 'What is fiscal deficit? / Difference between fiscal and revenue deficit? / What is primary deficit? / How does government finance deficit?'
            }
          )
        },
        {
          id: 'taxation-gst',
          title: 'Taxation & GST',
          content: T(
            'Taxation & GST',
            'Taxes are the main source of government income. They are compulsory payments made by citizens and businesses to fund public services like roads, schools, and defence.',
            H.h2('Types of Taxes') +
            tbl(
              ['Category', 'Based On', 'Examples'],
              [
                ['Direct Tax', 'Paid directly to government on income/wealth', 'Income Tax, Corporate Tax, Wealth Tax (abolished)'],
                ['Indirect Tax', 'Paid on goods and services; included in price', 'GST, Customs Duty, Excise (now mostly in GST)']
              ]
            ) +
            H.h2('Direct Taxes — CBDT') +
            tbl(
              ['Tax', 'Who Pays', 'Collected By'],
              [
                ['Income Tax', 'Individuals and companies on earnings', 'CBDT (Central Board of Direct Taxes)'],
                ['Corporate Tax', 'Companies on profits', 'CBDT'],
                ['Securities Transaction Tax (STT)', 'On share market transactions', 'CBDT']
              ]
            ) +
            H.h2('GST — Goods and Services Tax') +
            H.p('GST is India\'s biggest tax reform, launched on <strong>1 July 2017</strong>. It replaced many indirect taxes (VAT, service tax, excise) with one unified tax. Slogan: <strong>"One Nation, One Tax"</strong>.') +
            tbl(
              ['Feature', 'Detail'],
              [
                ['Type', 'Indirect tax on supply of goods and services'],
                ['Structure', 'Dual GST — Central GST (CGST) + State GST (SGST)'],
                ['Inter-state', 'Integrated GST (IGST)'],
                ['Council', 'GST Council — chaired by Union Finance Minister'],
                ['Body', 'CBIC (Central Board of Indirect Taxes and Customs)']
              ]
            ) +
            H.h2('GST Rate Slabs') +
            tbl(
              ['Rate', 'Items'],
              [
                ['0%', 'Essential items — fresh milk, bread, salt, books'],
                ['5%', 'Common use — tea, coffee, spices, medicines'],
                ['12%', 'Processed food, computers, mobile phones'],
                ['18%', 'Most goods and services — soap, telecom, restaurants'],
                ['28%', 'Luxury items — cars, AC, tobacco, aerated drinks']
              ]
            ) +
            H.h3('Other Indirect Taxes') +
            H.ul([
              'Customs Duty — on imported goods (at ports/airports)',
              'Stamp Duty — on property documents (state subject)'
            ]),
            {
              examTip: 'GST launched 1 July 2017. Dual GST = CGST + SGST. GST Council chaired by Finance Minister. CBDT = direct taxes; CBIC = indirect taxes.',
              memoryTrick: 'Direct Tax = Directly from your pocket (income tax). Indirect Tax = Hidden in price (GST).',
              quickRevision: [
                'Direct tax = on income (Income Tax, Corporate Tax)',
                'Indirect tax = on goods/services (GST, Customs)',
                'GST started 1 July 2017 — One Nation One Tax',
                'CGST + SGST (within state); IGST (between states)',
                'GST Council chaired by Union Finance Minister'
              ],
              examAsk: 'When was GST introduced? / Difference between direct and indirect tax? / What is GST Council? / Name GST rate slabs.'
            }
          )
        },
        {
          id: 'fiscal-policy',
          title: 'Fiscal Policy',
          content: T(
            'Fiscal Policy',
            'Fiscal policy is how the government uses its spending and taxes to influence the economy — to boost growth, control inflation, or reduce unemployment.',
            H.h2('Tools of Fiscal Policy') +
            tbl(
              ['Tool', 'Action', 'Effect on Economy'],
              [
                ['Government Spending', 'Increase spending on roads, health, education', 'More jobs, more demand, growth rises'],
                ['Taxation', 'Reduce taxes', 'People have more money to spend → demand rises'],
                ['Government Spending', 'Decrease spending', 'Reduces demand → helps control inflation'],
                ['Taxation', 'Increase taxes', 'Less money with people → spending falls → inflation cools']
              ]
            ) +
            H.h2('Fiscal Policy vs Monetary Policy') +
            tbl(
              ['Feature', 'Fiscal Policy', 'Monetary Policy'],
              [
                ['Controlled by', 'Government (Finance Ministry)', 'RBI'],
                ['Tools', 'Taxes, government spending, subsidies', 'Repo rate, CRR, SLR, OMO'],
                ['Focus', 'Overall budget and public finance', 'Money supply and interest rates'],
                ['Example', 'Reduce income tax to boost spending', 'Cut repo rate to make loans cheaper']
              ]
            ) +
            H.h3('Expansionary vs Contractionary Fiscal Policy') +
            tbl(
              ['Type', 'When Used', 'Actions'],
              [
                ['Expansionary', 'During recession / slow growth', 'Increase spending, cut taxes'],
                ['Contractionary', 'During high inflation', 'Decrease spending, raise taxes']
              ]
            ) +
            H.p('During COVID-19, the Indian government used expansionary fiscal policy — free food grains (PM Garib Kalyan), increased health spending, and infrastructure push to revive the economy.'),
            {
              examTip: 'Fiscal Policy = Government (tax + spending). Monetary Policy = RBI (interest rates + money supply). Never confuse who controls what!',
              dontConfuse: 'Fiscal = Government budget decisions. Monetary = RBI and banking decisions.',
              quickRevision: [
                'Fiscal policy = govt uses spending and taxes',
                'Expansionary = spend more, tax less (boost growth)',
                'Contractionary = spend less, tax more (control inflation)',
                'Fiscal = Government; Monetary = RBI',
                'Finance Ministry handles fiscal policy'
              ],
              examAsk: 'What is fiscal policy? / Difference between fiscal and monetary policy? / What is expansionary fiscal policy?'
            }
          )
        },
        {
          id: 'five-year-plans',
          title: 'Five Year Plans',
          content: T(
            'Five Year Plans',
            'Five Year Plans were long-term development roadmaps for India\'s economy. From 1951 to 2017, twelve plans guided how the country should grow in agriculture, industry, and social welfare.',
            H.h2('Overview') +
            tbl(
              ['Fact', 'Detail'],
              [
                ['Inspired by', 'Soviet Union (USSR) model'],
                ['First Plan', '1951–56 (started by Jawaharlal Nehru)'],
                ['Last Plan', '12th Five Year Plan (2012–2017)'],
                ['Prepared by', 'Planning Commission (1950–2014)'],
                ['Replaced by', 'NITI Aayog (from 1 January 2015)']
              ]
            ) +
            H.h2('All Five Year Plans at a Glance') +
            tbl(
              ['Plan', 'Period', 'Focus / Highlight'],
              [
                ['1st Plan', '1951–56', 'Agriculture — dams, irrigation (PC Mahalanobis not yet)'],
                ['2nd Plan', '1956–61', 'Industrialisation — steel plants, heavy industry (Mahalanobis model)'],
                ['3rd Plan', '1961–66', 'Self-reliance — cut short by India-Pakistan war'],
                ['Plan Holidays', '1966–69', 'No plan — drought, war, currency devaluation'],
                ['4th Plan', '1969–74', '"Garibi Hatao" — reduce poverty'],
                ['5th Plan', '1974–79', 'Poverty removal, employment (DD Dhar)'],
                ['Rolling Plan', '1978–80', 'Janata Party — annual plans within 5-year frame'],
                ['6th Plan', '1980–85', 'Modernisation, technology, poverty removal'],
                ['7th Plan', '1985–90', 'Food, work, productivity — Rajiv Gandhi era'],
                ['8th Plan', '1992–97', 'Liberalisation after 1991 reforms — growth focus'],
                ['9th Plan', '1997–2002', '"Growth with Social Justice and Equality"'],
                ['10th Plan', '2002–07', '8% growth target — infrastructure push'],
                ['11th Plan', '2007–12', '"Towards Faster and More Inclusive Growth"'],
                ['12th Plan', '2012–17', '"Faster, Sustainable, More Inclusive Growth"']
              ]
            ) +
            H.p('The <strong>Planning Commission</strong> was set up in March 1950. Prime Minister was its Chairperson. It allocated resources to states and monitored plan progress.'),
            {
              examTip: 'First Plan = 1951-56 (agriculture). 2nd Plan = industrialisation (Mahalanobis). 12th Plan ended 2017. Planning Commission replaced by NITI Aayog in 2015.',
              memoryTrick: 'Plan 1 = Farms (agriculture). Plan 2 = Factories (industry). Plan 8 = Reforms (1991 liberalisation).',
              quickRevision: [
                'First Five Year Plan: 1951–56 (agriculture focus)',
                'Second Plan: industrialisation (PC Mahalanobis model)',
                '12th Plan: 2012–17 (last plan)',
                'Planning Commission formed 1950; PM was chairperson',
                'Replaced by NITI Aayog on 1 January 2015'
              ],
              examAsk: 'When was the First Five Year Plan started? / What was the focus of the Second Plan? / When did Five Year Plans end? / What replaced Planning Commission?'
            }
          )
        },
        {
          id: 'niti-aayog',
          title: 'NITI Aayog',
          content: T(
            'NITI Aayog',
            'NITI Aayog replaced the Planning Commission in 2015. It is a think tank that advises the government on policy, development, and cooperative federalism — but it does not allocate funds to states.',
            H.h2('Basic Facts') +
            tbl(
              ['Fact', 'Detail'],
              [
                ['Full Form', 'National Institution for Transforming India'],
                ['Formed', '1 January 2015'],
                ['Replaced', 'Planning Commission (1950–2014)'],
                ['Announced by', 'PM Narendra Modi'],
                ['Headquarters', 'New Delhi'],
                ['Chairperson', 'Prime Minister of India'],
                ['CEO', 'Appointed by PM (CEO manages daily work)']
              ]
            ) +
            H.h2('NITI Aayog vs Planning Commission') +
            tbl(
              ['Feature', 'Planning Commission', 'NITI Aayog'],
              [
                ['Nature', 'Powerful body that allocated funds', 'Advisory think tank — no fund allocation'],
                ['States\' role', 'Top-down — Centre decided for states', 'Bottom-up — states involved in planning'],
                ['Constitution', 'Extra-constitutional (not in Constitution)', 'Extra-constitutional (not in Constitution)'],
                ['Binding power', 'Decisions were binding on ministries', 'Recommendations only — not binding'],
                ['Focus', 'Five Year Plans', 'Policy reform, innovation, competitive federalism']
              ]
            ) +
            H.h2('Key Objectives') +
            H.ul([
              'Cooperative Federalism — Centre and states plan together',
              'Competitive Federalism — states compete to perform better (rankings like SDG Index)',
              'Policy formulation on health, education, agriculture, infrastructure',
              'Monitoring and evaluation of government programmes',
              'Think tank for innovation — Atal Innovation Mission (AIM)'
            ]) +
            H.h3('Important Initiatives by NITI Aayog') +
            tbl(
              ['Initiative', 'Purpose'],
              [
                ['Aspirational Districts Programme', 'Transform 112 poorest districts'],
                ['SDG India Index', 'Rank states on Sustainable Development Goals'],
                ['Atal Innovation Mission', 'Promote innovation and startups in schools/colleges'],
                ['National Multidimensional Poverty Index', 'Measure poverty beyond just income']
              ]
            ),
            {
              examTip: 'NITI Aayog formed 1 Jan 2015, replaced Planning Commission. PM is Chairperson. It does NOT allocate funds — only advises.',
              dontConfuse: 'NITI Aayog ≠ Planning Commission. NITI only recommends; Planning Commission used to distribute money to states.',
              quickRevision: [
                'NITI Aayog = National Institution for Transforming India',
                'Formed 1 January 2015; replaced Planning Commission',
                'PM = Chairperson; think tank, not fund allocator',
                'Focus: cooperative federalism, policy advice',
                'Atal Innovation Mission under NITI Aayog'
              ],
              examAsk: 'What is NITI Aayog? / When was it formed? / Difference between NITI Aayog and Planning Commission? / Who is the chairperson?'
            }
          )
        }
      ]
    },
    {
      id: 'social-issues',
      name: 'Social Issues',
      topics: [
        {
          id: 'poverty',
          title: 'Poverty in India',
          content: T(
            'Poverty in India',
            'Poverty means not having enough money to meet basic needs like food, clothing, shelter, education, and healthcare. India has worked for decades to reduce poverty through various programmes.',
            H.h2('Types of Poverty') +
            tbl(
              ['Type', 'Meaning'],
              [
                ['Absolute Poverty', 'Income too low to afford basic minimum needs (food, shelter)'],
                ['Relative Poverty', 'Poor compared to others in society — inequality'],
                ['Chronic Poverty', 'Long-term, generation after generation'],
                ['Transient Poverty', 'Temporary — due to drought, job loss, illness']
              ]
            ) +
            H.h2('Poverty Line in India') +
            H.p('The poverty line is the minimum income needed for basic survival. The <strong>Planning Commission / NITI Aayog</strong> and <strong>Rangarajan Committee / Tendulkar Committee</strong> have set different criteria based on calorie intake and spending.') +
            tbl(
              ['Committee', 'Key Point'],
              [
                ['Lakdawala Committee (1993)', 'Based on calorie intake — 2400 rural, 2100 urban'],
                ['Tendulkar Committee (2009)', 'Included health and education spending; poverty rate revised'],
                ['Rangarajan Committee (2014)', 'Higher poverty line estimate than Tendulkar']
              ]
            ) +
            H.h2('Major Anti-Poverty Programmes') +
            tbl(
              ['Programme', 'Purpose'],
              [
                ['MGNREGA (2005)', '100 days guaranteed wage employment in rural areas'],
                ['PM Jan Dhan Yojana', 'Bank accounts for poor — financial inclusion'],
                ['PM Garib Kalyan Anna Yojana', 'Free food grains during COVID and beyond'],
                ['National Food Security Act (2013)', 'Subsidised food grains to 75% rural, 50% urban population'],
                ['Deendayal Antyodaya Yojana', 'Self-help groups (SHGs) for women — livelihood support']
              ]
            ) +
            H.h3('Multidimensional Poverty Index (MPI)') +
            H.p('MPI measures poverty not just by income but also by health, education, and living standards (electricity, water, sanitation). NITI Aayog publishes India\'s MPI. India has significantly reduced MPI poverty in recent years.'),
            {
              examTip: 'MGNREGA = 100 days rural employment. National Food Security Act = 2013. Tendulkar Committee revised poverty line. NITI Aayog publishes MPI.',
              quickRevision: [
                'Absolute poverty = cannot afford basic needs',
                'Poverty line = minimum income for survival',
                'MGNREGA = 100 days guaranteed rural work',
                'National Food Security Act 2013 = subsidised grains',
                'MPI measures poverty beyond income (health, education)'
              ],
              examAsk: 'What is poverty line? / What is MGNREGA? / Difference between absolute and relative poverty? / What is Multidimensional Poverty Index?'
            }
          )
        },
        {
          id: 'unemployment',
          title: 'Unemployment',
          content: T(
            'Unemployment',
            'Unemployment means people who are willing and able to work but cannot find jobs. It is a major economic and social problem, especially for young people in India.',
            H.h2('Types of Unemployment in India') +
            tbl(
              ['Type', 'Meaning', 'Found In'],
              [
                ['Structural', 'Skills don\'t match available jobs', 'Industries changing due to technology'],
                ['Frictional', 'Temporary — between leaving one job and finding another', 'All economies (normal)'],
                ['Cyclical', 'Due to slowdown in economy', 'During recession'],
                ['Seasonal', 'Jobs available only in certain seasons', 'Agriculture — sowing/harvesting time'],
                ['Disguised / Hidden', 'More people employed than needed — looks employed but extra workers add zero output', 'Indian agriculture — whole family works on small farm'],
                ['Educated Unemployment', 'Qualified people (graduates) cannot find suitable jobs', 'Urban India — engineers, graduates']
              ]
            ) +
            H.h3('Disguised Unemployment — Very Important') +
            H.p('In a small farm, 5 family members work but only 2 are actually needed. The extra 3 are "disguised unemployed" — they appear to work but contribute nothing extra. This is common in Indian villages.') +
            H.h2('Measuring Unemployment') +
            tbl(
              ['Survey', 'Conducted By', 'Frequency'],
              [
                ['PLFS', 'Periodic Labour Force Survey — MoSPI', 'Annual (main survey now)'],
                ['CMIE', 'Centre for Monitoring Indian Economy', 'Private body — monthly data'],
                ['Census', 'Registrar General of India', 'Every 10 years']
              ]
            ) +
            H.h2('Government Schemes for Employment') +
            tbl(
              ['Scheme', 'Purpose'],
              [
                ['MGNREGA', '100 days guaranteed work in rural areas'],
                ['Skill India Mission', 'Train youth for jobs (PMKVY — Kaushal Vikas Yojana)'],
                ['Startup India', 'Support new businesses to create jobs'],
                ['Make in India', 'Boost manufacturing to create factory jobs'],
                ['PM Employment Generation Programme (PMEGP)', 'Credit-linked subsidy for self-employment']
              ]
            ),
            {
              examTip: 'Disguised unemployment is most common in Indian agriculture. Educated unemployment = graduates without jobs. MGNREGA guarantees 100 days work.',
              dontConfuse: 'Disguised unemployment = looks employed but not needed. Seasonal unemployment = no work in off-season (farmers in summer).',
              quickRevision: [
                'Structural = skill mismatch; Cyclical = recession',
                'Disguised = extra workers in farming add no output',
                'Educated unemployment = qualified but no job',
                'Seasonal = agriculture between seasons',
                'MGNREGA + Skill India fight unemployment'
              ],
              examAsk: 'What is disguised unemployment? / Types of unemployment in India? / What is MGNREGA? / What is educated unemployment?'
            }
          )
        },
        {
          id: 'agriculture-economy',
          title: 'Agriculture & Indian Economy',
          content: T(
            'Agriculture & Indian Economy',
            'Agriculture is the backbone of India\'s economy. Most Indians depend on farming directly or indirectly, even though its share in total GDP has decreased over time.',
            H.h2('Importance of Agriculture') +
            tbl(
              ['Fact', 'Detail'],
              [
                ['Employment', 'About 45–50% of workforce depends on agriculture'],
                ['GDP share', 'About 18–20% of India\'s GDP (declining over time)'],
                ['Food security', 'Feeds 140+ crore people'],
                ['Raw materials', 'Provides cotton, sugarcane, jute for industries'],
                ['Exports', 'Tea, rice, spices, cotton earn foreign exchange']
              ]
            ) +
            H.h2('Major Crops in India') +
            tbl(
              ['Season', 'Crops', 'Sowing Time'],
              [
                ['Kharif (Monsoon)', 'Rice, maize, cotton, soybean, groundnut', 'June–July (with monsoon)'],
                ['Rabi (Winter)', 'Wheat, mustard, gram, barley, potato', 'October–December'],
                ['Zaid (Summer)', 'Watermelon, cucumber, fodder crops', 'March–June (short season)']
              ]
            ) +
            H.h2('Green Revolution') +
            H.p('The <strong>Green Revolution (1960s–70s)</strong> introduced high-yielding variety (HYV) seeds, fertilisers, and irrigation. It made India self-sufficient in food grains. <strong>M.S. Swaminathan</strong> is called the Father of Green Revolution in India. Punjab, Haryana, and western UP benefited most.') +
            H.h2('Problems in Indian Agriculture') +
            tbl(
              ['Problem', 'Explanation'],
              [
                ['Small land holdings', 'Average farm size is very small — less profit'],
                ['Dependence on monsoon', '60% of farming depends on rainfall — drought risk'],
                ['Lack of modern technology', 'Many farmers still use old methods'],
                ['Debt and suicides', 'Crop failure + money lenders → farmer distress'],
                ['Low MSP coverage', 'Not all crops get Minimum Support Price benefit']
              ]
            ) +
            H.h2('Key Agricultural Schemes') +
            tbl(
              ['Scheme', 'Purpose'],
              [
                ['PM-KISAN', '₹6,000 per year direct cash to farmers (3 instalments)'],
                ['MSP (Minimum Support Price)', 'Government guarantees minimum price for crops'],
                ['Kisan Credit Card (KCC)', 'Easy credit for farmers through banks/NABARD'],
                ['Pradhan Mantri Fasal Bima Yojana', 'Crop insurance against natural disasters'],
                ['e-NAM', 'Online trading platform for agricultural produce']
              ]
            ),
            {
              examTip: 'Green Revolution = 1960s, M.S. Swaminathan. Kharif = monsoon crops (rice). Rabi = winter crops (wheat). PM-KISAN = ₹6000/year to farmers.',
              memoryTrick: 'Kharif = K for Kommonsoon (rainy season). Rabi = R for Rab (winter/cold).',
              quickRevision: [
                'Agriculture employs ~45% but contributes ~18% GDP',
                'Kharif = monsoon crops; Rabi = winter crops',
                'Green Revolution = HYV seeds (M.S. Swaminathan)',
                'PM-KISAN = ₹6000/year to eligible farmers',
                'MSP = minimum guaranteed price for crops'
              ],
              examAsk: 'What is Green Revolution? / Difference between Kharif and Rabi crops? / What is PM-KISAN? / What is MSP?'
            }
          )
        },
        {
          id: 'land-reforms',
          title: 'Land Reforms in India',
          content: T(
            'Land Reforms in India',
            'Land reforms are government actions to change how land is owned and used — to reduce inequality, help poor farmers, and improve agricultural production. They were a major goal after Independence.',
            H.h2('Why Land Reforms Were Needed') +
            H.p('Before Independence, zamindars (landlords) owned huge lands while actual farmers (tenants) worked hard but kept very little income. Land was unequally distributed. Reforms aimed to give land to the tiller (person who actually farms).') +
            H.h2('Main Components of Land Reforms') +
            tbl(
              ['Reform', 'What It Did'],
              [
                ['Abolition of Zamindari (1950s)', 'Removed middlemen zamindars; state became owner, tenants got rights'],
                ['Tenancy Reforms', 'Protected tenant farmers — fair rent, security from eviction'],
                ['Land Ceiling', 'Fixed maximum land one person can own; excess land taken and redistributed to landless'],
                ['Consolidation of Holdings', 'Scattered small plots merged into one bigger farm'],
                ['Cooperative Farming', 'Farmers pool land and work together for better results']
              ]
            ) +
            H.h2('Results of Land Reforms') +
            tbl(
              ['Success', 'Failure / Limitation'],
              [
                ['Zamindari system abolished in most states', 'Ceiling laws evaded using benami (fake name) land'],
                ['Tenants got some protection', 'Poor implementation in many states'],
                ['Some landless got land', 'Land records were outdated and disputed'],
                ['Reduced feudal exploitation', 'Political pressure slowed redistribution']
              ]
            ) +
            H.h2('Important Terms') +
            tbl(
              ['Term', 'Meaning'],
              [
                ['Zamindar', 'Colonial-era landlord who collected rent from peasants'],
                ['Ryot', 'Actual cultivator / peasant farmer'],
                ['Land Ceiling', 'Legal limit on how much land one person can hold'],
                ['Benami Transaction', 'Land held in someone else\'s name to hide ownership'],
                ['Bhoodan Movement', 'Vinoba Bhave asked rich landowners to donate land to poor (1951)']
              ]
            ) +
            H.p('The <strong>Bhoodan Movement (1951)</strong> led by <strong>Vinoba Bhave</strong> was a voluntary land donation movement. <strong>Gramdan</strong> was its extension where entire villages donated land for community use.'),
            {
              examTip: 'Zamindari abolished after Independence. Land Ceiling = max land limit. Bhoodan Movement = Vinoba Bhave (1951). Benami = land in fake names to avoid ceiling.',
              quickRevision: [
                'Land reforms = fair land distribution after 1947',
                'Zamindari abolished — zamindars removed as middlemen',
                'Land Ceiling = limit on maximum land ownership',
                'Bhoodan Movement (1951) — Vinoba Bhave',
                'Consolidation = merge scattered plots into one farm'
              ],
              examAsk: 'What were land reforms? / What is zamindari abolition? / What is land ceiling? / Who started Bhoodan Movement?'
            }
          )
        }
      ]
    },
    {
      id: 'external-sector',
      name: 'External Sector',
      topics: [
        {
          id: 'balance-of-payments',
          title: 'Balance of Payments (BoP)',
          content: T(
            'Balance of Payments (BoP)',
            'Balance of Payments is a record of all money transactions between India and the rest of the world in one year. It includes trade, investments, loans, and remittances.',
            H.h2('Two Main Parts of BoP') +
            tbl(
              ['Account', 'What It Records', 'Examples'],
              [
                ['Current Account', 'Day-to-day transactions — trade in goods and services', 'Export/import of goods, software services, tourism, remittances'],
                ['Capital Account', 'Long-term investments and loans', 'FDI, FII, external borrowing, NRI deposits']
              ]
            ) +
            H.h2('Current Account Components') +
            tbl(
              ['Component', 'Meaning'],
              [
                ['Visible Trade (Merchandise)', 'Import and export of physical goods (oil, gems, rice)'],
                ['Invisible Trade (Services)', 'Software exports, tourism, shipping, insurance'],
                ['Income', 'Profits, dividends, interest earned abroad or paid to foreigners'],
                ['Transfers', 'Remittances (NRIs sending money home), foreign aid, gifts']
              ]
            ) +
            H.h3('Trade Deficit') +
            H.p('When imports exceed exports, there is a <strong>trade deficit</strong>. India usually has a trade deficit because we import a lot of oil, gold, and electronics. Software and remittance income partly balance this.') +
            H.h2('BoP Surplus vs Deficit') +
            tbl(
              ['Situation', 'Meaning', 'Effect'],
              [
                ['BoP Surplus', 'More foreign currency coming in than going out', 'Forex reserves rise'],
                ['BoP Deficit', 'More foreign currency going out than coming in', 'Forex reserves fall; may need loans']
              ]
            ) +
            H.p('India\'s <strong>forex reserves</strong> are managed by RBI. High reserves (400+ billion dollars) give confidence that India can pay for imports and handle emergencies.'),
            {
              examTip: 'Current Account = trade + services + remittances. Capital Account = FDI + FII + loans. Trade Deficit = imports > exports.',
              dontConfuse: 'Current Account = everyday transactions. Capital Account = investment and borrowing flows.',
              quickRevision: [
                'BoP = record of all India-foreign money transactions',
                'Current Account = goods, services, remittances',
                'Capital Account = FDI, FII, loans, NRI deposits',
                'Trade deficit = imports exceed exports',
                'Forex reserves managed by RBI'
              ],
              examAsk: 'What is Balance of Payments? / Difference between current and capital account? / What is trade deficit? / Who manages forex reserves?'
            }
          )
        },
        {
          id: 'fdi-vs-fii',
          title: 'FDI vs FII',
          content: T(
            'FDI vs FII',
            'Both FDI and FII bring foreign money into India, but they are very different in purpose, duration, and impact. Exams frequently test this comparison.',
            H.h2('FDI vs FII — Complete Comparison') +
            tbl(
              ['Feature', 'FDI (Foreign Direct Investment)', 'FII (Foreign Institutional Investment)'],
              [
                ['Full Form', 'Foreign Direct Investment', 'Foreign Institutional Investor'],
                ['Nature', 'Long-term investment in business/assets', 'Short-term investment in stock market'],
                ['Control', 'Investor gets management control or stake in company', 'No control — just buys shares in stock market'],
                ['Duration', 'Long-term (years)', 'Short-term — can sell and leave quickly (hot money)'],
                ['Where invested', 'Factories, companies, new ventures', 'Shares, bonds, mutual funds in stock exchange'],
                ['Stability', 'More stable — hard to withdraw quickly', 'Less stable — can exit fast, causes market volatility'],
                ['Examples', 'Amazon investing in India, Walmart buying Flipkart', 'Foreign pension fund buying Reliance shares on NSE']
              ]
            ) +
            H.h2('Routes of FDI in India') +
            tbl(
              ['Route', 'Meaning', 'Examples'],
              [
                ['Automatic Route', 'No prior government approval needed', 'Most sectors — up to 100% in many'],
                ['Government Route', 'Prior approval from government required', 'Defence, telecom, media, pharmaceuticals']
              ]
            ) +
            H.h3('FPI (Foreign Portfolio Investment)') +
            H.p('FII is now commonly called <strong>FPI (Foreign Portfolio Investment)</strong> under SEBI rules. It includes foreign investment in stocks, bonds, and other financial assets without ownership control.') +
            H.h2('Why FDI Is Preferred Over FII') +
            H.ul([
              'FDI brings technology, jobs, and long-term growth',
              'FII can leave quickly causing stock market crash',
              'FDI creates factories and infrastructure',
              'Government actively promotes FDI through "Make in India"'
            ]),
            {
              examTip: 'FDI = long-term, business control, stable. FII/FPI = short-term, stock market, hot money. FDI preferred for economic development.',
              dontConfuse: 'FDI = factory/company investment (long term). FII = stock market investment (can exit in one click).',
              quickRevision: [
                'FDI = long-term; management stake; factories/business',
                'FII/FPI = short-term; stock market; no control',
                'FDI = stable; FII = hot money (can leave fast)',
                'Automatic Route vs Government Route for FDI',
                'India promotes FDI through Make in India'
              ],
              examAsk: 'Difference between FDI and FII? / What is FPI? / What are automatic and government routes of FDI? / Why is FDI preferred?'
            }
          )
        },
        {
          id: 'disinvestment',
          title: 'Disinvestment',
          content: T(
            'Disinvestment',
            'Disinvestment means the government selling its shares in public sector companies to private investors. The goal is to raise money, improve efficiency, and reduce government\'s business role.',
            H.h2('Why Disinvestment?') +
            tbl(
              ['Reason', 'Explanation'],
              [
                ['Raise funds', 'Money used to reduce fiscal deficit or fund welfare schemes'],
                ['Improve efficiency', 'Private management often runs companies more profitably'],
                ['Reduce government burden', 'Loss-making PSUs drain taxpayer money'],
                ['Focus on governance', 'Government should govern, not run businesses'],
                ['Market development', 'More shares in market → better stock market depth']
              ]
            ) +
            H.h2('Types of Disinvestment') +
            tbl(
              ['Type', 'Meaning', 'Example'],
              [
                ['Minority Disinvestment', 'Sell less than 50% — govt keeps control', 'Sell 20% of ONGC shares'],
                ['Majority Disinvestment', 'Sell more than 50% — private owner takes control', 'Sell Air India to Tata Group (2022)'],
                ['Strategic Disinvestment', 'Sell entire company or transfer management', 'BPCL, Air India privatisation'],
                ['Offer for Sale (OFS)', 'Sell shares through stock exchange', 'LIC shares sold via IPO/OFS']
              ]
            ) +
            H.h2('Department of Disinvestment') +
            H.p('The <strong>Department of Investment and Public Asset Management (DIPAM)</strong> under the Ministry of Finance handles disinvestment policy. Earlier it was called Department of Disinvestment.') +
            H.h2('Major Disinvestment Examples') +
            tbl(
              ['Company', 'What Happened'],
              [
                ['Air India', 'Sold to Tata Group in 2022 — full privatisation'],
                ['LIC', 'IPO in 2022 — government sold part of shares to public'],
                ['BPCL', 'Planned strategic disinvestment ( Bharat Petroleum)'],
                ['Maruti Suzuki', 'Early success — Japanese partner + government stake reduced'],
                ['VSNL (Tata Communications)', 'One of first major disinvestments']
              ]
            ) +
            H.p('Critics say disinvestment may lead to job losses and government losing control of strategic sectors. Supporters say it improves efficiency and reduces taxpayer burden on loss-making companies.'),
            {
              examTip: 'DIPAM handles disinvestment. Strategic disinvestment = sell whole company. Air India sold to Tata (2022). LIC had IPO (2022).',
              quickRevision: [
                'Disinvestment = govt selling PSU shares',
                'Minority = sell less than 50%; Majority = sell more than 50%',
                'Strategic disinvestment = full sale/transfer',
                'DIPAM under Finance Ministry manages it',
                'Air India privatised to Tata Group in 2022'
              ],
              examAsk: 'What is disinvestment? / Why does government disinvest? / What is strategic disinvestment? / Which ministry handles disinvestment?'
            }
          )
        },
        {
          id: 'international-organizations',
          title: 'International Economic Organizations',
          content: T(
            'International Economic Organizations',
            'These are global bodies that help countries trade, develop, and solve economic problems together. India is a member of most major organisations.',
            H.h2('Major International Organisations') +
            tbl(
              ['Organisation', 'Full Form', 'Headquarters', 'Main Role'],
              [
                ['IMF', 'International Monetary Fund', 'Washington D.C., USA', 'Financial stability, loans to countries in crisis, exchange rate guidance'],
                ['World Bank', 'International Bank for Reconstruction and Development (IBRD)', 'Washington D.C., USA', 'Long-term loans for development projects (roads, dams, poverty)'],
                ['WTO', 'World Trade Organization', 'Geneva, Switzerland', 'Rules for international trade; settles trade disputes'],
                ['UN', 'United Nations', 'New York, USA', 'Peace, development, human rights (not purely economic)'],
                ['ADB', 'Asian Development Bank', 'Manila, Philippines', 'Development loans for Asian countries'],
                ['AIIB', 'Asian Infrastructure Investment Bank', 'Beijing, China', 'Infrastructure funding in Asia — India is founding member'],
                ['NDB', 'New Development Bank (BRICS Bank)', 'Shanghai, China', 'Development bank of BRICS nations (Brazil, Russia, India, China, South Africa)'],
                ['OPEC', 'Organization of Petroleum Exporting Countries', 'Vienna, Austria', 'Group of major oil-exporting countries — affects oil prices']
              ]
            ) +
            H.h3('IMF — Key Points') +
            H.p('IMF has 190 member countries. India is a founding member (1945). IMF gives short-term loans when a country faces balance of payments crisis. India\'s quota in IMF determines its voting power.') +
            H.h3('World Bank — Key Points') +
            H.p('World Bank group includes IBRD and IDA (International Development Association). It gives long-term low-interest loans for poverty reduction and infrastructure. <strong>Jim Yong Kim / Ajay Banga</strong> have served as presidents.') +
            H.h3('WTO — Key Points') +
            H.p('WTO replaced <strong>GATT (General Agreement on Tariffs and Trade)</strong> in <strong>1995</strong>. It promotes free and fair trade. India has been a member since WTO formation. Doha Round is a major negotiation round.') +
            H.h2('India & These Bodies') +
            tbl(
              ['Organisation', 'India\'s Role / Fact'],
              [
                ['IMF', 'Founding member; received IMF loan in 1991 during crisis'],
                ['World Bank', 'Major borrower for development projects'],
                ['WTO', 'Member since 1995; protects farmer interests in negotiations'],
                ['AIIB', 'Second largest shareholder after China'],
                ['NDB', 'Founding member of BRICS bank; Indian as first chair of Board']
              ]
            ),
            {
              examTip: 'IMF = short-term crisis loans. World Bank = long-term development. WTO replaced GATT in 1995. AIIB and NDB are Asian/BRICS banks.',
              memoryTrick: 'IMF = Immediate Money Fund (short-term help). World Bank = World Building (long-term projects).',
              quickRevision: [
                'IMF = financial stability, short-term loans (Washington DC)',
                'World Bank = long-term development loans (Washington DC)',
                'WTO = trade rules; replaced GATT in 1995 (Geneva)',
                'AIIB = Asian infrastructure (Beijing); NDB = BRICS bank',
                'India = founding member of IMF, WTO, AIIB, NDB'
              ],
              examAsk: 'Where is IMF headquarters? / Difference between IMF and World Bank? / When was WTO formed? / What is AIIB? / What is BRICS bank (NDB)?'
            }
          )
        }
      ]
    }
  ]
};
})();
