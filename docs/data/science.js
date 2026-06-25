(function() {
window.GA_DATA = window.GA_DATA || {};
const H = window.GA_HELPERS;
const T = (...args) => H.topic(...args);
const tbl = H.table;

window.GA_DATA.science = {
  id: 'science',
  name: 'General Science',
  color: '#6a0dad',
  icon: '🔬',
  chapters: [
    {
      id: 'physics',
      name: 'Physics',
      topics: [
        {
          id: 'mechanics',
          title: 'Mechanics — Motion, Force & Laws',
          content: T(
            'Mechanics — Motion, Force & Laws',
            'Mechanics is the study of how objects move and what causes them to move or stop — like when you push a door, ride a bicycle, or throw a ball.',
            H.h2('Types of Motion') +
            H.p('Motion means a change in position with time. In daily life you see many types:') +
            H.ul([
              '<strong>Linear motion</strong> — moving in a straight line (a car on a highway)',
              '<strong>Circular motion</strong> — moving in a circle (a ceiling fan, Earth around the Sun)',
              '<strong>Periodic motion</strong> — repeating again and again (a pendulum clock, swing)',
              '<strong>Random motion</strong> — no fixed path (pollen grains in water — Brownian motion)'
            ]) +
            tbl(['Quantity', 'Symbol', 'SI Unit', 'Daily Life Example'], [
              ['Distance', 's', 'metre (m)', 'Length of road you walk'],
              ['Displacement', '—', 'metre (m)', 'Shortest path from home to school'],
              ['Speed', 'v', 'm/s', 'Speedometer in a car shows km/h'],
              ['Velocity', 'v', 'm/s', 'Speed + direction (north at 60 km/h)'],
              ['Acceleration', 'a', 'm/s²', 'Car speeding up when you press the accelerator'],
              ['Time', 't', 'second (s)', 'Stopwatch in a race']
            ]) +
            H.h2("Newton's Laws of Motion") +
            tbl(['Law', 'Statement (Simple)', 'Real-Life Example'], [
              ['First Law (Inertia)', 'Object stays at rest or in uniform motion unless a force acts on it', 'Passengers lurch forward when a bus stops suddenly'],
              ['Second Law', 'Force = mass × acceleration (F = ma)', 'Heavier box needs more force to push'],
              ['Third Law', 'Every action has an equal and opposite reaction', 'Rocket pushes gas down; gas pushes rocket up']
            ]) +
            H.h2('Important Formulas') +
            tbl(['Formula', 'Use'], [
              ['Speed = Distance ÷ Time', 'How fast something moves'],
              ['Velocity = Displacement ÷ Time', 'Speed with direction'],
              ['Acceleration = Change in velocity ÷ Time', 'How quickly speed changes'],
              ['Force = mass × acceleration (F = ma)', 'Calculate force needed'],
              ['Momentum = mass × velocity (p = mv)', 'Harder to stop a moving truck than a bicycle']
            ]) +
            H.h2('Friction') +
            H.p('Friction is the force that opposes motion when two surfaces rub together. It helps us walk (shoes grip the ground) but also wears out tyres. <strong>Static friction</strong> acts on stationary objects; <strong>kinetic (sliding) friction</strong> acts when objects slide. Rolling friction (wheels) is less than sliding friction — that is why vehicles use wheels.') +
            H.h2('Gravitation') +
            H.p('Gravity pulls everything toward Earth. Weight = mass × gravitational acceleration (W = mg). On Earth, g ≈ 9.8 m/s². A 10 kg bag weighs about 98 N. The Moon has less gravity, so astronauts weigh less there but their mass stays the same.'),
            {
              simplyPut: 'Mechanics = how things move and why they stop. Remember F = ma and Newton\'s three laws — they appear in almost every physics question!',
              examTip: 'Inertia depends on MASS, not weight. A heavy truck has more inertia than a bicycle. Weight changes on Moon; mass does not.',
              quickRevision: [
                'SI unit of force = Newton (N); 1 N = force to accelerate 1 kg at 1 m/s²',
                'First Law = Law of Inertia; Second Law = F = ma; Third Law = action-reaction pairs',
                'Speed is scalar (no direction); velocity is vector (has direction)',
                'Friction always opposes relative motion between surfaces',
                'Weight = mg; mass is constant everywhere; weight changes with gravity',
                'Momentum = mv; conserved in collisions (important for advanced questions)'
              ],
              examAsk: 'Which law explains why you fall forward when a bus brakes suddenly? (First Law — Inertia) | What is the SI unit of force? (Newton) | F = ma is which law? (Second Law)'
            }
          )
        },
        {
          id: 'work-energy-power',
          title: 'Work, Energy & Power',
          content: T(
            'Work, Energy & Power',
            'Work is done when a force moves an object. Energy is the ability to do work. Power tells how fast work is done — like how quickly a motor lifts a load.',
            H.h2('Work') +
            H.p('Work is done only when force causes displacement in the direction of force. Formula: <strong>Work = Force × Displacement × cos θ</strong> (W = Fs cos θ). If you push a wall but it does not move — no work is done!') +
            tbl(['Situation', 'Work Done?'], [
              ['Lifting a bucket vertically', 'Yes — force and displacement same direction'],
              ['Carrying a bag while walking horizontally', 'No work against gravity (force ⊥ displacement)'],
              ['Pushing a car that moves', 'Yes'],
              ['Holding a heavy book still', 'No — no displacement']
            ]) +
            H.h2('Energy') +
            H.p('Energy cannot be created or destroyed — only converted from one form to another (Law of Conservation of Energy).') +
            tbl(['Type', 'Definition', 'Example'], [
              ['Kinetic Energy (KE)', 'Energy due to motion; KE = ½mv²', 'Moving cricket ball, flowing water in dam'],
              ['Potential Energy (PE)', 'Stored energy due to position; PE = mgh', 'Water in a dam, stretched rubber band, book on shelf'],
              ['Mechanical Energy', 'KE + PE', 'Roller coaster at top (PE) and bottom (KE)'],
              ['Heat Energy', 'Energy due to random motion of particles', 'Hot tea, steam from kettle'],
              ['Electrical Energy', 'Energy from moving electrons', 'Fan, bulb, phone charger'],
              ['Chemical Energy', 'Stored in bonds of molecules', 'Food, petrol, battery'],
              ['Nuclear Energy', 'Stored in nucleus of atom', 'Nuclear power plant, Sun\'s energy']
            ]) +
            H.h2('Power') +
            H.p('Power = Work ÷ Time (P = W/t). Unit: <strong>Watt (W)</strong>. 1 Watt = 1 Joule per second. A 100 W bulb uses 100 J of energy every second.') +
            tbl(['Unit', 'Relation'], [
              ['1 Watt (W)', '1 Joule/second'],
              ['1 kilowatt (kW)', '1000 W'],
              ['1 Horsepower (hp)', '≈ 746 W (used for engines)'],
              ['1 kilowatt-hour (kWh)', 'Energy unit on electricity bills; 1 kWh = 3.6 × 10⁶ J']
            ]) +
            H.h2('Daily Life Connection') +
            H.p('When you climb stairs, you do work against gravity — your food (chemical energy) converts to potential energy. A hydroelectric dam converts water\'s PE to electrical energy. Your electricity bill is in kWh — units of energy, not power.'),
            {
              simplyPut: 'Work = force × distance (when they align). Energy = ability to do work. Power = how fast you do work. 1 kWh on your bill = energy used, not power!',
              examTip: 'Commercial unit of electrical energy = kilowatt-hour (kWh), NOT kilowatt. 1 hp ≈ 746 W is frequently asked in Railway exams.',
              quickRevision: [
                'Work SI unit = Joule (J); Power SI unit = Watt (W)',
                'KE = ½mv²; PE = mgh; Mechanical energy = KE + PE',
                'Conservation of energy: total energy remains constant in isolated system',
                'No work if no displacement (holding, pushing immovable wall)',
                '1 kWh = 3.6 × 10⁶ J — check electricity meter readings',
                'Commercial unit of energy = kWh; SI unit of energy = Joule'
              ],
              examAsk: 'What is the commercial unit of electrical energy? (kWh) | Work done when holding a suitcase? (Zero — no displacement) | Power = ? (Work/Time)'
            }
          )
        },
        {
          id: 'properties-of-matter',
          title: 'Properties of Matter',
          content: T(
            'Properties of Matter',
            'Matter is anything that has mass and occupies space. This topic covers density, pressure, buoyancy, and surface tension — things you see when objects float, sink, or liquids form droplets.',
            H.h2('States of Matter — Physical Properties') +
            tbl(['Property', 'Solid', 'Liquid', 'Gas'], [
              ['Shape', 'Fixed', 'Takes container shape', 'No fixed shape'],
              ['Volume', 'Fixed', 'Fixed', 'Fills container'],
              ['Compressibility', 'Very low', 'Low', 'High'],
              ['Intermolecular force', 'Strongest', 'Moderate', 'Weakest'],
              ['Example', 'Ice, wood, iron', 'Water, oil, milk', 'Air, oxygen, steam']
            ]) +
            H.h2('Density') +
            H.p('Density = Mass ÷ Volume (ρ = m/V). Unit: kg/m³ or g/cm³. Objects less dense than water float; denser objects sink.') +
            tbl(['Substance', 'Density (approx.)', 'Floats or Sinks in Water?'], [
              ['Water', '1 g/cm³', 'Reference'],
              ['Ice', '0.92 g/cm³', 'Floats (ice cubes in drink)'],
              ['Iron', '7.8 g/cm³', 'Sinks (ship floats due to shape — overall density)'],
              ['Oil', '0.9 g/cm³', 'Floats on water (oil layer on dal)'],
              ['Mercury', '13.6 g/cm³', 'Very dense liquid (used in thermometers)']
            ]) +
            H.h2('Pressure') +
            H.p('Pressure = Force ÷ Area (P = F/A). Unit: Pascal (Pa) or N/m². Sharp knife cuts easily because force acts on a small area — high pressure. Wide tyres on trucks reduce pressure on road.') +
            H.h2('Buoyancy (Archimedes\' Principle)') +
            H.p('When an object is immersed in fluid, it experiences an upward force equal to the weight of fluid displaced. This is why ships float, hot air balloons rise, and you feel lighter in a swimming pool.') +
            H.h2('Surface Tension & Viscosity') +
            H.p('<strong>Surface tension</strong> — water molecules at surface stick together, forming a "skin." Insects walk on water; drops are spherical. Soap reduces surface tension. <strong>Viscosity</strong> — resistance to flow. Honey is more viscous than water. Engine oil viscosity matters in cold weather.'),
            {
              simplyPut: 'Heavy things can float if they displace enough water (ships). Sharp knives work because small area = high pressure. Ice floats because it is less dense than water.',
              examTip: 'Archimedes\' Principle: buoyant force = weight of fluid displaced. Ship made of iron floats because overall density (including air inside) is less than water.',
              quickRevision: [
                'Density ρ = m/V; water = 1 g/cm³ reference',
                'Pressure P = F/A; SI unit Pascal (Pa)',
                'Archimedes: upward force = weight of displaced fluid',
                'Surface tension — spherical drops, insects on water',
                'Viscosity — honey > water; increases for most liquids when cooled',
                'Ice floats — unusual: solid less dense than liquid (expands on freezing)'
              ],
              examAsk: 'Why do ships float though made of iron? (Overall density less than water — Archimedes) | SI unit of pressure? (Pascal) | Why sharp knife cuts better? (Same force, smaller area = higher pressure)'
            }
          )
        },
        {
          id: 'heat',
          title: 'Heat & Thermodynamics',
          content: T(
            'Heat & Thermodynamics',
            'Heat is a form of energy that flows from a hotter body to a colder body. Thermodynamics studies how heat, work, and energy relate — like why metal feels colder than wood, or how a refrigerator works.',
            H.h2('Temperature vs Heat') +
            tbl(['', 'Temperature', 'Heat'], [
              ['What it measures', 'Hotness/coldness of body', 'Total energy transferred due to temp difference'],
              ['SI Unit', 'Kelvin (K) or °C', 'Joule (J)'],
              ['Device', 'Thermometer', 'Calorimeter'],
              ['Example', 'Fever reading 102°F', 'Hot water warming a cold cup']
            ]) +
            H.h2('Modes of Heat Transfer') +
            tbl(['Mode', 'How It Works', 'Example'], [
              ['Conduction', 'Through direct contact; solids mainly', 'Metal spoon gets hot in soup; handle of pan stays cool if wooden'],
              ['Convection', 'Through movement of fluid (liquid/gas)', 'Sea breeze, boiling water circulates, room heater warms air'],
              ['Radiation', 'Through electromagnetic waves; no medium needed', 'Sun\'s heat reaches Earth, feeling warmth near campfire']
            ]) +
            H.p('Good conductors: silver, copper, aluminium, iron. Insulators (bad conductors): wood, plastic, wool, air, glass wool (used in thermos flasks).') +
            H.h2('Thermal Expansion') +
            H.p('Most substances expand on heating and contract on cooling. Gaps in railway tracks, expansion joints in bridges, and mercury rising in a thermometer all use this principle.') +
            H.h2('Change of State & Latent Heat') +
            tbl(['Change', 'Latent Heat Type', 'Key Point'], [
              ['Solid → Liquid (melting)', 'Latent heat of fusion', 'Ice at 0°C absorbs heat without temp rise until fully melted'],
              ['Liquid → Gas (boiling)', 'Latent heat of vaporisation', 'Steam burns worse than boiling water — extra energy'],
              ['Liquid → Solid (freezing)', 'Latent heat of fusion released', 'Water releases heat when forming ice']
            ]) +
            H.h2('Temperature Scales') +
            tbl(['Scale', 'Freezing Point of Water', 'Boiling Point of Water', 'Formula'], [
              ['Celsius (°C)', '0°C', '100°C', '—'],
              ['Fahrenheit (°F)', '32°F', '212°F', '°F = (9/5 × °C) + 32'],
              ['Kelvin (K)', '273 K', '373 K', 'K = °C + 273']
            ]),
            {
              simplyPut: 'Heat flows hot → cold until equal. Conduction needs touch, convection needs moving fluid, radiation works through vacuum (Sun!). Thermos flask reduces all three transfers.',
              examTip: 'Latent heat questions: during melting/boiling, temperature stays constant while state changes. Absolute zero = 0 K = -273°C.',
              quickRevision: [
                'Heat flows from higher to lower temperature',
                'Conduction — solids; Convection — fluids; Radiation — no medium',
                'Good conductors: Cu, Al, Fe; Insulators: wood, wool, plastic',
                'Latent heat of fusion (melting) and vaporisation (boiling)',
                'K = °C + 273; water boils at 100°C = 373 K',
                'Thermal expansion — gaps in railway tracks, bimetallic strips in thermostats'
              ],
              examAsk: 'Mode of heat transfer in vacuum (Sun to Earth)? (Radiation) | Why steam burns more than boiling water? (Latent heat of vaporisation) | Device to measure temperature? (Thermometer)'
            }
          )
        },
        {
          id: 'waves-sound',
          title: 'Waves & Sound',
          content: T(
            'Waves & Sound',
            'A wave is a disturbance that transfers energy without transferring matter. Sound is a mechanical wave you hear every day — from speech and music to thunder and ambulance sirens.',
            H.h2('Types of Waves') +
            tbl(['Type', 'Medium Needed?', 'Direction', 'Examples'], [
              ['Mechanical', 'Yes', '—', 'Sound, water waves, seismic waves'],
              ['Electromagnetic', 'No', 'Transverse', 'Light, radio, X-rays, microwaves'],
              ['Transverse', '—', 'Perpendicular to direction', 'Light, water surface ripples'],
              ['Longitudinal', '—', 'Parallel to direction', 'Sound (compressions & rarefactions)']
            ]) +
            H.h2('Properties of Sound') +
            tbl(['Property', 'Meaning', 'Daily Life Example'], [
              ['Pitch', 'How high or low the sound is (frequency)', 'Women\'s voice usually higher pitch than men\'s'],
              ['Loudness', 'How strong the sound is (amplitude)', 'Whisper vs shouting'],
              ['Quality (Timbre)', 'Type/distinguishing character of sound', 'Same note on piano vs flute sounds different'],
              ['Frequency', 'Number of vibrations per second (Hz)', 'Human hearing: ~20 Hz to 20,000 Hz'],
              ['Wavelength', 'Distance between two compressions', 'Longer wavelength = lower pitch']
            ]) +
            H.h2('Speed of Sound') +
            H.p('Sound needs a medium — it cannot travel in vacuum. Speed depends on medium: fastest in solids, then liquids, slowest in gases.') +
            tbl(['Medium', 'Speed (approx.)'], [
              ['Air (at 0°C)', '331 m/s'],
              ['Air (at room temp)', '≈ 343 m/s'],
              ['Water', '≈ 1500 m/s'],
              ['Steel', '≈ 5000 m/s'],
              ['Vacuum', '0 — no sound!']
            ]) +
            H.p('You see lightning before hearing thunder because light (3 × 10⁸ m/s) is much faster than sound (~343 m/s).') +
            H.h2('Echo & Applications') +
            H.p('Echo = reflected sound heard again. Minimum distance for distinct echo ≈ 17 m (time gap ≥ 0.1 s). Uses: SONAR (underwater detection), ultrasound (medical imaging, cleaning), stethoscope, echolocation by bats and dolphins.') +
            H.h2('Doppler Effect') +
            H.p('Change in frequency when source and observer move relative to each other. Ambulance siren sounds higher as it approaches and lower as it moves away.'),
            {
              simplyPut: 'Sound = vibrations through a medium. No air = no sound (space is silent!). Light is faster — that is why lightning before thunder.',
              examTip: 'Human audible range: 20 Hz–20 kHz. Ultrasound > 20 kHz (used in sonography). Infrasound < 20 Hz (elephants, earthquakes). Speed of sound increases with temperature.',
              quickRevision: [
                'Sound is longitudinal mechanical wave — needs medium',
                'Cannot hear in vacuum; speed fastest in solids',
                'Pitch ∝ frequency; Loudness ∝ amplitude',
                'Echo needs minimum ~17 m distance',
                'Ultrasound — frequency above 20,000 Hz',
                'Lightning seen before thunder — light much faster than sound'
              ],
              examAsk: 'Can sound travel in vacuum? (No) | Property that determines loudness? (Amplitude) | Minimum distance for echo? (~17 m)'
            }
          )
        },
        {
          id: 'light-optics',
          title: 'Light & Optics',
          content: T(
            'Light & Optics',
            'Light is electromagnetic radiation that enables us to see. Optics studies reflection, refraction, lenses, and optical instruments like mirrors, spectacles, and cameras.',
            H.h2('Basics of Light') +
            H.p('Light travels in straight lines (rectilinear propagation) at speed <strong>c = 3 × 10⁸ m/s</strong> in vacuum — the fastest speed in the universe. Objects we see either emit light (Sun, bulb) or reflect light (moon, book).') +
            H.h2('Reflection') +
            H.p('When light bounces off a surface. Laws: (1) Angle of incidence = angle of reflection. (2) Incident ray, reflected ray, and normal lie in same plane.') +
            tbl(['Mirror Type', 'Image Properties', 'Uses'], [
              ['Plane mirror', 'Virtual, erect, same size, laterally inverted', 'Dressing mirror, periscope'],
              ['Concave mirror', 'Can be real/virtual; converges light', 'Shaving mirror, dentist mirror, torch reflector, satellite dish'],
              ['Convex mirror', 'Virtual, erect, diminished; wider field of view', 'Rear-view mirror in vehicles, shop security mirrors']
            ]) +
            H.h2('Refraction') +
            H.p('Bending of light when it passes from one medium to another (due to change in speed). Real-life: pencil looks bent in water, pool appears shallower, twinkling stars, mirage in desert.') +
            tbl(['Medium', 'Optical Density', 'Effect'], [
              ['Air to glass/water', 'Light slows down', 'Bends toward normal'],
              ['Glass/water to air', 'Light speeds up', 'Bends away from normal']
            ]) +
            H.h2('Lenses') +
            tbl(['Lens', 'Shape', 'Image Uses', 'Daily Example'], [
              ['Convex (Converging)', 'Thicker in middle', 'Real & virtual images', 'Magnifying glass, camera, projector'],
              ['Concave (Diverging)', 'Thinner in middle', 'Always virtual, diminished', 'Spectacles for myopia, peepholes']
            ]) +
            H.h2('Eye Defects & Corrections') +
            tbl(['Defect', 'Problem', 'Correction'], [
              ['Myopia (Near-sightedness)', 'Can see near, not far', 'Concave lens (diverging)'],
              ['Hypermetropia (Far-sightedness)', 'Can see far, not near', 'Convex lens (converging)'],
              ['Presbyopia', 'Age-related loss of flexibility', 'Bifocal lenses'],
              ['Astigmatism', 'Irregular cornea', 'Cylindrical lens']
            ]) +
            H.h2('Dispersion & Rainbow') +
            H.p('White light splits into seven colours (VIBGYOR) when passing through a prism — this is dispersion. Rainbow forms when sunlight is dispersed and reflected by water droplets.'),
            {
              simplyPut: 'Light travels straight and fast. Mirrors reflect; lenses refract. Concave mirror = converge (torch); convex mirror = wide view (car mirror).',
              examTip: 'Rear-view mirror = convex (NOT concave). Myopia = concave lens. Hypermetropia = convex lens. Speed of light is maximum in vacuum.',
              quickRevision: [
                'Speed of light c = 3 × 10⁸ m/s in vacuum',
                'Reflection: angle i = angle r',
                'Concave mirror — converging; Convex mirror — diverging, rear-view',
                'Myopia → concave lens; Hypermetropia → convex lens',
                'Dispersion — white light → VIBGYOR through prism',
                'Real image can be captured on screen; virtual cannot'
              ],
              examAsk: 'Lens for myopia? (Concave) | Mirror in car rear-view? (Convex) | Speed of light in vacuum? (3 × 10⁸ m/s)'
            }
          )
        },
        {
          id: 'electricity',
          title: 'Electricity',
          content: T(
            'Electricity',
            'Electricity is the flow of electric charge (electrons) through a conductor. It powers your home — fans, lights, phones — and is one of the most tested topics in science for government exams.',
            H.h2('Basic Concepts') +
            tbl(['Term', 'Symbol', 'Unit', 'Simple Meaning'], [
              ['Electric Charge', 'Q', 'Coulomb (C)', 'Property that causes electric force'],
              ['Electric Current', 'I', 'Ampere (A)', 'Rate of flow of charge; I = Q/t'],
              ['Potential Difference (Voltage)', 'V', 'Volt (V)', 'Work done per unit charge; "push" for current'],
              ['Resistance', 'R', 'Ohm (Ω)', 'Opposition to current flow'],
              ['Power', 'P', 'Watt (W)', 'P = VI = I²R = V²/R']
            ]) +
            H.h2("Ohm's Law") +
            H.p('<strong>V = IR</strong> — Voltage = Current × Resistance. Valid for conductors at constant temperature. More resistance = less current for same voltage.') +
            H.h2('Conductors vs Insulators') +
            tbl(['Conductors (allow current)', 'Insulators (block current)'], [
              ['Copper, aluminium, silver, iron, human body (with moisture)', 'Rubber, plastic, glass, dry wood, pure water']
            ]) +
            H.h2('Series vs Parallel Circuits') +
            tbl(['Feature', 'Series', 'Parallel'], [
              ['Current', 'Same everywhere', 'Divides among branches'],
              ['Voltage', 'Divides across components', 'Same across each branch'],
              ['If one bulb fails', 'All bulbs go off', 'Others keep working'],
              ['Home wiring', 'NOT used', 'Used (each appliance independent)'],
              ['Total resistance', 'R = R₁ + R₂ + ...', '1/R = 1/R₁ + 1/R₂ + ...']
            ]) +
            H.h2('Electric Safety & Household') +
            H.p('Fuse melts when current exceeds safe limit — protects appliances. Earth wire (green) prevents shock. MCB (Miniature Circuit Breaker) replaces fuse in modern homes. <strong>AC (Alternating Current)</strong> — direction changes 50 times/sec in India (50 Hz). <strong>DC (Direct Current)</strong> — flows in one direction (battery, phone).') +
            H.h2('Heating Effect of Current') +
            H.p('H = I²Rt (Joule\'s law). Used in electric iron, heater, geyser, toaster, bulb filament (tungsten).'),
            {
              simplyPut: 'Current = flow of charge. Ohm\'s Law: V = IR. Home uses parallel circuits so one switch/failure does not stop everything.',
              examTip: 'India uses 220 V AC at 50 Hz. Fuse is connected in SERIES with live wire. 1 kilowatt-hour (kWh) = unit on electricity bill.',
              quickRevision: [
                'Ohm\'s Law: V = IR; R = V/I',
                'Series: same current; Parallel: same voltage',
                'Home wiring = parallel connection',
                'AC — mains supply 220V, 50Hz in India; DC — battery',
                'Heating effect: H = I²Rt — electric iron, geyser',
                'Good conductors: Cu, Al; Insulators: rubber, plastic'
              ],
              examAsk: 'Ohm\'s Law formula? (V = IR) | Home circuit — series or parallel? (Parallel) | Unit of current? (Ampere)'
            }
          )
        },
        {
          id: 'magnetism',
          title: 'Magnetism',
          content: T(
            'Magnetism',
            'Magnetism is the force exerted by magnets on iron and other magnetic materials, or between moving charges. It powers motors, generators, compasses, and MRI machines.',
            H.h2('Properties of Magnets') +
            H.ul([
              'Has two poles: North (N) and South (S) — cannot be isolated (breaking a magnet gives two smaller magnets, each with N and S)',
              'Like poles repel; unlike poles attract',
              'Magnetic field lines go from N to S outside the magnet',
              'Earth itself is a giant magnet — compass needle aligns with Earth\'s magnetic field'
            ]) +
            H.h2('Magnetic vs Non-Magnetic Materials') +
            tbl(['Magnetic', 'Non-Magnetic'], [
              ['Iron, nickel, cobalt (and alloys like steel)', 'Wood, plastic, copper, aluminium, gold, silver']
            ]) +
            H.h2('Electromagnetism') +
            H.p('Electric current produces magnetic field — this is electromagnetism. A coil of wire with current wrapped around iron core becomes an <strong>electromagnet</strong> (used in cranes, electric bells, MRI). Strength increases with more turns, more current, and soft iron core.') +
            H.h2('Motor & Generator Principle') +
            tbl(['Device', 'Principle', 'Energy Conversion', 'Example'], [
              ['Electric Motor', 'Current-carrying conductor in magnetic field experiences force', 'Electrical → Mechanical', 'Fan, mixer, washing machine'],
              ['Electric Generator', 'Electromagnetic induction — moving conductor in field induces current', 'Mechanical → Electrical', 'Power plants, dynamo on bicycle']
            ]) +
            H.h2('Electromagnetic Induction (Faraday)') +
            H.p('A changing magnetic field induces electric current in a conductor. This is how generators work and how transformers step voltage up or down for power transmission.'),
            {
              simplyPut: 'Magnets have N and S poles. Current makes magnet (electromagnet). Motor uses electricity to spin; generator spins to make electricity.',
              examTip: 'Transformer works on AC, not DC. Step-up transformer increases voltage for long-distance transmission (reduces energy loss). Compass points to magnetic North, not exact geographic North.',
              quickRevision: [
                'Like poles repel; unlike attract; monopoles don\'t exist',
                'Electromagnet — coil + iron core + current',
                'Motor: electrical → mechanical energy',
                'Generator: mechanical → electrical (electromagnetic induction)',
                'Faraday — changing magnetic flux induces EMF',
                'Earth acts as a magnet — compass uses this'
              ],
              examAsk: 'Device converting electrical to mechanical energy? (Motor) | Principle of generator? (Electromagnetic induction) | Like poles — attract or repel? (Repel)'
            }
          )
        },
        {
          id: 'modern-physics',
          title: 'Modern Physics',
          content: T(
            'Modern Physics',
            'Modern physics covers discoveries from the early 1900s onward — radioactivity, nuclear energy, quantum theory, and relativity. These power nuclear plants, cancer treatment, and space technology.',
            H.h2('Structure of Atom (Quick Recap)') +
            H.p('Atom has nucleus (protons + neutrons) surrounded by electrons. Atomic number (Z) = number of protons. Mass number (A) = protons + neutrons.') +
            H.h2('Radioactivity') +
            H.p('Spontaneous emission of radiation from unstable nuclei. Discovered by Henri Becquerel; studied by Marie and Pierre Curie.') +
            tbl(['Radiation', 'Nature', 'Penetration Power', 'Stopped By'], [
              ['Alpha (α)', 'Helium nuclei (2 pro, 2 neu); +2 charge', 'Lowest', 'Paper, skin'],
              ['Beta (β)', 'Fast electrons; -1 charge', 'Moderate', 'Aluminium sheet'],
              ['Gamma (γ)', 'Electromagnetic waves; no charge', 'Highest', 'Thick lead/concrete']
            ]) +
            H.h2('Nuclear Reactions') +
            tbl(['Process', 'What Happens', 'Example / Use'], [
              ['Nuclear Fission', 'Heavy nucleus splits into lighter nuclei + energy', 'Nuclear power plant, atom bomb (U-235, Pu-239)'],
              ['Nuclear Fusion', 'Light nuclei combine to form heavier nucleus + energy', 'Sun\'s energy, hydrogen bomb, future clean energy research']
            ]) +
            H.p('Fission is controlled in reactors (control rods absorb neutrons). Fusion needs extremely high temperature and pressure — not yet practical for power on Earth.') +
            H.h2('Important Scientists') +
            tbl(['Scientist', 'Contribution'], [
              ['Albert Einstein', 'E = mc²; Theory of Relativity'],
              ['Ernest Rutherford', 'Nuclear model of atom; discovered nucleus'],
              ['Niels Bohr', 'Bohr model of atom — electron orbits'],
              ['Marie Curie', 'Radioactivity research; discovered Radium & Polonium'],
              ['Enrico Fermi', 'First nuclear reactor']
            ]) +
            H.h2('Applications') +
            H.p('Radioisotopes used in: cancer radiotherapy (Co-60), food preservation, carbon dating (C-14), tracing in medicine, smoke detectors (Am-241).'),
            {
              simplyPut: 'Radioactivity = unstable atoms release radiation (α, β, γ). Fission splits big atoms (power plants); Fusion joins small ones (Sun). E = mc² means tiny mass = huge energy.',
              examTip: 'Gamma has highest penetration. Alpha has highest ionising power (most dangerous if ingested). Nuclear reactor uses controlled fission, NOT fusion.',
              quickRevision: [
                'α = helium nucleus; β = electron; γ = EM wave',
                'Penetration: γ > β > α',
                'Fission — heavy nucleus splits (U-235); Fusion — light nuclei merge (H → He)',
                'Sun\'s energy from nuclear fusion',
                'E = mc² (Einstein)',
                'C-14 used for carbon dating of archaeological samples'
              ],
              examAsk: 'Sun\'s energy source? (Nuclear fusion) | Highest penetrating radiation? (Gamma) | E = mc² by whom? (Einstein)'
            }
          )
        },
        {
          id: 'units-measurement',
          title: 'Units & Measurement',
          content: T(
            'Units & Measurement',
            'Measurement gives numbers to physical quantities using standard units. The SI (International System) is used worldwide and in all competitive exams.',
            H.h2('SI Base Units (7 Fundamental Quantities)') +
            tbl(['Quantity', 'SI Unit', 'Symbol'], [
              ['Length', 'metre', 'm'],
              ['Mass', 'kilogram', 'kg'],
              ['Time', 'second', 's'],
              ['Electric current', 'ampere', 'A'],
              ['Temperature', 'kelvin', 'K'],
              ['Amount of substance', 'mole', 'mol'],
              ['Luminous intensity', 'candela', 'cd']
            ]) +
            H.h2('Derived Units (Common in Exams)') +
            tbl(['Quantity', 'Formula', 'SI Unit'], [
              ['Area', 'length × length', 'm²'],
              ['Volume', 'length³', 'm³'],
              ['Speed/Velocity', 'distance/time', 'm/s'],
              ['Acceleration', 'velocity/time', 'm/s²'],
              ['Force', 'mass × acceleration', 'Newton (N) = kg·m/s²'],
              ['Pressure', 'force/area', 'Pascal (Pa) = N/m²'],
              ['Energy/Work', 'force × distance', 'Joule (J) = N·m'],
              ['Power', 'work/time', 'Watt (W) = J/s'],
              ['Frequency', '1/time', 'Hertz (Hz) = 1/s']
            ]) +
            H.h2('Prefix Multipliers') +
            tbl(['Prefix', 'Symbol', 'Value', 'Example'], [
              ['kilo', 'k', '10³', '1 km = 1000 m'],
              ['centi', 'c', '10⁻²', '1 cm = 0.01 m'],
              ['milli', 'm', '10⁻³', '1 mm = 0.001 m'],
              ['micro', 'μ', '10⁻⁶', 'Micrometer'],
              ['nano', 'n', '10⁻⁹', 'Nanotechnology'],
              ['mega', 'M', '10⁶', '1 MHz = 10⁶ Hz']
            ]) +
            H.h2('Measuring Instruments') +
            tbl(['Instrument', 'Measures'], [
              ['Metre scale / Vernier caliper / Screw gauge', 'Length'],
              ['Beam balance / Electronic balance', 'Mass'],
              ['Stopwatch / Simple pendulum', 'Time'],
              ['Thermometer', 'Temperature'],
              ['Ammeter (series)', 'Electric current'],
              ['Voltmeter (parallel)', 'Potential difference'],
              ['Barometer', 'Atmospheric pressure'],
              ['Hygrometer', 'Humidity']
            ]),
            {
              simplyPut: 'SI has 7 base units. Everything else is derived (Newton, Joule, Watt). Know metre, kilogram, second, ampere, kelvin, mole, candela.',
              examTip: 'Ammeter connected in SERIES; Voltmeter in PARALLEL. 1 hectare = 10,000 m². 1 litre = 1000 cm³ = 1 dm³.',
              quickRevision: [
                '7 SI base units — m, kg, s, A, K, mol, cd',
                'Force = Newton; Energy = Joule; Power = Watt; Pressure = Pascal',
                'k = 10³; c = 10⁻²; m = 10⁻³',
                'Ammeter — series; Voltmeter — parallel',
                'Barometer — atmospheric pressure; Hygrometer — humidity',
                '1 km = 1000 m; 1 kg = 1000 g'
              ],
              examAsk: 'SI unit of force? (Newton) | Instrument for atmospheric pressure? (Barometer) | How is ammeter connected? (In series)'
            }
          )
        },
        {
          id: 'electromagnetic-spectrum',
          title: 'Electromagnetic Spectrum',
          content: T(
            'Electromagnetic Spectrum',
            'The electromagnetic spectrum is the full range of electromagnetic waves arranged by frequency or wavelength — from radio waves to gamma rays. All travel at speed of light in vacuum.',
            H.h2('EM Spectrum — Order (Low → High Frequency)') +
            H.p('<strong>Radio → Microwave → Infrared → Visible Light → Ultraviolet → X-rays → Gamma rays</strong>') +
            tbl(['Type', 'Wavelength (approx.)', 'Uses / Examples'], [
              ['Radio waves', 'Longest (> 1 mm)', 'AM/FM radio, TV broadcasting, mobile communication'],
              ['Microwaves', '1 mm – 1 cm', 'Microwave oven, radar, satellite communication'],
              ['Infrared (IR)', '700 nm – 1 mm', 'TV remote, night vision, thermal imaging, heaters'],
              ['Visible light', '400–700 nm', 'Human vision; VIBGYOR colours'],
              ['Ultraviolet (UV)', '10–400 nm', 'Sterilisation, detecting fake currency, causes sunburn'],
              ['X-rays', '0.01–10 nm', 'Medical imaging (bones), airport security scanners'],
              ['Gamma rays', 'Shortest (< 0.01 nm)', 'Cancer treatment, food irradiation, nuclear reactions']
            ]) +
            H.h2('Visible Light — VIBGYOR') +
            tbl(['Colour', 'Wavelength (approx.)'], [
              ['Violet', '400–450 nm (shortest, highest frequency)'],
              ['Indigo', '450–475 nm'],
              ['Blue', '475–495 nm'],
              ['Green', '495–570 nm'],
              ['Yellow', '570–590 nm'],
              ['Orange', '590–620 nm'],
              ['Red', '620–750 nm (longest, lowest frequency)']
            ]) +
            H.h2('Key Properties') +
            H.ul([
              'All EM waves travel at c = 3 × 10⁸ m/s in vacuum',
              'Do NOT need a medium — travel through vacuum (unlike sound)',
              'Transverse waves — electric and magnetic fields oscillate perpendicular to direction',
              'Higher frequency = shorter wavelength = more energy (gamma most energetic)'
            ]) +
            H.p('Daily life: Wi-Fi uses radio waves; microwave oven heats food using microwaves (water molecules absorb energy); remote control uses infrared; doctor uses X-rays to see fractures.'),
            {
              simplyPut: 'EM spectrum = all types of light-like waves. Radio (low energy) to Gamma (high energy). All travel at speed of light. Visible light is just a small middle portion.',
              examTip: 'Memory order: "Rabbits Mate In Very Unusual eXpensive Gardens" (Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma). X-rays and gamma are ionising radiations.',
              quickRevision: [
                'Order: Radio < Micro < IR < Visible < UV < X-ray < Gamma (frequency)',
                'All EM waves speed = 3 × 10⁸ m/s in vacuum',
                'No medium required — unlike sound',
                'VIBGYOR — Violet has highest frequency in visible; Red lowest',
                'Microwave oven — microwave radiation heats water in food',
                'X-rays — bones; Gamma — highest energy, cancer therapy'
              ],
              examAsk: 'Which EM wave used in microwave oven? (Microwaves) | Highest frequency in visible light? (Violet) | Speed of all EM waves in vacuum? (3 × 10⁸ m/s)'
            }
          )
        }
      ]
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      topics: [
        {
          id: 'states-of-matter',
          title: 'States of Matter',
          content: T(
            'States of Matter',
            'Matter exists mainly as solid, liquid, or gas depending on temperature and pressure. Understanding states helps explain why ice melts, water boils, and dry ice sublimes.',
            H.h2('Three States of Matter') +
            tbl(['Property', 'Solid', 'Liquid', 'Gas'], [
              ['Particle arrangement', 'Closely packed, fixed positions', 'Close but can move/slide', 'Far apart, random motion'],
              ['Shape & Volume', 'Fixed shape & volume', 'Fixed volume, no fixed shape', 'No fixed shape or volume'],
              ['Compressibility', 'Almost incompressible', 'Slightly compressible', 'Highly compressible'],
              ['Diffusion', 'Very slow', 'Moderate', 'Very fast'],
              ['Examples', 'Ice, salt, gold', 'Water, mercury, oil', 'Air, oxygen, CO₂']
            ]) +
            H.h2('Change of State') +
            tbl(['Process', 'Change', 'Temperature Point (Water)', 'Daily Example'], [
              ['Melting / Fusion', 'Solid → Liquid', '0°C (melting point)', 'Ice cubes melting in juice'],
              ['Freezing / Solidification', 'Liquid → Solid', '0°C (freezing point)', 'Water turning to ice in freezer'],
              ['Boiling / Vaporisation', 'Liquid → Gas', '100°C (at 1 atm)', 'Water boiling in kettle'],
              ['Evaporation', 'Liquid → Gas (surface only)', 'Below boiling point', 'Clothes drying in sun'],
              ['Condensation', 'Gas → Liquid', '—', 'Water droplets on cold bottle'],
              ['Sublimation', 'Solid → Gas directly', '—', 'Dry ice (solid CO₂), naphthalene balls shrinking'],
              ['Deposition', 'Gas → Solid directly', '—', 'Frost forming on windows']
            ]) +
            H.h2('Factors Affecting States') +
            H.p('Heating increases kinetic energy of particles — solid melts, liquid boils. Pressure also matters: high pressure raises boiling point (pressure cooker cooks faster at ~120°C). LPG is stored as liquid under high pressure in cylinders.'),
            {
              simplyPut: 'Solid → heat → liquid → more heat → gas. Sublimation skips liquid (dry ice, camphor). Evaporation happens at any temperature on the surface.',
              examTip: 'Evaporation causes COOLING (sweating cools body). Boiling happens throughout liquid at fixed temperature; evaporation only at surface at any temperature.',
              quickRevision: [
                'Solid: fixed shape & volume; Gas: neither',
                'Melting point of ice = 0°C; Boiling point of water = 100°C (1 atm)',
                'Sublimation: solid → gas (dry ice, iodine, camphor)',
                'Evaporation — cooling effect (perfume, sweat)',
                'Pressure cooker — higher pressure raises boiling point',
                'LPG stored as liquid under pressure in cylinder'
              ],
              examAsk: 'Process of solid directly to gas? (Sublimation) | Boiling point of water at 1 atm? (100°C) | Which state is most compressible? (Gas)'
            }
          )
        },
        {
          id: 'atoms-molecules',
          title: 'Atoms & Molecules',
          content: T(
            'Atoms & Molecules',
            'An atom is the smallest unit of an element that retains its properties. Molecules are two or more atoms bonded together — like H₂O (water) or O₂ (oxygen gas).',
            H.h2('Subatomic Particles') +
            tbl(['Particle', 'Charge', 'Mass (relative)', 'Location'], [
              ['Proton', '+1', '1', 'Nucleus'],
              ['Neutron', '0', '1', 'Nucleus'],
              ['Electron', '-1', '1/1837 (negligible)', 'Orbits/shells around nucleus']
            ]) +
            H.h2('Atomic Number & Mass Number') +
            H.p('<strong>Atomic number (Z)</strong> = number of protons = number of electrons (in neutral atom). Defines the element. <strong>Mass number (A)</strong> = protons + neutrons. <strong>Isotopes</strong> — same element, different neutrons (C-12, C-14).') +
            H.h2('Electronic Configuration (First 20 Elements — Key Shells)') +
            H.p('Electrons fill shells: K (max 2), L (max 8), M (max 8 for first 20). Valence electrons (outermost shell) determine chemical behaviour.') +
            tbl(['Element', 'Symbol', 'Atomic No.', 'Valence Electrons'], [
              ['Hydrogen', 'H', '1', '1'],
              ['Carbon', 'C', '6', '4'],
              ['Nitrogen', 'N', '7', '5'],
              ['Oxygen', 'O', '8', '6'],
              ['Sodium', 'Na', '11', '1'],
              ['Chlorine', 'Cl', '17', '7'],
              ['Argon', 'Ar', '18', '8 (octet — inert)']
            ]) +
            H.h2('Molecules & Atomicity') +
            tbl(['Type', 'Definition', 'Examples'], [
              ['Monoatomic', 'Single atom', 'He, Ne, Ar (noble gases)'],
              ['Diatomic', 'Two atoms', 'H₂, O₂, N₂, Cl₂'],
              ['Polyatomic', 'Many atoms', 'H₂O, CO₂, NH₃, CH₄']
            ]) +
            H.h2('Mole Concept (Basic)') +
            H.p('1 mole = 6.022 × 10²³ particles (Avogadro number). Mass of 1 mole = atomic/molecular mass in grams. Example: 1 mole of water (H₂O) = 18 g.'),
            {
              simplyPut: 'Atom = tiny building block. Protons define element. Electrons in outer shell decide how it reacts. Molecule = atoms joined together (H₂O).',
              examTip: 'In neutral atom: protons = electrons. Isotopes have same atomic number, different mass number. Noble gases (He, Ne, Ar) have full outer shell — very unreactive.',
              quickRevision: [
                'Proton (+), Neutron (0), Electron (-) in nucleus/orbits',
                'Atomic number = protons; Mass number = protons + neutrons',
                'Isotopes — same Z, different A (C-12, C-14)',
                'Valence electrons — outermost shell electrons',
                'Avogadro number = 6.022 × 10²³',
                'O₂, N₂, H₂ are diatomic molecules'
              ],
              examAsk: 'Particle with no charge in nucleus? (Neutron) | Define isotopes? (Same atomic number, different mass number) | Avogadro number value? (6.022 × 10²³)'
            }
          )
        },
        {
          id: 'periodic-table',
          title: 'Periodic Table',
          content: T(
            'Periodic Table',
            'The periodic table arranges all elements by atomic number in rows (periods) and columns (groups) showing repeating patterns in properties — developed by Mendeleev and later improved.',
            H.h2('Structure') +
            tbl(['Term', 'Meaning'], [
              ['Period (Row)', '7 periods; same number of electron shells; properties change left to right'],
              ['Group (Column)', '18 groups; same valence electrons; similar chemical properties'],
              ['Atomic number', 'Increases left to right, top to bottom']
            ]) +
            H.h2('Important Groups') +
            tbl(['Group', 'Name', 'Valence e⁻', 'Properties / Examples'], [
              ['1', 'Alkali metals', '1', 'Li, Na, K — soft, reactive, form +1 ions'],
              ['2', 'Alkaline earth metals', '2', 'Mg, Ca — form +2 ions'],
              ['17', 'Halogens', '7', 'F, Cl, Br, I — reactive non-metals, form -1 ions'],
              ['18', 'Noble gases', '8 (2 for He)', 'He, Ne, Ar — inert, full outer shell']
            ]) +
            H.h2('Metals, Non-Metals & Metalloids') +
            tbl(['Category', 'Location', 'Properties', 'Examples'], [
              ['Metals', 'Left & centre', 'Shiny, malleable, ductile, conduct heat/electricity', 'Fe, Cu, Al, Au, Na'],
              ['Non-metals', 'Right side', 'Dull, brittle, poor conductors (except graphite)', 'O, N, C, S, Cl'],
              ['Metalloids', 'Staircase border', 'Properties of both', 'B, Si, Ge, As, Sb']
            ]) +
            H.h2('Periodic Trends (Simple)') +
            tbl(['Trend', 'Across Period (→)', 'Down Group (↓)'], [
              ['Metallic character', 'Decreases', 'Increases'],
              ['Atomic size', 'Decreases', 'Increases'],
              ['Electronegativity', 'Increases', 'Decreases'],
              ['Reactivity (metals)', 'Decreases', 'Increases']
            ]) +
            H.h2('Key Elements to Remember') +
            tbl(['Element', 'Symbol', 'Atomic No.', 'Note'], [
              ['Hydrogen', 'H', '1', 'Lightest element'],
              ['Helium', 'He', '2', 'Second lightest; inert gas'],
              ['Carbon', 'C', '6', 'Basis of organic life'],
              ['Iron', 'Fe', '26', 'Most used metal; blood haemoglobin'],
              ['Gold', 'Au', '79', 'Inert, does not rust'],
              ['Mercury', 'Hg', '80', 'Liquid metal at room temp'],
              ['Uranium', 'U', '92', 'Nuclear fuel']
            ]),
            {
              simplyPut: 'Periodic table = elements in order of atomic number. Same group = similar behaviour. Left = metals; right = non-metals.',
              examTip: 'Mendeleev created periodic table; Moseley arranged by atomic number. Most reactive metal = Francium (Group 1); most reactive non-metal = Fluorine (Group 17).',
              quickRevision: [
                '7 periods, 18 groups in modern periodic table',
                'Group 1 = alkali metals; Group 17 = halogens; Group 18 = noble gases',
                'Mendeleev — periodic law; Moseley — atomic number basis',
                'Metalloids on staircase: B, Si, Ge, As, Sb',
                'Noble gases — full outer shell, chemically inert',
                'Liquid metal at room temperature — Mercury (Hg)'
              ],
              examAsk: 'Who developed periodic table? (Mendeleev) | Most reactive non-metal? (Fluorine) | Group of inert gases? (Group 18)'
            }
          )
        },
        {
          id: 'chemical-bonding',
          title: 'Chemical Bonding',
          content: T(
            'Chemical Bonding',
            'Chemical bonds hold atoms together in molecules and compounds. Atoms bond to achieve a stable electron configuration — usually 8 electrons in outer shell (octet rule).',
            H.h2('Types of Chemical Bonds') +
            tbl(['Bond Type', 'How Formed', 'Between', 'Properties', 'Examples'], [
              ['Ionic (Electrovalent)', 'Transfer of electrons', 'Metal + Non-metal', 'High melting point; conduct when dissolved/molten', 'NaCl, MgO, CaCl₂'],
              ['Covalent', 'Sharing of electrons', 'Non-metal + Non-metal', 'Low melting point (usually); poor conductors', 'H₂O, CO₂, CH₄, O₂'],
              ['Metallic', 'Sea of delocalised electrons', 'Metal + Metal', 'Conduct heat/electricity; malleable', 'Fe, Cu, Al alloys']
            ]) +
            H.h2('Ionic Bonding — Example') +
            H.p('Sodium (Na) gives 1 electron to Chlorine (Cl). Na becomes Na⁺ and Cl becomes Cl⁻. Opposite charges attract → NaCl (common salt). In water, ionic compounds split into ions — that is why salt water conducts electricity.') +
            H.h2('Covalent Bonding — Examples') +
            tbl(['Molecule', 'Shared Electrons', 'Daily Relevance'], [
              ['H₂O (Water)', 'O shares with 2 H', 'Drinking, cooking, life itself'],
              ['CO₂', 'C double-bonds with 2 O', 'Respiration, soft drinks, photosynthesis'],
              ['CH₄ (Methane)', 'C shares with 4 H', 'Natural gas, LPG component'],
              ['O₂', 'Double bond between 2 O', 'Breathing, combustion']
            ]) +
            H.h2('Single, Double & Triple Bonds') +
            tbl(['Bond', 'Shared Pairs', 'Example', 'Strength'], [
              ['Single', '1', 'H–H, C–H in methane', 'Weakest covalent'],
              ['Double', '2', 'O=O, C=O in CO₂', 'Stronger'],
              ['Triple', '3', 'N≡N in nitrogen gas', 'Strongest covalent']
            ]) +
            H.h2('Hydrogen Bond') +
            H.p('Weak attraction between H of one molecule and O/N/F of another. Gives water high boiling point, ice floating, and DNA double helix structure. Sticky nature of water droplets is due to hydrogen bonding.'),
            {
              simplyPut: 'Ionic = electron transfer (salt). Covalent = electron sharing (water, gas). Metals share electrons in a "sea" — that is why copper conducts.',
              examTip: 'NaCl is ionic — conducts in aqueous/molten state, NOT in solid. Diamond and graphite are both carbon but different structures (allotropes).',
              quickRevision: [
                'Ionic — metal + non-metal; electron transfer',
                'Covalent — non-metal + non-metal; electron sharing',
                'Metallic bond — sea of electrons in metals',
                'Octet rule — atoms tend to get 8 outer electrons',
                'NaCl — ionic; H₂O, CO₂ — covalent',
                'Hydrogen bond — between H and O/N/F; weak but important in water'
              ],
              examAsk: 'Bond in NaCl? (Ionic) | Bond in water H₂O? (Covalent) | Why does salt water conduct electricity? (Ions from ionic dissociation)'
            }
          )
        },
        {
          id: 'chemical-reactions',
          title: 'Chemical Reactions',
          content: T(
            'Chemical Reactions',
            'A chemical reaction transforms substances (reactants) into new substances (products) with different properties — like rust forming, food digesting, or a match burning.',
            H.h2('Signs of Chemical Reaction') +
            H.ul([
              'Change in colour (apple turning brown, copper turning green)',
              'Gas evolved (fizzing when vinegar meets baking soda)',
              'Heat/light produced (burning candle, glow stick)',
              'Precipitate formed (milky water when lime water meets CO₂)',
              'Change in smell or taste (cooking — new flavours)'
            ]) +
            H.h2('Types of Chemical Reactions') +
            tbl(['Type', 'Pattern', 'Example'], [
              ['Combination (Synthesis)', 'A + B → AB', '2H₂ + O₂ → 2H₂O; CaO + H₂O → Ca(OH)₂'],
              ['Decomposition', 'AB → A + B', '2H₂O → 2H₂ + O₂ (electrolysis); CaCO₃ → CaO + CO₂ (heating)'],
              ['Displacement', 'A + BC → AC + B', 'Fe + CuSO₄ → FeSO₄ + Cu (iron nail in copper sulphate)'],
              ['Double Displacement', 'AB + CD → AD + CB', 'NaCl + AgNO₃ → AgCl ↓ + NaNO₃'],
              ['Combustion', 'Substance + O₂ → oxide + heat/light', 'CH₄ + 2O₂ → CO₂ + 2H₂O + energy'],
              ['Redox', 'Oxidation + Reduction together', 'Rusting, respiration, photosynthesis']
            ]) +
            H.h2('Oxidation & Reduction') +
            H.p('<strong>Oxidation</strong> — gain of oxygen OR loss of hydrogen OR loss of electrons. <strong>Reduction</strong> — loss of oxygen OR gain of hydrogen OR gain of electrons. Rusting of iron = oxidation. OIL RIG mnemonic: Oxidation Is Loss (of electrons), Reduction Is Gain.') +
            H.h2('Important Everyday Reactions') +
            tbl(['Reaction', 'Type', 'Daily Life'], [
              ['Rusting: 4Fe + 3O₂ + xH₂O → 2Fe₂O₃·xH₂O', 'Oxidation', 'Iron gates, car bodies rust in rain'],
              ['Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'Endothermic', 'Plants make food using sunlight'],
              ['Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy', 'Exothermic', 'Body gets energy from food'],
              ['Neutralisation: Acid + Base → Salt + Water', 'Double displacement', 'Antacid relieves acidity']
            ]) +
            H.h2('Catalyst & Rate of Reaction') +
            H.p('A catalyst speeds up reaction without being consumed. Enzymes in body are biological catalysts. Rate increases with higher temperature, greater surface area (powdered vs lump), and higher concentration.'),
            {
              simplyPut: 'Reactants → Products. Combination joins; decomposition splits. Rust = oxidation. Burning = combustion with oxygen.',
              examTip: 'Rusting needs BOTH oxygen AND moisture. Galvanisation (zinc coating) prevents rust. Catalyst is not used up — MnO₂ in H₂O₂ decomposition.',
              quickRevision: [
                'Combination: A+B→AB; Decomposition: AB→A+B',
                'Displacement: more reactive replaces less reactive',
                'Combustion needs oxygen; produces heat/light',
                'Oxidation — gain O/lose e⁻; Reduction — lose O/gain e⁻',
                'Rusting = iron + oxygen + water',
                'Catalyst speeds reaction; not consumed (enzymes in body)'
              ],
              examAsk: 'Type of reaction: Fe + CuSO₄ → FeSO₄ + Cu? (Displacement) | Rusting is which type? (Oxidation) | Products of combustion of carbon? (CO₂ and heat/light)'
            }
          )
        },
        {
          id: 'acids-bases-salts',
          title: 'Acids, Bases & Salts',
          content: T(
            'Acids, Bases & Salts',
            'Acids taste sour and turn blue litmus red. Bases taste bitter and feel soapy. When they react together they form salt and water — this is neutralisation, used in antacids and soap making.',
            H.h2('Acids') +
            H.p('Acids release H⁺ ions in water. <strong>Strong acids</strong> (HCl, H₂SO₄, HNO₃) ionise completely. <strong>Weak acids</strong> (CH₃COOH/vinegar, citric acid in lemon) ionise partially.') +
            tbl(['Acid', 'Source / Use'], [
              ['Hydrochloric acid (HCl)', 'Stomach acid (digestion); cleaning metal'],
              ['Sulphuric acid (H₂SO₄)', 'Car batteries; fertilizers; "oil of vitriol"'],
              ['Nitric acid (HNO₃)', 'Fertilizers, explosives, gold testing'],
              ['Acetic acid (CH₃COOH)', 'Vinegar (~4–5%)'],
              ['Citric acid', 'Lemons, oranges, amla'],
              ['Lactic acid', 'Curd, sour milk, muscle cramps after exercise']
            ]) +
            H.h2('Bases (Alkalis)') +
            H.p('Bases release OH⁻ ions in water. Soluble bases are called <strong>alkalis</strong>.') +
            tbl(['Base', 'Source / Use'], [
              ['Sodium hydroxide (NaOH)', 'Soap, drain cleaner — caustic soda'],
              ['Potassium hydroxide (KOH)', 'Soft soap, batteries — caustic potash'],
              ['Calcium hydroxide (Ca(OH)₂)', 'Whitewash, antacid — slaked lime'],
              ['Magnesium hydroxide (Mg(OH)₂)', 'Milk of magnesia — antacid'],
              ['Ammonium hydroxide (NH₄OH)', 'Cleaning agents']
            ]) +
            H.h2('pH Scale') +
            tbl(['pH Range', 'Nature', 'Examples'], [
              ['0 – 6', 'Acidic', 'Lemon juice (~2), vinegar (~3), rain acid (~5.6)'],
              ['7', 'Neutral', 'Pure water, blood (~7.4 slightly basic)'],
              ['8 – 14', 'Basic/Alkaline', 'Baking soda (~9), soap (~10), bleach (~12)']
            ]) +
            H.p('pH paper/litmus tests acidity. Lower pH = stronger acid. Tooth decay occurs below pH 5.5.') +
            H.h2('Indicators') +
            tbl(['Indicator', 'In Acid', 'In Base'], [
              ['Blue litmus', 'Turns red', 'No change'],
              ['Red litmus', 'No change', 'Turns blue'],
              ['Phenolphthalein', 'Colourless', 'Pink'],
              ['Turmeric', 'Yellow (no change)', 'Reddish-brown']
            ]) +
            H.h2('Salts & Neutralisation') +
            H.p('Acid + Base → Salt + Water. Example: HCl + NaOH → NaCl + H₂O. Common salt (NaCl) is table salt. Baking soda (NaHCO₃) releases CO₂ when heated or mixed with acid — makes cakes fluffy. Plaster of Paris (CaSO₄·½H₂O) sets into hard gypsum when mixed with water.'),
            {
              simplyPut: 'Acids = sour, pH < 7. Bases = bitter/soapy, pH > 7. Mix them → salt + water. Stomach uses HCl; antacid uses base to neutralise.',
              examTip: 'King of chemicals = Sulphuric acid (H₂SO₄). Strongest natural acid in food = oxalic acid (spinach). pH 7 is neutral — NOT always water (can be any neutral solution).',
              quickRevision: [
                'Acid → H⁺ ions; Base → OH⁻ ions in water',
                'pH < 7 acidic; pH = 7 neutral; pH > 7 basic',
                'Blue litmus → red in acid; Red litmus → blue in base',
                'Neutralisation: Acid + Base → Salt + Water',
                'H₂SO₄ — king of chemicals; HCl — stomach acid',
                'Baking soda = NaHCO₃; Common salt = NaCl'
              ],
              examAsk: 'pH of pure water? (7) | Acid + Base gives? (Salt + Water) | Which acid is in vinegar? (Acetic acid / CH₃COOH)'
            }
          )
        },
        {
          id: 'metals-nonmetals',
          title: 'Metals & Non-Metals',
          content: T(
            'Metals & Non-Metals',
            'Elements are broadly classified as metals (like iron, copper, gold) or non-metals (like oxygen, sulphur, carbon) based on physical and chemical properties.',
            H.h2('Physical Properties Comparison') +
            tbl(['Property', 'Metals', 'Non-Metals'], [
              ['Appearance', 'Lustrous (shiny)', 'Dull (except iodine — lustrous)'],
              ['State at room temp', 'Solid (except Hg — liquid)', 'Solid, liquid (Br), or gas'],
              ['Hardness', 'Generally hard (except Na, K — soft)', 'Generally soft (except diamond — hardest)'],
              ['Malleability', 'Can be beaten into sheets (gold leaf)', 'Brittle — break into pieces'],
              ['Ductility', 'Can be drawn into wires (Cu wire)', 'Not ductile'],
              ['Conductivity', 'Good conductors of heat & electricity', 'Poor conductors (graphite exception)'],
              ['Sonority', 'Ring when struck (school bell)', 'Do not ring']
            ]) +
            H.h2('Chemical Properties of Metals') +
            H.ul([
              'Form basic oxides: MgO, Na₂O',
              'React with acids to give H₂ gas: Zn + H₂SO₄ → ZnSO₄ + H₂↑',
              'More reactive metals displace less reactive: Fe displaces Cu from CuSO₄',
              'React with oxygen to form oxides (some tarnish — Ag, Al forms protective layer)'
            ]) +
            H.h2('Reactivity Series (Most → Least Reactive)') +
            H.p('K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Hg > Ag > Au') +
            H.p('Metal above hydrogen displaces H from acids. Metal above another displaces it from its salt solution.') +
            H.h2('Important Metals & Uses') +
            tbl(['Metal', 'Property / Use'], [
              ['Iron (Fe)', 'Most used; steel making; haemoglobin in blood'],
              ['Copper (Cu)', 'Electrical wires; alloys (brass, bronze)'],
              ['Aluminium (Al)', 'Light, corrosion-resistant; foil, aircraft'],
              ['Gold (Au)', 'Jewellery; does not tarnish; good conductor'],
              ['Silver (Ag)', 'Best conductor; jewellery; photography (old)'],
              ['Mercury (Hg)', 'Only liquid metal; thermometers, barometers'],
              ['Sodium (Na) / Potassium (K)', 'Very reactive; stored in kerosene']
            ]) +
            H.h2('Important Non-Metals') +
            tbl(['Non-Metal', 'Use / Fact'], [
              ['Oxygen (O₂)', 'Breathing, combustion, steel making'],
              ['Nitrogen (N₂)', '78% of air; fertilizers (ammonia)'],
              ['Carbon (C)', 'Diamond, graphite, coal, all organic life'],
              ['Sulphur (S)', 'Fertilizers, gunpowder, vulcanisation of rubber'],
              ['Chlorine (Cl₂)', 'Water purification, bleaching'],
              ['Iodine (I₂)', 'Antiseptic (tincture); deficiency causes goitre']
            ]),
            {
              simplyPut: 'Metals = shiny, conduct, malleable (wire/sheet). Non-metals = opposite mostly. Reactivity series tells who displaces whom in reactions.',
              examTip: 'Most reactive metal = Potassium/Francium. Least reactive = Gold. Aluminium does not rust — forms protective Al₂O₃ layer. Diamond is hardest natural substance (carbon).',
              quickRevision: [
                'Metals: lustrous, malleable, ductile, conduct heat/electricity',
                'Only liquid metal — Mercury (Hg); only liquid non-metal — Bromine (Br)',
                'Reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au',
                'Metal + Acid → Salt + H₂ gas',
                'Graphite conducts electricity (exception among non-metals)',
                'Al forms protective oxide — used in aircraft, foil'
              ],
              examAsk: 'Liquid metal at room temperature? (Mercury) | Gas released when metal reacts with acid? (Hydrogen) | Best conductor of electricity? (Silver)'
            }
          )
        },
        {
          id: 'carbon-organic-chemistry',
          title: 'Carbon & Organic Chemistry',
          content: T(
            'Carbon & Organic Chemistry',
            'Organic chemistry is the study of carbon compounds. Carbon is unique — it forms millions of compounds because it can make four bonds and chain/ring structures. All living things are carbon-based.',
            H.h2('Why Carbon is Special') +
            H.ul([
              'Catenation — carbon atoms link to other carbon atoms forming chains and rings',
              'Tetravalency — 4 valence electrons, forms 4 covalent bonds',
              'Forms compounds with H, O, N, S, halogens — millions of organic compounds'
            ]) +
            H.h2('Allotropes of Carbon') +
            tbl(['Allotrope', 'Structure', 'Properties', 'Uses'], [
              ['Diamond', '3D rigid tetrahedral network', 'Hardest natural substance; bad conductor', 'Cutting, jewellery'],
              ['Graphite', 'Layered hexagonal sheets', 'Soft, slippery; good conductor', 'Pencil lead, lubricant, electrodes'],
              ['Fullerene (C-60)', 'Football-like cage', 'Nanotechnology research', 'Drug delivery, materials science'],
              ['Graphene', 'Single layer of graphite', 'Extremely strong, conductive', 'Electronics research']
            ]) +
            H.h2('Hydrocarbons') +
            tbl(['Type', 'Bond Type', 'General Formula', 'Examples'], [
              ['Alkanes (Saturated)', 'Single bonds only', 'CₙH₂ₙ₊₂', 'CH₄ (methane), C₂H₆ (ethane), C₃H₈ (propane)'],
              ['Alkenes (Unsaturated)', 'At least one double bond', 'CₙH₂ₙ', 'C₂H₄ (ethene — ripens fruits)'],
              ['Alkynes (Unsaturated)', 'At least one triple bond', 'CₙH₂ₙ₋₂', 'C₂H₂ (ethyne/acetylene — welding)']
            ]) +
            H.h2('Functional Groups (Basic)') +
            tbl(['Group', 'Formula', 'Example', 'Use'], [
              ['Alcohol', '-OH', 'CH₃OH (methanol), C₂H₅OH (ethanol)', 'Drinks, sanitiser, fuel'],
              ['Carboxylic acid', '-COOH', 'CH₃COOH (acetic/vinegar)', 'Food preservative'],
              ['Aldehyde', '-CHO', 'HCHO (formaldehyde)', 'Preservative, disinfectant'],
              ['Ketone', 'C=O (in chain)', 'CH₃COCH₃ (acetone)', 'Nail polish remover']
            ]) +
            H.h2('Daily Life Organic Compounds') +
            tbl(['Compound', 'Type', 'Source / Use'], [
              ['Methane (CH₄)', 'Alkane', 'Natural gas, biogas, marsh gas'],
              ['Ethanol (C₂H₅OH)', 'Alcohol', 'Alcoholic drinks, sanitiser, fuel additive'],
              ['Acetic acid', 'Carboxylic acid', 'Vinegar'],
              ['Urea', 'Organic nitrogen compound', 'Fertilizer (highest N content)'],
              ['Paraffin wax', 'Alkane mixture', 'Candles']
            ]),
            {
              simplyPut: 'Carbon makes chains and rings → millions of organic compounds. Diamond = hard; Graphite = pencil lead. Methane = main component of natural gas/LPG.',
              examTip: 'Ethanol used as fuel is denatured (poison added) to prevent drinking. Methane is greenhouse gas. CO is poisonous — binds haemoglobin stronger than O₂.',
              quickRevision: [
                'Organic chemistry = study of carbon compounds',
                'Allotropes: diamond (hardest), graphite (conducts), fullerene (C-60)',
                'Alkanes — saturated (single bonds); Alkenes — double bond',
                'Methane CH₄ — main component of natural gas, biogas',
                'Ethanol C₂H₅OH — alcohol in drinks and sanitiser',
                'Catenation + tetravalency make carbon unique'
              ],
              examAsk: 'Allotropes of carbon? (Diamond, graphite, fullerene) | Main component of biogas? (Methane) | Which carbon allotrope conducts electricity? (Graphite)'
            }
          )
        },
        {
          id: 'important-compounds',
          title: 'Important Compounds',
          content: T(
            'Important Compounds',
            'These are the most frequently asked chemical compounds in government exams — their formulas, common names, and everyday uses.',
            H.h2('Compounds Table — Must Know') +
            tbl(['Compound', 'Formula', 'Common Name', 'Use'], [
              ['Water', 'H₂O', '—', 'Life, solvent, cooling'],
              ['Common salt', 'NaCl', 'Sodium chloride', 'Food, preservation'],
              ['Baking soda', 'NaHCO₃', 'Sodium bicarbonate', 'Baking, fire extinguisher, antacid'],
              ['Washing soda', 'Na₂CO₃·10H₂O', 'Sodium carbonate', 'Cleaning, glass making'],
              ['Bleaching powder', 'Ca(OCl)Cl', 'Calcium oxychloride', 'Water purification, bleaching'],
              ['Plaster of Paris', 'CaSO₄·½H₂O', 'Calcium sulphate hemihydrate', 'Fracture casts, construction'],
              ['Gypsum', 'CaSO₄·2H₂O', 'Calcium sulphate dihydrate', 'Plaster of Paris source; fertilizer'],
              ['Quick lime', 'CaO', 'Calcium oxide', 'Whitewash, cement, drying agent'],
              ['Slaked lime', 'Ca(OH)₂', 'Calcium hydroxide', 'Whitewash, antacid, water treatment'],
              ['Limestone', 'CaCO₃', 'Calcium carbonate', 'Cement, marble, chalk'],
              ['Ammonia', 'NH₃', '—', 'Fertilizers, refrigerant, cleaning'],
              ['Sulphuric acid', 'H₂SO₄', 'Oil of vitriol', 'Batteries, fertilizers, industry'],
              ['Hydrochloric acid', 'HCl', 'Muriatic acid', 'Stomach acid, cleaning'],
              ['Nitric acid', 'HNO₃', 'Aqua fortis', 'Fertilizers, explosives'],
              ['Glucose', 'C₆H₁₂O₆', 'Blood sugar', 'Energy source in body'],
              ['Ozone', 'O₃', '—', 'Protects from UV rays in stratosphere'],
              ['Hydrogen peroxide', 'H₂O₂', '—', 'Antiseptic, bleaching hair']
            ]) +
            H.h2('Gases in Daily Life') +
            tbl(['Gas', 'Formula', 'Fact'], [
              ['Oxygen', 'O₂', 'Supports combustion and respiration; ~21% of air'],
              ['Nitrogen', 'N₂', '~78% of air; makes proteins; inert at room temp'],
              ['Carbon dioxide', 'CO₂', 'Photosynthesis/product of respiration; fire extinguisher; makes drinks fizzy'],
              ['Carbon monoxide', 'CO', 'Poisonous; incomplete combustion; binds haemoglobin'],
              ['Methane', 'CH₄', 'Natural gas, biogas, greenhouse gas'],
              ['Ammonia', 'NH₃', 'Pungent smell; fertilizers; Haber process']
            ]) +
            H.h2('Match the Chemical with Use (Exam Favourite)') +
            tbl(['Question Pattern', 'Answer'], [
              ['Used in whitewash', 'Ca(OH)₂ — Slaked lime'],
              ['Used in fracture plaster', 'CaSO₄·½H₂O — Plaster of Paris'],
              ['King of chemicals', 'H₂SO₄ — Sulphuric acid'],
              ['Used in water purification', 'Bleaching powder / Chlorine'],
              ['Compound in baking cakes fluffy', 'NaHCO₃ — Baking soda']
            ]),
            {
              simplyPut: 'Memorise formulas of baking soda, bleaching powder, plaster of Paris, common salt, and the three main acids (HCl, H₂SO₄, HNO₃).',
              examTip: 'Bleaching powder formula CaOCl₂ or Ca(OCl)Cl — both accepted. Plaster of Paris + water → Gypsum (hard mass). CO is silent killer — incomplete burning of fuel.',
              quickRevision: [
                'NaCl — common salt; NaHCO₃ — baking soda',
                'Ca(OCl)Cl — bleaching powder; CaSO₄·½H₂O — Plaster of Paris',
                'Ca(OH)₂ — slaked lime (whitewash); CaO — quick lime',
                'H₂SO₄ — king of chemicals; HCl — stomach acid',
                'CO — poisonous; CO₂ — fire extinguisher, photosynthesis',
                'NH₃ — fertilizers; O₃ — ozone layer protection'
              ],
              examAsk: 'Formula of baking soda? (NaHCO₃) | Compound used in whitewash? (Ca(OH)₂) | Poisonous gas from incomplete combustion? (CO)'
            }
          )
        },
        {
          id: 'air-water',
          title: 'Air & Water',
          content: T(
            'Air & Water',
            'Air is the mixture of gases we breathe. Water is essential for all life. Both are tested heavily in science sections — composition of air, water cycle, hardness, and pollution.',
            H.h2('Composition of Dry Air') +
            tbl(['Gas', 'Percentage by Volume', 'Role'], [
              ['Nitrogen (N₂)', '~78%', 'Dilutes oxygen; makes proteins in plants via fixation'],
              ['Oxygen (O₂)', '~21%', 'Respiration and combustion'],
              ['Argon (Ar)', '~0.93%', 'Inert; used in light bulbs'],
              ['Carbon dioxide (CO₂)', '~0.04%', 'Photosynthesis; greenhouse gas'],
              ['Others (Ne, He, O₃, etc.)', 'Trace', 'Various industrial uses']
            ]) +
            H.p('Air also contains water vapour, dust, and pollutants (in cities). Percentage of oxygen remains same at all altitudes, but air density decreases on mountains — climbers need oxygen cylinders.') +
            H.h2('Water — Universal Solvent') +
            H.p('Water covers ~71% of Earth. Exists as solid (ice), liquid (water), gas (water vapour). Pure water is colourless, odourless, tasteless with neutral pH 7.') +
            H.h2('Hard Water vs Soft Water') +
            tbl(['Type', 'Contains', 'Effect', 'Removal'], [
              ['Hard water', 'Ca²⁺ and Mg²⁺ salts (bicarbonates/sulphates)', 'Less lather with soap; scale in pipes', 'Boiling (temporary); soda/washing soda (permanent)'],
              ['Soft water', 'Low mineral content', 'Good lather with soap', 'Rainwater, distilled water']
            ]) +
            H.h2('Water Cycle') +
            H.p('Evaporation → Transpiration (from plants) → Condensation (clouds) → Precipitation (rain/snow) → Collection (rivers, groundwater) → repeat. Solar energy drives the cycle.') +
            H.h2('Water Pollution') +
            tbl(['Pollutant', 'Source', 'Effect'], [
              ['Sewage & domestic waste', 'Homes, cities', 'BOD increase, diseases (cholera, typhoid)'],
              ['Industrial effluents', 'Factories', 'Toxic chemicals, heavy metals'],
              ['Fertilizers & pesticides', 'Agriculture', 'Eutrophication, groundwater contamination'],
              ['Oil spills', 'Ships, refineries', 'Kills marine life']
            ]) +
            H.h2('Air Pollution') +
            tbl(['Pollutant', 'Source', 'Effect'], [
              ['CO', 'Incomplete fuel burning', 'Reduces oxygen carrying capacity of blood'],
              ['CO₂', 'Combustion, deforestation', 'Global warming / greenhouse effect'],
              ['SO₂, NOₓ', 'Coal, vehicles', 'Acid rain, respiratory problems'],
              ['PM 2.5 / PM 10', 'Dust, vehicles, construction', 'Lung diseases, smog'],
              ['CFCs', 'Old refrigerators, ACs', 'Ozone layer depletion']
            ]),
            {
              simplyPut: 'Air = 78% N₂ + 21% O₂ + rest. Hard water does not lather well. Water cycle = evaporation → clouds → rain → repeat.',
              examTip: 'Air composition is by VOLUME not mass. Nitrogen is most abundant gas in air (NOT oxygen). Acid rain caused mainly by SO₂ and NOₓ.',
              quickRevision: [
                'Air: N₂ ~78%, O₂ ~21%, Ar ~0.93%, CO₂ ~0.04%',
                'Hard water — Ca/Mg salts; soft water — lathers easily',
                'Water cycle: evaporation, condensation, precipitation',
                'CO — toxic; CO₂ — greenhouse gas',
                'Acid rain from SO₂ and NOₓ',
                'CFCs cause ozone depletion; O₃ in stratosphere blocks UV'
              ],
              examAsk: 'Most abundant gas in air? (Nitrogen) | Percentage of oxygen in air? (~21%) | Cause of acid rain? (SO₂ and NOₓ)'
            }
          )
        },
        {
          id: 'fuels',
          title: 'Fuels',
          content: T(
            'Fuels',
            'Fuels are substances that release energy when burned — powering vehicles, cooking, electricity generation, and industries. They can be solid, liquid, or gaseous.',
            H.h2('Classification of Fuels') +
            tbl(['Type', 'Examples', 'Calorific Value Trend'], [
              ['Solid', 'Coal, coke, wood, dung cakes', 'Lower than liquids/gases generally'],
              ['Liquid', 'Petrol, diesel, kerosene, LPG (liquefied)', 'Higher than solid'],
              ['Gaseous', 'Natural gas (methane), CNG, biogas, hydrogen', 'Highest calorific values generally']
            ]) +
            H.h2('Important Fuels & Facts') +
            tbl(['Fuel', 'Main Component', 'Use / Fact'], [
              ['LPG (Liquefied Petroleum Gas)', 'Butane + Propane', 'Cooking gas in cylinders; odour added for leak detection'],
              ['CNG (Compressed Natural Gas)', 'Methane (~90%)', 'Cleaner vehicle fuel; Delhi buses use CNG'],
              ['Biogas', 'Methane (from organic waste)', 'Gobar gas plants in villages; renewable'],
              ['Petrol / Gasoline', 'Mixture of hydrocarbons', 'Car fuel; octane number measures quality'],
              ['Diesel', 'Heavier hydrocarbons', 'Trucks, generators; more efficient than petrol'],
              ['Coal', 'Carbon + impurities', 'Thermal power plants; types: anthracite (best) to lignite'],
              ['Kerosene', 'Hydrocarbon mixture', 'Stoves, lamps, aviation fuel (some)'],
              ['Hydrogen', 'H₂', 'Cleanest fuel — only water as product; used in rockets']
            ]) +
            H.h2('Combustion') +
            H.p('Complete combustion: Fuel + O₂ → CO₂ + H₂O + Energy. Incomplete combustion produces CO (poisonous) and soot (carbon).') +
            H.h2('Calorific Value') +
            H.p('Amount of heat released when 1 kg of fuel burns completely. Unit: kJ/kg. Higher calorific value = more energy per kg. Hydrogen has highest calorific value (~150 MJ/kg).') +
            H.h2('Renewable vs Non-Renewable') +
            tbl(['Renewable', 'Non-Renewable'], [
              ['Biogas, wood (if replanted), hydrogen (if from electrolysis using renewable energy)', 'Coal, petroleum, natural gas, nuclear (U-235)']
            ]),
            {
              simplyPut: 'Fuel + oxygen → heat energy. LPG/CNG for cooking and vehicles. Coal/petrol from underground — limited. Biogas from cow dung — renewable.',
              examTip: 'LPG is NOT methane alone — it is mainly butane/propane. CNG is mainly methane. Coal types: Anthracite (best, ~90% C) > Bituminous > Lignite > Peat.',
              quickRevision: [
                'Complete combustion → CO₂ + H₂O; Incomplete → CO + soot',
                'LPG — butane/propane; CNG — methane',
                'Biogas — renewable; from organic waste (gobar gas)',
                'Hydrogen — cleanest fuel; product is only water',
                'Calorific value — heat per kg of fuel burnt',
                'Coal ranking: Anthracite > Bituminous > Lignite > Peat'
              ],
              examAsk: 'Main component of biogas? (Methane) | Cleanest fuel? (Hydrogen) | Product of complete combustion of hydrocarbon? (CO₂ and H₂O)'
            }
          )
        },
        {
          id: 'vitamins-chemistry',
          title: 'Vitamins — Chemistry Aspect',
          content: T(
            'Vitamins — Chemistry Aspect',
            'Vitamins are organic compounds needed in small amounts for body functions. From a chemistry angle, they are classified as water-soluble or fat-soluble based on their molecular behaviour.',
            H.h2('Classification') +
            tbl(['Type', 'Vitamins', 'Solubility', 'Storage in Body'], [
              ['Water-soluble', 'B-complex, C', 'Dissolve in water', 'Not stored much — need regular intake; excess excreted in urine'],
              ['Fat-soluble', 'A, D, E, K', 'Dissolve in fats/oils', 'Stored in liver/fat — can accumulate to toxic levels']
            ]) +
            H.h2('Vitamins Table — Chemistry & Deficiency') +
            tbl(['Vitamin', 'Chemical Name', 'Source', 'Deficiency Disease', 'Function'], [
              ['A', 'Retinol', 'Carrot, milk, egg, fish liver oil', 'Night blindness, Xerophthalmia', 'Vision, immune system'],
              ['B₁', 'Thiamine', 'Whole grains, nuts, legumes', 'Beri-beri', 'Carbohydrate metabolism'],
              ['B₂', 'Riboflavin', 'Milk, eggs, green vegetables', 'Cracking of lips, sore tongue', 'Energy release from food'],
              ['B₃', 'Niacin', 'Meat, cereals, peanuts', 'Pellagra (3 Ds: dermatitis, diarrhoea, dementia)', 'Skin and nerve health'],
              ['B₉', 'Folic acid', 'Leafy greens, liver', 'Anaemia in pregnancy', 'DNA synthesis, RBC formation'],
              ['B₁₂', 'Cyanocobalamin', 'Meat, fish, dairy (not in plants)', 'Pernicious anaemia', 'RBC formation, nerve function'],
              ['C', 'Ascorbic acid', 'Amla, citrus, tomato', 'Scurvy (bleeding gums)', 'Immunity, collagen, antioxidant'],
              ['D', 'Calciferol', 'Sunlight on skin, fish, egg', 'Rickets (children), Osteomalacia (adults)', 'Calcium absorption, bone health'],
              ['E', 'Tocopherol', 'Vegetable oils, nuts, seeds', 'Muscle weakness, nerve damage', 'Antioxidant — protects cell membranes'],
              ['K', 'Phylloquinone', 'Green leafy vegetables', 'Bleeding / poor blood clotting', 'Blood clotting (helps make prothrombin)']
            ]) +
            H.h2('Chemical Facts for Exams') +
            H.ul([
              'Vitamin C (ascorbic acid) is easily destroyed by heat — eat raw fruits/vegetables',
              'Vitamin D is called "sunshine vitamin" — skin makes it from cholesterol using UV light',
              'B₁₂ contains cobalt — only vitamin with a metal atom',
              'Scurvy was common in sailors — no fresh fruits on long voyages',
              'Synthetic vitamins have same chemical structure as natural ones'
            ]),
            {
              simplyPut: 'Water-soluble (B, C) — need daily. Fat-soluble (A, D, E, K) — stored in body. Vitamin C = ascorbic acid. Vitamin D from sunlight.',
              examTip: 'Night blindness = Vitamin A. Scurvy = Vitamin C. Rickets = Vitamin D. Beri-beri = B₁. Pellagra = B₃. Only B₁₂ needs cobalt and is absent in pure vegetarian diet without supplements.',
              quickRevision: [
                'Water-soluble: B-complex + C; Fat-soluble: A, D, E, K',
                'A — night blindness; C — scurvy; D — rickets',
                'B₁ — beri-beri; B₃ — pellagra; B₁₂ — pernicious anaemia',
                'Vitamin C = ascorbic acid; destroyed by cooking heat',
                'Vitamin D = calciferol; made in skin by sunlight',
                'K — blood clotting; E — antioxidant'
              ],
              examAsk: 'Deficiency of Vitamin C causes? (Scurvy) | Sunshine vitamin? (Vitamin D) | Fat-soluble vitamins? (A, D, E, K)'
            }
          )
        },
        {
          id: 'alloys-chemistry',
          title: 'Alloys',
          content: T(
            'Alloys',
            'An alloy is a mixture of a metal with one or more other elements (metal or non-metal) to improve properties like strength, hardness, or corrosion resistance — like steel is iron mixed with carbon.',
            H.h2('Why Alloys Are Made') +
            H.ul([
              'Increase hardness and strength (steel vs pure iron)',
              'Reduce corrosion (stainless steel, brass)',
              'Lower melting point (solder for electronics)',
              'Improve appearance (gold alloys for jewellery)',
              'Reduce cost (using cheaper metals while keeping useful properties)'
            ]) +
            H.h2('Important Alloys — Complete Table') +
            tbl(['Alloy', 'Composition', 'Properties / Uses'], [
              ['Steel', 'Iron (~98%) + Carbon (0.2–2%)', 'Buildings, bridges, vehicles, tools'],
              ['Stainless steel', 'Iron + Chromium (Cr) + Nickel (Ni)', 'Cutlery, surgical instruments — rust resistant'],
              ['Cast iron', 'Iron + Carbon (2–4%)', 'Pipes, machine parts — hard but brittle'],
              ['Brass', 'Copper (Cu) + Zinc (Zn)', 'Utensils, decorative items, electrical fittings'],
              ['Bronze', 'Copper (Cu) + Tin (Sn)', 'Statues, medals, ship propellers — resists corrosion'],
              ['Solder', 'Lead (Pb) + Tin (Sn)', 'Low melting point — joins electronic wires'],
              ['Gunmetal', 'Cu + Sn + Zn + Pb', 'Guns, heavy machinery bearings'],
              ['Duralumin', 'Al + Cu + Mg + Mn', 'Aircraft, lightweight strong structures'],
              ['Magnalium', 'Al + Magnesium (Mg)', 'Lightweight — aircraft, mirrors'],
              ['Bell metal', 'Cu + Sn (high Sn)', 'Temple bells — sonorous sound'],
              ['German silver', 'Cu + Zn + Nickel (Ni)', 'Tableware — contains NO silver!'],
              ['Pewter', 'Sn + Pb + Cu + Sb', 'Decorative items'],
              ['Amalgam', 'Mercury (Hg) + other metal', 'Dental fillings (Hg + Ag/Tin)'],
              ['22-carat gold', 'Gold (Au) + Copper/Silver', 'Jewellery — pure gold (24 carat) is too soft']
            ]) +
            H.h2('Carat System for Gold') +
            H.p('24 carat = pure gold (100%). 22 carat = 22/24 = 91.6% gold. 18 carat = 75% gold. Lower carat = harder, more durable for daily wear jewellery.'),
            {
              simplyPut: 'Alloy = metal + something else for better properties. Steel = iron + carbon. Brass = copper + zinc. Stainless steel resists rust due to chromium.',
              examTip: 'German silver has NO silver — it is Cu+Zn+Ni. Bronze age came before iron age (bronze = Cu+Sn). Solder melts easily — Pb+Sn for circuit boards.',
              quickRevision: [
                'Steel = Fe + C; Stainless steel = Fe + Cr + Ni',
                'Brass = Cu + Zn; Bronze = Cu + Sn',
                'Duralumin = Al + Cu + Mg + Mn — aircraft',
                'Solder = Pb + Sn — low melting point',
                'German silver — no silver; Cu + Zn + Ni',
                'Amalgam — mercury alloy; used in dental fillings'
              ],
              examAsk: 'Composition of brass? (Copper + Zinc) | Alloy for aircraft bodies? (Duralumin) | Stainless steel contains which element for rust resistance? (Chromium)'
            }
          )
        }
      ]
    },
    {
      id: 'biology',
      name: 'Biology',
      topics: [
        {
          id: 'cell-biology',
          title: 'Cell Biology',
          content: T(
            'Cell Biology',
            'The cell is the basic unit of life — every living thing is made of cells. Understanding cell parts helps explain how your body grows, heals, and gets energy from food.',
            H.h2('Cell Theory (3 Points)') +
            H.ul([
              'All living organisms are made of cells',
              'Cell is the basic unit of structure and function',
              'All cells arise from pre-existing cells (Rudolf Virchow)'
            ]) +
            H.h2('Prokaryotic vs Eukaryotic Cells') +
            tbl(['Feature', 'Prokaryotic', 'Eukaryotic'], [
              ['Nucleus', 'No true nucleus (nucleoid region)', 'True nucleus with nuclear membrane'],
              ['Organisms', 'Bacteria, blue-green algae (cyanobacteria)', 'Plants, animals, fungi, protists'],
              ['Size', 'Small (1–10 μm)', 'Larger (10–100 μm)'],
              ['Organelles', 'No membrane-bound organelles', 'Mitochondria, ER, Golgi, etc.']
            ]) +
            H.h2('Cell Organelles & Functions') +
            tbl(['Organelle', 'Function', 'Analogy'], [
              ['Cell membrane', 'Controls entry/exit of substances', 'Security gate of factory'],
              ['Nucleus', 'Controls cell activities; contains DNA', 'Brain / control room'],
              ['Mitochondria', 'Cellular respiration — produces ATP energy', 'Powerhouse of cell'],
              ['Ribosomes', 'Protein synthesis', 'Protein factories'],
              ['Endoplasmic Reticulum (ER)', 'Rough ER — protein transport; Smooth ER — lipid synthesis', 'Transport network'],
              ['Golgi apparatus', 'Packaging and dispatch of proteins', 'Post office'],
              ['Lysosomes', 'Digestion of waste (contain enzymes)', 'Suicide bags / waste disposal'],
              ['Vacuole', 'Storage (large in plant cells)', 'Storage tank'],
              ['Chloroplast', 'Photosynthesis (plants only)', 'Solar panel of cell'],
              ['Cell wall', 'Rigid support (plants, fungi, bacteria)', 'Outer wall of factory']
            ]) +
            H.h2('Plant Cell vs Animal Cell') +
            tbl(['Structure', 'Plant Cell', 'Animal Cell'], [
              ['Cell wall', 'Present (cellulose)', 'Absent'],
              ['Chloroplast', 'Present', 'Absent'],
              ['Vacuole', 'Large central vacuole', 'Small or absent'],
              ['Shape', 'Fixed, rectangular', 'Round/irregular'],
              ['Centrioles', 'Absent (except lower plants)', 'Present']
            ]) +
            H.h2('Cell Division') +
            tbl(['Type', 'Result', 'Where It Occurs'], [
              ['Mitosis', '2 identical diploid cells (growth & repair)', 'Body (somatic) cells'],
              ['Meiosis', '4 haploid cells (gametes — half chromosomes)', 'Reproductive organs (testes, ovaries)']
            ]),
            {
              simplyPut: 'Cell = smallest living unit. Nucleus = control centre. Mitochondria = energy. Plant cells have cell wall + chloroplast; animal cells do not.',
              examTip: 'Powerhouse = Mitochondria. Suicide bags = Lysosomes. Control centre = Nucleus. Only plant cells have chloroplast AND cell wall. Bacteria = prokaryotic.',
              quickRevision: [
                'Cell theory — all living things made of cells',
                'Prokaryotic — no true nucleus (bacteria)',
                'Eukaryotic — true nucleus (plants, animals)',
                'Mitochondria — powerhouse; Chloroplast — photosynthesis',
                'Lysosomes — suicide bags; Ribosomes — protein synthesis',
                'Mitosis — growth/repair; Meiosis — gamete formation'
              ],
              examAsk: 'Powerhouse of cell? (Mitochondria) | Organelle for photosynthesis? (Chloroplast) | Bacteria cell type? (Prokaryotic)'
            }
          )
        },
        {
          id: 'classification-of-life',
          title: 'Classification of Life',
          content: T(
            'Classification of Life',
            'Classification organises all living things into groups based on similarities — from broad kingdoms down to specific species. It helps scientists study and name organisms systematically.',
            H.h2('Five Kingdom Classification (Whittaker)') +
            tbl(['Kingdom', 'Characteristics', 'Examples'], [
              ['Monera', 'Prokaryotic; unicellular', 'Bacteria, cyanobacteria (blue-green algae)'],
              ['Protista', 'Eukaryotic; mostly unicellular', 'Amoeba, Paramecium, Euglena, algae'],
              ['Fungi', 'Eukaryotic; heterotrophic; chitin cell wall; saprophytic', 'Mushroom, yeast, mould, penicillium'],
              ['Plantae', 'Eukaryotic; autotrophic; cell wall (cellulose); chlorophyll', 'Moss, fern, mango tree, grass'],
              ['Animalia', 'Eukaryotic; heterotrophic; no cell wall; locomotion', 'Fish, frog, bird, human, insect']
            ]) +
            H.h2('Autotrophs vs Heterotrophs') +
            tbl(['Type', 'Food Source', 'Examples'], [
              ['Autotrophs (Producers)', 'Make own food (photosynthesis/chemosynthesis)', 'Green plants, cyanobacteria'],
              ['Heterotrophs (Consumers)', 'Depend on others for food', 'Animals, fungi, most bacteria'],
              ['Saprotrophs', 'Feed on dead organic matter', 'Fungi, some bacteria (decomposers)'],
              ['Parasites', 'Feed on living host', 'Plasmodium (malaria), tapeworm, lice']
            ]) +
            H.h2('Taxonomic Hierarchy (Top → Bottom)') +
            H.p('Kingdom → Phylum (Division in plants) → Class → Order → Family → Genus → Species') +
            H.p('Human scientific name: <strong>Homo sapiens</strong> (Genus + species). Binomial nomenclature by Carl Linnaeus — written in Latin, genus capitalised, species lowercase, italicised.') +
            H.h2('Vertebrates vs Invertebrates') +
            tbl(['Group', 'Backbone?', 'Examples'], [
              ['Invertebrates (~97% of animal species)', 'No', 'Insects, worms, jellyfish, starfish, octopus'],
              ['Vertebrates', 'Yes (vertebral column)', 'Fish, amphibians, reptiles, birds, mammals']
            ]) +
            H.h2('Classes of Vertebrates') +
            tbl(['Class', 'Features', 'Examples'], [
              ['Pisces (Fish)', 'Cold-blooded; gills; scales; lay eggs in water', 'Rohu, shark, seahorse'],
              ['Amphibia', 'Cold-blooded; moist skin; live in water & land', 'Frog, toad, salamander'],
              ['Reptilia', 'Cold-blooded; dry scaly skin; lay eggs on land', 'Snake, lizard, crocodile, turtle'],
              ['Aves (Birds)', 'Warm-blooded; feathers; wings; lay eggs', 'Sparrow, eagle, penguin, ostrich'],
              ['Mammalia', 'Warm-blooded; hair; mammary glands; mostly live birth', 'Human, whale, bat, platypus (lays eggs)']
            ]),
            {
              simplyPut: '5 Kingdoms: Monera, Protista, Fungi, Plantae, Animalia. Plants make food; animals eat. Scientific name has two parts — Homo sapiens.',
              examTip: 'Fungi are NOT plants — they lack chlorophyll and are saprophytic. Yeast is a fungus used in baking. Largest animal phylum = Arthropoda (insects).',
              quickRevision: [
                '5 Kingdoms — Monera, Protista, Fungi, Plantae, Animalia',
                'Autotrophs — make food; Heterotrophs — consume others',
                'Binomial nomenclature — Linnaeus; Genus + species',
                'Vertebrates — have backbone; Invertebrates — no backbone',
                'Mammals — warm-blooded, hair, milk glands',
                'Fungi — saprophytic, chitin cell wall, no chlorophyll'
              ],
              examAsk: 'Five kingdom classification by? (Whittaker) | Scientific name of human? (Homo sapiens) | Kingdom of mushrooms? (Fungi)'
            }
          )
        },
        {
          id: 'photosynthesis',
          title: 'Photosynthesis',
          content: T(
            'Photosynthesis',
            'Photosynthesis is the process by which green plants make food (glucose) using sunlight, water, and carbon dioxide — releasing oxygen as a by-product. It is the foundation of almost all life on Earth.',
            H.h2('Equation') +
            H.p('<strong>6CO₂ + 6H₂O + Sunlight + Chlorophyll → C₆H₁₂O₆ + 6O₂</strong>') +
            H.h2('Requirements & Products') +
            tbl(['Input (Raw Material)', 'Source', 'Output (Product)', 'Use of Output'], [
              ['Carbon dioxide (CO₂)', 'Air through stomata', 'Glucose (C₆H₁₂O₆)', 'Food/energy for plant; stored as starch'],
              ['Water (H₂O)', 'Soil through roots', 'Oxygen (O₂)', 'Released to air — we breathe it!'],
              ['Sunlight', 'Sun', '—', 'Energy source'],
              ['Chlorophyll', 'Chloroplasts in leaves', '—', 'Green pigment traps light energy']
            ]) +
            H.h2('Where It Happens') +
            H.p('In <strong>chloroplasts</strong> of green leaves (mainly palisade mesophyll cells). Stomata (tiny pores on leaf underside) take in CO₂ and release O₂.') +
            H.h2('Factors Affecting Photosynthesis') +
            tbl(['Factor', 'Effect'], [
              ['Light intensity', 'More light → more photosynthesis (up to a limit)'],
              ['CO₂ concentration', 'More CO₂ → more photosynthesis (up to a limit)'],
              ['Temperature', 'Optimum ~25–35°C; too high/low slows enzyme action'],
              ['Water availability', 'Shortage closes stomata → less CO₂ intake'],
              ['Chlorophyll', 'No chlorophyll = no photosynthesis (variegated leaves prove this)']
            ]) +
            H.h2('Importance') +
            H.ul([
              'Produces food for all life (directly or through food chains)',
              'Releases oxygen — essential for respiration of most organisms',
              'Removes CO₂ from atmosphere — reduces greenhouse effect',
              'Source of fossil fuels (coal, petroleum — ancient plants)'
            ]),
            {
              simplyPut: 'Plants use sunlight + CO₂ + water to make sugar and oxygen. Green colour (chlorophyll) traps sunlight. Without photosynthesis, no food and no oxygen for us.',
              examTip: 'Photosynthesis occurs ONLY in green parts with chlorophyll. Stomata are on leaf surface (mainly lower epidermis). Test for starch (not glucose) using iodine — turns blue-black.',
              quickRevision: [
                '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in presence of light & chlorophyll)',
                'Occurs in chloroplasts of green leaves',
                'Stomata — gas exchange (CO₂ in, O₂ out)',
                'Chlorophyll — green pigment; traps light energy',
                'Products: glucose (food) + oxygen',
                'Factors: light, CO₂, temperature, water, chlorophyll'
              ],
              examAsk: 'Gas released during photosynthesis? (Oxygen) | Green pigment needed? (Chlorophyll) | Where does photosynthesis occur? (Chloroplasts in leaves)'
            }
          )
        },
        {
          id: 'digestive-system',
          title: 'Digestive System',
          content: T(
            'Digestive System',
            'The digestive system breaks down food into small absorbable nutrients that your body uses for energy, growth, and repair — from chewing in the mouth to absorption in the intestines.',
            H.h2('Alimentary Canal — Organs in Order') +
            tbl(['Organ', 'Function', 'Enzyme / Juice'], [
              ['Mouth (Buccal cavity)', 'Chewing (mechanical); starch digestion begins', 'Salivary amylase (ptyalin) — breaks starch → maltose'],
              ['Oesophagus (Food pipe)', 'Peristalsis pushes food to stomach', 'No digestion'],
              ['Stomach', 'Churning; protein digestion; kills bacteria (HCl)', 'Pepsin (protein → peptides); HCl acid'],
              ['Small intestine (Duodenum + Ileum)', 'Main digestion & absorption', 'Bile (fats emulsified); pancreatic amylase, trypsin, lipase; intestinal juices'],
              ['Large intestine (Colon)', 'Water absorption; faeces formation', 'No enzymes — bacteria help'],
              ['Rectum & Anus', 'Storage and egestion of waste', '—']
            ]) +
            H.h2('Associated Glands') +
            tbl(['Gland', 'Secretion', 'Function'], [
              ['Salivary glands', 'Saliva (amylase)', 'Starch digestion in mouth'],
              ['Liver', 'Bile (stored in gall bladder)', 'Emulsifies fats — NO enzymes in bile'],
              ['Pancreas', 'Pancreatic juice', 'Amylase, trypsin, lipase — digest carbs, proteins, fats'],
              ['Gastric glands (stomach wall)', 'Gastric juice (HCl + pepsin)', 'Protein digestion; acidic pH ~1.5–2']
            ]) +
            H.h2('Digestion of Major Nutrients') +
            tbl(['Nutrient', 'Broken Into', 'Enzyme', 'Absorbed As'], [
              ['Carbohydrates (starch)', 'Maltose → Glucose', 'Salivary & pancreatic amylase', 'Glucose in blood'],
              ['Proteins', 'Peptides → Amino acids', 'Pepsin, trypsin', 'Amino acids in blood'],
              ['Fats', 'Fatty acids + Glycerol', 'Lipase (+ bile emulsification)', 'Through lymph (lacteals)']
            ]) +
            H.h2('Villi — Absorption in Small Intestine') +
            H.p('Inner wall has finger-like projections called villi (and microvilli) — increase surface area enormously for nutrient absorption into blood capillaries and lacteals (lymph).'),
            {
              simplyPut: 'Food goes: mouth → food pipe → stomach → small intestine (most absorption) → large intestine → out. Enzymes break big molecules into small absorbable pieces.',
              examTip: 'Longest part of alimentary canal = Small intestine (~6–7 m). Largest gland = Liver. Bile has NO enzymes — only emulsifies fat. Absorption mainly in ileum.',
              quickRevision: [
                'Starch digestion starts in mouth (salivary amylase)',
                'Stomach — HCl + pepsin (protein digestion)',
                'Liver — bile; emulsifies fats; stored in gall bladder',
                'Pancreas — amylase, trypsin, lipase',
                'Small intestine — main digestion & absorption (villi)',
                'Large intestine — water absorption; faeces formation'
              ],
              examAsk: 'Where is bile produced? (Liver) | Enzyme for starch in mouth? (Salivary amylase) | Main site of absorption? (Small intestine)'
            }
          )
        },
        {
          id: 'circulatory-system',
          title: 'Circulatory System',
          content: T(
            'Circulatory System',
            'The circulatory system transports blood throughout the body — delivering oxygen and nutrients to cells and removing waste products like carbon dioxide.',
            H.h2('Components') +
            tbl(['Component', 'Function'], [
              ['Heart', 'Muscular pump — 4 chambers; beats ~72 times/min at rest'],
              ['Arteries', 'Carry blood AWAY from heart; thick elastic walls; usually oxygenated (except pulmonary artery)'],
              ['Veins', 'Carry blood TO heart; thin walls; have valves; usually deoxygenated (except pulmonary vein)'],
              ['Capillaries', 'Tiny vessels connecting arteries & veins; site of exchange with tissues'],
              ['Blood', 'Transport medium — RBCs, WBCs, platelets, plasma']
            ]) +
            H.h2('Human Heart — 4 Chambers') +
            tbl(['Chamber', 'Receives / Pumps', 'Blood Type'], [
              ['Right Atrium', 'Deoxygenated blood from body (via vena cava)', 'Deoxygenated'],
              ['Right Ventricle', 'Pumps to lungs via pulmonary artery', 'Deoxygenated'],
              ['Left Atrium', 'Oxygenated blood from lungs (via pulmonary vein)', 'Oxygenated'],
              ['Left Ventricle', 'Pumps to entire body via aorta (thickest wall)', 'Oxygenated']
            ]) +
            H.p('Double circulation: blood passes through heart twice in one complete circuit (heart → lungs → heart → body).') +
            H.h2('Blood Components') +
            tbl(['Component', 'Function', 'Count / Fact'], [
              ['Plasma (55%)', 'Liquid part; transports nutrients, hormones, waste, CO₂', 'Straw-coloured fluid'],
              ['RBC (Erythrocytes)', 'Carry oxygen using haemoglobin (iron protein)', '~5 million/mm³; no nucleus; biconcave; 120-day life'],
              ['WBC (Leucocytes)', 'Fight infection — immunity', '~7000/mm³; have nucleus; can leave blood vessels'],
              ['Platelets (Thrombocytes)', 'Blood clotting at wound site', 'No nucleus; small fragments']
            ]) +
            H.h2('Blood Groups (ABO System)') +
            tbl(['Blood Group', 'Antigens on RBC', 'Antibodies in Plasma', 'Can Receive From'], [
              ['A', 'A', 'Anti-B', 'A, O'],
              ['B', 'B', 'Anti-A', 'B, O'],
              ['AB', 'A + B', 'None', 'All (Universal Recipient)'],
              ['O', 'None', 'Anti-A + Anti-B', 'O only (Universal Donor)']
            ]) +
            H.p('Rh factor: Rh+ or Rh–. Rh incompatibility can affect newborn if mother Rh– and baby Rh+.'),
            {
              simplyPut: 'Heart pumps blood. Arteries go OUT (away from heart). Veins come back. Red blood cells carry oxygen using haemoglobin. O group = universal donor.',
              examTip: 'Pulmonary artery carries deoxygenated blood (exception!). Pulmonary vein carries oxygenated blood (exception!). Left ventricle has thickest wall — pumps to whole body.',
              quickRevision: [
                'Heart — 4 chambers; double circulation',
                'Arteries — away from heart; Veins — to heart (have valves)',
                'Haemoglobin in RBC — carries O₂; needs iron',
                'WBC — immunity; Platelets — clotting',
                'Universal donor — O; Universal recipient — AB',
                'Aorta — largest artery; Vena cava — largest vein'
              ],
              examAsk: 'Which blood group is universal donor? (O) | Oxygen carrier in blood? (Haemoglobin in RBC) | Vessel carrying blood away from heart? (Artery)'
            }
          )
        },
        {
          id: 'respiratory-system',
          title: 'Respiratory System',
          content: T(
            'Respiratory System',
            'The respiratory system brings oxygen into the body and removes carbon dioxide — through breathing. Oxygen is essential for cells to release energy from food (cellular respiration).',
            H.h2('Human Respiratory Pathway') +
            H.p('Nostrils → Nasal cavity → Pharynx → Larynx (voice box) → Trachea (windpipe) → Bronchi → Bronchioles → Alveoli (air sacs in lungs)') +
            H.h2('Gas Exchange in Alveoli') +
            H.p('Alveoli are tiny balloon-like sacs with very thin walls, surrounded by blood capillaries. Oxygen diffuses from alveoli into blood; CO₂ diffuses from blood into alveoli to be breathed out. Total surface area of alveoli ≈ tennis court size!') +
            H.h2('Breathing vs Respiration') +
            tbl(['', 'Breathing (External)', 'Cellular Respiration (Internal)'], [
              ['What', 'Physical process — inhale/exhale air', 'Biochemical — glucose broken down with O₂'],
              ['Where', 'Lungs, diaphragm, rib cage', 'Inside cells (mitochondria)'],
              ['Products', 'CO₂ exhaled, O₂ inhaled', 'CO₂ + H₂O + Energy (ATP)'],
              ['Equation', '—', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy']
            ]) +
            H.h2('Mechanism of Breathing') +
            tbl(['Inhalation (Inspiration)', 'Exhalation (Expiration)'], [
              ['Diaphragm contracts (flattens)', 'Diaphragm relaxes (domed)'],
              ['Rib cage moves up and out', 'Rib cage moves down and in'],
              ['Chest volume increases → pressure decreases → air rushes IN', 'Chest volume decreases → pressure increases → air pushed OUT']
            ]) +
            H.h2('Respiratory Disorders') +
            tbl(['Disease', 'Cause / Feature'], [
              ['Asthma', 'Narrowed airways; difficulty breathing; allergic trigger'],
              ['Tuberculosis (TB)', 'Bacteria (Mycobacterium tuberculosis); affects lungs'],
              ['Pneumonia', 'Infection of alveoli; fluid-filled lungs'],
              ['Emphysema', 'Damaged alveoli (often from smoking); reduced gas exchange'],
              ['CO poisoning', 'CO binds haemoglobin better than O₂ — suffocation at cellular level']
            ]),
            {
              simplyPut: 'Breathe in O₂, breathe out CO₂. Gas exchange happens in alveoli (tiny lung sacs). Cellular respiration in cells uses O₂ to make energy from food.',
              examTip: 'Breathing ≠ Respiration. Breathing is physical; respiration is chemical (in mitochondria). Haemoglobin carries O₂ as oxyhaemoglobin. Smoking causes lung cancer and emphysema.',
              quickRevision: [
                'Path: Nose → Trachea → Bronchi → Bronchioles → Alveoli',
                'Gas exchange at alveoli — O₂ in, CO₂ out (by diffusion)',
                'Breathing — physical; Cellular respiration — in mitochondria',
                'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy',
                'Diaphragm + rib cage control breathing mechanism',
                'Haemoglobin transports O₂ in blood'
              ],
              examAsk: 'Where does gas exchange occur? (Alveoli) | Gas we inhale for respiration? (Oxygen) | Cellular respiration occurs in? (Mitochondria)'
            }
          )
        },
        {
          id: 'excretory-system',
          title: 'Excretory System',
          content: T(
            'Excretory System',
            'The excretory system removes waste products from the body — mainly urea from protein breakdown, excess water, and salts — keeping internal balance (homeostasis).',
            H.h2('Organs of Excretion in Humans') +
            tbl(['Organ', 'Waste Removed', 'Form'], [
              ['Kidneys (main)', 'Urea, excess water, salts, uric acid', 'Urine'],
              ['Lungs', 'CO₂ and water vapour', 'Gas'],
              ['Skin (sweat glands)', 'Water, salts, urea (small amount)', 'Sweat'],
              ['Liver', 'Bile pigments (bilirubin); breaks down haemoglobin', 'Bile (via intestine)']
            ]) +
            H.h2('Structure of Kidney & Nephron') +
            H.p('Each kidney has ~1 million filtering units called <strong>nephrons</strong>. Blood enters via renal artery, is filtered in glomerulus (Bowman\'s capsule), useful substances reabsorbed in tubule, waste forms urine collected in pelvis → ureter → urinary bladder → urethra.') +
            tbl(['Part', 'Function'], [
              ['Glomerulus + Bowman\'s capsule', 'Ultrafiltration — blood filtered under pressure'],
              ['Proximal & Distal tubule', 'Reabsorption of glucose, amino acids, water, salts'],
              ['Loop of Henle', 'Concentrates urine — water reabsorption'],
              ['Collecting duct', 'Final urine concentration; ADH hormone controls water reabsorption']
            ]) +
            H.h2('Urine Composition') +
            H.p('~95% water, ~2% urea, ~2% salts, traces of uric acid and other wastes. Normal person produces ~1–1.5 litres urine/day.') +
            H.h2('Kidney Disorders') +
            tbl(['Condition', 'Cause / Feature'], [
              ['Kidney stones (Renal calculi)', 'Calcium/uric acid crystals; severe pain'],
              ['Uraemia', 'Kidney failure — urea builds up in blood; dialysis needed'],
              ['Dialysis', 'Artificial kidney — filters blood when kidneys fail'],
              ['Kidney transplant', 'Permanent solution for end-stage renal failure']
            ]) +
            H.p('Dialysis removes urea from blood using a semi-permeable membrane — mimics kidney function.'),
            {
              simplyPut: 'Kidneys filter blood and make urine (remove urea). Lungs remove CO₂. Skin sweats out water and salt. Nephron is the filtering unit in kidney.',
              examTip: 'Functional unit of kidney = Nephron. Urea is formed in LIVER (from amino acids — deamination). Kidneys only filter and excrete urea. ADH (Antidiuretic hormone) controls water reabsorption.',
              quickRevision: [
                'Kidneys — main excretory organ; produce urine',
                'Nephron — functional unit of kidney',
                'Urea formed in liver; excreted by kidneys',
                'Glomerulus — filtration; Tubules — reabsorption',
                'Dialysis — artificial kidney for kidney failure',
                'Also excreted via lungs (CO₂) and skin (sweat)'
              ],
              examAsk: 'Functional unit of kidney? (Nephron) | Where is urea formed? (Liver) | Main waste in urine? (Urea)'
            }
          )
        },
        {
          id: 'nervous-system',
          title: 'Nervous System',
          content: T(
            'Nervous System',
            'The nervous system is the body\'s communication network — receiving information from senses, processing it in the brain, and sending commands to muscles and glands for fast responses.',
            H.h2('Parts of Nervous System') +
            tbl(['Division', 'Components', 'Function'], [
              ['Central Nervous System (CNS)', 'Brain + Spinal cord', 'Processing, decision-making, integration'],
              ['Peripheral Nervous System (PNS)', 'All nerves outside CNS', 'Carries messages to/from CNS'],
              ['Autonomic NNS', 'Sympathetic + Parasympathetic', 'Controls involuntary organs (heart, digestion)'],
              ['Somatic NNS', 'Voluntary nerves', 'Controls skeletal muscles (voluntary movement)']
            ]) +
            H.h2('Neuron — Nerve Cell') +
            tbl(['Part', 'Function'], [
              ['Dendrites', 'Receive signals from other neurons'],
              ['Cell body (Cyton)', 'Contains nucleus; processes information'],
              ['Axon', 'Carries impulse away from cell body to next neuron/muscle'],
              ['Myelin sheath', 'Insulation; speeds up impulse (Schwann cells)'],
              ['Synapse', 'Gap between two neurons; neurotransmitter crosses gap']
            ]) +
            H.h2('Brain — Main Parts') +
            tbl(['Part', 'Function'], [
              ['Cerebrum (largest part)', 'Thinking, memory, intelligence, voluntary actions, senses'],
              ['Cerebellum', 'Balance, posture, coordination of movement'],
              ['Medulla oblongata', 'Controls involuntary actions — breathing, heartbeat, vomiting'],
              ['Hypothalamus', 'Temperature regulation, hunger, thirst, links to pituitary'],
              ['Brain stem', 'Connects brain to spinal cord; relay centre']
            ]) +
            H.h2('Reflex Action') +
            H.p('Automatic, rapid, involuntary response to stimulus — does NOT involve brain initially. Path: Receptor → Sensory neuron → Spinal cord (relay) → Motor neuron → Effector (muscle/gland). Example: hand withdrawal from hot object, knee-jerk reflex, pupil constriction in bright light.') +
            H.h2('Sense Organs') +
            tbl(['Sense', 'Organ', 'Receptor'], [
              ['Vision', 'Eye', 'Rods (dim light) & Cones (colour) in retina'],
              ['Hearing', 'Ear', 'Hair cells in cochlea'],
              ['Smell', 'Nose', 'Olfactory receptors'],
              ['Taste', 'Tongue', 'Taste buds (sweet, salty, sour, bitter, umami)'],
              ['Touch/Pressure', 'Skin', 'Mechanoreceptors, thermoreceptors, pain receptors']
            ]),
            {
              simplyPut: 'Nerves carry electrical messages. Brain = thinking. Spinal cord = reflexes + relay. Neuron = nerve cell. Reflex = instant response without thinking (via spinal cord).',
              examTip: 'Reflex arc goes through SPINAL CORD, not brain (though you feel pain after). Smallest bone in body = stapes (in ear). Largest part of brain = Cerebrum. Medulla controls breathing.',
              quickRevision: [
                'CNS — brain + spinal cord; PNS — all other nerves',
                'Neuron — basic unit; dendrite (in), axon (out)',
                'Cerebrum — thinking; Cerebellum — balance; Medulla — involuntary',
                'Reflex action — fast, involuntary; via spinal cord',
                'Synapse — gap between neurons; neurotransmitter',
                'Eye — retina has rods and cones; Ear — cochlea for hearing'
              ],
              examAsk: 'Centre of reflex action? (Spinal cord) | Part of brain for balance? (Cerebellum) | Basic unit of nervous system? (Neuron)'
            }
          )
        },
        {
          id: 'endocrine-system',
          title: 'Endocrine System',
          content: T(
            'Endocrine System',
            'The endocrine system uses hormones (chemical messengers) secreted by glands directly into the bloodstream to regulate body functions like growth, metabolism, and reproduction — slower but longer-lasting than nerves.',
            H.h2('Endocrine vs Nervous System') +
            tbl(['Feature', 'Nervous', 'Endocrine'], [
              ['Message type', 'Electrical impulse', 'Chemical (hormone)'],
              ['Speed', 'Very fast (milliseconds)', 'Slower (seconds to days)'],
              ['Duration', 'Short-lived', 'Long-lasting'],
              ['Pathway', 'Nerve fibres', 'Bloodstream']
            ]) +
            H.h2('Important Glands & Hormones') +
            tbl(['Gland', 'Hormone(s)', 'Function', 'Disorder if Imbalanced'], [
              ['Pituitary (Master gland)', 'GH, TSH, ACTH, ADH, Prolactin', 'Controls other glands; growth; water balance', 'Dwarfism/Gigantism (GH); Diabetes insipidus (ADH)'],
              ['Thyroid (neck)', 'Thyroxine (T₄)', 'Metabolism rate; body growth', 'Goitre (deficiency); hyperthyroidism (excess)'],
              ['Parathyroid', 'Parathormone (PTH)', 'Calcium level in blood', 'Muscle cramps if low calcium'],
              ['Adrenal (above kidney)', 'Adrenaline, Cortisol', 'Fight-or-flight; stress response', 'Addison\'s / Cushing\'s disease'],
              ['Pancreas (Islets of Langerhans)', 'Insulin, Glucagon', 'Blood sugar regulation', 'Diabetes mellitus (insulin deficiency)'],
              ['Testes (male)', 'Testosterone', 'Male secondary sexual characters; sperm', 'Low development of male features'],
              ['Ovaries (female)', 'Oestrogen, Progesterone', 'Female secondary characters; menstrual cycle', 'Irregular menstruation'],
              ['Pineal', 'Melatonin', 'Sleep-wake cycle (circadian rhythm)', 'Sleep disorders'],
              ['Thymus', 'Thymosin', 'T-lymphocyte development (immunity)', 'Reduced immunity']
            ]) +
            H.h2('Diabetes Mellitus') +
            H.p('Type 1: Pancreas does not produce enough insulin — blood glucose stays high. Symptoms: frequent urination, thirst, weight loss. Treated with insulin injections. Type 2: Body cells resist insulin — linked to obesity and lifestyle.') +
            H.h2('Feedback Mechanism') +
            H.p('Hormone levels are controlled by feedback loops. Example: High blood sugar → pancreas releases insulin → glucose stored as glycogen → blood sugar drops → insulin release stops. This is negative feedback.'),
            {
              simplyPut: 'Glands pour hormones into blood to control body functions. Insulin lowers blood sugar. Adrenaline = emergency hormone (fight or flight). Pituitary = master gland.',
              examTip: 'Insulin — lowers blood glucose (produced by pancreas). Glucagon — raises blood glucose. Goitre = iodine deficiency → low thyroxine. Adrenaline is also called epinephrine.',
              quickRevision: [
                'Hormones — chemical messengers via blood',
                'Pituitary — master gland; at base of brain',
                'Insulin — lowers blood sugar (pancreas)',
                'Thyroxine — metabolism (thyroid); needs iodine',
                'Adrenaline — fight or flight (adrenal gland)',
                'Testosterone — male; Oestrogen/Progesterone — female'
              ],
              examAsk: 'Hormone that regulates blood sugar? (Insulin) | Master gland? (Pituitary) | Goitre caused by deficiency of? (Iodine / Thyroxine)'
            }
          )
        },
        {
          id: 'skeletal-system',
          title: 'Skeletal & Muscular System',
          content: T(
            'Skeletal & Muscular System',
            'The skeleton provides structure, support, and protection for the body. Muscles attached to bones enable movement. Together they form the musculoskeletal system.',
            H.h2('Human Skeleton — 206 Bones (Adult)') +
            tbl(['Type', 'Features', 'Examples'], [
              ['Axial skeleton (80 bones)', 'Skull, vertebral column, rib cage, sternum', 'Protects brain, heart, lungs; supports head'],
              ['Appendicular skeleton (126 bones)', 'Limbs and their girdles', 'Arms, legs, pectoral & pelvic girdles']
            ]) +
            H.h2('Important Bones') +
            tbl(['Bone / Structure', 'Number / Fact'], [
              ['Skull', '22 bones fused; protects brain'],
              ['Vertebral column (Backbone)', '33 vertebrae (26 in adult after fusion); supports body'],
              ['Rib cage', '12 pairs of ribs; protects heart and lungs'],
              ['Femur (Thigh bone)', 'Longest and strongest bone in body'],
              ['Stapes (in ear)', 'Smallest bone in body'],
              ['Humerus', 'Upper arm bone'],
              ['Pelvis', 'Hip bone; supports lower body']
            ]) +
            H.h2('Types of Joints') +
            tbl(['Joint Type', 'Movement', 'Example'], [
              ['Fixed (Immovable / Fibrous)', 'No movement', 'Skull bones (sutures)'],
              ['Slightly movable (Cartilaginous)', 'Limited movement', 'Vertebrae, rib-sternum'],
              ['Freely movable (Synovial)', 'Wide range of movement', 'Knee (hinge), hip & shoulder (ball & socket), wrist (pivot/gliding)']
            ]) +
            H.h2('Muscles') +
            tbl(['Type', 'Feature', 'Control', 'Example'], [
              ['Voluntary (Skeletal/Striated)', 'Attached to bones; show stripes', 'Conscious control', 'Biceps, triceps, leg muscles'],
              ['Involuntary (Smooth/Non-striated)', 'No stripes; slow, sustained', 'Automatic', 'Digestive tract, blood vessel walls'],
              ['Cardiac', 'Heart muscle only; branched; striated', 'Automatic (never tires)', 'Heart walls']
            ]) +
            H.p('Muscles work in pairs — when biceps contracts (flexion), triceps relaxes (extension). Tendons connect muscle to bone; Ligaments connect bone to bone.') +
            H.h2('Bone Disorders') +
            tbl(['Condition', 'Description'], [
              ['Arthritis', 'Inflammation of joints; pain and stiffness'],
              ['Osteoporosis', 'Bones become weak and brittle (common in elderly, especially women)'],
              ['Rickets', 'Soft, weak bones in children — Vitamin D deficiency'],
              ['Fracture', 'Break in bone; treated with plaster cast (Plaster of Paris)']
            ]),
            {
              simplyPut: '206 bones give shape and protection. Joints allow movement. Muscles pull on bones to move. Smallest bone = ear stapes. Longest = femur (thigh).',
              examTip: 'Tendon = muscle to bone. Ligament = bone to bone. Ball and socket joint = shoulder and hip. Hinge joint = elbow and knee. Heart muscle = cardiac (involuntary, never fatigues).',
              quickRevision: [
                'Adult human — 206 bones',
                'Femur — longest; Stapes — smallest',
                'Fixed joints — skull; Ball & socket — shoulder, hip',
                'Voluntary muscles — skeletal; Involuntary — smooth',
                'Cardiac muscle — only in heart; never tires',
                'Tendons — muscle to bone; Ligaments — bone to bone'
              ],
              examAsk: 'Longest bone in human body? (Femur) | Joint in shoulder? (Ball and socket) | Muscle that never tires? (Cardiac muscle)'
            }
          )
        },
        {
          id: 'immune-system',
          title: 'Immune System',
          content: T(
            'Immune System',
            'The immune system protects the body from harmful pathogens (bacteria, viruses, fungi) and foreign substances — it is your body\'s defence army.',
            H.h2('Types of Immunity') +
            tbl(['Type', 'How Acquired', 'Speed', 'Examples'], [
              ['Innate (Natural) immunity', 'Born with it; non-specific', 'Immediate', 'Skin barrier, mucus, stomach acid, phagocytes'],
              ['Acquired (Adaptive) immunity', 'Develops after exposure or vaccination', 'Slower first time; faster on re-exposure', 'Antibodies, lymphocytes, memory cells'],
              ['Active immunity', 'Body makes own antibodies', 'Long-lasting', 'After infection or vaccination'],
              ['Passive immunity', 'Antibodies received from outside', 'Short-term', 'Mother to baby (colostrum); antiserum injection']
            ]) +
            H.h2('Key Cells & Organs') +
            tbl(['Component', 'Role'], [
              ['White Blood Cells (WBC)', 'Main immune cells — fight pathogens'],
              ['Lymphocytes (B-cells & T-cells)', 'B-cells make antibodies; T-cells kill infected cells'],
              ['Phagocytes (Macrophages, Neutrophils)', 'Engulf and digest pathogens (phagocytosis)'],
              ['Lymph nodes', 'Filter lymph; trap pathogens; swell during infection'],
              ['Spleen', 'Filters blood; removes old RBCs; immune response'],
              ['Thymus', 'Maturation of T-lymphocytes'],
              ['Bone marrow', 'Produces blood cells including WBCs'],
              ['Skin & Mucous membranes', 'First line of defence — physical barrier']
            ]) +
            H.h2('Vaccination') +
            H.p('Vaccines contain weakened/killed pathogens or their parts. They stimulate body to produce antibodies and memory cells WITHOUT causing disease. On real infection, immune system responds quickly. Examples: Polio drops, BCG (TB), MMR (Measles, Mumps, Rubella), COVID-19 vaccines, Hepatitis B.') +
            H.h2('Common Diseases — Pathogen Type') +
            tbl(['Disease', 'Pathogen', 'Prevention / Treatment'], [
              ['Common cold', 'Virus (Rhino virus)', 'Rest; no antibiotic (antibiotics don\'t work on viruses)'],
              ['Tuberculosis (TB)', 'Bacteria (Mycobacterium tuberculosis)', 'BCG vaccine; DOTS treatment'],
              ['Malaria', 'Protozoa (Plasmodium); spread by Anopheles mosquito', 'Mosquito nets; antimalarial drugs'],
              ['AIDS', 'Virus (HIV)', 'No cure; antiretroviral therapy; prevention by safe practices'],
              ['Typhoid', 'Bacteria (Salmonella typhi)', 'Typhoid vaccine; antibiotics'],
              ['Cholera', 'Bacteria (Vibrio cholerae)', 'Clean water; ORS for dehydration'],
              ['Ringworm', 'Fungus', 'Antifungal cream; hygiene']
            ]),
            {
              simplyPut: 'Immune system fights germs. Vaccines train body to fight without getting sick. WBCs and antibodies are key soldiers. Skin is first line of defence.',
              examTip: 'Antibiotics kill BACTERIA only — NOT viruses. Penicillin — first antibiotic (Alexander Fleming). Passive immunity from mother\'s milk (colostrum). HIV attacks T-helper cells.',
              quickRevision: [
                'Innate immunity — born with; Acquired — after exposure/vaccine',
                'Active immunity — own antibodies; Passive — borrowed antibodies',
                'Vaccination — weakened pathogen → memory cells → faster future response',
                'Antibiotics — bacteria only; NOT for viral diseases',
                'WBC — fight infection; Antibodies — produced by B-lymphocytes',
                'First line of defence — skin, mucus, stomach acid'
              ],
              examAsk: 'Who discovered penicillin? (Alexander Fleming) | Immunity from vaccination is? (Active acquired) | Antibiotics effective against? (Bacteria, not viruses)'
            }
          )
        },
        {
          id: 'genetics',
          title: 'Genetics',
          content: T(
            'Genetics',
            'Genetics is the study of heredity — how traits pass from parents to children through genes on chromosomes. It explains why you have your mother\'s eyes or your father\'s hair type.',
            H.h2('Basic Terms') +
            tbl(['Term', 'Meaning'], [
              ['Gene', 'Unit of heredity; segment of DNA coding for a protein/trait'],
              ['Chromosome', 'Thread-like structure of DNA + protein; carries genes'],
              ['DNA', 'Deoxyribonucleic acid — double helix; stores genetic information'],
              ['RNA', 'Ribonucleic acid — helps in protein synthesis from DNA code'],
              ['Genotype', 'Genetic makeup (e.g., Tt)'],
              ['Phenotype', 'Visible expression of trait (e.g., tall plant)'],
              ['Allele', 'Alternative forms of a gene (T = tall, t = dwarf)'],
              ['Dominant allele', 'Expresses even if one copy present (T)'],
              ['Recessive allele', 'Expresses only if both copies present (t)'],
              ['Homozygous', 'Same alleles (TT or tt)'],
              ['Heterozygous', 'Different alleles (Tt)']
            ]) +
            H.h2('Human Chromosomes') +
            H.p('Humans have 46 chromosomes (23 pairs) in each body cell. 22 pairs = autosomes; 1 pair = sex chromosomes (XX = female, XY = male). Gametes (egg/sperm) have 23 chromosomes (haploid). Fertilisation restores 46 (diploid).') +
            H.h2("Mendel's Laws (Pea Plant Experiments)") +
            tbl(['Law', 'Statement'], [
              ['Law of Dominance', 'One allele (dominant) masks the other (recessive) in heterozygous condition'],
              ['Law of Segregation', 'Two alleles of a gene separate during gamete formation — each gamete gets one allele'],
              ['Law of Independent Assortment', 'Genes for different traits assort independently into gametes']
            ]) +
            H.h2('Sex Determination in Humans') +
            H.p('Father determines sex — sperm carries either X or Y chromosome. Egg always carries X. XX → girl; XY → boy. Probability always 50% each pregnancy.') +
            H.h2('Important Scientists') +
            tbl(['Scientist', 'Contribution'], [
              ['Gregor Mendel', 'Father of Genetics; laws of inheritance (pea plants)'],
              ['Watson & Crick', 'Double helix structure of DNA (1953)'],
              ['Frederick Griffith', 'Transforming principle — DNA carries genetic info'],
              ['Hershey & Chase', 'Confirmed DNA (not protein) is genetic material']
            ]),
            {
              simplyPut: 'Genes on chromosomes pass traits from parents to kids. DNA is the instruction book. Mendel discovered dominant and recessive traits with pea plants.',
              examTip: 'Human body cells = 46 chromosomes; gametes = 23. Sex chromosomes: XX female, XY male. Mendel = Father of Genetics. DNA structure = double helix (Watson & Crick).',
              quickRevision: [
                'DNA — double helix; stores genetic information',
                'Humans — 46 chromosomes (23 pairs); gametes have 23',
                'XX — female; XY — male; father determines sex',
                'Dominant allele expressed in heterozygous; recessive needs homozygous',
                'Mendel — laws of inheritance; pea plant experiments',
                'Genotype — genetic makeup; Phenotype — visible trait'
              ],
              examAsk: 'Father of Genetics? (Gregor Mendel) | Human diploid chromosome number? (46) | Sex chromosomes of male? (XY)'
            }
          )
        },
        {
          id: 'evolution',
          title: 'Evolution',
          content: T(
            'Evolution',
            'Evolution is the gradual change in living organisms over generations through natural selection — organisms best suited to their environment survive and reproduce, passing favourable traits to offspring.',
            H.h2('Charles Darwin\'s Theory of Natural Selection') +
            H.ul([
              'Variation exists in every population (no two individuals identical)',
              'Overproduction — more offspring born than can survive',
              'Struggle for existence — competition for food, space, mates',
              'Survival of the fittest — best adapted individuals survive',
              'Inheritance — favourable traits passed to next generation',
              'Over long time, species change and new species may form'
            ]) +
            H.h2('Evidence for Evolution') +
            tbl(['Evidence', 'Example'], [
              ['Fossils', 'Archaeopteryx (link between reptiles and birds); dinosaur fossils'],
              ['Homologous organs', 'Same origin, different function — human arm, whale flipper, bat wing'],
              ['Analogous organs', 'Different origin, same function — wings of butterfly vs bird'],
              ['Embryological evidence', 'Early embryos of vertebrates look similar'],
              ['Molecular evidence', 'DNA similarities between related species (human & chimp ~98% similar)']
            ]) +
            H.h2('Human Evolution (Brief Timeline)') +
            tbl(['Ancestor', 'Feature'], [
              ['Dryopithecus / Ramapithecus', 'Early ape-like ancestors (~15 million years ago)'],
              ['Australopithecus', 'Walked upright (bipedal); "Lucy" fossil'],
              ['Homo habilis', '"Handy man" — first tool makers'],
              ['Homo erectus', 'Used fire; migrated out of Africa'],
              ['Neanderthal man', 'Lived in Europe; coexisted with early Homo sapiens'],
              ['Homo sapiens (Modern human)', 'Appeared ~2,00,000 years ago; intelligent; language, art']
            ]) +
            H.h2('Key Concepts') +
            tbl(['Concept', 'Explanation'], [
              ['Adaptation', 'Feature that helps organism survive in its environment (e.g., camel\'s hump stores fat/water)'],
              ['Speciation', 'Formation of new species due to isolation and genetic divergence'],
              ['Vestigial organs', 'Reduced, non-functional remnants (appendix, tailbone in humans)'],
              ['Artificial selection', 'Humans select traits (breeding dogs, high-yield crops)']
            ]),
            {
              simplyPut: 'Evolution = species change over time. Fittest survive (Darwin). Fossils show old life forms. Humans evolved from ape-like ancestors over millions of years.',
              examTip: 'Darwin proposed Natural Selection (NOT survival of strongest — fittest means best adapted). Lamarck proposed use/disuse of organs (wrong — inheritance of acquired characters disproved).',
              quickRevision: [
                'Darwin — Theory of Natural Selection; book "Origin of Species" (1859)',
                'Survival of the fittest = best adapted to environment',
                'Homologous organs — same structure, different function',
                'Analogous organs — different structure, same function',
                'Fossils — evidence of evolution (Archaeopteryx)',
                'Homo sapiens — modern human; appeared ~2,00,000 years ago'
              ],
              examAsk: 'Who proposed theory of natural selection? (Charles Darwin) | Homologous organs example? (Forelimbs of human, whale, bat) | First tool-making human ancestor? (Homo habilis)'
            }
          )
        },
        {
          id: 'ecology',
          title: 'Ecology',
          content: T(
            'Ecology',
            'Ecology is the study of relationships between living organisms and their environment — how energy flows through ecosystems and how nutrients cycle in nature.',
            H.h2('Ecosystem Components') +
            tbl(['Component', 'Description', 'Examples'], [
              ['Biotic (Living)', 'All living organisms', 'Plants, animals, bacteria, fungi'],
              ['Abiotic (Non-living)', 'Physical factors', 'Sunlight, water, air, soil, temperature, minerals']
            ]) +
            H.h2('Trophic Levels — Food Chain') +
            H.p('Sun → Producers (Plants) → Primary consumers (Herbivores) → Secondary consumers (Carnivores) → Tertiary consumers (Top carnivores) → Decomposers (Bacteria, fungi)') +
            tbl(['Level', 'Organism', 'Example'], [
              ['Producer (T₁)', 'Makes own food', 'Grass, phytoplankton, trees'],
              ['Primary consumer (T₂)', 'Eats producers', 'Deer, rabbit, cow, zooplankton'],
              ['Secondary consumer (T₃)', 'Eats primary consumers', 'Snake, frog, small fish'],
              ['Tertiary consumer (T₄)', 'Eats secondary consumers', 'Eagle, tiger, large fish'],
              ['Decomposer', 'Breaks down dead matter', 'Bacteria, fungi, earthworm']
            ]) +
            H.h2('Ecological Pyramids') +
            H.p('Energy pyramid — energy decreases at each level (~10% rule: only 10% energy passes to next level). Biomass and number pyramids can vary.') +
            H.h2('Nutrient Cycles') +
            tbl(['Cycle', 'Key Process', 'Importance'], [
              ['Carbon cycle', 'Photosynthesis (CO₂ → organic carbon); Respiration & combustion (carbon → CO₂)', 'Maintains atmospheric CO₂ balance'],
              ['Nitrogen cycle', 'Fixation (bacteria/Rhizobium in legume roots); Nitrification; Denitrification', 'Proteins and DNA need nitrogen'],
              ['Water cycle', 'Evaporation, transpiration, precipitation', 'Fresh water supply for all life'],
              ['Oxygen cycle', 'Photosynthesis produces O₂; Respiration uses O₂', 'Supports aerobic life']
            ]) +
            H.h2('Environmental Issues') +
            tbl(['Issue', 'Cause', 'Effect / Solution'], [
              ['Global warming', 'Greenhouse gases (CO₂, CH₄, CFCs)', 'Rising sea levels, climate change; reduce emissions'],
              ['Ozone depletion', 'CFCs release chlorine destroying O₃', 'More UV radiation; Montreal Protocol banned CFCs'],
              ['Deforestation', 'Cutting forests for agriculture/industry', 'Loss of biodiversity, soil erosion; reforestation'],
              ['Eutrophication', 'Excess fertiliser in water bodies', 'Algal bloom, fish death; reduce fertiliser runoff'],
              ['Biomagnification', 'Toxins accumulate up food chain', 'DDT in birds\' eggs; heavy metals in top predators']
            ]),
            {
              simplyPut: 'Ecosystem = living + non-living together. Food chain: plants → herbivores → carnivores. Only 10% energy passes to next level. Decomposers recycle nutrients.',
              examTip: '10% energy transfer rule between trophic levels. Rhizobium bacteria fix nitrogen in legume root nodules. Producers are always at base of energy pyramid. DDT caused eggshell thinning in birds (biomagnification).',
              quickRevision: [
                'Ecosystem — biotic + abiotic components',
                'Food chain — producer → consumer → decomposer',
                '10% energy rule between trophic levels',
                'Carbon cycle — photosynthesis & respiration',
                'Nitrogen fixation — Rhizobium in legume roots',
                'Greenhouse gases — CO₂, CH₄; cause global warming'
              ],
              examAsk: 'Organisms that make their own food? (Producers/Autotrophs) | Bacteria that fix nitrogen in soil? (Rhizobium) | Only how much energy transfers to next trophic level? (~10%)'
            }
          )
        },
        {
          id: 'diseases',
          title: 'Diseases',
          content: T(
            'Diseases',
            'Diseases are conditions that disturb normal body functioning. They are classified as communicable (spread from person to person) or non-communicable (not spread), and by their cause — pathogen, deficiency, or lifestyle.',
            H.h2('Classification of Diseases') +
            tbl(['Type', 'Spread?', 'Examples'], [
              ['Communicable (Infectious)', 'Yes — from person to person, vectors, food/water', 'Malaria, TB, COVID-19, cholera, AIDS'],
              ['Non-communicable (Chronic)', 'No — not contagious', 'Diabetes, cancer, heart disease, hypertension'],
              ['Deficiency diseases', 'No — due to lack of nutrients', 'Scurvy (Vit C), Beri-beri (B₁), Anaemia (Iron), Rickets (Vit D)'],
              ['Genetic disorders', 'Inherited through genes', 'Haemophilia, colour blindness, sickle cell anaemia, Down syndrome'],
              ['Lifestyle diseases', 'Due to habits and modern lifestyle', 'Obesity, atherosclerosis, lung cancer (smoking)']
            ]) +
            H.h2('Communicable Diseases — Complete Table') +
            tbl(['Disease', 'Caused By', 'Vector / Mode', 'Prevention'], [
              ['Malaria', 'Plasmodium (protozoa)', 'Female Anopheles mosquito', 'Mosquito nets, repellents, removing stagnant water'],
              ['Dengue', 'Dengue virus', 'Aedes mosquito (day-biter)', 'Prevent mosquito breeding'],
              ['Typhoid', 'Salmonella typhi (bacteria)', 'Contaminated food/water', 'Boiled water, hygiene, vaccine'],
              ['Cholera', 'Vibrio cholerae (bacteria)', 'Contaminated water', 'Safe drinking water, ORS'],
              ['Tuberculosis (TB)', 'Mycobacterium tuberculosis', 'Air droplets (cough/sneeze)', 'BCG vaccine, cover mouth, DOTS'],
              ['AIDS/HIV', 'Human Immunodeficiency Virus', 'Blood, sexual contact, mother to child', 'Safe practices, no sharing needles'],
              ['COVID-19', 'SARS-CoV-2 (coronavirus)', 'Air droplets, contact', 'Vaccination, mask, hand hygiene'],
              ['Hepatitis B', 'Hepatitis B virus', 'Blood, body fluids', 'Vaccination, safe blood transfusion'],
              ['Tetanus', 'Clostridium tetani (bacteria)', 'Wound contamination (soil/rust)', 'TT vaccine, clean wounds'],
              ['Ringworm', 'Fungus', 'Direct contact', 'Hygiene, antifungal treatment'],
              ['Common cold / Flu', 'Viruses (Rhino, Influenza)', 'Air droplets', 'Rest, hygiene; no antibiotics']
            ]) +
            H.h2('National Health Programmes (India)') +
            tbl(['Programme', 'Target Disease'], [
              ['Pulse Polio', 'Poliomyelitis'],
              ['NMEP / NVBDCP', 'Malaria, Dengue, other vector-borne diseases'],
              ['RNTCP → NTEP', 'Tuberculosis'],
              ['NACP', 'HIV/AIDS'],
              ['Mission Indradhanush', 'Universal immunisation for children']
            ]) +
            H.h2('First Aid Basics') +
            tbl(['Situation', 'First Aid'], [
              ['Bleeding wound', 'Clean, apply pressure, bandage; elevate limb'],
              ['Burn', 'Cool running water; do NOT apply butter/oil'],
              ['Snake bite', 'Keep calm, immobilise limb, reach hospital; do NOT cut/suck wound'],
              ['Choking', 'Back blows and Heimlich manoeuvre'],
              ['Dehydration (cholera/diarrhoea)', 'ORS (Oral Rehydration Solution) — WHO formula']
            ]),
            {
              simplyPut: 'Communicable = spreads (malaria, TB, COVID). Non-communicable = does not spread (diabetes, cancer). Deficiency = missing vitamin/mineral. ORS saves lives in diarrhoea/cholera.',
              examTip: 'Malaria — Anopheles (female, bites at night). Dengue — Aedes (day-biter, breeds in clean stagnant water). Antibiotics do NOT work on viruses. BCG — TB vaccine. OPV — Polio.',
              quickRevision: [
                'Malaria — Plasmodium; Anopheles mosquito',
                'Dengue — virus; Aedes mosquito',
                'TB — bacteria; BCG vaccine; spreads by air droplets',
                'AIDS — HIV; attacks immune system (T-cells)',
                'Cholera — contaminated water; treat with ORS',
                'Deficiency: Scurvy (C), Beri-beri (B₁), Rickets (D), Anaemia (Iron)'
              ],
              examAsk: 'Vector of malaria? (Female Anopheles mosquito) | BCG vaccine prevents? (Tuberculosis) | ORS used for? (Dehydration from diarrhoea/cholera)'
            }
          )
        },
        {
          id: 'vitamins-minerals',
          title: 'Vitamins & Minerals',
          content: T(
            'Vitamins & Minerals',
            'Vitamins and minerals are micronutrients needed in small amounts for healthy body function — from strong bones and good vision to proper nerve function and blood formation.',
            H.h2('Vitamins — Complete Table') +
            tbl(['Vitamin', 'Name', 'Source', 'Deficiency Disease', 'Key Function'], [
              ['A', 'Retinol', 'Carrot, papaya, milk, egg yolk, fish liver oil', 'Night blindness, Xerophthalmia', 'Vision, immunity, skin health'],
              ['B₁', 'Thiamine', 'Whole grains, nuts, pork, legumes', 'Beri-beri (weakness, nerve damage)', 'Energy metabolism'],
              ['B₂', 'Riboflavin', 'Milk, eggs, green leafy vegetables', 'Cracking of lips, sore tongue', 'Skin, eye, nerve health'],
              ['B₃', 'Niacin', 'Meat, fish, peanuts, whole grains', 'Pellagra (3 Ds)', 'Digestive & nervous system'],
              ['B₆', 'Pyridoxine', 'Fish, banana, potato, chickpeas', 'Anaemia, skin disorders', 'Protein metabolism, RBC formation'],
              ['B₉', 'Folic acid', 'Leafy greens, liver, lentils', 'Neural tube defects in foetus, anaemia', 'DNA synthesis, cell division'],
              ['B₁₂', 'Cobalamin', 'Meat, fish, eggs, dairy', 'Pernicious anaemia, nerve damage', 'RBC formation, nerve function'],
              ['C', 'Ascorbic acid', 'Amla (richest), citrus, guava, tomato', 'Scurvy (bleeding gums, weakness)', 'Immunity, collagen, iron absorption, antioxidant'],
              ['D', 'Calciferol', 'Sunlight on skin, fish, egg, fortified milk', 'Rickets (children), Osteomalacia (adults)', 'Calcium absorption, bone & teeth health'],
              ['E', 'Tocopherol', 'Vegetable oils, nuts, seeds, spinach', 'Muscle weakness, nerve problems', 'Antioxidant — protects cell membranes'],
              ['K', 'Phylloquinone', 'Green leafy vegetables, broccoli', 'Excessive bleeding, poor clotting', 'Blood clotting (prothrombin synthesis)']
            ]) +
            H.h2('Important Minerals') +
            tbl(['Mineral', 'Source', 'Deficiency / Disease', 'Function'], [
              ['Iron (Fe)', 'Spinach, red meat, jaggery, liver, dates', 'Anaemia (Iron-deficiency) — fatigue, pale skin', 'Haemoglobin formation — carries O₂ in blood'],
              ['Calcium (Ca)', 'Milk, cheese, ragi, green leafy vegetables', 'Weak bones, osteoporosis, rickets (with Vit D)', 'Bones, teeth, muscle contraction, clotting'],
              ['Iodine (I)', 'Iodised salt, seafood', 'Goitre (swollen thyroid), cretinism in children', 'Thyroxine hormone production (thyroid gland)'],
              ['Fluorine (F)', 'Fluoridated water, tea, fish', 'Dental caries (cavities) if deficient', 'Prevents tooth decay; strengthens enamel'],
              ['Phosphorus (P)', 'Milk, meat, cereals, nuts', 'Weak bones, loss of appetite', 'Bones, teeth, ATP energy molecule'],
              ['Sodium (Na) & Potassium (K)', 'Salt (Na); Banana, potato (K)', 'Muscle cramps, weakness (K deficiency)', 'Nerve impulses, fluid balance, muscle function'],
              ['Zinc (Zn)', 'Meat, seafood, nuts, seeds', 'Poor wound healing, loss of taste/smell', 'Immunity, enzyme function, growth'],
              ['Selenium (Se)', 'Nuts, seafood, eggs', 'Muscle weakness, heart problems', 'Antioxidant; works with Vitamin E']
            ]) +
            H.h2('Quick Match — Exam Favourites') +
            tbl(['Deficiency', 'Nutrient'], [
              ['Night blindness', 'Vitamin A'],
              ['Scurvy', 'Vitamin C'],
              ['Rickets', 'Vitamin D'],
              ['Beri-beri', 'Vitamin B₁'],
              ['Pellagra', 'Vitamin B₃'],
              ['Goitre', 'Iodine'],
              ['Anaemia', 'Iron (also B₁₂, Folic acid)'],
              ['Bleeding disorder / poor clotting', 'Vitamin K'],
              ['Dental cavities (prevention)', 'Fluorine']
            ]) +
            H.p('Amla (Indian gooseberry) has the highest Vitamin C content among common fruits. Iodised salt prevents goitre — a major public health success in India since 1980s.'),
            {
              simplyPut: 'Vitamins: A=eyes, B=energy/blood, C=immunity, D=bones/sun, E=antioxidant, K=clotting. Minerals: Iron=blood, Calcium=bones, Iodine=thyroid.',
              examTip: 'Amla = richest Vitamin C source. Goitre = IODINE deficiency (not vitamin). Rickets = Vitamin D (and calcium). Pellagra = 3 Ds (Dermatitis, Diarrhoea, Dementia) = B₃ deficiency.',
              quickRevision: [
                'A — night blindness; C — scurvy; D — rickets',
                'B₁ — beri-beri; B₃ — pellagra; B₁₂ — pernicious anaemia',
                'K — blood clotting; E — antioxidant',
                'Iron — anaemia/haemoglobin; Iodine — goitre/thyroxine',
                'Calcium + Vitamin D — strong bones',
                'Amla — richest source of Vitamin C'
              ],
              examAsk: 'Richest source of Vitamin C in India? (Amla) | Goitre due to deficiency of? (Iodine) | Deficiency of Vitamin D in children? (Rickets)'
            }
          )
        }
      ]
    }
  ]
};
})();
