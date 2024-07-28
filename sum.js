const sum = function(a,b){
    return a+b;
}
const diff = function(a,b){
    return a-b;
}
// module.exports = sum;
// module.exports = diff;
// here diff is overriding sum, so we use js objects 

// module.exports = {
//     sum,diff
// }

// module.exports = {
//     add:sum,
//     sub:diff
// }

// or - anonymous fn
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;