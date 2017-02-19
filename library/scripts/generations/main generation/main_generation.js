
/*
Randomizer API
for APO Craft, #mineprogramming
...You are not welcome here
*/

/*
Randomizer.initialize() - initializes java.util.Random with world's seed
Randomizer.getWorldSeed() - returns unique number for each world
Randomizer.GaussRandom(max) - returns a random number from 0 to max
Randomizer.GaussRandom(max, depth) - returns a random number from 0 to max,
    depth - how more it is possible to get a number close to zero then to max
*/
﻿var ID_ASPHALT = 253;

Block.defineBlock (ID_ASPHALT, "Асфальт", 
    [["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 1], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 2], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 3], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 4], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 5], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 6], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 7], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 8], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 9], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0],
    ["asphalt", 0], ["asphalt", 10], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0], ["asphalt", 0]], 
    1, true, 0);

var Roads = {};

Roads.generateSimpleRoad = function(x, y, z, directionZ){
    if(directionZ){
        for(var i = 0; i < 16; i++){
            setTile(x, y, z + i, ID_ASPHALT, 3);
            setTile(x + 1, y, z + i, ID_ASPHALT, 0);
            setTile(x + 2, y, z + i, ID_ASPHALT, 1);
            setTile(x + 3, y, z + i, ID_ASPHALT, 0);
            setTile(x + 4, y, z + i, ID_ASPHALT, 4);
			setTile(x + 1, y+1, z + i, 0);
            setTile(x + 2, y+1, z + i, 0);
            setTile(x + 3, y+1, z + i, 0);
            setTile(x + 4, y+1, z + i, 0);
			
        }
        if(srandom(sr(x)+""+sr(y)+""+sr(z)) < 0.25){
            setTile(x + 0, y, z, ID_ASPHALT, 9);
            setTile(x + 1, y, z, ID_ASPHALT, 9);
            setTile(x + 3, y, z, ID_ASPHALT, 10);
            setTile(x + 4, y, z, ID_ASPHALT, 10);
        }
        if(srandom(sr(x)+""+sr(y)+""+sr(z)) < 0.25){
            setTile(x + 0, y, z + 15, ID_ASPHALT, 9);
            setTile(x + 1, y, z + 15, ID_ASPHALT, 9);
            setTile(x + 3, y, z + 15, ID_ASPHALT, 10);
            setTile(x + 4, y, z + 15, ID_ASPHALT, 10);
        }
    }
    else{
        for(var i = 0; i < 16; i++){
            setTile(x + i, y, z + 0, ID_ASPHALT, 5);
            setTile(x + i, y, z + 1, ID_ASPHALT, 0);
            setTile(x + i, y, z + 2, ID_ASPHALT, 2);
            setTile(x + i, y, z + 3, ID_ASPHALT, 0);
            setTile(x + i, y, z + 4, ID_ASPHALT, 6);
			setTile(x + i, y+1, z + 1, 0);
            setTile(x + i, y+1, z + 2, 0);
            setTile(x + i, y+1, z + 3, 0);
            setTile(x + i, y+1, z + 4, 0);
        }
        if(srandom(x+""+y+""+z) < 0.25){
            setTile(x, y, z + 0, ID_ASPHALT, 8);
            setTile(x, y, z + 1, ID_ASPHALT, 8);
            setTile(x, y, z + 3, ID_ASPHALT, 7);
            setTile(x, y, z + 4, ID_ASPHALT, 7);
        }
        if(srandom(x+""+y+""+z) < 0.25){
            setTile(x + 15, y, z + 0, ID_ASPHALT, 8);
            setTile(x + 15, y, z + 1, ID_ASPHALT, 8);
            setTile(x + 15, y, z + 3, ID_ASPHALT, 7);
            setTile(x + 15, y, z + 4, ID_ASPHALT, 7);
        }
    }
};

