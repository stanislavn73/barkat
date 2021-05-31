import './TableData.less';

const checkMark = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className='check_mark'
        width='17'
        height='17'
        viewBox='0 0 24 24'
    >
        <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
    </svg>
);
const closeMark = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className='close_mark'
        width='18'
        height='18'
        viewBox='0 0 18 18'
    >
        <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z' />
    </svg>
);

function createData(
    option,
    sketchUpFree,
    sketchUpShop,
    sketchUpPro,
    sketchUpStudio,
    sketchUpStudents
) {
    return {
        option,
        sketchUpFree,
        sketchUpShop,
        sketchUpPro,
        sketchUpStudio,
        sketchUpStudents,
    };
}

export const rows = [
    createData(
        'Платформа для 3D моделирования',
        'Только для web',
        'Только для web',
        'Рабочий стол + web',
        'Рабочий стол + web',
        'Рабочий стол + web'
    ),
    createData(
        'Использование офлайн',
        closeMark,
        closeMark,
        checkMark,
        checkMark,
        checkMark
    ),
    createData(
        ['Sefaira', '(энергетический анализ)'],
        closeMark,
        closeMark,
        closeMark,
        closeMark,
        checkMark
    ),
    createData(
        ['V-Ray', '(интеративный рендер)'],
        closeMark,
        closeMark,
        closeMark,
        checkMark,
        checkMark
    ),
    createData(
        ['Scan Essentials', '(работа с облаками точек)'],
        closeMark,
        closeMark,
        closeMark,
        checkMark,
        checkMark
    ),
    createData(
        ['PreDesign', '(инструмент для анализа погодных условий)'],
        closeMark,
        closeMark,
        checkMark,
        checkMark,
        checkMark
    ),
    createData(
        ['LayOut', '(профессиональные чертежи)'],
        closeMark,
        closeMark,
        checkMark,
        checkMark,
        checkMark
    ),
    createData(
        'Облачное хранилище',
        '10 ГБ Trimble Connect',
        'Неограниченное использование Trimble Connect',
        'Неограниченное использование Trimble Connect',
        'Неограниченное использование Trimble Connect',
        'Неограниченное использование Trimble Connect'
    ),
    createData(
        'Поддержка',
        'Почта',
        'Почта, сообщество',
        'Телефон, почта, сообщество',
        'Телефон, почта, сообщество',
        'Почта, сообщество'
    ),
    createData(
        'Средство просмотра',
        'Стандартный просмотр моделей на устройствах IOS и Android',
        'Стандартный просмотр моделей на устройствах IOS и Android',
        'Стандартное + Мобильное средство просмотра в дополненной реальности на устройствах IOS и Android',
        'Стандартное + Мобильное средство просмотра в дополненной реальности на устройствах IOS и Android',
        'Стандартное + Мобильное средство просмотра в дополненной реальности на устройствах IOS и Android'
    ),
    createData(
        'Просмотр с помощью гарнитуры XR',
        closeMark,
        closeMark,
        'Hololens, WMR, Oculus Rift, Oculus Quest, HTC Vive, Steam VR',
        'Hololens, WMR, Oculus Rift, Oculus Quest, HTC Vive, Steam VR',
        'Hololens, WMR, Oculus Rift, Oculus Quest, HTC Vive, Steam VR'
    ),
    createData(
        'Взаимодействие систем',
        'Базовое',
        'Продвинутое',
        'Профессиональное',
        'Профессиональное',
        'Профессиональное'
    ),
    createData(
        'Расширяемость',
        closeMark,
        closeMark,
        'Core Ruby API и Extension Warehouse',
        'Core Ruby API и Extension Warehouse',
        'Core Ruby API и Extension Warehouse'
    ),
    createData(
        '3D Warehouse',
        'Ограниченные загрузки',
        'Неограниченное количество загрузок',
        'Неограниченное количество загрузок',
        'Неограниченное количество загрузок',
        'Неограниченное количество загрузок'
    ),
    // createData('2D-чертежи', closeMark, closeMark, 'LayOut', 'LayOut', 'LayOut'),
    createData(
        'Пользовательские стили, материалы, обводка',
        closeMark,
        'Базовое',
        'Продвинутое',
        'Продвинутое',
        'Продвинутое'
    ),
    createData(
        'Style Builder',
        closeMark,
        closeMark,
        checkMark,
        checkMark,
        checkMark
    ),
    createData(
        'Типы лицензий',
        'Бесплатно',
        'Годовая подписка',
        'Годовая подписка',
        'Годовая подписка',
        'Годовая подписка'
    ),
    createData(
        'Динамические компоненты',
        closeMark,
        closeMark,
        'Создание и редактирование',
        'Создание и редактирование',
        closeMark
    ),
];
