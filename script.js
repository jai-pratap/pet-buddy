const pets = [
  {id:1,name:"Milo",type:"Dog",age:"2 years",personality:"Playful & curious",location:"Delhi",about:"A cheerful explorer who loves walks, games and meeting new people.",emoji:"🐶",image:"https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85"},
  {id:2,name:"Luna",type:"Cat",age:"1 year",personality:"Gentle & cuddly",location:"Noida",about:"A sweet little companion who enjoys sunny naps and quiet company.",emoji:"🐱",image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=85"},
  {id:3,name:"Oreo",type:"Dog",age:"3 years",personality:"Loyal & calm",location:"Ghaziabad",about:"A friendly buddy with a big heart and a talent for making you smile.",emoji:"🐕",image:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=85"},
  {id:4,name:"Coco",type:"Cat",age:"8 months",personality:"Bright & playful",location:"Delhi",about:"A curious kitten who loves toys, gentle attention and cosy corners.",emoji:"🐈",image:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=85"},
  {id:5,name:"Bunty",type:"Other",age:"1 year",personality:"Quiet & sweet",location:"Noida",about:"A gentle rabbit who needs a calm, roomy and rabbit-safe home.",emoji:"🐰",image:"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=85"},
  {id:6,name:"Bruno",type:"Dog",age:"4 years",personality:"Easygoing & kind",location:"Faridabad",about:"A relaxed friend who enjoys company, routine and a comfy place to rest.",emoji:"🐾",image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=85"}
];
let activeFilter = "All";
let favorites = JSON.parse(localStorage.getItem("petBuddyFavorites") || "[]");
const grid = document.getElementById("petGrid");
function renderPets(){
  const query = document.getElementById("petSearch").value.trim().toLowerCase();
  const visible = pets.filter(p => (activeFilter==="All" || p.type===activeFilter) && p.name.toLowerCase().includes(query));
  grid.innerHTML = visible.length ? visible.map(p => `
    <article class="pet-card">
      <div class="pet-image"><img src="${p.image}" alt="${p.name}, a ${p.type.toLowerCase()}" loading="lazy"><span class="pet-type">${p.emoji} ${p.type}</span>
      <button class="favorite ${favorites.includes(p.id)?"saved":""}" data-favorite="${p.id}" aria-label="${favorites.includes(p.id)?"Remove":"Add"} ${p.name} ${favorites.includes(p.id)?"from":"to"} favorites">${favorites.includes(p.id)?"♥":"♡"}</button></div>
      <div class="pet-info"><div class="pet-title"><h3>${p.name}</h3><span>${p.age}</span></div><p>${p.about}</p><div class="pet-meta"><span>✦ ${p.personality}</span><span>⌖ ${p.location}</span></div></div>
    </article>`).join("") : `<div class="empty-state">No buddies found. Try another name or filter. 🐾</div>`;
}
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
  document.querySelector(".filter.active").classList.remove("active");
  button.classList.add("active"); activeFilter=button.dataset.filter; renderPets();
}));
document.getElementById("petSearch").addEventListener("input",renderPets);
grid.addEventListener("click",e=>{
  const button=e.target.closest("[data-favorite]"); if(!button)return;
  const id=Number(button.dataset.favorite);
  favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];
  localStorage.setItem("petBuddyFavorites",JSON.stringify(favorites));renderPets();
});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("formMessage").textContent="Thanks! This is a front-end demo, so your message hasn't been sent.";
  e.target.reset();
});
document.getElementById("year").textContent=new Date().getFullYear();
renderPets();
