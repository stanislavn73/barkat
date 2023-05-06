import { ModalConsumer } from '../../layouts/Layout'
import styles from './styles.module.scss'

export default function OpenModalButton() {
    return (
        <ModalConsumer>
            {({ handleOpenForm }) => {
                return (
                    <div
                        className={styles['modal-open-button']}
                        onClick={handleOpenForm}
                    >
                        Написать нам
                    </div>
                )
            }}
        </ModalConsumer>
    )
}
