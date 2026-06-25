/* History — General Awareness Notes */
(function() {
window.GA_DATA = window.GA_DATA || {};
const H = window.GA_HELPERS;
const T = (title, whatIs, body, extras = {}) => H.topic(title, whatIs, body, extras);
const tbl = H.table;
const RL = window.GA_RAILWAY_LISTS;

window.GA_DATA.history = {
  id: 'history',
  name: 'History',
  color: '#8B4513',
  icon: '📜',
  chapters: [
    {
      id: 'ancient-history',
      name: 'Ancient History',
      topics: [
        {
          id: 'pre-historic-period',
          title: 'Pre-Historic Period',
          content: T(
            'Pre-Historic Period',
            'The time before humans learned to write — we study it through stones, bones, and cave paintings.',
            H.h2('What Does Pre-Historic Mean?') +
            H.p('The word <strong>pre-historic</strong> means "before history." History needs written records. Before writing was invented, people left clues in <strong>tools</strong>, <strong>pottery</strong>, and <strong>cave paintings</strong>. Scientists who study this period are called <strong>archaeologists</strong>.') +
            H.h2('Three Ages of Pre-History') +
            tbl(
              ['Age', 'Main Material Used', 'Key Features'],
              [
                ['<strong>Paleolithic</strong> (Old Stone Age)', 'Rough stone tools', 'Hunting-gathering; cave paintings at Bhimbetka (MP)'],
                ['<strong>Mesolithic</strong> (Middle Stone Age)', 'Small, polished stone tools (microliths)', 'First domestication of animals; use of bow and arrow'],
                ['<strong>Neolithic</strong> (New Stone Age)', 'Polished stone tools', 'Farming began; permanent villages; pottery making started'],
                ['<strong>Chalcolithic</strong> (Copper-Stone Age)', 'Copper + stone', 'First use of copper; painted grey pottery in some areas']
              ]
            ) +
            H.h2('Important Pre-Historic Sites in India') +
            tbl(
              ['Site', 'State', 'What Was Found'],
              [
                ['Bhimbetka', 'Madhya Pradesh', 'Oldest cave paintings in India (UNESCO site)'],
                ['Mehrgarh', 'Baluchistan (now Pakistan)', 'Earliest known farming village (~7000 BCE)'],
                ['Burzahom', 'Jammu & Kashmir', 'Pit-dwellings; bone tools; dog burials with humans'],
                ['Chirand', 'Bihar', 'Neolithic tools; early evidence of rice cultivation'],
                ['Koldihwa', 'UP', 'Evidence of rice cultivation in Neolithic period']
              ]
            ) +
            H.h2('How Did Early Humans Live?') +
            H.p('In the <strong>Paleolithic age</strong>, humans lived in small groups. They hunted wild animals and collected fruits. They did not build houses — they lived in caves or open camps.') +
            H.p('In the <strong>Neolithic age</strong>, humans learned <strong>agriculture</strong>. They grew wheat, barley, and rice. They made clay pots and lived in permanent villages. This was a huge step forward!'),
            {
              examTip: 'Remember the order: Paleolithic → Mesolithic → Neolithic → Chalcolithic. Bhimbetka cave paintings and Mehrgarh (earliest farming) are favourite exam questions.',
              quickRevision: [
                'Pre-historic = before writing; studied through archaeology.',
                'Paleolithic = Old Stone Age; hunting-gathering; Bhimbetka paintings.',
                'Mesolithic = microliths (tiny stone tools); bow and arrow used.',
                'Neolithic = farming started; pottery and permanent villages.',
                'Chalcolithic = copper + stone tools together.',
                'Mehrgarh = earliest farming village in Indian subcontinent.',
                'Burzahom (Kashmir) = pit-dwellings; dog buried with owner.'
              ],
              examAsk: 'Match pre-historic sites with states; identify the correct Stone Age; questions on Bhimbetka and Mehrgarh.'
            }
          )
        },
        {
          id: 'indus-valley-civilization',
          title: 'Indus Valley Civilization',
          content: T(
            'Indus Valley Civilization (IVC)',
            'One of the world\'s earliest urban civilizations — flourished around 2600–1900 BCE in present-day Pakistan and northwest India.',
            H.h2('Why Is It Important?') +
            H.p('The <strong>Indus Valley Civilization</strong> (also called <strong>Harappan Civilization</strong>) was as advanced as Egypt and Mesopotamia. It had planned cities, drainage systems, and trade networks. It is also called a <strong>Bronze Age</strong> civilization.') +
            H.h2('Major Sites') +
            tbl(
              ['Site', 'Location', 'Special Feature'],
              [
                ['<strong>Harappa</strong>', 'Punjab (Pakistan)', 'First site discovered (1921); granaries; bull seal'],
                ['<strong>Mohenjo-daro</strong>', 'Sindh (Pakistan)', '"Mound of the Dead"; Great Bath; planned city'],
                ['<strong>Lothal</strong>', 'Gujarat', 'Dockyard; bead-making factory; trade port'],
                ['<strong>Dholavira</strong>', 'Gujarat (Kutch)', 'Water conservation system; signboard found'],
                ['<strong>Kalibangan</strong>', 'Rajasthan', 'Ploughed field; fire altars; no drainage like others'],
                ['<strong>Rakhigarhi</strong>', 'Haryana', 'Largest Harappan site in India'],
                ['<strong>Banawali</strong>', 'Haryana', 'Barley cultivation; toy cart found']
              ]
            ) +
            H.h2('Town Planning') +
            H.p('Harappan cities were built on a <strong>grid pattern</strong> — streets cut each other at right angles. Houses were made of <strong>burnt bricks</strong>. Every house had a bathroom connected to an underground <strong>drainage system</strong>. This was very advanced for that time!') +
            H.p('The <strong>Great Bath</strong> at Mohenjo-daro was a large water tank, probably used for religious bathing. The <strong>Citadel</strong> (upper town) and <strong>Lower Town</strong> were separate areas.') +
            H.h2('Economy and Trade') +
            H.p('People grew <strong>wheat, barley, cotton, and peas</strong>. They traded with Mesopotamia. <strong>Seals</strong> made of steatite (soft stone) were used — the most famous is the <strong>Pashupati seal</strong> (figure sitting in yoga pose surrounded by animals).') +
            H.h2('Script and Religion') +
            H.p('Harappans had a <strong>script</strong> with about 400 signs, but it has <strong>not been deciphered</strong> yet. They worshipped a <strong>Mother Goddess</strong>, <strong>Pashupati</strong> (proto-Shiva), and trees/animals. They did not build large temples.') +
            H.h2('Decline') +
            H.p('The civilization declined around <strong>1900 BCE</strong>. Reasons may include climate change, floods, drying up of rivers, or invasion — but no single reason is confirmed.'),
            {
              examTip: 'Harappa was discovered by Daya Ram Sahni (1921); Mohenjo-daro by R.D. Banerji. Lothal = dockyard. Dholavira = water management. Script is NOT deciphered.',
              quickRevision: [
                'Also called Harappan Civilization; Bronze Age; ~2600–1900 BCE.',
                'Harappa (1921, Sahni) and Mohenjo-daro (1922, Banerji) — first discovered sites.',
                'Grid-pattern cities; burnt bricks; advanced drainage system.',
                'Great Bath at Mohenjo-daro; Citadel + Lower Town.',
                'Lothal = dockyard/port; Dholavira = water conservation.',
                'Crops: wheat, barley, cotton; traded with Mesopotamia.',
                'Script not deciphered; worshipped Mother Goddess and Pashupati.',
                'Declined ~1900 BCE; reasons still debated.'
              ],
              examAsk: 'Match Harappan sites with features; who discovered which site; Great Bath location; Lothal dockyard.'
            }
          )
        },
        {
          id: 'vedic-period',
          title: 'Vedic Period',
          content: T(
            'Vedic Period',
            'The age when the sacred Vedas were composed — divided into Early Vedic (Rig Vedic) and Later Vedic periods.',
            H.h2('Two Phases') +
            tbl(
              ['Phase', 'Time', 'Region', 'Main Features'],
              [
                ['<strong>Early Vedic</strong> (Rig Vedic)', '~1500–1000 BCE', 'Punjab & Haryana (Sapta Sindhu)', 'Pastoral life; cattle wealth; no caste system yet; Rig Veda composed'],
                ['<strong>Later Vedic</strong>', '~1000–600 BCE', 'Ganga-Yamuna doab', 'Agriculture; iron tools; caste system forming; kingdoms (janapadas) emerging']
              ]
            ) +
            H.h2('The Four Vedas') +
            tbl(
              ['Veda', 'Meaning', 'Content'],
              [
                ['<strong>Rig Veda</strong>', 'Knowledge of hymns', 'Oldest; 1028 hymns to gods like Indra, Agni'],
                ['<strong>Sama Veda</strong>', 'Knowledge of melodies', 'Hymns set to music for rituals'],
                ['<strong>Yajur Veda</strong>', 'Knowledge of sacrificial formulas', 'Ritual procedures for priests'],
                ['<strong>Atharva Veda</strong>', 'Knowledge of Atharvan priest', 'Spells, charms, medicine']
              ]
            ) +
            H.h2('Early Vedic Society') +
            H.p('People were <strong>pastoral</strong> — cattle (especially cows) were the main wealth. There was no strict caste system. Women had respect — some composed hymns (like <strong>Ghosha</strong> and <strong>Lopamudra</strong>). The <strong>sabha</strong> and <strong>samiti</strong> were tribal assemblies.') +
            H.p('Main gods: <strong>Indra</strong> (war and rain), <strong>Agni</strong> (fire), <strong>Varuna</strong> (cosmic order).') +
            H.h2('Later Vedic Changes') +
            H.p('People moved east to the Ganga plain. <strong>Agriculture</strong> became main occupation. The <strong>varna system</strong> (Brahmin, Kshatriya, Vaishya, Shudra) became rigid. Kings became powerful. Women\'s status declined.') +
            H.h2('Important Vedic Terms') +
            tbl(
              ['Term', 'Meaning'],
              [
                ['<strong>Janapada</strong>', 'Land where people settled (later became kingdoms)'],
                ['<strong>Gavishthi</strong>', 'Cattle raid / search for cows'],
                ['<strong>Rajan</strong>', 'Chief / King in early Vedic period'],
                ['<strong>Asvamedha</strong>', 'Horse sacrifice to prove king\'s power']
              ]
            ),
            {
              examTip: 'Rig Veda is the OLDEST text. Early Vedic = pastoral + Punjab; Later Vedic = agriculture + Ganga plain + caste system. Four Vedas — remember Rig = hymns, Sama = music, Yajur = rituals, Atharva = spells.',
              quickRevision: [
                'Early Vedic (~1500–1000 BCE): Punjab, pastoral, Rig Veda.',
                'Later Vedic (~1000–600 BCE): Ganga plain, farming, caste forming.',
                'Four Vedas: Rig, Sama, Yajur, Atharva.',
                'Early gods: Indra, Agni, Varuna.',
                'Cattle = main wealth in Early Vedic period.',
                'Sabha and Samiti = tribal assemblies.',
                'Women composed hymns: Ghosha, Lopamudra.',
                'Asvamedha = horse sacrifice for kings.'
              ],
              examAsk: 'Which Veda is oldest; difference between Early and Later Vedic; main occupation in each phase; meaning of Asvamedha.'
            }
          )
        },
        {
          id: 'mahajanapadas',
          title: 'Mahajanapadas',
          content: T(
            'Mahajanapadas',
            'Sixteen large kingdoms that arose in North India around 600 BCE — the first major states in Indian history.',
            H.h2('What Were Mahajanapadas?') +
            H.p('After the Vedic period, small tribes joined together to form <strong>big kingdoms</strong>. These were called <strong>Mahajanapadas</strong> (Maha = great, Janapada = land of people). There were <strong>16</strong> of them. This period also saw the rise of <strong>Magadha</strong> as the most powerful kingdom.') +
            H.h2('16 Mahajanapadas') +
            tbl(
              ['Mahajanapada', 'Capital', 'Modern Region'],
              [
                ['<strong>Magadha</strong>', 'Rajgriha / Pataliputra', 'Bihar'],
                ['<strong>Kosala</strong>', 'Shravasti / Ayodhya', 'UP'],
                ['<strong>Vatsa</strong>', 'Kaushambi', 'UP'],
                ['<strong>Avanti</strong>', 'Ujjain', 'MP'],
                ['<strong>Gandhara</strong>', 'Taxila', 'Pakistan / Kashmir'],
                ['<strong>Kamboja</strong>', 'Poonch', 'Kashmir / Pakistan'],
                ['<strong>Anga</strong>', 'Champa', 'Bihar / Bengal'],
                ['<strong>Malla</strong>', 'Kushinagar', 'UP / Bihar'],
                ['<strong>Asmaka</strong>', 'Paithan', 'Maharashtra'],
                ['<strong>Matysa</strong>', 'Virat Nagar', 'Rajasthan'],
                ['<strong>Surasena</strong>', 'Mathura', 'UP'],
                ['<strong>Chedi</strong>', 'Shuktimati', 'MP'],
                ['<strong>Kuru</strong>', 'Indraprastha', 'Delhi / Haryana'],
                ['<strong>Panchala</strong>', 'Ahichhatra', 'UP'],
                ['<strong>Vajji (Vrijji)</strong>', 'Vaishali', 'Bihar'],
                ['<strong>Kashi</strong>', 'Varanasi', 'UP']
              ]
            ) +
            H.h2('Types of States') +
            tbl(
              ['Type', 'Example', 'Feature'],
              [
                ['<strong>Monarchy</strong>', 'Magadha, Kosala', 'Ruled by a king (raja)'],
                ['<strong>Republic (Gana-Sangha)</strong>', 'Vajji (Lichchhavis)', 'Assembly of leaders; NOT ruled by one king']
              ]
            ) +
            H.h2('Rise of Magadha') +
            H.p('<strong>Magadha</strong> became the most powerful Mahajanapada because of:') +
            H.ul([
              'Rich iron ore deposits (for weapons)',
              'Fertile land and elephants for army',
              'Strong rulers: <strong>Bimbisara</strong>, <strong>Ajatashatru</strong>, and later <strong>Mahapadma Nanda</strong>',
              'Capital at <strong>Pataliputra</strong> (near Patna) — well located for trade'
            ]) +
            H.h2('Important Rulers of Magadha') +
            tbl(
              ['Ruler', 'Dynasty', 'Achievement'],
              [
                ['Bimbisara', 'Haryanka', 'Used marriage alliances; friendly with Buddha'],
                ['Ajatashatru', 'Haryanka', 'Built Pataliputra; fought Vajji confederacy'],
                ['Mahapadma Nanda', 'Nanda', 'First empire-builder; very powerful army']
              ]
            ),
            {
              examTip: 'Magadha = most important (capital Pataliputra). Vajji = republic (NOT monarchy). 16 Mahajanapadas — Gandhara capital Taxila and Avanti capital Ujjain are often asked.',
              quickRevision: [
                '16 Mahajanapadas arose ~600 BCE in North India.',
                'Magadha (Bihar) became the most powerful.',
                'Capital of Magadha: Rajgriha, then Pataliputra.',
                'Vajji (Vaishali) = republic/gana-sangha, NOT monarchy.',
                'Bimbisara and Ajatashatru = Haryanka dynasty of Magadha.',
                'Magadha had iron, elephants, fertile land.',
                'Gandhara capital = Taxila; Avanti capital = Ujjain.',
                'Mahapadma Nanda = first great empire-builder of Magadha.'
              ],
              examAsk: 'Capital of Magadha/Avanti/Gandhara; which was a republic; why Magadha became powerful; Bimbisara and Ajatashatru.'
            }
          )
        },
        {
          id: 'religious-movements',
          title: 'Religious Movements — Buddhism & Jainism',
          content: T(
            'Buddhism and Jainism',
            'Two great religions founded in the 6th century BCE that rejected Vedic rituals and caste discrimination.',
            H.h2('Why Did New Religions Arise?') +
            H.p('By 600 BCE, people were unhappy with complex Vedic rituals, expensive sacrifices, and the rigid caste system. <strong>Buddhism</strong> and <strong>Jainism</strong> offered simpler paths focused on good conduct and non-violence.') +
            H.h2('Buddhism — Key Facts') +
            tbl(
              ['Detail', 'Information'],
              [
                ['Founder', '<strong>Gautama Buddha</strong> (Siddhartha)'],
                ['Born at', 'Lumbini (Nepal), ~563 BCE'],
                ['Enlightenment at', 'Bodh Gaya (Bihar) under Bodhi tree'],
                ['First sermon at', '<strong>Sarnath</strong> (Dharma Chakra Pravartana)'],
                ['Died at', 'Kushinagar (Mahaparinirvana), ~483 BCE'],
                ['Main texts', 'Tripitakas (Vinaya, Sutta, Abhidhamma)'],
                ['Symbol', 'Dharma Chakra (Wheel), Bodhi tree, Stupa']
              ]
            ) +
            H.h2('Four Noble Truths (Buddhism)') +
            H.ul([
              'Life has <strong>suffering</strong> (Dukkha)',
              'Suffering has a <strong>cause</strong> (desire/Trishna)',
              'Suffering can be <strong>ended</strong> (Nirvana)',
              'Follow the <strong>Eightfold Path</strong> to end suffering'
            ]) +
            H.h2('Jainism — Key Facts') +
            tbl(
              ['Detail', 'Information'],
              [
                ['First Tirthankara', '<strong>Rishabhanatha</strong> (Adinath)'],
                ['24th (last) Tirthankara', '<strong>Mahavira</strong> (Vardhamana)'],
                ['Born at', 'Kundagrama (Vaishali, Bihar), ~599 BCE'],
                ['Enlightenment at', 'Under a Sal tree at Jrimbhikagrama'],
                ['Died at', 'Pavapuri (Bihar), ~527 BCE'],
                ['Main texts', '12 Angas (in Prakrit)'],
                ['Symbol', 'Swastika, Nandipada, Lion']
              ]
            ) +
            H.h2('Three Jewels of Jainism (Triratna)') +
            H.ul([
              '<strong>Right Faith</strong> (Samyak Darshan)',
              '<strong>Right Knowledge</strong> (Samyak Jnana)',
              '<strong>Right Conduct</strong> (Samyak Charitra)'
            ]) +
            H.p('Jainism teaches <strong>ahimsa</strong> (non-violence) strictly — even avoiding harm to insects. Mahavira\'s five vows include non-violence, truth, non-stealing, celibacy, and non-possession.') +
            H.h2('Buddhist Councils') +
            tbl(
              ['Council', 'Year', 'Patron', 'Venue', 'Outcome'],
              [
                ['1st', '483 BCE', 'Ajatashatru', 'Rajgriha', 'Vinaya Pitaka compiled; Ananda recited Suttas'],
                ['2nd', '383 BCE', 'Kalasoka', 'Vaishali', 'Split into Sthaviravadins and Mahasanghikas'],
                ['3rd', '250 BCE', 'Ashoka', 'Pataliputra', 'Abhidhamma Pitaka; sent missionaries abroad'],
                ['4th', '72 CE', 'Kanishka', 'Kashmir', 'Division into Hinayana and Mahayana']
              ]
            ) +
            H.h2('Comparison') +
            tbl(
              ['Feature', 'Buddhism', 'Jainism'],
              [
                ['Founder', 'Gautama Buddha', 'Mahavira (24th Tirthankara)'],
                ['God', 'No creator God', 'No creator God'],
                ['Salvation', 'Nirvana via Eightfold Path', 'Moksha via Triratna + ahimsa'],
                ['Spread', 'Spread to Sri Lanka, China, Japan, SE Asia', 'Mostly confined to India'],
                ['Council patron (3rd)', 'Ashoka', '—']
              ]
            ),
            {
              examTip: 'Buddha: born Lumbini, enlightenment Bodh Gaya, first sermon Sarnath, died Kushinagar. Mahavira: 24th Tirthankara. 3rd Buddhist Council under Ashoka. 4th under Kanishka.',
              quickRevision: [
                'Both arose ~6th century BCE; rejected Vedic rituals and caste.',
                'Buddha = Siddhartha; born Lumbini; enlightened Bodh Gaya; sermon Sarnath.',
                'Four Noble Truths + Eightfold Path = core of Buddhism.',
                'Mahavira = 24th Tirthankara; born Vaishali; died Pavapuri.',
                'Jain Triratna: Right Faith, Knowledge, Conduct.',
                'Both stress ahimsa (non-violence).',
                '3rd Buddhist Council: Ashoka, Pataliputra.',
                '4th Buddhist Council: Kanishka — Hinayana/Mahayana split.'
              ],
              examAsk: 'Birth/enlightenment/death places of Buddha; 24th Tirthankara; Buddhist councils with patrons; Four Noble Truths; Triratna.'
            }
          )
        },
        {
          id: 'ancient-universities',
          title: 'Ancient Universities',
          content: T(
            'Ancient Universities of India',
            'Great centres of learning where students from many countries came to study — India was a world leader in education.',
            H.h2('Famous Ancient Universities') +
            tbl(
              ['University', 'Location', 'Founded By', 'Famous For'],
              [
                ['<strong>Taxila (Takshashila)</strong>', 'Near Rawalpindi (Pakistan)', 'Ancient (no single founder)', 'Oldest; Chanakya/Kautilya taught here; medicine, grammar, archery'],
                ['<strong>Nalanda</strong>', 'Bihar', 'Gupta kings (later expanded by Harsha)', 'Buddhist learning; Xuanzang studied here; 10,000+ students'],
                ['<strong>Vikramashila</strong>', 'Bhagalpur, Bihar', 'Dharmapala (Pala king)', 'Tantric Buddhism; second to Nalanda'],
                ['<strong>Valabhi</strong>', 'Gujarat', 'Maitraka rulers', 'Secular learning; law and economics'],
                ['<strong>Odantapuri</strong>', 'Bihar', 'Gopala (Pala king)', 'Buddhist monastery-university'],
                ['<strong>Pushpagiri</strong>', 'Odisha', 'Ancient', 'Buddhist centre in Eastern India'],
                ['<strong>Sharada Peeth</strong>', 'Kashmir', 'Ancient', 'Sanskrit and Hindu learning']
              ]
            ) +
            H.h2('Taxila — The Oldest') +
            H.p('<strong>Taxila</strong> was the most famous ancient university. <strong>Chanakya</strong> (who wrote Arthashastra and trained Chandragupta Maurya) taught here. Subjects included <strong>Vedas, grammar, medicine, mathematics, astronomy, and military science</strong>. Students came from Greece, China, and Central Asia.') +
            H.h2('Nalanda — The Greatest') +
            H.p('<strong>Nalanda</strong> was a huge residential university with 8 colleges, libraries, and dormitories. The Chinese traveller <strong>Xuanzang (Hsuan Tsang)</strong> spent years studying here during Harsha\'s reign. It was destroyed by <strong>Bakhtiyar Khilji</strong> in 1193 CE.') +
            H.p('Admission was tough — students had to pass an entrance test. Subjects: <strong>logic, grammar, medicine, Buddhist philosophy, astronomy</strong>.') +
            H.h2('Who Destroyed What?') +
            tbl(
              ['University', 'Destroyed By', 'Year'],
              [
                ['Nalanda', 'Bakhtiyar Khilji', '1193 CE'],
                ['Vikramashila', 'Bakhtiyar Khilji', '~1203 CE'],
                ['Taxila', 'Huns (later decline)', '5th century CE (decline)']
              ]
            ),
            {
              examTip: 'Taxila = oldest; Chanakya taught there. Nalanda = Xuanzang; destroyed by Bakhtiyar Khilji (1193). Vikramashila founded by Dharmapala (Pala dynasty).',
              quickRevision: [
                'Taxila = oldest university; Chanakya/Kautilya taught here.',
                'Nalanda = greatest Buddhist university in Bihar.',
                'Xuanzang (Chinese) studied at Nalanda during Harsha\'s time.',
                'Nalanda destroyed by Bakhtiyar Khilji in 1193 CE.',
                'Vikramashila founded by Pala king Dharmapala.',
                'Valabhi in Gujarat = secular learning (law, economics).',
                'Odantapuri founded by Pala king Gopala.',
                'Students came from China, Tibet, Korea, and Central Asia.'
              ],
              examAsk: 'Oldest university; who studied at Nalanda; who destroyed Nalanda; founder of Vikramashila; Chanakya\'s connection to Taxila.'
            }
          )
        },
        {
          id: 'ancient-literature',
          title: 'Ancient Literature',
          content: T(
            'Ancient Indian Literature',
            'India\'s ancient books — from sacred Vedas to epics and science texts — shaped world knowledge for centuries.',
            H.h2('Types of Ancient Literature') +
            tbl(
              ['Category', 'Examples', 'Language'],
              [
                ['<strong>Religious/Sacred</strong>', 'Four Vedas, Upanishads, Puranas', 'Sanskrit'],
                ['<strong>Epics</strong>', 'Ramayana (Valmiki), Mahabharata (Vyasa)', 'Sanskrit'],
                ['<strong>Drama</strong>', 'Abhijnanashakuntalam (Kalidasa), Mudrarakshasa (Vishakhadatta)', 'Sanskrit'],
                ['<strong>Science</strong>', 'Aryabhatiya (Aryabhata), Surya Siddhanta', 'Sanskrit'],
                ['<strong>Statecraft</strong>', 'Arthashastra (Kautilya/Chanakya)', 'Sanskrit'],
                ['<strong>Grammar</strong>', 'Ashtadhyayi (Panini)', 'Sanskrit'],
                ['<strong>Buddhist/Jain</strong>', 'Tripitakas, Jataka tales, Angas', 'Pali, Prakrit']
              ]
            ) +
            H.h2('The Two Great Epics') +
            tbl(
              ['Epic', 'Author', 'Main Story', 'Key Characters'],
              [
                ['<strong>Ramayana</strong>', 'Valmiki', 'Rama\'s journey to rescue Sita from Ravana', 'Rama, Sita, Lakshmana, Hanuman, Ravana'],
                ['<strong>Mahabharata</strong>', 'Vyasa (Ved Vyas)', 'War between Pandavas and Kauravas', 'Krishna, Arjuna, Yudhishthira, Duryodhana, Bhishma']
              ]
            ) +
            H.p('The <strong>Mahabharata</strong> is the longest epic in the world. The <strong>Bhagavad Gita</strong> (Krishna\'s advice to Arjuna) is part of it.') +
            H.h2('Upanishads') +
            H.p('The <strong>Upanishads</strong> are philosophical texts attached to the Vedas. They discuss the soul (<strong>Atman</strong>) and universal spirit (<strong>Brahman</strong>). Famous ones: <strong>Chandogya, Brihadaranyaka, Isha</strong>.') +
            H.h2('Gupta Age Literature') +
            tbl(
              ['Author', 'Work', 'Type'],
              [
                ['Kalidasa', 'Abhijnanashakuntalam, Meghaduta, Raghuvamsha', 'Drama & poetry'],
                ['Banabhatta', 'Harshacharita, Kadambari', 'Biography & novel'],
                ['Vishakhadatta', 'Mudrarakshasa', 'Political drama (Chandragupta Maurya)'],
                ['Amarasimha', 'Amarakosha', 'Sanskrit dictionary/thesaurus'],
                ['Varahamihira', 'Brihat Samhita, Pancha Siddhantika', 'Astronomy & astrology']
              ]
            ) +
            H.h2('Tamil Sangam Literature') +
            H.p('The <strong>Sangam</strong> period produced Tamil poems collected in anthologies like <strong>Ettuthogai</strong> and <strong>Pattuppattu</strong>. They describe Tamil kingdoms, love, war, and nature.') +
            H.p('<strong>Tolkappiyam</strong> by Tolkappiyar is the oldest Tamil grammar book.'),
            {
              examTip: 'Ramayana = Valmiki; Mahabharata = Vyasa (longest epic). Gita is part of Mahabharata. Arthashastra = Chanakya. Ashtadhyayi = Panini (grammar). Kalidasa = Shakuntalam.',
              quickRevision: [
                'Four Vedas = oldest sacred texts; Upanishads = philosophy.',
                'Ramayana by Valmiki; Mahabharata by Vyasa (longest epic).',
                'Bhagavad Gita is part of Mahabharata.',
                'Arthashastra by Kautilya/Chanakya = statecraft.',
                'Ashtadhyayi by Panini = Sanskrit grammar.',
                'Kalidasa = greatest Sanskrit poet (Shakuntalam).',
                'Tripitakas = Buddhist texts in Pali.',
                'Tolkappiyam = oldest Tamil grammar.'
              ],
              examAsk: 'Authors of Ramayana/Mahabharata/Arthashastra/Shakuntalam; what is Bhagavad Gita; Panini\'s work; Sangam literature language.'
            }
          )
        },
        {
          id: 'ancient-science',
          title: 'Ancient Science & Technology',
          content: T(
            'Ancient Indian Science',
            'Ancient Indians made remarkable discoveries in maths, astronomy, medicine, and metallurgy — many centuries before Europe.',
            H.h2('Mathematics') +
            tbl(
              ['Scientist', 'Contribution', 'Importance'],
              [
                ['<strong>Aryabhata</strong> (476 CE)', 'Zero, place value system, value of π (pi)', 'Aryabhatiya; Earth rotates on axis; solar year = 365.25 days'],
                ['<strong>Brahmagupta</strong> (628 CE)', 'Rules for zero, negative numbers', 'Brahmasphutasiddhanta; quadratic equations'],
                ['<strong>Bhaskara I</strong>', 'Commentary on Aryabhata', 'Spread Aryabhata\'s work'],
                ['<strong>Bhaskara II</strong> (12th c.)', 'Lilavati, Bijaganita', 'Algebra; "Pythagorean" theorem stated'],
                ['<strong>Panini</strong>', 'Ashtadhyayi (grammar)', 'Precise rules — influenced modern linguistics & computing']
              ]
            ) +
            H.p('Indians invented the <strong>decimal system</strong> and the numeral <strong>zero</strong>. These reached Europe through Arab traders and changed world mathematics.') +
            H.h2('Astronomy') +
            tbl(
              ['Scientist / Text', 'Discovery'],
              [
                ['Aryabhata', 'Earth is round; rotates on its axis; eclipses explained scientifically'],
                ['Varahamihira', 'Brihat Samhita — earthquakes, comets, rainfall prediction'],
                ['Surya Siddhanta', 'Earth\'s circumference calculated; sine tables'],
                ['Aryabhata', 'Proposed heliocentric ideas (Sun at centre of solar system)']
              ]
            ) +
            H.h2('Medicine (Ayurveda)') +
            tbl(
              ['Text / Person', 'Contribution'],
              [
                ['<strong>Charaka</strong>', 'Charaka Samhita — internal medicine, diagnosis, anatomy'],
                ['<strong>Sushruta</strong>', 'Sushruta Samhita — surgery, 120+ instruments; plastic surgery (rhinoplasty)'],
                ['<strong>Dhanvantari</strong>', 'God of Ayurveda; physician of gods (mythology)']
              ]
            ) +
            H.p('<strong>Sushruta</strong> is called the <strong>father of surgery</strong>. He described cataract surgery, caesarean section, and rhinoplasty (nose reconstruction).') +
            H.h2('Metallurgy') +
            tbl(
              ['Example', 'Detail'],
              [
                ['<strong>Iron Pillar of Delhi</strong>', 'Gupta period; 7 tonnes; has NOT rusted in 1600+ years'],
                ['<strong>Wootz steel</strong>', 'High-quality steel exported to Damascus (Syria) for swords'],
                ['<strong>Seamless bronze dancing girl</strong>', 'Harappan; shows advanced metal casting']
              ]
            ) +
            H.h2('Other Achievements') +
            H.ul([
              '<strong>Shipbuilding</strong> — Lothal dockyard; trade with Rome and Southeast Asia',
              '<strong>Cotton weaving</strong> — India exported cotton cloth ("Muslin") to the world',
              '<strong>Water management</strong> — Dholavira reservoirs; stepwells in Gujarat'
            ]),
            {
              examTip: 'Aryabhata = zero, pi, Earth\'s rotation. Sushruta = surgery/father of surgery. Charaka = medicine. Iron Pillar of Delhi = Gupta metallurgy. Decimal system + zero = Indian gift to world.',
              quickRevision: [
                'Aryabhata: zero, π, Earth rotates, Aryabhatiya.',
                'Brahmagupta: rules for zero and negative numbers.',
                'Bhaskara II: Lilavati (maths), Bijaganita (algebra).',
                'Charaka Samhita = Ayurveda medicine.',
                'Sushruta Samhita = surgery; father of surgery.',
                'Iron Pillar of Delhi — no rust for 1600+ years.',
                'Decimal system and zero invented in India.',
                'Panini\'s grammar influenced modern linguistics.'
              ],
              examAsk: 'Aryabhata\'s contributions; who wrote Sushruta/Charaka Samhita; Iron Pillar of Delhi; invention of zero; father of surgery.'
            }
          )
        },
        {
          id: 'mauryan-empire',
          title: 'Mauryan Empire',
          content: T(
            'Mauryan Empire',
            'India\'s first large empire — founded by Chandragupta Maurya in 321 BCE and reaching its peak under Ashoka.',
            H.h2('Founding the Empire') +
            H.p('<strong>Chandragupta Maurya</strong> was guided by his minister <strong>Chanakya</strong> (Kautilya), who wrote the <strong>Arthashastra</strong>. Chandragupta defeated the Nanda king and then the Greek ruler <strong>Seleucus Nicator</strong>, gaining territory up to Afghanistan.') +
            H.h2('Mauryan Rulers') +
            tbl(
              ['Ruler', 'Period', 'Key Events'],
              [
                ['<strong>Chandragupta Maurya</strong>', '321–297 BCE', 'Founded empire; defeated Nandas and Seleucus; Jainism in old age'],
                ['<strong>Bindusara</strong>', '297–272 BCE', 'Extended empire south; called "Amitraghata" (slayer of foes)'],
                ['<strong>Ashoka</strong>', '268–232 BCE', 'Kalinga war; embraced Buddhism; spread Dhamma; pillars & edicts'],
                ['<strong>Later Mauryas</strong>', '232–185 BCE', 'Empire declined; last ruler Brihadratha killed by Pushyamitra Shunga']
              ]
            ) +
            H.h2('Ashoka — The Greatest Mauryan') +
            H.p('After the bloody <strong>Kalinga War</strong> (261 BCE), Ashoka felt deep remorse. He converted to <strong>Buddhism</strong> and preached <strong>Dhamma</strong> (moral law) instead of war. He sent missionaries to Sri Lanka, Central Asia, and Southeast Asia.') +
            H.p('Ashoka\'s messages were carved on <strong>pillars</strong> and <strong>rock edicts</strong> across India. The <strong>Lion Capital</strong> of Sarnath pillar is India\'s <strong>National Emblem</strong>.') +
            H.h2('Mauryan Administration') +
            tbl(
              ['Feature', 'Detail'],
              [
                ['Capital', 'Pataliputra (Patna)'],
                ['Central official', 'Mantrin (minister), Senapati (army chief), Purohita (priest)'],
                ['Provinces', 'Divided into provinces ruled by governors (Kumara/Viceroy)'],
                ['Local admin', 'Districts (Ahara) → Villages (Grama)'],
                ['Spy system', 'Detailed spy network described in Arthashastra'],
                ['Army', '600,000 infantry, 30,000 cavalry (as per Greek accounts)']
              ]
            ) +
            H.h2('Megasthenes — Indica') +
            H.p('The Greek ambassador <strong>Megasthenes</strong> visited Chandragupta\'s court and wrote <strong>Indica</strong>. He described Pataliputra\'s grandeur, the king\'s court, and Indian society. He mentions <strong>Sandrokottos</strong> (= Chandragupta Maurya).'),
            {
              examTip: 'Chandragupta + Chanakya = founders. Ashoka after Kalinga war → Buddhism. Lion Capital of Sarnath = National Emblem. Megasthenes wrote Indica. Last Mauryan = Brihadratha.',
              quickRevision: [
                'First pan-Indian empire; founded 321 BCE by Chandragupta Maurya.',
                'Chanakya (Kautilya) = minister; wrote Arthashastra.',
                'Defeated Nandas and Seleucus Nicator.',
                'Ashoka: Kalinga war 261 BCE → embraced Buddhism.',
                'Ashoka\'s edicts on pillars and rocks; Lion Capital = National Emblem.',
                'Capital: Pataliputra; Megasthenes wrote Indica.',
                '3rd Buddhist Council held under Ashoka.',
                'Empire ended 185 BCE; Brihadratha killed by Pushyamitra Shunga.'
              ],
              examAsk: 'Founder of Mauryan empire; Ashoka and Kalinga war; National Emblem origin; Megasthenes/Indica; last Mauryan ruler.'
            }
          )
        },
        {
          id: 'post-mauryan',
          title: 'Post-Mauryan Period',
          content: T(
            'Post-Mauryan Period',
            'After the Mauryas fell, many dynasties ruled different parts of India — and foreign kings from Central Asia also came.',
            H.h2('Major Dynasties') +
            tbl(
              ['Dynasty', 'Region', 'Important Rulers', 'Notes'],
              [
                ['<strong>Shunga</strong>', 'North India', 'Pushyamitra Shunga', 'Killed last Mauryan; performed Ashvamedha; patronised culture'],
                ['<strong>Kanva</strong>', 'Magadha', 'Vasudeva Kanva', 'Brief rule after Shungas'],
                ['<strong>Satavahana</strong>', 'Deccan (Maharashtra, AP, Telangana)', 'Gautamiputra Satakarni', 'Issued coins; patronised Buddhism; Prakrit language'],
                ['<strong>Indo-Greeks</strong>', 'NW India', 'Menander (Milinda)', 'Greek + Indian culture mix; Milinda Panha (Buddhist text)'],
                ['<strong>Parthians (Pahlavas)</strong>', 'NW India', 'Gondophernes', 'Replaced Indo-Greeks'],
                ['<strong>Shakas (Scythians)</strong>', 'Western India', 'Rudradaman I', 'Junagadh rock inscription; Sakas era (78 CE) started by Kanishka'],
                ['<strong>Kushanas</strong>', 'Central Asia to Gangetic plain', 'Kanishka', 'Greatest Kushan; Gandhara art; 4th Buddhist Council']
              ]
            ) +
            H.h2('Kanishka — Greatest Kushan Ruler') +
            H.p('<strong>Kanishka</strong> (78–101 CE) ruled a vast empire from Central Asia to Mathura. He patronised <strong>Mahayana Buddhism</strong> and convened the <strong>4th Buddhist Council</strong> in Kashmir. His era — the <strong>Shaka era</strong> (starting 78 CE) — is used in Indian calendars.') +
            H.h2('Gandhara Art') +
            H.p('<strong>Gandhara art</strong> developed under Kushans in NW India (Taxila, Peshawar). It shows <strong>Greek influence</strong> — Buddha statues with wavy hair and toga-like robes. It is also called <strong>Greco-Buddhist art</strong>.') +
            H.h2('Satavahana Contributions') +
            H.p('The <strong>Satavahanas</strong> (also called Andhras) ruled the Deccan for 400+ years. <strong>Gautamiputra Satakarni</strong> was their greatest king. They issued coins with bilingual inscriptions (Prakrit + Brahmi). They built Buddhist stupas at Amaravati and Nagarjunakonda.') +
            H.h2('Foreign Contacts') +
            H.p('This period saw strong <strong>trade with Rome</strong> (Roman gold coins found in South India). Indian spices, textiles, and gems were exported. <strong>Silk Route</strong> trade passed through Kushan territory.'),
            {
              examTip: 'Kanishka = Kushan, 4th Buddhist Council, Shaka era 78 CE. Pushyamitra Shunga ended Mauryas. Satavahanas = Deccan. Gandhara art = Greek-style Buddha statues. Menander = Indo-Greek.',
              quickRevision: [
                'Mauryas ended 185 BCE; Pushyamitra Shunga killed last Mauryan.',
                'Shungas ruled North India; performed Ashvamedha.',
                'Satavahanas (Andhras) ruled Deccan; Gautamiputra Satakarni greatest king.',
                'Indo-Greeks: Menander (Milinda); Milinda Panha text.',
                'Kushans: Kanishka greatest; 4th Buddhist Council.',
                'Shaka era starts 78 CE (Kanishka).',
                'Gandhara art = Greco-Buddhist style in NW India.',
                'Trade with Rome; Roman coins found in South India.'
              ],
              examAsk: 'Who ended Mauryan empire; Kanishka\'s achievements; Gandhara art features; Satavahana region; Shaka era start year; Menander/Milinda.'
            }
          )
        },
        {
          id: 'gupta-empire',
          title: 'Gupta Empire',
          content: T(
            'Gupta Empire',
            'The "Golden Age" of ancient India — great progress in art, science, literature, and religion from 320 to 550 CE.',
            H.h2('Gupta Rulers') +
            tbl(
              ['Ruler', 'Period', 'Achievement'],
              [
                ['<strong>Chandragupta I</strong>', '320–335 CE', 'Founded empire; married Lichchhavi princess; title Maharajadhiraja'],
                ['<strong>Samudragupta</strong>', '335–375 CE', 'Napoleon of India (Harisena); Allahabad Pillar inscription; Digvijaya'],
                ['<strong>Chandragupta II</strong> (Vikramaditya)', '375–415 CE', 'Golden age peak; Fa-Hien visited; Ujjain capital; nine gems at court'],
                ['<strong>Kumaragupta I</strong>', '415–455 CE', 'Nalanda university expanded; Narasimha avatar coins'],
                ['<strong>Skandagupta</strong>', '455–467 CE', 'Defeated Hunas; Bhitari pillar inscription'],
                ['<strong>Later Guptas</strong>', '467–550 CE', 'Empire weakened; Huna invasions continued']
              ]
            ) +
            H.h2('Why "Golden Age"?') +
            H.p('The Gupta period saw amazing achievements:') +
            H.ul([
              '<strong>Literature:</strong> Kalidasa (Shakuntalam), Vishakhadatta, Shudraka',
              '<strong>Science:</strong> Aryabhata, Varahamihira, Brahmagupta',
              '<strong>Art:</strong> Ajanta cave paintings, Mathura and Sarnath Buddha statues',
              '<strong>Religion:</strong> Hinduism revived; temple building started; Buddhism & Jainism also flourished',
              '<strong>Administration:</strong> Decentralised, efficient; land grants to Brahmins (feudalism beginning)'
            ]) +
            H.h2('Fa-Hien (Chinese Traveller)') +
            H.p('<strong>Fa-Hien</strong> visited India during Chandragupta II\'s reign (399–414 CE). He praised the peaceful country, hospitals, and Buddhist monasteries. He wrote <strong>Foguo Ji</strong> (Record of Buddhist Kingdoms).') +
            H.h2('Gupta Art & Architecture') +
            tbl(
              ['Example', 'Detail'],
              [
                ['Ajanta Caves', '29 rock-cut caves near Aurangabad; paintings of Jataka tales'],
                ['Dashavatara Temple (Deogarh)', 'One of earliest Hindu stone temples'],
                ['Iron Pillar of Delhi', 'Gupta metallurgy — rust-free for 1600+ years'],
                ['Buddha statues (Sarnath, Mathura)', 'Finest Gupta sculpture; serene Buddha images']
              ]
            ) +
            H.h2('Decline') +
            H.p('The <strong>Huna</strong> (Hepthalite) invasions under <strong>Toramana</strong> and <strong>Mihirakula</strong> weakened the empire. After 550 CE, the Gupta empire broke into small kingdoms.'),
            {
              examTip: 'Samudragupta = "Napoleon of India" (Allahabad Pillar inscription). Chandragupta II = Vikramaditya (Fa-Hien visited). Golden Age of India. Ajanta paintings = Gupta period.',
              quickRevision: [
                'Gupta Empire: 320–550 CE; called Golden Age of India.',
                'Chandragupta I founded empire; married Lichchhavi princess.',
                'Samudragupta = Napoleon of India; Allahabad Pillar inscription.',
                'Chandragupta II (Vikramaditya) = peak; Fa-Hien visited.',
                'Kalidasa, Aryabhata lived in this period.',
                'Ajanta cave paintings; Iron Pillar of Delhi.',
                'Skandagupta defeated Hunas.',
                'Empire declined after 550 CE due to Huna invasions.'
              ],
              examAsk: 'Who is Napoleon of India; Fa-Hien and which Gupta king; Golden Age achievements; Ajanta caves period; who defeated Hunas.'
            }
          )
        },
        {
          id: 'post-gupta-harsha',
          title: 'Post-Gupta & Harsha',
          content: T(
            'Post-Gupta Period & Harshavardhana',
            'After the Guptas, King Harsha briefly united North India — and Chinese traveller Xuanzang recorded his reign.',
            H.h2('Post-Gupta Kingdoms') +
            tbl(
              ['Kingdom', 'Region', 'Ruler', 'Notes'],
              [
                ['<strong>Pushyabhuti (Vardhana)</strong>', 'Thanesar / Kannauj', 'Harshavardhana', 'Last great Hindu king of North India'],
                ['<strong>Maukharis</strong>', 'Kannauj', 'Grahavarman', 'Harsha\'s brother-in-law; killed by Shashanka'],
                ['<strong>Chalukyas of Badami</strong>', 'Deccan (Karnataka)', 'Pulakeshin II', 'Defeated Harsha on Narmada; Aihole inscription'],
                ['<strong>Palas</strong>', 'Bengal & Bihar', 'Gopala, Dharmapala, Devapala', 'Buddhist patrons; founded Nalanda, Vikramashila'],
                ['<strong>Pratiharas</strong>', 'Rajasthan / UP', 'Mihira Bhoja', 'Fought for Kannauj; resisted Arab invasions'],
                ['<strong>Rashtrakutas</strong>', 'Deccan', 'Dantidurga, Krishna I', 'Built Kailasa temple at Ellora; Kannauj rivalry']
              ]
            ) +
            H.h2('Harshavardhana (606–647 CE)') +
            H.p('<strong>Harsha</strong> became king at age 16 after his brother Rajyavardhana was killed by the Gauda king <strong>Shashanka</strong>. He conquered Punjab, Bengal, Orissa, and Gujarat (except Chalukya Deccan). His capital was <strong>Kannauj</strong>.') +
            H.p('Harsha started as a Shiva worshipper but later became a <strong>Buddhist</strong>. He organised the <strong>Kanauj Assembly</strong> (643 CE) and <strong>Allahabad (Prayag) Assembly</strong> where Xuanzang honoured him.') +
            H.h2('Xuanzang (Hiuen Tsang)') +
            H.p('The Chinese pilgrim <strong>Xuanzang</strong> visited India during Harsha\'s reign (629–645 CE). He studied at <strong>Nalanda</strong> for 5 years and wrote <strong>Si-Yu-Ki</strong> (Records of the Western World). His account is a key source for this period.') +
            H.h2('Harsha as Author') +
            H.p('Harsha himself wrote three Sanskrit plays: <strong>Nagananda, Ratnavali, Priyadarshika</strong>. He also patronised the university of <strong>Nalanda</strong>.') +
            H.h2('Decline') +
            H.p('Harsha died in 647 CE without an heir. His empire collapsed. This led to the <strong>Tripartite Struggle</strong> for Kannauj between Palas, Pratiharas, and Rashtrakutas in the next century.'),
            {
              examTip: 'Harsha = 606–647 CE; capital Kannauj. Xuanzang visited during his reign; wrote Si-Yu-Ki. Harsha wrote Nagananda, Ratnavali. Pulakeshin II stopped Harsha at Narmada.',
              quickRevision: [
                'Harshavardhana ruled 606–647 CE; capital Kannauj.',
                'Last great king to unite North India before medieval period.',
                'Brother Rajyavardhana killed by Shashanka of Bengal.',
                'Started as Shaiva; later became Buddhist.',
                'Kanauj Assembly (643 CE) and Prayag Assembly held.',
                'Xuanzang visited; studied at Nalanda; wrote Si-Yu-Ki.',
                'Harsha wrote Nagananda, Ratnavali, Priyadarshika.',
                'Pulakeshin II (Chalukya) defeated Harsha at Narmada.'
              ],
              examAsk: 'Harsha\'s reign dates; Xuanzang\'s book; Harsha\'s plays; who stopped Harsha\'s southward march; capital of Harsha.'
            }
          )
        },
        {
          id: 'sangam-age',
          title: 'Sangam Age',
          content: T(
            'Sangam Age',
            'The golden period of Tamil culture — when poets gathered at Madurai and wrote beautiful Tamil literature.',
            H.h2('What Was the Sangam Age?') +
            H.p('The <strong>Sangam Age</strong> (300 BCE – 300 CE) was the early historic period of <strong>Tamil Nadu</strong>. Poets and scholars gathered at <strong>academies (Sangams)</strong> in Madurai under the patronage of <strong>Pandya</strong> kings. They composed poems about love, war, nature, and kings.') +
            H.h2('Three Tamil Kingdoms (Muventar)') +
            tbl(
              ['Kingdom', 'Capital', 'Emblem', 'Famous For'],
              [
                ['<strong>Chera</strong>', 'Karur / Vanji', 'Bow', 'Spice trade (pepper); Roman contacts; Senguttuvan'],
                ['<strong>Chola</strong>', 'Uraiyur / Puhar (Kaveripattinam)', 'Tiger', 'Navy; Kaveri delta; Karikala (dam builder)'],
                ['<strong>Pandya</strong>', 'Madurai', 'Carp (fish)', 'Sangam academies; pearl fisheries; Madurai Meenakshi temple later']
              ]
            ) +
            H.h2('Sangam Literature') +
            tbl(
              ['Collection', 'Meaning', 'Content'],
              [
                ['<strong>Ettuthogai</strong>', 'Eight Anthologies', 'Love & war poems — Ainkurunuru, Kurunthogai, etc.'],
                ['<strong>Pattuppattu</strong>', 'Ten Idylls', 'Long poems — Tirumurugatrupadai, Porunaratrupadai, etc.'],
                ['<strong>Tolkappiyam</strong>', 'Oldest Tamil grammar', 'By Tolkappiyar; grammar + social life'],
                ['<strong>Silappadikaram</strong>', 'Epic (later Sangam)', 'By Ilango Adigal; story of Kannagi; justice']
              ]
            ) +
            H.h2('Five Landscapes (Aintinai)') +
            H.p('Sangam poets divided land into five types, each with its own god, people, and mood:') +
            tbl(
              ['Landscape', 'Region', 'Theme'],
              [
                ['<strong>Kurinji</strong>', 'Mountains', 'Love at first meeting'],
                ['<strong>Mullai</strong>', 'Forest', 'Waiting/anticipation in love'],
                ['<strong>Marudam</strong>', 'Farmland', 'Quarrels in love'],
                ['<strong>Neidal</strong>', 'Seashore', 'Worry/separation in love'],
                ['<strong>Palai</strong>', 'Dry land', 'Separation/elopement']
              ]
            ) +
            H.h2('Economy & Trade') +
            H.p('The Tamils traded with <strong>Rome</strong> — Roman gold coins (aureii) have been found in Tamil Nadu. Exports included <strong>pepper, spices, cotton cloth, pearls, and ivory</strong>. Puhar (Kaveripattinam) was a major port.') +
            H.p('<strong>Karikala Chola</strong> built a dam on the Kaveri river — one of the earliest irrigation works in South India.'),
            {
              examTip: 'Three kingdoms: Chera (bow), Chola (tiger), Pandya (fish). Tolkappiyam = oldest Tamil grammar. Sangam = Pandya patronage at Madurai. Karikala Chola = Kaveri dam.',
              quickRevision: [
                'Sangam Age: ~300 BCE – 300 CE in Tamil Nadu.',
                'Three kingdoms: Chera, Chola, Pandya (Muventar).',
                'Pandya capital Madurai — hosted Sangam academies.',
                'Ettuthogai + Pattuppattu = main Sangam collections.',
                'Tolkappiyam = oldest Tamil grammar by Tolkappiyar.',
                'Five landscapes (Aintinai): Kurinji, Mullai, Marudam, Neidal, Palai.',
                'Trade with Rome; Roman coins found in Tamil Nadu.',
                'Karikala Chola built Kaveri dam.'
              ],
              examAsk: 'Three Sangam kingdoms with emblems; Tolkappiyam; five landscapes; Karikala Chola\'s achievement; Sangam period dates.'
            }
          )
        },
        {
          id: 'south-indian-dynasties',
          title: 'South Indian Dynasties',
          content: T(
            'South Indian Dynasties',
            'Powerful kingdoms of the South — Cholas, Cheras, Pandyas, Pallavas, and Chalukyas — built temples and ruled the seas.',
            H.h2('Major South Indian Dynasties') +
            tbl(
              ['Dynasty', 'Region', 'Period', 'Key Rulers & Achievements'],
              [
                ['<strong>Chola</strong>', 'Tamil Nadu', '9th–13th c.', 'Rajaraja I (built Brihadeshwara); Rajendra I (Gangaikonda); Navy to SE Asia'],
                ['<strong>Chera</strong>', 'Kerala / Tamil Nadu', '9th–12th c.', 'Kulasekhara Alwar; spice trade; Muziris port'],
                ['<strong>Pandya</strong>', 'Tamil Nadu', '6th–16th c.', 'Jatavarman Sundara Pandya; Madurai; pearl trade'],
                ['<strong>Pallava</strong>', 'Tamil Nadu / AP', '6th–9th c.', 'Mahendravarman I; Mamallapuram (Shore Temple); Dravidian architecture begins'],
                ['<strong>Chalukya</strong>', 'Karnataka', '6th–12th c.', 'Pulakeshin II; Aihole, Badami, Pattadakal temples; defeated Harsha'],
                ['<strong>Rashtrakuta</strong>', 'Deccan', '8th–10th c.', 'Krishna I (Kailasa temple, Ellora); Dhruva; Kannauj rivalry'],
                ['<strong>Hoysala</strong>', 'Karnataka', '11th–14th c.', 'Vishnuvardhana; Belur, Halebidu temples; star-shaped design'],
                ['<strong>Kakatiya</strong>', 'Telangana', '12th–14th c.', 'Rudramadevi (woman ruler); Warangal; Thousand Pillar temple']
              ]
            ) +
            H.h2('Chola Empire — Greatest Southern Power') +
            H.p('<strong>Rajaraja I</strong> (985–1014 CE) built the magnificent <strong>Brihadeshwara Temple</strong> at Thanjavur — a UNESCO World Heritage Site. His son <strong>Rajendra I</strong> conquered up to the Ganga and built a new capital <strong>Gangaikonda Cholapuram</strong>.') +
            H.p('The Cholas had a powerful <strong>navy</strong>. They conquered Sri Lanka and sent expeditions to <strong>Southeast Asia</strong> (Srivijaya empire in Indonesia). Their <strong>bronze Nataraja</strong> statues are world-famous.') +
            H.h2('Pallavas & Dravidian Architecture') +
            H.p('The <strong>Pallavas</strong> started the <strong>Dravidian temple style</strong> — pyramid-shaped towers (vimana), carved rock-cut temples. <strong>Mamallapuram (Mahabalipuram)</strong> has the Shore Temple and Arjuna\'s Penance (giant rock carving).') +
            H.h2('Chalukya Temples') +
            H.p('<strong>Aihole</strong> is called the "cradle of Indian temple architecture." <strong>Pattadakal</strong> (UNESCO site) has temples in both Nagara (North) and Dravidian (South) styles. <strong>Badami</strong> has rock-cut cave temples.') +
            H.h2('Administration') +
            H.p('South Indian kingdoms had efficient local administration through <strong>village assemblies (sabhas/ur)</strong>. The Chola <strong>Uttaramerur inscription</strong> describes village self-governance and election of committee members.'),
            {
              examTip: 'Rajaraja I = Brihadeshwara Temple (Thanjavur). Rajendra I = Gangaikonda Cholapuram. Pallavas = Mamallapuram. Chalukyas = Aihole, Pattadakal. Kakatiya Rudramadevi = woman ruler.',
              quickRevision: [
                'Cholas (985–1279): Rajaraja I, Rajendra I; powerful navy.',
                'Brihadeshwara Temple (Thanjavur) built by Rajaraja I.',
                'Cholas conquered Sri Lanka; traded with Southeast Asia.',
                'Pallavas: Dravidian architecture; Mamallapuram/ Shore Temple.',
                'Chalukyas: Aihole, Badami, Pattadakal; defeated Harsha.',
                'Rashtrakutas: Kailasa temple at Ellora (Krishna I).',
                'Hoysalas: Belur and Halebidu; star-shaped temples.',
                'Kakatiya Rudramadevi — famous woman ruler of Warangal.'
              ],
              examAsk: 'Who built Brihadeshwara Temple; Chola navy achievements; Pallava contribution to architecture; Aihole/Pattadakal; Rudramadevi.'
            }
          )
        }
      ]
    },
    {
      id: 'medieval-history',
      name: 'Medieval History',
      topics: [
        {
          id: 'early-medieval-tripartite',
          title: 'Early Medieval — Tripartite Struggle',
          content: T(
            'Early Medieval Period & Tripartite Struggle',
            'After Harsha\'s death, three powerful dynasties fought for 200 years to control Kannauj — the key city of North India.',
            H.h2('Early Medieval Period (750–1200 CE)') +
            H.p('The period after Harsha (647 CE) until the Delhi Sultanate (1206 CE) is called <strong>early medieval</strong>. Many regional kingdoms rose. North India saw the famous <strong>Tripartite Struggle</strong> for Kannauj.') +
            H.h2('The Three Powers') +
            tbl(
              ['Dynasty', 'Region', 'Capital', 'Key Rulers'],
              [
                ['<strong>Pratihara (Gurjara-Pratihara)</strong>', 'Rajasthan, UP', 'Kannauj', 'Nagabhata I, Mihira Bhoja I, Mahendrapala'],
                ['<strong>Pala</strong>', 'Bengal, Bihar', 'Gauda (Bengal)', 'Gopala, Dharmapala, Devapala'],
                ['<strong>Rashtrakuta</strong>', 'Deccan (Maharashtra, Karnataka)', 'Manyakheta', 'Dantidurga, Dhruva, Govinda III, Amoghavarsha']
              ]
            ) +
            H.h2('Tripartite Struggle for Kannauj') +
            H.p('<strong>Kannauj</strong> was a rich city on the Ganga. All three dynasties wanted it because controlling Kannauj meant controlling North India\'s trade routes. The struggle lasted about <strong>200 years</strong> (8th–10th century).') +
            tbl(
              ['Battle / Event', 'Parties', 'Result'],
              [
                ['Battle of Rajasthan (738 CE)', 'Pratiharas vs Arab invaders', 'Arabs defeated; invasion of India stopped'],
                ['Dharmapala captured Kannauj', 'Pala vs Pratihara', 'Pala held Kannauj briefly'],
                ['Govinda III defeated Pratiharas & Palas', 'Rashtrakuta', 'Rashtrakuta dominance in Deccan'],
                ['Mihira Bhoja recovered Kannauj', 'Pratihara', 'Pratihara peak under Bhoja'],
                ['Final outcome', 'All three', 'All weakened each other; Rajputs rose later']
              ]
            ) +
            H.h2('Other Early Medieval Kingdoms') +
            tbl(
              ['Kingdom', 'Region', 'Notes'],
              [
                ['<strong>Chalukyas of Gujarat</strong>', 'Gujarat', 'Muleka dynasty; Somnath temple; resisted Ghazni'],
                ['<strong>Senas</strong>', 'Bengal', 'Replaced Palas; Vaishnavism patronage'],
                ['<strong>Chandellas</strong>', 'Bundelkhand (MP)', 'Khajuraho temples built'],
                ['<strong>Paramaras</strong>', 'Malwa (MP)', 'Raja Bhoja — scholar king; Saraswati temple'],
                ['<strong>Chahamanas (Chauhans)</strong>', 'Rajasthan', 'Prithviraj Chauhan III; Tarain battles'],
                ['<strong>Gahadavalas</strong>', 'UP', 'Jaichand of Kannauj; last Hindu ruler of Kannauj']
              ]
            ) +
            H.h2('Why It Matters') +
            H.p('The Tripartite Struggle <strong>weakened all three dynasties</strong>. This made it easier for <strong>Mahmud of Ghazni</strong> and later <strong>Muhammad Ghori</strong> to invade India successfully.'),
            {
              examTip: 'Three fighters: Pratihara, Pala, Rashtrakuta — all wanted Kannauj. Mihira Bhoja = greatest Pratihara. Palas = Buddhist patrons (Gopala, Dharmapala, Devapala). Battle of Rajasthan 738 CE stopped Arabs.',
              quickRevision: [
                'Tripartite Struggle = fight for Kannauj (750–1000 CE).',
                'Three dynasties: Pratihara, Pala, Rashtrakuta.',
                'Pratiharas resisted Arab invasions (Battle of Rajasthan, 738 CE).',
                'Palas ruled Bengal-Bihar; Buddhist patrons; Gopala founded dynasty.',
                'Rashtrakutas ruled Deccan; capital Manyakheta.',
                'Mihira Bhoja I = greatest Pratihara ruler.',
                'Chandellas built Khajuraho; Paramara Bhoja ruled Malwa.',
                'Struggle weakened all three — paved way for Muslim invasions.'
              ],
              examAsk: 'Name the three dynasties in Tripartite Struggle; capital of Palas/Rashtrakutas; Mihira Bhoja; Battle of Rajasthan; who built Khajuraho.'
            }
          )
        },
        {
          id: 'foreign-invasions',
          title: 'Foreign Invasions',
          content: T(
            'Foreign Invasions of India',
            'Invaders from Central Asia and Europe attacked India — starting with Alexander and ending with Muhammad Ghori who began Muslim rule.',
            H.h2('Major Invaders — Timeline') +
            tbl(
              ['Invader', 'Origin', 'Year', 'Key Events'],
              [
                ['<strong>Alexander the Great</strong>', 'Greece/Macedonia', '326 BCE', 'Crossed Indus; Battle of Hydaspes (Jhelum) vs Porus; army refused to go further'],
                ['<strong>Seleucus Nicator</strong>', 'Greece (Seleucid)', '305 BCE', 'Defeated by Chandragupta Maurya; Megasthenes sent as ambassador'],
                ['<strong>Demetrius (Indo-Greek)</strong>', 'Bactria', '180 BCE', 'Started Indo-Greek kingdom in NW India'],
                ['<strong>Kanishka (Kushan)</strong>', 'Central Asia', '78 CE', 'Not an invader but foreign-origin ruler; patronised Buddhism'],
                ['<strong>Hunas (Hepthalites)</strong>', 'Central Asia', '5th–6th c.', 'Toramana & Mihirakula invaded; weakened Guptas'],
                ['<strong>Mahmud of Ghazni</strong>', 'Afghanistan (Ghazni)', '1000–1027 CE', '17 raids on India; plundered Somnath (1025); never settled'],
                ['<strong>Muhammad Ghori</strong>', 'Afghanistan (Ghor)', '1175–1206 CE', 'Battles of Tarain (1191, 1192); defeated Prithviraj; started Muslim rule']
              ]
            ) +
            H.h2('Alexander\'s Invasion (326 BCE)') +
            H.p('Alexander crossed the <strong>Indus</strong> and fought <strong>Porus</strong> (Purushottama) at the <strong>Battle of Hydaspes</strong> (Jhelum river). Alexander won but was impressed by Porus. Alexander\'s army then refused to march further east, so he turned back. He died in 323 BCE in Babylon.') +
            H.h2('Mahmud of Ghazni (17 Raids)') +
            H.p('<strong>Mahmud of Ghazni</strong> invaded India <strong>17 times</strong> between 1000–1027 CE. He wanted wealth, not territory. His most famous raid was on the <strong>Somnath Temple</strong> (1025 CE) in Gujarat. He wrote poetry in Persian under the name <strong>Yamin-ud-Daulah</strong>.') +
            H.p('Important: Mahmud\'s raids <strong>weakened Hindu kingdoms</strong> but he did NOT establish permanent rule in India.') +
            H.h2('Muhammad Ghori — Beginning of Muslim Rule') +
            tbl(
              ['Battle', 'Year', 'Result'],
              [
                ['<strong>First Battle of Tarain</strong>', '1191 CE', 'Prithviraj Chauhan DEFEATED Ghori'],
                ['<strong>Second Battle of Tarain</strong>', '1192 CE', 'Ghori DEFEATED Prithviraj; captured Delhi'],
                ['Battle of Chandawar', '1194 CE', 'Ghori defeated Jayachandra (Gahadavala) of Kannauj']
              ]
            ) +
            H.p('After Ghori\'s death (1206 CE), his general <strong>Qutub-ud-din Aibak</strong> became the first Sultan of Delhi — starting the <strong>Delhi Sultanate</strong>.'),
            {
              examTip: 'Alexander vs Porus at Hydaspes (326 BCE). Mahmud of Ghazni = 17 raids, Somnath 1025. First Tarain 1191 = Prithviraj won. Second Tarain 1192 = Ghori won. Qutub-ud-din Aibak = first Sultan.',
              quickRevision: [
                'Alexander invaded 326 BCE; Battle of Hydaspes vs Porus.',
                'Seleucus defeated by Chandragupta Maurya (305 BCE).',
                'Hunas weakened Gupta empire (5th–6th century).',
                'Mahmud of Ghazni: 17 raids (1000–1027 CE); plundered Somnath.',
                'Mahmud did NOT establish permanent rule in India.',
                'First Tarain (1191): Prithviraj Chauhan defeated Ghori.',
                'Second Tarain (1192): Ghori defeated Prithviraj.',
                'Ghori\'s death 1206 → Qutub-ud-din Aibak became first Sultan.'
              ],
              examAsk: 'Alexander vs Porus battle name; Mahmud of Ghazni raids and Somnath; First vs Second Tarain results; who became first Sultan after Ghori.'
            }
          )
        },
        {
          id: 'delhi-sultanate',
          title: 'Delhi Sultanate',
          content: T(
            'Delhi Sultanate (1206–1526)',
            'Muslim rulers who governed North India for 320 years — through five dynasties based in Delhi.',
            H.h2('Five Dynasties of Delhi Sultanate') +
            tbl(
              ['Dynasty', 'Period', 'Founder', 'Key Rulers'],
              [
                ['<strong>Slave (Mamluk)</strong>', '1206–1290', 'Qutub-ud-din Aibak', 'Iltutmish, Razia Sultan, Balban'],
                ['<strong>Khalji</strong>', '1290–1320', 'Jalal-ud-din Khalji', 'Alauddin Khalji (market reforms, Chittor siege)'],
                ['<strong>Tughlaq</strong>', '1320–1414', 'Ghiyas-ud-din Tughlaq', 'Muhammad bin Tughlaq (token currency, Daulatabad shift)'],
                ['<strong>Sayyid</strong>', '1414–1451', 'Khizr Khan', 'Mubarak Shah; weak dynasty'],
                ['<strong>Lodi</strong>', '1451–1526', 'Bahlul Lodi', 'Ibrahim Lodi (last; defeated by Babur at Panipat)']
              ]
            ) +
            H.h2('Important Rulers & Reforms') +
            tbl(
              ['Ruler', 'Dynasty', 'Achievement'],
              [
                ['Qutub-ud-din Aibak', 'Slave', 'Built Qutub Minar (started); died playing polo'],
                ['Iltutmish', 'Slave', 'Completed Qutub Minar; organised Iqtadar system; gold coin Tanka'],
                ['Razia Sultan', 'Slave', 'First and ONLY woman Sultan of Delhi (1236–1240)'],
                ['Balban', 'Slave', 'Theory of kingship; destroyed Mewati robbers; strong central rule'],
                ['Alauddin Khalji', 'Khalji', 'Market price controls; chehra (branding of horses); Chittor, Malwa, Deccan conquests'],
                ['Muhammad bin Tughlaq', 'Tughlaq', 'Token currency (failed); shifted capital to Daulatabad; Doab famine relief'],
                ['Firoz Shah Tughlaq', 'Tughlaq', 'Canals, hospitals, mosques; forced conversion; Sharia law'],
                ['Ibrahim Lodi', 'Lodi', 'Last Sultan; defeated at First Battle of Panipat (1526)']
              ]
            ) +
            H.h2('Administration') +
            H.p('The Sultan was the supreme authority. The kingdom was divided into <strong>Iqtas</strong> (provinces) given to <strong>Iqtadars</strong> (governors) who collected taxes and maintained armies.') +
            tbl(
              ['Post', 'Function'],
              [
                ['<strong>Wazir</strong>', 'Prime Minister — head of finance'],
                ['<strong>Ariz-i-Mumalik</strong>', 'Head of army'],
                ['<strong>Qazi</strong>', 'Chief judge — Islamic law'],
                ['<strong>Barid-i-Mumalik</strong>', 'Head of spy/intelligence system'],
                ['<strong>Diwan-i-Risalat</strong>', 'Minister of religious affairs & petitions']
              ]
            ) +
            H.h2('Architecture') +
            H.ul([
              '<strong>Qutub Minar</strong> — Delhi (Aibak started, Iltutmish completed)',
              '<strong>Alai Darwaza</strong> — Delhi (Alauddin Khalji)',
              '<strong>Tughlaqabad Fort</strong> — Delhi (Ghiyas-ud-din Tughlaq)',
              '<strong>Lodi Gardens tombs</strong> — Delhi (Lodi dynasty)'
            ]),
            {
              examTip: '5 dynasties: Slave, Khalji, Tughlaq, Sayyid, Lodi. Razia Sultan = only woman ruler. Alauddin Khalji = market reforms. Muhammad bin Tughlaq = token currency + Daulatabad. Ibrahim Lodi lost at Panipat 1526.',
              quickRevision: [
                'Delhi Sultanate: 1206–1526 CE; five dynasties.',
                'Qutub-ud-din Aibak = first Sultan (Slave dynasty).',
                'Razia Sultan = first and only woman Sultan (1236–1240).',
                'Alauddin Khalji: market controls, branding of horses.',
                'Muhammad bin Tughlaq: token currency, Daulatabad shift.',
                'Iltutmish completed Qutub Minar; introduced Tanka coin.',
                'Ibrahim Lodi = last Sultan; lost First Panipat (1526).',
                'Iqta system = provincial administration.'
              ],
              examAsk: 'Five dynasties of Delhi Sultanate; Razia Sultan; Alauddin Khalji reforms; Muhammad bin Tughlaq experiments; last Sultan and how Sultanate ended.'
            }
          )
        },
        {
          id: 'vijayanagara-empire',
          title: 'Vijayanagara Empire',
          content: T(
            'Vijayanagara Empire',
            'A powerful Hindu empire in South India (1336–1646) — known for art, architecture, and resisting Muslim invasions from the North.',
            H.h2('Founding') +
            H.p('The <strong>Vijayanagara Empire</strong> was founded in <strong>1336 CE</strong> by <strong>Harihara I</strong> and <strong>Bukka Raya I</strong> (brothers) on the banks of the <strong>Tungabhadra river</strong>. Their guru <strong>Vidyaranya</strong> (Sanskrit scholar) guided them. The empire was created to protect Hindu culture from Tughlaq expansion into the South.') +
            H.h2('Four Dynasties') +
            tbl(
              ['Dynasty', 'Period', 'Important Rulers'],
              [
                ['<strong>Sangama</strong>', '1336–1485', 'Harihara I, Bukka Raya I, Deva Raya II'],
                ['<strong>Saluva</strong>', '1485–1505', 'Saluva Narasimha Deva Raya'],
                ['<strong>Tuluva</strong>', '1505–1570', 'Krishnadeva Raya (greatest ruler)'],
                ['<strong>Aravidu</strong>', '1570–1646', 'Rama Raya (killed at Talikota); empire declined']
              ]
            ) +
            H.h2('Krishnadeva Raya (1509–1529)') +
            H.p('The greatest Vijayanagara ruler. He was a scholar, poet, and warrior. He wrote <strong>Amuktamalyada</strong> in Telugu. His court had the <strong>Ashtadiggajas</strong> (eight great poets) including <strong>Allasani Peddana</strong> (called Andhra Kavita Pitamaha).') +
            tbl(
              ['Achievement', 'Detail'],
              [
                ['Military', 'Defeated Bijapur, Golconda, Odisha Gajapatis; captured Raichur'],
                ['Diplomacy', 'Friendly with Portuguese; traded for horses'],
                ['Architecture', 'Built Vittalaswamy & Hazara Rama temples at Hampi'],
                ['Literature', 'Amuktamalyada (Telugu); patronised Sanskrit and Telugu'],
                ['Title', 'Called "Abhinava Bhoja" and "Andhra Bhoja"']
              ]
            ) +
            H.h2('Battle of Talikota (1565 CE)') +
            H.p('The combined army of <strong>Bijapur, Ahmadnagar, Golconda, and Bidar</strong> (called the <strong>Deccan Confederacy</strong>) defeated Vijayanagara at <strong>Battle of Talikota</strong> (also called Battle of Rakshasi-Tangadi). <strong>Rama Raya</strong> was killed. The city of <strong>Hampi</strong> was looted and destroyed.') +
            H.h2('Hampi — Capital City') +
            H.p('<strong>Hampi</strong> (UNESCO World Heritage Site) was the capital. Famous monuments:') +
            H.ul([
              '<strong>Virupaksha Temple</strong> — oldest functioning temple',
              '<strong>Vittala Temple</strong> — stone chariot & musical pillars',
              '<strong>Stone Chariot</strong> — icon of Karnataka tourism',
              '<strong>Lotus Mahal</strong> — Indo-Islamic architecture in royal centre'
            ]),
            {
              examTip: 'Founded 1336 by Harihara & Bukka. Krishnadeva Raya = greatest (Ashtadiggajas, Amuktamalyada). Battle of Talikota 1565 = empire destroyed. Hampi = capital (UNESCO).',
              quickRevision: [
                'Founded 1336 CE by Harihara I and Bukka Raya I.',
                'Capital: Hampi (UNESCO site) on Tungabhadra river.',
                'Four dynasties: Sangama, Saluva, Tuluva, Aravidu.',
                'Krishnadeva Raya (1509–1529) = greatest ruler.',
                'Amuktamalyada written by Krishnadeva Raya in Telugu.',
                'Ashtadiggajas = eight poets at his court.',
                'Battle of Talikota (1565) destroyed the empire.',
                'Vittala Temple stone chariot at Hampi is famous.'
              ],
              examAsk: 'Founders and year; Krishnadeva Raya achievements; Battle of Talikota; Hampi monuments; Amuktamalyada author.'
            }
          )
        },
        {
          id: 'bahmani-kingdom',
          title: 'Bahmani Kingdom',
          content: T(
            'Bahmani Kingdom',
            'The first independent Muslim kingdom in the Deccan (1347–1527) — rival to Vijayanagara for 150 years.',
            H.h2('Founding') +
            H.p('The <strong>Bahmani Kingdom</strong> was founded in <strong>1347 CE</strong> by <strong>Alauddin Hasan Bahman Shah</strong> (also called Hasan Gangu). He revolted against Muhammad bin Tughlaq. The kingdom covered most of the Deccan — from Wainganga to Krishna river.') +
            H.h2('Bahmani Rulers') +
            tbl(
              ['Ruler', 'Period', 'Achievement'],
              [
                ['Alauddin Hasan Bahman Shah', '1347–1358', 'Founder; capital Gulbarga (Hasanabad)'],
                ['Muhammad Shah I', '1358–1375', 'Consolidated kingdom; fought Vijayanagara'],
                ['Firoz Shah Bahmani', '1397–1422', 'Greatest Bahmani ruler; invited architects from Iran'],
                ['Mahmud Gawan', '1463–1481', 'Prime minister (not king); greatest administrator; built madrasa at Bidar'],
                ['Last rulers', '1482–1527', 'Kingdom split into 5 Deccan Sultanates']
              ]
            ) +
            H.h2('Mahmud Gawan — Greatest Minister') +
            H.p('<strong>Mahmud Gawan</strong> was a Persian merchant who became the Bahmani <strong>Prime Minister (Wazir)</strong>. He conquered Konkan, Goa, and Krishna-Godavari delta. He built a famous <strong>madrasa</strong> at Bidar (still standing). He was executed on false charges in 1481 — after which the kingdom declined.') +
            H.h2('Five Deccan Sultanates (After Split, 1527)') +
            tbl(
              ['Sultanate', 'Capital', 'Founder / Dynasty'],
              [
                ['<strong>Bijapur</strong>', 'Bijapur', 'Adil Shahi dynasty (Yusuf Adil Shah)'],
                ['<strong>Golconda</strong>', 'Golconda / Hyderabad', 'Qutb Shahi dynasty (Quli Qutb Shah)'],
                ['<strong>Ahmadnagar</strong>', 'Ahmadnagar', 'Nizam Shahi dynasty (Malik Ahmad)'],
                ['<strong>Bidar</strong>', 'Bidar', 'Barid Shahi dynasty (Amir Barid)'],
                ['<strong>Berar</strong>', 'Ellichpur', 'Imad Shahi dynasty (Fathullah Imad-ul-Mulk)']
              ]
            ) +
            H.h2('Bahmani vs Vijayanagara') +
            H.p('The Bahmani and Vijayanagara kingdoms fought each other for over <strong>150 years</strong> — mainly over the fertile <strong>Raichur Doab</strong> (between Krishna and Tungabhadra rivers). Neither could fully defeat the other until Talikota (1565).') +
            H.h2('Culture') +
            H.p('The Bahmani court blended <strong>Persian, Arabic, and Indian</strong> traditions. It was called <strong>Deccan School</strong> of culture. Persian was the official language. Architecture showed Indo-Islamic style — Gol Gumbaz (Bijapur) is the world\'s second-largest dome.'),
            {
              examTip: 'Bahmani founded 1347 by Hasan Bahman Shah. Mahmud Gawan = greatest minister (madrasa at Bidar). Split into 5 Sultanates after 1527. Fought Vijayanagara over Raichur Doab.',
              quickRevision: [
                'Founded 1347 CE by Alauddin Hasan Bahman Shah.',
                'First independent Muslim kingdom of Deccan.',
                'Capital: Gulbarga, later Bidar.',
                'Mahmud Gawan = greatest wazir; built Bidar madrasa.',
                'Fought Vijayanagara for 150+ years over Raichur Doab.',
                'Split into 5 Deccan Sultanates after 1527.',
                'Five: Bijapur, Golconda, Ahmadnagar, Bidar, Berar.',
                'Gol Gumbaz (Bijapur) = second-largest dome in world.'
              ],
              examAsk: 'Bahmani founder and year; Mahmud Gawan contributions; five Deccan Sultanates with capitals; rivalry with Vijayanagara; when and why it split.'
            }
          )
        },
        {
          id: 'mughal-empire',
          title: 'Mughal Empire',
          content: T(
            'Mughal Empire (1526–1857)',
            'The most powerful empire of medieval India — ruled by Babur, Akbar, Shah Jahan, and Aurangzeb over most of the subcontinent.',
            H.h2('Mughal Emperors') +
            tbl(
              ['Emperor', 'Period', 'Key Events'],
              [
                ['<strong>Babur</strong>', '1526–1530', 'First Battle of Panipat (1526); founded empire; wrote Baburnama (Turkish)'],
                ['<strong>Humayun</strong>', '1530–1540, 1555–1556', 'Lost empire to Sher Shah; regained with Persian help; died falling from stairs'],
                ['<strong>Akbar</strong>', '1556–1605', 'Second Panipat (1556); Din-i-Ilahi; Mansabdari; Ain-i-Akbari by Abul Fazl'],
                ['<strong>Jahangir</strong>', '1605–1627', 'Justice chain; married Nur Jahan; Sir Thomas Roe (British) visited'],
                ['<strong>Shah Jahan</strong>', '1628–1658', 'Taj Mahal, Red Fort, Jama Masjid; capital shifted to Shahjahanabad (Delhi)'],
                ['<strong>Aurangzeb</strong>', '1658–1707', 'Expanded empire to maximum; reimposed jizya; imprisoned Shah Jahan'],
                ['<strong>Later Mughals</strong>', '1707–1857', 'Decline; Nadir Shah (1739); Bahadur Shah II last (1857 Revolt)']
              ]
            ) +
            H.h2('Akbar\'s Achievements') +
            tbl(
              ['Reform / Policy', 'Detail'],
              [
                ['<strong>Mansabdari System</strong>', 'Ranks (Mansab) for military & civil officers; zat (personal) + sawar (cavalry)'],
                ['<strong>Din-i-Ilahi</strong>', 'Syncretic religion blending Hindu-Muslim ideas (1582); few followers'],
                ['<strong>Sulh-i-Kul</strong>', 'Policy of universal peace & tolerance'],
                ['<strong>Abolished jizya</strong>', 'Tax on non-Muslims removed'],
                ['<strong>Land revenue</strong>', 'Todar Mal\'s Zabti/Dahsala system — based on average produce'],
                ['<strong>Navratnas</strong>', 'Nine gems: Birbal, Tansen, Abul Fazl, Faizi, Todar Mal, etc.']
              ]
            ) +
            H.h2('Important Battles') +
            tbl(
              ['Battle', 'Year', 'Result'],
              [
                ['First Battle of Panipat', '1526', 'Babur defeated Ibrahim Lodi (introduced gunpowder + tulughma)'],
                ['Battle of Khanwa', '1527', 'Babur defeated Rana Sanga of Mewar'],
                ['Second Battle of Panipat', '1556', 'Akbar (Bairam Khan) defeated Hemu'],
                ['Battle of Haldighati', '1576', 'Akbar\'s forces vs Rana Pratap of Mewar; indecisive but Mughals gained'],
                ['Battle of Samugarh', '1658', 'Aurangzeb defeated Dara Shikoh; became emperor']
              ]
            ) +
            H.h2('Decline of Mughals') +
            H.p('After Aurangzeb\'s death (1707), the empire weakened. Key events:') +
            H.ul([
              '<strong>Nadir Shah</strong> (1739) — looted Delhi, took Peacock Throne & Koh-i-Noor',
              '<strong>Ahmad Shah Abdali</strong> — Third Battle of Panipat (1761) vs Marathas',
              '<strong>Bahadur Shah II</strong> — last Mughal; deposed after 1857 Revolt; exiled to Rangoon'
            ]),
            {
              examTip: 'Babur = Panipat 1526 + Baburnama. Akbar = Mansabdari, Todar Mal, Ain-i-Akbari, Navratnas. Shah Jahan = Taj Mahal. Aurangzeb = empire at peak but also decline begins. Nadir Shah 1739.',
              quickRevision: [
                'Founded 1526 by Babur at First Battle of Panipat.',
                'Humayun lost to Sher Shah Suri; regained empire 1555.',
                'Akbar (1556–1605): Mansabdari, Sulh-i-Kul, abolished jizya.',
                'Todar Mal = revenue minister; Zabti system.',
                'Shah Jahan: Taj Mahal, Red Fort, Jama Masjid.',
                'Aurangzeb: largest territory; reimposed jizya.',
                'Nadir Shah looted Delhi in 1739 CE.',
                'Bahadur Shah II = last Mughal (1857 Revolt).'
              ],
              examAsk: 'Mughal emperors in order; Akbar\'s reforms; battles of Panipat; who built Taj Mahal; causes of Mughal decline; last Mughal emperor.'
            }
          )
        },
        {
          id: 'foreign-travellers',
          title: 'Foreign Travellers',
          content: T(
            'Foreign Travellers to India',
            'Visitors from other countries who wrote about India — their books are important sources of history for exams.',
            H.h2('Ancient & Early Medieval Travellers') +
            tbl(
              ['Traveller', 'Country', 'Period', 'Book / Account', 'Ruler Met'],
              [
                ['<strong>Megasthenes</strong>', 'Greece', '4th c. BCE', 'Indica', 'Chandragupta Maurya'],
                ['<strong>Fa-Hien (Faxian)</strong>', 'China', '399–414 CE', 'Foguo Ji (Record of Buddhist Kingdoms)', 'Chandragupta II (Gupta)'],
                ['<strong>Hiuen Tsang (Xuanzang)</strong>', 'China', '629–645 CE', 'Si-Yu-Ki (Records of Western World)', 'Harshavardhana'],
                ['<strong>I-tsing</strong>', 'China', '671–695 CE', 'Record of Buddhist Practices', 'Visited Nalanda']
              ]
            ) +
            H.h2('Medieval Travellers') +
            tbl(
              ['Traveller', 'Country', 'Period', 'Book / Account', 'Ruler Met'],
              [
                ['<strong>Al-Biruni</strong>', 'Central Asia (Persia)', '1017–1030 CE', 'Tahqiq-i-Hind (Kitab-ul-Hind)', 'Mahmud of Ghazni\'s time'],
                ['<strong>Marco Polo</strong>', 'Italy/Venice', '1292 CE (return from China)', 'Travels of Marco Polo', 'Pandya kingdom (via coast)'],
                ['<strong>Ibn Battuta</strong>', 'Morocco', '1333–1347 CE', 'Rihla (Travels)', 'Muhammad bin Tughlaq'],
                ['<strong>Abdur Razzaq</strong>', 'Persia', '1443–1444 CE', 'Account of Vijayanagara', 'Deva Raya II (Vijayanagara)']
              ]
            ) +
            H.h2('Mughal Period Travellers') +
            tbl(
              ['Traveller', 'Country', 'Period', 'Book / Account', 'Ruler Met'],
              [
                ['<strong>Francois Bernier</strong>', 'France', '1656–1668 CE', 'Travels in the Mogul Empire', 'Aurangzeb'],
                ['<strong>Thomas Roe</strong>', 'England', '1615–1619 CE', 'Journal (ambassador)', 'Jahangir'],
                ['<strong>William Hawkins</strong>', 'England', '1608–1611 CE', '—', 'Jahangir (East India Company)'],
                ['<strong>Manucci</strong>', 'Italy/Venice', '1656–1712 CE', 'Storia do Mogor', 'Aurangzeb period'],
                ['<strong>Duarte Barbosa</strong>', 'Portugal', '1500–1516 CE', 'Description of Coasts of East Africa & Malabar', 'Portuguese period Goa']
              ]
            ) +
            H.h2('Why Their Accounts Matter') +
            H.p('These travellers wrote about India\'s <strong>administration, society, religion, economy, and culture</strong>. Since they were outsiders, they noticed things that local writers might skip. Their books help historians reconstruct life in ancient and medieval India.') +
            H.h2('Quick Match Tips') +
            tbl(
              ['Traveller', 'Remember As'],
              [
                ['Megasthenes', 'Mauryan India — Indica'],
                ['Fa-Hien', 'Gupta India — Buddhist pilgrim'],
                ['Hiuen Tsang', 'Harsha\'s India — Nalanda student'],
                ['Al-Biruni', 'Ghazni era — scientist who studied Hinduism'],
                ['Ibn Battuta', 'Tughlaq era — Moroccan traveller'],
                ['Bernier', 'Aurangzeb era — French doctor']
              ]
            ),
            {
              examTip: 'Megasthenes=Maurya, Fa-Hien=Gupta, Hiuen Tsang=Harsha, Al-Biruni=Ghazni, Ibn Battuta=Tughlaq, Bernier=Aurangzeb, Thomas Roe=Jahangir. Match traveller to book and ruler!',
              quickRevision: [
                'Megasthenes (Greek): Indica; Chandragupta Maurya.',
                'Fa-Hien (Chinese): Gupta period; Foguo Ji.',
                'Hiuen Tsang (Chinese): Harsha; Si-Yu-Ki; studied at Nalanda.',
                'Al-Biruni: Tahqiq-i-Hind; Mahmud of Ghazni era.',
                'Marco Polo: visited Pandya kingdom coast.',
                'Ibn Battuta (Moroccan): Tughlaq; wrote Rihla.',
                'Bernier (French): Aurangzeb; Travels in Mogul Empire.',
                'Thomas Roe (English): Jahangir; first English ambassador.'
              ],
              examAsk: 'Match traveller with book and ruler; Fa-Hien vs Hiuen Tsang period; Al-Biruni\'s work; Ibn Battuta\'s patron; Bernier and Aurangzeb.'
            }
          )
        },
        {
          id: 'medieval-architecture',
          title: 'Medieval Architecture',
          content: T(
            'Medieval Architecture',
            'The beautiful buildings of medieval India — mosques, forts, tombs, and temples built by Sultanate, Mughal, and regional rulers.',
            H.h2('Indo-Islamic Architecture Styles') +
            tbl(
              ['Style', 'Features', 'Examples'],
              [
                ['<strong>Imperial Style</strong>', 'Red sandstone + white marble; large domes; minarets', 'Qutub Minar, Humayun\'s Tomb, Red Fort, Taj Mahal'],
                ['<strong>Provincial Style</strong>', 'Regional variations; less grand', 'Bengal (curved roofs), Jaunpur (Atala Masjid), Gujarat (Siddi Sayyid)'],
                ['<strong>Deccan Style</strong>', 'Persian influence; massive domes', 'Gol Gumbaz (Bijapur), Charminar (Hyderabad)']
              ]
            ) +
            H.h2('Delhi Sultanate Monuments') +
            tbl(
              ['Monument', 'Built By', 'City', 'Feature'],
              [
                ['Qutub Minar', 'Qutub-ud-din Aibak / Iltutmish', 'Delhi', '73 m tall; tallest brick minaret; started 1199'],
                ['Quwwat-ul-Islam Mosque', 'Qutub-ud-din Aibak', 'Delhi', 'First mosque in India; iron pillar inside'],
                ['Alai Darwaza', 'Alauddin Khalji', 'Delhi', 'First true dome; red sandstone + white marble'],
                ['Tughlaqabad Fort', 'Ghiyas-ud-din Tughlaq', 'Delhi', 'Massive fort ruins']
              ]
            ) +
            H.h2('Mughal Monuments') +
            tbl(
              ['Monument', 'Built By', 'City', 'Feature'],
              [
                ['Taj Mahal', 'Shah Jahan', 'Agra', 'White marble mausoleum for Mumtaz; UNESCO site'],
                ['Red Fort (Lal Qila)', 'Shah Jahan', 'Delhi', 'UNESCO; Diwan-i-Am, Diwan-i-Khas'],
                ['Jama Masjid', 'Shah Jahan', 'Delhi', 'Largest mosque in India'],
                ['Humayun\'s Tomb', 'Hamida Banu (Humayun\'s wife)', 'Delhi', 'First garden-tomb; inspired Taj Mahal; UNESCO'],
                ['Fatehpur Sikri', 'Akbar', 'Near Agra', 'Buland Darwaza, Panch Mahal, abandoned capital'],
                ['Agra Fort', 'Akbar (expanded)', 'Agra', 'UNESCO; red sandstone fort'],
                ['Bibi Ka Maqbara', 'Azam Shah (Aurangzeb\'s son)', 'Aurangabad', 'Called "Mini Taj Mahal"']
              ]
            ) +
            H.h2('Regional Architecture') +
            tbl(
              ['Monument', 'Built By', 'Style'],
              [
                ['Gol Gumbaz', 'Mohammed Adil Shah (Bijapur)', 'Second-largest dome in world; whispering gallery'],
                ['Charminar', 'Muhammad Quli Qutb Shah', 'Hyderabad — four minarets; icon of city'],
                ['Hampi monuments', 'Vijayanagara rulers', 'Dravidian + Indo-Islamic blend'],
                ['Khajuraho temples', 'Chandella rulers', 'Nagara style; famous sculptures; UNESCO'],
                ['Konark Sun Temple', 'Eastern Ganga dynasty', 'Chariot-shaped temple; Odisha; UNESCO']
              ]
            ) +
            H.h2('Key Architectural Features') +
            H.ul([
              '<strong>Arch & dome</strong> — introduced by Turks; not in earlier Hindu temple style',
              '<strong>Minaret</strong> — tower for call to prayer (azaan)',
              '<strong>Iwan</strong> — large vaulted portal/entrance',
              '<strong>Charbagh</strong> — four-part garden layout (Mughals)',
              '<strong>Pietra dura</strong> — inlaid stone decoration (Taj Mahal)',
              '<strong>Trabeate vs Arcuate</strong> — lintel (Hindu) vs arch (Islamic) construction'
            ]),
            {
              examTip: 'Qutub Minar = Aibak/Iltutmish. Humayun\'s Tomb inspired Taj Mahal. Taj Mahal = Shah Jahan. Gol Gumbaz = Bijapur. Charminar = Quli Qutb Shah. Fatehpur Sikri = Akbar.',
              quickRevision: [
                'Indo-Islamic architecture: arches, domes, minarets.',
                'Qutub Minar (Delhi): 73 m; Aibak started, Iltutmish completed.',
                'Humayun\'s Tomb = first garden-tomb on Indian subcontinent.',
                'Taj Mahal (Agra): Shah Jahan; white marble; UNESCO.',
                'Red Fort & Jama Masjid: Shah Jahan, Delhi.',
                'Fatehpur Sikri: Akbar\'s capital; Buland Darwaza.',
                'Gol Gumbaz (Bijapur): second-largest dome in world.',
                'Charminar (Hyderabad): Muhammad Quli Qutb Shah.'
              ],
              examAsk: 'Who built Taj Mahal/Red Fort/Qutub Minar/Charminar/Gol Gumbaz; architectural features of Mughal buildings; Humayun\'s Tomb significance.'
            }
          )
        },
        {
          id: 'maratha-empire',
          title: 'Maratha Empire',
          content: T(
            'Maratha Empire',
            'The Marathas rose against Mughal rule and became the dominant power in 18th century India under Shivaji and later the Peshwas.',
            H.h2('Shivaji (1627–1680)') +
            H.p('<strong>Shivaji Maharaj</strong> was born at <strong>Shivneri Fort</strong> (near Pune). He founded the Maratha kingdom and challenged the mighty Mughal empire. He was crowned <strong>Chhatrapati</strong> at Raigad in <strong>1674</strong>.') +
            tbl(
              ['Event / Achievement', 'Detail'],
              [
                ['Early conquests', 'Captured Torna fort (1646); built navy at Konkan coast'],
                ['Escape from Agra', '1666 — escaped from Aurangzeb\'s captivity in a basket of sweets'],
                ['Coronation', '1674 at Raigad — title Chhatrapati; Hindu kingdom established'],
                ['Administration', 'Ashtapradhan (8 ministers); guerrilla warfare (gani dharma)'],
                ['Treaty of Purandar', '1665 — signed with Raja Jai Singh; surrendered 23 forts'],
                ['Death', '1680 at Raigad']
              ]
            ) +
            H.h2('Ashtapradhan (Eight Ministers)') +
            tbl(
              ['Minister', 'Role'],
              [
                ['<strong>Peshwa</strong> (Mukhya Pradhan)', 'Prime Minister — later became supreme'],
                ['<strong>Amatya</strong>', 'Finance minister'],
                ['<strong>Sachiv</strong>', 'Correspondence / records'],
                ['<strong>Senapati</strong>', 'Commander-in-chief'],
                ['<strong>Sumant</strong>', 'Foreign affairs'],
                ['<strong>Nyayadhish</strong>', 'Chief justice'],
                ['<strong>Pandit Rao</strong>', 'Religious affairs'],
                ['<strong>Mantri</strong>', 'Internal security / spy chief']
              ]
            ) +
            H.h2('Peshwa Era (1713–1818)') +
            tbl(
              ['Peshwa', 'Period', 'Achievement'],
              [
                ['Balaji Vishwanath', '1713–1720', 'First hereditary Peshwa; got chauth & sardeshmukhi rights from Mughals'],
                ['Baji Rao I', '1720–1740', '"Ranmast" — never lost a battle; expanded to Malwa, Gujarat'],
                ['Balaji Baji Rao (Nana Saheb)', '1740–1761', 'Peak expansion; Third Battle of Panipat (1761) — defeat'],
                ['Madhav Rao I', '1761–1772', 'Revived Maratha power after Panipat'],
                ['Baji Rao II', '1795–1818', 'Last Peshwa; defeated by British (Third Anglo-Maratha War)']
              ]
            ) +
            H.h2('Third Battle of Panipat (1761)') +
            H.p('The Marathas under <strong>Sadashiv Rao Bhau</strong> fought <strong>Ahmad Shah Abdali</strong> (Afghan) at Panipat. The Marathas were <strong>defeated</strong> — about 40,000 Marathas died. This weakened Maratha power and opened the way for <strong>British expansion</strong>.') +
            H.h2('Anglo-Maratha Wars') +
            tbl(
              ['War', 'Year', 'Result'],
              [
                ['First Anglo-Maratha War', '1775–1782', 'Treaty of Salbai — stalemate'],
                ['Second Anglo-Maratha War', '1803–1805', 'Marathas defeated; Subsidiary Alliance imposed'],
                ['Third Anglo-Maratha War', '1817–1818', 'Final defeat; Peshwa removed; Maratha confederacy ended']
              ]
            ),
            {
              examTip: 'Shivaji crowned 1674 at Raigad. Ashtapradhan = 8 ministers. Third Panipat 1761 = Marathas vs Abdali (Marathas lost). Baji Rao I = "Ranmast". Peshwa ended 1818 by British.',
              quickRevision: [
                'Shivaji (1627–1680): founder of Maratha kingdom.',
                'Coronation 1674 at Raigad as Chhatrapati.',
                'Ashtapradhan = council of eight ministers.',
                'Guerrilla warfare (gani dharma) against Mughals.',
                'Peshwa era: Balaji Vishwanath to Baji Rao II.',
                'Baji Rao I: greatest Peshwa; never lost a battle.',
                'Third Battle of Panipat (1761): Marathas defeated by Abdali.',
                'Maratha confederacy ended 1818 (Third Anglo-Maratha War).'
              ],
              examAsk: 'Shivaji coronation year and place; Ashtapradhan members; Third Panipat battle; greatest Peshwa; when Maratha power ended.'
            }
          )
        },
        {
          id: 'bhakti-movement',
          title: 'Bhakti Movement',
          content: T(
            'Bhakti Movement',
            'A religious reform movement that preached devotion (bhakti) to God — open to all castes, men and women, without priests or rituals.',
            H.h2('What Is Bhakti?') +
            H.p('<strong>Bhakti</strong> means personal devotion and love for God. The Bhakti Movement started in <strong>Tamil Nadu</strong> (6th–7th century) with the <strong>Alvars</strong> (Vishnu devotees) and <strong>Nayanars</strong> (Shiva devotees). It spread across India by the 15th century.') +
            H.h2('Main Ideas') +
            H.ul([
              'God can be reached through <strong>love and devotion</strong>, not just rituals',
              'No caste barrier — <strong>all people are equal</strong> before God',
              'Worship in <strong>local language</strong>, not just Sanskrit',
              'Devotion is more important than fasting, pilgrimage, or sacrifice',
              'Both men and women could be saints'
            ]) +
            H.h2('Important Bhakti Saints') +
            tbl(
              ['Saint', 'Region', 'Deity', 'Language', 'Key Teaching'],
              [
                ['<strong>Ramanuja</strong>', 'Tamil Nadu', 'Vishnu', 'Sanskrit/Tamil', 'Qualified monism (Vishishtadvaita); caste reform'],
                ['<strong>Ramananda</strong>', 'North India', 'Rama', 'Hindi', 'Teacher of Kabir, Ravidas; rejected caste'],
                ['<strong>Kabir</strong>', 'Varanasi', 'Formless God (Nirguna)', 'Hindi (dohe)', 'Hindu-Muslim unity; criticised rituals of both'],
                ['<strong>Guru Nanak</strong>', 'Punjab', 'Formless God', 'Punjabi', 'Founded Sikhism; equality, honest living'],
                ['<strong>Chaitanya Mahaprabhu</strong>', 'Bengal', 'Krishna', 'Bengali', 'Kirtan (group singing); Gaudiya Vaishnavism'],
                ['<strong>Mira Bai</strong>', 'Rajasthan', 'Krishna', 'Rajasthani/Hindi', 'Rajput princess; devotional poems (bhajans)'],
                ['<strong>Tulsidas</strong>', 'Varanasi', 'Rama', 'Awadhi (Hindi)', 'Wrote Ramcharitmanas — Rama story in Hindi'],
                ['<strong>Surdas</strong>', 'Mathura', 'Krishna', 'Braj Bhasha', 'Blind poet; Sursagar — Krishna\'s childhood'],
                ['<strong>Narsi Mehta</strong>', 'Gujarat', 'Krishna', 'Gujarati', 'Vaishnava jana toh — Gandhi\'s favourite hymn']
              ]
            ) +
            H.h2('Two Types of Bhakti') +
            tbl(
              ['Type', 'Meaning', 'Examples'],
              [
                ['<strong>Saguna Bhakti</strong>', 'Devotion to God WITH form (idol/image)', 'Chaitanya (Krishna), Mirabai, Tulsidas (Rama)'],
                ['<strong>Nirguna Bhakti</strong>', 'Devotion to formless God (no idol)', 'Kabir, Guru Nanak, Ravidas']
              ]
            ) +
            H.h2('Impact') +
            H.p('The Bhakti Movement <strong>weakened caste rigidity</strong>, spread religious ideas in common languages, and inspired social reform. It also paved the way for the <strong>Sufi movement\'s</strong> similar message of love and equality.'),
            {
              examTip: 'Alvars (Vishnu) + Nayanars (Shiva) = earliest Bhakti in Tamil Nadu. Kabir = Nirguna, Hindu-Muslim unity. Tulsidas = Ramcharitmanas. Guru Nanak = Sikhism. Mirabai = Krishna bhajans.',
              quickRevision: [
                'Bhakti = personal devotion to God; started in Tamil Nadu.',
                'Alvars (Vishnu) and Nayanars (Shiva) = earliest saints.',
                'Open to all castes; worship in local languages.',
                'Saguna = God with form; Nirguna = formless God.',
                'Kabir: dohe in Hindi; Hindu-Muslim unity.',
                'Tulsidas: Ramcharitmanas in Awadhi.',
                'Guru Nanak: founded Sikhism in Punjab.',
                'Mirabai: Rajput princess; Krishna bhajans.'
              ],
              examAsk: 'Meaning of Bhakti; Kabir vs Tulsidas; Saguna vs Nirguna; Guru Nanak contribution; Mirabai; Ramcharitmanas author.'
            }
          )
        },
        {
          id: 'sufi-movement',
          title: 'Sufi Movement',
          content: T(
            'Sufi Movement',
            'Islamic mystics who preached love for God, tolerance, and service to humanity — deeply influenced Indian culture.',
            H.h2('What Is Sufism?') +
            H.p('<strong>Sufism</strong> is the mystical branch of Islam. Sufis seek direct personal experience of God through <strong>love, meditation, and music</strong>. They came to India around the <strong>11th century</strong> and spread their message of peace and equality.') +
            H.h2('Main Teachings') +
            H.ul([
              '<strong>Love for God</strong> (Ishq) is the path to salvation',
              'All humans are equal — no distinction of caste, creed, or status',
              'Service to humanity (<strong>Khidmat</strong>) is service to God',
              'Reject luxury and live simply',
              'Music and dance can lead to divine ecstasy (<strong>Sama</strong> / Qawwali)'
            ]) +
            H.h2('Important Sufi Saints') +
            tbl(
              ['Saint', 'Century', 'Region', 'Order / Silsila', 'Known For'],
              [
                ['<strong>Khwaja Moinuddin Chishti</strong>', '12th–13th', 'Ajmer (Rajasthan)', 'Chishti', 'Most revered Sufi in India; dargah at Ajmer; langar tradition'],
                ['<strong>Sheikh Nizamuddin Auliya</strong>', '13th–14th', 'Delhi', 'Chishti', 'Greatest Chishti saint; Amir Khusrau was disciple; Basant festival'],
                ['<strong>Fariduddin Ganjshakar (Baba Farid)</strong>', '12th–13th', 'Punjab (Pakpattan)', 'Chishti', 'Oldest Punjabi poetry; Guru Granth Sahib includes his verses'],
                ['<strong>Nasiruddin Chirag-i-Dehlvi</strong>', '14th', 'Delhi', 'Chishti', 'Last major Chishti saint of Delhi; successor of Nizamuddin'],
                ['<strong>Sheikh Bahauddin Zakariya</strong>', '13th', 'Multan', 'Suhrawardi', 'Different order; state-connected; less liberal than Chishti'],
                ['<strong>Hamiduddin Nagori</strong>', '13th', 'Rajasthan', 'Chishti', 'Vegetarian Sufi; lived simply in Nagaur']
              ]
            ) +
            H.h2('Major Sufi Orders (Silsilas)') +
            tbl(
              ['Order', 'Founder', 'Features', 'Region in India'],
              [
                ['<strong>Chishti</strong>', 'Khwaja Abu Ishaq Chishti (Central Asia)', 'Most popular in India; open to all; music (sama); no property', 'Delhi, Ajmer, Punjab'],
                ['<strong>Suhrawardi</strong>', 'Shihabuddin Suhrawardi', 'Connected to state/rulers; accepted grants', 'Multan, Bengal'],
                ['<strong>Qadiri</strong>', 'Abdul Qadir Jilani', 'Widespread; popular in Punjab', 'Punjab, Deccan'],
                ['<strong>Naqshbandi</strong>', 'Bahauddin Naqshband', 'Orthodox; opposed music; political influence', 'North India (Mughal court)']
              ]
            ) +
            H.h2('Sufi Institutions') +
            H.p('Sufis lived in <strong>Khanqahs</strong> (hospices/monasteries) where they prayed, taught, and fed the poor. After death, their tombs became <strong>Dargahs</strong> — places of pilgrimage for both Muslims and Hindus.') +
            H.h2('Impact on Indian Culture') +
            H.p('Sufism brought <strong>Hindu-Muslim cultural blending</strong>. Amir Khusrau (Nizamuddin\'s disciple) created <strong>Qawwali</strong> music and mixed Persian-Hindi into <strong>Urdu</strong>. Sufi ideas of love and equality matched the Bhakti movement, creating a shared spiritual culture.'),
            {
              examTip: 'Moinuddin Chishti = Ajmer dargah. Nizamuddin Auliya = Delhi; disciple Amir Khusrau. Chishti order = most popular, accepts music. Khanqah = Sufi hospice. Dargah = tomb shrine.',
              quickRevision: [
                'Sufism = mystical Islam; love and devotion to God.',
                'Came to India ~11th century; preached tolerance.',
                'Khwaja Moinuddin Chishti: Ajmer dargah; Chishti order.',
                'Nizamuddin Auliya: greatest Delhi Sufi; Amir Khusrau disciple.',
                'Baba Farid: Punjabi poetry; verses in Guru Granth Sahib.',
                'Chishti order: most popular; open to all; allows sama/music.',
                'Khanqah = Sufi monastery; Dargah = saint\'s tomb shrine.',
                'Sufism + Bhakti = Hindu-Muslim cultural synthesis.'
              ],
              examAsk: 'Khwaja Moinuddin Chishti dargah location; Nizamuddin Auliya; Chishti vs Suhrawardi order; Khanqah and Dargah meaning; Amir Khusrau connection.'
            }
          )
        }
      ]
    },
    {
      id: 'modern-history',
      name: 'Modern History',
      topics: [
        {
          id: 'europeans-in-india',
          title: 'Europeans in India',
          content: T(
            'Arrival of Europeans in India',
            'European trading companies came to India for spices and profit — starting with the Portuguese in 1498 and ending with British dominance.',
            H.h2('Why Did Europeans Come?') +
            H.p('Europe wanted <strong>spices, silk, and cotton</strong> from India. Direct sea routes were discovered after <strong>Vasco da Gama</strong> reached Calicut (Kerala) in <strong>1498</strong>.') +
            H.h2('European Companies — Timeline') +
            tbl(
              ['Company', 'Country', 'Year in India', 'First Factory / Base', 'Notes'],
              [
                ['<strong>Portuguese</strong>', 'Portugal', '1498', 'Cochin (1503), Goa (1510)', 'Alfonso de Albuquerque captured Goa; first Europeans to arrive'],
                ['<strong>Dutch (VOC)</strong>', 'Netherlands', '1605', 'Masulipatnam, Pulicat, Chinsura', 'Defeated at Battle of Colachel (1741) by Travancore'],
                ['<strong>English (EIC)</strong>', 'England', '1600 (charter)', 'Surat (1612), Madras (1639), Calcutta (1690)', 'Most successful; became rulers of India'],
                ['<strong>French (DMC)</strong>', 'France', '1664 (charter)', 'Pondicherry (1674)', 'Rival of British; lost Carnatic Wars'],
                ['<strong>Danish</strong>', 'Denmark', '1616', 'Tranquebar (Tamil Nadu)', 'Small presence; sold to British in 1845']
              ]
            ) +
            H.h2('Portuguese in India') +
            H.p('<strong>Alfonso de Albuquerque</strong> captured <strong>Goa</strong> in 1510 and made it the capital. The Portuguese introduced <strong>potatoes, tobacco, chillies, and breadfruit</strong> to India. They lost power after the <strong>Battle of Colachel (1741)</strong> when King <strong>Marthanda Varma</strong> of Travancore defeated them.') +
            H.h2('English East India Company') +
            H.p('Queen Elizabeth I granted charter in <strong>1600</strong>. <strong>Captain William Hawkins</strong> visited Jahangir\'s court (1608). <strong>Sir Thomas Roe</strong> got trading rights (1615). They built <strong>Fort St. George</strong> (Madras, 1644), <strong>Fort William</strong> (Calcutta, 1698), and <strong>Fort St. David</strong> (Cuddalore).') +
            H.h2('French in India') +
            H.p('<strong>Dupleix</strong> was the French governor who fought the British in the <strong>Carnatic Wars</strong>. Key French centres: <strong>Pondicherry, Chandannagar, Karaikal, Mahe, Yanam</strong>.'),
            {
              examTip: 'Vasco da Gama = 1498 Calicut. Goa captured 1510 by Albuquerque. EIC charter 1600. French base = Pondicherry. Colachel 1741 = Portuguese defeated by Travancore.',
              quickRevision: [
                'Vasco da Gama reached Calicut in 1498.',
                'Portuguese captured Goa (1510); capital of their empire.',
                'English EIC charter: 1600; French: 1664; Dutch: 1602.',
                'First English factory: Surat (1612).',
                'Fort St. George (Madras) built 1644.',
                'French headquarters: Pondicherry (1674).',
                'Battle of Colachel (1741): Travancore defeated Portuguese.',
                'Danish factory at Tranquebar — smallest European presence.'
              ],
              examAsk: 'First European to reach India by sea; year of EIC charter; Portuguese capital in India; French headquarters; Battle of Colachel.'
            }
          )
        },
        {
          id: 'british-expansion',
          title: 'British Expansion in India',
          content: T(
            'British Expansion in India',
            'How the East India Company went from traders to rulers — through wars, treaties, and clever policies.',
            H.h2('Three Major Settlements') +
            tbl(
              ['Presidency', 'Factory / Fort', 'Year', 'Modern City'],
              [
                ['<strong>Bengal</strong>', 'Fort William, Calcutta', '1690', 'Kolkata'],
                ['<strong>Madras</strong>', 'Fort St. George', '1639', 'Chennai'],
                ['<strong>Bombay</strong>', 'Received as dowry from Portuguese', '1668', 'Mumbai']
              ]
            ) +
            H.h2('Wars That Made the British Rulers') +
            tbl(
              ['War', 'Period', 'Opponent', 'Result / Significance'],
              [
                ['<strong>Carnatic Wars</strong> (3 wars)', '1740–1763', 'French (Dupleix)', 'British won; French power ended in India'],
                ['<strong>Battle of Plassey</strong>', '1757', 'Siraj-ud-Daulah (Bengal)', 'Robert Clive won; used Mir Jafar; British control of Bengal began'],
                ['<strong>Battle of Buxar</strong>', '1764', 'Shah Alam II, Mir Qasim, Shuja-ud-Daulah', 'British defeated combined forces; Diwani rights over Bengal'],
                ['<strong>Mysore Wars</strong> (4 wars)', '1767–1799', 'Haider Ali & Tipu Sultan', 'Tipu killed 1799; Mysore annexed'],
                ['<strong>Maratha Wars</strong> (3 wars)', '1775–1818', 'Maratha confederacy', 'Marathas defeated 1818; British paramountcy'],
                ['<strong>Anglo-Sikh Wars</strong> (2 wars)', '1845–1849', 'Sikh empire', 'Punjab annexed 1849; Dalhousie']
              ]
            ) +
            H.h2('Battle of Plassey (1757) — Turning Point') +
            H.p('Robert Clive\'s army of ~3,000 defeated Siraj-ud-Daulah\'s 50,000 at <strong>Plassey</strong> (near Murshidabad). Clive bribed <strong>Mir Jafar</strong> (commander) to not fight. This gave the British control of <strong>Bengal\'s wealth</strong> — the real beginning of British rule.') +
            H.h2('Battle of Buxar (1764)') +
            H.p('Combined armies of <strong>Mir Qasim</strong> (Bengal), <strong>Shuja-ud-Daulah</strong> (Awadh), and Mughal emperor <strong>Shah Alam II</strong> were defeated by <strong>Major Hector Munro</strong>. The Treaty of Allahabad (1765) gave the Company <strong>Diwani</strong> (revenue collection rights) of Bengal, Bihar, and Orissa.') +
            H.h2('Doctrine of Lapse (Dalhousie)') +
            H.p('Lord <strong>Dalhousie</strong> (1848–1856) annexed states whose rulers had no natural heir — the British rejected adopted sons. States annexed: <strong>Satara, Jhansi, Nagpur, Awadh</strong> (1856). This policy angered Indians and contributed to the 1857 Revolt.'),
            {
              examTip: 'Plassey 1757 = Clive vs Siraj (Mir Jafar betrayal). Buxar 1764 = Diwani rights. Tipu died 1799 (Seringapatam). Doctrine of Lapse = Dalhousie. Carnatic Wars = British vs French.',
              quickRevision: [
                'Three presidencies: Bengal, Madras, Bombay.',
                'Battle of Plassey (1757): Clive defeated Siraj-ud-Daulah.',
                'Mir Jafar betrayed Siraj — key to British victory.',
                'Battle of Buxar (1764): British got Diwani rights.',
                'Four Mysore Wars: Tipu Sultan killed 1799.',
                'Three Anglo-Maratha Wars: ended 1818.',
                'Punjab annexed 1849 after Anglo-Sikh Wars.',
                'Doctrine of Lapse by Dalhousie — annexed Jhansi, Awadh.'
              ],
              examAsk: 'Plassey vs Buxar — year and result; who was Mir Jafar; Tipu Sultan death; Doctrine of Lapse states; Carnatic Wars parties.'
            }
          )
        },
        {
          id: 'british-economic-policies',
          title: 'British Economic Policies',
          content: T(
            'British Economic Policies in India',
            'How the British drained India\'s wealth — through trade rules, heavy taxes, and destruction of Indian industries.',
            H.h2('Main Economic Policies') +
            tbl(
              ['Policy', 'What It Did', 'Impact on India'],
              [
                ['<strong>Permanent Settlement (1793)</strong>', 'Fixed land revenue forever in Bengal; zamindars as owners', 'Zamindars exploited peasants; Company got fixed income'],
                ['<strong>Ryotwari System</strong>', 'Direct settlement with peasants (ryots); revenue revised periodically', 'Used in Madras & Bombay by Thomas Munro & Alexander Reed'],
                ['<strong>Mahalwari System</strong>', 'Revenue from village (mahal) as a unit; revised periodically', 'Used in NW Provinces, Punjab by Holt Mackenzie'],
                ['<strong>Commercialisation of Agriculture</strong>', 'Forced farmers to grow cash crops (indigo, cotton, opium, tea)', 'Food grain production fell; famines increased'],
                ['<strong>De-industrialisation</strong>', 'Destroyed Indian handicrafts; imported British factory goods', 'Millions of artisans lost livelihood'],
                ['<strong>Drain of Wealth</strong>', 'India\'s wealth sent to Britain as salaries, profits, home charges', 'Dadabhai Naoroji explained in "Poverty and Unborn British Rule in India"']
              ]
            ) +
            H.h2('Permanent Settlement (1793) — Lord Cornwallis') +
            H.p('Introduced by <strong>Lord Cornwallis</strong> in <strong>Bengal and Bihar</strong>. Zamindars had to pay a <strong>fixed amount</strong> to the Company forever. If peasants could not pay, zamindars took their land.') +
            H.h2('Indigo Revolt (1859–60)') +
            H.p('Farmers in <strong>Bengal</strong> revolted against being forced to grow <strong>indigo</strong> (blue dye) instead of food crops. The revolt forced the government to set up the <strong>Indigo Commission</strong>.') +
            H.h2('Drain of Wealth Theory') +
            H.p('<strong>Dadabhai Naoroji</strong> (Grand Old Man of India) explained that Britain was draining India\'s wealth through salaries of British officials, company profits, and <strong>home charges</strong> — India paid for British administration costs in London.'),
            {
              examTip: 'Permanent Settlement 1793 = Cornwallis, Bengal. Ryotwari = Munro (Madras). Mahalwari = Mackenzie (Punjab). Drain of Wealth = Dadabhai Naoroji. Indigo Revolt 1859-60 = Bengal.',
              quickRevision: [
                'Permanent Settlement (1793): Cornwallis; Bengal & Bihar.',
                'Ryotwari: direct with peasants; Madras & Bombay.',
                'Mahalwari: village-based; NW Provinces & Punjab.',
                'Commercial crops: indigo, cotton, opium, tea.',
                'De-industrialisation: Indian handicrafts destroyed.',
                'Drain of Wealth theory by Dadabhai Naoroji.',
                'Indigo Revolt (1859–60) in Bengal.',
                'Home charges = India paid British admin costs in London.'
              ],
              examAsk: 'Three land revenue systems; who introduced Permanent Settlement; Drain of Wealth author; Indigo Revolt cause; de-industrialisation meaning.'
            }
          )
        },
        {
          id: 'governor-generals-viceroys',
          title: 'Governor-Generals & Viceroys',
          content: T(
            'Governor-Generals & Viceroys',
            'The British officials who ruled India — from Warren Hastings to Mountbatten — each with important reforms and events.',
            H.h2('Governor-Generals (1773–1858) — Complete List') +
            RL.governorGenerals +
            H.h2('Viceroys (1858–1947) — Complete List') +
            RL.viceroys +
            H.h2('Important Reforms by Viceroys') +
            tbl(
              ['Reform / Event', 'Year', 'Viceroy'],
              [
                ['Queen\'s Proclamation (Crown rule begins)', '1858', 'Canning'],
                ['Vernacular Press Act', '1878', 'Lytton'],
                ['Ilbert Bill', '1883', 'Ripon'],
                ['Partition of Bengal', '1905', 'Curzon'],
                ['Montagu-Chelmsford Reforms', '1919', 'Chelmsford'],
                ['Government of India Act', '1935', 'Linlithgow'],
                ['Indian Independence', '1947', 'Mountbatten']
              ]
            ),
            {
              examTip: 'Warren Hastings = first GG (1773). Bentinck = Sati abolition. Dalhousie = Doctrine of Lapse. Canning = 1857 + first Viceroy. Ripon = Ilbert Bill. Curzon = Bengal Partition 1905. Linlithgow = longest Viceroy. Mountbatten = last Viceroy.',
              memoryTrick: 'GG memory: Hastings→Cornwallis (Permanent Settlement)→Wellesley (Subsidiary Alliance)→Bentinck (Sati ban)→Dalhousie (Lapse+railways)→Canning (1857). Viceroys: Ripon=Local Self Govt, Curzon=Partition 1905, Chelmsford=1919 Reforms, Mountbatten=1947.',
              quickRevision: [
                'Warren Hastings: first Governor-General (1773).',
                'Cornwallis: Permanent Settlement (1793).',
                'Wellesley: Subsidiary Alliance system.',
                'Bentinck: Sati abolition (1829).',
                'Dalhousie: Doctrine of Lapse; railways & telegraph.',
                'Canning: 1857 Revolt; first Viceroy (1858).',
                'Ripon: Ilbert Bill; Local Self-Government.',
                'Curzon: Partition of Bengal (1905).',
                'Linlithgow: longest-serving Viceroy; Quit India 1942.',
                'Mountbatten: last Viceroy; Independence 1947.'
              ],
              examAsk: 'First GG and first Viceroy; who introduced Permanent Settlement/Subsidiary Alliance/Doctrine of Lapse; Ripon and Curzon reforms; last Viceroy.'
            }
          )
        },
        {
          id: 'revolt-of-1857',
          title: 'Revolt of 1857',
          content: T(
            'Revolt of 1857',
            'India\'s first major uprising against British rule — also called the Sepoy Mutiny, First War of Independence.',
            H.h2('What Happened?') +
            H.p('In <strong>1857</strong>, Indian soldiers (<strong>sepoys</strong>) and civilians rose against the British East India Company. It started at <strong>Meerut</strong> on <strong>10 May 1857</strong> and spread to Delhi, Lucknow, Kanpur, Jhansi, and Bihar. The British crushed it by <strong>1858</strong>.') +
            H.h2('Immediate Cause — Greased Cartridges') +
            H.p('The new <strong>Enfield rifle</strong> cartridges were greased with cow and pig fat. Sepoys had to bite them open. This hurt both <strong>Hindu</strong> (cow sacred) and <strong>Muslim</strong> (pig unclean) sentiments. <strong>Mangal Pandey</strong> refused to use them at Barrackpore (29 March 1857) and was hanged.') +
            H.h2('Causes of the Revolt') +
            tbl(
              ['Type', 'Examples'],
              [
                ['<strong>Political</strong>', 'Doctrine of Lapse (Jhansi, Awadh annexed); no respect for Mughal emperor'],
                ['<strong>Economic</strong>', 'Heavy land revenue; destruction of handicrafts; peasants unhappy'],
                ['<strong>Military</strong>', 'Low pay; no promotion for Indians; greased cartridges'],
                ['<strong>Religious</strong>', 'Missionary activity; rumours of forced conversion; cow/pig fat in cartridges'],
                ['<strong>Social</strong>', 'Racial discrimination; British arrogance toward Indians']
              ]
            ) +
            H.h2('Important Leaders & Centres') +
            tbl(
              ['Centre', 'Leader(s)', 'Outcome'],
              [
                ['<strong>Delhi</strong>', 'Bahadur Shah II (Mughal emperor)', 'British recaptured; emperor exiled to Rangoon'],
                ['<strong>Kanpur</strong>', 'Nana Saheb, Tantia Tope, Begum Hazrat Mahal', 'Nana Saheb escaped; Tantia Tope hanged'],
                ['<strong>Lucknow</strong>', 'Begum Hazrat Mahal', 'Long siege; British recaptured 1858'],
                ['<strong>Jhansi</strong>', 'Rani Lakshmibai', 'Fought bravely; died at Gwalior (1858)'],
                ['<strong>Bihar</strong>', 'Kunwar Singh (Jagdispur)', '80-year-old leader; died of wounds'],
                ['<strong>Faizabad/Ayodhya</strong>', 'Maulvi Ahmadullah Shah', 'Called "Lighthouse of Revolt"; killed in battle']
              ]
            ) +
            H.h2('Results & Consequences') +
            H.ul([
              '<strong>Company rule ended</strong> — British Crown took over (1858)',
              '<strong>Queen\'s Proclamation</strong> (1 Nov 1858) — promised no annexation, religious freedom',
              '<strong>Mughal dynasty ended</strong> — Bahadur Shah II exiled',
              '<strong>Army reorganised</strong> — fewer Indian soldiers; no Indians in artillery',
              '<strong>Doctrine of Lapse abolished</strong>'
            ]),
            {
              examTip: 'Started Meerut 10 May 1857. Mangal Pandey = Barrackpore March 1857. Rani Lakshmibai = Jhansi. Tantia Tope hanged. Bahadur Shah II exiled. End of Company rule 1858.',
              quickRevision: [
                'Started at Meerut, 10 May 1857.',
                'Immediate cause: greased cartridges (cow + pig fat).',
                'Mangal Pandey: first hero; Barrackpore; hanged April 1857.',
                'Delhi: Bahadur Shah II; Kanpur: Nana Saheb & Tantia Tope.',
                'Jhansi: Rani Lakshmibai; died at Gwalior 1858.',
                'Bihar: Kunwar Singh (aged 80).',
                'British won by 1858; Company rule ended.',
                'Queen\'s Proclamation 1858: Crown rule began.'
              ],
              examAsk: 'Immediate cause; start date and place; leaders at Delhi/Jhansi/Kanpur/Bihar; Mangal Pandey; consequences; end of Company rule.'
            }
          )
        },
        {
          id: 'socio-religious-reforms',
          title: 'Socio-Religious Reform Movements',
          content: T(
            'Socio-Religious Reform Movements',
            '19th century reformers who fought against evil practices like sati, child marriage, and caste discrimination.',
            H.h2('Why Reforms Were Needed') +
            H.p('British rule and Western education opened Indians\' eyes to social evils: <strong>sati, child marriage, purdah, caste system, untouchability</strong>, and lack of women\'s education. Reformers used logic, religion, and law to change society.') +
            H.h2('Major Reform Movements') +
            tbl(
              ['Movement / Organisation', 'Founder', 'Year', 'Key Work'],
              [
                ['<strong>Brahmo Samaj</strong>', 'Raja Ram Mohan Roy', '1828', 'Abolition of sati; monotheism; women\'s rights; founded at Calcutta'],
                ['<strong>Young Bengal Movement</strong>', 'Henry Louis Vivian Derozio', '1820s', 'Radical students at Hindu College; free thinking'],
                ['<strong>Arya Samaj</strong>', 'Swami Dayanand Saraswati', '1875', 'Back to Vedas; Shuddhi movement; opposed idol worship'],
                ['<strong>Prarthana Samaj</strong>', 'Atmaram Pandurang', '1867', 'Maharashtra; monotheism; social reform'],
                ['<strong>Ramakrishna Mission</strong>', 'Swami Vivekananda', '1897', 'Service to humanity; Belur Math; Chicago 1893 speech'],
                ['<strong>Aligarh Movement</strong>', 'Sir Syed Ahmad Khan', '1875', 'MAO College (Aligarh Muslim University); modern education for Muslims'],
                ['<strong>Self-Respect Movement</strong>', 'E.V. Ramasamy (Periyar)', '1925', 'Tamil Nadu; against Brahmin dominance & caste']
              ]
            ) +
            H.h2('Raja Ram Mohan Roy (1772–1833)') +
            H.p('Called the <strong>"Father of Modern India"</strong> and <strong>"Father of Bengal Renaissance."</strong> He fought against <strong>sati</strong> — helped pass Bengal Sati Regulation (1829) by Lord William Bentinck. Founded <strong>Brahmo Samaj</strong> (1828). Started newspapers: <strong>Sambad Kaumudi</strong> (Bengali), <strong>Mirat-ul-Akbar</strong> (Persian).') +
            H.h2('Women Reformers') +
            tbl(
              ['Reformer', 'Work'],
              [
                ['<strong>Ishwar Chandra Vidyasagar</strong>', 'Widow Remarriage Act 1856; Bengali prose; Calcutta University founder'],
                ['<strong>Pandita Ramabai</strong>', 'Sharda Sadan for widows; first woman social reformer'],
                ['<strong>Savitribai Phule</strong>', 'First woman teacher in India; school for girls with Jyotirao Phule'],
                ['<strong>Swarnakumari Devi</strong>', 'Sister of Rabindranath Tagore; women\'s education']
              ]
            ) +
            H.h2('Important Laws Passed') +
            tbl(
              ['Act', 'Year', 'Reform'],
              [
                ['Bengal Sati Regulation', '1829', 'Sati banned in Bengal (Bentinck + Roy)'],
                ['Widow Remarriage Act', '1856', 'Hindu widows could remarry (Vidyasagar)'],
                ['Age of Consent Act', '1891', 'Raised marriage age for girls to 12'],
                ['Child Marriage Restraint Act (Sarda Act)', '1929', 'Minimum age: 14 girls, 18 boys']
              ]
            ),
            {
              examTip: 'Raja Ram Mohan Roy = Brahmo Samaj + anti-sati (1829). Dayanand = Arya Samaj + Back to Vedas. Vivekananda = Ramakrishna Mission. Syed Ahmad Khan = Aligarh. Vidyasagar = Widow Remarriage 1856.',
              quickRevision: [
                'Raja Ram Mohan Roy: Brahmo Samaj (1828); fought sati.',
                'Sati banned 1829 by Bentinck with Roy\'s support.',
                'Swami Dayanand: Arya Samaj (1875); "Back to Vedas".',
                'Swami Vivekananda: Ramakrishna Mission (1897).',
                'Sir Syed Ahmad Khan: Aligarh Movement (1875).',
                'Vidyasagar: Widow Remarriage Act (1856).',
                'Savitribai Phule: first woman teacher in India.',
                'Periyar: Self-Respect Movement in Tamil Nadu.'
              ],
              examAsk: 'Founders of Brahmo/Arya/Ramakrishna Samaj; sati abolition year; Widow Remarriage Act; Aligarh Movement; Vidyasagar contributions.'
            }
          )
        },
        {
          id: 'indian-national-congress',
          title: 'Indian National Congress',
          content: T(
            'Indian National Congress (INC)',
            'India\'s oldest political party — founded in 1885 to demand greater Indian participation in government, later leading the freedom struggle.',
            H.h2('Formation') +
            tbl(
              ['Detail', 'Information'],
              [
                ['Founded', '<strong>28 December 1885</strong>'],
                ['Place', '<strong>Gokuldas Tejpal Sanskrit College, Bombay</strong>'],
                ['First President', '<strong>Womesh Chandra Bonnerjee</strong> (WC Bonnerjee)'],
                ['Founder / Organiser', '<strong>A.O. Hume</strong> (retired British civil servant)'],
                ['Total delegates (first session)', '72 from all over India'],
                ['Viceroy at time', 'Lord Dufferin']
              ]
            ) +
            H.h2('Important INC Sessions') +
            tbl(
              ['Session', 'Year', 'President', 'Significance'],
              [
                ['Bombay (1st)', '1885', 'WC Bonnerjee', 'INC founded'],
                ['Surat (22nd)', '1907', 'Rashbehari Ghosh', 'Split between Moderates & Extremists'],
                ['Lucknow (31st)', '1916', 'Ambika Charan Majumdar', 'Moderate-Extremist reunion; Lucknow Pact with Muslim League'],
                ['Lahore (44th)', '1929', 'Jawaharlal Nehru', 'Poorna Swaraj (Complete Independence) resolution passed'],
                ['Haripura (51st)', '1938', 'Subhas Chandra Bose', 'National Planning Committee set up']
              ]
            ) +
            H.h2('Split and Reunion') +
            H.p('In <strong>1907 Surat session</strong>, the INC split into <strong>Moderates</strong> (Gokhale, Naoroji) and <strong>Extremists</strong> (Tilak, Lajpat Rai, Pal). They reunited at the <strong>Lucknow session (1916)</strong> due to the rise of the Muslim League and World War I.'),
            {
              examTip: 'INC founded 1885 Bombay; first president Bonnerjee; Hume organiser. Surat 1907 = split. Lucknow 1916 = reunion + Lucknow Pact. Lahore 1929 = Poorna Swaraj under Nehru.',
              quickRevision: [
                'Founded 28 Dec 1885 at Bombay.',
                'First president: WC Bonnerjee.',
                'Organiser: A.O. Hume (British civil servant).',
                '72 delegates at first session.',
                'Split at Surat session 1907.',
                'Reunited at Lucknow 1916.',
                'Lucknow Pact 1916 with Muslim League.',
                'Poorna Swaraj resolution: Lahore 1929 (Nehru president).'
              ],
              examAsk: 'INC founding year, place, first president; Hume\'s role; Surat split; Lucknow Pact; Poorna Swaraj session.'
            }
          )
        },
        {
          id: 'moderate-phase',
          title: 'Moderate Phase of INC',
          content: T(
            'Moderate Phase (1885–1905)',
            'Early Congress leaders who believed in petitions, prayers, and constitutional methods — called Moderates.',
            H.h2('Who Were the Moderates?') +
            H.p('The <strong>Moderates</strong> led the INC from <strong>1885 to 1905</strong>. They believed reforms could be achieved through <strong>peaceful, legal methods</strong> — petitions, speeches, and sending delegations to London.') +
            H.h2('Key Moderate Leaders') +
            tbl(
              ['Leader', 'Nickname / Title', 'Contribution'],
              [
                ['<strong>Dadabhai Naoroji</strong>', 'Grand Old Man of India', 'Drain of Wealth theory; first Indian MP in British Parliament (1892)'],
                ['<strong>Gopal Krishna Gokhale</strong>', 'Political Guru of Gandhi', 'Servants of India Society (1905); mentored Gandhi'],
                ['<strong>Surendranath Banerjee</strong>', 'Indian Burke', 'Founded Indian Association (1876); opposed Partition of Bengal'],
                ['<strong>Pherozeshah Mehta</strong>', 'Lion of Bombay', 'Moderate leader from Bombay'],
                ['<strong>Justice Ranade</strong>', '—', 'Social reformer + moderate; Prarthana Samaj']
              ]
            ) +
            H.h2('Methods of Moderates') +
            H.ul([
              '<strong>Constitutional agitation</strong> — petitions, resolutions, memoranda to British',
              'Sent delegations to England (e.g., Naoroji as MP)',
              'Used press — newspapers to spread ideas',
              'Demanded <strong>Indian Councils Act</strong> reforms (got 1892 Act — small progress)'
            ]) +
            H.p('Extremists said Moderates were too <strong>slow and loyal</strong> to the British. After the <strong>Partition of Bengal (1905)</strong>, younger leaders demanded stronger methods.'),
            {
              examTip: 'Naoroji = Grand Old Man + Drain of Wealth + first Indian MP in Britain. Gokhale = Gandhi\'s guru + Servants of India Society. Banerjee = Indian Burke. Moderates: 1885-1905.',
              quickRevision: [
                'Moderates led INC 1885–1905.',
                'Methods: petitions, prayers, constitutional agitation.',
                'Dadabhai Naoroji: Drain of Wealth; Grand Old Man of India.',
                'Gokhale: Political guru of Gandhi; Servants of India Society.',
                'Surendranath Banerjee: Indian Burke; Indian Association 1876.',
                'Indian Councils Act 1892 — partial success.',
                'Criticised as too slow and pro-British.',
                'Extremists rose after Bengal Partition 1905.'
              ],
              examAsk: 'Moderate methods; Dadabhai Naoroji contributions; Gokhale and Gandhi; why Moderates failed; key Moderate leaders.'
            }
          )
        },
        {
          id: 'extremist-phase',
          title: 'Extremist Phase of INC',
          content: T(
            'Extremist Phase (1905–1919)',
            'Radical nationalists who demanded Swaraj now — using boycott, swadeshi, and national education instead of just petitions.',
            H.h2('Who Were the Extremists?') +
            H.p('After the <strong>Partition of Bengal (1905)</strong>, younger leaders rejected Moderate methods. They wanted <strong>Swaraj (self-rule) immediately</strong>. Main leaders: <strong>Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal</strong> — called <strong>Lal-Bal-Pal</strong>.') +
            H.h2('Extremist Methods — Swadeshi Movement') +
            tbl(
              ['Method', 'Meaning', 'Example'],
              [
                ['<strong>Swadeshi</strong>', 'Use Indian-made goods; boycott foreign goods', 'Bonfires of foreign cloth; revival of handloom'],
                ['<strong>Boycott</strong>', 'Refuse British goods, courts, schools, jobs', 'National schools opened in Bengal'],
                ['<strong>National Education</strong>', 'Indian-run schools and colleges', 'Bengal National College (Aurobindo Ghosh as principal)'],
                ['<strong>Passive Resistance</strong>', 'Non-cooperation with unjust laws', 'Later adopted by Gandhi on larger scale']
              ]
            ) +
            H.h2('Key Extremist Leaders') +
            tbl(
              ['Leader', 'Region', 'Nickname / Famous For'],
              [
                ['<strong>Bal Gangadhar Tilak</strong>', 'Maharashtra', '"Lokmanya"; "Swaraj is my birthright"; Kesari newspaper'],
                ['<strong>Lala Lajpat Rai</strong>', 'Punjab', '"Lion of Punjab"; died in lathi charge (1928) protesting Simon Commission'],
                ['<strong>Bipin Chandra Pal</strong>', 'Bengal', '"Father of Revolutionary Ideas"; New India newspaper'],
                ['<strong>Aurobindo Ghosh</strong>', 'Bengal', 'Revolutionary turned spiritual; Alipore Bomb Case']
              ]
            ) +
            H.h2('Surat Split (1907) & Bengal Partition') +
            H.p('At the <strong>Surat session</strong>, Moderates and Extremists clashed — <strong>INC split</strong> until reunion in 1916. Lord <strong>Curzon</strong> divided Bengal in 1905 — annulled in 1911; capital shifted from Calcutta to <strong>Delhi</strong>. <strong>Muslim League</strong> founded at Dacca in 1906.') +
            H.p('Tilak famously said: <strong>"Swaraj is my birthright and I shall have it!"</strong>'),
            {
              examTip: 'Lal-Bal-Pal = Extremist trio. Tilak = "Swaraj is my birthright." Surat split 1907. Bengal Partition 1905 by Curzon. Muslim League 1906 at Dacca. Swadeshi + Boycott = main methods.',
              quickRevision: [
                'Extremist phase: 1905–1919 approx.',
                'Leaders: Lal (Lajpat Rai), Bal (Tilak), Pal (Bipin Pal).',
                'Tilak: "Swaraj is my birthright" (1897).',
                'Methods: Swadeshi, Boycott, National Education.',
                'Trigger: Partition of Bengal 1905 by Curzon.',
                'Surat Split 1907: Moderates vs Extremists.',
                'Muslim League founded 1906 at Dacca.',
                'Bengal Partition annulled 1911; capital to Delhi.'
              ],
              examAsk: 'Lal-Bal-Pal; Tilak\'s slogan; Swadeshi movement methods; Surat Split reason; Bengal Partition; Muslim League founding.'
            }
          )
        },
        {
          id: 'home-rule-movement',
          title: 'Home Rule Movement',
          content: T(
            'Home Rule Movement (1916–1918)',
            'A movement led by Tilak and Annie Besant demanding self-government for India — like Ireland\'s Home Rule.',
            H.h2('Two Home Rule Leagues') +
            tbl(
              ['League', 'Founded By', 'Year', 'Base', 'Details'],
              [
                ['<strong>Home Rule League (Tilak)</strong>', 'Bal Gangadhar Tilak', 'April 1916', 'Poona (Maharashtra)', 'Worked in Maharashtra, Karnataka, Central Provinces'],
                ['<strong>Home Rule League (Besant)</strong>', 'Annie Besant', 'September 1916', 'Madras (Chennai)', 'Worked in rest of India through Theosophical Society']
              ]
            ) +
            H.h2('Annie Besant (1847–1933)') +
            H.p('<strong>Annie Besant</strong> was a British woman who supported Indian freedom. She joined the <strong>Theosophical Society</strong>, started <strong>New India</strong> newspaper, became INC president in <strong>1917</strong>, and founded <strong>Central Hindu College</strong> at Varanasi (later BHU). She was arrested in 1917; massive protests led to her release.') +
            H.h2('Why the Movement Declined') +
            tbl(
              ['Reason', 'Detail'],
              [
                ['August Declaration 1917', 'Montagu promised "gradual responsible government" — Moderates satisfied'],
                ['Tilak went to England', '1918 — to fight a libel case; movement lost leader'],
                ['Montagu-Chelmsford Reforms 1919', 'Partial self-government offered — divided opinion']
              ]
            ) +
            H.p('The Home Rule Movement <strong>reunited Moderates and Extremists</strong> (Lucknow Pact 1916) and prepared India for Gandhi\'s mass movements.'),
            {
              examTip: 'Tilak = Poona Home Rule League (April 1916). Annie Besant = Madras League (Sept 1916). Besant = INC president 1917. August Declaration 1917 by Montagu. Lucknow Pact 1916 same period.',
              quickRevision: [
                'Home Rule Movement: 1916–1918.',
                'Demanded self-government like Ireland/Canada.',
                'Tilak\'s league: April 1916, Poona.',
                'Annie Besant\'s league: September 1916, Madras.',
                'Both leagues merged in 1916.',
                'Besant: INC president 1917; Theosophical Society.',
                'August Declaration 1917: Montagu promised reforms.',
                'Prepared ground for Gandhi\'s mass movements.'
              ],
              examAsk: 'Who started Home Rule Leagues and when; Annie Besant role; August Declaration 1917; why movement declined; connection to Lucknow Pact.'
            }
          )
        },
        {
          id: 'gandhian-era',
          title: 'Gandhian Era',
          content: T(
            'Gandhian Era (1917–1947)',
            'Mahatma Gandhi\'s leadership transformed India\'s freedom struggle — through truth, non-violence, and mass movements.',
            H.h2('Gandhi\'s Early Movements in India') +
            tbl(
              ['Movement', 'Year', 'Place', 'Issue', 'Result'],
              [
                ['<strong>Champaran Satyagraha</strong>', '1917', 'Bihar', 'Indigo planters exploiting farmers', 'Gandhi\'s first satyagraha in India'],
                ['<strong>Ahmedabad Mill Strike</strong>', '1918', 'Gujarat', 'Textile workers\' wage dispute', 'Workers got 35% wage increase'],
                ['<strong>Kheda Satyagraha</strong>', '1918', 'Gujarat', 'Farmers demanded tax suspension after crop failure', 'Tax suspended; Patel joined Gandhi'],
                ['<strong>Rowlatt Satyagraha</strong>', '1919', 'All India', 'Protest against Rowlatt Act', 'Jallianwala Bagh massacre; hartal observed'],
                ['<strong>Non-Cooperation Movement</strong>', '1920–22', 'All India', 'Protest Jallianwala + Khilafat', 'Withdrawn after Chauri Chaura (1922)'],
                ['<strong>Civil Disobedience (Dandi March)</strong>', '1930', 'Sabarmati to Dandi', 'Break Salt Law', 'Salt Satyagraha; worldwide attention'],
                ['<strong>Quit India Movement</strong>', '1942', 'All India', 'Demand British leave immediately', '"Do or Die"; leaders arrested; suppressed']
              ]
            ) +
            H.h2('Gandhi\'s Principles') +
            tbl(
              ['Principle', 'Meaning'],
              [
                ['<strong>Satyagraha</strong>', 'Truth-force; non-violent resistance'],
                ['<strong>Ahimsa</strong>', 'Non-violence in thought, word, and action'],
                ['<strong>Swadeshi</strong>', 'Use of Indian goods; self-reliance'],
                ['<strong>Swaraj</strong>', 'Self-rule — political and spiritual freedom'],
                ['<strong>Sarvodaya</strong>', 'Welfare of all; against untouchability']
              ]
            ) +
            H.h2('Key Events') +
            H.p('<strong>Jallianwala Bagh (1919):</strong> General Dyer fired on unarmed crowd in Amritsar — hundreds killed. <strong>Chauri Chaura (1922):</strong> Mob burned police station — Gandhi withdrew Non-Cooperation. <strong>Dandi March (1930):</strong> Gandhi walked 240 miles to make salt. <strong>Quit India (1942):</strong> Gandhi gave "Do or Die" call.') +
            H.h2('Gandhi-Irwin Pact (1931)') +
            H.p('Gandhi agreed to suspend Civil Disobedience; British agreed to release prisoners. Gandhi attended the <strong>Second Round Table Conference</strong> in London.') +
            H.h2('Important Associates') +
            tbl(
              ['Person', 'Role'],
              [
                ['Sardar Vallabhbhai Patel', 'Organiser; Bardoli Satyagraha; Iron Man of India'],
                ['Jawaharlal Nehru', 'Congress president; first PM of India'],
                ['Maulana Abul Kalam Azad', 'Youngest INC president (1923); scholar'],
                ['Rajendra Prasad', 'First President of India; Champaran volunteer'],
                ['C. Rajagopalachari', 'Last Governor-General of India; Vedaranyam Salt March in South']
              ]
            ),
            {
              examTip: 'First satyagraha in India = Champaran 1917. Dandi March 1930 = Salt Satyagraha. Quit India 1942 = "Do or Die". Chauri Chaura 1922 = NCM withdrawn. Jallianwala Bagh = Dyer 1919.',
              quickRevision: [
                'Gandhi returned to India from South Africa in 1915.',
                'Champaran 1917: first satyagraha in India (indigo).',
                'Non-Cooperation 1920–22; withdrawn after Chauri Chaura.',
                'Dandi March 1930: broke Salt Law.',
                'Quit India 1942: "Do or Die" slogan.',
                'Jallianwala Bagh 1919: General Dyer, Amritsar.',
                'Gandhi-Irwin Pact 1931; Second Round Table Conference.',
                'Patel = Iron Man; Nehru = first PM.'
              ],
              examAsk: 'Gandhi\'s movements with years; first satyagraha in India; Dandi March significance; Quit India slogan; why Non-Cooperation was withdrawn; Jallianwala Bagh.'
            }
          )
        },
        {
          id: 'revolutionary-movements',
          title: 'Revolutionary Movements',
          content: T(
            'Revolutionary Movements',
            'Young freedom fighters who believed armed revolution was needed to free India — when they felt non-violence was too slow.',
            H.h2('Major Revolutionary Groups') +
            tbl(
              ['Organisation', 'Region', 'Key Members', 'Activities'],
              [
                ['<strong>Anushilan Samiti</strong>', 'Bengal', 'Aurobindo Ghosh, Barindra Ghosh', 'Bomb making; Muzaffarpur bombing 1908'],
                ['<strong>Jugantar</strong>', 'Bengal', 'Bagha Jatin (Jatin Das)', 'Armed robberies to fund revolution'],
                ['<strong>Abhinav Bharat Society</strong>', 'Maharashtra', 'V.D. Savarkar', 'Swadeshi, armed revolt'],
                ['<strong>Ghadar Party</strong>', 'USA & Canada', 'Lala Hardayal, Sohan Singh Bhakna', 'Planned 1915 uprising; Komagata Maru incident'],
                ['<strong>HRA / HSRA</strong>', 'North India', 'Bhagat Singh, Azad, Sukhdev, Rajguru', 'Kakori Robbery 1925; Assembly bombing 1929']
              ]
            ) +
            H.h2('Famous Revolutionary Actions') +
            tbl(
              ['Event', 'Year', 'People Involved', 'Detail'],
              [
                ['Muzaffarpur Bomb Case', '1908', 'Khudiram Bose & Prafulla Chaki', 'Khudiram (18) hanged — youngest martyr'],
                ['Kakori Train Robbery', '1925', 'Ram Prasad Bismil, Ashfaqullah Khan', 'Robbed treasury from train near Lucknow'],
                ['Lahore Conspiracy (Saunders murder)', '1928', 'Bhagat Singh, Rajguru, Sukhdev', 'Revenge for Lala Lajpat Rai\'s death'],
                ['Assembly Bombing', '1929', 'Bhagat Singh & Batukeshwar Dutt', 'Shouted "Inquilab Zindabad"'],
                ['Chittagong Armoury Raid', '1930', 'Surya Sen (Masterda)', 'Sen hanged 1934']
              ]
            ) +
            H.h2('Famous Revolutionaries') +
            tbl(
              ['Revolutionary', 'Known For', 'Fate'],
              [
                ['Bhagat Singh', '"Inquilab Zindabad"; Why I Am An Atheist', 'Hanged 23 March 1931 (with Sukhdev, Rajguru)'],
                ['Chandrashekhar Azad', 'Never caught alive; reorganised HRA into HSRA', 'Shot himself at Alfred Park, Allahabad (1931)'],
                ['Khudiram Bose', 'Youngest revolutionary martyr (18 years)', 'Hanged 1908'],
                ['Surya Sen (Masterda)', 'Chittagong Armoury Raid leader', 'Hanged 1934']
              ]
            ) +
            H.p('<strong>23 March</strong> is observed as <strong>Martyrs\' Day (Shaheed Diwas)</strong>.'),
            {
              examTip: 'Khudiram Bose = Muzaffarpur 1908, youngest martyr. Bhagat Singh = Assembly bombing 1929, hanged 1931. Kakori 1925 = Bismil, Ashfaqullah. Ghadar Party = Lala Hardayal. Chittagong = Surya Sen.',
              quickRevision: [
                'Revolutionaries believed in armed struggle against British.',
                'Anushilan Samiti & Jugantar: Bengal groups.',
                'Abhinav Bharat: Savarkar, Maharashtra.',
                'Ghadar Party: 1913, USA/Canada; Lala Hardayal.',
                'Kakori Robbery 1925: Bismil, Ashfaqullah Khan.',
                'Bhagat Singh: Saunders murder + Assembly bombing.',
                'Hanged 23 March 1931 with Sukhdev and Rajguru.',
                'Chittagong Armoury Raid 1930: Surya Sen.'
              ],
              examAsk: 'Kakori conspiracy; Bhagat Singh actions; Khudiram Bose; Ghadar Party founder; Chittagong Raid leader; Martyrs\' Day date.'
            }
          )
        },
        {
          id: 'important-missions-plans',
          title: 'Important Missions & Plans',
          content: T(
            'Important Missions & Plans',
            'British missions and plans to decide India\'s future constitution — from Simon Commission to Cabinet Mission.',
            H.h2('Major Missions & Plans') +
            tbl(
              ['Mission / Plan', 'Year', 'Head / Key Person', 'Purpose', 'Outcome'],
              [
                ['<strong>Simon Commission</strong>', '1928', 'Sir John Simon (all British members)', 'Review 1919 reforms', 'Boycotted — "Simon Go Back"; Nehru Report (1928)'],
                ['<strong>Nehru Report</strong>', '1928', 'Motilal Nehru', 'Indian alternative to Simon Commission', 'Demanded Dominion Status; rejected by Muslim League'],
                ['<strong>Round Table Conferences</strong>', '1930–32', 'British PM Ramsay MacDonald', 'Discuss constitutional reforms', 'Three sessions; Gandhi attended 2nd (1931)'],
                ['<strong>Communal Award</strong>', '1932', 'Ramsay MacDonald', 'Separate electorates for Depressed Classes', 'Gandhi\'s fast; Poona Pact (1932)'],
                ['<strong>Government of India Act</strong>', '1935', 'British Parliament', 'Provincial autonomy; Federal structure', 'Basis for 1950 Constitution'],
                ['<strong>Cripps Mission</strong>', '1942', 'Sir Stafford Cripps', 'Win Indian support for WWII', 'Rejected by INC; Quit India followed'],
                ['<strong>Cabinet Mission</strong>', '1946', 'Pethick-Lawrence, Cripps, Alexander', 'Transfer power; keep India united', 'Failed; Interim Government formed'],
                ['<strong>Mountbatten Plan</strong>', '1947', 'Lord Mountbatten', 'Partition India; transfer power', 'India and Pakistan created Aug 1947']
              ]
            ) +
            H.h2('Round Table Conferences — Three Sessions') +
            tbl(
              ['Session', 'Year', 'Key Events'],
              [
                ['First', '1930', 'Boycotted by INC (in Civil Disobedience)'],
                ['Second', '1931', 'Gandhi attended after Gandhi-Irwin Pact'],
                ['Third', '1932', 'Gandhi did NOT attend; Communal Award announced']
              ]
            ) +
            H.h2('Poona Pact (1932)') +
            H.p('When the British gave <strong>separate electorates</strong> to Depressed Classes, Gandhi fasted in Yeravda jail. <strong>Dr. B.R. Ambedkar</strong> and Gandhi reached the <strong>Poona Pact</strong> — joint electorates with reserved seats for Scheduled Castes.'),
            {
              examTip: 'Simon Commission 1928 — no Indians, boycotted. Nehru Report 1928 — Motilal Nehru. Poona Pact 1932 — Gandhi + Ambedkar. Cripps 1942 — rejected. Cabinet Mission 1946 — last major British plan.',
              quickRevision: [
                'Simon Commission 1928: all British; "Simon Go Back".',
                'Nehru Report 1928: Indian answer; Dominion Status.',
                'Three Round Table Conferences: 1930, 1931, 1932.',
                'Gandhi attended 2nd RTC after Gandhi-Irwin Pact.',
                'Communal Award 1932 → Poona Pact (Gandhi-Ambedkar).',
                'Government of India Act 1935: provincial autonomy.',
                'Cripps Mission 1942: rejected; Quit India followed.',
                'Cabinet Mission 1946: last plan before Partition.'
              ],
              examAsk: 'Simon Commission boycott reason; Nehru Report; Round Table Conferences; Poona Pact; Cripps Mission failure; Cabinet Mission recommendations.'
            }
          )
        },
        {
          id: 'important-acts',
          title: 'Important Acts & Reforms',
          content: T(
            'Important Acts & Reforms',
            'British laws that changed how India was governed — from the Regulating Act of 1773 to the Independence Act of 1947.',
            H.h2('Constitutional Acts — Timeline') +
            tbl(
              ['Act', 'Year', 'Key Provisions', 'Significance'],
              [
                ['<strong>Regulating Act</strong>', '1773', 'First step to control Company; Supreme Court at Calcutta; GG at Fort William', 'First act to regulate East India Company'],
                ['<strong>Pitt\'s India Act</strong>', '1784', 'Dual control: Board of Control + Court of Directors', 'British government got political control'],
                ['<strong>Charter Act</strong>', '1833', 'GG of Bengal became GG of India; Macaulay\'s minute on English education', 'End of Company\'s commercial role'],
                ['<strong>Government of India Act</strong>', '1858', 'Company rule ended; Crown rule; Secretary of State for India', 'After 1857 Revolt; Queen\'s Proclamation'],
                ['<strong>Indian Councils Act (Morley-Minto)</strong>', '1909', 'Separate electorates for Muslims; expanded councils', 'First time communal electorate'],
                ['<strong>Government of India Act</strong>', '1919', 'Dyarchy in provinces; bicameral legislature at centre', 'Montagu-Chelmsford Reforms'],
                ['<strong>Government of India Act</strong>', '1935', 'Provincial autonomy; dyarchy at centre; Federal court', 'Basis for 1950 Constitution'],
                ['<strong>Indian Independence Act</strong>', '1947', 'Two dominions: India & Pakistan', 'Passed 15 July 1947; India free 15 August 1947']
              ]
            ) +
            H.h2('Other Important Acts') +
            tbl(
              ['Act', 'Year', 'Purpose'],
              [
                ['<strong>Rowlatt Act</strong>', '1919', 'Detention without trial — caused Jallianwala Bagh protests'],
                ['<strong>Vernacular Press Act</strong>', '1878', 'Censored Indian language newspapers (Lytton) — repealed by Ripon 1882'],
                ['<strong>Ilbert Bill</strong>', '1883', 'Indian judges could try Europeans (Ripon) — diluted after European protest']
              ]
            ) +
            H.h2('Quick Memory: Acts by Viceroy') +
            tbl(
              ['Viceroy', 'Act / Reform'],
              [
                ['Canning', 'Government of India Act 1858; Indian Councils Act 1861'],
                ['Lytton', 'Vernacular Press Act 1878; Arms Act 1878'],
                ['Ripon', 'Ilbert Bill 1883'],
                ['Chelmsford', 'Government of India Act 1919 (Montagu-Chelmsford)'],
                ['Linlithgow', 'Government of India Act 1935']
              ]
            ),
            {
              examTip: 'Regulating Act 1773 = first British control. 1858 Act = Crown rule after 1857. Morley-Minto 1909 = separate Muslim electorates. 1919 = Dyarchy. 1935 = provincial autonomy. 1947 = Independence Act.',
              quickRevision: [
                'Regulating Act 1773: first parliamentary control of Company.',
                'Pitt\'s India Act 1784: dual control system.',
                'Charter Act 1833: GG of India title created.',
                'Government of India Act 1858: Crown rule begins.',
                'Indian Councils Act 1909: Morley-Minto; separate electorates.',
                'Government of India Act 1919: Montagu-Chelmsford; dyarchy.',
                'Government of India Act 1935: provincial autonomy.',
                'Indian Independence Act 1947: two dominions created.'
              ],
              examAsk: 'Regulating Act 1773 provisions; 1858 Act significance; Morley-Minto reforms; Montagu-Chelmsford dyarchy; 1935 Act features; Independence Act 1947.'
            }
          )
        },
        {
          id: 'freedom-struggle-timeline',
          title: 'Freedom Struggle Timeline',
          content: T(
            'Freedom Struggle Timeline',
            'A year-by-year timeline of India\'s freedom struggle — the most important dates for exams.',
            H.h2('Complete Timeline') +
            tbl(
              ['Year', 'Event', 'Why It Matters'],
              [
                ['1600', 'English East India Company charter', 'British entry into India begins'],
                ['1757', 'Battle of Plassey', 'British control of Bengal begins'],
                ['1764', 'Battle of Buxar', 'Diwani rights over Bengal, Bihar, Orissa'],
                ['1857', 'Revolt of 1857', 'First major uprising; Company rule ends'],
                ['1858', 'Queen\'s Proclamation / Govt of India Act 1858', 'Crown rule begins'],
                ['1885', 'Indian National Congress founded', 'Political platform for freedom struggle'],
                ['1905', 'Partition of Bengal', 'Swadeshi Movement; Extremism rises'],
                ['1906', 'Muslim League founded at Dacca', 'Separate Muslim political platform'],
                ['1907', 'Surat Split of INC', 'Moderates vs Extremists divide'],
                ['1909', 'Morley-Minto Reforms', 'Separate electorates for Muslims'],
                ['1911', 'Annulment of Bengal Partition', 'Capital shifted from Calcutta to Delhi'],
                ['1916', 'Lucknow Pact; Home Rule Leagues', 'Hindu-Muslim unity; Home Rule demand'],
                ['1917', 'Champaran Satyagraha', 'Gandhi\'s first satyagraha in India'],
                ['1919', 'Rowlatt Act; Jallianwala Bagh massacre', 'Massive anger; NCM launched'],
                ['1920', 'Non-Cooperation Movement begins', 'Gandhi\'s first mass movement'],
                ['1922', 'Chauri Chaura; NCM withdrawn', 'Gandhi stopped movement due to violence'],
                ['1928', 'Simon Commission boycott; Nehru Report', 'Lala Lajpat Rai died in lathi charge'],
                ['1929', 'Lahore Session — Poorna Swaraj', 'Complete Independence as goal; 26 Jan as Independence Day'],
                ['1930', 'Dandi March (Salt Satyagraha)', 'Civil Disobedience Movement begins'],
                ['1931', 'Gandhi-Irwin Pact; Bhagat Singh hanged (23 March)', 'Civil Disobedience suspended'],
                ['1932', 'Poona Pact (Gandhi-Ambedkar)', 'Reserved seats for SCs in joint electorates'],
                ['1935', 'Government of India Act', 'Provincial autonomy; framework for 1950 Constitution'],
                ['1942', 'Cripps Mission; Quit India Movement', '"Do or Die" — mass upsurge suppressed'],
                ['1946', 'Cabinet Mission; Direct Action Day (16 Aug)', 'Interim Government; communal riots'],
                ['1947', 'Mountbatten Plan; Indian Independence Act', 'Partition; India free on 15 August 1947']
              ]
            ) +
            H.h2('Important Dates to Remember') +
            tbl(
              ['Date', 'Event'],
              [
                ['<strong>26 January 1930</strong>', 'First Independence Day observed (Poorna Swaraj); now Republic Day since 1950'],
                ['<strong>13 April 1919</strong>', 'Jallianwala Bagh massacre (Baisakhi day)'],
                ['<strong>12 March 1930</strong>', 'Dandi March started from Sabarmati Ashram'],
                ['<strong>8 August 1942</strong>', 'Quit India resolution passed at Gowalia Tank, Bombay'],
                ['<strong>23 March 1931</strong>', 'Bhagat Singh, Sukhdev, Rajguru hanged — Martyrs\' Day'],
                ['<strong>15 August 1947</strong>', 'India became independent'],
                ['<strong>26 January 1950</strong>', 'India became a Republic; Constitution came into force']
              ]
            ) +
            H.h2('Phases of Freedom Struggle') +
            tbl(
              ['Phase', 'Period', 'Leaders', 'Methods'],
              [
                ['Moderate Phase', '1885–1905', 'Naoroji, Gokhale, Banerjee', 'Petitions, constitutional agitation'],
                ['Extremist Phase', '1905–1919', 'Tilak, Lajpat Rai, Pal', 'Swadeshi, Boycott, National Education'],
                ['Gandhian Phase', '1919–1947', 'Gandhi, Nehru, Patel, Azad', 'Satyagraha, Non-violence, Mass movements'],
                ['Revolutionary Phase', '1905–1934', 'Bhagat Singh, Azad, Surya Sen', 'Armed struggle, conspiracies']
              ]
            ),
            {
              examTip: 'Memorise: 1757 Plassey, 1857 Revolt, 1885 INC, 1905 Bengal Partition, 1919 Jallianwala, 1930 Dandi, 1942 Quit India, 1947 Independence. 26 Jan = Poorna Swaraj 1930, Republic 1950.',
              quickRevision: [
                '1757 Plassey → British rule begins.',
                '1857 Revolt → 1858 Crown rule.',
                '1885 INC founded → political struggle starts.',
                '1905 Bengal Partition → Swadeshi Movement.',
                '1919 Jallianwala Bagh → Non-Cooperation 1920.',
                '1930 Dandi March → Civil Disobedience.',
                '1942 Quit India → "Do or Die".',
                '1947 Independence → 15 August; Partition.'
              ],
              examAsk: 'Chronological order of major events; year of Plassey/Revolt/INC/Dandi/Quit India; significance of 26 January; phases of freedom struggle with leaders.'
            }
          )
        }
      ]
    }
  ]
};
})();
