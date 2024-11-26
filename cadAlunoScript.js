document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const curso = document.getElementById("curso").value;
    
    const conhecimentos = [];
    const checkboxes = document.querySelectorAll('input[name="conhecimentos"]:checked');

    checkboxes.forEach(function(checkbox) {
        conhecimentos.push(checkbox.value);
    });

    const dataNascimento = document.getElementById("data-nascimento").value;
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = `
        <h2>Cadastro Realizado!</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Curso:</strong> ${curso}</p>
        <p><strong>Conhecimentos:</strong> ${conhecimentos.join(", ")}</p>
        <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
    `;
    
    //Mostra o resultado
    resultadoDiv.style.display = "block";

    //Limpa o formulário
    document.getElementById("form").reset();
});