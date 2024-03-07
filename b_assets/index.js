setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function() {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "«Cardiofort»";
let now = new Date,
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;
const massange = [{
    m: "أهلاً بك. أنا  الدكتور محمد فريد. أنا طبيب أوعية دموية و اليوم سأقدم لك نصيحة للتخلص من   الدوالي في 7 أيام فقط. هذه الإستشارة  مجانية."
}, {
    m: "هنا أقدم تشخيصات مجانية عبر الإنترنت وتوصيات شخصية ساعدت الآلاف من المصابين بالدوالي  على التخلص من الدوالي والتورم في جميع أنحاء الجسم."
}, {
    m: "لتلقي توصياتي ,  أجب عن بعض الأسئلة."
}, {
    m: '<p class="quest">هل أنت مصاب بالحساسية تجاه الأطعمة أو الحبوب ؟ </p>'
}, {
    m: '<p class="quest">هل لاحظت تغيرات في مظهر الأوردة على مستوى الذراعين والساقين (أوردة كبيرة، شبكة وريدية، تورم، ثقل الذراعين والساقين)؟</p>'
}, {
    m: '<p class="quest">هل التغيرات تؤثر على أوردة الساقين أو أظافر اليدين؟</p>'
}, {
    m: '<p class="quest">منذ متى لاحظت ذلك؟ </p>'
}, {
    m: '<p class="quest">ما هي التغييرات التي لاحظتها؟</p>'
}, {
    m: '<p class="quest">اضغط على الصورة التي تشاهدها لوصف مرحلة الدوالي لديك </p>'
}, {
    m: '<p class="quest">كم عمرك؟</p>'
}, {
    m: "شكرًا لك على إجاباتك."
}, {
    m: "في هذه المرحلة، المشكلة لها أعراض مزعجة لكنها ليس خطيرة بعد. ومع ذلك، إذا لم يتم الانتباه بشكل كافٍ للتخلص من مشكلة الدوالي هذه  ستكون العواقب كارثية. الدوالي تتطور بسرعة كبيرة في الجسم وتبدأ في عرقلة الدورة الدموية لجميع الأوردة الأخرى. هذا قد يسبب جلطات دموية خطيرة وفي أسوأ الحالات، أوردة متمزقة ونزيف داخلي. لكن في هذه المرحلة من المشكلة .  ما زال من الممكن التخلص من الدوالي بدون عواقب خطيرة باستخدام المنتجات  الموضعية التي تخفي الدوالي و تصلح  الأوردة!"
}, {
    m: "عادة، جميع الختصين  يوصون بالمنتجات الكيميائية  الموضعية المضادة للدوالي،   . ومع ذلك، لدي أنا وزملائي أسباب للشك في فعالية هذه المنتجات الكيميائية . شخصيًا، أنا وزملائي ننصح المصابين  باستخدام Cardiofort. تم تأكيد فعالية Cardiofort بواسطة العديد من الدراسات السريرية: 20,000 شخص جربه ، 99% تخلصوا  تمامًا من الدوالي والوذمة في أسبوعين فقط."
}, {
    m: 'هذا هو شكل المكمل الغذائي  Cardiofort: <br><br> <img src="b_assets/prod1.png" class="product-img" style="width: 100%; max-width: 140px;"> '
}, {
    m: "يحتوي هذا المنتج على جزيئات نشطة تخترق عمق الجلد، توقف تطور الدوالي وتبدأ عملية تجديد الأوردة والدورة الدموية. <br>يغذي الأوردة بالأكسجين، مما يؤدي إلى تحسن سريع، يغذي الجلد ويزيل التورم!"
}, {
    m: 'هنا نتائج المستخدمين للمنتج  الذين تخلصوا بنجاح من الدوالي باتباع توصياتي: <br> <br><img src="b_assets/comm-photo3-135-arb.jpg"> <br> <img src="b_assets/comm2-92a-arb.jpg"> <br> <img src="b_assets/comm6-abb-arb.jpg"> '
}, {
    m: "لدي أخبار رائعة لك. لقد انت المريض رقم 2000 الذي اشخصه عبر الإنترنت لذا ."
}, {
    m: "كجزء من العرض الترويجي، يمكنك شراء المكمل الغذائي  Cardiofort بخصم 65%، وهو أرخص من أي منتج بديل. <br> لكن فعاليته تم إثباتها من قبل العديد من المستخدمين ! <br>لن تتمكن من العثور على هذا المنتج  في أي صيدلية. فقط كل ما عليك هو إدخال  اسمك ورقم هاتفك في نموذج الطلب بالأسفل . عدد العبوات  محدود، لذا أنصحك  بالطلب في أقرب وقت. بعد تقديم طلبك، سيتصل بك مختص من الشركة المصنعة نفسها  ويجيب على جميع أسئلتك و يؤكد معك عنوانك لإستلام المنتج حتى باب المنزل و لا تنسى ان الدفع عند الإستلام ."
}];

var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 1,
    process = !0;

function app() {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2),
        t = ("0" + e.getHours()).slice(-2) + ":" + s;
    if ($(".chat").height() + 100 > $(".content").height()) {
        $("#scroll_id").removeClass("hide");
        var n = $(".inp").val();
        $(".inp").val(++n)
    }
    const c = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + t + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
    $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
    var s = new Date,
        t = ("0" + s.getMinutes()).slice(-2);
    let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' + (("0" + s.getHours()).slice(-2) + ":" + t) + '</p><p class="text" class="users_mass">' + e + "</p></div></div></div>";
    $(".chat-content-list").append(n), $(".content").animate({
        scrollTop: $(".chat-content-list").height()
    }, 700), $("#scroll_id").addClass("hide")
}

