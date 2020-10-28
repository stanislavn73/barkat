import React from 'react'
import cx from 'classnames';
import FileSaver from 'file-saver';

import pdf_icon from '../../../assets/images/icons/pdf.svg'

import './DownloadCatalog.less';

export default function DownloadCatalog({ className, title, file, name = 'catalog' }) {
  function handleDownload() {
    window.open(file, name);
    // FileSaver.saveAs(file, name)
  }
  return (
    <div className={cx('download-wrapper', className)} onClick={handleDownload} >
      <img className='icon' src={pdf_icon} />
      <span>{title || 'Cмотри детальнее'}</span>
    </div>
  )
}