Roads.generateSimpleCrossroad = function(x, y, z, roadLeft, roadRight, roadForward, roadBack){
    for(var i = 0; i < 5; i++)
        for(var j = 0; j < 5; j++)
		{
            setTile(x + i, y, z + j, ID_ASPHALT, 0);
			setTile(x+i,y+1,z+j,0);
		}
    
    if(!roadLeft) {
        for(var i = 0; i < 5; i++)
		{
            setTile(x + i, y, z, ID_ASPHALT, 5);
			
		}
    }
    
    if(!roadRight) {
        for(var i = 0; i < 5; i++)
		{
            setTile(x + i, y, z + 4, ID_ASPHALT, 6);
			
		}
    }
    
    if(!roadForward) {
        for(var i = 0; i < 5; i++)
		{
            setTile(x + 4, y, z + i, ID_ASPHALT, 4);
			
		}
    }
    
    if(!roadBack){
        for(var i = 0; i < 5; i++)
            setTile(x, y, z + i, ID_ASPHALT, 3);
    }
    
    if(!roadForward && !roadBack){
        for(var i = 0; i < 5; i++)
            setTile(x + 2, y, z + i, ID_ASPHALT, 1);
    }
    
    if(!roadLeft && !roadRight){
        for(var i = 0; i < 5; i++)
            setTile(x + i, y, z + 2, ID_ASPHALT, 2);
    }
};




var Randomizer = {};


Randomizer.getWorldSeed = function(){
    var worldsPath = "/storage/sdcard0/games/com.mojang/minecraftWorlds/";
    var leveldat = worldsPath+Level.getWorldDir()+"/level.dat";
    if(!java.io.File(leveldat).exists()){
        return 0;
    }
    var fin = new java.io.FileInputStream(leveldat);
    var nechs = [];
    var startSeed = 0;
    var seed = "";
    var str = "";
    var ch;
    while((ch=fin.read())!=-1){
        nechs.push(ch);
        str+=String.fromCharCode(ch);
    }
    startSeed = str.split("RandomSeed")[0].length+10;
    for(var i=3;i>=0;i--){
        if(nechs[startSeed+i]<16){
            seed+="0"+nechs[startSeed+i].toString(16)+"";
        }else{
            seed+=nechs[startSeed+i].toString(16)+"";
        }
    }
    var endSeed = parseInt(seed, 16);
    if(endSeed>(Math.pow(16,8)/2-1)){
        return endSeed-Math.pow(16,8);
    }
    return endSeed;
};

Randomizer.initialize = function(){
    this.Random = new java.util.Random(this.getWorldSeed());
};

Randomizer.GaussRandom = function(max, depth){
    if (typeof depth === 'undefined') {
        depth = 1;
    }
    var result = 0;
    for(var i = 0; i < depth; i++){
        result += this.Random.nextInt(max * 2) - max;
    }
    return Math.round(Math.abs(result / depth));
};

Randomizer.initialize();


















//APO Craft generation
//You are not welcome here 

var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function runUI(f)
{
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				f();
			}catch(e){
				print(e);
			}
		}
	}));
}

function srandom(seed)//for seedRandom
{
	var arg1=Math.abs(Math.sin(seed*3));
	var arg2=Math.abs(seed)/1.5;
	var arg3=Math.abs(seed/50);
	var final=Math.tan(arg1*arg2+arg3)*2.5;
	while(Math.abs(final)>1)
	{
		final/=2.25;
	}
	return (Math.abs(final));
}

function showSimpleDialog(title,msg)
{
	runUI(function(){
		var dialog = new android.app.AlertDialog.Builder(context);
		dialog.setTitle(title);
		var scroll = new android.widget.ScrollView(context);
		var layout = new android.widget.LinearLayout(context); 
		var TextView = new android.widget.TextView(context); 
		TextView.setText(msg); 
		TextView.setTextSize(20); 
		layout.addView(TextView); 
		scroll.addView(layout); 
		dialog.setView(scroll); 
		dialog.create().show(); 
		return dialog; 
	});
}

function error(e)
{
	showSimpleDialog("err",e);
}

function convertStreamToString(is) { 
    var bis = new java.io.BufferedInputStream(is); 
    var buf = new java.io.ByteArrayOutputStream(); 
    var res = bis.read(); 
    while(res != -1) { 
        buf.write(res); 
        res = bis.read(); 
    } 
    return buf.toString(); 
}

