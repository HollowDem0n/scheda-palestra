/* ===== ESERCIZI ===== */

const listaEsercizi = [

	/* 🔥 RISCALDAMENTO */
	{ name: "Tapis Roulant", category: "Riscaldamento", image: "images/tapis.png", settings: ["Tempo", "Velocità", "Inclinazione"] },
	{ name: "Climb", category: "Riscaldamento", image: "images/climb.png", settings: ["Tempo", "Velocità", "Inclinazione"] },
	{ name: "Skill Run", category: "Riscaldamento", image: "images/skill.png", settings: ["Tempo", "Velocità", "Inclinazione"] },
	{ name: "Synchro", category: "Riscaldamento", image: "images/synchro.png", settings: ["Tempo", "Velocità", "Inclinazione"] },

	/* 🟤 MOBILITÀ */
	{ name: "Estensioni Braccio/Gamba", category: "Mobilità", image: "images/Estensioni Braccio-Gamba.png", settings: ["Serie", "Ripetizioni"] },
	{ name: "Retroversioni del bacino in quadrupedia", category: "Mobilità", image: "images/Retroversioni-bacino.png", settings: ["Serie", "Ripetizioni"] },
	{ name: "Elevazioni con asta", category: "Mobilità", image: "images/Elevazioni-asta.png", settings: ["Serie", "Ripetizioni"] },
	{ name: "Retropulsioni con asta", category: "Mobilità", image: "images/Retropulsioni-asta.png", settings: ["Serie", "Ripetizioni"] },
	{ name: "Affossamento cingolo scapolare", category: "Mobilità", image: "images/Flessioni-scapola.png", settings: ["Serie", "Ripetizioni"] },
	{ name: "Retroposizione cingolo scapolare", category: "Mobilità", image: "images/Retroposizione-scapolare.png", settings: ["Serie", "Ripetizioni"] },

	/* 🔵 PETTO */
	{ name: "Spinte su panca", category: "Pettorali", image: "images/Spinte-panca.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Piegamenti sulle braccia", category: "Pettorali", image: "images/Piegamenti-braccia.png", settings: ["Serie", "Ripetizioni"] },
	{ name: "Croci su panca", category: "Pettorali", image: "images/Croci-panca.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Pull-Over", category: "Pettorali", image: "images/Pull-Over.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Croci al DAP", category: "Pettorali", image: "images/CrocialDAP.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Cross Over al DAP", category: "Pettorali", image: "images/CrocialDAP.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Chest Press", category: "Pettorali", image: "images/chest-press.png", settings: ["Peso", "Sedile", "Serie", "Ripetizioni"] },
	{ name: "Braccio addotto", category: "Pettorali", image: "images/braccio-addotto.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Braccio abdotto", category: "Pettorali", image: "images/braccio-abdottopng.png", settings: ["Peso", "Serie", "Ripetizioni"] },

	/* 🔵 SCHIENA */
	{ name: "Vertical Traction", category: "Schiena", image: "images/vertical.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Lat Machine", category: "Schiena", image: "images/lat-machine.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Lat Machine IMP: A-B-C-D-E", category: "Schiena", image: "images/lat-machine.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Easy Traction", category: "Schiena", image: "images/Easy-Traction.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Low Row", category: "Schiena", image: "images/Low-Row.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Pulley", category: "Schiena", image: "images/Pulley.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Rematore", category: "Schiena", image: "images/Rematore.png", settings: ["Peso", "Serie", "Ripetizioni"] },

	/* 🟡 GAMBE */
	{ name: "Leg Press Pure Strenght", category: "Gambe", image: "images/pure-leg-press.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Multipower", category: "Gambe", image: "images/multipower.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Panca HPX", category: "Gambe", image: "images/panca-hpx.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Stacchi", category: "Gambe", image: "images/stacchi.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Abductor", category: "Gambe", image: "images/abductor.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Glutei", category: "Gambe", image: "images/glutei.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Hip Thrust", category: "Gambe", image: "images/hip-thrust.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Sollevamenti unilaterali", category: "Gambe", image: "images/sollevamenti-unilaterali.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Calf Press", category: "Gambe", image: "images/calf-press.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Leg Extension", category: "Gambe", image: "images/leg-extension.png", settings: ["Peso", "Sedile", "Rullo", "Posizione", "Serie", "Ripetizioni"] },
	{ name: "Leg Press", category: "Gambe", image: "images/leg-press.png", settings: ["Peso", "Sedile", "Serie", "Ripetizioni"] },
	{ name: "Leg Curl", category: "Gambe", image: "images/leg-curl.png", settings: ["Peso", "Sedile", "Rullo", "Posizione", "Serie", "Ripetizioni"] },

	/* 🟣 SPALLE */
	{ name: "Lento su panca", category: "Spalle", image: "images/lento-su-panca.png", settings: ["Peso", "Inclinazione", "Serie", "Ripetizioni"] },
	{ name: "Spinte neutre", category: "Spalle", image: "images/spinte-neutre.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Alzate frontali", category: "Spalle", image: "images/alzate-frontali.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Alzate laterali 45°", category: "Spalle", image: "images/alzate-laterali-45.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Tirate indietro", category: "Spalle", image: "images/tirate-indietro.png", settings: ["Peso", "Serie", "Ripetizioni"] },

	/* 🔴 BRACCIA */
	{ name: "French Press", category: "Braccia", image: "images/french-press.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Tricipiti al cavo busto 90°", category: "Braccia", image: "images/tricipiti- busto-90.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Easy Dip", category: "Braccia", image: "images/easy-dip.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Bicipiti su panca 60°", category: "Braccia", image: "images/bicipiti-panca-60.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Flessori presa neutra", category: "Braccia", image: "images/flessori-presa-neutra.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Tricipiti al cavo", category: "Braccia", image: "images/tricipiti-cavo.png", settings: ["Peso", "Serie", "Ripetizioni"] },
	{ name: "Bicipiti con manubri", category: "Braccia", image: "images/Bicipiti-manubri.png", settings: ["Peso", "Serie", "Ripetizioni"] },

	/* ⚫ ADDOME */
	{ name: "Crunch", category: "Addome", image: "images/crunch.png", settings: ["Inclinazione", "Serie", "Ripetizioni"] },
	{ name: "Crunch inverso", category: "Addome", image: "images/crunch-inverso.png", settings: ["Inclinazione", "Serie", "Ripetizioni"] },
	{ name: "Retrazioni dell'addome", category: "Addome", image: "images/retrazioni-addome.png", settings: ["Serie", "Ripetizioni"] },
	{ name: "Estensioni su panca HPX", category: "Addome", image: "images/estensioni-panca-hpx.png", settings: ["Peso", "Inclinazione", "Serie", "Ripetizioni"] },
	{ name: "Plank", category: "Addome", image: "images/plank.png", settings: ["Serie", "Tempo"] }

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
		let templateCardEsercizioNodo = $(`
		<div class="card-esercizio" data-categoria="${esercizio["category"]}">
			<span>${esercizio["name"]}</span>
			<div class="button accent">
			<svg viewBox="0 0 24 24">
					<path d="M12 5V19M5 12H19" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
			<img src="${esercizio["image"]}" alt="">
		</div>`).appendTo(".lista-esercizi")
	}
}

