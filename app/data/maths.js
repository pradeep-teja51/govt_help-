(function() {
window.GA_DATA = window.GA_DATA || {};
const H = window.GA_HELPERS;
const T = (...args) => H.topic(...args);
const tbl = H.table;

window.GA_DATA.maths = {
  id: 'maths',
  name: 'Mathematics',
  color: '#8b5cf6',
  icon: '📐',
  chapters: [
    {
      id: 'number-system',
      name: 'Number System',
      topics: [{
        id: 'number-system-basics',
        title: 'Number System — Basics & Classifications',
        content: T('Number System',
          'Understanding types of numbers, LCM/HCF, divisibility rules, remainder theorem, factors, and fractions.',
          H.h2('1. Types of Numbers') +
          tbl(['Number Type', 'Definition (Simple)', 'Examples'], [
            ['Natural Numbers', 'Counting numbers starting from 1', '1, 2, 3, 4, ...'],
            ['Whole Numbers', 'Natural numbers plus 0', '0, 1, 2, 3, ...'],
            ['Integers', 'All positive, negative whole numbers and 0', '..., -3, -2, -1, 0, 1, 2, ...'],
            ['Rational Numbers', 'Can be written as a fraction (p/q, q ≠ 0)', '3/4, 5, -2, 0.5 (which is 1/2)'],
            ['Irrational Numbers', 'Cannot be written as a fraction; non-repeating decimals', '√2, √3, π (3.14159...)'],
            ['Prime Numbers', 'Numbers with exactly 2 factors (1 and itself)', '2, 3, 5, 7, 11, 13, 17... (Note: 2 is only even prime)'],
            ['Composite Numbers', 'Numbers with more than 2 factors', '4, 6, 8, 9, 10... (Note: 1 is neither prime nor composite)']
          ]) +
          H.h2('2. Fractions & Decimals') +
          H.p('<strong>Fractions</strong> represent parts of a whole (e.g., 3/4). <strong>Decimals</strong> use a dot (e.g., 0.75).') +
          H.ul([
            'Proper Fraction: Numerator < Denominator (e.g., 2/5)',
            'Improper Fraction: Numerator >= Denominator (e.g., 7/3)',
            'Mixed Fraction: Whole number + Fraction (e.g., 2 1/3)'
          ]) +
          H.h2('3. Divisibility Rules') +
          tbl(['Number', 'Divisibility Rule', 'Example'], [
            ['2', 'Last digit is even (0, 2, 4, 6, 8)', '534 (ends in 4 - Yes)'],
            ['3', 'Sum of all digits is divisible by 3', '381 (3+8+1 = 12 - Yes)'],
            ['4', 'Last two digits are divisible by 4', '1024 (24 is - Yes)'],
            ['5', 'Last digit is 0 or 5', '245 (ends in 5 - Yes)'],
            ['6', 'Divisible by BOTH 2 and 3', '72 (even, and 7+2=9 - Yes)'],
            ['8', 'Last three digits are divisible by 8', '3120 (120 is - Yes)'],
            ['9', 'Sum of all digits is divisible by 9', '981 (9+8+1 = 18 - Yes)'],
            ['11', 'Difference between sum of odd position digits and even position digits is 0 or multiple of 11', '1331 ( (1+3) - (3+1) = 0 - Yes)']
          ]) +
          H.h2('4. LCM & HCF') +
          H.p('<strong>LCM (Least Common Multiple):</strong> The smallest number that is a multiple of two or more numbers. (e.g., LCM of 4 and 6 is 12).') +
          H.p('<strong>HCF (Highest Common Factor) / GCD:</strong> The largest number that divides two or more numbers. (e.g., HCF of 12 and 18 is 6).') +
          H.p('<strong>Formula:</strong> Product of two numbers = LCM × HCF') +
          H.h2('5. Remainder Theorem & Unit Digit') +
          H.p('<strong>Remainder Theorem:</strong> If a polynomial f(x) is divided by (x - a), the remainder is f(a). In general numbers: Remainder of (A × B) / C = (Remainder A × Remainder B) / C.') +
          H.p('<strong>Unit Digit:</strong> To find the last digit of any number with power, divide power by 4. Use the remainder as new power. If remainder is 0, use power 4. (For 0, 1, 5, 6 unit digit never changes).') +
          H.p('<strong>Example:</strong> Unit digit of 23^57 → base unit digit is 3. Divide power 57 by 4 → Remainder is 1. So 3^1 = 3 is the unit digit.'),
          {
            simplyPut: 'Number System is all about classifying numbers, finding LCM/HCF, checking if a number divides another easily, and solving unit digit powers.',
            dontConfuse: 'Prime numbers start from 2 (not 1). 1 is neither prime nor composite.',
            examTip: 'HCF × LCM = Product of two numbers is a guaranteed question. Memorize divisibility of 11: alternate sum differences.',
            memoryTrick: 'Odd minus Even place sums = 0 or 11 = divisible by 11!',
            quickRevision: [
              'Natural: 1,2,3... | Whole: 0,1,2,3...',
              'HCF × LCM = Number1 × Number2',
              'Unit digit cyclicity is 4',
              '2 is the only even prime number'
            ],
            examAsk: 'Find LCM of 12, 15, and 20? / Find unit digit of 7^105?'
          })
      }]
    },
    {
      id: 'simplification-bodmas',
      name: 'Simplification / BODMAS',
      topics: [{
        id: 'simplification-bodmas-notes',
        title: 'Simplification — BODMAS, Surds & Indices',
        content: T('Simplification / BODMAS',
          'Methods to solve long equations quickly using order of operations, square/cube roots, and approximation.',
          H.h2('1. BODMAS Rule') +
          H.p('Always solve calculations in this exact order:') +
          tbl(['Letter', 'Meaning', 'Operation'], [
            ['B', 'Brackets', 'Solve ( ) first, then { }, then [ ]'],
            ['O', 'Of', 'Means multiplication (solve immediately after brackets)'],
            ['D', 'Division', '÷'],
            ['M', 'Multiplication', '×'],
            ['A', 'Addition', '+'],
            ['S', 'Subtraction', '-']
          ]) +
          H.h2('2. Surds & Indices Rules') +
          H.p('Indices (Powers) are shorthand for repeated multiplication. Surds are roots of numbers.') +
          H.ul([
            'a^m × a^n = a^(m+n)',
            'a^m ÷ a^n = a^(m-n)',
            '(a^m)^n = a^(m×n)',
            'a^0 = 1',
            'a^(-n) = 1 / a^n',
            'n√a = a^(1/n)'
          ]) +
          H.h2('3. Square Roots & Cube Roots') +
          tbl(['Number', 'Square', 'Square Root', 'Cube', 'Cube Root'], [
            ['1', '1', '√1 = 1', '1', '1'],
            ['2', '4', '√4 = 2', '8', '3√8 = 2'],
            ['3', '9', '√9 = 3', '27', '3√27 = 3'],
            ['4', '16', '√16 = 4', '64', '3√64 = 4'],
            ['5', '25', '√25 = 5', '125', '3√125 = 5']
          ]) +
          H.h2('4. Approximation') +
          H.p('In exam simplification questions, round decimals to nearest whole numbers to save time.') +
          H.p('Example: 39.99% of 501 ≈ 40% of 500 = (40/100) × 500 = 200.'),
          {
            simplyPut: 'BODMAS tells you which part of a big math line to solve first so you get the correct answer every time.',
            dontConfuse: 'Do NOT divide before brackets are opened. "Of" comes before division!',
            examTip: 'Memorize squares up to 30 and cubes up to 15 to solve Simplification questions in seconds.',
            memoryTrick: 'B-O-D-M-A-S: Bracket Off Division Multiplication Addition Subtraction.',
            quickRevision: [
              'Solve Brackets first, then Of, then Division/Multiplication, then Addition/Subtraction',
              'Any number to power 0 is 1',
              'Round decimal numbers for fast approximation'
            ],
            examAsk: 'Solve: 20 + 8 ÷ 4 - 2? (Ans: 20 + 2 - 2 = 20)'
          })
      }]
    },
    {
      id: 'percentage',
      name: 'Percentage',
      topics: [{
        id: 'percentage-basics',
        title: 'Percentage — Concepts & Formulae',
        content: T('Percentage',
          'Basic concepts of percent, percentage change, population based problems, and expenditure/consumption formulas.',
          H.h2('1. What is Percentage?') +
          H.p('<strong>Percentage</strong> means "out of 100". Symbol is %. To convert fraction to %, multiply by 100. To convert % to fraction, divide by 100.') +
          H.p('Example: 20% = 20/100 = 1/5.') +
          H.h2('2. Percentage Increase / Decrease') +
          H.p('Formula for Percentage Change = (Change / Original Value) × 100') +
          H.p('Example: If salary increases from $50 to $60, change is 10. Percentage increase = (10 / 50) × 100 = 20%.') +
          H.h2('3. Population / Depreciating Problems') +
          H.p('If population of a town increases by R% per year, after n years population will be:') +
          H.p('<strong>New Population = P × (1 + R/100)^n</strong>') +
          H.p('If population decreases (depreciates):') +
          H.p('<strong>New Value = P × (1 - R/100)^n</strong>') +
          H.h2('4. Price, Consumption & Expenditure') +
          H.p('<strong>Expenditure = Price × Consumption</strong>') +
          H.p('If price of a commodity increases by r%, to keep expenditure constant, consumption must be decreased by:') +
          H.p('<strong>Decrease% = [ r / (100 + r) ] × 100</strong>') +
          H.p('If price decreases by r%, consumption can increase by:') +
          H.p('<strong>Increase% = [ r / (100 - r) ] × 100</strong>'),
          {
            simplyPut: 'Percent is a way of comparing parts of a total using 100 as the baseline.',
            dontConfuse: 'If value decreases, the base (denominator) for calculating percentage decrease is always the original, HIGHER value.',
            examTip: 'Shortcut: If A is 25% more than B, B is [25/(100+25)] × 100 = 20% less than A.',
            memoryTrick: 'More than -> add in denominator. Less than -> subtract in denominator.',
            quickRevision: [
              'Fraction to %: Multiply by 100',
              '% to Fraction: Divide by 100',
              'Formula: Increase/Decrease % = (Change/Original) × 100',
              'Price × Consumption = Expenditure'
            ],
            examAsk: 'If sugar price rises by 25%, how much percent family should reduce consumption to keep budget same?'
          })
      }]
    },
    {
      id: 'profit-loss',
      name: 'Profit & Loss',
      topics: [{
        id: 'profit-loss-notes',
        title: 'Profit & Loss — Discounts & Dishonest Dealers',
        content: T('Profit & Loss',
          'Cost Price, Selling Price, Profit/Loss percentage, successive discounts, and dishonest weight cheat calculations.',
          H.h2('1. Core Terms & Formulas') +
          H.ul([
            '<strong>Cost Price (CP):</strong> Price at which article is bought.',
            '<strong>Selling Price (SP):</strong> Price at which article is sold.',
            '<strong>Profit:</strong> When SP > CP | Profit = SP - CP',
            '<strong>Loss:</strong> When CP > SP | Loss = CP - SP',
            '<strong>Profit % = (Profit / CP) × 100</strong>',
            '<strong>Loss % = (Loss / CP) × 100</strong>',
            '<strong>SP = CP × (100 + Profit%)/100</strong> or <strong>CP × (100 - Loss%)/100</strong>'
          ]) +
          H.h2('2. Marked Price & Discount') +
          H.p('<strong>Marked Price (MP) / List Price:</strong> Printed price. Discount is always calculated on MP.') +
          H.p('<strong>SP = MP - Discount</strong>') +
          H.p('<strong>Discount% = (Discount / MP) × 100</strong>') +
          H.p('<strong>Relation: CP / MP = (100 - Discount%) / (100 + Profit%)</strong>') +
          H.h2('3. Successive Discounts') +
          H.p('If discounts of D1% and D2% are given consecutively, the single equivalent discount is:') +
          H.p('<strong>Single Discount = D1 + D2 - (D1 × D2)/100</strong>') +
          H.h2('4. Dishonest Dealer & Faulty Weights') +
          H.p('When a dealer sells goods at CP but uses a faulty weight (e.g. 900g instead of 1kg):') +
          H.p('<strong>Gain% = [ Error / (True Value - Error) ] × 100</strong>') +
          H.p('Example: If he uses 960g instead of 1000g, error is 40g. Gain% = [ 40 / 960 ] × 100 = 4.16%.'),
          {
            simplyPut: 'Profit/Loss is how much extra/less you made compared to what you spent. Discounts are off the marked price.',
            dontConfuse: 'Profit% and Loss% are ALWAYS calculated on Cost Price (CP), never on Selling Price (SP) unless specified in the question.',
            examTip: 'Always remember: CP/MP = (100 - D%) / (100 + P%). This is a very common shortcut in competitive exams.',
            memoryTrick: 'Successive discount is always less than their direct sum! (Subtract the product part).',
            quickRevision: [
              'Profit = SP - CP | Loss = CP - SP',
              'Percentage is always over CP',
              'Discount is always over Marked Price (MP)',
              'Successive: D1 + D2 - D1D2/100'
            ],
            examAsk: 'A shopkeeper offers two successive discounts of 20% and 10%. Find single equivalent discount? (Ans: 20+10-2 = 28%)'
          })
      }]
    },
    {
      id: 'interest',
      name: 'Simple & Compound Interest',
      topics: [{
        id: 'interest-notes',
        title: 'Interest — SI, CI & Compounding Periods',
        content: T('Simple & Compound Interest',
          'Formulas for Simple Interest, Compound Interest, different compounding cycles, and installment calculations.',
          H.h2('1. Simple Interest (SI)') +
          H.p('Interest remains same every year because it is calculated only on the starting amount (Principal).') +
          H.p('<strong>Formula: SI = (P × R × T) / 100</strong>') +
          H.p('<strong>Amount (A) = Principal (P) + Interest (SI)</strong>') +
          H.h2('2. Compound Interest (CI)') +
          H.p('Interest is calculated on the Principal plus the interest accumulated so far ("Interest on Interest").') +
          H.p('<strong>Amount (A) = P × (1 + R/100)^T</strong>') +
          H.p('<strong>Compound Interest (CI) = A - P</strong>') +
          H.h2('3. Compounding Periods (Half-Yearly & Quarterly)') +
          tbl(['Period', 'Rate Change', 'Time Change', 'Formula for Amount'], [
            ['Annual', 'R% stays R%', 'T stays T', 'A = P × (1 + R/100)^T'],
            ['Half-Yearly', 'Rate becomes R/2 %', 'Time becomes 2T', 'A = P × (1 + R/200)^2T'],
            ['Quarterly', 'Rate becomes R/4 %', 'Time becomes 4T', 'A = P × (1 + R/400)^4T']
          ]) +
          H.h2('4. Difference between CI and SI') +
          H.ul([
            'For 1 Year: Difference = 0 (if compounded annually)',
            'For 2 Years: <strong>CI - SI = P × (R / 100)^2</strong>',
            'For 3 Years: <strong>CI - SI = P × (R/100)^2 × [3 + R/100]</strong>'
          ]),
          {
            simplyPut: 'Simple interest only grows on your starting cash. Compound interest grows on your cash AND the interest you earned before.',
            dontConfuse: 'In CI, the amount (A) formula gives the final total (P + CI). You must subtract Principal (P) to find the interest itself.',
            examTip: '2-year difference formula CI - SI = P(R/100)^2 is highly popular. Keep it handy.',
            memoryTrick: 'Half-yearly: Time goes double (2T), Rate goes half (R/2). Always keep them balanced!',
            quickRevision: [
              'SI = P × R × T / 100',
              'CI Amount = P(1 + R/100)^T',
              'CI is always greater than SI (for T > 1 year)',
              '2 year diff: P(R/100)^2'
            ],
            examAsk: 'Find difference between CI and SI on $1000 for 2 years at 10% rate? (Ans: 1000 × (10/100)^2 = $10)'
          })
      }]
    },
    {
      id: 'ratio-proportion',
      name: 'Ratio & Proportion',
      topics: [{
        id: 'ratio-proportion-notes',
        title: 'Ratio, Proportion, Partnership & Alligations',
        content: T('Ratio & Proportion',
          'Basic ratios, compound ratios, direct and inverse proportion, partnerships, and mixture-alligation setups.',
          H.h2('1. Ratio & Compound Ratio') +
          H.p('A **Ratio** is a comparison of two quantities (a:b = a/b).') +
          H.p('**Compound Ratio:** If ratios are a:b and c:d, their compound ratio is (ac) : (bd).') +
          H.p('If a:b = 2:3 and b:c = 4:5, to find a:b:c, multiply first ratio by 4 and second by 3 → a:b:c = 8:12:15.') +
          H.h2('2. Proportion (Direct & Inverse)') +
          H.p('Proportion means equality of two ratios (a:b = c:d → ad = bc).') +
          H.ul([
            'Third Proportion of a and b = b^2 / a',
            'Mean Proportion of a and b = √ab',
            'Fourth Proportion of a, b, c = (b × c) / a'
          ]) +
          H.h2('3. Partnership') +
          H.p('Profits in a business are divided based on: **Profit Ratio = Investment × Time**') +
          H.p('Example: If A invests $100 for 12 months, and B invests $200 for 6 months, their profit ratio is (100×12) : (200×6) = 1:1.') +
          H.h2('4. Mixture & Alligation') +
          H.p('Used to find the ratio in which two ingredients of different prices are mixed to get a mixture of a mean price.') +
          H.p('**Rule of Alligation:**') +
          tbl(['Ingredient 1 (Cheaper)', 'Ingredient 2 (Dearer)'], [
            ['Price: C', 'Price: D'],
            ['', 'Mean Price: M'],
            ['Ratio (Cheaper) = D - M', 'Ratio (Dearer) = M - C']
          ]) +
          H.p('**Ratio of Cheaper to Dearer = (Dearer Price - Mean Price) / (Mean Price - Cheaper Price)**'),
          {
            simplyPut: 'Ratio is comparing shares. Alligation is a quick tool to find how to mix cheap and expensive things to get a target price.',
            dontConfuse: 'Partnership profit depends on BOTH investment amount AND the time period it was kept.',
            examTip: 'Mean proportion is always the square root of the product of two numbers (√ab).',
            memoryTrick: 'Cross-subtraction gives you the right ratio automatically in Alligation!',
            quickRevision: [
              'a/b = c/d means ad = bc',
              'Mean Proportion = √ab',
              'Profit Ratio = (Capital A × Time A) : (Capital B × Time B)',
              'Alligation ratio: (Dearer - Mean) / (Mean - Cheaper)'
            ],
            examAsk: 'In what ratio must tea at $62/kg be mixed with tea at $72/kg so that the mixture is worth $64/kg? (Ans: (72-64):(64-62) = 8:2 = 4:1)'
          })
      }]
    },
    {
      id: 'average',
      name: 'Average',
      topics: [{
        id: 'average-notes',
        title: 'Average — Concepts & Age/Replacement Problems',
        content: T('Average',
          'Understanding basic average, weighted average, consecutive number properties, age problems, and replacement shortcuts.',
          H.h2('1. Basic Average') +
          H.p('<strong>Average = Sum of all observations / Total number of observations</strong>') +
          H.p('<strong>Sum of observations = Average × Total number of observations</strong>') +
          H.h2('2. Average of Consecutive Numbers') +
          H.p('For any arithmetic progression (numbers with equal gap, like 2, 4, 6, 8 or 1, 2, 3, 4):') +
          H.p('<strong>Average = (First Term + Last Term) / 2</strong>') +
          H.h2('3. Weighted Average') +
          H.p('If a group of n1 items has average A1, and n2 items has average A2:') +
          H.p('<strong>Combined Average = (n1×A1 + n2×A2) / (n1 + n2)</strong>') +
          H.h2('4. Age & Replacement Problems') +
          H.p('When a person is replaced or added, the average changes. Use this shortcut instead of long equations:') +
          H.p('<strong>New Member Value = Old Average + (Total Members × Increase in Average)</strong>') +
          H.p('If average decreased: New Value = Old Average - (Total Members × Decrease in Average).') +
          H.p('Example: Average age of 10 boys is 15. When a new boy joins, average increases by 1 year. Age of new boy = 15 + (11 × 1) = 26 years.'),
          {
            simplyPut: 'Average is dividing the total sum equally among everyone.',
            dontConfuse: 'When a new member joins, remember to increase the total number of members by 1 when calculating the change.',
            examTip: 'For consecutive numbers, the average is always the exact middle number.',
            memoryTrick: 'New = Old + (New Count × Change)',
            quickRevision: [
              'Average = Sum / Number',
              'Consecutive average = (First + Last) / 2',
              'Weighted: (n1A1 + n2A2)/(n1+n2)',
              'Replacement: New = Old + (n × diff)'
            ],
            examAsk: 'The average age of 24 students is 10 years. If teacher\'s age is included, average increases by 1. Find teacher\'s age? (Ans: 10 + (25 × 1) = 35 years)'
          })
      }]
    },
    {
      id: 'time-work',
      name: 'Time & Work',
      topics: [{
        id: 'time-work-notes',
        title: 'Time & Work — Efficiency & Pipes/Cisterns',
        content: T('Time & Work',
          'Solving work problems, efficiency-based ratios, pipes & cisterns (inlet/outlet), MDH formula, and wages.',
          H.h2('1. Basic Concept & LCM Method') +
          H.p('If A can do a work in X days and B in Y days, they together can do it in:') +
          H.p('<strong>Time Taken = (X × Y) / (X + Y) days</strong>') +
          H.p('**LCM Method (Highly Recommended):** Assume total work is the LCM of individual days. Then calculate work done per day (efficiency) for each.') +
          H.p('Example: A does work in 10 days, B in 15 days. LCM of 10 & 15 is 30 units (Total Work). Efficiency of A = 3 units/day, B = 2 units/day. Combined efficiency = 5 units/day. Time = 30/5 = 6 days.') +
          H.h2('2. Efficiency & Wages') +
          H.p('Efficiency is inversely proportional to time taken (Efficiency = Work / Time).') +
          H.p('**Wages** are always distributed in the ratio of the work done (which is the efficiency ratio if they work for same time).') +
          H.h2('3. MDH Formula') +
          H.p('If M1 men can do W1 work in D1 days working H1 hours per day, and M2 men do W2 work in D2 days working H2 hours:') +
          H.p('<strong>(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2</strong>') +
          H.h2('4. Pipes & Cisterns') +
          H.p('Same as Time & Work, but note:') +
          H.ul([
            'Inlet Pipe: Adds water (Positive work)',
            'Outlet/Leak Pipe: Empties water (Negative work)'
          ]) +
          H.p('Example: Pipe A fills in 6 hrs, Pipe B empties in 8 hrs. Net work per hour = 1/6 - 1/8 = 1/24. Time to fill fully = 24 hours.'),
          {
            simplyPut: 'Time & Work is about how fast people can complete a job. Pipes & Cisterns is the same, but leaking water counts as negative work.',
            dontConfuse: 'Efficiency is the speed of work. A person who is 2 times faster takes HALF the time of the slower person.',
            examTip: 'The LCM method is the fastest way to solve 90% of Time and Work exam questions.',
            memoryTrick: 'MDH = "Masala formula" (Men × Days × Hours on top, Work at bottom).',
            quickRevision: [
              'Time = Total Work / Efficiency',
              'Together time: XY / (X+Y)',
              'MDH rule: M1 D1 H1 / W1 = constant',
              'Outlet pipe has negative efficiency'
            ],
            examAsk: 'If 15 men can build a wall in 20 days, in how many days can 20 men build it? (Ans: 15×20 = 20×D2 → D2 = 15 days)'
          })
      }]
    },
    {
      id: 'time-speed-distance',
      name: 'Time, Speed & Distance',
      topics: [{
        id: 'time-speed-distance-notes',
        title: 'Time, Speed & Distance — Trains & Boats',
        content: T('Time, Speed & Distance',
          'Speed equations, unit conversions, train relative speeds, boat/stream flows, and meeting point calculations.',
          H.h2('1. Core Formula & Unit Conversion') +
          H.p('<strong>Distance = Speed × Time</strong>') +
          H.ul([
            'Convert km/h to m/s: Multiply by **5/18**',
            'Convert m/s to km/h: Multiply by **18/5**'
          ]) +
          H.p('<strong>Average Speed = Total Distance / Total Time</strong>') +
          H.p('If same distance is covered at speeds x and y, **Average Speed = 2xy / (x+y)**') +
          H.h2('2. Relative Speed') +
          H.p('When two objects are moving:') +
          H.ul([
            'Same Direction: Subtract speeds (Relative Speed = S1 - S2)',
            'Opposite Direction: Add speeds (Relative Speed = S1 + S2)'
          ]) +
          H.h2('3. Train Problems') +
          H.p('When a train crosses a pole or man, distance = length of train. When it crosses a platform or bridge, distance = train length + platform length.') +
          H.p('<strong>Time to cross platform = (Train Length + Platform Length) / Speed</strong>') +
          H.h2('4. Boats & Streams') +
          H.p('Let speed of boat in still water = B, and speed of stream (water flow) = S:') +
          H.ul([
            '**Downstream (with flow):** Speed = B + S',
            '**Upstream (against flow):** Speed = B - S',
            'Speed of Boat in still water B = (Downstream Speed + Upstream Speed) / 2',
            'Speed of Stream S = (Downstream Speed - Upstream Speed) / 2'
          ]),
          {
            simplyPut: 'Speed is how fast you cover distance. If you go with the river (downstream), it pushes you faster. If you go against (upstream), it slows you down.',
            dontConfuse: 'Remember to check units! If distance is in meters, convert speed to m/s. If distance is in km, use km/h.',
            examTip: 'To convert speed, remember 18 is bigger (for km/h) and 5 is smaller (for m/s).',
            memoryTrick: 'Same direction = Subtract (S-S). Opposite = Add (O-A).',
            quickRevision: [
              'Distance = Speed × Time',
              'km/h to m/s: × 5/18',
              'Relative same: S1 - S2 | opposite: S1 + S2',
              'Downstream = B + S | Upstream = B - S'
            ],
            examAsk: 'A train 150m long passes a telegraph post in 9 seconds. Find speed of train in km/h? (Ans: Speed = 150/9 m/s = 50/3 m/s × 18/5 = 60 km/h)'
          })
      }]
    },
    {
      id: 'algebra',
      name: 'Algebra',
      topics: [{
        id: 'algebra-notes',
        title: 'Algebra — Identities & Equations',
        content: T('Algebra',
          'Fundamental algebraic identities, linear & quadratic equations, and shortcut methods for x + 1/x type problems.',
          H.h2('1. Algebraic Identities') +
          H.ul([
            '(a + b)² = a² + 2ab + b²',
            '(a - b)² = a² - 2ab + b²',
            '(a² - b²) = (a - b)(a + b)',
            '(a + b)³ = a³ + b³ + 3ab(a + b)',
            '(a - b)³ = a³ - b³ - 3ab(a - b)',
            'a³ + b³ = (a + b)(a² - ab + b²)',
            'a³ - b³ = (a - b)(a + b² - ab)',
            'If a + b + c = 0, then a³ + b³ + c³ = 3abc'
          ]) +
          H.h2('2. x + 1/x = k Shortcuts') +
          H.p('If <strong>x + 1/x = k</strong>, then:') +
          H.ul([
            'x² + 1/x² = k² - 2',
            'x³ + 1/x³ = k³ - 3k',
            'x⁴ + 1/x⁴ = (k² - 2)² - 2'
          ]) +
          H.p('If x - 1/x = k, then x² + 1/x² = k² + 2, and x³ - 1/x³ = k³ + 3k.') +
          H.h2('3. Quadratic Equations') +
          H.p('Standard form: **ax² + bx + c = 0**') +
          H.p('Roots are given by: **x = [ -b ± √(b² - 4ac) ] / 2a**') +
          H.ul([
            'Sum of roots (α + β) = -b/a',
            'Product of roots (α × β) = c/a',
            'Discriminant D = b² - 4ac. If D > 0 (real/distinct), D = 0 (real/equal), D < 0 (imaginary roots).'
          ]),
          {
            simplyPut: 'Algebra uses letters to represent numbers so we can solve equations using standard rules and shortcuts.',
            dontConfuse: 'In x + 1/x = k, the sign changes: x² + 1/x² uses MINUS 2 (k² - 2), not plus.',
            examTip: 'The condition "If a+b+c = 0, then a³+b³+c³ = 3abc" is tested very frequently in SSC exams.',
            memoryTrick: 'Double power means square and subtract 2 (for positive sign).',
            quickRevision: [
              '(a+b)² = a² + 2ab + b²',
              'x + 1/x = k → x² + 1/x² = k² - 2',
              'Sum of roots = -b/a',
              'Product of roots = c/a'
            ],
            examAsk: 'If x + 1/x = 3, find value of x² + 1/x²? (Ans: 3² - 2 = 7)'
          })
      }]
    },
    {
      id: 'geometry',
      name: 'Geometry',
      topics: [{
        id: 'geometry-notes',
        title: 'Geometry — Angles, Triangles & Circles',
        content: T('Geometry',
          'Properties of lines/angles, triangle centers and theorems, circle tangents, and polygon interior/exterior angles.',
          H.h2('1. Lines & Angles') +
          H.ul([
            'Complementary Angles: Sum is 90°',
            'Supplementary Angles: Sum is 180°',
            'Parallel lines cut by a transversal: Corresponding angles are equal, Alternate interior angles are equal, Sum of consecutive interior angles is 180°.'
          ]) +
          H.h2('2. Triangles (Congruence & Similarity)') +
          H.ul([
            '**Congruence (identical):** SSS, SAS, ASA, RHS theorems.',
            '**Similarity (same shape, diff size):** Corresponding sides are in same ratio. Area Ratio = (Side Ratio)².',
            '**Centroid:** Median intersection point (divides median in 2:1).',
            '**Incentre:** Angle bisector intersection point (Inradius r = Area / semi-perimeter s).',
            '**Circumcentre:** Perpendicular bisector intersection point.',
            '**Orthocentre:** Altitude intersection point.'
          ]) +
          H.h2('3. Circles & Tangent Theorems') +
          H.ul([
            'Perpendicular from center to a chord bisects the chord.',
            'Angle subtended by an arc at the center is double the angle at the circumference.',
            'Angle in a semicircle is 90°.',
            'Tangents from an external point to a circle are equal in length.',
            '**Cyclic Quadrilateral:** Opposite angles sum up to 180°.'
          ]) +
          H.h2('4. Polygons') +
          H.ul([
            'Sum of all interior angles of a polygon = (n - 2) × 180° (where n = number of sides)',
            'Sum of all exterior angles of any polygon = 360°',
            'Each interior angle of a regular polygon = [ (n - 2) × 180° ] / n'
          ]),
          {
            simplyPut: 'Geometry is about shapes, lines, angles, and their properties (like why a triangle always adds up to 180 degrees).',
            dontConfuse: 'Incentre is for angle bisectors. Centroid is for medians. They are different points in a triangle.',
            examTip: 'The ratio of areas of two similar triangles is equal to the square of the ratio of their corresponding sides.',
            memoryTrick: 'Exterior angles of any regular closed shape always add up to exactly 360°.',
            quickRevision: [
              'Complementary = 90° | Supplementary = 180°',
              'Sum of interior angles = (n-2) × 180°',
              'Sum of exterior angles = 360°',
              'Opposite angles of cyclic quad = 180°'
            ],
            examAsk: 'Find each interior angle of a regular hexagon (6 sides)? (Ans: (6-2)×180/6 = 4×30 = 120°)'
          })
      }]
    },
    {
      id: 'mensuration',
      name: 'Mensuration',
      topics: [{
        id: 'mensuration-notes',
        title: 'Mensuration — 2D and 3D Formulas',
        content: T('Mensuration',
          'Area and perimeter of 2D shapes (triangles, circles, quadrilaterals) and surface area & volume of 3D shapes.',
          H.h2('1. 2D Shapes (Area & Perimeter)') +
          tbl(['Shape', 'Area Formula', 'Perimeter / Key Info'], [
            ['Triangle', '1/2 × Base × Height', 'Heron\'s Formula: √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2'],
            ['Equilateral Triangle', '(√3/4) × Side²', 'Height = (√3/2) × Side'],
            ['Rectangle', 'Length × Width', '2 × (Length + Width)'],
            ['Square', 'Side² or 1/2 × Diagonal²', '4 × Side | Diagonal = Side × √2'],
            ['Circle', 'π × r²', 'Circumference = 2 × π × r'],
            ['Rhombus', '1/2 × d1 × d2 (diagonals)', '4 × Side | Side = 1/2 × √(d1² + d2²)'],
            ['Trapezium', '1/2 × (Sum of parallel sides) × height', 'Sum of all 4 sides']
          ]) +
          H.h2('2. 3D Shapes (Volume & Surface Area)') +
          tbl(['Shape', 'Volume', 'Curved Surface Area (CSA)', 'Total Surface Area (TSA)'], [
            ['Cube', 'a³', '4a²', '6a² | Diagonal = a√3'],
            ['Cuboid', 'l × w × h', '2h(l + w) (Area of 4 walls)', '2(lw + wh + lh)'],
            ['Cylinder', 'πr²h', '2πrh', '2πr(h + r)'],
            ['Cone', '1/3 × πr²h', 'πrl (l = slant height = √(r²+h²))', 'πr(l + r)'],
            ['Sphere', '4/3 × πr³', '4πr²', '4πr²'],
            ['Hemisphere', '2/3 × πr³', '2πr²', '3πr²']
          ]),
          {
            simplyPut: '2D Mensuration is measuring flat shapes (how much space they cover and their boundary). 3D Mensuration is measuring solid things (how much they hold and their wrapper area).',
            dontConfuse: 'Sphere has same CSA and TSA (4πr²). Hemisphere has different CSA (2πr²) and TSA (3πr²) because of the flat top circle.',
            examTip: 'If radius of a cylinder is doubled and height is halved, new volume will be 2 times the original volume.',
            memoryTrick: 'Volume is always in cubic units (cm³), Area in square units (cm²), and Perimeter in normal units (cm).',
            quickRevision: [
              'Square Diagonal = a√2 | Cube Diagonal = a√3',
              'Cone slant height l = √(r² + h²)',
              'Sphere TSA = 4πr² | Hemisphere TSA = 3πr²',
              'Equilateral Area = (√3/4)a²'
            ],
            examAsk: 'Find the volume of a sphere of radius 3 cm? (Ans: 4/3 × π × 27 = 36π cm³)'
          })
      }]
    },
    {
      id: 'trigonometry',
      name: 'Trigonometry',
      topics: [{
        id: 'trigonometry-notes',
        title: 'Trigonometry — Ratios, Identities & Heights',
        content: T('Trigonometry',
          'Six trigonometric ratios, standard angle values table, core identities, and height/distance word problems.',
          H.h2('1. Trigonometric Ratios') +
          H.p('Based on a Right-Angled Triangle (perpendicular P, base B, hypotenuse H):') +
          H.ul([
            'sin θ = P / H | cosec θ = H / P (reciprocal)',
            'cos θ = B / H | sec θ = H / B (reciprocal)',
            'tan θ = P / B | cot θ = B / P (reciprocal)'
          ]) +
          H.h2('2. Standard Value Table') +
          tbl(['Ratio', '0°', '30°', '45°', '60°', '90°'], [
            ['sin θ', '0', '1/2', '1/√2', '√3/2', '1'],
            ['cos θ', '1', '√3/2', '1/√2', '1/2', '0'],
            ['tan θ', '0', '1/√3', '1', '√3', 'Not Defined']
          ]) +
          H.h2('3. Standard Identities') +
          H.ul([
            'sin² θ + cos² θ = 1',
            '1 + tan² θ = sec² θ  →  sec² θ - tan² θ = 1',
            '1 + cot² θ = cosec² θ  →  cosec² θ - cot² θ = 1',
            'sin(90° - θ) = cos θ | cos(90° - θ) = sin θ',
            'tan(90° - θ) = cot θ | cot(90° - θ) = tan θ'
          ]) +
          H.h2('4. Heights & Distances') +
          H.p('Used to find height of towers or width of rivers using angles.') +
          H.ul([
            '**Angle of Elevation:** Angle looking UP from ground level.',
            '**Angle of Depression:** Angle looking DOWN from a height.'
          ]) +
          H.p('Example: A tower throws a shadow of 10√3 m when sun elevation is 30°. Height of tower? tan 30° = Height / 10√3 → 1/√3 = Height / 10√3 → Height = 10 m.'),
          {
            simplyPut: 'Trigonometry is using the angles of a triangle to calculate the lengths of its sides.',
            dontConfuse: 'Height of observer should be subtracted from total height if the angle of elevation is taken from the eye level of a person of a given height.',
            examTip: 'Common triangle side ratios for 30°-60°-90° are 1 : √3 : 2, and for 45°-45°-90° are 1 : 1 : √2.',
            memoryTrick: 'Some People Have, Curly Brown Hair, Through Proper Brushing (Sin = P/H, Cos = B/H, Tan = P/B).',
            quickRevision: [
              'sin = 1/cosec | cos = 1/sec | tan = 1/cot',
              'sin² + cos² = 1',
              'sec² - tan² = 1',
              'Complementary angles: sin(90-x) = cos(x)'
            ],
            examAsk: 'If sin θ = 3/5, find tan θ? (Ans: P=3, H=5 → B = √(25-9) = 4. tan θ = P/B = 3/4)'
          })
      }]
    },
    {
      id: 'coordinate-geometry',
      name: 'Coordinate Geometry',
      topics: [{
        id: 'coordinate-geometry-notes',
        title: 'Coordinate Geometry — Formulas & Equations',
        content: T('Coordinate Geometry',
          'Cartesian coordinates, distance, section, midpoint formulas, line slope, equation of a line, and collinearity.',
          H.h2('1. Basic Formulas') +
          H.p('Let points be A(x1, y1) and B(x2, y2):') +
          H.ul([
            '**Distance Formula:** Distance AB = √[(x2 - x1)² + (y2 - y1)²]',
            '**Midpoint Formula:** Midpoint coordinates = [ (x1 + x2)/2 , (y1 + y2)/2 ]',
            '**Section Formula (Internal division in ratio m:n):** Coordinates = [ (mx2 + nx1)/(m+n) , (my2 + ny1)/(m+n) ]'
          ]) +
          H.h2('2. Slope of a Line') +
          H.p('Slope (m) measures steepness. **Slope m = (y2 - y1) / (x2 - x1) = tan θ** (θ is angle with positive X-axis).') +
          H.ul([
            'Parallel lines have equal slopes: m1 = m2',
            'Perpendicular lines have product of slopes = -1: m1 × m2 = -1'
          ]) +
          H.h2('3. Equation of a Line') +
          H.ul([
            'Slope-Intercept Form: **y = mx + c** (m is slope, c is y-intercept)',
            'Point-Slope Form: **y - y1 = m(x - x1)**',
            'General Form: **Ax + By + C = 0** | Slope = -A/B'
          ]) +
          H.h2('4. Collinearity & Area of Triangle') +
          H.p('Three points are collinear (lie on same line) if the area of the triangle formed by them is 0.') +
          H.p('**Area of Triangle = 1/2 | x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2) |**'),
          {
            simplyPut: 'Coordinate Geometry is putting geometry on a grid map (X and Y axes) so we can find exact lengths, slopes, and line paths using numbers.',
            dontConfuse: 'Slope of vertical line is undefined (division by 0) and slope of horizontal line is 0.',
            examTip: 'For perpendicular lines, if one slope is 2/3, the other is -3/2 (negative reciprocal).',
            memoryTrick: 'Area formula cyclic order: 1(2-3) → 2(3-1) → 3(1-2). Just remember 123, 231, 312!',
            quickRevision: [
              'Distance = √[Δx² + Δy²]',
              'Midpoint = Average of x, Average of y',
              'y = mx + c (c is y-axis crossing point)',
              'Parallel slopes equal | Perpendicular slopes product = -1'
            ],
            examAsk: 'Find the distance between points (2, 3) and (5, 7)? (Ans: √[(5-2)² + (7-3)²] = √[3² + 4²] = 5)'
          })
      }]
    },
    {
      id: 'data-interpretation',
      name: 'Data Interpretation',
      topics: [{
        id: 'data-interpretation-notes',
        title: 'Data Interpretation — Graphs & Calculations',
        content: T('Data Interpretation',
          'Types of DI charts (Bar, Line, Pie, Tables, Caselets) and percentage/ratio calculation techniques.',
          H.h2('1. Types of DI Charts') +
          H.ul([
            '**Bar Graph:** Represents data using vertical or horizontal rectangular bars. Good for comparisons.',
            '**Line Graph:** Connects data points with lines. Shows trends over time (growth, drop).',
            '**Pie Chart:** A circle split into slices showing relative shares. Total circle = 100% or 360° (Conversion: 1% = 3.6°).',
            '**Table Chart:** Structured raw data in rows and columns. Harder to read but has exact figures.',
            '**Caselet DI:** Paragraph of text with numbers. You must extract and build a table first before solving.'
          ]) +
          H.h2('2. Core Calculations Needed for DI') +
          H.p('DI questions mostly check three basic math operations done quickly:') +
          H.ol([
            '**What percentage of A is B?** → Formula: (B / A) × 100',
            '**Percentage increase/decrease:** → Formula: (Difference / Original) × 100',
            '**Ratios:** Simplify the values of two categories relative to each other.'
          ]) +
          H.h2('3. Speed Calculation Tips') +
          H.ul([
            'Use approximation: round 498/999 to 500/1000 = 50%.',
            'For Pie Charts, check if working in degrees or percent. 100% = 360° | 10% = 36° | 1% = 3.6°.'
          ]),
          {
            simplyPut: 'Data Interpretation is reading charts and tables to find trends, averages, percentages, and totals quickly.',
            dontConfuse: 'Do not waste time calculating exact decimals if options are far apart; use smart rounding.',
            examTip: 'Pie Chart conversion shortcut: to convert degrees to percentage, multiply by 5/18 (since 100/360 = 5/18).',
            memoryTrick: 'Pie Chart Degree to %: multiply by 5/18. % to Degree: multiply by 18/5 (same as Speed conversion!).',
            quickRevision: [
              'Bar = comparison | Line = trend | Pie = shares (360°)',
              '1% of Pie = 3.6°',
              'Always scan the headings and units of charts carefully before calculation'
            ],
            examAsk: 'A sector in pie chart has angle 72°. What percentage does it represent? (Ans: 72 × 5/18 = 20%)'
          })
      }]
    },
    {
      id: 'statistics-probability',
      name: 'Statistics & Probability',
      topics: [{
        id: 'statistics-probability-notes',
        title: 'Statistics & Probability — Core Concepts',
        content: T('Statistics & Probability',
          'Mean, Median, Mode, Range, Standard Deviation/Variance basics, permutations/combinations, and probability.',
          H.h2('1. Statistics Measures') +
          H.ul([
            '**Mean (Average):** Sum of observations / Number of observations.',
            '**Median:** Middle term when numbers are sorted in order. If odd count, middle term. If even count, average of two middle terms.',
            '**Mode:** Value that appears most frequently.',
            '**Range:** Difference between largest and smallest values (Range = Max - Min).',
            '**Empirical Formula:** **Mode = 3 Median - 2 Mean**'
          ]) +
          H.h2('2. Variance & Standard Deviation') +
          H.ul([
            '**Variance (σ²):** Mean of the squared differences from the Mean.',
            '**Standard Deviation (σ):** Square root of the Variance (SD = √Variance).'
          ]) +
          H.h2('3. Permutation & Combination (Basics)') +
          H.ul([
            '**Permutation (Arrangement/Order matters):** nPr = n! / (n - r)!',
            '**Combination (Selection/Order doesn\'t matter):** nCr = n! / [ r! × (n - r)! ]',
            '(Factorial n! = n × (n-1) × ... × 1. Note: 0! = 1)'
          ]) +
          H.h2('4. Basic Probability') +
          H.p('<strong>Probability P(A) = Number of Favorable Outcomes / Total Possible Outcomes</strong>') +
          H.ul([
            'Value of probability is always between 0 and 1 (0% to 100%).',
            'Coin toss: Head probability = 1/2. Dice roll: Even number (2, 4, 6) probability = 3/6 = 1/2.',
            'Card pack (52 cards): 26 Red, 26 Black. 4 Suits of 13 cards each (Spades, Clubs, Hearts, Diamonds).'
          ]),
          {
            simplyPut: 'Statistics is describing a group of numbers. Probability is measuring the chance of an event happening.',
            dontConfuse: 'Median must ONLY be calculated after sorting the numbers in ascending or descending order.',
            examTip: 'The formula "Mode = 3 Median - 2 Mean" is standard for finding a missing value when the other two are given.',
            memoryTrick: 'Mo = 3Me - 2Mn (Alphabetical length: Mode is short, Median is long, Mean is medium).',
            quickRevision: [
              'Mean = sum/n | Median = middle | Mode = most common',
              'Mode = 3 Median - 2 Mean',
              'Probability = Favorable / Total',
              'SD = √Variance'
            ],
            examAsk: 'Find Median of 3, 7, 5, 1, 9? (Ans: Sort: 1, 3, 5, 7, 9. Median = 5)'
          })
      }]
    },
    {
      id: 'clocks-calendars',
      name: 'Clocks & Calendars',
      topics: [{
        id: 'clocks-calendars-notes',
        title: 'Clocks & Calendars — Angle and Day Concepts',
        content: T('Clocks & Calendars',
          'Angle between clock hands, gaining/losing time, odd days concept, day of the week, and leap year rules.',
          H.h2('1. Clock Angles') +
          H.p('A clock is a 360° circle divided into 12 hours.') +
          H.ul([
            'Hour hand moves: **0.5° per minute** (30° per hour)',
            'Minute hand moves: **6° per minute**',
            'Relative speed of hands = 6° - 0.5° = **5.5° per minute**'
          ]) +
          H.p('<strong>Angle between Hands = | 30H - 5.5M |</strong> (where H is Hour and M is Minute)') +
          H.h2('2. Gaining or Losing Time') +
          H.p('If a clock runs fast or slow, compare the elapsed duration on a standard clock to find the error margin.') +
          H.h2('3. Leap Year Rules') +
          H.ul([
            'A normal year has 365 days. A leap year has 366 days (February 29).',
            'Year divisible by 4 is a leap year (e.g. 2024).',
            '**Century Year exception:** Century years (ending in 00) must be divisible by **400** to be leap years (e.g. 2000 is leap, but 1900 is NOT).'
          ]) +
          H.h2('4. Odd Days Concept (Calendars)') +
          H.p('Odd days are the remainders left when total days are divided by 7.') +
          H.ul([
            'Normal year (365 days) = 52 weeks + **1 odd day**',
            'Leap year (366 days) = 52 weeks + **2 odd days**'
          ]) +
          H.p('**Day Reference:** 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday.'),
          {
            simplyPut: 'Clocks is finding angles of hands. Calendars is counting remaining odd days after weeks are completed to shift dates.',
            dontConfuse: '1900 is NOT a leap year because it is a century year not divisible by 400, even though 1900 is divisible by 4.',
            examTip: 'The clock hand angle formula |30H - 5.5M| saves you from complex drawings.',
            memoryTrick: 'Divide days by 7, the remainder is the number of days you step forward in the calendar!',
            quickRevision: [
              'Angle = |30H - 5.5M|',
              'Normal year = 1 odd day | Leap year = 2 odd days',
              'Century leap year: divisible by 400',
              'Hands relative speed = 5.5°/min'
            ],
            examAsk: 'What is the angle between hands at 3:20? (Ans: |30(3) - 5.5(20)| = |90 - 110| = 20°)'
          })
      }]
    }
  ]
};
})();
