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
                        onClick={handleOpenSoftModal('workspaceBusinessPlus')}
                    >
                        Google Workspace Business Plus
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

export const BusinessPlus = () => {
    const { t } = useTranslation('google-workspace')

    return (
        <div className={styles.tableBody}>
            <ButtonsSection />

            <p>
                <strong>Gmail</strong> {t.businessPlus.gmail}
            </p>

            <p>
                <strong>Meet</strong> {t.businessPlus.meet}
            </p>

            <p>
                <strong>Chat</strong> {t.businessPlus.chat}
            </p>

            <p>
                <strong>Calendar</strong> {t.businessPlus.calendar}
            </p>

            <p>
                <strong>Drive</strong> {t.businessPlus.drive}
            </p>

            <p>
                <strong>Docs</strong> {t.businessPlus.docs}
            </p>

            <p>
                <strong>Sheets</strong> {t.businessPlus.sheets}
            </p>

            <p>
                <strong>Slides</strong> {t.businessPlus.slides}
            </p>

            <p>
                <strong>Forms</strong> {t.businessPlus.forms}
            </p>

            <p>
                <strong>Sites</strong> {t.businessPlus.sites}
            </p>

            <p>
                <strong>Google Keep</strong> {t.businessPlus.googleKeep}
            </p>

            <p>
                <strong>Currents</strong> {t.businessPlus.currents}
            </p>

            <p>
                <strong>Apps Script</strong> {t.businessPlus.appsScript}
            </p>

            <p>
                <strong>Cloud Search</strong> {t.businessPlus.cloudSearch}
            </p>

            <p className={styles.subTitle}>{t.businessPlus.securityTitle}</p>

            <p>
                <strong>{t.businessPlus.prioritySupport}</strong>
            </p>

            <p>{t.businessPlus.criticalResponse}</p>

            <p>{t.businessPlus.googleConsultant}</p>

            <p>
                <strong>Admin Console</strong> {t.businessPlus.adminConsole}
            </p>

            <p>{t.businessPlus.retentionRules}</p>

            <p>{t.businessPlus.dataRegions}</p>

            <p>{t.businessPlus.securityCenter}</p>

            <p>{t.businessPlus.dlpGmail}</p>

            <p>{t.businessPlus.dlpDrive}</p>

            <p>{t.businessPlus.smimeCertificates}</p>

            <p>{t.businessPlus.gmailIntegration}</p>

            <p>{t.businessPlus.enterpriseAccessControls}</p>

            <p>{t.businessPlus.gmailLogs}</p>

            <p>{t.businessPlus.advancedProtection}</p>

            <p>
                <strong>Vault</strong> {t.businessPlus.vault}
            </p>

            <p>{t.businessPlus.eDiscovery}</p>

            <p>{t.businessPlus.userReports}</p>

            <p>
                <strong>Cloud Identity Premium</strong>{' '}
                {t.businessPlus.cloudIdentityPremium}
            </p>

            <p>
                <strong>Endpoint Management</strong>{' '}
                {t.businessPlus.endpointManagement}
            </p>

            <p>{t.businessPlus.contextAwareAccess}</p>
        </div>
    )
}
