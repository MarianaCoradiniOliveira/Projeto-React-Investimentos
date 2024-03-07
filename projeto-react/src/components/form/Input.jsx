import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}){ // Define a função do componente Input que recebe várias propriedades como argumentos. Essas propriedades são utilizadas para configurar o comportamento e a aparência do componente.
    // type: Tipo do input (por exemplo, 'text', 'password', etc.).
    // text: Rótulo (label) associado ao input.
    // name: Nome do input.
    // placeholder: Texto de placeholder exibido no input.
    // handleOnChange: Função de callback a ser chamada quando o valor do input é alterado.
    return(
        <div className={styles.form_control}>
            {/* Adiciona um rótulo associado ao input. O atributo htmlFor está configurado com o valor de name, associando o rótulo ao input correspondente. */}
            <label htmlFor={name}>{text}:</label> 
            {/* Cria um elemento <input> com os atributos configurados pelas propriedades passadas para o componente. A função onChange será chamada sempre que o valor do input for alterado. */}
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/> 
        </div>
    )
}

export default Input