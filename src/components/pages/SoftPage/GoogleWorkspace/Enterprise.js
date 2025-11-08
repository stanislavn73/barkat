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
                        onClick={handleOpenSoftModal('workspaceEnterprise')}
                    >
                        Google Workspace Enterprise
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

export const Enterprise = () => {
    const { t } = useTranslation('google-workspace')

    return (
        <div className={styles.tableBody}>
            <ButtonsSection />

            <p>
                <strong>Gmail</strong> {t.enterprise.gmail}
            </p>

            <p>
                <strong>Meet</strong> {t.enterprise.meet}
            </p>

            <p>
                <strong>Chat</strong> {t.enterprise.chat}
            </p>

            <p>
                <strong>Calendar</strong> {t.enterprise.calendar}
            </p>

            <p>
                <strong>Drive</strong> {t.enterprise.drive}
            </p>

            <p>
                <strong>Docs</strong> {t.enterprise.docs}
            </p>

            <p>
                <strong>Sheets</strong> {t.enterprise.sheets}
            </p>

            <p>
                <strong>Slides</strong> {t.enterprise.slides}
            </p>

            <p>
                <strong>Forms</strong> {t.enterprise.forms}
            </p>

            <p>
                <strong>Sites</strong> {t.enterprise.sites}
            </p>

            <p>
                <strong>Google Keep</strong> {t.enterprise.googleKeep}
            </p>

            <p>
                <strong>Currents</strong> {t.enterprise.currents}
            </p>

            <p>
                <strong>Apps Script</strong> {t.enterprise.appsScript}
            </p>

            <p>
                <strong>Cloud Search</strong> {t.enterprise.cloudSearch}
            </p>

            <p className={styles.subTitle}>{t.enterprise.securityTitle}</p>

            <p>
                <strong>{t.enterprise.prioritySupport}</strong>
            </p>

            <p>{t.enterprise.criticalResponse}</p>

            <p>{t.enterprise.googleConsultant}</p>

            <p>
                <strong>Admin Console</strong> {t.enterprise.adminConsole}
            </p>

            <p>{t.enterprise.retentionRules}</p>

            <p>{t.enterprise.dataRegions}</p>

            <p>{t.enterprise.securityCenter}</p>

            <p>{t.enterprise.dlpGmail}</p>

            <p>{t.enterprise.dlpDrive}</p>

            <p>{t.enterprise.smimeCertificates}</p>

            <p>{t.enterprise.gmailIntegration}</p>

            <p>{t.enterprise.enterpriseAccessControls}</p>

            <p>{t.enterprise.gmailLogs}</p>

            <p>{t.enterprise.advancedProtection}</p>

            <p>
                <strong>Vault</strong> {t.enterprise.vault}
            </p>

            <p>{t.enterprise.eDiscovery}</p>

            <p>{t.enterprise.userReports}</p>

            <p>
                <strong>Cloud Identity Premium</strong>{' '}
                {t.enterprise.cloudIdentityPremium}
            </p>

            <p>
                <strong>Endpoint Management</strong>{' '}
                {t.enterprise.endpointManagement}
            </p>

            <p>{t.enterprise.contextAwareAccess}</p>
        </div>
    )
}
