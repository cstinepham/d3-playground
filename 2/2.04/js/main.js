var svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 500);


var circle = svg.append("circle")
  .attr("cx", 200)
  .attr("cy", 200)
  .attr("r", 100)
  .attr("fill", "blue");

var rectangle = svg.append("rect")
  .attr("x", 50)
  .attr("y", 20)
  .attr("width", 50)
  .attr("height", 200)
  .attr("fill", "pink");