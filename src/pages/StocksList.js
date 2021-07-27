import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const StocksList = (props) => {
    const [stock, setStock] = useState(null)

    const apiKey = props.apiKey
    const url = `https://financialmodelingprep.com/api/v3/stock/actives?apikey=${apiKey}`

    const getStock = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setStock(data)
    }

    // console.log(stock)

    useEffect(() => {
        getStock()
    }, [])

    const loaded = () => {
        let company = stock.mostActiveStock
        return (
            <div className='stocks'>
                {company.map((item,index) => {
                    return(
                        <Link to={`/stocks/${item.ticker}`} key={index}>
                            <p>{item.companyName} {item.changesPercentage}</p>
                        </Link>
                    )
                })}
            </div>
        )
    }
    const loading = () => {
        return (
            <div>
                Loading
            </div>
        )
    }

    return stock ? loaded() : loading()
}

export default StocksList