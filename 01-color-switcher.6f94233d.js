const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r;t.addEventListener("click",(()=>{r=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled",!1)})),e.addEventListener("click",(()=>{clearInterval(r),t.removeAttribute("disabled",!0),e.setAttribute("disabled",!1)}));
//# sourceMappingURL=01-color-switcher.6f94233d.js.map