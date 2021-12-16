google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Temperature'],
          [ '11 Mon',      -6],
          [ '12 Tue',      -10],
          [ '13 Web',     -10],
          [ '14 Thu',      -5],
          [ '15 Fri',      3],
          [ '16 Sat',    1],
          ['17 Sun', 2]
        ]);

        var options = {

          vAxis: {minValue: -15, maxValue: 15},
          legend: 'none',
          margin:'auto',
          'chartArea': {'width': '100%', 'height': '80%'},
          curveType: 'function',
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
