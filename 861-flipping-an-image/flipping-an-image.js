/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const a=image.map(row=>row.reverse().map(p=>p^1))
    return a
};