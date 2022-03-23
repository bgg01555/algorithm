// https://gywlsp.github.io/algorithm/2/


//반복문
const lowerBound2 = (start, end, key) => {
    let mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (numList[mid] < key) {
        start = mid + 1;
        continue;
      }
      result2 = Math.min(result2, mid);
      end = mid - 1;
    }
  };

  const upperBound2 = (start, end, key) => {
    let mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (numList[mid] <= key) {
        start = mid + 1;
        continue;
      }
      result2 = Math.min(result2, mid);
      end = mid - 1;
    }
  };