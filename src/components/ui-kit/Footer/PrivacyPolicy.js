import React from 'react'
import { ModalConsumer } from '../../layouts/Layout'
import './PrivacyPolicy.less'

export default function PrivacyPolicy() {
  return (
    <div className='label-wrapper' >
      <ModalConsumer>
        {({ handleOpenSoftModal }) => (
          <div className='label-container' onClick={handleOpenSoftModal('PrivacyPolicy')}>
            <p className='label-title'>Положение о </p><p className='label-title underlined' >политике конфиденциальности</p></div>
        )}
      </ModalConsumer>
    </div>
  )
}
