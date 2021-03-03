import React, { useEffect, useState } from 'react'
import * as americaFlag from "./../../../../../assets/favicons/us.svg";
import * as belarusFlag from "./../../../../../assets/favicons/by.svg";
import * as azerFlag from "./../../../../../assets/favicons/az.svg";
import * as europeFlag from "./../../../../../assets/favicons/eu.svg";
import * as goeorgiaFlag from "./../../../../../assets/favicons/ge.svg";
import * as kazahstanFlag from "./../../../../../assets/favicons/kz.svg";
import * as moldovaFlag from "./../../../../../assets/favicons/md.svg";
import * as russiaFlag from "./../../../../../assets/favicons/ru.svg";
import * as ukraineFlag from "./../../../../../assets/favicons/ua.svg";
import * as armenianFlag from "./../../../../../assets/favicons/am.svg";
import * as uzbekistanFlag from "./../../../../../assets/favicons/uz.svg";
import './flags.less'
import Radio from '@material-ui/core/Radio';
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
import Link from 'next/link';
import { ModalConsumer } from '../../../../layouts/Layout';
import CryptoJS from "crypto-js";

let currencies = [
  {
    currency: 'USD',
    img: americaFlag
  },
  {
    currency: 'BYN',
    img: belarusFlag
  },
  {
    currency: 'RUB',
    img: russiaFlag
  },
  {
    currency: 'EUR',
    img: europeFlag
  },
  {
    currency: 'GEL',
    img: goeorgiaFlag
  },
  {
    currency: 'UAH',
    img: ukraineFlag
  },
  {
    currency: 'AMD',
    img: armenianFlag
  },
  {
    currency: 'KZT',
    img: kazahstanFlag
  },
  {
    currency: 'UZS',
    img: uzbekistanFlag
  },
  {
    currency: 'AZN',
    img: azerFlag
  },
  {
    currency: 'MDL',
    img: moldovaFlag
  }
]


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
  const [hashedValue, setHashedValue] = useState('')

  const formInputData = {
    ik_co_id: '6034f76cc8961165be2b926a',
    ik_pm_no: 'ID_4233',
    ik_am: UahAmount.toFixed(2),
    // ik_cur: 'uah',
    ik_desc: product,
    base_ik_sign: 'SWTTltrdP3VgnGXM',
    ik_sign: ''
  }

  useEffect(() => {
    const UAH_CURENCY = `https://free.currconv.com/api/v7/convert?q=USD_UAH&compact=ultra&apiKey=085850969420940b790b`
    fetch(UAH_CURENCY)
      .then(response => response.json())
      .then(data => {
        setUahAmount(data['USD_UAH'] * priceUSD)
        console.log(UahAmount)
      })
    generateHash(formInputData)

  }, [])

  function generateHash({ ik_am, ik_co_id, ik_desc, ik_pm_no, base_ik_sign }) {
    let value = `${ik_am}:${ik_co_id}:${ik_desc}:${ik_pm_no}:${base_ik_sign}`
    let ik_sign = CryptoJS.MD5(value).toString(CryptoJS.enc.Base64)
    setHashedValue(ik_sign)

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
        <form id="payment" name="payment" method="post"
          action="https://sci.interkassa.com/" encType="utf-8"
        >
          <FormControlLabel control={
            <Checkbox color="primary"
              checked={userAgreementCheckbox}
              onChange={handleChangeCheckbox}
              required
            />
          }
          />
          <UserAgreementLink />
          <input type="hidden" name="s" value="WOvLNIJQmb" />
          <input type="hidden" name="ik_co_id" value={formInputData.ik_co_id} />
          <input type="hidden" name="ik_pm_no" value={formInputData.ik_pm_no} />
          <input type="hidden" name="ik_am" value={formInputData.ik_am} />
          {/* <input type="hidden" name="ik_cur" value={formInputData.ik_cur} /> */}
          <input type="hidden" name="ik_desc" value={formInputData.ik_desc} />
          <input type="hidden" name="ik_sign" value={hashedValue} />
          <input className='footer send_payment' type="submit"
            value={`Купить за ${currentAmount.toFixed(2)} ${selectedValue}`}
          />
        </form>
      </div>


    </>
  )
}


