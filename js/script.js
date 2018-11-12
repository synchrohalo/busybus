var showMenu = false;

$( ".more" ).click(function() {
  if (showMenu == false) {
    $( ".more-menu" ).css( "visibility", "visible" );
    showMenu = true;
  } else {
    $( ".more-menu" ).css( "visibility", "hidden" );
    showMenu = false;
  }
});

$( "input" ).change(function(){
  if ($( ".bus-line" ).hasClass( "dark" ) == false) {
    $( ".bus-line" ).addClass( "dark" );
  } else {
    $( ".bus-line" ).removeClass( "dark" );
  }
});
