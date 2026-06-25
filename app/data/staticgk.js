/* Static GK — General Awareness Notes */
(function() {
const H = window.GA_HELPERS;
const T = (...a) => H.topic(...a);
const tbl = H.table;
const RL = window.GA_RAILWAY_LISTS;

window.GA_DATA = window.GA_DATA || {};
window.GA_DATA.staticgk = {
  id: 'staticgk',
  name: 'Static GK',
  color: '#dc143c',
  icon: '📋',
  chapters: [
    {
      id: 'environment-biodiversity',
      name: 'Environment & Biodiversity',
      topics: [
        {
          id: 'national-parks-gk',
          title: 'National Parks in India',
          content: T('National Parks in India',
            'Special protected forest areas where nature is kept safe. Hunting, tree cutting, and building are not allowed inside.',
            H.h2('Major National Parks') + tbl(['National Park', 'State/UT', 'Famous For'], [
              ['Jim Corbett National Park', 'Uttarakhand', 'First national park of India (1936); Bengal tigers'],
              ['Kaziranga National Park', 'Assam', 'One-horned rhinoceros; UNESCO World Heritage Site'],
              ['Ranthambore National Park', 'Rajasthan', 'Tigers; old Ranthambore Fort inside park'],
              ['Gir National Park', 'Gujarat', 'Only home of Asiatic lions in the wild'],
              ['Sundarbans National Park', 'West Bengal', 'Royal Bengal tigers; largest mangrove forest'],
              ['Kanha National Park', 'Madhya Pradesh', 'Tigers; inspired the book "Jungle Book"'],
              ['Bandipur National Park', 'Karnataka', 'Tigers and elephants; part of Nilgiri Biosphere'],
              ['Periyar National Park', 'Kerala', 'Elephants; lake inside the park'],
              ['Hemis National Park', 'Ladakh', 'Highest national park in India; snow leopards'],
              ['Great Himalayan National Park', 'Himachal Pradesh', 'UNESCO World Heritage; alpine animals'],
              ['Keoladeo National Park', 'Rajasthan', 'Bird sanctuary; UNESCO site; migratory birds'],
              ['Valley of Flowers National Park', 'Uttarakhand', 'Alpine flowers; UNESCO site'],
              ['Manas National Park', 'Assam', 'Tiger, rhino, elephant; UNESCO site'],
              ['Nagarhole National Park', 'Karnataka', 'Tigers; part of Nilgiri reserve'],
              ['Bandhavgarh National Park', 'Madhya Pradesh', 'High tiger density']
            ]) + H.p('India has 106+ national parks. They are declared under the Wildlife Protection Act, 1972.'),
            { examTip: 'Jim Corbett = first national park. Gir = only Asiatic lions. Kaziranga = one-horned rhino.',
              quickRevision: ['Jim Corbett (1936) — first national park', 'Gir — only wild Asiatic lions', 'Kaziranga — one-horned rhino', 'Sundarbans — mangroves + tigers', 'Hemis — highest national park'],
              examAsk: 'Match national parks with states or famous animals (e.g., Kaziranga–rhino, Gir–lion).' })
        },
        {
          id: 'wildlife-sanctuaries-gk',
          title: 'Wildlife Sanctuaries in India',
          content: T('Wildlife Sanctuaries in India',
            'Protected areas where animals and plants are safe, but some human activity near the area may be allowed. Less strict than national parks.',
            H.h2('Important Wildlife Sanctuaries') + tbl(['Sanctuary', 'State', 'Famous For'], [
              ['Bharatpur Bird Sanctuary (Keoladeo)', 'Rajasthan', 'Migratory birds; now also a national park'],
              ['Sultanpur Bird Sanctuary', 'Haryana', 'Bird watching near Delhi'],
              ['Chilika Lake Sanctuary', 'Odisha', 'Largest coastal lagoon; dolphins and birds'],
              ['Nal Sarovar Bird Sanctuary', 'Gujarat', 'Flamingos and water birds'],
              ['Bhagwan Mahavir Sanctuary', 'Goa', 'Leopards and birds in Western Ghats'],
              ['Dandeli Wildlife Sanctuary', 'Karnataka', 'Black panthers and hornbills'],
              ['Parambikulam Sanctuary', 'Kerala', 'Elephants and teak forests'],
              ['Abohar Wildlife Sanctuary', 'Punjab', 'Blackbuck (Indian antelope)'],
              ['Nandankanan Zoological Park', 'Odisha', 'White tigers; zoo-cum-sanctuary'],
              ['Kutch Desert Wildlife Sanctuary', 'Gujarat', 'Flamingos in Rann of Kutch'],
              ['Mudumalai Sanctuary', 'Tamil Nadu', 'Elephants; part of Nilgiri landscape']
            ]) + H.p('India has 500+ wildlife sanctuaries. They protect animals without stopping all human use of nearby land.'),
            { examTip: 'National Park = strictest protection. Sanctuary = slightly less strict. Both come under Wildlife Protection Act.',
              quickRevision: ['Sanctuary = animals protected, less strict than parks', 'Chilika = largest coastal lagoon in India', 'Abohar = blackbuck sanctuary in Punjab', 'Keoladeo Bharatpur = famous for birds'],
              examAsk: 'Difference between national park and wildlife sanctuary; match sanctuary with state or animal.' })
        },
        {
          id: 'biosphere-reserves-gk',
          title: 'Biosphere Reserves in India',
          content: T('Biosphere Reserves in India',
            'Large areas where nature, local people, and research work together. UNESCO may also recognise them under the "Man and Biosphere" programme.',
            H.h2('All 18 Biosphere Reserves of India') + RL.biosphere +
            H.p('India has <strong>18 biosphere reserves</strong>. Each has three zones: <strong>Core</strong> (fully protected), <strong>Buffer</strong> (limited use), and <strong>Transition</strong> (human activity allowed). 13 are UNESCO Man and Biosphere sites.'),
            { examTip: 'Nilgiri = first (1986). Missing from old list: Manas (Assam), Great Rann of Kutch (Gujarat). All 18 names + state = Railway favourite.',
              quickRevision: ['Nilgiri — first biosphere reserve (1986)', '18 biosphere reserves total', 'Manas & Great Rann of Kutch — know these two', 'Three zones: Core, Buffer, Transition', '13 UNESCO Man and Biosphere sites'],
              examAsk: 'First biosphere reserve; total number (18); match reserve with state; Manas and Great Rann of Kutch location.' })
        },
        {
          id: 'ramsar-sites-gk',
          title: 'Ramsar Sites (Wetlands) in India',
          content: T('Ramsar Sites (Wetlands) in India',
            'Wetlands (swamps, lakes, marshes) that are internationally important for birds and water life. Named after Ramsar city in Iran where the treaty was signed.',
            H.h2('All 100 Ramsar Sites in India (Complete List)') + RL.ramsar +
            H.p('India has <strong>100 Ramsar sites</strong> (as of June 2026) — 3rd highest in the world. <strong>Ramsar Convention</strong> = international treaty for wetland protection (1971, Ramsar city in Iran). India joined in <strong>1981</strong>. First two sites: <strong>Chilika Lake</strong> (Odisha) and <strong>Keoladeo</strong> (Rajasthan). Latest: <strong>Jai Prakash Narayan Bird Sanctuary (Surha Tal)</strong>, Uttar Pradesh — India\'s 100th site. Tamil Nadu has the most Ramsar sites (20).'),
            { examTip: 'Chilika = largest coastal lagoon. Sambhar = largest inland salt lake. Loktak = floating phumdis + Keibul Lamjao (only floating national park). Sundarbans Wetland = largest Ramsar site in India (4,23,000 ha). Tamil Nadu = most sites (20).',
              memoryTrick: 'First two Ramsar: Chilika + Keoladeo (1981). 100th = Surha Tal UP (2026). Lonar = meteorite crater lake Maharashtra.',
              quickRevision: ['100 Ramsar sites in India (2026)', 'Ramsar Convention — 1971, Iran; India joined 1981', 'First: Chilika + Keoladeo (1981)', 'Chilika — largest coastal lagoon', 'Sambhar — largest inland salt lake', 'Loktak — phumdis, Manipur', 'Tamil Nadu — most Ramsar sites'],
              examAsk: 'Total Ramsar sites in India; first Ramsar sites; Chilika/Sambhar/Loktak features; state with most Ramsar sites.' })
        },
        {
          id: 'tiger-reserves-gk',
          title: 'Tiger Reserves in India',
          content: T('Tiger Reserves in India',
            'Forests specially protected for Bengal tigers under Project Tiger. India has the largest number of wild tigers in the world.',
            H.h2('Major Tiger Reserves') + tbl(['Tiger Reserve', 'State', 'Note'], [
              ['Jim Corbett', 'Uttarakhand', 'First tiger reserve (1973)'],
              ['Bandipur', 'Karnataka', 'Part of Nilgiri landscape'],
              ['Ranthambore', 'Rajasthan', 'Famous for tiger tourism'],
              ['Kanha', 'Madhya Pradesh', 'Barasingha (swamp deer) also found'],
              ['Sundarbans', 'West Bengal', 'Only mangrove tiger reserve'],
              ['Kaziranga', 'Assam', 'Also a rhino park; tigers present'],
              ['Pench', 'Madhya Pradesh & Maharashtra', 'Spreads across two states'],
              ['Tadoba-Andhari', 'Maharashtra', 'Largest tiger reserve in Maharashtra'],
              ['Sariska', 'Rajasthan', 'Tigers reintroduced after local extinction'],
              ['Periyar', 'Kerala', 'Tigers in Western Ghats'],
              ['Manas', 'Assam', 'UNESCO site; eastern tiger population'],
              ['Nagarjunsagar-Srisailam', 'Andhra Pradesh & Telangana', 'Largest tiger reserve by area'],
              ['Mudumalai', 'Tamil Nadu', 'Nilgiri biosphere area'],
              ['Bandhavgarh', 'Madhya Pradesh', 'High tiger sighting rate'],
              ['Pakke Tiger Reserve', 'Arunachal Pradesh', 'Hornbills and tigers in Northeast']
            ]) + H.p('Project Tiger started in 1973. National Tiger Conservation Authority (NTCA) manages tiger reserves today. India has 54 tiger reserves.'),
            { examTip: 'Jim Corbett = first tiger reserve (1973). Sundarbans = only mangrove tiger habitat. India has about 70% of world\'s wild tigers.',
              quickRevision: ['Project Tiger — 1973', 'Jim Corbett — first tiger reserve', '54 tiger reserves in India', 'NTCA manages tiger conservation', 'Sundarbans — mangrove tigers'],
              examAsk: 'First tiger reserve; Project Tiger year; match tiger reserve with state; largest tiger population country.' })
        },
        {
          id: 'biodiversity-hotspots',
          title: 'Biodiversity Hotspots in India',
          content: T('Biodiversity Hotspots in India',
            'Places on Earth with very rich variety of plants and animals, but also facing serious threat from human activity. India has four global hotspots.',
            H.h2('Biodiversity Hotspots in India') + tbl(['Hotspot', 'Region', 'Key Species / Feature'], [
              ['Western Ghats', 'Kerala to Gujarat (mountain range)', 'Elephants, lion-tailed macaque, many endemic plants'],
              ['Eastern Himalayas', 'Arunachal, Sikkim, Darjeeling area', 'Red panda, rhino, orchids'],
              ['Indo-Burma', 'NE India (Assam, Manipur, Nagaland etc.)', 'Hoolock gibbon, hornbills, rich forests'],
              ['Sundaland (Nicobar)', 'Andaman & Nicobar Islands', 'Coral reefs, marine life, island species']
            ]) + H.p('A region needs 1,500 endemic plant species AND must have lost 70% or more of original habitat to be called a global hotspot.'),
            { examTip: 'Four hotspots in India: Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland (Nicobar). Western Ghats is asked most in exams.',
              quickRevision: ['4 hotspots in India', 'Western Ghats — most famous', 'Eastern Himalayas — red panda area', 'Indo-Burma — Northeast India', 'Hotspot = rich species + under threat'],
              examAsk: 'Name biodiversity hotspots in India; Western Ghats location; why an area is called a hotspot.' })
        },
        {
          id: 'environmental-laws',
          title: 'Environmental Laws of India',
          content: T('Environmental Laws of India',
            'Rules made by the government to protect air, water, forests, and wildlife from pollution and damage.',
            H.h2('Major Environmental Laws') + tbl(['Law / Act', 'Year', 'What It Protects'], [
              ['Wildlife Protection Act', '1972', 'Wild animals, birds, and plants; national parks & sanctuaries'],
              ['Water (Prevention & Control of Pollution) Act', '1974', 'Rivers, lakes, and water bodies from pollution'],
              ['Air (Prevention & Control of Pollution) Act', '1981', 'Air quality; controls smoke and factory emissions'],
              ['Environment Protection Act', '1986', 'Overall environment; gives power to set standards'],
              ['Forest Conservation Act', '1980', 'Stops cutting forests without central government permission'],
              ['Biological Diversity Act', '2002', 'Protects traditional knowledge and biodiversity'],
              ['National Green Tribunal (NGT) Act', '2010', 'Special court for environment cases (NGT)'],
              ['Compensatory Afforestation Act', '2016', 'When forest is cut, new trees must be planted elsewhere']
            ]) + H.p('Ministry of Environment, Forest and Climate Change (MoEFCC) is the main ministry for these laws.'),
            { examTip: 'Wildlife Protection Act 1972 and Environment Protection Act 1986 are the most asked. NGT = National Green Tribunal for fast environment justice.',
              quickRevision: ['Wildlife Protection Act — 1972', 'Environment Protection Act — 1986', 'NGT — 2010 (environment court)', 'Forest Conservation Act — 1980', 'MoEFCC — main ministry'],
              examAsk: 'Year of Wildlife Protection Act; what NGT does; Forest Conservation Act purpose.' })
        },
        {
          id: 'international-environmental-conventions',
          title: 'International Environmental Conventions',
          content: T('International Environmental Conventions',
            'Agreements between many countries to protect the environment together. India is a member of most major ones.',
            H.h2('Important Conventions') + tbl(['Convention', 'Year / Place', 'Purpose'], [
              ['Rio Earth Summit (UNCED)', '1992, Rio de Janeiro', 'Agenda 21; biodiversity and climate action started here'],
              ['Convention on Biological Diversity (CBD)', '1992', 'Protect species and ecosystems worldwide'],
              ['UN Framework Convention on Climate Change (UNFCCC)', '1992', 'Fight global warming; leads to COP meetings'],
              ['Kyoto Protocol', '1997, Kyoto', 'Rich countries cut greenhouse gas emissions (under UNFCCC)'],
              ['Paris Agreement', '2015, Paris', 'All countries set targets to limit global warming to 1.5–2°C'],
              ['Montreal Protocol', '1987', 'Phase out chemicals that damage ozone layer (CFCs)'],
              ['Ramsar Convention', '1971', 'Protect wetlands worldwide'],
              ['CITES', '1973', 'Ban illegal trade of endangered animals and plants'],
              ['Stockholm Convention', '2001', 'Ban dangerous persistent organic pollutants (POPs)'],
              ['Basel Convention', '1989', 'Control movement of hazardous waste between countries']
            ]) + H.p('COP = Conference of Parties. India hosts and attends COP climate meetings regularly.'),
            { examTip: 'Paris Agreement = 2015 climate deal. Montreal Protocol = ozone layer. CITES = wildlife trade ban. Kyoto = 1997 emissions cuts.',
              quickRevision: ['Paris Agreement — 2015', 'Kyoto Protocol — 1997', 'Montreal Protocol — ozone layer', 'CITES — wildlife trade', 'Ramsar — wetlands'],
              examAsk: 'Paris vs Kyoto; Montreal Protocol purpose; CITES full form and aim; Rio Summit year.' })
        }
      ]
    }
    ,
    {
      id: 'art-culture',
      name: 'Art & Culture',
      topics: [
        {
          id: 'classical-dances',
          title: 'Classical Dances of India',
          content: T('Classical Dances of India',
            'Traditional dance forms that follow fixed rules of movement, music, and story-telling. India has 8 classical dances recognised by the Sangeet Natak Akademi.',
            H.h2('The Eight Classical Dances') + tbl(['Dance', 'State', 'Key Feature'], [
              ['Bharatanatyam', 'Tamil Nadu', 'Temple dance; fixed poses and footwork'],
              ['Kathak', 'North India (Uttar Pradesh)', 'Spinning movements; tells stories from epics'],
              ['Kathakali', 'Kerala', 'Colourful makeup and costumes; dance-drama'],
              ['Kuchipudi', 'Andhra Pradesh', 'Combines dance, speech, and drama'],
              ['Odissi', 'Odisha', 'Graceful tribhangi pose; temple origin'],
              ['Manipuri', 'Manipur', 'Soft, rounded movements; Ras Leela theme'],
              ['Mohiniyattam', 'Kerala', 'Graceful solo dance by women'],
              ['Sattriya', 'Assam', 'Monastery (sattra) origin; added as 8th classical dance in 2000']
            ]),
            { examTip: 'Sattriya was the last to be added (2000). Kathakali = Kerala with heavy makeup. Bharatanatyam = Tamil Nadu temple dance.',
              quickRevision: ['8 classical dances total', 'Bharatanatyam — Tamil Nadu', 'Kathakali — Kerala', 'Sattriya — Assam (added 2000)', 'Odissi — Odisha'],
              examAsk: 'Match classical dance with state; which is the 8th classical dance; Kathakali features.' })
        },
        {
          id: 'folk-dances',
          title: 'Folk Dances of India',
          content: T('Folk Dances of India',
            'Simple, joyful dances performed by common people during festivals and celebrations. Each region has its own style.',
            H.h2('Important Folk Dances') + tbl(['Folk Dance', 'State', 'Occasion / Feature'], [
              ['Bhangra', 'Punjab', 'Harvest festival (Baisakhi); energetic moves'],
              ['Garba', 'Gujarat', 'Navratri festival; circular dance with claps'],
              ['Ghoomar', 'Rajasthan', 'Women in colourful ghagra; spinning'],
              ['Bihu', 'Assam', 'Bihu harvest festival; fast steps'],
              ['Lavani', 'Maharashtra', 'Folk song and dance; dholki beat'],
              ['Yakshagana', 'Karnataka', 'Dance-drama with costumes and music'],
              ['Chhau', 'West Bengal, Jharkhand, Odisha', 'Mask dance; martial movements'],
              ['Rouf', 'Jammu & Kashmir', 'Women dance in lines during festivals'],
              ['Koli', 'Maharashtra', 'Fisherfolk dance; sea theme'],
              ['Kalbelia', 'Rajasthan', 'Snake charmer community dance; UNESCO listed'],
              ['Pulikali (Tiger Dance)', 'Kerala', 'Onam festival; painted as tigers'],
              ['Cheraw (Bamboo Dance)', 'Mizoram', 'Dancers move between bamboo sticks']
            ]),
            { examTip: 'Bhangra = Punjab harvest. Garba = Gujarat Navratri. Cheraw = Mizoram bamboo dance. Kalbelia = Rajasthan snake-charmer dance.',
              quickRevision: ['Bhangra — Punjab (harvest)', 'Garba — Gujarat (Navratri)', 'Bihu — Assam', 'Cheraw — Mizoram bamboo dance', 'Chhau — mask dance'],
              examAsk: 'Match folk dance with state; Garba linked to which festival; Cheraw bamboo dance state.' })
        },
        {
          id: 'festivals-india',
          title: 'Major Festivals of India',
          content: T('Major Festivals of India',
            'Special days of celebration linked to religion, harvest, or national pride. India is called the "land of festivals".',
            H.h2('Important Festivals') + tbl(['Festival', 'Religion / Type', 'When / Why Celebrated'], [
              ['Diwali', 'Hindu', 'Festival of lights; victory of good over evil'],
              ['Holi', 'Hindu', 'Festival of colours; spring celebration'],
              ['Eid-ul-Fitr', 'Islam', 'End of Ramadan fasting month'],
              ['Eid-ul-Adha', 'Islam', 'Festival of sacrifice (Bakrid)'],
              ['Christmas', 'Christian', 'Birth of Jesus Christ (25 December)'],
              ['Guru Nanak Jayanti', 'Sikh', 'Birth of Guru Nanak Dev Ji'],
              ['Baisakhi', 'Sikh / Harvest', 'Punjab harvest; Khalsa founded (1699)'],
              ['Onam', 'Kerala (Harvest)', 'King Mahabali returns; boat races and feasts'],
              ['Pongal', 'Tamil Nadu (Harvest)', '4-day harvest thanksgiving'],
              ['Navratri / Durga Puja', 'Hindu', '9 nights worshipping Goddess Durga'],
              ['Raksha Bandhan', 'Hindu', 'Brother-sister bond; sister ties rakhi'],
              ['Janmashtami', 'Hindu', 'Birth of Lord Krishna'],
              ['Mahavir Jayanti', 'Jain', 'Birth of Lord Mahavira'],
              ['Buddha Purnima', 'Buddhist', 'Birth, enlightenment, and death of Buddha'],
              ['Republic Day', 'National', '26 January — Constitution came into force (1950)'],
              ['Independence Day', 'National', '15 August — India became free (1947)'],
              ['Gandhi Jayanti', 'National', '2 October — Birth of Mahatma Gandhi']
            ]),
            { examTip: 'Republic Day = 26 Jan. Independence Day = 15 Aug. Gandhi Jayanti = 2 Oct (also World Non-Violence Day). Onam = Kerala harvest.',
              quickRevision: ['Diwali — festival of lights', 'Holi — festival of colours', 'Onam — Kerala harvest', 'Republic Day — 26 January', 'Independence Day — 15 August'],
              examAsk: 'National festival dates; Onam/Pongal/Baisakhi are harvest festivals of which states; Eid and Guru Nanak Jayanti.' })
        },
        {
          id: 'martial-arts-india',
          title: 'Martial Arts of India',
          content: T('Martial Arts of India',
            'Traditional fighting systems used for self-defence and fitness. Many come from ancient army training and temple traditions.',
            H.h2('Important Martial Arts') + tbl(['Martial Art', 'State / Region', 'Feature'], [
              ['Kalaripayattu', 'Kerala', 'One of oldest martial arts; uses swords and shields'],
              ['Silambam', 'Tamil Nadu', 'Fighting with a long bamboo stick'],
              ['Thang-Ta', 'Manipur', 'Sword and spear art of Manipur'],
              ['Gatka', 'Punjab', 'Sikh martial art with sticks and swords'],
              ['Mardani Khel', 'Maharashtra', 'Weapon-based art linked to Shivaji era'],
              ['Pari-khanda', 'Bihar', 'Sword and shield training'],
              ['Musti Yuddha', 'Varanasi (UP)', 'Unarmed fist fighting'],
              ['Sqay', 'Kashmir', 'Sword and shield combat'],
              ['Kuttu Varisai', 'Tamil Nadu', 'Empty-hand combat with animal-style moves'],
              ['Thoda', 'Himachal Pradesh', 'Archery sport from Kullu valley']
            ]),
            { examTip: 'Kalaripayattu = Kerala, often called oldest martial art. Silambam = Tamil Nadu stick fighting. Gatka = Punjab Sikh martial art.',
              quickRevision: ['Kalaripayattu — Kerala (oldest)', 'Silambam — Tamil Nadu (bamboo stick)', 'Gatka — Punjab (Sikh)', 'Thang-Ta — Manipur', 'Mardani Khel — Maharashtra'],
              examAsk: 'Match martial art with state; oldest martial art of India; Gatka is linked to which community.' })
        },
        {
          id: 'gi-tags',
          title: 'GI Tags of India',
          content: T('GI Tags of India',
            'GI (Geographical Indication) tag means a product is special because it comes from a particular place. Example: Darjeeling tea can only be called Darjeeling if grown in Darjeeling hills.',
            H.h2('Important GI Tag Products') + tbl(['Product', 'State', 'Type'], [
              ['Darjeeling Tea', 'West Bengal', 'Tea — first GI tag in India (2004)'],
              ['Basmati Rice', 'Multiple states', 'Rice variety — long grain aromatic rice'],
              ['Banarasi Silk Saree', 'Uttar Pradesh', 'Handwoven silk saree'],
              ['Pashmina Shawl', 'Jammu & Kashmir', 'Fine wool shawl from Changthangi goat'],
              ['Kanchipuram Silk', 'Tamil Nadu', 'Temple town silk sarees'],
              ['Mysore Silk', 'Karnataka', 'Royal silk weaving tradition'],
              ['Chanderi Saree', 'Madhya Pradesh', 'Lightweight cotton-silk saree'],
              ['Alphonso Mango', 'Maharashtra', 'King of mangoes from Ratnagiri region'],
              ['Nagpur Orange', 'Maharashtra', 'Famous citrus fruit'],
              ['Kashmir Saffron', 'Jammu & Kashmir', 'Most expensive spice; purple flowers'],
              ['Allahabad Surkha Guava', 'Uttar Pradesh', 'Famous guava variety'],
              ['Santiniketan Leather Goods', 'West Bengal', 'Handcrafted leather items'],
              ['Madhya Pradesh Sharbati Wheat', 'Madhya Pradesh', 'Premium wheat variety'],
              ['Coorg Orange', 'Karnataka', 'Hill-grown citrus fruit'],
              ['Muga Silk', 'Assam', 'Golden silk from Assam silkworm']
            ]) + H.p('India has 600+ GI tags. Darjeeling Tea got the first GI tag in India in 2004.'),
            { examTip: 'Darjeeling Tea = first GI tag (2004). Basmati Rice = famous GI product. Pashmina and Kashmir Saffron = J&K GI products.',
              quickRevision: ['GI = product linked to a place', 'Darjeeling Tea — first GI tag (2004)', 'Basmati Rice — aromatic rice', 'Pashmina — Kashmir wool', '600+ GI tags in India'],
              examAsk: 'First GI tag product; GI tag meaning; match product with state (Basmati, Pashmina, Alphonso).' })
        },
        {
          id: 'important-temples',
          title: 'Important Temples of India',
          content: T('Important Temples of India',
            'Famous temples are centres of worship, art, and history. Many are also UNESCO World Heritage Sites.',
            H.h2('Major Temples') + tbl(['Temple', 'State', 'Dedicated To / Feature'], [
              ['Brihadeeswarar Temple', 'Tamil Nadu (Thanjavur)', 'Lord Shiva; UNESCO site; big vimana (tower)'],
              ['Konark Sun Temple', 'Odisha', 'Sun God; chariot-shaped; UNESCO site'],
              ['Khajuraho Temples', 'Madhya Pradesh', 'Medieval temples; UNESCO site; stone carvings'],
              ['Meenakshi Temple', 'Tamil Nadu (Madurai)', 'Goddess Meenakshi and Lord Shiva'],
              ['Golden Temple (Harmandir Sahib)', 'Punjab (Amritsar)', 'Holiest Sikh shrine; gold-covered dome'],
              ['Kedarnath Temple', 'Uttarakhand', 'Lord Shiva; Himalayan pilgrimage (Char Dham)'],
              ['Badrinath Temple', 'Uttarakhand', 'Lord Vishnu; Char Dham yatra'],
              ['Jagannath Temple', 'Odisha (Puri)', 'Lord Jagannath; Rath Yatra festival'],
              ['Somnath Temple', 'Gujarat', 'One of 12 Jyotirlingas of Shiva'],
              ['Vaishno Devi', 'Jammu & Kashmir', 'Cave shrine of Goddess Vaishno Devi'],
              ['Tirupati Balaji', 'Andhra Pradesh', 'Lord Venkateswara; richest temple'],
              ['Kashi Vishwanath', 'Uttar Pradesh (Varanasi)', 'Lord Shiva; on Ganga ghats'],
              ['Ram Mandir', 'Uttar Pradesh (Ayodhya)', 'Lord Rama; recently consecrated (2024)'],
              ['Lingaraj Temple', 'Odisha (Bhubaneswar)', 'Lord Shiva; Kalinga architecture']
            ]),
            { examTip: 'Konark, Khajuraho, Brihadeeswarar = UNESCO temple sites. Golden Temple = Amritsar. Tirupati = Andhra Pradesh.',
              quickRevision: ['Konark — Sun Temple, Odisha', 'Khajuraho — MP, UNESCO', 'Golden Temple — Amritsar', 'Jagannath — Puri Rath Yatra', 'Tirupati — Lord Venkateswara'],
              examAsk: 'UNESCO temple sites; Golden Temple location; Jagannath Rath Yatra city; Char Dham temples.' })
        },
        {
          id: 'unesco-heritage-sites',
          title: 'UNESCO World Heritage Sites in India',
          content: T('UNESCO World Heritage Sites in India',
            'Places in India that UNESCO says are very important for the whole world — because of history, culture, or nature. India has <strong>44 UNESCO World Heritage Sites</strong> (36 cultural, 7 natural, 1 mixed).',
            H.h2('All 44 UNESCO World Heritage Sites — Complete List') + RL.unesco +
            H.p('👉 Simply put: India ranks <strong>6th in the world</strong> for UNESCO sites. First four inscribed in <strong>1983</strong>: Ajanta, Ellora, Agra Fort, Taj Mahal. Latest (2025): <strong>Maratha Military Landscapes</strong>.'),
            { examTip: 'First four UNESCO sites (1983): Ajanta, Ellora, Agra Fort, Taj Mahal. Only mixed site: Khangchendzonga (Sikkim). Latest: Maratha Military Landscapes (2025). Moidams Assam = first NE cultural site (2024).',
              quickRevision: ['44 UNESCO sites in India', '36 cultural + 7 natural + 1 mixed', 'First four — 1983: Ajanta, Ellora, Agra Fort, Taj Mahal', 'Khangchendzonga — only mixed site', 'Maratha Military Landscapes — latest (2025)', 'Moidams (Assam) — first NE cultural site'],
              examAsk: 'Total UNESCO sites; first inscribed sites; mixed site name; latest UNESCO site; Hampi/Khajuraho state.' })
        },
        {
          id: 'painting-styles',
          title: 'Painting Styles of India',
          content: T('Painting Styles of India',
            'Different regions of India have their own traditional painting styles using special colours, themes, and techniques.',
            H.h2('Major Painting Styles') + tbl(['Painting Style', 'State / Region', 'Feature'], [
              ['Madhubani (Mithila)', 'Bihar', 'Bright colours; no gap in painting; folk themes'],
              ['Warli', 'Maharashtra', 'White drawings on mud walls; geometric shapes'],
              ['Pattachitra', 'Odisha & West Bengal', 'Cloth-based scroll paintings; mythological stories'],
              ['Miniature Painting', 'Rajasthan & Mughal courts', 'Very small detailed paintings on paper'],
              ['Tanjore Painting', 'Tamil Nadu', 'Gold foil work; gods and goddesses on wood'],
              ['Kalamkari', 'Andhra Pradesh', 'Hand-painted or block-printed cloth art'],
              ['Phad', 'Rajasthan', 'Long scroll paintings of folk heroes (Pabuji, Devnarayan)'],
              ['Gond', 'Madhya Pradesh', 'Tribal dot-and-line art; nature themes'],
              ['Kangra', 'Himachal Pradesh', 'Pahari miniature style; Radha-Krishna themes'],
              ['Kerala Mural', 'Kerala', 'Temple wall paintings; natural colours'],
              ['Rajasthani Miniature', 'Rajasthan', 'Schools: Mewar, Marwar, Kishangarh'],
              ['Cheriyal Scroll', 'Telangana', 'Narrative scroll paintings by Nakashi artists']
            ]),
            { examTip: 'Madhubani = Bihar (also called Mithila painting). Warli = Maharashtra tribal art. Tanjore = Tamil Nadu gold paintings.',
              quickRevision: ['Madhubani — Bihar', 'Warli — Maharashtra', 'Pattachitra — Odisha', 'Tanjore — Tamil Nadu (gold foil)', 'Kalamkari — Andhra Pradesh'],
              examAsk: 'Match painting style with state; Madhubani and Warli features; Tanjore painting speciality.' })
        },
        {
          id: 'hindustani-carnatic-music',
          title: 'Hindustani & Carnatic Music',
          content: T('Hindustani & Carnatic Music',
            'India has two main classical music systems. Hindustani is popular in North India. Carnatic is popular in South India. Both use ragas (melody patterns) and talas (rhythm).',
            H.h2('Comparison') + tbl(['Feature', 'Hindustani Music', 'Carnatic Music'], [
              ['Region', 'North, Central, East, West India', 'South India (Tamil Nadu, Karnataka, AP, Kerala)'],
              ['Main instruments', 'Sitar, sarod, tabla, bansuri', 'Veena, mridangam, ghatam, violin'],
              ['Language of songs', 'Hindi, Urdu, Braj, Punjabi', 'Mostly Telugu, Tamil, Kannada, Sanskrit'],
              ['Famous exponents', 'Bismillah Khan (shehnai), Ravi Shankar (sitar)', 'M.S. Subbulakshmi, L. Subramaniam'],
              ['Gharana system', 'Yes — schools like Kirana, Gwalior, Agra', 'No gharana system; follows composer-tradition (Trinity)'],
              ['Improvisation', 'More free improvisation (alap, taan)', 'More structured compositions (kriti, varnam)']
            ]) + H.h2('Famous Musicians') + tbl(['Musician', 'Field', 'Note'], [
              ['Tansen', 'Hindustani (Mughal court)', 'One of nine gems of Akbar\'s court'],
              ['Tyagaraja, Muthuswami Dikshitar, Syama Sastri', 'Carnatic', 'Trinity of Carnatic music'],
              ['Ustad Bismillah Khan', 'Shehnai (Hindustani)', 'Bharat Ratna; played at Red Fort on Independence Day'],
              ['Pandit Ravi Shankar', 'Sitar', 'Took Indian music to the world'],
              ['M.S. Subbulakshmi', 'Carnatic vocal', 'First musician Bharat Ratna (1998)']
            ]),
            { examTip: 'Hindustani = North India. Carnatic = South India. Tansen = Akbar\'s court. Carnatic Trinity = Tyagaraja, Dikshitar, Syama Sastri.',
              quickRevision: ['Two systems: Hindustani (North) & Carnatic (South)', 'Tansen — Akbar\'s court musician', 'Carnatic Trinity — Tyagaraja, Dikshitar, Syama Sastri', 'Bismillah Khan — shehnai maestro', 'Raga = melody, Tala = rhythm'],
              examAsk: 'Hindustani vs Carnatic difference; Tansen and Akbar; Carnatic Trinity names; Bismillah Khan instrument.' })
        }
      ]
    },
    {
      id: 'water-bodies',
      name: 'Water Bodies',
      topics: [
        {
          id: 'dams-gk',
          title: 'Important Dams in India',
          content: T('Important Dams in India',
            'A dam is a wall built across a river to store water for drinking, farming, and making electricity (hydropower).',
            H.h2('Major Dams') + tbl(['Dam', 'River', 'State', 'Feature'], [
              ['Tehri Dam', 'Bhagirathi', 'Uttarakhand', 'Highest dam in India'],
              ['Bhakra Nangal Dam', 'Sutlej', 'Himachal Pradesh / Punjab', 'One of largest multipurpose dams'],
              ['Hirakud Dam', 'Mahanadi', 'Odisha', 'Longest dam in India'],
              ['Nagarjuna Sagar Dam', 'Krishna', 'Telangana / Andhra Pradesh', 'One of largest masonry dams'],
              ['Sardar Sarovar Dam', 'Narmada', 'Gujarat', 'On Narmada river; Narmada Bachao Andolan linked'],
              ['Indira Sagar Dam', 'Narmada', 'Madhya Pradesh', 'Large reservoir on Narmada'],
              ['Krishna Raja Sagar (KRS)', 'Kaveri', 'Karnataka', 'Near Mysuru; Brindavan Gardens nearby'],
              ['Mettur Dam', 'Kaveri', 'Tamil Nadu', 'Important dam in Tamil Nadu'],
              ['Mullaperiyar Dam', 'Periyar', 'Kerala / Tamil Nadu', 'Inter-state dam; old masonry dam'],
              ['Idukki Arch Dam', 'Periyar', 'Kerala', 'Asia\'s first arch dam'],
              ['Farakka Barrage', 'Ganga', 'West Bengal', 'Diversion of Ganga water to Hooghly'],
              ['Rihand Dam (Govind Ballabh Pant Sagar)', 'Rihand', 'Uttar Pradesh', 'Largest reservoir by area in India'],
              ['Koyna Dam', 'Koyna', 'Maharashtra', 'Major hydropower dam in Western Ghats'],
              ['Ukai Dam', 'Tapi', 'Gujarat', 'Largest reservoir in Gujarat']
            ]),
            { examTip: 'Tehri = highest dam. Hirakud = longest dam. Bhakra Nangal = Sutlej river. Sardar Sarovar = Narmada.',
              quickRevision: ['Tehri — highest dam (Bhagirathi)', 'Hirakud — longest dam (Mahanadi)', 'Bhakra Nangal — Sutlej', 'Sardar Sarovar — Narmada', 'Idukki — arch dam, Kerala'],
              examAsk: 'Highest and longest dam; dam-river matching; Sardar Sarovar on which river.' })
        },
        {
          id: 'waterfalls-india',
          title: 'Waterfalls in India',
          content: T('Waterfalls in India',
            'Places where a river falls from a height, creating a beautiful natural sight. Many are popular tourist spots.',
            H.h2('Famous Waterfalls') + tbl(['Waterfall', 'River', 'State', 'Height / Feature'], [
              ['Kunchikal Falls', 'Varahi', 'Karnataka', 'Highest waterfall in India (455 m)'],
              ['Nohkalikai Falls', 'Rain-fed', 'Meghalaya', 'Tallest plunge waterfall in India (340 m)'],
              ['Jog Falls', 'Sharavathi', 'Karnataka', 'Second highest plunge; four cascades (Raja, Rani, Roarer, Rocket)'],
              ['Dudhsagar Falls', 'Mandovi', 'Goa / Karnataka border', 'Sea of Milk — 4-tiered falls on railway route'],
              ['Athirapally Falls', 'Chalakudy', 'Kerala', 'Called "Niagara of India"'],
              ['Hogenakkal Falls', 'Kaveri', 'Tamil Nadu', 'Smoky rocks — coracle boat rides'],
              ['Chitrakote Falls', 'Indravati', 'Chhattisgarh', 'Called "Niagara of India" (widest)'],
              ['Shivanasamudra Falls', 'Kaveri', 'Karnataka', 'Asia\'s first hydroelectric station (1902) nearby'],
              ['Courtallam Falls', 'Chittar', 'Tamil Nadu', 'Popular health/tourist falls'],
              ['Bhagsu Falls', 'Stream near Dharamshala', 'Himachal Pradesh', 'Near McLeod Ganj'],
              ['Elephant Falls', 'Stream near Shillong', 'Meghalaya', 'Three-step waterfall'],
              ['Kempty Falls', 'Stream near Mussoorie', 'Uttarakhand', 'Popular hill-station waterfall']
            ]),
            { examTip: 'Kunchikal = highest waterfall. Nohkalikai = Meghalaya (tallest plunge). Jog Falls = Karnataka on Sharavathi. Dudhsagar = Goa.',
              quickRevision: ['Kunchikal — highest (Karnataka)', 'Nohkalikai — Meghalaya (340 m)', 'Jog Falls — Sharavathi, Karnataka', 'Dudhsagar — Mandovi, Goa', 'Athirapally — Kerala'],
              examAsk: 'Highest waterfall; Jog Falls river; Dudhsagar location; Nohkalikai state.' })
        },
        {
          id: 'river-side-cities',
          title: 'Cities on River Banks',
          content: T('Cities on River Banks',
            'Many important Indian cities grew on the banks of rivers because rivers give water, transport, and trade routes.',
            H.h2('City–River Pairs') + tbl(['City', 'River', 'State'], [
              ['Delhi', 'Yamuna', 'Delhi'],
              ['Agra', 'Yamuna', 'Uttar Pradesh'],
              ['Allahabad (Prayagraj)', 'Ganga + Yamuna (+ Saraswati sangam)', 'Uttar Pradesh'],
              ['Varanasi', 'Ganga', 'Uttar Pradesh'],
              ['Patna', 'Ganga', 'Bihar'],
              ['Kolkata', 'Hooghly (Ganga distributary)', 'West Bengal'],
              ['Haridwar', 'Ganga', 'Uttarakhand'],
              ['Rishikesh', 'Ganga', 'Uttarakhand'],
              ['Guwahati', 'Brahmaputra', 'Assam'],
              ['Dibrugarh', 'Brahmaputra', 'Assam'],
              ['Ahmedabad', 'Sabarmati', 'Gujarat'],
              ['Surat', 'Tapi', 'Gujarat'],
              ['Nasik', 'Godavari', 'Maharashtra'],
              ['Pune', 'Mutha (Mula-Mutha)', 'Maharashtra'],
              ['Mumbai', 'Arabian Sea (coastal, not river)', 'Maharashtra'],
              ['Hyderabad', 'Musi', 'Telangana'],
              ['Chennai', 'Cooum (Adyar, Kosasthalaiyar nearby)', 'Tamil Nadu'],
              ['Madurai', 'Vaigai', 'Tamil Nadu'],
              ['Trichy (Tiruchirappalli)', 'Kaveri', 'Tamil Nadu'],
              ['Bangalore (Bengaluru)', 'No major river (tank city)', 'Karnataka'],
              ['Mysuru', 'Kaveri nearby', 'Karnataka'],
              ['Srinagar', 'Jhelum', 'Jammu & Kashmir'],
              ['Lucknow', 'Gomti', 'Uttar Pradesh'],
              ['Kanpur', 'Ganga', 'Uttar Pradesh'],
              ['Bhopal', 'Betwa (Upper Lake also famous)', 'Madhya Pradesh'],
              ['Jabalpur', 'Narmada', 'Madhya Pradesh'],
              ['Ujjain', 'Shipra', 'Madhya Pradesh'],
              ['Kota', 'Chambal', 'Rajasthan'],
              ['Jaipur', 'No major river (near Banas basin)', 'Rajasthan'],
              ['Cuttack', 'Mahanadi', 'Odisha'],
              ['Raipur', 'Mahanadi basin', 'Chhattisgarh']
            ]),
            { examTip: 'Prayagraj = Ganga + Yamuna sangam. Varanasi = Ganga. Guwahati = Brahmaputra. Ujjain = Shipra (Simhastha Kumbh).',
              quickRevision: ['Prayagraj — Ganga + Yamuna sangam', 'Varanasi — Ganga', 'Guwahati — Brahmaputra', 'Ujjain — Shipra', 'Kota — Chambal'],
              examAsk: 'Match city with river; sangam cities; which city is on Brahmaputra; Shipra river city.' })
        }
      ]
    }
    ,
    {
      id: 'international-organizations',
      name: 'International Organizations',
      topics: [
        {
          id: 'international-organizations',
          title: 'International Organizations',
          content: T('International Organizations',
            'Groups of countries that work together on peace, money, trade, health, and other world problems. India is a member of most major ones.',
            H.h2('Major International Organizations') + tbl(['Organization', 'Full Form / Type', 'Headquarters', 'Purpose'], [
              ['UN', 'United Nations', 'New York, USA', 'World peace, security, and cooperation (1945)'],
              ['IMF', 'International Monetary Fund', 'Washington D.C., USA', 'Helps countries with money problems and balance of payments'],
              ['World Bank', 'World Bank Group (IBRD + IDA)', 'Washington D.C., USA', 'Loans for development projects in poor countries'],
              ['WTO', 'World Trade Organization', 'Geneva, Switzerland', 'Rules for international trade between nations'],
              ['SAARC', 'South Asian Association for Regional Cooperation', 'Kathmandu, Nepal', 'Cooperation among 8 South Asian nations'],
              ['ASEAN', 'Association of Southeast Asian Nations', 'Jakarta, Indonesia', '10 Southeast Asian countries work together'],
              ['G20', 'Group of Twenty', 'No permanent HQ (rotating presidency)', '20 major economies discuss global economy (India hosted 2023)'],
              ['BRICS', 'Brazil, Russia, India, China, South Africa', 'Shanghai, China (New Development Bank HQ)', 'Emerging economies group; NDB for development loans'],
              ['NATO', 'North Atlantic Treaty Organization', 'Brussels, Belgium', 'Military alliance of Western countries (1949)'],
              ['SCO', 'Shanghai Cooperation Organisation', 'Beijing, China', 'Security and cooperation in Eurasia; India full member since 2017'],
              ['QUAD', 'Quadrilateral Security Dialogue', 'No formal HQ', 'India, USA, Japan, Australia — Indo-Pacific cooperation'],
              ['OPEC', 'Organization of Petroleum Exporting Countries', 'Vienna, Austria', 'Oil-producing countries control oil supply and prices'],
              ['INTERPOL', 'International Criminal Police Organization', 'Lyon, France', 'Helps countries catch international criminals'],
              ['ICC', 'International Cricket Council', 'Dubai, UAE', 'Governing body of world cricket'],
              ['ICJ', 'International Court of Justice', 'The Hague, Netherlands', 'UN\'s main court for disputes between countries'],
              ['IUCN', 'International Union for Conservation of Nature', 'Gland, Switzerland', 'Protects nature; publishes Red List of endangered species'],
              ['WHO', 'World Health Organization', 'Geneva, Switzerland', 'Global health; fights diseases (UN agency)'],
              ['UNESCO', 'United Nations Educational, Scientific and Cultural Organization', 'Paris, France', 'Education, science, culture; World Heritage Sites'],
              ['UNICEF', 'United Nations Children\'s Fund', 'New York, USA', 'Helps children worldwide with health and education'],
              ['FAO', 'Food and Agriculture Organization', 'Rome, Italy', 'Fights hunger; helps farmers (UN agency)'],
              ['ILO', 'International Labour Organization', 'Geneva, Switzerland', 'Workers\' rights and fair working conditions (UN agency)'],
              ['IAEA', 'International Atomic Energy Agency', 'Vienna, Austria', 'Peaceful use of nuclear energy; nuclear safety'],
              ['ADB', 'Asian Development Bank', 'Manila, Philippines', 'Development loans for Asian countries'],
              ['AIIB', 'Asian Infrastructure Investment Bank', 'Beijing, China', 'Infrastructure funding for Asia; India is founding member']
            ]) + H.h2('Quick Facts About Key Groups') + tbl(['Group', 'Members / Notes'], [
              ['UN', '193 member countries; India founding member (1945)'],
              ['SAARC', '8 members: India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Maldives, Afghanistan'],
              ['ASEAN', '10 members: Indonesia, Thailand, Singapore, Malaysia, Philippines, Vietnam, Myanmar, Cambodia, Laos, Brunei'],
              ['G20', '19 countries + European Union; India presidency in 2023'],
              ['BRICS', '5 members: Brazil, Russia, India, China, South Africa; expanded in 2024'],
              ['SCO', '9 members including India, China, Russia, Pakistan, Kazakhstan'],
              ['QUAD', '4 members: India, USA, Japan, Australia — not a treaty alliance']
            ]),
            { examTip: 'UN HQ = New York. WHO, WTO, ILO = Geneva. UNESCO = Paris. IMF & World Bank = Washington D.C. India hosted G20 in 2023.',
              quickRevision: ['UN — New York (1945)', 'IMF & World Bank — Washington D.C.', 'WHO & WTO — Geneva', 'UNESCO — Paris', 'SAARC — Kathmandu (8 members)', 'G20 — India presidency 2023'],
              examAsk: 'HQ of UN, WHO, IMF, UNESCO; SAARC members count; G20 presidency 2023; BRICS and QUAD members.' })
        }
      ]
    },
    {
      id: 'firsts-superlatives',
      name: 'Firsts & Superlatives',
      topics: [
        {
          id: 'firsts-india',
          title: 'First in India',
          content: T('First in India',
            'Important "first time" achievements in India — very common in government exams.',
            H.h2('India\'s Firsts') + tbl(['First', 'Person / Thing', 'Field'], [
              ['First President of India', 'Dr. Rajendra Prasad', '1950–1962'],
              ['First Prime Minister of India', 'Jawaharlal Nehru', '1947–1964'],
              ['First Vice President of India', 'Dr. S. Radhakrishnan', '1952–1962'],
              ['First Woman Prime Minister', 'Indira Gandhi', '1966'],
              ['First Woman President', 'Smt. Draupadi Murmu', '2022'],
              ['First Woman Governor', 'Sarojini Naidu (UP)', '1947'],
              ['First Woman IPS Officer', 'Kiran Bedi', '1972'],
              ['First Woman to climb Mount Everest', 'Bachendri Pal', '1984'],
              ['First Indian in Space', 'Rakesh Sharma', '1984 (Soyuz T-11)'],
              ['First Indian Nobel Prize winner', 'Rabindranath Tagore', 'Literature (1913)'],
              ['First Indian woman Nobel laureate', 'Mother Teresa', 'Peace (1979)'],
              ['First Bharat Ratna awardee', 'C. Rajagopalachari, Dr. Radhakrishnan, C.V. Raman (1954)', 'All three together'],
              ['First Indian to win Olympic individual gold', 'Abhinav Bindra', 'Shooting, Beijing 2008'],
              ['First Indian to win chess World Championship', 'Viswanathan Anand', '2000 (FIDE)'],
              ['First newspaper in India', 'Bengal Gazette (James Augustus Hicky)', '1780, Calcutta'],
              ['First railway in India', 'Mumbai to Thane', '1853'],
              ['First general election in India', '1951–52', 'After Constitution'],
              ['First talkie film in India', 'Alam Ara', '1931, Ardeshir Irani'],
              ['First nuclear test (India)', 'Smiling Buddha (Pokhran)', '1974'],
              ['First computer in India', 'HEC-2M', '1955, ISI Kolkata']
            ]),
            { examTip: 'Rakesh Sharma = first Indian in space. Abhinav Bindra = first individual Olympic gold. Draupadi Murmu = first tribal woman President.',
              quickRevision: ['Rajendra Prasad — first President', 'Nehru — first PM', 'Rakesh Sharma — first in space (1984)', 'Abhinav Bindra — first individual Olympic gold', 'Tagore — first Indian Nobel (1913)'],
              examAsk: 'First President/PM; first Indian in space; first Olympic gold; first Nobel Indian; first woman President.' })
        },
        {
          id: 'firsts-world',
          title: 'First in the World',
          content: T('First in the World',
            'World\'s first achievements and discoveries — asked in Static GK and general knowledge sections.',
            H.h2('World Firsts') + tbl(['First', 'Detail'], [
              ['First man on the Moon', 'Neil Armstrong (USA), 1969, Apollo 11'],
              ['First woman in space', 'Valentina Tereshkova (USSR), 1963'],
              ['First artificial satellite', 'Sputnik 1 (USSR), 1957'],
              ['First country to use paper money', 'China (Tang dynasty)'],
              ['First country to give women the right to vote', 'New Zealand (1893)'],
              ['First Nobel Prize winner', 'Wilhelm Röntgen (Physics, 1901)'],
              ['First Olympic Games (modern)', 'Athens, Greece, 1896'],
              ['First President of USA', 'George Washington, 1789'],
              ['First person to reach South Pole', 'Roald Amundsen (Norway), 1911'],
              ['First person to reach North Pole (disputed)', 'Robert Peary (USA claimed, 1909)'],
              ['First telephone', 'Alexander Graham Bell (1876)'],
              ['First light bulb (practical)', 'Thomas Edison (1879)'],
              ['First computer (modern electronic)', 'ENIAC (USA, 1946)'],
              ['First World Wide Web page', 'Tim Berners-Lee (1991)'],
              ['First country to legalize same-sex marriage', 'Netherlands (2001)'],
              ['First UNESCO World Heritage Site', 'Galápagos Islands (1978)'],
              ['First country to use postal stamps', 'Great Britain (Penny Black, 1840)'],
              ['First manned space station', 'Salyut 1 (USSR), 1971'],
              ['First test-tube baby', 'Louise Brown (UK), 1978'],
              ['First heart transplant', 'Dr. Christiaan Barnard (South Africa), 1967']
            ]),
            { examTip: 'Neil Armstrong = first on Moon (1969). Sputnik 1 = first satellite (1957). New Zealand = first women\'s vote (1893).',
              quickRevision: ['Neil Armstrong — first on Moon (1969)', 'Sputnik 1 — first satellite (1957)', 'Valentina Tereshkova — first woman in space', 'New Zealand — first women\'s vote (1893)', 'Tim Berners-Lee — World Wide Web'],
              examAsk: 'First man on Moon; first satellite; first woman in space; first modern Olympics year and place.' })
        },
        {
          id: 'superlatives-india',
          title: 'Superlatives of India',
          content: T('Superlatives of India',
            'The biggest, longest, highest, and largest things in India — "superlative" means the most or best of its kind.',
            H.h2('India\'s Superlatives') + tbl(['Superlative', 'Answer', 'Detail'], [
              ['Longest river in India', 'Ganga (Ganges)', '2,525 km; most sacred river'],
              ['Longest dam in India', 'Hirakud Dam', 'Odisha, on Mahanadi'],
              ['Highest dam in India', 'Tehri Dam', 'Uttarakhand, on Bhagirathi'],
              ['Highest peak in India', 'Kangchenjunga', 'Sikkim, 8,586 m (K2 is in PoK)'],
              ['Largest state by area', 'Rajasthan', '342,239 sq km'],
              ['Smallest state by area', 'Goa', '3,702 sq km'],
              ['Most populous state', 'Uttar Pradesh', 'Over 20 crore people'],
              ['Largest lake in India', 'Vembanad Lake', 'Kerala (longest lake too)'],
              ['Largest desert in India', 'Thar Desert (Great Indian Desert)', 'Rajasthan'],
              ['Longest coastline (state)', 'Gujarat', '1,600 km approx.'],
              ['Largest delta in India', 'Sundarbans Delta', 'Ganga-Brahmaputra'],
              ['Highest waterfall in India', 'Kunchikal Falls', 'Karnataka, 455 m'],
              ['Largest mosque in India', 'Taj-ul-Masajid', 'Bhopal, Madhya Pradesh'],
              ['Largest stadium in India', 'Narendra Modi Stadium', 'Ahmedabad, Gujarat (1,32,000 capacity)'],
              ['Busiest railway station', 'Howrah Junction', 'Kolkata, West Bengal'],
              ['Largest port in India', 'Jawaharlal Nehru Port (Nhava Sheva)', 'Maharashtra'],
              ['Oldest national park', 'Jim Corbett National Park', 'Uttarakhand, 1936'],
              ['Largest state by population (UT)', 'Delhi', 'Most populous UT']
            ]),
            { examTip: 'Ganga = longest river. Rajasthan = largest state. Goa = smallest state. Kangchenjunga = highest peak fully in India.',
              quickRevision: ['Ganga — longest river', 'Rajasthan — largest state', 'Goa — smallest state', 'Kangchenjunga — highest peak in India', 'Hirakud — longest dam', 'Tehri — highest dam'],
              examAsk: 'Longest river; largest/smallest state; highest peak; longest/highest dam; largest lake.' })
        },
        {
          id: 'superlatives-world',
          title: 'Superlatives of the World',
          content: T('Superlatives of the World',
            'The biggest, longest, and highest things on Earth — frequently asked in competitive exams.',
            H.h2('World Superlatives') + tbl(['Superlative', 'Answer', 'Location'], [
              ['Highest mountain in the world', 'Mount Everest', 'Nepal–China border, 8,849 m'],
              ['Longest river in the world', 'Nile River', 'Africa, 6,650 km (Amazon is largest by volume)'],
              ['Largest river by volume', 'Amazon River', 'South America'],
              ['Largest ocean', 'Pacific Ocean', 'Covers one-third of Earth'],
              ['Smallest ocean', 'Arctic Ocean', 'Around North Pole'],
              ['Largest desert in the world', 'Sahara Desert', 'North Africa (Antarctica is largest cold desert)'],
              ['Largest country by area', 'Russia', '17.1 million sq km'],
              ['Smallest country by area', 'Vatican City', '0.44 sq km, inside Rome, Italy'],
              ['Most populous country', 'India', 'Crossed China in 2023 (~1.4 billion)'],
              ['Largest continent', 'Asia', '30% of Earth\'s land area'],
              ['Smallest continent', 'Australia', 'Also called Oceania region'],
              ['Deepest ocean trench', 'Mariana Trench', 'Pacific Ocean, 11,034 m deep'],
              ['Largest lake in the world', 'Caspian Sea', 'Bordering 5 countries (technically a lake)'],
              ['Longest wall in the world', 'Great Wall of China', 'China, 21,196 km total'],
              ['Tallest building in the world', 'Burj Khalifa', 'Dubai, UAE, 828 m'],
              ['Largest democracy in the world', 'India', 'By population of voters'],
              ['Longest railway platform', 'Gorakhpur Junction', 'Uttar Pradesh, India — 1,366 m'],
              ['Busiest airport in the world', 'Hartsfield-Jackson Atlanta (USA)', 'By passenger traffic (varies yearly)']
            ]),
            { examTip: 'Everest = highest mountain. Nile = longest river. Russia = largest country. Vatican = smallest country. India = largest democracy.',
              quickRevision: ['Everest — highest mountain (8849 m)', 'Nile — longest river', 'Russia — largest country', 'Vatican City — smallest country', 'Pacific — largest ocean', 'India — largest democracy'],
              examAsk: 'Highest mountain; longest river; largest/smallest country; largest ocean; most populous country.' })
        }
      ]
    },
    {
      id: 'defense-space',
      name: 'Defense & Space',
      topics: [
        {
          id: 'military-exercises',
          title: 'Military Exercises of India',
          content: T('Military Exercises of India',
            'Practice drills where armies, navies, or air forces of two or more countries train together to improve skills and friendship.',
            H.h2('Important Military Exercises') + tbl(['Exercise', 'Countries', 'Type', 'Note'], [
              ['Yudh Abhyas', 'India + USA', 'Army', 'Alternating host each year'],
              ['Vajra Prahar', 'India + USA', 'Special Forces', 'Counter-terrorism training'],
              ['Hand-in-Hand', 'India + China', 'Army', 'Counter-terrorism (when held)'],
              ['Maitree', 'India + Thailand', 'Army', 'Joint training in jungle terrain'],
              ['Garuda Shakti', 'India + Indonesia', 'Army', 'Special forces exercise'],
              ['Nomadic Elephant', 'India + Mongolia', 'Army', 'Held in Mongolia/India alternately'],
              ['Dharma Guardian', 'India + Japan', 'Army', 'Counter-terrorism and urban warfare'],
              ['Indra', 'India + Russia', 'Tri-services (Army/Navy/Air)', 'Long-standing defence cooperation'],
              ['Surya Kiran', 'India + Nepal', 'Army', 'Regular bilateral exercise'],
              ['Sampriti', 'India + Bangladesh', 'Army', 'Enhance interoperability'],
              ['Shakti', 'India + France', 'Army', 'Counter-terrorism in mountains'],
              ['Malabar', 'India + USA + Japan + Australia', 'Naval', 'In Bay of Bengal / Indian Ocean'],
              ['Varuna', 'India + France', 'Naval', 'Anti-submarine and surface warfare'],
              ['AUSINDEX', 'India + Australia', 'Naval', 'Maritime exercise'],
              ['SLINEX', 'India + Sri Lanka', 'Naval', 'Naval cooperation in Indian Ocean'],
              ['Garuda', 'India + Singapore', 'Air Force', 'Air combat and transport drills'],
              ['Cope India', 'India + USA', 'Air Force', 'Air combat training'],
              ['Desert Knight', 'India + France + UAE', 'Air Force', 'Multi-nation air exercise']
            ]),
            { examTip: 'Malabar = naval (India-USA-Japan-Australia). Yudh Abhyas = India-USA army. Indra = India-Russia. Hand-in-Hand = India-China.',
              quickRevision: ['Malabar — naval (QUAD navies)', 'Yudh Abhyas — India + USA (army)', 'Indra — India + Russia', 'Varuna — India + France (naval)', 'Garuda — India + Singapore (air)'],
              examAsk: 'Match exercise with country; Malabar is which type; India-USA army exercise name.' })
        },
        {
          id: 'isro-missions',
          title: 'ISRO Missions',
          content: T('ISRO Missions',
            'ISRO (Indian Space Research Organisation) is India\'s space agency. It sends satellites and explores space at low cost.',
            H.h2('Major ISRO Missions') + tbl(['Mission', 'Year', 'Achievement'], [
              ['Aryabhata', '1975', 'First Indian satellite (launched by USSR)'],
              ['Rohini (RS-1)', '1980', 'First satellite launched by India (SLV-3)'],
              ['Chandrayaan-1', '2008', 'Found water molecules on Moon'],
              ['Chandrayaan-2', '2019', 'Orbiter succeeded; lander Vikram had hard landing'],
              ['Chandrayaan-3', '2023', 'India landed on Moon\'s south pole (Vikram lander + Pragyan rover)'],
              ['Mangalyaan (MOM)', '2014', 'First Asian nation to reach Mars orbit; cheapest Mars mission'],
              ['Aditya-L1', '2023', 'India\'s first solar observatory at L1 point'],
              ['Gaganyaan (planned)', 'Upcoming', 'India\'s first human spaceflight mission'],
              ['RISAT', 'Series', 'Radar imaging satellites for agriculture and defence'],
              ['NavIC (IRNSS)', '2018', 'India\'s own GPS-like navigation system'],
              ['Astrosat', '2015', 'India\'s first dedicated multi-wavelength space telescope'],
              ['GSAT series', 'Ongoing', 'Communication satellites for TV, internet, telephony'],
              ['PSLV', '1994 onwards', 'Workhorse rocket — launched Chandrayaan, Mangalyaan, 104 satellites at once (2017)'],
              ['GSLV', '2001 onwards', 'Heavier rocket for bigger satellites'],
              ['LVM3 (GSLV Mk III)', '2017', 'Launch vehicle for Chandrayaan-3; renamed SSLV\'s big brother']
            ]) + H.p('ISRO HQ = Bengaluru. Founder = Dr. Vikram Sarabhai. Current chairman changes; ISRO works under Department of Space.'),
            { examTip: 'Chandrayaan-3 (2023) = Moon south pole landing. Mangalyaan (2014) = Mars orbit. Aryabhata (1975) = first satellite.',
              quickRevision: ['Aryabhata — first satellite (1975)', 'Chandrayaan-3 — Moon south pole (2023)', 'Mangalyaan — Mars orbit (2014)', 'Aditya-L1 — Sun mission (2023)', 'NavIC — Indian GPS'],
              examAsk: 'Chandrayaan-3 achievement; Mangalyaan year; first Indian satellite; Aditya-L1 purpose.' })
        },
        {
          id: 'space-missions-world',
          title: 'Space Missions of the World',
          content: T('Space Missions of the World',
            'Important space missions from other countries and space agencies like NASA (USA), ESA (Europe), and Roscosmos (Russia).',
            H.h2('Major World Space Missions') + tbl(['Mission', 'Agency / Country', 'Year', 'Achievement'], [
              ['Sputnik 1', 'USSR (Roscosmos)', '1957', 'First artificial satellite'],
              ['Apollo 11', 'NASA (USA)', '1969', 'First humans on Moon (Neil Armstrong)'],
              ['Vostok 1', 'USSR', '1961', 'First human in space (Yuri Gagarin)'],
              ['Hubble Space Telescope', 'NASA + ESA', '1990', 'Most famous space telescope'],
              ['International Space Station (ISS)', 'NASA + Roscosmos + ESA + others', '1998', 'Largest space station; continuously occupied'],
              ['Voyager 1 & 2', 'NASA', '1977', 'Farthest human-made objects; interstellar space'],
              ['Curiosity / Perseverance', 'NASA', '2012 / 2021', 'Mars rovers searching for signs of life'],
              ['Shenzhou', 'China (CNSA)', '2003', 'China\'s first manned spaceflight (Yang Liwei)'],
              ['Chang\'e programme', 'China', '2007 onwards', 'Chinese lunar exploration; sample return'],
              ['Artemis programme', 'NASA', 'Ongoing', 'Return humans to Moon; first woman on Moon planned'],
              ['James Webb Space Telescope', 'NASA + ESA + CSA', '2021', 'Most powerful space telescope; sees early universe'],
              ['Gagarin / Vostok programme', 'USSR', '1960s', 'First manned space programme'],
              ['SpaceX Falcon / Starship', 'SpaceX (USA private)', '2010s', 'Reusable rockets; commercial space era'],
              ['Blue Origin / Virgin Galactic', 'Private (USA)', '2020s', 'Sub-orbital space tourism']
            ]),
            { examTip: 'Sputnik 1 = first satellite (1957). Yuri Gagarin = first man in space (1961). Apollo 11 = first Moon landing (1969). James Webb = 2021.',
              quickRevision: ['Sputnik 1 — first satellite (1957)', 'Yuri Gagarin — first in space (1961)', 'Apollo 11 — first Moon landing (1969)', 'ISS — international space station', 'James Webb Telescope — 2021'],
              examAsk: 'First satellite; first man in space; first Moon landing year; James Webb vs Hubble.' })
        },
        {
          id: 'nuclear-power-plants',
          title: 'Nuclear Power Plants in India',
          content: T('Nuclear Power Plants in India',
            'Plants that use uranium to produce electricity. Nuclear power gives clean energy but needs strict safety rules.',
            H.h2('Nuclear Power Plants in India') + tbl(['Plant', 'State', 'Note'], [
              ['Tarapur Atomic Power Station (TAPS)', 'Maharashtra', 'Oldest nuclear plant in India (1969)'],
              ['Rawatbhata (Rajasthan Atomic Power Station)', 'Rajasthan', 'Multiple units (RAPS 1–6)'],
              ['Madras Atomic Power Station (MAPS)', 'Tamil Nadu (Kalpakkam)', 'First indigenously built PHWR reactors'],
              ['Narora Atomic Power Station', 'Uttar Pradesh', 'On banks of Ganga'],
              ['Kakrapar Atomic Power Station', 'Gujarat', 'KAPS-3: first 700 MWe indigenous reactor (2023)'],
              ['Kaiga Generating Station', 'Karnataka', 'Kaiga-1 to Kaiga-4 units'],
              ['Kudankulam Nuclear Power Plant', 'Tamil Nadu', 'Built with Russian help; largest nuclear plant in India'],
              ['Prototype Fast Breeder Reactor (PFBR)', 'Tamil Nadu (Kalpakkam)', 'Under commissioning; uses plutonium fuel']
            ]) + H.p('NPCIL (Nuclear Power Corporation of India Ltd.) runs these plants. Department of Atomic Energy (DAE) oversees nuclear programme. BARC = research centre in Mumbai.'),
            { examTip: 'Tarapur = oldest (1969). Kudankulam = largest. Kakrapar = first indigenous 700 MW reactor (2023). Kalpakkam = MAPS + PFBR.',
              quickRevision: ['Tarapur — oldest (Maharashtra, 1969)', 'Kudankulam — largest (Tamil Nadu)', 'Kakrapar — indigenous 700 MW (Gujarat)', 'NPCIL — operator', 'DAE — overseeing department'],
              examAsk: 'Oldest nuclear plant; largest nuclear plant; Kakrapar special feature; NPCIL full form.' })
        },
        {
          id: 'military-awards',
          title: 'Military Awards of India',
          content: T('Military Awards of India',
            'Medals given to soldiers for bravery in war and peace. The Param Vir Chakra is the highest military honour.',
            H.h2('Gallantry Awards (Wartime & Peacetime)') + tbl(['Award', 'Level', 'For'], [
              ['Param Vir Chakra (PVC)', 'Highest wartime gallantry', 'Exceptional bravery in face of enemy'],
              ['Ashoka Chakra', 'Highest peacetime gallantry', 'Bravery away from battlefield (also for armed forces)'],
              ['Maha Vir Chakra (MVC)', 'Second highest wartime', 'Conspicuous bravery in war'],
              ['Kirti Chakra', 'Second highest peacetime', 'Bravery in non-war situations'],
              ['Vir Chakra', 'Third highest wartime', 'Acts of gallantry in war'],
              ['Shaurya Chakra', 'Third highest peacetime', 'Gallantry in non-war operations'],
              ['Senapati / Sarvottam Yudh Seva Medal', 'Distinguished service in war', 'Leadership in war operations'],
              ['Param Vishisht Seva Medal (PVSM)', 'Distinguished service', 'Senior officers\' long and meritorious service'],
              ['Ati Vishisht Seva Medal (AVSM)', 'Distinguished service', 'Senior officers\' exceptional service'],
              ['Vishisht Seva Medal (VSM)', 'Distinguished service', 'Meritorious service by officers']
            ]) + H.h2('First PVC Recipients (1962 War)') + tbl(['Name', 'Regiment', 'Battle'], [
              ['Major Somnath Sharma', 'Kumaon Regiment', 'Battle of Badgam, Kashmir 1947 (first PVC ever)'],
              ['Company Havildar Major Piru Singh', 'Punjab Regiment', 'Tithwal, 1948'],
              ['Lance Naik Karam Singh', 'Sikh Regiment', 'Tithwal, 1948'],
              ['2nd Lt. Rama Raghoba Rane', 'Engineers', 'Naushera, 1948'],
              ['Naik Jadunath Singh', 'Rajput Regiment', 'Tain Dhar, 1948'],
              ['Company Havildar Major Abdul Hamid', 'Grenadiers', '1965 Indo-Pak War (anti-tank hero)'],
              ['Flying Officer Nirmaljit Singh Sekhon', 'IAF', '1971 war (only Air Force PVC)']
            ]),
            { examTip: 'PVC = highest wartime (Param Vir Chakra). Ashoka Chakra = highest peacetime. Major Somnath Sharma = first PVC (1947 Kashmir).',
              quickRevision: ['PVC — highest wartime gallantry', 'Ashoka Chakra — highest peacetime', 'Major Somnath Sharma — first PVC', 'Abdul Hamid — 1965 war hero', 'Nirmaljit Singh Sekhon — only Air Force PVC'],
              examAsk: 'Highest military awards wartime vs peacetime; first PVC recipient; Abdul Hamid war.' })
        }
      ]
    }
    ,
    {
      id: 'sports',
      name: 'Sports',
      topics: [
        {
          id: 'olympics-india-medals',
          title: 'India at the Olympics',
          content: T('India at the Olympics',
            'The Olympics is the biggest sports event in the world, held every 4 years. India has won medals in hockey, shooting, wrestling, badminton, and more.',
            H.h2('India\'s Olympic Medals (Individual & Notable)') + tbl(['Year / City', 'Medal', 'Athlete / Team', 'Sport'], [
              ['1900 Paris', 'Silver', 'Norman Pritchard', 'Athletics (200m hurdles) — first Indian medal'],
              ['1928 Amsterdam', 'Gold', 'Indian Hockey Team', 'Hockey — first Olympic gold for India'],
              ['1932 Los Angeles', 'Gold', 'Indian Hockey Team', 'Hockey — defeated USA 24-1'],
              ['1936 Berlin', 'Gold', 'Indian Hockey Team', 'Hockey — Dhyan Chand famous'],
              ['1948 London', 'Gold', 'Indian Hockey Team', 'First gold as independent India'],
              ['1952 Helsinki', 'Gold', 'Indian Hockey Team', 'Hockey'],
              ['1956 Melbourne', 'Gold', 'Indian Hockey Team', 'Hockey'],
              ['1964 Tokyo', 'Gold', 'Indian Hockey Team', 'Hockey'],
              ['1980 Moscow', 'Gold', 'Indian Hockey Team', 'Last hockey gold so far'],
              ['1996 Atlanta', 'Bronze', 'Leander Paes', 'Tennis (singles)'],
              ['2000 Sydney', 'Bronze', 'Karnam Malleswari', 'Weightlifting — first Indian woman medal'],
              ['2004 Athens', 'Silver', 'Rajyavardhan Singh Rathore', 'Shooting (double trap)'],
              ['2008 Beijing', 'Gold', 'Abhinav Bindra', 'Shooting (10m air rifle) — first individual gold'],
              ['2008 Beijing', 'Bronze', 'Vijender Singh', 'Boxing (middleweight)'],
              ['2008 Beijing', 'Bronze', 'Sushil Kumar', 'Wrestling (66 kg)'],
              ['2012 London', 'Silver', 'Vijay Kumar', 'Shooting (25m rapid fire pistol)'],
              ['2012 London', 'Silver', 'Sushil Kumar', 'Wrestling (66 kg)'],
              ['2012 London', 'Bronze', 'Saina Nehwal', 'Badminton — first Indian badminton medal'],
              ['2012 London', 'Bronze', 'Mary Kom', 'Boxing (flyweight)'],
              ['2012 London', 'Bronze', 'Gagan Narang', 'Shooting (10m air rifle)'],
              ['2012 London', 'Bronze', 'Yogeshwar Dutt', 'Wrestling (60 kg)'],
              ['2016 Rio', 'Silver', 'P.V. Sindhu', 'Badminton (women\'s singles)'],
              ['2016 Rio', 'Bronze', 'Sakshi Malik', 'Wrestling (58 kg)'],
              ['2020 Tokyo', 'Gold', 'Neeraj Chopra', 'Javelin throw — first athletics gold'],
              ['2020 Tokyo', 'Silver', 'Mirabai Chanu', 'Weightlifting (49 kg)'],
              ['2020 Tokyo', 'Bronze', 'P.V. Sindhu', 'Badminton'],
              ['2020 Tokyo', 'Bronze', 'Lovlina Borgohain', 'Boxing'],
              ['2020 Tokyo', 'Bronze', 'Ravi Dahiya', 'Wrestling (57 kg)'],
              ['2020 Tokyo', 'Bronze', 'Bajrang Punia', 'Wrestling (65 kg)'],
              ['2020 Tokyo', 'Bronze', 'Indian Hockey Team', 'Hockey — first medal since 1980']
            ]) + H.p('India has won 8 Olympic hockey golds (most by any country). Neeraj Chopra = first athletics gold (Tokyo 2020).'),
            { examTip: 'Abhinav Bindra = first individual gold (2008). Neeraj Chopra = first athletics gold (2020). Dhyan Chand = hockey legend (1936 Berlin).',
              quickRevision: ['Abhinav Bindra — first individual gold (2008 shooting)', 'Neeraj Chopra — javelin gold (Tokyo 2020)', '8 hockey golds for India', 'Karnam Malleswari — first woman medal (2000)', 'P.V. Sindhu — badminton silver & bronze'],
              examAsk: 'First individual Olympic gold; Neeraj Chopra sport; India hockey gold count; Karnam Malleswari achievement.' })
        },
        {
          id: 'grand-slams',
          title: 'Grand Slam Tennis Tournaments',
          content: T('Grand Slam Tennis Tournaments',
            'The four biggest tennis tournaments in the world, held every year. Winning all four in one year is called a "Calendar Grand Slam".',
            H.h2('The Four Grand Slams') + tbl(['Tournament', 'Location', 'Surface', 'Month'], [
              ['Australian Open', 'Melbourne, Australia', 'Hard court', 'January'],
              ['French Open (Roland Garros)', 'Paris, France', 'Clay court', 'May–June'],
              ['Wimbledon', 'London, England', 'Grass court', 'June–July'],
              ['US Open', 'New York, USA', 'Hard court', 'August–September']
            ]) + H.h2('Indian Tennis Achievements') + tbl(['Player', 'Achievement'], [
              ['Ramanathan Krishnan', 'Reached Wimbledon semifinal twice (1960, 1961)'],
              ['Vijay Amritraj', 'Wimbledon quarterfinalist; Davis Cup captain'],
              ['Leander Paes', 'Won 8 doubles/mixed doubles Grand Slams; Olympic bronze 1996'],
              ['Mahesh Bhupathi', 'First Indian to win a Grand Slam (1997 French Open mixed doubles)'],
              ['Sania Mirza', '6 Grand Slam doubles titles (women\'s doubles & mixed doubles)'],
              ['Rohan Bopanna', 'French Open mixed doubles champion; oldest ATP World No. 1 doubles (2024)']
            ]),
            { examTip: 'Wimbledon = only grass court Grand Slam. French Open = clay. Mahesh Bhupathi = first Indian Grand Slam winner (1997).',
              quickRevision: ['4 Grand Slams: Australian, French, Wimbledon, US Open', 'Wimbledon — grass court (London)', 'French Open — clay (Paris)', 'Mahesh Bhupathi — first Indian Grand Slam winner', 'Leander Paes — Olympic bronze 1996'],
              examAsk: 'Names of 4 Grand Slams; Wimbledon surface; first Indian Grand Slam winner.' })
        },
        {
          id: 'sports-trophies',
          title: 'Sports Trophies & Cups',
          content: T('Sports Trophies & Cups',
            'Special cups and trophies given to winners of major sports tournaments. Each sport has its own famous trophy.',
            H.h2('Important Sports Trophies') + tbl(['Trophy / Cup', 'Sport', 'For'], [
              ['Ranji Trophy', 'Cricket', 'Domestic first-class cricket (India)'],
              ['Duleep Trophy', 'Cricket', 'Domestic inter-zonal cricket'],
              ['Irani Cup', 'Cricket', 'Rest of India vs Ranji winner'],
              ['Vijay Hazare Trophy', 'Cricket', 'Domestic one-day cricket'],
              ['Syed Mushtaq Ali Trophy', 'Cricket', 'Domestic T20 cricket'],
              ['ICC Cricket World Cup Trophy', 'Cricket', 'ODI World Cup (every 4 years)'],
              ['Durand Cup', 'Football', 'Oldest football tournament in India / Asia (1888)'],
              ['Santosh Trophy', 'Football', 'National football championship (states)'],
              ['Indian Super League (ISL) Trophy', 'Football', 'Professional football league'],
              ['Stanley Cup', 'Ice Hockey', 'NHL championship (North America)'],
              ['FIFA World Cup Trophy', 'Football', 'World football championship (every 4 years)'],
              ['Wimbledon Trophy', 'Tennis', 'Wimbledon singles champions'],
              ['Thomas Cup', 'Badminton', 'Men\'s team world championship'],
              ['Uber Cup', 'Badminton', 'Women\'s team world championship'],
              ['Davis Cup', 'Tennis', 'Men\'s international team competition'],
              ['Hockey World Cup', 'Hockey', 'FIH World Cup (India won 1975)'],
              ['Sultan Azlan Shah Cup', 'Hockey', 'Annual invitational hockey tournament'],
              ['Border-Gavaskar Trophy', 'Cricket', 'India vs Australia Test series'],
              ['Asia Cup', 'Cricket / Hockey', 'Asian countries tournament'],
              ['Berdymukhamedov Cup', 'Weightlifting', 'Various — focus on Indian: National weightlifting events']
            ]),
            { examTip: 'Ranji Trophy = domestic cricket. Durand Cup = oldest football tournament in India (1888). Thomas Cup & Uber Cup = badminton team events.',
              quickRevision: ['Ranji Trophy — domestic cricket', 'Durand Cup — oldest football tournament (1888)', 'Thomas Cup — badminton (men\'s team)', 'Uber Cup — badminton (women\'s team)', 'Davis Cup — tennis team event'],
              examAsk: 'Ranji Trophy sport; Durand Cup significance; Thomas Cup and Uber Cup sport.' })
        },
        {
          id: 'sports-terminology',
          title: 'Sports Terminology',
          content: T('Sports Terminology',
            'Special words used in different sports. Exams often ask "which term belongs to which sport?"',
            H.h2('Terms by Sport') + tbl(['Term', 'Sport', 'Meaning'], [
              ['Goal', 'Football / Hockey', 'Scoring by getting ball into net'],
              ['Wicket', 'Cricket', 'Three stumps; also means getting batsman out'],
              ['LBW', 'Cricket', 'Leg Before Wicket — batsman out rule'],
              ['Ace', 'Tennis', 'Serve that opponent cannot touch'],
              ['Deuce', 'Tennis', 'Score tied at 40-40'],
              ['Smash', 'Badminton / Tennis', 'Hard overhead hit'],
              ['Knockout', 'Boxing', 'Opponent cannot continue; wins the fight'],
              ['Checkmate', 'Chess', 'King is trapped — game over'],
              ['Stalemate', 'Chess', 'No legal move but not in check — draw'],
              ['Slam Dunk', 'Basketball', 'Jumping and putting ball directly through hoop'],
              ['Hat-trick', 'Cricket / Football', 'Three wickets or three goals by same player'],
              ['Bull\'s Eye', 'Archery / Shooting', 'Hitting the centre of target'],
              ['Birdie / Eagle', 'Golf', 'One / two strokes under par on a hole'],
              ['Penalty Corner', 'Hockey', 'Short corner awarded to attacking team'],
              ['Offside', 'Football', 'Attacker ahead of second-last defender when ball is played'],
              ['Love', 'Tennis', 'Zero score (0)'],
              ['Gambit', 'Chess', 'Opening move sacrificing a piece for advantage'],
              ['Pole Position', 'Formula 1', 'First starting position on grid'],
              ['Try', 'Rugby', 'Scoring by grounding ball in opponent\'s in-goal area'],
              ['Pinfall', 'Wrestling (WWE/amateur)', 'Both shoulders on mat — win']
            ]),
            { examTip: 'Ace and Deuce = Tennis. LBW and Wicket = Cricket. Checkmate = Chess. Hat-trick = 3 wickets or 3 goals.',
              quickRevision: ['Ace — tennis (unreturnable serve)', 'LBW — cricket', 'Checkmate — chess', 'Hat-trick — 3 in one match', 'Bull\'s Eye — archery/shooting centre hit'],
              examAsk: 'Match term with sport; meaning of LBW, Ace, Deuce, Checkmate.' })
        },
        {
          id: 'national-sports-countries',
          title: 'National Sports of Countries',
          content: T('National Sports of Countries',
            'The sport that a country officially recognises as its national game or most popular traditional sport.',
            H.h2('National Sports') + tbl(['Country', 'National Sport / Game', 'Note'], [
              ['India', 'No official national sport (Hockey was unofficial; field hockey most associated)', 'Kabaddi is state sport in some states'],
              ['Canada', 'Ice Hockey (winter) / Lacrosse (summer)', 'Two official national sports'],
              ['USA', 'Baseball (unofficial national pastime)', 'No single official sport'],
              ['Brazil', 'Football (Soccer)', 'Most successful football nation (5 World Cups)'],
              ['Argentina', 'Pato (declared national sport)', 'Football most popular in practice'],
              ['England', 'Cricket', 'Birthplace of modern cricket'],
              ['Australia', 'Cricket', 'Very popular; also Australian Rules Football'],
              ['Japan', 'Sumo Wrestling', 'Ancient national sport'],
              ['China', 'Table Tennis (Ping Pong)', 'Dominates world table tennis'],
              ['Pakistan', 'Field Hockey', '4-time World Cup winners'],
              ['Bangladesh', 'Kabaddi / Cricket', 'Cricket most popular today'],
              ['Sri Lanka', 'Volleyball (official)', 'Cricket most followed'],
              ['Nepal', 'Volleyball (official, 2017)', 'Also popular: football, cricket'],
              ['Bhutan', 'Archery', 'National sport; traditional bamboo bows'],
              ['Malaysia', 'Sepak Takraw', 'Kick volleyball sport'],
              ['Indonesia', 'Pencak Silat', 'Traditional martial art'],
              ['South Korea', 'Taekwondo', 'Martial art; Olympic sport'],
              ['New Zealand', 'Rugby Union', 'All Blacks famous rugby team'],
              ['Scotland', 'Golf', 'St Andrews — home of golf'],
              ['Ireland', 'Gaelic Games (GAA)', 'Hurling and Gaelic football']
            ]),
            { examTip: 'India has NO official national sport (common trap question). Japan = Sumo. Bhutan = Archery. Canada has two: Ice Hockey + Lacrosse.',
              quickRevision: ['India — no official national sport', 'Japan — Sumo', 'Bhutan — Archery', 'Brazil — Football', 'Canada — Ice Hockey & Lacrosse', 'Pakistan — Field Hockey'],
              examAsk: 'India\'s national sport (trick question); Japan and Bhutan national sports; Canada\'s two national sports.' })
        },
        {
          id: 'sports-awards',
          title: 'Sports Awards of India',
          content: T('Sports Awards of India',
            'Government awards given to sportspersons for outstanding performance and contribution to Indian sports.',
            H.h2('Major Sports Awards') + tbl(['Award', 'Level', 'Given For'], [
              ['Major Dhyan Chand Khel Ratna', 'Highest sports honour in India', 'Best performance over 4-year Olympic cycle (formerly Rajiv Gandhi Khel Ratna)'],
              ['Arjuna Award', 'Second highest', 'Consistent outstanding performance (last 4 years)'],
              ['Dronacharya Award', 'For coaches', 'Best sports coaches in India'],
              ['Dhyan Chand Award', 'Lifetime achievement', 'Sportspersons for lifetime contribution'],
              ['Rashtriya Khel Protsahan Puruskar', 'For organisations', 'Promoting sports in India'],
              ['Maulana Abul Kalam Azad (MAKA) Trophy', 'For universities', 'Best overall sports performance by a university'],
              ['Tenzing Norgay National Adventure Award', 'For adventure sports', 'Achievements in adventure and exploration']
            ]) + H.h2('Recent Khel Ratna Winners (Examples)') + tbl(['Year', 'Sportsperson', 'Sport'], [
              ['2016', 'P.V. Sindhu, Sakshi Malik, Dipa Karmakar, Jitu Rai', 'Badminton, Wrestling, Gymnastics, Shooting'],
              ['2020', 'Neeraj Chopra, Ravi Dahiya, Lovlina Borgohain, Sunil Chhetri', 'Athletics, Wrestling, Boxing, Football'],
              ['2021', 'Pramod Bhagat, Krishna Nagar, Sumit Antil', 'Para-badminton, Para-badminton, Para-athletics'],
              ['2023', 'Satwiksairaj Rankireddy & Chirag Sheeti (joint)', 'Badminton doubles']
            ]),
            { examTip: 'Khel Ratna = highest sports award (now named after Major Dhyan Chand). Arjuna Award = for players. Dronacharya = for coaches.',
              quickRevision: ['Khel Ratna — highest sports award (Major Dhyan Chand)', 'Arjuna Award — for sportspersons', 'Dronacharya Award — for coaches', 'Dhyan Chand Award — lifetime achievement', 'MAKA Trophy — for universities'],
              examAsk: 'Highest sports award in India; Dronacharya Award for whom; Arjuna vs Khel Ratna difference.' })
        }
      ]
    },
    {
      id: 'literature-awards',
      name: 'Literature & Awards',
      topics: [
        {
          id: 'books-authors',
          title: 'Important Books & Authors',
          content: T('Important Books & Authors',
            'Famous books and the writers who wrote them — especially Indian authors and books linked to freedom struggle and exams.',
            H.h2('Indian Authors & Books') + tbl(['Book', 'Author', 'Note'], [
              ['Gitanjali', 'Rabindranath Tagore', 'Nobel Prize in Literature (1913)'],
              ['Godan', 'Munshi Premchand', 'Classic Hindi novel on rural life'],
              ['Gora', 'Rabindranath Tagore', 'Novel on nationalism and religion'],
              ['The Guide', 'R.K. Narayan', 'Set in fictional town Malgudi'],
              ['Midnight\'s Children', 'Salman Rushdie', 'Booker Prize; linked to India\'s independence'],
              ['The White Tiger', 'Aravind Adiga', 'Booker Prize winner (2008)'],
              ['Train to Pakistan', 'Khushwant Singh', 'Partition of India story'],
              ['Discovery of India', 'Jawaharlal Nehru', 'Written in Ahmednagar jail during freedom struggle'],
              ['An Autobiography (My Experiments with Truth)', 'Mahatma Gandhi', 'Gandhi\'s life story'],
              ['India Wins Freedom', 'Maulana Abul Kalam Azad', 'Freedom struggle memoir'],
              ['Ignited Minds', 'A.P.J. Abdul Kalam', 'Inspiring book for youth'],
              ['Wings of Fire', 'A.P.J. Abdul Kalam', 'Autobiography of Missile Man'],
              ['The Argumentative Indian', 'Amartya Sen', 'Essays on Indian culture and identity'],
              ['A Suitable Boy', 'Vikram Seth', 'Longest English novel in single volume (India setting)'],
              ['Shadow Lines', 'Amitav Ghosh', 'Sahitya Akademi Award winner'],
              ['The Inheritance of Loss', 'Kiran Desai', 'Booker Prize (2006)']
            ]) + H.h2('Foreign Authors & Books (Often Asked)') + tbl(['Book', 'Author', 'Country'], [
              ['Romeo and Juliet', 'William Shakespeare', 'England'],
              ['Pride and Prejudice', 'Jane Austen', 'England'],
              ['War and Peace', 'Leo Tolstoy', 'Russia'],
              ['The Old Man and the Sea', 'Ernest Hemingway', 'USA — Nobel Prize 1954'],
              ['One Hundred Years of Solitude', 'Gabriel García Márquez', 'Colombia — Nobel Prize'],
              ['The Alchemist', 'Paulo Coelho', 'Brazil'],
              ['Harry Potter series', 'J.K. Rowling', 'United Kingdom']
            ]),
            { examTip: 'Tagore = Gitanjali (Nobel 1913). Premchand = Godan. Kalam = Wings of Fire. Nehru = Discovery of India.',
              quickRevision: ['Gitanjali — Tagore (Nobel 1913)', 'Godan — Premchand', 'Wings of Fire — Abdul Kalam', 'Discovery of India — Nehru', 'Midnight\'s Children — Salman Rushdie'],
              examAsk: 'Match book with author; Tagore Nobel book; Premchand famous novel; Kalam autobiography.' })
        },
        {
          id: 'nobel-prize-indians',
          title: 'Nobel Prize — Indians',
          content: T('Nobel Prize — Indians',
            'The Nobel Prize is the most famous award in the world, given for peace, literature, science, and economics. Indians and people of Indian origin have won it.',
            H.h2('Indian Nobel Laureates') + tbl(['Person', 'Year', 'Field', 'For'], [
              ['Rabindranath Tagore', '1913', 'Literature', 'Gitanjali — poetry collection'],
              ['C.V. Raman', '1930', 'Physics', 'Raman Effect — scattering of light'],
              ['Mother Teresa (Saint Teresa of Calcutta)', '1979', 'Peace', 'Work with poor and sick in Kolkata'],
              ['Amartya Sen', '1998', 'Economic Sciences', 'Welfare economics and poverty research'],
              ['Kailash Satyarthi', '2014', 'Peace', 'Child rights and against child labour (shared with Malala)'],
              ['Har Gobind Khorana', '1968', 'Physiology/Medicine', 'Indian-origin; gene code research (USA citizen)'],
              ['Subrahmanyan Chandrasekhar', '1983', 'Physics', 'Indian-origin; stellar evolution (USA citizen)'],
              ['Venkatraman Ramakrishnan', '2009', 'Chemistry', 'Indian-origin; ribosome structure (UK/USA citizen)'],
              ['Abhijit Banerjee', '2019', 'Economic Sciences', 'Indian-origin; poverty alleviation experiments']
            ]) + H.p('Only 5 Nobel laureates were Indian citizens at time of award: Tagore, Raman, Mother Teresa, Amartya Sen, and Kailash Satyarthi.'),
            { examTip: 'Tagore = first Indian Nobel (1913, Literature). C.V. Raman = only Indian citizen Physics Nobel (1930). Kailash Satyarthi = 2014 Peace.',
              quickRevision: ['Tagore — first Indian Nobel (1913, Literature)', 'C.V. Raman — Physics (1930, Raman Effect)', 'Mother Teresa — Peace (1979)', 'Amartya Sen — Economics (1998)', 'Kailash Satyarthi — Peace (2014)'],
              examAsk: 'First Indian Nobel winner; C.V. Raman discovery; Kailash Satyarthi field; Indian citizen vs Indian-origin laureates.' })
        },
        {
          id: 'bharat-ratna',
          title: 'Bharat Ratna',
          content: T('Bharat Ratna',
            'India\'s highest civilian award. It is given for exceptional service in any field — arts, science, public service, sports, etc.',
            H.h2('About Bharat Ratna') + tbl(['Fact', 'Detail'], [
              ['Instituted', '1954'],
              ['Highest civilian award of India', 'Yes — ranks above Padma Vibhushan'],
              ['Maximum living recipients at a time', 'No fixed limit (originally limited to 3 per year)'],
              ['Award given posthumously?', 'Yes — allowed since 2011'],
              ['Medal shape', 'Peepal leaf design'],
              ['First recipients (1954)', 'C. Rajagopalachari, Dr. S. Radhakrishnan, C.V. Raman']
            ]) + H.h2('All 53 Bharat Ratna Recipients — Complete List') + RL.bharatRatna,
            { examTip: 'Bharat Ratna = highest civilian award (1954). First three: Rajagopalachari, Radhakrishnan, C.V. Raman. Sachin = first sportsperson (2014). Nelson Mandela = only foreigner. 2024 = 5 awardees at once.',
              memoryTrick: '1954 first three: Rajaji, Radhakrishnan, Raman. Sachin 2014 = sports. Ambedkar 1990 posthumous. 2024 five: Karpoori Thakur, Advani, PV Narasimha Rao, Charan Singh, MS Swaminathan.',
              quickRevision: ['Highest civilian award — instituted 1954', '53 recipients total', 'First three: Rajagopalachari, Radhakrishnan, C.V. Raman', 'Sachin Tendulkar — first sportsperson (2014)', 'Posthumous allowed since 2011', 'Peepal leaf medal design'],
              examAsk: 'Highest civilian award; first Bharat Ratna recipients; first sportsperson; 2024 Bharat Ratna winners count.' })
        },
        {
          id: 'padma-awards',
          title: 'Padma Awards',
          content: T('Padma Awards',
            'Three civilian awards given by the Government of India every year on Republic Day (26 January) for distinguished service.',
            H.h2('Three Padma Awards (Highest to Lowest)') + tbl(['Award', 'Rank', 'For'], [
              ['Padma Vibhushan', 'Second highest civilian award', 'Exceptional and distinguished service'],
              ['Padma Bhushan', 'Third highest civilian award', 'Distinguished service of high order'],
              ['Padma Shri', 'Fourth highest civilian award', 'Distinguished service in any field']
            ]) + H.p('Order of civilian awards: Bharat Ratna > Padma Vibhushan > Padma Bhushan > Padma Shri. Padma awards are announced on Republic Day eve every year.'),
            { examTip: 'Order: Bharat Ratna > Padma Vibhushan > Padma Bhushan > Padma Shri. All announced on Republic Day (26 Jan).',
              quickRevision: ['Padma Vibhushan — 2nd highest civilian', 'Padma Bhushan — 3rd highest', 'Padma Shri — 4th highest', 'Announced on Republic Day', 'Below Bharat Ratna in rank'],
              examAsk: 'Order of Padma awards; when announced; difference between Padma Bhushan and Padma Shri.' })
        },
        {
          id: 'gallantry-awards-pvc',
          title: 'Gallantry Awards (PVC & More)',
          content: T('Gallantry Awards (PVC & More)',
            'Brave soldiers and civilians get gallantry awards for saving lives and fighting enemies. PVC is the highest wartime bravery award.',
            H.h2('Wartime vs Peacetime Gallantry Awards') + tbl(['Wartime (During War)', 'Peacetime (No War)'], [
              ['Param Vir Chakra (PVC) — Highest', 'Ashoka Chakra — Highest'],
              ['Maha Vir Chakra (MVC) — 2nd', 'Kirti Chakra — 2nd'],
              ['Vir Chakra — 3rd', 'Shaurya Chakra — 3rd']
            ]) + H.h2('All 21 Param Vir Chakra (PVC) Recipients — Complete List') + RL.pvc +
            H.p('Total PVC awarded: <strong>21 times</strong> since 1950. <strong>14 posthumous</strong>. <strong>20 from Army, 1 from Air Force</strong> (Sekhon). <strong>4 living awardees</strong>: Karam Singh, Hoshiar Singh, Yogendra Yadav, Sanjay Kumar.'),
            { examTip: 'PVC = wartime highest. Ashoka Chakra = peacetime highest. Somnath Sharma = first PVC (1947). Sekhon = only IAF PVC. Salaria = only PVC for UN mission (Congo). Bana Singh = Siachen. Kargil = 4 PVCs (Pandey, Yadav, Kumar, Batra).',
              memoryTrick: 'First PVC: Somnath Sharma 1947. Only Air Force: Sekhon 1971. Kargil 4 heroes: Batra ("Yeh dil maange more"), Pandey, Yadav (youngest 19), Sanjay Kumar.',
              quickRevision: ['PVC — highest wartime gallantry; 21 total awardees', 'Ashoka Chakra — highest peacetime', 'Major Somnath Sharma — first PVC (1947)', 'Flying Officer Sekhon — only Air Force PVC', 'Capt. Vikram Batra — Kargil 1999', 'Grenadier Yogendra Yadav — youngest PVC at 19'],
              examAsk: 'PVC vs Ashoka Chakra; first PVC recipient; only Air Force PVC; all Kargil PVC names; total PVC count (21).' })
        },
        {
          id: 'sahitya-jnanpith',
          title: 'Sahitya Akademi & Jnanpith Award',
          content: T('Sahitya Akademi & Jnanpith Award',
            'India\'s top literary honours. Sahitya Akademi Award is given every year for best book in each Indian language. Jnanpith is the highest literary award in India.',
            H.h2('Jnanpith Award') + tbl(['Fact', 'Detail'], [
              ['Instituted', '1961'],
              ['Highest literary award in India', 'Yes — given for outstanding contribution to Indian literature'],
              ['First recipient', 'G. Sankara Kurup (Malayalam poet, 1965)'],
              ['Only author to win Jnanpith twice', 'Hindi writer — none twice; but Amitav Ghosh declined (not Jnanpith)'],
              ['Recent notable winners', 'Damodar Mauzo (Konkani, 2022), Nilmani Phookan (Assamese, 2022)']
            ]) + H.h2('Notable Jnanpith Winners') + tbl(['Author', 'Language', 'Year'], [
              ['G. Sankara Kurup', 'Malayalam', '1965 — first Jnanpith'],
              ['Sumitranandan Pant', 'Hindi', '1968'],
              ['K.V. Puttappa (Kuvempu)', 'Kannada', '1967'],
              ['Firaq Gorakhpuri', 'Urdu', '1969'],
              ['Amrita Pritam', 'Punjabi', '1981 — first woman Jnanpith'],
              ['Mahadevi Verma', 'Hindi', '1982'],
              ['M.T. Vasudevan Nair', 'Malayalam', '1995'],
              ['Urvasi (Urvasi) — Girish Karnad', 'Kannada', '1998'],
              ['Mahasweta Devi', 'Bengali', '1996'],
              ['Vishnu Sakharam Khandekar', 'Marathi', '1974'],
              ['Amitav Ghosh', 'English', '2018 — first English-language Jnanpith'],
              ['Damodar Mauzo', 'Konkani', '2022']
            ]) + H.p('Sahitya Akademi = National Academy of Letters. It gives annual Sahitya Akademi Awards in 24 recognised languages.'),
            { examTip: 'Jnanpith = highest literary award (1961). First winner = G. Sankara Kurup (Malayalam). Amrita Pritam = first woman Jnanpith. Amitav Ghosh = first English Jnanpith (2018).',
              quickRevision: ['Jnanpith — highest literary award (1961)', 'First: G. Sankara Kurup (Malayalam, 1965)', 'Amrita Pritam — first woman (1981)', 'Amitav Ghosh — first English (2018)', 'Sahitya Akademi — 24 languages'],
              examAsk: 'Highest literary award; first Jnanpith winner; first woman Jnanpith; Amitav Ghosh significance.' })
        }
      ]
    },
    {
      id: 'miscellaneous',
      name: 'Miscellaneous',
      topics: [
        {
          id: 'important-days',
          title: 'Important Days',
          content: T('Important Days',
            'Special days celebrated in India and the world to remember important causes, events, or people.',
            H.h2('National Days (India)') + tbl(['Date', 'Day', 'Why'], [
              ['26 January', 'Republic Day', 'Constitution of India came into force (1950)'],
              ['15 August', 'Independence Day', 'India became free from British rule (1947)'],
              ['2 October', 'Gandhi Jayanti', 'Birth of Mahatma Gandhi; also International Non-Violence Day'],
              ['14 November', 'Children\'s Day', 'Birth anniversary of Jawaharlal Nehru (Chacha Nehru)'],
              ['5 September', 'Teachers\' Day', 'Birth anniversary of Dr. S. Radhakrishnan'],
              ['11 November', 'National Education Day', 'Birth anniversary of Maulana Abul Kalam Azad'],
              ['31 October', 'National Unity Day (Rashtriya Ekta Diwas)', 'Birth anniversary of Sardar Vallabhbhai Patel'],
              ['23 January', 'Parakram Diwas', 'Birth anniversary of Netaji Subhas Chandra Bose'],
              ['12 January', 'National Youth Day', 'Birth anniversary of Swami Vivekananda'],
              ['8 March', 'International Women\'s Day', 'Observed worldwide'],
              ['1 May', 'Labour Day / May Day', 'Workers\' rights day'],
              ['5 June', 'World Environment Day', 'UN day for environment protection'],
              ['21 June', 'International Yoga Day', 'Proposed by India; adopted by UN (2015)'],
              ['24 January', 'National Girl Child Day', 'Promote rights of girl child in India']
            ]),
            { examTip: 'Republic Day = 26 Jan. Independence Day = 15 Aug. Gandhi Jayanti = 2 Oct. Teachers\' Day = 5 Sep (Radhakrishnan birthday). Yoga Day = 21 June.',
              quickRevision: ['26 Jan — Republic Day', '15 Aug — Independence Day', '2 Oct — Gandhi Jayanti', '5 Sep — Teachers\' Day', '21 June — International Yoga Day', '14 Nov — Children\'s Day'],
              examAsk: 'Republic Day vs Independence Day dates; Teachers\' Day why; Yoga Day date; National Unity Day.' })
        },
        {
          id: 'country-capitals-currencies',
          title: 'Country Capitals & Currencies',
          content: T('Country Capitals & Currencies',
            'Every country has a capital city (main government city) and a currency (money used there). Railway exams often ask capital + currency — learn continent-wise!',
            H.h2('Asia') + RL.capitalsAsia +
            H.h2('Europe') + RL.capitalsEurope +
            H.h2('Africa') + RL.capitalsAfrica +
            H.h2('North America & Caribbean') + RL.capitalsNorthAmerica +
            H.h2('South America') + RL.capitalsSouthAmerica +
            H.h2('Oceania (Australia-Pacific)') + RL.capitalsOceania,
            { examTip: 'Canberra = Australia (NOT Sydney). Washington D.C. = USA (NOT New York). Brasília = Brazil (NOT Rio). South Africa has 3 capitals. Sri Lanka: Sri Jayawardenepura Kotte (official), Colombo (commercial).',
              memoryTrick: 'Tricky capitals: Australia=Canberra, USA=Washington D.C., Brazil=Brasília, Turkey=Ankara (not Istanbul), Myanmar=Naypyidaw, South Africa=3 capitals.',
              quickRevision: ['Canberra — Australia (not Sydney)', 'Washington D.C. — USA', 'Brasília — Brazil', 'South Africa — 3 capitals', 'Nepal — Kathmandu, Rupee', 'Maldives — Malé', 'UAE capital — Abu Dhabi (not Dubai)'],
              examAsk: 'Capital of Australia/USA/Brazil/Myanmar; SAARC country capitals; currency of Japan/UK/UAE; South Africa capitals.' })
        },
        {
          id: 'boundary-lines',
          title: 'Important Boundary Lines',
          content: T('Important Boundary Lines',
            'Imaginary lines on the map that divide countries or regions. Each line has a special name and history.',
            H.h2('World Boundary Lines') + tbl(['Line', 'Between', 'Significance'], [
              ['Radcliffe Line', 'India and Pakistan', 'Drawn in 1947 for Partition by Sir Cyril Radcliffe'],
              ['Durand Line', 'Afghanistan and Pakistan', 'Drawn in 1893; disputed by Afghanistan'],
              ['McMahon Line', 'India and China (Arunachal Pradesh)', 'Drawn in 1914 Simla Convention; disputed by China'],
              ['Line of Control (LoC)', 'India and Pakistan (Kashmir)', 'Ceasefire line after 1971 war; not international border'],
              ['Line of Actual Control (LAC)', 'India and China', 'De facto border in Ladakh/Aksai Chin area'],
              ['49th Parallel', 'USA and Canada', 'Border line between two countries'],
              ['38th Parallel', 'North Korea and South Korea', 'Divided Korea after WWII'],
              ['17th Parallel', 'Former North & South Vietnam', 'Before Vietnam reunification (1975)'],
              ['Maginot Line', 'France (internal fortification)', 'French defence line before WWII (not a country border)'],
              ['Hindenburg Line', 'Germany & Allied forces (WWI)', 'German defensive line in WWI'],
              ['Mason-Dixon Line', 'USA (North vs South)', 'Divided slave and free states historically'],
              ['Oder-Neisse Line', 'Poland and Germany', 'Post-WWII border in Europe']
            ]),
            { examTip: 'Radcliffe Line = India-Pakistan. McMahon Line = India-China (Arunachal). LoC = India-Pakistan in Kashmir. 38th Parallel = Koreas.',
              quickRevision: ['Radcliffe Line — India & Pakistan (1947)', 'McMahon Line — India & China', 'LoC — India & Pakistan (Kashmir)', 'Durand Line — Afghanistan & Pakistan', '38th Parallel — North & South Korea'],
              examAsk: 'Radcliffe Line between which countries; McMahon Line; LoC vs LAC; 38th Parallel.' })
        },
        {
          id: 'city-nicknames',
          title: 'City Nicknames — India & World',
          content: T('City Nicknames — India & World',
            'Famous nicknames (pet names) of cities based on their industry, culture, or history — Indian and world cities.',
            H.h2('Indian City Nicknames') + tbl(['City', 'Nickname', 'Why'], [
              ['Mumbai', 'Financial Capital / City of Dreams', 'Bollywood, stock market (BSE/NSE), business hub'],
              ['Kolkata', 'City of Joy', 'Culture, festivals, literary heritage'],
              ['Chennai', 'Detroit of India', 'Automobile manufacturing hub'],
              ['Bengaluru', 'Silicon Valley of India', 'IT and tech companies hub'],
              ['Hyderabad', 'City of Pearls / Cyberabad', 'Pearl trade; HITEC City for IT'],
              ['Pune', 'Oxford of the East', 'Many colleges and universities'],
              ['Jaipur', 'Pink City', 'Buildings painted pink for royal visit (1876)'],
              ['Udaipur', 'City of Lakes', 'Beautiful lakes like Pichola and Fateh Sagar'],
              ['Jodhpur', 'Blue City', 'Houses painted blue in old city'],
              ['Jaisalmer', 'Golden City', 'Yellow sandstone buildings'],
              ['Varanasi', 'City of Temples / Spiritual Capital', 'Ancient holy city on Ganga'],
              ['Allahabad (Prayagraj)', 'City of Prime Ministers', 'Many PMs born or linked to city'],
              ['Ahmedabad', 'Manchester of India', 'Textile industry hub'],
              ['Surat', 'Diamond City of India', 'Diamond cutting and polishing industry'],
              ['Kanpur', 'Leather City of India', 'Large leather industry'],
              ['Coimbatore', 'Manchester of South India', 'Textile hub in Tamil Nadu'],
              ['Guwahati', 'Gateway to Northeast India', 'Main entry city to NE states'],
              ['Dehradun', 'School Capital of India', 'Many famous boarding schools'],
              ['Chandigarh', 'City Beautiful', 'Planned city by Le Corbusier'],
              ['Kochi', 'Queen of Arabian Sea', 'Major port city in Kerala']
            ]) +
            H.h2('World City Nicknames') +
            tbl(['City', 'Country', 'Nickname'],
            [
              ['New York', 'USA', 'Big Apple — famous business and finance hub'],
              ['London', 'UK', 'The Big Smoke / City of Fog — old industrial city'],
              ['Paris', 'France', 'City of Light — beautiful lights and art'],
              ['Rome', 'Italy', 'Eternal City — ancient history still alive'],
              ['Venice', 'Italy', 'City of Canals — built on water channels'],
              ['Athens', 'Greece', 'Cradle of Western Civilization — birthplace of democracy'],
              ['Cairo', 'Egypt', 'City of a Thousand Minarets — many mosques'],
              ['Dubai', 'UAE', 'City of Gold — luxury shopping and gold trade'],
              ['Singapore', 'Singapore', 'Lion City — name from Singa (lion) + Pura (city)'],
              ['Hong Kong', 'China', 'Pearl of the Orient — major trade port'],
              ['Tokyo', 'Japan', 'City of Neon Lights — bright modern city'],
              ['Los Angeles', 'USA', 'City of Angels — Spanish name meaning'],
              ['Las Vegas', 'USA', 'Sin City — famous for casinos and entertainment'],
              ['San Francisco', 'USA', 'Golden Gate City — famous orange bridge'],
              ['Chicago', 'USA', 'Windy City — strong winds from Lake Michigan'],
              ['Boston', 'USA', 'Cradle of Liberty — American independence history'],
              ['Toronto', 'Canada', 'Hogtown — old meat-packing industry nickname'],
              ['Sydney', 'Australia', 'Harbour City — famous Opera House on harbour'],
              ['Melbourne', 'Australia', 'Garden City — many parks and gardens'],
              ['Cape Town', 'South Africa', 'Mother City — oldest city in South Africa'],
              ['Rio de Janeiro', 'Brazil', 'Marvelous City (Cidade Maravilhosa) — beaches and carnival'],
              ['Buenos Aires', 'Argentina', 'Paris of South America — European-style architecture'],
              ['Istanbul', 'Turkey', 'City on Two Continents — Europe and Asia'],
              ['Jerusalem', 'Israel', 'Holy City — sacred to three religions'],
              ['Baghdad', 'Iraq', 'City of Peace — ancient name meaning'],
              ['Moscow', 'Russia', 'Red City — red brick Kremlin walls'],
              ['St. Petersburg', 'Russia', 'Venice of the North — canals and bridges']
            ]),
            { examTip: 'Bengaluru = Silicon Valley. Jaipur = Pink City. Mumbai = Financial Capital. Surat = Diamond City. Paris = City of Light. New York = Big Apple. Dubai = City of Gold.',
              quickRevision: ['Bengaluru — Silicon Valley of India', 'Jaipur — Pink City', 'Mumbai — Financial Capital', 'Paris — City of Light', 'New York — Big Apple', 'Rome — Eternal City', 'Dubai — City of Gold'],
              examAsk: 'Pink City; Silicon Valley of India; City of Light; Big Apple; Eternal City; City of Canals.' })
        },
        {
          id: 'research-centres',
          title: 'Research Centres of India',
          content: T('Research Centres of India',
            'Places where scientists do research in space, atomic energy, agriculture, medicine, and technology.',
            H.h2('Major Research Institutions') + tbl(['Institution', 'Full Form / Field', 'Location'], [
              ['ISRO', 'Indian Space Research Organisation', 'Bengaluru, Karnataka'],
              ['DRDO', 'Defence Research and Development Organisation', 'New Delhi (HQ); labs across India'],
              ['BARC', 'Bhabha Atomic Research Centre', 'Mumbai, Maharashtra'],
              ['TIFR', 'Tata Institute of Fundamental Research', 'Mumbai, Maharashtra'],
              ['CSIR', 'Council of Scientific & Industrial Research', 'New Delhi (HQ); 37 labs'],
              ['ICAR', 'Indian Council of Agricultural Research', 'New Delhi'],
              ['IARI', 'Indian Agricultural Research Institute (Pusa Institute)', 'New Delhi'],
              ['AIIMS', 'All India Institute of Medical Sciences', 'New Delhi (main); many branches'],
              ['IISC', 'Indian Institute of Science', 'Bengaluru, Karnataka'],
              ['IIT', 'Indian Institute of Technology', 'Multiple cities (23 IITs)'],
              ['IIM', 'Indian Institute of Management', 'Multiple cities (21 IIMs)'],
              ['NPL', 'National Physical Laboratory', 'New Delhi'],
              ['IMD', 'India Meteorological Department', 'New Delhi'],
              ['Survey of India', 'National mapping agency', 'Dehradun, Uttarakhand'],
              ['Atomic Energy Commission', 'Oversees nuclear programme', 'Mumbai'],
              ['NPCIL', 'Nuclear Power Corporation of India Ltd.', 'Mumbai'],
              ['CDS', 'Combined Defence Services exam body — actually UPSC; research: C-DAC', 'C-DAC: Pune (IT research)'],
              ['C-DAC', 'Centre for Development of Advanced Computing', 'Pune, Maharashtra — made PARAM supercomputers'],
              ['NAL', 'National Aerospace Laboratories', 'Bengaluru, Karnataka'],
              ['SAC (ISRO)', 'Space Applications Centre', 'Ahmedabad, Gujarat'],
              ['VSSC', 'Vikram Sarabhai Space Centre', 'Thiruvananthapuram, Kerala — rocket development']
            ]),
            { examTip: 'ISRO = Bengaluru. BARC = Mumbai. IISC = Bengaluru. C-DAC = Pune (supercomputers). VSSC = Thiruvananthapuram (rockets).',
              quickRevision: ['ISRO — Bengaluru (space)', 'BARC — Mumbai (atomic research)', 'DRDO — defence research', 'IISC — Bengaluru', 'C-DAC — Pune (supercomputers)', 'VSSC — Thiruvananthapuram (rockets)'],
              examAsk: 'ISRO headquarters; BARC location; C-DAC famous for; VSSC city.' })
        },
        {
          id: 'important-headquarters',
          title: 'Important Headquarters',
          content: T('Important Headquarters',
            'Headquarters (HQ) means the main office of an organisation. Exams love asking "where is the HQ of ___?"',
            H.h2('Indian Organisations') + tbl(['Organisation', 'Headquarters'], [
              ['RBI (Reserve Bank of India)', 'Mumbai, Maharashtra'],
              ['SEBI (Securities and Exchange Board of India)', 'Mumbai, Maharashtra'],
              ['ISRO', 'Bengaluru, Karnataka'],
              ['DRDO', 'New Delhi'],
              ['BARC', 'Mumbai, Maharashtra'],
              ['UPSC (Union Public Service Commission)', 'New Delhi'],
              ['Election Commission of India', 'New Delhi'],
              ['Supreme Court of India', 'New Delhi'],
              ['Lok Sabha / Rajya Sabha (Parliament)', 'New Delhi'],
              ['Planning body (now NITI Aayog)', 'New Delhi'],
              ['NITI Aayog', 'New Delhi'],
              ['CBI (Central Bureau of Investigation)', 'New Delhi'],
              ['CAG (Comptroller and Auditor General)', 'New Delhi'],
              ['NHAI (National Highways Authority of India)', 'New Delhi'],
              ['Indian Railways (Railway Board)', 'New Delhi'],
              ['Air India (Tata Group)', 'New Delhi / Gurugram'],
              ['Life Insurance Corporation (LIC)', 'Mumbai, Maharashtra'],
              ['State Bank of India (SBI)', 'Mumbai, Maharashtra'],
              ['BHEL (Bharat Heavy Electricals Ltd.)', 'New Delhi'],
              ['ONGC (Oil and Natural Gas Corporation)', 'Dehradun, Uttarakhand'],
              ['Coal India Limited', 'Kolkata, West Bengal'],
              ['NTPC (National Thermal Power Corporation)', 'New Delhi'],
              ['Indian Oil Corporation (IOC)', 'New Delhi'],
              ['Hindustan Unilever Limited (HUL)', 'Mumbai, Maharashtra'],
              ['Tata Group', 'Mumbai, Maharashtra'],
              ['Infosys', 'Bengaluru, Karnataka'],
              ['Wipro', 'Bengaluru, Karnataka']
            ]) + H.h2('International Organisations (Quick Reference)') + tbl(['Organisation', 'HQ'], [
              ['United Nations (UN)', 'New York, USA'],
              ['WHO', 'Geneva, Switzerland'],
              ['UNESCO', 'Paris, France'],
              ['IMF & World Bank', 'Washington D.C., USA'],
              ['WTO', 'Geneva, Switzerland'],
              ['INTERPOL', 'Lyon, France'],
              ['ICJ', 'The Hague, Netherlands'],
              ['SAARC', 'Kathmandu, Nepal'],
              ['ASEAN', 'Jakarta, Indonesia'],
              ['NATO', 'Brussels, Belgium'],
              ['OPEC', 'Vienna, Austria'],
              ['IAEA', 'Vienna, Austria'],
              ['ADB', 'Manila, Philippines'],
              ['AIIB', 'Beijing, China']
            ]),
            { examTip: 'RBI & SBI = Mumbai. Most government bodies = New Delhi. ISRO = Bengaluru. ONGC = Dehradun. SAARC = Kathmandu.',
              quickRevision: ['RBI — Mumbai', 'ISRO — Bengaluru', 'UPSC & Parliament — New Delhi', 'ONGC — Dehradun', 'SAARC — Kathmandu', 'WHO — Geneva'],
              examAsk: 'RBI headquarters; ISRO HQ; SAARC HQ; ONGC location; SEBI city.' })
        }
      ]
    }
  ]
};
})();
