import React, { useState } from 'react'
import cx from 'classnames'
import Image from 'next/image'

import styles from './ImageSlides.module.scss'

function ProjectsFourthBlock({ data, styles: customStyles }) {
    const [activeSlide, setActiveSlide] = useState('')
    const [hoveredSlide, setHoveredSlide] = useState('')
    const [highResLoaded, setHighResLoaded] = useState(new Set())

    function handleSetActiveSlide(id) {
        return () => {
            setActiveSlide(activeSlide === id ? '' : id)
        }
    }

    function handleMouseEnter(id) {
        return () => {
            setHoveredSlide(id)
        }
    }

    function handleMouseLeave() {
        setHoveredSlide('')
    }

    // Mark high-res as loaded for a specific slide
    const markHighResLoaded = (id) => {
        setHighResLoaded(prev => new Set(prev).add(id))
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

                const isExpanded = project.id === activeSlide || project.id === hoveredSlide
                const hasHighRes = highResLoaded.has(project.id)

                // Detect if this is a static import
                const isStaticImport = project.thumbnail && typeof project.thumbnail === 'object' && project.thumbnail.blurDataURL

                // Get dimensions from static import if available
                const width = isStaticImport ? project.thumbnail.width : 1920
                const height = isStaticImport ? project.thumbnail.height : 1080

                // Low-res props for initial/collapsed state
                const lowResProps = {
                    src: project.thumbnail,
                    alt: project.title || 'Project image',
                    quality: 60, // Lower quality for small display
                    width,
                    height,
                    sizes: '(max-width: 768px) 50vw, 25vw', // Small sizes for collapsed state
                    style: {
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }
                }

                // High-res props for expanded state
                const highResProps = {
                    src: project.thumbnail,
                    alt: project.title || 'Project image',
                    quality: 85, // Higher quality for expanded view
                    width,
                    height,
                    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw',
                    style: {
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        opacity: hasHighRes ? 1 : 0,
                        transition: 'opacity 300ms ease-in-out',
                    }
                }

                // Add blur placeholder for static imports
                if (isStaticImport) {
                    lowResProps.placeholder = 'blur'
                    highResProps.placeholder = 'blur'
                }

                return (
                    <div
                        key={project.id}
                        className={slideCX}
                        onClick={handleSetActiveSlide(project.id)}
                        onMouseEnter={handleMouseEnter(project.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {project.title && (
                            <div className={styles.title}>{project.title}</div>
                        )}

                        {/* Low-res image - always visible, hidden when high-res loads */}
                        <Image
                            {...lowResProps}
                            style={{
                                ...lowResProps.style,
                                opacity: hasHighRes ? 0 : 1,
                                transition: 'opacity 300ms ease-in-out',
                            }}
                        />

                        {/* High-res image - loads on hover/click, fades in when ready */}
                        {isExpanded && (
                            <Image
                                {...highResProps}
                                priority={project.id === activeSlide}
                                onLoad={() => markHighResLoaded(project.id)}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(ProjectsFourthBlock)
