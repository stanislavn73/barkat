import React from 'react'
import FullPage from '../../../ui-kit/FullPage/FullPage'
import PageImageTitle from '../../../ui-kit/PageImageTitle/PageImageTitle'
import { HeaderThumb } from '../../../ui-kit/Header'
import * as backgroundImage from '../../../../../public/images/pages/soft/title-back.jpg'
import { useTranslation } from '../../../layouts/Layout'

function ProjectsFirstScreen() {
    const { t } = useTranslation('soft')
    const { title, description } = t.solutions

    return (
        <FullPage className='block-wrapper'>
            <HeaderThumb />
            <PageImageTitle
                src={backgroundImage}
                title={title}
                subTitle={description}
            />
        </FullPage>
    )
}

export default ProjectsFirstScreen
