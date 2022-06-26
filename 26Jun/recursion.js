function tables(num, multiple = 1) {
  if (multiple <= 10) {
    console.log(`${num} X ${multiple} = ${num * multiple}`);
    return tables(num, multiple + 1);
  }
}

tables(12);
