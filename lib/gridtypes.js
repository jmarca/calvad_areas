// spatialvds=# select min(i_cell),min(j_cell),max(i_cell),max(j_cell) from carbgrid.state4k;
//    min    |   min    |    max    |    max
// ----------+----------+-----------+-----------
//  91.00000 | 21.00000 | 315.00000 | 278.00000

var i_min = 91
var i_max = 316
var j_min = 21
var j_max = 279

// for testing
i_min = 96
i_max = 100
j_min = 239
j_max = 246


var areatypes = {
    'grid':[]
}

for(var i = i_min; i<= i_max; i++){
    for(var j=j_min; j<=j_max; j++){
        areatypes.grid.push([i,j+'.json'].join('/'))
    }
}

exports.areatypes=areatypes
