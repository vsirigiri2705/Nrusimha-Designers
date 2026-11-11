import { sampleGalleryImages } from './sample-gallery.js';
const phone = '917799862333';
const maps = 'https://www.google.com/maps?cid=1832636968131500128';
const directions = 'https://www.google.com/maps/dir/?api=1&destination=17.5168464%2C78.342662';
const services = [
  {name:'Blouse Stitching', occasions:'wedding festive everyday', people:'women', detail:'Bring your saree or blouse material. Tell us the neckline, sleeve style and fit you have in mind.'},
  {name:'Saree Fall & Pico', occasions:'wedding festive everyday', people:'women', detail:'Get your saree ready to drape with fall stitching and a neat pico edge finish.'},
  {name:'Alterations & Hemming', occasions:'wedding festive everyday', people:'women kids', detail:'Ask about shortening a hem, adjusting sleeves or refining the fit of a garment you already own.'}
];
// Add approved photos as { name, design, src, alt, featured }. Real photos replace the samples.
const galleryPhotos = [];
const samplePhotos = [
  {name:'Plum Silk Blouse', design:'Blouse', src:'/gallery/sample/plum-blouse.webp', alt:'Plum silk blouse with gold embroidery'},
  {name:'Teal Saree Border', design:'Saree', src:'/gallery/sample/teal-saree.webp', alt:'Folded teal silk saree with a woven gold border'},
  {name:'Kurta Cuff & Hem', design:'Finishing', src:'/gallery/sample/kurta-finishing.webp', alt:'Close-up of a terracotta kurta cuff and stitched hem'}
];
const displayPhotos = galleryPhotos.length ? galleryPhotos : samplePhotos;
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const whatsapp = message => 'https://wa.me/' + phone + (message ? '?text=' + encodeURIComponent(message) : '');
const css = `
:root{color-scheme:light;--ink:#35272c;--wine:#652f47;--cream:#faf6ef;--line:#dfd3c6;--gold:#d5a961}*{box-sizing:border-box}
body{margin:0;background:var(--cream);color:var(--ink);font:16px/1.6 system-ui,sans-serif}a{color:inherit}h1,h2,h3,p{margin:0 0 1rem}h1,h2,h3,.brand{font-family:Georgia,serif;font-weight:normal;line-height:1.12}h1{font-size:clamp(3rem,8vw,6.2rem);letter-spacing:-.045em}h2{font-size:clamp(2.1rem,5vw,3.5rem);letter-spacing:-.025em}h3{font-size:1.65rem}.wrap{max-width:1170px;margin:auto;padding-inline:clamp(20px,5vw,64px)}header{border-bottom:1px solid var(--line)}nav{display:flex;align-items:center;justify-content:space-between;min-height:78px;gap:16px;flex-wrap:wrap;padding-block:12px}nav a{text-decoration:none}.brand{font-size:1.45rem}.navlinks,.actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.navlinks{gap:18px;font-size:.91rem}.button,button{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border:1px solid var(--wine);padding:10px 17px;min-height:44px;border-radius:5px;font:inherit;font-weight:650;cursor:pointer;background:transparent;color:var(--wine)}.primary{background:var(--wine);color:white}.hero{background:#562940;color:#fff5e7;overflow:hidden}.hero .wrap{display:grid;grid-template-columns:1.35fr 1fr;align-items:center;gap:24px;min-height:465px;padding-block:64px}.hero p{max-width:450px;color:#f2dce4}.hero .primary{background:#f4dfbd;color:#432035;border-color:#f4dfbd}.hero .button:not(.primary){color:white;border-color:#c698ad}.hero-image{display:block;width:100%;height:auto;max-width:530px;aspect-ratio:4/3;object-fit:cover;border:1px solid #b48667;border-radius:100px 100px 10px 10px;box-shadow:0 16px 36px #28132250}
.kicker{text-transform:uppercase;letter-spacing:.17em;font-size:.73rem;font-weight:750}.hero .kicker{color:#f0c881}.section{padding-block:62px}
.shop-nav{position:relative}.shop-nav summary{cursor:pointer;padding:10px 0;color:var(--wine);font-weight:650}
.shop-menu{position:absolute;top:100%;left:0;z-index:2;min-width:max-content;padding:6px;border:1px solid var(--line);border-radius:6px;background:#fffdf9;box-shadow:0 6px 20px #35272c20}
.shop-menu a{display:block;padding:9px 12px;border-radius:4px}.shop-menu a:hover,.shop-menu a:focus-visible{background:#f0e7da}
.shop-filters{border-bottom:1px solid var(--line);padding-bottom:20px;margin:22px 0 26px}.shop-filters a[aria-current]{background:var(--wine);color:white}.shop-order{margin-top:12px;display:inline-block}
.shop-results{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px}.visit,.gallery-grid{display:grid;gap:16px}
.cards{position:relative;display:grid;grid-auto-flow:column;grid-auto-columns:40%;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:4px;padding:4px;margin-inline:-4px}

.featured-section{padding-top:46px;padding-bottom:8px}.featured-head{margin-bottom:16px}.featured-head h2,.featured-head p:last-child{margin-bottom:0}
.featured-window{overflow-x:auto;border-radius:8px}.featured-track,.featured-group{display:flex;width:max-content}.featured-group{gap:14px;padding-right:14px}
.featured-tile{margin:0;width:clamp(260px,33vw,370px);overflow:hidden;border-radius:8px;background:#fffdf9;border:1px solid var(--line)}.featured-tile img{display:block;width:100%;aspect-ratio:5/3;object-fit:cover}.featured-tile figcaption{padding:9px 14px;font-size:.92rem}
.featured-repeat{display:none}
@keyframes featured-scroll{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:no-preference){.featured-window.is-playing{overflow:hidden}.is-playing .featured-repeat{display:flex}.is-playing .featured-track{animation:featured-scroll 38s linear infinite}.is-playing:hover .featured-track,.is-playing:focus-within .featured-track{animation-play-state:paused}}
.cards .card{scroll-snap-align:start}.services-actions{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:20px}
.scroll-controls{display:flex;gap:8px}.scroll-controls button:disabled{opacity:.38;cursor:default}
.gallery-grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))}.gallery-photo{margin:0;max-width:360px;overflow:hidden;padding:0}.gallery-photo img{display:block;width:100%;aspect-ratio:4/5;object-fit:contain;background:#f0e7da}.gallery-photo figcaption{padding:14px 18px}.gallery-photo h3{margin-bottom:4px}.gallery-group{margin-top:30px}.gallery-sort{margin:20px 0}.gallery-sort a[aria-current]{background:var(--wine);color:white}.card,.panel{border:1px solid var(--line);background:#fffdf9;border-radius:8px;padding:24px}.card{display:flex;flex-direction:column}.muted{color:#63545a}.visit{grid-template-columns:1fr 1fr}.visit-bg{background:#f0e7da}footer{padding-block:24px;border-top:1px solid var(--line);font-size:.9rem}.form-shell{max-width:760px}form{display:grid;gap:17px}label{font-weight:650;display:grid;gap:5px}input,select,textarea{width:100%;font:inherit;color:inherit;background:white;border:1px solid #a99a9f;border-radius:4px;padding:10px}textarea{resize:vertical}.two{display:grid;grid-template-columns:1fr 1fr;gap:14px}.hint{font-size:.88rem;font-weight:normal;color:#63545a}.upload{border:1px dashed #b7a3a9;padding:12px;border-radius:5px}.error{color:#8c253c}.entry{margin-top:14px;overflow-wrap:anywhere}pre{white-space:pre-wrap;font:inherit}[hidden]{display:none!important}:focus-visible{outline:3px solid #b27127;outline-offset:3px}
@media(max-width:760px){.hero .wrap{grid-template-columns:1fr;min-height:auto;padding-block:45px}.hero-image{max-width:420px;border-radius:64px 64px 8px 8px}.cards{grid-auto-columns:min(88%,420px)}.section{padding-block:38px}}@media(max-width:540px){.two,.visit{grid-template-columns:1fr}.navlinks{gap:13px}}
`;
function page(title, content) {
  return '<!doctype html><html lang="en-IN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Boutique tailoring, blouse stitching, saree finishing and alterations in Miyapur, Hyderabad."><title>' + escape(title) + ' | Nrusimha Designers</title><style>' + css + '</style><header><nav class="wrap" aria-label="Main"><a href="/" class="brand">Nrusimha Designers</a><div class="navlinks"><details class="shop-nav"><summary>Shop</summary><div class="shop-menu"><a href="/shop/occasion">Shop by Occasion</a><a href="/shop/person">Shop by Person</a></div></details><a href="/services">Services</a><a href="/gallery">Gallery</a><a href="/appointment">Appointment</a><a href="' + whatsapp() + '">WhatsApp</a></div></nav></header><main>' + content + '</main><footer><div class="wrap">Nrusimha Designers · Miyapur, Hyderabad <span aria-hidden="true"> · </span><a href="' + maps + '">Google Maps</a></div></footer></html>';
}

