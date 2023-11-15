import {
    ModalConsumer,
    TranslationContext,
    useTranslation,
} from '../../../layouts/Layout'
import React, { useContext } from 'react'
import styles from './CardStyles.module.scss'
import softStyles from '../SoftPage.module.scss'

const ButtonsSection = () => {
    const {
        t: { checkPrice },
    } = useTranslation('common')
    return (
        <>
            <ModalConsumer>
                {({ handleOpenSoftModal }) => (
                    <p
                        className={styles.title}
                        onClick={handleOpenSoftModal('workspaceStarter')}
                    >
                        Google Workspace Business Starter
                    </p>
                )}
            </ModalConsumer>
            <ModalConsumer>
                {({ handleOpenForm }) => (
                    <div
                        className={styles.buttonContainer}
                        onClick={handleOpenForm}
                    >
                        <div className={softStyles.button}>{checkPrice}</div>
                    </div>
                )}
            </ModalConsumer>
        </>
    )
}

export const StarterText = () => {
    const { locale } = useContext(TranslationContext)

    if (locale === 'ua')
        return (
            <div className={styles.tableBody}>
                <ButtonsSection />

                <p>
                    <strong>Gmail</strong> Робоча адреса електронної пошти
                </p>

                <p>
                    <strong>Meet</strong> Відеозустрічі на 100 учасників
                </p>

                <p>
                    <strong>Chat</strong> Сервіс для спілкування в командах
                </p>

                <p>
                    <strong>Календар</strong> Спільні календарі
                </p>

                <p>
                    <strong>Диск</strong> 30 ГБ хмарного сховища
                </p>

                <p>
                    <strong>Документи</strong> Робота з текстовими файлами
                </p>

                <p>
                    <strong>Таблиці</strong> Створення таблиць
                </p>

                <p>
                    <strong>Презентації</strong> Інструмент для створення
                    презентацій
                </p>

                <p>
                    <strong>Форми</strong> Інструмент для створення опитувань
                </p>

                <p>
                    <strong>Сайти</strong> Конструктор сайтів
                </p>

                <p>
                    <strong>Google Keep</strong> Загальні нотатки
                </p>

                <p>
                    <strong>Currents</strong> Ефективна взаємодія
                </p>

                <p>
                    <strong>Apps Script</strong> Інтеграція з Google Workspace,
                    а також розширення та автоматизація можливостей
                </p>

                <p className={styles.subTitle}>Безпека та управління</p>

                <p>
                    <strong>Стандартна цілодобова підтримка</strong>
                </p>

                <p>
                    <strong>Консоль адміністратора</strong> Інструменти
                    забезпечення безпеки та керування доменом
                </p>

                <p>
                    Контроль доступу корпоративного класу із примусовим
                    використанням електронних ключів
                </p>

                <p>Програма &quot;Додатковий захист&quot;</p>

                <p>
                    <strong>Керування кінцевими точками</strong> Дистанційне
                    керування мобільними пристроями
                </p>
            </div>
        )

    if (locale === 'ru')
        return (
            <div className={styles.tableBody}>
                <ButtonsSection />

                <p>
                    <strong>Gmail </strong>Рабочий адрес электронной почты
                </p>

                <p>
                    <strong>Meet </strong>Видеовстречи на 100 участников
                </p>

                <p>
                    <strong>Chat </strong>Сервис для общения в командах
                </p>

                <p>
                    <strong>Календарь</strong> Общие календари
                </p>

                <p>
                    <strong>Диск </strong>30 ГБ облачного хранилища
                </p>

                <p>
                    <strong>Документы</strong> Работа с текстовыми файлами
                </p>

                <p>
                    <strong>Таблицы</strong> Создание таблиц
                </p>

                <p>
                    <strong>Презентации</strong> Инструмент для создания
                    презентаций
                </p>

                <p>
                    <strong>Формы</strong> Инструмент для создания опросов
                </p>

                <p>
                    <strong>Сайты</strong> Конструктор сайтов
                </p>

                <p>
                    <strong>Google Keep</strong> Общие заметки
                </p>

                <p>
                    <strong>Currents</strong> Эффективное взаимодействие
                </p>

                <p>
                    <strong>Apps Script </strong>Интеграция с Workspace, а также
                    расширение и автоматизация возможностей
                </p>

                <p className={styles.subTitle}>Безопасность и управление</p>

                <p>
                    <strong>
                        Стандартная круглосуточная поддержка&nbsp;&nbsp;
                    </strong>
                </p>

                <p>
                    <strong>Консоль администратора</strong> Инструменты
                    обеспечения безопасности и управления доменом
                </p>

                <p>
                    Контроль доступа корпоративного класса с принудительным
                    использованием электронных ключей
                </p>

                <p>Программа "Дополнительная защита"</p>

                <p>
                    <strong>Управление конечными точками</strong> Удаленное
                    управление мобильными устройствами
                </p>
            </div>
        )

    if (locale === 'en')
        return (
            <div className={styles.tableBody}>
                <ButtonsSection />

                <p>
                    <strong>Gmail</strong> Work email address
                </p>
                <p>
                    <strong>Meet</strong> Video meetings with up to 100
                    participants
                </p>
                <p>
                    <strong>Chat</strong> Team communication service
                </p>
                <p>Calendar Shared calendars</p>
                <p>
                    <strong>Drive</strong> 30 GB of cloud storage
                </p>
                <p>
                    <strong>Docs</strong> Work with text files
                </p>
                <p>
                    <strong>Sheets</strong> Create spreadsheets
                </p>
                <p>
                    <strong>Slides</strong> Presentation creation tool
                </p>
                <p>
                    <strong>Forms</strong> Tool for creating surveys
                </p>
                <p>
                    <strong>Sites</strong> Website builder
                </p>
                <p>
                    <strong>Google</strong> Keep Shared notes
                </p>
                <p>Currents Effective collaboration</p>
                <p>
                    Apps Script Integration with Workspace, as well as extension
                    and automation capabilities
                </p>
                <p>Security and Management</p>
                <p>Standard 24/7 support</p>
                <p>Admin Console Security and domain management tools</p>
                <p>
                    Enterprise-grade access controls with enforced electronic
                    key usage
                </p>
                <p>&apos;Advanced Protection&apos; program</p>
                <p>Endpoint Management Remote management of mobile devices</p>
            </div>
        )
}
