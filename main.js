document.getElementById("filesub").addEventListener('change', function(){
    var fr = new FileReader();
    fr.onload = function(){
        document.getElementById("fileholder").textContent = this.result;

    }
    fr.readAsText(this.files[0]);
})