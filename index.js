function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(outer = "*") {
    return function(word = "special") {
        return `You are ${outer}${word}${outer}!`;
    };
}