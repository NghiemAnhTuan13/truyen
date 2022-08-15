var listbox = document.querySelectorAll('.slide')
var btnleft = document.querySelector('.btnleft')
var btnright = document.querySelector('.btnright')
var wrapperbox = document.querySelector('.body-head')
var reviewdiv = document.querySelector('.body1')
function make_slide(amountSlideAppear){
    var widthitemanhmargin = reviewdiv.offsetWidth / amountSlideAppear;
    let widthallbox = widthitemanhmargin * listbox.length;
    let count = 0
    let spacing = widthallbox - amountSlideAppear*widthitemanhmargin
    wrapperbox.style.width = `${widthallbox-widthitemanhmargin*2}px`
    function auto(){
        count += widthitemanhmargin
        if (count > spacing+1){
            count = 0;
        }
        if (count < widthitemanhmargin*2){
            wrapperbox.style.width = `${widthallbox-widthitemanhmargin*2}px`
            listbox[7].style.display='none'
            listbox[6].style.display='none'
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
        else{
            wrapperbox.style.transform = `translateX(${-count}px)`
            wrapperbox.style.width = `${widthallbox}px`
            listbox[7].style.display='block'
            listbox[6].style.display='block'

        }
    setTimeout(auto,5000)
    }
    //setTimeout(auto,5000)
    btnright.addEventListener('click',function(){
        count += widthitemanhmargin
        if (count > spacing){
            count = 0;
        }
        if (count < widthitemanhmargin*2){
            wrapperbox.style.width = `${widthallbox-widthitemanhmargin*2}px`
            listbox[7].style.display='none'
            listbox[6].style.display='none'
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
        else{
            wrapperbox.style.width = `${widthallbox}px`
            wrapperbox.style.transform = `translateX(${-count}px)`
            listbox[7].style.display='block'
            listbox[6].style.display='block'

        }
    })
    btnleft.addEventListener('click',function(){
        count -= widthitemanhmargin
        if (count < -1){
            count = spacing;
        }
        if ( count <= widthitemanhmargin*2){
            wrapperbox.style.width = `${widthallbox-widthitemanhmargin*2}px`
            wrapperbox.style.transform = `translateX(${-count}px)`
            listbox[7].style.display='none'
            if(count.toFixed(1)== widthitemanhmargin*2){
                wrapperbox.style.width = `${widthallbox-widthitemanhmargin}px`
                listbox[6].style.display='block'
            }
            else{
                listbox[6].style.display='none'
            }
        }
        else{
            wrapperbox.style.width = `${widthallbox}px`
            listbox[7].style.display='block'
            listbox[6].style.display='block'
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
    })
}
make_slide(5)
var top0= document.querySelectorAll('.htop')
var top1= document.querySelector('.ctop1')
var top2= document.querySelector('.ctop2')
var top3= document.querySelector('.ctop3')
top0[0].addEventListener('click',function(){
    top0[0].style.backgroundColor = '#fff'
    top0[1].style.backgroundColor = '#ccc'
    top0[2].style.backgroundColor = '#ccc'
    top1.style.display = 'block'
    top2.style.display = 'none'
    top3.style.display = 'none'
})
top0[1].addEventListener('click',function(){
    top0[1].style.backgroundColor = '#fff'
    top0[0].style.backgroundColor = '#ccc'
    top0[2].style.backgroundColor = '#ccc'
    top2.style.display = 'block'
    top1.style.display = 'none'
    top3.style.display = 'none'
})
top0[2].addEventListener('click',function(){
    top0[2].style.backgroundColor = '#fff'
    top0[1].style.backgroundColor = '#ccc'
    top0[1].style.backgroundColor = '#ccc'
    top3.style.display = 'block'
    top2.style.display = 'none'
    top1.style.display = 'none'
})
var a = document.querySelector('.heading2')
var sticky = a.offsetTop
function mysticky(){
    if ( window.pageYOffset >= sticky){
        a.classList.add('sticky')
    }
    else{
        a.classList.remove('sticky')
    }
}
window.onscroll = function() {mysticky()}

var boxleft = document.querySelector('.boxleft')
var boxright = document.querySelector('.boxright')
var body = document.querySelector('.body0')
var content = document.querySelectorAll('.content')
var menu = document.querySelector('.menu')
var bodymenu = document.querySelector('.bodymenu')
var user = document.querySelector('.user')
var last = document.querySelector('.last')
document.addEventListener('DOMContentLoaded',function(){
    window.addEventListener('resize',function(){
        if(window.innerWidth >= 1254){
            boxleft.style.width = `${(window.innerWidth-854)/2-5}px`
            boxright.style.width = `${(window.innerWidth-854)/2-5}px`
            reviewdiv.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            content[1].style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            content[0].style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            menu.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            btnright.style.right = `${(window.innerWidth-854)/2-5}px`
            bodymenu.style.right = `${(window.innerWidth-854)/2}px`
            user.style.right = `${(window.innerWidth-854)/2}px`
            last.style.left = `${(window.innerWidth-854)/2+50}px`
        }
    })
})
