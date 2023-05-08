const fetchLiqPay = async (req, res) => {
    try {
        const liqpay =
            'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
        const response = await fetch(liqpay)
        if (response.status !== 200) {
            return res.status(400).send("Can't fetch liqpay currencies")
        }

        const data = await response.json()
        const dollar = data.find(curr => curr.ccy === 'USD')

        res.status(200).send({ hryvnaExchangeRate: dollar.sale })
    } catch (err) {
        console.error(err)
        res.status(400).send({ err, message: "Can't fetch liqpay currencies" })
    }
}

export default fetchLiqPay
