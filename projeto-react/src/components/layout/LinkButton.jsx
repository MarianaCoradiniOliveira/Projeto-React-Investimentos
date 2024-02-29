import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

//to => onde que vai
function LinkButton({to, text}){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton