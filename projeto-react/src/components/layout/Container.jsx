import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children} //os elementos filhos que estao encapsulados no componete Container, vão ser encaixado dentro desta div
        </div>
    )
}

export default Container