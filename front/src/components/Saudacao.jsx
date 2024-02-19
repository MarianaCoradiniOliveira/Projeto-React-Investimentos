function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `olá, ${algumNome}, tudo bemm???`
    }

    return(
        <>
            {
                nome && <p>{gerarSaudacao(nome)}</p>
            }
        </>
    )
}

export default Saudacao