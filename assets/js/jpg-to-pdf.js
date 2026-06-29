const input = document.getElementById("images");
const preview = document.getElementById("preview");
const convertBtn = document.getElementById("convertBtn");
const status = document.getElementById("status");

let selectedImages = [];

input.addEventListener("change", () => {

preview.innerHTML = "";
selectedImages = [];

const files = Array.from(input.files);

files.forEach(file => {

if (!file.type.startsWith("image/")) return;

selectedImages.push(file);

const reader = new FileReader();

reader.onload = function(e){

const card = document.createElement("div");
card.className = "preview-card";

card.innerHTML = `
<img src="${e.target.result}" alt="">
<p>${file.name}</p>
`;

preview.appendChild(card);

};

reader.readAsDataURL(file);

});

status.textContent =
selectedImages.length + " image(s) selected.";

});