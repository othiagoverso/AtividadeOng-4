
function onlyDigits(v){ return v.replace(/\D/g,''); }
function maskCPF(v){
  v = onlyDigits(v).slice(0,11);
  if (v.length > 9) return v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
  if (v.length > 6) return v.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
  if (v.length > 3) return v.replace(/(\d{3})(\d{0,3})/, '$1.$2');
  return v;
}
function maskCEP(v){
  v = onlyDigits(v).slice(0,8);
  if (v.length > 5) return v.replace(/(\d{5})(\d{0,3})/, '$1-$2');
  return v;
}
function maskPhone(v){
  v = onlyDigits(v).slice(0,11);
  if (v.length > 10) return v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  if (v.length > 6) return v.replace(/(\d{2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
  if (v.length > 2) return v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  return v;
}

function setMask(el, fn){ if(!el) return; el.addEventListener('input', ()=> el.value = fn(el.value)); }
setMask(document.getElementById('cpf'), maskCPF);
setMask(document.getElementById('cep'), maskCEP);
setMask(document.getElementById('telefone'), maskPhone);

const nasc = document.getElementById('nascimento');
if (nasc) {
  const t = new Date(); t.setFullYear(t.getFullYear()-18);
  nasc.max = `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
}

const statusEl = document.getElementById('status');
const formCad = document.getElementById('form-cadastro');
if (formCad) {
  formCad.addEventListener('submit', e => {
    e.preventDefault();
    const ok = formCad.checkValidity();
    if (!ok) { statusEl.textContent = 'Corrija os campos destacados.'; statusEl.style.color = '#b91c1c'; return; }
    statusEl.textContent = 'Enviado! Entraremos em contato.'; statusEl.style.color = '#15803d';
    formCad.reset();
  });
}

const formRapido = document.getElementById('form-rapido');
if (formRapido){
  formRapido.addEventListener('submit', e =>{
    e.preventDefault();
    if (!formRapido.checkValidity()) return alert('Preencha nome e WhatsApp no formato (11) 99999-9999');
    alert('Contato solicitado! Responderemos pelo WhatsApp.');
    formRapido.reset();
  });
}
