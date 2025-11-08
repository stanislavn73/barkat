import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

import downloadIcon from '../../../public/images/icons/download.png'

import WowBlock from './WowBlock'
import Image from 'next/image'

const BlockWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    margin-bottom: 60px;

    > div:not(:last-child) {
        margin-right: 50px;
    }
`

const DownloadItem = styled.div`
    font-size: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        transform: translate3D(0, -3px, 0);
        filter: drop-shadow(0px 3px 2px #cacaca);
    }
`

const WrapperIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.main.primary};
    padding: 15px;
    border-radius: 50%;

    margin-right: 10px;
`

const Icon = styled(Image)`
    height: 20px;
    position: relative;
    top: -3px;
`

const Text = styled.div``

const Header = () => {
    const { t } = useTranslation('common')

    return (
        <BlockWrapper>
            <WowBlock delay={0.4}>
                <DownloadItem>
                    <WrapperIcon>
                        <Icon src={downloadIcon} />
                    </WrapperIcon>
                    <Text>{t('downloadBlock.aboutCompanyRu')}</Text>
                </DownloadItem>
            </WowBlock>
            <WowBlock delay={0.5}>
                <DownloadItem>
                    <WrapperIcon>
                        <Icon src={downloadIcon} />
                    </WrapperIcon>
                    <Text>{t('downloadBlock.aboutCompanyEn')}</Text>
                </DownloadItem>
            </WowBlock>
        </BlockWrapper>
    )
}

export default Header
