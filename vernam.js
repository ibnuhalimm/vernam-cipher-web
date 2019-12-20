/**
 * decToBin
 * Konversi bilangan desimal ke biner 1 byte
 * 
 * @param {int} number 
 * @return {String}
 */

const decToBin = (number) => {
    // deklarasi variabel bin dan konversi ke biner
    let bin = number.toString(2);

    /**
     * jika panjang biner yang dihasilkan belum 8 karakter
     * tambahkan 0 sebanyak yang dibutuhkan
    */
    while (bin.length < 8) {
        bin = '0' + bin;
    }

    return bin;
};


/**
 * convertVernam
 * Proses konversi Enkripsi / Dekripsi dengan metode Vernam Cipher
 * 
 * @param {String} source 
 * @param {String} key 
 */
const convertVernam = (source, key) => {
    /**
     * deklarasi variabel source_text {String}  : untuk menyimpan parameter source
     * deklarasi variabel key_text {String}     : untuk menyimpan parameter key
     */
    let source_text = source,
        key_text = key;

    /**
     * deklarasi parameter new_key untuk menyimpan key baru jika
     * panjang key kurang dari panjang plaintext,
     */
    let new_key = key_text,
        arr_new_key = [];

    /**
     * deklarasi variabel :
     * - operate_bin {array}    : temporary variable hasil konversi per karakter
     * - cipher_bin {array}     : menyimpan data binner hasil operasi xor
     * - cipher_text {array}    : hasil operasi xor 
     */
    let operate_bin = [],
        cipher_bin = [],
        cipher_text = '';

    /**
     * Periksa, jika panjang karakter key kurang dari panjang karakter source / plain text
     * Gandakan setiap karakternya sesuai panjang plain text
     */
    if (key_text.length < source_text.length) {
        arr_new_key = key_text.split('');

        let i = 0;
        while(new_key.length < source_text.length) {
            new_key += arr_new_key[i];

            if (arr_new_key.length - 1 == i) {
                i = 0;
                continue;
            }

            i++;
        }
    }

    /**
     * Konversi ke desimal ASCII Code dan biner nya setiap karakter pada
     * plain / source text dan key
     * 
     * dan simpan ke temporary variable
     */
    source_text.split('')
        .map((text, idx) => {
            let dec_source = text.charCodeAt(0);
                bin_source = decToBin(dec_source);
            
            let dec_key = new_key.charCodeAt(idx);
                bin_key = decToBin(dec_key);

            /**
             * Simpan hasil konversi biner ke temporary variable
             */
            operate_bin.push({
                'source': bin_source,
                'key': bin_key
            });
        });


    /**
     * Melakukan operasi XOR pada setiap karakter biner
     * antara plain / source text dengan key
     * dan simpan hasilnya ke variable
     */
    for (let i = 0; i < operate_bin.length; i++) {
        let bin_operate_source = operate_bin[i].source,
            bin_operate_key = operate_bin[i].key;

        let bin_cipher_char = '';

        bin_operate_source.split('')
                        .map((source, idx) => {
                            bin_cipher_char += (source ^ bin_operate_key[idx]);
                        });

        cipher_bin.push(bin_cipher_char);
    }


    /**
     * Konversi setiap biner hasil operasi XOR tadi ke desimal dan karakter
     * berdasarkan ASCII Code
     * 
     * Simpan setiap karakter ke satu variable sehinggan membentuk satu teks / String
     */
    cipher_bin.map((bin, idx) => {
        let cipher_dec = parseInt(bin, 2);

        cipher_text += String.fromCharCode(cipher_dec);
    });

    return cipher_text;
};