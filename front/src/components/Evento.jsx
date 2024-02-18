import Button from "./evento/Button"

function Evento({}){
    
    function meuEvento(){
        console.log(`fui ativado`)
    }

    function segundoEvento(){
        console.log('ativando o segundo evento')
    }
    
    return(
       <>
        <p>Clique para disaparar um evento</p>
        <Button event={meuEvento} text="Priemrio evento"/>
        <Button event={segundoEvento} text="swegundo evento"/>
       </> 
    )
}

export default Evento