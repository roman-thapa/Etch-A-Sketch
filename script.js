let numberOfSquare = 16;

container = document.querySelector('.container');

for(i=0; i<=numberOfSquare; i++){
    let arrange = document.createElement('div');
    arrange.className = 'arrange';
    for (j=0; j<=numberOfSquare; j++){
        let square = document.createElement("div");
        square.className = 'square';
        square.style.height = "calc(500px / 16";
        square.style.width = "calc(500px / 16";
        arrange.appendChild(square);
    }
    container.appendChild(arrange);
}
