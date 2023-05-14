import cx from 'classnames'
import styles from './Input.module.scss'
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
    const inputWrapperCx = cx(styles['input-wrapper'], className)

    return (
        <div className={inputWrapperCx}>
            <div className={styles['input-title']}>{title}</div>
            {!multiline ? (
                <input
                    value={value}
                    type='text'
                    className={styles.input}
                    onChange={onChange}
                />
            ) : (
                <textarea
                    value={value}
                    className={styles.textarea}
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
