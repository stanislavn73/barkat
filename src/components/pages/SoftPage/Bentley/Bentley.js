import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer, useTranslation } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import BentleyLogo from '../../../../../public/images/Bentley.jpg'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'

const Bentley = () => {
    const { t: tCommon } = useTranslation('common')
    const { t: tSoft } = useTranslation('soft')

    const allPlanItems = [
        {
            id: 1,
            title: 'MicroStation',
            type: 'MicroStation',
            text: tSoft.microStation.resume,
        },
        {
            id: 2,
            title: 'PLAXIS',
            type: 'Plaxis',
            text: tSoft.plaxis.resume,
        },
        {
            id: 3,
            title: 'STAAD',
            type: 'Staad',
            text: tSoft.staad.resume,
        },
        {
            id: 4,
            title: 'ContextCapture',
            type: 'ContextCapture',
            text: tSoft.contextCapture.resume,
        },
        {
            id: 5,
            title: 'SYNCHRO',
            type: 'SYNCHRO',
            text: tSoft.synchro.resume,
        },
        {
            id: 6,
            title: 'ProStructures',
            type: 'ProStructures',
            text: tSoft.proStructures.resume,
        },
    ]

    return (
        <FullPage min className={styles['soft-block-wrapper']}>
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['title-container']}>
                    <div className={styles['soft-block-title']}>Bentley</div>
                    <SocialMedia page='Bentley' />
                </div>
                {tSoft.bentley.resume.map(item => (
                    <PlainText
                        key={`soft-plain-text ${item}`}
                        className={styles['soft-plain-text']}
                    >
                        {item}
                    </PlainText>
                ))}

                <PlainText className={styles['soft-plain-text']}>
                    <a href='http://www.bentley.com'>www.bentley.com</a>
                </PlainText>
                <div className={styles['soft-items-wrapper']}>
                    {allPlanItems.map(item => (
                        <div key={item.id} className={styles['soft-item']}>
                            <Img className={styles['logo']} src={BentleyLogo} />
                            <ModalConsumer>
                                {({ handleOpenSoftModal }) => (
                                    <div
                                        className={styles['title']}
                                        onClick={handleOpenSoftModal(item.type)}
                                    >
                                        {item.title}
                                    </div>
                                )}
                            </ModalConsumer>
                            <PlainText className={styles['item-text']}>
                                {item.text}
                            </PlainText>
                            <ModalConsumer>
                                {({ handleOpenForm }) => (
                                    <div
                                        className={styles['button']}
                                        onClick={handleOpenForm}
                                    >
                                        {tCommon.contactUsButton}
                                    </div>
                                )}
                            </ModalConsumer>
                        </div>
                    ))}
                </div>
            </Padded>
        </FullPage>
    )
}

export default Bentley
