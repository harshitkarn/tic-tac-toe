function check(ele){
    if(ele.innerText!=""){
        return;
    }
    const turn = document.getElementById('turn')
    if(turn.innerText=='X'){
        ele.innerText='X'
        turn.innerText = 'O'
    }
    else{
        ele.innerText='O'
        turn.innerText = 'X'
    }
    checkWin()
}

function checkWin(){
    var arr = [];
    var count = 0;
    for(var i=1;i<10;i+=3){
        var temp = "";
        for(var j=i;j<i+3;j++)
            temp+=document.getElementById(j).innerText;
        arr.push(temp)
        count+=temp.length
    }
    for(var i=1;i<4;i++){
        var temp = "";
        for(var j=i;j<i+9;j+=3){
            temp+=document.getElementById(j).innerText;
        }
        arr.push(temp);
    }
    var temp = "";
    for(var i=1;i<10;i+=4)
        temp+=document.getElementById(i).innerText;
    arr.push(temp);
    temp = "";
    for(var i=3;i<8;i+=2)
        temp+=document.getElementById(i).innerText;
    arr.push(temp);
    if(arr.includes("XXX"))
        showMessage("X Won");
    else if(arr.includes("OOO"))
        showMessage("O Won");
    else if(count == 9)
        showMessage('Match Draw')
}

function showMessage(msg){
    document.getElementById('msg').innerText = msg;
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = 'none';
        reset();
    }
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            reset();
        }
    }
}

function reset(){
    for(var i=1;i<=9;i++)
        document.getElementById(i).innerText = '';
    document.getElementById('turn').innerText = 'X';
}