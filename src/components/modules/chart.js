export default function chart() {
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['String', 'Num'],
          ['Расширения',     8],
          ['Дизайн',      2],
          ['Продажи',  13],
          ['Покупатели', 13],
          ['Маркетинг',    7]
        ]);

        var options = {
          'title': 'Lorem ipsum dolor.',
          'is3D': false,
          'pieHole': 0.5,
          'height':300,
          'legend':'left',
          'chartArea':{left:'10px',top:'10px',width:'90%',height:'80%'}          
          };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
    }