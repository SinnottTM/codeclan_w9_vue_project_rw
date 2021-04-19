use sol;
db.dropDatabase();

db.solar_system.insertMany([

    solar_system = {
        planets: [

            {

            name: "Mercury",
            planet_intro: "Mercury, named for its incredibly speed of orbit around the sun, was once believed by ancient civilizations to be two different planets – one which appeared in the morning and another which appeared in the evening. The Sumerians were the first to document it as one, very swift planet around 3000BC",
            position_from_sun: 1,
            image_url: [
                    "https://scitechdaily.com/images/Iridescent-Mercury.jpg",
                    "https://www.cronodon.com/images/mercury-1a.jpg",
                    "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/ma_1005_NID_Mercury_online3.jpg?itok=hjZo8tWi",
                    "https://i.pinimg.com/originals/6d/ff/c4/6dffc49314b7b1fcdd396b3b02f5ced9.jpg",
                    "https://cdn.britannica.com/75/145475-050-916827A9/Caloris-Basin-Mercury-spacecraft-Messenger-2008.jpg",
            ],
            latin_name: "Mercurius",
            sumerian_name: "Enki",
            orbit_distance_km: 57909227,
            orbit_distance_au: 0.387,
            equatorial_diameter_km: 4879,
            mass: "3.29 × 10^23kg (0.06 Earths)",
            number_of_moons: 0,
            moon_list: [],
            sig_moons: [{

            }],
            rings: 0,
            orbit_period_days: 88,
            surface_temperature_max_celcius: 427,
            surface_temperature_min_celcius: -173,
            facts: [

                    "This planet has been known to humanity since ancient times and although its discovery date is unknown, the first mentions of the planet are believed to be around 3000 BC by the Sumerians.",

                    "A year on this planet is 88 days, yet a day is 176 of our days. This planet is also nearly tidally locked to the Sun – also known as a gravitational lock – and over time this has slowed the rotation of the planet to almost match its orbit around the Sun.",

                    "Not only is this planet the smallest planet, it is also shrinking. In a very, very slow process, it is getting smaller every day.It is estimated that the planet is about 9 miles smaller than it was four billion years ago(we told you it was a slow process). Astronomers believe this is happening because it’s iron core is cooling, which is making it solid, therefore reducing the planet’s volume.",

                    "This planet is the smallest planet in the solar system with a diameter of 4879 km and is one of five planets that is visible to the naked eye.",

                    "This planet is the second densest planet. Despite its small size, it is very dense because it is composed mainly of heavy metals and rock – the main characteristic of terrestrial planets.",

                    "This planet is named after the messenger of the Roman gods, who is also known as Hermes in Greek mythology.This is because of the speed in which this planet orbits the Sun and the speed with which the Roman deity was able to deliver messages.",

                    "Modern astronomers didn’t consider that this planet to be a planet at all until 1543 when Copernicus published his Sun- centered model of the Solar System – putting the Sun as the centre of the solar system rather than the previously believed centre, our home planet.",

                    "The planet has just 38% of the gravity on our home planet.This means that it isn’t able to hold the atmosphere it has and it instead gets blown away by solar winds. However those same solar winds are also bringing in new gases, radioactive decay and dust from micrometeorites – replenishing the atmosphere.",

                    "This planet has no moons or rings because of it's low gravity and lack of atmosphere.",

                    "It was once believed that a planet called Vulcan existed between the orbit of this planet and the Sun – however the existence of such a planet was never found. This is where the idea for the planet Vulcan in Star Trek comes from",

                    "The orbit of this planet is an ellipse rather than circular. It has the most eccentric orbit in the solar system and the least circular of all of the planets, according to scientists and astronomers.",

                    "This planet is only the second hottest planet. It's nearest neighbor, though farther from the Sun than it, actually experiences higher temperatures.This is because this planet has no atmosphere to regulate temperature and results in the most extreme temperature change of all the planets, ranging from -170°C(-280°F) during the night to 430°C(800°F) during the day.",

                    "This planet does not experience any seasons. The axis of this planet has the smallest tilt of all other planets, and this results in a lack of seasons on its surface.",

                    "This planet is the only planet which doesn’t rotate exactly once every year – instead rotating three times for every two orbits of the Sun. This is because it is nearly tidally locked to the Sun.",

                    "The orbit of this planet was important in proving Albert Einstein’s theory of General Relativity and is referenced in several of the physicists studies and mathematical arguments as cosmic proof of relativity in action, due to its orbit, speed and more complex mathematical truths.",
                ]
            },

            {

            name: "Venus",
            planet_intro: "Venus is sometimes called Earth’s sister planet. This is because their size is very similar (there is only a 638 km different in diameter) and Venus has around 81% of Earth’s mass. They are also similarly located with Venus being the closest planet to Earth. Both planets also have a central core, a molten mantle and a crust.",
            position_from_sun: 2,
            image_url: [
                "https://earthsky.org/upl/2019/09/Venus-dayside.png",
                "https://cdn.mos.cms.futurecdn.net/kaPwBjHiUKax8syodHNPmF.jpg",
                "https://static.scientificamerican.com/sciam/cache/file/F7E0BB0E-3F76-4AF5-92AC0951C2976728_source.jpg?w=590&h=800&7D4AE32D-D3D4-4689-A81E895E9A173CC2",
                "https://solarsystem.nasa.gov/internal_resources/4319/",
                "https://thesuffolkjournal.com/wp-content/uploads/2020/09/Venus-900x900.png",
            ],
            latin_name: "Venus",
            sumerian_name: "Inanna",
            orbit_distance_km: 108209475,
            orbit_distance_au: 0.732,
            equatorial_diameter_km: 12104,
            mass: "4.87 × 10^24kg (0.82 Earths)",
            number_of_moons: 0,
            moon_list: [],
                sig_moons: [{

                }],
            rings: 0,
            orbit_distance_km: 108209475,
            orbit_distance_au: 0.73,
            orbit_period_days: 225,
            surface_temperature_max_celcius: 462,
            surface_temperature_min_celcius: 462,
            facts: [
            
               "This planet is the second brightest natural object in the sky. The planet has an apparent magnitude of -3.8 to -4.6, which makes it visible on a bright, clear day. The Moon is the only other natural object that is brighter.",
            
                "This planet is sometimes referred to as the “morning star” and “evening star”. When the orbit of this planet overtakes Earth’s orbit, it changes from being visible at sunrise to being visible at sunset.They were known as Phosphorus and Hesperus by the Greeks, and Lucifer and Vesper by the Romans.",
            
                "One day on this planet is longer than one year. Due to the slow rotation on its axis, it takes 243 Earth-days to complete one rotation. The orbit of the planet takes 225 of our days – making a year on this planet shorter on day on this planet.",
            
                "This planet is named after the Roman goddess of love and beauty. This may be, in part, due the brightness of the planet and may date back to the Babylonians in 1581 who referred to this planet as 'bright queen of the sky'.",
            
                "In spite of this planet being known as the sister planet to our planet, it is also considered one of the most hostile planets with regards to compatibility for Earth life. This is due to an incredibly hot surface, poisonous gases in the atmosphere and the incredible atmospheric pressure",
            
                "This planet has no moons nor rings but often has a shimmer effect due to its incredibly dense, thick atmosphere.",
                
                "Billions of years ago, the climate of this planet may been similar to that of ours and scientists believe that this planet once possessed large amounts of water or oceans. However, due to the high temperatures produce from the extreme greenhouse effect, this water boiled off long ago",
            
                "This plane rotate in the opposite direction to other planets. Most other planets rotate counter-clockwise on their axis. However this planet, like one other planet much further out from the sun, rotates clockwise. This is known as a retrograde rotation and may have been caused by a collision with an asteroid or other object which caused the planet to change its rotational path.",
            
                "This planet is the hottest planet in the solar system with an average surface temperature of 462°C (863°F). Also, this planet doesn’t tilt on its axis which means there are no seasons either. The atmosphere is a dense 96.5% carbon dioxide which traps heat and caused the greenhouse effect which evaporated any water sources billions of years ago.",
            
                "The temperature on this planet doesn’t vary much between the night and day, remaining very high constantly. This is due to the slow movement of the solar winds across the surface of the planet.",
            
                "The estimated age of this planets surface is around 300-400 million years old. By comparison, the surface of our home is about 100 million years old. For this reason, this planet is sometimes called a potential, tragic, future for our planet",
            
                "The atmospheric pressure of this planet is 92 times stronger than our planet. This means that any small asteroids entering the atmosphere of Venus are crushed by the immense pressure, which is why there are no small surface craters on the planet. This pressure is equivalent to being around 1,000 km under our planets oceans.",
            
                "This planet has a very weak magnetic field. This surprised scientists, who expected this planet to have a magnetic field similar in strength to our planet. One possible reason for this is that this planet has no solid inner core, or that its core is not cooling.",
            
                "This planet is the only planet in the Solar System to be named after a female figure.",
                ]
            },

            {
    
            name: "Earth",
            planet_intro: "Our home, the only known planet capable of supporting life. From here, we gaze upon the cosmos in wonder, eager to explore, to discover, to learn",
            position_from_sun: 3,
            image_url: [
                "https://www.thoughtco.com/thmb/Whrni3pbKfnTfZyz2rzQEVS-jVc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Earth_Eastern_Hemisphere-56a8cda43df78cf772a0cc74.jpg",
                "https://i2.wp.com/kashmirobserver.net/wp-content/uploads/2020/07/earth.jpg?fit=800%2C772&ssl=1",
                "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F97%2FThe_Earth_seen_from_Apollo_17.jpg%2F1200px-The_Earth_seen_from_Apollo_17.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEarth&tbnid=BUbNaZxy9NyhgM&vet=12ahUKEwjwls60xYfwAhWP0OAKHSuzDBIQMygCegUIARCPAg..i&docid=88gjCNbYu3-8ZM&w=1200&h=1201&itg=1&q=images%20of%20the%20planet%20earth&ved=2ahUKEwjwls60xYfwAhWP0OAKHSuzDBIQMygCegUIARCPAg",
                "https://i.ytimg.com/vi/xncLubEj50k/maxresdefault.jpg",
                "https://c.tadst.com/gfx/1200x630/international-earth-year.jpg?1",
            ],
            latin_name: "Terra",
            sumerian_name: "Ki",
            orbit_distance_km: 149598262,
            orbit_distance_au: 1,
            equatorial_diameter_km: 12756,
            mass: "5.97 × 10^24kg",
            number_of_moons: 1,
            moon_list: ["Luna"],
                sig_moons: [{
                    name: "Luna",
                    position: 1,
                    image_url: [
                        "https://cdn.mos.cms.futurecdn.net/SYNFvhA5XoBB6L6ScwzWk4-1200-80.jpg",
                        "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2001/07/view_of_the_moon_seen_apollo_17/9215843-5-eng-GB/View_of_the_Moon_seen_Apollo_17_pillars.jpg",
                        "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201311/20131107111722-0_0_0.jpg?itok=S7lx1m2D"
                    ],
                    orbit_distance_km: 384400,
                    equatorial_diameter_km: 3475,
                    mass: "7.35 × 10^22 kg (0.01 Earths)",
                    orbit_period_in_days: 27.3,
                    surface_temperature_max_celcius: 127,
                    surface_temperature_min_celcius: -272,
                    facts: [
                        "The Moon is Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits. At 3475 km, the Moon's diameter is over one fourth that of the Earth's. In relation to its own size, no other planet has a moon as large",

                        "The Moon is made of rock and metal (not cheese), just like the Earth and the other rocky planets(Mercury, Venus and Mars).The crust, the Moon's outer shell, is covered by lunar soil, also called regolith: a blanket of fine rock particles, varying between three and 20 metres (10–65 feet) deep.",

                        "Today, astronomers know that the Moon is slowly moving away from the Earth. But at the rate it is traveling, about 1.5 inches (4 cm) per year, it will be a long time before the two part ways.",

                        ]
                }],
            rings: 0,
            orbit_period_days: 365.24,
            surface_temperature_max_celcius: 58,
            surface_temperature_min_celcius: -88,
            facts: [
                
                "This planet was once believed to be the centre of the universe. For 2000 years ancient astronomers believed that this planet was static and had other celestial bodies travelling in circular orbits around it. They believed this because of the apparent movement on the Sun and planets in relation to their viewpoint. In 1543, Copernicus published his Sun-centered model of the Solar System which put the Sun at the centre of our solar system instead.",
                
                "This planet is the only planet not named for a mythological god or goddess. The other seven planets in the solar system were named after Roman gods or goddesses. The five visible to the naked eye were named during ancient times. This Roman method was also used after the discovery of later planets. This planets name comes from the Old English and means ground or land.",
                
                "This planet is the most dense planet in the solar system. The density of this planet differs in each part of the planet – the core, for example, is denser than the crust – but the average density of the planet is around 5.52 grams per cubic centimetre.",
                
                "The gravity between this planet and its Moon causes the tides. This effect on the Moon means it is tidally locked to this planet – its rotation period is the same as its orbit time so it always presents the same face to this planet.",
                
                "The rotation of the this planet is gradually slowing down. The deceleration of the this planets rotation is very slow, approximately 17 milliseconds per hundred years. Eventually this will lengthen our days but it will take around 140 million years before the days here will have increased from 24 to 25 hours.",
                
                "This planets atmosphere is composed of 78% nitrogen, 21% oxygen, and trace amounts of other gases including argon and carbon dixoide.",
                
                "The large amount of oxygen on this planet comes from its plant life’s consumption of carbon dioxide during photosynthesis",
                
                "This planet has a very powerful magnetic field. This field protects the planet from the effects of solar winds and is believed to be a result of the nickel-iron core of the planet combined with its rapid rotation.",
                
                "This planet has an Ozone Layer which protects it from harmful solar radiation. This shell is a special type of oxygen that absorbs most of the Sun’s powerful UV rays.",
                
                "70% of the this planets surface is covered by water – the remainder consists of continents and islands which together have many lakes and other sources of water.",
                
                "The first life on this planet developed in the oceans through a process called abiogenesis or biopoiesis. This is a natural process in which life grows from non-living matter like simple organic compounds.",
                
                "This planets water was initially trapped within the planet. Over time the water was brought to the surface by the planet’s volcanic activity.",
                
                "This planet has relatively few visible impact craters compared with other solid bodies in our solar system. This is because this planet is highly geologically active and has processes like tectonics and erosion that reshape its surface.",
                
                "The highest point found on this planet is Mount Everest which reaches a height of 8.8 km.",
                
                "The lowest point on this planet is called Challenger Deep and at 10.9 km below sea level, it is further than the peak of Mount Everest.",

                ]
            },
            
            {

            name: "Mars",
            planet_intro: "Mars, also known as the Red Planet, is the first planet that humans might live on beyond our Earth and the only planet other than Earth that human machines are currently exploring the surface of",
            position_from_sun: 4,
            image_url: {
                first: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f775f2683bae528aec3c1ca%2F0x0.jpg",
                second: "https://www.universetoday.com/wp-content/uploads/2011/12/mars-viking-zoom.jpg",
                third: "https://c.files.bbci.co.uk/10F74/production/_114829496_mars.jpg",
                forth: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/planet-mars/mars-factfile-red-planet-full-width.jpg",
                fifth: "https://scitechdaily.com/images/Olympus-Mons-Mars-scaled.jpg",
            },
            latin_name: "Mars",
            sumerian_name: "Gugulanna",
            orbit_distance_km: 227943824,
            orbit_distance_au: 1.38,
            equatorial_diameter_km: 6792,
            mass: "6.39 × 10^23 kg (0.11 Earths)",
            number_of_moons: 2,
            moon_list: ["Phobos", "Deimos"],
                sig_moons: [{
                    name: "Phobos",
                    position: 1,
                    image_url: [
                    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg",
                    "https://lh3.googleusercontent.com/proxy/XoCwPbhFezreWcC2dnMRpypLZm1pGGbxydevbzIeeHPrUNHnKOhOO6oy3Y919Mg6aAJuhch52Pl-nK6Z1D1SQRt31sPEG5Nklx_O0SDnEsnhTSvcANc",
                    "https://cdn.mos.cms.futurecdn.net/aZD75EMbNzuSGSeTFFh7mL.jpg"
                    ],
                    orbit_distance_km: 0,
                    equatorial_diameter_km: 22.2,
                    mass: "",
                    orbit_period_in_days: 0,
                    surface_temperature_max_celcius: 0,
                    surface_temperature_min_celcius: 0,
                    facts: [ 
                            "",
                            "",
                            "",
                    ]
                    },
                    {
                        name: "Deimos",
                        position: 2,
                        image_url: [
                            "",
                            "",
                            ""
                        ],
                        orbit_distance_km: 0,
                        equatorial_diameter_km: 0,
                        mass: "",
                        orbit_period_in_days: 0,
                        surface_temperature_max_celcius: 0,
                        surface_temperature_min_celcius: 0,
                        facts: [
                            "",
                            "",
                            "",
                        ]
                    }
            ],
            rings: 0,
            orbit_period_days: 686.98,
            surface_temperature_max_celcius: -5,
            surface_temperature_min_celcius: -87,
            facts: [
                "Mars and Earth have approximately the same landmass. Even though Mars has only 15% of the Earth’s volume and just over 10% of the Earth’s mass, around two thirds of the Earth’s surface is covered in water.Martian surface gravity is only 37% of the Earth’s(meaning you could leap nearly three times higher on Mars).",

                "Mars is home to the tallest mountain in the solar system. Olympus Mons, a shield volcano, is 21km high and 600km in diameter.Despite having formed over billions of years, evidence from volcanic lava flows is so recent many scientists believe it could still be active.",

                "Only 18 missions to Mars have been successful. As of September 2014 there have been 40 missions to Mars, including orbiters, landers and rovers but not counting flybys.The most recent arrivals include the Mars Curiosity mission in 2012, the MAVEN mission, which arrived on September 22, 2014, followed by the Indian Space Research Organization’s MOM Mangalyaan orbiter, which arrived on September 24, 2014. The next missions to arrive will be the European Space Agency’s ExoMars mission, comprising an orbiter, lander, and a rover, followed by NASA’s InSight robotic lander mission, slated for launch in March 2016 and a planned arrival in September, 2016.",

                "Mars has the largest dust storms in the solar system. They can last for months and cover the entire planet.The seasons are extreme because its elliptical(oval- shaped) orbital path around the Sun is more elongated than most other planets in the solar system.",

                "On Mars the Sun appears about half the size as it does on Earth. At the closest point to the Sun, the Martian southern hemisphere leans towards the Sun, causing a short, intensely hot summer, while the northern hemisphere endures a brief, cold winter: at its farthest point from the Sun, the Martian northern hemisphere leans towards the Sun, causing a long, mild summer, while the southern hemisphere endures a lengthy, cold winter.",

                "Pieces of Mars have fallen to Earth. Scientists have found tiny traces of Martian atmosphere within meteorites violently ejected from Mars, then orbiting the solar system amongst galactic debris for millions of years, before crash landing on Earth.This allowed scientists to begin studying Mars prior to launching space missions.",

                "Mars takes its name from the Roman god of war. The ancient Greeks called the planet Ares, after their god of war; the Romans then did likewise, associating the planet’s blood- red colour with Mars, their own god of war.Interestingly, other ancient cultures also focused on colour – to China’s astronomers it was ‘the fire star’, whilst Egyptian priests called on ‘Her Desher’, or ‘the red one’.The red colour Mars is known for is due to the rock and dust covering its surface being rich in iron.",
                
                "There are signs of liquid water on Mars. For years Mars has been known to have water in the form of ice.The first signs of trickling water are dark stripes or stains on crater wall and cliffs seen in satellite images.Due to Mars’ atmosphere this water would have to be salty to prevent it from freezing or vaporising.",
                
                "One day Mars will have a ring. In the next 20-40 million years Mars’ largest moon Phobos will be torn apart by gravitational forces leading to the creation of a ring that could last up to 100 million years.",
                
                "Sunsets on Mars are blue. During the martian day the sky is pinkish- red, this is the opposite of the Earth’s skies.",
                
                "It's thought that Mars's core is predominantly made up of iron, but also nickel and sulphur. The core is about half the size of the planet and may be entirely liquid, or have a solid iron centre and a liquid exterior.",
                
                "The deepest canyon on the planet is Valles Marineris at 7 kilometres - Earth's Grand Canyon is only 1.8 kilometres deep. Valles Marineris was mostly formed by tectonic processes.",
                
                "Mars's thin atmosphere makes for extreme temperature differences on the planet. When the Sun's energy enters the atmosphere, it is not equally dispersed and easily escapes back out into space.",
                
                "Mars has an elliptical orbit, meaning it is egg- or oval-shaped. This means that throughout its year, Mars's distance from the Sun ranges between around 206 million and 249 million kilometres. ",
                
                "Mars has a large, dark patch on its surface, known as the Syrtis Major Planum. It reaches around 1,500 kilometres north from the equator and is around 1,000 kilometres in width. The dark colour is due to its primarily basalt rock composition.",
                ],
            },

    ]}
])
    







