function verificar() {

    const idade = document.getElementById('idadebusca');
    const peso = document.getElementById('pesobusca');
    const select = document.getElementById('alimentobusca');
    const res = document.getElementById('res');
    
    if(idade.value == 0 || peso.value == 0 || select.value == 0){
        window.alert('Verifique os dados e tente novamente!');
    } else {
        
        /* Passando os valores (value) para uma constante */
        const e = document.getElementById('alimentobusca');
        const VolumosoVal= e.value;

        /* Recebendo a idade*/
        const i = document.getElementById('idadebusca');
        const idadeValor = i.value;
        
        /*recebendo e armazenando o valor final do calculo*/
        const resultadoFinal = Number(peso.value) * Number(VolumosoVal);

        if (Number(VolumosoVal) == 0.02) {
            var namee = 'Feno Tifton'
        } else if (Number(VolumosoVal) == 0.012) {
            var namee = 'Feno Alfafa'
        } else if (Number(VolumosoVal) == 0.035) {
            var namee = 'Silagem'
        } else if (Number(VolumosoVal) == 0.04) {
            var namee = 'Capim'
        } else if (Number(VolumosoVal) == 0.008) {
            var namee = 'Ração'
        }
        
        if(idadeValor < 3) {
            res.innerHTML = `${resultadoFinal.toFixed(3)} g de ${namee}. O cálculo gerado é a quantidade que o animal deve ingerir diáriamente. Portanto, lembre-se de usá-los para melhor adequar as divisões de sua preferência. (Padrão: 2 ou 3 tratos por dia). Lembre-se de alimentar o seu potro com a ração adequada.`
        } else {
            res.innerHTML = `${resultadoFinal.toFixed(3)} g de ${namee}. O cálculo gerado é a quantidade que o animal deve ingerir diáriamente. Portanto, lembre-se de usá-los para melhor adequar as divisões de sua preferência. (Padrão: 2 ou 3 tratos por dia).`
        }
        
    }
}



