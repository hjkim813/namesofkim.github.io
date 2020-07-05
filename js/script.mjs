
  var header2 = $('.header2');

  $(document).ready(function(){
    $(".header").click(function(){
      header2.toggleClass('header2_show')
  });

  var $carousel = $('.carousel').flickity({
    lazyLoad: true
  });

  $carousel.on( 'lazyLoad.flickity', function( event, cellElement ) {
    var img = event.originalEvent.target;
    // console.log( event.originalEvent.type, img.src );
  });

  $( function( ) {
    // $(".panel img").hide();
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        // $(".panel img").show();
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }


    $('#gif li a img').hover(function(){
      // on mouse enter
      var customdata = $(this).parent().attr('img');
      $(this).attr('src',customdata);
    }, function(){
      // on mouse leave
      $(this).attr('src',$(this).attr('data-orig'));
    });



    $( '.carousel' ).flickity( );
  })

});
