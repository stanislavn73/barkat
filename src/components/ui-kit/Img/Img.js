import { useRef } from 'react'
import Image from 'next/image'
import cx from 'classnames'
import styles from './img.module.scss'
import { v4 as uuidv4 } from 'uuid'

export default function Img({ src, className, ...rest }) {
    const id = useRef(uuidv4())

    return (
        <Image
            // style={{ height: 'auto' }}
            src={src}
            className={cx(styles.adjust, className)}
            alt={id}
            {...rest}
            loading='lazy'
        />
    )
}
