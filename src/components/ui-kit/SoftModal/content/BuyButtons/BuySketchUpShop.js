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

export default function BuySketchUpShop({priceUSD=119}) {
  const [selectedValue, setSelectedValue] = useState('USD')
  const [currentAmount, setCurentAmount] = useState(priceUSD)


  function handleChooseCurrency(currency) {
    setSelectedValue(currency)
    const CONVERT_URL = `https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&apiKey=085850969420940b790b`

    fetch(CONVERT_URL)
      .then(response => response.json())
      .then(data => {
        setCurentAmount(data[`USD_${currency}`] * priceUSD)
      })
  }

  return (
    <>
      <div className='checkbox_container' >
        {currencies.map((item, index) =>
          <div value={item.currency}
            onClick={() => handleChooseCurrency(item.currency)}
            key={index}
            className='checkbox_wrapper'
          >
            <Radio
              // style={{marginBottom:10}}
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
      <p className='amount_value' ></p>
      <div className='footer' >Купить за {currentAmount.toFixed(2)} {selectedValue}</div>
      
    </>
  )
}
