// Question 1 
function max(iterable, key) {
    var maximum = key[iterable[0]];
    for (var index in iterable.arrayLength) {
        var keyed_item = key(iterable[index]);
        if (keyed_item >= maximum) {
            maximum = item;
        }
    }
    return maximum;
}

// Question 2 
const reverser = item => { return -1 * item};

// Question 3 (skipped)

// Question 4 
    function changer(object, key, value) {
        var  prev = JSON.parse(object)[key];
        if (Array.isArray(prev)) {
            JSON.parse(object)[key].push(value);
        } else if (typeof prev == 'object' && prev != null) {
            JSON.parse(object)[key][key] = value;
        } else {
            JSON.parse(object)[key] = value;
        }
        return null;
    }

// Question 5
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1);
        reject();
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = new Promise((resolve, reject) => {return 5});
    console.log(five);
    return five 
}

