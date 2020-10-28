import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';


import { PAGES } from '../../utils/pages';

import logo from '../../assets/images/logo.jpg';
import logoVille from '../../assets/images/logo-ville.jpg';

import WowBlock from './WowBlock';
// import 'antd/dist/antd.less';

const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px 0;
  margin-bottom: 20px;
  width: 100%;
`;

const BlockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: 2px solid ${props => props.theme.main.primary};
`;

const Icon = styled.img`
  height: 80px;
`;

const BigNumber = styled.div`
  font-size: 40px;
  color: ${props => props.theme.main.primary};
  font-weight: 200;
  margin-bottom: 15px;
`;
const Text = styled.div`
  font-size: 16px;
  text-align: center;
  width: 220px;
`;

class Header extends PureComponent {
  state = {
      current : 'mail'
  };

  render() {
      const { items } = this.props;


      return (
          <BlockWrapper>
              {items.map((item, index) => (
                  <WowBlock delay={index / 10 + 0.4} key={item.id}>
                      <BlockItem key={item.icon} >
                          <IconWrapper>
                              <Icon src={item.icon} />
                          </IconWrapper>
                          <BigNumber>
                              {item.boldText}
                          </BigNumber>
                          <Text>
                              {item.text}
                          </Text>
                      </BlockItem>
                  </WowBlock>
              ))}
          </BlockWrapper>
      );
  }
}

export default Header;
