import { useState, useEffect } from 'react'
import cx from 'classnames'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function Img({ src, className, alt, ...rest }) {
    const [isFull, setIsFull] = useState(false)
    const [highResLoaded, setHighResLoaded] = useState(false)

    // Detect if this is a static import
    const isStaticImport = src && typeof src === 'object' && src.blurDataURL

    // Get dimensions from static import if available, otherwise use defaults
    const width = isStaticImport ? src.width : 1920
    const height = isStaticImport ? src.height : 1080

    // Common image props for thumbnail (low quality, fast loading)
    const thumbnailProps = {
        src,
        alt: alt || 'Click to enlarge',
        quality: 65, // Lower quality for faster thumbnail loading
        ...rest
    }

    // Common image props for fullscreen (high quality, progressive loading)
    const fullscreenProps = {
        src,
        alt: alt || 'Fullscreen image',
        quality: 90, // High quality for fullscreen view
        ...rest
    }

    // For static imports, use Next.js blur
    if (isStaticImport) {
        thumbnailProps.placeholder = 'blur'
        fullscreenProps.placeholder = 'blur'
    }

    // Handle modal open - preload high-res image in background
    const handleImageClick = (state) => {
        return () => {
            if (state && !highResLoaded) {
                // Opening modal - start preloading high-res version
                // The Image component will handle the actual loading
                setHighResLoaded(false)
            }
            setIsFull(state)
        }
    }

    // Reset high-res loaded state when modal closes
    useEffect(() => {
        if (!isFull) {
            // Small delay before resetting to avoid flash on reopen
            const timer = setTimeout(() => setHighResLoaded(false), 300)
            return () => clearTimeout(timer)
        }
    }, [isFull])

    return (
        <>
            {isFull &&
                ReactDOM.createPortal(
                    <div
                        className={styles['fullscreen-image']}
                        onClick={handleImageClick(false)}
                    >
                        {/* Low-res version - loads instantly from thumbnail */}
                        <Image
                            {...thumbnailProps}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'contain',
                                opacity: highResLoaded ? 0 : 1,
                                transition: 'opacity 300ms ease-in-out'
                            }}
                            priority
                        />
                        {/* High-res version - fades in when loaded */}
                        <Image
                            {...fullscreenProps}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'contain',
                                opacity: highResLoaded ? 1 : 0,
                                transition: 'opacity 300ms ease-in-out'
                            }}
                            priority
                            onLoad={() => setHighResLoaded(true)}
                        />
                    </div>,
                    document.body
                )}
            {/* Thumbnail - optimized for fast loading */}
            <Image
                {...thumbnailProps}
                className={cx(styles['full-image-thumb'], className)}
                onClick={handleImageClick(true)}
                width={width}
                height={height}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 400px"
                style={{ ...rest.style, width: '100%', height: 'auto' }}
            />
        </>
    )
}
