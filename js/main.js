(function(){
  $(document).ready(function(){

    // hide navbar 
    // credits to Marius Craciunoiu
    var scrolling;
    var lastScrollTop = 0,
        scrollTrigger = 5,
        navbarHeight = $('nav').outerHeight();

    // set scrolling to true if user scrolls
    $(window).scroll(function(e) {
      scrolling = true;
    });

    // run hideOrShow function when scrolling is detected
    setInterval(function() {
      if (scrolling) {
        hideOrShowNavbar();
        scrolling = false;
      }
    }, 250);

    function hideOrShowNavbar() {
      var scrollPosition = $(this).scrollTop();
      // ******** Stats ********
      // console.log('lastST' + lastScrollTop);
      // console.log('scrollP' + scrollPosition);
      // console.log('navbarH' + navbarHeight);
      // console.log('winH' + $(window).height());
      // console.log('docH' + $(document).height());

      if (Math.abs(lastScrollTop - scrollPosition) <= scrollTrigger) {
        return;
      }

      // scroll down and scroll past navbar height
      if ((scrollPosition > lastScrollTop) && (scrollPosition > navbarHeight)) {
        // hide navbar
        $('nav').addClass('nav-up');
      } else {
        if ((scrollPosition + $(window).height()) < $(document).height()) {
          $('nav').removeClass('nav-up');
        }
      }
      lastScrollTop = scrollPosition;
    }

    // unlock the vault
    $('.vault').on('click', function() {
      $('#cover').fadeOut("slow",function() {
        $(this).fadeIn().css('background-image', 'url(https://docs.google.com/uc?id=0B46iINhPgLTtR0ItTW0wMklBOHM)')
      });
      $('#cover').css('background-position', 'fixed');
    });
  });  // end doc ready
}());  // end iffy