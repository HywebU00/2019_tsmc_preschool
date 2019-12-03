// 自行加入的JS請寫在這裡
$(function() {
    $('#modal1').hide();
    $('.modal').after('<div class="modal_overlay"></div>');
    $('.modal').prepend('<button type="button" class="close">關閉</button>')
    $('.modal_overlay').hide();
    $('.openModal').click(function(e) {
        $('#modal1').show();
        $('.modal_overlay').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });

    function closeModal() {
        $('#modal1').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);
});