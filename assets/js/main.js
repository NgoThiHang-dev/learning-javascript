// CallBack
// - Là hàm
// - truyền qua đối số
// - được gọi lại trong hàm nhận đối số

// function myFunction(param) {
//     param('Hoc lap trinh');
// }

// function myCallBack(value) {
//     console.log('Value: ', value);
// }

// myFunction(myCallBack);

// var course = [
//     'javascript',
//     'php',
//     'ruby'
// ];

// console.log("---map---");
// course.map(function (cs) {
//     console.log(cs);
// })

// console.log("---forearch---");
// course.forEach(function (item) {
//     console.log(item);
// })

// console.log("---reduce---");
// let join = course.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(join);

// console.log("---find---");
// console.log("---filter---");


// Array.prototype.filter2 = function (callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }


// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 480,
//         isFinish: true
//     },
//     {
//         name: 'C++',
//         coin: 860,
//         isFinish: false
//     },
//     {
//         name: 'C#',
//         coin: 960,
//         isFinish: false
//     }
// ];

// var filterCourses = courses.filter2(function (course, index, array) {
//     return course.coin > 700;
// })

// console.log(filterCourses);


// var someCourses = courses.some(function (course, index, array) {
//     return course.isFinish;
// })

// console.log(someCourses);

//de quy
// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log([...(new Set(array))]);

// function deQuy() {
//     deQuy();
// }


