import _ from 'lodash';
var activities = [
    "Purchasing equipment",
    "Paying dividends",
    "Selling products",
    "Buying inventory",
    "Hiring new employees",
    "Paying salaries",
    "Hosting a Marketing campaign",
    "Hosting a conference",
    "Purchasing supplies",
    "Interviewing job applicants",
    "Investing in stocks",
    "Attending an industry conference",
  ]
var answers = ['Yes', 'Yes', 'Yes', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'Yes', 'No']

function shuffle(arr1, arr2) {
    if (arr1.length !== arr2.length){
        throw new Error("Arrays must have the same length");
    }
    const joinedArr = _.zip(arr1, arr2);
    const shuffledArr = _.shuffle(joinedArr);
    const [shuffledArr1, shuffledArr2] = _.unzip(shuffledArr);
    return [shuffledArr1, shuffledArr2];
}

var [activities, answers] = shuffle(activities, answers);
export var activities;
export var answers; 
