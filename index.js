function shout(string) {
    return string.toUpperCase(); //'Hello!'
}
function whisper(word) {
    return word.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    var canthear= "I can't hear you!";
    var yeshear= "YES INDEED!";
    var lovehear= "I would love to!";
    if (string.toLowerCase (string)===string){
      return canthear;
    } else if (string.toUpperCase(string)===string){
        return yeshear;
    } else if (`Let's have dinner together!` === string){
       return lovehear
    }
}