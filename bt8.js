function del(row) {
    let n= row.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(n);
}
document.write