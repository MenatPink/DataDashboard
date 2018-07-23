import React from 'react'
import Arrowleft from './../Images/ArrowLeft.png';
import Arrowright from './../Images/ArrowRight.png';
import * as d3 from 'd3';

class PlayerStats extends React.Component{

    data = [ 58, 75, 30, 97,]
    dataColor = ['#56606e','#91c46b','#56606e','#91c46b']

    svgData = {
        width: 175,
        height: 175,
        radius: 80
    }

    tau = Math.PI * 2

    setContext = (wrapper, integerValue) => {

        let svg = d3.select(wrapper)
            .append("svg")
            .attr("width", this.svgData.width)
            .attr("height", this.svgData.height)
        
        let arc = d3.arc()
            .innerRadius(65)
            //Test comment
            .outerRadius(this.svgData.radius)
            .startAngle(0)
            .endAngle(this.tau)
        
        svg.append("path")
        .attr("d", arc)
        .attr("fill", `#d2d4d8`)
        .attr("transform", "translate(87,88)");
        
    }

    setForegroundArc = (svg, value, color) => {

        let arc = d3.arc()
            .innerRadius(65)
            .outerRadius(this.svgData.radius)

        let arcTween = newAngle =>{
                return d => {
                    let interpolate = d3.interpolate(d.startAngle, newAngle);
                    return t => {
                        d.endAngle = interpolate(t);
                        return arc(d)
                    }
                }
            }

        let foreground = d3.select(svg)
                .append("path")
                .datum({startAngle: 0})
                .attr("d", arc)
                .attr("fill", color)
                .attr("transform", "translate(87,88)");

        foreground.transition().duration(2500).attrTween("d", arcTween(this.tau * 0.01 * value))

        let text = d3.select(svg)
                .append('text')
                .text(value + "%")
                .attr("transform", "translate(-33 15)")
                .attr("x", this.svgData.width/2)
                .attr("y", this.svgData.height/2)
                .attr("font-size", "40px")
                .style("fill", "#343a41")
                .style("font-family", "Montserrat")
                .style("font-weight", "bold")

    }

    thisupdateArc = () => {

    }
    

    componentDidMount(){
    const wrapper = document.querySelectorAll(".svg")
        wrapper.forEach((wrapper, i) =>{
            console.log(String(this.data[i]))
            this.setContext(wrapper, this.data[i])
        })
    const pieChartWrapper = document.querySelector(".piechart-wrapper")
    const svg = pieChartWrapper.querySelectorAll("svg");
    let a = 0;
    svg.forEach((svg, i)=> {
        this.setForegroundArc(svg, this.data[i], this.dataColor[i])
        })
    }

    render(){
        return(
            <div className = "graph-wrapper player-stats">
                <div className = "graph-title">
                    <h2>Player Statistics</h2>
                    <div>
                        <button>
                            <img src = { Arrowleft }/>
                        </button>
                        <button>
                            <img src = { Arrowright }/>
                        </button>
                    </div>
                </div>
                <div className = "piechart-wrapper">
                    <div className = "piechart">
                        <div className = "svg"></div>
                        <p>New Players</p>
                    </div>
                    <div className = "piechart">
                        <div className = "svg"></div>
                        <p>Revisited</p>
                    </div>
                    <div className = "piechart">
                        <div className = "svg"></div>
                        <p>Commented</p>
                    </div>
                    <div className = "piechart">
                        <div className = "svg"></div>
                        <p>Active Players</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerStats