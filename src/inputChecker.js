function InputChecker() {
}

InputChecker.prototype.checkInput = function(input) {
  valid = true;
  if (/[^0-9\d]/.test(input)) {
    valid = false;
  }
  return valid;
};

module.exports.InputChecker = InputChecker;
