(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level1",
{ "height":15,
 "infinite":false,
 "layers":[
        {
         "data":[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 3, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
         "height":15,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "name":"Object Layer 1",
         "objects":[
                {
                 "gid":65,
                 "height":32,
                 "id":4,
                 "name":"",
                 "properties":
                    {
                     "type":"player"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":304,
                 "y":256
                }, 
                {
                 "gid":66,
                 "height":31,
                 "id":8,
                 "name":"",
                 "properties":
                    {
                     "type":"treasure"
                    },
                 "propertytypes":
                    {
                     "type":"string"
                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":17,
                 "x":565,
                 "y":113
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextobjectid":9,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.1.4",
 "tileheight":32,
 "tilesets":[
        {
         "columns":8,
         "firstgid":1,
         "image":"..\/..\/assets\/tiles.png",
         "imageheight":256,
         "imagewidth":256,
         "margin":0,
         "name":"tiles",
         "spacing":0,
         "tilecount":64,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":0,
         "firstgid":65,
         "grid":
            {
             "height":1,
             "orientation":"orthogonal",
             "width":1
            },
         "margin":0,
         "name":"objects",
         "spacing":0,
         "tilecount":2,
         "tileheight":32,
         "tileproperties":
            {
             "0":
                {
                 "class":"Player"
                },
             "1":
                {
                 "class":"Treasure"
                }
            },
         "tilepropertytypes":
            {
             "0":
                {
                 "class":"string"
                },
             "1":
                {
                 "class":"string"
                }
            },
         "tiles":
            {
             "0":
                {
                 "image":"..\/..\/assets\/player-right.png",
                 "imageheight":32,
                 "imagewidth":32
                },
             "1":
                {
                 "image":"..\/..\/assets\/90s_rupee.png",
                 "imageheight":31,
                 "imagewidth":17
                }
            },
         "tilewidth":32
        }],
 "tilewidth":32,
 "type":"map",
 "version":1,
 "width":20
});