export const TeamViewerXPick = () => {
    return (
        <>
            <FormattedMessage
                id='page.soft.xPick.descriptionStart'
                values={{
                    b: chunks => {
                        console.log('chunks', chunks)
                        return <p>{chunks}</p>
                    },
                }}
            ></FormattedMessage>
            <ul>
                <li>
                    Автоматизация процессов сбора товаров, что снижает затраты
                    на трудовые ресурсы и время на выполнение задач.
                </li>
                <li>
                    Уменьшение ошибок и повышение точности сбора товаров
                    благодаря технологии компьютерного зрения и машинного
                    обучения.
                </li>
                <li>
                    Мониторинг производительности склада и возможность анализа
                    результатов, что помогает оптимизировать процессы и улучшить
                    эффективность работы.
                </li>
                <li>
                    Поддержка интеграции с другими системами управления складом
                    и производством, что обеспечивает более полную автоматизацию
                    процессов в предприятии.
                </li>
            </ul>
        </>
    )
}