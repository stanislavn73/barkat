import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { ModalConsumer } from '../../layouts/Layout'

export default function buyButtons({ handleSetColumn }) {

  const buyButtons = [
    {
      price: 119,
      type: 'BuySketchUpShop'
    },
    {
      price: 229,
      type: 'BuySketchUpPro'
    },
    {
      price: 1199,
      type: 'BuySketchUpStudio'
    },
    {
      price: 55,
      type: 'BuySketchUpHigher'
    }
  ]

  return (
    <TableRow>
      <TableCell>
      </TableCell>
      <ModalConsumer>
        {({ handleOpenForm }) => (
          <TableCell onMouseEnter={() => handleSetColumn(1)} >
            <div className='footer' onClick={()=>handleOpenForm('Примите запрос на SketchUp FREE')} >FREE</div>
          </TableCell>
        )}
      </ModalConsumer>
      {buyButtons.map((item, index) =>
        <ModalConsumer key={index} >
          {({ handleOpenSoftModal }) =>
            <TableCell onMouseEnter={() => handleSetColumn(index + 2)}
              onClick={handleOpenSoftModal(item.type)}
            >
              <div className='footer' >{item.price}
                <p className='text' >USD в год</p>
                <div className='footer' >Купить</div>
              </div>
            </TableCell>
          }
        </ModalConsumer>
      )}

    </TableRow>
  )
}
