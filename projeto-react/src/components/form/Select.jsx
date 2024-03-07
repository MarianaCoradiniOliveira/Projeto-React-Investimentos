import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
        {/* Adiciona um rótulo associado ao input. O atributo htmlFor está configurado com o valor de name, associando o rótulo ao input correspondente. */}
        <label htmlFor={name}>{text}:</label> 
        {/* name e id: Identificadores para o elemento de seleção.
        onChange: É a função que será chamada quando o valor selecionado for alterado. Geralmente, handleOnChange é uma função definida em algum lugar no seu código que lida com a mudança do elemento de seleção.
        value: Define o valor atualmente selecionado no elemento de seleção. Este valor é controlado pelo estado do componente (provavelmente value). */}
        <select name={name} id={name} OnChange={handleOnChange} value={value || ''}>
            <option>Selecione uma opção</option>
            {options.map((option) => (
                <option value={option.id} key={option.id}>{option.name}</option> //Para cada item (option) na lista, estamos criando um elemento de opção. Cada opção tem um valor (value) definido como o id do item e um texto visível ({option.name}). O key é uma propriedade especial para ajudar o React a rastrear e gerenciar esses elementos de forma eficiente.
            ))}
        </select>
    </div>
    )
}

export default Select