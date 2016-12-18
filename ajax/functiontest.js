/**
 * Created by wangyouzhan on 2016/12/16.
 */

// var autumn = 'autumnswind';
//
// var autumn_fn = function () {
//     return'autumnswind';
// };
//
//
// var automnswind = {
//
//     autumn: 'autumnswind',
//     autumn_fn: function () {
//         return'autumnswind'
//     }
// };
//
//
// console.log(automnswind.autumn);
// console.log(automnswind.autumn_fn());


// console.log('Autumns' + (function () {
//         return ' wind';
//     })());


var obj1 = {
    value: '秋风'
},

    obj2 = {
        value: 'autumnswind'
    },

    obj3 = {

        value: '莎娜'
    };
var values = [];

function add(obj) {
    values.push(obj.value);
}

add(obj1);
add(obj2);
console.log(values);

































