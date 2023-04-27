<!-- <script lang="ts" setup></script> -->
<template>
   <div class="overflow-hidden rounded-lg shadow-lg">
  <div
    class="bg-neutral-50 py-3 px-5 dark:bg-neutral-700 dark:text-neutral-200">
    Line chart
  </div>
  <canvas class="p-10" id="chartLine"></canvas>
</div>
   
</template>
<script src="https://cdn.jsdelivr.net/npm/chart.js">




const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "hsl(217, 57%, 51%)",
        borderColor: "hsl(217, 57%, 51%)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const configLineChart = {
    type: "line",
    data,
    options: {},
  };

  var chartLine = new Chart(
    document.getElementById("chartLine"),
    configLineChart
  );
</script>
