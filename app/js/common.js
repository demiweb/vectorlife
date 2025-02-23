var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();

$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 10);

});

var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

//anim
//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 40;
            })
        })
    }
}

addCoutingDelay();

var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                        eles[i].classList.add('done');
                        eles[i].style.setProperty('--del', (entry.target.dataset.animDelay * i) + 'ms');
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})

        animStage.forEach((animate, k) => {
            observer.observe(animate);
        })

    }
}

scrollAnimationsStage();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();


//

//sliders
let ownRising = [...document.querySelectorAll('.own-rising__slider')];

function startOwnRising() {
    if (!ownRising.length) {

    } else {
        ownRising.forEach((sld) => {


            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');


            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                effect: false,
                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: false,
                touchStartPreventDefault: false,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,
                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: false,
                autoplay: false,
                spaceBetween: 20,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 0,
                },
                breakpoints: {
                    767: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                    600: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    }

                }


            });


        })


    }
}

startOwnRising();

//

$('.input-calendar input').blur(function() {
    $(this).attr("type", "text");
});
$('.input-calendar input').focus(function() {
    $(this).attr("type", "date");
    setTimeout(() => {
        this.showPicker();
    }, 100)
});


var box = document.getElementById("cursor-id");
var cursorBg = [...document.querySelectorAll('.back-cursor > div')];

function changePosCur(x, y, e) {
    cursorBg.forEach((btn) => {
        btn.style.left = x;
        btn.style.top = y;
    })
}

window.addEventListener('pointermove', function (e) {
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
});

window.addEventListener('mouseover', (e) => {
    if (e.target.closest('.own-rising__slider .swiper-wrapper')) {
        box.classList.add('go-cur');
    }
});

window.addEventListener('mouseout', (e) => {
    if (e.target.closest('.own-rising__slider .swiper-wrapper')) {
        box.classList.remove('go-cur');
    }
});
window.addEventListener('mousedown', function (e) {
    document.addEventListener('mousemove', trackMouse);
});

window.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', trackMouse);
});

function trackMouse(e) {
    console.log(`Mouse position: X=${e.clientX}, Y=${e.clientY}`);
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
}


function ifHaveShips() {
    if (document.querySelector('.page-section')) {
        const sections = document.querySelectorAll(".page-section");
        const menuItems = document.querySelectorAll(".menu-control li a");

        function onScroll2() {
            var scrollPos = $(document).scrollTop();

            window.onscroll = () => {
                sections.forEach((sec, index) => {
                    let top = window.scrollY;
                    let offset = window.scrollY + sec.getBoundingClientRect().top;
                    let height = sec.offsetHeight;
                    let id = sec.getAttribute('id');

                    if (top >= offset - 200 && top < offset + height - 100) {

                        const target = document.querySelector(`[href='#${id}']`);
                        activeLink(target);

                    } else {
                    }
                })
            };
            sections.forEach((sec, index) => {
                let top = window.scrollY;
                let offset = window.scrollY + sec.getBoundingClientRect().top;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                if (top >= offset - 350 && top < offset + height - 100) {
                    const target = document.querySelector(`[href='#${id}']`);
                    activeLink(target);

                } else {
                }
            })
        }

        function activeLink(li) {
            menuItems.forEach((item) => item.classList.remove('active'));

            if (li) {
                li.classList.add('active');
            }

        }


        onScroll2();
        $(document).on("scroll", onScroll2);
// Get all sections that have an ID defined


// Add an event listener listening for scroll
        menuItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let link = btn.getAttribute("href");
                document.body.classList.remove('no-scroll');
                header.classList.remove('active');
                burger.forEach((brg) => {
                    brg.classList.remove('active');
                })
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(link).offset().top - 100
                }, 600);
            })
        });
    }
}

ifHaveShips();

$(".btn-to").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".form").offset().top - 100
    }, 600);
});



//words parallax

var controllerCircle = new ScrollMagic.Controller({});

let wordBlocks = [...document.querySelectorAll('.trans-light')];

function wordBlockParallax() {
    if (wordBlocks.length) {
        wordBlocks.forEach((word) => {
            let trg = word.closest('.page-section');

            let dataTrans = Number(word.dataset.trans);
            let h = window.innerHeight;
            let offs = `${h / 2}px`;
            if (trg.classList.contains('hero')) {
                offs = `${h / 2}px`;
            } else {
                offs = 0;
            }
            // console.log(h);
            var scene2 = new ScrollMagic.Scene({
                triggerElement: trg,
                offset: offs,
                duration: `${h}px`
            })
                .setTween(word, {
                    y: `${dataTrans}%`,
                    ease: Linear.easeNone,
                })
                // .addIndicators('tut')
                .addTo(controllerCircle);
        })
    }
}

wordBlockParallax();

//words parallax

if (document.querySelector('.textual-block')) {
    document.querySelector('.header').classList.add('active');
}
