import styles from './Select.module.css'

function Select({text, name, options, handleOnChance, value}){
    return(
        <div className={styles.form_control}>
        {/* Adiciona um rótulo associado ao input. O atributo htmlFor está configurado com o valor de name, associando o rótulo ao input correspondente. */}
        <label htmlFor={name}>{text}:</label> 
        <select name={name} id={name}>
            <option>Selecione uma opção</option>
        </select>
    </div>
    )
}

export default Select