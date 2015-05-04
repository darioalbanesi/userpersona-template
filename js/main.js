$(document).scroll( function () {

    // CHANGE PAGE TITLE TO USERPERSONA
    var down = 300;
    var pageTitle = $('.js-pagetitle');
    var userpersonaName = $('title').text();
    var userpersonaTitle = $('.js-pagetitle').text();
    var pageTitleName = 'page-title-name';
    if ($(window).scrollTop() > down) {
        pageTitle.text(userpersonaName);
        pageTitle.addClass(pageTitleName);
    } else if ($(window).scrollTop() < down) {
        pageTitle.text('User Personas');
        pageTitle.removeClass(pageTitleName);
    }

    // DEFINE THE VERTICAL CENTER OF THE WINDOW
    var winMiddle = $(window).height() / 2;

    // INIT PROGRESSBAR
    // Run the progressbar animation only if it reaches de center of the page.
    var technologyOffset = $('.js-technology').offset().top;
    var triggerPagerCenter = technologyOffset - winMiddle;

    if ($(window).scrollTop() > triggerPagerCenter) {
        $('.progress .progress-bar').progressbar();
    }

    // INIT CHARTS
    var personaltyOffset = $('.js-personality').offset().top;
    var triggerPagerCenter = personaltyOffset - winMiddle;
    if (!window.chartsInitialized)  {
        if ($(window).scrollTop() > triggerPagerCenter) {
            // run function from runCharts.js
            runcharts();
        }
    }
});
