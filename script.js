
const encryptText = (plain, key) => {
    let plain_text = plain,
        key_text = key;

    let arr_key_text = [];

    if (plain_text.length > key_text.length) {
        
    }


    plain_text.split('')
        .map((text, idx) => {
            let dec_plain = text.charCodeAt(0);
                bin_plain = dec_plain.toString(2);

            console.log(text + ' = ' + dec_plain + ' = ' + bin_plain);            
        });

};

encryptText('UNISBANK', 'KEY');