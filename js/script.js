function scrollBanner() {
    $(document).on("scroll", function() {
        var e = $(this).scrollTop();
        $(".parallax-fade-top").css({
            top: e / 2 + "px",
            opacity: 1 - e / 350
        })
    })
}

/* Atribuindo Delay */
$(".delay").css("display", "none");

function amostraGratis() {
    $(location).attr("href", "http://www.google.com")
}
$(document).ready(function() {
    jQuery(window).width() <= 480 ? ($(".show-desktop").hide(), $(".show-mobile").show(), document.getElementById("for-student").classList.add("offset-3")) : ($(".show-desktop").show(), $(".show-mobile").hide()), $(".mask-cep").mask("00000-000"), $(".mask-data").mask("00/00/0000"), $(".mask-cel").mask("0000-0000"), $(".mask-cel-ddd").mask("(00) 00000-0000"), $(".mask-cpf").mask("000.000.000-00", {
        reverse: !0
    }), $(".mask-cnpj").mask("00.000.000/0000-00", {
        reverse: !0
    }), new Swiper(".blog-slider", {
        spaceBetween: 30,
        effect: "fade",
        loop: !0,
        mousewheel: {
            invert: !1
        },
        pagination: {
            el: ".blog-slider__pagination",
            clickable: !0
        },
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
        }
    });
    var e = new Date,
        a = e.getDate(),
        t = e.getMonth(),
        o = e.getFullYear();
        t = t + 1;
    document.getElementById("date-label").innerHTML = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][e.getDay()] + ", " + a + "/" + t + "/" + o + ".", $(".js-tilt").tilt({
        glare: !0,
        maxGlare: .5,
        scale: 1.2
    }), $(".tilt-img").tilt({
        scale: 5.2
    }), $(".ct-house").tilt({
        scale: 1.01
    }), $("#progressTimer").progressTimer({
        timeLimit: 5,
        warningThreshold: 10,
        baseStyle: "progress-bar-warning",
        warningStyle: "progress-bar-danger",
        completeStyle: "progress-bar-info",
        onFinish: function() {
            console.log("I'm done")
        }
    }), $(window).enllax(), scrollBanner(), $("#recusaOferta").click(function() {
        alert("ok")
    })
}), $("#recusaOfertaBtn").click(function() {
    Swal.fire({
        title: "Você tem certeza?",
        text: "Ao recursar essa oferta ela pode não aparecer novamente para você.",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonText: "Recusar a oferta",
        cancelButtonText: "Voltar"
    }).then(e => {
        if (e.value) {
            let e, a;
            Swal.fire({
                icon: "success",
                title: "Aguarde um instante",
                html: 'Estamos separando uma última oferta <br> para você em <b class="destaque"></b> segundos.',
                timer: 7e3,
                timerProgressBar: !0,
                onBeforeOpen: () => {
                    Swal.showLoading(), e = setInterval(() => {
                        const e = Swal.getContent();
                        if (e) {
                            const t = e.querySelector("b");
                            t && (a = Swal.getTimerLeft() / 1e3, t.textContent = Math.trunc(a))
                        }
                    }, 100)
                },
                onClose: () => {
                    clearInterval(e)
                }
            }).then(e => {
                e.dismiss === Swal.DismissReason.timer && (console.log("I was closed by the timer"), $(location).attr("href", "downsell.php"))
            })
        }
    })
}), $("#navbar-stick").stickyNavbar({
    activeClass: "active",
    sectionSelector: "scrollto",
    animDuration: 350,
    startAt: 200,
    easing: "swing",
    animateCSS: !1,
    animateCSSRepeat: !1,
    cssAnimation: "fadeInDown",
    jqueryEffects: !1,
    jqueryAnim: "slideDown",
    selector: "li",
    mobile: !1,
    mobileWidth: 480,
    zindex: 9999,
    stickyModeClass: "sticky",
    unstickyModeClass: "unsticky"
}), $(".open-menu").on("click", function() {
    $(".overlay").addClass("open")
}), $(".item-nav").on("click", function() {
    $(".overlay").removeClass("open")
}), $(".close-menu").on("click", function() {
    $(".overlay").removeClass("open")
});
var $flexslider = $(".flexslider");
$flexslider.flexslider({
    animation: "slide",
    manualControls: ".flex-control-nav li",
    useCSS: !1
});