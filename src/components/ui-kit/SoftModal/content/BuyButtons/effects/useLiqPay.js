import { v4 } from 'uuid'
import { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'

export const useLiqPay = (amount, product, currency) => {
    const liqpayPrivateKey = process.env.LIQPAY_PRIVATE_KEY
    const liqpayPublicKey = process.env.LIQPAY_PUBLIC_KEY

    const [hashedValue, setHashedValue] = useState([])
    // need to connect liqpay api for amount curconv for thee rest of currencies not for payment

    const json_string = {
        public_key: liqpayPublicKey,
        version: '3',
        action: 'pay',
        amount: `${Math.floor((amount * 100) / 100)}`,
        currency,
        description: `${product}`,
        order_id: `${v4()}`,
        result_url: 'http://localhost:3000/payment-success',
    }

    useEffect(() => {
        generateHash(json_string)
    }, [amount, currency])

    function generateHash(json_string) {
        let value = JSON.stringify(json_string)
        const json_array = CryptoJS.enc.Utf8.parse(value)
        const json_base64 = CryptoJS.enc.Base64.stringify(json_array)
        const sign_array = CryptoJS.SHA1(
            liqpayPrivateKey + json_base64 + liqpayPrivateKey
        )
        const sign_sha1 = CryptoJS.enc.Base64.stringify(sign_array)
        setHashedValue([json_base64, sign_sha1])
    }
    console.log(hashedValue, json_string)
    return [hashedValue]
}
