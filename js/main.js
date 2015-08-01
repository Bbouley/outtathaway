// add scripts



$(document).on('ready', function() {
  console.log('sanity check!');

  var $gameWindow = $('.gameWindow');
  var $playerBox = $('.playerBox');
  console.log($playerBox.position());

  var keyPressed = 0;

  var playerPosition = {top:0, left:15};

  $(document).keydown(function(event){
    keyPressed = event.keyCode;
    console.log(keyPressed);
    moveBox();
    newPosition();
    $playerBox.css(playerPosition);
  });

  $(document).keyup(function(event){
    keyPressed = 0;
  });


  function moveBox(){
    if (keyPressed === 37){
      $playerBox.animate({'left': '-=1px'},'1');
      keyPressed = 0;
    } else if (keyPressed === 39){
      $playerBox.animate({'right': '-=1px'}, '1');
      keyPressed = 0;
    } else {
      console.log('test');
    }
  }

  function newPosition(){
    playerPosition = $playerBox.position();
  }

});
