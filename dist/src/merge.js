"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    const n1 = collection_1.length;
    const n2 = collection_2.length;
    const n3 = collection_3.length;
    // i walks collection_1 from the end (smallest) backwards
    let i = n1 - 1;
    // j, k walk collection_2 and collection_3 from the start (smallest) forwards
    let j = 0;
    let k = 0;
    const result = [];
    while (i >= 0 || j < n2 || k < n3) {
        const v1 = i >= 0 ? collection_1[i] : Number.POSITIVE_INFINITY;
        const v2 = j < n2 ? collection_2[j] : Number.POSITIVE_INFINITY;
        const v3 = k < n3 ? collection_3[k] : Number.POSITIVE_INFINITY;
        // pick the smallest among v1, v2, v3
        if (v1 <= v2 && v1 <= v3) {
            result.push(v1);
            i--;
        }
        else if (v2 <= v1 && v2 <= v3) {
            result.push(v2);
            j++;
        }
        else {
            result.push(v3);
            k++;
        }
    }
    return result;
}
