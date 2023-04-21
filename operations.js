function mode(arr) {
    let counter = arr.reduce(function (acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
    let count = 0;
    let mostFrequent;

    for (let key in counter) {
        if (counter[key] > count) {
            mostFrequent = key;
            count = counter[key];
        }
    }

    return mostFrequent;
}

function median(arr) {
    arr.sort((a, b) => (a - b));
    let middleIndex = Math.floor(arr.length / 2);
    let median;

    if (arr.length % 2 === 0) {
        median = (arr[middleIndex] + arr[middleIndex - 1]) / 2;
    } else {
        median = arr[middleIndex];
    }
    return median
}

function mean(arr) {
    let sum;
    let mean;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function parse(arr) {
    let parsed = []
    for (let i = 0; i < arr.length; i++) {
        parsed.push(Number(arr[i]));
    }
}

module.exports = {
    mean, median, mode, parse
}