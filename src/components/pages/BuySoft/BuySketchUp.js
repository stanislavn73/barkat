import React, { useState, useRef, useEffect } from 'react'
import './BuySketchup.less'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as checkIcon from "./../../../assets/images/icons/check-mark.svg";
import * as closeIcon from "./../../../assets/images/icons/close.svg";
import { TableBody, TableFooter, makeStyles } from '@material-ui/core';
import FirstScreen from './FirstScreen/FirstScreen';
import Img from '../../ui-kit/Img';
import Title from '../../ui-kit/Title';
import HoverFrame from './HoverFrame';
import BuyButtons from './BuyButtons';

const buyItems = [
  {
    title: 'Опции'

  },
  {
    title: 'SketchUp Free'

  },
  {
    title: 'SketchUp Shop'

  },
  {
    title: 'SketchUp Pro'

  },
  {
    title: 'SketchUp Studio'
  },
  {
    title: 'SketchUp для высшего образования'

  },
]
const checkMark = <Img src={checkIcon} />
const closeMark = <Img src={closeIcon} />

function createData(option, sketchUpFree, sketchUpShop, sketchUpPro, sketchUpStudio, sketchUpStudents) {
  return { option, sketchUpFree, sketchUpShop, sketchUpPro, sketchUpStudio, sketchUpStudents };
}

const rows = [
  createData('Платформа для 3D моделирования', 'Только для web', 'Только для web', 'Рабочий стол + web', 'Рабочий стол + web', 'Рабочий стол + web'),
  createData('Использование офлайн', closeMark, closeMark, checkMark, checkMark, checkMark),
  createData('Оптимальная произв.-ть. с Sefaira', closeMark, closeMark, closeMark, checkMark, checkMark),
  createData('Облачное хранилище', '10 ГБ Trimble Connect', 'Неограниченное использование Trimble Connect',
    'Неограниченное использование Trimble Connect', 'Неограниченное использование Trimble Connect', 'Неограниченное использование Trimble Connect'),
  createData('Поддержка', 'Почта', 'Почта, сообщество', 'Телефон, почта, сообщество', 'Телефон, почта, сообщество', 'Почта, сообщество'),
  createData('Средство просмотра', 'Стандартный просмотр моделей на устройствах IOS и Android', 'Стандартный просмотр моделей на устройствах IOS и Android',
    'Стандартное + Мобильное средство просмотра в дополненной реальности на устройствах IOS и Android',
    'Стандартное + Мобильное средство просмотра в дополненной реальности на устройствах IOS и Android',
    'Стандартное + Мобильное средство просмотра в дополненной реальности на устройствах IOS и Android'),
  createData('Просмотр с помощью гарнитуры XR', closeMark, closeMark,
    'Hololens, WMR, Oculus Rift, Oculus Quest, HTC Vive, Steam VR',
    'Hololens, WMR, Oculus Rift, Oculus Quest, HTC Vive, Steam VR', 'Hololens, WMR, Oculus Rift, Oculus Quest, HTC Vive, Steam VR'),
  createData('Взаимодействие систем', 'Базовое', 'Продвинутое', 'Профессиональное', 'Профессиональное', 'Профессиональное'),
  createData('Расширяемость', closeMark, closeMark, 'Core Ruby API и Extension Warehouse',
    'Core Ruby API и Extension Warehouse', 'Core Ruby API и Extension Warehouse'),
  createData('3D Warehouse', 'Ограниченные загрузки', 'Неограниченное количество загрузок',
    'Неограниченное количество загрузок', 'Неограниченное количество загрузок', 'Неограниченное количество загрузок'),
  createData('2D-чертежи', closeMark, closeMark, 'LayOut', 'LayOut', 'LayOut'),
  createData('Пользовательские стили, материалы, обводка', closeMark, 'Базовое', 'Продвинутое', 'Продвинутое', 'Продвинутое'),
  createData('Style Builder', closeMark, closeMark, checkMark, checkMark, checkMark),
  createData('Типы лицензий', 'Бесплатно', 'Годовая подписка', 'Годовая подписка', 'Годовая подписка', 'Годовая подписка'),
  createData('Динамические компоненты', closeMark, closeMark, 'Создание и редактирование', 'Создание и редактирование', closeMark),
];

const useStyles = makeStyles({
  table: {
    tableLayout: 'fixed'
  }
});

export default function BuySketchUp() {

  const [column, setColumn] = useState(-1)

  const classes = useStyles()
  let tableRef = useRef(<table></table>)

  function handleSetColumn(column) {
    setColumn(column)
  }

  return (
    <div className='table_container' >
      <FirstScreen />
      <Title>Купить софт</Title>

      <Table
        className={classes.table} hover={column || 0}
        // onMouseOut={() => setColumn(-1)}
        ref={tableRef}
      >

        <TableHead className={classes.tableHead} >
          <TableRow  >
            {buyItems.map((item, index) =>
              <TableCell key={index}
                onMouseEnter={() => setColumn(index)} 
                
                >
                <div className={item.title==='Опции'?'options_element':'head_element'}>{item.title}</div>
              </TableCell>
            )}
          </TableRow>
          <BuyButtons handleSetColumn={handleSetColumn} />
        </TableHead>

        <TableBody>
          {rows.map((item, index) => (
            <TableRow key={index}>
              <TableCell><div className='options_element' onMouseEnter={() => setColumn(0)} >{item.option}</div></TableCell>
              <TableCell className='cell' onMouseEnter={() => setColumn(1)} >{item.sketchUpFree}</TableCell>
              <TableCell className='cell' onMouseEnter={() => setColumn(2)} >{item.sketchUpShop}</TableCell>
              <TableCell className='cell' onMouseEnter={() => setColumn(3)} >{item.sketchUpPro}</TableCell>
              <TableCell className='cell' onMouseEnter={() => setColumn(4)} >{item.sketchUpStudio}</TableCell>
              <TableCell className='cell' onMouseEnter={() => setColumn(5)} >{item.sketchUpStudents}</TableCell>
            </TableRow>
          )
          )}
        </TableBody>

        <TableFooter>
          <BuyButtons handleSetColumn={handleSetColumn} />
        </TableFooter>
        <TableRow>
        </TableRow>
        <HoverFrame column={column} width={tableRef.current.offsetWidth||0} height={tableRef.current.offsetHeight} />

      </Table>
      
    </div>
  )
}
