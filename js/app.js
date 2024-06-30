$(document).ready(function(){
    const owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        nav: false, // Desativar a navegação padrão do Owl
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Botões de passar os jogos adiante personalizados
    $("#next").click(function() {
        owl.trigger('next.owl.carousel');
    });

    $("#prev").click(function() {
        owl.trigger('prev.owl.carousel');
    });
});

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    imagem.classList.toggle('dashboard__item__img--rented');
    botao.classList.toggle('dashboard__item__button--return');
    botao.textContent = imagem.classList.contains('dashboard__item__img--rented') ? 'Devolver' : 'Alugar';
}

