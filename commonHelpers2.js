import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a={email:"",message:""},s="feedback-form-state",r=document.querySelector(".feedback-form"),l=localStorage.getItem(s);if(l){const{email:e,message:t}=JSON.parse(l);a.email=e,a.message=t,r.querySelector('[name="email"]').value=e,r.querySelector('[name="message"]').value=t}const m=e=>{const t=e.target,o=t.getAttribute("name");a[o]=t.value.trim(),localStorage.setItem(s,JSON.stringify(a))},c=e=>{e.preventDefault();const t=e.currentTarget.elements;if(!t.email.value||!t.message.value){alert("Fill all fields, please");return}console.log(a),localStorage.removeItem(s),a.email="",a.message="",e.currentTarget.reset()};r.addEventListener("input",m);r.addEventListener("submit",c);
//# sourceMappingURL=commonHelpers2.js.map