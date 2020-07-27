
//factory functions
function player(name , sign ){
    return {name , sign};
}



//module
displayController = ( ()=>{
    const winnerLabel = document.getElementById('winnerLabel');
    const XplayerIn = document.getElementById('Xplayer');
    const OplayerIn = document.getElementById('Oplayer');
    const gameItem = document.querySelectorAll('.grid-item');
    const container = document.querySelector('.grid-container');

    write = function(){
        id = this.id;
        row = Math.floor(id/3);
        col = id%3;
        if(gameModule.grid[row][col] == ' '){
             
         gameModule.fill++;  
        this.innerHTML = currentPlayer.sign;    
         gameModule.grid[row][col] = currentPlayer.sign;
         console.log(Xplayer.name);
        if(gameModule.checkWinner()){
            winnerLabel.textContent = `The winner is ${currentPlayer.name}`;
        }
        if(gameModule.fill == cells){
            console.log('TTTIIIIEEE');
            winnerLabel.textContent = 'Its a tie ! ';
        }  
        if(currentPlayer.sign == 'X')
        currentPlayer = Oplayer;
        else
            currentPlayer = Xplayer;  
    }   
   }

     return{  XplayerIn ,   OplayerIn , gameItem , write , winnerLabel , container } ;
 })();

//module
gameModule = (() =>{
    let Oplayer ='' , Xplayer ='' , fill = 0 ;
    let grid = [
        [' ' , ' ' , ' '],
        [' ' , ' ' , ' '],
        [' ' , ' ' , ' ']
    ];    
    checkWinner = function(){

        for(i = 0 ; i < 3 ; i++){
            let x = 0 , o = 0;
            for( j = 0 ; j < 3 ; j++){
                if(grid[i][j] == 'X')
                    x++;
                if(grid[i][j] == 'O')
                    o++;    
            }
            if(x == 3 || o == 3)
                return true;
        }
        for(i = 0 ; i < 3 ; i++){
            let x = 0 , o = 0;
            for( j = 0 ; j < 3 ; j++){
                if(grid[j][i] == 'X')
                    x++;
                if(grid[j][i] == 'O')
                    o++;    
            }
            if(x == 3 || o == 3)
                return true;
        }
        
        let x = 0 , o = 0;
        for(i = 0 ; i < 3 ; i++){
                if(grid[i][i] == 'X')
                    x++;
                if(grid[i][i] == 'O')
                    o++;    
        
            if(x == 3 || o == 3)
                return true;
        }
         x = 0 , o = 0;
        for(i = 0 , j = 2 ; i < 3 , j >=0; i++ , j--){
                if(grid[i][i] == 'X')
                    x++;
                if(grid[i][i] == 'O')
                    o++;    
        
            if(x == 3 || o == 3)
                return true;
        }
        return false;
    }
    return { Oplayer , Xplayer , grid   , checkWinner , fill};
})();   



//buttons 
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
let Xplayer = null  , Oplayer  = null , currentPlayer = null;
const cells = 9;

start.addEventListener('click' , ()=>{   
    Xplayer = player(displayController.XplayerIn.value , 'X');
    Oplayer = player(displayController.OplayerIn.value , 'O');    
    currentPlayer = Xplayer;
    displayController.container.style.visibility = 'visible';
})

reset.addEventListener('click' , ()=>{
    gameModule.grid = [
        [' ' , ' ' , ' '],
        [' ' , ' ' , ' '],
        [' ' , ' ' , ' ']
    ];
    gameModule.fill = 0;
    for(cell of displayController.gameItem){
        cell.innerHTML = "";
    }
    currentPlayer = Xplayer;
})
for( i = 0 ; i < cells ; i++){
    displayController.gameItem[i].addEventListener( 'click' , displayController.write);
}