//     
//     },





//     {
//         name: "Jupiter",
//         planet_intro: "",
//         position_from_sun: 5,
//         image_url: {
//             first: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
//             second: "https://cdn.mos.cms.futurecdn.net/iEv6pmS4gfbefs5JbwHWiJ.png",
//             third: "https://scitechdaily.com/images/Planet-Jupiter.jpg",
//             forth: "https://www.pnas.org/content/pnas/117/29/16716/F1.large.jpg",
//             fifth: "https://cdn.britannica.com/84/4284-050-16C7E8C2/Photograph-Jupiter-range-Voyager-1-cloud-bands-February-1-1979.jpg",
//         },
//         latin_name: "Iuppiter",
//         sumerian_name: "Enlil",
//         orbit_distance_km: 778340821,
//         orbit_distance_au: 5.20,
//         equatorial_diameter_km: 142984,
//         mass: "1.90 × 10^27 kg (318 Earths)",
//         number_of_moons: 79,
//         moon_names: {
//             first: "Metis",
//             second: "Adrastea",
//             third: "Amalthea",
//             fourth: "Thebe",
//             fifth: "Io",
//             sixth: "Europa",
//             seventh: "Ganymede",
//             eighth: "Callisto",
//             ninth: "Themisto",
//             tenth: "Leda",
//             eleventh: "Ersa",
//             twelfth: "Pandia",
//             thirteenth: "Himalia",
//             fourteenth: "Lysithea",
//             fifteenth: "Elara",
//             sixteen: "Dia",
//             seventeen: "Carpo",
//             eighteen: "Valetudo",
//             nineteen: "Euporie",
//             twentieth: "Eupheme",
//             twenty_one: "S/2003 J 1",
//             twenty_two: "S/2010 J 2",
//             twenty_three: "Helike",
//             twenty_four: "S/2003 J 16",
//             twenty_five: "S/2003 J 2",
//             twenty_six: "Euanthe",
//             twenty_seven: "S/2017 J 7",
//             twenty_eight: "Hermippe",
//             twenty_nine: "Praxidike",
//             thirtieth: "Thyone",
//             thirty_one: "Thelxinoe",
//             thirty_two: "S/2017 J 3",
//             thirty_three: "Ananke",
//             thirty_four: "Mneme",
//             thirty_five: "S/2016 J 1",
//             thirty_six: "Orthosie",
//             thirty_seven: "Harpalyke",
//             thirty_eight: "Iocaste",
//             thirty_nine: "S/2017 J 9",
//             fortieth: "S/2003 J 12",
//             forty_one: "S/2003 J 4",
//             forty_two: "Erinome",
//             forty_three: "Aitne",
//             forty_four: "Herse",
//             forty_five: "Taygete",
//             forty_six: "S/2017 J 2",
//             forty_seven: "S/2017 J 6",
//             forty_eight: "Eukelade",
//             forty_nine: "Carme",
//             fiftieth: "S/2003 J 19",
//             fifty_one: "Isonoe",
//             fifty_two: "S/2003 J 10",
//             fifty_three: "Autonoe",
//             fifty_four: "Philophrosyne",
//             fifty_five: "Cyllene",
//             fifty_six: "Pasithee",
//             fifty_seven: "S/2010 J 1",
//             fifty_eight: "Pasiphae",
//             fifty_nine: "Sponde",
//             sixtieth: "S/2017 J 8",
//             sixty_one: "Eurydome",
//             sixty_two: "S/2017 J 5",
//             sixty_three: "Kalyke",
//             sixty_four: "Hegemone",
//             sixty_five: "Kale",
//             sixty_six: "Kallichore",
//             sixty_seven: "S/2011 J 1",
//             sixty_eight: "S/2017 J 1",
//             sixty_nine: "Chaldene",
//             seventieth: "Arche",
//             seventy_one: "Eirene",
//             seventy_two: "Kore",
//             seventy_three: "S/2011 J 2",
//             seventy_four: "S/2003 J 9",
//             seventy_five: "Megaclite",
//             seventy_six: "Aoede",
//             seventy_seven: "S/2003 J 23",
//             seventy_eight: "Callirrhoe",
//             seventy_nine: "Sinope",
//         },
        // moon_list: [""],
        //     sig_moons: [{
        //         name: "",
        //         position: 0,
        //         image_url: [
        //             "",
        //             "",
        //             ""
        //         ],
        //         orbit_distance_km: 0,
        //         equatorial_diameter_km: 0,
        //         mass: "",
        //         orbit_period_in_days: 0,
        //         surface_temperature_max_celcius: 0,
        //         surface_temperature_min_celcius: 0,
        //         facts: [
        //             "",
        //             "",
        //             "",
        //         ]
        //     }],
