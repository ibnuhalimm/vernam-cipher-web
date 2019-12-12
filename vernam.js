const decToBin = (number) => {
    let bin = number.toString(2);

    while (bin.length < 8) {
        bin = '0' + bin;
    }

    return bin;
};


const convertVernam = (source, key) => {
    let source_text = source,
        key_text = key;

    let new_key = key_text;
    let operate_bin = [],
        cipher_bin = [],
        cipher_text = '';


    if (source_text.length > key_text.length) {
        new_key = key_text.repeat(Math.ceil(source_text.length / key_text.length));
    }


    source_text.split('')
        .map((text, idx) => {
            let dec_source = text.charCodeAt(0);
                // bin_source = dec_source.toString(2);
                bin_source = decToBin(dec_source);
            
            let dec_key = new_key.charCodeAt(idx);
                bin_key = decToBin(dec_key);

            // console.log(text + ' = ' + dec_source + ' = ' + bin_source);    
            // console.log(new_key + ' = ' + dec_key + ' = ' + bin_key);

            operate_bin.push({
                'source': bin_source,
                'key': bin_key
            });
        });


    for (let i = 0; i < operate_bin.length; i++) {
        let bin_operate_source = operate_bin[i].source,
            bin_operate_key = operate_bin[i].key;

        // console.log(bin_operate_key);

        let bin_cipher_char = '';

        bin_operate_source.split('')
                        .map((source, idx) => {
                            bin_cipher_char += (source ^ bin_operate_key[idx]);
                        });

        cipher_bin.push(bin_cipher_char);
        // console.log(bin_cipher_char);
    }


    cipher_bin.map((bin, idx) => {
        let cipher_dec = parseInt(bin, 2);

        cipher_text += String.fromCharCode(cipher_dec);
        // cipher_text += cipher_dec;
    });

    // console.log(cipher_bin);
    // console.log(cipher_text);

    return cipher_text;
};


// console.log(convertVernam('UNISBANK', '5M9'));

// console.log(convertVernam('*0#“;*;)', 'kunci'));