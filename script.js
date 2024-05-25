let deger = [],i=0,j=0,metin="",islem=[],cevap=0,isaret,hidden=[],hidden_metin="";

function bir(){
    deger.push("1");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return bir();
    }
}

function iki(){
    deger.push("2");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return iki();
    }
}

function uc(){
    deger.push("3");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return uc();
    }
}

function dort(){
    deger.push("4");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return dort();
    }
}

function bes(){
    deger.push("5");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return bes();
    }
}

function alti(){
    deger.push("6");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return alti();
    }
}

function yedi(){
    deger.push("7");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return yedi();
    }
}

function sekiz(){
    deger.push("8");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return sekiz();
    }
}

function dokuz(){
    deger.push("9");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return dokuz();
    }
}

function sifir(){
    deger.push("0");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin);
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
    if(islem[0] == Number() && islem[1] == Number()){
        islem.shift();
        return sonuc();
    }
    else if(islem.length == 1 && hidden_metin == "" && deger[0].length == 1 && hidden.length == 1){
        document.getElementById("hidden").innerHTML = "";
        deger = [];
        islem = [];
        hidden = [];
        return sifir();
    }
}

function nokta(){
    deger.push(".");
    metin = deger.toString().replace(",","");
    deger = [];
    deger.push(metin); 
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
}

function carp(){
    document.getElementById("result").innerHTML = "<p>x</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("x");
    hidden_metin = hidden.toString().replace(","," ");
    document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
    islem.push(" x ");
    deger = [];
    if(islem[3] == " x "){
        isaret = islem[3];
        sonuc();
        hidden.push(isaret);
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("result").innerHTML = "<p>x</p>";
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        islem.push(isaret);
    }
    else if(hidden[1] == ""){
        hidden.splice(1,1);
        deger = [];
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        j+=1;
    }
}

function bolme(){
    document.getElementById("result").innerHTML = "<p>/</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("/");
    hidden_metin = hidden.toString().replace(","," ");
    document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
    islem.push(" / ");
    deger = [];
    if(islem[3] == " / "){
        isaret = islem[3];
        sonuc();
        hidden.push(isaret);
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("result").innerHTML = "<p>/</p>";
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        islem.push(isaret);
    }
    else if(hidden[1] == ""){
        hidden.splice(1,1);
        deger = [];
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        j+=1;
    }
}

function topla(){
    document.getElementById("result").innerHTML = "<p>+</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("+");
    hidden_metin = hidden.toString().replace(","," ");
    document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
    islem.push(" + ");
    deger = [];
    if(islem[3] == " + "){
        isaret = islem[3];
        sonuc();
        hidden.push(isaret);
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("result").innerHTML = "<p>+</p>";
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        islem.push(isaret);
    }
    else if(hidden[1] == ""){
        hidden.splice(1,1);
        deger = [];
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        j+=1;
    }
}

function cikar(){
    document.getElementById("result").innerHTML = "<p>-</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("-");
    hidden_metin = hidden.toString().replace(","," ");
    document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
    islem.push(" - ");
    deger = [];
    if(islem[3] == " - "){
        isaret = islem[3];
        sonuc();
        hidden.push(isaret);
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("result").innerHTML = "<p>-</p>";
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        islem.push(isaret);
    }
    else if(hidden[1] == ""){
        hidden.splice(1,1);
        deger = [];
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        j+=1;
    }
}

function mod(){
    document.getElementById("result").innerHTML = "<p>%</p>";
    islem.push(Number(deger[0]));
    hidden.push(metin);
    hidden.push("%");
    hidden_metin = hidden.toString().replace(","," ");
    document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
    islem.push(" % ");
    deger = [];
    if(islem[3] == " % "){
        isaret = islem[3];
        sonuc();
        hidden.push(isaret);
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("result").innerHTML = "<p>%</p>";
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        islem.push(isaret);
    }
    else if(hidden[1] == ""){
        hidden.splice(1,1);
        deger = [];
        hidden_metin = hidden.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        j+=1;
    }
}

function sil(){
    metin = metin.slice(0,-1);
    deger[0] = metin;
    document.getElementById("result").innerHTML = "<p>"+metin+"</p>";
}

function temizle(){
    islem = [];
    deger = [];
    hidden = [];
    i = 0;
    metin = "";
    hidden_metin = "";
    document.getElementById("result").innerHTML = "<p></p>";
    document.getElementById("hidden").innerHTML = "<p></p>";
}

function sonuc(){
    islem.push(Number(deger[0]));
    hidden.push(String(deger[0]));
    hidden.push("=");
    hidden_metin = hidden.toString().replace(","," ");
    hidden_metin = hidden_metin.split(",");
    hidden_metin = hidden_metin.toString().replace(","," ");
    i=1;
    if(islem[i+j] == " + "){
        cevap = islem[0] + islem[i+1+j];
        islem = [];
        deger = [];
        i = 0;
        metin = "";
        hidden_metin = hidden_metin.split(",");
        hidden_metin = hidden_metin.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        document.getElementById("result").innerHTML = "<p>"+cevap+"</p>";
        hidden=[];
        hidden_metin="";
        islem.push(cevap);
        hidden.push(String(cevap));
        j = 0;
    }
    else if(islem[i+j] == " - "){
        cevap = islem[0] - islem[i+1+j];
        islem = [];
        deger = [];
        i = 0;
        metin = "";
        hidden_metin = hidden_metin.split(",");
        hidden_metin = hidden_metin.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        document.getElementById("result").innerHTML = "<p>"+cevap+"</p>";
        hidden=[];
        hidden_metin="";
        islem.push(cevap);
        hidden.push(String(cevap));
        j = 0;
    }
    else if(islem[i+j] == " x "){
        cevap = islem[0] * islem[i+1+j];
        islem = [];
        deger = [];
        i = 0;
        metin = "";
        hidden_metin = hidden_metin.split(",");
        hidden_metin = hidden_metin.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        document.getElementById("result").innerHTML = "<p>"+cevap+"</p>";
        hidden=[];
        hidden_metin="";
        islem.push(cevap);
        hidden.push(String(cevap));
        j = 0;
    }
    else if(islem[i+j] == " / "){
        cevap = (islem[0] / islem[i+1+j]).toFixed(2);
        islem = [];
        deger = [];
        i = 0;
        metin = "";
        hidden_metin = hidden_metin.split(",");
        hidden_metin = hidden_metin.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        document.getElementById("result").innerHTML = "<p>"+cevap+"</p>";
        hidden=[];
        hidden_metin="";
        islem.push(cevap);
        hidden.push(String(cevap));
        j = 0;
    }
    else if(islem[i+j] == " % "){
        cevap = islem[0] % islem[i+1+j];
        islem = [];
        deger = [];
        i = 0;
        metin = "";
        hidden_metin = hidden_metin.split(",");
        hidden_metin = hidden_metin.toString().replace(","," ");
        document.getElementById("hidden").innerHTML = "<p>"+hidden_metin+"</p>";
        document.getElementById("result").innerHTML = "<p>"+cevap+"</p>";
        hidden=[];
        hidden_metin="";
        islem.push(cevap);
        hidden.push(String(cevap));
        j = 0;
    }
}
