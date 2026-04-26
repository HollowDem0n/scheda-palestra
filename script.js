/* ===== ESERCIZI ===== */

const listaEsercizi = [

	/* 🔥 RISCALDAMENTO */
	{ name: "Tapis Roulant", category: "Riscaldamento", image: "images/tapis.png", settings: ["Tempo", "Velocità", "Inclinazione"] },
	{ name: "Climb", category: "Riscaldamento", image: "https://source.unsplash.com/400x300/?stair-climber", settings: ["Tempo", "Velocità", "Inclinazione"] },
	{ name: "Skill Run", category: "Riscaldamento", image: "https://source.unsplash.com/400x300/?running", settings: ["Tempo", "Velocità", "Inclinazione"] },
	{ name: "Synchro", category: "Riscaldamento", image: "https://source.unsplash.com/400x300/?elliptical", settings: ["Tempo", "Velocità", "Inclinazione"] },

	/* 🟤 MOBILITÀ */
	{ name: "Estensioni Braccio/Gamba", category: "Mobilità", image: "https://source.unsplash.com/400x300/?stretching", settings: ["Serie", "Ripetizioni"] },
	{ name: "Retroversioni del bacino in quadrupedia", category: "Mobilità", image: "https://source.unsplash.com/400x300/?core", settings: ["Serie", "Ripetizioni"] },
	{ name: "Elevazioni con asta", category: "Mobilità", image: "https://source.unsplash.com/400x300/?shoulder-mobility", settings: ["Serie", "Ripetizioni"] },
	{ name: "Retropulsioni con asta", category: "Mobilità", image: "https://source.unsplash.com/400x300/?shoulder-exercise", settings: ["Serie", "Ripetizioni"] },
	{ name: "Affossamento cingolo scapolare", category: "Mobilità", image: "https://source.unsplash.com/400x300/?shoulder-mobility", settings: ["Serie", "Ripetizioni"] },
	{ name: "Retroposizione cingolo scapolare", category: "Mobilità", image: "https://source.unsplash.com/400x300/?posture-exercise", settings: ["Serie", "Ripetizioni"] },

	/* 🔵 PETTO */
	{ name: "Spinte su panca", category: "Pettorali", image: "https://source.unsplash.com/400x300/?bench-press", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Piegamenti sulle braccia", category: "Pettorali", image: "https://source.unsplash.com/400x300/?push-up", settings: ["Serie", "Ripetizioni"] },
	{ name: "Croci su panca", category: "Pettorali", image: "https://source.unsplash.com/400x300/?dumbbell-fly", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Pull-Over", category: "Pettorali", image: "https://source.unsplash.com/400x300/?pullover", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Croci al DAP", category: "Pettorali", image: "https://source.unsplash.com/400x300/?cable-fly", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Cross Over al DAP", category: "Pettorali", image: "https://source.unsplash.com/400x300/?crossover", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Chest Press", category: "Pettorali", image: "https://source.unsplash.com/400x300/?chest-press", settings: ["Peso", "Sedile", "Serie", "Ripetizioni"] },
	{ name: "Braccio addotto", category: "Pettorali", image: "https://source.unsplash.com/400x300/?chest-machine", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Braccio abdotto", category: "Pettorali", image: "https://source.unsplash.com/400x300/?chest-workout", settings: ["Peso", "Serie", "Ripetizioni"] },

	/* 🔵 SCHIENA */
	{ name: "Vertical Traction", category: "Schiena", image: "https://source.unsplash.com/400x300/?lat-machine", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Lat Machine", category: "Schiena", image: "https://source.unsplash.com/400x300/?lat-pulldown", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Lat Machine IMP: A-B-C-D-E", category: "Schiena", image: "https://source.unsplash.com/400x300/?lat-pulldown", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Easy Traction", category: "Schiena", image: "https://source.unsplash.com/400x300/?pull-up", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Low Row", category: "Schiena", image: "https://source.unsplash.com/400x300/?row-machine", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Pulley", category: "Schiena", image: "https://source.unsplash.com/400x300/?seated-row", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Rematore", category: "Schiena", image: "https://source.unsplash.com/400x300/?barbell-row", settings: ["Peso", "Serie", "Ripetizioni"] },

	/* 🟡 GAMBE */
	{ name: "Leg Press Pure Strenght", category: "Gambe", image: "https://source.unsplash.com/400x300/?leg-press", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Multipower", category: "Gambe", image: "https://source.unsplash.com/400x300/?smith-machine", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Panca HPX", category: "Gambe", image: "https://source.unsplash.com/400x300/?gym-machine", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Stacchi", category: "Gambe", image: "https://source.unsplash.com/400x300/?deadlift", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Abductor", category: "Gambe", image: "https://source.unsplash.com/400x300/?abductor-machine", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Glutei", category: "Gambe", image: "https://source.unsplash.com/400x300/?glute", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Hip Thrust", category: "Gambe", image: "https://source.unsplash.com/400x300/?hip-thrust", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Sollevamenti unilaterali", category: "Gambe", image: "https://source.unsplash.com/400x300/?lunges", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Calf Press", category: "Gambe", image: "https://source.unsplash.com/400x300/?calf-raise", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Leg Extension", category: "Gambe", image: "https://source.unsplash.com/400x300/?leg-extension", settings: ["Peso", "Sedile", "Rullo", "Posizione", "Serie", "Ripetizioni"] },
	{ name: "Leg Press", category: "Gambe", image: "https://source.unsplash.com/400x300/?leg-press", settings: ["Peso", "Sedile", "Serie", "Ripetizioni"] },
	{ name: "Leg Curl", category: "Gambe", image: "https://source.unsplash.com/400x300/?leg-curl", settings: ["Peso", "Sedile", "Rullo", "Posizione", "Serie", "Ripetizioni"] },

	/* 🟣 SPALLE */
	{ name: "Lento su panca", category: "Spalle", image: "https://source.unsplash.com/400x300/?shoulder-press", settings: ["Peso", "Inclinazione", "Serie", "Ripetizioni"] },
	{ name: "Spinte neutre", category: "Spalle", image: "https://source.unsplash.com/400x300/?dumbbell-press", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Alzate frontali", category: "Spalle", image: "https://source.unsplash.com/400x300/?front-raise", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Alzate laterali 45°", category: "Spalle", image: "https://source.unsplash.com/400x300/?rear-delt", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Tirate indietro", category: "Spalle", image: "https://source.unsplash.com/400x300/?rear-shoulder", settings: ["Peso", "Serie", "Ripetizioni"] },

	/* 🔴 BRACCIA */
	{ name: "French Press", category: "Braccia", image: "https://source.unsplash.com/400x300/?triceps", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Tricipiti al cavo busto 90°", category: "Braccia", image: "https://source.unsplash.com/400x300/?triceps-pushdown", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Easy Dip", category: "Braccia", image: "https://source.unsplash.com/400x300/?dip", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Bicipiti su panca 60°", category: "Braccia", image: "https://source.unsplash.com/400x300/?biceps", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Flessori presa neutra", category: "Braccia", image: "https://source.unsplash.com/400x300/?hammer-curl", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Tricipiti al cavo", category: "Braccia", image: "https://source.unsplash.com/400x300/?triceps-pushdown", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Bicipiti con manubri", category: "Braccia", image: "https://source.unsplash.com/400x300/?dumbbell-curl", settings: ["Peso", "Serie", "Ripetizioni"] },

	/* ⚫ ADDOME */
	{ name: "Crunch", category: "Addome", image: "https://source.unsplash.com/400x300/?crunch", settings: ["Inclinazione", "Serie", "Ripetizioni"] },
	{ name: "Crunch inverso", category: "Addome", image: "https://source.unsplash.com/400x300/?reverse-crunch", settings: ["Inclinazione", "Serie", "Ripetizioni"] },
	{ name: "Retrazioni dell'addome", category: "Addome", image: "https://source.unsplash.com/400x300/?core", settings: ["Serie", "Ripetizioni"] },
	{ name: "Estensioni su panca HPX", category: "Addome", image: "https://source.unsplash.com/400x300/?back-extension", settings: ["Peso", "Inclinazione", "Serie", "Ripetizioni"] },
	{ name: "Plank", category: "Addome", image: "https://source.unsplash.com/400x300/?plank-exercise", settings: ["Serie", "Tempo"] }

];


let activeCategory = "Tutti";
let scheda = JSON.parse(localStorage.getItem("scheda")) || [];

/* SAVE */
function saveScheda() {
	localStorage.setItem("scheda", JSON.stringify(scheda));
}

/* TAB */
function showTab(tab) {
	document.getElementById("eserciziTab").style.display = "none";
	document.getElementById("schedaTab").style.display = "none";

	document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));

	if (tab === "esercizi") {
		document.getElementById("eserciziTab").style.display = "block";
		document.getElementById("tabE").classList.add("active");
	} else {
		document.getElementById("schedaTab").style.display = "block";
		document.getElementById("tabS").classList.add("active");
	}
}

/* FILTRI */
function renderFilters() {
	const categories = ["Tutti", ...new Set(listaEsercizi.map(e => e.category))];
	const f = document.getElementById("filters");
	f.innerHTML = "";

	categories.forEach(cat => {
		const el = document.createElement("div");
		el.className = "filter " + (cat === activeCategory ? "active" : "");
		el.textContent = categoryLabels[cat];
		el.onclick = () => {
			activeCategory = cat;
			aggiungiEsercizi();
			renderFilters();
		};
		f.appendChild(el);
	});
}

/* ADD */
function addToScheda(i) {
	const ex = listaEsercizi[i];

	scheda.push({
		...ex,
		values: [],
		note: "",
		done: false,
		id: Date.now() + Math.random() // ID unico
	});

	saveScheda();
	renderScheda();
	showTab("scheda");
}


/** Aggiunta esercizi alla pagina  */
function aggiungiEsercizi() {
	for (const esercizio of listaEsercizi) {
		let templateCardEsercizio = `
		<div class="card-esercizio" data-categoria="${esercizio["category"]}">
			<span>${esercizio["name"]}</span>
			<div class="button accent">
			<svg viewBox="0 0 24 24">
					<path d="M12 5V19M5 12H19" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
			<img src="${esercizio["image"]}" alt="">
		</div>`
		document.querySelector(".lista-esercizi").insertAdjacentHTML("beforeend", templateCardEsercizio)
	}

}

/** Aggiunta filtri alla pagina  */
function aggiungiFiltri() {
	let listaFiltri = [...new Set(listaEsercizi.map(esercizio => esercizio.category))]
	for (const filtro of listaFiltri) {
		let templateFiltroNodo = $(`<div class="button" data-filtro="${filtro}">
			<span>${filtro}</span>
		</div>`).appendTo(".lista-filtri")
		templateFiltroNodo.on("click", function(){
			$(this).parent().children().removeClass("accent")
			$(this).addClass("accent")
			$(".lista-esercizi .card-esercizio").fadeOut()
			$(".lista-esercizi .card-esercizio[data-categoria='"+$(this).attr("data-filtro")+"']").fadeIn()
		})
	}
}

/* UPDATE */
function updateValue(i, f, v) {
	if (!scheda[i].values) scheda[i].values = [];
	scheda[i].values[f] = v;
	saveScheda();
}

function updateNote(i, v) {
	scheda[i].note = v;
	saveScheda();
}

/* RENDER SCHEDA */
function renderScheda() {
	const container = document.getElementById("scheda");
	container.innerHTML = "";

	scheda.forEach((ex, index) => {

		const values = ex.values || [];

		let html = "";
		ex.settings.forEach((s, i) => {
			html += `
<div class="label">${s}</div>
<input 
value="${values[i] || ''}" 
oninput="updateValue(${index},${i},this.value)"
${ex.done ? "disabled" : ""}
>
`;
		});

		const div = document.createElement("div");
		div.className = "card" + (ex.done ? " done" : "");

		div.innerHTML = `
<div style="display:flex;justify-content:space-between;align-items:flex-start;">
<span>${ex.name}</span>

<div class="actions ${ex.done ? 'disabled' : ''}">
<button class="btn" onclick="moveUp(${index})">
  <svg viewBox="0 0 24 24">
    <path d="M12 5L12 19M12 5L6 11M12 5L18 11"
      stroke="currentColor"
      stroke-width="2.8"
      stroke-linecap="round"/>
  </svg>
</button>

<button class="btn" onclick="moveDown(${index})">
  <svg viewBox="0 0 24 24">
    <path d="M12 19L12 5M12 19L6 13M12 19L18 13"
      stroke="currentColor"
      stroke-width="2.8"
      stroke-linecap="round"/>
  </svg>
</button>

<button class="btn" onclick="complete(${index})">
 <svg viewBox="0 0 24 24">
  <polyline points="6 12 10 16 18 8"
    fill="none"
    stroke="currentColor"
    stroke-width="2.8"
    stroke-linecap="round"
    stroke-linejoin="round"/>
</svg>
</button>

<button class="btn" onclick="remove(${index})">
  <svg viewBox="0 0 24 24">
    <path d="M6 6L18 18M6 18L18 6"
      stroke="currentColor"
      stroke-width="2.8"
      stroke-linecap="round"/>
  </svg>
</button>
</div>
</div>

<div class="img-box">
  <img src="${ex.image}" onerror="this.src='images/default.png'">
</div>

${html}

<div class="label">Note</div>
<textarea 
oninput="updateNote(${index},this.value)"
${ex.done ? "disabled" : ""}
>${ex.note || ""}</textarea>
`;

		container.appendChild(div);
	});
}

/* AZIONI */
function remove(i) {
	scheda.splice(i, 1);
	saveScheda();
	renderScheda();
}

function moveUp(i) {
	if (i > 0) {
		[scheda[i], scheda[i - 1]] = [scheda[i - 1], scheda[i]];
		saveScheda();
		renderScheda();
	}
}

function moveDown(i) {
	if (i < scheda.length - 1) {
		[scheda[i], scheda[i + 1]] = [scheda[i + 1], scheda[i]];
		saveScheda();
		renderScheda();
	}
}

function complete(i) {
	scheda[i].done = true;
	saveScheda();
	renderScheda();
}

function resetScheda() {
	scheda.forEach(e => e.done = false);
	saveScheda();
	renderScheda();
}

function resetDoneOnLoad() {
	scheda.forEach(e => e.done = false);
	saveScheda();
}

function addToSchedaByName(name) {
	const ex = listaEsercizi.find(e => e.name === name);

	scheda.push({
		...ex,
		values: [],
		note: "",
		done: false,
		id: Date.now() + Math.random()
	});

	saveScheda();
	renderScheda();
	showTab("scheda");
}

/* INIT */
//resetDoneOnLoad();
//renderFilters();

//renderScheda();
document.addEventListener("DOMContentLoaded", () => {
	aggiungiFiltri();
	aggiungiEsercizi();
})








