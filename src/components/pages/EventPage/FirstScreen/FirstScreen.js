import FullPage from '../../../ui-kit/FullPage'
import * as backgroundImage from '../../../../../public/images/pages/events/Facebook Logo 4.jpg'
import PageImageTitle from '../../../ui-kit/PageImageTitle/PageImageTitle'

function Eventpage() {
    const screenTitle = 'Будь в курсе событий'
    const subTitle =
        'Переходите на наши страницы в социальных сетях и получайте доступ к последним отраслевым новостям'

    return (
        <FullPage>
            <PageImageTitle
                src={backgroundImage}
                title={screenTitle}
                subTitle={subTitle}
            />
        </FullPage>
    )
}

export default Eventpage
