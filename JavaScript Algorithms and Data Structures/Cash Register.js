function checkCashRegister(price, cash, cid) {
    const PAR = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    let result = {
        status: "",
        change: []
    };
    let change = (cash * 100 - price * 100) / 100;
    let balance = cid.reduce((acc, curr) => acc + curr[1] * 100, 0) / 100;
    if (balance === change) {
        result.status = 'CLOSED';
        result.change = [...cid];
    } else if(balance < change) {
        result.status = 'INSUFFICIENT_FUNDS';
    } else {
        for (let i = 8; i >= 0 && change > 0; i--) {
            if (cid[i][1] > 0 && PAR[cid[i][0]] <= change) {
                if (change >= cid[i][1]) {
                    change = (change * 100 - cid[i][1] * 100) / 100;
                    result.change.push(cid[i]);
                } else {
                    let count = Math.trunc(change / PAR[cid[i][0]]);
                    change = ((change * 1000) - ((PAR[cid[i][0]] * 1000) * count)) / 1000;
                    result.change.push([cid[i][0],PAR[cid[i][0]] * count]);
                }
            }
        }
        //console.log(change);
        if(change > 0) {
            result.status = 'INSUFFICIENT_FUNDS';
            result.change = [];
        } else {
            result.status = 'OPEN';
        }

    }
    return result;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));