function setTileFromJson(name, x1, y1, z1){
	clientMessage(name);
    var str    = ModPE.openInputStreamFromTexturePack("buildings/" + name);
    var string = convertStreamToString(str);
    var json   = JSON.parse(string);
	//var thread=doInNewThread(function(){
    for(var y = 0; y < json.length; y++){
        for(var x = 0; x < json[0].length; x++){
            for(var z = 0; z < json[0][0].length; z++){

                var id   = json[y][x][z].id;
                var meta = json[y][x][z].meta;
				if(id!=0){
                setTile(x1 + x, y1 + y, z1 + z, id, meta); 
				//thread.sleep(gen_cycle_delay);
				}
            }
        }
    }
	//});
}






//Begin with API for easier coding

//Change parameters if you want
var gen_medium_height=75;//blocks
var gen_chunk_min_height=45;//blocks
var gen_chunk_max_height=80;//blocks//
var gen_landscape_height=3;//blocks//
var gen_radius=2;//chunks
var gen_cycle_delay=200;//milliseconds
var new_level_preparing_time=20*10;//ticks//
var gen_tick_interval=20*3;//ticks
var gen_building_json_count=6;
var gen_chunks=[];
var chunk_info=[];
var gen_bioms_parameters=[];

function addBiom(grass_array,stone_array,rarity)
{
	gen_bioms_parameters.push({grass:grass_array,stone:stone_array,rarity:rarity});
}

function getBiomForChunk(x,z)
{
	var chunk=Generation.getChunkPoints(x,z);
	var rarities=[];
	for(var biom=0;biom<gen_bioms_parameters.length;biom++)
	{
		rarities.push(gen_bioms_parameters[biom].rarity);
	}
	var random=100*srandom(chunk.x1+""+chunk.x2+""+chunk.z1+""+chunk.z2);
	var bioms=[];
	for(var biom=0;biom<rarities.length;biom++)
	{
		if(rarities[biom]<random)
		{
			bioms.push(biom);
		}
	}
	while(bioms.length==0)
	{
		random=100*srandom(Math.abs(chunk.x1)+""+Math.abs(chunk.x2)+""+Math.abs(chunk.z1)+""+Math.abs(chunk.z2)+""+Math.round(random));
		for(var biom=0;biom<rarities.length;biom++)
		{
			if(rarities[biom]<random)
			{
				bioms.push(biom);
			}
		}
	}
	var biom_index=Math.round(bioms.length*srandom(bioms.length+""+random));
	return gen_bioms_parameters[bioms[biom_index]];
}


addBiom([2,3,3,3,3,3,4,48],[1],30);

/*
{grass_layer_ids:[{id:2,data:0}],stone_layer_ids:[1,0,1,1,1,3,1,5],rarity:10},//default
{grass_layer_ids:[[12,0]],stone_layer_ids:[1,0,[24,0]],rarity:15},//desert
{grass_layer_ids:[[3,0]],stone_layer_ids:[1,0,1,1,1,3,1,5],rarity:2},//burned earth
{grass_layer_ids:[[2,0],[3,0],[1,0]],stone_layer_ids:[1,0,1,1,1,3,1,5,46,0],rarity:8},//war area
];*/

var Generation={};

Generation.getChunkPoints=function(x,z)//return object with chunk points coords
{
	var pointx1=x-(x%16);
	var pointz1=z-(z%16);
	var pointx2=x-(x%16)+16;
	var pointz2=z-(z%16)+16;
	return {x1:pointx1,x2:pointx2,z1:pointz1,z2:pointz2};
};

Generation.isChunkReady=function(x,z)//return boolean value
{
	var chunk=Generation.getChunkPoints(x,z);
	return getTile(chunk.x1,1,chunk.z1)==1;
};

Generation.setChunkReady=function(x,z,ready)
{
	var chunk=Generation.getChunkPoints(x,z);
	if(ready){
		setTile(chunk.x1,1,chunk.z1,1);
		setTile(chunk.x1,2,chunk.z1,7);
	}else{
		setTile(chunk.x1,1,chunk.z1,0);
	}
};

Generation.getChunkDistance=function(x,z)
{
	var chunk=Generation.getChunkPoints(x,z);
	var chunk_center={x:(chunk.x2-chunk.x1)/2,z:(chunk.z2-chunk.z1)/2};
	var player={x:Player.getX(),z:Player.getZ()};
	var dx=Math.abs(player.x-chunk_center.x);
	var dz=Math.abs(player.z-chunk_center.z);
	var distance=Math.sqrt(dx*dx+dz*dz);
	return distance;
};



