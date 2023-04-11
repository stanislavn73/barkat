import React from 'react'
import cx from 'classnames'
import './Input.module.less'
import { FormHelperText } from '@material-ui/core'

function Input({
    onChange,
    title,
    className,
    multiline,
    value,
    error,
    errorMessage,
}) {
    const inputWrapperCx = cx({
        'input-wrapper': true,
        [className]: className,
    })

    return (
        <div className={inputWrapperCx}>
            <div className='input-title'>{title}</div>
            {!multiline ? (
                <input
                    value={value}
                    type='text'
                    className='input'
                    onChange={onChange}
                />
            ) : (
                <textarea
                    value={value}
                    className='textarea'
                    onChange={onChange}
                />
            )}
            {error && (
                <FormHelperText error={error}>{errorMessage}</FormHelperText>
            )}
        </div>
    )
}

export default Input
