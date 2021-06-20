import React from 'react';
import cx from 'classnames';
import './BlockDivider.module.less';

export default function Divider({ className }) {
    return <div className={cx('divider', className)} />;
}