Generation.getSurfaceHeight=function(x,z)
{
	for(var y=gen_chunk_min_height;y<=gen_chunk_max_height;y++)
	{
		var tile=Level.getTile(x,y,z);
		if(tile==0)
		{
			return y;
		}
	}
	return null;
};
function sr(x)
{
	return Math.round(Math.abs(x));
}
Generation.generateSimpleLandscapeAtChunk=function(x,z,biom_obj)
{
	//var thread=doInNewThread(function(){
		var chunk=Generation.getChunkPoints(x,z);
		var cx=chunk.x1;
		var cz=chunk.z1;
		clientMessage(cx+" "+cz);
		var h=gen_medium_height;
		for(var zc=0;zc<16;zc++)
		{
			for(var xc=0;xc<16;xc++)
			{
				//thread.sleep(gen_cycle_delay);
				var grass_index=Math.round((biom_obj.grass.length-1)*srandom(Math.abs(xc)+""+Math.abs(cz)+""+Math.abs(cx)+""+Math.abs(cz)+"222"));
				var id=biom_obj.grass[grass_index];
				var height=Math.round(10*srandom(Math.abs(xc)+""+Math.abs(zc)+""+Math.abs(cx)+""+Math.abs(cz)));
				if(height>9)
				{
					Level.setTile(cx+xc,h+1,cz+zc,id);
					Level.setTile(cx+xc+1,h+1,cz+zc,id);
					Level.setTile(cx+xc-1,h+1,cz+zc,id);
					Level.setTile(cx+xc,h+1,cz+zc+1,id);
					Level.setTile(cx+xc,h+1,cz+zc-1,id);
				}
				Level.setTile(cx+xc,h,cz+zc,id);
			}
		}
		Generation.setChunkReady(x,z,true);
	//});
};

Generation.generateStoneLayerAtChunk=function(x,z,biom_obj)
{
	var chunk=Generation.getChunkPoints(x,z);
	var fromX=Math.min(chunk.x1,chunk.x2);
	var fromZ=Math.min(chunk.z1,chunk.z2);
	var toX=Math.max(chunk.x1,chunk.x2);
	var toZ=Math.max(chunk.z1,chunk.z2);
};

Generation.box=function(fx,fy,fz,tx,ty,tz,id,data,r)
{
	//var thread=doInNewThread(function(){
		for(var x=Math.min(fx,tx);x<Math.max(fx,tx);x++)
		{
			for(var y=Math.min(fy,ty);y<Math.max(fy,ty);y++)
			{
				for(var z=Math.min(fz,tz);z<Math.max(fz,tz);z++)
				{
					if(srandom(sr(fx)+""+sr(fy)+""+sr(fz)+""+sr(tx)+""+sr(ty)+""+sr(tz)+""+id+""+data)*100<=r)
					{
						setTile(x,y,z,id,data);
					}
					//thread.sleep(gen_cycle_delay);
				}
			}
		}  
	//});
};

function tonnel(x,y,z)
{
	Generation.box(x-2,y-2,z-2,x+2,y+2,z+2,0,0,90);
}

function startTonnel(x,y,z)
{
	tonnel(x,y,z);
	tonnel(x-4,y,z);
	continueTonnel(x-8,y,z,50);
	tonnel(x+4,y,z);
	continueTonnel(x+8,y,z,50);
	tonnel(x,y,z-4);
	continueTonnel(x,y,z-8,50);
	tonnel(x,y,z+4);
	continueTonnel(x,y,z+8,50);
	tonnel(x,y+4,z);
	continueTonnel(x,y+8,z,50);
	tonnel(x,y-4,z);
	continueTonnel(x,y-8,z,50);
}

