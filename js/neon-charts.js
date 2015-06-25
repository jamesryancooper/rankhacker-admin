/**
 *	Neon Charts Scripts
 *
 *	Developed by Arlind Nushi - www.laborator.co
 */

;(function($, window, undefined)
{
	"use strict";
	
	$(document).ready(function()
	{
	
		// Morris.js Graphs
		if(typeof Morris != 'undefined')
		{
			// Bar Charts
			Morris.Bar({
				element: 'chart3',
				axes: true,
				data: [
					{x: 'January', y: getRandomInt(1,10), z: getRandomInt(1,10), a: getRandomInt(1,10)},
					{x: 'February', y: getRandomInt(1,10), z: getRandomInt(1,10), a: getRandomInt(1,10)},
					{x: 'March', y: getRandomInt(1,10), z: getRandomInt(1,10), a: getRandomInt(1,10)},
					{x: 'April', y: getRandomInt(1,10), z: getRandomInt(1,10), a: getRandomInt(1,10)},
					{x: 'May', y: getRandomInt(1,10), z: getRandomInt(1,10), a: getRandomInt(1,10)},
					{x: 'June', y: getRandomInt(1,10), z: getRandomInt(1,10), a: getRandomInt(1,10)}
				],
				xkey: 'x',
				ykeys: ['y', 'z', 'a'],
				labels: ['Blog', 'Social', 'Video'],
				barColors: ['#707f9b', '#455064', '#242d3c']
			});
			
			// Stacked Bar Charts
			Morris.Bar({
				element: 'chart4',
				data: [
					{x: 'January', y: getRandomInt(1,10), z: getRandomInt(1,20), a: getRandomInt(1,20)},
					{x: 'February', y: getRandomInt(1,11), z: getRandomInt(1,10), a: getRandomInt(1,14)},
					{x: 'March', y: getRandomInt(1,20), z: getRandomInt(1,20), a: getRandomInt(1,19)},
					{x: 'April', y: getRandomInt(1,15), z: getRandomInt(1,15), a: getRandomInt(1,11)},
					{x: 'May', y: getRandomInt(1,15), z: getRandomInt(1,15), a: getRandomInt(1,11)},
					{x: 'June', y: getRandomInt(1,15), z: getRandomInt(1,15), a: getRandomInt(1,11)}
				],
				xkey: 'x',
				ykeys: ['y', 'z', 'a'],
				labels: ['Healthy', 'Suspicious', 'Toxic'],
				stacked: true,
				barColors: ['#00a651', '#f26c4f', '#d13c3e']
			});
			
			// Donut Colors
			Morris.Donut({
				element: 'chart6',
				data: [
					{label: "Do Follow", value: 65},
					{label: "No Follow", value: 35}
				],
				labelColor: '#303641',
				colors: ['#00a651', '#f26c4f']
			});
			
			// Donut Formatting
			Morris.Donut({
				element: 'chart7',
				data: [
					{value: 70, label: 'Healthy', formatted: 'at least 70%' },
					{value: 15, label: 'Suspicious', formatted: 'approx. 15%' },
					{value: 15, label: 'Toxic', formatted: 'approx. 15%' }
				],
				formatter: function (x, data) { return data.formatted; },
				colors: ['#00a651', '#f26c4f', '#d13c3e']
			});
			
			
			// Line Chart
			var day_data = [
				{"elapsed": "I", "value": 34},
				{"elapsed": "II", "value": 24},
				{"elapsed": "III", "value": 3},
				{"elapsed": "IV", "value": 12},
				{"elapsed": "V", "value": 13},
				{"elapsed": "VI", "value": 22},
				{"elapsed": "VII", "value": 5},
				{"elapsed": "VIII", "value": 26},
				{"elapsed": "IX", "value": 12},
				{"elapsed": "X", "value": 19}
			];
			
			// Goals
			var decimal_data = [];
			
			for (var x = 0; x <= 360; x += 10) {
				decimal_data.push({
				x: x,
				y: Math.sin(Math.PI * x / 180).toFixed(4)
				});
			}

		}
		
		
		// Peity Graphs
		if($.isFunction($.fn.peity))
		{
			$("span.pie").peity("pie", {colours: ['#0e8bcb', '#57b400'], width: 150, height: 25});
			$(".panel span.line").peity("line", {width: 150});
			$("span.bar").peity("bar", {width: 150});
			
			var updatingChart = $(".updating-chart").peity("line", { width: 150 })

			setInterval(function() 
			{
				var random = Math.round(Math.random() * 10);
				var values = updatingChart.text().split(",");
				
				values.shift()
				values.push(random);
				
				updatingChart.text(values.join(",")).change();
				$("#peity-right-now").text(random + ' user' + (random != 1 ? 's' : ''));
				
			}, 1000)
		}
		
		
	});
	
})(jQuery, window);


			
function data(offset) {
	var ret = [];
	for (var x = 0; x <= 360; x += 10) {
		var v = (offset + x) % 360;
		ret.push({
			x: x,
			y: Math.sin(Math.PI * v / 180).toFixed(4),
			z: Math.cos(Math.PI * v / 180).toFixed(4),
		});
	}
	return ret;
}
 
 
function getRandomInt(min, max) 
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}