var words = "1,2,3,4".split(",");
var sum = 0;
// words.forEach(w => sum += parseInt(w));
words.forEach(function (w) { return sum += w; });
console.log("sum : " + sum);