//         rings: 4,
//         orbit_period_days: 4333,
//         surface_temperature_max_celcius: -108,
//         surface_temperature_min_celcius: -161,
//         facts: {
//             first: "Jupiter is the fourth brightest object in the solar system. Only the Sun, Moon and Venus are brighter.It is one of five planets visible to the naked eye from Earth.",
//             second: "The ancient Babylonians were the first to record their sightings of Jupiter. This was around the 7th or 8th century BC.Jupiter is named after the king of the Roman gods.To the Greeks, it represented Zeus, the god of thunder.The Mesopotamians saw Jupiter as the god Marduk and patron of the city of Babylon.Germanic tribes saw this planet as Donar, or Thor.",
//             third: "Jupiter has the shortest day of all the planets. It turns on its axis once every 9 hours and 55 minutes.The rapid rotation flattens the planet slightly, giving it an oblate shape.",
//             fourth: "Jupiter orbits the Sun once every 11.8 Earth years. From our point of view on Earth, it appears to move slowly in the sky, taking months to move from one constellation to another.",
//             fifth: "Jupiter has unique cloud features. The upper atmosphere of Jupiter is divided into cloud belts and zones.They are made primarily of ammonia crystals, sulfur, and mixtures of the two compounds.",
//             sixth: "The Great Red Spot is a huge storm on Jupiter. It has raged for at least 350 years.It is so large that three Earths could fit inside it.",
//             seventh: "Jupiter’s interior is made of rock, metal, and hydrogen compounds. Below Jupiter’s massive atmosphere(which is made primarily of hydrogen), there are layers of compressed hydrogen gas, liquid metallic hydrogen, and a core of ice, rock, and metals.",
//             eighth: "Jupiter’s moon Ganymede is the largest moon in the solar system. Jupiter’s moons are sometimes called the Jovian satellites, the largest of these are Ganymeade, Callisto Io and Europa. Ganymeade measures 5, 268 km across, making it larger than the planet Mercury.",
//             ninth: "Jupiter has a thin ring system. Its rings are composed mainly of dust particles ejected from some of Jupiter’s smaller worlds during impacts from incoming comets and asteroids.The ring system begins some 92, 000 kilometres above Jupiter’s cloud tops and stretches out to more than 225, 000 km from the planet.They are between 2, 000 to 12, 500 kilometres thick.",
//             tenth: "Eight spacecraft have visited Jupiter. Pioneer 10 and 11, Voyager 1 and 2, Galileo, Cassini, Ulysses, and New Horizons missions.The Juno mission is its way to Jupiter and will arrive in July 2016. Other future missions may focus on the Jovian moons Europa, Ganymede, and Callisto, and their subsurface oceans.",
//             eleventh: "Jupiter is sometimes considered a failed star. If Jupiter had become 80 times more massive, nuclear fusion would have occurred in its core. Had that happened, it would have become a star instead of a planet.",
//             twelfth: "Jupiter does not experience seasons like other planets such as Earth and Mars. This is because the axis is only tilted by 3.13 degrees.",
//             thirteenth: "Jupiter is the only planet that has a center of mass with the Sun that lies outside the volume of the Sun, though by only 7% of the Sun’s radius.",
//             fourteenth: "The largest of Jupiter’s moons, Ganymede is the largest moon in the solar system. The moons are sometimes called the Jovian satellites and the largest of them are Ganymede, Callisto, Io and Europa. Ganymede is larger than the planet Mercury with a diameter of around 5,268 km.",
//             fifteenth: "Jupiter actually experiences the most intense auroras in the solar system, being hundreds of times brighter than on Earth. Just like on Earth, auroras on Jupiter are caused by solar storms. However, Jupiter has an additional source for its auroras: charged particles thrown into space by its orbiting moon Io, which is famous for its many large volcanoes.",

