import { useTranslation } from '../../../layouts/Layout'
import styles from './PivacyPolicy.module.scss'

export default function UserAgreement() {
    const { t } = useTranslation('legal')
    const ua = t.userAgreement

    const sectionStyle = {
        marginTop: '0pt',
        marginBottom: '0pt',
        widows: 2,
        orphans: 2,
        fontSize: '12pt',
    }

    const centerStyle = {
        ...sectionStyle,
        textAlign: 'center',
    }

    return (
        <div>
            <p style={centerStyle}>
                <strong><span style={{ fontFamily: 'Arial' }}>{ua.title}</span></strong>
                <br />
                <strong><span style={{ fontFamily: 'Arial' }}>{ua.subtitle}</span></strong>
            </p>
            <p style={centerStyle}>&nbsp;</p>
            <p style={sectionStyle}>
                <span style={{ fontFamily: 'Arial' }}>{ua.intro}</span>
            </p>

            <p style={centerStyle}>
                <br /><strong><span style={{ fontFamily: 'Arial' }}>{ua.section1.title}</span></strong>
            </p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section1.item1_1}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section1.item1_2}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section1.item1_3}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section1.item1_4}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section1.item1_5}</span></p>

            <p style={centerStyle}>
                <br /><strong><span style={{ fontFamily: 'Arial' }}>{ua.section2.title}</span></strong>
            </p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section2.item2_1}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section2.item2_2}</span></p>
            <p style={centerStyle}>&nbsp;</p>

            <p style={centerStyle}>
                <strong><span style={{ fontFamily: 'Arial' }}>{ua.section3.title}</span></strong><br />
                <strong><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></strong>
            </p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_1}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_2}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;&nbsp;</span><br />
                <span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_3}</span>
            </p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_3_1}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_3_2}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_3_3}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_4}</span></p>
            <p style={sectionStyle}>&nbsp;<br /><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_5}</span></p>
            <p style={sectionStyle}>&nbsp;<br /><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_6}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_7}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_8}</span></p>
            <p style={sectionStyle}>&nbsp;<br /><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_9_a}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section3.item3_9_b}</span></p>

            <p style={centerStyle}><br /><br /><strong><span style={{ fontFamily: 'Arial' }}>{ua.section4.title}</span></strong></p>
            <p style={centerStyle}>&nbsp;</p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section4.item4_1}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section4.item4_2}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section4.item4_6}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section4.item4_7}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>

            <p style={centerStyle}><br /><strong><span style={{ fontFamily: 'Arial' }}>{ua.section5.title}</span></strong></p>
            <p style={sectionStyle}>&nbsp;</p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section5.item5_1}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section5.item5_1_1}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section5.item5_1_2}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section5.item5_2}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section5.item5_2_1}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section5.item5_3}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section5.item5_3_1}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section5.item5_3_2}</span></p>
            <p style={sectionStyle}>&nbsp;</p>
            <p style={sectionStyle}>&nbsp;</p>

            <p style={centerStyle}><strong><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></strong></p>
            <p style={centerStyle}><strong><span style={{ fontFamily: 'Arial' }}>{ua.section6.title}</span></strong></p>
            <p style={{ ...sectionStyle, marginTop: '14pt', marginBottom: '14pt', textAlign: 'left' }}>
                <br /><span style={{ fontFamily: 'Arial' }}>{ua.section6.item6_1}</span>
            </p>
            <p style={{ ...sectionStyle, marginTop: '14pt', marginBottom: '14pt', textAlign: 'left' }}>
                <span style={{ fontFamily: 'Arial' }}>{ua.section6.item6_2}</span>
            </p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section6.item6_3}</span></p>
            <p style={{ ...sectionStyle, marginTop: '14pt', marginBottom: '14pt', textAlign: 'left' }}>
                <span style={{ fontFamily: 'Arial' }}>{ua.section6.item6_4}</span>
            </p>
            <p style={{ ...sectionStyle, marginTop: '14pt', marginBottom: '14pt', textAlign: 'left' }}>
                <span style={{ fontFamily: 'Arial' }}>{ua.section6.item6_5}</span>
            </p>
            <p style={{ ...sectionStyle, marginTop: '14pt', marginBottom: '14pt', textAlign: 'left' }}>
                <span style={{ fontFamily: 'Arial' }}>&nbsp;</span>
                <span style={{ fontFamily: 'Arial' }}>{ua.section6.item6_6}</span>
            </p>

            <p style={centerStyle}><br /><br /><strong><span style={{ fontFamily: 'Arial' }}>{ua.section7.title}</span></strong></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section7.item7_1}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section7.item7_2}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section7.item7_3}</span></p>
            <p style={sectionStyle}><br /><span style={{ fontFamily: 'Arial' }}>{ua.section7.item7_4}</span></p>
            <p style={sectionStyle}>&nbsp;</p>
            <p style={sectionStyle}><br />&nbsp;</p>

            <p style={centerStyle}><strong><span style={{ fontFamily: 'Arial' }}>{ua.section8.title}</span></strong></p>
            <p style={sectionStyle}>&nbsp;</p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section8.item8_1}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section8.item8_2}</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
            <p style={sectionStyle}><span style={{ fontFamily: 'Arial' }}>{ua.section8.item8_3}</span></p>

            <p style={centerStyle}><br /><strong><span style={{ fontFamily: 'Arial' }}>{ua.section9.title}</span></strong></p>
            <p style={{ ...sectionStyle, marginTop: '14pt', marginBottom: '14pt' }}>
                <span style={{ fontFamily: 'Arial' }}>{ua.section9.item9_1}</span>
            </p>
            <p style={{ ...sectionStyle, marginTop: '14pt', marginBottom: '14pt' }}>
                <span style={{ fontFamily: 'Arial' }}>{ua.section9.item9_2}</span>
            </p>
            <p style={{ ...sectionStyle, marginTop: '14pt', marginBottom: '14pt' }}>
                <span style={{ fontFamily: 'Arial' }}>{ua.section9.item9_3}</span>
                <span style={{ fontFamily: 'Arial' }}>&nbsp;&nbsp;</span>
            </p>

            <p style={{ ...sectionStyle, textAlign: 'left' }}>
                <br /><strong><span style={{ fontFamily: 'Arial' }}>{ua.sellerDetails.heading}</span></strong>
                <br /><br /><strong><span style={{ fontFamily: 'Arial' }}>{ua.sellerDetails.name}</span></strong>
            </p>
            <p style={{ ...sectionStyle, textAlign: 'left' }}><span style={{ fontFamily: 'Arial' }}>{ua.sellerDetails.address}</span></p>
            <p style={{ ...sectionStyle, textAlign: 'left' }}><span style={{ fontFamily: 'Arial' }}>{ua.sellerDetails.iban}</span></p>
            <p style={{ ...sectionStyle, textAlign: 'left' }}>
                <span style={{ fontFamily: 'Arial' }}>&nbsp;</span>
                <span style={{ fontFamily: 'Arial' }}>{ua.sellerDetails.bank}</span>
            </p>
            <p style={{ ...sectionStyle, textAlign: 'left' }}><span style={{ fontFamily: 'Arial' }}>{ua.sellerDetails.mfo}</span></p>
            <p style={{ ...sectionStyle, textAlign: 'left' }}>
                <span style={{ fontFamily: 'Arial' }}>{ua.sellerDetails.edrpou}</span>
            </p>
            <p style={{ ...sectionStyle, textAlign: 'left' }}>
                <span style={{ fontFamily: 'Arial' }}>{ua.sellerDetails.ipn}</span>
            </p>
            <p style={{ ...sectionStyle, textAlign: 'left' }}><span style={{ fontFamily: 'Arial' }}>{ua.sellerDetails.phone}</span></p>
            <p style={{ ...sectionStyle, textAlign: 'left' }}>&nbsp;</p>
            <p style={{ ...sectionStyle, fontSize: '10pt' }}><span style={{ fontFamily: 'Arial' }}>&nbsp;</span></p>
        </div>
    )
}
