import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {/* os elementos filhos que estao encapsulados no componete Container, vão ser encaixado dentro desta div */}
            {props.children} 
        </div>
    )
}

export default Container