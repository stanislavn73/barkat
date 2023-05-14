import React, { useEffect, useState } from 'react'
import FadeInWrapper from '../FadeInWrapper'
import { ModalConsumer } from '../../layouts/Layout'
import Padded from '../Padded'
import Img from '../Img'
import * as mobilefirst from '../../../../public/images/pages/2.2.jpg'

import styles from './PageImageTitle.module.scss'

function PageImageTitle({ src, title, subTitle }) {
    const [mobileSize, setMobileSize] = useState(false)

    const handleMobileDetect = e => {
        if (e.target.outerWidth < 400 && title === 'Наши проекты') {
            return setMobileSize(true)
        }
        setMobileSize(false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleMobileDetect)
        if (window.outerWidth < 400 && title === 'Наши проекты') {
            setMobileSize(true)
        } else {
            setMobileSize(false)
        }
        return () => removeEventListener('resize', handleMobileDetect)
    }, [])

    return (
        <div className={styles['image-title-wrapper']}>
            {mobileSize ? (
                <Img src={mobilefirst} className={styles['background-image']} />
            ) : (
                <Img src={src} className={styles['background-image']} />
            )}
            <FadeInWrapper delay='0.4'>
                <Padded>
                    <div className={styles['title-wrapper']}>
                        <div className={styles['title-block']}>
                            <div className={styles['text-wrapper']}>
                                <div className={styles['title']}>{title}</div>
                                <div className={styles['subtitle-text']}>
                                    {subTitle}
                                </div>
                            </div>
                        </div>
                        <ModalConsumer>
                            {({ handleOpenForm }) => (
                                <div
                                    className={styles.button}
                                    onClick={handleOpenForm}
                                >
                                    Написать нам
                                </div>
                            )}
                        </ModalConsumer>
                    </div>
                </Padded>
            </FadeInWrapper>
        </div>
    )
}

export default React.memo(PageImageTitle)
