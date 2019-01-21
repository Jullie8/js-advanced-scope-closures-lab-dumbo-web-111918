function produceDrivingRange(blockRange) {
    return function (startB, endB) {
        let start = parseInt(startB);
        let end = parseInt(endB);
        let distance = Math.abs(end - start)
        let diff = blockRange - distance;

        if (diff > 0) {
            return `within range by ${diff}`
        } else {
            return `${Math.abs(diff)} blocks out of range`
        }
    }
}

let eightBlockRange = produceDrivingRange(20)
eightBlockRange('10th', '40th')

function produceTipCalculator(numDecimal) {
    return function (total) {
        let totalTip = numDecimal * total;
        return totalTip;
    }
}

function createDriver() {
    let idDefault = 0;
    return class Driver {
        constructor(name) {
            this.id = idDefault += 1
            this.name = name;
        }
    }
}

let Driver = createDriver()
new Driver('Sam')
