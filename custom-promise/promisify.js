/** Not a necessary situation in this to define a promise. doing it anyway to try it out  */
const btn = document.querySelector('button');
const name = document.querySelector('input');

btn.onclick = () => {

    verifyName(name)
        .then(message => alert(message))
        .catch(ex => {
            console.log('Error:  ' + ex);
            alert(ex);
        })
        .finally(() => {
            console.log('Finally block executed');
            alert('finally block executed');
        });

};

function verifyName(name) {

    return new Promise((resolve, reject) => {

        if (!isNaN(name.value)) {
            reject('Numbers are not allowed');
        } else if (name.value.length > 6) {
            resolve('Woah! Your name is lengthier than most common names')
        } else if (name.value[0] == 'x' || name.value[0] == 'z' || name.value[0] == 'X' || name.value[0] == 'Z') {
            resolve(`Names starting with ${name.value[0]} are not that common`);
        } else {
            resolve('Nice name! ' + name.value)
        }
    })
}