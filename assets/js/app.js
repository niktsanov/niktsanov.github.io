$(() => {
    $('.js-menu-trigger, .js-nav-quit').click(() => {
        $('.js-nav-target').toggleClass('expanded');
    });
})