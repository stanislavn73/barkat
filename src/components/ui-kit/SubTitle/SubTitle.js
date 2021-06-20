import React from 'react';
import cx from 'classnames';

import './SubTitle.module.less';

function SubTitle({ children, className }) {
    const titleCX = cx('subTitle-kit', {
        [className]: className,
    });

    return <div className={titleCX}>{children}</div>;
}

export default React.memo(SubTitle);
