var areatypes = {
    'counties':[
  '06001.json' //Alameda
 ,'06003.json' //Alpine
 ,'06005.json' //Amador
 ,'06007.json' //Butte
 ,'06009.json' //Calaveras
 ,'06011.json' //Colusa
 ,'06013.json' //Contra Costa
 ,'06015.json' //Del Norte
 ,'06017.json' //El Dorado
  ,
        '06019.json' //Fresno
 ,'06021.json' //Glenn
 ,'06023.json' //Humboldt
 ,'06025.json' //Imperial
 ,'06027.json' //Inyo
 ,'06029.json' //Kern
 ,'06031.json' //Kings
 ,'06033.json' //Lake
 ,'06035.json' //Lassen
      ,'06037.json' //Los Angeles
 ,
       '06039.json' //Madera
 ,'06041.json' //Marin
 ,'06043.json' //Mariposa
 ,'06045.json' //Mendocino
 ,'06047.json' //Merced
 ,'06049.json' //Modoc
 ,'06051.json' //Mono
 ,'06053.json' //Monterey
 ,'06055.json' //Napa
 ,'06057.json' //Nevada
 ,'06059.json' //Orange
 ,'06061.json' //Placer
 ,'06063.json' //Plumas
 ,'06065.json' //Riverside
 ,'06067.json' //Sacramento
 ,'06069.json' //San Benito
 ,'06071.json' //San Bernardino
 ,'06073.json' //San Diego
 ,'06075.json' //San Francisco
 ,'06077.json' //San Joaquin
 ,'06079.json' //San Luis Obispo
 ,'06081.json' //San Mateo
 ,'06083.json' //Santa Barbara
 ,'06085.json' //Santa Clara
 ,'06087.json' //Santa Cruz
 ,'06089.json' //Shasta
 ,'06091.json' //Sierra
 ,'06093.json' //Siskiyou
 ,'06095.json' //Solano
 ,'06097.json' //Sonoma
 ,'06099.json' //Stanislaus
 ,'06101.json' //Sutter
 ,'06103.json' //Tehama
 ,'06105.json' //Trinity
 ,'06107.json' //Tulare
 ,'06109.json' //Tuolumne
 ,'06111.json' //Ventura
 ,'06113.json' //Yolo
 ,'06115.json' //Yuba
]
   ,
    'airdistricts':[
        'AMA.json'
        ,'BA.json'
        ,'CAL.json'
        ,'ED.json'
        ,'GBU.json'
        ,'IMP.json'
        ,'LAK.json'
        ,'MBU.json'
        ,'MOD.json'
        ,'MPA.json'
        ,'NSI.json'
        ,'PLA.json'
        ,'SB.json'
        ,'SD.json'
        ,'SIS.json'
        ,'SLO.json'
        ,'TUO.json'
        ,'YS.json'
        ,'AV.json'
        ,'BUT.json'
        ,'COL.json'
        ,'FR.json'
        ,'GLE.json'
        ,'KER.json'
        ,'LAS.json'
        ,'MEN.json'
        ,'MOJ.json'
        ,'NCU.json'
        ,'NS.json'
        ,'SAC.json'
        ,'SC.json'
        ,'SHA.json'
        ,'SJU.json'
        ,'TEH.json'
        ,'VEN.json'
    ]
    ,
    'airbasins':[
        'GBV.json'
        ,'LT.json'
        ,'MC.json'
        ,'MD.json'
        ,'NCC.json'
        ,'NC.json'
        ,'NEP.json'
        ,'SCC.json'
       ,
   'SC.json'
        ,'SD.json'
       ,'SF.json'
        ,'SJV.json'
        ,'SS.json'
        ,'SV.json'
        ,'LC.json'
    ]
};

var grid_areas = require('./gridtypes')
areatypes.grid = grid_areas.grid
areatypes.grid_records=require('./cellmembership.json')
module.exports=areatypes
