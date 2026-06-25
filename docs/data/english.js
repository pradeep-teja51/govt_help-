(function() {
window.GA_DATA = window.GA_DATA || {};
const H = window.GA_HELPERS;
const T = (...args) => H.topic(...args);
const tbl = H.table;

window.GA_DATA.english = {
  id: 'english',
  name: 'English',
  color: '#06b6d4',
  icon: '📝',
  chapters: [
    {
      id: 'vocabulary',
      name: 'Vocabulary',
      topics: [{
        id: 'vocabulary-notes',
        title: 'Vocabulary — Synonyms, Antonyms, Idioms & Misused Words',
        content: T('Vocabulary',
          'Concepts of synonyms/antonyms, one word substitutions, idioms, phrasal verbs, collocations, confusing words, and foreign words.',
          H.h2('1. Synonyms & Antonyms') +
          H.p('**Synonyms** are words with similar meanings. **Antonyms** are words with opposite meanings.') +
          tbl(['Word', 'Synonym', 'Antonym', 'Simply Put'], [
            ['Abundant', 'Plentiful, Ample', 'Scarce, Meager', 'Having a lot of something'],
            ['Benevolent', 'Kind, Generous', 'Malevolent, Cruel', 'Wishing well for others'],
            ['Candid', 'Frank, Honest', 'Deceitful, Guarded', 'Speaking directly and truthfully'],
            ['Diligent', 'Hardworking, Active', 'Lazy, Idle', 'Putting effort into work']
          ]) +
          H.h2('2. One Word Substitution') +
          H.p('Replacing a whole sentence with one single word to make it crisp.') +
          H.ul([
            '**Atheist:** One who does not believe in the existence of God.',
            '**Bibliophile:** A person who loves and collects books.',
            '**Optimist:** One who looks at the bright side of things.',
            '**Epistolary:** Relating to the writing of letters.'
          ]) +
          H.h2('3. Idioms & Phrases') +
          H.p('Expressions where the meaning is NOT literal but figurative.') +
          H.ul([
            '**Bite the bullet:** To face a difficult situation with courage.',
            '**Burn the midnight oil:** To work or study late into the night.',
            '**Spill the beans:** To reveal a secret accidentally.',
            '**Once in a blue moon:** An event that happens very rarely.'
          ]) +
          H.h2('4. Phrasal Verbs') +
          H.p('Verb + Preposition/Adverb combinations that take a new meaning.') +
          H.ul([
            '**Break down:** Stop functioning (machinery) or lose emotional control.',
            '**Call off:** To cancel something (e.g. they called off the strike).',
            '**Look up to:** To respect and admire someone.'
          ]) +
          H.h2('5. Confusing & Misused Words') +
          H.p('Words that sound similar but have different meanings/spellings:') +
          H.ul([
            '**Affect (verb):** To influence (e.g., "The weather affects my mood.").',
            '**Effect (noun):** The result (e.g., "The effect of the medicine was quick.").',
            '**Accept:** To receive (e.g., "Please accept my gift.").',
            '**Except:** Excluding (e.g., "Everyone went except John.").'
          ]) +
          H.h2('6. Foreign Words Used in English') +
          H.ul([
            '**Bona fide:** Genuine, in good faith.',
            '**De facto:** In reality, though not official.',
            '**Status quo:** The existing state of affairs.'
          ]),
          {
            simplyPut: 'Vocabulary is building your word power so you can understand and express thoughts clearly.',
            dontConfuse: 'Do not confuse "Affect" (starting with A is mostly an action/verb) with "Effect" (starting with E is the end result/noun).',
            examTip: 'In One Word Substitutions, words ending in "-cide" mean killing (e.g., Regicide = killing of a king, Patricide = killing of father).',
            memoryTrick: 'A-ffect = Action. E-ffect = End result.',
            quickRevision: [
              'Synonyms = same meaning | Antonyms = opposite meaning',
              'Idiom = non-literal phrase (spill beans = reveal secret)',
              'Phrasal verb = verb + preposition (call off = cancel)',
              'Bona fide = genuine'
            ],
            examAsk: 'What is the meaning of the idiom "Break a leg"? (Ans: Good luck!)'
          })
      }]
    },
    {
      id: 'spelling',
      name: 'Spelling',
      topics: [{
        id: 'spelling-notes',
        title: 'Spelling — Common Rules and Pitfalls',
        content: T('Spelling',
          'How to identify correctly and incorrectly spelled words, and rules to avoid common spelling errors.',
          H.h2('1. The "I before E except after C" Rule') +
          H.p('Write **i** before **e**, except after the letter **c**, or when it sounds like "ay" (as in neighbor).') +
          H.ul([
            'Exceptions after C: Re**cei**ve, De**cei**ve, Con**cei**ve (e comes before i).',
            'Standard case: Bel**ie**ve, Rel**ie**ve, Fr**ie**nd (i comes before e).'
          ]) +
          H.h2('2. Adding Suffixes (-ing, -ed, -ment)') +
          H.ul([
            '**Double the consonant:** If a short vowel word ends in a single consonant, double it before adding a suffix starting with a vowel (e.g., Run → Ru**nn**ing, Clap → Cla**pp**ed).',
            '**Drop the silent E:** Drop the ending "e" if the suffix starts with a vowel (e.g., Hope + ing = Ho**pi**ng. But keep it if suffix starts with consonant: Hope + ful = Ho**pe**ful).'
          ]) +
          H.h2('3. Most Common Spelling Mistakes in Exams') +
          tbl(['Common Misspelling', 'Correct Spelling', 'Exam Focus'], [
            ['Accomodate', 'Accommodate', 'Double C and Double M'],
            ['Committee', 'Committee', 'Double M, Double T, and Double E'],
            ['Embarass', 'Embarrass', 'Double R and Double S'],
            ['Occured', 'Occurred', 'Double C and Double R'],
            ['Seperate', 'Separate', 'Has "para" in the middle ("se-par-ate")'],
            ['Recieve', 'Receive', 'Follows "except after C" rule']
          ]),
          {
            simplyPut: 'Spelling rules help you remember how to write complex words correctly by watching out for double consonants, silent letters, and letter swap patterns.',
            dontConfuse: 'Hoping (from hope) has one "p". Hopping (from hop) has double "pp". They are pronounced and spelled differently!',
            examTip: 'The word "Separate" is often misspelled as "Seperate". Remember: there is "a rat" in sep**a**rat**e**.',
            memoryTrick: 'Sep-**A-RAT**-e (separate has "a rat" inside it!).',
            quickRevision: [
              'i before e, except after c (Receive vs Believe)',
              'Double consonants in: Accommodation, Committee, Embarrassment',
              'Hop + ing = Hopping | Hope + ing = Hoping'
            ],
            examAsk: 'Identify the correct spelling: (a) Occurence (b) Occurrence (c) Ocurence (d) Ocurrence? (Ans: b)'
          })
      }]
    },
    {
      id: 'grammar-parts-of-speech',
      name: 'Grammar — Parts of Speech',
      topics: [{
        id: 'parts-of-speech-notes',
        title: 'Grammar — The Eight Parts of Speech',
        content: T('Grammar — Parts of Speech',
          'Introduction and simple definitions for nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections.',
          H.h2('1. Noun') +
          H.p('Name of a person, place, thing, or idea.') +
          H.ul([
            '**Proper Noun (Specific):** Delhi, Rahul, Microsoft.',
            '**Common Noun (General):** city, boy, company.',
            '**Collective Noun (Group):** herd of cows, pack of wolves, committee.',
            '**Countable vs Uncountable:** Book (countable), Water (uncountable - cannot be pluralized as waters).'
          ]) +
          H.h2('2. Pronoun') +
          H.p('Used instead of a noun to avoid repetition.') +
          H.ul([
            '**Personal:** I, you, he, she, they.',
            '**Reflexive:** myself, themselves (e.g., "He hurt himself.").',
            '**Relative:** who, which, that (e.g., "The boy **who** called you is my brother.").'
          ]) +
          H.h2('3. Verb') +
          H.p('An action or state of being word (e.g. run, is, sleep).') +
          H.ul([
            '**Transitive:** Needs a direct object (e.g., "She **wrote** a letter.").',
            '**Intransitive:** Does not need object (e.g., "The baby **slept**.").'
          ]) +
          H.h2('4. Adjective') +
          H.p('Describes or gives more info about a noun/pronoun (e.g., smart boy, blue car).') +
          H.ul([
            '**Degrees of Comparison:** Positive (tall), Comparative (taller), Superlative (tallest).'
          ]) +
          H.h2('5. Adverb') +
          H.p('Describes a verb, adjective, or another adverb. Often ends in -ly (e.g., "He runs **quickly**.").') +
          H.h2('6. Preposition') +
          H.p('Shows position, direction, or time relationship between words (e.g., **in**, **on**, **at**, **under**).') +
          H.h2('7. Conjunction') +
          H.p('Joins words, phrases, or sentences (e.g., **and**, **but**, **because**, **although**).') +
          H.h2('8. Interjection') +
          H.p('Expresses sudden emotion (e.g., **Alas!**, **Wow!**, **Ouch!**).'),
          {
            simplyPut: 'Parts of Speech are the building blocks of sentences, telling us what role each word plays in the sentence.',
            dontConfuse: 'An Adjective describes a NOUN (e.g. "quick runner"). An Adverb describes a VERB/ACTION (e.g. "runs quickly").',
            examTip: 'Uncountable nouns (like furniture, luggage, advice, information) are always treated as singular. Never write "furnitures" or "luggages".',
            memoryTrick: 'N-P-V-ADJ-ADV-PREP-CONJ-INT: The 8 components of English sentences!',
            quickRevision: [
              'Noun = Name | Pronoun = Substitute',
              'Verb = Action | Adjective = Noun describer | Adverb = Verb describer',
              'Preposition = Position/Time connector',
              'Conjunction = Linker (and, but)',
              'Uncountable nouns are always singular (luggage, advice)'
            ],
            examAsk: 'Identify the part of speech of the underlined word: "She ran **fast**" (Ans: Adverb)'
          })
      }]
    },
    {
      id: 'grammar-tenses',
      name: 'Grammar — Tenses',
      topics: [{
        id: 'grammar-tenses-notes',
        title: 'Grammar — The Twelve Tenses & Correct Usage',
        content: T('Grammar — Tenses',
          'Explanation of Present, Past, and Future tenses, their four sub-forms (Simple, Continuous, Perfect, Perfect Continuous), and their structures.',
          H.h2('1. Present Tense') +
          tbl(['Tense Form', 'Sentence Structure', 'Example Usage'], [
            ['Simple Present', 'Subject + V1 (s/es) + Object', 'She **writes** a letter. (Habitual/Fact)'],
            ['Present Continuous', 'Subject + is/am/are + V(ing) + Obj', 'She **is writing** a letter right now. (Temporary)'],
            ['Present Perfect', 'Subject + has/have + V3 + Obj', 'She **has written** the letter. (Finished recently)'],
            ['Present Perfect Continuous', 'Subject + has/have + been + V(ing) + Obj', 'She **has been writing** since 9 AM. (Started in past, continuing)']
          ]) +
          H.h2('2. Past Tense') +
          tbl(['Tense Form', 'Sentence Structure', 'Example Usage'], [
            ['Simple Past', 'Subject + V2 + Object', 'She **wrote** a letter yesterday. (Finished action)'],
            ['Past Continuous', 'Subject + was/were + V(ing) + Obj', 'She **was writing** when I entered. (Action in progress in past)'],
            ['Past Perfect', 'Subject + had + V3 + Obj', 'She **had written** before you arrived. (Completed before another past action)'],
            ['Past Perfect Continuous', 'Subject + had + been + V(ing) + Obj', 'She **had been writing** for two hours when he called.']
          ]) +
          H.h2('3. Future Tense') +
          tbl(['Tense Form', 'Sentence Structure', 'Example Usage'], [
            ['Simple Future', 'Subject + will/shall + V1 + Object', 'She **will write** a letter tomorrow.'],
            ['Future Continuous', 'Subject + will be + V(ing) + Obj', 'She **will be writing** at this time tomorrow.'],
            ['Future Perfect', 'Subject + will have + V3 + Obj', 'She **will have written** the letter by next week.'],
            ['Future Perfect Continuous', 'Subject + will have been + V(ing) + Obj', 'She **will have been writing** for two hours by noon.']
          ]) +
          H.h2('4. Key Tense Rules') +
          H.ul([
            '**Since vs For:** Use **Since** for a specific point in time (since Monday, since 2010). Use **For** for a duration of time (for 2 hours, for 5 days).',
            '**Past Perfect Order:** When two actions happened in the past, the FIRST action takes Past Perfect (had + V3) and the SECOND action takes Simple Past (V2). (e.g., "The train **had left** before we **reached** the station.").'
          ]),
          {
            simplyPut: 'Tenses tell you when an action happens: in the present, in the past, or in the future.',
            dontConfuse: 'Do not use simple past with recently completed actions. Use Present Perfect ("I have finished my homework" not "I finished my homework just now").',
            examTip: 'The "Train and Station" rule is a classic. Remember: Older past = "had + V3", Newer past = "V2".',
            memoryTrick: 'First action = Had + V3 | Second action = V2 (Timeline sequence).',
            quickRevision: [
              'Simple Present = habits | Present Perfect = completed with current connection',
              'Older past action gets "had + V3" (Past Perfect)',
              'Since = starting point | For = total duration',
              'Future Perfect shows action completed "by" a future time point'
            ],
            examAsk: 'Correct the sentence: "He is living here since 2015." (Ans: "He has been living here since 2015." - Perfect Continuous required with "since")'
          })
      }]
    },
    {
      id: 'grammar-key-rules',
      name: 'Grammar — Key Rules',
      topics: [{
        id: 'grammar-key-rules-notes',
        title: 'Grammar — Core Rules, Articles & Parallelism',
        content: T('Grammar — Key Rules',
          'Crucial rules for Subject-Verb Agreement, Articles, Modals, Degrees of Comparison, Gerund vs Infinitive, Parallelism, and Dangling Modifiers.',
          H.h2('1. Subject-Verb Agreement') +
          H.p('A singular subject needs a singular verb; a plural subject needs a plural verb.') +
          H.ul([
            '**Rule:** If two subjects are joined by *either...or* or *neither...nor*, the verb agrees with the **closest** subject. (e.g., "Neither the teacher nor the **students were** present.").',
            '**Rule:** *Each*, *Every*, *Someone*, *Nobody* are singular and take singular verbs. (e.g., "Each of the boys **has** a book.").',
            '**Rule:** If subjects are joined by *as well as*, *along with*, *with*, the verb agrees with the **first** subject. (e.g., "The captain, along with the crew members, **was** saved.").'
          ]) +
          H.h2('2. Articles (A, An, The)') +
          H.ul([
            'Use **An** before vowel sounds, not just vowel letters (e.g., **an** hour - silent h, but **a** university - starts with a "yoo" consonant sound).',
            'Use **The** for specific things, rivers, oceans, holy books, or superlative adjectives (e.g., **the** Ganges, **the** tallest boy).'
          ]) +
          H.h2('3. Parallelism in Sentences') +
          H.p('Elements in a list should have the same grammar form.') +
          H.p('Incorrect: "She likes swimming, dancing, and **to read**."') +
          H.p('Correct: "She likes swimming, dancing, and **reading**."') +
          H.h2('4. Dangling Modifiers') +
          H.p('A modifier must clearly refer to the correct subject.') +
          H.p('Incorrect: "Walking in the park, a snake bit him." (Was the snake walking in the park?)') +
          H.p('Correct: "While he was walking in the park, a snake bit him."'),
          {
            simplyPut: 'Grammar rules ensure that subjects match their actions, comparisons are balanced, and lists sound uniform.',
            dontConfuse: 'Do not use double comparatives or superlatives. E.g., "more taller" is wrong. Just write "taller".',
            examTip: '"Each of..." / "One of..." always takes a plural noun but a singular verb. (e.g., "One of my **friends is** a doctor.").',
            memoryTrick: 'Sound out the word for Articles! Vowel sound = An. Consonant sound = A.',
            quickRevision: [
              'Neither/Nor: verb matches closest subject',
              'Along with/As well as: verb matches first subject',
              'An hour (vowel sound) | A university (consonant sound)',
              'Parallelism: keep lists in the same grammatical pattern'
            ],
            examAsk: 'Correct this: "One of the student have failed." (Ans: "One of the students has failed.")'
          })
      }]
    },
    {
      id: 'voice',
      name: 'Voice',
      topics: [{
        id: 'voice-notes',
        title: 'Voice — Active to Passive Voice Conversion',
        content: T('Voice',
          'Rules for transforming sentences between Active and Passive voice across different tenses, interrogative sentences, and imperatives.',
          H.h2('1. What is Active and Passive Voice?') +
          H.ul([
            '**Active Voice:** Subject does the action. (e.g., "John wrote the letter.")',
            '**Passive Voice:** Object becomes the subject, focus shifts to action. (e.g., "The letter **was written by** John.")'
          ]) +
          H.h2('2. Conversion Rules by Tense') +
          H.p('When converting, the main verb always changes to **V3 (Past Participle)**, and a form of "to be" is added.') +
          tbl(['Tense', 'Active Structure', 'Passive Structure'], [
            ['Simple Present', 'Subject + V1 + Object', 'Object + **is/am/are + V3** + by Subject'],
            ['Present Continuous', 'Sub + is/am/are + V(ing) + Obj', 'Obj + **is/am/are + being + V3** + by Sub'],
            ['Present Perfect', 'Sub + has/have + V3 + Obj', 'Obj + **has/have + been + V3** + by Sub'],
            ['Simple Past', 'Subject + V2 + Object', 'Object + **was/were + V3** + by Subject'],
            ['Past Continuous', 'Sub + was/were + V(ing) + Obj', 'Obj + **was/were + being + V3** + by Sub'],
            ['Simple Future', 'Subject + will/shall + V1 + Object', 'Object + **will be + V3** + by Subject']
          ]) +
          H.h2('3. Imperative Sentences') +
          H.p('Sentences expressing command or request:') +
          H.ul([
            'Active: "Close the door."',
            'Passive: "**Let** the door **be closed**." or "You are ordered to close the door."',
            'Active: "Please help me."',
            'Passive: "You are **requested to** help me."'
          ]) +
          H.h2('4. Interrogative Sentences (Questions)') +
          H.ul([
            'Active: "Who wrote this?"',
            'Passive: "**By whom** was this written?"'
          ]),
          {
            simplyPut: 'Active voice tells what a person did. Passive voice tells what was done to an object by a person.',
            dontConfuse: 'Passive voice does NOT change the tense of the sentence. Present remains present, past remains past. Only the structure shifts.',
            examTip: '"Who" in active voice changes to "By whom" in passive voice. This is a very common exam conversion.',
            memoryTrick: 'Passive = Object + Be-verb + V3 + by Subject.',
            quickRevision: [
              'Passive always uses V3 (past participle) form of verb',
              'Continuous tense adds "being" in passive voice',
              'Perfect tense adds "been" in passive voice',
              'Who → By whom'
            ],
            examAsk: 'Convert to passive: "They are playing football." (Ans: "Football is being played by them.")'
          })
      }]
    },
    {
      id: 'narration',
      name: 'Narration (Direct & Indirect Speech)',
      topics: [{
        id: 'narration-notes',
        title: 'Narration — Direct & Indirect Speech Rules',
        content: T('Narration (Direct & Indirect Speech)',
          'How to change sentences from Direct to Indirect speech and vice versa, detailing tense back-shifts, pronoun changes, and time/place updates.',
          H.h2('1. Direct vs Indirect Speech') +
          H.ul([
            '**Direct Speech:** Exact words of the speaker inside quotation marks. (e.g., He said, "I am tired.")',
            '**Indirect Speech:** Reporting what someone said in our own words, removing quotes. (e.g., He said that he was tired.)'
          ]) +
          H.h2('2. Tense Changes (Backshifting)') +
          H.p('If the reporting verb is in the **past** tense (e.g., "said"), change the tenses inside quotes as follows:') +
          tbl(['Direct Speech Tense', 'Indirect Speech Tense', 'Example'], [
            ['Simple Present (V1)', 'Simple Past (V2)', '"I write" → he wrote'],
            ['Present Continuous', 'Past Continuous', '"I am writing" → he was writing'],
            ['Present Perfect', 'Past Perfect', '"I have written" → he had written'],
            ['Simple Past (V2)', 'Past Perfect', '"I wrote" → he had written'],
            ['Modals (will/can/may)', 'would/could/might', '"I will write" → he would write']
          ]) +
          H.p('**Exceptions:** If the sentence inside quotes is a **universal fact/truth**, the tense does not change! (e.g., He said, "The sun rises in the east." → He said that the sun rises in the east.).') +
          H.h2('3. Pronoun Changes (SON Formula)') +
          H.ul([
            '**S**ubject (1st Person: I, we) → changes according to the **Subject** of reporting verb.',
            '**O**bject (2nd Person: you) → changes according to the **Object** of reporting verb.',
            '**N**o change (3rd Person: he, she, it, they) → remains the same.'
          ]) +
          H.h2('4. Time & Place Word Changes') +
          H.ul([
            '**Now** becomes **Then**',
            '**Today** becomes **That day**',
            '**Tomorrow** becomes **The next day** or **The following day**',
            '**Here** becomes **There**',
            '**This** becomes **That**'
          ]),
          {
            simplyPut: 'Direct speech quotes the exact words spoken. Indirect speech reports those words later, meaning we shift pronoun, tense, and time words backward (e.g. today becomes that day).',
            dontConfuse: 'Do not change the tense if the reporting verb is in the present tense (e.g., He **says**, "I am happy" → He says that he is happy.).',
            examTip: 'Remember the SON rule for pronouns: 1st person = Subject, 2nd person = Object, 3rd person = No Change.',
            memoryTrick: 'Everything moves one step back into the past when reporting!',
            quickRevision: [
              'Tense backshifts: Simple Present → Simple Past | Simple Past → Past Perfect',
              'SON formula for pronoun updates',
              'Time shifts: tomorrow → next day | today → that day',
              'No tense change for universal truths (facts)'
            ],
            examAsk: 'Change to indirect: She said, "I will visit you tomorrow." (Ans: She said that she would visit me the next day.)'
          })
      }]
    },
    {
      id: 'error-detection',
      name: 'Error Detection / Spotting',
      topics: [{
        id: 'error-detection-notes',
        title: 'Error Spotting — Strategy & Core Focus Areas',
        content: T('Error Detection / Spotting',
          'Strategies to identify grammar errors in sentences quickly during exams, focusing on common testable areas.',
          H.h2('1. Step-by-Step Approach for Error Spotting') +
          H.ol([
            '**Check Subject-Verb Agreement:** Locate subject and make sure verb matches in count and tense.',
            '**Check Tense Consistency:** Ensure the sentence doesn\'t swap past and present without reason.',
            '**Scan Pronoun usage:** Look for incorrect relative pronouns (e.g. who vs which) or singular-plural mismatches.',
            '**Scan Prepositions & Articles:** Check if "a", "an", or "the" are missing/wrong, or if the wrong preposition is paired with a verb.'
          ]) +
          H.h2('2. Highly Testable Exam Patterns') +
          H.ul([
            '**Hardly / Scarcely... when:** "Hardly had I arrived **than** it started raining." (Incorrect) → Replace *than* with **when**.',
            '**No sooner... than:** "No sooner did he see the police **when** he ran away." (Incorrect) → Replace *when* with **than**.',
            '**Lest... should:** "Walk carefully lest you **might** fall." (Incorrect) → Replace *might* with **should**.',
            '**Too... to:** *Too* is followed by infinitive *to*. E.g., "He is **too** weak **to** walk."'
          ]) +
          H.h2('3. Preposition Rules (Fixed Prepositions)') +
          H.p('Certain verbs always take fixed prepositions:') +
          H.ul([
            '**Abide by** rules',
            '**Congratulate on** success (not congratulate for)',
            '**Different from** (not different than)',
            '**Prefer to** (e.g., "I prefer tea **to** coffee." - not prefer tea than)'
          ]),
          {
            simplyPut: 'Error detection is like being a sentence inspector, checking every word to ensure it follows standard rules of grammar and punctuation.',
            dontConfuse: 'Do not use "than" with "prefer". E.g., "I prefer coffee than tea" is incorrect. Use "I prefer coffee **to** tea."',
            examTip: 'Hardly/Scarcely is ALWAYS followed by **when**. No sooner is ALWAYS followed by **than**. These two are frequently tested.',
            memoryTrick: 'No sooner = comparative form (-er), so it matches "than". Hardly/Scarcely matches "when".',
            quickRevision: [
              'Hardly/Scarcely ... when | No sooner ... than',
              'Lest ... should (never use not/no with lest)',
              'Prefer ... to',
              'Congratulate on'
            ],
            examAsk: 'Spot the error: "He preferred reading than playing video games." (Ans: Replace "than" with "to")'
          })
      }]
    },
    {
      id: 'sentence-improvement',
      name: 'Sentence Improvement',
      topics: [{
        id: 'sentence-improvement-notes',
        title: 'Sentence Improvement — Rules & Strategies',
        content: T('Sentence Improvement',
          'Practice tips for replacing underlined sentence sections with correct options or selecting No Improvement.',
          H.h2('1. Focus on the Underlined Part') +
          H.p('Check the underlined/highlighted segment of the sentence against core grammar rules, but read the full sentence to get context (like tense).') +
          H.h2('2. Key Grammar Checks') +
          H.ul([
            '**Pronoun Cases:** E.g., "It was **me** who called you." (Incorrect) → "It was **I** who called you." (Use subject pronoun after "is/was").',
            '**Adverb placement:** Ensure adverbs like *only*, *always* are near the word they describe.',
            '**Redundancy (Repetition):** E.g., "return back" (wrong) → "return" (correct); "repeat again" (wrong) → "repeat" (correct); "cousin brother" (wrong) → "cousin" (correct).'
          ]) +
          H.h2('3. Structure Matching') +
          H.p('Ensure comparisons are between similar things.') +
          H.p('Incorrect: "The climate of India is hotter than England." (Comparing climate to a country)') +
          H.p('Correct: "The climate of India is hotter than **that of** England."'),
          {
            simplyPut: 'Sentence improvement asks you to make a sentence grammatically perfect by choosing the best replacement option.',
            dontConfuse: '"Return back" is incorrect because return already means to come back. Use only "return".',
            examTip: 'Always compare similar items: compare climate of city A to climate (that of) city B, not to the city itself.',
            memoryTrick: 'Remove the extra words! Redundancies are common traps in these questions.',
            quickRevision: [
              'Avoid redundancies (return back, repeat again)',
              'Hotter than that of ... (balanced comparison)',
              'It was I/He/She (subjective pronoun after form of be)',
              'Select "No Improvement" if the sentence is already correct'
            ],
            examAsk: 'Improve: "Please return back my book." (Ans: "Please return my book.")'
          })
      }]
    },
    {
      id: 'phrase-replacement',
      name: 'Phrase Replacement',
      topics: [{
        id: 'phrase-replacement-notes',
        title: 'Phrase Replacement — Idiomatic & Phrase Corrections',
        content: T('Phrase Replacement',
          'Replacing bold/highlighted phrases with correct idioms, preposition pairings, and verb patterns.',
          H.h2('1. Phrase vs Sentence Improvement') +
          H.p('Phrase replacement focuses specifically on prepositional combinations, phrasal verbs, and correct idioms.') +
          H.h2('2. Common Phrase Corrections') +
          tbl(['Incorrect Phrase', 'Correct Phrase', 'Context Rule'], [
            ['Look forward to meet', 'Look forward to meeting', '"Look forward to" takes Gerund (V+ing)'],
            ['With a view to buy', 'With a view to buying', '"With a view to" takes Gerund (V+ing)'],
            ['Cope up with', 'Cope with', 'There is no phrase like "cope up with"'],
            ['Accused for', 'Accused of', 'Accused always takes "of"'],
            ['Angry on him', 'Angry with him', 'Angry with a person, Angry at a thing']
          ]) +
          H.h2('3. Usage Examples') +
          H.ul([
            '**Cope with:** "He cannot **cope with** the workload." (not cope up with).',
            '**Look forward to:** "I am looking forward to **hearing** from you." (not look forward to hear).'
          ]),
          {
            simplyPut: 'Phrase replacement checks if you know the exact combination of verbs and prepositions (like using "cope with" instead of the incorrect "cope up with").',
            dontConfuse: 'Do not use "up" with "cope". E.g., "I cannot cope up with this stress" is incorrect. Just use "cope with".',
            examTip: '"Look forward to" and "With a view to" are always followed by the "-ing" form of the verb, not the base verb.',
            memoryTrick: 'Cope + With (2 words only!). No "up" needed.',
            quickRevision: [
              'Cope with (no "up")',
              'Look forward to + V-ing',
              'Accused of (not accused for)',
              'Angry with (person) | Angry at (object/situation)'
            ],
            examAsk: 'Replace: "I am looking forward to meet my friend." (Ans: "looking forward to meeting my friend")'
          })
      }]
    },
    {
      id: 'fill-blanks',
      name: 'Fill in the Blanks',
      topics: [{
        id: 'fill-blanks-notes',
        title: 'Fill in the Blanks — Single & Double Blanks',
        content: T('Fill in the Blanks',
          'How to approach vocabulary and grammar-based fill in the blank questions with single or double blanks.',
          H.h2('1. Types of Fill in the Blanks') +
          H.ul([
            '**Grammar-based:** Checks prepositions, tenses, subject-verb agreement (e.g. choosing between has/have, in/on).',
            '**Vocabulary-based:** Checks word meanings, synonyms, or collocations (words that naturally go together like "make a decision" vs "do a decision").'
          ]) +
          H.h2('2. Strategy for Single Blanks') +
          H.ol([
            'Read the full sentence to identify context clues (is it positive or negative?).',
            'Identify the part of speech required for the blank (noun, verb, adjective, adverb).',
            'Use elimination: rule out options that don\'t fit the grammar structure.'
          ]) +
          H.h2('3. Strategy for Double Blanks') +
          H.ul([
            '**Use the Second Blank first:** Often, the second blank is easier to solve than the first. If an option does not fit the second blank, eliminate it completely.',
            'Look for contrast markers like *but*, *although*, *however*, which indicate that the two blanks might have opposite meanings.'
          ]),
          {
            simplyPut: 'Fill in the blanks is finding the missing puzzle piece in a sentence by using clues around the gap.',
            dontConfuse: 'Do not choose an option that sounds good but makes the sentence grammatically incorrect (like matching singular noun with plural verb).',
            examTip: 'For double blanks, if one word fits perfectly but the other does not, the option is wrong. BOTH words must fit.',
            memoryTrick: 'Eliminate wrong options first to increase your chances of choosing correctly.',
            quickRevision: [
              'Read sentence fully to catch tone (positive/negative)',
              'Determine part of speech needed in the blank',
              'Double blanks: use second blank to eliminate options quickly',
              'Check for contrast words (but, however) that shift sentence direction'
            ],
            examAsk: 'Fill: "The weather was _______ so we decided to cancel the picnic." (a) pleasant (b) gloomy (c) sunny? (Ans: b)'
          })
      }]
    },
    {
      id: 'cloze-test',
      name: 'Cloze Test',
      topics: [{
        id: 'cloze-test-notes',
        title: 'Cloze Test — Reading & Solving Paragraph Blanks',
        content: T('Cloze Test',
          'Methods to solve paragraph-based blank questions, balancing grammar and vocabulary contexts.',
          H.h2('1. What is a Cloze Test?') +
          H.p('A **Cloze Test** is a passage with 5 to 10 blanks. It checks your reading speed, vocabulary, grammar, and ability to understand the flow of the story.') +
          H.h2('2. Step-by-Step Strategy') +
          H.ol([
            '**Read the passage once quickly:** Do NOT try to fill in the blanks immediately. Read the whole passage to understand the topic (is it about history, environment, science?) and tone.',
            '**Identify the Tense:** Check if the passage is in the past, present, or future tense to eliminate wrong verb options.',
            '**Analyze surrounding words:** Words right before or after the blank give clues about prepositions or collocations.',
            '**Eliminate options:** Cross out words that are grammatically incorrect or have the wrong meaning tone.'
          ]) +
          H.h2('3. Tone Matching') +
          H.p('If the passage is formal/academic, select formal vocabulary. If it is a casual story, pick simpler words.') +
          H.p('Example: If the passage talks about "pollution increasing", words like *deteriorate*, *aggravate* fit better than informal words.'),
          {
            simplyPut: 'Cloze test is like filling in missing words of a story. Read the entire story first to know the plot before choosing the words.',
            dontConfuse: 'Do not look at each sentence individually. The correct word for blank 3 might depend on a clue in blank 5!',
            examTip: 'Check transition words like *consequently*, *furthermore*, *on the other hand* to understand the flow of the passage.',
            memoryTrick: 'First read, then fill. Never jump straight to options!',
            quickRevision: [
              'Read passage fully first to get the main idea',
              'Match the tone (formal/informal) and tense of the passage',
              'Watch for linkers (consequently, however)',
              'Check word partners (collocations) right around the blank'
            ],
            examAsk: 'A passage talks about global warming. Blank is "rising temperatures ______ glaciers." Options: (a) melt (b) freeze. (Ans: a)'
          })
      }]
    },
    {
      id: 'reading-comprehension',
      name: 'Reading Comprehension',
      topics: [{
        id: 'reading-comprehension-notes',
        title: 'Reading Comprehension — Strategies & Question Types',
        content: T('Reading Comprehension',
          'Strategies for reading passages efficiently, identifying core themes, author tones, and answering factual and inference questions.',
          H.h2('1. RC Strategies') +
          H.ul([
            '**Strategy A (For short passages - Tier 1):** Read the questions first, then scan the passage to locate answers quickly.',
            '**Strategy B (For long passages - Tier 2):** Read the first and last paragraphs carefully to understand the main idea, skim the body paragraphs, then read questions and refer back.'
          ]) +
          H.h2('2. Question Types in Exams') +
          tbl(['Question Type', 'What It Asks', 'How to Solve'], [
            ['Factual / Direct', 'Specific details mentioned in passage', 'Find keywords from question in passage'],
            ['Inference / Indirect', 'Logical conclusions not directly written', 'Read between lines; eliminate options going beyond passage limits'],
            ['Synonym / Antonym', 'Meaning of a word used in the passage', 'Read that specific sentence to get context meaning'],
            ['Title / Central Idea', 'Main point of the passage', 'Read introduction and conclusion paragraphs'],
            ['Author\'s Tone', 'Attitude of author (e.g. critical, positive)', 'Check emotional words used by the author']
          ]) +
          H.h2('3. Common Author Tones') +
          H.ul([
            '**Sardonic/Sarcastic:** Mocking or ironic.',
            '**Objective/Neutral:** Based on facts, no personal opinions.',
            '**Nostalgic:** Looking back at the past with affection.'
          ]),
          {
            simplyPut: 'Reading Comprehension is reading a story and answering questions about it. You must find clues directly in the text.',
            dontConfuse: 'Do not use your own external knowledge to answer. Choose options based ONLY on what is written or implied in the passage.',
            examTip: 'For Synonym/Antonym questions, the word might have multiple meanings. Always select the meaning that fits the sentence in the passage.',
            memoryTrick: 'The main idea is usually at the head (first paragraph) or tail (last paragraph) of the passage!',
            quickRevision: [
              'Scan questions before reading short passages',
              'Main idea is usually in the intro/conclusion',
              'Base answers purely on the text, not personal beliefs',
              'Tones: Objective (factual), Analytical (examining details), Critical (finding faults)'
            ],
            examAsk: 'How to find the tone of a passage? (Ans: Look at the adjectives and adjectives expressing emotion in the text)'
          })
      }]
    },
    {
      id: 'para-jumbles',
      name: 'Para Jumbles',
      topics: [{
        id: 'para-jumbles-notes',
        title: 'Para Jumbles — Sentence Rearrangement Secrets',
        content: T('Para Jumbles',
          'Strategies to arrange jumbled sentences into a logical, coherent paragraph using structural links.',
          H.h2('1. What is a Para Jumble?') +
          H.p('You are given 4 to 6 sentences in random order. You must arrange them in the correct sequence.') +
          H.h2('2. Strategy: Finding Clues & Pairs') +
          H.ol([
            '**Find the Opening Sentence:** The first sentence is usually independent. It introduces the main topic, person, or definition. It does NOT start with pronouns (he, she, they) or connectors (but, however, therefore, also).',
            '**Find Mandate Pairs:** Look for sentences that MUST go together. (e.g., sentence A introduces "Dr. Sen", sentence B says "He was...". A-B is a pair).',
            '**Check Chronology (Time order):** Look for time indicators (In 1990, later, then, finally).',
            '**Look for Pronouns & Conjunctions:** Transition words indicate the flow (e.g., "Although..." usually follows a statement of fact).'
          ]) +
          H.h2('3. Standard Sequence Example') +
          H.ul([
            '1. Introduction of topic (Noun)',
            '2. Detailed description (Pronoun/Adjectives)',
            '3. Problem or shift (But/However)',
            '4. Conclusion / Solution (Therefore/Thus)'
          ]),
          {
            simplyPut: 'Para jumbles is arranging scrambled sentences to form a sensible paragraph. Look for the opening sentence and link nouns to their pronouns.',
            dontConfuse: 'An opening sentence will almost never start with transition words like "But", "Therefore", or "On the other hand".',
            examTip: 'Instead of trying all combinations, find one strong link/pair (like BC) and eliminate options that don\'t have BC together.',
            memoryTrick: 'Noun before Pronoun, Cause before Effect, General introduction before Specific details.',
            quickRevision: [
              'First sentence = independent, introduces the topic',
              'Identify mandatory pairs (Noun-Pronoun connection)',
              'Follow chronological time order',
              'Conclusion words (therefore, finally) go at the end'
            ],
            examAsk: 'Arrange: (A) He is smart. (B) Ram is a boy. (C) Therefore, he scores well. (Ans: B-A-C)'
          })
      }]
    },
    {
      id: 'paragraph-coherence',
      name: 'Paragraph Coherence',
      topics: [{
        id: 'paragraph-coherence-notes',
        title: 'Paragraph Coherence — Odd One Out & Best Fit',
        content: T('Paragraph Coherence',
          'Identifying the odd sentence out in a group and determining which sentence fits best in a given paragraph.',
          H.h2('1. What is Paragraph Coherence?') +
          H.p('Coherence means all sentences in a paragraph must stick to the same theme and flow logically.') +
          H.h2('2. Odd Sentence Out (Strategy)') +
          H.ul([
            'Find the main theme of the paragraph.',
            'Read all sentences. Look for the one that departs from the theme, even slightly.',
            '**Tip:** The odd sentence might talk about the same topic but shifts focus. E.g., if paragraph is about "benefits of reading", the odd sentence might discuss "history of printing books".'
          ]) +
          H.h2('3. Best Fit Sentence (Strategy)') +
          H.p('When asked to insert a sentence into a blank in a paragraph:') +
          H.ol([
            'Read the sentences immediately before and after the blank.',
            'Look for connection clues (e.g. pronouns or repeating keywords).',
            'Ensure the inserted sentence acts as a smooth bridge between them.'
          ]),
          {
            simplyPut: 'Coherence is checking if all sentences in a paragraph match the same topic. The "odd one out" is the sentence that goes off-topic.',
            dontConfuse: 'An odd sentence might use the same keywords, but the core point it makes is different from the rest. Look at the core meaning!',
            examTip: 'A coherent paragraph has a smooth flow. Look for connectors like "Indeed", "Similarly", "In contrast" to verify structure.',
            memoryTrick: 'Theme check: What are 4 sentences talking about? Which 1 sentence talks about something else?',
            quickRevision: [
              'Coherence = unified theme + logical flow',
              'Odd out: can cover same topic but shifts focus/aspect',
              'Fit sentence must bridge the ideas of pre and post sentences'
            ],
            examAsk: 'Which is odd? Paragraph is about renewable energy. One sentence talks about fossil fuel prices history. (Ans: Fossil fuel sentence is odd)'
          })
      }]
    },
    {
      id: 'writing-skills',
      name: 'Writing Skills (Tier 2 only)',
      topics: [{
        id: 'writing-skills-notes',
        title: 'Writing Skills — Summary, Precis, Letters & Essays',
        content: T('Writing Skills (Tier 2 only)',
          'Guidelines and formats for descriptive writing tasks in Tier 2 exams, covering summary, précis, letters, and essays.',
          H.h2('1. Summary vs Précis Writing') +
          H.ul([
            '**Summary:** Re-writing the main points of a passage in your own words. Length is usually 1/4th of the passage.',
            '**Précis:** A highly structured, concise summary. **Length must be exactly 1/3rd of the original word count**. Write in third person, use a single paragraph, and always suggest a title.'
          ]) +
          H.h2('2. Letter Writing Formats') +
          H.p('Letters are of two types:') +
          tbl(['Formal Letter (Offices, Editors)', 'Informal Letter (Friends, Family)'], [
            ['Needs Sender Address, Date, Receiver Address', 'Needs Sender Address, Date (Receiver Address NOT needed)'],
            ['Includes a brief "Subject" line', 'Subject line is NOT used'],
            ['Formal salutation (Respected Sir/Madam)', 'Casual salutation (Dear Father, Hi Amit)'],
            ['Ending: Yours faithfully / Yours sincerely', 'Ending: Yours lovingly / Best wishes']
          ]) +
          H.h2('3. Essay Writing Structure') +
          H.ul([
            '**Introduction (10-15%):** Introduce the topic, write a hook statement or quote, define key terms.',
            '**Body Paragraphs (70-80%):** Write 2 or 3 paragraphs discussing causes, effects, advantages, disadvantages, and current statistics/schemes.',
            '**Conclusion (10-15%):** Summarize main points, offer solutions, end on a positive or forward-looking note.'
          ]),
          {
            simplyPut: 'Writing skills is expressing your thoughts clearly on paper. Précis is 1/3rd length, formal letters need subject lines, and essays need an introduction, body, and conclusion.',
            dontConfuse: 'Do not sign with your real name in exams unless explicitly asked. Use formats like ABC/XYZ to protect privacy.',
            examTip: 'In précis writing, count words and make a grid if answer sheet has block grids. Stick strictly to the 1/3rd length rule (+/- 5 words).',
            memoryTrick: 'IBC structure for Essays: Introduction, Body, Conclusion.',
            quickRevision: [
              'Précis = exactly 1/3rd word count + title',
              'Formal letters require a Subject line | Informal letters do not',
              'Yours faithfully (Capital Y, small f)',
              'Essay = Intro → Body (Pros/Cons/Data) → Positive Conclusion'
            ],
            examAsk: 'What is the word limit of a précis? (Ans: 1/3rd of the original passage length)'
          })
      }]
    }
  ]
};
})();
