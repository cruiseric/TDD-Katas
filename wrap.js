const wrap = (line, maxLen) => {
  let newString = []
  if (line.length <= maxLen || maxLen === undefined || maxLen === 0){
    return line

  } else {
    // newString.push(line.slice(0, maxLen));
    // newString.push('\n');
    // newString.push(line.slice(maxLen, line.length + 1));
    let lastChar = line[maxLen+1]
    for (i=0; i < line.length; i++ ){
      if (i === maxLen && i+1 !== " "){
        newString.push('\n')
        newString.push(line[i])
      } else {
        newString.push(line[i])
      }
    }

  }

  return newString.join("")
}

module.exports = wrap;
