function Person(fullName, favColor){
  this.name = fullName;
  this.favoriteColor = favColor;

  this.greet = function(){
    console.log("Hello there my name is " + this.name + " my favorite color is " + this.favoriteColor);
  }
}

module.exports = Person;