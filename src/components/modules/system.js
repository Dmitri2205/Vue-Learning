    export default function systemem(){

      google.charts.load('current', {packages:['wordtree']});
      google.charts.setOnLoadCallback(drawChart);

     function drawChart(){
        var data = google.visualization.arrayToDataTable(
          [
           ['id', 'childLabel', 'parent', 'size', { role: 'style' }],
            [0,'Components',-1,1,"#004973"],
            [1,'MainScreen',0,1,"#5089FE"],
            [9999,'Store',0,1,"#9F00C7"],
            [2,'Panel',1,1,"#1EDB92"],
            [14,'panel__grid',2,3,"black"],
            [15,'panel__grid_table',2,3,"black"],
            [3,'Extensions',1,1,"#1EDB92"],
            [16,'Array',3,1,"black"],
            [17,'$store',3,1,"black"],
            [4,'Design',1,1,"#1EDB92"],
            [5,'Sales',1,1,"#1EDB92"],
            [18,'WraperTop.vue',5,1,"black"],
            [19,'WraperBottom.vue',5,1,"black"],
            [6,'Customers',1,1,"#1EDB92"],
            [7,'Marketing',1,1,"#1EDB92"],
            [20,'linechart.js',7,1,"black"],
            [21,'piechart.js',7,1,"black"],
            [22,'scatter.js',7,1,"black"],
            [8,'System',1,1,"#1EDB92"],
            [23,'system.js',8,1,"black"],
            [9,'Help',1,1,"#1EDB92"],
            [10,'Contacts',1,1,"#1EDB92"],
            [11,'Settings',1,1,"#1EDB92"],
            [12,'Theme',1,1,"#1EDB92"],
            [13,'Logout',1,1,"#1EDB92"]
          ]
        );

        var options = {
          wordtree: {
            format: 'explicit',
            width:"100%",
            height:"auto"
          }
        };

        var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
        chart.draw(data, options);
      }
    }