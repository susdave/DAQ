$(document).ready(function(){
	$.ajax({
		url: "http://localhost/DAQsus/php/temperature.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var time1 = [];
			var temper = [];

			for(var i in data) {
				time1.push("Timestamp " + data[i].Timestamp);
				temper.push(data[i].Temp_val);
			}

			var chartdata = {
				labels: time1,
				datasets : [
					{
						label: 'Temperature',
						backgroundColor: 'rgba(200, 120, 0, 0.75)',
						borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data: temper
					}
				]
			};

			var ctx = $("#mytemp");

			var barGraph = new Chart(ctx, {
				type: 'line',
				data: chartdata
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});