import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import cx from 'classnames';

import logo from     '../../../assets/images/Logo_new.svg';
import engineer from '../../../assets/images/marble-system.jpg';
import about from    '../../../assets/images/pages/About_us_third.jpg';
import facades from  '../../../assets/images/facades/clinkerstone/04.jpg';
import soft from     '../../../assets/images/pages/soft/title-back.jpg';
import './styles.less';

function RoundMenu({ children, className }) {
  const [isActive, setIsActive] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsActive(true);
        setTimeout(() => {
          setIsDisplay(true);
        })
      }, 0);
    }, []);

    const router = useRouter();

    const spanCX = cx({
      active: isDisplay
    });

    return isActive &&
        (
          <div className="round-menu-wrapper">
            <span className={spanCX} ><img src={logo} /></span>
            <div className="wrap">
              <a href="#" style={{
                backgroundImage: `url(${about})`
              }} onClick={() => { router.push('/about_us')}}><div>О нас</div></a>
              <a href="#" style={{
                backgroundImage: `url(${engineer})`
              }} onClick={() => { router.push('/soft')}}><div>Инженерные сети</div></a>
              <a href="#" style={{
                backgroundImage: `url(${facades})`
              }} onClick={() => { router.push('/facades')}} ><div>Вентфасады</div></a>
              <a href="#" style={{
                backgroundImage: `url(${soft})`
              }} onClick={() => { router.push('/soft')}}><div>3D решения</div></a>
              <a href="#" ><img src={logo} /></a>
            </div>
          </div>
        )
}

export default RoundMenu;
