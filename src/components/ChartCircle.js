import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ChartCircle = ({ openModal, dData}) => {
    const d3Container = useRef(null);

    useEffect(() => {
        const getColor = (dept) => {
            switch (dept) {
                case "Administration":
                    return "blue";
                case "Marketing":
                    return "purple";
                case "Development":
                    return "#ffc400";
                default:
                    return "green";
            }
        };
        const svg = d3.select(d3Container.current);

        d3.selectAll("g").remove();
        d3.selectAll("circle").remove()
        d3.selectAll("text").remove()
    
        const g = svg
            .append("g")
            .selectAll("text")
            .data(dData)
            .attr("transform", function (d, i) { return "translate(0,0)"; });

        g.enter().append("circle")
            .attr("cx", function (d, i) {
                let place = (i+1)%5
                if(place === 0 ){ place = 5}
                return 275*place;
            })
            .attr("cy", function (d, i) { 
                let row = parseInt((i)/5)
                return (300*(row+1));
            })
            .attr("r", function (d) { return "130"; })
            .attr("fill", function (d, i) { return getColor(d.department) })
            .attr("id", function (d) { return d.id; })
            .attr("cursor", "pointer")
            .on("click", function (d) { openModal(d, d3.select(this).attr('id')) });
    
        g.enter().append("text")
            .attr("x", function (d, i) { 
                let place = (i+1)%5
                if(place === 0 ){ place = 5}
                return (275*place)-50;
            })
            .attr("y", function (d, i){
                let row = parseInt((i)/5)
                return (300*(row+1))-30;
            })
            .attr("font-size", "20px")
            .attr("font-family", "sans-serif")
            .style('fill', 'white')
            .attr("cursor", "pointer")
            .attr("id", function (d) { return d.id; })
            .text((d) => { return d.name; })
            .on("click", function (d) { openModal(d, d3.select(this).attr('id')) });

        g.enter().append("text")
            .attr("x", function (d, i) { 
                let place = (i+1)%5
                if(place === 0 ){ place = 5}
                return (275*place)-50;
            })
            .attr("y", function (d, i){
                let row = parseInt((i)/5)
                return (300*(row+1));
            })
            .attr("font-size", "17px")
            .attr("font-family", "sans-serif")
            .style('fill', 'white')
            .attr("cursor", "pointer")
            .attr("id", function (d) { return d.id;})
            .text((d) => { return d.designation; })
            .on("click", function (d) { openModal(d, d3.select(this).attr('id')) });

        g.enter().append("text")
            .attr("id", function (d) { return d.department; })
            .attr("x", function (d, i) { 
                let place = (i+1)%5
                if(place === 0 ){ place = 5}
                return (275*place)-50;
            })
            .attr("y", function (d, i){
                let row = parseInt((i)/5)
                return (300*(row+1))+30;
            })
            .attr("font-size", "17px")
            .attr("font-family", "sans-serif")
            .style('fill', 'white')
            .attr("cursor", "pointer")
            .attr("id", function (d) { return d.id;})
            .text((d) => { return d.department; })
            .on("click", function (d) { openModal(d, d3.select(this).attr('id')) });

        return function cleanup() {
            g.exit()
            .remove();
        }
          
    }, [dData, openModal]);

    return (
      <div>
        <h1> Employee Dashboard </h1>
        <svg
            className="d3-component"
            width={window.screen.width-50}
            height={5500}
            ref={d3Container}
        />
      </div>
    );
  }
  
  export default ChartCircle;