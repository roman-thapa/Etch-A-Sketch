continer = document.querySelector('.continer');

for(i=0; i<=16; i++){
    let arrange = document.createElement('div');
    arrange.className = 'arrange';
    for (j=0; j<=16; j++){
        let square = document.createElement("div");
        square.className = 'square';
        square.innerText = i;

        arrange.appendChild(square);
        
    }
    continer.appendChild(arrange);
}