function continueTonnel(x,y,z,r)
{
	t(x,y,z);
	var r1=Math.random()*100;
	var r2=Math.random()*100;
	var r3=Math.random()*100;
	var r4=Math.random()*100;
	var r5=Math.random()*100;
	var r6=Math.random()*100;
	if(r1<r)
	{
		tonnel(x-4,y,z);
		continueTonnel(x-8,y,z,r1);
	}
	if(r2<r)
	{
		tonnel(x+4,y,z);
		continueTonnel(x+8,y,z,r2);
	}
	if(r3<r)
	{
		tonnel(x,y,z-4);
		continueTonnel(x,y,z-8,r3);
	}
	if(r4<r)
	{
		tonnel(x,y,z+4);
		continueTonnel(x,y,z+8,r4);
	}
	if(r5<r)
	{
		tonnel(x,y+4,z);
		continueTonnel(x,y+8,z,r5);
	}
	if(r6<r)
	{
		tonnel(x,y-4,z);
		continueTonnel(x,y-8,z,r6);
	}
}

Generation.setInfo=function(info_obj)
{
	var coords=info_obj.points;
	var index=-1;
	for(var chunk in gen_chunks)
	{
		if(gen_chunks[chunk].points==coords)
		{
			index=chunk;
			break;
		}
	}
	if(index!=-1)
	{
		gen_chunks[index]=info_obj;
	}else{
		gen_chunks.push(info_obj);
	}

};

Generation.getChunkInfo=function(x,z)
{
	var points=Generation.getChunkPoints(x,z);
	var index=-1;
	for(var chunk in gen_chunks)
	{
		if(gen_chunks[chunk].points==coords)
		{
			index=chunk;
			break;
		}
	}
	if(index!=-1)
	{
		return gen_chunks[index];
	}else{
		return null;
	}
};

function doInNewThread(whatToDo)//fuck this shit!
{
	var thread=new java.lang.Thread(
	new java.lang.Runnable({
		run:function(){
				whatToDo();
			}
		})
	);
	thread.start();
	return thread;
}
Generation.startRoad=function(x,z)
{
	var chunk=Generation.getChunkPoints(x,z);
	Generation.generateSimpleLandscapeAtChunk(x,z,gen_bioms_parameters[0]);
	Roads.generateSimpleCrossroad(chunk.x1+5,gen_medium_height,chunk.z1+5,true,true,true,true);
	Generation.setChunkReady(x,z,true);
	Roads.generateSimpleRoad(chunk.x1+10,gen_medium_height,chunk.z1+5,false);
	Roads.generateSimpleRoad(chunk.x1+5,gen_medium_height,chunk.z1+10,true);
	Roads.generateSimpleRoad(chunk.x1+5-16,gen_medium_height,chunk.z1+5,false);
	Roads.generateSimpleRoad(chunk.x1+5,gen_medium_height,chunk.z1+5-16,true);
	
};
Generation.logic=function()
{
	try{
	var px=Player.getX();
	var pz=Player.getZ();
	for(var cx=px-gen_radius*16;cx<=px+gen_radius*16;cx+=16)
	{
		for(var cz=pz-gen_radius*16;cz<=pz+gen_radius*16;cz+=16)
		{
			if(!Generation.isChunkReady(cx,cz))
			{
				
				var chunk=Generation.getChunkPoints(cx,cz);
				if(srandom(sr(chunk.x1)+""+sr(chunk.x2)+""+sr(chunk.z1)+""+sr(chunk.z2))<0.30)
				{
					Generation.startRoad(chunk.x1,chunk.z1);
				}else{
					Generation.generateSimpleLandscapeAtChunk(cx,cz,gen_bioms_parameters[0]);
					var building_number=Math.floor(srandom(Math.abs(chunk.x1)+""+Math.abs(chunk.z1))*6)+1;//*gen_building_json_count;
					setTileFromJson(building_number+".json",chunk.x1,gen_medium_height,chunk.z1);
				}
			}
		}
	}
	}catch(e){
		clientMessage(e);
	}
};
















function newLevel()
{

}

function useItem(x,y,z,i)
{
	if(i==280)
	{
	try{
		Generation.generateSimpleLandscapeAtChunk(x,z,gen_bioms_parameters[0]);
		clientMessage(x+" "+z);
		}catch(e){print(e);}
	}
}

var gen_interval=gen_tick_interval;
function modTick()
{
	gen_interval--;
	if(gen_interval==0)
	{
	Generation.logic();
	gen_interval=gen_tick_interval;
	}

}

