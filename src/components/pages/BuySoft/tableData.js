import styles from './TableData.module.scss'

const checkMark = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className={styles.check_mark}
        width='17'
        height='17'
        viewBox='0 0 24 24'
    >
        <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
    </svg>
)
const closeMark = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className={styles.close_mark}
        width='18'
        height='18'
        viewBox='0 0 18 18'
    >
        <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z' />
    </svg>
)

function createData(
    option,
    sketchUpFree,
    sketchUpShop,
    sketchUpPro,
    sketchUpStudio,
    sketchUpStudents
) {
    return {
        option,
        sketchUpFree,
        sketchUpShop,
        sketchUpPro,
        sketchUpStudio,
        sketchUpStudents,
    }
}

export const getRows = (t) => [
    createData(
        t('tableRows.row1_platform'),
        t('tableRows.row1_webOnly'),
        t('tableRows.row1_webOnly'),
        t('tableRows.row1_desktopAndWeb'),
        t('tableRows.row1_desktopAndWeb'),
        t('tableRows.row1_desktopAndWeb')
    ),
    createData(
        t('tableRows.row2_offlineUse'),
        closeMark,
        closeMark,
        checkMark,
        checkMark,
        checkMark
    ),
    createData(
        [t('tableRows.row3_sefaira'), t('tableRows.row3_sefairaDescription')],
        closeMark,
        closeMark,
        closeMark,
        closeMark,
        checkMark
    ),
    createData(
        [t('tableRows.row4_vray'), t('tableRows.row4_vrayDescription')],
        closeMark,
        closeMark,
        closeMark,
        checkMark,
        checkMark
    ),
    createData(
        [t('tableRows.row5_scanEssentials'), t('tableRows.row5_scanEssentialsDescription')],
        closeMark,
        closeMark,
        closeMark,
        checkMark,
        checkMark
    ),
    createData(
        [t('tableRows.row6_preDesign'), t('tableRows.row6_preDesignDescription')],
        closeMark,
        closeMark,
        checkMark,
        checkMark,
        checkMark
    ),
    createData(
        [t('tableRows.row7_layout'), t('tableRows.row7_layoutDescription')],
        closeMark,
        closeMark,
        checkMark,
        checkMark,
        checkMark
    ),
    createData(
        t('tableRows.row8_cloudStorage'),
        t('tableRows.row8_storage10gb'),
        t('tableRows.row8_storageUnlimited'),
        t('tableRows.row8_storageUnlimited'),
        t('tableRows.row8_storageUnlimited'),
        t('tableRows.row8_storageUnlimited')
    ),
    createData(
        t('tableRows.row9_support'),
        t('tableRows.row9_supportEmail'),
        t('tableRows.row9_supportEmailCommunity'),
        t('tableRows.row9_supportPhoneEmailCommunity'),
        t('tableRows.row9_supportPhoneEmailCommunity'),
        t('tableRows.row9_supportEmailCommunity')
    ),
    createData(
        t('tableRows.row10_viewer'),
        t('tableRows.row10_viewerStandard'),
        t('tableRows.row10_viewerStandard'),
        t('tableRows.row10_viewerArPlus'),
        t('tableRows.row10_viewerArPlus'),
        t('tableRows.row10_viewerArPlus')
    ),
    createData(
        t('tableRows.row11_xrHeadset'),
        closeMark,
        closeMark,
        t('tableRows.row11_xrHeadsetDevices'),
        t('tableRows.row11_xrHeadsetDevices'),
        t('tableRows.row11_xrHeadsetDevices')
    ),
    createData(
        t('tableRows.row12_systemInteraction'),
        t('tableRows.row12_interactionBasic'),
        t('tableRows.row12_interactionAdvanced'),
        t('tableRows.row12_interactionProfessional'),
        t('tableRows.row12_interactionProfessional'),
        t('tableRows.row12_interactionProfessional')
    ),
    createData(
        t('tableRows.row13_extensibility'),
        closeMark,
        closeMark,
        t('tableRows.row13_extensibilityRubyApi'),
        t('tableRows.row13_extensibilityRubyApi'),
        t('tableRows.row13_extensibilityRubyApi')
    ),
    createData(
        t('tableRows.row14_3dWarehouse'),
        t('tableRows.row14_warehouseLimited'),
        t('tableRows.row14_warehouseUnlimited'),
        t('tableRows.row14_warehouseUnlimited'),
        t('tableRows.row14_warehouseUnlimited'),
        t('tableRows.row14_warehouseUnlimited')
    ),
    createData(
        t('tableRows.row15_customStyles'),
        closeMark,
        t('tableRows.row15_stylesBasic'),
        t('tableRows.row15_stylesAdvanced'),
        t('tableRows.row15_stylesAdvanced'),
        t('tableRows.row15_stylesAdvanced')
    ),
    createData(
        t('tableRows.row16_styleBuilder'),
        closeMark,
        closeMark,
        checkMark,
        checkMark,
        checkMark
    ),
    createData(
        t('tableRows.row17_licenseTypes'),
        t('tableRows.row17_licenseFree'),
        t('tableRows.row17_licenseAnnual'),
        t('tableRows.row17_licenseAnnual'),
        t('tableRows.row17_licenseAnnual'),
        t('tableRows.row17_licenseAnnual')
    ),
    createData(
        t('tableRows.row18_dynamicComponents'),
        closeMark,
        closeMark,
        t('tableRows.row18_dynamicCreateEdit'),
        t('tableRows.row18_dynamicCreateEdit'),
        closeMark
    ),
]
