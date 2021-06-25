// Real Time chart
var data_ph = [], 
    data_tds = [], 
    data_watertemperature = [], 
    data_airtemperature = [], 
    data_airhumidity = [], 
    data_waterturbidity = [], 
    data_light = [], 
    totalPoints = 20;

function getRandomData(jenis, a, b) {
    data = []
    if (jenis == 1){
        data = data_ph;
    }
    else if (jenis == 2){
        data = data_tds;
    }
    else if (jenis == 3){
        data = data_watertemperature;
    }
    else if (jenis == 4){
        data = data_airtemperature;
    }
    else if (jenis == 5){
        data = data_airhumidity;
    }
    else if (jenis == 6){
        data = data_waterturbidity;
    }
    else if (jenis == 7){
        data = data_light;
    }

    if (data.length > 0)
        data = data.slice(1);

    // Do a random walk
    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : a,
            y = prev + Math.random() * 10 - b;
        if (y < 0) {
            y = 0;
        } else if (y > 100) {
            y = 100;
        }

        data.push(y);
    }

    // Zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
    }


    if (jenis == 1){
        data_ph = data;
    }
    else if (jenis == 2){
        data_tds = data;
    }
    else if (jenis == 3){
        data_watertemperature = data;
    }
    else if (jenis == 4){
        data_airtemperature = data;
    }
    else if (jenis == 5){
        data_airhumidity = data;
    }
    else if (jenis == 6){
        data_waterturbidity = data;
    }
    else if (jenis == 7){
        data_light = data;
    }

    return res;
}

// Set up the control widget
var updateInterval = 1000;
$("#updateInterval").val(updateInterval).change(function () {
    var v = $(this).val();
    if (v && !isNaN(+v)) {
        updateInterval = +v;
        if (updateInterval < 1) {
            updateInterval = 1;
        } else if (updateInterval > 3000) {
            updateInterval = 3000;
        }
        $(this).val("" + updateInterval);
    }
});

var chartph = $.plot("#chartph", [ getRandomData(1, 50, 5) ], {
    series: {
        shadowSize: 0   // Drawing is faster without shadows
    },
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        show: false
    },
    colors: ["#fb9678"],
    grid: {
        color: "#AFAFAF",
        hoverable: true,
        borderWidth: 0,
        backgroundColor: '#FFF'
    },
    tooltip: true,
    tooltipOpts: {
        content: "Y: %y",
        defaultTheme: false
    }
});

var charttds = $.plot("#charttds", [ getRandomData(2, 40, 4) ], {
    series: {
        shadowSize: 0   // Drawing is faster without shadows
    },
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        show: false
    },
    colors: ["#fb9678"],
    grid: {
        color: "#AFAFAF",
        hoverable: true,
        borderWidth: 0,
        backgroundColor: '#FFF'
    },
    tooltip: true,
    tooltipOpts: {
        content: "Y: %y",
        defaultTheme: false
    }
});

var chartwatertemperature = $.plot("#chartwatertemperature", [ getRandomData(3, 30, 3) ], {
    series: {
        shadowSize: 0   // Drawing is faster without shadows
    },
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        show: false
    },
    colors: ["#fb9678"],
    grid: {
        color: "#AFAFAF",
        hoverable: true,
        borderWidth: 0,
        backgroundColor: '#FFF'
    },
    tooltip: true,
    tooltipOpts: {
        content: "Y: %y",
        defaultTheme: false
    }
});

var chartairtemperature = $.plot("#chartairtemperature", [ getRandomData(4, 60, 6) ], {
    series: {
        shadowSize: 0   // Drawing is faster without shadows
    },
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        show: false
    },
    colors: ["#fb9678"],
    grid: {
        color: "#AFAFAF",
        hoverable: true,
        borderWidth: 0,
        backgroundColor: '#FFF'
    },
    tooltip: true,
    tooltipOpts: {
        content: "Y: %y",
        defaultTheme: false
    }
});

var chartairhumidity = $.plot("#chartairhumidity", [ getRandomData(5, 20, 2) ], {
    series: {
        shadowSize: 0   // Drawing is faster without shadows
    },
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        show: false
    },
    colors: ["#fb9678"],
    grid: {
        color: "#AFAFAF",
        hoverable: true,
        borderWidth: 0,
        backgroundColor: '#FFF'
    },
    tooltip: true,
    tooltipOpts: {
        content: "Y: %y",
        defaultTheme: false
    }
});

var chartwaterturbidity = $.plot("#chartwaterturbidity", [ getRandomData(6, 40, 4) ], {
    series: {
        shadowSize: 0   // Drawing is faster without shadows
    },
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        show: false
    },
    colors: ["#fb9678"],
    grid: {
        color: "#AFAFAF",
        hoverable: true,
        borderWidth: 0,
        backgroundColor: '#FFF'
    },
    tooltip: true,
    tooltipOpts: {
        content: "Y: %y",
        defaultTheme: false
    }
});

var chartlight = $.plot("#chartlight", [ getRandomData(7, 60, 6) ], {
    series: {
        shadowSize: 0   // Drawing is faster without shadows
    },
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        show: false
    },
    colors: ["#fb9678"],
    grid: {
        color: "#AFAFAF",
        hoverable: true,
        borderWidth: 0,
        backgroundColor: '#FFF'
    },
    tooltip: true,
    tooltipOpts: {
        content: "Y: %y",
        defaultTheme: false
    }
});

function update() {
    chartph.setData([getRandomData(1, 50, 5)]);
    charttds.setData([getRandomData(2, 40, 4)]);
    chartwatertemperature.setData([getRandomData(3, 30, 3)]);
    chartairtemperature.setData([getRandomData(4, 60, 6)]);
    chartairhumidity.setData([getRandomData(5, 20, 2)]);
    chartwaterturbidity.setData([getRandomData(6, 40, 4)]);
    chartlight.setData([getRandomData(7, 60, 6)]);

    // Since the axes don't change, we don't need to call plot.setupGrid()
    chartph.draw();
    charttds.draw();
    chartwatertemperature.draw();
    chartairtemperature.draw();
    chartairhumidity.draw();
    chartwaterturbidity.draw();
    chartlight.draw();

    setTimeout(update, updateInterval);
}

update();
