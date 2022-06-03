export const main_logic = (row) => {

    let messages = [];

    if(age_function(row) !== '')
        messages.push(age_function(row));

    if(messages.length !== 0){
        return {
            open: true,
            messages: messages
        }
    }else{
        return {
            open: false,
            messages: []
        }
    }
    
}

const age_function = (row) => {
    let born_year = row.your_date_of_birth.split('.')[2];
    let age = row.age_of_full_life
    if(Math.abs(new Date().getUTCFullYear()-born_year - age) <= 1){
        return '';
    } else {
        return 'Yosh va tug\'ilgan sanalarda mutanosiblik yo\'qoldi!!!'
    }
}