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
        wrapperbox.style.width = `${widthallbox}px`
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
        else{
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
    setTimeout(auto,10000)
    }
    //setTimeout(auto,10000)
    btnright.addEventListener('click',function(){
        count += widthitemanhmargin
        if (count > spacing){
            count = 0;
        }
        if (count < widthitemanhmargin){
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
        else{
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
    })
    btnleft.addEventListener('click',function(){
        count -= widthitemanhmargin
        if (count < -1){
            count = spacing;
        }
        if ( count <= widthitemanhmargin){
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
        else{
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
    })
}
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
    top0[0].style.backgroundColor = '#ccc'
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
var close = document.querySelector('.close')
var newmenu = document.querySelector('.newmenu')
var boxmenu = document.querySelector('.boxmenu')
var elementlm0 = document.querySelectorAll('.elementlm0')
var elementlm = document.querySelectorAll('.elementlm')
document.addEventListener('DOMContentLoaded',function(){
    window.addEventListener('resize',function(){
        if(window.innerWidth >= 1250){
            boxleft.style.width = `${(window.innerWidth-854)/2-15}px`
            boxright.style.width = `${(window.innerWidth-854)/2-15}px`
            reviewdiv.style.margin = `0 ${(window.innerWidth-854)/2-15}px 0 ${(window.innerWidth-854)/2-15}px`
            content[1].style.margin = `0 ${(window.innerWidth-854)/2-15}px 0 ${(window.innerWidth-854)/2-15}px`
            content[0].style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            menu.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            btnright.style.right = `${(window.innerWidth-854)/2-5}px`
            bodymenu.style.right = `${(window.innerWidth-854)/2-15}px`
            user.style.right = `${(window.innerWidth-854)/2}px`
            last.style.left = `${(window.innerWidth-854)/2+50}px`
            last.style.top = '1550px'
            boxmenu.style.display = 'none'
            newmenu.style.display =' none'
            content1.style.width =`610px`
            element.forEach((a)=> {
                a.style.width = `${content1.offsetWidth/4-15}px`
                a.style.margin ='0 5px 0 5px'
    
            })
            for(var i=12;i<16;i++){
                element[i].style.display = 'block'
            }
            for(var i=6;i<12;i++){
                element[i].style.display = 'block'
            }
            heading.forEach((b)=>{
                b.style.display ='inline-block'
            })
            bodymenu.style.display = 'block'
            make_slide(5)
            boxleft.style.display = `block`
            boxright.style.display = `block`
    
        }
        else {
            if (window.innerWidth >= 900){
            boxleft.style.width = `${(window.innerWidth-854)/2-5}px`
            boxright.style.width = `${(window.innerWidth-854)/2-5}px`
            reviewdiv.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            content[1].style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2+20}px`
            content[0].style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            menu.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
            btnright.style.right = `${(window.innerWidth-854)/2-5}px`
            bodymenu.style.right = `${(window.innerWidth-854)/2}px`
            user.style.right = `${(window.innerWidth-854)/2}px`
            last.style.left = `${(window.innerWidth-854)/2+50}px`
            last.style.top = '1550px'
            boxmenu.style.display = 'none'
            newmenu.style.display =' none'
            content1.style.width =`610px`
            element.forEach((a)=> {
                a.style.width = `${content1.offsetWidth/3-40}px`
            })
            for(var i=12;i<16;i++){
                element[i].style.display = 'none'
            }
            for(var i=6;i<12;i++){
                element[i].style.display = 'block'
            }
            heading.forEach((b)=>{
                b.style.display ='inline-block'
            })
            bodymenu.style.display = 'block'
            make_slide(4)
            boxleft.style.display = `block`
            boxright.style.display = `block`
    
            }
            else{
                boxmenu.style.display = 'block'
                close.addEventListener('click',function(){
                    newmenu.style.display =' none'
                })
                boxmenu.addEventListener('click',function(){
                    newmenu.style.display =' block'
                })
                heading.forEach((b)=>{
                    b.style.display ='none'
                })
                heading.forEach((b)=>{
                    b.style.display ='none'
                })
                if(window.innerWidth >= 700){
                    boxleft.style.display = `none`
                    boxright.style.display = `none`
                    bodymenu.style.display = 'none'
                    reviewdiv.style.margin = `10px`
                    content[1].style.margin = `0 0 0 30px`
                    content[0].style.margin = `0 0 0 100px ` 
                    btnright.style.right = `10px`
                    content1.style.width =`610px`
                    content[1].style.width =`${window.innerWidth-40}px`
                    content[0].style.width =`${window.innerWidth-100}px`
                    content1.style.width =`${window.innerWidth-30}px`
                    last.style.top = '1550px'
                    element.forEach((a)=> {
                        a.style.width = `${content1.offsetWidth/4-40}px`
                        a.style.margin ='0 10px 0 5px'
                    })
                    for(var i=12;i<16;i++){
                        element[i].style.display = 'block'
                    }
                    for(var i=6;i<12;i++){
                        element[i].style.display = 'block'
                    }
                make_slide(4)
                }
                else{
                    if(window.innerWidth>=500){
                        boxleft.style.display = `none`
                        boxright.style.display = `none`
                        bodymenu.style.display = 'none'
                        reviewdiv.style.margin = `10px`
                        content[1].style.margin = `0 0 0 30px `
                        content[0].style.margin = `0 0 0 100px ` 
                        btnright.style.right = `10px`
                        content[1].style.width =`${window.innerWidth-60}px`
                        content[0].style.width =`${window.innerWidth-100}px`
                        last.style.top = '1550px'
                        last.style.left = '50px'
                        heading.forEach((b)=>{
                            b.style.display ='none'
                        })
                        bodymenu.style.display = 'none'
                        content1.style.width =`${window.innerWidth-30}px`
                        element.forEach((a)=> {
                            a.style.width = `${content1.offsetWidth/3-40}px`
                            a.style.marginLeft ='10px'
                        })
                        for(var i=12;i<16;i++){
                            element[i].style.display = 'none'
                        }
                        for(var i=6;i<12;i++){
                            element[i].style.display = 'block'
                        }
                        make_slide(3)  
                    }
                    else {
                        if(window.innerWidth>=350){
                            boxleft.style.display = `none`
                            boxright.style.display = `none`
                            bodymenu.style.display = 'none'
                            reviewdiv.style.margin = `10px`
                            content[1].style.margin = `0 0 0 20px `
                            content[0].style.margin = `0 0 0 20px ` 
                            btnright.style.right = `10px`
                            content[1].style.width =`${window.innerWidth-20}px`
                            content[0].style.width =`${window.innerWidth-20}px`
                            content1.style.width =`${window.innerWidth-30}px`
                            last.style.top = '2100px'
                            last.style.left = '30px'

                            heading.forEach((b)=>{
                                b.style.display ='none'
                            })
                            bodymenu.style.display = 'none'
                            element.forEach((a)=> {
                                a.style.width = `${content1.offsetWidth/2-40}px`
                                a.style.marginLeft ='10px'
                            })
                            for(var i=12;i<16;i++){
                                element[i].style.display = 'none'
                            }
                            for(var i=6;i<12;i++){
                                element[i].style.display = 'block'
                            }
                            make_slide(2)  
                        }
                        else{
                                boxleft.style.display = `none`
                                boxright.style.display = `none`
                                bodymenu.style.display = 'none'
                                reviewdiv.style.margin = `10px`
                                content[1].style.margin = `0 0 0 15px `
                                content[0].style.margin = `0 0 0 20px ` 
                                btnright.style.right = `10px`
                                content[1].style.width =`${window.innerWidth-15}px`
                                content[0].style.width =`${window.innerWidth-20}px`
                                content1.style.width =`${window.innerWidth-30}px`
                                last.style.top = `'2090px`
                                last.style.left = '30px'
    
                                heading.forEach((b)=>{
                                    b.style.display ='none'
                                })
                                bodymenu.style.display = 'none'
                                element.forEach((a)=> {
                                    a.style.width = `${content1.offsetWidth/1-40}px`
                                    a.style.marginLeft ='10px'
                                })
                                for(var i=6;i<16;i++){
                                    element[i].style.display = 'none'
                                }
                                make_slide(1)  
                        }
                    }
                }
            }
        }
    })
})
document.addEventListener('DOMContentLoaded',function(){
    if(window.innerWidth >= 1250){
        boxleft.style.width = `${(window.innerWidth-854)/2-15}px`
        boxright.style.width = `${(window.innerWidth-854)/2-15}px`
        reviewdiv.style.margin = `0 ${(window.innerWidth-854)/2-15}px 0 ${(window.innerWidth-854)/2-15}px`
        content[1].style.margin = `0 ${(window.innerWidth-854)/2-15}px 0 ${(window.innerWidth-854)/2-15}px`
        content[0].style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
        menu.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
        btnright.style.right = `${(window.innerWidth-854)/2-5}px`
        bodymenu.style.right = `${(window.innerWidth-854)/2-15}px`
        user.style.right = `${(window.innerWidth-854)/2}px`
        last.style.left = `${(window.innerWidth-854)/2+50}px`
        last.style.top = '1550px'
        boxmenu.style.display = 'none'
        newmenu.style.display =' none'
        content1.style.width =`610px`
        element.forEach((a)=> {
            a.style.width = `${content1.offsetWidth/4-15}px`
            a.style.margin ='0 5px 0 5px'

        })
        for(var i=12;i<16;i++){
            element[i].style.display = 'block'
        }
        for(var i=6;i<12;i++){
            element[i].style.display = 'block'
        }
        heading.forEach((b)=>{
            b.style.display ='inline-block'
        })
        bodymenu.style.display = 'block'
        make_slide(5)
        boxleft.style.display = `block`
        boxright.style.display = `block`

    }
    else {
        if (window.innerWidth >= 900){
        boxleft.style.width = `${(window.innerWidth-854)/2-5}px`
        boxright.style.width = `${(window.innerWidth-854)/2-5}px`
        reviewdiv.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
        content[1].style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2+20}px`
        content[0].style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
        menu.style.margin = `0 ${(window.innerWidth-854)/2-5}px 0 ${(window.innerWidth-854)/2-5}px`
        btnright.style.right = `${(window.innerWidth-854)/2-5}px`
        bodymenu.style.right = `${(window.innerWidth-854)/2}px`
        user.style.right = `${(window.innerWidth-854)/2}px`
        last.style.left = `${(window.innerWidth-854)/2+50}px`
        last.style.top = '1550px'
        boxmenu.style.display = 'none'
        newmenu.style.display =' none'
        content1.style.width =`610px`
        element.forEach((a)=> {
            a.style.width = `${content1.offsetWidth/3-40}px`
        })
        for(var i=12;i<16;i++){
            element[i].style.display = 'none'
        }
        for(var i=6;i<12;i++){
            element[i].style.display = 'block'
        }
        heading.forEach((b)=>{
            b.style.display ='inline-block'
        })
        bodymenu.style.display = 'block'
        make_slide(4)
        boxleft.style.display = `block`
        boxright.style.display = `block`

        }
        else{
            boxmenu.style.display = 'block'
            close.addEventListener('click',function(){
                newmenu.style.display =' none'
            })
            boxmenu.addEventListener('click',function(){
                newmenu.style.display =' block'
            })
            heading.forEach((b)=>{
                b.style.display ='none'
            })
            heading.forEach((b)=>{
                b.style.display ='none'
            })
            if(window.innerWidth >= 700){
                boxleft.style.display = `none`
                boxright.style.display = `none`
                bodymenu.style.display = 'none'
                reviewdiv.style.margin = `10px`
                content[1].style.margin = `0 0 0 30px`
                content[0].style.margin = `0 0 0 100px ` 
                btnright.style.right = `10px`
                content1.style.width =`610px`
                content[1].style.width =`${window.innerWidth-40}px`
                content[0].style.width =`${window.innerWidth-100}px`
                content1.style.width =`${window.innerWidth-30}px`
                last.style.top = '1550px'

                element.forEach((a)=> {
                    a.style.width = `${content1.offsetWidth/4-40}px`
                    a.style.margin ='0 10px 0 5px'
                })
                for(var i=12;i<16;i++){
                    element[i].style.display = 'block'
                }
                for(var i=6;i<12;i++){
                    element[i].style.display = 'block'
                }
            make_slide(4)
            }
            else{
                if(window.innerWidth>=500){
                    boxleft.style.display = `none`
                    boxright.style.display = `none`
                    bodymenu.style.display = 'none'
                    reviewdiv.style.margin = `10px`
                    content[1].style.margin = `0 0 0 30px `
                    content[0].style.margin = `0 0 0 100px ` 
                    btnright.style.right = `10px`
                    content[1].style.width =`${window.innerWidth-60}px`
                    content[0].style.width =`${window.innerWidth-100}px`
                    last.style.top = '1550px'
                    last.style.left = '50px'
                    heading.forEach((b)=>{
                        b.style.display ='none'
                    })
                    bodymenu.style.display = 'none'
                    content1.style.width =`${window.innerWidth-30}px`
                    element.forEach((a)=> {
                        a.style.width = `${content1.offsetWidth/3-40}px`
                        a.style.marginLeft ='10px'
                    })
                    for(var i=12;i<16;i++){
                        element[i].style.display = 'none'
                    }
                    for(var i=6;i<12;i++){
                        element[i].style.display = 'block'
                    }
                    make_slide(3)  
                }
                else {
                    if(window.innerWidth>=350){
                        boxleft.style.display = `none`
                        boxright.style.display = `none`
                        bodymenu.style.display = 'none'
                        reviewdiv.style.margin = `10px`
                        content[1].style.margin = `0 0 0 20px `
                        content[0].style.margin = `0 0 0 20px ` 
                        btnright.style.right = `10px`
                        content[1].style.width =`${window.innerWidth-20}px`
                        content[0].style.width =`${window.innerWidth-20}px`
                        content1.style.width =`${window.innerWidth-30}px`
                        last.style.top = '2100px'
                        last.style.left = '30px'
                        heading.forEach((b)=>{
                            b.style.display ='none'
                        })
                        bodymenu.style.display = 'none'
                        element.forEach((a)=> {
                            a.style.width = `${content1.offsetWidth/2-40}px`
                            a.style.marginLeft ='10px'
                        })
                        for(var i=12;i<16;i++){
                            element[i].style.display = 'none'
                        }
                        for(var i=6;i<12;i++){
                            element[i].style.display = 'block'
                        }
                        make_slide(2)  
                    }
                    else{
                            boxleft.style.display = `none`
                            boxright.style.display = `none`
                            bodymenu.style.display = 'none'
                            reviewdiv.style.margin = `10px`
                            content[1].style.margin = `0 0 0 15px `
                            content[0].style.margin = `0 0 0 20px ` 
                            btnright.style.right = `10px`
                            content[1].style.width =`${window.innerWidth-15}px`
                            content[0].style.width =`${window.innerWidth-20}px`
                            content1.style.width =`${window.innerWidth-30}px`
                            last.style.top = '2090px'
                            last.style.left = '30px'


                            heading.forEach((b)=>{
                                b.style.display ='none'
                            })
                            bodymenu.style.display = 'none'
                            element.forEach((a)=> {
                                a.style.width = `${content1.offsetWidth/1-40}px`
                                a.style.marginLeft ='10px'
                            })
                            for(var i=6;i<16;i++){
                                element[i].style.display = 'none'
                            }
                            make_slide(1)  
                    }
                }
            }
        }
    }
})