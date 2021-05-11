function factorial(num) {
    var result;

    for (var i = 0; i <= num; i++) {
        result *= i;
    }
    console.log(result);
    return result;
}