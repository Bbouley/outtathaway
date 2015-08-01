// add scripts



$(document).on('ready', function() {
  console.log('sanity check!');

  var $gameWindow = $('.gameWindow');
  var $playerBox = $('.playerBox');

  var keyPressed = 0;

  var $startingPosition = $playerBox.offset().left;
  console.log($startingPosition);

  var $currentPosition = $startingPosition;

  var $width = $gameWindow - $playerBox;

  function checkWidth(){
    return $currentPosition < 0 ? 0 : $currentPosition > $width ? $width : $currentPosition;
  }

  // var moveDistance = 15;

  $(document).on('keydown', function(event){
    keyPressed = event.keyCode;
    console.log(keyPressed);
    moveBox();
  });

  $(document).on('keyup', function(event){
    keyPressed = 0;
  });

  setInterval(moveBox, 20);

  setInterval(newPosition, 5);

  function moveBox(){
    if (keyPressed === 37 && $currentPosition >= 139){
        $playerBox.animate({'left': '-=4px'}, 1);
         console.log($currentPosition);
    } else if (keyPressed === 39 && $currentPosition <= 1260){
        $playerBox.animate({'left': '+=4px'}, 1);
        console.log($currentPosition);
    }
  };

  function newPosition(){
    $currentPosition = $playerBox.offset().left;
  }

});
