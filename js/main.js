(function ($) {
    "use strict";


    // var videoSources = [
    //     "https://drive.google.com/file/d/1bcFhuRkPoVbUC9EG6VXKdUBnBERf9nPV/preview",
    //     "https://www.youtube.com/embed/8Zja1EnmMXE?si=Agk5Nfb-JwhICkzV"
    // ];
    
    // var currentIndex = 0;
    // var videoFrame = document.getElementById("video-frame");
    
    // function setVideoSource() {
    //     videoFrame.src = videoSources[currentIndex];
    // }
    
    // document.getElementById("prev-video").addEventListener("click", function() {
    //     currentIndex = (currentIndex - 1 + videoSources.length) % videoSources.length;
    //     setVideoSource();
    // });
    
    // document.getElementById("next-video").addEventListener("click", function() {
    //     currentIndex = (currentIndex + 1) % videoSources.length;
    //     setVideoSource();
    // });
    

    var navigationItems = [
    { type: "video", src: "https://drive.google.com/file/d/1bcFhuRkPoVbUC9EG6VXKdUBnBERf9nPV/preview" }
    // { type: "image", src: "img/gallery-5.jpg" }
];

var currentIndex = 0;

function setNavigationItem(index) {
    var currentItem = navigationItems[index];
    if (currentItem.type === "video") {
        document.getElementById("video-frame").src = currentItem.src;
        document.getElementById("video-frame-container").style.display = "block";
        document.getElementById("image-frame-container").style.display = "none";
    } else if (currentItem.type === "image") {
        document.getElementById("image-frame").src = currentItem.src;
        document.getElementById("image-frame-container").style.display = "block";
        document.getElementById("video-frame-container").style.display = "none";
    }
}

document.getElementById("prev-video").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + navigationItems.length) % navigationItems.length;
    setNavigationItem(currentIndex);
});

document.getElementById("next-video").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % navigationItems.length;
    setNavigationItem(currentIndex);
});

// Initial setup
setNavigationItem(currentIndex);



    $(document).ready(function () {
        
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-VE8DB7N3W9');

    });

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

   

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
        
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

