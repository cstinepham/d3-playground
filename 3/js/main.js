let margin = { top: 10, right: 20, bottom: 100, left: 100 };
let width = 600 - margin.left - margin.right;
let height = 400 - margin.bottom - margin.top;



d3.json("./data/revenues.json").then((data) => {
  console.log(data);
  data.forEach((d) => {
    d.revenue = +d.revenue;
    d.profit = +d.profit;
  });

  let y = d3.scaleLinear() 
    .domain([0, 54273])
    .range([0, height]);

  var g = d3.select("#chart-area").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



  var rects = g.selectAll("rect")
    .data(data);

  rects.enter()
    .append("rect")
    .attr("x", (d, i) => {
      return (i * 50) + 25;
    })
    .attr("width", 30)
    .attr("height", (d) => {
      return y(d.revenue);
    })
    .attr("fill", "pink")
})
