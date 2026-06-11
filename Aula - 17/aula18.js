function calcularIdade() {

    let hoje = new Date();

    let dia = (document.getElementById("dia").value);

    let mes = (document.getElementById("mes").value) - 1;

    let ano = (document.getElementById("ano").value);

    let nascimento = new Date(ano, mes, dia);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (
        hoje.getMonth() < nascimento.getMonth() ||
        (hoje.getMonth() == nascimento.getMonth() &&
        hoje.getDate() < nascimento.getDate())
    ) {
        idade--;
    }

    document.getElementById("resultado").innerHTML =
        "Você nasceu em " + dia + "/" + (mes + 1) + "/" + ano +
        " e tem " + idade + " anos";
}