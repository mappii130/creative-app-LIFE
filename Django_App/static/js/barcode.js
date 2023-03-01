
const img = document.createElement("img");
const label = document.createElement("label");

const fileInput = document.getElementById("id_barcode_image");
const imageArea = document.getElementById("image-area");

imageArea.appendChild(img);

label.setAttribute("id","form-group-update-label");
label.innerText = "+"
fileInput.before(label);
label.appendChild(fileInput);

fileInput.addEventListener('change', e => {
    img.src = window.URL.createObjectURL(e.target.files[0]);
});

// クリック時にlabel要素を消す
const labelElement = document.querySelector('label');
labelElement.addEventListener('click', function() {
    labelElement.style.display = 'none';
});