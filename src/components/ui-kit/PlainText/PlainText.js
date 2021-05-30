import React from 'react';
import cx from 'classnames';
import './PlainText.less';

function Padded({ children, className }) {
    const plainTextCX = cx('styled-text', {
        [className]: className,
    });

    return <div className={plainTextCX}>{children}</div>;
}

export default React.memo(Padded);
