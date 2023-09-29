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
        t: { contactUsButton },
    } = useTranslation('common')

    return (
        <>
            <ModalConsumer>
                {({ handleOpenSoftModal }) => (
                    <p
                        className={styles.title}
                        onClick={handleOpenSoftModal('workspaceBusinessPlus')}
                    >
                        Google Workspace Business Plus
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

export const BusinessPlus = () => {
    const { locale } = useContext(TranslationContext)

    if (locale === 'ua')
        return (
            <div className={styles.tableBody}>
                <ButtonsSection />

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
                <ButtonsSection />

                <p>
                    <strong>Gmail </strong>Рабочий адрес электронной почты
                </p>

                <p>
                    <strong>Meet </strong>Видеовстречи на 250 участников +
                    запись видеовстреч, отслеживание посещаемости
                </p>

                <p>
                    <strong>Chat </strong>Сервис для общения в командах
                </p>

                <p>
                    <strong>Календарь</strong> Общие календари
                </p>

                <p>
                    <strong>Диск </strong>5 ТБ облачного хранилища&nbsp;
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

                <p>
                    <strong>Cloud Search</strong> Эффективный поиск в сервисах
                    Workspace
                </p>

                <p className='lead display-4'>Безопасность и управление</p>

                <p>
                    <strong>
                        Приоритетная круглосуточная поддержка&nbsp;&nbsp;
                    </strong>
                </p>

                <p>Реагирование на серьезные проблемы в течение 1 часа</p>

                <p>Уполномоченный консультант Google (не менее 1000 мест)</p>

                <p>
                    <strong>Консоль администратора </strong>Инструменты
                    обеспечения безопасности и управления доменом
                </p>

                <p>
                    Настраиваемые правила хранения и архивирования для писем и
                    чатов
                </p>

                <p>Регионы хранения данных для Workspace</p>

                <p>Центр безопасности Workspace</p>

                <p>Защита от потери данных для Gmail</p>

                <p>Защита от потери данных для Диска</p>

                <p>Размещаемые сертификаты S/MIME для Gmail</p>

                <p>
                    Интеграция Gmail с поддерживаемыми средствами архивирования
                    от сторонних разработчиков
                </p>

                <p>
                    Контроль доступа корпоративного класса с принудительным
                    использованием электронных ключей
                </p>

                <p>Анализ журналов Gmail в BigQuery</p>

                <p>Программа "Дополнительная защита"</p>

                <p>
                    <strong>Сейф </strong>Хранение, архивирование и поиск данных
                </p>

                <p>
                    Предоставление электронных документов: хранение электронной
                    почты, чатов и файлов
                </p>

                <p>Отчеты о действиях пользователей</p>

                <p>
                    <strong>Cloud Identity Premium</strong> Управление
                    пользовательскими аккаунтами, устройствами и приложениями
                </p>

                <p>
                    <strong>Управление конечными точками</strong> Удаленное
                    управление мобильными устройствами
                </p>

                <p>Контекстно-зависимый доступ</p>
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
                    <strong>Meet</strong> Video meetings with up to 250
                    participants + video meeting recordings, attendance tracking
                </p>
                <p>
                    <strong>Chat</strong> Team communication service
                </p>
                <p>Calendar Shared calendars</p>
                <p>
                    <strong>Drive</strong> 5 TB of cloud storage
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
                    <strong>
                        Apps Script Integration with Workspace, as well as
                        extension and automation capabilities
                    </strong>
                </p>
                <p>
                    <strong>Cloud Search</strong> Efficient search across
                    Workspace services.
                </p>
                <p>Security and Management</p>
                <p>Priority 24/7 support.</p>
                <p>1-hour response to critical issues.</p>
                <p>Dedicated Google consultant (minimum of 1000 seats).</p>
                <p>Admin Console: Security and domain management tools.</p>
                <p>
                    Customizable storage and archiving rules for emails and
                    chats.
                </p>
                <p>Data storage regions for Workspace.</p>
                <p>Workspace Security Center.</p>
                <p>Data Loss Prevention for Gmail.</p>
                <p>Data Loss Prevention for Drive.</p>
                <p>Hosted S/MIME certificates for Gmail.</p>
                <p>
                    Gmail integration with supported third-party archiving
                    solutions.
                </p>
                <p>
                    Enterprise-grade access controls with enforced electronic
                    key usage.
                </p>
                <p>Gmail logs analysis in BigQuery.</p>
                <p>&quot;Advanced Protection&quot; program.</p>
                <p>Vault: Data storage, archiving, and search.</p>
                <p>E-Discovery: Storage of emails, chats, and files.</p>
                <p>User activity reports.</p>
                <p>
                    Cloud Identity Premium: User account, device, and
                    application management.
                </p>
                <p>Endpoint Management: Remote management of mobile devices.</p>
                <p>Context-aware access.</p>
            </div>
        )
}
