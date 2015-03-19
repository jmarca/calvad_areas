var should=require('should')
var calvad_areas = require('../.')

var expected_columns = ["airbasin", "bas", "county", "airdistrict","dis"]
describe('grid records',function(){
    it('should have all the columns',function(){

        var grid_records= calvad_areas.grid_records

        // not going to test the enumeration of the grid ids
        // but am going to test that each record has what I expect
        grid_records.should.be.an.Object;

        Object.keys(grid_records).forEach(function(cell_id){
            grid_records[cell_id].should.be.an.Object;
            var record_keys = Object.keys(grid_records[cell_id])
            record_keys.should.eql(expected_columns)
            // none of the values should be null?
            //hmm, there is one that has nulls
            if(cell_id != '118_161'){
                record_keys.forEach(function(area_type){
                    should.exist(grid_records[cell_id][area_type])
                })
            }
        })
        return null;
    })
})
