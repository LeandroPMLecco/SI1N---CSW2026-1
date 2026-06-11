function calcularIdade() {

    let ano = (document.getElementById("ano").value);

    let anoAtual = new Date().getFullYear();

    let idade = anoAtual - ano;

    document.getElementById("resultado").innerHTML =
        "Você tem " + idade + " ano";
}