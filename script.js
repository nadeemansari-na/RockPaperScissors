let cscore=0;
let uscore=0;
let userscore=document.getElementById("user-score")
let compscore=document.getElementById("comp-score")
let choices= document.querySelectorAll(".choice")
let final=document.getElementById("display")

const comchoice=()=>{
    let options = ["rock","paper","scissors"];
    let rnd=Math.floor(Math.random()*3);
    return options[rnd];
}

const drawgame=()=>{
    final.innerText="Game draw"
    final.style.backgroundColor="#081b31"
}

const checkwin=(userwin,firstc,secondc)=>{
    
    if(userwin) {
        final.innerText=`You win . your ${firstc} beats  comp ${secondc} `
        uscore++;
        userscore.innerText=uscore
        final.style.backgroundColor="green"
    } else{
        final.innerText=`you lose . comp ${secondc} beats your ${firstc} `
        cscore++
        compscore.innerText=cscore;
        final.style.backgroundColor="red"
    }
}

const playgame=(uchoice)=>{
    let comc=comchoice()
    if(uchoice===comc){
        drawgame()
    }   else{
        let userwin=true;
        if(uchoice==="rock"){
            //paper,scissors
            userwin=comc ==="paper" ? false:true;
        } else if(uchoice==="paper"){
            //scissors,rock
            userwin = comc === "scissors" ? false :true;
        } else{
            //rock , paper
            userwin = comc === "rock" ?false :true;
        }  
        checkwin(userwin,uchoice,comc)      
    }
    
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener('click',()=>{
      let uchoice=  choice.getAttribute("id")
        playgame(uchoice)
    })
})

//reset all things
const button = document.getElementsByClassName("click")[0]
    button.addEventListener("click",e=>{
        console.log("working")
        uscore=0;
        cscore=0;
        userscore.innerText=uscore;
        compscore.innerText=cscore;
         final.innerText="Pick your move"
         final.style.backgroundColor="black"
    })