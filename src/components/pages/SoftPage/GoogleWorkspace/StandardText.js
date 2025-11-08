import { ModalConsumer, useTranslation } from '../../../layouts/Layout'
import React from 'react'
import styles from './CardStyles.module.scss'
import softStyles from '../SoftPage.module.scss'

const ContactUsButton = () => {
    const {
        t: { checkPrice },
    } = useTranslation('common')

    return (
        <>
            <ModalConsumer>
                {({ handleOpenSoftModal }) => (
                    <p
                        className={styles.title}
                        onClick={handleOpenSoftModal('workspaceStandard')}
                    >
                        Google Workspace Business Standard
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

export const StandardText = () => {
    const { t } = useTranslation('google-workspace')

    return (
        <div className={styles.tableBody}>
            <ContactUsButton />

            <p>
                <strong>Gmail</strong> {t.standard.gmail}
            </p>

            <p>
                <strong>Meet</strong> {t.standard.meet}
            </p>

            <p>
                <strong>Chat</strong> {t.standard.chat}
            </p>

            <p>
                <strong>Calendar</strong> {t.standard.calendar}
            </p>

            <p>
                <strong>Drive</strong> {t.standard.drive}
            </p>

            <p>
                <strong>Docs</strong> {t.standard.docs}
            </p>

            <p>
                <strong>Sheets</strong> {t.standard.sheets}
            </p>

            <p>
                <strong>Slides</strong> {t.standard.slides}
            </p>

            <p>
                <strong>Forms</strong> {t.standard.forms}
            </p>

            <p>
                <strong>Sites</strong> {t.standard.sites}
            </p>

            <p>
                <strong>Google Keep</strong> {t.standard.googleKeep}
            </p>

            <p>
                <strong>Currents</strong> {t.standard.currents}
            </p>

            <p>
                <strong>Apps Script</strong> {t.standard.appsScript}
            </p>

            <p>
                <strong>Cloud Search</strong> {t.standard.cloudSearch}
            </p>

            <p className={styles.subTitle}>{t.standard.securityTitle}</p>

            <p>
                <strong>{t.standard.standardSupport}</strong>
            </p>

            <p>
                <strong>Admin Console</strong> {t.standard.adminConsole}
            </p>

            <p>{t.standard.retentionRules}</p>

            <p>{t.standard.dataRegions}</p>

            <p>{t.standard.enterpriseAccessControls}</p>

            <p>{t.standard.advancedProtection}</p>

            <p>{t.standard.eDiscovery}</p>

            <p>{t.standard.userReports}</p>

            <p>
                <strong>Endpoint Management</strong>{' '}
                {t.standard.endpointManagement}
            </p>
        </div>
    )
}
