// Your code here
function saturdayFun(activity) {
    if (saturdayFun = activity) {
        return `This Saturday, I want to ${activity}!`
    } else {
        return `This Saturday, I want to roller-skate!`
    }
}

function mondayWork(activity) {
    if (mondayWork = activity) {
        return `This Monday, I will ${activity}.`
    } else {
        return `This Monday, I will go to the office.`
    }
}

function wrapAdjective(flair="*") {
    return function(arg="special") {
        return `You are ${flair}${arg}${flair}!`
    }
}