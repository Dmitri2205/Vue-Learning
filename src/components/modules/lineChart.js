export default function lineChart() {
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Год', 'Продажи', 'Расходы'],
          ['2017',  1000,      400],
          ['2018',  1170,      460],
          ['2019',  660,       1120],
          ['2020',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' },
          'chartArea':{left:'5px',to:0,width:'90%',height:'60%'}
        };

        var chart = new google.visualization.LineChart(document.getElementById('linechart'));

        chart.draw(data, options);
      };
    }