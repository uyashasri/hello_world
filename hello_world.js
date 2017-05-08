var rows = document.getElementsByTagName('tr');

var colorArray = ['', 'blue', 'green', 'red', 'yellow', 'orange']
for (var rowKey = 1; rowKey < rows.length; rowKey++) {
    rows[rowKey].style.backgroundColor = colorArray[rowKey];
}
