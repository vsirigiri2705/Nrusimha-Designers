const phone = '917799862333';
const maps = 'https://www.google.com/maps?cid=1832636968131500128';
const directions = 'https://www.google.com/maps/dir/?api=1&destination=17.5168464%2C78.342662';
const services = [
  {name:'Blouse Stitching', mark:'01', occasions:'wedding festive everyday', people:'women', detail:'Bring your saree or blouse material. Tell us the neckline, sleeve style and fit you have in mind.'},
  {name:'Saree Fall & Pico', mark:'02', occasions:'wedding festive everyday', people:'women', detail:'Get your saree ready to drape with fall stitching and a neat pico edge finish.'},
  {name:'Alterations & Hemming', mark:'03', occasions:'wedding festive everyday', people:'women kids', detail:'Ask about shortening a hem, adjusting sleeves or refining the fit of a garment you already own.'}
];
// Add approved photos as { name, design, src, alt }.
const galleryPhotos = [];
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const whatsapp = message => 'https://wa.me/' + phone + (message ? '?text=' + encodeURIComponent(message) : '');
const css = `
:root{color-scheme:light;--ink:#35272c;--wine:#652f47;--cream:#faf6ef;--line:#dfd3c6;--gold:#d5a961}*{box-sizing:border-box}
body{margin:0;background:var(--cream);color:var(--ink);font:16px/1.6 system-ui,sans-serif}a{color:inherit}h1,h2,h3,p{margin:0 0 1rem}h1,h2,h3,.brand{font-family:Georgia,serif;font-weight:normal;line-height:1.12}h1{font-size:clamp(3rem,8vw,6.2rem);letter-spacing:-.045em}h2{font-size:clamp(2.1rem,5vw,3.5rem);letter-spacing:-.025em}h3{font-size:1.65rem}.wrap{max-width:1170px;margin:auto;padding-inline:clamp(20px,5vw,64px)}header{border-bottom:1px solid var(--line)}nav{display:flex;align-items:center;justify-content:space-between;min-height:78px;gap:16px;flex-wrap:wrap;padding-block:12px}nav a{text-decoration:none}.brand{font-size:1.45rem}.navlinks,.actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.navlinks{gap:18px;font-size:.91rem}.button,button{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border:1px solid var(--wine);padding:10px 17px;min-height:44px;border-radius:5px;font:inherit;font-weight:650;cursor:pointer;background:transparent;color:var(--wine)}.primary{background:var(--wine);color:white}.hero{background:#562940;color:#fff5e7;overflow:hidden}.hero .wrap{display:grid;grid-template-columns:1.35fr 1fr;align-items:center;gap:24px;min-height:465px;padding-block:64px}.hero p{max-width:450px;color:#f2dce4}.hero .primary{background:#f4dfbd;color:#432035;border-color:#f4dfbd}.hero .button:not(.primary){color:white;border-color:#c698ad}.art{width:100%;max-height:365px}.kicker{text-transform:uppercase;letter-spacing:.17em;font-size:.73rem;font-weight:750}.hero .kicker{color:#f0c881}.section{padding-block:62px}
.shop-nav{position:relative}.shop-nav summary{cursor:pointer;padding:10px 0;color:var(--wine);font-weight:650}
.shop-menu{position:absolute;top:100%;left:0;z-index:2;min-width:max-content;padding:6px;border:1px solid var(--line);border-radius:6px;background:#fffdf9;box-shadow:0 6px 20px #35272c20}
.shop-menu a{display:block;padding:9px 12px;border-radius:4px}.shop-menu a:hover,.shop-menu a:focus-visible{background:#f0e7da}
.shop-filters{border-bottom:1px solid var(--line);padding-bottom:20px;margin:22px 0 26px}.shop-filters a[aria-current]{background:var(--wine);color:white}.shop-order{margin-top:12px;display:inline-block}
.shop-results{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px}.visit,.gallery-grid{display:grid;gap:16px}
.cards{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 32px) / 3);gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:4px;padding:4px;margin-inline:-4px}
.cards .card{scroll-snap-align:start}.services-actions{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:20px}
.scroll-controls{display:flex;gap:8px}.scroll-controls button:disabled{opacity:.38;cursor:default}
.gallery-grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))}.gallery-photo{margin:0;max-width:360px;overflow:hidden;padding:0}.gallery-photo img{display:block;width:100%;aspect-ratio:4/5;object-fit:contain;background:#f0e7da}.gallery-photo figcaption{padding:14px 18px}.gallery-photo h3{margin-bottom:4px}.gallery-group{margin-top:30px}.gallery-sort{margin:20px 0}.gallery-sort a[aria-current]{background:var(--wine);color:white}.card,.panel{border:1px solid var(--line);background:#fffdf9;border-radius:8px;padding:24px}.card{display:flex;flex-direction:column}.number{font-family:Georgia,serif;color:var(--wine);border-bottom:1px solid var(--line);padding-bottom:9px}.muted{color:#63545a}.visit{grid-template-columns:1fr 1fr}.visit-bg{background:#f0e7da}footer{padding-block:24px;border-top:1px solid var(--line);font-size:.9rem}.form-shell{max-width:760px}form{display:grid;gap:17px}label{font-weight:650;display:grid;gap:5px}input,select,textarea{width:100%;font:inherit;color:inherit;background:white;border:1px solid #a99a9f;border-radius:4px;padding:10px}textarea{resize:vertical}.two{display:grid;grid-template-columns:1fr 1fr;gap:14px}.hint{font-size:.88rem;font-weight:normal;color:#63545a}.upload{border:1px dashed #b7a3a9;padding:12px;border-radius:5px}.error{color:#8c253c}.entry{margin-top:14px;overflow-wrap:anywhere}pre{white-space:pre-wrap;font:inherit}[hidden]{display:none!important}:focus-visible{outline:3px solid #b27127;outline-offset:3px}
@media(max-width:760px){.hero .wrap{grid-template-columns:1fr;min-height:auto;padding-block:45px}.art{display:none}.cards{grid-auto-columns:min(88%,420px)}.section{padding-block:38px}}@media(max-width:540px){.two,.visit{grid-template-columns:1fr}.navlinks{gap:13px}}
`;
function page(title, content) {
  return '<!doctype html><html lang="en-IN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Boutique tailoring, blouse stitching, saree finishing and alterations in Miyapur, Hyderabad."><title>' + escape(title) + ' | Nrusimha Designers</title><style>' + css + '</style><header><nav class="wrap" aria-label="Main"><a href="/" class="brand">Nrusimha Designers</a><div class="navlinks"><details class="shop-nav"><summary>Shop</summary><div class="shop-menu"><a href="/shop/occasion">Shop by Occasion</a><a href="/shop/person">Shop by Person</a></div></details><a href="/#services">Services</a><a href="/gallery">Gallery</a><a href="/appointment">Appointment</a><a href="' + whatsapp() + '">WhatsApp</a></div></nav></header><main>' + content + '</main><footer><div class="wrap">Nrusimha Designers · Miyapur, Hyderabad <span aria-hidden="true"> · </span><a href="' + maps + '">Google Maps</a></div></footer></html>';
}
const art = `<svg class="art" aria-hidden="true" viewBox="0 0 360 350" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="p" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M13 1Q14 11 25 13Q14 15 13 25Q11 15 1 13Q11 11 13 1Z" fill="none" stroke="#e0b375" opacity=".7"/></pattern></defs><path d="M34 322V171a146 146 0 0 1 292 0v151Z" fill="#753850" stroke="#e0b375"/><path d="M50 307V171a130 130 0 0 1 260 0v136Z" fill="none" stroke="#e0b375" stroke-dasharray="2 5"/><path d="M112 289c62-58 12-115 39-184 7-18 38-37 65-21l51 26c-64 18-62 71-37 111 15 25 12 54-3 81Z" fill="#9c526a" stroke="#e8be87" stroke-width="2"/><path d="M112 289c62-58 12-115 39-184 7-18 38-37 65-21l51 26c-64 18-62 71-37 111 15 25 12 54-3 81Z" fill="url(#p)"/><path d="M119 280l116 11M227 93c-65 26-62 65-47 110 11 33-5 62-20 91" fill="none" stroke="#efc58d" stroke-width="4"/><path d="M91 148q2 13 15 15-13 2-15 15-2-13-15-15 13-2 15-15Zm188 35q2 13 15 15-13 2-15 15-2-13-15-15 13-2 15-15Z" fill="#e0b375"/></svg>`;
function serviceCard(service) {
  return `<article class="card"><p class="number">${service.mark}</p><h3>${service.name}</h3><p>${service.detail}</p></article>`;
}
function home() {
  return page('Boutique tailoring in Miyapur', `
<section class="hero"><div class="wrap"><div><p class="kicker">Boutique tailoring · Miyapur, Hyderabad</p><h1>Tailored for<br>your occasion.</h1><p>From a new saree blouse to a better-fitting favourite, tell us what you have in mind.</p><div class="actions"><a class="button primary" href="/appointment">Request an Appointment</a><a class="button" href="${whatsapp()}">Chat on WhatsApp</a></div></div>${art}</div></section>
<section id="services" class="wrap section"><h2 id="services-heading">Services</h2><p class="muted">Tell us what you need and we’ll reply with an estimate on WhatsApp.</p><div class="cards" id="service-cards" role="region" aria-labelledby="services-heading" tabindex="0">${services.map(serviceCard).join('')}</div><div class="services-actions"><a class="button primary" href="/quote">Request a Quote</a><div class="scroll-controls" hidden><button type="button" data-slide="-1" aria-label="Scroll services left" aria-controls="service-cards">←</button><button type="button" data-slide="1" aria-label="Scroll services right" aria-controls="service-cards">→</button></div></div></section>
<section class="visit-bg"><div class="wrap section visit"><article class="panel"><p class="kicker">Customer reviews</p><h3>See what customers say</h3><p>Browse the latest customer reviews on Google Maps.</p><a class="button" href="${maps}">Read Google Reviews</a></article><article class="panel"><p class="kicker">Visit us</p><h3>Find us in Miyapur</h3><p>HMT Swarnapuri Colony, Ameenpur, Miyapur, Hyderabad, Telangana 502033</p><p>Monday–Saturday, 10 AM–8 PM. Sunday closed.</p><a class="button" href="${directions}">Get Directions</a></article></div></section>
<script>
const track = document.querySelector('#service-cards');
const controls = document.querySelector('.scroll-controls');
const [previous, next] = controls.querySelectorAll('button');
function updateScrollControls() {
  const distance = track.scrollWidth - track.clientWidth;
  controls.hidden = distance < 2;
  previous.disabled = track.scrollLeft < 2;
  next.disabled = track.scrollLeft >= distance - 1;
}
for (const button of [previous, next]) button.addEventListener('click', () => {
  const firstCard = track.firstElementChild;
  if (!firstCard) return;
  const step = firstCard.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
  const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
  track.scrollBy({left:step * Number(button.dataset.slide), behavior});
});
track.addEventListener('scroll', updateScrollControls, {passive:true});
new ResizeObserver(updateScrollControls).observe(track);
updateScrollControls();
</script>`);
}
const shopPages = {
  occasion: {
    title:'Shop by Occasion',
    field:'occasions',
    intro:'Browse tailoring services for weddings, festivals and everyday wear.',
    categories:[
      ['wedding','Wedding','Include the wedding date when you request a quote.'],
      ['festive','Festive','Share your saree or garment and any style reference.'],
      ['everyday','Everyday','Tell us which garment you’re bringing and what fit you prefer.']
    ]
  },
  person: {
    title:'Shop by Person',
    field:'people',
    intro:'Find tailoring services for women and children.',
    categories:[
      ['women','Women','Browse blouse stitching, saree finishing and alterations.'],
      ['kids','Kids','Ask us about hemming or adjusting the fit of a child’s garment.']
    ]
  }
};
function shop(kind, params) {
  const {title,field,intro,categories} = shopPages[kind];
  const selected = categories.find(([key]) => key === params.get('category'));
  const category = selected?.[0] || '';
  const byName = params.get('sort') === 'name';
  const link = (filter, sorted) => {
    const query = new URLSearchParams();
    if (filter) query.set('category',filter);
    if (sorted) query.set('sort','name');
    return '/shop/' + kind + (query.size ? '?' + escape(query.toString()) : '');
  };
  const matches = services.filter(service => !category || service[field].split(' ').includes(category));
  if (byName) matches.sort((a,b) => a.name.localeCompare(b.name,'en-IN'));
  const filters = [['','All'], ...categories].map(([key,label]) =>
    `<a class="button" href="${link(key,byName)}"${key === category ? ' aria-current="page"' : ''}>${label}</a>`
  ).join('');
  return page(title, `
<section class="wrap section">
  <p class="kicker">Nrusimha Designers</p><h1>${title}</h1><p class="muted">${intro}</p>
  <div class="shop-filters"><div class="actions" role="group" aria-label="Filter by ${kind}">${filters}</div>
    <a class="shop-order" href="${link(category,!byName)}">${byName ? 'Show featured order' : 'Sort by service name A–Z'}</a>
  </div>
  <h2>${selected ? selected[1] + ' services' : 'All services'}</h2>
  ${selected ? `<p class="muted">${selected[2]}</p>` : ''}
  ${matches.length ? `<div class="shop-results">${matches.map(serviceCard).join('')}</div>` : '<p>No services are listed in this category yet.</p>'}
  <div class="services-actions"><a class="button primary" href="/quote">Request a Quote</a></div>
</section>`);
}
function gallery(sort) {
  const byName = sort === 'name';
  const compare = (a,b) => a.localeCompare(b,'en-IN',{sensitivity:'base',numeric:true});
  const photos = [...galleryPhotos].sort((a,b) => byName
    ? compare(a.name,b.name) || compare(a.design,b.design)
    : compare(a.design,b.design) || compare(a.name,b.name));
  const photoCard = photo => `<figure class="card gallery-photo"><img src="${escape(photo.src)}" alt="${escape(photo.alt || photo.name)}" loading="lazy"><figcaption><h3>${escape(photo.name)}</h3><span class="muted">${escape(photo.design)}</span></figcaption></figure>`;
  const groups = new Map();
  for (const photo of photos) {
    const group = byName ? '' : photo.design;
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(photo);
  }
  const listing = [...groups].map(([design,items]) => `<section class="gallery-group">${design ? `<h2>${escape(design)}</h2>` : ''}<div class="gallery-grid">${items.map(photoCard).join('')}</div></section>`).join('');
  return page('Gallery', `<section class="wrap section"><p class="kicker">Nrusimha Designers</p><h1>Design Gallery</h1><p class="muted">Browse designs and finished work from our boutique.</p><div class="actions gallery-sort" role="group" aria-label="Sort gallery"><a class="button" href="/gallery"${byName ? '' : ' aria-current="page"'}>By design</a><a class="button" href="/gallery?sort=name"${byName ? ' aria-current="page"' : ''}>By name A–Z</a></div>${listing || '<div class="panel"><h3>Photos coming soon</h3><p>Explore our tailoring services while we prepare the gallery.</p><a href="/#services">View Services</a></div>'}</section>`);
}
const reasons = ['Design consultation','Measurements','Fitting','Other'];
const fileTypes = ['image/jpeg','image/png','image/webp'];
const maxFile = 4 * 1024 * 1024;
const uploadFields = { material:'Your material or saree', reference:'Reference for the work' };
function form(kind, selected) {
  const quote = kind === 'quote';
  const title = quote ? 'Request a Quote' : 'Request an Appointment';
  const options = quote ? services.map(service => service.name) : reasons;
  return page(title, `<section class="wrap section form-shell"><p class="kicker">Nrusimha Designers</p><h1 style="font-size:clamp(2.7rem,7vw,4.6rem)">${title}</h1><p>${quote ? 'Share what you’d like stitched or altered. We’ll follow up on WhatsApp.' : 'Suggest a time for your shop visit. We’ll confirm availability on WhatsApp.'}</p><div class="panel"><form method="post" enctype="multipart/form-data" action="/${kind}"><div class="two"><label>Name<input name="name" required maxlength="80" autocomplete="name"></label><label>WhatsApp number<input name="phone" type="tel" required maxlength="22" autocomplete="tel" placeholder="+91"></label></div>
<label>${quote ? 'Service' : 'Reason for visit'}<select name="service" required><option value="">Choose one</option>${options.map(item => `<option${item === selected ? ' selected' : ''}>${item}</option>`).join('')}</select></label>
<label>${quote ? 'What would you like done?' : 'Anything we should know? (optional)'}<textarea name="notes" rows="4" maxlength="1500" ${quote ? 'required' : ''}></textarea></label>
<div class="two"><label>${quote ? 'Required-by date (optional)' : 'Preferred date'}<input type="date" name="date" ${quote ? '' : 'required'}></label>${quote ? '' : '<label>Preferred time (India time)<input type="time" name="time" min="10:00" max="19:30" required></label>'}</div>
${quote ? `<div class="two">${Object.entries(uploadFields).map(([key,label]) => `<label class="upload">${label}<span class="hint">Optional · JPG, PNG or WebP · up to 4 MB</span><input type="file" name="${key}" accept="${fileTypes.join(',')}"></label>`).join('')}</div>` : '<p class="hint">Appointments are available by request Monday through Saturday. Bring your garment or material if you have it.</p>'}
<p class="hint">We use your contact details and any uploaded photos to respond to this request. Your uploads are private.</p><p class="error" role="alert" hidden></p><button class="primary" type="submit">Send ${quote ? 'Quote' : 'Appointment'} Request</button></form></div></section>
<script>
const form = document.querySelector('form');
form.addEventListener('submit', async event => {
  event.preventDefault();
  const button = form.querySelector('button');
  const error = form.querySelector('.error');
  button.disabled = true;
  error.hidden = true;
  try {
    const response = await fetch(form.action, {method:'POST', body:new FormData(form)});
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Could not send your request.');
    location.assign('/received?kind=${kind}&id=' + encodeURIComponent(result.id));
  } catch (problem) {
    error.textContent = problem instanceof TypeError ? 'Could not connect. Please try again or chat on WhatsApp.' : problem.message;
    error.hidden = false;
    button.disabled = false;
  }
});
</script>`);
}
const maxRequest = 2 * maxFile + 64 * 1024;
const idPattern = /^[0-9]{13}-[0-9a-f-]{36}$/;
const headers = {'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin'};
const html = (body,status=200) => new Response(body,{status,headers:{...headers,'Content-Type':'text/html; charset=utf-8'}});
const json = (body,status=200) => Response.json(body,{status,headers});
function failure(message, status=400) { return json({error:message},status); }
function val(data,key) {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}
function dateInIndia() {
  return new Date(Date.now() + 330 * 60000).toISOString().slice(0,10);
}
async function readForm(request) {
  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.startsWith('multipart/form-data;') || !request.body) return null;
  if (Number(request.headers.get('Content-Length')) > maxRequest) return null;
  let size = 0;
  const reader = request.body.getReader();
  const chunks = [];
  for (;;) {
    const {done,value} = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxRequest) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const payload = new Blob(chunks,{type:contentType});
  return {payload,data:await new Response(payload,{headers:{'Content-Type':contentType}}).formData(),contentType};
}
async function isImage(file) {
  if (file.size > maxFile || !fileTypes.includes(file.type)) return false;
  const b = new Uint8Array(await file.slice(0,12).arrayBuffer());
  if (file.type === 'image/jpeg') return b[0] === 255 && b[1] === 216 && b[2] === 255;
  if (file.type === 'image/png') return [137,80,78,71,13,10,26,10].every((value,i) => value === b[i]);
  return String.fromCharCode(...b.slice(0,4)) === 'RIFF' && String.fromCharCode(...b.slice(8)) === 'WEBP';
}
async function submit(request, bucket, kind) {
  if (request.headers.get('Origin') !== new URL(request.url).origin) return failure('Open this form on the boutique website.',403);
  if (!bucket) return failure('Online requests are temporarily unavailable. Please chat on WhatsApp.',503);
  let form;
  try { form = await readForm(request); } catch { return failure('Please check your form and try again.'); }
  if (!form) return failure('Please check the file sizes and try again.');
  const {data,payload,contentType} = form;
  const quote = kind === 'quote';
  const name = val(data,'name');
  const rawPhone = val(data,'phone');
  const number = rawPhone.replace(/[\s()-]/g,'');
  const service = val(data,'service');
  const notes = val(data,'notes');
  const date = val(data,'date');
  const time = val(data,'time');
  if (!name || name.length > 80 || !/^\+?\d{10,15}$/.test(number)) return failure('Enter your name and a valid WhatsApp number.');
  if (!(quote ? services.some(item => item.name === service) : reasons.includes(service))) return failure('Choose a service or reason for visiting.');
  if (notes.length > 1500 || (quote && !notes)) return failure('Enter a short description of the work.');
  if (date) {
    const parsed = new Date(date + 'T00:00:00Z');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || isNaN(parsed) || parsed.toISOString().slice(0,10) !== date || date < dateInIndia()) return failure('Choose today or a future date.');
  }
  if (!quote && (!date || new Date(date + 'T00:00:00Z').getUTCDay() === 0 || !/^\d{2}:[0-5]\d$/.test(time) || time < '10:00' || time > '19:30')) return failure('Choose a time between 10 AM and 7:30 PM, Monday through Saturday.');
  for (const key of Object.keys(uploadFields)) {
    const file = data.get(key);
    if (file instanceof File && file.size && (!quote || !await isImage(file))) return failure('Use JPG, PNG or WebP photos up to 4 MB each.');
  }
  const id = Date.now() + '-' + crypto.randomUUID();
  try {
    await bucket.put('requests/' + id,payload,{httpMetadata:{contentType},customMetadata:{kind}});
  } catch {
    return failure('We couldn’t save your request. Please try again or chat on WhatsApp.',503);
  }
  return json({id},201);
}
async function storedForm(object) {
  return new Response(object.body,{headers:{'Content-Type':object.httpMetadata.contentType}}).formData();
}
function fileLink(data,id,key,label) {
  const file = data.get(key);
  return file instanceof File && file.size ? '<a class="button" href="/inbox/photo?id=' + id + '&amp;field=' + key + '">' + label + '</a>' : '';
}
async function inbox(url, bucket) {
  const cursor = url.searchParams.get('cursor') || undefined;
  const listing = await bucket.list({prefix:'requests/',limit:20,cursor,include:['customMetadata']});
  const rows = [];
  for (const summary of listing.objects) {
    const object = await bucket.get(summary.key);
    if (!object) continue;
    const id = summary.key.slice('requests/'.length);
    const data = await storedForm(object);
    const number = val(data,'phone').replace(/\D/g,'');
    const contact = number.length === 10 ? '91' + number : number;
    const quote = summary.customMetadata?.kind === 'quote';
    rows.push('<article class="panel entry"><p class="kicker">' + (quote ? 'Quote' : 'Appointment') + ' · ' + new Date(Number(id.slice(0,13))).toLocaleDateString('en-IN',{timeZone:'Asia/Kolkata'}) + '</p><h3>' + escape(val(data,'service')) + '</h3><p>' + escape(val(data,'name')) + ' · ' + escape(val(data,'phone')) + '</p><p>' + escape([val(data,'date'),val(data,'time')].filter(Boolean).join(' · ')) + '</p><pre>' + escape(val(data,'notes')) + '</pre><div class="actions"><a class="button primary" href="https://wa.me/' + contact + '">Reply on WhatsApp</a>' + Object.entries(uploadFields).map(([key,label]) => fileLink(data,id,key,label)).join('') + '</div></article>');
  }
  return html(page('Private inbox','<section class="wrap section form-shell"><h2>Request inbox</h2>' + (rows.length ? rows.join('') : '<p>New quote and appointment requests will appear here.</p>') + (listing.truncated ? '<p class="entry"><a class="button" href="/inbox?cursor=' + encodeURIComponent(listing.cursor) + '">More requests</a></p>' : '') + '</section>'));
}
async function photo(url,bucket) {
  const id = url.searchParams.get('id') || '';
  const key = url.searchParams.get('field');
  if (!idPattern.test(id) || !Object.hasOwn(uploadFields,key)) return new Response('Not found',{status:404});
  const object = await bucket.get('requests/' + id);
  if (!object) return new Response('Not found',{status:404});
  const file = (await storedForm(object)).get(key);
  if (!(file instanceof File) || !file.size || !fileTypes.includes(file.type)) return new Response('Not found',{status:404});
  return new Response(file,{headers:{...headers,'Content-Type':file.type,'Content-Disposition':'inline'}});
}
export default {
  async fetch(request,env) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (request.method === 'POST' && (path === '/quote' || path === '/appointment')) return submit(request,env.BUCKET,path.slice(1));
    if (request.method !== 'GET') return new Response('Method not allowed',{status:405});
    if (path === '/') return html(home());
    if (path === '/shop/occasion' || path === '/shop/person') return html(shop(path.slice('/shop/'.length),url.searchParams));
    if (path === '/gallery') return html(gallery(url.searchParams.get('sort')));
    if (path === '/quote' || path === '/appointment') return html(form(path.slice(1),url.searchParams.get('service')));
    if (path === '/received') {
      const quote = url.searchParams.get('kind') === 'quote';
      return html(page('Request received','<section class="wrap section form-shell"><h2>' + (quote ? 'Quote request received' : 'Appointment requested') + '</h2><p>' + (quote ? 'We’ll review your details and follow up on WhatsApp.' : 'We’ll message you on WhatsApp to confirm a time.') + '</p><a class="button" href="/">Back to home</a></section>'));
    }
    if (path === '/inbox' || path === '/inbox/photo') {
      // The deployment gateway must inject verified identity and strip client-supplied identity headers.
      const email = request.headers.get('oai-authenticated-user-email');
      if (!email || !env.ADMIN_EMAIL || email.toLowerCase() !== env.ADMIN_EMAIL.toLowerCase()) return new Response('Forbidden',{status:403,headers});
      if (!env.BUCKET) return new Response('Request storage is unavailable',{status:503,headers});
      return path === '/inbox' ? inbox(url,env.BUCKET) : photo(url,env.BUCKET);
    }
    return html(page('Page not found','<section class="wrap section"><h2>Page not found</h2><a href="/">Back to home</a></section>'),404);
  }
};
