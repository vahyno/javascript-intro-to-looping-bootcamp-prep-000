function forLoop(array){
  for (var i=1; i<26; i++ ){
    if (i===0){
      array.push("I am 1 strange loop.");
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
}
