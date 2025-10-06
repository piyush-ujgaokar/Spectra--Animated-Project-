function page1Animation(){
    const tl=gsap.timeline()

tl.from('nav .part-1,nav h4,nav button',{
    y:-20,
    duration:0.7,
    delay:0.5,
    opacity:0,
    stagger:0.15,
    delay:0.3,
})

tl.from('.center-1 h1',{
    x:-300,
    duration:0.5,
    opacity:0
},"-=0.3")
tl.from('.center-1 p',{
    x:-150,
    duration:0.4,
    opacity:0
})
tl.from('.center-1 .btn',{
    x:-100,
    duration:0.4,
    opacity:0
})
tl.from('.center-2 img',{
    x:200,
    opacity:0,
    duration:0.5
},'-=0.8')

tl.from('.section1Bottom img',{
    y:30,
    duration:0.5,
    opacity:0,
    stagger:0.14
})

}
page1Animation()

function page2Animation(){
    var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:'.section-2 .container',
        scroller:'body',
        // markers:true,
        start:'top 70%',
        end:'top -100%',
        scrub:1,
    }
})

tl2.from('.service',{
    x:-200,
    duration:0.7,
    opacity:0
})

tl2.from('.elem.line1.left',{
    x:-300,
    opacity:0,
    duration:1
},'anim1')
tl2.from('.elem.line1.right',{
    x:300,
    opacity:0,
    duration:1
},'anim1')


tl2.from('.elem.line2.left',{
    x:-300,
    opacity:0,
    duration:1
},'anim2')
tl2.from('.elem.line2.right',{
    x:300,
    opacity:0,
    duration:1
},'anim2')


tl2.from('.elem.line3.left',{
    x:-300,
    opacity:0,
    duration:1
},'anim3')
tl2.from('.elem.line3.right',{
    x:300,
    opacity:0,
    duration:1
},'anim3')

tl2.from('.elem.line4.left',{
    x:-300,
    opacity:0,
    duration:1
},'anim4')
tl2.from('.elem.line4.right',{
    x:300,
    opacity:0,
    duration:1
},'anim4')
}
page2Animation()