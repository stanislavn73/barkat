import Img from '../Img'
import styles from './IconsBlock.module.scss'

const IconsBlock = ({ items }) => {
    return (
        <div className={styles['icons-block-wrapper']}>
            {items.map((item, index) => (
                <div key={index + 1} className={styles['block-item']}>
                    <Img className={styles['icon']} src={item.icon} />
                    <div className={styles['big-number']}>{item.boldText}</div>
                    <div className={styles['text']}>{item.text}</div>
                </div>
            ))}
        </div>
    )
}

export default IconsBlock
