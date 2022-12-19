function verificarIdade() {

    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.getElementById('txtano');
    const res = document.querySelector('#res');
    let resP = document.querySelector('#resP');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente');
    } else {
        const fsex = document.getElementsByName('checksex');
        const idade = ano - Number(fano.value);
        let genero = '';

        let img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <= 12) {
                //menino
                
                img.setAttribute('src', 'img/menino.png');
                img.style.height = '200px';
                img.style.alignItems = 'center'
                
                
            }else if (idade > 12 && idade < 18) {
                //adolescente
                img.setAttribute('src', 'img/garotojovem.png');
                img.style.height = '200px';
                img.style.alignItems = 'center'

            }else if (idade >= 18 && idade <60) {
                //adulto
                img.setAttribute('src', 'img/homem.png');
                img.style.height = '200px';
                img.style.alignItems = 'center'
            }else{
                //idoso
                img.setAttribute('src', 'img/idoso.png');
                img.style.height = '200px';
                img.style.alignItems = 'center'
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'

            if (idade >=0 && idade <= 12) {
                //menino
                
                img.setAttribute('src', 'img/menina.png');
                img.style.height = '200px';
                img.style.alignItems = 'center'
                
                
            }else if (idade > 12 && idade < 18) {
                //adolescente
                img.setAttribute('src', 'img/garotajovem.png');
                img.style.height = '200px';
                img.style.alignItems = 'center'

            }else if (idade >= 18 && idade <60) {
                //adulto
                img.setAttribute('src', 'img/mulher.png');
                img.style.height = '200px';
                img.style.alignItems = 'center'
            }else{
                //idoso
                img.setAttribute('src', 'img/idosa.png');
                img.style.height = '200px';
                img.style.alignItems = 'center'
            }
        }
        document.getElementById("res").innerHTML = "";
        resP.innerHTML = `Idade: ${idade} anos. Gênero: ${genero}` 
        res.appendChild(img);
    }
} 
