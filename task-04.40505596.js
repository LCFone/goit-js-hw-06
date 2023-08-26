const e=document.getElementById("counter"),t=document.getElementById("value"),n=e.querySelector('[data-action="increment"]'),c=e.querySelector('[data-action="decrement"]');let o=0;function d(){t.textContent=o}n.addEventListener("click",(function(){o+=1,d()})),c.addEventListener("click",(function(){o-=1,d()})),d();
//# sourceMappingURL=task-04.40505596.js.map
