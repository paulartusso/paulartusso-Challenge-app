import React, {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";

const Bars = ({CountryData}) =>{
    
    const [graphData, setGraphData] = useState({
        series: [{
              data: []
            }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [],
          }
        },
    });
    
    
    useEffect(()=>{
        let graphics = {...graphData};
        for(let country of CountryData){
           graphics.series[0].push(country.infected);
           graphics.xaxis.categories.push(country.name);
        }
        setGraphData(graphics);
        
        }, [CountryData]);
      
    return (
        <div>
            <ReactApexChart/>
        </div>
    )
}

export default Bars;
