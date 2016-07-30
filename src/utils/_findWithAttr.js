export default function(array, attr1,attr2, value1,value2) {
  for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr1] === value1 && array[i][attr2] === value2) {
          return i;
      }
  }
}
