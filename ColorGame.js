var numsquares = 9;
var colors = generateRandomColor(numsquares);
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message');
var reset = document.querySelector('#reset');
var h1= document.querySelector('h1');
var esybtn = document.querySelector('#esybtn');
var mdmbtn = document.querySelector('#mdmbtn');
var hrdbtn = document.querySelector('#hrdbtn');

esybtn.addEventListener('click',function(){
    esybtn.classList.add('selected');
    hrdbtn.classList.remove('selected'); 
    mdmbtn.classList.remove('selected');
    h1.style.backgroundColor='greenyellow';
    numsquares=3;  
    colors=generateRandomColor(numsquares);
    pickedColor=pickColor();
    messageDisplay.textContent='';
    colorDisplay.textContent=pickedColor;

    for(var i = 0 ; i <squares.length  ; i++)
    {
        if(colors[i])
        squares[i].style.backgroundColor=colors[i];
        else
        document.querySelectorAll('.square')[i].style.display='none';
    };
});

hrdbtn.addEventListener('click',function(){
    
    hrdbtn.classList.add('selected');
    esybtn.classList.remove('selected');
    mdmbtn.classList.remove('selected');
    h1.style.backgroundColor='greenyellow';
    numsquares=9;
    messageDisplay.textContent='';
    colors=generateRandomColor(numsquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i = 0 ; i <squares.length  ; i++)
    {
        squares[i].style.backgroundColor=colors[i];
        document.querySelectorAll('.square')[i].style.display='block';
    };
});

mdmbtn.addEventListener('click',function(){
    mdmbtn.classList.add('selected');
    esybtn.classList.remove('selected');
    hrdbtn.classList.remove('selected'); 
    h1.style.backgroundColor='greenyellow';
    numsquares=6;
    colors=generateRandomColor(numsquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent='';

    for(var i = 0 ; i <squares.length  ; i++)
    {
        if(colors[i])
        {squares[i].style.backgroundColor=colors[i];
        document.querySelectorAll('.square')[i].style.display='block';}
        else
        document.querySelectorAll('.square')[i].style.display='none';

    };
});

reset.addEventListener('click',function()
{
    //creating new different colors
    // {     another logic by vkp 
    //if(hrdbtn.classList==='selected')
    // colors=generateRandomColor(6); 
    // else colors=generateRandomColor(3);}
    colors = generateRandomColor(numsquares);
    
    //pick a new random color from array for 'pickedColor'
    pickedColor=pickColor();

    //change colorDisplay to match pickedColor
    colorDisplay.textContent=pickedColor;

    //add new colors to squares
    for(var i = 0 ; i < squares.length ; i++)
    squares[i].style.backgroundColor=colors[i];
        
    h1.style.backgroundColor='greenyellow';
    if(reset.textContent==='Play Again?')
    {
        reset.textContent='New Game';
        messageDisplay.textContent='';
    }
});


colorDisplay.textContent= pickedColor;
for(var i=0;i<squares.length;i++)
{
    //add initial colors(fixed) to squares
    squares[i].style.backgroundColor=colors[i]; 

    //add click listeners to squares
    squares[i].addEventListener('click',function(){
        
        //grabing color of clicked square
        var clickedColor= this.style.backgroundColor;
        
        //compare the square color with the pickedColor
        if(clickedColor  === pickedColor)
        {   
            h1.style.backgroundColor=clickedColor;
            messageDisplay.textContent='Correct!';
            // squares[i].style.backgroundColor=clickedColor;  <<<why this is not workking>>>
            changeColor(clickedColor);
            reset.textContent='Play Again?';
        }
        else 
        {  
            this.style.backgroundColor='greenyellow';
            messageDisplay.textContent='TryAgain';            
        }
    });
}
function changeColor(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;

    }
};

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColor(num){
    var arr = [];
    for(var i=0;i<num;i++)
    arr.push(randomColor());
    return arr;
}
function randomColor()
{
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    
};
