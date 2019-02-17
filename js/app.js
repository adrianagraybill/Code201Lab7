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

  this.render = function(){ 
    // Location name
    var row = document.createElement('tr');
    var locName = document.createElement('td');
    locName.innerText = this.name;
    row.appendChild(locName);

    // Location data for each hour
    for (var col = 0; col < hours.length; col++) {
      var data = document.createElement('td');
      data.innerText = this.sum[col];
      row.appendChild(data);
    }

    // Location total
    var locTotals = document.createElement('td');
    locTotals.innerText = this.total;
    row.appendChild(locTotals);

    // Append to table
    table.appendChild(row);
  };
}

var pike = new Location('1st and Pike', 23, 65, 6.3, [], 0);
var seatac = new Location('SeaTac Airport', 3, 24, 1.2, [], 0);
var center = new Location('Seattle Center', 11, 38, 3.7, [], 0);
var hill = new Location('Capital Hill', 20, 38, 2.3, [], 0);
var alki = new Location('Alki', 2, 16, 4.6, [], 0);

var locations = [pike,seatac,center,hill,alki];

// One blank item in header row
var headerRow = document.createElement('tr');
var blank = document.createElement('th');
headerRow.appendChild(blank);

// Hour column titles
for (var i = 0; i < hours.length; i++) {
  var header = document.createElement('th');
  header.innerText = hours[i];
  headerRow.appendChild(header);
}

// Daily total label
var lastDesc = document.createElement('td');
lastDesc.innerText = 'Daily Location Total';
headerRow.appendChild(lastDesc);

// Append header row to table
table.appendChild(headerRow);

// Render row locations
for (var i = 0; i < locations.length; i++) {
  locations[i].render();
}

// Bottom row for totals
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