/** Aggiunta filtri alla pagina  */
function aggiungiFiltri() {
	let listaFiltri = ["Tutti", ...new Set(listaEsercizi.map(esercizio => esercizio.category))]

	// Per ogni filtro della listaFiltri...
	for (const filtro of listaFiltri) {

		// Creo la variabile templateFiltroNodo ccon classe bottone con il nome del filtro e lo mette dentro lista-filtri 
		let templateFiltroNodo = $(`<div class="button" data-filtro="${filtro}">
			<span>${filtro}</span>
		</div>`).appendTo(".lista-filtri")

		// Quando clicco il bottone del filtro...
		templateFiltroNodo.on("click", function () {

			// Selezione del filtro che abbiamo cliccato, ne selezioniamo il genitore (.lista-filtri) di cui poi selezioniamo tutti i figli (nodi flitro). A tutti i nodi filtro togliamo la classe accent per "spegnerli"
			$(this).parent().children().removeClass("accent")

			// "Accende" il filtro che abbiamo cliccato
			$(this).addClass("accent")

			// Creo la variabile "attributoDataFiltroCliccato" che è l'attiributo di "templateFiltroNodoCliccato"
			let attributoDataFiltroCliccato = $(this).attr("data-filtro")

			// Se attributoDataFiltroCliccato è uguale alla stringa Tutti...
			if (attributoDataFiltroCliccato == "Tutti") {

				// Mostra tutti gli esercizi di lista-esercizi
				$(".lista-esercizi .card-esercizio").fadeIn()
			}
			else {
				// Selezioniamo tutte le card-esercizio di lista-esercizio e li nascondiamo
				$(".lista-esercizi .card-esercizio").fadeOut()

				// Selezionaimo tutte le card-esercizio di lista esercizio che hanno l'attributo "data-categoria" che corrisponde a quello di "data-filtro" e la fa vedere
				$(".lista-esercizi .card-esercizio[data-categoria='" + attributoDataFiltroCliccato + "']").fadeIn()
				
			}

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








