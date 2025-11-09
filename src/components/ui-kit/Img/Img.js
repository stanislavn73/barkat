import { useRef, useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'
import styles from './img.module.scss'
import { v4 as uuidv4 } from 'uuid'

export default function Img({
    src,
    className,
    alt,
    width,
    height,
    fill = false,
    sizes,
    priority = false,
    placeholder = 'blur',
    blurDataURL,
    quality = 85,
    ...rest
}) {
    const id = useRef(uuidv4())
    const [isLoading, setIsLoading] = useState(true)
    const [imageError, setImageError] = useState(false)

    // Default blur placeholder for JPEG/PNG images
    const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='

    // Determine if we should use a blur placeholder
    const shouldUseBlur = placeholder === 'blur' && !fill && typeof src === 'string' && (src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png'))

    // Common responsive sizes for different layouts
    const defaultSizes = fill
        ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        : undefined

    const imageProps = {
        src,
        alt: alt || '',
        quality,
        ...rest
    }

    if (fill) {
        // Fill layout for responsive images in containers
        imageProps.fill = true
        imageProps.sizes = sizes || defaultSizes
        imageProps.style = { objectFit: 'cover', ...rest.style }
    } else if (width && height) {
        // Fixed dimensions with proper aspect ratio
        imageProps.width = width
        imageProps.height = height
        imageProps.sizes = sizes
    } else {
        // Fallback: use reasonable defaults for images without dimensions
        // This helps Next.js optimize properly
        imageProps.width = 1920
        imageProps.height = 1080
        imageProps.sizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw'
    }

    // Add blur placeholder if applicable
    if (shouldUseBlur) {
        imageProps.placeholder = 'blur'
        imageProps.blurDataURL = blurDataURL || defaultBlurDataURL
    }

    // Add priority if specified (for above-the-fold images)
    if (priority) {
        imageProps.priority = true
    } else {
        imageProps.loading = 'lazy'
    }

    // Add loading callbacks
    imageProps.onLoadingComplete = () => setIsLoading(false)
    imageProps.onError = () => {
        setIsLoading(false)
        setImageError(true)
    }

    // For static imports with blur, Next.js handles it automatically
    if (src && typeof src === 'object' && src.blurDataURL) {
        imageProps.placeholder = 'blur'
        delete imageProps.blurDataURL
    }

    // Inline skeleton loader that doesn't affect layout
    const imageStyle = {
        ...imageProps.style,
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
        ...(isLoading && {
            background: 'linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%, #f0f0f0 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
        }),
    }

    return (
        <Image
            {...imageProps}
            className={cx(styles.adjust, className)}
            style={imageStyle}
        />
    )
}
