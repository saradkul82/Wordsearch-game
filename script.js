var myWords = ["EGGS", "BREAD", "MILK", "FLOUR", "COOKIES", "SUGAR"]


function pickStartingPosPerWord() {
  // Let's start with the longest word....
  // COOKIES is our example
  var longestWord = "COOKIES";
 // for(var i=0;i<myWords.length;i++){
    var x=Math.floor(Math.random()*12)
    var y=Math.floor(Math.random()*12)
    var direction=Math.floor(Math.random()*8);
    //determine if your word is going fit based on the random selection
    //if not your word does not fitgoing to need to find another direction
    if(longestWord.length>x){
      
    }
    
  //}
  //for(/* each word in myWord*/){
  // randomly pick a spot on the grid to start the word.
  // then, randomly pick a direction, make sure it fits, if not eliminate that direction and try again
  // store this as a list of objects:
  /*
{word:Eggs, pos:[x,y], direction:"ne"}
  */
  // }
  /*
    loop over new data list... and for each word, write it into the right possition

  */
}

function arrangeGame() {
  for (var i = 0; i < myWords.length; i++) {
    var tag = document.createElement("p");
    var text = document.createTextNode(myWords[i]);
    tag.appendChild(text);
    var element = document.getElementById("hint"); 
    element.appendChild(tag);
  }

  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
      var divtag = document.createElement("div");
      divtag.id = 'id' + '_' + i + '_' + j;
      divtag.className = 'individual';
      var mainletter = document.getElementById("letters");
      mainletter.appendChild(divtag);
    }
  }
  placeCorrectLetters();

}
function placeCorrectLetters() {
  /*
    var positions=["row","column","diagonal"]
  var orientation=positions[Math.floor(Math.random()*positions.length)];
  alert(orientation);
  var start=document.querySelectorAll('.individual').length;
  var myRow= document.getElementsByClassName("individual").index+start;
  console.log(myRow);
  */

}
  window.onload = function() {
    for (let node of document.querySelectorAll("individual")) {
      node.innerHTML = getRandomLetter();
    }
  }


  function getRandomLetter(){
    var text="";
    var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    text=letters.charAt(Math.floor(Math.random()*letters.length));
    console.log(text);
  }

//getRandomLetter();


arrangeGame();
