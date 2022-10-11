let numberOfSquare = 35;

const container = document.querySelector('.container');

for(i=0; i<=numberOfSquare; i++){
    let arrange = document.createElement('div');
    arrange.className = 'arrange';
    for (j=0; j<=numberOfSquare; j++){
        let square = document.createElement("div");
        square.className = 'square';
        document.documentElement.style.setProperty('--numberOfSquare', numberOfSquare);
        square.style.height = "calc(500px / var(--numberOfSquare)";
        square.style.width = "calc(500px / var(--numberOfSquare)";
        arrange.appendChild(square);
        square.onmouseover = function() {
            square.style.backgroundColor = "#FB2576";
        }
    }
    container.appendChild(arrange);
}

