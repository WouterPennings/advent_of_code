let input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`

let x = input.split("\n");

let result = "var input = ["
for (let index = 0; index < x[0].length; index++) {
    let temp = []
    x.forEach(element => {
        temp.push(element[index])
    });
    result += `[${temp}], `
}

// Still needs some manual editing, too lazy to make it work perfectly\
console.log(result += "]");