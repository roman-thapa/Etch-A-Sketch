let numberOfSquare = 35;

container = document.querySelector('.container');

for(i=0; i<=numberOfSquare; i++){
    let arrange = document.createElement('div');
    arrange.className = 'arrange';
    for (j=0; j<=numberOfSquare; j++){
        let square = document.createElement("div");
        square.className = 'square';
        document.documentElement.style.setProperty('--number', numberOfSquare);
        square.style.height = "calc(500px / var(--number)";
        square.style.width = "calc(500px / var(--number)";
        arrange.appendChild(square);
    }
    container.appendChild(arrange);
}
