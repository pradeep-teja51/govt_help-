(function() {
window.GA_DATA = window.GA_DATA || {};
const H = window.GA_HELPERS;
const T = (...args) => H.topic(...args);
const tbl = H.table;
const RL = window.GA_RAILWAY_LISTS;

window.GA_DATA.geography = {
  id: 'geography',
  name: 'Geography',
  color: '#008080',
  icon: '🌍',
  chapters: [
    {
      id: 'physical-geography',
      name: 'A. Physical Geography',
      topics: [
        {
          id: 'universe-solar-system',
          title: 'Universe & Solar System',
          content: T('Universe & Solar System', 'Everything around us — stars, planets, galaxies, and space — makes up the universe. Our solar system is a small part of it, with the Sun at the centre and eight planets orbiting it.',
            H.h2('What is the Universe?') +
            H.p('The universe includes all matter, energy, space, and time. It contains billions of galaxies. Each galaxy has billions of stars. Our galaxy is called the <strong>Milky Way</strong>.') +
            H.h2('Our Solar System') +
            H.p('The solar system has the Sun, 8 planets, dwarf planets (like Pluto), moons, asteroids, comets, and meteors. Planets move around the Sun in fixed paths called <strong>orbits</strong>.') +
            tbl(['Planet', 'Position', 'Special Feature'], [
              ['Mercury', '1st (nearest to Sun)', 'Smallest planet; no moons'],
              ['Venus', '2nd', 'Hottest planet; morning/evening star'],
              ['Earth', '3rd', 'Only planet with life; one moon'],
              ['Mars', '4th', 'Red Planet; largest volcano Olympus Mons'],
              ['Jupiter', '5th', 'Largest planet; Great Red Spot storm'],
              ['Saturn', '6th', 'Famous for rings; least dense planet'],
              ['Uranus', '7th', 'Rotates on its side (98° tilt)'],
              ['Neptune', '8th', 'Windiest planet; farthest from Sun']
            ]) +
            H.h2('Inner vs Outer Planets') +
            H.ul([
              '<strong>Inner (Terrestrial):</strong> Mercury, Venus, Earth, Mars — rocky and small',
              '<strong>Outer (Jovian):</strong> Jupiter, Saturn, Uranus, Neptune — gas giants, very large',
              '<strong>Asteroid Belt:</strong> Between Mars and Jupiter — thousands of rocky objects'
            ]) +
            H.h2('Important Space Facts') +
            tbl(['Body / Term', 'Fact'], [
              ['Sun', 'Star at centre; provides light and heat; 99.86% of solar system mass'],
              ['Moon', 'Earth\'s natural satellite; causes tides'],
              ['Light Year', 'Distance light travels in one year ≈ 9.46 trillion km'],
              ['Astronomical Unit (AU)', 'Average Sun–Earth distance ≈ 149.6 million km'],
              ['Comet', 'Ice + dust; develops tail near Sun (e.g. Halley\'s Comet — every 76 years)'],
              ['Meteor / Meteorite', 'Meteor = burning streak in sky; Meteorite = reaches Earth\'s surface'],
              ['Black Hole', 'Region where gravity is so strong that even light cannot escape']
            ]),
            {
              examTip: 'Remember planet order: <strong>My Very Educated Mother Just Served Us Noodles</strong> (Mercury → Neptune). Venus is hottest (not Mercury) due to thick CO₂ atmosphere.',
              quickRevision: [
                '8 planets; Pluto is a dwarf planet since 2006',
                'Earth = 3rd planet; only one with confirmed life',
                'Jupiter = largest; Saturn = rings; Mars = Red Planet',
                'Light year measures distance, not time',
                'Milky Way = our galaxy; Sun is a star'
              ],
              examAsk: 'Planet order, largest/smallest planets, hottest planet, light year meaning, and Milky Way galaxy are frequently asked in SSC and Railway exams.'
            })
        },
        {
          id: 'earth-movements',
          title: 'Movements of the Earth',
          content: T('Movements of the Earth', 'Earth moves in two main ways — it spins on its axis (rotation) and travels around the Sun (revolution). These movements cause day/night and seasons.',
            H.h2('Rotation — Day and Night') +
            H.p('Earth spins on its imaginary axis from <strong>west to east</strong>. One full rotation takes about <strong>24 hours</strong>. The side facing the Sun has day; the other side has night.') +
            H.h2('Revolution — Seasons and Year') +
            H.p('Earth moves around the Sun in an elliptical (oval) path. One complete orbit takes about <strong>365¼ days</strong> (one year). The extra ¼ day is adjusted with a leap year every 4 years.') +
            tbl(['Movement', 'Direction', 'Time', 'Effect'], [
              ['Rotation', 'West to East', '~24 hours', 'Day and night'],
              ['Revolution', 'West to East (anticlockwise)', '~365.25 days', 'Seasons, leap year'],
              ['Axial Tilt', '23.5° from vertical', 'Constant', 'Seasons vary by hemisphere']
            ]) +
            H.h2('Seasons — Why They Happen') +
            H.p('Earth\'s axis is tilted at 23.5°. When the Northern Hemisphere tilts toward the Sun → <strong>summer</strong> in north, <strong>winter</strong> in south. Opposite happens 6 months later.') +
            H.ul([
              '<strong>21 March:</strong> Spring Equinox — equal day and night worldwide',
              '<strong>21 June:</strong> Summer Solstice (north) — longest day in Northern Hemisphere',
              '<strong>23 September:</strong> Autumn Equinox — equal day and night',
              '<strong>22 December:</strong> Winter Solstice (north) — shortest day in Northern Hemisphere'
            ]) +
            H.h2('Local Time vs Standard Time') +
            H.p('Places east of a reference meridian see sunrise earlier → time is ahead. India uses <strong>IST (Indian Standard Time)</strong> = GMT + 5:30, based on 82.5°E longitude (near Mirzapur, UP).'),
            {
              examTip: 'Rotation = day/night (24 hrs). Revolution = year + seasons (365¼ days). India\'s standard meridian is 82°30\'E, NOT 82°E exactly.',
              quickRevision: [
                'Rotation: west to east, 24 hours, causes day/night',
                'Revolution: 365¼ days; leap year every 4 years',
                'Axial tilt 23.5° causes seasons',
                'Equinoxes (Mar 21, Sep 23): equal day/night',
                'IST = GMT + 5:30; meridian 82.5°E'
              ],
              examAsk: 'Match rotation/revolution with their effects, identify solstice and equinox dates, and IST/GMT questions appear regularly.'
            })
        },
        {
          id: 'interior-of-earth',
          title: 'Interior of the Earth',
          content: T('Interior of the Earth', 'Earth is made of layers from the surface to the centre — crust, mantle, and core. We cannot dig to the centre, so scientists study earthquakes and volcanoes to understand what is inside.',
            H.h2('Layers of the Earth') +
            tbl(['Layer', 'Depth (approx.)', 'Made Of', 'Key Facts'], [
              ['Crust', '0–35 km', 'Solid rock (silica + alumina = SIAL; silica + magnesium = SIMA)', 'Thinnest layer; we live on crust'],
              ['Mantle', '35–2,900 km', 'Semi-solid hot rock', 'Largest layer by volume; convection currents here'],
              ['Outer Core', '2,900–5,100 km', 'Liquid iron + nickel', 'Creates Earth\'s magnetic field'],
              ['Inner Core', '5,100–6,371 km', 'Solid iron + nickel', 'Hottest part; extreme pressure keeps it solid']
            ]) +
            H.h2('Crust Types') +
            H.ul([
              '<strong>Continental Crust (SIAL):</strong> Thicker (30–70 km), lighter, mostly granite',
              '<strong>Oceanic Crust (SIMA):</strong> Thinner (5–10 km), heavier, mostly basalt',
              '<strong>Mohorovičić Discontinuity (Moho):</strong> Boundary between crust and mantle'
            ]) +
            H.h2('How We Study the Interior') +
            H.p('Seismic waves from earthquakes travel at different speeds through different materials. <strong>P-waves</strong> travel through solids and liquids. <strong>S-waves</strong> travel only through solids — they stop at the liquid outer core, proving it is liquid.') +
            H.h2('Temperature and Pressure') +
            H.p('Temperature increases about 1°C per 32 m depth (geothermal gradient). At the centre, temperature may reach 5,000–6,000°C — as hot as the Sun\'s surface.'),
            {
              examTip: 'Remember order: Crust → Mantle → Outer Core (liquid) → Inner Core (solid). S-waves cannot pass through outer core — this proves it is liquid.',
              quickRevision: [
                'Crust = thinnest; mantle = thickest by volume',
                'SIAL = continental; SIMA = oceanic crust',
                'Outer core = liquid; inner core = solid iron',
                'Moho = crust–mantle boundary',
                'Earth\'s magnetic field from outer core'
              ],
              examAsk: 'Layer names, SIAL/SIMA, liquid vs solid core, and seismic wave behaviour are common MCQ topics.'
            })
        },
        {
          id: 'rocks',
          title: 'Rocks',
          content: T('Rocks', 'Rocks are solid materials made of minerals. There are three main types — igneous, sedimentary, and metamorphic — based on how they are formed.',
            H.h2('Three Types of Rocks') +
            tbl(['Type', 'How Formed', 'Examples', 'Uses'], [
              ['Igneous', 'Cooling of molten magma/lava', 'Granite, Basalt, Pumice', 'Building, monuments (Red Fort = red sandstone is sedimentary; Taj Mahal = marble is metamorphic)'],
              ['Sedimentary', 'Deposition and compression of sediments', 'Sandstone, Limestone, Coal, Shale', 'Cement, fossils, fuel (coal)'],
              ['Metamorphic', 'Heat + pressure on existing rocks', 'Marble, Slate, Gneiss, Quartzite', 'Flooring, roofing, sculpture']
            ]) +
            H.h2('Rock Cycle') +
            H.p('Rocks keep changing from one type to another over millions of years. Igneous rocks weather → sediments → sedimentary rocks → heat/pressure → metamorphic rocks → melt → igneous again. This is the <strong>rock cycle</strong>.') +
            H.h2('Important Indian Examples') +
            H.ul([
              '<strong>Basalt:</strong> Deccan Traps (Maharashtra) — igneous lava plateau',
              '<strong>Marble:</strong> Rajasthan (Makrana marble — Taj Mahal)',
              '<strong>Coal:</strong> Sedimentary rock; found in Jharkhand, Odisha, Chhattisgarh',
              '<strong>Granite:</strong> Karnataka, Tamil Nadu — igneous',
              '<strong>Limestone:</strong> Cement industry; MP, Rajasthan, Andhra Pradesh'
            ]),
            {
              examTip: 'Igneous = fire (magma). Sedimentary = layers (fossils found here). Metamorphic = change (marble from limestone). Coal is a sedimentary rock, not a mineral.',
              quickRevision: [
                '3 types: Igneous, Sedimentary, Metamorphic',
                'Igneous: granite, basalt — from cooled magma',
                'Sedimentary: limestone, coal — from deposited layers',
                'Metamorphic: marble, slate — changed by heat/pressure',
                'Rock cycle connects all three types'
              ],
              examAsk: 'Match rock types with examples, identify how each rock forms, and rock cycle questions are very common.'
            })
        },
        {
          id: 'plate-tectonics',
          title: 'Plate Tectonics',
          content: T('Plate Tectonics', 'Earth\'s outer shell is broken into large pieces called tectonic plates. These plates slowly move, causing earthquakes, volcanoes, and mountain building.',
            H.h2('What Are Tectonic Plates?') +
            H.p('The lithosphere (crust + upper mantle) is divided into about <strong>7 major plates</strong> and several minor plates. They float on the semi-fluid asthenosphere below and move a few cm per year.') +
            tbl(['Major Plate', 'Covers'], [
              ['Pacific Plate', 'Largest plate; Pacific Ocean floor'],
              ['Eurasian Plate', 'Europe + most of Asia'],
              ['Indo-Australian Plate', 'India, Australia, Indian Ocean'],
              ['African Plate', 'Africa and surrounding ocean'],
              ['North American Plate', 'North America + part of Atlantic'],
              ['South American Plate', 'South America'],
              ['Antarctic Plate', 'Antarctica']
            ]) +
            H.h2('Types of Plate Boundaries') +
            tbl(['Boundary', 'Movement', 'Result', 'Example'], [
              ['Divergent', 'Plates move apart', 'New crust forms; mid-ocean ridges', 'Mid-Atlantic Ridge'],
              ['Convergent', 'Plates collide', 'Mountains, trenches, volcanoes', 'Himalayas (Indo-Eurasian collision)'],
              ['Transform', 'Plates slide past each other', 'Earthquakes', 'San Andreas Fault (USA)']
            ]) +
            H.h2('Continental Drift & Himalayas') +
            H.p('Alfred Wegener proposed <strong>Continental Drift</strong> — continents were once joined as Pangaea. India was part of Gondwanaland and drifted north, colliding with Eurasia about 50 million years ago, forming the <strong>Himalayas</strong>.'),
            {
              examTip: 'Himalayas formed at convergent boundary (Indo-Australian + Eurasian plates). Mid-Atlantic Ridge = divergent. San Andreas = transform fault.',
              quickRevision: [
                'Lithosphere split into tectonic plates',
                'Divergent = apart; Convergent = collide; Transform = slide',
                'Himalayas = Indo-Eurasian plate collision',
                'Pacific Ring of Fire = most earthquakes/volcanoes',
                'Wegener = Continental Drift theory'
              ],
              examAsk: 'Plate boundary types, Himalayan formation, and Pacific Ring of Fire are high-frequency exam topics.'
            })
        },
        {
          id: 'earthquakes',
          title: 'Earthquakes',
          content: T('Earthquakes', 'An earthquake is a sudden shaking of the ground caused by movement of tectonic plates along faults. It is measured on the Richter scale and Mercalli scale.',
            H.h2('What Causes Earthquakes?') +
            H.p('When rocks along a fault break suddenly, energy is released as seismic waves. The point underground where the break starts is the <strong>focus (hypocentre)</strong>. The point directly above on the surface is the <strong>epicentre</strong> — maximum damage occurs here.') +
            H.h2('Measuring Earthquakes') +
            tbl(['Scale', 'Measures', 'Type'], [
              ['Richter Scale', 'Magnitude (energy released)', 'Logarithmic; each +1 = 10× energy'],
              ['Mercalli Scale', 'Intensity (damage felt)', 'I (not felt) to XII (total destruction)'],
              ['Moment Magnitude (Mw)', 'Modern magnitude scale', 'Used for large earthquakes today']
            ]) +
            H.h2('Seismic Waves') +
            tbl(['Wave', 'Name', 'Travels Through', 'Speed'], [
              ['P-waves', 'Primary / Push waves', 'Solids + liquids', 'Fastest; arrive first'],
              ['S-waves', 'Secondary / Shear waves', 'Solids only', 'Slower; more destructive'],
              ['L-waves', 'Surface waves', 'Earth\'s surface', 'Slowest; cause most surface damage']
            ]) +
            H.h2('Earthquake Zones in India') +
            H.p('India is divided into 4 seismic zones by BIS:') +
            tbl(['Zone', 'Risk', 'Regions'], [
              ['Zone II', 'Low', 'Parts of Rajasthan, MP, Karnataka'],
              ['Zone III', 'Moderate', 'Kerala, Goa, parts of UP, Bihar'],
              ['Zone IV', 'High', 'J&K, HP, Uttarakhand, Delhi, Gujarat, West Bengal'],
              ['Zone V', 'Very High', 'Kashmir, NE states, Kutch (Gujarat), Andaman & Nicobar']
            ]) +
            H.p('<strong>2001 Bhuj earthquake</strong> (Gujarat, 7.7 magnitude) and <strong>2015 Nepal earthquake</strong> caused massive damage in northern India.'),
            {
              examTip: 'Focus = underground origin. Epicentre = surface point above focus. P-waves arrive before S-waves. Zone V = highest risk in India.',
              quickRevision: [
                'Focus (hypocentre) vs Epicentre (surface above focus)',
                'Richter = magnitude; Mercalli = intensity/damage',
                'P-waves fastest; S-waves only through solids',
                'India Zone V = highest seismic risk',
                'Tsunami can follow undersea earthquakes'
              ],
              examAsk: 'Focus vs epicentre, wave types, Richter vs Mercalli, and Indian seismic zones are regularly tested.'
            })
        },
        {
          id: 'volcanoes',
          title: 'Volcanoes',
          content: T('Volcanoes', 'A volcano is an opening in Earth\'s crust through which molten rock (magma), ash, and gases escape. When magma reaches the surface, it is called lava.',
            H.h2('Parts of a Volcano') +
            H.ul([
              '<strong>Magma chamber:</strong> Underground pool of molten rock',
              '<strong>Vent:</strong> Pipe through which magma rises',
              '<strong>Crater:</strong> Bowl-shaped depression at the top',
              '<strong>Lava:</strong> Molten rock on the surface',
              '<strong>Pyroclastic material:</strong> Ash, cinders, volcanic bombs'
            ]) +
            H.h2('Types of Volcanoes') +
            tbl(['Type', 'Shape', 'Eruption', 'Example'], [
              ['Shield', 'Broad, gentle slopes', 'Quiet; fluid lava flows', 'Mauna Loa (Hawaii)'],
              ['Composite (Strato)', 'Tall, steep cone', 'Explosive + lava', 'Mount Fuji (Japan), Vesuvius (Italy)'],
              ['Cinder Cone', 'Small, steep', 'Explosive; ash and cinders', 'Parícutin (Mexico)'],
              ['Caldera', 'Large collapsed crater', 'Massive past eruption', 'Yellowstone (USA)']
            ]) +
            H.h2('Active, Dormant & Extinct') +
            H.ul([
              '<strong>Active:</strong> Erupted recently or erupting now (Mt. Etna, Italy)',
              '<strong>Dormant (Sleeping):</strong> No eruption for long time but may erupt again (Mt. Fuji)',
              '<strong>Extinct:</strong> Will not erupt again (many Deccan Traps volcanoes in India)'
            ]) +
            H.h2('Volcanoes in India') +
            H.p('India has <strong>no active continental volcanoes</strong>. <strong>Barren Island</strong> and <strong>Baratang</strong> (Andaman & Nicobar) have active volcanoes. <strong>Narcondam</strong> is dormant. Deccan Traps (Maharashtra) are ancient extinct volcanic lava flows.'),
            {
              examTip: 'India\'s only active volcano = Barren Island (Andaman). Pacific Ring of Fire has 75% of world\'s active volcanoes. Shield = Hawaii; Composite = Fuji.',
              quickRevision: [
                'Magma underground; lava on surface',
                'Shield = gentle; Composite = explosive + steep',
                'Active / Dormant / Extinct classification',
                'Barren Island = India\'s only active volcano',
                'Pacific Ring of Fire = most volcanoes'
              ],
              examAsk: 'Volcano types, Barren Island, magma vs lava, and Ring of Fire are favourite SSC/Railway questions.'
            })
        },
        {
          id: 'geomorphology',
          title: 'Geomorphology (Landforms)',
          content: T('Geomorphology', 'Geomorphology is the study of landforms — the shapes of Earth\'s surface like mountains, valleys, plains, and plateaus — and how they are created by forces of nature.',
            H.h2('Forces That Shape Land') +
            tbl(['Force', 'Type', 'Creates', 'Examples'], [
              ['Mountains', 'Endogenic (internal)', 'Fold mountains, Block mountains, Volcanic', 'Himalayas (fold), Satpura (block), Deccan (volcanic)'],
              ['Plains', 'Exogenic (external)', 'Deposition by rivers', 'Indo-Gangetic plains, Brahmaputra plains'],
              ['Plateaus', 'Both', 'Uplift + erosion', 'Deccan Plateau, Chota Nagpur, Tibetan Plateau'],
              ['Valleys', 'Exogenic', 'River/wind/glacier erosion', 'Narmada valley, Kashmir valley']
            ]) +
            H.h2('Types of Mountains') +
            H.ul([
              '<strong>Fold Mountains:</strong> Formed when plates collide and rocks buckle — Himalayas, Alps, Andes',
              '<strong>Block Mountains:</strong> Formed when land is uplifted or dropped along faults — Vindhyas, Satpura, Black Forest (Germany)',
              '<strong>Volcanic Mountains:</strong> Built from lava and ash — Mt. Fuji, Mt. Kilimanjaro',
              '<strong>Residual Mountains:</strong> Left after erosion of larger mountains — Aravalli, Nilgiri'
            ]) +
            H.h2('Agents of Erosion & Deposition') +
            tbl(['Agent', 'Landforms Created'], [
              ['River', 'Valleys, gorges, meanders, ox-bow lakes, deltas, flood plains'],
              ['Wind', 'Sand dunes, mushroom rocks, loess plains'],
              ['Glacier', 'U-shaped valleys, cirques, moraines, fjords'],
              ['Sea Waves', 'Cliffs, sea caves, stacks, beaches, spits'],
              ['Underground Water', 'Stalactites, stalagmites, caves (e.g. Ajanta, Ellora)']
            ]) +
            H.h2('Major Indian Landforms') +
            H.ul([
              '<strong>Himalayas:</strong> Young fold mountains; highest peaks; source of major rivers',
              '<strong>Indo-Gangetic Plain:</strong> Fertile alluvial plain; most densely populated',
              '<strong>Deccan Plateau:</strong> Old volcanic basalt; triangular shape; rich in minerals',
              '<strong>Thar Desert:</strong> Arid region in Rajasthan; wind-eroded landforms'
            ]),
            {
              examTip: 'Himalayas = fold mountains (youngest). Aravalli = oldest fold mountains in India. Deccan Plateau = lava plateau (igneous). Delta = river deposition.',
              quickRevision: [
                'Endogenic = builds land (mountains); Exogenic = wears down (erosion)',
                'Fold mountains: Himalayas, Alps, Andes',
                'River creates: delta, meander, ox-bow lake',
                'Glacier creates: U-shaped valley, moraine',
                'Deccan Plateau = igneous basalt lava'
              ],
              examAsk: 'Match landforms with agents (river/wind/glacier), mountain types, and Indian physical divisions are frequently asked.'
            })
        },
        {
          id: 'climatology',
          title: 'Climatology',
          content: T('Climatology', 'Climatology is the study of climate — the long-term weather pattern of a region — including temperature, rainfall, wind, and pressure systems.',
            H.h2('Weather vs Climate') +
            H.p('<strong>Weather</strong> = short-term condition (today\'s rain). <strong>Climate</strong> = average weather over 30+ years (tropical, desert, etc.).') +
            H.h2('Elements of Climate') +
            H.ul([
              '<strong>Temperature:</strong> Decreases with height (6.5°C per 1000 m) and away from equator',
              '<strong>Pressure:</strong> High pressure = sinking air = dry; Low pressure = rising air = rain',
              '<strong>Wind:</strong> Moves from high to low pressure; deflected by Coriolis force',
              '<strong>Humidity:</strong> Water vapour in air; relative humidity = actual/maximum × 100',
              '<strong>Precipitation:</strong> Rain, snow, sleet, hail'
            ]) +
            H.h2('Pressure Belts of the Earth') +
            tbl(['Belt', 'Location', 'Weather'], [
              ['Equatorial Low (Doldrums)', '0°–5° N & S', 'Heavy rainfall; calm winds'],
              ['Sub-tropical High', '30° N & S', 'Dry; deserts form here (Sahara, Thar)'],
              ['Sub-polar Low', '60° N & S', 'Stormy; temperate cyclones'],
              ['Polar High', '90° N & S', 'Very cold; dry']
            ]) +
            H.h2('Wind Systems') +
            tbl(['Wind', 'Direction', 'Season / Region'], [
              ['Trade Winds', 'NE (N hemisphere); SE (S hemisphere)', 'Permanent; 0°–30°'],
              ['Westerlies', 'SW (N hemisphere); NW (S hemisphere)', '30°–60°; bring rain to Europe'],
              ['Polar Easterlies', 'East to West', '60°–90°'],
              ['Monsoon', 'Seasonal reversal', 'India: SW monsoon (Jun–Sep), NE monsoon (Oct–Dec)'],
              ['Jet Stream', 'High altitude (~12 km)', 'Fast flowing; affects Indian monsoon']
            ]) +
            H.h2('Koeppen Climate Classification (Key Types)') +
            tbl(['Code', 'Climate', 'Region Example'], [
              ['Af', 'Tropical Rainforest', 'Amazon, Western Ghats'],
              ['Aw', 'Tropical Savanna', 'Central India, Sudan'],
              ['BWh', 'Hot Desert', 'Sahara, Thar, Arabian'],
              ['Cfa', 'Humid Subtropical', 'SE USA, North India plains'],
              ['ET', 'Tundra', 'Arctic regions']
            ]),
            {
              examTip: 'Deserts form at 30° latitude (sub-tropical high pressure belt). Coriolis force deflects winds right in N hemisphere, left in S hemisphere. SW monsoon brings 75%+ rain to India.',
              quickRevision: [
                'Weather = short term; Climate = long term average',
                'Low pressure = rain; High pressure = dry/clear',
                'Trade winds, Westerlies, Polar Easterlies',
                'Deserts at ~30° N/S (sub-tropical high)',
                'Indian SW monsoon: June to September'
              ],
              examAsk: 'Pressure belts, wind names and directions, monsoon mechanism, and desert location reasons are common exam topics.'
            })
        },
        {
          id: 'oceanography',
          title: 'Oceanography',
          content: T('Oceanography', 'Oceanography is the study of oceans — their depth, currents, tides, and marine life. Oceans cover about 71% of Earth\'s surface.',
            H.h2('Five Oceans (by Size)') +
            tbl(['Ocean', 'Area', 'Special Feature'], [
              ['Pacific', 'Largest & deepest', 'Mariana Trench (deepest point: ~11,034 m)'],
              ['Atlantic', '2nd largest', 'S-shaped; busiest shipping routes'],
              ['Indian', '3rd largest', 'Warmest ocean; monsoon driver for India'],
              ['Southern (Antarctic)', '4th', 'Circles Antarctica; cold currents'],
              ['Arctic', 'Smallest & shallowest', 'Mostly frozen; surrounds North Pole']
            ]) +
            H.h2('Ocean Floor Relief') +
            H.ul([
              '<strong>Continental Shelf:</strong> Shallow extension of continent; rich fishing grounds',
              '<strong>Continental Slope:</strong> Steep drop from shelf to deep ocean',
              '<strong>Abyssal Plain:</strong> Flat deep ocean floor',
              '<strong>Mid-Ocean Ridge:</strong> Underwater mountain chain (longest on Earth)',
              '<strong>Trench:</strong> Deepest parts — Mariana Trench (Challenger Deep)'
            ]) +
            H.h2('Ocean Currents') +
            H.p('Ocean currents are like rivers in the sea, driven by wind, Earth\'s rotation, and temperature/salinity differences.') +
            tbl(['Current', 'Type', 'Region', 'Effect'], [
              ['Gulf Stream', 'Warm', 'Atlantic (USA → Europe)', 'Keeps Western Europe warm'],
              ['Labrador', 'Cold', 'Arctic → North Atlantic', 'Fogs near Newfoundland; Titanic iceberg'],
              ['Kuroshio', 'Warm', 'Pacific (Japan)', 'Warm waters for Japan'],
              ['Peru (Humboldt)', 'Cold', 'West coast of South America', 'Rich fishing; affects El Niño'],
              ['Agulhas', 'Warm', 'East coast of Africa'],
              ['Mozambique', 'Warm', 'Indian Ocean → Arabian Sea']
            ]) +
            H.h2('Tides') +
            H.p('Tides are rise and fall of sea level caused mainly by the <strong>gravitational pull of the Moon</strong> (and Sun). <strong>Spring tides</strong> = highest (New/Full Moon). <strong>Neap tides</strong> = lowest (quarter moons).') +
            H.h2('Salinity') +
            H.p('Average ocean salinity ≈ 35 parts per thousand (3.5%). Red Sea has highest salinity among open seas. Baltic Sea has low salinity due to river inflow.'),
            {
              examTip: 'Pacific = largest & deepest. Mariana Trench = Challenger Deep. Gulf Stream keeps Europe warm. Spring tide = Sun + Moon aligned (New/Full Moon).',
              quickRevision: [
                'Oceans cover 71% of Earth',
                'Pacific largest; Arctic smallest',
                'Mariana Trench = deepest point on Earth',
                'Moon causes tides; Spring = highest, Neap = lowest',
                'Warm currents flow from equator to poles'
              ],
              examAsk: 'Ocean sizes, Mariana Trench, major currents (Gulf Stream, Labrador), and tide types are frequently asked.'
            })
        }
      ]
    },
    {
      id: 'indian-geography',
      name: 'B. Indian Geography',
      topics: [
        {
          id: 'location-extent',
          title: 'Location & Extent of India',
          content: T('Location & Extent of India', 'India is a large country in South Asia, located mostly in the Northern Hemisphere. Its position on the globe gives it diverse climates and neighbours.',
            H.h2('Location') +
            H.p('India lies between <strong>8°4\'N to 37°6\'N</strong> latitude and <strong>68°7\'E to 97°25\'E</strong> longitude. It is in the Eastern Hemisphere and mostly in the Northern Hemisphere. The Tropic of Cancer (23°30\'N) passes through 8 Indian states.') +
            H.h2('Area & Rank') +
            H.ul([
              'Total area: <strong>3.28 million sq km</strong> (32.8 lakh sq km)',
              'Land boundary: ~15,200 km; Coastline: ~7,516 km (mainland + islands)',
              '7th largest country by area in the world',
              '2nd largest by population (after China)'
            ]) +
            H.h2('Standard Time & Date Line') +
            H.p('India has <strong>one time zone</strong> — IST (GMT + 5:30). The 82°30\'E meridian near Mirzapur (UP) is the standard meridian. India does NOT have Daylight Saving Time. The International Date Line (180° meridian) does not pass through India.') +
            H.h2('States Through Which Tropic of Cancer Passes') +
            H.p('Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram — remember: <strong>Gujarat Rajasthan MP Chhattisgarh Jharkhand WB Tripura Mizoram</strong>') +
            H.h2('Neighbouring Countries') +
            tbl(['Country', 'Border Length (approx.)', 'States Sharing Border'], [
              ['Bangladesh', '4,096 km (longest)', 'West Bengal, Assam, Meghalaya, Tripura, Mizoram'],
              ['China', '3,488 km', 'Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh'],
              ['Pakistan', '3,323 km', 'Gujarat, Rajasthan, Punjab, Ladakh (J&K)'],
              ['Nepal', '1,751 km', 'Uttarakhand, UP, Bihar, West Bengal, Sikkim'],
              ['Myanmar', '1,643 km', 'Arunachal Pradesh, Nagaland, Manipur, Mizoram'],
              ['Bhutan', '699 km', 'Sikkim, West Bengal, Assam, Arunachal Pradesh'],
              ['Afghanistan', '106 km (small)', 'Ladakh (Wakhan corridor — very small border)'],
              ['Sri Lanka', 'Maritime only', 'Separated by Palk Strait; no land border'],
              ['Maldives', 'Maritime only', 'Southwest of India in Indian Ocean']
            ]),
            {
              examTip: 'Bangladesh shares the LONGEST land border with India. Tropic of Cancer passes through 8 states. IST = GMT + 5:30. India = 7th largest country.',
              quickRevision: [
                'Lat: 8°4\'N–37°6\'N; Long: 68°7\'E–97°25\'E',
                'Area: 3.28 million sq km; 7th largest',
                'Coastline: ~7,516 km',
                'IST meridian: 82°30\'E (Mirzapur, UP)',
                'Longest border: Bangladesh (~4,096 km)'
              ],
              examAsk: 'Lat-long extent, Tropic of Cancer states, neighbouring countries with border length, and IST are top exam favourites.'
            })
        },
        {
          id: 'physical-divisions',
          title: 'Physical Divisions of India',
          content: T('Physical Divisions of India', 'India can be divided into six major physical regions based on landforms — Himalayas, plains, plateau, desert, coastal plains, and islands.',
            H.h2('Six Physical Divisions') +
            tbl(['Division', 'Location', 'Features', 'States / Region'], [
              ['Himalayan Mountains', 'North', 'Young fold mountains; snow peaks; source of rivers', 'J&K, Ladakh, HP, Uttarakhand, Sikkim, Arunachal, NE states'],
              ['Northern Plains', 'North of peninsula', 'Alluvial; fertile; densely populated', 'Punjab, Haryana, UP, Bihar, West Bengal, Assam'],
              ['Peninsular Plateau', 'South of Narmada', 'Old crystalline rocks; rich minerals', 'MP, Chhattisgarh, Odisha, Maharashtra, Karnataka, Telangana, AP, TN, Kerala'],
              ['Indian Desert (Thar)', 'West', 'Arid; sand dunes; low rainfall', 'Rajasthan (mainly), Gujarat, Punjab, Haryana'],
              ['Coastal Plains', 'East & West coasts', 'Narrow strips along sea', 'West: Gujarat, Maharashtra, Goa, Karnataka, Kerala; East: TN, AP, Odisha, West Bengal'],
              ['Islands', 'Arabian Sea & Bay of Bengal', 'Coral and volcanic islands', 'Lakshadweep (Arabian Sea); Andaman & Nicobar (Bay of Bengal)']
            ]) +
            H.h2('Himalayan Sub-divisions') +
            H.ul([
              '<strong>Greater Himalayas (Himadri):</strong> Highest peaks — Everest, K2, Kanchenjunga; permanent snow',
              '<strong>Lesser Himalayas (Himachal):</strong> Hill stations — Shimla, Mussoorie, Darjeeling',
              '<strong>Outer Himalayas (Shiwalik):</strong> Southernmost; lowest; foothills; dun valleys'
            ]) +
            H.h2('Peninsular Plateau Sub-divisions') +
            H.ul([
              '<strong>Central Highlands:</strong> North of Narmada — Malwa, Bundelkhand, Baghelkhand',
              '<strong>Deccan Plateau:</strong> South of Narmada — triangular; bounded by Satpura, Western & Eastern Ghats',
              '<strong>Western Ghats:</strong> Continuous; higher; UNESCO heritage; rain shadow to east',
              '<strong>Eastern Ghats:</strong> Discontinuous; lower; cut by rivers'
            ]) +
            H.p('<strong>Important passes:</strong> Shipki La, Nathu La, Bomdi La, Jelep La (Himalayas). <strong>Important peaks:</strong> Kanchenjunga (8,586 m — highest in India), Nanda Devi, Kamet.'),
            {
              examTip: 'Narmada and Tapi flow west into Arabian Sea (through rift valleys). All other major peninsular rivers flow east. Western Ghats = continuous; Eastern Ghats = broken.',
              quickRevision: [
                '6 divisions: Himalayas, Plains, Plateau, Desert, Coasts, Islands',
                'Kanchenjunga = highest peak entirely in India (8,586 m)',
                'Thar Desert in Rajasthan',
                'Lakshadweep = Arabian Sea; Andaman = Bay of Bengal',
                'Deccan Plateau = old basalt lava'
              ],
              examAsk: 'Six physical divisions, Himalayan sub-divisions, Western vs Eastern Ghats, and highest peaks are frequently tested.'
            })
        },
        {
          id: 'rivers-of-india',
          title: 'Rivers of India',
          content: T('Rivers of India', 'India has many rivers that provide water for drinking, farming, and electricity. They are grouped into Himalayan rivers (perennial) and Peninsular rivers (mostly rain-fed).',
            H.h2('Himalayan (Perennial) Rivers') +
            tbl(['River', 'Origin', 'Tributaries', 'Flows Through / Ends'], [
              ['Indus', 'Near Mansarovar (Tibet)', 'Jhelum, Chenab, Ravi, Beas, Sutlej', 'Ladakh → Pakistan → Arabian Sea'],
              ['Ganga', 'Gangotri glacier (Bhagirathi)', 'Yamuna, Ghaghara, Gandak, Kosi, Son', 'UP, Bihar, West Bengal → Bay of Bengal (Sundarbans delta)'],
              ['Yamuna', 'Yamunotri glacier', 'Chambal, Betwa, Ken, Sind', 'Delhi, UP, Haryana → joins Ganga at Prayagraj'],
              ['Brahmaputra', 'Angsi glacier (Tibet) as Tsangpo', 'Dihang, Dibang, Lohit, Teesta', 'Arunachal (as Siang) → Assam → Bangladesh → Bay of Bengal']
            ]) +
            H.h2('Peninsular Rivers') +
            tbl(['River', 'Origin', 'Type', 'Ends In'], [
              ['Godavari', 'Trimbakeshwar (Maharashtra)', 'Largest peninsular river; "Dakshin Ganga"', 'Bay of Bengal (AP)'],
              ['Krishna', 'Mahabaleshwar (Maharashtra)', 'Major east-flowing', 'Bay of Bengal (AP)'],
              ['Kaveri', 'Brahmagiri Hills (Karnataka)', 'Sacred river of South', 'Bay of Bengal (Tamil Nadu)'],
              ['Mahanadi', 'Sihawa (Chhattisgarh)', 'East-flowing', 'Bay of Bengal (Odisha)'],
              ['Narmada', 'Amarkantak (MP)', 'West-flowing; rift valley', 'Arabian Sea (Gujarat)'],
              ['Tapi (Tapti)', 'Multai (MP)', 'West-flowing; rift valley', 'Arabian Sea (Gujarat)'],
              ['Sabarmati', 'Aravalli (Rajasthan)', 'West-flowing', 'Arabian Sea (Gujarat)'],
              ['Mahi', 'Madhya Pradesh', 'West-flowing; crosses tropic of cancer twice', 'Arabian Sea'],
              ['Luni', 'Aravalli (Rajasthan)', 'Only major river in Thar; inland drainage', 'Rann of Kutch (saline)']
            ]) +
            H.h2('Important River Projects & Dams on Rivers') +
            tbl(['River', 'Major Dam / Project', 'State'], [
              ['Bhagirathi', 'Tehri Dam', 'Uttarakhand — highest dam in India'],
              ['Sutlej', 'Bhakra-Nangal', 'HP/Punjab — one of largest'],
              ['Narmada', 'Sardar Sarovar', 'Gujarat'],
              ['Krishna', 'Nagarjuna Sagar', 'Telangana/AP'],
              ['Godavari', 'Polavaram (under construction)', 'Andhra Pradesh'],
              ['Mahanadi', 'Hirakud', 'Odisha — longest earthen dam'],
              ['Kaveri', 'Krishnarajasagar', 'Karnataka']
            ]) +
            H.h2('Quick Facts') +
            H.ul([
              '<strong>Longest river in India:</strong> Ganga (~2,525 km within India)',
              '<strong>Longest peninsular river:</strong> Godavari (~1,465 km)',
              '<strong>West-flowing rivers:</strong> Narmada, Tapi, Sabarmati, Mahi, Periyar, Mandovi',
              '<strong>Inland drainage:</strong> Luni river (does not reach sea)'
            ]),
            {
              examTip: 'Godavari = Dakshin Ganga (longest peninsular). Narmada & Tapi flow through rift valleys westward. Tehri = highest dam. Hirakud = longest earthen dam.',
              quickRevision: [
                'Himalayan rivers = perennial (snow-fed)',
                'Peninsular rivers = mostly rain-fed',
                'Godavari = longest peninsular river',
                'Narmada & Tapi = west-flowing rift valley rivers',
                'Ganga delta = Sundarbans (world\'s largest delta)'
              ],
              examAsk: 'River origins, tributaries, west vs east-flowing rivers, and dam-river matching are among the most asked geography questions.'
            })
        },
        {
          id: 'lakes-of-india',
          title: 'Lakes of India',
          content: T('Lakes of India', 'Lakes are bodies of water surrounded by land. India has natural and man-made lakes formed by glaciers, volcanoes, rivers, and dams.',
            H.h2('Types of Lakes') +
            H.ul([
              '<strong>Glacial lakes:</strong> Formed by glacier erosion — Dal Lake, Wular Lake',
              '<strong>Volcanic lakes:</strong> Formed in volcanic craters — Lonar Lake (Maharashtra)',
              '<strong>Tectonic lakes:</strong> Formed by earth movements — Wular (Kashmir)',
              '<strong>Ox-bow lakes:</strong> Formed by river meanders — Kanwar Lake (Bihar)',
              '<strong>Lagoons:</strong> Separated from sea by sand bars — Chilika, Pulicat, Vembanad',
              '<strong>Man-made (reservoir) lakes:</strong> Dams — Govind Sagar, Nagarjuna Sagar'
            ]) +
            H.h2('Important Lakes of India') +
            tbl(['Lake', 'State', 'Type / Feature'], [
              ['Wular Lake', 'J&K', 'Largest freshwater lake in India; tectonic'],
              ['Chilika Lake', 'Odisha', 'Largest brackish water lagoon in Asia; Ramsar site'],
              ['Sambhar Lake', 'Rajasthan', 'Largest inland salt lake in India'],
              ['Lonar Lake', 'Maharashtra', 'Meteorite/ volcanic crater lake; saline'],
              ['Dal Lake', 'J&K', 'Famous glacial lake; "Jewel of Srinagar"'],
              ['Pulicat Lake', 'Andhra Pradesh/TN', '2nd largest lagoon; flamingo habitat; Ramsar site'],
              ['Vembanad Lake', 'Kerala', 'Longest lake in India; backwaters; Ramsar site'],
              ['Loktak Lake', 'Manipur', 'Floating phumdis (Keibul Lamjao NP); Ramsar site'],
              ['Kolleru Lake', 'Andhra Pradesh', 'Freshwater; between Godavari & Krishna deltas; Ramsar site'],
              ['Kanwar Lake', 'Bihar', 'Largest ox-bow lake in Asia'],
              ['Nainital Lake', 'Uttarakhand', 'Tectonic; hill station lake'],
              ['Bhojtal (Upper Lake)', 'Madhya Pradesh', 'Oldest man-made lake in India (11th century)'],
              ['Hussain Sagar', 'Telangana', 'Man-made; Buddha statue in Hyderabad'],
              ['Renuka Lake', 'Himachal Pradesh', 'Largest natural lake in HP']
            ]),
            {
              examTip: 'Wular = largest freshwater. Sambhar = largest salt lake. Chilika = largest brackish lagoon in Asia. Loktak = floating islands (phumdis).',
              quickRevision: [
                'Wular = largest freshwater lake (J&K)',
                'Sambhar = largest salt lake (Rajasthan)',
                'Chilika = largest brackish lagoon (Odisha)',
                'Vembanad = longest lake (Kerala backwaters)',
                'Lonar = crater lake (Maharashtra)'
              ],
              examAsk: 'Lake-state matching, largest freshwater/salt/brackish lakes, and Ramsar lake identification are very common.'
            })
        },
        {
          id: 'climate-india',
          title: 'Climate of India',
          content: T('Climate of India', 'India has a monsoon-type climate — most rain comes in a few months from the southwest monsoon. Temperature and rainfall vary greatly from place to place.',
            H.h2('Type of Climate') +
            H.p('India has <strong>tropical monsoon climate</strong> (Koeppen: Am, Aw). The Tropic of Cancer divides India into subtropical north and tropical south.') +
            H.h2('Seasons in India') +
            tbl(['Season', 'Months', 'Features'], [
              ['Winter (Cold)', 'Dec – Feb', 'Cold in north; pleasant in south; NE monsoon on east coast'],
              ['Summer (Hot)', 'Mar – May', 'Very hot; heat waves in north; pre-monsoon showers (mango showers)'],
              ['Southwest Monsoon', 'Jun – Sep', '75–90% of annual rainfall; from Arabian Sea & Bay of Bengal'],
              ['Retreating Monsoon', 'Oct – Nov', 'Monsoon withdraws; NE monsoon rains in TN, AP, Karnataka']
            ]) +
            H.h2('Mechanism of Indian Monsoon') +
            H.ul([
              'Differential heating of land and sea creates low pressure over India in summer',
              'SW monsoon winds carry moisture from Indian Ocean',
              '<strong>Western Ghats</strong> cause heavy rain on west coast (orographic rainfall)',
              'Himalayas block cold winds from Central Asia and trap monsoon rains',
              '<strong>El Niño</strong> (Pacific warming) often causes drought in India',
              '<strong>La Niña</strong> usually brings good monsoon rainfall'
            ]) +
            H.h2('Rainfall Distribution') +
            tbl(['Region', 'Rainfall', 'Reason'], [
              ['Mawsynram/Cherrapunji (Meghalaya)', 'Highest in India/world', 'Orographic — monsoon hits Khasi Hills'],
              ['Western Coast (Konkan, Malabar)', 'Very high (200–400 cm)', 'First hit by SW monsoon + Ghats'],
              ['Interior Deccan Plateau', 'Low (40–75 cm)', 'Rain shadow of Western Ghats'],
              ['Thar Desert (Rajasthan)', 'Very low (<25 cm)', 'Far from sea; sub-tropical high pressure'],
              ['Coromandel Coast (TN)', 'Rain in Oct–Dec', 'NE monsoon season']
            ]) +
            H.p('<strong>Mango showers</strong> = pre-monsoon rains in Kerala/Karnataka. <strong>Kalbaisakhi/Bardoli Chheerha</strong> = violent pre-monsoon storms in Bengal/Assam.'),
            {
              examTip: 'Mawsynram (not Cherrapunji now) = wettest place on Earth. 75%+ rain from SW monsoon (Jun–Sep). TN gets rain from NE monsoon (Oct–Dec). El Niño = bad monsoon.',
              quickRevision: [
                'Tropical monsoon climate',
                '4 seasons: Winter, Summer, SW Monsoon, Retreating Monsoon',
                'SW monsoon: June–September (main rain)',
                'Mawsynram = highest rainfall on Earth',
                'El Niño = drought risk; La Niña = good rain'
              ],
              examAsk: 'Monsoon seasons, Mawsynram/Cherrapunji, El Niño effect, and NE monsoon region questions appear every year.'
            })
        },
        {
          id: 'soils-india',
          title: 'Soils of India',
          content: T('Soils of India', 'Soil is the top layer of earth where plants grow. India has many soil types, each suited for different crops.',
            H.h2('Major Soil Types') +
            tbl(['Soil', 'Formation', 'Region', 'Crops / Features'], [
              ['Alluvial', 'River deposits (silt)', 'Indo-Gangetic plains, river valleys', 'Rice, wheat, sugarcane, pulses — most fertile; 43% of India\'s land'],
              ['Black (Regur)', 'Weathering of basalt lava', 'Deccan Trap — Maharashtra, MP, Gujarat, Karnataka', 'Cotton (best soil for cotton); self-ploughing; retains moisture'],
              ['Red', 'Weathering of crystalline rocks', 'Eastern & Southern peninsular; low rainfall areas', 'Millets, pulses, tobacco; deficient in nitrogen'],
              ['Laterite', 'Intense leaching in high rainfall', 'Western Ghats, NE hills, Odisha', 'Plantations — tea, coffee, rubber, cashew; brick-making when dry'],
              ['Arid (Desert)', 'Dry climate; low vegetation', 'Rajasthan, parts of Gujarat, Punjab', 'Drought-resistant crops after irrigation; saline'],
              ['Saline/Alkaline (Usara)', 'Poor drainage; capillary action', 'Rajasthan, UP, Punjab, Gujarat, Maharashtra', 'White salt crust (reh/kallar); needs reclamation'],
              ['Peaty & Marshy', 'Organic matter accumulation', 'Kerala backwaters, Sundarbans, NE', 'High organic content; acidic; needs drainage'],
              ['Forest/Mountain', 'Forest cover on hills', 'Himalayas, Western/Eastern Ghats', 'Tea, spices, fruits; thin and acidic']
            ]) +
            H.h2('ICAR Soil Classification — Color Code') +
            H.p('Alluvial = varied; Black = dark; Red = red from iron oxide; Laterite = red when wet, hard when dry; Desert = sandy/light.') +
            H.h2('Important Facts') +
            H.ul([
              'Alluvial soil covers the largest area in India',
              'Black soil is also called <strong>Regur</strong> or <strong>Black Cotton Soil</strong>',
              'Laterite soil is named from Latin "later" = brick',
              'ICAR (Indian Council of Agricultural Research) classifies Indian soils'
            ]),
            {
              examTip: 'Black soil = cotton (Deccan Trap/basalt). Alluvial = Indo-Gangetic (wheat/rice). Laterite = tea/coffee (high rainfall hills). Red soil = iron oxide gives colour.',
              quickRevision: [
                'Alluvial = most widespread & fertile (43%)',
                'Black (Regur) = cotton; Deccan Plateau',
                'Red soil = iron oxide; peninsular India',
                'Laterite = high rainfall hills; tea, coffee',
                'Arid soil = Rajasthan desert'
              ],
              examAsk: 'Soil-crop matching, soil-region matching, and black cotton soil features are asked in almost every SSC exam.'
            })
        },
        {
          id: 'natural-vegetation',
          title: 'Natural Vegetation of India',
          content: T('Natural Vegetation of India', 'Natural vegetation means plants that grow naturally in a region without human planting. India has diverse forests from tropical rainforests to alpine meadows.',
            H.h2('Types of Natural Vegetation') +
            tbl(['Type', 'Rainfall', 'Region', 'Trees / Features'], [
              ['Tropical Evergreen (Rainforest)', '>200 cm', 'Western Ghats, NE states, Andaman', 'Rosewood, ebony, mahogany; no fixed season of shedding; dense'],
              ['Tropical Deciduous (Monsoon Forest)', '70–200 cm', 'Most of peninsular India, Himalayan foothills', 'Teak, sal, sandalwood, bamboo; sheds leaves in dry season — most widespread'],
              ['Tropical Thorn/Scrub', '<70 cm', 'Rajasthan, Gujarat, Deccan interior', 'Babool, khejri, cactus; xerophytic plants'],
              ['Montane (Mountain)', 'Varies with altitude', 'Himalayas', 'Chir pine, deodar, spruce, rhododendron; changes with height'],
              ['Littoral & Swamp (Mangrove)', 'Coastal saline', 'Sundarbans, Mahanadi delta, Pichavaram', 'Sundari trees (Sundarbans named after it); tiger habitat'],
              ['Alpine', 'High altitude', 'Above 3,600 m in Himalayas', 'Mosses, lichens, small shrubs; snow-covered in winter']
            ]) +
            H.h2('Forest Cover in India (FSI Report)') +
            H.ul([
              'Total forest cover: ~24% of geographical area (target: 33%)',
              'Madhya Pradesh has the largest forest cover by area',
              'Mizoram has the highest forest cover as % of its area',
              'Mangrove cover highest in West Bengal (Sundarbans)'
            ]) +
            H.h2('Important Trees & Uses') +
            tbl(['Tree', 'Forest Type', 'Use / Region'], [
              ['Teak', 'Tropical deciduous', 'Timber; MP, Maharashtra'],
              ['Sal', 'Tropical deciduous', 'Railway sleepers; MP, Chhattisgarh, Odisha'],
              ['Sandalwood', 'Deciduous/evergreen', 'Perfume, carving; Karnataka (most)'],
              ['Deodar', 'Montane', 'Construction timber; Himalayas'],
              ['Sundari', 'Mangrove', 'Sundarbans delta; hard timber']
            ]),
            {
              examTip: 'Tropical deciduous = most widespread forest in India. Sundarbans = largest mangrove forest in world. Teak and sal = deciduous. Western Ghats + NE = evergreen.',
              quickRevision: [
                'Evergreen: heavy rain (>200 cm); no leaf shedding season',
                'Deciduous: monsoon forests; most common type',
                'Thorn forest: desert/low rain (<70 cm)',
                'Sundarbans = mangrove; named after Sundari tree',
                'MP = largest forest cover area'
              ],
              examAsk: 'Forest type-rainfall matching, Sundarbans mangrove, and important trees (teak, sal, deodar) are frequently tested.'
            })
        },
        {
          id: 'mountain-passes',
          title: 'Mountain Passes of India',
          content: T('Mountain Passes of India', 'A mountain pass is a low route through mountains that allows travel. India\'s important passes are mainly in the Himalayas, connecting India to Tibet and Central Asia.',
            H.h2('Important Himalayan Passes') +
            tbl(['Pass', 'State / Region', 'Connects', 'Significance'], [
              ['Shipki La', 'Himachal Pradesh', 'India ↔ Tibet (China)', 'Sutlej river valley; trade route'],
              ['Nathu La', 'Sikkim', 'India ↔ Tibet (China)', 'Part of Old Silk Route; reopened 2006; trade'],
              ['Jelep La', 'Sikkim', 'India ↔ Tibet', 'Near Nathu La; old trade route to Lhasa'],
              ['Bomdi La', 'Arunachal Pradesh', 'India ↔ Tibet', 'Eastern Himalayas'],
              ['Dihang Pass (Diphu Pass area)', 'Arunachal Pradesh', 'India ↔ Tibet', 'Eastern sector'],
              ['Lipulekh Pass', 'Uttarakhand', 'India ↔ Tibet', 'Kailash-Mansarovar pilgrimage route'],
              ['Zoji La', 'Ladakh/J&K', 'Srinagar ↔ Leh', 'Critical road link on NH-1; closes in winter'],
              ['Banihal Pass', 'J&K', 'Jammu ↔ Kashmir', 'Pir Panjal range; Jawahar Tunnel'],
              ['Pir Panjal Pass', 'J&K', 'Jammu ↔ Kashmir', 'Historical route; now Banihal tunnel'],
              ['Rohtang Pass', 'Himachal Pradesh', 'Kullu ↔ Lahaul-Spiti', 'On Manali-Leh route; Atal Tunnel bypasses it'],
              ['Atal Tunnel', 'Himachal Pradesh', 'Manali ↔ Lahaul', 'World\'s longest highway tunnel above 10,000 ft; under Rohtang'],
              ['Khardung La', 'Ladakh', 'Leh ↔ Nubra Valley', 'One of highest motorable passes (~5,359 m)'],
              ['Chang La', 'Ladakh', 'Leh ↔ Pangong Lake', 'High altitude pass'],
              ['Mana Pass', 'Uttarakhand', 'Near Badrinath', 'One of highest motorable passes']
            ]) +
            H.h2('Non-Himalayan Passes') +
            tbl(['Pass', 'Range', 'State', 'Connects'], [
              ['Palghat Gap', 'Western Ghats', 'Kerala/Tamil Nadu', 'Coastal plain ↔ interior plateau; only break in Western Ghats in Kerala'],
              ['Bhor Ghat', 'Western Ghats', 'Maharashtra', 'Mumbai ↔ Pune (rail/road)'],
              ['Thal Ghat', 'Western Ghats', 'Maharashtra', 'Mumbai ↔ Nashik route'],
              ['Shenkottai Gap', 'Western Ghats', 'Tamil Nadu/Kerala', 'Southern break in Ghats']
            ]),
            {
              examTip: 'Nathu La = Sikkim (India-China trade). Zoji La = Srinagar-Leh. Atal Tunnel bypasses Rohtang Pass. Palghat Gap = only major break in Western Ghats in Kerala.',
              quickRevision: [
                'Nathu La — Sikkim; India-China trade',
                'Shipki La — HP; Sutlej valley',
                'Zoji La — Ladakh; Srinagar to Leh',
                'Rohtang Pass — HP; Atal Tunnel below it',
                'Palghat Gap — Western Ghats; Kerala-TN'
              ],
              examAsk: 'Pass-state matching and which countries/ regions passes connect are very common in SSC and Railway exams.'
            })
        },
        {
          id: 'national-parks-india',
          title: 'National Parks of India',
          content: T('National Parks of India', 'National Parks are protected areas where wildlife and nature are strictly preserved. Hunting and mining are not allowed. India has over 100 national parks.',
            H.h2('What is a National Park?') +
            H.p('Under the Wildlife Protection Act 1972, a National Park aims to protect the entire ecosystem — plants, animals, and landscape. Human activity is very limited. First National Park of India: <strong>Hailey National Park (1936)</strong>, now called <strong>Jim Corbett National Park</strong> (Uttarakhand).') +
            H.h2('Important National Parks (State-wise)') +
            tbl(['National Park', 'State/UT', 'Famous For'], [
              ['Jim Corbett NP', 'Uttarakhand', 'First NP of India; Bengal tigers; Project Tiger launch site (1973)'],
              ['Kaziranga NP', 'Assam', 'One-horned rhinoceros; UNESCO World Heritage'],
              ['Manas NP', 'Assam', 'Tiger, rhino, elephant; UNESCO World Heritage'],
              ['Ranthambore NP', 'Rajasthan', 'Tigers; Ranthambore Fort inside park'],
              ['Sariska NP', 'Rajasthan', 'Tigers (relocated); leopards, deer'],
              ['Keoladeo NP (Bharatpur)', 'Rajasthan', 'Migratory birds; UNESCO World Heritage; Ramsar site'],
              ['Desert NP', 'Rajasthan', 'Desert ecosystem; Great Indian Bustard'],
              ['Gir NP', 'Gujarat', 'Only home of Asiatic lions in the wild'],
              ['Blackbuck NP (Velavadar)', 'Gujarat', 'Blackbuck antelope'],
              ['Marine NP (Gulf of Kutch)', 'Gujarat', 'First marine national park in India'],
              ['Sundarbans NP', 'West Bengal', 'Royal Bengal tiger; mangrove forest; UNESCO site'],
              ['Bandipur NP', 'Karnataka', 'Tigers, elephants; part of Nilgiri Biosphere'],
              ['Nagarhole (Rajiv Gandhi) NP', 'Karnataka', 'Tigers, elephants; Kabini river'],
              ['Bannerghatta NP', 'Karnataka', 'Near Bengaluru; safari park'],
              ['Periyar NP', 'Kerala', 'Elephants; Periyar lake; spice forests'],
              ['Eravikulam NP', 'Kerala', 'Nilgiri Tahr (endangered mountain goat)'],
              ['Silent Valley NP', 'Kerala', 'Pristine tropical rainforest'],
              ['Mudumalai NP', 'Tamil Nadu', 'Elephants, tigers; Nilgiri Biosphere'],
              ['Bandhavgarh NP', 'Madhya Pradesh', 'Highest tiger density; white tigers historically'],
              ['Kanha NP', 'Madhya Pradesh', 'Tigers, barasingha (swamp deer); inspired Jungle Book'],
              ['Pench NP', 'Madhya Pradesh/Maharashtra', 'Tigers; Pench river; Jungle Book setting'],
              ['Satpura NP', 'Madhya Pradesh', 'Diverse terrain; walking safaris allowed'],
              ['Panna NP', 'Madhya Pradesh', 'Tigers, crocodiles; Ken river gorge'],
              ['Sanjay Dubri NP', 'Madhya Pradesh', 'Tiger, elephant; Sal forest'],
              ['Tadoba NP', 'Maharashtra', 'Tigers; largest NP in Maharashtra'],
              ['Pench NP (MH part)', 'Maharashtra', 'Tiger reserve shared with MP'],
              ['Navegaon NP', 'Maharashtra', 'Birds, deer; Navegaon lake'],
              ['Hemis NP', 'Ladakh', 'Largest NP in India by area; snow leopard'],
              ['Great Himalayan NP', 'Himachal Pradesh', 'UNESCO World Heritage; alpine wildlife'],
              ['Dachigam NP', 'J&K', 'Hangul (Kashmir stag) — endangered'],
              ['Namdapha NP', 'Arunachal Pradesh', 'Easternmost NP; four big cats (tiger, leopard, clouded leopard, snow leopard)'],
              ['Nokrek NP', 'Meghalaya', 'Red panda; biosphere reserve core'],
              ['Balphakram NP', 'Meghalaya', '"Abode of perpetual winds"; bison, red panda'],
              ['Keibul Lamjao NP', 'Manipur', 'Only floating NP in world; Sangai deer; Loktak Lake'],
              ['Dudhwa NP', 'Uttar Pradesh', 'Tigers, rhinos, swamp deer'],
              ['Valley of Flowers NP', 'Uttarakhand', 'UNESCO site; alpine flowers; near Hemkund Sahib'],
              ['Nanda Devi NP', 'Uttarakhand', 'UNESCO World Heritage; Nanda Devi peak'],
              ['Simlipal NP', 'Odisha', 'Tigers, elephants; part of Simlipal Biosphere'],
              ['Bhitar Kanika NP', 'Odisha', 'Mangroves, saltwater crocodiles, olive ridley turtles'],
              ['Mahananda NP', 'West Bengal', 'Elephants; near Siliguri']
            ]) +
            H.p('<strong>UNESCO World Heritage National Parks:</strong> Kaziranga, Manas, Keoladeo, Sundarbans, Nanda Devi & Valley of Flowers, Great Himalayan NP.'),
            {
              examTip: 'Gir = only Asiatic lions. Kaziranga = one-horned rhino. Corbett = first NP. Keibul Lamjao = floating NP (Sangai deer). Hemis = largest NP by area.',
              quickRevision: [
                'First NP: Jim Corbett (1936), Uttarakhand',
                'Gir (Gujarat) = only wild Asiatic lions',
                'Kaziranga = one-horned rhino (Assam)',
                'Keibul Lamjao = floating NP on Loktak Lake',
                'Hemis (Ladakh) = largest NP in India'
              ],
              examAsk: 'National park-state-famous animal matching is one of the MOST asked Static GK + Geography topics in all government exams.'
            })
        },
        {
          id: 'wildlife-sanctuaries-india',
          title: 'Wildlife Sanctuaries of India',
          content: T('Wildlife Sanctuaries of India', 'Wildlife Sanctuaries protect wild animals in their natural habitat. Compared to National Parks, limited human activity (like grazing) may be allowed in some sanctuaries.',
            H.h2('National Park vs Wildlife Sanctuary') +
            tbl(['Feature', 'National Park', 'Wildlife Sanctuary'], [
              ['Human activity', 'Strictly restricted', 'Limited activity may be allowed'],
              ['Boundary', 'Fixed by legislation', 'Can be changed by state government'],
              ['Focus', 'Entire ecosystem', 'Specific species protection'],
              ['Number in India', '106+ (approx.)', '550+ (approx.)']
            ]) +
            H.h2('Important Wildlife Sanctuaries') +
            tbl(['Sanctuary', 'State', 'Famous For'], [
              ['Bharatpur Bird Sanctuary (now Keoladeo NP)', 'Rajasthan', 'Migratory birds — Siberian crane (rare now)'],
              ['Chilika Lake Bird Sanctuary', 'Odisha', 'Largest brackish lagoon; Irrawaddy dolphins; flamingos'],
              ['Nal Sarovar Bird Sanctuary', 'Gujarat', 'Largest wetland bird sanctuary in India'],
              ['Ranganathittu Bird Sanctuary', 'Karnataka', 'Birds on Kaveri river islets'],
              ['Kumarakom Bird Sanctuary', 'Kerala', 'Vembanad backwaters; migratory birds'],
              ['Thattekad Bird Sanctuary', 'Kerala', '"Salim Ali Bird Sanctuary"; Dr. Salim Ali legacy'],
              ['Vedanthangal Bird Sanctuary', 'Tamil Nadu', 'Oldest bird sanctuary in India (1798)'],
              ['Point Calimere (Kodiakkarai) WLS', 'Tamil Nadu', 'Flamingos, blackbucks, olive ridley turtles'],
              ['Coringa WLS', 'Andhra Pradesh', 'Mangroves; second largest mangrove in India'],
              ['Pulicat Lake Bird Sanctuary', 'Andhra Pradesh/TN', 'Flamingos; 2nd largest lagoon in India'],
              ['Wild Ass Sanctuary (Little Rann of Kutch)', 'Gujarat', 'Indian wild ass (Ghudkhar) — only habitat'],
              ['Indian Wild Ass Sanctuary', 'Gujarat', 'Largest wildlife sanctuary in India by area'],
              ['Asola Bhatti WLS', 'Delhi', 'Southern ridge; leopards, nilgai'],
              ['Ghana Bird Sanctuary (Bharatpur)', 'Rajasthan', 'Same as Keoladeo — world-famous bird site'],
              ['Chail Sanctuary', 'Himachal Pradesh', 'Highest sanctuary in India (near Chail)'],
              ['Kaimur WLS', 'Bihar', 'Tigers, leopards; largest sanctuary in Bihar'],
              ['Palamau WLS', 'Jharkhand', 'Tigers; Betla NP inside it'],
              ['Dalma WLS', 'Jharkhand', 'Elephants; near Jamshedpur'],
              ['Hazaribagh WLS', 'Jharkhand', 'Tigers, sambar; near Ranchi'],
              ['Abohar WLS', 'Punjab', 'Blackbuck; community-managed sanctuary'],
              ['Harike WLS', 'Punjab', 'Confluence of Sutlej & Beas; migratory birds'],
              ['Chandratal WLS', 'Himachal Pradesh', 'High altitude lake; snow leopard'],
              ['Kibber WLS', 'Himachal Pradesh', 'Snow leopard; Spiti Valley'],
              ['Dandeli WLS', 'Karnataka', 'Elephants, hornbills, crocodiles'],
              ['Bhadra WLS', 'Karnataka', 'Tigers, elephants; Bhadra river'],
              ['Periyar WLS', 'Kerala', 'Same region as Periyar NP; elephants on lake'],
              ['Parambikulam WLS', 'Kerala', 'Tigers; teak forests; shared with TN'],
              ['Nagarjunsagar-Srisailam WLS', 'Andhra Pradesh/Telangana', 'Largest tiger reserve area in India'],
              ['Kutch Desert WLS', 'Gujarat', 'Desert wildlife; flamingos in season'],
              ['Gahirmatha Marine WLS', 'Odisha', 'Largest rookery of olive ridley sea turtles'],
              ['Bhitarkanika WLS', 'Odisha', 'Mangroves, saltwater crocodiles'],
              ['Pakke Tiger Reserve / WLS', 'Arunachal Pradesh', 'Hornbills; great pied hornbill'],
              ['Eaglenest WLS', 'Arunachal Pradesh', 'Bird diversity hotspot'],
              ['Murlen NP/WLS area', 'Mizoram', 'Rich biodiversity; near Myanmar border']
            ]),
            {
              examTip: 'Vedanthangal = oldest bird sanctuary (1798, TN). Wild Ass Sanctuary (Gujarat) = only Indian wild ass + largest sanctuary by area. Gahirmatha = olive ridley turtles.',
              quickRevision: [
                '550+ wildlife sanctuaries in India',
                'Vedanthangal (TN) = oldest bird sanctuary',
                'Wild Ass Sanctuary, Gujarat = Indian wild ass',
                'Gahirmatha (Odisha) = olive ridley turtles',
                'Nal Sarovar (Gujarat) = largest wetland bird sanctuary'
              ],
              examAsk: 'Sanctuary-state-speciality matching (wild ass, olive ridley, bird sanctuaries) is frequently asked alongside national parks.'
            })
        },
        {
          id: 'biosphere-reserves-india',
          title: 'Biosphere Reserves of India',
          content: T('Biosphere Reserves of India', 'Biosphere Reserves are large protected areas that conserve biodiversity and also allow sustainable human activity. India has 18 biosphere reserves, some recognised by UNESCO.',
            H.h2('Structure of a Biosphere Reserve') +
            H.p('Each biosphere reserve has three zones:') +
            H.ul([
              '<strong>Core Zone:</strong> Strictly protected — no human activity (National Park/Wildlife Sanctuary)',
              '<strong>Buffer Zone:</strong> Limited research and tourism allowed',
              '<strong>Transition Zone:</strong> Sustainable human activities — farming, settlements allowed'
            ]) +
            H.h2('All 18 Biosphere Reserves of India') +
            tbl(['#', 'Biosphere Reserve', 'State', 'UNESCO MAB', 'Key Feature'], [
              ['1', 'Nilgiri', 'Tamil Nadu, Kerala, Karnataka', 'Yes (2000)', 'First BR in India; elephants, tigers, Nilgiri Tahr'],
              ['2', 'Nanda Devi', 'Uttarakhand', 'Yes (2004)', 'UNESCO site; Nanda Devi peak; alpine ecosystem'],
              ['3', 'Sundarbans', 'West Bengal', 'Yes (2001)', 'Mangrove; Royal Bengal tiger'],
              ['4', 'Gulf of Mannar', 'Tamil Nadu', 'Yes (2001)', 'Marine biodiversity; coral reefs, dugong'],
              ['5', 'Simlipal', 'Odisha', 'Yes (2009)', 'Tigers, elephants; sal forests'],
              ['6', 'Pachmarhi', 'Madhya Pradesh', 'Yes (2009)', 'Satpura range; central Indian forests'],
              ['7', 'Nokrek', 'Meghalaya', 'Yes (2009)', 'Red panda; citrus gene sanctuary'],
              ['8', 'Achanakmar-Amarkantak', 'Chhattisgarh, MP', 'Yes (2012)', 'Source of Narmada & Johila rivers'],
              ['9', 'Great Nicobar', 'Andaman & Nicobar', 'Yes (2013)', 'Largest BR in India; tribal reserves; leatherback turtles'],
              ['10', 'Agasthyamalai', 'Kerala, Tamil Nadu', 'Yes (2016)', 'Endemic plants; Agasthyamala peak'],
              ['11', 'Khangchendzonga', 'Sikkim', 'Yes (2018)', 'Kanchenjunga peak; snow leopard; most recent UNESCO BR'],
              ['12', 'Dehang-Debang', 'Arunachal Pradesh', 'No', 'Eastern Himalayas; Mishmi hills'],
              ['13', 'Dibru-Saikhowa', 'Assam', 'No', 'Wetlands; feral horses; Brahmaputra floodplain'],
              ['14', 'Manas', 'Assam', 'No', 'Tiger, rhino; UNESCO NP also exists here'],
              ['15', 'Dihang-Dibang', 'Arunachal Pradesh', 'No', 'High biodiversity; tribal culture'],
              ['16', 'Cold Desert', 'Himachal Pradesh', 'No', 'Pin Valley; snow leopard; Spiti-Lahaul'],
              ['17', 'Seshachalam Hills', 'Andhra Pradesh', 'No', 'Only BR entirely in Andhra Pradesh; Tirupati hills'],
              ['18', 'Panna', 'Madhya Pradesh', 'No', 'Ken river; tiger reintroduction success']
            ]) +
            H.p('<strong>12 of 18</strong> biosphere reserves are in the UNESCO Man and Biosphere (MAB) programme. <strong>Nilgiri</strong> was the first biosphere reserve of India (1986). <strong>Great Nicobar</strong> is the largest.'),
            {
              examTip: 'Nilgiri = first BR (1986). 12 UNESCO MAB sites. Great Nicobar = largest BR. Khangchendzonga = most recent UNESCO BR (2018). Nokrek = red panda.',
              quickRevision: [
                '18 biosphere reserves in India',
                'Nilgiri = first BR (1986); spans 3 states',
                '12 recognised under UNESCO MAB programme',
                'Great Nicobar = largest biosphere reserve',
                '3 zones: Core, Buffer, Transition'
              ],
              examAsk: 'First biosphere reserve, UNESCO-listed BRs, and BR-state matching are common in SSC, State PSC, and Railway exams.'
            })
        },
        {
          id: 'ramsar-sites-india',
          title: 'Ramsar Sites of India',
          content: T('Ramsar Sites of India', 'Ramsar Sites are wetlands of international importance under the Ramsar Convention (1971, Iran). India has <strong>100 Ramsar sites</strong> — 3rd highest in the world.',
            H.h2('What is the Ramsar Convention?') +
            H.p('Signed in 1971 at Ramsar (Iran). It protects wetlands worldwide. India joined in <strong>1981</strong>. First Ramsar sites: <strong>Chilika Lake (Odisha)</strong> and <strong>Keoladeo (Rajasthan)</strong> on 1 October 1981.') +
            H.h2('All 100 Ramsar Sites — Complete List') +
            RL.ramsar +
            H.p('Key facts: <strong>Chilika</strong> = largest coastal lagoon. <strong>Sambhar</strong> = largest inland salt lake. <strong>Wular</strong> = largest freshwater lake in India. <strong>Sundarbans Wetland</strong> = largest Ramsar site by area. <strong>Tamil Nadu</strong> = most Ramsar sites (20). Latest (2026): <strong>Surha Tal (UP)</strong> = 100th site.'),
            {
              examTip: 'Chilika = first Ramsar site (1981). 100 sites total (2026). Sambhar = largest salt lake. Wular = largest freshwater. Tamil Nadu = most sites.',
              quickRevision: [
                'Ramsar Convention: 1971, Iran; India joined 1981',
                '100 Ramsar sites in India (2026)',
                'First: Chilika + Keoladeo (1981)',
                'Wular = largest freshwater; Sambhar = largest salt lake',
                'Loktak = floating phumdis (Manipur)',
                'Tamil Nadu = most Ramsar sites (20)'
              ],
              examAsk: 'First Ramsar site, wetland-state matching, and largest freshwater/salt/brackish lakes are extremely common exam questions.'
            })
        },
        {
          id: 'tiger-reserves-india',
          title: 'Tiger Reserves of India',
          content: T('Tiger Reserves of India', 'Tiger Reserves are protected forests under Project Tiger (1973) to save Bengal tigers. India has 54 tiger reserves — home to about 75% of the world\'s wild tigers.',
            H.h2('Project Tiger') +
            H.p('Launched in <strong>1973</strong> from <strong>Jim Corbett National Park</strong>. Managed by <strong>NTCA (National Tiger Conservation Authority)</strong>. India had ~2,967 tigers (2022 census) — about 75% of global wild tiger population.') +
            H.h2('All 54 Tiger Reserves (by State)') +
            tbl(['Tiger Reserve', 'State', 'Special Feature'], [
              ['Jim Corbett TR', 'Uttarakhand', 'First tiger reserve (1973); highest tiger density at times'],
              ['Rajaji TR', 'Uttarakhand', 'Elephants + tigers; Ganga & Yamuna confluence area'],
              ['Valmiki TR', 'Bihar', 'Only tiger reserve in Bihar; Valmiki NP'],
              ['Kaziranga TR', 'Assam', 'Rhino + tiger; UNESCO site'],
              ['Manas TR', 'Assam', 'UNESCO site; elephant, rhino, tiger'],
              ['Nameri TR', 'Assam', 'Elephants, tigers; Jia-Bharali river'],
              ['Pakke TR', 'Arunachal Pradesh', 'Hornbills; Pakke river'],
              ['Namdapha TR', 'Arunachal Pradesh', 'Easternmost TR; four big cats possible'],
              ['Kamlang TR', 'Arunachal Pradesh', 'Newest TR (2016); Kamlang river'],
              ['Dibru-Saikhowa TR', 'Assam', 'Wetland; feral horses'],
              ['Orang TR', 'Assam', 'Mini Kaziranga; rhinos + tigers'],
              ['Sunderbans TR', 'West Bengal', 'Mangrove tigers; largest tiger reserve by area'],
              ['Buxa TR', 'West Bengal', 'Near Bhutan border; historic Buxa Fort'],
              ['Palamau TR', 'Jharkhand', 'Betla NP; only TR in Jharkhand'],
              ['Simlipal TR', 'Odisha', 'Elephants, tigers; Simlipal Biosphere'],
              ['Satkosia TR', 'Odisha', 'Mahanadi gorge; tiger + gharial'],
              ['Kanha TR', 'Madhya Pradesh', 'Barasingha (swamp deer) saved here; Jungle Book'],
              ['Bandhavgarh TR', 'Madhya Pradesh', 'High tiger density; white tiger history'],
              ['Pench TR', 'Madhya Pradesh', 'Shared with Maharashtra; Pench river'],
              ['Panna TR', 'Madhya Pradesh', 'Tiger reintroduction success story after local extinction'],
              ['Satpura TR', 'Madhya Pradesh', 'Walking safaris; Denwa river'],
              ['Sanjay-Dubri TR', 'Madhya Pradesh', 'Sanjay NP; sal forests'],
              ['Ratapani TR', 'Madhya Pradesh', 'Near Bhopal; not yet fully notified'],
              ['Madhav TR (Shivpuri)', 'Madhya Pradesh', 'Historic hunting lodge of Scindias'],
              ['Tadoba-Andhari TR', 'Maharashtra', 'Largest TR in Maharashtra; Tadoba NP'],
              ['Pench TR (MH)', 'Maharashtra', 'Shared with MP'],
              ['Melghat TR', 'Maharashtra', 'First TR in Maharashtra; teak forests'],
              ['Sahyadri TR', 'Maharashtra', 'Western Ghats; Chandoli NP area'],
              ['Navegaon-Nagzira TR', 'Maharashtra', 'Nagzira — called "Green Oasis of Vidarbha"'],
              ['Bor TR', 'Maharashtra', 'Smallest TR in India (approx.)'],
              ['Kawal TR', 'Telangana', 'Only TR in Telangana'],
              ['Amrabad TR', 'Telangana', 'Part of Nallamala forests; largest TR in Telangana'],
              ['Nagarjunsagar-Srisailam TR', 'Andhra Pradesh/Telangana', 'Largest tiger reserve in India by area'],
              ['Indravati TR', 'Chhattisgarh', 'Only TR in Chhattisgarh; Indravati river; wild buffaloes'],
              ['Udanti-Sitanadi TR', 'Chhattisgarh', 'Wild buffaloes; Udanti & Sitanadi rivers'],
              ['Achanakmar TR', 'Chhattisgarh', 'Part of Achanakmar-Amarkantak Biosphere'],
              ['Guru Ghasidas TR', 'Chhattisgarh', 'Formerly part of Sanjay NP; renamed 2021'],
              ['Ranthambore TR', 'Rajasthan', 'Famous tiger tourism; Ranthambore Fort'],
              ['Sariska TR', 'Rajasthan', 'Tigers relocated from Ranthambore (2008) after local extinction'],
              ['Mukundra Hills TR', 'Rajasthan', 'Darrah, Jawahar Sagar, Chambal sanctuaries combined'],
              ['Ramgarh Vishdhari TR', 'Rajasthan', 'Newest TR in Rajasthan (2021); near Bundi'],
              ['Kuno TR', 'Madhya Pradesh', 'Cheetah reintroduction site (2022); African cheetahs'],
              ['Periyar TR', 'Kerala', 'Elephants on Periyar lake'],
              ['Parambikulam TR', 'Kerala', 'Teak; shared with Tamil Nadu'],
              ['Bandipur TR', 'Karnataka', 'Part of Nilgiri Biosphere; Mysore-Bandipur corridor'],
              ['Nagarhole TR', 'Karnataka', 'Kabini river; high elephant density'],
              ['Bhadra TR', 'Karnataka', 'Bhadra river; Mutthodi & Bababudangiri'],
              ['Dandeli-Anshi (Kali) TR', 'Karnataka', 'Black panther; Kali river; hornbills'],
              ['Biligiri Ranganatha Temple TR', 'Karnataka', 'BR Hills; temple inside forest'],
              ['Sathyamangalam TR', 'Tamil Nadu', 'Elephant corridor; Eastern Ghats'],
              ['Mudumalai TR', 'Tamil Nadu', 'Nilgiri Biosphere; elephant corridor'],
              ['Anamalai TR', 'Tamil Nadu', 'Formerly Indira Gandhi WLS; tea estates nearby'],
              ['Kalakad-Mundanthurai TR', 'Tamil Nadu', 'Southernmost TR in Western Ghats; Agasthyamalai'],
              ['Srivilliputhur Megamalai TR', 'Tamil Nadu', 'Newest TR in Tamil Nadu (2021); grizzled giant squirrel']
            ]) +
            H.p('<strong>Note:</strong> Largest TR by area = Nagarjunsagar-Srisailam. Smallest ≈ Bor (Maharashtra). Kuno (MP) = cheetah reintroduction. Gir NP (Gujarat) has Asiatic lions — it is NOT a tiger reserve.'),
            {
              examTip: 'First TR = Jim Corbett (1973). Largest TR = Nagarjunsagar-Srisailam. Kuno = cheetahs (2022). Sariska = tiger relocation success. India has ~75% of world\'s tigers.',
              quickRevision: [
                'Project Tiger: 1973; started at Corbett',
                '54 tiger reserves; ~2,967 tigers (2022 census)',
                'India = 75% of world\'s wild tigers',
                'Largest TR: Nagarjunsagar-Srisailam',
                'Kuno (MP) = African cheetah reintroduction'
              ],
              examAsk: 'First/largest tiger reserves, Project Tiger year, Kuno cheetahs, and tiger reserve-state matching are among the top GK questions.'
            })
        }
      ]
    },
    {
      id: 'economic-geography',
      name: 'C. Economic Geography',
      topics: [
        {
          id: 'agriculture-geography',
          title: 'Agriculture Geography of India',
          content: T('Agriculture Geography of India', 'Agriculture geography studies where and why crops are grown in India. About 55% of Indians depend on farming, and India is a major producer of many crops.',
            H.h2('Types of Farming in India') +
            tbl(['Type', 'Features', 'Region'], [
              ['Subsistence Farming', 'Farmer grows food for family; small land', 'Most of rural India'],
              ['Commercial Farming', 'Crops sold in market for profit', 'Punjab, Haryana, western UP (wheat/rice)'],
              ['Plantation Farming', 'Single crop on large estate; export-oriented', 'Tea (Assam, WB), Coffee (Karnataka), Rubber (Kerala)'],
              ['Mixed Farming', 'Crops + livestock together', 'Punjab, Haryana, Maharashtra'],
              ['Intensive Farming', 'High input on small land; multiple crops/year', 'Indo-Gangetic plains, Kerala'],
              ['Shifting (Jhum) Cultivation', 'Slash and burn; move after soil exhausts', 'NE states, Odisha, Andhra hills'],
              ['Dry/Drought Farming', 'Low rainfall; moisture conservation', 'Rajasthan, parts of Maharashtra, Karnataka']
            ]) +
            H.h2('Major Crops & Leading States') +
            tbl(['Crop', 'Leading State(s)', 'Season / Notes'], [
              ['Rice', 'West Bengal, UP, Punjab, Odisha', 'Kharif; needs heavy water; staple food'],
              ['Wheat', 'UP, Punjab, Haryana, MP', 'Rabi; Green Revolution crop; bread of north India'],
              ['Maize', 'Karnataka, MP, Bihar', 'Kharif/Rabi; coarse cereal'],
              ['Millets (Jowar, Bajra, Ragi)', 'Maharashtra (jowar), Rajasthan (bajra), Karnataka (ragi)', 'Dry farming; now promoted as Shree Anna'],
              ['Pulses (Tur, Moong, Urad)', 'MP, Maharashtra, Rajasthan', 'Protein source; MP = pulse bowl of India'],
              ['Sugarcane', 'UP, Maharashtra, Karnataka', 'Long duration; tropical/subtropical'],
              ['Cotton', 'Gujarat, Maharashtra, Telangana', 'Black soil regions; Kharif'],
              ['Jute', 'West Bengal (90%+)', 'Golden fibre; Ganga delta; needs humidity'],
              ['Tea', 'Assam, West Bengal, Kerala, Tamil Nadu', 'Plantation; Assam = largest producer'],
              ['Coffee', 'Karnataka (70%+)', 'Arabica & Robusta; Western Ghats'],
              ['Rubber', 'Kerala (90%+)', 'Equatorial crop; needs heavy rainfall'],
              ['Spices', 'Kerala, Karnataka, AP, Rajasthan', 'Pepper (Kerala), Red chilli (AP), Cumin (Rajasthan)'],
              ['Coconut', 'Kerala, Tamil Nadu, Karnataka', 'Coastal states; copra production'],
              ['Groundnut', 'Gujarat, Rajasthan, Tamil Nadu', 'Oilseed; Gujarat = largest'],
              ['Mustard/Rapeseed', 'Rajasthan, Haryana, MP', 'Rabi oilseed; Rajasthan = largest'],
              ['Soybean', 'MP, Maharashtra, Rajasthan', 'Kharif oilseed; MP = largest'],
              ['Banana', 'Tamil Nadu, Maharashtra, Gujarat', 'Tamil Nadu = largest producer'],
              ['Mango', 'UP, Andhra Pradesh, Karnataka', 'UP = largest; Alphonso (Maharashtra) famous']
            ]) +
            H.h2('Cropping Seasons') +
            tbl(['Season', 'Sowing', 'Harvest', 'Major Crops'], [
              ['Kharif', 'June (monsoon onset)', 'Sep–Oct', 'Rice, cotton, maize, jowar, groundnut, soybean'],
              ['Rabi', 'Oct–Dec (winter)', 'Mar–Apr', 'Wheat, barley, mustard, gram, peas'],
              ['Zaid', 'Mar–Jun (summer)', 'May–Jul', 'Watermelon, cucumber, fodder, moong']
            ]) +
            H.p('<strong>Green Revolution (1960s–70s):</strong> Introduced HYV seeds (wheat, rice), irrigation, and fertilizers — mainly in Punjab, Haryana, UP. <strong>MS Swaminathan</strong> = Father of Green Revolution in India.'),
            {
              examTip: 'MP = Soybean + Pulses (largest). Assam = Tea. Karnataka = Coffee. Gujarat = Cotton + Groundnut. West Bengal = Jute + Rice. Remember Kharif vs Rabi crops.',
              quickRevision: [
                '55% population depends on agriculture',
                'Kharif = monsoon season; Rabi = winter season',
                'Green Revolution: HYV wheat & rice (1960s)',
                'Assam = tea; Karnataka = coffee; Kerala = rubber',
                'MP = largest producer of pulses & soybean'
              ],
              examAsk: 'Crop-leading state matching and Kharif/Rabi crop classification are asked in almost every government exam.'
            })
        },
        {
          id: 'minerals-india',
          title: 'Minerals of India',
          content: T('Minerals of India', 'Minerals are natural substances found in rocks. India is rich in coal, iron ore, mica, and bauxite but depends on imports for oil and gold.',
            H.h2('Classification of Minerals') +
            H.ul([
              '<strong>Metallic:</strong> Iron ore, manganese, copper, bauxite, gold, silver',
              '<strong>Non-Metallic:</strong> Mica, limestone, gypsum, dolomite',
              '<strong>Energy/Fuel:</strong> Coal, petroleum, natural gas, uranium',
              '<strong>Atomic:</strong> Uranium, thorium, plutonium'
            ]) +
            H.h2('Important Minerals & Major States') +
            tbl(['Mineral', 'Leading State(s)', 'Use / Feature'], [
              ['Coal', 'Jharkhand, Odisha, Chhattisgarh, West Bengal', 'Power generation; Gondwana coal fields'],
              ['Iron Ore', 'Odisha, Chhattisgarh, Karnataka, Jharkhand', 'Steel industry; hematite & magnetite'],
              ['Bauxite (Aluminium ore)', 'Odisha, Gujarat, Jharkhand', 'Aluminium production; Odisha = largest'],
              ['Manganese', 'Odisha, MP, Maharashtra, Karnataka', 'Steel hardening; MOIL mines in MP'],
              ['Copper', 'Rajasthan (Khetri), Jharkhand, MP', 'Electrical wires; Khetri mines (Rajasthan)'],
              ['Mica', 'Jharkhand, Bihar, Rajasthan', 'Electrical insulation; Koderma (Jharkhand) = mica capital'],
              ['Gold', 'Karnataka (Kolar — now closed), Jharkhand', 'Kolar Gold Fields (KGF) — historically famous'],
              ['Silver', 'Rajasthan (Zawar mines), Jharkhand', 'Zawar mines near Udaipur'],
              ['Limestone', 'Rajasthan, MP, Andhra Pradesh', 'Cement industry; Rajasthan = largest'],
              ['Gypsum', 'Rajasthan, J&K, Gujarat', 'Cement, plaster; Rajasthan = largest'],
              ['Dolomite', 'Chhattisgarh, Odisha, MP', 'Steel, cement industry'],
              ['Chromite', 'Odisha (Sukinda valley)', 'Stainless steel; Odisha = largest'],
              ['Lead-Zinc', 'Rajasthan (Zawar), Andhra Pradesh', 'Zawar mines (Rajasthan)'],
              ['Tungsten', 'Rajasthan, Maharashtra', 'Hard metal; alloy making'],
              ['Uranium', 'Jharkhand (Jaduguda), Andhra Pradesh (Tummalapalle)', 'Nuclear power; Tummalapalle = large deposit'],
              ['Thorium', 'Kerala (monazite sands), Tamil Nadu, Odisha', 'Nuclear fuel; beach sand minerals'],
              ['Diamond', 'Madhya Pradesh (Panna), Andhra Pradesh', 'Panna mines (MP); mostly industrial now'],
              ['Rock Phosphate', 'Rajasthan, MP, Uttar Pradesh', 'Fertilizer industry'],
              ['Salt', 'Gujarat, Rajasthan, Tamil Nadu', 'Gujarat = largest; Sambhar Lake, Kutch']
            ]) +
            H.h2('Major Mineral Belts') +
            H.ul([
              '<strong>Chota Nagpur Plateau:</strong> Richest mineral belt — coal, iron, mica, copper, bauxite (Jharkhand, Odisha, West Bengal)',
              '<strong>North-Eastern Plateau:</strong> Iron ore, coal, manganese (Odisha, Chhattisgarh)',
              '<strong>South-Western Plateau:</strong> Iron ore, gold, mica (Karnataka, Goa)',
              '<strong>North-Western Belt:</strong> Petroleum, natural gas, gypsum (Rajasthan, Gujarat)'
            ]),
            {
              examTip: 'Chota Nagpur = mineral heart of India. Jharkhand = mica (Koderma). Odisha = iron ore + chromite. Rajasthan = zinc, lead, gypsum, limestone. Kerala beaches = thorium.',
              quickRevision: [
                'Chota Nagpur Plateau = richest mineral belt',
                'Jharkhand: coal, mica (Koderma), copper',
                'Odisha: iron ore, bauxite, chromite',
                'Rajasthan: zinc, lead, gypsum, limestone',
                'Thorium in Kerala/TN beach sands (monazite)'
              ],
              examAsk: 'Mineral-state matching and Chota Nagpur mineral belt questions are extremely common in SSC and State PSC exams.'
            })
        },
        {
          id: 'energy-india',
          title: 'Energy Resources of India',
          content: T('Energy Resources of India', 'Energy powers homes, factories, and transport. India uses coal, petroleum, natural gas, hydropower, nuclear, and renewable energy like solar and wind.',
            H.h2('Energy Mix of India') +
            H.p('India\'s primary energy comes from <strong>coal (~55%)</strong>, followed by oil, renewables, natural gas, and nuclear. India is the <strong>3rd largest energy consumer</strong> in the world.') +
            H.h2('Conventional Energy Sources') +
            tbl(['Source', 'Major Location', 'Key Facts'], [
              ['Coal', 'Jharkhand, Odisha, Chhattisgarh, West Bengal', '~55% of electricity; Gondwana coal (bituminous); lignite in Tamil Nadu (Neyveli)'],
              ['Petroleum/Oil', 'Mumbai High, Assam, Gujarat, Rajasthan, Krishna-Godavari basin', 'Mumbai High = largest offshore oil field; Assam = oldest (Digboi, 1889)'],
              ['Natural Gas', 'KG Basin (Andhra Pradesh), Mumbai High, Assam, Gujarat', 'Reliance KG-D6 field; used in power, fertilizer, CNG'],
              ['Hydropower', 'Himalayan states, NE, Western Ghats', 'Bhakra Nangal, Tehri, Sardar Sarovar, Nathpa Jhakri; clean but seasonal'],
              ['Nuclear Power', 'Uranium (Jharkhand, AP); Thorium (Kerala beaches)', 'NPCIL operates plants; Kudankulam (TN) = largest nuclear plant']
            ]) +
            H.h2('Nuclear Power Plants') +
            tbl(['Plant', 'State', 'Notes'], [
              ['Tarapur', 'Maharashtra', 'Oldest nuclear plant in India (1969)'],
              ['Rawatbhata (Rajasthan)', 'Rajasthan', 'PHWR reactors'],
              ['Kalpakkam (Madras)', 'Tamil Nadu', 'Prototype Fast Breeder Reactor'],
              ['Narora', 'Uttar Pradesh', 'Ganga river belt'],
              ['Kakrapar', 'Gujarat', 'Near Surat'],
              ['Kaiga', 'Karnataka', 'Western Ghats'],
              ['Kudankulam', 'Tamil Nadu', 'Largest nuclear power plant; Russian reactors']
            ]) +
            H.h2('Non-Conventional (Renewable) Energy') +
            tbl(['Source', 'Leading State/Region', 'Facts'], [
              ['Solar', 'Rajasthan, Gujarat, Karnataka, MP', 'Thar Desert ideal; Bhadla Solar Park (Rajasthan) — one of largest in world'],
              ['Wind', 'Tamil Nadu, Gujarat, Maharashtra, Karnataka', 'TN = highest wind capacity; Tamil Nadu coast ideal'],
              ['Biogas', 'Rural India', 'Cow dung + organic waste; gobar gas plants'],
              ['Tidal', 'Gulf of Kutch, Gulf of Khambhat', 'Under development; limited commercial use'],
              ['Geothermal', 'Puga Valley (Ladakh), Manikaran (HP)', 'Limited exploitation so far'],
              ['Bagasse', 'Maharashtra, UP (sugar mills)', 'Sugarcane waste used for power in mills']
            ]) +
            H.p('<strong>Important:</strong> India targets <strong>500 GW renewable energy by 2030</strong>. International Solar Alliance (ISA) HQ is in <strong>Gurugram, India</strong> (2015, Paris COP21).'),
            {
              examTip: 'Mumbai High = largest oil field. Digboi (Assam) = oldest oil refinery (1901). Kudankulam = largest nuclear plant. Bhadla = solar park (Rajasthan). Coal = ~55% of power.',
              quickRevision: [
                'Coal = largest energy source (~55% electricity)',
                'Mumbai High = largest offshore oil field',
                'Digboi, Assam = oldest oil field (1889)',
                'Kudankulam (TN) = largest nuclear plant',
                'Rajasthan/Gujarat = solar; Tamil Nadu = wind'
              ],
              examAsk: 'Oil field locations, nuclear plant-state matching, and renewable energy leading states are frequently tested.'
            })
        },
        {
          id: 'industries-india',
          title: 'Industries of India',
          content: T('Industries of India', 'Industries convert raw materials into finished goods. India has iron and steel, textile, IT, automobile, and many other industries spread across different regions.',
            H.h2('Classification of Industries') +
            tbl(['Basis', 'Types', 'Examples'], [
              ['Raw Material', 'Agro-based, Mineral-based, Forest-based, Marine-based', 'Cotton textile, Iron & steel, Paper, Fish processing'],
              ['Size', 'Large-scale, Small-scale, Cottage', 'TISCO, Khadi, handicrafts'],
              ['Ownership', 'Public (PSU), Private, Joint, Cooperative', 'SAIL, Tata Steel, AMUL (cooperative)'],
              ['Weight', 'Heavy, Light', 'Steel, cement vs electronics, garments']
            ]) +
            H.h2('Major Industrial Regions') +
            tbl(['Region', 'Industries', 'States/Cities'], [
              ['Mumbai-Pune Industrial Belt', 'Cotton textile, engineering, chemicals, IT', 'Mumbai, Pune, Thane — financial capital + auto hub'],
              ['Gujarat Industrial Belt', 'Petroleum, chemicals, textiles, pharmaceuticals', 'Ahmedabad, Vadodara, Surat, Jamnagar (Reliance refinery)'],
              ['Chota Nagpur Industrial Belt', 'Iron & steel, heavy engineering, mining', 'Jamshedpur (TISCO/Tata Steel), Bokaro (SAIL), Rourkela (SAIL)'],
              ['Hooghly Industrial Belt', 'Jute, cotton, engineering, paper', 'Kolkata, Howrah, Haldia (petrochemicals)'],
              ['Bangalore (Bengaluru) IT Hub', 'Software, electronics, aerospace', 'Silicon Valley of India; ISRO HQ'],
              ['Visakhapatnam-Guntur Belt', 'Steel, petroleum, shipbuilding', 'Vizag Steel Plant, HPCL refinery, naval dockyard'],
              ['Delhi-Mumbai Industrial Corridor (DMIC)', 'Multi-sector planned corridor', 'Delhi to Mumbai via 6 states; smart cities'],
              ['Chennai Industrial Corridor', 'Automobile, IT, leather', 'Detroit of India — Hyundai, Ford, Renault-Nissan'],
              ['Coimbatore-Madurai-Tiruchirapalli', 'Textiles, engineering, pumps', 'Manchester of South India (Coimbatore)']
            ]) +
            H.h2('Important Public Sector Industries') +
            tbl(['Industry/PSU', 'Product', 'Location'], [
              ['SAIL (Steel Authority of India)', 'Steel', 'Plants at Bhilai (Chhattisgarh), Bokaro (Jharkhand), Rourkela (Odisha), Durgapur & Burnpur (WB), Salem (TN)'],
              ['TISCO (Tata Steel)', 'Steel', 'Jamshedpur (Jharkhand); oldest steel plant (1907)'],
              ['BHEL', 'Heavy electrical equipment', 'Bhopal, Haridwar, Hyderabad, Tiruchirapalli, etc.'],
              ['HAL', 'Aircraft, aerospace', 'Bangalore, Lucknow, Hyderabad, etc.'],
              ['HMT', 'Machine tools, watches', 'Bangalore (originally)'],
              ['ITC / Hindustan Unilever', 'Consumer goods', 'Private; Kolkata/Mumbai'],
              ['ONGC', 'Oil & gas exploration', 'Dehradun HQ; Mumbai High operations'],
              ['NTPC', 'Power generation', 'Largest power producer; plants across India'],
              ['NHPC', 'Hydropower', 'Himalayan region projects'],
              ['Hindustan Shipyard', 'Shipbuilding', 'Visakhapatnam'],
              ['Chittaranjan Locomotive Works', 'Electric locomotives', 'West Bengal'],
              ['Integral Coach Factory (ICF)', 'Railway coaches', 'Chennai'],
              ['Rail Coach Factory', 'Railway coaches', 'Kapurthala (Punjab)']
            ]) +
            H.h2('Famous City-Industry Pairs') +
            tbl(['City', 'Known For'], [
              ['Kanpur', 'Leather industry'],
              ['Surat', 'Diamond cutting & polishing, textiles'],
              ['Moradabad', 'Brassware (Peetal)'],
              ['Firozabad', 'Glass bangles and bangles industry'],
              ['Varanasi/Banaras', 'Silk sarees (Banarasi)'],
              ['Kanchipuram', 'Silk sarees'],
              ['Agra', 'Leather footwear, marble inlay (Taj Mahal)'],
              ['Ludhiana', 'Woollen hosiery, bicycle manufacturing'],
              ['Jalandhar', 'Sports goods'],
              ['Aligarh', 'Locks and hardware'],
              ['Bhilwara', 'Textile (synthetic fabric) — Manchester of Rajasthan']
            ]),
            {
              examTip: 'Jamshedpur = Tata Steel (1907, oldest). Bhilai = SAIL (with Russian help). Bengaluru = IT/Silicon Valley. Chennai = automobile hub. Surat = diamonds.',
              quickRevision: [
                'Chota Nagpur = iron & steel belt',
                'Jamshedpur = Tata Steel (1907)',
                'Bengaluru = Silicon Valley of India',
                'Chennai = Detroit of India (automobiles)',
                'Surat = diamond cutting capital'
              ],
              examAsk: 'Industrial city-speciality matching (Surat-diamonds, Kanpur-leather) and steel plant locations are very common exam topics.'
            })
        },
        {
          id: 'transport-india',
          title: 'Transport in India',
          content: T('Transport in India', 'Transport connects people and goods across India through roads, railways, airways, and waterways. India has one of the largest road and railway networks in the world.',
            H.h2('Four Modes of Transport') +
            tbl(['Mode', 'Share / Length', 'Features'], [
              ['Roads', 'Longest network; ~65 lakh km; carries ~65% freight & 85% passenger traffic', 'Most flexible; National Highways Authority of India (NHAI)'],
              ['Railways', '4th largest network in world; ~68,000 route km', 'Largest employer; Indian Railways; cheap long-distance travel'],
              ['Airways', '150+ airports; domestic + international', 'Fastest; UDAN scheme for regional connectivity'],
              ['Waterways', '14,500 km navigable waterways; 111 National Waterways', 'Cheapest; underdeveloped but growing (Sagarmala)']
            ]) +
            H.h2('Important National Highways') +
            tbl(['Highway', 'Route', 'Special Feature'], [
              ['NH-44 (old NH-7)', 'Srinagar to Kanyakumari', 'Longest NH in India (~3,745 km); north-south spine'],
              ['NH-27 (old NH-2)', 'Porbandar to Silchar', 'Longest east-west NH (~3,507 km)'],
              ['NH-48 (old NH-8)', 'Delhi to Chennai', 'Golden Quadrilateral segment; Delhi-Mumbai'],
              ['NH-19 (old NH-2)', 'Delhi to Kolkata', 'Golden Quadrilateral segment'],
              ['NH-30 (old NH-5)', 'Chennai to Kolkata (via Bhubaneswar)', 'East coast corridor'],
              ['NH-1 (old)', 'Delhi to Amritsar', 'Now part of NH-44; Grand Trunk Road section'],
              ['Atal Tunnel Road', 'Manali to Leh (NH-3)', 'All-weather connectivity to Ladakh']
            ]) +
            H.h2('Golden Quadrilateral & Projects') +
            H.p('The <strong>Golden Quadrilateral (GQ)</strong> connects Delhi, Mumbai, Chennai, and Kolkata — about 5,846 km of 4/6 lane highways. Built under <strong>NHDP (National Highway Development Project)</strong>.') +
            H.h2('Important Railway Facts') +
            tbl(['Fact', 'Detail'], [
              ['First train in India', '1853: Mumbai (Bori Bunder) to Thane; 34 km'],
              ['Longest platform', 'Gorakhpur (UP) — 1,366 m'],
              ['Longest train route', 'Dibrugarh (Assam) to Kanyakumari (Tamil Nadu) — Vivek Express'],
              ['Highest railway station', 'Ghum (West Bengal) — Darjeeling Himalayan Railway'],
              ['Konkan Railway', 'Roha (Maharashtra) to Mangalore (Karnataka); 760 km; engineering marvel'],
              ['Dedicated Freight Corridor', 'Eastern (Ludhiana-Dankuni) & Western (Delhi-Mumbai)'],
              ['Vande Bharat Express', 'Semi-high speed train; indigenous'],
              ['Metro Rail cities', 'Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Kochi, Lucknow, etc.']
            ]) +
            H.h2('Ports of India') +
            tbl(['Port', 'Type', 'State', 'Feature'], [
              ['Mumbai (Jawaharlal Nehru/Nhava Sheva)', 'Natural + largest container', 'Maharashtra', 'Busiest port in India'],
              ['Kandla (Deendayal Port)', 'Tidal', 'Gujarat', 'Largest by cargo volume; handles imports/exports'],
              ['Chennai', 'Artificial', 'Tamil Nadu', 'Oldest artificial port on east coast'],
              ['Visakhapatnam', 'Natural', 'Andhra Pradesh', 'Deepest landlocked port; steel & petroleum'],
              ['Kolkata-Haldia', 'Riverine', 'West Bengal', 'Only major riverine port; Haldia Dock Complex'],
              ['Paradip', 'Artificial', 'Odisha', 'Iron ore exports; deepest artificial port'],
              ['Cochin (Kochi)', 'Natural', 'Kerala', 'International container transshipment terminal'],
              ['Tuticorin (Thoothukudi)', 'Natural', 'Tamil Nadu', 'Southern Tamil Nadu trade hub'],
              ['Mormugao', 'Natural', 'Goa', 'Iron ore exports'],
              ['New Mangalore', 'Natural', 'Karnataka', 'Petroleum, iron ore'],
              ['Ennore (Kamarajar)', 'Artificial', 'Tamil Nadu', 'Coal imports; near Chennai'],
              ['Jawaharlal Nehru Port Trust (JNPT)', 'Maharashtra', 'Near Mumbai; largest container port']
            ]) +
            H.p('<strong>UDAN Scheme:</strong> Ude Desh ka Aam Nagrik — affordable regional air connectivity to tier-2/3 cities. <strong>Sagarmala:</strong> Port-led development programme.'),
            {
              examTip: 'NH-44 = longest NH (Srinagar-Kanyakumari). First train 1853 (Mumbai-Thane). Kandla = largest cargo port. JNPT = largest container port. Gorakhpur = longest platform.',
              quickRevision: [
                'Roads carry ~65% freight; Railways 4th largest network',
                'NH-44: Srinagar to Kanyakumari (longest NH)',
                'First train: 1853, Mumbai to Thane',
                'Golden Quadrilateral: Delhi-Mumbai-Chennai-Kolkata',
                'Kandla (Gujarat) = largest cargo port'
              ],
              examAsk: 'Longest NH, first train, major ports, and Golden Quadrilateral cities are standard SSC/Railway exam questions.'
            })
        },
        {
          id: 'major-dams-india',
          title: 'Major Dams of India',
          content: T('Major Dams of India', 'Dams store river water for irrigation, drinking, and electricity (hydropower). India has thousands of dams — some among the largest in the world.',
            H.h2('Types of Dams') +
            H.ul([
              '<strong>Gravity Dam:</strong> Holds water by its own weight — Bhakra, Sardar Sarovar',
              '<strong>Arch Dam:</strong> Curved; transfers pressure to canyon walls — Idukki (Kerala)',
              '<strong>Embankment/Earthen Dam:</strong> Made of earth/rock — Hirakud (Odisha), Tehri (Uttarakhand)',
              '<strong>Buttress Dam:</strong> Supports on downstream side — rarely used in India'
            ]) +
            H.h2('Major Dams of India') +
            tbl(['Dam', 'River', 'State', 'Features'], [
              ['Tehri Dam', 'Bhagirathi', 'Uttarakhand', 'Highest dam in India (260.5 m); multi-purpose'],
              ['Bhakra-Nangal Dam', 'Sutlej', 'HP/Punjab', '2nd highest (226 m); "Temple of Modern India" — Nehru; Green Revolution lifeline'],
              ['Sardar Sarovar Dam', 'Narmada', 'Gujarat', '2nd largest concrete gravity dam; Narmada Valley Project'],
              ['Hirakud Dam', 'Mahanadi', 'Odisha', 'Longest earthen dam in India (25.8 km); flood control + power'],
              ['Nagarjuna Sagar Dam', 'Krishna', 'Telangana/AP', 'Longest masonry dam in world (1.55 km); Green Revolution in AP/Telangana'],
              ['Indira Sagar Dam', 'Narmada', 'Madhya Pradesh', 'Largest reservoir in India by capacity'],
              ['Govind Sagar (Bhakra)', 'Sutlej', 'Punjab/HP', 'Reservoir of Bhakra dam'],
              ['Mettur Dam', 'Kaveri', 'Tamil Nadu', 'Oldest dam in Tamil Nadu (1934); Stanley Reservior'],
              ['Krishnarajasagar (KRS)', 'Kaveri', 'Karnataka', 'Near Mysore; Brindavan Gardens; Sir M. Visvesvaraya designed'],
              ['Almatti Dam', 'Krishna', 'Karnataka', 'Part of Upper Krishna Project'],
              ['Tungabhadra Dam', 'Tungabhadra', 'Karnataka/AP', 'Joint project; Hampi nearby'],
              ['Ukai Dam', 'Tapi', 'Gujarat', 'Largest reservoir in Gujarat'],
              ['Rihand Dam (Govind Ballabh Pant Sagar)', 'Rihand (tributary of Son)', 'UP', 'Largest man-made lake in UP; supplies water to NTPC plants'],
              ['Maithon Dam', 'Barakar', 'Jharkhand/WB', 'Tata Steel; Barakar river (Damodar system)'],
              ['Panchet Dam', 'Damodar', 'Jharkhand/WB', 'Damodar Valley Corporation (DVC) project'],
              ['Konar Dam', 'Konar', 'Jharkhand', 'Part of DVC; first dam of DVC (1955)'],
              ['Tilaiya Dam', 'Barakar', 'Jharkhand', 'DVC project; oldest DVC dam'],
              ['Idukki Dam', 'Periyar', 'Kerala', 'Arch dam; highest arch dam in Asia; Idukki reservoir'],
              ['Mullaperiyar Dam', 'Periyar', 'Kerala/Tamil Nadu', 'Inter-state dispute; over 100 years old'],
              ['Polavaram Dam', 'Godavari', 'Andhra Pradesh', 'Under construction; multi-purpose mega project'],
              ['Farakka Barrage', 'Ganga', 'West Bengal', 'Diverts water to Hooghly; silt management for Kolkata port'],
              ['Koyna Dam', 'Koyna', 'Maharashtra', 'Largest hydroelectric plant in Maharashtra'],
              ['Gandhi Sagar Dam', 'Chambal', 'Madhya Pradesh', 'First of 3 Chambal dams (MP-Rajasthan)'],
              ['Rana Pratap Sagar Dam', 'Chambal', 'Rajasthan', '2nd Chambal dam; rawatbhata nuclear plant nearby'],
              ['Jawahar Sagar Dam', 'Chambal', 'Rajasthan', '3rd Chambal dam'],
              ['Ranjit Sagar (Thein) Dam', 'Ravi', 'Punjab/J&K', 'Part of Ravi-Beas water sharing'],
              ['Salal Dam', 'Chenab', 'J&K', 'Hydroelectric; Chenab valley'],
              ['Baglihar Dam', 'Chenab', 'J&K', 'Hydroelectric; India-Pakistan Indus Waters Treaty'],
              ['Dul Hasti', 'Chenab', 'J&K', 'NHPC project'],
              ['Nimoo Bazgo', 'Indus', 'Ladakh', 'High altitude hydro project'],
              ['Chamera Dam', 'Ravi', 'Himachal Pradesh', 'NHPC project in Chamba district']
            ]) +
            H.h2('Inter-State River Disputes (Important Dams)') +
            H.ul([
              '<strong>Cauvery (Kaveri):</strong> Karnataka vs Tamil Nadu — KRS, Mettur dams',
              '<strong>Krishna:</strong> Maharashtra, Karnataka, AP, Telangana — Almatti, Nagarjuna Sagar',
              '<strong>Narmada:</strong> MP, Gujarat, Maharashtra, Rajasthan — Sardar Sarovar',
              '<strong>Mullaperiyar:</strong> Kerala vs Tamil Nadu — safety vs water rights'
            ]),
            {
              examTip: 'Tehri = highest dam. Hirakud = longest earthen dam. Nagarjuna Sagar = longest masonry dam. Bhakra = "Temple of Modern India". KRS dam designed by Visvesvaraya.',
              quickRevision: [
                'Tehri (Uttarakhand) = highest dam in India',
                'Hirakud (Odisha) = longest earthen dam',
                'Nagarjuna Sagar = longest masonry dam in world',
                'Bhakra-Nangal on Sutlej — Nehru called it Temple of Modern India',
                'Indira Sagar (MP) = largest reservoir by capacity'
              ],
              examAsk: 'Dam-river-state matching (Tehri-Bhagirathi, Hirakud-Mahanadi) is one of the most frequently asked geography topics.'
            })
        }
      ]
    },
    {
      id: 'world-geography',
      name: 'D. World Geography',
      topics: [
        {
          id: 'continents',
          title: 'Continents of the World',
          content: T('Continents of the World', 'Continents are the largest land masses on Earth. There are 7 continents, each with unique features, countries, and people.',
            H.h2('Seven Continents (by Size)') +
            tbl(['Continent', 'Area (million sq km)', 'Highest Point', 'Special Features'], [
              ['Asia', '44.6', 'Mount Everest (8,849 m) — Nepal/China', 'Largest & most populous continent; 60% of world population'],
              ['Africa', '30.3', 'Mount Kilimanjaro (5,895 m) — Tanzania', '2nd largest; Sahara Desert; most equator-crossing countries'],
              ['North America', '24.7', 'Denali/McKinley (6,190 m) — USA', '3rd largest; Great Lakes; Rocky Mountains'],
              ['South America', '17.8', 'Aconcagua (6,961 m) — Argentina', 'Amazon rainforest (largest); Andes mountains (longest range)'],
              ['Antarctica', '14.2', 'Vinson Massif (4,892 m)', 'Coldest; no permanent residents; 90% of world\'s ice'],
              ['Europe', '10.2', 'Mount Elbrus (5,642 m) — Russia', 'Smallest by area (if counted separately from Asia)'],
              ['Australia', '7.7', 'Mount Kosciuszko (2,228 m)', 'Smallest continent; island continent; Great Barrier Reef']
            ]) +
            H.h2('Continental Facts') +
            tbl(['Fact', 'Detail'], [
              ['Most populous continent', 'Asia (~4.7 billion people)'],
              ['Least populous continent', 'Antarctica (no permanent population)'],
              ['Longest mountain range', 'Andes (South America) — ~7,000 km'],
              ['Longest river (debated)', 'Nile (Africa, ~6,650 km) or Amazon (South America, ~6,400 km)'],
              ['Largest desert (hot)', 'Sahara (Africa) — ~9.2 million sq km'],
              ['Largest desert (cold/polar)', 'Antarctica'],
              ['Driest place on Earth', 'Atacama Desert (Chile, South America)'],
              ['Coldest inhabited place', 'Oymyakon (Russia, Asia) — -71°C recorded']
            ]) +
            H.h2('Important Straits & Boundaries Between Continents') +
            H.ul([
              '<strong>Asia & Europe:</strong> Ural Mountains, Ural River, Caspian Sea, Caucasus Mountains (conventional boundary)',
              '<strong>Asia & Africa:</strong> Suez Canal / Red Sea',
              '<strong>North & South America:</strong> Panama Canal / Darien Gap (Colombia-Panama border)',
              '<strong>Asia & North America:</strong> Bering Strait (85 km wide at narrowest)'
            ]),
            {
              examTip: 'Asia = largest & most populous. Australia = smallest continent. Andes = longest mountain range. Sahara = largest hot desert. Everest is in Asia (Nepal/China border).',
              quickRevision: [
                '7 continents: Asia, Africa, N America, S America, Antarctica, Europe, Australia',
                'Asia = largest by area and population',
                'Australia = smallest continent',
                'Andes = longest mountain range (S America)',
                'Sahara = largest hot desert (Africa)'
              ],
              examAsk: 'Continent size order, highest peaks, and largest desert/rainforest questions appear regularly in SSC and Banking exams.'
            })
        },
        {
          id: 'oceans',
          title: 'Oceans of the World',
          content: T('Oceans of the World', 'The world has five oceans that cover about 71% of Earth. They connect continents and influence climate and trade.',
            H.h2('Five Oceans (by Size — Largest to Smallest)') +
            tbl(['Ocean', 'Area (million sq km)', 'Average Depth', 'Key Facts'], [
              ['Pacific Ocean', '165.2', '~4,280 m', 'Largest & deepest; Mariana Trench; Ring of Fire; covers 1/3 of Earth'],
              ['Atlantic Ocean', '76.8', '~3,646 m', '2nd largest; S-shaped; busiest shipping; Bermuda Triangle'],
              ['Indian Ocean', '68.6', '~3,741 m', '3rd largest; warmest; monsoon driver; no north-south land barrier'],
              ['Southern Ocean (Antarctic)', '20.3', '~3,270 m', 'Surrounds Antarctica; 4th largest; declared 2000 (IHO)'],
              ['Arctic Ocean', '14.1', '~1,205 m', 'Smallest & shallowest; mostly ice-covered; surrounds North Pole']
            ]) +
            H.h2('Deepest Points & Trenches') +
            tbl(['Trench / Point', 'Ocean', 'Depth (approx.)'], [
              ['Mariana Trench (Challenger Deep)', 'Pacific', '~11,034 m (deepest on Earth)'],
              ['Tonga Trench', 'Pacific', '~10,882 m'],
              ['Philippine Trench', 'Pacific', '~10,540 m'],
              ['Puerto Rico Trench', 'Atlantic', '~8,648 m (deepest in Atlantic)'],
              ['South Sandwich Trench', 'Atlantic/Southern', '~8,428 m'],
              ['Java Trench', 'Indian Ocean', '~7,725 m (deepest in Indian Ocean)'],
              ['Diamantina Deep', 'Indian Ocean', '~7,079 m'],
              ['Arctic Basin (Eurasia Basin)', 'Arctic', '~5,450 m (deepest in Arctic)']
            ]) +
            H.h2('Important Seas (by Ocean)') +
            tbl(['Sea', 'Ocean', 'Bordering Countries / Feature'], [
              ['Caribbean Sea', 'Atlantic', 'Central America, Caribbean islands; piracy history'],
              ['Mediterranean Sea', 'Atlantic (connected)', 'Europe, Africa, Asia; Suez Canal exit to Red Sea'],
              ['Red Sea', 'Indian (connected via Suez)', 'Between Africa & Arabia; Suez Canal link'],
              ['Arabian Sea', 'Indian', 'India, Pakistan, Oman, Yemen; monsoon winds'],
              ['Bay of Bengal', 'Indian', 'India, Bangladesh, Myanmar, Sri Lanka; cyclones'],
              ['South China Sea', 'Pacific', 'Disputed waters; major trade route'],
              ['Coral Sea', 'Pacific', 'NE of Australia; Great Barrier Reef'],
              ['Bering Sea', 'Pacific', 'Between Alaska & Russia; rich fisheries'],
              ['North Sea', 'Atlantic', 'UK, Norway, Netherlands; North Sea oil'],
              ['Black Sea', 'Atlantic (via Med)', 'Turkey, Ukraine, Russia, Bulgaria, Romania; no oxygen at depth'],
              ['Caspian Sea', 'Landlocked (not ocean)', 'World\'s largest lake/ inland sea; 5 countries border it']
            ]),
            {
              examTip: 'Pacific = largest & deepest (Mariana Trench). Arctic = smallest & shallowest. Challenger Deep = deepest point on Earth. Indian Ocean = warmest.',
              quickRevision: [
                '5 oceans: Pacific, Atlantic, Indian, Southern, Arctic',
                'Pacific = largest; Arctic = smallest',
                'Mariana Trench = deepest point (~11,034 m)',
                'Oceans cover 71% of Earth\'s surface',
                'Indian Ocean = warmest ocean'
              ],
              examAsk: 'Ocean size order, Mariana Trench depth, and sea-ocean matching are common world geography questions.'
            })
        },
        {
          id: 'deserts',
          title: 'Deserts of the World',
          content: T('Deserts of the World', 'Deserts are dry regions with very little rainfall (usually less than 25 cm per year). They can be hot (Sahara) or cold (Gobi, Antarctica).',
            H.h2('Types of Deserts') +
            H.ul([
              '<strong>Hot/Tropical Deserts:</strong> Near 30° latitude — Sahara, Arabian, Thar, Kalahari',
              '<strong>Mid-latitude Deserts:</strong> Interior of continents — Gobi, Great Basin',
              '<strong>Cold/Polar Deserts:</strong> High latitude or altitude — Antarctica, Arctic tundra areas',
              '<strong>Coastal Deserts:</strong> Cold currents + rain shadow — Atacama (Chile), Namib (Africa)'
            ]) +
            H.h2('Major Deserts of the World') +
            tbl(['Desert', 'Continent / Region', 'Area (sq km approx.)', 'Key Facts'], [
              ['Antarctic Desert', 'Antarctica', '~14.2 million', 'Largest desert in world (cold desert); almost no precipitation'],
              ['Arctic Desert', 'Arctic (polar regions)', '~13.9 million', 'Cold desert; tundra and ice'],
              ['Sahara Desert', 'North Africa', '~9.2 million', 'Largest HOT desert; covers 11 countries; Sahara means "desert" in Arabic'],
              ['Arabian Desert', 'Middle East (Arabian Peninsula)', '~2.3 million', 'Rub\' al Khali (Empty Quarter) — largest sand desert'],
              ['Gobi Desert', 'Mongolia & China', '~1.3 million', 'Cold desert; Asia\'s largest; dinosaur fossils found'],
              ['Kalahari Desert', 'Botswana, Namibia, SA', '~900,000', 'Semi-arid; supports some wildlife; San people'],
              ['Patagonian Desert', 'Argentina', '~673,000', 'Cold desert; rain shadow of Andes'],
              ['Great Victoria Desert', 'Australia', '~647,000', 'Largest desert in Australia'],
              ['Syrian Desert', 'Syria, Iraq, Jordan', '~520,000', 'Part of Arabian Desert system'],
              ['Great Basin Desert', 'USA (Nevada, Utah)', '~492,000', 'Cold desert; between Sierra Nevada & Rocky Mountains'],
              ['Thar Desert (Great Indian Desert)', 'India & Pakistan', '~238,000', 'India\'s only desert; Rajasthan (mainly)'],
              ['Atacama Desert', 'Chile (South America)', '~105,000', 'Driest non-polar desert on Earth; some areas zero rainfall recorded'],
              ['Namib Desert', 'Namibia (Africa)', '~81,000', 'Oldest desert in world (~55 million years); coastal fog desert'],
              ['Sonoran Desert', 'USA & Mexico', '~310,000', 'Saguaro cactus; Arizona-Mexico border region'],
              ['Mojave Desert', 'USA (California, Nevada)', '~124,000', 'Death Valley — lowest point in North America (-86 m)'],
              ['Chihuahuan Desert', 'Mexico & USA', '~453,000', 'Largest desert in North America']
            ]) +
            H.h2('Desert-Country Quick Match') +
            tbl(['Desert', 'Country/Countries'], [
              ['Sahara', 'Algeria, Libya, Egypt, Mali, Niger, Chad, Sudan, Morocco, etc.'],
              ['Atacama', 'Chile'],
              ['Gobi', 'Mongolia, China'],
              ['Kalahari', 'Botswana, Namibia, South Africa'],
              ['Thar', 'India (Rajasthan), Pakistan'],
              ['Namib', 'Namibia'],
              ['Rub\' al Khali', 'Saudi Arabia, Oman, UAE, Yemen']
            ]),
            {
              examTip: 'Antarctica = largest desert (cold). Sahara = largest HOT desert. Atacama = driest. Thar = India\'s only desert. Namib = oldest desert. Gobi = Asia\'s largest.',
              quickRevision: [
                'Antarctica = largest desert overall (cold)',
                'Sahara = largest hot desert (Africa)',
                'Atacama (Chile) = driest desert on Earth',
                'Thar = India\'s only desert (Rajasthan)',
                'Gobi = largest desert in Asia'
              ],
              examAsk: 'Largest hot desert, driest desert, and desert-country matching are standard world geography exam questions.'
            })
        },
        {
          id: 'grasslands',
          title: 'Grasslands of the World',
          content: T('Grasslands of the World', 'Grasslands are large open areas covered mainly with grass and few trees. They are used for grazing animals and farming. Each continent has its own named grasslands.',
            H.h2('Major Grasslands of the World') +
            tbl(['Grassland', 'Local Name', 'Continent / Country', 'Features / Animals'], [
              ['Eurasian Steppe', 'Steppe', 'Russia, Ukraine, Kazakhstan', 'Vast temperate grassland; wheat farming; nomadic history'],
              ['North American Prairie', 'Prairie', 'USA, Canada (Great Plains)', 'Deep fertile soil; corn, wheat; bison historically'],
              ['South American Pampas', 'Pampas', 'Argentina, Uruguay, Brazil', 'Cattle ranching; gaucho culture; fertile lowlands'],
              ['African Savanna', 'Savanna / Veldt', 'East & South Africa (Kenya, Tanzania, SA)', 'Lions, elephants, giraffes; acacia trees; Serengeti'],
              ['Australian Downs', 'Downs', 'Australia (Queensland, NSW)', 'Sheep and cattle grazing; semi-arid grassland'],
              ['Asian Tropical Grassland', 'Terai / Campos', 'Nepal (Terai), India (Terai belt), Brazil (Campos)', 'Terai = foothills of Himalayas; elephant, rhino habitat']
            ]) +
            H.h2('Indian Grasslands') +
            H.ul([
              '<strong>Terai Region:</strong> Foothills of Himalayas in UP, Uttarakhand, Bihar, West Bengal, Assam — tall grass, rhinos, elephants',
              '<strong>Semi-arid Grasslands:</strong> Deccan plateau margins, Gujarat — grazing for cattle',
              '<strong>Shola Grasslands:</strong> High altitude grasslands in Western Ghats (Nilgiri, Palani hills) — unique ecosystem'
            ]) +
            H.h2('Grassland vs Desert vs Forest') +
            tbl(['Feature', 'Grassland', 'Desert', 'Forest'], [
              ['Rainfall', '25–75 cm/year', '<25 cm/year', '>75 cm/year (varies)'],
              ['Vegetation', 'Grasses dominate', 'Sparse/xerophytic plants', 'Trees dominate'],
              ['Use', 'Grazing, agriculture', 'Nomadic grazing (limited)', 'Timber, biodiversity'],
              ['Example', 'Pampas (Argentina)', 'Sahara (Africa)', 'Amazon (S America)']
            ]) +
            H.p('<strong>Exam names to remember:</strong> Prairie = North America | Pampas = South America | Steppe = Eurasia | Savanna/Veldt = Africa | Downs = Australia'),
            {
              examTip: 'Prairie = USA/Canada. Pampas = Argentina. Steppe = Russia/Kazakhstan. Savanna = Africa (Serengeti). Veldt = South Africa. Each continent has a different local name!',
              quickRevision: [
                'Prairie — North America (USA, Canada)',
                'Pampas — South America (Argentina)',
                'Steppe — Eurasia (Russia, Kazakhstan)',
                'Savanna/Veldt — Africa',
                'Downs — Australia'
              ],
              examAsk: 'Grassland name-continent matching (Pampas-Argentina, Prairie-USA) is asked in almost every SSC and Railway exam.'
            })
        },
        {
          id: 'world-rivers',
          title: 'Rivers of the World',
          content: T('Rivers of the World', 'Rivers are flowing water bodies that shape land, provide water for people, and are important for transport and farming. The world\'s longest rivers cross many countries.',
            H.h2('Longest Rivers of the World') +
            tbl(['River', 'Length (km approx.)', 'Continent', 'Origin → Mouth', 'Countries / Features'], [
              ['Nile', '~6,650', 'Africa', 'Lake Victoria area → Mediterranean Sea', 'Uganda, Sudan, Egypt; longest river (traditional view); White & Blue Nile'],
              ['Amazon', '~6,400', 'South America', 'Andes (Peru) → Atlantic Ocean', 'Brazil, Peru, Colombia; largest water discharge; rainforest'],
              ['Yangtze (Chang Jiang)', '~6,300', 'Asia', 'Tibet → East China Sea', 'China; longest in Asia; Three Gorges Dam'],
              ['Mississippi-Missouri', '~6,275', 'North America', 'Montana → Gulf of Mexico', 'USA; longest in North America; New Orleans at mouth'],
              ['Yenisei-Angara', '~5,539', 'Asia', 'Mongolia → Arctic Ocean', 'Russia (Siberia); flows to Arctic'],
              ['Yellow River (Huang He)', '~5,464', 'Asia', 'Tibet → Bohai Sea (China)', 'China; "Mother River of China"; heavy silt (yellow)'],
              ['Ob-Irtysh', '~5,410', 'Asia', 'Altai Mountains → Arctic Ocean', 'Russia, Kazakhstan, China; Siberia'],
              ['Paraná', '~4,880', 'South America', 'Brazil → Atlantic (Argentina)', 'Itaipu Dam (Brazil-Paraguay border)'],
              ['Congo (Zaire)', '~4,700', 'Africa', 'Zambia → Atlantic Ocean', '2nd largest discharge in Africa; crosses equator twice'],
              ['Amur (Heilong Jiang)', '~4,444', 'Asia', 'Mongolia → Sea of Okhotsk', 'Russia-China border river'],
              ['Lena', '~4,400', 'Asia', 'Baikal Mountains → Arctic Ocean', 'Russia (Siberia); entirely in Russia'],
              ['Mekong', '~4,350', 'Asia', 'Tibet → South China Sea', 'China, Myanmar, Laos, Thailand, Cambodia, Vietnam'],
              ['Niger', '~4,200', 'Africa', 'Guinea → Atlantic Ocean', 'Famous "boomerang" shape; Mali, Niger, Nigeria'],
              ['Murray-Darling', '~3,672', 'Australia', 'Great Dividing Range → Southern Ocean', 'Longest river system in Australia'],
              ['Volga', '~3,531', 'Europe/Asia', 'Valdai Hills → Caspian Sea', 'Longest river in Europe; Russia; flows INTO Caspian (endorheic)'],
              ['Danube', '~2,850', 'Europe', 'Black Forest (Germany) → Black Sea', '2nd longest in Europe; passes through 10 countries'],
              ['Rhine', '~1,230', 'Europe', 'Swiss Alps → North Sea', 'Major trade route; passes through 6 countries'],
              ['Thames', '~346', 'Europe', 'Cotswolds (England) → North Sea', 'London is on Thames; UK\'s most famous river'],
              ['Seine', '~777', 'Europe', 'France → English Channel', 'Paris is on Seine'],
              ['Indus', '~3,180', 'Asia', 'Tibet → Arabian Sea', 'Pakistan, India, China; cradle of Indus Valley Civilization'],
              ['Ganga (Ganges)', '~2,525', 'Asia', 'Gangotri (India) → Bay of Bengal', 'Sacred river of India; most populated basin'],
              ['Brahmaputra', '~2,900', 'Asia', 'Tibet → Bay of Bengal', 'Known as Tsangpo in Tibet, Jamuna in Bangladesh']
            ]) +
            H.h2('Rivers Flowing Through Most Countries') +
            H.ul([
              '<strong>Danube:</strong> 10 countries (Germany, Austria, Slovakia, Hungary, Croatia, Serbia, Bulgaria, Romania, Moldova, Ukraine)',
              '<strong>Nile:</strong> 11 countries in basin (Uganda, Sudan, Egypt, Ethiopia, etc.)',
              '<strong>Rhine:</strong> 6 countries'
            ]) +
            H.h2('Special River Facts') +
            tbl(['Fact', 'River'], [
              ['Largest discharge (volume of water)', 'Amazon'],
              ['Longest river (traditional)', 'Nile'],
              ['Longest river (some modern surveys)', 'Amazon (debated)'],
              ['Crosses equator twice', 'Congo'],
              ['Largest river delta', 'Ganga-Brahmaputra (Sundarbans)'],
              ['Sacred river of India', 'Ganga'],
              ['River that flows through Paris', 'Seine'],
              ['River that flows through London', 'Thames'],
              ['Longest river in Europe', 'Volga (Russia)']
            ]),
            {
              examTip: 'Nile vs Amazon = longest river debate (exam answer: Nile traditionally). Amazon = largest discharge. Volga = longest in Europe. Danube = passes through 10 countries. Congo crosses equator twice.',
              quickRevision: [
                'Nile = longest river (Africa); Amazon = largest discharge',
                'Volga (Russia) = longest river in Europe',
                'Danube passes through 10 countries',
                'Congo crosses equator twice',
                'Mississippi-Missouri = longest in North America'
              ],
              examAsk: 'Longest rivers, river-country matching, and special facts (Congo-equator, Volga-Europe) are among the most asked world geography questions.'
            })
        },
        {
          id: 'world-lakes',
          title: 'Lakes of the World',
          content: T('Lakes of the World', 'Lakes are bodies of water surrounded by land. They can be freshwater or saltwater, and form by glaciers, volcanoes, rivers, or tectonic activity.',
            H.h2('Largest Lakes of the World') +
            tbl(['Lake', 'Location', 'Area (sq km)', 'Type / Feature'], [
              ['Caspian Sea', 'Russia, Kazakhstan, Turkmenistan, Iran, Azerbaijan', '~371,000', 'Largest lake in world; saltwater; technically a lake, not a sea'],
              ['Superior', 'USA-Canada (Great Lakes)', '~82,100', 'Largest freshwater lake by area'],
              ['Victoria', 'Uganda, Kenya, Tanzania (Africa)', '~68,800', 'Largest lake in Africa; source of White Nile'],
              ['Huron', 'USA-Canada (Great Lakes)', '~59,600', '2nd largest of Great Lakes by area'],
              ['Michigan', 'USA (Great Lakes)', '~58,000', 'Only Great Lake entirely in USA'],
              ['Tanganyika', 'Tanzania, DRC, Burundi, Zambia (Africa)', '~32,900', '2nd deepest lake in world (~1,470 m); longest freshwater lake'],
              ['Baikal', 'Russia (Siberia)', '~31,500', 'Deepest lake in world (~1,642 m); oldest (~25 million years); 20% of unfrozen freshwater'],
              ['Great Bear Lake', 'Canada', '~31,000', 'Largest lake entirely in Canada'],
              ['Malawi (Nyasa)', 'Malawi, Mozambique, Tanzania (Africa)', '~29,600', '3rd largest in Africa; rich fish diversity'],
              ['Great Slave Lake', 'Canada', '~27,200', 'Deepest lake in North America (~614 m)'],
              ['Erie', 'USA-Canada (Great Lakes)', '~25,700', 'Shallowest of Great Lakes'],
              ['Ontario', 'USA-Canada (Great Lakes)', '~18,960', 'Smallest of Great Lakes by area'],
              ['Aral Sea', 'Kazakhstan-Uzbekistan (Central Asia)', 'Shrinking', 'Was 4th largest; shrunk due to irrigation; environmental disaster'],
              ['Ladoga', 'Russia', '~17,700', 'Largest lake in Europe'],
              ['Titicaca', 'Peru-Bolivia (South America)', '~8,372', 'Highest navigable lake in world (~3,812 m altitude)'],
              ['Van', 'Turkey', '~3,755', 'Largest lake in Turkey; soda/ alkaline water; no outlet'],
              ['Dead Sea', 'Israel-Jordan (Middle East)', '~605', 'Lowest point on Earth (-430 m); extremely salty; you float!'],
              ['Great Salt Lake', 'USA (Utah)', '~4,400', 'Saltier than ocean; remnant of ancient Lake Bonneville'],
              ['Lake Geneva', 'Switzerland-France', '~580', 'Largest lake in Alps region; crescent-shaped'],
              ['Loch Ness', 'Scotland (UK)', '~56', 'Famous for "Nessie" legend; deep (230 m)']
            ]) +
            H.h2('Great Lakes of North America (Remember "HOMES")') +
            tbl(['Letter', 'Lake', 'Shared By'], [
              ['H', 'Huron', 'USA & Canada'],
              ['O', 'Ontario', 'USA & Canada'],
              ['M', 'Michigan', 'USA only (only one entirely in USA)'],
              ['E', 'Erie', 'USA & Canada'],
              ['S', 'Superior', 'USA & Canada — largest by area']
            ]) +
            H.h2('Special Lake Records') +
            tbl(['Record', 'Lake'], [
              ['Largest lake (any type)', 'Caspian Sea'],
              ['Largest freshwater lake (by area)', 'Lake Superior'],
              ['Deepest lake in the world', 'Lake Baikal (Russia)'],
              ['Highest navigable lake', 'Lake Titicaca (Peru-Bolivia)'],
              ['Lowest point on Earth (surface)', 'Dead Sea (-430 m)'],
              ['Largest lake in Africa', 'Lake Victoria'],
              ['Oldest lake', 'Lake Baikal (~25 million years)'],
              ['Largest lake in Europe', 'Lake Ladoga (Russia)']
            ]),
            {
              examTip: 'Caspian Sea = largest lake (not a sea!). Baikal = deepest & oldest. Superior = largest freshwater by area. Titicaca = highest navigable. Dead Sea = lowest point on Earth. Great Lakes = HOMES.',
              quickRevision: [
                'Caspian Sea = largest lake in world',
                'Lake Baikal (Russia) = deepest & oldest',
                'Lake Superior = largest freshwater lake by area',
                'Great Lakes: HOMES (Huron, Ontario, Michigan, Erie, Superior)',
                'Dead Sea = lowest point on Earth; very salty'
              ],
              examAsk: 'Largest/deepest/highest lakes and Great Lakes (HOMES) are extremely common in SSC, Banking, and Railway exams.'
            })
        },
        {
          id: 'straits',
          title: 'Straits of the World',
          content: T('Straits of the World', 'A strait is a narrow passage of water connecting two larger bodies of water. Straits are important for shipping, trade, and military strategy.',
            H.h2('Important Straits of the World') +
            tbl(['Strait', 'Connects', 'Location / Countries', 'Significance'], [
              ['Strait of Hormuz', 'Persian Gulf ↔ Gulf of Oman / Arabian Sea', 'Iran & Oman (UAE nearby)', 'World\'s most important oil shipping route; ~20% of world oil passes through'],
              ['Strait of Malacca', 'Andaman Sea ↔ South China Sea', 'Malaysia, Indonesia, Singapore', 'Busiest shipping lane; connects Indian & Pacific Oceans; piracy history'],
              ['Bab-el-Mandeb', 'Red Sea ↔ Gulf of Aden / Arabian Sea', 'Yemen & Djibouti (Africa)', 'Gateway to Suez Canal from south; "Gate of Tears"'],
              ['Bosphorus Strait', 'Black Sea ↔ Sea of Marmara', 'Turkey (Istanbul)', 'Only passage from Black Sea to Mediterranean (via Dardanelles); Turkey controls it'],
              ['Dardanelles Strait', 'Sea of Marmara ↔ Aegean Sea', 'Turkey', 'Connects to Mediterranean; Gallipoli campaign (WWI)'],
              ['Gibraltar Strait', 'Atlantic Ocean ↔ Mediterranean Sea', 'Spain & Morocco (UK controls Gibraltar)', 'Only natural entry to Mediterranean from Atlantic; 14 km wide'],
              ['English Channel', 'Atlantic ↔ North Sea', 'England & France', 'Separates UK from Europe; Channel Tunnel (Eurotunnel) runs beneath'],
              ['Dover Strait', 'Part of English Channel', 'England & France', 'Narrowest part (~34 km); busiest shipping lane in world'],
              ['Bering Strait', 'Arctic Ocean ↔ Pacific Ocean', 'Russia (Siberia) & USA (Alaska)', 'Separates Asia & North America; ~85 km wide; Diomede Islands'],
              ['Palk Strait', 'Bay of Bengal ↔ Indian Ocean', 'India (Tamil Nadu) & Sri Lanka', 'Separates India from Sri Lanka; Adam\'s Bridge/Ram Setu nearby'],
              ['Sunda Strait', 'Java Sea ↔ Indian Ocean', 'Indonesia (between Java & Sumatra)', 'Krakatoa volcano (1883 eruption) was here'],
              ['Lombok Strait', 'Java Sea ↔ Indian Ocean', 'Indonesia (Bali & Lombok)', 'Alternative to Malacca; deep water route'],
              ['Magellan Strait', 'Atlantic ↔ Pacific Ocean', 'Chile (southern tip of South America)', 'Named after Ferdinand Magellan (1520); natural passage around South America'],
              ['Drake Passage', 'Atlantic ↔ Pacific Ocean', 'South of South America (Cape Horn)', 'Open ocean passage; roughest seas in world; no land at 60°S except here'],
              ['Torres Strait', 'Arafura Sea ↔ Pacific Ocean', 'Australia & Papua New Guinea', 'Shallow strait; between Cape York & PNG'],
              ['Cook Strait', 'Tasman Sea ↔ Pacific Ocean', 'North & South Islands of New Zealand', 'Separates NZ\'s two main islands'],
              ['Bass Strait', 'Tasman Sea ↔ Southern Ocean', 'Australia (Victoria & Tasmania)', 'Separates Tasmania from mainland Australia'],
              ['Mozambique Channel', 'Mozambique ↔ Madagascar', 'Indian Ocean (East Africa)', 'Not a narrow strait but important passage; ~1,600 km wide'],
              ['Yucatan Channel', 'Caribbean Sea ↔ Gulf of Mexico', 'Mexico & Cuba', 'Important for Gulf of Mexico oil routes'],
              ['Florida Strait', 'Gulf of Mexico ↔ Atlantic Ocean', 'USA (Florida) & Cuba', 'Gulf Stream begins here; Miami to Cuba route'],
              ['Taiwan Strait', 'East China Sea ↔ South China Sea', 'China & Taiwan', 'Politically sensitive; major trade route'],
              ['Korea Strait', 'East China Sea ↔ Sea of Japan', 'South Korea & Japan', 'Separates Korea from Japan; Tsushima Island in middle'],
              ['Tsugaru Strait', 'Sea of Japan ↔ Pacific Ocean', 'Honshu & Hokkaido (Japan)', 'Connects two seas around Japan'],
              ['Messina Strait', 'Tyrrhenian Sea ↔ Ionian Sea', 'Italy (Sicily & mainland)', 'Between Sicily and Italian mainland; Scylla & Charybdis of mythology']
            ]) +
            H.h2('Strait-Country Quick Match (Exam Favourites)') +
            tbl(['Strait', 'Separates / Connects Which Countries?'], [
              ['Palk Strait', 'India & Sri Lanka'],
              ['Bering Strait', 'Russia (Asia) & USA (North America)'],
              ['Gibraltar', 'Europe (Spain) & Africa (Morocco)'],
              ['Hormuz', 'Persian Gulf access — Iran & Oman region'],
              ['Malacca', 'Malaysia, Indonesia, Singapore region'],
              ['Bosphorus', 'European Turkey & Asian Turkey (Istanbul)'],
              ['English Channel', 'England (UK) & France']
            ]),
            {
              examTip: 'Malacca = busiest shipping lane. Hormuz = oil route. Palk Strait = India-Sri Lanka. Bering = Asia-N America. Gibraltar = Atlantic-Mediterranean. Bab-el-Mandeb = Red Sea gateway.',
              quickRevision: [
                'Strait of Malacca — busiest shipping lane (Indian-Pacific link)',
                'Strait of Hormuz — major oil shipping route',
                'Palk Strait — India & Sri Lanka',
                'Bering Strait — Asia & North America (Russia-USA)',
                'Gibraltar — Atlantic & Mediterranean'
              ],
              examAsk: 'Strait-location matching (Palk, Malacca, Hormuz, Bering) is one of the MOST asked world geography topics in all government exams.'
            })
        },
        {
          id: 'canals',
          title: 'Canals of the World',
          content: T('Canals of the World', 'Canals are man-made waterways built for shipping, irrigation, or transport. Some canals connect oceans and seas, saving thousands of kilometres of travel.',
            H.h2('Major Canals of the World') +
            tbl(['Canal', 'Location / Country', 'Connects', 'Length', 'Significance'], [
              ['Suez Canal', 'Egypt', 'Mediterranean Sea ↔ Red Sea', '~193 km', 'Opened 1869; connects Europe-Asia without going around Africa; saves ~7,000 km; toll-based revenue for Egypt'],
              ['Panama Canal', 'Panama (Central America)', 'Atlantic Ocean ↔ Pacific Ocean', '~82 km', 'Opened 1914; avoids Cape Horn route around South America; saves ~12,000 km; expanded 2016 (NeoPanamax)'],
              ['Kiel Canal', 'Germany', 'Baltic Sea ↔ North Sea', '~98 km', 'Busiest artificial waterway in world; avoids going around Denmark; opened 1895'],
              ['Corinth Canal', 'Greece', 'Aegean Sea ↔ Ionian Sea (Gulf of Corinth)', '~6.4 km', 'Cuts through Isthmus of Corinth; very narrow; mostly tourist use now'],
              ['Grand Canal (Beijing-Hangzhou)', 'China', 'Beijing ↔ Hangzhou', '~1,794 km', 'Longest canal/artificial river in world; built over centuries; UNESCO site; still in use'],
              ['Manchester Ship Canal', 'England (UK)', 'Manchester ↔ Irish Sea (Liverpool Bay)', '~58 km', 'Made Manchester a port city; opened 1894'],
              ['Erie Canal', 'USA (New York State)', 'Hudson River ↔ Great Lakes', '~584 km', 'Opened 1825; transformed US trade; "Gateway to the West"'],
              ['Rhine-Main-Danube Canal', 'Germany', 'North Sea (via Rhine) ↔ Black Sea (via Danube)', '~171 km', 'Completed 1992; connects Atlantic/North Sea to Black Sea'],
              ['Volga-Don Canal', 'Russia', 'Volga River ↔ Don River', '~101 km', 'Connects Caspian Sea to Black Sea (via Volga → Don → Black Sea)'],
              ['White Sea-Baltic Canal', 'Russia', 'White Sea ↔ Baltic Sea', '~227 km', 'Built 1930s (Stalin era); connects Arctic to Baltic'],
              ['Welland Canal', 'Canada (Ontario)', 'Lake Erie ↔ Lake Ontario', '~44 km', 'Bypasses Niagara Falls; part of St. Lawrence Seaway'],
              ['St. Lawrence Seaway', 'USA-Canada', 'Atlantic Ocean ↔ Great Lakes', '~600 km system', 'Deep waterway; ships reach Great Lakes from Atlantic; opened 1959'],
              ['Indira Gandhi Canal', 'India (Rajasthan)', 'Sutlej/Beas rivers ↔ Thar Desert', '~650 km', 'Longest canal in India; irrigates Rajasthan desert; formerly Rajasthan Canal'],
              ['Buckingham Canal', 'India (Andhra Pradesh, Tamil Nadu)', 'Coastal canal parallel to Coromandel coast', '~796 km (part navigable)', 'Coastal navigation canal in South India'],
              ['Ganges Canal', 'India (Uttar Pradesh)', 'Ganga river ↔ Doab region', '~640 km', 'One of oldest canals in India; built 1854'],
              ['Agra Canal', 'India (UP)', 'Okhla (Yamuna) ↔ Agra', '~140 km', 'Built during British era; irrigation in Doab']
            ]) +
            H.h2('Suez vs Panama — Comparison') +
            tbl(['Feature', 'Suez Canal', 'Panama Canal'], [
              ['Country', 'Egypt', 'Panama'],
              ['Connects', 'Mediterranean ↔ Red Sea', 'Atlantic ↔ Pacific'],
              ['Opened', '1869', '1914'],
              ['Type', 'Sea-level (no locks originally; now has)', 'Lock-based (lifts ships over Panama isthmus)'],
              ['Avoids route around', 'Cape of Good Hope (Africa)', 'Cape Horn (South America)'],
              ['Distance saved', '~7,000 km', '~12,000 km'],
              ['Controlled by', 'Suez Canal Authority (Egypt)', 'Panama Canal Authority (Panama)']
            ]) +
            H.h2('Indian Canals (Important for Exams)') +
            tbl(['Canal', 'State', 'Feature'], [
              ['Indira Gandhi Canal', 'Rajasthan', 'Longest canal in India; green revolution in desert'],
              ['Ganges Canal', 'Uttar Pradesh', 'Among oldest in India (1854)'],
              ['Upper Ganga Canal', 'Uttar Pradesh', 'From Haridwar; Doab irrigation'],
              ['Buckingham Canal', 'Andhra Pradesh, Tamil Nadu', 'Coastal canal; Coromandel coast']
            ]),
            {
              examTip: 'Suez (1869) = Med-Red Sea, Egypt. Panama (1914) = Atlantic-Pacific. Kiel = Baltic-North Sea (busiest). Grand Canal China = longest in world. Indira Gandhi Canal = longest in India.',
              quickRevision: [
                'Suez Canal (Egypt, 1869): Mediterranean ↔ Red Sea',
                'Panama Canal (1914): Atlantic ↔ Pacific',
                'Kiel Canal (Germany): busiest artificial waterway',
                'Grand Canal (China): longest canal in world',
                'Indira Gandhi Canal (Rajasthan): longest in India'
              ],
              examAsk: 'Suez vs Panama canal connections, opening years, and Indira Gandhi Canal as India\'s longest are standard exam questions.'
            })
        }
      ]
    }
  ]
};
})();
