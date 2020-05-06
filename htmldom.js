let nome = "Patrick"
let idade = 31
const aluno  = true

function primeiroParagrafo() {
    const pp = document.querySelector("#primeiro");
    
    // 1- Mostrar o nome
    pp.textContent = nome;

     //2- Afichar a idade
    pp.textContent = idade;

    // 3- Afichar o aluno
    pp.textContent = aluno;
}

function segundoParagrafo() {
    const pp = document.querySelector("#primeiro");
    
    // 1- Mostrar o nome
    pp.textContent = nome;

     //2- Afichar a idade
    pp.textContent = idade;

    // 3- Afichar o aluno
    pp.textContent = aluno;
}

function terceiroParagrafo() {
    const pp = document.querySelector("#primeiro");
    
    // 1- Mostrar o nome
    pp.textContent = nome;

     //2- Afichar a idade
    pp.textContent = idade;

    // 3- Afichar o aluno
    pp.textContent = aluno;
}
primeiroParagrafo();
terceiroParagrafo();
segundoParagrafo();