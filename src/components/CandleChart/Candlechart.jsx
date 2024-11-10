import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
const Candlechart = ({historicaldata}) => {


  const [data , setdata] = useState([["Date" , "Prices"]])

  useEffect(()=>{
      let datacopy = [["Date" , "Prices"]];
      if(historicaldata.prices){
        historicaldata.prices.map((item)=>{
          datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}` , item[1]])
        })
        setdata(datacopy);
      }
  },[historicaldata])

  return (
    <div>
        <Chart 
            chartType="LineChart"
            data={data}
            height="100%"
            legendToggle
        
        />
    </div>
  )
}

export default Candlechart