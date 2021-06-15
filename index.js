
const chooseBestDistance = (t, k, ls) => {
  let   distance, bestDistance = 0, ind_s = []
  if (k <= ls.length) {
    for (let i = 0; i < k; i++) {
      ind_s.push(i)
    }
    let j = k - 1 
    while (j >= 0) {
      distance = 0
      for (let i = 0; i < k; i++) {
        distance += ls[ind_s[i]] 
      }
      if (distance > bestDistance && distance <= t) bestDistance = distance
      ind_s[k - 1] === ls.length - 1 ? j-- : j = k - 1
      if( k === ls.length) break
      if (j >= 0) {
        for (let i = k - 1; i >= j; i--) {
          ind_s[i] = ind_s[j] + i - j + 1 
        }
      }
    }
  } 
  if (bestDistance) return bestDistance 
  return null
} 
document.write(chooseBestDistance(174, 3, [51, 56, 58, 59, 61]))


