import {
    ModalConsumer,
    TranslationContext,
    useTranslation,
} from '../../../layouts/Layout'
import React, { useContext } from 'react'
import styles from './CardStyles.module.scss'
import softStyles from '../SoftPage.module.scss'

const ContactUsButton = () => {
    const {
        t: { contactUsButton },
    } = useTranslation('common')

    return (
        <>
            <ModalConsumer>
                {({ handleOpenSoftModal }) => (
                    <p
                        className={styles.title}
                        onClick={handleOpenSoftModal('workspaceStandard')}
                    >
                        Google Workspace Business Standard
                    </p>
                )}
            </ModalConsumer>
            <ModalConsumer>
                {({ handleOpenForm }) => (
                    <div
                        className={styles.buttonContainer}
                        onClick={handleOpenForm}
                    >
                        <div className={softStyles.button}>
                            {contactUsButton}
                        </div>
                    </div>
                )}
            </ModalConsumer>
        </>
    )
}

export const StandardText = () => {
    const { locale } = useContext(TranslationContext)

    if (locale === 'ua')
        return (
            <div className={styles.tableBody}>
                <ContactUsButton />

                <p>
                    <strong>Gmail</strong> Робоча адреса електронної пошти
                </p>

                <p>
                    <strong>Meet</strong> Відеозустрічі на 150 учасників + запис
                    відеозустрічей
                </p>

                <p>
                    <strong>Chat</strong> Сервіс для спілкування в командах
                </p>

                <p>
                    <strong>Календар</strong> Загальні календарі
                </p>

                <p>
                    <strong>Диск</strong> 2 ТБ хмарного сховища
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

                <p>
                    <strong>Cloud Search</strong> Ефективний пошук у сервісах
                    Google Workspace
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
                    Налаштовуються правила зберігання та архівування для листів
                    та чатів
                </p>

                <p>Регіони зберігання даних для Google Workspace</p>

                <p>
                    Контроль доступу корпоративного класу із примусовим
                    використанням електронних ключів
                </p>

                <p>Програма "Додатковий захист"</p>

                <p>
                    Надання електронних документів: зберігання електронної
                    пошти, чатів та файлів
                </p>

                <p>Звіти про дії користувачів</p>

                <p>
                    <strong>Керування кінцевими точками</strong> Дистанційне
                    керування мобільними пристроями
                </p>
            </div>
        )

    if (locale === 'ru')
        return (
            <div className={styles.tableBody}>
                <ContactUsButton />

                <p>
                    <strong>Gmail </strong>Рабочий адрес электронной почты
                </p>

                <p>
                    <strong>Meet </strong>Видеовстречи на 150 участников +
                    запись видеовстреч
                </p>

                <p>
                    <strong>Chat </strong>Сервис для общения в командах
                </p>

                <p>
                    <strong>Календарь</strong> Общие календари
                </p>

                <p>
                    <strong>Диск </strong>2 ТБ облачного&nbsp;хранилища&nbsp;
                </p>

                <p>
                    <strong>Документы</strong> Работа с текстовыми файлам
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

                <p>
                    <strong>Cloud Search</strong> Эффективный поиск в сервисах
                    Workspace
                </p>

                <p className='lead display-4'>Безопасность и управление</p>

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
                    Настраиваемые правила хранения и архивирования для писем и
                    чатов
                </p>

                <p>Регионы хранения данных для Workspace</p>

                <p>
                    Контроль доступа корпоративного класса с принудительным
                    использованием электронных ключей
                </p>

                <p>Программа "Дополнительная защита"</p>

                <p>
                    Предоставление электронных документов: хранение электронной
                    почты, чатов и файлов
                </p>

                <p>Отчеты о действиях пользователей</p>

                <p>
                    <strong>Управление конечными точками</strong> Удаленное
                    управление мобильными устройствами
                </p>
            </div>
        )

    if (locale === 'en')
        return (
            <div className={styles.tableBody}>
                <ContactUsButton />

                <p>
                    <strong>Gmail</strong> Work email address
                </p>
                <p>
                    <strong>Meet</strong> Video meetings with up to 150
                    participants
                </p>
                <p>
                    <strong>Chat</strong> Team communication service
                </p>
                <p>
                    <strong>Calendar</strong> Shared calendars
                </p>
                <p>
                    <strong>Drive</strong> 2 TB of cloud storage
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
                <p>
                    <strong>Currents</strong> Effective collaboration
                </p>
                <p>
                    <strong>Apps Script</strong> Integration with Workspace, as
                    well as extension and automation capabilities
                </p>
                <p>Cloud Search Efficient search across Workspace services.</p>
                <p className={styles.subTitle}>Security and Management</p>
                <p>Standard 24/7 support</p>
                <p>Admin Console Security and domain management tools</p>
                <p>
                    Enterprise-grade access controls with enforced electronic
                    key usage
                </p>
                <p className={styles.subTitle}>
                    &apos;Advanced Protection&apos; program
                </p>
                <p>
                    Customizable storage and archiving rules for emails and
                    chats.
                </p>
                <p>Data storage regions for Workspace.</p>
                <p>E-Discovery: Storage of emails, chats, and files.</p>
                <p>User activity reports.</p>
                <p>Endpoint management: Remote management of mobile devices.</p>
            </div>
        )
}
