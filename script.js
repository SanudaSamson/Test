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


