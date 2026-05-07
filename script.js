const ASSOCIATES = [
  "Suryanarayanan R","Pujitha Reddy Bosa","Muskan Agarwal","Aneena Thasneem C A",
  "Sumith Sai Koraboina","Vs Barath","Ganesh D","Sahil Ajit Phadke","Pranav Kapisway",
  "Gopi Venkata Mutya Akhil Polisetty","Anshi Patel","Dharshika S","Sairam Lokesh Devagudi",
  "Hardik S Sahh","Harsh Pavan Kumar Soni","Abhishek H","Sakshi Pravin Shelar",
  "Jyothi Praveen Siriki","Pavan Martha","Ashish Kumar","Sai Kiran Chinthareddy",
  "Sudhansu Kumar Mondal","Venkata Sri Shashank Kumar Reddy Kadasi","Gayathiri K",
  "Mithila Tamilselvan","Manoj Mandapaka","Pankhuri Gupta","Ragul Muthusami","Hariom Sharan",
  "Anjali E","Shree Om Sharma","Krish Tiwari","Pranav Eknath Khude","Bharath Chandra Thota",
  "Aditya Aditya Yadav","Mohammed Faiz P M","Kaushal Sanjayrao Dixit","Kakarla Yamini Priya",
  "Kshitij Koul","Sree Aswin Rajha R S","Prathmesh Sunil Rupnur","Mudrika Sharma",
  "Pratiksha Vishnu Gangane","Sirisanjana Bonagam","Parnitha Sudha","Pratyush Prabal",
  "Adiraju Anshita","Kamalakannan S","Ameya Tamhane","Arjun Kireeti Tulasi",
  "Debdwaipayan Biswas","Madhav Chowdary Prathapaneni","Sumeet Padhan","V Mithun",
  "Tushar Shahaji Naik","Vikash Choudhary","Venkata Sai Kesav Gainedi","Adwaith Anil",
  "Aditya Kumar","K Surya Prakash","Mahek Siddikha Syed","Vivek Kumar","Nidhish Sharma",
  "Karuna Karuna","Eshwar Bachu","Deepanshi Bhutyani","Saikat Ghosh"
];

const EVENT = new Date("2026-03-23T00:00:00").getTime();
const pad = (n) => String(n).padStart(2, "0");

function tickCountdown() {
  const diff = Math.max(0, EVENT - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById("cd-days").textContent = pad(d);
  document.getElementById("cd-hours").textContent = pad(h);
  document.getElementById("cd-mins").textContent = pad(m);
  document.getElementById("cd-secs").textContent = pad(s);
}
tickCountdown();
setInterval(tickCountdown, 1000);

document.getElementById("stat-count").textContent = pad(ASSOCIATES.length);
document.getElementById("list-sub").textContent =
  `${ASSOCIATES.length} names · presented in order of welcome`;

const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const search = document.getElementById("search");
const clearBtn = document.getElementById("search-clear");
const listSection = document.getElementById("list-section");
const revealBtn = document.getElementById("reveal-btn");

function render(query = "") {
  const q = query.trim().toLowerCase();
  const matches = ASSOCIATES
    .map((name, idx) => ({ name, idx: idx + 1 }))
    .filter(({ name }) => name.toLowerCase().includes(q));

  grid.innerHTML = "";
  if (matches.length === 0) {
    empty.hidden = false;
    empty.textContent = `No associate matches "${query}".`;
    return;
  }
  empty.hidden = true;
  matches.forEach(({ name, idx }, i) => {
    const li = document.createElement("li");
    li.className = "associate-card";
    li.style.animationDelay = `${Math.min(i * 25, 600)}ms`;
    li.innerHTML = `
      <span class="associate-num">${pad(idx)}</span>
      <span class="associate-name"></span>
    `;
    li.querySelector(".associate-name").textContent = name;
    grid.appendChild(li);
  });
}

revealBtn.addEventListener("click", () => {
  listSection.hidden = false;
  revealBtn.setAttribute("aria-expanded", "true");
  render();
  setTimeout(() => listSection.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
});

search.addEventListener("input", (e) => {
  const v = e.target.value;
  clearBtn.hidden = !v;
  render(v);
});

clearBtn.addEventListener("click", () => {
  search.value = "";
  clearBtn.hidden = true;
  render();
  search.focus();
});
