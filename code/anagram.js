function isAnagram(strFirst, strSecond) {

  if (strFirst.length != strSecond.length)
    return false;

  var tempString1 = strFirst.toLowerCase();
  var tempString2 = strSecond.toLowerCase();

  var matched = true;
  var cnt = 0;
  while (tempString1.length) {
    if (tempString2.length < 1)
      break;
    if (tempString2.indexOf(tempString1[cnt]) > -1)
      tempString2 = tempString2.replace(tempString1[cnt], '');
    else
      return false;

    cnt++;
  }
  console.log(matched)
  return matched;

}

isAnagram('Army', 'Mary');