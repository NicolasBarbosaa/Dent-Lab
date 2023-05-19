//funçao para registro e o "async" é para dados futuros
async function registerUser(email, password, event){
    //evento é algo que acontece no site, exemplo: o scroll e etc. 
    //preventDefault == evitar eventos padrôes
    event.preventDefault();

    //try catch é um "if" voltado para o erro. try= tentar catch = pegar 
    try{
        //faz o processo de autenticação passando email e senha
        //auth == obj do firebase
        const userCredential = await auth.createUserWith (email, password);
        const user = userCredential.user;
        //insere os dados no banco de dados, acessadno a coleção users no firebase
    await db.collection("users").doc(user.uid).set(
        {
            email:email,
            uid: user.uid
        }
    );
        alert("Cadastro realizado com sucesso")
    }catch(error){
        console.log(error);
    }
}

//pegar os dados do formulario e inserir na função
//async me fala que eu trabalho com dados futuros que irão voltar
document.getElementById("registerButton").addEventListener("click", async (event)=>{
    const email= document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmedPassword = document.getElementById("confirmedPassword").value;

    //valida se as senhas são iguais
    if(password !== confirmedPassword){
        alert("Senhas não são iguais")
    }

    //insere os dados na função
    registerUser(email, password, event);
});