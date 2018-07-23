import React,{Component} from 'react'
import * as d3 from 'd3'

class PlayerGraph extends Component{

    activePlayersData = [
        {
            day: "MON",
            value: 10
        },
        {
            day: "TUE",
            value: 60
        },
        {
            day: "WED",
            value: 0
        },
        {
            day: "THU",
            value: 30
        },
        {
            day: "FRI",
            value: 30
        },
        {
            day: "SAT",
            value: 47 
        },
        {
            day: "SUN",
            value: 40
        },
    ]

    componentDidMount(){
        let margin = { 
            top: 20, 
            right: 20, 
            bottom: 30, 
            left:40 
        }

        let svg = d3.select(".graph")
            .append("svg")
            .attr("width", 800)
            .attr("height", 500)

        let g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")" )
            .attr("width", () =>{
                return 800 - margin.left - margin.right
            })
            .attr("height", () =>{
                return 500 - margin.top - margin.bottom
            })

        let arc = d3.arc()
            .innerRadius(3)
            .outerRadius(7)
            .startAngle(0)
            .endAngle(Math.PI * 2)

        let line = d3.line()
            .x( (d, i) =>{
                return x(d.day)
            })
            .y( d =>{
                return y(d.value)
            })

        let x = d3.scaleBand().rangeRound([0, 740]).padding(0.1);
        let y = d3.scaleLinear().rangeRound([440 - margin.bottom, 0]);
        x.domain(this.activePlayersData.map(d =>{return d.day}));
        y.domain([0, 60])

       let xAxis = g.append("g")
        .attr("transform", `translate(0,${ 440 - margin.bottom })`)
        .call(d3.axisBottom(x))

        let yAxis = g.append("g").call(d3.axisLeft(y))
        
        yAxis
            .attr("class", 'graph-text')

        xAxis
            .attr("class", 'graph-text')

        let area = d3.area()
                    .x( d  => { return x(d.day) })
                    .y0( 410 )
                    .y1( d => { return y(d.value) })

    let areaPath = g.append('path')
        .datum(this.activePlayersData)
        .attr("d", area)
        .attr("fill", "#287e7e")
        .attr("fill-opacity", 0.1)

        areaPath
            .attr("clip-path", "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" )
            .transition().duration(2500).delay( 2600 ).ease(d3.easePolyOut)
            .attr("clip-path", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)")

        let linePath = g.append("path")
            .datum(this.activePlayersData)
            .attr("fill", "none")
            .attr("stroke", "#287e7e")
            .attr("stroke-width", 2)
            .attr("d", line)

        let totalLength = linePath.node().getTotalLength() 

        linePath
            .attr("stroke-dasharray", 0 + " " + totalLength)
            .attr("stroke-dashoffset", 0)
            .transition()
            .duration( 2500 )
            .delay( 2000 )
            .ease( d3.easePolyOut )
            .attr("stroke-dasharray", totalLength + " " + totalLength)

        
        g.selectAll('#arc')
                .data(this.activePlayersData)
                .enter()
                .append("path")
                .attr("id","arc")
                .attr("d", arc)
                .style("fill", "297d7d")
                .attr("stroke", "white")
                .attr("stroke-width", 1.5 )
                .attr("transform", "translate(0,700)")
                .transition()
                .duration(2000).delay((d,i) => { return i * 71 })
                .ease(d3.easePolyOut)
                .attr("transform", d =>{
                    return "translate(" + ( x(d.day)) + "," + ( y(d.value)) + ")"
                })

        g.selectAll('circle')
                .data(this.activePlayersData)
                .enter()
                .append("circle")
                .attr("r", 3)
                .style("fill", "#f3f3f3")
                .attr("cx", 0)
                .attr("cy", 500)
                .transition()
                .duration(2000).delay((d, i) => { return i * 71 })
                .ease(d3.easePolyOut)
                .attr("cx", (d,i) => { return x(d.day) } )
                .attr("cy", d => { return y(d.value) })

    }

    render(){
        return(
            <div className = "graph-wrapper">
                <div className = "graph-title">
                    <h2>Active Players</h2>
                    <select>
                        <option value = "Daily">Daily</option>
                        <option value = "Weekly">Weekly</option>
                        <option value = "Monthly">Monthly</option>
                    </select>
                </div>
                <div>
                    <div className = "graph"></div>
                </div>
            </div>
        )
    }
}

export default PlayerGraph