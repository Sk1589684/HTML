
function addition(a, b, callback) {
    callback(null, a + b);
}

function subtraction(a, b, callback) {
    callback(null, a - b);
}

function multiplication(a, b, callback) {

    if (b === 0) {
        callback("Error: Second parameter should not be zero for multiplication", null);
    } else {
        callback(null, a * b);
    }
}

function division(a, b, callback) {

    if (b === 0) {
        callback("Error: Cannot divide by zero", null);
    } else {
        callback(null, a / b);
    }
}

function result(a1, a2, operation) {

    operation(a1, a2, function(error, res) {

        if (error) {
            console.log(error);
        } else {
            console.log("Result:", res);
        }

    });

}

result(10, 5, addition);
result(10, 5, subtraction);
result(10, 5, multiplication);
result(10, 5, division);

result(10, 0, multiplication);
result(10, 0, division);