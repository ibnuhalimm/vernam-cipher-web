/**
 * Deklarasi variabel untuk menyimpan element 'hasil'
 */
var $result_text = $('#__textResult');


/**
 * Fungsi klik jQuery tombol Convert
 */
$('#__btnConvert').click(function() {
    /**
     * Deklarasi variable dan mendapatkan isi dari source / plain text dan key
     */
    let text_source = $('#__textSource').val(),
        text_key = $('#__textKey').val();

    /**
     * Deklarasi variable 'result' sebagai hasil
     * dan memanggil function operasi vernam cipher 
     */
    let result = convertVernam(text_source, text_key);

    $(this).attr('disabled', true)
            .find('span').attr('Processing');

    /**
     * Masukkan hasil operasi vernam cipher
     * ke form hasil yang sudah dideklarasikan sebelumnya
     */
    $result_text.val(result);

    setTimeout(() => {
        $(this).attr('disabled', false)
            .find('span').attr('Convert');
    }, 1000);
});



$('#__btnReset').click(function() {
    $('#__textSource').val('');
    $('#__textKey').val('');
    $('#__textResult').val('');
});


$('#__btnCopy').click(function() {
    let result = document.getElementById("__textResult");

    result.select();
    result.setSelectionRange(0, 99999);

    document.execCommand('copy');

    result.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
});