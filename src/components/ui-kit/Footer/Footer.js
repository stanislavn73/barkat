import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'next';

import { ModalConsumer } from '../../layouts/Layout';
import { PAGES } from '../../../utils/pages';

import logo from '../../../assets/images/logo.jpg';
import SocialMediaFooter from './SocialMediaFooter';

import './Footer.less';
import PrivacyPolicy from './PrivacyPolicy';
import Agreement from './Agreement';

const FooterHead = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
`;

const Menu = styled.div`
    height: 100%;
    width: 900px;
    display: flex;
`;

const MenuItem = styled.div`
  height: 100%;
  margin-right: 15px;
  display: flex;
  align-items: center;
  color: white;
  background: ${(props) => props.theme.main.primary};
  transition: 0.2s;
  border-bottom: 3px solid ${(props) =>
      props.isActive ? 'white' : props.theme.main.primary}

  &:hover {
    background: ${(props) => props.theme.main.primary};
    border-bottom: 3px solid white;
    color: white;
    cursor: pointer;
  }

  > * {
    height: 100%;
  }
`;

const OrangeLine = styled.div`
    height: 40px;
    width: 70%;
    background: ${(props) => props.theme.main.primary};
    transform: skew(-47deg, 0deg);
    position: relative;
    right: -30px;
    filter: drop-shadow(2px 3px 4px rgba(0, 0, 0, 0.3));
    transition: 0.4s;
`;

const socialMediaLinks = {
    facebook: 'https://www.facebook.com/Barkat-Stein-100872801796847',
    insta: 'https://www.instagram.com/barkat_stein/?hl=ru',
    linkedin: 'https://www.linkedin.com/company/65744024/admin/',
};

class Footer extends PureComponent {
    state = {
        current: 'mail',
    };

    render() {
        // const { history } = this.props;
        const buttons = PAGES.filter((page) => page.isMenu);

        return (
            <>
                <div className='footer-wrapper'>
                    <div className='footer-content'>
                        <div className='links_container'>
                            <Agreement />
                            <PrivacyPolicy />
                        </div>
                        {this.props.page !== 'events' &&
                            this.props.page !== 'soft' && (
                                <div className='social-container'>
                                    <SocialMediaFooter />
                                </div>
                            )}
                        <div className='footer-content-block'>
                            <div className='content-title'>
                                <a
                                    className='footer-link'
                                    href={'mail:info@barkat-3D-ville.com'}
                                >
                                    info@barkat-3D-ville.com
                                </a>
                            </div>
                            <div className='content-title'>
                                <a
                                    className='footer-link'
                                    href={'http://www.barkat-3D-ville.com'}
                                >
                                    www.barkat-3D-ville.com
                                </a>
                            </div>
                        </div>
                        <div className='footer-content-block'>
                            <ModalConsumer>
                                {({ handleOpenForm }) => (
                                    <div
                                        className='footer-button'
                                        onClick={handleOpenForm}
                                    >
                                        Написать нам
                                    </div>
                                )}
                            </ModalConsumer>
                        </div>
                    </div>
                    <div className='orange-line' />
                </div>
            </>
        );
    }
}

export default Footer;