//         },
//     },

//     {
//         name: "Saturn",
//         planet_intro: "",
//         position_from_sun: 6,
//         image_url: {
//             first: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
//             second: "https://i.pinimg.com/originals/aa/2f/78/aa2f78effbe107f23b6e5a3aebd4d563.jpg",
//             third: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg",
//             forth: "https://i.pinimg.com/originals/f1/a4/22/f1a42242dbe3d614dc7f252198c3eee0.jpg",
//             fifth: "https://i.pinimg.com/originals/55/d2/e0/55d2e0b23e378116cf04ea2ebe19f63f.jpg",
//         },
//         latin_name: "Saturnus",
//         sumerian_name: "Ninurta",
//         orbit_distance_km: 1426666422,
//         orbit_distance_au: 9.58,
//         equatorial_diameter_km: 120536,
//         mass: "5.68 × 10^26 kg (95 Earths)",
//         number_of_moons: 82,
//         moon_names: {
//             first: "S/2009 S 1",
//             second: "Pan",
//             third: "Daphnis",
//             fourth: "Atlas",
//             fifth: "Prometheus",
//             sixth: "Pandora",
//             seventh: "Epimetheus",
//             eighth: "Janus",
//             ninth: "Aegaeon",
//             tenth: "Mimas",
//             eleventh: "Methone",
//             twelfth: "Anthe",
//             thirteenth: "Pallene",
//             fourteenth: "Enceladus",
//             fifteenth: "Tethys",
//             sixteen: "Telesto",
//             seventeen: "Calypso",
//             eighteen: "Dione",
//             nineteen: "Helene",
//             twentieth: "Polydeuces",
//             twenty_one: "Rhea",
//             twenty_two: "Titan",
//             twenty_three: "Hyperion",
//             twenty_four: "Iapetus",
//             twenty_five: "Kiviuq",
//             twenty_six: "Ijiraq",
//             twenty_seven: "Phoebe",
//             twenty_eight: "Paaliaq",
//             twenty_nine: "Skathi",
//             thirtieth: "S/2004 S 37",
//             thirty_one: "S/2007 S 2",
//             thirty_two: "Albiorix",
//             thirty_three: "Bebhionn",
//             thirty_four: "S/2004 S 29",
//             thirty_five: "Skoll",
//             thirty_six: "S/2004 S 31",
//             thirty_seven: "Erriapus",
//             thirty_eight: "Tarqeq",
//             thirty_nine: "Siarnaq",
//             fortieth: "Tarvos",
//             forty_one: "Hyrrokkin",
//             forty_two: "Greip",
//             forty_three: "Mundilfari",
//             forty_four: "S/2004 S 13",
//             forty_five: "S/2006 S 1",
//             forty_six: "S/2007 S 3",
//             forty_seven: "Suttungr",
//             forty_eight: "S/2004 S 20",
//             forty_nine: "Jarnsaxa",
//             fiftieth: "Narvi",
//             fifty_one: "Bergelmir",
//             fifty_two: "Hati",
//             fifty_three: "S/2004 S 17",
//             fifty_four: "S/2004 S 12",
//             fifty_five: "S/2004 S 27",
//             fifty_six: "Farbauti",
//             fifty_seven: "Thrymr",
//             fifty_eight: "Bestla",
//             fifty_nine: "S/2004 S 7",
//             sixtieth: "Aegir",
//             sixty_one: "S/2004 S 30",
//             sixty_two: "S/2004 S 22",
//             sixty_three: "S/2004 S 25",
//             sixty_four: "S/2004 S 32",
//             sixty_five: "S/2004 S 23",
//             sixty_six: "S/2006 S 3",
//             sixty_seven: "S/2004 S 35",
//             sixty_eight: "Kari",
//             sixty_nine: "S/2004 S 28",
//             seventieth: "Loge",
//             seventy_one: "S/2004 S 38",
//             seventy_two: "Fenrir",
//             seventy_three: "Ymir",
//             seventy_four: "Surtur",
//             seventy_five: "S/2004 S 33",
//             seventy_six: "S/2004 S 24",
//             seventy_seven: "S/2004 S 21",
//             seventy_eight: "S/2004 S 39",
//             seventy_nine: "S/2004 S 36",
//             eightieth: "Fornjot",
//             eighty_one: "S/2004 S 34",
//             eighty_two: "S/2004 S 26",
//         },
        // moon_list: [""],
        //     sig_moons: [{
        //         name: "",
        //         position: 0,
        //         image_url: [
        //             "",
        //             "",
        //             ""
        //         ],
        //         orbit_distance_km: 0,
        //         equatorial_diameter_km: 0,
        //         mass: "",
        //         orbit_period_in_days: 0,
        //         surface_temperature_max_celcius: 0,
        //         surface_temperature_min_celcius: 0,
        //         facts: [
        //             "",
        //             "",
        //             "",
        //         ]
        //     }],
