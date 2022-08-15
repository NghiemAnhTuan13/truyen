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
        listbox.forEach((e) =>{
            e.style.marginRight = '10px'
            e.style.marginLeft = '10px'
            e.style.width = `${widthitemanhmargin-20}px`

        })
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
    setTimeout(auto,1000)
    }
    setTimeout(auto,1000)
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
var content1 = document.querySelector('#ct')
var element = document.querySelectorAll('.element')
var heading = document.querySelectorAll('.inner770')
document.addEventListener('DOMContentLoaded',function(){
    window.addEventListener('resize',function(){
        if(window.innerWidth >= 1250){
            boxleft.style.width = `${(window.innerWidth-854)/2-15}px`
            boxright.style.width = `${(window.innerWidth-854)/2-15}px`
            reviewdiv.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            content[1].style.margin = `0 ${(window.innerWidth-854)/2-15}px 0 ${(window.innerWidth-854)/2-15}px`
            content[0].style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            menu.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            btnright.style.right = `${(window.innerWidth-854)/2-5}px`
            bodymenu.style.right = `${(window.innerWidth-854)/2-15}px`
            user.style.right = `${(window.innerWidth-854)/2}px`
            last.style.left = `${(window.innerWidth-854)/2+50}px`
            element.forEach((a)=> {
                a.style.width = `${content1.offsetWidth/4-15}px`
                a.style.marginLeft ='5px'

            })
            for(var i=12;i<16;i++){
                element[i].style.display = 'block'
            }
            heading.forEach((b)=>{
                b.style.display ='inline-block'
            })
            bodymenu.style.display = 'block'
            make_slide(5)

        }
        else {
            if (window.innerWidth >= 900){
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
            content1.style.width =`${window.innerWidth-boxleft.offsetWidth*2-254}px`
            element.forEach((a)=> {
                a.style.width = `${content1.offsetWidth/3-40}px`
            })
            for(var i=12;i<16;i++){
                element[i].style.display = 'none'
            }
            heading.forEach((b)=>{
                b.style.display ='inline-block'
            })
            bodymenu.style.display = 'block'
            make_slide(4)

            }
            else{
                heading.forEach((b)=>{
                    b.style.display ='none'
                })
                if(window.innerWidth >= 700){
                    bodymenu.style.display = 'none'
                    content1.style.width =`${window.innerWidth-10}px`
                    element.forEach((a)=> {
                        a.style.width = `${content1.offsetWidth/4-40}px`
                        a.style.marginLeft ='10px'
                    })
                    for(var i=12;i<16;i++){
                        element[i].style.display = 'block'
                    }
                make_slide(4)

                }
                else{
                    heading.forEach((b)=>{
                        b.style.display ='none'
                    })
                    bodymenu.style.display = 'none'
                    content1.style.width =`${window.innerWidth-10}px`
                    element.forEach((a)=> {
                        a.style.width = `${content1.offsetWidth/3-40}px`
                        a.style.marginLeft ='10px'
                    })
                    for(var i=12;i<16;i++){
                        element[i].style.display = 'none'
                    }
                make_slide(3)  
                }
            }
        }
    })
})