import React, { useState } from 'react';
import cx from 'classnames';
import ReactDOM from 'react-dom';
import './styles.module.less';

export default function Img({ src, className, ...rest }) {
    const [isFull, setIsFull] = useState(false);

    function handleImageClick(state) {
        return () => setIsFull(state);
    }

    return (
        <>
            {isFull &&
                ReactDOM.createPortal(
                    <div
                        className='fullscreen-image'
                        onClick={handleImageClick(false)}
                    >
                        <img src={src} {...rest} loading='lazy' />
                    </div>,
                    document.body
                )}
            <img
                src={src}
                className={cx('full-image-thumb', className)}
                onClick={handleImageClick(true)}
                {...rest}
                loading='lazy'
            />
        </>
    );
}
