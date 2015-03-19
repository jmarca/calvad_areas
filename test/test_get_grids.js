var should=require('should')
var calvad_areas = require('../.')
describe('grid records',function(){
    it('should have all the columns',function(){

        var grid_records= calvad_areas.grid_records

        // not going to test the enumeration of the grid ids
        // but am going to test that each record has what I expect
        grid_records.should.be.an.Object;

        Object.keys(grid_records).forEach(function(cell_id){
            grid_records[cell_id].should.be.an.Object;
            var record_keys = Object.keys(grid_records[cell_id])
            record_keys.should.eql(["airbasin", "bas", "county", "airdistrict","dis"])
        })
        return null;
    })
})
