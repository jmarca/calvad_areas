\t on

\o counties_grids.json

with allgrids as
  (select distinct floor(grids.i_cell) || '_'|| floor(grids.j_cell) as cell,st_centroid(grids.geom4326) as centroid, grids.geom4326 as geom
   from carbgrid.state4k grids
   ),
countygrids as
  (select distinct c.cell, a.name as county, conum
   from allgrids c
   join public.carb_counties_aligned_03 a on (st_contains(a.geom4326,c.centroid))
   ),
jsonCounty (area,val) as
    (select  county, json_agg (cell) from countygrids where county is not null group by county order by county)
select json_object_agg (area,val) from jsonCounty;



\o airdistricts_grids.json

with allgrids as
  (select distinct floor(grids.i_cell) || '_'|| floor(grids.j_cell) as cell,st_centroid(grids.geom4326) as centroid, grids.geom4326 as geom
   from carbgrid.state4k grids
   ),
districtgrids as
  (select distinct c.cell, a.disn as airdistrict,a.dis
   from allgrids c
   join public.carb_airdistricts_aligned_03 a on (st_contains(a.geom4326,c.centroid))
   ),
jsonDistrict (area,val) as
    (select  airdistrict, json_agg (cell) from districtgrids where airdistrict is not null group by airdistrict order by airdistrict)
select json_object_agg (area,val) from jsonDistrict;


\o airbasins_grids.json

with allgrids as
  (select distinct floor(grids.i_cell) || '_'|| floor(grids.j_cell) as cell,st_centroid(grids.geom4326) as centroid, grids.geom4326 as geom
   from carbgrid.state4k grids
   ),
basingrids as
  (select distinct c.cell,a.basin_name as airbasin,a.ab as bas
   from allgrids c
   join public.carb_airbasins_aligned_03 a on (st_contains(a.geom_4326,c.centroid))
   ),
jsonBasin (area,val) as
    (select  airbasin, json_agg (cell) from basingrids where airbasin is not null group by airbasin order by airbasin)
select json_object_agg (area,val) from jsonBasin;
