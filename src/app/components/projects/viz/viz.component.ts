import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-viz',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.scss']
})
export class VizComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    this.createviz();
  }



 private createviz():void{
  const scale = 3
  const textOffset = 10
  
  let height = 600;
  let width = 800;
    
    const data = {
      nodes: [
        {id: "UX & Research", group: 1, size: 10},
        {id: "User Interface", group: 1, size: 10},
        {id: "Branding", group: 1, size: 10},
        {id: "Web", group: 1, size: 10},
        {id: "Illustration", group: 1, "size": 10},
        {id: "Woofme", group: 1, size: 5},
        {id: "BioViz", group: 2, size: 5},
        {id: "Leelo", group: 1, size: 5},
        {id: "Banner", group: 1, size: 5},
        {id: "Filmmate", group: 1, size: 5},
        {id: "Projects", group: 1, size: 5},
        {id: "Vibo", group: 1, size: 5},
        {id: "Mercatruck", group: 1, size: 5},  
      ],
      links: [
        {source: "Woofme", target: "UX & Research", value: 1},
        {source: "BioViz", target: "UX & Research", value: 8},
        {source: "Filmmate", target: "UX & Research", value: 2},
        {source: "Projects", target: "Illustration", value: 1},
        {source: "Leelo", target: "User Interface", value: 10},
        {source: "Banner", target: "User Interface", value: 1},
        {source: "Mercatruck", target: "Branding", value: 1},
        {source: "Vibo", target: "Web", value: 1},
      ]
    }
    console.log("dataset is ...",data);

    
    const simulation = d3.forceSimulation([data.nodes])
      
      simulation
         .nodes(data.nodes)
         .force("link",  d3.forceLink(data.links).id(d => d.id))
         .force("charge", d3.forceManyBody())
         .force("x", d3.forceX())
         .force("y", d3.forceY())
         .force("center", d3.forceCenter());

    const svg = d3.select('#project_viz').append('svg')
                  .attr("width", width)
                  .attr("height", height)
                  .attr("viewBox", [-width / 2, -height / 2, width, height]);

    // Initialize the links
    const link = svg.append("g")
                    .attr("stroke", "#999")
                    .attr("stroke-opacity", 0.6)
                    .selectAll("line")
                    .data(data.links)
                    .join("line")
                    .attr("stroke-width", d => Math.sqrt(d.value));

    // Initialize the nodes
    const node = svg.append("g")
                    .selectAll(".node")
                    .data(data.nodes)
                    .enter().append('circle')
                    .attr("cx", d => d.x*scale)
                    .attr("cy", d => d.y*scale)
                    .attr("r", d => d.size)
                    .attr('fill', (d) => {
                      if(d.size<10) {
                        return "#1b162d"
                      } else return "#ff144a"
                    })
                    .call(d3.drag()  
                        .on("start", dragstarted) 
                        .on("drag", dragged)     
                        .on("end", dragended)     
                        )
    // Text to nodes
    const text = svg.append("g")
                    .attr("class", "text")
                    .selectAll("text")
                    .data(data.nodes)
                    .enter().append("text")
                    .text((d) => {return  ' - ' + d.id})
                    .attr('fill', (d) => {
                      if(d.size<10) {
                        return "#1a1a1a"
                      } else return "#ff144a"
                    })
                    .attr('opacity', (d) => {
                      if(d.size<10) {
                        return 0
                      } else return 1
                    })
                    .attr('cursor', 'pointer')
                    .on("mouseover", this.handleMouseOver)
                    .on("mouseout", this.handleMouseOut)
                    .call(d3.drag()  
                    .on("start", dragstarted) 
                    .on("drag", dragged)     
                    .on("end", dragended)     
                    )

      simulation.on("tick", () => {

        d3.selectAll('circle').attr("cx", d => d.x*scale)
        .attr("cy", d => d.y*scale)
        link.attr("x1", d => d.source.x*scale )
            .attr("y1", d => d.source.y*scale)
            .attr("x2", d => d.target.x*scale)
            .attr("y2", d => d.target.y*scale);
        text
        .attr("x", d => d.x*scale)
        .attr("y", d => d.y*scale)

      });
        
    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fy = d.y; 
      d.fx = d.x; 
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;   
    }

      return svg.node();
  }

  handleMouseOver(d, i) {
    console.log(d3.select(this))

      if(d.size<10) {
        d3.select(this).attr('opacity', 1)
      }
    
  }

  handleMouseOut(d, i) {
   
    if(d.size<10) {
      d3.select(this).attr('opacity', 0)
    }

  }
}

