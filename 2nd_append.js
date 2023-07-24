let table = ''

for (let height = 1; height <= 8; height++) {
    
    for (let width = 1; width <= 8; width++) {
        
        if ( (height + width) % 2 === 0 ) {
            table += ' '
        } else {
            table += '#'
        }
    }
    table += '\n'
}

console.log(table)