function oddNumPattern(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

oddNumPattern(30);