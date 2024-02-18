import { useState } from "react"

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return(
        <>
            <h1>Meu cadastro:</h1>
            <form  onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label> 
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha"  onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form


// Nesse exemplo, o useState é usado para criar um estado chamado 'nome' e inicializá-lo como 'undefined'. A função 'setNome' é usada para atualizar o valor desse estado.

// Quando o usuário digita algo no campo de input e aciona o evento 'onChange', a função '(e) => setNome(e.target.value)' é chamada. O evento 'onChange' é acionado sempre que o valor do campo de input muda. O parâmetro '(e)' representa o evento em si e contém informações sobre ele, como o valor digitado no campo de input.

// Dentro da função '(e) => setNome(e.target.value)', estamos usando 'e.target.value' para obter o valor digitado no campo de input e passá-lo para a função 'setNome'. Assim, o valor do estado nome é atualizado com o valor digitado pelo usuário.

// Quando o formulário é enviado, a função 'cadastrarUsuario' é chamada. Nesse exemplo, estamos apenas imprimindo no console uma mensagem com o valor atual do estado nome.

// Dessa forma, o useState permite armazenar e atualizar o valor digitado pelo usuário no campo de input, mantendo-o acessível para outras partes do componente ou para ser usado em outras funcionalidades.