function duplicates(input) {

    const toArr = input.split('');
    let results = [];
    let duplicatesArr = [];
    let count = 0;
    let finalResult = [];

    for (let i = 0; i < toArr.length; i++) {

        // if (results.length == 0) {
        //     results.push({
        //         letter: toArr[i],
        //         times: 1
        //     })
        //     continue;
        // }
        let hasMatch = results.find(x => x.letter == toArr[i] ? x.times += 1 : null);
        console.log(i, hasMatch, results);
        
        if (!hasMatch) {
            results.push({
                letter: toArr[i],
                times: 1
            })
        }
    }

    results.forEach(el => {
        if (el.times > 1) {
            duplicatesArr.push(el);
            count++;
        }
    })

    duplicatesArr.forEach(el => {
        if (el.times == 2) {
            finalResult.push(`'${el.letter}' appears twice`)
        } else {
            finalResult.push(`'${el.letter}' appears ${el.times} times`)
        }
    })

    return `${count} # ${finalResult.join(', ')}`;
}
console.log(duplicates('abcde'));
console.log(duplicates('aabbcde'));
console.log(duplicates('indivisibility'));