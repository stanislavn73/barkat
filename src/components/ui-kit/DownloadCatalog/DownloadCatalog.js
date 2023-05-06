import cx from 'classnames'

import pdf_icon from '../../../../public/images/icons/pdf.svg'

import styles from './DownloadCatalog.module.scss'
import Image from 'next/image'

export default function DownloadCatalog({
    className,
    title,
    file,
    name = 'catalog',
}) {
    function handleDownload() {
        window.open(file, name)
        // FileSaver.saveAs(file, name)
    }
    return (
        <div
            className={cx(styles['download-wrapper'], className)}
            onClick={handleDownload}
        >
            <Image className={styles['icon']} src={pdf_icon} />
            <span>{title || 'Cмотри детальнее'}</span>
        </div>
    )
}
