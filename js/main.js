// add scripts



$(document).on('ready', function() {
  console.log('sanity check!');

  var $gameWindow = $('.gameWindow');
  var $playerBox = $('.playerBox');

  var keyPressed = 0;

  var $startingPosition = $playerBox.offset().left;
  console.log($startingPosition);

  var $currentPosition = $startingPosition;

  var moveDistance = 5;

  $(document).on('keydown', function(event){
    keyPressed = event.keyCode;
    console.log(keyPressed);
    moveBox();
  });

  $(document).on('keyup', function(event){
    keyPressed = 0;
  });


  function moveBox(){
    if (keyPressed === 37 && $currentPosition >= 137){
        var moveLeft = $currentPosition - moveDistance;
        $playerBox.offset({left: moveLeft});
        $currentPosition = $playerBox.offset().left;
        console.log($currentPosition);
    } else if (keyPressed === 39 && $currentPosition <= 1263){
       var moveRight = $currentPosition + moveDistance;
        $playerBox.offset({left: moveRight});
        $currentPosition = $playerBox.offset().left;
        console.log($currentPosition);
    }
  };

  function newPosition(){
    playerPosition = $playerBox.position();
  }

});
