/**
 * Created by Uporabnik on 16/11/2015.
 */



var osebe = [
    {"email": "student", "geslo": "student", "id": "1"},
    {"email": "profesor", "geslo": "profesor", "id": "2"},
    {"email": "referat", "geslo": "referat", "id": "3"}
];

function vpis() {
    var uporIme = $("#uporIme").val();
    var geslo = $("#geslo").val();

    for(i in osebe) {
        if(uporIme == osebe[i]["email"] && geslo == osebe[i]["geslo"]){
            if(osebe[i]["id"] == "1") {
                location.href="views/student.html";
                return;
            }
            else if(osebe[i]["id"] == "2") {
                location.href="views/profesor.html";
                return;
            }
            else if(osebe[i]["id"] == "3") {
                location.href="views/studentski-referat.html";
                return;
            }
        }
    }
    $(".napaka-vnos").show();
}

function preveriPodatke(){
    var str = $("#telefonskaSt").val();
    var patt1 = /^[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/;
    var result = patt1.test(str);

    str = $("#postnaSt").val();
    patt1 = /^[0-9]{4}$/;
    var result1 = patt1.test(str);

    if(result == false && result1 == false) {
        $("#telefonskaSt").css("border-color", "darkred");
        $("#postnaSt").css("border-color", "darkred");
        pokazi(0);
    }
    else if(result != false && result1 == false) {
        $("#telefonskaSt").css("border-color", "#ccc");
        $("#postnaSt").css("border-color", "darkred");
        pokazi(0);
    }
    else if(result == false && result1 != false) {
        $("#telefonskaSt").css("border-color", "darkred");
        $("#postnaSt").css("border-color", "#ccc");
        pokazi(0);
    }
    else{
        $("#telefonskaSt").css("border-color", "#ccc");
        $("#postnaSt").css("border-color", "#ccc");
        pokazi(1);
    }

}

function tockeVpis() {
    var vpisna = $("#studentId").val();
    var reg = /^[0-9]{8}$/;
    var rezultat = reg.test(vpisna);
    var predmet = $("#predmet1").val();
    if(rezultat == true && predmet != "Izberite predmet..") {
        $("#vpisi").hide();
        $("#vpisTock").toggle();

        $("#studentId").css("border-color", "#ccc");
        $("#predmet1").css("border-color", "#ccc");

    }
    else {

        if(rezultat == false && predmet == "Izberite predmet..") {
            $("#studentId").css("border-color", "darkred");
            $("#predmet1").css("border-color", "darkred");
            $("#opozorilo").html('<span class="label label-danger" style="margin-top: 25px;">Vnesli ste napačno vpisno številko in niste izbrali predmeta</span>');

        }
        else if(rezultat == true && predmet == "Izberite predmet.."){
            $("#studentId").css("border-color", "#ccc");
            $("#predmet1").css("border-color", "darkred");
            $("#opozorilo").html('<span class="label label-danger" style="margin-top: 25px;">Izberite predmet</span>');

        }

        else if(rezultat == false && predmet != "Izberite predmet..") {
            $("#predmet1").css("border-color", "#ccc");
            $("#studentId").css("border-color", "darkred");
            $("#opozorilo").html('<span class="label label-danger" style="margin-top: 25px;">Vpisali ste napačno vpisno številko</span>');
        }
        else{

        }

    }

}

function dodajRazpis(){
    var predmet = $("#predmet").val();
    var datum = $("#datum-izpita").val();
    var datum1 = datum.split("-");
    datum = datum1[2]+'.'+datum1[1]+'.'+datum1[0];
    var cas = $("#cas-izpita").val();
    var pred = $("#predavalnica").val();

    if(predmet != "Izberite predmet.." && datum != "undefined.undefined." && cas.length != 0 && pred.length != 0){
        var klic = '<tr><td>'+predmet+'</td><td>'+datum+'</td><td>'+cas+'</td><td>'+pred+'</td>';
        klic = klic + '<td style="width: 5%;"><a type="button" href="../views/izpitni-rok.html" class="btn btn-xs"><span class="glyphicon glyphicon-search"></span> Pregled prijav</a></td>';
        klic = klic + '<td><button onclick="" class="btn btn-xs izpit-odjava"><span class="glyphicon glyphicon-trash"></span> Odjava</button></td></tr>'
        $("#razpisani-roki").append(klic);
        $("#predmet").css("border-color", "#ccc");
        $("#datum-izpita").css("border-color", "#ccc");
        $("#cas-izpita").css("border-color", "#ccc");
        $("#predavalnica").css("border-color", "#ccc");
        $("#opozorilo1").hide();

        $("#predmet").val("Izberite predmet..");
        $("#datum-izpita").val("");
        $("#cas-izpita").val("");
        $("#predavalnica").val("");
    }
    else{
        $("#opozorilo1").show();
        if(predmet == "Izberite predmet..") {
            $("#predmet").css("border-color", "darkred");
        }
        else{
            $("#predmet").css("border-color", "#ccc");
        }

        if(datum == "undefined.undefined."){
            $("#datum-izpita").css("border-color", "darkred");
        }
        else{
            $("#datum-izpita").css("border-color", "#ccc");
        }

        if(cas.length == 0){
            $("#cas-izpita").css("border-color", "darkred");
        }
        else{
            $("#cas-izpita").css("border-color", "#ccc");
        }

        if(pred.length == 0){
            $("#predavalnica").css("border-color", "darkred");
        }
        else{
            $("#predavalnica").css("border-color", "#ccc");
        }
    }
}

function pokazi(a) {
    if(a == 1) {
        $("#shrani").html('<span class="label label-success">Podatke ste uspešno posodobili.</span>').show();
    }
    else{
        $("#shrani").html('<span class="label label-danger">Niste vpisali pravih podatkov.</span>').show();
    }
    setTimeout(function() {
        $("#shrani").fadeOut(1500)
    }, 5000);
}

