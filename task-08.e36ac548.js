const e=document.querySelector(".login-form"),t=e.querySelector('input[name="email"]'),n=e.querySelector('input[name="password"]');e.addEventListener("submit",(function(o){if(o.preventDefault(),""===t.value||""===n.value)return void alert("Всі поля повинні бути заповнені");const r={email:t.value,password:n.value};console.log(r),e.reset()}));
//# sourceMappingURL=task-08.e36ac548.js.map
