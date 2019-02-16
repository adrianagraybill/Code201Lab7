'use strict';

function SalmonCookies(name,minCust,maxCust,avgSale,sum,total) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.sum = sum;
  this.total = total;
}

for (var i = 0; i <hours.length; i++) {
  var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
  var cookiePerHr = Math.floor(answer * this.avgSale);
  var liEl = document.createElement('li');
  liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
  nameUl.appendChild(liEl);
  this.sum.push(cookiePerHr);
  SalmonCookies.total = cookiePerHr + SalmonCookies.total;

var pike = new SalmonCookies('Pike Place', 23, 65, 6.3, [], 0);



// var table = document.getElementById('shell');

// var data = [];

// var Locations = [
//   {
//   name: 'Brian',
//   age: 34,
//   profession: 'Instructor',
//   },
//   {
//   name: 'Jeff',
//   age: 23,
//   profession: 'Developer',
//   },
//   {
//   name: 'Timmy',
//   age: 71,
//   profession: 'Golfer',
//   },
// ]

// for (var i = 0; i < people.length; i++) {
//   data.push(
//   '<td>' + people[i].name + '</td>' +
//   '<td>' + people[i].age + '</td>' +
//   '<td>' + people[i].profession + '</td>'
//   )
// }
// console.log('my data array:, data');

// for (var j = 0; j < data.length; j++) {
//   var newRow = document.createElement('tr');
//   newRow.innerHTML = data[j];
//   table.appendChild(newRow);
// }


// var hours = [
//   '6am',
//   '7am',
//   '8am',
//   '9am',
//   '10am',
//   '11am',
//   '12pm',
//   '1pm',
//   '2pm',
//   '3pm',
//   '4pm',
//   '5pm',
//   '6pm',
//   '7pm',
//   '8pm',
// ];

// var pikeUl = document.getElementById('pike');

// var seatacUl = document.getElementById('seatac');

// var centerUl = document.getElementById('center');

// var hillUl = document.getElementById('hill');

// var alkiUl = document.getElementById('alki');

// var pike = {
//   name: 'Pike Place',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   sum: [],
//   total: 0,
//   render: function () {
//     for (var i = 0; i <hours.length; i++) {
//       var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
//       var cookiePerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
//       pikeUl.appendChild(liEl);
//       this.sum.push(cookiePerHr);
//       this.total = cookiePerHr + this.total;
//     }
//   }
// };

// pike.render();
// var liEl = document.createElement('li');
// liEl.textContent = `Total: ${pike.total} cookies.`;
// pikeUl.appendChild(liEl);
// console.log('pike.sum',pike.sum);
// console.log('pike.total',pike.total);

// var seatac = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   sum: [],
//   total: 0,
//   render: function () {
//     for (var i = 0; i <hours.length - 1; i++) {
//       var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
//       var cookiePerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
//       seatacUl.appendChild(liEl);
//       this.sum.push(cookiePerHr);
//       this.total = cookiePerHr + this.total;
//     }
//   },
// };

// seatac.render();
// var liEl = document.createElement('li');
// liEl.textContent = `Total: ${seatac.total} cookies.`;
// seatacUl.appendChild(liEl);
// console.log('seatac.sum',seatac.sum);
// console.log('seatac.total',seatac.total);

// var center = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   sum: [],
//   total: 0,
//   render: function () {
//     for (var i = 0; i <hours.length; i++) {
//       var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
//       var cookiePerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
//       centerUl.appendChild(liEl);
//       this.sum.push(cookiePerHr);
//       this.total = cookiePerHr + this.total;
//     }
//   }
// };

// center.render();
// var liEl = document.createElement('li');
// liEl.textContent = `Total: ${center.total} cookies.`;
// centerUl.appendChild(liEl);
// console.log('center.sum',center.sum);
// console.log('center.total',center.total);

// var hill = {
//   name: 'Capital Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   sum: [],
//   total: 0,
//   render: function () {
//     for (var i = 0; i <hours.length; i++) {
//       var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
//       var cookiePerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
//       hillUl.appendChild(liEl);
//       this.sum.push(cookiePerHr);
//       this.total = cookiePerHr + this.total;
//     }
//   }
// };

// hill.render();
// var liEl = document.createElement('li');
// liEl.textContent = `Total: ${hill.total} cookies.`;
// hillUl.appendChild(liEl);
// console.log('hill.sum',hill.sum);
// console.log('hill.total',hill.total);

// var alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   sum: [],
//   total: 0,
//   render: function () {
//     for (var i = 0; i <hours.length; i++) {
//       var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
//       var cookiePerHr = Math.floor(answer * this.avgSale);
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
//       alkiUl.appendChild(liEl);
//       this.sum.push(cookiePerHr);
//       this.total = cookiePerHr + this.total;
//     }
//   }
// };

// alki.render();
// var liEl = document.createElement('li');
// liEl.textContent = `Total: ${alki.total} cookies.`;
// alkiUl.appendChild(liEl);
// console.log('alki.sum',alki.sum);
// console.log('alki.total',alki.total);
