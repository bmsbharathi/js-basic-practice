const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertx = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
];
var inserty = [
    "the soup kitchen",
    "Disneyland",
    "the White House"

];
var insertz = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
];


randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem, yItem, zItem;
    xItem = randomValueFromArray(insertx);
    yItem = randomValueFromArray(inserty);
    zItem = randomValueFromArray(insertz);

    newStory = newStory.replace(":insertx", xItem);
    newStory = newStory.replace(":insertx", xItem);
    newStory = newStory.replace(":inserty", yItem);
    newStory = newStory.replace(":insertz", zItem);

    if (customName.value !== '') {
        let name = customName.value;
        newStory.replace("Bob", customName)

    }

    if (document.getElementById("uk").checked) {
        let weight = `${Math.round(300 * 0.0714286)} stones`;
        let temperature = Math.round((94 - 32) * 0.556) + ' centigrade';
        newStory = newStory.replace("300 pounds", weight);
        newStory = newStory.replace("94 fahrenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}