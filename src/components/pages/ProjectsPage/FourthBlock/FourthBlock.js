import { memo } from 'react'
import FullPage from '../../../ui-kit/FullPage'
import ImageSlides from '../../../ui-kit/ImageSlides'
import projects from '../../../utils/projects'

function ProjectsFourthBlock() {
    return (
        <FullPage>
            <ImageSlides data={projects} />
        </FullPage>
    )
}

export default memo(ProjectsFourthBlock)
