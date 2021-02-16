const a = ['G', 'G', 'G', 'G', 'B', 'B', 'B', 'B', 'B'];

const isBadVersion = i => (a[i] === 'B');

const firstBadVersion = (n) => {
  let left = 0;
  let right = n;
 	
  while (left < right) {
        const mid = Math.floor((left+right)/2);
        console.log('mid', mid)
    
    if (isBadVersion(mid)) {
    	right = mid;
    } else {
			left = mid + 1;
    }
  }
  
  return left;
}

console.log(firstBadVersion(a.length));


