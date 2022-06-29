// recuperando campo input de exibição
let campo_input = document.querySelector('#campo_input');

// função com a lógica de calcular e imprimir valores
function calcular(tipo, valor) {

    if (tipo === 'acao') {

        if(valor === 'c') {
            // ação clear
            campo_input.value = '';
        
        } else if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {
            // imprimindo valores na tela
            campo_input.value += valor;
        } else if (valor === '=') {
            // executando lógica aritmética
            let valor_campo = campo_input.value;
            campo_input.value = `${eval(valor_campo)}`;
        }

    } else if (tipo === 'valor') {
        // imprimindo valores na tela
        campo_input.value += valor;
    };
};