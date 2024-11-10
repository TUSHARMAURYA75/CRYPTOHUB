import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext';
import Candlechart from '../../components/CandleChart/Candlechart';

const Coin = () => {

    const {coinId} = useParams();
    const [coindata , setCoindata] = useState();
    const [historicaldata , sethistoricaldata] = useState();
    const {Currency} = useContext(CoinContext);

    const fetchCoindata = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Ysm2wTA6hV5kyjrvNUZsjcuM'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(res => res.json())
            .then(res => setCoindata(res))
            .catch(err => console.error(err));

    }

        const fetchHistoricaldata = async ()=>{
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Ysm2wTA6hV5kyjrvNUZsjcuM'}
              };
              
              fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${Currency.name}&days=20&interval=daily`, options)
                .then(res => res.json())
                .then(res => sethistoricaldata(res))
                .catch(err => console.error(err));
        }



    useEffect(()=>{
        fetchCoindata();
        fetchHistoricaldata()

    } , [Currency])


  if(coindata && historicaldata){    
  return (
    <div className='coin'>
        <div className='coin-name'>
            <img src={coindata.image.large} alt='' />
                 
            
            <p><b>{coindata.name} ({coindata.symbol.toUpperCase()})</b></p>
        </div>

            <div className="coin-chart">
                <Candlechart historicaldata = {historicaldata} />
            </div>

            <div className="coin-info">
           
                <ul>
                    <li>Crypto Market Rank</li>
                    <li>{coindata.market_cap_rank}</li>
             </ul>
            
             <ul>
                    <li>Current price</li>
                    <li>{Currency.Symbol} {coindata.market_data.current_price[Currency.name.toLowerCase()] }</li>

             </ul>
             
             <ul>
                    <li>Market Cap</li>
                    <li>{Currency.Symbol} {coindata.market_data.market_cap[Currency.name.toLowerCase()] }</li>
             </ul>
             
             <ul>
                    <li>24H High</li>
                    <li>{Currency.Symbol} {coindata.market_data.high_24h[Currency.name.toLowerCase()] }</li>
             </ul>
             
             <ul>
                    <li>24H Low</li>
                    <li>{Currency.Symbol} {coindata.market_data.low_24h[Currency.name.toLowerCase()] }</li>
             </ul>
            

            </div>
    </div>
  )
}
else{
    return (
        <div className='spinner'>
            <div className="spin"></div>
        </div>
)
}
}

export default Coin