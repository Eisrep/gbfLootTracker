function init(){
	let raid = document.getElementById('raid').value;
	document.getElementById('imgWep1').src = "public/images/"+raid+"/wep1.jpg";
	document.getElementById('imgWep2').src = "public/images/"+raid+"/wep2.jpg";
	document.getElementById('imgWep3').src = "public/images/"+raid+"/wep3.jpg";
	document.getElementById('imgAnima').src = "public/images/"+raid+"/anima.jpg";
	document.getElementById('imgOmega').src = "public/images/"+raid+"/omega.jpg";
	document.getElementById('imgQuartz').src = "public/images/"+raid+"/quartz.jpg";
	document.getElementById('imgBerry').src = "public/images/general/berry.jpg";
	document.getElementById('imgBalm').src = "public/images/general/balm.jpg";
	document.getElementById('imgTrueAnima').src = "public/images/"+raid+"/true.jpg";
	document.getElementById('imgMerit').src = "public/images/general/merit.jpg";
	document.getElementById('imgMunition').src = "public/images/general/munition.jpg";
	initData(raid);
}

function initData(raid){
    document.getElementById('None').innerHTML = data[raid].None;
    document.getElementById('Wep1').innerHTML = data[raid].Wep1;
    document.getElementById('Wep2').innerHTML = data[raid].Wep2;
    document.getElementById('Wep3').innerHTML = data[raid].Wep3;
    document.getElementById('Anima').innerHTML = data[raid].Anima;
    document.getElementById('Omega').innerHTML = data[raid].Omega;
    document.getElementById('Quartz').innerHTML = data[raid].Quartz;
    document.getElementById('Berry').innerHTML = data[raid].Berry;
    document.getElementById('Balm').innerHTML = data[raid].Balm;
    document.getElementById('TrueAnima').innerHTML = data[raid].TrueAnima;
    document.getElementById('Merit').innerHTML = data[raid].Merit;
    document.getElementById('Munition').innerHTML = data[raid].Munition;
    document.getElementById('Total').innerHTML = data[raid].Total;
}

function save(){
    let temp = 'var data={grimnir:'+JSON.stringify(data.grimnir)+',shiva:'+JSON.stringify(data.shiva)+',europa:'+JSON.stringify(data.europa)+',alexiel:'+JSON.stringify(data.alexiel)+',metatron:'+JSON.stringify(data.metatron)+',avatar:'+JSON.stringify(data.avatar)+'}';
    fs.writeFileSync('master_data.js',temp,function(err){
        if (err){
            console.log(err);
        }
    });
}

function reset(){
    let raid = document.getElementById('raid').value;
    data[raid].None = 0;
    data[raid].Wep1 = 0;
    data[raid].Wep2 = 0;
    data[raid].Wep3 = 0;
    data[raid].Anima = 0;
    data[raid].Omega = 0;
    data[raid].Quartz = 0;
    data[raid].Berry = 0;
    data[raid].Balm = 0;
    data[raid].TrueAnima = 0;
    data[raid].Merit = 0;
    data[raid].Munition = 0;
    data[raid].Total = 0;

    document.getElementById('None').innerHTML = data[raid].None;
    document.getElementById('Wep1').innerHTML = data[raid].Wep1;
    document.getElementById('Wep2').innerHTML = data[raid].Wep2;
    document.getElementById('Wep3').innerHTML = data[raid].Wep3;
    document.getElementById('Anima').innerHTML = data[raid].Anima;
    document.getElementById('Omega').innerHTML = data[raid].Omega;
    document.getElementById('Quartz').innerHTML = data[raid].Quartz;
    document.getElementById('Berry').innerHTML = data[raid].Berry;
    document.getElementById('Balm').innerHTML = data[raid].Balm;
    document.getElementById('TrueAnima').innerHTML = data[raid].TrueAnima;
    document.getElementById('Merit').innerHTML = data[raid].Merit;
    document.getElementById('Munition').innerHTML = data[raid].Munition;
    document.getElementById('Total').innerHTML = data[raid].Total;
}

function clickHandle(id){
    let raid = document.getElementById('raid').value;
    data[raid][id] += 1;
    data[raid].Total += 1;
    document.getElementById(id).innerHTML = data[raid][id];
    document.getElementById('Total').innerHTML = data[raid].Total;
}