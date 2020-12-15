import React from 'react';
import cx from 'classnames';
import './Input.less';

function Input({ onChange, title, className, multiline, value }) {
    const inputWrapperCx = cx({
        'input-wrapper': true,
        [className]: className
    });

    return (
        <div className={inputWrapperCx} >
            <div className='input-title'>
                {title}
            </div>
            {!multiline ?
                <input
                    value={value} type='text' className='input'
                    onChange={onChange}
                />
                : <textarea value={value} className='textarea' onChange={onChange} />
            }
        </div>
    );
}

export default Input;
