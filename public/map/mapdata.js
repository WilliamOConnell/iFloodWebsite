let dataDomain = "https://data.iflood.vse.gmu.edu";

let colorRanges = {
    "jet":[
        [0.0000,"#000083"],
        [0.0256,"#000c8b"],
        [0.0513,"#001893"],
        [0.0769,"#00249a"],
        [0.1026,"#0030a2"],
        [0.1282,"#003caa"],
        [0.1538,"#0150b3"],
        [0.1795,"#0163bb"],
        [0.2051,"#0277c4"],
        [0.2308,"#028acc"],
        [0.2564,"#039ed5"],
        [0.2821,"#03b1dd"],
        [0.3077,"#04c5e6"],
        [0.3333,"#04d8ee"],
        [0.3590,"#05ecf7"],
        [0.3846,"#05ffff"],
        [0.4103,"#21ffe3"],
        [0.4359,"#3dffc6"],
        [0.4615,"#58ffaa"],
        [0.4872,"#74ff8e"],
        [0.5128,"#90ff71"],
        [0.5385,"#acff55"],
        [0.5641,"#c7ff39"],
        [0.5897,"#e3ff1c"],
        [0.6154,"#ffff00"],
        [0.6410,"#ffe600"],
        [0.6667,"#fecc00"],
        [0.6923,"#feb300"],
        [0.7179,"#fd9900"],
        [0.7436,"#fd8000"],
        [0.7692,"#fc6600"],
        [0.7949,"#fc4d00"],
        [0.8205,"#fb3300"],
        [0.8462,"#fb1900"],
        [0.8718,"#fa0000"],
        [0.8974,"#e20000"],
        [0.9231,"#c90000"],
        [0.9487,"#b10000"],
        [0.9744,"#980000"],
        [1.0000,"#800000"]
    ],
    "viridis":[
        [0.0000,"#440154"],
        [0.0256,"#450a5c"],
        [0.0513,"#451263"],
        [0.0769,"#461b6b"],
        [0.1026,"#462372"],
        [0.1282,"#472c7a"],
        [0.1538,"#45337d"],
        [0.1795,"#423b81"],
        [0.2051,"#404284"],
        [0.2308,"#3d4a88"],
        [0.2564,"#3b518b"],
        [0.2821,"#38578c"],
        [0.3077,"#355e8c"],
        [0.3333,"#32648d"],
        [0.3590,"#2f6b8d"],
        [0.3846,"#2c718e"],
        [0.4103,"#2a778e"],
        [0.4359,"#287d8e"],
        [0.4615,"#25848d"],
        [0.4872,"#238a8d"],
        [0.5128,"#21908d"],
        [0.5385,"#22968b"],
        [0.5641,"#239c88"],
        [0.5897,"#25a186"],
        [0.6154,"#26a783"],
        [0.6410,"#27ad81"],
        [0.6667,"#34b47a"],
        [0.6923,"#42bb72"],
        [0.7179,"#4fc16b"],
        [0.7436,"#5cc863"],
        [0.7692,"#6ccc59"],
        [0.7949,"#7bd04f"],
        [0.8205,"#8bd446"],
        [0.8462,"#9ad83c"],
        [0.8718,"#aadc32"],
        [0.8974,"#bbde2f"],
        [0.9231,"#cbe02d"],
        [0.9487,"#dce32a"],
        [0.9744,"#ece528"],
        [1.0000,"#fde725"]
    ],
    "plasma":[
        [0.0000,"#0d0887"],
        [0.0256,"#19078c"],
        [0.0513,"#260691"],
        [0.0769,"#320597"],
        [0.1026,"#3f049c"],
        [0.1282,"#4b03a1"],
        [0.1538,"#5503a2"],
        [0.1795,"#5f03a4"],
        [0.2051,"#6903a5"],
        [0.2308,"#7303a7"],
        [0.2564,"#7d03a8"],
        [0.2821,"#8609a4"],
        [0.3077,"#8e0fa1"],
        [0.3333,"#97169d"],
        [0.3590,"#9f1c9a"],
        [0.3846,"#a82296"],
        [0.4103,"#af2990"],
        [0.4359,"#b6308a"],
        [0.4615,"#bd3885"],
        [0.4872,"#c43f7f"],
        [0.5128,"#cb4679"],
        [0.5385,"#d04d73"],
        [0.5641,"#d5556e"],
        [0.5897,"#db5c68"],
        [0.6154,"#e06463"],
        [0.6410,"#e56b5d"],
        [0.6667,"#ea7556"],
        [0.6923,"#ef804f"],
        [0.7179,"#f38a48"],
        [0.7436,"#f89441"],
        [0.7692,"#f99d3c"],
        [0.7949,"#faa737"],
        [0.8205,"#fbb032"],
        [0.8462,"#fcba2d"],
        [0.8718,"#fdc328"],
        [0.8974,"#face27"],
        [0.9231,"#f8d925"],
        [0.9487,"#f5e324"],
        [0.9744,"#f3ee22"],
        [1.0000,"#f0f921"]
    ],
    "bathymetry":[
        //[0.0000,"#fdfecc"],
        [0.0000,"#ffcfc8"],
        [0.0100,"#fdfecc"],
        [0.0256,"#f0f9c6"],
        [0.0513,"#e3f4bf"],
        [0.0769,"#d5f0b9"],
        [0.1026,"#c8ebb2"],
        [0.1282,"#bbe6ac"],
        [0.1538,"#aee1aa"],
        [0.1795,"#a0dca8"],
        [0.2051,"#93d8a7"],
        [0.2308,"#85d3a5"],
        [0.2564,"#78cea3"],
        [0.2821,"#6fc6a3"],
        [0.3077,"#67bea3"],
        [0.3333,"#5eb6a3"],
        [0.3590,"#55aea3"],
        [0.3846,"#52a8a2"],
        [0.4103,"#50a1a1"],
        [0.4359,"#4d9ba0"],
        [0.4615,"#4b949f"],
        [0.4872,"#488e9e"],
        [0.5128,"#46889d"],
        [0.5385,"#44819b"],
        [0.5641,"#437b9a"],
        [0.5897,"#417498"],
        [0.6154,"#3f6e97"],
        [0.6410,"#3f6795"],
        [0.6667,"#3f6092"],
        [0.6923,"#405a90"],
        [0.7179,"#40538d"],
        [0.7436,"#404c8b"],
        [0.7692,"#3f4781"],
        [0.7949,"#3e4177"],
        [0.8205,"#3d3c6e"],
        [0.8462,"#3c3664"],
        [0.8718,"#3b315a"],
        [0.8974,"#372c51"],
        [0.9231,"#332848"],
        [0.9487,"#30233e"],
        [0.9744,"#2c1f35"],
        [1.0000,"#281a2c"]
    ],
    "velocityBlue":[
        [0.0, '#fefbe6'],
        [0.0256, '#f4f5e2'],
        [0.0513, '#eaefde'],
        [0.0769, '#dfe9db'],
        [0.1026, '#d5e3d7'],
        [0.1282, '#cbddd3'],
        [0.1538, '#c0d8cf'],
        [0.1795, '#b5d3ca'],
        [0.2051, '#abcec6'],
        [0.2308, '#a0c9c1'],
        [0.2564, '#95c4bd'],
        [0.2821, '#86beba'],
        [0.3077, '#76b9b7'],
        [0.3333, '#67b3b3'],
        [0.359, '#57adb0'],
        [0.3846, '#50a7af'],
        [0.4103, '#48a1ad'],
        [0.4359, '#419cac'],
        [0.4615, '#3996aa'],
        [0.4872, '#3290a9'],
        [0.5128, '#2e8aa8'],
        [0.5385, '#2a84a6'],
        [0.5641, '#277da5'],
        [0.5897, '#2377a3'],
        [0.6154, '#1f71a2'],
        [0.641, '#1f6ba1'],
        [0.6667, '#1e64a0'],
        [0.6923, '#1e5e9e'],
        [0.7179, '#1d579d'],
        [0.7436, '#1d519c'],
        [0.7692, '#1e4b94'],
        [0.7949, '#1f458c'],
        [0.8205, '#214084'],
        [0.8462, '#223a7c'],
        [0.8718, '#233474'],
        [0.8974, '#1f306a'],
        [0.9231, '#1c2c5f'],
        [0.9487, '#182855'],
        [0.9744, '#15244a'],
        [1.0, '#112040']
    ],
    "blueRed":[
        [0.0000,"#0000ff"],
        [0.0256,"#0700f8"],
        [0.0513,"#0d00f2"],
        [0.0769,"#1400eb"],
        [0.1026,"#1a00e5"],
        [0.1282,"#2100de"],
        [0.1538,"#2700d8"],
        [0.1795,"#2e00d1"],
        [0.2051,"#3400cb"],
        [0.2308,"#3b00c4"],
        [0.2564,"#4100be"],
        [0.2821,"#4800b7"],
        [0.3077,"#4e00b1"],
        [0.3333,"#5500aa"],
        [0.3590,"#5c00a3"],
        [0.3846,"#62009d"],
        [0.4103,"#690096"],
        [0.4359,"#6f0090"],
        [0.4615,"#760089"],
        [0.4872,"#7c0083"],
        [0.5128,"#83007c"],
        [0.5385,"#890076"],
        [0.5641,"#90006f"],
        [0.5897,"#960069"],
        [0.6154,"#9d0062"],
        [0.6410,"#a3005c"],
        [0.6667,"#aa0055"],
        [0.6923,"#b1004e"],
        [0.7179,"#b70048"],
        [0.7436,"#be0041"],
        [0.7692,"#c4003b"],
        [0.7949,"#cb0034"],
        [0.8205,"#d1002e"],
        [0.8462,"#d80027"],
        [0.8718,"#de0021"],
        [0.8974,"#e5001a"],
        [0.9231,"#eb0014"],
        [0.9487,"#f2000d"],
        [0.9744,"#f80007"],
        [1.0000,"#ff0000"]
    ],
    "winter":[
        [0.0000,"#0000ff"],
        [0.0256,"#0007fc"],
        [0.0513,"#000df8"],
        [0.0769,"#0014f5"],
        [0.1026,"#001af2"],
        [0.1282,"#0021ef"],
        [0.1538,"#0027eb"],
        [0.1795,"#002ee8"],
        [0.2051,"#0034e5"],
        [0.2308,"#003be2"],
        [0.2564,"#0041de"],
        [0.2821,"#0048db"],
        [0.3077,"#004ed8"],
        [0.3333,"#0055d5"],
        [0.3590,"#005cd1"],
        [0.3846,"#0062ce"],
        [0.4103,"#0069cb"],
        [0.4359,"#006fc8"],
        [0.4615,"#0076c4"],
        [0.4872,"#007cc1"],
        [0.5128,"#0083be"],
        [0.5385,"#0089bb"],
        [0.5641,"#0090b7"],
        [0.5897,"#0096b4"],
        [0.6154,"#009db1"],
        [0.6410,"#00a3ae"],
        [0.6667,"#00aaaa"],
        [0.6923,"#00b1a7"],
        [0.7179,"#00b7a4"],
        [0.7436,"#00bea1"],
        [0.7692,"#00c49d"],
        [0.7949,"#00cb9a"],
        [0.8205,"#00d197"],
        [0.8462,"#00d894"],
        [0.8718,"#00de90"],
        [0.8974,"#00e58d"],
        [0.9231,"#00eb8a"],
        [0.9487,"#00f287"],
        [0.9744,"#00f883"],
        [1.0000,"#00ff80"]
    ],
    "velocity-green":[
        [0.0000,"#172313"],
        [0.0256,"#172917"],
        [0.0513,"#172f1b"],
        [0.0769,"#18341e"],
        [0.1026,"#183a22"],
        [0.1282,"#184026"],
        [0.1538,"#154627"],
        [0.1795,"#134c29"],
        [0.2051,"#10532a"],
        [0.2308,"#0e592c"],
        [0.2564,"#0b5f2d"],
        [0.2821,"#11652b"],
        [0.3077,"#166a29"],
        [0.3333,"#1c7027"],
        [0.3590,"#217525"],
        [0.3846,"#277b23"],
        [0.4103,"#32801e"],
        [0.4359,"#3d841a"],
        [0.4615,"#498915"],
        [0.4872,"#548d11"],
        [0.5128,"#5f920c"],
        [0.5385,"#6a960d"],
        [0.5641,"#769a0e"],
        [0.5897,"#819d10"],
        [0.6154,"#8da111"],
        [0.6410,"#98a512"],
        [0.6667,"#a4aa1f"],
        [0.6923,"#b1b02c"],
        [0.7179,"#bdb538"],
        [0.7436,"#c9ba45"],
        [0.7692,"#cfc053"],
        [0.7949,"#d6c660"],
        [0.8205,"#dccc6e"],
        [0.8462,"#e3d27b"],
        [0.8718,"#e9d889"],
        [0.8974,"#eddf97"],
        [0.9231,"#f2e7a4"],
        [0.9487,"#f6eeb2"],
        [0.9744,"#fbf6bf"],
        [1.0000,"#fffdcd"]
    ],
    "density":[
        [0.0000,"#360e24"],
        [0.0256,"#3d102d"],
        [0.0513,"#441236"],
        [0.0769,"#4b133e"],
        [0.1026,"#521547"],
        [0.1282,"#591750"],
        [0.1538,"#5d1b5a"],
        [0.1795,"#612065"],
        [0.2051,"#66246f"],
        [0.2308,"#6a297a"],
        [0.2564,"#6e2d84"],
        [0.2821,"#70338d"],
        [0.3077,"#723a96"],
        [0.3333,"#7440a0"],
        [0.3590,"#7647a9"],
        [0.3846,"#784db2"],
        [0.4103,"#7854b9"],
        [0.4359,"#785bc0"],
        [0.4615,"#7863c7"],
        [0.4872,"#786ace"],
        [0.5128,"#7871d5"],
        [0.5385,"#7779d8"],
        [0.5641,"#7680db"],
        [0.5897,"#7588de"],
        [0.6154,"#748fe1"],
        [0.6410,"#7397e4"],
        [0.6667,"#78a0e4"],
        [0.6923,"#7da8e4"],
        [0.7179,"#81b1e3"],
        [0.7436,"#86b9e3"],
        [0.7692,"#8fbfe3"],
        [0.7949,"#97c5e3"],
        [0.8205,"#a0cae3"],
        [0.8462,"#a8d0e3"],
        [0.8718,"#b1d6e3"],
        [0.8974,"#bcdbe6"],
        [0.9231,"#c6e1e9"],
        [0.9487,"#d1e6eb"],
        [0.9744,"#dbecee"],
        [1.0000,"#e6f1f1"]
    ],
    "rainbow":[
        [0.0, 'rgb(0,52,245)'],
        [0.01568627450980392, 'rgb(0,63,234)'],
        [0.03137254901960784, 'rgb(0,72,223)'],
        [0.047058823529411764, 'rgb(0,81,212)'],
        [0.06274509803921569, 'rgb(0,89,201)'],
        [0.0784313725490196, 'rgb(0,96,189)'],
        [0.09411764705882353, 'rgb(0,103,178)'],
        [0.10980392156862745, 'rgb(0,109,167)'],
        [0.12549019607843137, 'rgb(0,115,157)'],
        [0.1411764705882353, 'rgb(8,119,147)'],
        [0.1568627450980392, 'rgb(28,124,137)'],
        [0.17254901960784313, 'rgb(41,128,128)'],
        [0.18823529411764706, 'rgb(49,132,118)'],
        [0.20392156862745098, 'rgb(55,136,109)'],
        [0.2196078431372549, 'rgb(59,140,99)'],
        [0.23529411764705882, 'rgb(61,144,88)'],
        [0.25098039215686274, 'rgb(63,148,78)'],
        [0.26666666666666666, 'rgb(63,153,66)'],
        [0.2823529411764706, 'rgb(63,157,53)'],
        [0.2980392156862745, 'rgb(63,161,40)'],
        [0.3137254901960784, 'rgb(66,165,27)'],
        [0.32941176470588235, 'rgb(74,168,18)'],
        [0.34509803921568627, 'rgb(85,171,15)'],
        [0.3607843137254902, 'rgb(96,173,16)'],
        [0.3764705882352941, 'rgb(106,175,18)'],
        [0.39215686274509803, 'rgb(116,178,19)'],
        [0.40784313725490196, 'rgb(126,180,21)'],
        [0.4235294117647059, 'rgb(136,182,23)'],
        [0.4392156862745098, 'rgb(145,185,25)'],
        [0.4549019607843137, 'rgb(154,187,27)'],
        [0.47058823529411764, 'rgb(163,189,29)'],
        [0.48627450980392156, 'rgb(172,191,31)'],
        [0.5019607843137255, 'rgb(181,193,32)'],
        [0.5176470588235293, 'rgb(190,195,34)'],
        [0.5333333333333333, 'rgb(198,197,36)'],
        [0.5490196078431373, 'rgb(207,199,38)'],
        [0.5647058823529412, 'rgb(215,201,39)'],
        [0.580392156862745, 'rgb(224,203,41)'],
        [0.596078431372549, 'rgb(232,205,43)'],
        [0.611764705882353, 'rgb(240,205,44)'],
        [0.6274509803921569, 'rgb(246,204,44)'],
        [0.6431372549019607, 'rgb(250,201,43)'],
        [0.6588235294117647, 'rgb(252,196,41)'],
        [0.6745098039215687, 'rgb(253,191,39)'],
        [0.6901960784313725, 'rgb(253,186,37)'],
        [0.7058823529411764, 'rgb(254,180,35)'],
        [0.7215686274509804, 'rgb(254,175,33)'],
        [0.7372549019607844, 'rgb(255,169,30)'],
        [0.7529411764705882, 'rgb(255,163,28)'],
        [0.7686274509803921, 'rgb(255,158,26)'],
        [0.7843137254901961, 'rgb(255,152,24)'],
        [0.8, 'rgb(255,146,21)'],
        [0.8156862745098039, 'rgb(255,140,19)'],
        [0.8313725490196078, 'rgb(255,134,17)'],
        [0.8470588235294118, 'rgb(255,128,14)'],
        [0.8627450980392157, 'rgb(255,121,12)'],
        [0.8784313725490196, 'rgb(255,115,10)'],
        [0.8941176470588235, 'rgb(255,108,7)'],
        [0.9098039215686274, 'rgb(255,101,5)'],
        [0.9254901960784314, 'rgb(255,94,3)'],
        [0.9411764705882353, 'rgb(254,86,2)'],
        [0.9568627450980391, 'rgb(254,77,1)'],
        [0.9725490196078431, 'rgb(254,68,0)'],
        [0.9882352941176471, 'rgb(253,57,0)'],
        [1.0, 'rgb(253,48,0)']
    ]
};

