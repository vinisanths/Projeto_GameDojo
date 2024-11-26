document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const genero = document.getElementById("genero").value;
    const Plataforma = document.getElementById("Plataforma").value;
    
    const Status = [];
    const checkboxes = document.querySelectorAll('input[name="Status"]:checked');

    checkboxes.forEach(function(checkbox) {
        Status.push(checkbox.value);
    });

    const dataCadastro = document.getElementById("data-cadastro").value;
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = `
        <h2>Cadastro Realizado!</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Gênero:</strong> ${genero}</p>
        <p><strong>Plataforma:</strong> ${Plataforma}</p>
        <p><strong>Status:</strong> ${Status.join(", ")}</p>
        <p><strong>Data de Cadastro:</strong> ${dataCadastro}</p>
    `;
    
    //Mostra o resultado
    resultadoDiv.style.display = "block";

    //Limpa o formulário
    document.getElementById("form").reset();
});