//         rings: 7,
//         orbit_period_days: 10756,
//         surface_temperature_max_celcius: -122,
//         surface_temperature_min_celcius: -185,
//         facts: {
//             first: "Saturn is the most distant planet that can be seen with the naked eye. It is the fifth brightest object in the solar system and is also easily studied through binoculars or a small telescope.",
//             second: "Saturn was known to the ancients, including the Babylonians and Far Eastern observers. It is named for the Roman god Saturnus, and was known to the Greeks as Cronus.",
//             third: "Saturn is the flattest planet. Its polar diameter is 90% of its equatorial diameter, this is due to its low density and fast rotation.Saturn turns on its axis once every 10 hours and 34 minutes giving it the second- shortest day of any of the solar system’s planets.",
//             fourth: "Saturn orbits the Sun once every 29.4 Earth years. Its slow movement against the backdrop of stars earned it the nickname of “Lubadsagush” from the ancient Assyrians.The name means “oldest of the old”.",
//             fifth: "Saturn’s upper atmosphere is divided into bands of clouds. The top layers are mostly ammonia ice.Below them, the clouds are largely water ice.Below are layers of cold hydrogen and sulfur ice mixtures.",
//             sixth: "Saturn has oval-shaped storms similar to Jupiter’s. The region around its north pole has a hexagonal- shaped pattern of clouds.Scientists think this may be a wave pattern in the upper clouds.The planet also has a vortex over its south pole that resembles a hurricane- like storm.",
//             seventh: "Saturn is made mostly of hydrogen. It exists in layers that get denser farther into the planet.Eventually, deep inside, the hydrogen becomes metallic.At the core lies a hot interior.",
//             eighth: "Saturn has the most extensive rings in the solar system. The Saturnian rings are made mostly of chunks of ice and small amounts of carbonaceous dust.The rings stretch out more than 120, 700 km from the planet, but are amazingly thin: only about 20 meters thick.",
//             ninth: "Saturn has 150 moons and smaller moonlets. All are frozen worlds.The largest moons are Titan and Rhea.Enceladus appears to have an ocean below its frozen surface.",
//             tenth: "Titan is a moon with complex and dense nitrogen-rich atmosphere. It is composed mostly of water ice and rock.Its frozen surface has lakes of liquid methane and landscapes covered with frozen nitrogen.Planetary scientists consider Titan to be a possible harbour for life, but not Earth-like life",
//             eleventh: "Four spacecraft have visited Saturn. Pioneer 11, Voyager 1 and 2, and the Cassini- Huygens mission have all studied the planet.Cassini orbited Saturn from July 2004 until September 2017, sending back a wealth of data about the planet, its moons, and rings.",
//             twelfth: "Saturn has more moons than any other planet. 20 new moons were discovered in 2019 bring the total to 82, 3 more than Jupiter.",
//             thirteenth: "Galileo Galilei was the first to see Saturn's rings in 1610, although from his telescope the rings looked more like handles or arms. Forty five years later, in 1655, Dutch astronomer Christiaan Huygens, who had a more powerful telescope, later proposed that Saturn had a thin, flat ring.",
//             fourteenth: "Though scientists have identified many moons, Saturn has other small moons constantly being created and destroyed.",
//             fifteenth: "As the most massive planet in the solar system after Jupiter, the pull of Saturn's gravity has helped shape the fate of our solar system. It may have helped violently hurl Neptune and Uranus outward. Along with Jupiter, it might also have slung a barrage of debris toward the inner planets early in the system's history.",

