/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    // [nxm] matrix thus inplace would be difficult wihtout condition checks and some addional space to store intermidiate values
    var res = [];
    for(var i=0; i<A.length; i++) {        
        for(var j=0; j<A[i].length; j++) {
            if(!res[j])
                res.push([]);
            if(!res[j][i])
                res[j].push([]);
            res[j][i] = A[i][j];
        }
    }
    return res;
};
