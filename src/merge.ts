const Infinity = Number.POSITIVE_INFINITY;

export function merge(
    collection1: number[],
    collection2: number[],
    collection3: number[]
  ): number[] {
    const n1 = collection1.length;
    const n2 = collection2.length;
    const n3 = collection3.length;
  
    // i walks collection1 from the end (smallest) backwards
    let i = n1 - 1;
    // j, k walk collection2 and collection3 from the start (smallest) forwards
    let j = 0;
    let k = 0;
  
    const result: number[] = [];
  
    while (i >= 0 || j < n2 || k < n3) {
      const v1 = i >= 0 ? collection1[i] : Infinity;
      const v2 = j < n2 ? collection2[j] : Infinity;
      const v3 = k < n3 ? collection3[k] : Infinity;
  
      // pick the smallest among v1, v2, v3
      if (v1 <= v2 && v1 <= v3) {
        result.push(v1);
        i--;
      } else if (v2 <= v1 && v2 <= v3) {
        result.push(v2);
        j++;
      } else {
        result.push(v3);
        k++;
      }
    }
  
    return result;
  }
  