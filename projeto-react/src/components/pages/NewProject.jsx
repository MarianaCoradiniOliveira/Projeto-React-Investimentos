import {useNavigate} from 'react-router-dom' //permtie redirecionar o usuario para uma outra pagina

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){ //passa o projeto como argumento para o creatPost que vai inserir o projeto no sistema
        //initialize cost and services
        // ao longo da atualização da sistema do usuario, ele vai colocando novos serviços ou removendo
        project.cost = 0
        project.services = []

        fetch("http:/localhost:5000/projects",{ //Estamos pedindo ao computador para buscar dados em uma certa página web (um endereço local http://localhost:5000/projects).
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project), //manda os dados para o servidor
        })
        .then((resp) => resp.json()) //Quando os dados forem trazidos, esta parte diz ao computador para entender que esses dados estão em formato de texto (JSON) e transformá-los em algo que possamos usar no nosso programa.
        .then((data) => { // Aqui, estamos pegando esses dados transformados (agora em um formato que podemos entender) e guardando-os no espaço projects.
            console.log(data)
            //redirect
        })
        .catch(err => console.log(err)) //Se alguma coisa der errado durante esse processo, como se o site não responder, esta parte nos ajuda a descobrir o que deu errado ao mostrar uma mensagem de erro no console
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionais os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject