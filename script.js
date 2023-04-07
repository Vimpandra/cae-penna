(function() {
    const words = {
        names: [
            'Shaco',
            'Master Yi',
            'Wukong',
            'Elise',
        ],
        colors: [
            'verde',
            'cor de maconha',
            'esverdeado',
            'safira',
            'esmeralda',
        ],
        dislikes: [
            'Akali',
            'Yumi',
            'Trump',
            'Bolsonarista cuzao gopista',
            'Bater o dedinho do pé na quina',
        ],
    }
    
    const pallet = {
        foreground: ['black', 'navy', 'magenta', 'white'],
        background: ['gold', 'cyan', 'pink', 'teal'],
    
        randomColor: function() {
            return Math.floor(Math.random()*4)
        }
    }
    
    const spans = document.querySelectorAll('span');

    spans[0].addEventListener('click', () => {
        randomize(spans[0], words.names)
    });
    spans[1].addEventListener('click', () => {
        randomize(spans[1], words.colors)
    });
    spans[2].addEventListener('click', () => {
        randomize(spans[2], words.dislikes)
    });
    
    function randomize(span, arr) {
        let randomNum = Math.floor(Math.random()*arr.length);
        if (span.textContent === arr[randomNum]) {
            randomize(span, arr);
        } else {
            span.textContent = arr[randomNum];
            span.style.color = pallet.foreground[pallet.randomColor()];
            span.style.backgroundColor = pallet.background[pallet.randomColor()];
        }
    };

}());
