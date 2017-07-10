$(document).ready(function () {
	var chart = $("#bar-chartcanvas");
	
	var jumlah = {
		labels : [""],
		datasets : [
			{
				label : "Brunei Darussalam",
				data : [301456],
				backgroundColor : [
					"rgb(220, 110, 110)"
				],
				borderColor : [
					"rgb(161, 54, 54)"
				],
				borderWidth : 1
			},
			{
				label : "Indonesia",
				data : [50004175],
				backgroundColor : [
					"rgb(238, 181, 194)"
				],
				borderColor : [
					"rgb(232, 120, 146)"
				],
				borderWidth : 1
			},
			{
				label : "Malaysia",
				data : [20637217],
				backgroundColor : [
					"rgb(210, 139, 210)"
				],
				borderColor : [
					"rgb(181, 75, 181)"
				],
				borderWidth : 1
			},
			{
				label : "Singapura",
				data : [4608852],
				backgroundColor : [
					"rgb(181, 158, 229)"
				],
				borderColor : [
					"rgb(151, 113, 228)"
				],
				borderWidth : 1
			},
			{
				label : "Vietnam",
				data : [47499416],
				backgroundColor : [
					"rgb(184, 205, 253)"
				],
				borderColor : [
					"rgb(128, 166, 255)"
				],
				borderWidth : 1
			},
			{
				label : "Laos",
				data : [1038676],
				backgroundColor : [
					"rgb(209, 247, 255)"
				],
				borderColor : [
					"rgb(169, 242, 255)"
				],
				borderWidth : 1
			},
			{
				label : "Thailand",
				data : [27369176],
				backgroundColor : [
					"rgb(148, 205, 178)"
				],
				borderColor : [
					"rgb(103, 203, 156)"
				],
				borderWidth : 1
			},
			{
				label : "Filipina",
				data : [42623234],
				backgroundColor : [
					"rgb(183, 235, 172)"
				],
				borderColor : [
					"rgb(144, 233, 126)"
				],
				borderWidth : 1
			},
			{
				label : "Myanmar",
				data : [1276315],
				backgroundColor : [
					"rgb(199, 213, 108)"
				],
				borderColor : [
					"rgb(188, 210, 43)"
				],
				borderWidth : 1
			},
			{
				label : "Kamboja",
				data : [1628113],
				backgroundColor : [
					"rgb(225, 203, 117)"
				],
				borderColor : [
					"rgb(222, 190, 64)"
				],
				borderWidth : 1
			},

		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Pengguna Internet Tahun 2015",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "right"
		},
		scales : {
			yAxes : [{
				ticks : {
				beginAtZero: true
				}
			}]
		}
	};

	var chart = new Chart(chart, {
		type : "bar",
		data : jumlah,
		options : options
	});

});