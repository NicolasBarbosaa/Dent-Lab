//funçãopara fazer o login com base no email e senha
async function loginUser(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        return "Sucesso!"
    } 
    //pega o erro caso ele ocorra e exibe no console
    catch (error) {
        console.error(error)
    }
}

document.getElementById("btnlogin").addEventListener("click", async(event) =>{
    event.preventDefault();

    //pego o email e senha do formulario com base no id
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //crio uma variavel para armazenar a resposta da função loginUser()
    const result = await loginUser(email, password);

    //verifico se p retorno da função é igaul a "sucesso!"
    if(result == "Sucesso!"){
        //envio o usuario para a tela apos logar
        window.location.href="home.html"
    }else{
        alert("Erro ao fazer o login");
    }
})