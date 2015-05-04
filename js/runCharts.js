var runcharts = function () {
    window.chartsInitialized = true;

    var fillOne = $('#chart-one').data('fill');
    var fillTwo = $('#chart-two').data('fill');
    var fillThree = $('#chart-three').data('fill');
    var fillFour = $('#chart-four').data('fill');

    var color1 = "rgba(255,255,255,0.9)";
    var color2 = "rgba(255,255,255,0.5)";

        var dataChartOne = [
            {
                value: 100 - fillOne,
                label: "Introvert",
                color: color1
            },
            {
                value: fillOne,
                label: "Extrovert",
                color: color2
            },
        ];

        var dataChartTwo = [
            {
                value: 100 - fillTwo,
                label: "Sensing",
                color: color1
            },
            {
                value: fillTwo,
                label: "Intuition",
                color: color2
            },
        ];
        var dataChartThree = [
            {
                value: 100 - fillThree,
                label: "Thinking",
                color: color1
            },
            {
                value: fillThree,
                label: "Feeling",
                color: color2
            },
        ];

        var dataChartFour = [
            {
                value: 100 - fillFour,
                label: "Judging",
                color: color1
            },
            {
                value: fillFour,
                label: "Perceiving",
                color: color2
            },
        ];

        var chartOne = document.getElementById("chart-one").getContext("2d");
        var chartTwo = document.getElementById("chart-two").getContext("2d");
        var chartThree = document.getElementById("chart-three").getContext("2d");
        var chartFour = document.getElementById("chart-four").getContext("2d");

        window.myDoughnut = new Chart(chartOne).Doughnut(dataChartOne, {
            responsive : true,
            percentageInnerCutout : 92,
            segmentShowStroke : false,
            showTooltips: false,
        });
        window.myDoughnut = new Chart(chartTwo).Doughnut(dataChartTwo, {
            responsive : true,
            percentageInnerCutout : 92,
            segmentShowStroke : false,
            showTooltips: false,
        });
        window.myDoughnut = new Chart(chartThree).Doughnut(dataChartThree, {
            responsive : true,
            percentageInnerCutout : 92,
            segmentShowStroke : false,
            showTooltips: false,
        });
        window.myDoughnut = new Chart(chartFour).Doughnut(dataChartFour, {
            responsive : true,
            percentageInnerCutout : 92,
            segmentShowStroke : false,
            showTooltips: false,
        });
}
