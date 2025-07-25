import React from 'react'
import styles from './PivacyPolicy.module.scss'

export default function PrivacyPolicy() {
    return (
        <>
            <p className={styles['little-text']}>
                ООО «Баркат-Штейн» (Barkat-Stein) заботится о соблюдении Вашей
                конфиденциальности. Мы хотим, чтобы Ваша работа в Интернет, по
                возможности, была максимально приятной и полезной, и Вы
                совершенно спокойно использовали широчайший спектр информации,
                инструментов и возможностей, которые предлагает Интернет.
            </p>

            <p className={styles['little-text']}>
                Личная информация клиентов, собранная при регистрации и
                заполнении формы обратной связи на сайте
                <a
                    className={styles['little-text']}
                    href='https://barkat-3d-ville.com'
                >
                    {' '}
                    barkat-3d-ville.com
                </a>
                , при регистрации на мероприятия, при получении наших материалов
                (или в любое другое время) преимущественно используется для
                подготовки продуктов или услуг в соответствии с Вашими
                потребностями. Ваша информация не будет передана или продана
                третьим сторонам.
            </p>

            <h5>Какие данные собираются на сайте</h5>
            <p className={styles['little-text']}>
                При добровольной регистрации на получение нашей рассылки и
                материалов по продуктам Вы отправляете свои данные через форму
                регистрации/обратной связи.
            </p>

            <h5>С какой целью собираются эти данные </h5>
            <p className={styles['little-text']}>
                Имя используется для обращения лично к Вам, Ваш e-mail для
                отправки Вам писем рассылок, новостей, полезных материалов,
                коммерческих предложений. Ваши данные не передаются третьим
                лицам, ни при каких условиях кроме случаев, связанных с
                исполнением требований законодательства. Ваше данные находятся
                на защищенных серверах Barkat-Stein и используются в
                соответствии с его политикой конфиденциальности. Вы можете
                отказаться от получения писем рассылки и удалить из базы данных
                свои контактные данные в любой момент, кликнув на ссылку для
                отписки, присутствующую в каждом письме.
            </p>

            <h5>Как эти данные используются</h5>
            <p className={styles['little-text']}>
                На сайте{' '}
                <a
                    className={styles['little-text']}
                    href='https://barkat-3d-ville.com'
                >
                    barkat-3d-ville.com
                </a>
                используются куки (Cookies), данные о посетителях сервисов
                Yandex Metrika и Google Analytics. При помощи этих данных
                собирается информация о действиях посетителей на сайте с целью
                улучшения его содержания, улучшения функциональных возможностей
                сайта и, как следствие, создания качественного контента и
                сервисов для посетителей. Вы можете в любой момент изменить
                настройки своего браузера так, чтобы браузер блокировал все
                файлы cookie или оповещал об отправке этих файлов. Учтите при
                этом, что некоторые функции и сервисы не смогут работать должным
                образом.
            </p>
            <h5>Как эти данные защищаются</h5>
            <p className={styles['little-text']}>
                Для защиты Вашей личной информации мы используем разнообразные
                административные, управленческие и технические меры
                безопасности. Наша Компания придерживается различных
                международных стандартов контроля, направленных на операции с
                личной информацией, которые включают определенные меры контроля
                по защите информации, собранной в Интернет. Наших сотрудников
                инструктируют выполнять эти меры контроля, они ознакомлены с
                нашей Политикой о конфиденциальности, нормами и инструкциями.
                Тем не менее несмотря на то, что мы стремимся обезопасить Вашу
                личную информацию, Вы тоже должны принимать меры, чтобы защитить
                ее. Мы настоятельно рекомендуем Вам принимать все возможные меры
                предосторожности во время пребывания в Интернете. Организованные
                нами услуги и веб-сайты предусматривают меры по защите от
                утечки, несанкционированного использования и изменения
                информации, которую мы контролируем. Несмотря на то, что мы
                делаем все возможное, чтобы обеспечить целостность и
                безопасность своей сети и систем, мы не можем гарантировать, что
                наши меры безопасности предотвратят незаконный доступ к этой
                информации хакеров сторонних организаций. В случае изменения
                данной политики конфиденциальности вы сможете прочитать об этих
                изменениях на этой странице или, в особых случаях, получить
                уведомление на свой e-mail. Для связи с администратором сайта по
                любым вопросам вы можете написать письмо на e-mail:
                info@barkat-3d-ville.com
            </p>
        </>
    )
}
