let titulo = document.getElementById('titulo')
let maior = document.getElementById('maior')
let menor_natural = document.getElementById('menor_natural')
let menor_harmonica = document.getElementById('menor_harmonica')
let menor_melodica = document.getElementById('menor_melodica')
let pentatonica_maior = document.getElementById('pentatonica_maior')
let pentatonica_menor = document.getElementById('pentatonica_menor')
let pentatonica_maior_7 = document.getElementById('pentatonica_maior_7')
let pentatonica_menor_6 = document.getElementById('pentatonica_menor_6')
let tipo = document.querySelector('#tipo')
let formacao = document.querySelector('#formacao')
let shape1 = document.getElementById('shape1')
let shape2 = document.getElementById('shape2')
let shape3 = document.getElementById('shape3')
let shape4 = document.getElementById('shape4')
let shape5 = document.getElementById('shape5')
let shape6 = document.getElementById('shape6')
let shape7 = document.getElementById('shape7')


maior.onclick = function () {

    shape1.src = './assets/img/maior-shape1.svg'
    shape2.src = './assets/img/maior-shape2.svg'
    shape3.src = './assets/img/maior-shape3.svg'
    shape4.src = './assets/img/maior-shape4.svg'
    shape5.src = './assets/img/maior-shape5.svg'
    shape6.src = './assets/img/maior-shape6.svg'
    shape7.src = './assets/img/maior-shape7.svg'
    tipo.innerHTML = '<span class="badge badge-warning">Escala Maior</span>'
    formacao.innerHTML = '<span class="badge badge-light">Formação: T 2 3 4 5 6 7</span>'

}


menor_natural.onclick = function () {

    shape1.src = './assets/img/menor-natural-shape1.svg'
    shape2.src = './assets/img/menor-natural-shape2.svg'
    shape3.src = './assets/img/menor-natural-shape3.svg'
    shape4.src = './assets/img/menor-natural-shape4.svg'
    shape5.src = './assets/img/menor-natural-shape5.svg'
    shape6.src = './assets/img/menor-natural-shape6.svg'
    shape7.src = './assets/img/menor-natural-shape7.svg'
    tipo.innerHTML = '<span class="badge badge-warning">Escala Menor Natural</span>'
    formacao.innerHTML = '<span class="badge badge-light">Formação: T 2 b3 4 5 b6 b7</span>'


}


menor_harmonica.onclick = function () {

    shape1.src = './assets/img/menor-harmonica-shape1.svg'
    shape2.src = './assets/img/menor-harmonica-shape2.svg'
    shape3.src = './assets/img/menor-harmonica-shape3.svg'
    shape4.src = './assets/img/menor-harmonica-shape4.svg'
    shape5.src = './assets/img/menor-harmonica-shape5.svg'
    shape6.src = './assets/img/menor-harmonica-shape6.svg'
    shape7.src = './assets/img/menor-harmonica-shape7.svg'
    tipo.innerHTML = '<span class="badge badge-warning">Escala Menor Harmônica</span>'
    formacao.innerHTML = '<span class="badge badge-light">Formação: T 2 b3 4 5 b6 7</span>'


}


$('.carousel').carousel({

    interval: 1000 * 6000
})