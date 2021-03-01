import * as checkIcon from "./../../../assets/images/icons/check-mark.svg";
import * as closeIcon from "./../../../assets/images/icons/close.svg";
import Img from '../../ui-kit/Img';


const checkMark = <Img src={checkIcon} />
const closeMark = <Img src={closeIcon} />

function createData(option, sketchUpFree, sketchUpShop, sketchUpPro, sketchUpStudio, sketchUpStudents) {
  return { option, sketchUpFree, sketchUpShop, sketchUpPro, sketchUpStudio, sketchUpStudents };
}

export const rows = [
  createData('Платформа для 3D моделирования', 'Только для web', 'Только для web', 'Рабочий стол + web', 'Рабочий стол + web', 'Рабочий стол + web'),
  createData('Использование офлайн', closeMark, closeMark, checkMark, checkMark, checkMark),
  createData('Оптимальная произв.-ть с Sefaira', closeMark, closeMark, closeMark, checkMark, checkMark),
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
