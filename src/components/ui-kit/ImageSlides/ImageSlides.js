import React, { useState } from 'react'
import cx from 'classnames'
import Img from '../Img'

import styles from './ImageSlides.module.scss'

function ProjectsFourthBlock({ data, styles: customStyles }) {
    const [activeSlide, setActiveSlide] = useState('')

    function handleSetActiveSlide(id) {
        return () => {
            setActiveSlide(activeSlide === id ? '' : id)
        }
    }

    const resolvedSlides = cx(styles.slides, customStyles?.slides)
    const resolvedWrapper = cx(
        styles['slide-wrapper'],
        customStyles?.['slide-wrapper']
    )
    const resolvedWrapperActive = cx(
        styles['slide-wrapper_active'],
        customStyles?.['slide-wrapper_active']
    )
    const resolvedWrapperUnactive = cx(
        styles['slide-wrapper_unactive'],
        customStyles?.['slide-wrapper_unactive']
    )

    return (
        <div className={resolvedSlides}>
            {data.map(project => {
                const slideCX = cx(resolvedWrapper, {
                    [resolvedWrapperActive]: project.id === activeSlide,
                    [resolvedWrapperUnactive]:
                        activeSlide && project.id !== activeSlide,
                })

                return (
                    <div
                        key={project.id}
                        className={slideCX}
                        onClick={handleSetActiveSlide(project.id)}
                    >
                        {project.title && (
                            <div className={styles.title}>{project.title}</div>
                        )}
                        <Img
                            src={project.thumbnail}
                            alt={project.title || 'Project image'}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(ProjectsFourthBlock)