//         },
//     },

//     {
//         name: "Uranus",
//         planet_intro: "",
//         position_from_sun: 7,
//         image_url: {
//             first: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg",
//             second: "https://data.whicdn.com/images/331818858/original.jpg?t=1561112500",
//             third: "https://miro.medium.com/max/960/1*F04NVRyBDRuLwPkD0rBN9w.jpeg",
//             forth: "https://i.natgeofe.com/n/c1ee2a2c-b6c8-44ad-8e29-413a49732225/42912.jpg",
//             fifth: "https://www.universetoday.com/wp-content/uploads/2014/11/4_179.jpg",
//         },
//         latin_name: "Uranus",
//         sumerian_name: null,
//         orbit_distance_km: 2870658186,
//         orbit_distance_au: 19.22,
//         equatorial_diameter_km: 51118,
//         mass: "8.68 × 10^25 kg (15 Earths)",
//         number_of_moons: 27,
//         moon_names: {
//             first: "Cordelia",
//             second: "Ophelia",
//             third: "Bianca",
//             fourth: "Cressida",
//             fifth: "Desdemona",
//             sixth: "Juliet",
//             seventh: "Portia",
//             eighth: "Rosalind",
//             ninth: "Cupid",
//             tenth: "Belinda",
//             eleventh: "Perdita",
//             twelfth: "Puck",
//             thirteenth: "Mab",
//             fourteenth: "Miranda",
//             fifteenth: "Ariel",
//             sixteen: "Umbriel",
//             seventeen: "Titania",
//             eighteen: "Oberon",
//             nineteen: "Francisco",
//             twentieth: "Caliban",
//             twenty_one: "Stephano",
//             twenty_two: "Trinculo",
//             twenty_three: "Sycorax",
//             twenty_four: "Margaret",
//             twenty_five: "Prospero",
//             twenty_six: "Setebos",
//             twenty_seven: "Ferdinand",
//         },
        // moon_list: [""],
        //     sig_moons: [{
        //         name: "",
        //         position: 0,
        //         image_url: [
        //             "",
        //             "",
        //             ""
        //         ],
        //         orbit_distance_km: 0,
        //         equatorial_diameter_km: 0,
        //         mass: "",
        //         orbit_period_in_days: 0,
        //         surface_temperature_max_celcius: 0,
        //         surface_temperature_min_celcius: 0,
        //         facts: [
        //             "",
        //             "",
        //             "",
        //         ]
        //     }],
//         rings: 13,
//         orbit_period_days: 30687,
//         surface_temperature_max_celcius: -153,
//         surface_temperature_min_celcius: -224,
//         facts: {
//             first: "Uranus was officially discovered by Sir William Herschel in 1781. It is too dim to have been seen by the ancients.At first Herschel thought it was a comet, but several years later it was confirmed as a planet.",
//             second: "Uranus turns on its axis once every 17 hours, 14 minutes. The planet rotates in a retrograde direction, opposite to the way Earth and most other planets turn.",
//             third: "Uranus makes one trip around the Sun every 84 Earth years. During some parts of its orbit one or the other of its poles point directly at the Sun and get about 42 years of direct sunlight.The rest of the time they are in darkness.",
//             fourth: "Uranus is often referred to as an “ice giant” planet. Like the other gas giants, it has a hydrogen upper layer, which has helium mixed in.Below that is an icy “mantle, which surrounds a rock and ice core.The upper atmosphere is made of water, ammonia and the methane ice crystals that give the planet its pale blue colour.",
//             fifth: "Uranus hits the coldest temperatures of any planet. With minimum atmospheric temperature of - 224°C Uranus is nearly coldest planet in the solar system. While Neptune doesn’t get as cold as Uranus it is on average colder. The upper atmosphere of Uranus is covered by a methane haze which hides the storms that take place in the cloud decks.",
//             sixth: "Uranus has two sets of very thin dark coloured rings. The ring particles are small, ranging from a dust- sized particles to small boulders.There are eleven inner rings and two outer rings.They probably formed when one or more of Uranus’s moons were broken up in an impact.The first rings were discovered in 1977 with the two outer rings being discovered in Hubble Space Telescope images between 2003 and 2005.",
//             seventh: "Uranus’ moons are named after characters created by William Shakespeare and Alexander Pope. These include Oberon, Titania and Miranda.All are frozen worlds with dark surfaces.Some are ice and rock mixtures.The most interesting Uranian moon is Miranda; it has ice canyons, terraces, and other strange- looking surface areas.",
//             eighth: "Only one spacecraft has flown by Uranus. In 1986, the Voyager 2 spacecraft swept past the planet at a distance of 81, 500 km.It returned the first close- up images of the planet, its moons, and rings.",
//             ninth: "The axial tilt of Uranus is a staggering 99 degrees. In other words, the planet is rotating on its side. All the planets look a bit like spinning top as they go around the Sun, but Uranus looks more like a ball rolling in a circular pattern.",
//             tenth: "With a mean density of 0.687 g/cm3, Saturn’s body is actually less dense than water (1 g/cm³). This means that the planet would float in a pool, provided it were roughly 60,000 km wide. With a mean density of 1.27 g/cm3, Uranus has the second-lowest density of any planet in the Solar System.",
//             eleventh: "Sir William Herschel tried to have Uranus (as his discovery) named “Georgian Sidus” after King George III.The name Uranus was suggested by astronomer Johann Bode. The name comes from the ancient Greek deity Ouranos.",
//             twelfth: "You might be surprised to know that you can see Uranus without a telescope. At magnitude 5.3, Uranus is just within the brightness scale that a human eye can perceive. Unfortunately, you’d need to make sure that the night sky was extremely dark (i.e. no light pollution), and would have to know exactly where to look.",
//             thirteenth: "The possibility of sending the Cassini spacecraft from Saturn to Uranus was evaluated during a mission extension planning phase in 2009. However, this never came to fruition, as it would have taken about twenty years for Cassini to get to the Uranian system after departing Saturn.",
//             fourteenth: "There's still much more to learn about Uranus's tempests. In 2014, between Uranus's infrequent equinoxes, astronomers using the 10-meter Keck telescope spotted eight stunning squalls below its blue blanket. Scientists suggest that perhaps these vortices are rooted deeper in the atmosphere, like the storms of Jupiter. But to know for sure, researchers would need a closer look.",
//             fifteenth: "Like Saturn, Jupiter, and Neptune, Uranus is a big ball of gas, often called a jovian or gas giant world. Uranus owes its vibrant blue-green hues not from unusual oceans but from an upper atmosphere flush with methane, which absorbs the sun's red light and scatters blue light back to our eyes. The rest of planet's atmosphere is largely made of hydrogen and helium, with scant amounts of ammonia, water, and methane. Trace amounts of hydrogen sulfide also hint that, if you could visit this distant place without a spacesuit, the planet would smell like rotten eggs. ",

