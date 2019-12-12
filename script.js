var $result_text = $('#__textResult');


$('#__btnConvert').click(function() {
    let text_source = $('#__textSource').val(),
        text_key = $('#__textKey').val();

    let result = convertVernam(text_source, text_key);

    $(this).attr('disabled', true)
            .find('span').attr('Processing');

    $result_text.val(result);

    setTimeout(() => {
        $(this).attr('disabled', false)
            .find('span').attr('Convert');
    }, 1000);
});