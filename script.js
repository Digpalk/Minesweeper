let grid=document.querySelector(".grid");
let result=document.querySelector("#resultDisplay");

let mine=[] , total_mine=0;
let clickList=[], total_click=0;

for(let i=1;i<=81;i++){
    const cell=document.createElement('div');
    cell.setAttribute('id',`cell_${i}`);
    // cell.textContent=i;
    grid.appendChild(cell);
}

while(total_mine<10){
    let mine_no=Math.ceil(Math.random() * 81);
    // let mine_no=Math.floor(Math.random() * (81 - 0) + 0);
    
    if(mine_no>81){
        console.log("it is not valid "+mine_no);
    }
    console.log(mine_no+" mine_no");
    if(mine.indexOf(mine_no) == -1){
        mine[total_mine]=mine_no;
        total_mine++; 
    }       
}
// mine=[1,2,3,4,5,6,7,8,9,10];
console.log(mine);

grid.addEventListener('click',function(event){
        console.log(event.target.id);
        let a=Number((event.target.id).substring(5));
        

        if(clickList.indexOf(a) == -1){
            clickList[a]=a;
            total_click++;


            if(mine.indexOf(a) != -1){
                // console.log("it is mine");
                for(let j=0;j<10;j++){
                    let mineCell=document.getElementById(`cell_${mine[j]}`);
                    mineCell.style.backgroundImage="url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
                    mineCell.style.backgroundRepeat = "no-repeat"
                }
                result.textContent="game over";
                this.removeEventListener('click',arguments.callee,false);
            }else if(total_click == 71){ 
                 let mineCell=document.getElementById(`cell_${a}`);
                    mineCell.style.backgroundColor="green";  
                    result.textContent="win";
                    this.removeEventListener('click',arguments.callee,false);
            }else{
                let mineCell=document.getElementById(`cell_${a}`);
                    mineCell.style.backgroundColor="green";
            }

    

        }

        // console.log(clickList);
});



 