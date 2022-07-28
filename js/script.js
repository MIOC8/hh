const ButtonHeader = document.querySelector(".burger__button");
const Container = document.querySelector(".container");
const BurgerListItems = document.querySelectorAll(".burger__list-item");
ButtonHeader.addEventListener("click", function (e) {
    ButtonHeader.classList.add("burger__button-active")
    BurgerListItems.forEach(function (item) {
        item.classList.add("burger__list-item-active")
    })
})
document.addEventListener("click", function (e) {
    if (!e.target.closest(".burger__button")) {
        ButtonHeader.classList.remove("burger__button-active")
        BurgerListItems.forEach(function (item) {
            item.classList.remove("burger__list-item-active")
        })
    }
})

gsap.registerPlugin(ScrollTrigger);


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

});



gsap.to(".welocome__about", {
    scrollTrigger: {
        trigger: ".welocome__about",
        start: "20px 80%",
        end: "20px 20%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },

    duration: 1,
    opacity: 1,
    scale: 1
})

gsap.to(".welocome__about", {
    scrollTrigger: {
        trigger: ".welocome__about",
        start: "20px 80%",
        end: "20px 20%",
        scroller: ".smooth-scroll",
        toggleActions: "play none none none",
    },

    duration: 0.6,
    delay: 1,
    textShadow: "0px 0px 50px #FF7427"
})

