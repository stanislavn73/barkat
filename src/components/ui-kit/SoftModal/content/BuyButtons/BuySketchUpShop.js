import React, { useEffect, useState } from 'react'
import Radio from '@material-ui/core/Radio';
import { Checkbox, TextField } from '@material-ui/core';
import { ModalConsumer } from '../../../../layouts/Layout';
import CryptoJS from "crypto-js";
import { currencies } from './currencies';
import './BuySketchUpShop.less';
import { v4 } from 'uuid';

function UserAgreementLink() {
  return (
    <ModalConsumer>
      {({ handleOpenSoftModal }) =>
        <span >Нажимая купить Вы принимаете условия <span onClick={handleOpenSoftModal('UserAgreement')}
          className='policy_link'
        >пользовательского соглашения</span></span>
      }
    </ModalConsumer>
  )
}

export default function BuySketchUpShop({ priceUSD = 119, product = 'SketchUpShop' }) {
  const [UahAmount, setUahAmount] = useState(priceUSD)
  const [selectedValue, setSelectedValue] = useState('USD')
  const [currentAmount, setCurentAmount] = useState(priceUSD)
  const [userAgreementCheckbox, setUserAgreementCheckbox] = useState(false)
  const [hashedValue, setHashedValue] = useState([])
  const [userData, setUserData] = useState({})

  const private_key = 'sandbox_TnTWGwuz2FxuZDW8wOhJAANTGhWe3DqRAMD1Iolq'
  const json_string = {
    "public_key": "sandbox_i47920969914",
   "version": "3", 
   "action": "pay", 
   "amount": `${Math.floor((UahAmount * 100) / 100)}`, 
   "currency": "UAH", 
   "description": `${product}`,
    "order_id": `${v4()}`
  }

  useEffect(() => {
    const UAH_CURENCY = `https://free.currconv.com/api/v7/convert?q=USD_UAH&compact=ultra&apiKey=085850969420940b790b`
    fetch(UAH_CURENCY)
      .then(response => response.json())
      .then(data => {
        setUahAmount(data['USD_UAH'] * priceUSD)  
      })
  }, [])

  useEffect(()=>{
    generateHash(json_string)
  },[UahAmount])

  function generateHash(json_string) {
    let value = JSON.stringify(json_string)
    const json_array = CryptoJS.enc.Utf8.parse(value)
    const json_base64 = CryptoJS.enc.Base64.stringify(json_array)
    const sign_array = CryptoJS.SHA1(private_key+json_base64+private_key)
    const sign_sha1 = CryptoJS.enc.Base64.stringify(sign_array)
    setHashedValue([json_base64, sign_sha1])
  }

  function handleChooseCurrency(currency) {
    setSelectedValue(currency)
    const CONVERT_URL = `https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&apiKey=085850969420940b790b`

    fetch(CONVERT_URL)
      .then(response => response.json())
      .then(data => {
        setCurentAmount(data[`USD_${currency}`] * priceUSD)
      })
  }


  function handleChangeCheckbox(e) {
    setUserAgreementCheckbox(e.target.checked)
  }

  return (
    <>
      <div className='checkbox_container'  >
        {currencies.map((item, index) =>
          <div value={item.currency}
            onClick={() => handleChooseCurrency(item.currency)}
            key={index}
            className='checkbox_wrapper'
          >
            <Radio
              checked={selectedValue === item.currency}
              name={item.currency}
            />
            <div style={{ backgroundImage: `url(${item.img})` }}
              className='flag_image'
            >
            </div>
            <span className='currency_name' >{item.currency}</span>
          </div>
        )}
      </div>
      <div className='text_container'>
        <form method="POST"
         acceptCharset="utf-8" 
         action="https://www.liqpay.ua/api/3/checkout"
        >
          <div className='text_field_container' >
            <div>
              <Checkbox color="primary"
                checked={userAgreementCheckbox}
                onChange={handleChangeCheckbox}
                required
              />
              <UserAgreementLink />
            </div>
          </div>
          <input type="hidden" name="data" value={hashedValue[0]} />
          <input type="hidden" name="signature" value={hashedValue[1]} />
          <input className='footer send_payment' type="submit"
            value={`Купить за ${Math.floor(currentAmount * 100) / 100} ${selectedValue}`}
          />
        </form>
      </div>


    </>
  )
}


