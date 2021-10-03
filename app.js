let menu = document.getElementById('menu');
let boxs = document.querySelectorAll('.wapper span');
let x = document.getElementById('xPoint');
let o = document.getElementById('oPoint');
let round = document.querySelector('#round span');
//target
let choosenRound = document.querySelectorAll('.chooseRound p');
choosenRound.forEach(function (elem) {
    elem.onclick = function (e) {
        let targ = Number(e.target.innerText);
        target(targ);
        getTarget = targ;
    }
});
function target(num) {

    let tar = document.getElementById('target');
    tar.innerText = num + 1;
    menu.style.transform="scaleX(0)";
}

//nav
let reMatch = document.getElementById('reMatch');
reMatch.onclick = () => {
    boxs.forEach((elm) => {
        elm.innerText = '';
        elm.style.color = '#ccc';
    });
}
let restart= document.getElementById('reStart');
menu.style.transform= "scalex(1)";
restart.onclick = function(){
    // boxs.forEach((elm) => {
    //     elm.innerText = '';
    //     elm.style.color = '#ccc';
    // });
    // xPoint=0;
    // oPoint=0;
    // roundNum(getTarget, xPoint, oPoint);
    // target(getTarget)
    location.reload();

}

// function to listen a click event on boxs and tell the winner.
let time = 0;
let xPoint = 0;
let oPoint = 0;
let num = 1;
let teamO = document.getElementById('teamO');
let teamX = document.getElementById('teamX');
let color = "red";
for (let i = 0; i < boxs.length; i++) {

    boxs[i].addEventListener('click', function (e) {
        if (e.target.innerText == '') {

            if (time % 2 == 0) {
                e.target.innerText = 'X';
                teamO.style.color="#000";
                teamX.style.color="#ccc";   
            }
            else {
                e.target.innerText = 'O';
                teamO.style.color="#ccc";
                teamX.style.color="#000";
            }
            time++;
        }

        if (boxs[0].innerText == boxs[1].innerText && boxs[0].innerText == boxs[2].innerHTML && boxs[0].innerText.length != 0) {
            boxs[0].style.color = color;
            boxs[1].style.color = color;
            boxs[2].style.color = color;
            if (boxs[0].innerText == 'X') {
                xPoint += 2;
            }
            else {
                oPoint += 2;
            }
            num++;
            roundNum(num, xPoint, oPoint);

        }
        else if (boxs[0].innerText == boxs[3].innerText && boxs[0].innerText == boxs[6].innerHTML && boxs[0].innerText.length != 0) {
            boxs[0].style.color = color;
            boxs[3].style.color = color;
            boxs[6].style.color = color;
            if (boxs[0].innerText == 'X') {
                xPoint += 2;
            }
            else {
                oPoint += 2;
            }
            num++;
            roundNum(num, xPoint, oPoint);
        }
        else if (boxs[0].innerText == boxs[4].innerText && boxs[0].innerText == boxs[8].innerHTML && boxs[0].innerText.length != 0) {
            boxs[0].style.color = color;
            boxs[4].style.color = color;
            boxs[8].style.color = color;
            if (boxs[0].innerText == 'X') {
                xPoint += 2;
            }
            else {
                oPoint += 2;
            }
            num++;
            roundNum(num, xPoint, oPoint);
        }
        else if (boxs[8].innerText == boxs[5].innerText && boxs[8].innerText == boxs[2].innerHTML && boxs[8].innerText.length != 0) {
            boxs[8].style.color = color;
            boxs[5].style.color = color;
            boxs[2].style.color = color;
            if (boxs[8].innerText == 'X') {
                xPoint += 2;
            }
            else {
                oPoint += 2;
            }
            num++;
            roundNum(num, xPoint, oPoint);
        }
        else if (boxs[8].innerText == boxs[6].innerText && boxs[8].innerText == boxs[7].innerHTML && boxs[8].innerText.length != 0) {
            boxs[8].style.color = color;
            boxs[6].style.color = color;
            boxs[7].style.color = color;
            if (boxs[8].innerText == 'x') {
                xPoint += 2;
            }
            else {
                oPoint += 2;
            }
            num++;
            roundNum(num, xPoint, oPoint);
        }
        else if (boxs[4].innerText == boxs[3].innerText && boxs[4].innerText == boxs[5].innerHTML && boxs[4].innerText.length != 0) {
            boxs[3].style.color = color;
            boxs[4].style.color = color;
            boxs[5].style.color = color;
            if (boxs[3].innerText == 'X') {
                xPoint += 2;
            }
            else {
                oPoint += 2;
            }
            num++;
            roundNum(num, xPoint, oPoint);
        }
        else if (boxs[4].innerText == boxs[1].innerText && boxs[4].innerText == boxs[7].innerHTML && boxs[4].innerText.length != 0) {
            boxs[4].style.color = color;
            boxs[1].style.color = color;
            boxs[7].style.color = color;
            if (boxs[4].innerText == 'X') {
                xPoint += 2;
            }
            else {
                oPoint += 2;
            }
            num++;
            roundNum(num, xPoint, oPoint);
        }
        else if (boxs[2].innerText == boxs[4].innerText && boxs[2].innerText == boxs[6].innerText && boxs[2].innerText.length != 0) {
            boxs[2].style.color = color;
            boxs[4].style.color = color;
            boxs[6].style.color = color;
            if (boxs[2].innerText == 'X') {
                xPoint += 2;
            }
            else {
                oPoint += 2;
            }
            num++;
            roundNum(num, xPoint, oPoint);
        }
        else if (boxs[0].innerText.length != 0 && boxs[1].innerText.length != 0 && boxs[2].innerText.length != 0 && boxs[3].innerText.length != 0 && boxs[4].innerText.length != 0 && boxs[5].innerText.length != 0 && boxs[6].innerText.length != 0 && boxs[7].innerText.length != 0 && boxs[8].innerText.length != 0) {
            num++;
            xPoint++;
            oPoint++;
            roundNum(num, xPoint, oPoint);
        }

    });
}


