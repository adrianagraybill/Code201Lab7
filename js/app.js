'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

var table = document.getElementById('shell');

function Location(name, minCust, maxCust, avgSale, sum, total) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.sum = sum;
  this.total = total;

  for (var i = 0; i < hours.length; i++) {
    var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
    var cookiePerHr = Math.floor(answer * this.avgSale);
    this.sum.push(cookiePerHr);
    this.total = cookiePerHr + this.total;
  }
}

var pike = new Location('1st and Pike', 23, 65, 6.3, [], 0);
var seatac = new Location('SeaTac Airport', 3, 24, 1.2, [], 0);
var center = new Location('Seattle Center', 11, 38, 3.7, [], 0);
var hill = new Location('Capital Hill', 20, 38, 2.3, [], 0);
var alki = new Location('Alki', 2, 16, 4.6, [], 0);

var headerRow = document.createElement('tr');
var blank = document.createElement('th');
headerRow.appendChild(blank);

for (var i = 0; i < hours.length; i++) {
  var header = document.createElement('th');
  header.innerText = hours[i];
  headerRow.appendChild(header);
}

table.appendChild(headerRow);

var locations = [pike,seatac,center,hill,alki];

for (var i = 0; i < locations.length; i++) {
  var row = document.createElement('tr');
  var locName = document.createElement('td');
  locName.innerText = locations[i].name;
  row.appendChild(locName);

  for (var col = 0; col < hours.length; col++) {
    var data = document.createElement('td');
    data.innerText = locations[i].sum[col];
    row.appendChild(data);
  }
  table.appendChild(row);
}

var footerRow = document.createElement('tr');
var totals = document.createElement('td');
totals.innerText ='Totals';
footerRow.appendChild(totals);

for (var r = 0; r < hours.length; r++) {
  var footer = document.createElement('td');
  var hourlyTotal = 0;
  for(var lastRow = 0; lastRow < locations.length; lastRow++) {
    hourlyTotal = hourlyTotal + locations[lastRow].sum[r];
  }
  footer.innerText = hourlyTotal;
  footerRow.appendChild(footer);
}

table.appendChild(footerRow);

