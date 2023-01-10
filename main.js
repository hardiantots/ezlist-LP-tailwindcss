const button = document.querySelector(".burger")
const navMobile = document.querySelector(".nav--small")

button.addEventListener('click', () => {
    navMobile.classList.toggle("active");
})

$(".nav--small ul li").click(function(){
    const id = $(this).data('id');
    if(!$(this).hasClass('active')){
      $(".nav--small ul li").removeClass('active');
      $(".nav--small").removeClass('active');
      $(this).addClass('active');
      
      $(`[data-content=${id}]`).show();
    }
  
      if($(this).hasClass('active')){
        $(".nav--small ul li").removeClass('active');
        $(".nav--small").removeClass('active');
    }
});