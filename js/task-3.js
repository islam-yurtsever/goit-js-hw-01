function getElementWidth(content, padding, border) {

    const contentt = parseInt(content)
    const paddingg = parseInt(padding)
    const borderr = parseInt(border)

    let elementWidth = contentt + paddingg * 2 + borderr * 2

    return elementWidth
    

}

console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
console.log(getElementWidth("50px", "8px", "4px")); // 74


// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
