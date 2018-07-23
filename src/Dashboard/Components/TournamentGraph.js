import React,{ Component } from 'react'
import * as d3 from 'd3'

class TournamentGraph extends Component{

    tournamentData = [
        {
            month: "JAN",
            value: 450
        },
        {
            month: "FEB",
            value: 750
        },
        {
            month: "MAR",
            value: 600
        },
        {
            month: "APR",
            value: 900
        },
        {
            month: "MAY",
            value: 450
        },
        {
            month: "JUN",
            value: 600
        },
        {
            month: "JULY",
            value: 300
        },
    ]

    gridLineData = [
        150,
        300,
        450,
        600,
        750,
        900
    ]

    componentDidMount(){

    let ArrMaker = obj => {
            let arr = []
            for (let i in obj){
                arr.push(obj[i].value)
            }
            return arr
        }

        const svgData = {
            width: 800,
            height: 500,
        }
    
        const margin = {
            top: 40,
            right: 20,
            bottom: 50,
            left: 50
        }

       let make_x_gridlines = () => {
            return d3.axisLeft(y).ticks(6)
        }

        let gridLines = d3.line()
                .x( () =>{
                   return svgData.width 
                })
                .y(d => {
                    return d
                })

        const tournamentArc = d3.arc()
                .innerRadius(3)
                .outerRadius(7)
                .startAngle(0)
                .endAngle(Math.PI * 2)

        let svg = d3.select(".tournament-graph")
            .append("svg")
            .attr("width" , svgData.width)
            .attr("height", svgData.height)
            .attr("class", "tournament-svg")

        const g = d3.select(".tournament-svg")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.bottom + ")")

        let tournamentLine = d3.line()
            .x( d => {
                return x(d.month)
            })
            .y( d =>{
                return y(d.value)
            })

            const x = d3.scaleBand().rangeRound([0, svgData.width - margin.left - margin.top]).padding(0.1);
            const y = d3.scaleLinear().rangeRound([svgData.height - margin.top - margin.bottom, 0])
            x.domain(this.tournamentData.map(d => { return d.month }))
            y.domain([0, d3.max(ArrMaker(this.tournamentData))])

        // g.selectAll('line')
        //     .data(this.gridLineData)
        //     .enter()
        //     .append('line')
        //     .attr("x1", 0)
        //     .attr("y1", d => {
        //         return d
        //     })
        //     .attr("y2", (d, i) =>{
        //         return y(d[i])
        //     })
        //     .attr("x2", () => {
        //         return svgData.width - margin.left - margin.right
        //     })
        //     .attr("stroke-width", 2)
        //     .attr("stroke", "black");

        g.append("g")
            .call(make_x_gridlines().tickSize(-svgData.width + margin.left + margin.right).tickFormat(""))

        const xAxis = g.append("g")
                .call(d3.axisBottom(x))
                .attr("class", 'graph-text')
                .attr("transform", "translate(0," + (svgData.height - margin.bottom - margin.top) + ")")
        const yAxis = g.append("g")
        .call(d3.axisLeft(y)
        .tickValues([300, 600, 900]).ticks(6))
        .attr("class", 'graph-text')

        let area = d3.area()
        .x( d  => { return x(d.month) })
        .y0( 410 )
        .y1( d => { return y(d.value) })

        let areaPath = g.append('path')
        .datum(this.tournamentData)
        .attr("d", area)
        .attr("fill", "#090a11")
        .attr("fill-opacity", 0.1)

        areaPath
        .attr("clip-path", "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" )
        .transition().duration(2500).delay( 2600 ).ease(d3.easePolyOut)
        .attr("clip-path", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)")

        let tournamentLinePath = g.append('path')
            .datum(this.tournamentData)
            .attr("d", tournamentLine)
            .attr("stroke", "#090a11")
            .attr("stroke-width", 2)
            .attr("fill", "none")

        const totalLength = tournamentLinePath.node().getTotalLength()
        console.log(totalLength)

        tournamentLinePath
                .attr("stroke-dasharray", 0 + " " + totalLength)
                .attr("stroke-dashoffset", 0)
                .transition()
                .duration ( 2500 )
                .delay( 2000 )
                .ease( d3.easePolyOut )
                .attr("stroke-dasharray", totalLength + " " + totalLength)

            g.selectAll('.tournament-arcs')
                .data(this.tournamentData)
                .enter()
                .append('path')
                .attr('d', tournamentArc)
                .style('fill', '#1c344c')
                .attr("stroke", "white")
                .attr("stroke-width", 1.5 )
                .attr("transform", "translate(0," + (svgData.height + 200) + ")" )
                .transition()
                .duration(2500)
                .delay((d, i) =>{ return i * 71 })
                .ease(d3.easePolyOut)
                .attr("transform", d =>{
                    return "translate(" + (x(d.month)) + "," + ( y(d.value)) + ")"
                })

                g.selectAll('circle')
                .data(this.tournamentData)
                .enter()
                .append('circle')
                .style("fill", "#f3f3f3")
                .attr("r", 3)
                .attr("cx", 0)
                .attr("cy", () =>{
                    return svgData.height + 200
                })
                .transition()
                .duration(2500)
                .delay((d, i) => { return i * 71 })
                .ease(d3.easePolyOut)
                .attr("cx", d =>{
                    return x(d.month)
                })
                .attr("cy", d =>{
                    return y(d.value)
                })

        }

    render(){
        return(
            <div className = "graph-wrapper">
                <div className = "graph-title">
                    <h2>Active Tournaments</h2>
                    <select>
                        <option value = "Daily">Daily</option>
                        <option value = "Weekly">Weekly</option>
                        <option value = "Monthly">Monthly</option>
                        Monthly
                    </select>
                </div>
                <div>
                    <div className = "graph tournament-graph"></div>
                </div>
            </div>
        )
    }
}

export default TournamentGraph