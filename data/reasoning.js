(function() {
window.GA_DATA = window.GA_DATA || {};
const H = window.GA_HELPERS;
const T = (...args) => H.topic(...args);
const tbl = H.table;

window.GA_DATA.reasoning = {
  id: 'reasoning',
  name: 'Reasoning & Intelligence',
  color: '#ec4899',
  icon: '🧠',
  chapters: [
    {
      id: 'analogy',
      name: '1. Analogy',
      topics: [{
        id: 'analogy-simple',
        title: 'Analogy — Matching Pairs',
        content: T('Analogy',
          'Analogy means "matching pairs" or finding a similar relationship. If Pair 1 has a specific relationship, then Pair 2 must follow the exact same relationship.',
          H.h2('1. Number Analogy (2:4 :: 3:?)') +
          H.p('Look at how the first number changes to the second number (using square, cube, or multiplication).') +
          H.ul([
            '<strong>Square pattern:</strong> 2 : 4 :: 3 : ? → Since 2 × 2 = 4, then 3 × 3 = 9. Answer is 9.',
            '<strong>Cube pattern:</strong> 2 : 8 :: 3 : ? → Since 2³ = 8, then 3³ = 27. Answer is 27.',
            '<strong>Add/Subtract pattern:</strong> 10 : 15 :: 20 : ? → Since 10 + 5 = 15, then 20 + 5 = 25. Answer is 25.'
          ]) +
          H.h2('2. Letter Analogy (AB:CD :: EF:?)') +
          H.p('Check how many steps forward or backward the letters shift in the alphabet.') +
          H.ul([
            '<strong>Shift pattern:</strong> AB : CD :: EF : ? → A moves to C (+2 steps), B moves to D (+2 steps). Doing the same for EF gives GH. Answer is GH.',
            '<strong>Opposite Letter pattern:</strong> AZ : BY :: CX : ? → A is opposite of Z, B is opposite of Y. So C is opposite of X, and D is opposite of W. Answer is DW.'
          ]) +
          H.h2('3. Word Analogy (Doctor:Hospital :: Teacher:?)') +
          H.p('Based on real-world connections like who works where, or synonyms and antonyms.') +
          H.ul([
            '<strong>Worker & Place:</strong> Doctor works in a Hospital, so a Teacher works in a School.',
            '<strong>Tool & Worker:</strong> Pen is used by a Writer, so a Needle is used by a Tailor.',
            '<strong>Opposites:</strong> Hot : Cold :: Up : Down.'
          ]) +
          H.h2('4. GK Based Analogy (Delhi:India :: Paris:?)') +
          H.p('Uses basic general knowledge like country capitals, currencies, or state dances.') +
          H.ul([
            '<strong>Capital:</strong> Delhi is the capital of India, so Paris is the capital of France.',
            '<strong>Currency:</strong> USA : Dollar :: India : Rupee.'
          ]) +
          H.h2('5. Mixed Analogy (Letter + Number)') +
          H.p('Combines letter position and mathematical values.') +
          H.ul([
            'Example: C : 9 :: D : ? → C is the 3rd letter, and 3² = 9. D is the 4th letter, and 4² = 16. Answer is 16.'
          ]) +
          H.h2('6. Double Analogy') +
          H.p('Both sides have a blank space. Fill both so the relation matches.') +
          H.p('Example: <code>[?] : Ship :: Driver : [?]</code> → Captain is to Ship as Driver is to Car.') +
          H.h2('7. Symbolic Analogy') +
          H.p('Match shapes or symbols by looking at their rotation or size.') +
          H.p('Example: If an arrow pointing UP (↑) matches a DOWN arrow (↓), then a LEFT arrow (←) matches a RIGHT arrow (→).'),
          {
            simplyPut: 'Find the secret connection in the first pair, and copy that exact connection to the second pair.',
            dontConfuse: 'Do not use simple addition if there is a square or prime number pattern. Primes and Squares always come first!',
            examTip: 'Write the alphabet A to Z with their numbers 1 to 26 on your rough paper as soon as the exam starts.',
            memoryTrick: 'P-S-M-A: Primes first, then Squares/Cubes, then Multiplication, then Addition last!',
            quickRevision: [
              'Analogy = similar relations.',
              'Reverse letter positions always add up to 27.',
              'Always follow the Priority Rule for numbers.'
            ],
            examAsk: 'Delhi : India :: Tokyo : ? (Answer: Japan)'
          })
      }]
    },
    {
      id: 'classification',
      name: '2. Classification (Odd One Out)',
      topics: [{
        id: 'classification-simple',
        title: 'Classification — Finding the Stranger',
        content: T('Classification',
          'Find the one item that does NOT belong to the group. The other three items must share a clear common rule.',
          H.h2('1. Number Based Odd One Out') +
          H.p('Look for prime numbers, odd/even numbers, squares, or divisibility.') +
          H.ul([
            'Example: Identify the odd one in <code>11, 13, 15, 17</code>. Answer is 15, because 15 is composite (can be divided by 3 and 5), while the others are prime numbers.'
          ]) +
          H.h2('2. Letter Based Odd One Out') +
          H.p('Look at letter gaps or vowels vs consonants.') +
          H.ul([
            'Example 1: Identify the odd one in <code>A, E, I, Z</code>. Answer is Z because Z is a consonant, while the others are vowels.',
            'Example 2: Identify the odd one in <code>BDF, HJL, NPR, TVW</code>. Answer is TVW because the letters have only 1 step gap (T_V_W), whereas others have a constant 2 steps gap (B_D_F).'
          ]) +
          H.h2('3. Word Based Odd One Out') +
          H.p('Look at categories of things.') +
          H.ul([
            'Example: Identify the odd one in <code>Apple, Mango, Orange, Potato</code>. Answer is Potato because Potato is a vegetable, whereas others are fruits.'
          ]) +
          H.h2('4. GK Based Odd One Out') +
          H.p('Based on states, capitals, countries, or science.') +
          H.ul([
            'Example: Identify the odd one in <code>New Delhi, Tokyo, Paris, Sydney</code>. Answer is Sydney because Sydney is not a capital city (Canberra is the capital of Australia), while the others are capital cities.'
          ]) +
          H.h2('5. Figure Based Odd One Out') +
          H.p('Look at shapes. E.g. Triangle (3 lines), Square (4 lines), Pentagon (5 lines), Circle (no straight lines). Circle is the odd one.') +
          H.h2('6. Meaningful Word Odd One Out') +
          H.p('Rearrange scrambled letters to make words, then find the odd word.') +
          H.p('Example: <code>RED (RED), GREN (GREEN), BLU (BLUE), TABL (TABLE)</code>. Table is the odd one because it is furniture; others are colors.'),
          {
            simplyPut: 'Find the common family rule for 3 of the options. The one that breaks the family rule is your answer.',
            dontConfuse: 'Do not just find a reason for one option to be unique. You must show why the other three are exactly the same.',
            examTip: 'Check if numbers are prime first. Prime numbers are the most common trap!',
            memoryTrick: 'First group the three friends together. The leftover is the stranger!',
            quickRevision: [
              'Check for Prime status first.',
              'Calculate gaps between letters.',
              'Ensure 3 items strictly match your rule.'
            ],
            examAsk: 'Find the odd one: Lion, Tiger, Cow, Leopard. (Answer: Cow - herbivore, others carnivores)'
          })
      }]
    },
    {
      id: 'series',
      name: '3. Series',
      topics: [{
        id: 'series-simple',
        title: 'Series — Completing Patterns',
        content: T('Series',
          'A series is a chain of numbers or letters following a repeating rule. You need to find the missing term or point out the incorrect term.',
          H.h2('1. Number Series Patterns') +
          H.ul([
            '<strong>Missing Number:</strong> 2, 4, 6, 8, ? → Each number increases by 2. The next is 10.',
            '<strong>Wrong Number:</strong> 2, 4, 8, 15, 32 → The numbers should double: 2, 4, 8, 16, 32. So 15 is the wrong number.',
            '<strong>Finding Next Term:</strong> 1, 3, 5, 7, ? → Odd numbers sequence. Next is 9.',
            '<strong>Difference Pattern:</strong> 10, 15, 20, 25, ? → Constant difference of +5. Next is 30.',
            '<strong>Multiplication/Division:</strong> 3, 6, 12, 24, ? → Every number is multiplied by 2. Next is 48.',
            '<strong>Square/Cube Based:</strong> 1, 4, 9, 16, ? → Squares (1², 2², 3², 4²). Next is 25 (5²).',
            '<strong>Mixed Operations:</strong> 2, 5, 11, 23, ? → Multiply by 2 and add 1 (2×2+1=5, 5×2+1=11...). Next is 47 (23×2+1).'
          ]) +
          H.h2('2. Letter Series') +
          H.ul([
            '<strong>Missing Letter:</strong> A, C, E, G, ? → Skip one letter in between. Skip B, D, F, H. Next is I.',
            '<strong>Alphabetical Position:</strong> Translate letters to numbers to find the rule. A(1) → C(3) → E(5) → G(7) → I(9).',
            '<strong>Skip Pattern:</strong> A, D, G, J, ? → Jump +3 steps forward. Next is M.'
          ]) +
          H.h2('3. Alpha-Numeric Series') +
          H.p('A mix of letters and numbers: A1, C3, E5, ? → Letters skip 1, numbers increase by 2. Next is G7.') +
          H.h2('4. Mixed Series') +
          H.p('A combination of letters, numbers, and symbols: <code>A # 5 B * 8 % C</code>.') +
          H.p('Example Question: "How many numbers are immediately preceded by a letter?" (Look for Letter-Number pairs: A5, C8).'),
          {
            simplyPut: 'Look at the speed of the numbers. If they grow slowly, check addition. If they shoot up fast, check multiplication or squares.',
            dontConfuse: 'Sometimes two series are mixed together (Alternating series). E.g. 2, 10, 4, 20, 6, 30... (Look at 2, 4, 6 and 10, 20, 30 separately).',
            examTip: 'If the pattern is not obvious, calculate the difference between adjacent numbers. The difference of differences will solve it.',
            memoryTrick: 'Slow rise = Add. Fast rise = Multiply. Rocket rise = Square/Cube!',
            quickRevision: [
              'Check difference values first.',
              'Look out for mixed/alternating series.',
              'Use letter numbers to solve letter series.'
            ],
            examAsk: 'Find the next term: 2, 5, 10, 17, ? (Answer: 26, logic: +3, +5, +7, +9)'
          })
      }]
    },
    {
      id: 'coding-decoding',
      name: '4. Coding — Decoding',
      topics: [{
        id: 'coding-decoding-simple',
        title: 'Coding — Secret Languages',
        content: T('Coding-Decoding',
          'Translate a word into a secret code using a rule, or crack the code to translate it back.',
          H.h2('1. Common Coding Types') +
          H.ul([
            '<strong>Letter Coding (A=1, B=2):</strong> Letters are replaced by their alphabet position. E.g. BAD is coded as 2-1-4.',
            '<strong>Letter Shifting (A→C):</strong> Shift letters forward. E.g. CAT becomes DBU (every letter moves +1 step forward).',
            '<strong>Word Coding:</strong> CAT is coded as DOG by direct letter matching.',
            '<strong>Number Coding:</strong> CAT = 24. (C=3 + A=1 + T=20 = 24. Just add the letter positions!).',
            '<strong>Symbol Coding:</strong> Replace letters with symbols. E.g. C=@, A=$, T=#. So CAT is @$#.',
            '<strong>Reverse Coding:</strong> Replace letters with opposites from the back. A ↔ Z, B ↔ Y. E.g. CAT becomes XZG.',
            '<strong>Conditional Coding:</strong> Rules like "If first letter is a vowel, code it as 5; otherwise code as 0".',
            '<strong>Sentence Coding:</strong> Compare sentences to isolate words. "sky is blue" = "la ma pa", "blue sea" = "pa ta". Both contain "blue" and "pa", so "blue" = "pa".',
            '<strong>New Pattern Coding (CGL Tier 2):</strong> Vowels are shifted +2, and consonants are coded by their opposite letters.',
            '<strong>Matrix Coding:</strong> Read the Row number first, then Column number. E.g., if Letter E is at Row 1, Column 3, code is 13.'
          ]),
          {
            simplyPut: 'Find the translation rule used to code the first word, and use the exact same rule for the target word.',
            dontConfuse: 'Check if the letters are just scrambled. E.g. CAT → ACT. If letters are same, it is rearrangement, not shifting!',
            examTip: 'Always write the coded word directly under the original word to spot shifts easily.',
            memoryTrick: 'Scrambled letters = Rearrange. Different letters = Position Shifting!',
            quickRevision: [
              'Check for letter swaps first.',
              'Write alphabet positions for shifts.',
              'Compare sentences to find common word codes.'
            ],
            examAsk: 'If CAT is coded as DBU, what is the code for DOG? (Answer: EPH)'
          })
      }]
    },
    {
      id: 'blood-relations',
      name: '5. Blood Relations',
      topics: [{
        id: 'blood-relations-simple',
        title: 'Blood Relations — Tracing Family Trees',
        content: T('Blood Relations',
          'Solve family relation puzzles using simple drawings.',
          H.h2('1. Drawing Symbols') +
          H.ul([
            '<strong>Male member:</strong> Draw a Square Box [ ] (or write +)',
            '<strong>Female member:</strong> Draw a Circle ( ) (or write -)',
            '<strong>Married Couple (Husband == Wife):</strong> Double Line ==',
            '<strong>Siblings (Brother — Sister):</strong> Single Line —',
            '<strong>Generations:</strong> Vertical Line | (Parents on top, children below)'
          ]) +
          H.h2('2. Family Relation Types') +
          H.ul([
            '<strong>Direct Relations:</strong> Statements like "A is B\'s father, B is C\'s daughter". Draw the tree step-by-step.',
            '<strong>Coded Blood Relations:</strong> Symbols represent relations. E.g. A + B means A is father of B. Solve layer by layer.',
            '<strong>Dialogue / Pointing Based:</strong> Pointing to a picture, a person says: "He is the only son of my mother\'s husband". Solve from the end: Mother\'s husband = Father; Father\'s only son = Himself.',
            '<strong>Generation Based:</strong> Count generation gaps (Grandfather = +2, Father = +1, Sister = 0, Son = -1).',
            '<strong>Mixed Blood Relation + Sitting:</strong> Seating arrangements that mention relations. E.g. "Husband sits next to wife". Draw the family tree first to know genders!'
          ]),
          {
            simplyPut: 'Draw a family map using circles for girls and boxes for boys to trace relationships visually.',
            dontConfuse: 'Never assume someone is male or female just because of their name. "Deepak" or "Kiran" could be either gender unless stated.',
            examTip: 'For pointing questions, start reading backwards from "my/mine": "my father\'s sister" → Aunt.',
            memoryTrick: 'Squares for boys, Circles for girls, double line for marriage!',
            quickRevision: [
              'Always draw a family tree.',
              'Maternal = Mother\'s side; Paternal = Father\'s side.',
              'Check genders before choosing options.'
            ],
            examAsk: 'Pointing to a boy, a girl says "He is the son of my mother\'s only son." Who is the boy? (Answer: Her nephew)'
          })
      }]
    },
    {
      id: 'direction-distance',
      name: '6. Direction & Distance',
      topics: [{
        id: 'direction-distance-simple',
        title: 'Direction & Distance — Simple Map Reading',
        content: T('Direction & Distance',
          'Track movements on a flat surface to find where someone ends up, and how far they traveled.',
          H.h2('1. The 8 Directions Map') +
          H.p('North is always UP, South is DOWN, East is RIGHT, West is LEFT. NE, NW, SE, SW are in between.') +
          H.h2('2. Pythagoras Theorem (Shortest Distance)') +
          H.p('To find the direct shortcut line of a right-angled triangle, use:') +
          H.p('<code>Shortest Distance = √(Base² + Height²)</code>') +
          H.p('Common Triplets: 3-4-5 (if base is 3 and height is 4, hypotenuse is 5), 5-12-13.') +
          H.h2('3. Shadow Based Questions') +
          H.ul([
            '<strong>In the Morning (Sun in East):</strong> All shadows fall to the West.',
            '<strong>In the Evening (Sun in West):</strong> All shadows fall to the East.',
            '<strong>At 12 Noon:</strong> No shadows are formed.'
          ]) +
          H.h2('4. Distance vs Displacement') +
          H.p('Total Distance = sum of all walks. Displacement = direct straight line shortcut from start to finish.'),
          {
            simplyPut: 'Draw the walking path step-by-step. Remember that a right turn is clockwise (90°) and a left turn is counter-clockwise (90°).',
            dontConfuse: 'Do not mix up Left/Right turns when walking South. When walking South (down), left is your right!',
            examTip: 'For shadow questions, if the shadow is to the left or right, the person must be facing North or South.',
            memoryTrick: 'Clockwise sequence: N → E → S → W!',
            quickRevision: [
              'North = Up, South = Down, East = Right, West = Left.',
              'Right turn = Clockwise. Left turn = Counter-Clockwise.',
              'Use Pythagoras for diagonal shortcuts.'
            ],
            examAsk: 'A walks 3km North, turns right and walks 4km. How far from start? (5km)'
          })
      }]
    },
    {
      id: 'ranking-order',
      name: '7. Ranking & Order',
      topics: [{
        id: 'ranking-order-simple',
        title: 'Ranking & Order — Row Calculations',
        content: T('Ranking & Order',
          'Calculate total people or positions of individuals standing in a line.',
          H.h2('1. Total People Formula') +
          H.p('If a person\'s rank is known from both sides (Left and Right):') +
          H.p('<code>Total = Left Rank + Right Rank - 1</code>') +
          H.p('E.g. If you are 5th from left and 5th from right: 5 + 5 - 1 = 9 people.') +
          H.h2('2. Position Interchange') +
          H.p('If Person A and B swap seats, the change in rank of A is exactly equal to the change in rank of B.') +
          H.h2('3. Between / Middle People') +
          H.ul([
            '<strong>Non-Overlapping:</strong> If Total > Left + Right, then <code>Between = Total - (Left + Right)</code>.',
            '<strong>Overlapping (Crossed path):</strong> If Total < Left + Right, then <code>Between = (Left + Right) - Total - 2</code>.'
          ]),
          {
            simplyPut: 'We subtract 1 in the total formula because we counted the same person twice (once from left and once from right).',
            dontConfuse: 'Do not forget the "- 2" in the overlapping formula to remove the two endpoints.',
            examTip: 'Draw a horizontal line with ticks for positions to visualize row overlaps.',
            memoryTrick: 'Total = Top + Bottom - 1!',
            quickRevision: [
              'Total = L + R - 1.',
              'Ranks change by the same value on swapping.',
              'Use overlap formula if total is smaller than ranks sum.'
            ],
            examAsk: 'A is 10th from top and 15th from bottom. Total people? (24)'
          })
      }]
    },
    {
      id: 'alphabet-dictionary',
      name: '8. Alphabet Series & Dictionary',
      topics: [{
        id: 'alphabet-dictionary-simple',
        title: 'Alphabet Series & Dictionary Order',
        content: T('Alphabet Series',
          'Sort words alphabetically and calculate alphabet position shifts.',
          H.h2('1. Letter Positions & Reverses') +
          H.ul([
            '<strong>EJOTY Trick:</strong> E=5, J=10, O=15, T=20, Y=25. Helps count positions quickly.',
            '<strong>Reverse Position Formula:</strong> Reverse Position = 27 - Left Position (e.g. Reverse of B(2) is 27-2 = 25 (Y)).'
          ]) +
          H.h2('2. Dictionary Order (Alphabetical Sort)') +
          H.p('Sort words letter by letter. E.g. Compare <code>Apple, Ape, Apricot</code>:') +
          H.ol([
            'Compare 1st letters: All start with "A".',
            'Compare 2nd letters: Ape has "p", Apple has "p", Apricot has "r". Since "p" comes before "r", Apricot is last.',
            'Compare 3rd letters of Ape and Apple: Ape has "e" (5th), Apple has "p" (16th). Since "e" comes before "p", Ape is first.',
            'Final Dictionary Order: Ape, Apple, Apricot.'
          ]) +
          H.h2('3. Word Formation') +
          H.p('Find if you can make a word using letters of a main word. E.g. <code>TEMPORARY</code> can form <code>POET</code> but not <code>TEARS</code> (no letter S).'),
          {
            simplyPut: 'Dictionary order is exactly how names are sorted in a phonebook or classroom attendance list.',
            dontConfuse: 'Do not reuse a letter if it only appears once in the main word.',
            examTip: 'Reverse letter pairs always add up to 27 (A(1) + Z(26) = 27).',
            memoryTrick: 'EJOTY jumps by 5 steps!',
            quickRevision: [
              'A-Z positions sum to 27 with reverses.',
              'Dictionary sort compares letters from left to right.',
              'Word formation limits letter usage counts.'
            ],
            examAsk: 'Sort in dictionary order: Bird, Bell, Blue. (Bell, Bird, Blue)'
          })
      }]
    },
    {
      id: 'word-formation',
      name: '9. Word Formation & Anagrams',
      topics: [{
        id: 'word-formation-simple',
        title: 'Word Formation & Anagrams',
        content: T('Word Formation',
          'Rearrange letter scrambles to form real English words.',
          H.h2('1. Anagrams') +
          H.p('Rearrange all the letters of a word to form a new word. E.g. <code>LISTEN</code> ↔ <code>SILENT</code>.') +
          H.h2('2. Odd Anagram Out') +
          H.p('Unscramble the options first, then find the odd word. E.g. <code>1. ENP (PEN), 2. RAC (CAR), 3. APREG (GRAPE)</code>. Grape is odd because it is a fruit, others are common nouns/vehicles.') +
          H.h2('3. Building Words') +
          H.p('Find how many meaningful words can be formed from given letters (e.g. E, A, T, S can form SEAT, EAST, SATE).'),
          {
            simplyPut: 'Unscramble the letters to find meaningful English words.',
            dontConfuse: 'You must use every letter provided, and cannot add any extra letters.',
            examTip: 'Place vowels in different places to check syllable combinations.',
            memoryTrick: 'Write letters in a circle to see word patterns easier!',
            quickRevision: [
              'Use each letter exactly once.',
              'Group anagrams by category.',
              'Check vowel placements.'
            ],
            examAsk: 'How many words can be formed from EATR? (3: RATE, TEAR, TARE)'
          })
      }]
    },
    {
      id: 'mathematical-operations',
      name: '10. Mathematical Operations',
      topics: [{
        id: 'mathematical-operations-simple',
        title: 'Mathematical Operations — Symbol Math',
        content: T('Mathematical Operations',
          'Solve equations after replacing code letters/symbols with math signs.',
          H.h2('1. BODMAS Order') +
          H.ul([
            'Solve calculations in this strict order: <strong>Brackets → Of → Division (÷) → Multiplication (×) → Addition (+) → Subtraction (-)</strong>.'
          ]) +
          H.h2('2. Replacement Method') +
          H.p('If A means +, B means -, C means ×, D means ÷. Translate first:') +
          H.p('<code>10 A 5 C 2</code> → <code>10 + 5 × 2</code>. Solve multiplication first: <code>10 + 10 = 20</code>.') +
          H.h2('3. Division Quick Elimination') +
          H.p('Check the division (÷) sign. If substituting division creates a decimal fraction (e.g., 7 ÷ 3 = 2.33) and the RHS is a clean whole number, that option is wrong. Cross it out immediately!'),
          {
            simplyPut: 'Swap letters for real math signs, then calculate using standard BODMAS rules (divide and multiply before adding and subtracting).',
            dontConfuse: 'Do not solve straight left-to-right. Always follow BODMAS.',
            examTip: 'Use the division check to eliminate wrong options instantly.',
            memoryTrick: 'Target the division sign first!',
            quickRevision: [
              'Replace symbols with signs first.',
              'Follow BODMAS strictly.',
              'Eliminate options using division fractions.'
            ],
            examAsk: 'If + means ÷, × means -, find: 8 + 2 × 3. (Answer: 8 ÷ 2 - 3 = 1)'
          })
      }]
    },
    {
      id: 'missing-number',
      name: '11. Missing Number',
      topics: [{
        id: 'missing-number-simple',
        title: 'Missing Number — Puzzle Patterns',
        content: T('Missing Number',
          'Find missing numbers in shapes or grids using simple patterns.',
          H.h2('1. Grids & Tables') +
          H.p('Look at how numbers in a row or column relate. E.g. Row 1 + Row 2 = Row 3.') +
          H.h2('2. Triangles & Circles') +
          H.ul([
            '<strong>Triangles:</strong> Solve by combining the outer three corners to get the center number.',
            '<strong>Circles:</strong> Numbers opposite to each other are often related (e.g., 3 is opposite 9 (3²), 4 is opposite 16 (4²)).'
          ]),
          {
            simplyPut: 'Find where the largest numbers are. If they are at the bottom of the table, work vertically. If on the right, work horizontally.',
            dontConfuse: 'Try simple operations (sums, differences, products) first before trying squares or cubes.',
            examTip: 'The sum of all numbers in each row or column is often a constant.',
            memoryTrick: 'Look for the direction of the big numbers!',
            quickRevision: [
              'Check row/column sums.',
              'Try multiplying corners in triangles.',
              'Look for opposite square/cube pairs in wheels.'
            ],
            examAsk: 'Corners: 2, 3, 5. Center: 30. (Answer: 2×3×5 = 30)'
          })
      }]
    },
    {
      id: 'sitting-arrangement',
      name: '12. Sitting Arrangement',
      topics: [{
        id: 'sitting-arrangement-simple',
        title: 'Sitting Arrangement — Row & Circle Seating',
        content: T('Sitting Arrangement',
          'Arrange a group of people in seats based on clues.',
          H.h2('1. Linear Seating (Rows)') +
          H.ul([
            '<strong>Facing North:</strong> Left is your left hand side, Right is your right hand side.',
            '<strong>Facing South:</strong> Left is your right hand side, Right is your left hand side.'
          ]) +
          H.h2('2. Circular Seating') +
          tbl(['Facing Direction', 'Right Turn is...', 'Left Turn is...'], [
            ['Facing Centre (Inward)', 'Counter-Clockwise (CCW)', 'Clockwise (CW)'],
            ['Facing Outside (Outward)', 'Clockwise (CW)', 'Counter-Clockwise (CCW)']
          ]) +
          H.h2('3. Rectangular & Complex Seating') +
          H.p('Sellers sitting on sides or corners. Complex seating combines traits: "A sits at a corner and is a Doctor". Use a clean table grid to match categories.'),
          {
            simplyPut: 'Draw a circle or line with tick marks. Place the first person using a concrete clue (like "at the end" or "immediate right").',
            dontConfuse: '"A is sitting next to B" means A can be on B\'s left or right. Verify both possibilities.',
            examTip: 'Start drawing from concrete clues that give absolute positions. Avoid starting with vague clues.',
            memoryTrick: 'Circle facing center: Right turn is CCW, Left turn is CW!',
            quickRevision: [
              'Linear: North = standard, South = reversed.',
              'Circular: Inward right = CCW.',
              'Start with fixed position clues.'
            ],
            examAsk: '6 people in circle facing inside. A is 2nd to right of B...'
          })
      }]
    },
    {
      id: 'puzzle',
      name: '13. Puzzle',
      topics: [{
        id: 'puzzle-simple',
        title: 'Puzzles — Stacking & Matching',
        content: T('Puzzle',
          'Solve multi-variable matching problems using systematic grids.',
          H.h2('1. Puzzle Types') +
          tbl(['Type', 'Best Approach', 'Helpful Rule'], [
            ['Floor Puzzles', 'Write floor numbers 8 to 1 vertically', 'Put fixed clues on their floors first.'],
            ['Box Stacking', 'Stack relative boxes vertically', 'Count the gaps between boxes.'],
            ['Scheduling', 'Write days Mon-Sun as column headers', 'Fix days of events.'],
            ['Comparison', 'Use chain inequalities (A > B > C)', 'Rank by height, weight, or age.']
          ]) +
          H.h2('2. The Two-Case Method') +
          H.p('If a clue has two options (e.g. "A is on floor 3 or 4"), draw both cases side-by-side. One case will break later; cross it out.'),
          {
            simplyPut: 'Write all details in a grid. Cross out combinations that are impossible, and fill in the ones that match.',
            dontConfuse: 'Do not confuse "above" with "immediately above". "Above" can have other items in between.',
            examTip: 'Always stack floor numbers vertically with the highest floor at the top.',
            memoryTrick: 'Draw Case 1 and Case 2. Keep the winner, bin the loser!',
            quickRevision: [
              'Draw vertical numbers for floors.',
              'Use parallel draft cases.',
              'Cross out failed combinations.'
            ],
            examAsk: 'A lives on an odd floor above B...'
          })
      }]
    },
    {
      id: 'syllogism',
      name: '14. Syllogism',
      topics: [{
        id: 'syllogism-simple',
        title: 'Syllogism — Venn Circles',
        content: T('Syllogism',
          'Test if conclusions are true based on statements using simple circles.',
          H.h2('1. Venn Drawings') +
          H.ul([
            '<strong>All A are B:</strong> Draw circle A inside circle B.',
            '<strong>Some A are B:</strong> Draw circles A and B overlapping.',
            '<strong>No A is B:</strong> Draw circles A and B completely separate.'
          ]) +
          H.h2('2. Either-Or Conditions') +
          H.p('Choose Either-Or when:') +
          H.ol([
            'Both conclusions are individually doubtful/false.',
            'Both have same words (e.g. Pen, Paper).',
            'One is positive (Some), one is negative (No).'
          ]) +
          H.h2('3. Possibility Cases') +
          H.p('Conclusions like "Some A can be B". True if you can draw even one valid diagram where they overlap.'),
          {
            simplyPut: 'Draw the minimum possible overlap of circles. A conclusion is 100% true only if it is true in all possible circle drawings.',
            dontConfuse: '"Some A are B" does not prove "Some A are not B". Never assume negative facts from positive statements.',
            examTip: 'Definite conclusions must hold true in every single diagram you can possibly draw.',
            memoryTrick: 'Definite = True in all diagrams. Possibility = True in at least one diagram!',
            quickRevision: [
              'Draw basic overlap circle diagram.',
              'Test definite claims in all diagrams.',
              'Watch for Either-Or pairs.'
            ],
            examAsk: 'Statements: All cups are plates. Some plates are jugs. Conclusions: ...'
          })
      }]
    },
    {
      id: 'inequality',
      name: '15. Inequality',
      topics: [{
        id: 'inequality-simple',
        title: 'Inequality — Gate Paths',
        content: T('Inequality',
          'Compare sizes of variables using symbols (>, <, =).',
          H.h2('1. Priority Order') +
          H.p('The symbols have priorities: <code>King (>) > Soldier (≥) > Equal (=)</code>.') +
          H.h2('2. The Gate Method') +
          H.p('Think of <code>A > B</code> as an open gate from A to B. You can walk from A to B, but not from B to A.') +
          H.ul([
            'To prove <code>X > Y</code>: You must be able to walk from X to Y, and at least one step must have a King (>) sign.',
            'To prove <code>X ≥ Y</code>: You must be able to walk from X to Y, and every step must have a Soldier (≥) or Equal (=) sign.'
          ]) +
          H.h2('3. Blocked Paths') +
          H.p('If gates face opposite directions (e.g. <code>A > B < C</code>), you cannot go between A and C. The path is blocked.'),
          {
            simplyPut: 'Follow the open mouth of the signs. If the signs face opposite directions, no relation can be made between the endpoints.',
            dontConfuse: 'In <code>A ≥ B = C</code>, <code>A > C</code> is false because there is no > sign on the path. The correct answer is <code>A ≥ C</code>.',
            examTip: 'Opposite facing signs mean any simple comparison between the endpoints is immediately false.',
            memoryTrick: 'Open mouth: Walk. Pointy end: Stop!',
            quickRevision: [
              'King (>) beats Soldier (≥).',
              'Opposite signs block paths.',
              'Either-Or applies when path is blocked and all 3 signs (>, <, =) are covered.'
            ],
            examAsk: 'A > B ≥ C = D. Conclusion: A > D (True)'
          })
      }]
    },
    {
      id: 'input-output',
      name: '16. Input — Output',
      topics: [{
        id: 'input-output-simple',
        title: 'Input — Output Machines',
        content: T('Input - Output',
          'Trace how a machine sorts a list of words or numbers step-by-step.',
          H.h2('1. Sorting Steps') +
          H.ul([
            'Compare the Input with the final step to find the sorting logic (e.g. words alphabetically, numbers descending).',
            'In each step, sort one item. If an item lands in its correct place automatically, it is auto-filled (doesn\'t count as a new step).',
            '<strong>Rule:</strong> You cannot go backward (e.g. finding input from Step 3 is impossible).'
          ]) +
          H.h2('2. Arrangement Types') +
          tbl(['Type', 'Action'], [
            ['Word arrangement', 'Sort alphabetically or by word length.'],
            ['Number arrangement', 'Sort in ascending or descending order.'],
            ['Alternating sorting', 'Sort a word at the left, then a number at the right.']
          ]),
          {
            simplyPut: 'Find the sorting goal in the final step. Apply that same sorting rule step-by-step to the new input.',
            dontConfuse: 'Do not count auto-arranged elements as new steps.',
            examTip: 'Count the unsorted elements to estimate the total steps quickly.',
            memoryTrick: 'Final step = Goal. Find the rule!',
            quickRevision: [
              'Find target logic first.',
              'Trace step-by-step; watch for auto-fills.',
              'Cannot go backward.'
            ],
            examAsk: 'Input: 40 apple 10 dog. What is Step 1?'
          })
      }]
    },
    {
      id: 'statement-logic',
      name: '17. Statement Logic',
      topics: [{
        id: 'statement-logic-simple',
        title: 'Statement Logic — Verbal Reasoning',
        content: T('Statement Logic',
          'Make logical decisions based strictly on statements.',
          H.h2('1. Assumptions & Conclusions') +
          H.ul([
            '<strong>Assumptions:</strong> Something implicit or taken for granted by the speaker.',
            '<strong>Conclusions:</strong> Must follow 100% directly from the statement without assuming external facts.'
          ]) +
          H.h2('2. Arguments & Course of Action') +
          H.ul([
            '<strong>Strong Arguments:</strong> Must be practical, logical, and address the main issue directly.',
            '<strong>Course of Action:</strong> A balanced, practical solution to a problem. Harsh punishments are always wrong.'
          ]) +
          H.h2('3. Cause & Effect') +
          H.p('Determine which event caused the other (Cause must happen first in time).'),
          {
            simplyPut: 'Assume the statement is 100% true. Do not choose options with extreme words like "always", "only", or "never".',
            dontConfuse: 'Do not use your own general knowledge. Stick strictly to what is written in the statement.',
            examTip: 'Extreme words (all, only, must, never) usually make conclusions or assumptions incorrect.',
            memoryTrick: 'Be moderate! Extreme words = Fails!',
            quickRevision: [
              'Assume statement is true.',
              'Avoid extreme words.',
              'Course of action must be constructive.'
            ],
            examAsk: 'Statement: If you study, you pass. Conclusion: Failures did not study. (Answer: False - other reasons possible)'
          })
      }]
    },
    {
      id: 'venn-diagram',
      name: '18. Venn Diagram',
      topics: [{
        id: 'venn-diagram-simple',
        title: 'Venn Diagram — Overlapping Shapes',
        content: T('Venn Diagram',
          'Use intersecting circles/shapes to represent relationships between groups.',
          H.h2('1. Category Relations') +
          H.ul([
            'Concentric Circles (Concentric): <code>Seconds, Minutes, Hours</code> (Seconds are inside minutes, minutes are inside hours).',
            'Intersecting Circles (Overlapping): <code>Singer, Dancer, Actor</code> (Some people are both).',
            'Separate Circles: <code>Car, Cat, Cup</code> (No connection).'
          ]) +
          H.h2('2. Region Identification') +
          tbl(['Region Query', 'Meaning', 'Action'], [
            ['Intersection of shapes', 'Common members', 'Find numbers inside both shapes.'],
            ['Only 1 shape', 'Exclusive members', 'Find numbers inside that shape alone (exclude overlaps).']
          ]),
          {
            simplyPut: 'Match real-world classes to overlapping circles. For numerical Venns, read the overlapping numbers directly.',
            dontConfuse: 'Do not exclude other shapes in an intersection query unless the word "Only" is written.',
            examTip: 'For "Doctors who are Teachers", count both double and triple overlaps unless told otherwise.',
            memoryTrick: '"Only" = Exclude all other shapes!',
            quickRevision: [
              'Draw category overlaps.',
              'Identify target shape combinations.',
              'Watch for "only" constraints.'
            ],
            examAsk: 'Which diagram represents: Dog, Cat, Animal? (Two separate circles inside a larger one)'
          })
      }]
    },
    {
      id: 'calendar',
      name: '19. Calendar',
      topics: [{
        id: 'calendar-simple',
        title: 'Calendar — Calculating Days',
        content: T('Calendar',
          'Calculate dates and days of the week using odd days.',
          H.h2('1. Leap Year Rules') +
          H.p('Leap years divide by 4. Century years (ending in 00) must divide by 400. E.g. 2000 is leap; 1900 is NOT.') +
          H.h2('2. Odd Days Table') +
          tbl(['Year/Month Type', 'Days', 'Odd Days (Remainder after dividing by 7)'], [
            ['Ordinary Year', '365', '1 odd day'],
            ['Leap Year', '366', '2 odd days'],
            ['31-Day Month', '31', '3 odd days'],
            ['30-Day Month', '30', '2 odd days']
          ]) +
          H.h2('3. Repeating Calendar Years') +
          H.p('Divide the year by 4 and check remainder:') +
          H.ul([
            'Remainder 1: Add 6 years (e.g. 2021 repeats in 2027)',
            'Remainder 2 or 3: Add 11 years (e.g. 2022 repeats in 2033)',
            'Remainder 0 (Leap Year): Add 28 years (e.g. 2024 repeats in 2052)'
          ]),
          {
            simplyPut: 'Every 7 days the day of the week repeats. Divide total days by 7 and shift forward by the remainder (odd days) to find the new day.',
            dontConfuse: 'Remember that 1900 is not a leap year. February 1900 has 28 days.',
            examTip: 'An ordinary year starts and ends on the same day of the week.',
            memoryTrick: 'Leap repeats in 28, Leap+1 in 6, others in 11 years!',
            quickRevision: [
              'Leap years divide by 4 (or 400 for centuries).',
              'Ordinary year = 1 odd day; Leap = 2.',
              'Repeating calendars follow the 6-11-28 rule.'
            ],
            examAsk: 'If Jan 1, 2015 was Thursday, Jan 1, 2016 was? (Friday)'
          })
      }]
    },
    {
      id: 'clock',
      name: '20. Clock',
      topics: [{
        id: 'clock-simple',
        title: 'Clock — Hands and Angles',
        content: T('Clock',
          'Calculate angles between hands and coinciding times.',
          H.h2('1. Speed of Hands') +
          H.ul([
            'Minute Hand moves 6° per minute.',
            'Hour Hand moves 0.5° per minute.',
            'Relative Speed: Minute hand gains 5.5° per minute over Hour hand.'
          ]) +
          H.h2('2. Angle Formula') +
          H.p('To find the angle (θ) between the hands at H hours and M minutes:') +
          H.p('<code>Angle (θ) = |30H - 5.5M|</code>') +
          H.h2('3. Overlaps & Right Angles') +
          H.ul([
            'Hands coincide (0°): 22 times in 24 hours.',
            'Hands opposite (180°): 22 times in 24 hours.',
            'Hands at right angles (90°): 44 times in 24 hours.'
          ]),
          {
            simplyPut: 'Use the angle formula θ = |30H - 5.5M| to find the angle between hands at any time.',
            dontConfuse: 'Hands coincide 22 times (not 24 times) in a day because the overlap at 12:00 covers both the 11-12 and 12-1 periods.',
            examTip: 'Subtract result from 360° if the reflex angle is asked.',
            memoryTrick: 'Formula: 30 × Hours minus 5.5 × Minutes!',
            quickRevision: [
              'Angle = |30H - 5.5M|.',
              'Relative gain = 5.5°/min.',
              'Hands coincide 22 times/day.'
            ],
            examAsk: 'Angle at 4:30? (|30(4) - 5.5(30)| = |120 - 165| = 45°)'
          })
      }]
    },
    {
      id: 'mirror-image',
      name: '21. Mirror Image',
      topics: [{
        id: 'mirror-image-simple',
        title: 'Mirror Image — Sideways Flip',
        content: T('Mirror Image',
          'Find the appearance of letters or shapes when flipped sideways.',
          H.h2('1. Core Principle') +
          H.ul([
            '<strong>Left becomes Right, Right becomes Left.</strong>',
            'Top and Bottom do not change.'
          ]) +
          H.h2('2. Symmetric Capitals (11 letters)') +
          H.p('A, H, I, M, O, T, U, V, W, X, Y remain identical in the mirror.') +
          H.h2('3. Closest Element Rule') +
          H.p('The element closest to the mirror in the original must be closest to the mirror in the reflected image.'),
          {
            simplyPut: 'Flip the shape sideways like page-turning. Top stays at the top.',
            dontConfuse: 'Do not flip upside down. Upside down is a water image.',
            examTip: 'Draw the shape on rough paper and turn it over to see the mirror image from the back.',
            memoryTrick: 'Mirror = Sideways flip!',
            quickRevision: [
              'Left-right flip; top-bottom remains unchanged.',
              'Check closest elements to the mirror.',
              '11 capitals are symmetric.'
            ],
            examAsk: 'Mirror image of CAT? (TAC with letters flipped)'
          })
      }]
    },
    {
      id: 'water-image',
      name: '22. Water Image',
      topics: [{
        id: 'water-image-simple',
        title: 'Water Image — Upside Down Flip',
        content: T('Water Image',
          'Find the appearance of letters or shapes when flipped upside down.',
          H.h2('1. Core Principle') +
          H.ul([
            '<strong>Top becomes Bottom, Bottom becomes Top.</strong>',
            'Left and Right do not change.'
          ]) +
          H.h2('2. Symmetric Capitals (8 letters)') +
          H.p('C, D, E, H, I, K, O, X remain identical in water.') +
          H.h2('3. Mirror vs Water') +
          tbl(['Feature', 'Mirror Image', 'Water Image'], [
            ['Flip Axis', 'Vertical', 'Horizontal'],
            ['Left-Right changes', 'Yes', 'No'],
            ['Top-Bottom changes', 'No', 'Yes']
          ]),
          {
            simplyPut: 'Flip the shape upside down. Left side stays on the left.',
            dontConfuse: 'Do not shift elements sideways. If a details is on the left, it remains on the left.',
            examTip: 'Turn your paper 180° upside down and look at it through the back to find the water image.',
            memoryTrick: 'Water is down! Flip it down!',
            quickRevision: [
              'Top-bottom flip; left-right is constant.',
              '8 capitals are water-symmetric.',
              'Watch pointers orientations.'
            ],
            examAsk: 'Water image of KID? (KID itself)'
          })
      }]
    },
    {
      id: 'paper-folding',
      name: '23. Paper Folding & Cutting',
      topics: [{
        id: 'paper-folding-simple',
        title: 'Paper Folding & Cutting — Visualizing Creases',
        content: T('Paper Folding & Cutting',
          'Find the unfolded shape from fold and cut steps.',
          H.h2('1. Crease Mirroring') +
          H.ul([
            'Unfolding left/right: Reflect as a mirror image across vertical fold.',
            'Unfolding up/down: Reflect as a water image across horizontal fold.'
          ]) +
          H.h2('2. Solving Method') +
          H.ol([
            'Identify the final cut quadrant in the options. It must match the original cut.',
            'Reflect the pattern outward step by step in reverse folding order.',
            'Count layers: 2 folds (4 layers) means a single cut appears 4 times.'
          ]),
          {
            simplyPut: 'Unfolding is mirroring. Treat every crease line as a mirror.',
            dontConfuse: 'Make sure cuts near the center fold lines double and merge into symmetrical shapes.',
            examTip: 'Count how many layers of paper are cut to know the total number of holes in the unfolded sheet.',
            memoryTrick: 'Unfold up = Water image. Unfold side = Mirror image!',
            quickRevision: [
              'Treat folds as mirror lines.',
              'Trace in reverse folding steps.',
              'Check cuts counts based on layer counts.'
            ],
            examAsk: 'Paper folded twice, hole in corner. 4 holes in unfolded sheet.'
          })
      }]
    },
    {
      id: 'figure-series',
      name: '24. Figure Series & Completion',
      topics: [{
        id: 'figure-series-simple',
        title: 'Figure Series & Patterns',
        content: T('Figure Series',
          'Determine the next shape in a series or matrix.',
          H.h2('1. Motion Types') +
          tbl(['Pattern', 'Description'], [
            ['Rotation', 'Rotate clockwise/counter-clockwise by 45°, 90°, or 180°.'],
            ['Positions Shift', 'Move along corners or sides of a grid.'],
            ['Side Counts', 'Number of sides increases (e.g. Triangle → Square → Pentagon).']
          ]) +
          H.h2('2. Completion Matrices') +
          H.p('Complete 2×2 or 3×3 grids by finding row/column patterns (such as combining lines or shapes).'),
          {
            simplyPut: 'Track one element of the shape at a time. Watch its rotation or shift, eliminate wrong options, and repeat.',
            dontConfuse: 'Do not try to look at the entire complex drawing at once. Focus on a single dot or arrow first.',
            examTip: '45° rotations are very common shifts in central exams.',
            memoryTrick: 'Follow the dot! Trace its movement corner by corner!',
            quickRevision: [
              'Track individual elements.',
              'Identify rotation angles.',
              'Check for line addition/deletions.'
            ],
            examAsk: 'Side counts in shapes: 3, 4, 5. Next? (6 sides)'
          })
      }]
    },
    {
      id: 'embedded-figures',
      name: '25. Embedded Figures',
      topics: [{
        id: 'embedded-figures-simple',
        title: 'Embedded Figures — Hidden Shapes',
        content: T('Embedded Figures',
          'Find hidden shapes inside complex drawings.',
          H.h2('1. Rotations Check') +
          H.p('Check if the question states "Rotation is not allowed". If so, the hidden shape must be in its exact original orientation.') +
          H.h2('2. Junction Method') +
          H.ul([
            'Identify unique corners or intersections in the target shape.',
            'Find those exact corners in the complex drawing.',
            'Trace surrounding lines to verify the shape is fully present.'
          ]),
          {
            simplyPut: 'Find the target shape hidden inside a messy grid of lines. Do not rotate it unless allowed.',
            dontConfuse: 'Avoid selecting a shape with wrong proportions, even if the angles look correct.',
            examTip: 'Trace the target shape mentally on the screen/sheet to check its exact fit.',
            memoryTrick: 'Find the sharpest junction or corner first!',
            quickRevision: [
              'Verify if rotation is permitted.',
              'Find key intersections.',
              'Confirm line length ratios.'
            ],
            examAsk: 'Identify which option holds the hidden letter "Z".'
          })
      }]
    },
    {
      id: 'figure-completion',
      name: '26. Figure Completion',
      topics: [{
        id: 'figure-completion-simple',
        title: 'Figure Completion — Symmetrical Matching',
        content: T('Figure Completion',
          'Complete a missing section of a symmetrical drawing.',
          H.h2('1. Symmetry Axis') +
          H.ul([
            'Mirror Symmetry: Quadrant is reflected vertically.',
            'Water Symmetry: Quadrant is reflected horizontally.',
            'Diagonal Symmetry: Quadrant is rotated 180°.'
          ]) +
          H.h2('2. Line Alignment') +
          H.p('Trace lines (like circles or boxes) that must cross the quadrant boundaries to complete the pattern.'),
          {
            simplyPut: 'Look at the other three quadrants and draw the missing lines symmetrically.',
            dontConfuse: 'Double check the rotation of the missing quadrant piece in the options.',
            examTip: 'Draw the missing lines in the blank space on your rough sheet to see what it should look like.',
            memoryTrick: 'Mirror the opposite quadrant!',
            quickRevision: [
              'Determine the type of symmetry.',
              'Align lines across borders.',
              'Verify shading patterns.'
            ],
            examAsk: 'Complete the circle spoke pattern.'
          })
      }]
    },
    {
      id: 'cube-dice',
      name: '27. Cube & Dice',
      topics: [{
        id: 'cube-dice-simple',
        title: 'Cube & Dice — Open & Closed Dice',
        content: T('Cube & Dice',
          'Find opposite faces of a dice and count cut painted cubes.',
          H.h2('1. Closed Dice Rules') +
          H.ul([
            '<strong>One Common Face:</strong> Write faces clockwise from the common face. Opposites line up vertically.',
            '<strong>Two Common Faces:</strong> The remaining uncommon faces on both dice are opposite each other.'
          ]) +
          H.h2('2. Open Dice alternate faces') +
          H.p('In an unfolded dice, alternate boxes along a straight line are opposite faces. No opposite faces can touch.') +
          H.h2('3. Painted Cube Cuts') +
          H.p('A cube of side n is painted and cut into 1x1x1 cubes:') +
          tbl(['Painted Faces', 'Formula', 'Example (n=3)'], [
            ['3 Faces', 'Always 8 (Corners)', '8'],
            ['2 Faces', '12 × (n - 2)', '12'],
            ['1 Face', '6 × (n - 2)²', '6'],
            ['0 Faces', '(n - 2)³', '1']
          ]),
          {
            simplyPut: 'For dice: write faces clockwise starting from the common number to find opposites. For cut cubes: use the formulas for corners, edges, faces, and core.',
            dontConfuse: 'Standard dice opposite faces sum to 7. General dice do not.',
            examTip: 'No two opposite faces of a dice can be visible together in a single drawing.',
            memoryTrick: 'Open Dice: Skip one box to find the opposite face!',
            quickRevision: [
              'Clockwise trace matches opposites.',
              'Opposites cannot touch or show together.',
              'Cube cuts: 3-face is always 8.'
            ],
            examAsk: 'Common face 3. Clockwise: 3-1-2 and 3-5-6. Opposite of 1? (5)'
          })
      }]
    },
    {
      id: 'counting-figures',
      name: '28. Counting of Figures',
      topics: [{
        id: 'counting-figures-simple',
        title: 'Counting of Figures — Shortcuts',
        content: T('Counting of Figures',
          'Count triangles, squares, and lines in complex shapes.',
          H.h2('1. Triangles Counting') +
          H.ul([
            'Vertical split: Add base parts (1+2+3 = 6).',
            'Crossed box: Count partitions and multiply by 2 (8 parts = 16 triangles).'
          ]) +
          H.h2('2. Squares & Rectangles') +
          H.p('For an m×n grid:') +
          H.ul([
            '<strong>Squares:</strong> Multiply rows and cols, decrementing both by 1 until one becomes 0: (3×3) + (2×2) + (1×1) = 14.',
            '<strong>Rectangles:</strong> (Sum of rows) × (Sum of cols): (1+2+3) × (1+2+3) = 36.'
          ]) +
          H.h2('3. Straight Lines') +
          H.p('Count lines by categories: Horizontal + Vertical + Slanted lines.'),
          {
            simplyPut: 'Use sums of base numbers for simple triangles, and row/column products for grids.',
            dontConfuse: 'Rectangle counts include squares. Subtract squares if "rectangles only" is asked.',
            examTip: 'Break complex shapes into smaller standard shapes, apply formulas, and count overlaps manually.',
            memoryTrick: 'Squares = Sum of square products. Rectangles = Sum of rows × Sum of cols!',
            quickRevision: [
              'Vertical split base = sum of segments.',
              'Crossed box = segments × 2.',
              'Straight lines must not be counted in pieces.'
            ],
            examAsk: 'Triangles in a star? (5-point star = 10, 6-point star = 8)'
          })
      }]
    },
    {
      id: 'matrix-reasoning',
      name: '29. Matrix (Reasoning)',
      topics: [{
        id: 'matrix-reasoning-simple',
        title: 'Matrix Reasoning — Grid Codes',
        content: T('Matrix Reasoning',
          'Find letter coordinates in grid tables.',
          H.h2('1. Row-Column Convention') +
          H.p('Cell is coded as (Row, Column). E.g. Row 2, Column 4 is represented as 24.') +
          H.h2('2. Solving Word Queries') +
          H.p('To verify the code for a word (e.g. <code>SOUP</code>):') +
          H.ol([
            'Check option codes starting from the <strong>last letter</strong> (P) first.',
            'Eliminate options that fail. This is the fastest way to solve.'
          ]),
          {
            simplyPut: 'Find coordinates by reading the row number first, then the column number. Validate options backwards.',
            dontConfuse: 'Never read column first. Row comes first.',
            examTip: 'Checking codes from back-to-front eliminates wrong options in seconds.',
            memoryTrick: 'RC = Row first, Column second!',
            quickRevision: [
              'Coordinates: Row, Column.',
              'Check codes from last letter to first.',
              'Eliminate immediately.'
            ],
            examAsk: 'Code for word "CAP" from matrices.'
          })
      }]
    },
    {
      id: 'distance-direction-sitting',
      name: '30. Distance & Direction Based Sitting',
      topics: [{
        id: 'distance-direction-sitting-simple',
        title: 'Distance & Direction Based Sitting',
        content: T('Distance & Direction Sitting',
          'Combine sitting positions, facing directions, and physical distances.',
          H.h2('1. Drawing Steps') +
          H.ul([
            'Draw positions relative to coordinates (North is up, East is right).',
            'Draw lines proportional to their distance value (e.g. 10m line must look longer than a 5m line).',
            'Calculate relative angles (e.g. "A is South-West of C").'
          ]) +
          H.h2('2. Distance vs Facing') +
          H.p('Remember: "Sitting to the North of B" means physical location is above B. "Facing North" means the person is looking upwards.'),
          {
            simplyPut: 'Draw a mini map using direction rules and label line lengths clearly. Proportions prevent visual mistakes.',
            dontConfuse: 'A sitting to the North of B does not mean A faces North. They are different clues.',
            examTip: 'Draw lines to scale. A 10m line should look twice as long as a 5m line.',
            memoryTrick: 'Scale matters! Long distance = Long line!',
            quickRevision: [
              'N/S/E/W coordinates.',
              'Proportional line drawing.',
              'Separate sitting location from facing direction.'
            ],
            examAsk: 'A sits 3m North of B. C sits 4m East of B. Shortest distance AC? (5m)'
          })
      }]
    },
    {
      id: 'critical-reasoning',
      name: '31. Critical Reasoning',
      topics: [{
        id: 'critical-reasoning-simple',
        title: 'Critical Reasoning — Logic Analysis',
        content: T('Critical Reasoning',
          'Analyze arguments, assumptions, flaws, and inferences.',
          H.h2('1. Argument Elements') +
          tbl(['Premise', 'Assumption', 'Conclusion', 'Inference'], [
            ['Stated fact in the text.', 'Unstated bridge connecting premise and conclusion.', 'The final claim of the argument.', 'Logical deduction that must be true based on premises.']
          ]) +
          H.h2('2. Strengthening & Weakening') +
          H.ul([
            'Strengthen: Support the assumption or provide new validating facts.',
            'Weaken: Expose a logical flaw, break the assumption bridge, or show an alternative cause.'
          ]) +
          H.h2('3. Flaw Detection') +
          H.p('Watch out for causation vs correlation errors (assuming A caused B just because they happened together) and circular reasoning.'),
          {
            simplyPut: 'Premise + Assumption = Conclusion. To strengthen/weaken, support or break the unstated Assumption.',
            dontConfuse: 'An inference must be 100% true based on premises, without requiring any external assumptions.',
            examTip: 'Negation Test: Assume the option is false. If this negates and breaks the argument, then it is indeed the core assumption.',
            memoryTrick: 'Negated Assumption breaks the argument!',
            quickRevision: [
              'Premises are facts.',
              'Assumption is the hidden link.',
              'Inference requires zero assumptions.'
            ],
            examAsk: 'Which option, if true, weakens the argument?'
          })
      }]
    },
    {
      id: 'data-sufficiency',
      name: '32. Data Sufficiency',
      topics: [{
        id: 'data-sufficiency-simple',
        title: 'Data Sufficiency — Enough Info?',
        content: T('Data Sufficiency',
          'Determine if given statements are sufficient to answer a question.',
          H.h2('1. Sufficiency Rules') +
          tbl(['Case', 'Meaning'], [
            ['Statement 1 Alone', 'Statement 1 gives a unique answer; 2 does not.'],
            ['Statement 2 Alone', 'Statement 2 gives a unique answer; 1 does not.'],
            ['Either Alone', 'Each statement gives the answer independently.'],
            ['Both Together', 'Only sufficient when statements 1 and 2 are combined.'],
            ['Neither', 'Even combined, they do not give a unique answer.']
          ]) +
          H.h2('2. Crucial Rule: Do Not Calculate!') +
          H.p('Only check if a unique answer is possible. Do not spend time calculating the actual value.'),
          {
            simplyPut: 'Check Statement 1. Check Statement 2. If both fail individually, combine them. Never calculate the final numbers.',
            dontConfuse: 'A statement giving a definite "No" is still sufficient. Sufficiency means getting a unique "Yes" or "No".',
            examTip: 'Forget Statement 1 data completely when testing Statement 2 alone.',
            memoryTrick: 'Test 1. Test 2. Combine only if both fail!',
            quickRevision: [
              'Sufficiency = unique answer possible.',
              'No is a valid sufficient answer.',
              'Do not mix statements early.'
            ],
            examAsk: 'Is x odd? 1. x is even (Sufficient, answer is No)'
          })
      }]
    },
    {
      id: 'decision-making',
      name: '33. Decision Making',
      topics: [{
        id: 'decision-making-simple',
        title: 'Decision Making — Criteria Checks',
        content: T('Decision Making',
          'Evaluate criteria to select, reject, or refer candidates.',
          H.h2('1. Eligibility Tables') +
          H.p('Check candidates against main requirements: Age limit, Degree marks, Exam score, Experience.') +
          H.h2('2. Sub-clauses / Exceptions') +
          H.ul([
            'If candidate fails a mark requirement but has high experience, they may be referred to Director.',
            'If details are not mentioned, choose "Data Insufficient".'
          ]) +
          H.h2('3. Matching Outcomes') +
          tbl(['Candidate Case', 'Action'], [
            ['Meets all main criteria', 'Select candidate'],
            ['Fails main criteria (no exception)', 'Reject candidate'],
            ['Fails main but meets exception', 'Refer to specified authority'],
            ['Details missing', 'Data Insufficient']
          ]),
          {
            simplyPut: 'Check qualifications off against requirements one by one. Check exceptions for any failures.',
            dontConfuse: 'Do not reject a candidate immediately for failing a main criterion. Check for alternative sub-clauses first.',
            examTip: 'Draw a simple grid to check off requirements for each candidate profile.',
            memoryTrick: 'Match checklist, check exceptions, look for missing data!',
            quickRevision: [
              'Compare candidate to criteria.',
              'Check exceptions for failures.',
              'Incomplete profiles trigger "data insufficient".'
            ],
            examAsk: 'Is candidate selected under these criteria?'
          })
      }]
    }
  ]
};
})();
