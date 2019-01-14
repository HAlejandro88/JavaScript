let today = new Date();
let dia = today.getDay();
let mes = today.getMonth()+1;
let año = today.getFullYear();
let verdadero = today.getUTCDay();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
var listaDias = ["domingo","lumes","martes","miercoles","jueves","vierenes","sabado"];
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log(verdadero);

console.log(dia);

console.log(meses[mes]+"-"+dia+listaDias[dia]+"-"+año);
console.log(mes+"/"+dia+"/"+año);

