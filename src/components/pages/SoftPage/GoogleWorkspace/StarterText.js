import { ModalConsumer, useTranslation } from '../../../layouts/Layout'
import React from 'react'
import styles from './CardStyles.module.scss'
import softStyles from '../SoftPage.module.scss'

const ButtonsSection = () => {
    const {
        t: { checkPrice },
    } = useTranslation('common')
    return (
        <>
            <ModalConsumer>
                {({ handleOpenSoftModal }) => (
                    <p
                        className={styles.title}
                        onClick={handleOpenSoftModal('workspaceStarter')}
                    >
                        Google Workspace Business Starter
                    </p>
                )}
            </ModalConsumer>
            <ModalConsumer>
                {({ handleOpenForm }) => (
                    <div
                        className={styles.buttonContainer}
                        onClick={handleOpenForm}
                    >
                        <div className={softStyles.button}>{checkPrice}</div>
                    </div>
                )}
            </ModalConsumer>
        </>
    )
}

export const StarterText = () => {
    const { t } = useTranslation('google-workspace')

    return (
        <div className={styles.tableBody}>
            <ButtonsSection />

            <p>
                <strong>Gmail</strong> {t.starter.gmail}
            </p>

            <p>
                <strong>Meet</strong> {t.starter.meet}
            </p>

            <p>
                <strong>Chat</strong> {t.starter.chat}
            </p>

            <p>
                <strong>Calendar</strong> {t.starter.calendar}
            </p>

            <p>
                <strong>Drive</strong> {t.starter.drive}
            </p>

            <p>
                <strong>Docs</strong> {t.starter.docs}
            </p>

            <p>
                <strong>Sheets</strong> {t.starter.sheets}
            </p>

            <p>
                <strong>Slides</strong> {t.starter.slides}
            </p>

            <p>
                <strong>Forms</strong> {t.starter.forms}
            </p>

            <p>
                <strong>Sites</strong> {t.starter.sites}
            </p>

            <p>
                <strong>Google Keep</strong> {t.starter.googleKeep}
            </p>

            <p>
                <strong>Currents</strong> {t.starter.currents}
            </p>

            <p>
                <strong>Apps Script</strong> {t.starter.appsScript}
            </p>

            <p className={styles.subTitle}>{t.starter.securityTitle}</p>

            <p>
                <strong>{t.starter.standardSupport}</strong>
            </p>

            <p>
                <strong>Admin Console</strong> {t.starter.adminConsole}
            </p>

            <p>{t.starter.enterpriseAccessControls}</p>

            <p>{t.starter.advancedProtection}</p>

            <p>
                <strong>Endpoint Management</strong>{' '}
                {t.starter.endpointManagement}
            </p>
        </div>
    )
}
