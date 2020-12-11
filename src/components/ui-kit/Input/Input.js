import React from 'react';
import cx from 'classnames';
import './Input.less';

function Input({ onChange, title, className, multiline, value, required }) {
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
                <>
                    {required === true ?
                        <input
                            value={value} type='text' className='input'
                            onChange={onChange} required
                        /> : <input
                            value={value} type='text' className='input'
                            onChange={onChange}
                        />
                    }
                </>
                :
                <>
                    {required === true ?
                        <textarea value={value} className='textarea' onChange={onChange} required />
                        : <textarea value={value} className='textarea' onChange={onChange} />
                    }
                </>
            }
        </div>
    );
}

export default Input;