//         },
//     },

//     {
//         name: "Neptune",
//         planet_intro: "",
//         position_from_sun: 8,
//         image_url: {
//             first: "https://media.wired.com/photos/5d04045bde1abfe4e801d054/4:3/w_1600,h_1200,c_limit/Science-Neptune-FA-PIA01492_orig.jpg",
//             second: "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
//             third: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F648792456%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D4587%26cropY1%3D173%26cropY2%3D2755",
//             forth: "https://static.wikia.nocookie.net/spore/images/1/15/Neptune.png/revision/latest?cb=20090222230615",
//             fifth: "https://scitechdaily.com/images/Neptune-Planet-Illustration.jpg",
//         },
//         latin_name: "Neptunus",
//         sumerian_name: null,
//         orbit_distance_km: 4498396441,
//         orbit_distance_au: 30.10,
//         equatorial_diameter_km: 49528,
//         mass: "1.02 × 10^26 kg (17 Earths)",
//         number_of_moons: 14,
//         moon_names: {
//             first: "Naiad",
//             second: "Thalassa",
//             third: "Despina",
//             fourth: "Galatea",
//             fifth: "Larissa",
//             sixth: "Hippocamp",
//             seventh: "Proteus",
//             eighth: "Triton",
//             ninth: "Nereid",
//             tenth: "Halimede",
//             eleventh: "Sao",
//             twelfth: "Laomedeia",
//             thirteenth: "Psamathe",
//             fourteenth: "Neso",
//         },
        // moon_list: [""],
        //     sig_moons: [{
        //         name: "",
        //         position: 0,
        //         image_url: [
        //             "",
        //             "",
        //             ""
        //         ],
        //         orbit_distance_km: 0,
        //         equatorial_diameter_km: 0,
        //         mass: "",
        //         orbit_period_in_days: 0,
        //         surface_temperature_max_celcius: 0,
        //         surface_temperature_min_celcius: 0,
        //         facts: [
        //             "",
        //             "",
        //             "",
        //         ]
        //     }],
//         rings: 6,
//         orbit_period_days: 60190,
//         surface_temperature_max_celcius: -201,
//         surface_temperature_min_celcius: -218,
//         facts: {
//             first: "Neptune was not known to the ancients. It is not visible to the naked eye and was first observed in 1846. Its position was determined using mathematical predictions.It was named after the Roman god of the sea.",
//             second: "Neptune has 6 faint rings. However, one of the rings was only discovered very recently by Voyager 2 and there is debate in the scientic community regarding if the 6th ring is in fact a ring that seperates and rejoins on occaion",
//             third: "Neptune spins on its axis very rapidly. Its equatorial clouds take 16 hours to make one rotation.This is because Neptune is not solid body.",
//             fourth: "Neptune is the smallest of the ice giants. Despite being smaller than Uranus, Neptune has a greater mass.Below its heavy atmosphere, Uranus is made of layers of hydrogen, helium, and methane gases.They enclose a layer of water, ammonia and methane ice.The inner core of the planet is made of rock.",
//             fifth: "The atmosphere of Neptune is made of hydrogen and helium, with some methane. The methane absorbs red light, which makes the planet appear a lovely blue.High, thin clouds drift in the upper atmosphere.",
//             sixth: "Neptune has a very active climate. Large storms whirl through its upper atmosphere, and high- speed winds track around the planet at up 600 meters per second.One of the largest storms ever seen was recorded in 1989. It was called the Great Dark Spot.It lasted about five years.",
//             seventh: "Neptune has a very thin collection of rings. They are likely made up of ice particles mixed with dust grains and possibly coated with a carbon- based substance.",
//             eighth: "Neptune has 14 moons. The most interesting moon is Triton, a frozen world that is spewing nitrogen ice and dust particles out from below its surface.It was likely captured by the gravitational pull of Neptune.It is probably the coldest world in the solar system.",
//             ninth: "Only one spacecraft has flown by Neptune. In 1989, the Voyager 2 spacecraft swept past the planet.It returned the first close- up images of the Neptune system.The NASA/ ESA Hubble Space Telescope has also studied this planet, as have a number of ground - based telescopes",
//             tenth: "The Great Dark Spot in the southern atmosphere of Neptune was first discovered in 1989 by the Voyager 2 spacecraft. It was an incredibly large rotating storm system with winds of up to 1,500 miles per hour, the strongest winds recorded on any planet. How such powerful winds were discovered on a planet so far from the sun is still considered a mystery to this day.",
//             eleventh: "Data from the Voyager 2 spacecraft also showed that the Great Dark Spot varied significantly in size during their brief pass of the planet. When Neptune was viewed by the Hubble Space telescope in 1994 the Great Dark Spot had vanished, although a different dark spot had appeared in Neptune’s northern hemisphere.",
//             twelfth: "Neptune has an incredibly thick atmosphere comprised of 74% hydrogen, 25% helium and approximately 1% methane. Its atmosphere also contains icy clouds and the fastest winds recorded in the solar system. Particles of icy methane and minor gases in the extremities of the atmosphere give Neptune its deep blue colour. The striking blue and white features of Neptune also help to distinguish it from Uranus.",
//             thirteenth: "Neptune’s atmosphere is subdivided into the lower troposphere and the stratosphere with the tropopause being the boundary between the two. In the lower troposphere temperatures decrease with altitude however they increase with altitude in the stratosphere. Hydrocarbons form hazes of smog that appear in the entire upper atmosphere of Neptune and hydrocarbon snowflakes that form in Neptune’s atmosphere melt before they reach its surface due to the high pressure.",
//             fourteenth: "Like the other outer planets, Neptune possesses a ring system, though its rings are very faint. They are most likely made up of ice particles and grains of dust with a carbon-based substance coating them.",
//             fifteenth: "The largest Neptunian moon, Triton, was discovered just 17 days after Neptune itself was discovered.",

