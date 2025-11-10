import { useRef, useState, useEffect } from 'react'
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

    // Detect if this is a static import (has blurDataURL from Next.js)
    const isStaticImport = src && typeof src === 'object' && src.blurDataURL

    // Only use loading state for dynamic images, not static imports
    const [isLoading, setIsLoading] = useState(!isStaticImport)
    const [imageError, setImageError] = useState(false)
    const previousSrc = useRef(src)
    const loadStartTime = useRef(Date.now())

    // Reset loading state when src changes (for carousels), but only for dynamic images
    useEffect(() => {
        const srcChanged = previousSrc.current !== src
        if (srcChanged && !isStaticImport) {
            setIsLoading(true)
            loadStartTime.current = Date.now()
            previousSrc.current = src
        } else if (srcChanged && isStaticImport) {
            // For static imports, just update the ref without loading state
            previousSrc.current = src
        }
    }, [src, isStaticImport])

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

    // Only add loading callbacks for dynamic images
    if (!isStaticImport) {
        const handleLoad = () => {
            const loadTime = Date.now() - loadStartTime.current
            // Only show loading animation if image took more than 100ms to load
            // This prevents flashing on cached/fast-loading images
            if (loadTime > 100) {
                // Small delay for smooth transition
                setTimeout(() => setIsLoading(false), 50)
            } else {
                // Image loaded quickly, remove loading state immediately
                setIsLoading(false)
            }
        }

        imageProps.onLoad = handleLoad
        imageProps.onError = () => {
            setIsLoading(false)
            setImageError(true)
        }
    }

    // For static imports with blur, Next.js handles it automatically
    if (isStaticImport) {
        imageProps.placeholder = 'blur'
        // Remove blurDataURL from imageProps to avoid duplication
        if (imageProps.blurDataURL) {
            delete imageProps.blurDataURL
        }
    }

    return (
        <Image
            {...imageProps}
            className={cx(styles.adjust, className, isLoading && !isStaticImport && styles.loading)}
            style={imageProps.style}
        />
    )
}
