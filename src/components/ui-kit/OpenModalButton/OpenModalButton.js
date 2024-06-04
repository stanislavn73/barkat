import { ModalConsumer, useTranslation } from '../../layouts/Layout'
import styles from './styles.module.scss'

export default function OpenModalButton() {
    const { t } = useTranslation('common')
    return (
        <ModalConsumer>
            {({ handleOpenForm }) => {
                return (
                    <div
                        className={styles['modal-open-button']}
                        onClick={handleOpenForm}
                    >
                        {t.contactUsButton}
                    </div>
                )
            }}
        </ModalConsumer>
    )
}
