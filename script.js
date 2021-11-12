const calcular = document.getElementById('calcular');

function calculo () {
    const nome = document.getElementById('nome').value;
    const rendaMensal = document.getElementById('renda').value;
    const valorfinanciamento = document.getElementById('valorfinanciamento').value;
    const entrada = document.getElementById('entrada').value;
    const taxadejuros = document.getElementById('juros').value;
    const prestacoes = document.getElementById('prestacoes').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && rendaMensal !== '' && valorfinanciamento !== '' && entrada !== '' && taxadejuros !=='' && prestacoes !== '') {

        const CALCULODEJUROSP = (taxadejuros/ 100);
        const PMT = valorfinanciamento*(1+ CALCULODEJUROSP) ** prestacoes * (CALCULODEJUROSP) / ((1 + CALCULODEJUROSP) ** prestacoes - 1);
        var aprovado = (rendaMensal * 0.3);
        const receberPMT = PMT.toFixed(2);
        var avaliarPMT = PMT.toFixed();

        if(aprovado > avaliarPMT){
        resultado.textContent = `
        Olá ${nome}, ao realizar um financiamento de R$ ${valorfinanciamento} em ${prestacoes} vezes, com o juros de ${taxadejuros}%, você pagará R$ ${receberPMT} por mês. :) `;
        }
        else{
        resultado.textContent = `Não é possível calcular o financiamento pois a prestação ultrapassou 30% da sua renda mensal!`;
        }
    }
    else {
        resultado.textContent = 'Para calcular, preencha todos os campos.';
    }

}

calcular.addEventListener('click', calculo);