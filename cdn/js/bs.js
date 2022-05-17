$(document).ready(_ => {
    $('.nav-link').on('click', (e) => {
        let tgt = $(e.target)
        tgt.parent().parent().find('.nav-link.active').removeClass('active');
        tgt.addClass('active');
    });
});