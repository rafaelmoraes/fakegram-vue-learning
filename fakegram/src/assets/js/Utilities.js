Object.merge = function () {
  let merged = {};
  for (let index = 0; index < arguments.length; index++) {
    const object = arguments[index]
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        merged[key] = object[key];
      }
    }
  }
  return merged;
}

RegExp.sanitizeString = (string) => {
  const SpecialCharsRegExp = /[-[\]{}()*+?.,\\^$|#\s]/g;
  return string.replace(SpecialCharsRegExp, "\\$&");
}

Array.prototype.destroy = function (object) {
  if (!object || this.indexOf(object) < 0) return false;

  this.splice(this.indexOf(object), 1);
  return true;
}
