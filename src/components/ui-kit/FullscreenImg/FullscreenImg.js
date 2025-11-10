import { useState } from 'react'
import cx from 'classnames'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function Img({ src, className, alt, ...rest }) {
    const [isFull, setIsFull] = useState(false)

    function handleImageClick(state) {
        return () => {
            setIsFull(state)
        }
    }

    // Detect if this is a static import
    const isStaticImport = src && typeof src === 'object' && src.blurDataURL

    // Common image props
    const baseImageProps = {
        src,
        alt: alt || 'Click to enlarge',
        quality: 95,
        ...rest
    }

    // For static imports, use Next.js blur
    if (isStaticImport) {
        baseImageProps.placeholder = 'blur'
    }

    // Get dimensions from static import if available, otherwise use defaults
    const width = isStaticImport ? src.width : 1920
    const height = isStaticImport ? src.height : 1080

    return (
        <>
            {isFull &&
                ReactDOM.createPortal(
                    <div
                        className={styles['fullscreen-image']}
                        onClick={handleImageClick(false)}
                    >
                        <Image
                            {...baseImageProps}
                            alt={alt || 'Fullscreen image'}
                            fill
                            sizes="100vw"
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>,
                    document.body
                )}
            <Image
                {...baseImageProps}
                className={cx(styles['full-image-thumb'], className)}
                onClick={handleImageClick(true)}
                width={width}
                height={height}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                style={{ ...rest.style, width: '100%', height: 'auto' }}
            />
        </>
    )
}