let models = {
    "ChesapeakeBay_ADCIRCSWAN":{},
};

let viewLevels = [
    null, //0 is the default/global level
    [[-80.73,40.95],[-72.63,35.59]] //1 is chesapeake
];

let layerGroups = [
    "GMU iFlood Data", //0
    "Third Party Data" //1
];

let layers = {
    "waterLevel": {
        "group":0,
        "type":"geoJSON",
        "displayName":"Water Level",
        "temporal":true,
        "urls":[
            [0,"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/Splits/water/{_h_}.json"],
        ],
        "maxUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/GeoJson/CBmaxele.json",
        "downloadUrl":"{_ChesapeakeBay_ADCIRCSWAN_DOWNLOAD_}/Downloadable_layers/Water/",
        "colorRange":colorRanges["jet"],
        "colorBounds":[0,2],
        "colorProperty":"elemin",
        "unit":"m",
        "opacity":0.75,
        "reverseBar":true,
        "z":1,
        "img":"/map/layerIcons/waterLevel.png",
        "description":"Predicted water levels from the iFLOOD forecast system forced by the North American Mesoscale (NAM) model and Astronomical Tides. Water level is in meters above the NAVD88 vertical datum.",
        "visible":false
    },
    "inundation": {
        "group":0,
        "type":"geoJSON",
        "displayName":"Inundation",
        "temporal":false, //TODO: Should this be temporal?
        "urls":[
            [0,"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/GeoJson/maxinundation.json"]
        ],
        "downloadUrl":"{_ChesapeakeBay_ADCIRCSWAN_DOWNLOAD_}/Downloadable_layers/Inundation/",
        "colorRange":colorRanges["jet"],
        "colorBounds":[0,6],
        "colorProperty":"elemin",
        "unit":"m",
        "opacity":0.75,
        "reverseBar":true,
        "z":2,
        "img":"/map/layerIcons/inundation.png",
        "description":"Predicted maximum inundation depth above ground for the next 84 hours. Inundation is in meters above NAVD88 datum.\n",
        "visible":false
    },
    "minPressure": {
        "group":0,
        "type":"geoJSON",
        "displayName":"Atmospheric Pressure",
        "temporal":true,
        "urls":[
            [0,"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/Splits/pressure/{_h_}.json"],
        ],
        "maxUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/GeoJson/minpressure.json",
        "downloadUrl":"{_ChesapeakeBay_ADCIRCSWAN_DOWNLOAD_}/Downloadable_layers/Pressure/",
        "colorRange":colorRanges["plasma"],
        "colorBounds":[9,11],
        "colorProperty":"elemin",
        "unit":"kpa",
        "opacity":1,
        "reverseBar":true,
        "z":8,
        "img":"/map/layerIcons/pressure.png",
        "description":"Atmospheric pressure at sea level in the model domain derived from the the North American Mesoscale (NAM) model for next 84 hour forecasts. Atmospheric pressure is given in Kilopascals.",
        "visible":false
    },
    "windMag": {
        "group":0,
        "type":"geoJSON",
        "displayName":"Wind Magnitude",
        "temporal":true,
        "urls":[
            [0,"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/Splits/wind/{_h_}.json"],
        ],
        "maxUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/GeoJson/maxwind.json",
        "downloadUrl":"{_ChesapeakeBay_ADCIRCSWAN_DOWNLOAD_}/Downloadable_layers/Wind/",
        "colorRange":colorRanges["viridis"],
        "colorBounds":[0,80],
        "colorProperty":"elemin",
        "unit":"m/s",
        "opacity":1,
        "reverseBar":true,
        "hasParticles":true,
        "particleUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/Splits/wind_vectors/{_h_}.json",
        "particleLat":"windx",
        "particleLng":"windy",
        "particleSpeedScale":0.15,
        "particleColor":"rgba(255,255,255,1)",
        "z":10,
        "img":"/map/layerIcons/wind.png",
        "description":"Wind speeds at the surface in the model domain derived from the the North American Mesoscale (NAM) model for next 84 hour forecasts. Winds speeds are given in meters per second.",
        "visible":false
    },
    "boundary": {
        "group":0,
        "type":"outline",
        "displayName":"Model Boundary",
        "temporal":true,
        "url":"https://d2dyvyp1m8y8xp.cloudfront.net/Model/boundary/ModelBoundary.json",
        "downloadUrl":"https://d2dyvyp1m8y8xp.cloudfront.net/Model/boundary/ModelBoundary.json",
        "color":"#e13835",
        "z":100,
        "img":"/map/layerIcons/boundary.png",
        "description":"Numerical model domain for iFlood forecast System.",
        "visible":false
    },
    "bathy": {
        "group":0,
        "type":"geoJSON",
        "displayName":"Bathymetry",
        "urls":[
            [0,"https://data.iflood.vse.gmu.edu/Model/CBbathy/BathyV0_simple.json"],
            [1,"https://data.iflood.vse.gmu.edu/Model/CBbathy/BathyV0_crop.json"]
        ],
        "downloadUrl":"https://d2dyvyp1m8y8xp.cloudfront.net/Model/CBbathy/BathyV0.json",
        "colorRange":colorRanges["bathymetry"],
        "colorBounds":[0,5000],
        "colorProperty":"dmax",
        "unit":"m",
        "opacity":1,
        "reverseBar":false,
        "z":0,
        "img":"/map/layerIcons/bathy.png",
        "description":"Depth of water in the model domain is derived from National Geophysical Data Center's Coastal Relief Model (CRM) and NOAA digital nautical charts. Bathymetry is given in meters.",
        "visible":false
    },
    "currents": {
        "group":0,
        "type":"geoJSON",
        "displayName":"Currents",
        "temporal":true,
        "urls":[
            [0,"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/Splits/currents/{_h_}.json"],
        ],
        "maxUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/GeoJson/maxcurrents.json",
        "downloadUrl":"{_ChesapeakeBay_ADCIRCSWAN_DOWNLOAD_}/Downloadable_layers/Currents/",
        "colorRange":colorRanges["jet"],
        "colorBounds":[0,2],
        "colorProperty":"elemin",
        "unit":"m/s",
        "opacity":1,
        "reverseBar":true,
        "hasParticles":true,
        "particleUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/Splits/current_vectors/{_h_}.json",
        "particleLat":"windx",
        "particleLng":"windy",
        "particleSpeedScale":5,
        "particleColor":"rgba(200,200,255,1)",
        "z":4,
        "img":"/map/layerIcons/currents.png",
        "description":"Predicted currents velocity and magnitude from the iFLOOD forecast system for next 84 hours. Currents are in meters per second.",
        "visible":false
    },
    "waveHeight": {
        "group":0,
        "type":"geoJSON",
        "displayName":"Wave Height",
        "temporal":true,
        "urls":[
            [0,"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/Splits/wave_height/{_h_}.json"],
        ],
        "maxUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/GeoJson/swanHS_max.json",
        "downloadUrl":"{_ChesapeakeBay_ADCIRCSWAN_DOWNLOAD_}/Downloadable_layers/Wave_height/",
        "colorRange":colorRanges["winter"],
        "colorBounds":[0,5],
        "colorProperty":"elemin",
        "unit":"m",
        "opacity":1,
        "reverseBar":true,
        "hasParticles":true,
        "particleUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/Splits/wave_vectors/{_h_}.json",
        "particleLat":"windx",
        "particleLng":"windy",
        "particleSpeedScale":0.6,
        "particleColor":"#FFFFFF",
        "z":5,
        "img":"/map/layerIcons/waveHeight.png",
        "description":"Predicted maximum wave heights for the next 84 hours.",
        "visible":false
    },
    "wavePeriod": {
        "group":0,
        "type":"geoJSON",
        "displayName":"Wave Period",
        "temporal":true,
        "urls":[
            [0,"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/Splits/wave_period/{_h_}.json"],
        ],
        "maxUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/GeoJson/swanTPS_max.json",
        "downloadUrl":"{_ChesapeakeBay_ADCIRCSWAN_DOWNLOAD_}/Downloadable_layers/Wave_period/",
        "colorRange":colorRanges["density"],
        "colorBounds":[0,40],
        "colorProperty":"elemin",
        "unit":"s",
        "opacity":1,
        "reverseBar":true,
        "hasParticles":false,
        "z":6,
        "img":"/map/layerIcons/wavePeriod.png",
        "description":"Predicted wave period for the next 84 hours.",
        "visible":false
    },
    // "precip": {
    //     "type":"wmsTile",
    //     "displayName":"CERA Precip",
    //     "url":"https://tc2.nccera-5.renci.org/cerarisk/ceracgi/cera_wms_tiled?day=20180914&time=1200&com=9267&griddomain=HSOFS&tz=utc&unit=ft&legend=nc&ceraversion=8&query=elev&timestep_precimg=prechc24",
    //     "img":"/map/layerIcons/ceraPrecip.png",
    //     "description":"Here there could be some text that explains something about the data, where it came from, how to interpret it, etc.",
    //     "visible":false
    // },
    "precip": {
        "group":1,
        "type":"arcGIS",
        "displayName":"24 Hour Precip",
        "url":"https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer",
        "downloadUrl":"https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/19",
        "gisLayer":"19",
        "img":"/map/layerIcons/temp.png",
        "description":"24-Hr Quantitative Precipitation Accumulation from NOAA",
        "visible":false
    },
    "stormPath": {
        "group":1,
        "type":"stormPath",
        "displayName":"Storm Paths",
        "pointUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/NHCHurricanes/Hurricane/hurricane_points.json",
        "pathUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/NHCHurricanes/Hurricane/hurricane_track.json",
        "polygonUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/NHCHurricanes/Hurricane/hurricane_polygon.json",
        "pathSprites":{
            "HU":"/map/sprites/hurricane.svg",
            "TS":"/map/sprites/storm.svg"
        },
        "downloadUrl":"https://www.nhc.noaa.gov/",
        "z":8,
        "img":"/map/layerIcons/stormPath.png",
        "description":"Predicted path of storms from NHC.<br><img src='/map/sprites/hurricane.svg' width='28'>Hurricane<br><img src='/map/sprites/storm.svg' width='28'>Storm<br><img src='/map/sprites/depression.svg' width='28'>Depression",
        "visible":false
    }
};

