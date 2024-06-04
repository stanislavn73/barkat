import cx from 'classnames'

import pdf_icon from '../../../../public/images/icons/pdf.svg'

import styles from './DownloadCatalog.module.scss'
import Image from 'next/image'
import { useTranslation } from '../../layouts/Layout'
import { get } from '../../utils/facades/get'

export default function DownloadCatalog({ className, file, name = 'catalog' }) {
    const { t } = useTranslation('common')

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
            <span>{get(t, 'downloadButton')}</span>
        </div>
    )
}
