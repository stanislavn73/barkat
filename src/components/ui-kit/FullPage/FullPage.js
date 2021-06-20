import React from 'react';
import cx from 'classnames';

import './FullPage.module.less';

function FullPage({ children, min, className }) {
    const fullPageCX = cx('full-page', {
        'full-page-freed': min,
        [className]: className,
    });

    return <div className={fullPageCX}>{children}</div>;
}

export default FullPage;
