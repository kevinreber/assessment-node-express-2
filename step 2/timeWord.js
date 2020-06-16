/** Will convert a string of 24h military time to words.
 * 
 * String input will always have a two-digit hour 00-23, and a two-digit minute 00-59. 
 * Hours 0-11 are am, and hours 12-23 are pm.
 * 
 * Examples:
    Input	  Expected Output
    00:00	  midnight
    00:12	  twelve twelve am
    01:00	  one o’clock am
    06:01	  six oh one am
    06:10	  six ten am
    06:18	  six eighteen am
    06:30	  six thirty am
    10:34	  ten thirty four am
    12:00	  noon
    12:09	  twelve oh nine pm
    23:23	  eleven twenty three pm
*/
// const numbers = {
//     "0": "oh",
//     "1": "one",
//     "2": "two",
//     "3": "three",
//     "4": "four",
//     "5": "five",
//     "6": "six",
//     "7": "seven",
//     "8": "eight",
//     "9": "nine"
// };

const a = [
    "oh",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

const b = [
    "", "",
    "twenty",
    "thirty",
    "fourty",
    "fifty"
]

function timeWord(time) {
    // check first if time is midnight and noon
    if (time === "00:00") {
        return "midnight";
    }
    if (time === "12:00") {
        return "noon";
    }

    let str = '';
    const nums = time.split(":");

    const hours = handleHours(nums[0]);
    const mins = handleMinutes(nums[1]);

    str += `${hours} ${mins}`;
    str += (+nums[0] < 12) ? " am" : " pm";
    return str;
}

/** Handle hours */
function handleHours(hours) {
    // Handle midnight hours
    if (hours === "00") {
        return a[12];
    }
    return +hours <= 12 ? a[+hours] : a[+hours - 12];
}

/** Handle Minutes */
function handleMinutes(minutes) {
    // if minutes are zero
    if (minutes === "00") {
        return "o'clock";
    }

    // if minutes are less than 20
    if (+minutes < 20) {
        // add 'oh' to string if minutes less than 10
        if (+minutes < 10) {
            return `oh ${a[+minutes]}`;
        }
        return a[+minutes];
    }

    // if minutes are more than 20
    const mins = minutes.split("");
    const tenths = +mins[0];
    const ones = +mins[1];

    // if minutes 'ones' === 0, only need 'tenths'
    return ones === 0 ? `${b[tenths]}` : `${b[tenths]} ${a[ones]}`;
}

/** Export modules */
module.exports = timeWord;