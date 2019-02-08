
d3.json("./data/buildings.json").then((data) => {
  console.log(data);
  data.forEach((d) => {
    d.height = +d.height;
  });
  
  var svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 500);

  
  var rects = svg.selectAll("rect")
    .data(data);

  rects.enter()
    .append("rect")
      .attr("x", (d, i) => {
        console.log(d);
        return (i * 50) + 25;
      })
      .attr("width", 30)
      .attr("height", (d) => {
        return d.height;
      })
      .attr("fill", "gray");
  
})