function question1() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">نعم</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">لا</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">لا أعلم</span></div><div class="chat-content-buttons-gender-block"></div></div>')
}

function choise1() {
    $(".question1M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا أعلم"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question2() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">نعم</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">لا</span></div><div class="chat-content-buttons-gender-block"></div><div class="chat-content-buttons-gender-block"></div></div>')
}

function choise2() {
    $(".question2M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question3() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">يد واحدة </span></div><div class="chat-content-buttons-gender-block"><span class="question3W">يدين</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">ساق واحدة</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">الساقين </span></div></div>')
}

function choise3() {
    $(".question3M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("يد واحدة "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("يدين"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("ساق واحدة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("الساقين "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question4() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">1 قبل شهر</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">منذ 2-6 أشهر</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">منذ أكثر من 6 أشهر </span></div></div>')
}

function choise4() {
    $(".question4M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("1 قبل شهر"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("منذ 2-6 أشهر"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("منذ أكثر من 6 أشهر"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question5() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">الأوردة البارزة</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">توسع الأوردة</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">تورم</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">الألم والحكة</span></div></div>')
}

function choise5() {
    $(".question5M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("الأوردة البارزة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("توسع الأوردة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("تورم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("الألم والحكة"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5G").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question6() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M"><img src=\"b_assets/1st_stage.jpg\"</span></div><div class="chat-content-buttons-gender-block"><span class="question6W"><img src=\"b_assets/2nd_stage.jpg\"</span></div><div class="chat-content-buttons-gender-block"><span class="question6P"><img src=\"b_assets/3rd_stage.jpg\"</span></div></div></div></div>')
}

function choise6() {
    $(".question6M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("<img src=\"b_assets/1st_stage.jpg\""), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("<img src=\"b_assets/2nd_stage.jpg\""), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("<img src=\"b_assets/3rd_stage.jpg\""), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6O").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question7() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">30-45</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">46-55</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">56-70</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">70+</span></div></div>')
}

function choise7() {
    $(".question7M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("30-45"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("46-55"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("56-70"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("70+"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7G").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}
setTimeout(() => {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2);
    const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
    $(".chat-content-list").append(t), $("#scroll_id").click(function(e) {
        $(this).removeClass("hide-q"), $(".content").animate({
            scrollTop: $(".chat").height()
        }, 700)
    });
    const n = setInterval(function() {
        if (1 == process)
            if (lengt_num_mas != massange.length) {
                if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++, mass_id++, length_mass = 0, text = "", app()
                }
            } else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show"), $(".reviews").removeClass("hide")
    }, speedtext)
}, 1e3), $(".content").scroll(function() {
    "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
});
var $marker = $("#down-box");
$(".content").scroll(function() {
    $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
});