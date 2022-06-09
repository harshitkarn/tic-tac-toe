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
        showMessage("X Won",arr.indexOf("XXX"));
    else if(arr.includes("OOO"))
        showMessage("O Won",arr.indexOf("OOO"));
    else if(count == 9)
        showMessage('Match Draw',-1)
}

function showMessage(msg,index){
    if(index!=-1){
        var rect = document.getElementById('1').getBoundingClientRect();
        var img = document.getElementById('img');
        img.style.left = ""+(rect.left+18)+"px";
        img.style.top = "102px";
        if(index<3){
            img.src = "./img/180.png";
            img.style.top = 102-(108*(1-index))+"px";
        }
        else if(index<6){
            img.src = "./img/90.png";
            img.style.left = ""+(rect.left+(18-(108*(4-index))))+"px";
        }
        else if(index==6)img.src = "./img/135.png";
        else img.src = "./img/45.png";
        img.style.display="block";
    }
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
    document.getElementById('img').style.display = 'none';
}
