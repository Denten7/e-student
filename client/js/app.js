var app = angular.module('demoApp', []);




app.controller('SimpleController', function ($scope){
   $scope.prijavljeni = [
      { vpisnaSt: "63120183", ime: "Denis", priimek: "Grabljevec" },
      { vpisnaSt: "18130554", ime: "Katja", priimek: "Habuš" },
      { vpisnaSt: "63120230", ime: "Luka", priimek: "Kovačič"},
      { vpisnaSt: "63120175", ime: "Matej", priimek: "Babič" },
      { vpisnaSt: "63120165", ime: "Gregor", priimek: "Jeras" },
      { vpisnaSt: "63120205", ime: "Anže", priimek: "Kadiš" },
      { vpisnaSt: "63120218", ime: "Katarina", priimek: "Skubina" },
      { vpisnaSt: "63120196", ime: "Jure", priimek: "Stare" },
      { vpisnaSt: "63120157", ime: "Matija", priimek: "Gerbec" },
      { vpisnaSt: "63120174", ime: "Matjaž", priimek: "Golob" },
      { vpisnaSt: "63120149", ime: "Jan", priimek: "Cankar" },
      { vpisnaSt: "63120248", ime: "Jaka", priimek: "Erjavec" },
      { vpisnaSt: "63120215", ime: "Miha", priimek: "Nose" },
      { vpisnaSt: "63120189", ime: "Gal", priimek: "Papež" },
      { vpisnaSt: "63120181", ime: "Sara", priimek: "Bezjak" },
      { vpisnaSt: "63120232", ime: "Kaja", priimek: "Oblak" },
      { vpisnaSt: "63120193", ime: "Nina", priimek: "Pohlin" },
    ];
    
    $scope.stPrijav1 = $scope.prijavljeni.length;
   
   
    
});
