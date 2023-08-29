const t=document.querySelector("#validation-input");function a(a,e){t.classList.add(a),t.classList.remove(e)}t.addEventListener("blur",(e=>{var i,l;Number(e.target.dataset.length)===e.target.value.length?a("valid","invalid"):e.target.value.length?a("invalid","valid"):(i="invalid",l="valid",t.classList.remove(i,l))}));
//# sourceMappingURL=task-06.ca855205.js.map
