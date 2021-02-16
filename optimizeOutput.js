/**
 * Describe what this function is doing... 2. What is wrong with that function ? 3. How would you optimize it ?
 */

const items = [
    {color: 'black', type: 'phone', age: 20},
    {color: 'red', type: 'tv', age: 18},
    {color: 'silver', type: 'tv', age: 20},
  ];
  
  const excludes = [
    {k: 'type', v: 'tv'},
    {k: 'color', v: 'silver'},
  ];

  // Given Function

//   function excludeItems(items, excludes) {
//     excludes.forEach(pair => {
//        items = items.filter(item => item[pair.k] === item[pair.v]);
//     });
//     return items;
//  }


  //Fixed Function ( O(n^2) => for each excluded element it is traversing through the whole list)

  function excludeItems(items, excludes) {
    excludes.forEach(pair => {
       items = items.filter(item => item[pair.k] !== pair.v);
    });
    return items;
 }


// Optimized Function (O(nk) reduces the number of keys with excludes object)
/**
 * 
 * Then you can check if an item should be excluded in O(k) time where k is the number of keys in an item. 
 * And the whole thing will run in O(nk) where n is the number of items. 0(nk)
 */
  
  function excludeItems(items, excludes) {
    excludesObject = {};

    excludes.forEach(item => {
        excludesObject[item.k] = item.v;
    })
  
  
    items = items.filter(item => {
      for (key in excludesObject) {
          return(item[key] !== excludesObject[key])
      }
    });
    return items;
  }
  
  console.log(excludeItems(items, excludes));