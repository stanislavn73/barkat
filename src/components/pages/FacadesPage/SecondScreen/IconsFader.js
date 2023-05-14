import { useState, useEffect } from 'react'
import cx from 'classnames'
import styles from './SecondScreen.module.scss'

const IconsFader = ({ children, delay }) => {
    const [state, setState] = useState({
        order: 0,
        fadeIn: false,
        fadeOut: false,
    })
    const { order, fadeIn } = state

    useEffect(() => {
        setTimeout(
            () => {
                handleChangeOrder()
                setInterval(handleChangeOrder, 5000)
            },
            delay ? delay : 0
        )
    }, [])

    const handleChangeOrder = () => {
        setState(prev => ({
            ...prev,
            order: (prev.order + 1) % children.length,
            fadeIn: true,
        }))

        setTimeout(() => setState(prev => ({ ...prev, fadeIn: false })), 3500)
    }

    const Item = children[order]

    return (
        <div
            className={cx(styles['fade-default'], fadeIn && styles['fade-in'])}
        >
            {Item}
        </div>
    )
}

export default IconsFader