function serviceCard(service) {
  return `<article class="card"><h3>${service.name}</h3><p>${service.detail}</p></article>`;
}
function featuredGallery() {
  const selected = galleryPhotos.length ? galleryPhotos.filter(photo => photo.featured) : samplePhotos;
  const photos = (selected.length ? selected : displayPhotos).slice(0,6);
  const tiles = photos.map(photo => `<figure class="featured-tile"><img src="${escape(photo.src)}" alt="${escape(photo.alt || photo.name)}" decoding="async" loading="lazy"><figcaption>${escape(photo.name)}</figcaption></figure>`).join('');
  const loop = photos.length >= 3;
  return `<section class="wrap featured-section" aria-labelledby="featured-heading">
<div class="featured-head"><p class="kicker">From the gallery</p><h2 id="featured-heading">Featured Designs</h2>${galleryPhotos.length ? '' : '<p class="muted">Illustrative samples</p>'}</div>
<div class="featured-window${loop ? ' is-playing' : ''}" role="region" aria-label="Featured design photos" tabindex="0"><div class="featured-track"><div class="featured-group">${tiles}</div>${loop ? `<div class="featured-group featured-repeat" aria-hidden="true">${tiles}</div>` : ''}</div></div>
</section>`;
}
function home() {
  return page('Boutique tailoring in Miyapur', `
<section class="hero"><div class="wrap"><div><p class="kicker">Boutique tailoring · Miyapur, Hyderabad</p><h1>Tailored for<br>your occasion.</h1><p>From a new saree blouse to a better-fitting favourite, tell us what you have in mind.</p><div class="actions"><a class="button primary" href="/appointment">Request an Appointment</a><a class="button" href="${whatsapp()}">Chat on WhatsApp</a></div></div><img class="hero-image" src="/gallery/sample/tailoring-hero.webp" alt="Sewing machine poised over gold embroidery on plum silk" width="900" height="675" fetchpriority="high"></div></section>
${featuredGallery()}
<section id="services" class="wrap section"><h2 id="services-heading">Services</h2><p class="muted">Tell us what you need and we’ll reply with an estimate on WhatsApp.</p><div class="cards" id="service-cards" role="region" aria-labelledby="services-heading" tabindex="0">${services.map(serviceCard).join('')}</div><div class="services-actions"><div class="actions"><a class="button primary" href="/quote">Request a Quote</a><a class="button" href="/services">View All Services</a></div><div class="scroll-controls" hidden><button type="button" data-slide="-1" aria-label="Scroll services left" aria-controls="service-cards">←</button><button type="button" data-slide="1" aria-label="Scroll services right" aria-controls="service-cards">→</button></div></div></section>
<section class="visit-bg"><div class="wrap section visit"><article class="panel"><p class="kicker">Customer reviews</p><h3>See what customers say</h3><p>Browse the latest customer reviews on Google Maps.</p><a class="button" href="${maps}">Read Google Reviews</a></article><article class="panel"><p class="kicker">Visit us</p><h3>Find us in Miyapur</h3><p>HMT Swarnapuri Colony, Ameenpur, Miyapur, Hyderabad, Telangana 502033</p><p>Monday–Saturday, 10 AM–8 PM. Sunday closed.</p><a class="button" href="${directions}">Get Directions</a></article></div></section>
<script>
const servicesSection = document.querySelector('#services');
const track = document.querySelector('#service-cards');
const controls = document.querySelector('.scroll-controls');
const cards = [...track.children];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

if (cards.length > 1) {
  function duplicate(card) {
    const copy = card.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    return copy;
  }

  const leading = cards.map(duplicate);
  const trailing = cards.map(duplicate);
  track.prepend(...leading);
  // Keep enough cards after the wrap point for a full viewport.
  track.append(...trailing, duplicate(cards[0]));
  const offset = card => card.offsetLeft - leading[0].offsetLeft;
  const start = () => offset(cards[0]);
  const end = () => offset(trailing[0]);

  function jumpTo(left) {
    track.scrollTo({left, behavior:'instant'});
  }

  // After a scroll into either copy, jump to the identical position in the main set.
  function wrapPosition() {
    const left = track.scrollLeft;
    const cycleWidth = end() - start();
    if (left < start() - 1) jumpTo(left + cycleWidth);
    else if (left >= end() - 1) jumpTo(left - cycleWidth);
  }

  let scrollTimer;
  if ('onscrollend' in track) {
    track.addEventListener('scrollend', wrapPosition);
  } else {
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(wrapPosition, 150);
    }, {passive:true});
  }

  let manuallyBrowsing = false;
  track.addEventListener('pointerdown', () => { manuallyBrowsing = true; }, {passive:true});
  function scrollServices(direction) {
    const step = offset(track.children[1]);
    const behavior = reduceMotion.matches ? 'instant' : 'smooth';
    track.scrollBy({left:step * direction, behavior});
  }

  for (const button of controls.querySelectorAll('button')) button.addEventListener('click', () => {
    manuallyBrowsing = true;
    scrollServices(Number(button.dataset.slide));
  });

  controls.hidden = false;
  jumpTo(start());
  new ResizeObserver(() => jumpTo(start())).observe(track);
  setInterval(() => {
    if (manuallyBrowsing || reduceMotion.matches || document.hidden ||
        servicesSection.matches(':hover, :focus-within')) return;
    const bounds = track.getBoundingClientRect();
    if (bounds.bottom <= 0 || bounds.top >= innerHeight) return;
    scrollServices(1);
  }, 4500);
}
</script>`);
}
function allServices() {
  return page('Services', `
<section class="wrap section">
  <h1>Tailoring Services</h1>
  <p class="muted">Tell us what you need and we’ll reply with an estimate on WhatsApp.</p>
  <div class="shop-results">${services.map(serviceCard).join('')}</div>
  <div class="services-actions"><a class="button primary" href="/quote">Request a Quote</a></div>
</section>`);
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
  const photos = [...displayPhotos].sort((a,b) => byName
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
  return page('Gallery', `<section class="wrap section"><p class="kicker">Nrusimha Designers</p><h1>Design Gallery</h1><p class="muted">${galleryPhotos.length ? 'Browse designs and finished work from our boutique.' : 'These illustrative samples show the kinds of garment details you can browse here.'}</p><div class="actions gallery-sort" role="group" aria-label="Sort gallery"><a class="button" href="/gallery"${byName ? '' : ' aria-current="page"'}>By design</a><a class="button" href="/gallery?sort=name"${byName ? ' aria-current="page"' : ''}>By name A–Z</a></div>${listing || '<div class="panel"><h3>Photos coming soon</h3><p>Explore our tailoring services while we prepare the gallery.</p><a href="/services">View Services</a></div>'}</section>`);
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
    if (path === '/services') return html(allServices());
    if (path === '/shop/occasion' || path === '/shop/person') return html(shop(path.slice('/shop/'.length),url.searchParams));
    const sample = path.match(/^\/gallery\/sample\/([a-z-]+)\.webp$/);
    if (sample && Object.hasOwn(sampleGalleryImages,sample[1])) {
      const bytes = Uint8Array.from(atob(sampleGalleryImages[sample[1]]), char => char.charCodeAt(0));
      return new Response(bytes,{headers:{'Content-Type':'image/webp','Cache-Control':'public, max-age=86400','X-Content-Type-Options':'nosniff'}});
    }
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
