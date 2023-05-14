import Padded from '../../../ui-kit/Padded/Padded'
// import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import xPick from '../../../../../public/images/teamViewer/xPick.png'
import xMake from '../../../../../public/images/teamViewer/xMake.png'
import xInspect from '../../../../../public/images/teamViewer/xInspect.png'
import xAssist from '../../../../../public/images/teamViewer/xAssist.png'
import { ModalConsumer, useTranslation } from '../../../layouts/Layout'
import FullPage from '../../../ui-kit/FullPage'
import styles from '../SoftPage.module.scss'
import teamViewerStyles from './TeamViewer.module.scss'

const teamViewerItems = [
    {
        id: 1,
        title: 'xPick',
        type: 'xPick',
        textKey: 'xPick',
        logo: xPick,
    },
    {
        id: 2,
        title: 'xMake',
        type: 'xMake',
        logo: xMake,
    },
    {
        id: 3,
        title: 'xInspect',
        type: 'xInspect',
        logo: xInspect,
    },
    {
        id: 4,
        title: 'xAssist',
        type: 'xAssist',
        logo: xAssist,
    },
]
const TeamViewer = () => {
    const { t } = useTranslation('soft')
    return (
        <FullPage min className={styles['soft-block-wrapper']}>
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['title-container']}>
                    <div className={styles['soft-block-title']}>
                        TeamViewer Frontline
                    </div>
                </div>
                <PlainText className={styles['soft-plain-text']}>
                    {t.teamViewerFrontline}
                </PlainText>
                <PlainText className={styles['soft-plain-text']}>
                    <a href='https://www.teamviewer.com/'>teamviewer.com</a>
                </PlainText>
                <div className={styles['soft-items-wrapper']}>
                    {teamViewerItems.map(item => (
                        <div key={item.id} className={styles['soft-item']}>
                            <Img
                                className={teamViewerStyles.logo}
                                src={item.logo}
                            />
                            <ModalConsumer>
                                {({ handleOpenSoftModal }) => (
                                    <div
                                        className={styles.title}
                                        onClick={handleOpenSoftModal(item.type)}
                                    >
                                        {item.title}
                                    </div>
                                )}
                            </ModalConsumer>
                            <PlainText className={styles['item-text']}>
                                {t[item.type].resume}
                            </PlainText>
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
                    ))}
                </div>
            </Padded>
        </FullPage>
    )
}

export default TeamViewer
