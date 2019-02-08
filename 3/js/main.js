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
    .domain([0, d3.max(data, (d) => { return d.revenue})])
    .range([0, height]);

  let x = d3.scaleBand()
    .domain(data.map((d) => {return d.month}))
    .range([0, width])
    .paddingInner(0.2)
    .paddingOuter(0.7);

  var g = d3.select("#chart-area").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



  var rects = g.selectAll("rect")
    .data(data);

  rects.enter()
    .append("rect")
    .attr("x", (d) => {
      return x(d.month)
    })
    .attr("width", x.bandwidth)
    .attr("height", (d) => {
      return y(d.revenue);
    })
    .attr("fill", "pink")
})
