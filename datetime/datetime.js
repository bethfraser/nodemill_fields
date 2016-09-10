
exports.afterPost = function(value, options, callback) {
  var dateString = value.date + " " + value.time;
  callback(null, dateString);
}