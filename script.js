const container = document.getElementById("container");
const subContainer = document.getElementById("subContainer");
function Export2Word(element, filename = ''){
  if(container.innerText == ""){
    alert("Please type at least 1 MCQ to export");
  }
  else{
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+container.innerHTML+postHtml;
    

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
  }
    
}

var table = document.getElementById('fetch');
table.width = "100%";

var editTB;

function CreateTable(){
        var table = document.getElementById("fetch");
        var row = table.insertRow(table.lastIndex);
        var row1 = table.insertRow(table.lastIndex);
        var cellQ = row.insertCell(0);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        var cell4 = row1.insertCell(3);

        cellQ.colSpan = "4";
        cellQ.style.padding= "5px 0px";
        cellQ.width = "100%";
        cell1.style.padding= "2px 0px 2px 20px";
        cell2.style.padding= "2px 0px 2px 20px";
        cell3.style.padding= "2px 0px 2px 20px";
        cell4.style.padding= "2px 0px 2px 20px";
        cellQ.innerText = "Question";
        cell1.innerHTML = "1. ";
        cell2.innerHTML = "2. ";
        cell3.innerHTML = "3. ";
        cell4.innerHTML = "4. ";
        subContainer.innerHTML = "";
        subContainer.style.border = "none";
    }

function CreateTable1(){
        var table = document.getElementById("fetch");
        var row = table.insertRow(table.lastIndex);
        var row1 = table.insertRow(table.lastIndex);
        var row2 = table.insertRow(table.lastIndex);
        var row3 = table.insertRow(table.lastIndex);
        var row4 = table.insertRow(table.lastIndex);
        var cellQ = row.insertCell(0);
        var cell1 = row1.insertCell(0);
        var cell2 = row2.insertCell(0);
        var cell3 = row3.insertCell(0);
        var cell4 = row4.insertCell(0);

        cellQ.colSpan = "4";
        cellQ.style.padding= "10px 0px 2px 0px";
        cellQ.width = "100%";
        cell1.colSpan = "4";
        cell1.width = "100%";
        cell2.colSpan = "4";
        cell2.width = "100%";
        cell3.colSpan = "4";
        cell3.width = "100%";
        cell4.colSpan = "4";
        cell4.width = "100%";
        cell1.style.padding= "2px 0px 2px 20px";
        cell2.style.padding= "2px 0px 2px 20px";
        cell3.style.padding= "2px 0px 2px 20px";
        cell4.style.padding= "2px 0px 2px 20px";

        cellQ.innerText = "Question";
        cell1.innerHTML = "1. ";
        cell2.innerHTML = "2. ";
        cell3.innerHTML = "3. ";
        cell4.innerHTML = "4. ";

        subContainer.innerHTML = "";
        subContainer.style.border = "none";
    }
table.onclick = function(event) {
  let target = event.target.closest('.cancel,.ok,td');

  if (!table.contains(target)) return;

  if (target.className == 'cancel') {
    editdone(editTB.elem, false);
  } else if (target.className == 'ok') {
    editdone(editTB.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editTB) return;

    editmode(target);
  }

};

function editmode(td) {
  editTB = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td');

  let textArea = document.createElement('textarea');
   
  textArea.style.width = "85%";
  textArea.rows = "1";
  textArea.style.resize = "none";
  textArea.placeholder = "Type Here";
  textArea.className = 'edit-area';
  textArea.addEventListener('input', autoResize);
  function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
};
  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="ok">OK</button><button class="cancel">CANCEL</button></div>'
  );
}
const delBtn = document.getElementById("delBtn");


function editdone(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editTB.data;
  }
  td.classList.remove('edit-td');
  editTB = null;
}

var modal = document.getElementById("myModal");
      
      var btn = document.getElementById("myBtn");
      
      var span = document.getElementsByClassName("close")[0];
      
      btn.onclick = function() {
        modal.style.display = "block";
      }
      
      span.onclick = function() {
        modal.style.display = "none";
      }
      
      
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }








