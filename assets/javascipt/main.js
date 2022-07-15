(function(){

    // Carousel
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          loop:true,
          items:1,
          margin:30,
          stagePadding:30,
          smartSpeed:450,
          autoplay:true,
          autoplayTimeout:5000,
        });
    });

    // Hotjar 
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3067252,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')

    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-KW12HE7HSJ');

})()