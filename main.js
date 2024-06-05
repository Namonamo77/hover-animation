
const hover = document.querySelector("a")
let hoverStatus = false

gsap.set([".circle1", ".circle2", ".circle3"], {transformOrigin:"center"})

gsap.set(".circle1", {y:10, x:10,scale:0})
gsap.set(".circle2", {y:200, x:190,scale:0})
gsap.set(".circle3", {y:500, x:280, scale:0})


const tl = gsap.timeline({defaults: {
    ease:"power3.out",
    duration:1,
}})



console.log(tl)

hover.addEventListener("mouseenter", ()=>{
    console.log("play")
    tl.to(".circle1", {scale:2})
        .to(".circle2", {scale:4}, "<+0.1")
        .to(".circle3", {scale:2}, "<+0.1")
})

hover.addEventListener("mouseleave", ()=>{
    tl.to(".circle1", {scale:0})
        .to(".circle2", {scale:0}, "<+0.1")
        .to(".circle3", {scale:0}, "<+0.1")
})


