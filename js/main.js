// add scripts



$(document).on('ready', function() {
  console.log('sanity check!');

  var $gameWindow = $('.gameWindow');
  var $playerBox = $('.playerBox');
  var $computerBox = $('.computerBox');
  var $playButton = $('.play');

  var keyPressed = 0;

  var $computerStartPosition = $computerBox.offset().top;
  console.log($computerStartPosition);

  var $startingPosition = $playerBox.offset().left;
  console.log($startingPosition);

  var $playerCurrentPosition = $startingPosition;

  var $computerCurrentPosition = $computerStartPosition;

  $(document).on('keydown', function(event){
    keyPressed = event.keyCode;
    moveBox();

  });

  $(document).on('keyup', function(event){
    keyPressed = 0;
  });

  setInterval(moveBox, 20);

  setInterval(newPosition, 5);

  function moveBox(){
    if (keyPressed === 37 && $playerCurrentPosition >= 139){
        $playerBox.animate({'left': '-=8px'}, 1);
    } else if (keyPressed === 39 && $playerCurrentPosition <= 1260){
        $playerBox.animate({'left': '+=8px'}, 1);
    }
  }

  function newPosition(){
    $playerCurrentPosition = $playerBox.offset().left;
  }

  $playButton.on('click', function(){
    collision($playerBox, $computerBox);
    setInterval(function(){
      if ($computerCurrentPosition < 550){
          $computerBox.animate({'top': '+=10px'}, 'fast');
          console.log('test');
          $computerCurrentPosition = $computerBox.offset().top;
          console.log($computerCurrentPosition);
      } else {
      $computerBox.stop();
     }
    }, 500);
  });

  function collision($playerBox, $computerBox){

    setInterval(function(){

    var playerX = $playerBox.offset().left;
    var playerY = $playerBox.offset().top;
    var playerHeight = $playerBox.outerHeight(true);
    var playerWidth = $playerBox.outerWidth(true);
    var playerBoundaryY = playerY + playerHeight;
    var playerBoundaryX = playerX + playerWidth;

    var computerX = $computerBox.offset().left;
    var computerY = $computerBox.offset().top;
    var computerHeight = $computerBox.outerHeight(true);
    var computerWidth = $computerBox.outerWidth(true);
    var computerBoundaryY = computerY + computerHeight;
    var computerBoundaryX = computerX + computerWidth;

    if (playerBoundaryY < computerY || playerY > computerBoundaryY || playerBoundaryX < computerX || playerX > computerBoundaryX ){
      console.log('no crash')
    } else {
      console.log ('crash');
    }
  }, 500);
}



});
