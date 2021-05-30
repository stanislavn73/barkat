import React from 'react';
import cx from 'classnames';

import './Title.less';

function Title({ children, className }) {
    const titleCX = cx('title-kit', {
        [className]: className,
    });

    return <div className={titleCX}>{children}</div>;
}

export default React.memo(Title);
