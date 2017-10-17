$(document).ready(function(){
	$.ajax({
		url: "http://localhost/DAQsus/php/moisture.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var time = [];
			var moisture = [];

			for(var i in data) {
				time.push("Timestamp: " + data[i].Timestamp);
				moisture.push(data[i].Moist_val);
			}

			var chartdata = {
				labels: time,
				datasets : [
					{
						label: 'Moisture',
						backgroundColor: 'rgba(0, 120, 200, 0.75)',
						borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data: moisture
					}
				]
			};

			var ctx = $("#mymoist");

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