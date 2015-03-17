
with allgrids as
  (select distinct floor(grids.i_cell) || '_'|| floor(grids.j_cell) as cell,st_centroid(grids.geom4326) as centroid, grids.geom4326 as geom
   from carbgrid.state4k grids
   ),
countygrids as
  (select distinct c.cell, a.name as county, conum
   from allgrids c
   join public.carb_counties_aligned_03 a on (st_contains(a.geom4326,c.centroid))
   ),
districtgrids as
  (select distinct c.cell, a.disn as airdistrict,a.dis
   from allgrids c
   join public.carb_airdistricts_aligned_03 a on (st_contains(a.geom4326,c.centroid))
   ),
basingrids as
  (select distinct c.cell,a.basin_name as airbasin,a.ab as bas
   from allgrids c
   join public.carb_airbasins_aligned_03 a on (st_contains(a.geom_4326,c.centroid))
   ),
json1 as
   (select  cell, json_build_object('airbasin',airbasin,'bas',bas,
                             'county',county,
                             'airdistrict',airdistrict,'dis',dis
                             ) as val
from basingrids
left outer join countygrids using (cell)
left outer join districtgrids using (cell)
order by cell)
select
json_object_agg(cell,val) from json1;