//         },
//     },

//     {
//         name: "Pluto",
//         planet_intro: "",
//         position_from_sun: 9,
//         image_url: {
//             first: "https://cms.qz.com/wp-content/uploads/2016/11/pluto-poster.jpg?quality=75&strip=all&w=1200&h=900&crop=1",
//             second: "https://cdn.mos.cms.futurecdn.net/jGqBq44gCE3CogJTXAnwjT.jpg",
//             third: "https://i.pinimg.com/originals/09/38/35/0938352d9a2bdb296f092dd7cda93851.jpg",
//             forth: "https://cdn.vox-cdn.com/thumbor/Sf3U7g3bz1MmEOlLvRX--Ko61jI=/0x0:1180x766/1200x800/filters:focal(442x79:630x267)/cdn.vox-cdn.com/uploads/chorus_image/image/51865475/nh_pluto_crop.jpg.0.png",
//             fifth: "https://astrologynewsservice.com/wp-content/uploads/2015/07/pluto-illo.jpg",
//         },
//         latin_name: "Pluto",
//         sumerian_name: null,
//         orbit_distance_km: 7375936441,
//         orbit_distance_au: 49.305,
//         equatorial_diameter_km: 2372,
//         mass: "12.5 x 1021kg (0.0021 x Earth's)",
//         number_of_moons: 5,
//         moon_names: {
//             first: "Charon",
//             second: "Styx",
//             third: "Nix",
//             fourth: "Kerberos",
//             fifth: "Hydra",
//         },
        // moon_list: [""],
        //     sig_moons: [{
        //         name: "",
        //         position: 0,
        //         image_url: [
        //             "",
        //             "",
        //             ""
        //         ],
        //         orbit_distance_km: 0,
        //         equatorial_diameter_km: 0,
        //         mass: "",
        //         orbit_period_in_days: 0,
        //         surface_temperature_max_celcius: 0,
        //         surface_temperature_min_celcius: 0,
        //         facts: [
        //             "",
        //             "",
        //             "",
        //         ]
        //     }],
//         rings: 0,
//         orbit_period_days: 90560,
//         surface_temperature_max_celcius: -223,
//         surface_temperature_min_celcius: -233,
//         facts: {
//             first: "Discovered in 1930, Pluto is the second closest dwarf planet to the Sun and was at one point classified as the ninth planet. Pluto is the largest dwarf planet but only the second most massive, with Eris being the most massive",
//             second: "Pluto is named after the Roman god of the underworld. This was proposed by Venetia Burney an eleven year old schoolgirl from Oxford, England.",
//             third: "Pluto was reclassified from a planet to a dwarf planet in 2006. This is when the IAU formalised the definition of a planet as “A planet is a celestial body that(a) is in orbit around the Sun, (b) has sufficient mass for its self- gravity to overcome rigid body forces so that it assumes a hydrostatic equilibrium(nearly round) shape, and(c) has cleared the neighbourhood around its orbit.”",
//             fourth: "Pluto was discovered on February 18th, 1930 by the Lowell Observatory. For the 76 years between Pluto being discovered and the time it was reclassified as a dwarf planet it completed under a third of its orbit around the Sun.",
//             fifth: "Pluto has five known moons. The moons are Charon(discovered in 1978,), Hydra and Nix(both discovered in 2005), Kerberos originally P4(discovered 2011) and Styx originally P5(discovered 2012) official designations S / 2011(134340) 1 and  S / 2012(134340) 1",
//             sixth: "Pluto is one third water. This is in the form of water ice which is more than 3 times as much water as in all the Earth’s oceans, the remaining two thirds are rock.Pluto’s surface is covered with ices, and has several mountain ranges, light and dark regions, and a scattering of craters.",
//             seventh: "Pluto is smaller than a number of moons. These are Ganymede, Titan, Callisto, Io, Europa, Triton, and the Earth’s moon.Pluto has 66% of the diameter of the Earth’s moon and 18% of its mass.While it is now confirmed that Pluto is the largest dwarf planet for around 10 years it was thought that this was Eris.",
//             eighth: "Pluto has a eccentric and inclined orbit. This takes it between 4.4 and 7.3 billion km from the Sun meaning Pluto is periodically closer to the Sun than Neptune.",
//             ninth: "Pluto has been visited by one spacecraft. The New Horizons spacecraft, which was launched in 2006, flew by Pluto on the 14th of July 2015 and took a series of images and other measurements.New Horizons is now on its way to the Kuiper Belt to explore even more distant objects.",
//             tenth: "Pluto’s location was predicted by Percival Lowell in 1915. The prediction came from deviations he initially observed in 1905 in the orbits of Uranus and Neptune.",
//             eleventh: "Pluto sometimes has an atmosphere. When Pluto elliptical orbit takes it closer to the Sun, its surface ice thaws and forms a thin atmosphere primarily of nitrogen which slowly escapes the planet.It also has a methane haze that overs about 161 kilometres above the surface.The methane is dissociated by sunlight into hydrocarbons that fall to the surface and coat the ice with a dark covering.When Pluto travels away from the Sun the atmosphere then freezes back to its solid state.",
//             twelfth: "In 2006, Pluto was reclassified as a dwarf planet, a change widely thought of as a demotion. The question of Pluto's planet status has attracted controversy and stirred debate in the scientific community, and among the general public, since then. In 2017, a science group (including members of the New Horizon mission) proposed a new definition of planethood based on 'round objects in space smaller than stars,' which would make the number of planets in our solar system expand from 8 to roughly 100.",
//             thirteenth: "Observations of Pluto's surface by the New Horizons spacecraft revealed a variety of surface features, including mountains that reach as high as 11,000 feet (3,500 meters), comparable to the Rocky Mountains on Earth. While methane and nitrogen ice cover much of the surface of Pluto, these materials are not strong enough to support such enormous peaks, so scientists suspect that the mountains are formed on a bedrock of water ice.",
//             fourteenth: "Pluto's surface is also covered in an abundance of methane ice, but New Horizons scientists have observed significant differences in the way the ice reflects light across the dwarf planet's surface. The dwarf planet also possesses ice ridge terrain that appears to look like a snakeskin; astronomers spotted similar features to Earth's penitentes, or erosion-formed features on mountainous terrain. The Pluto features are much larger; they are estimated at 1,650 feet (500 m) tall, while the Earth features are only a few meters in size.",
//             fifteenth: "Another distinct feature on Pluto's surface is a large heart-shaped region known unofficially as Tombaugh Regio (after Clyde Tombaugh; regio is Latin for region). The left side of the region (an area that takes on the shape of an ice cream cone) is covered in carbon monoxide ice. Other variations in the composition of surface materials have been identified within the 'heart' of Pluto.",

//         },
//     },

// ]);