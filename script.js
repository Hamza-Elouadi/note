var btn = document.getElementById("btn");

var inputEle = document.getElementById("input");

var pEle = document.getElementById("p");

btn.addEventListener('click' , function() {

    if ( inputEle.value !=="") {

        var newline = document.createElement("div");
        newline.className = "line";
        newline.classList.add('newline')
        // إضافة النص المدخل
        var span = document.createElement("span");
        span.textContent = inputEle.value;

        // إنشاء زر الحذف
        var deletebtn = document.createElement("button");
        deletebtn.textContent = "delete";
        deletebtn.classList.add('deletebtn')
        deletebtn.addEventListener('click', function() {
            pEle.removeChild(newline); // إزالة السطر عند النقر على زر الحذف
        });

        // إضافة النص وزر الحذف إلى السطر
        newline.appendChild(span); // إضافة النص إلى السطر
        newline.appendChild(deletebtn); // إضافة زر الحذف إلى السطر

        // إضافة السطر إلى العنصر p
        pEle.appendChild(newline);

        inputEle.value =""};
});

var bttnEle = document.getElementById("bttn");

var containerEle = document.getElementsByClassName("container")[0];

var colors = ["white", "black"];

var i = 0;

bttnEle.onclick = function() {
    containerEle.style.backgroundColor = colors[i];
    i++;

    if (i == 2) {
        i = 0;
    }
};
