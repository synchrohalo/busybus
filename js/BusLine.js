class BusLine {
  constructor(busNum, dir, price, dest, state, freq=0, time=0) {
    this.busNum = busNum;
    this.dir = dir;
    this.price = price;
    this.dest = dest;
    this.state = state;
    this.freq = freq;
    this.time = time;
  }

  render( i ) {
    var busLineId = "bus-line-" + this.busNum  + "-" + this.dir;

    switch( this.state ) {
      case "active":
        $( ".bus-line-list" ).append(
          "<li class=\"bus-line\" id=\"" + busLineId + "\"> <div class=\"contents\"> <div class=\"bus-number\"><p class=\"subtitle-2\">" + this.busNum + "</p></div> <div class=\"arrow\"> <i class=\"material-icons\"> arrow_forward</i> <!-- arrow icon --></div> <div class=\"info\"><p class=\"direction\"><span class=\"overline\">" + this.dir + "</span> &#8226; $" + this.price + ".00</p><p class=\"body-2\">" + this.dest + "</p></div></li>"
        ); // if bus line is active

        $( "#" + busLineId + " .contents" ).append(
          "<div class=\"time\"> <div class=\"sooner\"><p class=\"body\">" + i + " min</p></div> <div class=\"later\"><p>" + (i + this.freq) + ", " + (i + this.freq*2 ) + " min</p></div></div></div>"
        );

        break;

      case "out of service":
        busLineId = "bus-line-" + this.busNum + "-out-of-service";

        $( ".bus-line-list" ).append(
          "<li class=\"bus-line\" id=\"" + busLineId + "\"> <div class=\"contents\"> <div class=\"bus-number\"><p class=\"subtitle-2\">" + this.busNum + "</p></div> <div class=\"arrow\"> <i class=\"material-icons\"> arrow_forward</i> <!-- arrow icon --></div> <div class=\"info\"><p class=\"direction\"><span class=\"overline\">" + this.dir + "</span></p><p class=\"body-2\">" + this.dest + "</p></div></li>"
        ); // if bus line is out of service

        $( "#" + busLineId ).addClass( "out-of-service" );
        $( "#" + busLineId + " .contents" ).append(
          "<div class=\"time\"><p class=\"body\">" + this.time + "</p></div></div>"
        );
        break;

      default:
        $( ".bus-line-list" ).append(
          "<li class=\"bus-line\" id=\"" + busLineId + "\"> <div class=\"contents\"> <div class=\"bus-number\"><p class=\"subtitle-2\">" + this.busNum + "</p></div> <div class=\"arrow\"> <i class=\"material-icons\"> arrow_forward</i> <!-- arrow icon --></div> <div class=\"info\"><p class=\"direction\"><span class=\"overline\">" + this.dir + "</span></p><p class=\"body-2\">" + this.dest + "</p></div></li>"
        );

        $( "#" + busLineId ).addClass( "reroute" );
        $( "#" + busLineId + " .contents" ).append(
          "<div class=\"time\"><p class=\"caption\">No routes found</p></div></div>"
        ); // if bus line is rerouted
    }

    $( "#" + busLineId + " .contents" ).append( "<div class=\"border\"></div>" ); // add divider after each bus line

  } // add bus to screen, depending on state
}
