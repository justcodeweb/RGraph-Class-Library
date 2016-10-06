﻿var graphdata;

var chartData;
var labelData;
var colorData;
var opt;

function set() {

    opt = {

        tooltips: labelData,
        labels: labelData,
        colors: colorData,
        textAccessible: false,
        gutterBottom: 120,
        gutterTop: 120,
        gutterLeft: 120,
        gutterRight: 120



    };
}

function chartPieChart(response, canvasId, graphTitle, flag) {

    /// <signature>
    /// <summary>Function to draw pie chart on given Canvas Id</summary>
    /// <param name="result">Data generated by RGraph class (generally response of webmethod)</param>
    /// <param name="canvasId" type="string">Canvas element Id</param>
    /// <param name="graphTitle" type="string">Graph Title</param>
    /// <param name="flag" type="boolean">Is 3d then True else False</param>
    /// </signature>
    graphdata = response.d;

    chartData = eval(graphdata.Data);
    labelData = eval(graphdata.Label);
    colorData = eval(graphdata.Color);

    set();
    if (flag)
        opt.variant = 'pie3d';

    opt.radius = 80;


    opt.title = graphTitle;
    var pie = new RGraph.Pie({
        id: canvasId,
        data: chartData,
        options: opt
    }).draw();
}


function chartBarChart(response, canvasId, graphTitle, flag) {

    /// <signature>
    /// <summary>Function to draw Bar chart on given Canvas Id</summary>
    /// <param name="result">Data generated by RGraph class (generally response of webmethod)</param>
    /// <param name="canvasId" type="string">Canvas element Id</param>
    /// <param name="graphTitle" type="string">Graph Title</param>
    /// <param name="flag" type="boolean">Is 3d then True else False</param>
    /// </signature>
    graphdata = response.d;

    chartData = eval(graphdata.Data);
    labelData = eval(graphdata.Label);
    colorData = eval(graphdata.Color);
    set();
    if (flag)
        opt.variant = '3d';
    else
        opt.variant = 'bar';

    opt.gutterLeft = 45;
    opt.textSize = 16;
    opt.title = graphTitle;
    opt.shadow = false;
    var Bar = new RGraph.Bar({
        id: canvasId,
        data: chartData,
        options: opt
    }).draw();
}



function chartLineChart(response, canvasId, graphTitle) {

    /// <signature>
    /// <summary>Function to draw Bipolar chart on given Canvas Id</summary>
    /// <param name="result">Data generated by RGraph class (generally response of webmethod)</param>
    /// <param name="canvasId" type="string">Canvas element Id</param>
    /// <param name="graphTitle" type="string">Graph Title</param>
    /// </signature>
    graphdata = response.d;

    chartData = eval(graphdata.Data);
    labelData = eval(graphdata.Label);
    colorData = eval(graphdata.Color);
    set();


    opt.title = graphTitle;
    opt.shadow = false;
    var line = new RGraph.Line({
        id: canvasId,
        data: chartData,
        options: opt
    }).draw();

}