(()=>{function e(e,r,t,s){Object.defineProperty(e,r,{get:t,set:s,enumerable:!0,configurable:!0})}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94cf;r.register("8OSYY",(function(t,s){e(t.exports,"contactFormHandler",(()=>d));var a=r("dYwEk"),n=r("5peoN"),i=r("iAP2G"),o=r("hGZ2y"),c=r("5teHb");const d=(e,r,t,s,d,m,l,u)=>async g=>{g.preventDefault();const E=document.getElementById(e),p=document.getElementById(t),f=document.getElementById(d),h=document.getElementById(l),v=document.getElementById(r),y=document.getElementById(s),b=document.getElementById(m),L=document.getElementById(u),x=await(async e=>{try{await o.schema.validate(e,{recursive:!0,abortEarly:!1});const r=await n.execute("contact"),t=await i.http("/contact-me",i.HttpMethod.POST,e,void 0,r),s=await t.json();return{ID:s.id,name:s.name,email:s.email,subject:s.subject,text:s.message,createdAt:new Date(s.createdAt)}}catch(e){if(e instanceof a.ValidationError){const r={nameError:"",emailError:"",messageError:"",subjectError:""};return e.inner.forEach((e=>{"name"===e.path?r.nameError=e.errors[0]:"email"===e.path?r.emailError=e.errors[0]:"subject"===e.path?r.subjectError=e.errors[0]:"message"===e.path&&(r.messageError=e.errors[0])})),r}return{message:"Try again please"}}})({name:E.value,email:p.value,message:f.value,subject:h.value});if("message"in x)c.fire({title:"Error",text:x.message,icon:"error",timerProgressBar:!0});else{if("nameError"in x&&"emailError"in x&&"subjectError"in x&&"messageError"in x)return""!==x.nameError&&(E.classList.add("input-error"),v.classList.remove("hidden"),v.innerText=x.nameError),""!==x.emailError&&(p.classList.add("input-error"),y.classList.remove("hidden"),y.innerText=x.emailError),""!==x.subjectError&&(f.classList.add("input-error"),b.classList.remove("hidden"),b.innerText=x.subjectError),""!==x.messageError&&(h.classList.add("input-error"),L.classList.remove("hidden"),L.innerText=x.messageError),void setTimeout((()=>{v.classList.add("hidden"),y.classList.add("hidden"),b.classList.add("hidden"),L.classList.add("hidden"),p.classList.remove("input-error"),E.classList.remove("input-error"),f.classList.remove("input-error"),h.classList.remove("input-error")}),4e3);gtag("event","contact",{event_category:"reach",event_label:"New contact email"}),c.fire({title:"Success",text:"You have successfully sent message",icon:"success",timerProgressBar:!0})}}})),r.register("hGZ2y",(function(t,s){e(t.exports,"schema",(()=>n));var a=r("dYwEk");const n=a.object().shape({name:a.string().required().max(50),email:a.string().required().email().max(150),subject:a.string().required().max(150),message:a.string().required().max(2e3)})}))})();