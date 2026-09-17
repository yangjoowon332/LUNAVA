$(document).ready(function () {

    $('header').load('include/header.html', function () {

        $('.hamburger').click(function () {
            $(this).toggleClass('on');
            $('.mo_nav').fadeToggle().toggleClass('on');

            bodyNoScroll()
        });

        $('footer').load('include/footer.html');

        function bodyNoScroll() {
            if ($('.hamburger').hasClass('on') == true) {
                $('body').css({ height: '100vh', overflow: 'hidden' })
            } else {
                $('body').css({ height: '', overflow: '' })
            };

        }


        let pcNav = $('.pc_nav').html();
        $('.pc_nav .gnb').mouseenter(function () {

            $('.pc_nav .lnb')
                .stop(true, true)
                .fadeIn(150);

            $('.pc_nav .lnb_bg')
                .stop(true, true)
                .fadeIn(150);

        });


        $('.pc_nav').mouseleave(function () {

            $('.pc_nav .lnb')
                .stop(true, true)
                .fadeOut(150);

            $('.pc_nav .lnb_bg')
                .stop(true, true)
                .fadeOut(150);

        });

        $('.mo_nav .gnb > li > a').click(function () {
            $('.mo_nav .gnb .lnb').slideUp();
            $(this).siblings('.lnb').stop().slideToggle();

            return false
        });




        $(window).resize(function () {
            let winW = $(window).width();
            if (winW < 880) {
                $('#section3 .name').each(function () {
                    $(this).appendTo($(this).siblings('.cont'))
                })
            } else {
                $('#section3 .name').each(function () {
                    $(this).appendTo($(this).parents('a'))
                });

                $('.mo_nav').removeClass('on').hide();
                $('.hamberger').removeClass('on');
                bodyNoScroll()
            }



        });


    });


    $('.smallimg li').mouseenter(function () {
        liNum = $(this).index();

        sImgActive()//매개변수

        clearInterval(rolling)

    });

    $('.smallimg li').mouseleave(function () {
        rolling = setInterval(rollingImg, 2000)
    });

    let rolling = setInterval(rollingImg, 2000);

    let liNum = 0;
    let sLength = $('.smallimg li').length;

    function rollingImg() {
        liNum++;
        if (liNum >= sLength) {
            liNum = 0;
        };

        sImgActive()

    }

    function sImgActive() {//아무거나쓰기,
        let sImg = $('.smallimg li').eq(liNum).find('img').attr('src');
        let sText = $('.smallimg li').eq(liNum).find('.title').text();

        $('.bigimg img').attr('src', sImg);
        $('.bigimg .title').text(sText);

        $('.smallimg li').eq(liNum).addClass('on').siblings().removeClass('on');
    }


    let sImg0 = $('.smallimg li').eq(0).find('.img').attr('src');
    let sText0 = $('.smallimg li').eq(0).find('.title').text();

    $('.bigimg img').attr('src', sImg0);
    $('.bigimg .title').text(sText0)

    $('#section3 .content .cont .text').each(function () {
        let dot = 40;
        let text = $(this).text().trim();


        if (text.length > dot) {
            let realText = text.substring(0, dot)
            $(this).text(realText + '...');
        }


    });



    $(window).scroll(function () {
        let scrT = $(window).scrollTop();
        let winH = $(window).height();

        if ($('#hero').length >= 1) {
            let sec1Top = $('#section1').offset().top;
            let sec2Top = $('#section2').offset().top;
            let sec3Top = $('#section3').offset().top;


            if (scrT > 0) {
                $('#hero').addClass('on');
            } else {
                $('#hero').removeClass('on');

            }

            if (scrT > sec1Top - winH / 2) {
                $('#section1 .imgbox').addClass('on');
            } else {
                $('#section1 .imgbox').removeClass('on');
            }

            if (scrT > sec2Top - winH / 2) {
                $('#section2 .contentbox').addClass('on');
            } else {
                $('#section2 .contentbox').removeClass('on');
            }

            if (scrT > sec3Top - winH / 2) {
                $('#section3 .content').addClass('on');
            } else {
                $('#section3 .content').removeClass('on');
            }

        }

    });



    // ▼ 추가: 탭 비활성/활성 대응
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            // 비활성화: 롤링 정지
            if (rolling) {
                clearInterval(rolling);
                rolling = null;
            }
        } else {
            // 활성화: 중복 방지 후 재시작
            if (!rolling) {
                rolling = setInterval(rollingImg, 2000);
            }
        }
    });

    // ▼ 선택 추가: 창 포커스 기준으로도 안전하게 (원치 않으면 생략)
    window.addEventListener('blur', function () {
        if (rolling) {
            clearInterval(rolling);
            rolling = null;
        }
    });

    window.addEventListener('focus', function () {
        if (!rolling) {
            rolling = setInterval(rollingImg, 2000);
        }
    });

    $('.star').click(function (e) {
        e.stopPropagation(); // a로 이벤트 전달 방지
        e.preventDefault();
    })
    $('.star span').click(function (e) {
        e.stopPropagation(); // a로 이벤트 전달 방지
        e.preventDefault();  // # 이동 방지

        let idx = $(this).index();

        $(this).parent().find('span').removeClass('on');

        $(this).parent().find('span').each(function (i) {
            if (i <= idx) {
                $(this).addClass('on');
            }
        });
    });

    $('.fa-eye-slash').click(function () {
        $(this).siblings('input[type="password"]').attr('type', 'text');

        $('.fa-eye').show();
        $(this).hide();
    });
    $('.fa-eye').click(function () {
        $(this).siblings('input[type="text"]').attr('type', 'password');

        $('.fa-eye-slash').show();
        $(this).hide();

    });

});