//round Winner and points
function roundNum(num, xPoint, oPoint) {
    round.innerText = num;
    x.innerText = xPoint;
    o.innerText = oPoint;
    if (num<= getTarget ) {

        setTimeout(() => {
            boxs.forEach((elm) => {
                elm.innerText = '';
                elm.style.color = 'white';
            })
        }, 600);
    }
    else
    tellWinner(xPoint, oPoint);

}

//tell winner after all round

let tar = Number(document.getElementById('target').innerText);
function tellWinner(xPoint, oPoint) {

    if (xPoint > getTarget) {
        winner(xPoint, oPoint);

    }
    else if (oPoint > getTarget) {
        winner(xPoint, oPoint);
    }
    else if (xPoint == getTarget && oPoint == getTarget) {
        winner(xPoint, oPoint);
    }
}
function winner(xPoint, oPoint) {
    let teamX = document.getElementById('xPoint_t');
    let teamO = document.getElementById('oPoint_t');
    let cancel = document.getElementById('cancel');
    let restart = document.getElementById('restart');
    let moreRound = document.getElementById('moreRound');
    teamO.innerText=oPoint;
    teamX.innerText=xPoint;
    winnerTeam = document.getElementById('winner');
    if(xPoint> oPoint)
    {
        winnerTeam.innerText= 'Team X';
    }
    else if(xPoint> oPoint)
    {
        winnerTeam.innerText= ' Team O';
    }
    else{
        winnerTeam.innerText="Team X and O - Draw";
    }
    result.style.transform = 'scale(1)';

    cancel.onclick = function () {
        result.style.transform = 'scale(0)';

    }

    restart.onclick = function () {
        location.reload();
    }

    moreRound.onclick = function(){
        result.style.transform = 'scale(0)';
        boxs.forEach((elm)=>{
            elm.innerText='';
            elm.style.color='#ccc';
        }); 
    }
}


