const hour=document.querySelector('#hour');
const min=document.querySelector('#min');
const sec=document.querySelector('#sec');

setInterval(()=>{
const dat=new Date();
hour.textContent=(dat.getHours()<10?"0":'')+dat.getHours();
min.textContent=(dat.getMinutes()<10?"0":'')+dat.getMinutes();
sec.textContent=(dat.getSeconds()<10?"0":'') +dat.getSeconds();

},1000)