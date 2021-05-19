import React from 'react'
import BuySketchUpShop from './BuySketchUpShop'
import * as dayjs from 'dayjs';
import * as isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

export default function BuySketchUpStudio() {
  const discountValid = dayjs().isBetween('2021-05-17', dayjs('2021-07-01'))
  const price = discountValid ? 699 : 1199

  return (
    <BuySketchUpShop priceUSD={price} product='SketchUpStudio' />
  )
}
