import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {
  Link
} from 'next';

import { ModalConsumer } from '../../layouts/Layout';
import { PAGES } from '../../../utils/pages';

import logo from '../../../assets/images/logo.jpg';

import './Footer.less';

import SocialMedia from './SocialMedia';

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
  background: ${props => props.theme.main.primary};
  transition: 0.2s;
  border-bottom: 3px solid ${props => props.isActive ? 'white' : props.theme.main.primary}

  &:hover {
    background: ${props => props.theme.main.primary};
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
  background: ${props => props.theme.main.primary};
  transform: skew(-47deg, 0deg);
  position: relative;
  right: -30px;
  filter: drop-shadow(2px 3px 4px rgba(0,0,0,0.3));
  transition: 0.4s;
`;

class Footer extends PureComponent {
  state = {
    current: 'mail'
  };

  render() {
    const { location } = this.props;
    const buttons = PAGES.filter(page => page.isMenu);

    return (
      <>
        <div className='footer-wrapper'>
          {/* <FooterHead>
                      <Menu>
                          {buttons.map(page => (
                              <Link key={page.id} to={page.route}>
                                  <MenuItem isActive={location === page.route}>
                                      {page.name}
                                  </MenuItem>
                              </Link>))
                          }
                      </Menu>
                  </FooterHead> */}
          <div className='footer-content'>
            {/* <div className='footer-content-block'>
              <div className='content-title'>
                Контакты:
              </div>
              <div className='content-title'>
                ООО «Баркат-Штейн», БЦ «Форум»
              </div>
              <div className='content-title'>
                <a className='footer-link' target='_blank' rel='noopener noreferrer' href={'https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%8F+%D0%9F%D0%B8%D0%BC%D0%BE%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE,+13,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4591394,30.4881224,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4ce64cc70dd3f:0xf52cb48444deb57a!8m2!3d50.4591394!4d30.4903111'}>01601, Киев, ул. Н. Пимоненко, 13</a>
              </div>
            </div>
            <div className='footer-content-block'>
              <div className='content-title'>
                Web: <a className='footer-link' href={'http://www.barkat-3D-ville.com'} >www.barkat-3D-ville.com</a>
              </div>
              <div className='content-title'>
                E-mail: <a className='footer-link' href={'mailto:barkat-stein@gmail.com'}>barkat-stein@gmail.com</a>
              </div>
              <div className='content-title'>
                E-mail:  <a className='footer-link' href={'mailto:barkat-3D-ville@gmail.com'}>barkat-3D-ville@gmail.com</a>
              </div>
            </div> */}
            <div className='social-container'>
            <SocialMedia />
            </div>
              
            
            <div className='footer-content-block'>
            
              <div className='content-title'>
                <a className='footer-link' href={'mail:info@barkat-stein.com'}>info@barkat-stein.com</a>
              </div>
              <div className='content-title'>
                <a className='footer-link' href={'http://www.barkat-stein.com'}>www.barkat-stein.com</a>
              </div>
            </div>
            <div className='footer-content-block'>
              <ModalConsumer>
                {({handleOpenForm}) => <div className='footer-button' onClick={handleOpenForm}>Написать нам</div>}
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
