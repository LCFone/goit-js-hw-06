const e=document.querySelector(".login-form"),t=e.querySelector('input[name="email"]'),l=e.querySelector('input[name="password"]');e.addEventListener("submit",(function(n){if(n.preventDefault(),""===t.value||""===l.value)return void alert("Всі поля повинні бути заповнені");const r={email:t.value,password:l.value};console.log(r),e.requestFullscreen()}));
//# sourceMappingURL=task-08.ab1d8b3d.js.map
