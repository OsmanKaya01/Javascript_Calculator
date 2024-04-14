var deger = [];
var i = 0;
var j = 0;
var metin = "";
var islem = [];
var cevap = 0;
var isaret;
var hidden = [];

function bir(){
    deger.push("1");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function iki(){
    deger.push("2");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function uc(){
    deger.push("3");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function dort(){
    deger.push("4");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function bes(){
    deger.push("5");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function alti(){
    deger.push("6");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function yedi(){
    deger.push("7");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function sekiz(){
    deger.push("8");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function dokuz(){
    deger.push("9");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function sifir(){
    deger.push("0");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
}

function nokta(){
    deger.push(".");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin); 
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
}

function carp(){
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>x</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("x");
    islem.push(" x ");
    deger = [];
    if(islem[3] == " + " || islem[3] == " - " || islem[3] == " x " || islem[3] == " / " || islem[3] == " % "){
        isaret = islem[3];
        sonuc();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>x</p>";
        islem.push(isaret);
    }
}

function bolme(){
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>/</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("/");
    islem.push(" / ");
    deger = [];
    if(islem[3] == " + " || islem[3] == " - " || islem[3] == " x " || islem[3] == " / " || islem[3] == " % "){
        isaret = islem[3];
        sonuc();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>/</p>";
        islem.push(isaret);
    } 
}

function topla(){
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>+</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("+");
    islem.push(" + ");
    deger = [];
    if(islem[3] == " + " || islem[3] == " - " || islem[3] == " x " || islem[3] == " / " || islem[3] == " % "){
        isaret = islem[3];
        sonuc();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>+</p>";
        islem.push(isaret);
    }
}

function cikar(){
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>-</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("-");
    islem.push(" - ");
    deger = [];
    if(islem[3] == " + " || islem[3] == " - " || islem[3] == " x " || islem[3] == " / " || islem[3] == " % "){
        isaret = islem[3];
        sonuc();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>-</p>";
        islem.push(isaret);
    } 
}

function mod(){
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>%</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("%");
    islem.push(" % ");
    deger = [];
    if(islem[3] == " + " || islem[3] == " - " || islem[3] == " x " || islem[3] == " / " || islem[3] == " % "){
        isaret = islem[3];
        sonuc();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>%</p>";
        islem.push(isaret);
    }
}

function sil(){
    metin = metin.slice(0,-1);
    deger[0] = metin;
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+metin+"</p>";
}

function temizle(){
    islem = [];
    deger = [];
    hidden = [];
    i = 0;
    metin = "";
    document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'></p>";
}

function sonuc(){
    islem.push(Number(deger[0]));
    hidden.push("=");
    i=1;
    if(islem[i+j] == " + "){
        cevap = islem[0] + islem[i+1+j];
        temizle();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+cevap+"</p>";
        islem.push(cevap);
        j = 0;
    }
    else if(islem[i+j] == " - "){
        cevap = islem[0] - islem[i+1+j];
        temizle();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+cevap+"</p>";
        islem.push(cevap);
        j = 0;
    }
    else if(islem[i+j] == " x "){
        cevap = islem[0] * islem[i+1+j];
        temizle();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+cevap+"</p>";
        islem.push(cevap);
        j = 0;
    }
    else if(islem[i+j] == " / "){
        cevap = (islem[0] / islem[i+1+j]).toFixed(2);
        temizle();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+cevap+"</p>";
        islem.push(cevap);
        j = 0;
    }
    else if(islem[i+j] == " % "){
        cevap = islem[0] % islem[i+1+j];
        temizle();
        document.getElementById("result").innerHTML = "<p style='font-size:5vh; font-weight:600;'>"+cevap+"</p>";
        islem.push(cevap);
        j = 0;
    }
    else if(islem[2] == " + " || islem[2] == " - " || islem[2] == " x " || islem[2] == " / " || islem[2] == " % "){
        j+=1;
        return sonuc();
    }
}