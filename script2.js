'use strict'

const rows=5;
const columns=5;
let totalScore =0;


const box=document.querySelector(`.box`);

box.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
box.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

for(let i=0;i< rows*columns;i++){
    const tile=document.createElement(`div`);
    tile.classList.add(`tiles`);
    tile.style.border='0.1rem solid black'
    box.appendChild(tile);
    tile.dataset.index=i+1;
}

const bombs=[];
for(let i=0;i<7;i++){
    const x=Math.floor(Math.random()*(25))+1;
    bombs.push(x)
}


// ------------------------------------------
for(let i=0;i<bombs.length;i++){
    console.log(`bomb at: ${bombs[i]}`);
}
console.log(`----`)
const tiles=document.querySelectorAll(`.tiles`);


tiles.forEach(function(item,i){
        item.addEventListener(`click`,function click(){
            if(item.classList.contains(`tiles`) && !bombs.includes(parseInt(item.dataset.index, 10))){
            totalScore++;
            console.log(`totalScore:${totalScore}`);
            item.classList.remove(`tiles`);
            item.classList.add(`checked`);
            }

            if(bombs.includes(parseInt(item.dataset.index, 10))){
                item.classList.add(`bomb`);
                setInterval(function(){
                    localStorage.setItem(`highscore`, totalScore);

                    window.location.href=`index3.html`;

                }, 800);
            }
        })
})






const playerId= localStorage.getItem('playerid');

const playerName=document.querySelector('.playerName');
playerName.textContent=`PlayerName: ${playerId}`;