$(document).ready(function () { //사용준비코드


    $(window).scroll(function () {
        let scrT = $(window).scrollTop();

        let subSec1 = $('.section1').offset().top
        let subSec2 = $('.section2').offset().top
        let subSec3 = $('.section3').offset().top
        let subSec4 = $('.section4').offset().top

        if (scrT >= subSec1 - 150) {
            $('.section1').addClass('on');
        }
        if (scrT >= subSec2 - 150) {
            $('.section2').addClass('on');
        }
        if (scrT >= subSec3 - 150) {
            $('.section3').addClass('on');
        }
        if (scrT >= subSec4 - 150) {
            $('.section4').addClass('on');
        }
    });

});


function createBackToTop() {

    // 1. Back to Top 버튼 생성
    const backToTop = document.createElement('button');

    backToTop.type = 'button';
    backToTop.className = 'back_to_top';
    backToTop.setAttribute('aria-label', '맨 위로 이동');
    backToTop.textContent = '↑';

    document.body.appendChild(backToTop);


    // 2. Header 가져오기
    const header = document.querySelector('header');


    // 3. Header가 화면에서 사라졌는지 확인
    function checkHeader() {

        if (!header) return;

        const headerBottom = header.getBoundingClientRect().bottom;

        if (headerBottom <= 0) {

            // Header가 화면 위로 완전히 사라짐
            backToTop.classList.add('show');

        } else {

            // Header가 아직 화면에 보임
            backToTop.classList.remove('show');

        }

    }


    // 4. 스크롤할 때마다 Header 위치 확인
    window.addEventListener('scroll', checkHeader);


    // 5. 페이지 처음 열었을 때도 한 번 확인
    checkHeader();


    // 6. 버튼 클릭 → 페이지 맨 위로
    backToTop.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}


createBackToTop();

const seasonTabs = document.querySelectorAll('.season_tab');
const seasonPanels = document.querySelectorAll('.season_panel');


seasonTabs.forEach(tab => {

    tab.addEventListener('click', () => {

        // 클릭한 계절값 가져오기
        const selectedSeason = tab.dataset.season;


        // 모든 탭 active 제거
        seasonTabs.forEach(item => {
            item.classList.remove('active');
        });


        // 클릭한 탭에 active 추가
        tab.classList.add('active');


        // 모든 계절 패널 확인
        seasonPanels.forEach(panel => {

            const panelSeason = panel.dataset.season;

            if (panelSeason === selectedSeason) {

                panel.classList.add('active');

            } else {

                panel.classList.remove('active');

            }

        });

    });

});


const seasonalTrack =
    document.querySelector('.seasonal_gift_track');

const seasonalButtons =
    document.querySelectorAll('.seasonal_gift_season');


seasonalButtons.forEach(button => {

    button.addEventListener('click', () => {

        const slideIndex = Number(button.dataset.slide);


        // 이미지 이동
        seasonalTrack.style.transform =
            `translateX(-${slideIndex * 100}%)`;


        // 모든 버튼 active 제거
        seasonalButtons.forEach(item => {
            item.classList.remove('active');
        });


        // 선택한 버튼 active
        button.classList.add('active');

    });

});

const faqQuestions = document.querySelectorAll('.faq_question');

faqQuestions.forEach(question => {

    question.addEventListener('click', () => {

        const faqItem = question.closest('.faq_item');

        const isActive = faqItem.classList.contains('active');


        // 모든 FAQ 닫기
        document.querySelectorAll('.faq_item').forEach(item => {
            item.classList.remove('active');
        });


        // 기존에 닫혀있던 질문이면 열기
        if (!isActive) {
            faqItem.classList.add('active');
        }

    });

});