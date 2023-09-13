
/* Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
1. Padaugina skaičių iš 2.
2. Padaugina skaičių iš 5.
3. Prideda prie skaičiaus 5.
4. Atima iš skaičiaus 2.
5. Pakelia skaičių kvadratu.
6. Pakelia skaičių kūbu. */




/* function daugyba(number , start = 1, end = 100, nth = 1) {
    for (let i = start; i <= end; i += nth) {
        let answer = i * number
        let output = console.log(`${i} * ${number} = ${answer}`)
    }
}
daugyba(2) */


/* function prideti(number , start = 1, end = 100, nth = 1) {
    for (let i = start; i <= end; i += nth) {
        let answer = i + number
        let output = console.log(`${i} + ${number} = ${answer}`)
    }
}
prideti(2) */




/* function atimti(number , start = 1, end = 100, nth = 1) {
    for (let i = start; i <= end; i += nth) {
        let answer = i - number
        let output = console.log(`${i} - ${number} = ${answer}`)
    }
}
atimti(2) */

/* function kvadratu(number , start = 1, end = 100, nth = 1) {
    for (let i = start; i <= end; i += nth) {
        let answer = Math.pow(i, number)
        let output = console.log(`${i} pakelta ${number} = ${answer}`)
    }
}
kvadratu(2) */

function arDalusIs(start = 1, end = 1000, nth = 1) {
    for (let i = start; i <= end; i += nth) {

        if (i % 7 === 0 && i % 5 === 0 && i % 3 === 0 && i % 9 === 0) {
            console.log("FizzBuzzBiffFuzz")
        }
        else if (i % 7 === 0 && i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzzBiff")
        }
        else if (i % 7 === 0 && i % 5 === 0) {
            console.log("BuzzBiff")
        }
        else if (i % 7 === 0 && i % 3 === 0) {
            console.log("FizzBiff")
        }
        else if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz")
        }
        else if (i % 11 === 0) {
            console.log("Bizz")
        }
        else if (i % 9 === 0) {
            console.log("fuzz")
        }
        else if (i % 3 === 0) {
            console.log("Fizz")
        }
        else if (i % 5 === 0) {
            console.log("buzz")
        }
        else if (i % 7 === 0) {
            console.log("biff")
        }
        else {
            console.log(i)
        }

    }
}
arDalusIs()



