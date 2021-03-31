

// / YOUR CODE HERE!


var tableData = data;

//table references
var tbody = d3.select("tbody");


  // Build the table
function buildTable(data) {
  // Clean out everything
  tbody.html("");

  // Loops
    
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    // Table Cell Loop
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

  // Click function
function handleClick() {

  // Date and Time
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Filter
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
}

// Filter with button press
d3.selectAll("#filter-btn").on("click", handleClick);

// Build Table
buildTable(tableData);