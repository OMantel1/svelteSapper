let goal = 19690720;

function program(a, b) {
    let arr = [1, a, b, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 13, 1, 19, 1, 5, 19, 23, 2, 10, 23, 27, 1, 27, 5, 31, 2, 9, 31, 35, 1, 35, 5, 39, 2, 6, 39, 43, 1, 43, 5, 47, 2, 47, 10, 51, 2, 51, 6, 55, 1, 5, 55, 59, 2, 10, 59, 63, 1, 63, 6, 67, 2, 67, 6, 71, 1, 71, 5, 75, 1, 13, 75, 79, 1, 6, 79, 83, 2, 83, 13, 87, 1, 87, 6, 91, 1, 10, 91, 95, 1, 95, 9, 99, 2, 99, 13, 103, 1, 103, 6, 107, 2, 107, 6, 111, 1, 111, 2, 115, 1, 115, 13, 0, 99, 2, 0, 14, 0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 99) {
            break;
        }
        if (arr[i] === 2) {
            arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]]
        }

        if (arr[i] === 1) {
            arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]]
        }
        i += 3;
    }

    if (arr[0] === goal) {
        console.log(arr);
        console.log(arr[0]);
        return true;
    } else {
        return false;
    }
}


for (a = 0; a <= 99; a++) {
    b = 0;
    if (program(a, b)) {
        console.log("true");
        console.log(a, b);
        break
    }

    if (!program(a, b)) {
        for (b = 0; b <= 99; b++) {
            if (program(a, b)) {
                console.log("true");
                console.log(a, b);
                break
            }
        }
    }
}