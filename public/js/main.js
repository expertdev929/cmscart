$(function () {
    // if ($('textarea#ta').length) {     CKEDITOR.replace('ta'); }

    ClassicEditor
        .create(document.querySelector('textarea#ta'))
        .catch(error => {
            console.log(error);
        });

    $('a.confirmDeletion').on('click', function () {
        if (!confirm('Confirm deletion'))
		return false;
    });

    if ($('[data-fancybox]').length) {
        $('[data-fancybox]').fancybox();
    }
    
});
