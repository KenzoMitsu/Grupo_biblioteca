$(document).ready(function(){
    if($('.owl-carousel').length > 0){
        $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
        }) 
    }


    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");


    if (menuButton && dropdownMenu) {
        menuButton.addEventListener("click", function () {
            dropdownMenu.classList.toggle("show");
        });

        document.addEventListener("click", function (event) {
            if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }

   

    
});


