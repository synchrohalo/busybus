$( document ).ready(function() {

  var buses = [];
  buses.push( new BusLine("60", "Eastbound", 2, "Randolph/Harbor Dr", "active", 20) );
  buses.push( new BusLine("124", "Eastbound", 2, "Navy Pier", "active", 10) );
  buses.push( new BusLine("151", "Northbound", 2, "Devon/Clark", "active", 16) );
  buses.push( new BusLine("J14", "Southbound", 2, "103rd/Stony Island", "active", 15) );
  buses.push( new BusLine("124", "Southbound", 2, "Navy Pier", "active", 10) );
  buses.push( new BusLine("6x", "Reroute", 0, "Jackson Park Express", "reroute") );
  buses.push( new BusLine("4", "Out of service", 0, "Cottage Grove", "out of service", 0, "12:10 AM") );
  buses.push( new BusLine("20", "Out of service", 0, "Madison", "out of service", 0, "12:10 AM") );
  buses.push( new BusLine("157", "Out of service", 0, "Streeterville/Taylor", "out of service", 0, "6:00 AM") ); // add buses from PDF to array

  for( var i=0; i < buses.length; i++) {
    buses[i].render( i + 1 );
  } // add all buses in array to screen

  $( window ).scroll( function(){
    if ( $( window ).scrollTop() == 0 ) {
      $( ".column-header" ).css( "box-shadow", "0 0 0" );
      $( ".column-header" ).css( "border-bottom", "1px solid rgba(56, 41, 41, 0.12)" );
    } else {
      $( ".column-header" ).css( "box-shadow", "0px 2px 4px rgba(0, 0, 0, 0.24)" );
      $( ".column-header" ).css( "border-bottom", "0px" );
    }
  }); // adds a shadow to column header upon scroll

});
