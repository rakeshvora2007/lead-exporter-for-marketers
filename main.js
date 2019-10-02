// document.getElementById("filesub").addEventListener('change', function(){
//     var fr = new FileReader();
//     fr.onload = function(e){
//         document.getElementById("fileholder").textContent = this.result;

//     }
//     fr.readAsBinaryString(this.files[0]);
// })

document.getElementById("filesub").addEventListener('change', function(){
var fr = new FileReader(e);
fr.readAsArrayBuffer(e.target.Files[0]);
fr.onload = function(e){
    var data = new Uint8Array(reader.result);
    var wb = XLSX.read(data,{type:'array'});

    var htmlstr = XLSX.write(wb,{sheet:"sheet no1",type:'binary',booktype:'html'});
    document.getElementById("fileholder").[0].innerHTML +=htmlstr;

}
})