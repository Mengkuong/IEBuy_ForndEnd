<template>
   <div class="phppot-container">
        <h1>Responsive Pie Chart</h1>
        <div>
            <canvas id="pie-chart"></canvas>
        </div>
    </div>
    
  </template>

 
<script>

  new Chart(document.getElementById("pie-chart"), {
      type : 'pie',
      data : {
          labels : [ "Lion", "Horse", "Elephant", "Tiger",
                  "Jaguar" ],
          datasets : [ {
              backgroundColor : [ "#51EAEA", "#FCDDB0",
                      "#FF9D76", "#FB3569", "#82CD47" ],
              data : [ 418, 263, 434, 586, 332 ]
          } ]
      },
      options : {
          title : {
              display : true,
              text : 'Chart JS Pie Chart Example'
          }
      }
  });
</script>