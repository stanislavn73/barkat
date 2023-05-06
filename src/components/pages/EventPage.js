import FullPage from '../ui-kit/FullPage'
import * as backgroundImage from '../../../public/images/slider/projects/1.4.jpg'
import Img from '../ui-kit/Img'
import styles from './EventPage.module.scss'

class Eventpage extends React.PureComponent {
    render() {
        return (
            <FullPage>
                <Img
                    src={backgroundImage}
                    className={styles['background-image']}
                />
            </FullPage>
        )
    }
}

export default Eventpage
