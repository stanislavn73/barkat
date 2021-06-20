import React from 'react';
import cx from 'classnames';

import './Padded.module.less';

function Padded({ children, className }) {
    const paddedCX = cx('padded', {
        [className]: className,
    });

    return <div className={paddedCX}>{children}</div>;
}

export default React.memo(Padded);
