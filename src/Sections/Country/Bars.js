import React, {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";

const Bars = ({CountryData}) =>{
    
    const [graphData, setGraphData] = useState({
        series: [{
              name: 'Infected Per Country',
              data: []
        }],
        options: {
            plotOptions: {
            bar: {
              horizontal: true,
              barHeight: "100%"
            }
          },
          
        }
    });
    
    
    useEffect(()=>{
        let seriesData = [];
        let categories = [];
        for(let country of CountryData){
           seriesData.push(country.infected);
           categories.push(country.name);
        }
        setGraphData({
          series: [{
            data: seriesData
          }],
          options: {
            ...graphData.options,
            xaxis: {
              ...graphData.options.xaxis,
              categories
            }
          }
        
        });
        }, [CountryData]);
      
    return (
        <div style={{marginLeft: '200px'}}>
            <ReactApexChart
              series={graphData.series}
              options={graphData.options}
              type="bar"
              width={500}
              height={320} />
        </div>
    )
}

export default Bars;