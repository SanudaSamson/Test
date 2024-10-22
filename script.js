document.getElementById('addTextareaBtn1').addEventListener('click', createTextarea1);

function createTextarea1(){
    const textareaQ = document.createElement('textarea');
    const textareaA1 = document.createElement('textarea');
    const textareaA2 = document.createElement('textarea');
    const textareaA3 = document.createElement('textarea');
    const textareaA4 = document.createElement('textarea');
    textareaQ.setAttribute("id","layout1Q")
    textareaQ.setAttribute("placeholder","Question")
    textareaQ.setAttribute("rows","1")
    textareaA1.setAttribute("id","layout1A1")
    textareaA1.setAttribute("placeholder","Choice 1")
    textareaA1.setAttribute("rows","1")
    textareaA2.setAttribute("id","layout1A2")
    textareaA2.setAttribute("placeholder","Choice 2")
    textareaA2.setAttribute("rows","1")
    textareaA3.setAttribute("id","layout1A3")
    textareaA3.setAttribute("placeholder","Choice 3")
    textareaA3.setAttribute("rows","1")
    textareaA4.setAttribute("id","layout1A4")
    textareaA4.setAttribute("placeholder","Choice 4")
    textareaA4.setAttribute("rows","1")
    textareaQ.addEventListener('input', autoResize);
    textareaA1.addEventListener('input', autoResize);
    textareaA2.addEventListener('input', autoResize);
    textareaA3.addEventListener('input', autoResize);
    textareaA4.addEventListener('input', autoResize);
    document.getElementById('textareaContainer').appendChild(textareaQ);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(textareaA1);
    document.getElementById('textareaContainer').appendChild(textareaA2);
    document.getElementById('textareaContainer').appendChild(textareaA3);
    document.getElementById('textareaContainer').appendChild(textareaA4);
}

document.getElementById('addTextareaBtn2').addEventListener('click', createTextarea2);
function createTextarea2(){
    const textareaQ = document.createElement('textarea');
    const textareaA1 = document.createElement('textarea');
    const textareaA2 = document.createElement('textarea');
    const textareaA3 = document.createElement('textarea');
    const textareaA4 = document.createElement('textarea');
    textareaQ.setAttribute("id","layout1Q")
    textareaQ.setAttribute("placeholder","Question")
    textareaQ.setAttribute("rows","1")
    textareaA1.setAttribute("id","layout2A1")
    textareaA1.setAttribute("placeholder","Choice 1")
    textareaA1.setAttribute("rows","1")
    textareaA2.setAttribute("id","layout2A2")
    textareaA2.setAttribute("placeholder","Choice 2")
    textareaA2.setAttribute("rows","1")
    textareaA3.setAttribute("id","layout2A3")
    textareaA3.setAttribute("placeholder","Choice 3")
    textareaA3.setAttribute("rows","1")
    textareaA4.setAttribute("id","layout2A4")
    textareaA4.setAttribute("placeholder","Choice 4")
    textareaA4.setAttribute("rows","1")
    textareaQ.addEventListener('input', autoResize);
    textareaA1.addEventListener('input', autoResize);
    textareaA2.addEventListener('input', autoResize);
    textareaA3.addEventListener('input', autoResize);
    textareaA4.addEventListener('input', autoResize);
    document.getElementById('textareaContainer').appendChild(textareaQ);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(textareaA1);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(textareaA2);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(textareaA3);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(textareaA4);
}

document.getElementById('addTextareaBtn3').addEventListener('click', createTextarea3);
function createTextarea3(){
    const textareaQ = document.createElement('textarea');
    const image = document.createElement("input")
    const image2 = document.createElement("img")
    const textareaA1 = document.createElement('textarea');
    const textareaA2 = document.createElement('textarea');
    const textareaA3 = document.createElement('textarea');
    const textareaA4 = document.createElement('textarea');
    textareaQ.setAttribute("id","layout1Q")
    textareaQ.setAttribute("placeholder","Question")
    textareaQ.setAttribute("rows","1")
    image.setAttribute("type","file")
    image.setAttribute("id","QImg")
    image.setAttribute("accept","image/*")
    image2.setAttribute("id","preview")
    image2.setAttribute("src","#")
    textareaA1.setAttribute("id","layout3A1")
    textareaA1.setAttribute("placeholder","Choice 1")
    textareaA1.setAttribute("rows","1")
    textareaA2.setAttribute("id","layout3A2")
    textareaA2.setAttribute("placeholder","Choice 2")
    textareaA2.setAttribute("rows","1")
    textareaA3.setAttribute("id","layout3A3")
    textareaA3.setAttribute("placeholder","Choice 3")
    textareaA3.setAttribute("rows","1")
    textareaA4.setAttribute("id","layout3A4")
    textareaA4.setAttribute("placeholder","Choice 4")
    textareaA4.setAttribute("rows","1")
    textareaQ.addEventListener('input', autoResize);
    textareaA1.addEventListener('input', autoResize);
    textareaA2.addEventListener('input', autoResize);
    textareaA3.addEventListener('input', autoResize);
    textareaA4.addEventListener('input', autoResize);
    document.getElementById('textareaContainer').appendChild(textareaQ);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(image);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(image2);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(textareaA1);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(textareaA2);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(textareaA3);
    document.getElementById('textareaContainer').appendChild(document.createElement('br'));
    document.getElementById('textareaContainer').appendChild(textareaA4);

    /*.getElementById('QImg').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
            const preview = document.getElementById('preview');
            preview.src = URL.createObjectURL(file);
            preview.style.display = 'block';
            preview.style.width = '50%';
            preview.style.height = 'auto';
        }
    });*/
}


function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
};



document.addEventListener("keydown", event => {
    if(event.key == "Delete"){
        if(event.target.id == "addTextareaBtn1" | event.target.id == "addTextareaBtn2" | event.target.id== "addTextareaBtn3" | event.target.id == "mainContainer" | event.target.id == "textareaContainer"){
            
        }
        else{
            event.target.remove()      
        }
                   
    }
});
/*document.addEventListener("mouseover", event => {
    console.log(event);
})*/
function Export2Word(element, filename = ''){
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    const textareaInputs = document.querySelectorAll("textarea").text;
    var html = preHtml+document.getElementById("textareaContainer").innerHTML+postHtml;
    

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
function exportToWord() {
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                 "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                 "xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header + document.getElementById("textareaContainer").innerHTML + footer;

    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

function removeInput() {
    const inputs = document.getElementById('textarea');
    inputs.foreach(input => {
        const textNode = document.createTextNode(input.value);
        input.parentNode.replaceChild(textNode, input);
    });
}


