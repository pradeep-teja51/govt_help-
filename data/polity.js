(function() {
window.GA_DATA = window.GA_DATA || {};
const H = window.GA_HELPERS;
const T = (...args) => H.topic(...args);
const tbl = H.table;

window.GA_DATA.polity = {
  id: 'polity',
  name: 'Indian Polity',
  color: '#1a3c6e',
  icon: '⚖️',
  chapters: [
    {
      id: 'constitutional-framework',
      name: 'A. Constitutional Framework',
      topics: [
        {
          id: 'constitutional-background',
          title: 'Constitutional Background',
          content: T('Constitutional Background', 'How India got its Constitution — the story of freedom and law-making after 1947.',
            H.p('Before 1947, India was ruled by the <strong>British</strong>. They made many laws (Acts) to control India. After freedom, we needed our <strong>own rules</strong> — a Constitution — to run the country ourselves.') +
            H.ul([
              '<strong>1858:</strong> British Crown took over from East India Company.',
              '<strong>1909:</strong> Morley-Minto Reforms — separate electorates.',
              '<strong>1919:</strong> Montagu-Chelmsford Reforms — Dyarchy in provinces.',
              '<strong>1935:</strong> Government of India Act — longest British act; became basis for our Constitution.',
              '<strong>1946:</strong> Cabinet Mission — plan for Constituent Assembly.',
              '<strong>1947:</strong> India became free on August 15.'
            ]) +
            H.p('The <strong>1935 Act</strong> gave many ideas to our Constitution — like federal structure, provincial autonomy, and emergency provisions.'),
            { examTip: '1935 Act is called the "Blue Print" of Indian Constitution. About 250 provisions were borrowed from it.', quickRevision: ['British ruled till 1947', '1935 Act = blueprint of Constitution', '1946 Cabinet Mission → Constituent Assembly', 'Freedom = August 15, 1947'], examAsk: 'Which British Act is called the blueprint of Indian Constitution? Answer: Government of India Act 1935.' })
        },
        {
          id: 'making-of-constitution',
          title: 'Making of the Constitution',
          content: T('Making of the Constitution', 'How 299 wise people wrote India\'s rulebook in about 3 years after independence.',
            tbl(['Fact', 'Detail'],
            [
              ['Constituent Assembly formed', 'December 6, 1946'],
              ['First meeting', 'December 9, 1946'],
              ['Total members', '389 (296 from British India + 93 from princely states)'],
              ['After Partition', '299 members remained'],
              ['President of Assembly', 'Dr. Rajendra Prasad'],
              ['Chairman of Drafting Committee', 'Dr. B.R. Ambedkar (Chief Architect)'],
              ['Drafting Committee members', '7 members including Ambedkar, Alladi Krishnaswamy, K.M. Munshi'],
              ['Time taken', '2 years, 11 months, 18 days'],
              ['Adopted', 'November 26, 1949 (Constitution Day)'],
              ['Enforced', 'January 26, 1950 (Republic Day)'],
              ['Total articles (original)', '395 articles, 8 schedules, 22 parts']
            ]) +
            H.p('The Constitution was written in a building that is now called <strong>Constitution Hall (Samvidhan Sadan)</strong> in New Delhi.'),
            { memoryTrick: 'Nov 26 = adopted (Constitution Day). Jan 26 = enforced (Republic Day). Ambedkar = Father of Indian Constitution.', examTip: 'Dr. Ambedkar is called Father of Indian Constitution. Nov 26 is celebrated as Constitution Day since 2015.', quickRevision: ['Constituent Assembly = Dec 6, 1946', 'Ambedkar = chief drafter', 'Adopted Nov 26, 1949', 'Enforced Jan 26, 1950', '299 members after Partition'], examAsk: 'When was the Constitution adopted? Answer: November 26, 1949.' })
        },
        {
          id: 'sources-of-constitution',
          title: 'Sources of the Constitution',
          content: T('Sources of the Constitution', 'India borrowed good ideas from many countries — like taking the best recipes from different cookbooks!',
            tbl(['Country', 'What India Borrowed'],
            [
              ['United Kingdom', 'Parliamentary system, Rule of Law, Legislative procedure, Single citizenship, Cabinet system'],
              ['United States (USA)', 'Fundamental Rights, Judicial Review, Independence of Judiciary, Impeachment of President, Vice-President as RS Chairman'],
              ['Ireland', 'Directive Principles of State Policy (DPSP), Method of Presidential election, Nomination of RS members'],
              ['Canada', 'Federation with strong centre, Centre-state relations, Residuary powers with centre'],
              ['Australia', 'Concurrent List, Joint sitting of Parliament, Trade-commerce provisions'],
              ['Germany (Weimar)', 'Suspension of Fundamental Rights during Emergency'],
              ['France', 'Republic, Ideals of Liberty Equality Fraternity in Preamble'],
              ['Japan', 'Procedure established by law (Article 21)'],
              ['South Africa', 'Amendment procedure, Election of Rajya Sabha members'],
              ['USSR (Russia)', 'Fundamental Duties (added later by 42nd Amendment)']
            ]),
            { examTip: 'UK = Parliamentary system. USA = Fundamental Rights + Judicial Review. Ireland = DPSP. Canada = Strong centre.', quickRevision: ['UK = Parliamentary system', 'USA = Fundamental Rights, Judicial Review', 'Ireland = DPSP', 'Canada = Strong centre', 'Australia = Concurrent List', 'Russia/USSR = Fundamental Duties idea'], examAsk: 'From which country did India borrow DPSP? Answer: Ireland.' })
        },
        {
          id: 'salient-features',
          title: 'Salient Features of the Constitution',
          content: T('Salient Features', 'The special qualities that make India\'s Constitution unique — the longest written constitution in the world!',
            tbl(['Feature', 'Simple Explanation'],
            [
              ['Longest Written Constitution', 'Original had 395 articles; now 470+ articles — most detailed constitution in the world'],
              ['Drawn from Various Sources', 'Borrowed best features from UK, USA, Ireland, Canada, etc.'],
              ['Blend of Rigidity & Flexibility', 'Some parts hard to change (like federal structure), some easy (like ordinary laws)'],
              ['Federal with Unitary Bias', 'States have power, but Centre is stronger — becomes unitary during emergency'],
              ['Parliamentary Government', 'PM is real head; President is nominal (like UK)'],
              ['Balance between Sovereignty & Judicial Review', 'Parliament is supreme but courts can check if laws violate Constitution'],
              ['Fundamental Rights', 'Basic freedoms guaranteed to all citizens (from USA idea)'],
              ['Directive Principles (DPSP)', 'Goals for government to achieve — not enforceable in court (from Ireland)'],
              ['Secular State', 'No official religion; all religions equal (added by 42nd Amendment 1976)'],
              ['Universal Adult Franchise', 'Every adult 18+ can vote — one person one vote'],
              ['Single Citizenship', 'Only Indian citizenship — not separate state citizenship (unlike USA)'],
              ['Independent Judiciary', 'Courts free from government control'],
              ['Emergency Provisions', 'Special powers during war, breakdown of law, financial crisis']
            ]),
            { examTip: 'Longest written constitution. Secular added by 42nd Amendment 1976. Federal + Unitary bias = "Quasi-federal".', quickRevision: ['Longest written constitution', 'Federal with unitary bias', 'Parliamentary system', 'Fundamental Rights + DPSP', 'Secular (42nd Amendment)', 'Universal adult franchise', 'Single citizenship'], examAsk: 'Which is the longest written constitution in the world? Answer: India.' })
        },
        {
          id: 'preamble',
          title: 'The Preamble',
          content: T('The Preamble', 'The introduction to our Constitution — it tells us WHY the Constitution was made and WHAT India stands for.',
            H.h2('Full Text') +
            H.p('"WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a <strong>SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC</strong> and to secure to all its citizens: <strong>JUSTICE</strong>, social, economic and political; <strong>LIBERTY</strong> of thought, expression, belief, faith and worship; <strong>EQUALITY</strong> of status and of opportunity; and to promote among them all <strong>FRATERNITY</strong> assuring the dignity of the individual and the unity and integrity of the Nation; IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION."') +
            H.h2('Word-by-Word Meaning') +
            tbl(['Word', 'Simple Meaning'],
            [
              ['Sovereign', 'India is free — no outside country controls us'],
              ['Socialist', 'Wealth should be shared fairly (added 1976)'],
              ['Secular', 'All religions equal — no official religion (added 1976)'],
              ['Democratic', 'People choose their leaders by voting'],
              ['Republic', 'We have a President (not a king) chosen by people\'s representatives'],
              ['Justice', 'Fair treatment for all — social, economic, and political'],
              ['Liberty', 'Freedom to think, speak, believe, and worship'],
              ['Equality', 'Everyone equal — no discrimination'],
              ['Fraternity', 'Brotherhood — feeling of unity among all Indians']
            ]),
            { examTip: 'Socialist and Secular added by 42nd Amendment 1976. Preamble is NOT justiciable (cannot go to court) but helps interpret Constitution. Berubari Case 1960 — Preamble is key to Constitution.', quickRevision: ['Starts with "We, the People of India"', 'Sovereign Socialist Secular Democratic Republic', 'Justice, Liberty, Equality, Fraternity', 'Socialist & Secular added 1976 (42nd Amendment)', 'Adopted Nov 26, 1949'], examAsk: 'When were the words Socialist and Secular added to the Preamble? Answer: 1976 (42nd Amendment).' })
        },
        {
          id: 'union-and-territory',
          title: 'Union and Its Territory',
          content: T('Union and Territory', 'How India\'s states and territories are organized — and how new states can be created.',
            H.p('India is called a <strong>"Union of States"</strong> (not "Federation") — because states cannot leave the Union. Article 1 says: "India, that is Bharat, shall be a Union of States."') +
            tbl(['Article', 'What It Says'],
            [
              ['Article 1', 'India = Union of States; names: India and Bharat'],
              ['Article 2', 'Parliament can admit new states or establish new states'],
              ['Article 3', 'Parliament can form new states, alter boundaries, change names — by simple majority + ordinary law'],
              ['Article 4', 'Laws under Articles 2 & 3 don\'t need constitutional amendment']
            ]) +
            H.h2('Recent New States') +
            tbl(['State', 'Year', 'Carved From'],
            [
              ['Telangana', '2014', 'Andhra Pradesh'],
              ['Uttarakhand', '2000', 'Uttar Pradesh'],
              ['Jharkhand', '2000', 'Bihar'],
              ['Chhattisgarh', '2000', 'Madhya Pradesh']
            ]) +
            H.p('India has <strong>28 States</strong> and <strong>8 Union Territories</strong> (after 2020). Parliament does NOT need state consent to change boundaries (Article 3) — but usually consults.'),
            { examTip: 'Article 3 = Parliament can create new states by ordinary law (not amendment). Telangana = latest state (2014). J&K reorganized into 2 UTs in 2019.', quickRevision: ['Article 1 = Union of States', 'Article 3 = create/alter states', '28 states + 8 UTs', 'Telangana = 2014 (latest)', 'Parliament can change boundaries'], examAsk: 'Which Article allows Parliament to create new states? Answer: Article 3.' })
        },
        {
          id: 'citizenship',
          title: 'Citizenship',
          content: T('Citizenship', 'What it means to be an Indian citizen — your legal membership in the country.',
            H.p('Citizenship = your legal bond with India. It gives you <strong>rights</strong> (vote, passport, property) and <strong>duties</strong> (follow laws, pay taxes).') +
            H.h2('How to Get Indian Citizenship') +
            tbl(['Method', 'Simple Explanation'],
            [
              ['By Birth', 'Born in India on/after Jan 26, 1950 (rules changed over time)'],
              ['By Descent', 'Born outside India but parents are Indian citizens'],
              ['By Registration', 'Person of Indian origin living in India for 7 years'],
              ['By Naturalization', 'Foreigner living in India 12 years + good character + knows Hindi/English'],
              ['By Incorporation of Territory', 'When new territory joins India (e.g., Goa 1961)']
            ]) +
            H.h2('How Citizenship Is Lost') +
            H.ul(['<strong>Renunciation</strong> — you voluntarily give up Indian citizenship.', '<strong>Termination</strong> — government cancels if you got it by fraud.', '<strong>Deprivation</strong> — government takes away for disloyalty, crime, etc.']) +
            H.h2('Citizenship Act 1955 & CAA 2019') +
            H.p('<strong>Citizenship Act 1955</strong> — main law on citizenship. <strong>CAA 2019</strong> — gives fast-track citizenship to non-Muslim refugees from Pakistan, Bangladesh, Afghanistan who came before 2015 (after 5 years instead of 11).'),
            { examTip: 'Single citizenship (only Indian, not state-wise). OCI (Overseas Citizen of India) is NOT dual citizenship. CAA 2019 is exam hot topic.', quickRevision: ['5 ways to acquire citizenship', '3 ways to lose citizenship', 'Citizenship Act 1955', 'Single citizenship (not like USA)', 'CAA 2019 = fast-track for certain refugees'], examAsk: 'Which Act governs citizenship in India? Answer: Citizenship Act 1955.' })
        },
        {
          id: 'fundamental-rights',
          title: 'Fundamental Rights',
          content: T('Fundamental Rights', 'Basic freedoms guaranteed to every Indian citizen — like a protective shield from government misuse of power.',
            H.p('Part III of Constitution (Articles 12–35). Inspired by USA. These are <strong>justiciable</strong> — you can go to court if violated!') +
            tbl(['Right', 'Article', 'Simple Meaning', 'Example'],
            [
              ['Right to Equality', 'Art 14–18', 'Everyone equal before law; no discrimination', 'Equal pay for equal work; abolition of untouchability (Art 17)'],
              ['Right to Freedom', 'Art 19–22', 'Speech, movement, profession, assembly freedom', 'You can speak freely, live anywhere in India, choose any job'],
              ['Right against Exploitation', 'Art 23–24', 'No forced labour; no child labour in factories', 'Ban on human trafficking; no children under 14 in hazardous work'],
              ['Right to Freedom of Religion', 'Art 25–28', 'Follow any religion; no forced taxes for religion', 'You can pray anywhere; minority schools can teach their religion'],
              ['Cultural & Educational Rights', 'Art 29–30', 'Protect language, culture; minorities can run schools', 'Tamil people can preserve Tamil culture; Muslim schools get aid'],
              ['Right to Constitutional Remedies', 'Art 32', 'Go to Supreme Court if rights violated — "Heart & Soul"', 'Dr. Ambedkar called Art 32 the heart and soul of Constitution']
            ]) +
            H.h2('Five Writs (Article 32 & 226)') +
            tbl(['Writ', 'Meaning', 'Example Use'],
            [
              ['Habeas Corpus', 'Produce the body', 'If someone illegally arrested — court orders police to produce person'],
              ['Mandamus', 'We command', 'Court orders government officer to do their duty'],
              ['Prohibition', 'Stop', 'Higher court stops lower court from exceeding its power'],
              ['Certiorari', 'To be certified/to quash', 'Higher court cancels lower court\'s wrong decision'],
              ['Quo Warranto', 'By what authority', 'Questions illegal occupation of public office — "Who gave you this post?"']
            ]),
            { memoryTrick: 'EEFRCE = Equality, Freedom, Exploitation, Religion, Cultural, Remedies — 6 Fundamental Rights!', examTip: 'Art 32 = Supreme Court (Dr. Ambedkar\'s "heart & soul"). Art 226 = High Court writs. Art 19 freedoms can be restricted during emergency.', quickRevision: ['6 Fundamental Rights (Part III)', 'Art 14–18 = Equality', 'Art 19–22 = Freedom', 'Art 32 = Constitutional Remedies (SC)', '5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto'], examAsk: 'Which article is called the heart and soul of the Constitution? Answer: Article 32.' })
        },
        {
          id: 'dpsp',
          title: 'Directive Principles of State Policy (DPSP)',
          content: T('DPSP', 'Goals and guidelines for the government — like a wish list for making India a better country.',
            H.p('Part IV (Articles 36–51). Taken from <strong>Ireland</strong>. These are <strong>NOT enforceable in court</strong> — but government should follow them while making laws.') +
            H.h2('Key DPSP (Articles 36–51)') +
            tbl(['Article', 'Directive', 'Simple Meaning'],
            [
              ['Art 38', 'Social Order', 'Promote welfare of people; reduce inequality'],
              ['Art 39', 'Economic Justice', 'Equal pay; no concentration of wealth; equal livelihood'],
              ['Art 40', 'Panchayati Raj', 'Organize village panchayats (added later by 73rd Amendment)'],
              ['Art 41', 'Right to Work', 'Right to work, education, and public assistance'],
              ['Art 43', 'Living Wage', 'Decent wages and standard of living for workers'],
              ['Art 44', 'Uniform Civil Code', 'Same personal laws for all citizens (not yet implemented)'],
              ['Art 45', 'Education', 'Free education for children (now under Art 21A as FR)'],
              ['Art 48', 'Agriculture & Cows', 'Organize agriculture; prohibit cow slaughter'],
              ['Art 49', 'Heritage', 'Protect monuments of national importance'],
              ['Art 51', 'International Peace', 'Promote peace; respect international law']
            ]) +
            H.h2('FR vs DPSP') +
            tbl(['Feature', 'Fundamental Rights', 'DPSP'],
            [
              ['Justiciable?', 'Yes — can go to court', 'No — cannot go to court'],
              ['Source', 'USA', 'Ireland'],
              ['Nature', 'Negative (stop government from doing)', 'Positive (tell government to do)'],
              ['Example', 'Right to speak freely', 'Government should provide free education']
            ]),
            { examTip: 'Minerva Mills Case (1980) — FR and DPSP are complementary. Art 44 UCC is most debated DPSP. Art 40 led to 73rd Amendment (Panchayati Raj).', quickRevision: ['Part IV, Articles 36–51', 'From Ireland — NOT justiciable', 'Positive obligations on government', 'Art 44 = Uniform Civil Code', 'Art 40 = Panchayati Raj', 'FR = justiciable; DPSP = not'], examAsk: 'From which country did India borrow DPSP? Answer: Ireland.' })
        },
        {
          id: 'fundamental-duties',
          title: 'Fundamental Duties',
          content: T('Fundamental Duties', '11 duties every Indian citizen should follow — like rules of being a good citizen.',
            H.p('Part IV-A (Article 51A). Added by <strong>42nd Amendment (1976)</strong> during Emergency. Based on <strong>USSR/Russia</strong> model. Originally 10 duties; <strong>11th added by 86th Amendment (2002)</strong>.') +
            H.h2('All 11 Fundamental Duties') +
            H.ul([
              '<strong>51A(a)</strong> — Respect Constitution, National Flag, and National Anthem.',
              '<strong>51A(b)</strong> — Follow the noble ideas of freedom struggle.',
              '<strong>51A(c)</strong> — Protect sovereignty, unity, and integrity of India.',
              '<strong>51A(d)</strong> — Defend the country when called upon.',
              '<strong>51A(e)</strong> — Promote harmony among all people; renounce practices against women dignity.',
              '<strong>51A(f)</strong> — Value and preserve rich heritage of composite culture.',
              '<strong>51A(g)</strong> — Protect and improve natural environment (forests, lakes, rivers, wildlife).',
              '<strong>51A(h)</strong> — Develop scientific temper, humanism, and spirit of inquiry.',
              '<strong>51A(i)</strong> — Safeguard public property and abjure violence.',
              '<strong>51A(j)</strong> — Strive for excellence in all spheres.',
              '<strong>51A(k)</strong> — Provide education to children (6–14 years) — added by 86th Amendment 2002.'
            ]) +
            H.p('Fundamental Duties apply to <strong>citizens only</strong> (not foreigners). They are <strong>NOT justiciable</strong> — but courts can use them to interpret laws.'),
            { examTip: 'Added by 42nd Amendment 1976 (Swaran Singh Committee). 11th duty (education to children) by 86th Amendment 2002. Apply to citizens only.', quickRevision: ['Article 51A — 11 duties', 'Added by 42nd Amendment 1976', '11th duty added by 86th Amendment 2002', 'NOT justiciable', 'Apply to citizens only', 'Based on USSR model'], examAsk: 'Which amendment added Fundamental Duties? Answer: 42nd Amendment (1976).' })
        },
        {
          id: 'constitutional-amendments',
          title: 'Constitutional Amendments',
          content: T('Constitutional Amendments', 'How the Constitution can be changed — like updating the rulebook when needed.',
            H.h2('Three Types of Amendment (Article 368)') +
            tbl(['Type', 'How', 'Examples'],
            [
              ['Simple Majority', 'Like ordinary law — no special process', 'Admission of new states (Art 2), creation of states (Art 3), citizenship laws'],
              ['Special Majority', '2/3 members present + voting + majority of total membership', 'Fundamental Rights, DPSP, most constitutional changes'],
              ['Special Majority + Ratification', 'Special majority + half of state legislatures must approve', 'Election of President, Union-state relations, Judiciary, Amendment of Art 368 itself']
            ]) +
            H.h2('Important Amendments') +
            tbl(['Amendment', 'Year', 'What Changed'],
            [
              ['1st', '1951', 'Added 9th Schedule; restrictions on FR for land reform'],
              ['7th', '1956', 'Reorganization of states on linguistic basis'],
              ['24th', '1971', 'Parliament can amend any part of Constitution'],
              ['42nd', '1976', '"Mini Constitution" — added Socialist, Secular, Fundamental Duties; extended Lok Sabha to 6 years'],
              ['44th', '1978', 'Removed Right to Property from FR; restored Lok Sabha to 5 years'],
              ['52nd', '1985', 'Anti-Defection Law (10th Schedule) — disqualifies defecting MPs/MLAs'],
              ['61st', '1989', 'Voting age reduced from 21 to 18 years'],
              ['73rd', '1992', 'Panchayati Raj — constitutional status to local self-government'],
              ['74th', '1992', 'Municipalities — constitutional status to urban local bodies'],
              ['86th', '2002', 'Right to Education as FR (Art 21A); 11th Fundamental Duty'],
              ['101st', '2016', 'GST — Goods and Services Tax introduced'],
              ['103rd', '2019', '10% EWS reservation in education and jobs'],
              ['104th', '2020', 'Extended SC/ST reservation in legislature']
            ]),
            { examTip: '42nd Amendment = "Mini Constitution" (most changes). 44th reversed many 42nd changes. 73rd & 74th = Panchayati Raj & Municipalities.', quickRevision: ['Article 368 = amendment procedure', '3 types: simple, special, special + ratification', '42nd = Mini Constitution (1976)', '44th = restored democracy (1978)', '73rd = Panchayati Raj', '74th = Municipalities'], examAsk: 'Which amendment is called the Mini Constitution? Answer: 42nd Amendment (1976).' })
        },
        {
          id: 'basic-structure-doctrine',
          title: 'Basic Structure Doctrine',
          content: T('Basic Structure Doctrine', 'A rule that says Parliament CAN change the Constitution but CANNOT destroy its basic soul.',
            H.p('Even though Parliament can amend the Constitution (Article 368), it <strong>cannot change the basic structure</strong> — the core features that make India what it is.') +
            H.h2('Kesavananda Bharati Case (1973)') +
            H.ul([
              'Landmark case: <strong>Kesavananda Bharati vs State of Kerala (1973)</strong>.',
              'Supreme Court ruled: Parliament can amend BUT cannot destroy <strong>basic structure</strong>.',
              'This was to stop Parliament from making too many changes (like 42nd Amendment tried).',
              'Chief Justice: <strong>S.M. Sikri</strong>; key judge: <strong>H.R. Khanna</strong>.'
            ]) +
            H.h2('Basic Structure Includes') +
            H.ul([
              'Supremacy of Constitution', 'Republican and Democratic form', 'Secular character',
              'Separation of powers', 'Federal character', 'Unity and integrity of India',
              'Welfare state (DPSP)', 'Judicial review', 'Freedom and dignity of individual',
              'Parliamentary system', 'Rule of law', 'Harmony and balance between FR and DPSP'
            ]) +
            H.p('<strong>Minerva Mills Case (1980):</strong> Confirmed basic structure doctrine. Parliament cannot make itself supreme over Constitution.'),
            { simplyPut: 'Think of Constitution as a tree — you can trim branches (amend) but you cannot cut the roots (basic structure).', examTip: 'Kesavananda Bharati 1973 = most important case. 42nd Amendment tried to make Parliament supreme — 44th and Minerva Mills reversed this.', quickRevision: ['Kesavananda Bharati Case 1973', 'Parliament can amend but not destroy basic structure', 'Includes: democracy, secularism, federalism, judicial review', 'Minerva Mills 1980 confirmed it', 'Stopped unlimited amendment power'], examAsk: 'Which case established the Basic Structure Doctrine? Answer: Kesavananda Bharati Case (1973).' })
        }
      ]
    },
    {
      id: 'system-of-government',
      name: 'B. System of Government',
      topics: [
        {
          id: 'parliamentary-vs-presidential',
          title: 'Parliamentary vs Presidential System',
          content: T('Parliamentary vs Presidential System', 'Two ways to run a government — India chose parliamentary system where the PM holds real power.',
            tbl(['Feature', 'Parliamentary (India)', 'Presidential (USA)'],
            [
              ['Head of State', 'President (nominal)', 'President (real executive)'],
              ['Head of Government', 'Prime Minister (real power)', 'President (same person)'],
              ['Ministers from legislature?', 'Yes — must be MPs', 'No — separate from Congress'],
              ['Collective responsibility', 'Yes — to Lok Sabha', 'No'],
              ['Dissolution of lower house', 'Possible before 5 years', 'Fixed term'],
              ['Separation of powers', 'Partial overlap', 'Strict separation']
            ]) +
            H.p('India follows the <strong>Westminster model</strong> (from UK). The PM and Council of Ministers run the government; the President is the ceremonial head.'),
            { examTip: 'India = Parliamentary + Federal. Real power = PM. USA = Presidential. Collective responsibility exists only in parliamentary system.', memoryTrick: 'Parliamentary = PM is Power. Presidential = President is Power.', dontConfuse: 'Indian President ≠ US President. Indian President is nominal; US President is real executive.', quickRevision: ['India = parliamentary system', 'PM = real executive; President = nominal', 'Ministers must be MPs', 'Collective responsibility to Lok Sabha', 'USA = presidential system'], examAsk: 'What is the difference between parliamentary and presidential systems? Why did India adopt parliamentary system?' })
        },
        {
          id: 'federal-system',
          title: 'Federal System',
          content: T('Federal System', 'How power is shared between Centre and states — India is federal in form but unitary in spirit.',
            tbl(['Feature', 'Explanation'],
            [
              ['Two levels of government', 'Union (Centre) and States'],
              ['Written Constitution', 'Defines powers of each level'],
              ['Division of powers', 'Union List, State List, Concurrent List (7th Schedule)'],
              ['Independent judiciary', 'Settles Centre–state disputes'],
              ['Single citizenship', 'Only Indian citizenship — not state-wise'],
              ['Strong Centre', 'More subjects with Centre; residuary powers with Centre'],
              ['Emergency provisions', 'System becomes unitary during emergency']
            ]) +
            H.h2('Three Lists (7th Schedule)') +
            tbl(['List', 'Who Makes Laws', 'Examples'],
            [
              ['Union List', 'Parliament only', 'Defence, foreign affairs, currency, railways'],
              ['State List', 'State legislature only', 'Police, agriculture, health, local government'],
              ['Concurrent List', 'Both — Centre law wins if clash', 'Education, forests, marriage, adoption']
            ]),
            { examTip: 'India = quasi-federal. Residuary powers with CENTRE. Concurrent List conflict → Centre wins. 7th Schedule has 3 lists.', memoryTrick: 'Union = National. State = Local. Concurrent = Common.', dontConfuse: 'Federal ≠ independent states. Indian states cannot secede from the Union.', quickRevision: ['Quasi-federal country', 'Three lists in 7th Schedule', 'Residuary powers with Centre', 'Single Constitution and citizenship', 'Emergency makes system unitary'], examAsk: 'Why is India called quasi-federal? Explain the three lists in the 7th Schedule.' })
        },
        {
          id: 'center-state-relations',
          title: 'Centre–State Relations',
          content: T('Centre–State Relations', 'How Union and state governments work together in law-making, administration, and money.',
            tbl(['Dimension', 'What It Covers', 'Key Articles'],
            [
              ['Legislative', 'Who makes which laws', 'Articles 245–255; 7th Schedule'],
              ['Administrative', 'How administration is run', 'Articles 256–263'],
              ['Financial', 'How money is shared', 'Articles 268–293; Finance Commission']
            ]) +
            H.h2('Key Rules') +
            H.ul([
              'Centre law <strong>prevails</strong> on Concurrent List if laws clash.',
              'Parliament can make laws on State List during <strong>Emergency</strong> or if <strong>Rajya Sabha passes resolution</strong> (national interest).',
              '<strong>Article 256:</strong> States must follow Central laws.',
              '<strong>All-India Services (IAS, IPS):</strong> Centre recruits; officers serve in states.',
              '<strong>Finance Commission (Art 280):</strong> Recommends tax sharing every 5 years.'
            ]),
            { examTip: 'Art 256 = states obey Central laws. Finance Commission = Art 280 (constitutional body). Inter-State Council = Art 263.', memoryTrick: 'L-A-F = Legislative, Administrative, Financial.', dontConfuse: 'Finance Commission (constitutional) ≠ NITI Aayog (executive advisory body).', quickRevision: ['Three relations: legislative, administrative, financial', 'Centre wins on Concurrent List conflict', 'Art 256 — states follow Central laws', 'Finance Commission every 5 years', 'All-India Services link Centre and states'], examAsk: 'What happens when Centre and state laws clash on Concurrent List? What is the role of Finance Commission?' })
        },
        {
          id: 'emergency-provisions',
          title: 'Emergency Provisions',
          content: T('Emergency Provisions', 'Special powers when India faces war, state breakdown, or financial crisis.',
            tbl(['Type', 'Article', 'When Declared', 'Effect'],
            [
              ['National Emergency', '352', 'War, external aggression, armed rebellion', 'Centre becomes very powerful; FRs can be suspended (except 20, 21)'],
              ['State Emergency (President\'s Rule)', '356', 'State govt cannot run constitutionally', 'State legislature suspended; Governor runs on Centre advice'],
              ['Financial Emergency', '360', 'Threat to financial stability', 'Centre controls state finances — NEVER used in India']
            ]) +
            H.p('<strong>S.R. Bommai case (1994):</strong> President\'s Rule is subject to judicial review. Secularism violation can be a ground for striking it down.'),
            { examTip: 'Three emergencies: 352, 356, 360. Art 20 & 21 cannot be suspended. Financial Emergency never declared. S.R. Bommai = judicial review of Art 356.', memoryTrick: '352-WAR, 356-STATE, 360-MONEY.', dontConfuse: 'National Emergency (352) ≠ President\'s Rule (356).', quickRevision: ['Art 352 = National Emergency', 'Art 356 = President\'s Rule', 'Art 360 = Financial Emergency (never used)', 'Art 20 & 21 protected during emergency', 'S.R. Bommai case 1994'], examAsk: 'Name the three types of emergency. Has Financial Emergency ever been declared in India?' })
        }
      ]
    },
    {
      id: 'central-government',
      name: 'C. Central Government',
      topics: [
        {
          id: 'president',
          title: 'The President',
          content: T('The President', 'Head of the Indian state — elected for 5 years, mostly ceremonial, with important constitutional powers.',
            tbl(['Fact', 'Detail'],
            [
              ['Election', 'Electoral College (MPs + MLAs)'],
              ['Term', '5 years; can be re-elected'],
              ['Qualification', 'Indian citizen, 35+ years'],
              ['Article 72', 'Pardoning power — mercy petitions'],
              ['Article 123', 'Ordinance power when Parliament not in session'],
              ['First President', 'Dr. Rajendra Prasad']
            ]) +
            H.p('President acts on <strong>aid and advice</strong> of Council of Ministers (44th Amendment). Can return a bill for reconsideration once (except Money Bill).'),
            { examTip: 'President elected by Electoral College. Art 72 = pardon. Acts on ministerial advice. First President = Rajendra Prasad.', memoryTrick: 'P-5-E = President, 5 years, Electoral College.', dontConfuse: 'President = head of STATE; PM = head of GOVERNMENT.', quickRevision: ['Elected for 5 years by Electoral College', 'Acts on Council of Ministers advice', 'Art 72 — pardoning power', 'Art 123 — ordinances', 'First President: Dr. Rajendra Prasad'], examAsk: 'How is the President elected? What is Article 72?' })
        },
        {
          id: 'vice-president',
          title: 'The Vice-President',
          content: T('The Vice-President', 'Second highest office — Chairman of Rajya Sabha and acting President when needed.',
            tbl(['Fact', 'Detail'],
            [
              ['Election', 'Both Houses of Parliament (MLAs do NOT vote)'],
              ['Term', '5 years'],
              ['Ex-officio role', 'Chairman of Rajya Sabha (Art 64)'],
              ['Acting President', 'When President office vacant or absent'],
              ['First VP', 'Dr. S. Radhakrishnan'],
              ['Removal', 'Resolution in Rajya Sabha + agreed by Lok Sabha']
            ]),
            { examTip: 'VP = Chairman of Rajya Sabha. Elected by MPs only (no MLAs). First VP = Dr. S. Radhakrishnan.', memoryTrick: 'VP = Voice of Rajya Sabha (Chairman).', dontConfuse: 'VP election has NO MLAs. President election includes MLAs.', quickRevision: ['Elected by Parliament members only', 'Ex-officio Chairman of Rajya Sabha', 'Term: 5 years', 'Acts as President when needed', 'First VP: Dr. S. Radhakrishnan'], examAsk: 'How is the Vice-President elected? What is the role of VP in Rajya Sabha?' })
        },
        {
          id: 'prime-minister',
          title: 'The Prime Minister',
          content: T('The Prime Minister', 'Real head of Central government — leader of Council of Ministers.',
            tbl(['Fact', 'Detail'],
            [
              ['Appointment', 'By President — leader of Lok Sabha majority'],
              ['Term', '5 years with Lok Sabha — continues while has majority'],
              ['Articles', '74–75 — Council of Ministers aids President'],
              ['First PM', 'Jawaharlal Nehru'],
              ['Key role', 'Chairman of Cabinet; allocates portfolios']
            ]) +
            H.p('PM is the <strong>keystone of the cabinet arch</strong>. All ministers appointed on PM\'s advice. <strong>Collective responsibility</strong> — if PM resigns, entire Council resigns.'),
            { examTip: 'PM = real executive. Appointed by President but needs Lok Sabha majority. PM resignation = entire Council resigns.', memoryTrick: 'PM = Power Minister. President = Paper head.', dontConfuse: 'PM is NOT directly elected — people elect MPs; majority party leader becomes PM.', quickRevision: ['Real head of government', 'Appointed by President', 'Articles 74–75', 'Chairman of Cabinet', 'Collective responsibility', 'First PM: Jawaharlal Nehru'], examAsk: 'Who appoints the PM? What is collective responsibility?' })
        },
        {
          id: 'council-of-ministers',
          title: 'Council of Ministers',
          content: T('Council of Ministers', 'Team of ministers that runs Central government under the PM.',
            tbl(['Category', 'Role'],
            [
              ['Cabinet Ministers', 'Senior — head major ministries; full Cabinet members'],
              ['Ministers of State (Independent Charge)', 'Head ministry independently'],
              ['Ministers of State', 'Assist Cabinet Ministers']
            ]) +
            tbl(['Rule', 'Article / Detail'],
            [
              ['Must be MP', 'Art 75(5) — within 6 months of appointment'],
              ['Collective responsibility', 'Art 75(3) — to Lok Sabha'],
              ['Cabinet vs Council', 'Cabinet = small inner core; Council = all ministers']
            ]),
            { examTip: 'Art 75(3) = collective responsibility. Minister must become MP within 6 months. Cabinet = decision-making core.', memoryTrick: 'Cabinet = Core team. Council = Complete team.', dontConfuse: 'Council of Ministers ≠ Cabinet. Not all Council members are in Cabinet.', quickRevision: ['Art 74 — President acts on ministerial advice', 'Art 75(3) — collective responsibility', 'Minister must be MP within 6 months', 'Cabinet = inner decision body', 'PM heads Council of Ministers'], examAsk: 'What is collective responsibility? Difference between Cabinet and Council of Ministers?' })
        },
        {
          id: 'parliament',
          title: 'Parliament',
          content: T('Parliament', 'Supreme law-making body — Lok Sabha and Rajya Sabha together with the President.',
            tbl(['House', 'Also Called', 'Members', 'Term'],
            [
              ['Lok Sabha', 'House of the People', 'Max 552', '5 years'],
              ['Rajya Sabha', 'Council of States', 'Max 250 (238 elected + 12 nominated)', 'Permanent — 1/3 retire every 2 years (6-year term)']
            ]) +
            tbl(['Fact', 'Lok Sabha', 'Rajya Sabha'],
            [
              ['Min age for MP', '25 years', '30 years'],
              ['Presiding officer', 'Speaker', 'Chairman (VP) + Deputy Chairman'],
              ['Election', 'Direct by people', 'By MLAs — proportional representation'],
              ['Dissolution', 'Can be dissolved', 'Never dissolved — permanent body']
            ]),
            { examTip: 'Parliament = LS + RS + President (Art 79). Money bills start in LS. RS has 12 nominated members. RS can create All-India Services.', memoryTrick: 'LOK = Lower/direct. RAJYA = States/MLAs elect.', dontConfuse: 'Rajya Sabha is permanent — never dissolved. Lok Sabha can be dissolved early.', quickRevision: ['Parliament = LS + RS + President', 'LS: 5 years, min age 25, Speaker', 'RS: permanent, min age 30, 12 nominated', 'Money bills originate in LS', 'RS: 1/3 members retire every 2 years'], examAsk: 'What are the two Houses of Parliament? Difference between Lok Sabha and Rajya Sabha?' })
        },
        {
          id: 'money-finance-bills',
          title: 'Money & Finance Bills',
          content: T('Money & Finance Bills', 'Special bills about taxes and spending — strict rules so government cannot spend without Parliament approval.',
            tbl(['Bill Type', 'Article', 'Key Rule'],
            [
              ['Money Bill', '110', 'Only Lok Sabha; RS has 14 days; no joint sitting'],
              ['Financial Bill', '117', 'Needs President\'s recommendation'],
              ['Ordinary Bill', '—', 'Normal procedure in both Houses']
            ]) +
            tbl(['Fund', 'Article', 'Purpose'],
            [
              ['Consolidated Fund of India', '266', 'All govt revenues — withdrawn only by law'],
              ['Contingency Fund', '267', 'Emergency expenses — President advances'],
              ['Public Account', '266', 'Money held in trust — PF, small savings']
            ]),
            { examTip: 'Money Bill = Art 110, LS only, RS 14 days. Speaker certifies Money Bill — decision final. Consolidated Fund = main treasury.', memoryTrick: 'Money = Lok Sabha monopoly. 14 days for RS.', dontConfuse: 'Money Bill (Art 110) ≠ all finance bills. Not every finance bill is a Money Bill.', quickRevision: ['Money Bill — Article 110', 'Introduced only in Lok Sabha', 'RS has 14 days — cannot reject', 'No joint sitting for Money Bill', 'Consolidated Fund — Art 266'], examAsk: 'What is a Money Bill? What is the Consolidated Fund?' })
        },
        {
          id: 'budget-procedure',
          title: 'Budget Procedure',
          content: T('Budget Procedure', 'How government presents annual financial plan and gets Parliament approval to spend.',
            tbl(['Step', 'What Happens'],
            [
              ['1. Presentation', 'Finance Minister presents budget in Lok Sabha (usually 1 February)'],
              ['2. General discussion', 'MPs discuss — no voting yet'],
              ['3. Demands for Grants', 'Ministry-wise spending voted in Lok Sabha'],
              ['4. Appropriation Bill', 'Legal permission to withdraw from Consolidated Fund'],
              ['5. Finance Bill', 'Tax proposals passed as law']
            ]) +
            H.p('Financial year = <strong>1 April to 31 March</strong>. Only <strong>Lok Sabha</strong> votes on Demands for Grants. <strong>Vote on Account</strong> = interim permission if budget not passed by 31 March.'),
            { examTip: 'Budget = Art 112 Annual Financial Statement. Only LS votes on Demands for Grants. Appropriation Bill = spend permission. Finance Bill = tax changes.', memoryTrick: 'B-A-F = Budget, Appropriation, Finance.', dontConfuse: 'Budget speech ≠ Appropriation Bill — separate steps.', quickRevision: ['Art 112 — Annual Financial Statement', 'Finance Minister presents in LS', 'Financial year: 1 Apr – 31 Mar', 'Only LS votes on Demands for Grants', 'Appropriation Bill authorises spending'], examAsk: 'What is Appropriation Bill? Which House votes on Demands for Grants?' })
        },
        {
          id: 'parliamentary-procedures',
          title: 'Parliamentary Procedures',
          content: T('Parliamentary Procedures', 'Rules of how Parliament works — sessions, questions, bills, and motions.',
            tbl(['Session', 'When'],
            [
              ['Budget Session', 'Feb–May (longest)'],
              ['Monsoon Session', 'Jul–Aug'],
              ['Winter Session', 'Nov–Dec']
            ]) +
            tbl(['Question Type', 'Answer'],
            [
              ['Starred Question', 'Oral answer + supplementary allowed'],
              ['Unstarred Question', 'Written answer only'],
              ['Short Notice Question', 'Urgent matter — shorter notice']
            ]) +
            tbl(['Motion', 'Effect'],
            [
              ['No-Confidence Motion', 'If passed in LS, Council of Ministers must resign'],
              ['Adjournment Motion', 'Urgent public issue — LS only'],
              ['Joint Sitting (Art 108)', 'When Houses disagree — NOT for Money Bill or Amendment Bill']
            ]) +
            H.p('At least <strong>2 sessions per year</strong>; gap between sessions must not exceed <strong>6 months</strong>.'),
            { examTip: 'Min 2 sessions/year. Starred = oral answer. No-confidence only in LS. Joint sitting Art 108 — not for Money Bill.', memoryTrick: 'Star = Speak (oral). Unstar = Written.', dontConfuse: 'Adjournment ≠ Prorogation. Prorogation ends session; adjournment pauses within session.', quickRevision: ['At least 2 sessions per year', 'Three readings for every bill', 'Starred question = oral answer', 'No-confidence — Lok Sabha only', 'Joint sitting — Art 108'], examAsk: 'How is a bill passed? What is a no-confidence motion? When is joint sitting called?' })
        }
      ]
    },
    {
      id: 'state-government',
      name: 'D. State Government',
      topics: [
        {
          id: 'governor',
          title: 'The Governor',
          content: T('The Governor', 'The head of a state — appointed by the President, acts as Centre\'s representative.',
            tbl(['Fact', 'Detail'],
            [
              ['Appointment', 'By President on Centre\'s advice'],
              ['Term', '5 years (pleasure of President)'],
              ['Qualification', 'Indian citizen, 35+ years; should not be resident of that state'],
              ['Same person for two states?', 'Yes — can be Governor of two or more states'],
              ['Pardoning power', 'Article 161 — for state laws and death sentence (with conditions)'],
              ['Ordinance power', 'Article 213 — when state legislature not in session']
            ]) +
            H.p('Governor is the <strong>nominal executive head</strong> of state. Real power lies with <strong>Chief Minister</strong> and Council of Ministers. Governor gives assent to state bills and can reserve bills for President.'),
            { examTip: 'Governor appointed by President. Art 161 = pardon (state level). Art 213 = state ordinances. Can be removed by President anytime.', memoryTrick: 'Governor = Centre\'s eyes in state. CM = state\'s real boss.', dontConfuse: 'Governor (state) ≠ President (Union). Governor is NOT elected — appointed.', quickRevision: ['Appointed by President for 5 years', 'Nominal head of state government', 'Art 161 — pardoning power', 'Art 213 — ordinance power', 'Real power with Chief Minister'], examAsk: 'Who appoints the Governor? What is Article 161? Difference between Governor and President?' })
        },
        {
          id: 'chief-minister',
          title: 'The Chief Minister',
          content: T('The Chief Minister', 'Real head of state government — leader of state Council of Ministers.',
            tbl(['Fact', 'Detail'],
            [
              ['Appointment', 'By Governor — leader of majority in Vidhan Sabha'],
              ['Term', '5 years with Vidhan Sabha — while has majority'],
              ['Role', 'Heads state Council of Ministers; allocates portfolios'],
              ['Advises Governor', 'On all major state decisions'],
              ['Removal', 'If loses majority — must resign or face no-confidence']
            ]) +
            H.p('CM is the <strong>real executive</strong> at state level — like PM at Centre. Ministers are appointed by Governor on CM\'s advice. <strong>Collective responsibility</strong> to Vidhan Sabha.'),
            { examTip: 'CM = real head of state govt. Appointed by Governor but must have Vidhan Sabha majority. CM advice binding on Governor in most matters.', memoryTrick: 'CM at state = PM at Centre (same role, different level).', dontConfuse: 'Governor appoints CM but cannot appoint anyone — must be majority leader.', quickRevision: ['Real head of state government', 'Appointed by Governor — majority leader', 'Heads state Council of Ministers', 'Collective responsibility to Vidhan Sabha', 'Advises Governor on state matters'], examAsk: 'Who appoints the Chief Minister? What is the role of CM in state government?' })
        },
        {
          id: 'state-legislature',
          title: 'State Legislature',
          content: T('State Legislature', 'Law-making body of a state — can be unicameral or bicameral.',
            tbl(['Type', 'States', 'Houses'],
            [
              ['Unicameral', 'Most states (24 states)', 'Only Vidhan Sabha (Legislative Assembly)'],
              ['Bicameral', '6 states', 'Vidhan Sabha + Vidhan Parishad (Legislative Council)']
            ]) +
            tbl(['House', 'Members', 'Term', 'Min Age'],
            [
              ['Vidhan Sabha (LA)', 'Not more than 500, not less than 60', '5 years', '25 years'],
              ['Vidhan Parishad (LC)', 'Max 1/3 of Sabha strength; min 40', '6 years (1/3 retire every 2 years)', '30 years']
            ]) +
            H.h2('6 States with Legislative Council') +
            H.p('<strong>Bihar, Uttar Pradesh, Maharashtra, Karnataka, Andhra Pradesh, Telangana</strong> have both Houses. Parliament can create or abolish Legislative Council by law if state passes resolution (Art 169).'),
            { examTip: '6 states have Vidhan Parishad. Art 169 = create/abolish Legislative Council. Sabha term = 5 years; Parishad = permanent (1/3 retire every 2 years).', memoryTrick: 'BUMKAT = Bihar, UP, Maharashtra, Karnataka, Andhra, Telangana — 6 bicameral states.', dontConfuse: 'Vidhan Sabha = like Lok Sabha (direct election). Vidhan Parishad = like Rajya Sabha (partially elected).', quickRevision: ['Most states unicameral (Sabha only)', '6 states bicameral (Sabha + Parishad)', 'Vidhan Sabha: 5-year term, min age 25', 'Vidhan Parishad: 6-year term, min age 30', 'Art 169 — create/abolish Legislative Council'], examAsk: 'Which states have Legislative Council? Difference between Vidhan Sabha and Vidhan Parishad?' })
        }
      ]
    },
    {
      id: 'judiciary',
      name: 'E. Judiciary',
      topics: [
        {
          id: 'supreme-court',
          title: 'Supreme Court',
          content: T('Supreme Court', 'Highest court of India — guardian of the Constitution and final court of appeal.',
            tbl(['Fact', 'Detail'],
            [
              ['Established', '26 January 1950 (Art 124)'],
              ['Location', 'New Delhi'],
              ['Current strength', '34 judges (1 CJI + 33 others)'],
              ['Appointment', 'By President (Collegium system)'],
              ['Term', 'Till 65 years of age'],
              ['Removal', 'Impeachment by Parliament (misbehaviour/incapacity)']
            ]) +
            H.h2('Jurisdiction of Supreme Court') +
            tbl(['Type', 'Meaning'],
            [
              ['Original', 'Disputes between Centre and states; between states; FR cases under Art 32'],
              ['Appellate', 'Appeals from High Courts and other tribunals'],
              ['Advisory', 'President can seek opinion (Art 143) — not binding'],
              ['Writ', 'Art 32 — enforce Fundamental Rights']
            ]),
            { examTip: 'SC = guardian of Constitution. Art 32 = FR enforcement (Ambedkar\'s heart & soul). CJI + collegium appoints judges. Retirement at 65.', memoryTrick: 'SC = Supreme Control — final word on law.', dontConfuse: 'Art 32 = SC writs for FR. Art 226 = High Court writs (wider scope).', quickRevision: ['Highest court — Art 124', 'Guardian of Constitution', 'Art 32 — writ jurisdiction for FR', 'Retirement at 65 years', 'Original + Appellate + Advisory jurisdiction'], examAsk: 'What is the jurisdiction of Supreme Court? What is Article 32?' })
        },
        {
          id: 'high-courts',
          title: 'High Courts',
          content: T('High Courts', 'Highest court in each state — superintendence over all subordinate courts.',
            tbl(['Fact', 'Detail'],
            [
              ['Constitutional basis', 'Article 214–231'],
              ['Appointment', 'By President (on advice of CJI + Governor of state)'],
              ['Term', 'Till 62 years of age'],
              ['Removal', 'Impeachment like SC judges'],
              ['First High Court', 'Calcutta HC — 1862 (under British)'],
              ['Total High Courts', '25 (some serve more than one state/UT)']
            ]) +
            H.h2('Powers of High Court') +
            tbl(['Power', 'Article', 'Meaning'],
            [
              ['Writ jurisdiction', '226', 'Can issue writs for FR and other legal rights — wider than Art 32'],
              ['Superintendence', '227', 'Controls and supervises all subordinate courts in state'],
              ['Appellate jurisdiction', '—', 'Appeals from district courts and tribunals']
            ]),
            { examTip: 'HC judges retire at 62 (SC at 65). Art 226 = HC writs (wider than Art 32). Art 227 = superintendence over subordinate courts.', memoryTrick: 'SC = 65, HC = 62 (HC judges retire 3 years earlier).', dontConfuse: 'Art 32 = only SC for FR. Art 226 = HC for FR + other rights.', quickRevision: ['Articles 214–231', 'Retirement at 62 years', 'Art 226 — writ jurisdiction', 'Art 227 — superintendence over subordinate courts', '25 High Courts in India'], examAsk: 'What is Article 226? Difference between Art 32 and Art 226?' })
        },
        {
          id: 'judicial-review-activism-pil',
          title: 'Judicial Review, Activism & PIL',
          content: T('Judicial Review, Activism & PIL', 'How courts check government actions and help ordinary people get justice.',
            H.h2('Key Concepts') +
            tbl(['Concept', 'Simple Meaning'],
            [
              ['Judicial Review', 'Courts check if laws/actions are constitutional — can declare invalid'],
              ['Judicial Activism', 'Courts take active role to protect rights — go beyond strict letter of law'],
              ['Judicial Overreach', 'When courts enter policy-making area — debated topic'],
              ['PIL (Public Interest Litigation)', 'Any public-spirited person can file case for public good — even without personal injury']
            ]) +
            H.h2('Famous Cases') +
            tbl(['Case', 'Year', 'Significance'],
            [
              ['Kesavananda Bharati', '1973', 'Basic structure — judicial review is part of it'],
              ['Maneka Gandhi', '1978', 'Art 21 — procedure must be fair, just, and reasonable'],
              ['Vishaka', '1997', 'Guidelines for workplace sexual harassment till law was made'],
              ['Olga Tellis', '1985', 'Right to livelihood under Art 21']
            ]) +
            H.p('<strong>PIL</strong> helps poor and weak sections who cannot approach courts themselves. Started in 1980s — Justices P.N. Bhagwati and V.R. Krishna Iyer played key roles.'),
            { examTip: 'Judicial review from USA. PIL = Public Interest Litigation. Kesavananda = judicial review is basic structure. Maneka Gandhi = expanded Art 21.', memoryTrick: 'Review = Check. Activism = Act. PIL = Public can file.', dontConfuse: 'Judicial activism (good intent) ≠ judicial overreach (entering policy domain).', quickRevision: ['Judicial review — courts check constitutionality', 'PIL — case for public good without personal injury', 'Kesavananda — judicial review is basic structure', 'Maneka Gandhi — expanded Article 21', 'Vishaka — workplace harassment guidelines'], examAsk: 'What is judicial review? What is PIL? Which case expanded Article 21?' })
        }
      ]
    },
    {
      id: 'constitutional-bodies',
      name: 'F. Constitutional Bodies',
      topics: [
        {
          id: 'election-commission',
          title: 'Election Commission',
          content: T('Election Commission', 'Independent body that conducts free and fair elections in India.',
            tbl(['Fact', 'Detail'],
            [
              ['Article', '324'],
              ['Composition', '1 Chief Election Commissioner (CEC) + 2 Election Commissioners (since 1993)'],
              ['Appointment', 'By President'],
              ['Term', '6 years or till 65 years of age (whichever earlier)'],
              ['Removal', 'CEC removed like SC judge (impeachment)'],
              ['Functions', 'Conduct elections to Parliament, state legislatures, President, VP']
            ]) +
            H.p('EC uses <strong>EVM (Electronic Voting Machine)</strong> and <strong>VVPAT</strong> for transparency. <strong>Model Code of Conduct</strong> applies during elections.'),
            { examTip: 'Art 324 = Election Commission. CEC removal = like SC judge. EVM + VVPAT used in elections.', memoryTrick: '324 = Vote (EC conducts votes).', dontConfuse: 'EC (Art 324, constitutional) ≠ State Election Commission (panchayat/municipal elections).', quickRevision: ['Article 324', 'Conducts LS, RS, state, President, VP elections', 'CEC + 2 Election Commissioners', 'Term: 6 years or age 65', 'Independent constitutional body'], examAsk: 'Which article deals with Election Commission? How is CEC removed?' })
        },
        {
          id: 'upsc',
          title: 'UPSC',
          content: T('UPSC', 'Union Public Service Commission — selects top officers for Central government jobs.',
            tbl(['Fact', 'Detail'],
            [
              ['Article', '315–323 (Part XIV)'],
              ['Composition', 'Chairman + members appointed by President'],
              ['Term', '6 years or till 65 years of age'],
              ['Removal', 'By President (misbehaviour after SC inquiry)'],
              ['Main exam conducted', 'Civil Services Examination (IAS, IPS, IFS, etc.)'],
              ['Also advises', 'On recruitment rules, promotions, disciplinary matters']
            ]) +
            H.p('UPSC is <strong>independent</strong>. <strong>SPSC (State PSC)</strong> does same job at state level (Art 315).'),
            { examTip: 'UPSC = Art 315–323. Conducts IAS/IPS/IFS exam. Independent body. SPSC at state level.', memoryTrick: 'UPSC = Union People Selection Commission.', dontConfuse: 'UPSC (constitutional) ≠ SSC (Staff Selection Commission — not constitutional).', quickRevision: ['Articles 315–323', 'Conducts Civil Services Exam', 'Chairman + members by President', 'Term: 6 years or age 65', 'SPSC at state level'], examAsk: 'Which articles deal with UPSC? What exams does UPSC conduct?' })
        },
        {
          id: 'finance-commission',
          title: 'Finance Commission',
          content: T('Finance Commission', 'Constitutional body that recommends how tax money should be shared between Centre and states.',
            tbl(['Fact', 'Detail'],
            [
              ['Article', '280'],
              ['Appointed by', 'President every 5 years (or earlier)'],
              ['Chairman', '+ 4 other members'],
              ['Main function', 'Recommend tax devolution between Centre and states; grants to local bodies'],
              ['Reports', 'Submitted to President → placed before Parliament with action taken report']
            ]) +
            H.p('<strong>NITI Aayog</strong> is NOT constitutional — it is an executive advisory body that replaced Planning Commission.'),
            { examTip: 'Finance Commission = Art 280, every 5 years, tax devolution. Constitutional body. NITI Aayog ≠ constitutional.', memoryTrick: '280 = Money sharing (Finance Commission).', dontConfuse: 'Finance Commission (Art 280, constitutional) ≠ NITI Aayog (executive, not constitutional).', quickRevision: ['Article 280', 'Appointed every 5 years by President', 'Recommends Centre–state tax sharing', 'Constitutional body', 'Chairman + 4 members'], examAsk: 'Which article creates Finance Commission? Difference from NITI Aayog?' })
        },
        {
          id: 'cag-attorney-general',
          title: 'CAG & Attorney General',
          content: T('CAG & Attorney General', 'Two important offices — one audits government spending, other is top legal advisor to government.',
            H.h2('Comptroller and Auditor General (CAG)') +
            tbl(['Fact', 'Detail'],
            [
              ['Article', '148'],
              ['Appointment', 'By President'],
              ['Term', '6 years or till 65 years of age'],
              ['Removal', 'Same as SC judge (impeachment)'],
              ['Role', 'Audits all government accounts — Centre and states'],
              ['Nickname', 'Guardian of Public Purse']
            ]) +
            H.h2('Attorney General of India') +
            tbl(['Fact', 'Detail'],
            [
              ['Article', '76'],
              ['Appointment', 'By President'],
              ['Qualification', 'Must be qualified to be SC judge'],
              ['Role', 'Chief legal advisor to Central government; represents govt in SC'],
              ['Parliament', 'Can speak but cannot vote']
            ]),
            { examTip: 'CAG = Art 148, audits accounts, removed like SC judge. AG = Art 76, top law officer, can speak in Parliament but not vote.', memoryTrick: 'CAG = Check Accounts Government. AG = Advocate General.', dontConfuse: 'AG (Art 76, Central) ≠ Advocate General (state level). Solicitor General is NOT constitutional post.', quickRevision: ['CAG — Art 148, audits govt accounts', 'CAG removed like SC judge', 'AG — Art 76, chief legal advisor', 'AG can speak in Parliament, cannot vote'], examAsk: 'What is the role of CAG? Which article deals with Attorney General?' })
        },
        {
          id: 'panchayati-raj',
          title: 'Panchayati Raj',
          content: T('Panchayati Raj', 'Local self-government in villages — constitutional status given by 73rd Amendment.',
            tbl(['Fact', 'Detail'],
            [
              ['Amendment', '73rd Constitutional Amendment Act, 1992'],
              ['Part', 'Part IX (Articles 243–243O)'],
              ['11th Schedule', '29 subjects for Panchayats'],
              ['Three tiers', 'Gram Panchayat → Panchayat Samiti (block) → Zila Parishad (district)'],
              ['Election', 'By State Election Commission'],
              ['Reservation', '1/3 seats for women; SC/ST proportionate to population']
            ]) +
            H.p('Every state must have Panchayats. <strong>Gram Sabha</strong> (village assembly of all voters) approves plans and budgets.'),
            { examTip: '73rd Amendment = Panchayati Raj (1992). Part IX + 11th Schedule. 1/3 seats reserved for women.', memoryTrick: '73 = Rural. 74 = Urban (municipalities).', dontConfuse: '73rd = Panchayats (11th Schedule). 74th = Municipalities (12th Schedule).', quickRevision: ['73rd Amendment 1992', 'Part IX — Articles 243–243O', '11th Schedule — 29 subjects', 'Three tiers of Panchayati Raj', '1/3 seats for women', 'Gram Sabha = village assembly'], examAsk: 'Which amendment gave constitutional status to Panchayati Raj? What is in the 11th Schedule?' })
        },
        {
          id: 'municipalities',
          title: 'Municipalities',
          content: T('Municipalities', 'Local self-government in cities and towns — constitutional status by 74th Amendment.',
            tbl(['Fact', 'Detail'],
            [
              ['Amendment', '74th Constitutional Amendment Act, 1992'],
              ['Part', 'Part IX-A (Articles 243P–243ZG)'],
              ['12th Schedule', '18 subjects for municipalities'],
              ['Types', 'Nagar Panchayat, Municipal Council, Municipal Corporation'],
              ['Election', 'By State Election Commission'],
              ['Reservation', '1/3 seats for women; SC/ST proportionate']
            ]) +
            H.p('74th Amendment brought <strong>urban local bodies</strong> under constitutional framework — like 73rd did for villages.'),
            { examTip: '74th Amendment = Municipalities (1992). Part IX-A + 12th Schedule. 18 subjects. 1/3 women reservation.', memoryTrick: '74 = City (urban). 73 = Village (rural).', dontConfuse: '73rd = rural Panchayats. 74th = urban Municipalities.', quickRevision: ['74th Amendment 1992', 'Part IX-A — Articles 243P–243ZG', '12th Schedule — 18 subjects', 'Nagar Panchayat, Municipal Council, Corporation', '1/3 seats for women'], examAsk: 'Which amendment gave constitutional status to municipalities? What is in the 12th Schedule?' })
        },
        {
          id: 'national-commissions',
          title: 'National Commissions',
          content: T('National Commissions', 'Special bodies to protect rights of SC, ST, and other weaker sections.',
            tbl(['Commission', 'Constitutional?', 'Article / Act', 'Main Role'],
            [
              ['National Commission for SC (NCSC)', 'Yes', 'Art 338', 'Monitor safeguards for Scheduled Castes; investigate complaints'],
              ['National Commission for ST (NCST)', 'Yes', 'Art 338A (89th Amendment 2003)', 'Same for Scheduled Tribes'],
              ['National Commission for BC (NCBC)', 'Yes', 'Art 338B (102nd Amendment 2018)', 'Advise on inclusion/exclusion in BC list'],
              ['National Commission for Women (NCW)', 'No — statutory (1990)', 'Act of 1990', 'Advise on women\'s issues'],
              ['National Commission for Minorities (NCM)', 'No — statutory (1992)', 'Act of 1992', 'Protect interests of religious minorities']
            ]) +
            H.p('Constitutional commissions report to <strong>President</strong>. NCSC and NCST were originally one body — split by <strong>89th Amendment (2003)</strong>.'),
            { examTip: 'NCSC = Art 338. NCST = Art 338A (89th Amendment). NCBC = Art 338B (102nd Amendment 2018). NCW and NCM are statutory, NOT constitutional.', memoryTrick: '338 family: SC (338), ST (338A), BC (338B).', dontConfuse: 'NCSC/NCST/NCBC = constitutional. NCW/NCM = statutory.', quickRevision: ['NCSC — Art 338', 'NCST — Art 338A (89th Amendment 2003)', 'NCBC — Art 338B (102nd Amendment 2018)', 'NCW and NCM are statutory bodies'], examAsk: 'Which article deals with NCSC? When was NCST separated? Is NCW a constitutional body?' })
        },
        {
          id: 'niti-aayog-nhrc-cvc-cic-lokpal',
          title: 'NITI Aayog, NHRC, CVC, CIC & Lokpal',
          content: T('NITI Aayog, NHRC, CVC, CIC & Lokpal', 'Important bodies for planning, human rights, anti-corruption, transparency, and grievance redressal.',
            tbl(['Body', 'Type', 'Established', 'Main Role'],
            [
              ['NITI Aayog', 'Executive', '2015', 'Replaced Planning Commission; policy think tank; cooperative federalism'],
              ['NHRC', 'Statutory', '1993 (Human Rights Act)', 'Protect human rights; investigate violations; recommend action'],
              ['CVC', 'Statutory', '2003 (statutory status)', 'Fight corruption in Central govt; advisory body; supervises CBI on corruption cases'],
              ['CIC', 'Statutory', '2005 (RTI Act)', 'Ensure RTI Act works; order disclosure of information'],
              ['Lokpal', 'Statutory', '2013 (Lokpal Act)', 'Anti-corruption ombudsman for Central govt — PM, ministers, MPs']
            ]) +
            H.p('None of these five bodies are <strong>constitutional bodies</strong> — they were created by executive decision or ordinary laws. Compare with Finance Commission (Art 280) or UPSC (Art 315) which ARE constitutional.'),
            { examTip: 'NITI Aayog replaced Planning Commission 2015 — NOT constitutional. RTI Act 2005 = CIC. Lokpal Act 2013. NHRC = 1993.', memoryTrick: 'NITI = New Ideas. NHRC = Human Rights. CVC = Corruption. CIC = Information. Lokpal = Corruption at top.', dontConfuse: 'NITI Aayog ≠ Finance Commission. NITI is executive; Finance Commission is constitutional (Art 280).', quickRevision: ['NITI Aayog — replaced Planning Commission 2015', 'NHRC — human rights (1993)', 'CVC — anti-corruption vigilance', 'CIC — RTI Act 2005', 'Lokpal — anti-corruption ombudsman (2013)', 'All are statutory/executive — not constitutional'], examAsk: 'What replaced Planning Commission? What is the role of CIC? When was Lokpal Act passed?' })
        }
      ]
    }
  ]
};
})();
