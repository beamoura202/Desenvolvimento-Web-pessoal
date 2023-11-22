
window.addEventListener("load",function(){


/*Carta esq*/
    var div1 = document.getElementsByClassName('sec_cartas_viradas_esq');
    var img1 =document.querySelector('.img-card-esq');
    var x1 =this.document.querySelector('.x');
    
    img1.addEventListener("click",function(){
        div1[0].style.visibility = 'visible';
    })
 
    x1.addEventListener("click",function(){
        div1[0].style.visibility = 'hidden';
    })

/*Carta bax*/
    var div2 = document.getElementsByClassName('sec_cartas_viradas_bax');
    var img2 =document.querySelector('.img-card-bax');
    var x2 =this.document.querySelector('.x1');
    
    img2.addEventListener("click",function(){
        div2[0].style.visibility = 'visible';
    })
 
    x2.addEventListener("click",function(){
        div2[0].style.visibility = 'hidden';
    })

/*Carta dir*/
var div3 = document.getElementsByClassName('sec_cartas_viradas_dir');
var img3 =document.querySelector('.img-card-dir');
var x3 =this.document.querySelector('.x2');

img3.addEventListener("click",function(){
    div3[0].style.visibility = 'visible';
})

x3.addEventListener("click",function(){
    div3[0].style.visibility = 'hidden';
})

    

})