let stationWaterUrl = "{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/{_s_}.tsv";
let stationValidationUrl = "{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/plotly_bias24.tsv";
let stationWavesUrl = "{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/AdditionalStations_waves/{_s_}.tsv";
let markers = {
    "DC": {
        "type": "station",
        "pos": {
            lat: 38.8545966284, lng: -77.0245558832
        },
        "title":"District of Columbia",
        "stationStr":"WASD2",
        "timeSeriesUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/WASD2.tsv",
        "hasWater":true,
        "hasWind":true,
        "hasValidation":true,
        "floodLevels": [
            3.7,
            4.2,
            5.3,
            7.0
        ]
    },
    "BH": {
        "type": "station",
        "pos": {
            lat: 38.216639, lng: -76.036183
        },
        "title":"Bishop head",
        "stationStr":"BISM2",
        "timeSeriesUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/BISM2.tsv",
        "hasWater":true,
        "hasWind":true,
        "hasValidation":true,
        "floodLevels": [
            3.0,
            3.2,
            3.7,
            4.2
        ]
    },
    "BD": {
        "type": "station",
        "pos": {
            lat: 39.266101, lng: -76.577572
        },
        "title":"Baltimore",
        "stationStr":"BLTM2",
        "timeSeriesUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/BLTM2.tsv",
        "hasWater":true,
        "hasWind":true,
        "hasValidation":true,
        "floodLevels": [
            2.5,
            3.0,
            5.0,
            6.0
        ]
    },
    "AN": {
        "type": "station",
        "pos": {
            lat: 38.986885860000, lng: -76.479876450000
        },
        "title":"Annapolis",
        "stationStr":"APAM2",
        "timeSeriesUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/APAM2.tsv",
        "hasWater":true,
        "hasWind":false,
        "hasValidation":true,
        "floodLevels": [
            2.0,
            2.6,
            3.3,
            6.0
        ]
    },
    "SO": {
        "type": "station",
        "pos": {
            lat: 38.315748310000, lng: -76.449921330000
        },
        "title":"Solomons Island",
        "stationStr":"SLIM2",
        "timeSeriesUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/SLIM2.tsv",
        "hasWater":true,
        "hasWind":true,
        "hasValidation":true,
        "floodLevels": [
            2.5,
            3.0,
            4.0,
            5.0
        ]
    },
    "KP": {
        "type": "station",
        "pos": {
            lat: 37.163433530000, lng: -75.995395910000
        },
        "title":"Kiptopeke",
        "stationStr":"KPTV2",
        "timeSeriesUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/KPTV2.tsv",
        "hasWater":true,
        "hasWind":true,
        "hasValidation":true,
        "floodLevels": [
            4.0,
            4.5,
            5.0,
            5.5
        ]
    },
    "SP": {
        "type": "station",
        "pos": {
            lat: 36.950165530000, lng: -76.335476530000
        },
        "title":"Sewells Point",
        "stationStr":"SWPV2",
        "timeSeriesUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/SWPV2.tsv",
        "hasWater":true,
        "hasWind":false,
        "hasValidation":true,
        "floodLevels": [
            4.0,
            4.5,
            5.5,
            6.5
        ]
    },
    "CB": {
        "type": "station",
        "pos": {
            lat: 36.964541507100, lng: -76.123066553300
        },
        "title":"Chesapeake Bay Bridge Tunnel",
        "stationStr":"CBBV2",
        //"timeSeriesUrl":"{_ChesapeakeBay_ADCIRCSWAN_FILES_}/TimeSeries/SWPV2.tsv",
        //"hasWind":true,
        "hasWater":false,
        "hasWind":false,
        "hasValidation":false,
        "floodLevels": [
            5.0,
            5.5,
            6.0,
            8.0
        ],
        "notice":"Data for this station is temporarily unavailable."
    },
    "CHVA": {
		"type": "buoy",
		"pos": {
			"lat": 36.915,
			"lng": -75.72
		},
		"title": "Cape Henry,VA",
		"stationStr": "CHVA",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "SCRIPPS"
	},
	"WIVA": {
		"type": "buoy",
		"pos": {
			"lat": 37.757,
			"lng": -75.334
		},
		"title": "Wallops island,VA",
		"stationStr": "WIVA",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "USACE"
	},
	"DBDE": {
		"type": "buoy",
		"pos": {
			"lat": 38.461,
			"lng": -74.703
		},
		"title": "Dalware Bay",
		"stationStr": "DBDE",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "NDBC"
	},
	"VBVA": {
		"type": "buoy",
		"pos": {
			"lat": 36.611,
			"lng": -74.843
		},
		"title": "VA Beach Eastern Shore",
		"stationStr": "VBVA",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "NDBC"
	},
	"DFNC": {
		"type": "buoy",
		"pos": {
			"lat": 36.26,
			"lng": -75.594
		},
		"title": "Duck FRP,NC",
		"stationStr": "DFNC",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "SCRIPPS"
	},
	"NHNC": {
		"type": "buoy",
		"pos": {
			"lat": 36.001,
			"lng": -75.421
		},
		"title": "Nags head,NC",
		"stationStr": "NHNC",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "UNC"
	},
	"OINC1": {
		"type": "buoy",
		"pos": {
			"lat": 35.75,
			"lng": -75.33
		},
		"title": "Oregon Inlet, NC",
		"stationStr": "OINC1",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "UNC"
	},
	"DSNC": {
		"type": "buoy",
		"pos": {
			"lat": 35.09,
			"lng": -75.36
		},
		"title": "Diamond Shoals, NC",
		"stationStr": "DSNC",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "NDBC"
	},
	"BANJ": {
		"type": "buoy",
		"pos": {
			"lat": 39.778,
			"lng": -73.769
		},
		"title": "Barnegat,NJ",
		"stationStr": "BANJ",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "USACE"
	},
	"EHNC": {
		"type": "buoy",
		"pos": {
			"lat": 34.625,
			"lng": -72.617
		},
		"title": "East Hatteras,NC",
		"stationStr": "EHNC",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "NDBC"
	},
	"OBNC": {
		"type": "buoy",
		"pos": {
			"lat": 34.213,
			"lng": -76.946
		},
		"title": "Onslow bay Outer,NC",
		"stationStr": "OBNC",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CORMP"
	},
	"WH": {
		"type": "buoy",
		"pos": {
			"lat": 33.721,
			"lng": -78.015
		},
		"title": "Willimington Harbour,NC",
		"stationStr": "WH",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "SCRIPPS"
	},
	"FSNC": {
		"type": "buoy",
		"pos": {
			"lat": 33.436,
			"lng": -77.743
		},
		"title": "Frying Pan Shoals,NC",
		"stationStr": "FSNC",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "NDBC"
	},
	"SCNC": {
		"type": "buoy",
		"pos": {
			"lat": 32.501,
			"lng": -79.099
		},
		"title": "ShoutEast of Charleston,SC",
		"stationStr": "SCNC",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "NDBC"
	},
	"CNSC": {
		"type": "buoy",
		"pos": {
			"lat": 32.803,
			"lng": -79.624
		},
		"title": "Capers Neashore,SC",
		"stationStr": "CNSC",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CORMP"
	},
	"GRGA": {
		"type": "buoy",
		"pos": {
			"lat": 31.4,
			"lng": -80.868
		},
		"title": "Grays Reef, GA",
		"stationStr": "GRGA",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "NDBC"
	},
	"OFFL": {
		"type": "buoy",
		"pos": {
			"lat": 30.709,
			"lng": -81.292
		},
		"title": "Offshore Frenandina,FL",
		"stationStr": "OFFL",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "SCRIPPS"
	},
	"CCFL": {
		"type": "buoy",
		"pos": {
			"lat": 28.501,
			"lng": -80.184
		},
		"title": "East of Cape Canaveral,FL",
		"stationStr": "CCFL",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "NDBC"
	},
	"FLVA": {
		"type": "buoy",
		"pos": {
			"lat": 36.998,
			"lng": -76.087
		},
		"title": "First Landing,VA",
		"stationStr": "FLVA",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CBIBS"
	},
	"TSVA": {
		"type": "buoy",
		"pos": {
			"lat": 37.026,
			"lng": -76.151
		},
		"title": "Thimble Shoal,VA",
		"stationStr": "TSVA",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "USNavy"
	},
	"YSVA": {
		"type": "buoy",
		"pos": {
			"lat": 37.201,
			"lng": -76.266
		},
		"title": "York Spit,Va",
		"stationStr": "YSVA",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CBIBS"
	},
	"SPVA": {
		"type": "buoy",
		"pos": {
			"lat": 37.567,
			"lng": -76.257
		},
		"title": "Stingray Point,VA",
		"stationStr": "SPVA",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CBIBS"
	},
	"POMD": {
		"type": "buoy",
		"pos": {
			"lat": 38.033,
			"lng": -76.335
		},
		"title": "Potomac,MD",
		"stationStr": "POMD",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CBIBS"
	},
	"GRMD": {
		"type": "buoy",
		"pos": {
			"lat": 38.556,
			"lng": -76.415
		},
		"title": "Gooses Reef, MD",
		"stationStr": "GRMD",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CBIBS"
	},
	"SUMD": {
		"type": "buoy",
		"pos": {
			"lat": 39.54,
			"lng": -76.074
		},
		"title": "Susquehanna, MD",
		"stationStr": "SUMD",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CBIBS"
	},
	"PAMD": {
		"type": "buoy",
		"pos": {
			"lat": 39.152,
			"lng": -76.391
		},
		"title": "Patapsco, MD",
		"stationStr": "PAMD",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CBIBS"
	},
	"JAVA": {
		"type": "buoy",
		"pos": {
			"lat": 37.211,
			"lng": -76.787
		},
		"title": "Jamestown, VA",
		"stationStr": "JAVA",
		"hasWater": false,
		"hasWind": false,
		"hasValidation": false,
		"hasWaves": true,
		"agency": "CBIBS"
	}
};

let places = {
    "DC": {
        "displayName":"Washington, DC",
        "img":"/map/placeIcons/dc.png",
        "pos": {
            lat: 38.8545966284, lng: -77.0245558832
        },
        "zoom":12
    },
    "chesapeake": {
        "displayName":"Chesapeake",
        "img":"/map/placeIcons/chesapeake.png",
        "pos": {
            lat: 38.2, lng: -76.325
        },
        "zoom":8
    }
};