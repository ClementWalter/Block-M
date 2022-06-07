String.prototype.toFirstUpper = function() {
  return this.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
};