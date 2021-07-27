import React, {useEffect} from 'react'

const StockDetails = (props) => {
    
    const [stock, setStock] = React.useState(null)

    const apiKey = props.apiKey
    const symbol = props.match.params.symbol
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`

    const getStock = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setStock(data)
    }

    console.log(stock)

    useEffect(() => {getStock()}, [])

    const loaded = () => {
        return(
        <div>
            <h2>{stock[0].name} ({symbol})</h2>
            <h3>Price: ${stock[0].price} (<span id='stock-change'>{stock[0].change}</span>)</h3>
            <h5>High: ${stock[0].dayHigh} | Low: ${stock[0].dayLow}</h5>
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

export default StockDetails