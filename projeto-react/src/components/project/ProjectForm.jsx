import { useEffect, useState } from 'react'

import styles from './Project.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}){

    const [categories, setCategories] = useState([]) //Este trecho utiliza o hook useState para criar um estado chamado categories e uma função setCategories para atualizar esse estado. O estado é inicializado como um array vazio ([]).



    //Um "hook" em React é uma função especial que permite que você use o estado e outros recursos do React em componentes funcionais. Em outras palavras, hooks são ferramentas que tornam mais fácil escrever componentes em React sem a necessidade de usar classes.

    useEffect(() => { //Neste código, o useEffect está sendo usado para buscar e carregar dados de categorias assim que o componente é montado.
        fetch("http://localhost:5000/categories", { //Estamos pedindo ao computador para buscar dados em uma certa página web (um endereço local http://localhost:5000/categories).
        method: "GET", 
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json()) //Quando os dados forem trazidos, esta parte diz ao computador para entender que esses dados estão em formato de texto (JSON) e transformá-los em algo que possamos usar no nosso programa.
        .then((data) =>{ // Aqui, estamos pegando esses dados transformados (agora em um formato que podemos entender) e guardando-os no espaço categories que criamos anteriormente.
            setCategories(data)
        })
        .catch((err) => console.log(err)) //Se alguma coisa der errado durante esse processo, como se o site não responder, esta parte nos ajuda a descobrir o que deu errado ao mostrar uma mensagem de erro no console
    }, [])

    return(
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total"/>
            <Select name="category_id" text="Selecione a categoria" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm