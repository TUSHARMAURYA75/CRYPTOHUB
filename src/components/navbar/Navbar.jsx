import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)

    const CurrencyHandler = (event)=>{

        switch(event.target.value){
            case "USD": {
                setCurrency({name:"USD" ,Symbol : "$"})
                break;
            }

            case "EUR": {
                setCurrency({name:"EUR" ,Symbol : "€"})
                break;
            }

            case "INR": {
                setCurrency({name:"INR" ,Symbol : "₹"})
                break;
            }

            default: {
                setCurrency({name:"USD" ,Symbol : "$"})
                break;
            }
        }
    }
  return (
    <div className='navbar'>
    
        <div className='logodiv'>
            <Link  to={'/'}>
             <img src= {logo} alt='' className='logo' />
             <h3>CRYPTOHUB</h3>
            </Link>
       
        


        </div>
          
          <ul>
           <Link to={'/'}> <li>Home</li> </Link>
            <Link to={'https://cointelegraph.com/markets'}> <li>News</li> </Link>
            <Link to={'https://www.forexfactory.com/calendar'}> <li>Event</li> </Link>
            <li>Backtest</li>
          </ul>

            <div className='nav-right'>
                <select onChange={CurrencyHandler}>
                    
                <option value= "USD">USD</option>
                <option value= "EUR">EUR</option>
                <option value= "INR">INR</option>
                </select>

                <button>Sign Up  </button>
            </div>


        </div>
  )
}

export default Navbar