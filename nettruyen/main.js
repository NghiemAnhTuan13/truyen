var listbox = document.querySelectorAll('.slide')
var btnleft = document.querySelector('.btnleft')
var btnright = document.querySelector('.btnright')
var wrapperbox = document.querySelector('.body-head')
var reviewdiv = document.querySelector('.body1')
function make_slide(amountSlideAppear){
    var widthitemanhmargin = reviewdiv.offsetWidth / amountSlideAppear;
    let widthallbox = widthitemanhmargin * listbox.length;
    console.log(widthallbox)
    let count = 0
    let spacing = widthallbox - amountSlideAppear*widthitemanhmargin
    wrapperbox.style.width = `1035.6px`
    function auto(){
        count += widthitemanhmargin
        if (count > spacing){
            count = 0;
        }
        if (count < widthitemanhmargin*2){
            wrapperbox.style.width = `1035.6px`
            listbox[7].style.display='none'
            listbox[6].style.display='none'
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
        else{
            wrapperbox.style.transform = `translateX(${-count}px)`
            wrapperbox.style.width = `1380.8px`
            listbox[7].style.display='block'
            listbox[6].style.display='block'

        }
    setTimeout(auto,5000)
    }
    setTimeout(auto,5000)
    btnright.addEventListener('click',function(){
        count += widthitemanhmargin
        if (count > spacing){
            count = 0;
        }
        if (count < widthitemanhmargin*2){
            wrapperbox.style.width = `1035.6px`
            listbox[7].style.display='none'
            listbox[6].style.display='none'
            wrapperbox.style.transform = `translateX(${-count}px)`
        }
        else{
            wrapperbox.style.width = `1380.8px`
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
            wrapperbox.style.width = `1035.6px`
            wrapperbox.style.transform = `translateX(${-count}px)`
            listbox[7].style.display='none'
            if(count==345.19999999999993){
                wrapperbox.style.width = `1208.2px`
                listbox[6].style.display='block'
            }
            else{
                listbox[6].style.display='none'
            }
        }
        else{
            wrapperbox.style.width = `1380.8px`
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
console.log(window.pageYOffset)
function mysticky(){
    if ( window.pageYOffset >= sticky){
        a.classList.add('sticky')
    }
    else{
        a.classList.remove('sticky')
    }
}
window.onscroll = function() {mysticky()}