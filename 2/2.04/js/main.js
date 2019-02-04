var svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 500);


var circle = svg.append("circle")
  .attr("cx", 200)
  .attr("cy", 200)
  .attr("r", 100)
  .attr("fill", blue);