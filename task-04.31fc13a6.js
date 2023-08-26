const e=document.querySelector("#counter"),t=document.querySelector("#value"),n=e.querySelector('[data-action="increment"]'),c=e.querySelector('[data-action="decrement"]');let o=0;function r(){t.textContent=o}n.addEventListener("click",(function(){o+=1,r()})),c.addEventListener("click",(function(){o-=1,r()})),r();
//# sourceMappingURL=task-04.31fc13a6.js.map
