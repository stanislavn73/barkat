import React from 'react';
import cx from 'classnames';

import { Waypoint } from 'react-waypoint';

import { AboutPageAnchors } from '../../../utils/anchors';
import './AnchorMenu.less';

const handleScrollToAnchor = id => () => { // eslint-disable-line

    const element = document.getElementById(id);
    const scrollContainer = element.parentElement;
    const top = element.getBoundingClientRect().top;

    window.scrollBy({
        top: top - 50,
        behavior: 'smooth'
    });
};

function AnchorMenu({ anchors, activeAnchor }) {
    return (
        <div className='anchor-menu-wrapper' >
            {anchors.map((anchor) => {
                const isActive = activeAnchor === anchor.id;

                const buttonCX = cx({
                    'button': true,
                    'button_active': isActive
                });

                return (
                    <div className={buttonCX} key={anchor.id} onClick={handleScrollToAnchor(anchor.id)}>
                        <div className='dot' />
                        <div className='title'>{anchor.title}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default React.memo(AnchorMenu);
