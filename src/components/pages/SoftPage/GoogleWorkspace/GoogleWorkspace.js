import FullPage from '../../../ui-kit/FullPage'
import styles from '../SoftPage.module.scss'
import Padded from '../../../ui-kit/Padded'
import PlainText from '../../../ui-kit/PlainText'
import { useTranslation } from '../../../layouts/Layout'
import { StarterText } from './StarterText'
import { StandardText } from './StandardText'
import { BusinessPlus } from './BusinessPlus'
import { Enterprise } from './Enterprise'

export const GoogleWorkspace = () => {
    const { t } = useTranslation('soft')

    return (
        <FullPage min className={styles['soft-block-wrapper']}>
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['title-container']}>
                    <div className={styles['soft-block-title']}>
                        Google Workspace
                    </div>
                </div>
                <PlainText className={styles['soft-plain-text']}>
                    {t.googleWorkspace}
                </PlainText>
                <PlainText className={styles['soft-plain-text']}>
                    <a href='https://workspace.google.com/'>
                        workspace.google.com
                    </a>
                </PlainText>
                <PlainText
                    className={styles['soft-plain-text']}
                    style={{ textAlign: 'center', fontWeight: 500 }}
                >
                    {t.googleWorkspaceTable}
                </PlainText>

                <div className={styles['soft-items-wrapper']}>
                    <div className={styles.tableContainer}>
                        <StarterText />
                        <StandardText />
                        <BusinessPlus />
                        <Enterprise />
                    </div>
                </div>
            </Padded>
        </FullPage>
    )
}
