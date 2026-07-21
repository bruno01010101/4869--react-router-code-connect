import styles from './link.module.css'
import { Link as Liink } from 'react-router'

export const Link = ({ children, href,...props }) => {
    const className = props.className || ''
    return (
        <Liink to={href} {...props} className={`${styles.link} ${className}`}>
            {children}
        </Liink>
    )
}