
window.addEventListener("load",function(){


/*Carta esq*/
    var div1 = document.getElementsByClassName('sec_cartas_viradas_esq');
    var img1 =document.querySelector('.img-card-esq');

    var img1_img=document.getElementsByClassName('img-card-esq_vir');
    var x1 =this.document.querySelector('.x');

    /*carta virada esq aparece*/
    img1.addEventListener("click",function(){
        img1.classList.add("move1");

        div1[0].style.visibility = 'visible';
        img1_img[0].classList.add("move2");
        div1[0].classList.add("opacidade");
    })


    x1.addEventListener("click",function(){
        div1[0].style.visibility = 'hidden';
        img1_img[0].classList.remove("move2");
        div1[0].classList.remove("opacidade");

        img1.classList.remove("move1");
        
    })

/*Carta bax*/
    var div2 = document.getElementsByClassName('sec_cartas_viradas_bax');
    var img2 =document.querySelector('.img-card-bax');
    var x2 =this.document.querySelector('.x1');
    var img2_img=document.getElementsByClassName('img-card-bax_vir');

    /*carta virada esq aparece*/
    img2.addEventListener("click",function(){
        img2.classList.add("move3");
        div2[0].style.visibility = 'visible';
        img2_img[0].classList.add("move4");
        div2[0].classList.add("opacidade2");
    
    })
       
    x2.addEventListener("click",function(){
        div2[0].style.visibility = 'hidden';
        img2_img[0].classList.remove("move4");
        img2.classList.remove("move3");
        div2[0].classList.remove("opacidade2");
    
    })
    
/*Carta dir*/
var div3 = document.getElementsByClassName('sec_cartas_viradas_dir');
var img3 =document.querySelector('.img-card-dir');
var x3 =document.querySelector('.x2');
var img3_img=document.getElementsByClassName('img-card-dir_vir');

/*carta virada esq aparece*/
img3.addEventListener("click",function(){
    img3.classList.add("move5");
    div3[0].style.visibility = 'visible';
    img3_img[0].classList.add("move6");
    div3[0].classList.add("opacidade3");

})

x3.addEventListener("click",function(){
    div3[0].style.visibility = 'hidden';
    img3_img[0].classList.remove("move6");
    img3.classList.remove("move5");
    div3[0].classList.remove("opacidade3");

})




})


