$(document).ready(function () {
    const dark = ['#000','#1F150C','#412D15','#E1DCC9','#091413','#285A48','#408A71','#B0E4CC']
    const neon = ['#000','#9929EA','#FF5FCF','#FAEB92','#4A102A','#85193C','#C5172E','#FCF259']
    const light = ['#FF80C7','#FFBDA3','#FFE1BB','#FAFFC4','#659287','#88BDA4','#B1D3B9','#E6F2DD']
    const cold = ['#121358','#232F72','#2F578A','#36ADA3','#15173D','#982598','#E491C9','#F1E9E9']
    const sky = ['#5409DA','#4E71FF','#8DD8FF','#BBFBFF','#111844','#4B5694','#7288AE','#EAE0CF']
    // let blue = Math.floor(Math.random() * 255 ) * 1;
    // let red = Math.floor(Math.random() * 255 ) * 1;
    // let green = Math.floor(Math.random() * 255 ) * 1;
    // $('.pur').css({backgroundColor:`rgb(${red},${blue},${green})`});
    
    
    $('select').click(function () {
        let set = $('select').val()
        if (set == 's1') {
            $('body').css({backgroundColor: `${dark[0]}`});
            $('.pur').css({backgroundColor: `${dark[1]}`});
            $('.pur a').css({color: `${dark[3]}`});
            $('#lcenter h2').css({color: `${dark[3]}`});
            $('#color1').val(`${dark[1]}`)
            $('.pcolor').css({color: `${dark[3]}`});
            $('#color2').val(`${dark[3]}`);
            $('.hcolor').css({color: `${dark[0]}`});
            $('#color3').val(`${dark[0]}`);
            $('.mcolor').css({color: `${dark[4]}`});
            $('#color4').val(`${dark[4]}`);
            
        }else if (set == `s2` ) {
            $('body').css({backgroundColor: `${dark[4]}`});
            $('.pur').css({backgroundColor: `${dark[5]}`});
            $('.pur a').css({color: `${dark[7]}`});
            $('#lcenter h2').css({color: `${dark[7]}`});
            $('#color1').val(`${dark[5]}`)
            $('.pcolor').css({color: `${dark[5]}`});
            $('#color2').val(`${dark[5]}`);
            $('.hcolor').css({color: `${dark[4]}`});
            $('#color3').val(`${dark[4]}`);
            $('.mcolor').css({color: `${dark[0]}`});
            $('#color4').val(`${dark[0]}`);
        }else if (set == 's3' ) {
            $('body').css({backgroundColor: `${neon[0]}`});
            $('.pur').css({backgroundColor: `${neon[1]}`});
            $('.pur a').css({color: `${neon[3]}`});
            $('#lcenter h2').css({color: `${neon[3]}`});
            $('#color1').val(`${neon[1]}`)
            $('.pcolor').css({color: `${neon[3]}`});
            $('#color2').val(`${neon[3]}`);
            $('.hcolor').css({color: `${neon[4]}`});
            $('#color3').val(`${neon[4]}`);
            $('.mcolor').css({color: `${neon[0]}`});
            $('#color4').val(`${neon[0]}`);
        }else if (set == 's4' ) {
            $('body').css({backgroundColor: `${neon[4]}`});
            $('.pur').css({backgroundColor: `${neon[5]}`});
            $('.pur a').css({color: `${neon[7]}`});
            $('#lcenter h2').css({color: `${neon[7]}`});
            $('#color1').val(`${neon[5]}`)
            $('.pcolor').css({color: `${neon[5]}`});
            $('#color2').val(`${neon[5]}`);
            $('.hcolor').css({color: `${neon[0]}`});
            $('#color3').val(`${neon[0]}`);
            $('.mcolor').css({color: `${neon[4]}`});
            $('#color4').val(`${neon[4]}`);
        }else if (set == 's5' ) {
            $('body').css({backgroundColor: `${light[0]}`});
            $('.pur').css({backgroundColor: `${light[1]}`});
            $('.pur a').css({color: `${light[3]}`});
            $('#lcenter h2').css({color: `${light[3]}`});
            $('#color1').val(`${light[1]}`)
            $('.pcolor').css({color: `${light[0]}`});
            $('#color2').val(`${light[0]}`);
            $('.hcolor').css({color: `${light[0]}`});
            $('#color3').val(`${light[0]}`);
            $('.mcolor').css({color: `${light[4]}`});
            $('#color4').val(`${light[4]}`);
        }else if (set == 's6' ) {
            $('body').css({backgroundColor: `${light[4]}`});
            $('.pur').css({backgroundColor: `${light[5]}`});
            $('.pur a').css({color: `${light[7]}`});
            $('#lcenter h2').css({color: `${light[7]}`});
            $('#color1').val(`${light[5]}`)
            $('.pcolor').css({color: `${light[5]}`});
            $('#color2').val(`${light[5]}`);
            $('.hcolor').css({color: `${light[4]}`});
            $('#color3').val(`${light[4]}`);
            $('.mcolor').css({color: `${light[0]}`});
            $('#color4').val(`${light[0]}`);
        }else if (set == 's7' ) {
            $('body').css({backgroundColor: `${sky[0]}`});
            $('.pur').css({backgroundColor: `${sky[1]}`});
            $('.pur a').css({color: `${sky[3]}`});
            $('#lcenter h2').css({color: `${sky[3]}`});
            $('#color1').val(`${sky[1]}`)
            $('.pcolor').css({color: `${sky[1]}`});
            $('#color2').val(`${sky[1]}`);
            $('.hcolor').css({color: `${sky[4]}`});
            $('#color3').val(`${sky[4]}`);
            $('.mcolor').css({color: `${sky[0]}`});
            $('#color4').val(`${sky[0]}`);
        }else if (set == 's8' ) {
            $('body').css({backgroundColor: `${sky[4]}`});
            $('.pur').css({backgroundColor: `${sky[5]}`});
            $('.pur a').css({color: `${sky[7]}`});
            $('#lcenter h2').css({color: `${sky[7]}`});
            $('#color1').val(`${sky[5]}`)
            $('.pcolor').css({color: `${sky[5]}`});
            $('#color2').val(`${sky[5]}`);
            $('.hcolor').css({color: `${sky[0]}`});
            $('#color3').val(`${sky[0]}`);
            $('.mcolor').css({color: `${sky[4]}`});
            $('#color4').val(`${sky[4]}`);
        }else if (set == 's9' ) {
            $('body').css({backgroundColor: `${cold[0]}`});
            $('.pur').css({backgroundColor: `${cold[1]}`});
            $('.pur a').css({color: `${cold[3]}`});
            $('#lcenter h2').css({color: `${cold[3]}`});
            $('#color1').val(`${cold[1]}`)
            $('.pcolor').css({color: `${cold[3]}`});
            $('#color2').val(`${cold[3]}`);
            $('.hcolor').css({color: `${cold[0]}`});
            $('#color3').val(`${cold[0]}`);
            $('.mcolor').css({color: `${cold[4]}`});
            $('#color4').val(`${cold[4]}`);
        }else{
            $('body').css({backgroundColor: `${cold[4]}`});
            $('.pur').css({backgroundColor: `${cold[5]}`});
            $('.pur a').css({color: `${cold[7]}`});
            $('#lcenter h2').css({color: `${cold[7]}`});
            $('#color1').val(`${cold[5]}`)
            $('.pcolor').css({color: `${cold[5]}`});
            $('#color2').val(`${cold[5]}`);
            $('.hcolor').css({color: `${cold[4]}`});
            $('#color3').val(`${cold[4]}`);
            $('.mcolor').css({color: `${cold[0]}`});
            $('#color4').val(`${cold[0]}`);
        }
    })

    
    $('#color1').on('input',function () {
        let color1 = $(this).val()
        $('.pur').css({backgroundColor: `${color1}`});
    })
    
    $('#color2').on('input',function () {
        let color2 = $('#color2').val()
        $('.pcolor').css({color: `${color2}`});
    })
    
    $('#color3').on('input',function () {
        let color3 = $('#color3').val()
        $('.hcolor').css({color: `${color3}`});
    })
    
    $('#color4').on('input',function () {
        let color4 = $('#color4').val()
        $('.mcolor').css({color: `${color4}`});
    })
        


    
    $('li').click(function () {
        $('.a').removeClass('activ');
        $(this).addClass('activ');
    })
    
    $('.a').click(function () {
        if ($('#all').attr('class') == 'a activ') {
            $('.c').fadeIn(400);
        }if ($('#mian').attr('class') == 'a activ') {

            $('.c').fadeOut(600);

            $('.main').fadeIn(400);
        }if ($('#rtl').attr('class') == 'a activ') {

            $('.c').fadeOut(600);

            $('.rtl').fadeIn(400);
        }if ($('#dark').attr('class') == 'a activ') {

            $('.c').fadeOut(600);

            $('.dark').fadeIn(400);
        }
    })



    $('#main2').click(function(){
        $(this).addClass('main3');
    })

    $('.close').click(function(e){
        e.stopPropagation();
        $(this).parent().removeClass('main3');
    })


    function mymain3() {
        let w = $(window).width();
        if (w <= '600'){
            $('.main2').fadeOut()
        }else{
            $('.main2').fadein()
        }
        console.log(w);
        
    }
    mymain3()

    function mytop() {
        let h = $(window).height();
        if(h < '600' ){
            h = h / 2 -120;
            document.getElementById('main2').style.top = h + 'px';
            
        }else{
            h = h / 2 - 50;
            document.getElementById('main2').style.top = h + 'px';
            
        }

        if(h > '600' ){
            h = h / 2 - 70;
            document.getElementById('main1').style.top = h + 'px';
        }else{
            h = h / 2 - 120;
            document.getElementById('main1').style.top = h + 'px';
        }

    }

    mytop()

    $(window).scroll(function () { 
        if ($(this).scrollTop() < 400) {
            $('#gotop').fadeOut()
        }else{
            $('#gotop').fadeIn()
        }
    });
     
})