/*
 * Zelfstandige versie: geen analytics, API-aanroepen, accounts, cookies of externe assets.
 * Voortgang bestaat alleen in het geheugen van de open browser en wordt niet opgeslagen.
 */
const tiles = [
  { id: 0, title: "Startpunt", short: "Jouw route", category: "Start", tone: "ink", symbol: "◎", mission: "Neem even de tijd om je route te bekijken.", detail: "Dit bord is een praktische kapstok voor je eerste dagen. Land op een vak, voer de korte actie uit en zet je pion verder.", action: "Ik ben klaar voor mijn route", image: "./assets/hero.jpg" },
  { id: 1, title: "Ontmoet je team", short: "Voorstellen", category: "Verbinden", tone: "sun", symbol: "♧", mission: "Plan drie korte kennismakingen.", detail: "Vraag je leidinggevende of buddy welke collega’s belangrijk zijn voor je werk. Neem één gerichte vraag mee naar ieder gesprek.", action: "Kennismakingen ingepland", image: "./assets/team.jpg" },
  { id: 2, title: "Jouw rol in één alinea", short: "Rol & richting", category: "Koers", tone: "sky", symbol: "⌁", mission: "Vat je rol, eerste prioriteit en aanspreekpunt samen.", detail: "Vraag wat er in je eerste week verwacht wordt, welke besluiten je zelf neemt en waar je om hulp vraagt.", action: "Mijn startafspraak is helder" },
  { id: 3, title: "Code of conduct", short: "Integer handelen", category: "Gedrag", tone: "leaf", symbol: "♡", mission: "Kies wat je doet als een opmerking in een teamchat iemand onveilig of buitengesloten kan laten voelen.", detail: "Een gedragscode maakt duidelijk hoe je respectvol, integer en professioneel samenwerkt. Ken de lokale meldroute.", quiz: { prompt: "Wat is de meest passende eerste stap?", options: [ ["Ik zwijg, want ik wil geen gedoe veroorzaken.", false, "Wegkijken kan het probleem laten voortbestaan."], ["Ik benoem het zorgvuldig of zoek steun via de afgesproken route.", true, "Juist. Spreek je uit op een passende manier en gebruik de lokale meld- of aanspreekroute."], ["Ik deel een screenshot buiten het team om anderen te waarschuwen.", false, "Deel gevoelige informatie niet onnodig; gebruik de juiste interne route."] ] } },
  { id: 4, title: "Samen werken, samen ruimte", short: "Gedragsregels", category: "Respect", tone: "coral", symbol: "♡", mission: "Check de afspraken over samenwerken en bereikbaarheid.", detail: "Bekijk hoe je team vergadert, feedback geeft en hybride samenwerkt. Bespreek ook wat je doet wanneer omgangsvormen niet goed voelen.", action: "Teamafspraken bekeken" },
  { id: 5, title: "Gegevens op de juiste plek", short: "Privacy", category: "Zorgvuldig", tone: "ink", symbol: "▣", mission: "Je werkt met gegevens buiten kantoor. Wat doe je?", detail: "Behandel persoonsgegevens, bedrijfsinformatie en toegangsgegevens zorgvuldig. Gebruik uitsluitend door je werkgever goedgekeurde systemen.", quiz: { prompt: "Kies de veiligste werkwijze.", options: [ ["Ik stuur bestanden naar mijn privé-mail om thuis verder te werken.", false, "Privé-mail is meestal geen goedgekeurde werkomgeving voor gevoelige data."], ["Ik gebruik alleen de goedgekeurde werkomgeving of vraag om een veilige optie.", true, "Juist. Gebruik goedgekeurde systemen en vraag het na wanneer er geen veilige route is."], ["Ik maak een foto van mijn scherm voor later.", false, "Een foto kan gevoelige gegevens onnodig verspreiden."] ] } },
  { id: 6, title: "Jouw leerpas", short: "E-learning", category: "Leren", tone: "sky", symbol: "▷", mission: "Open je leeromgeving en plan de verplichte modules.", detail: "Maak onderscheid tussen verplichte introductiemodules, rolgebonden trainingen en nuttige verdiepingen. Plan tijd in je agenda.", action: "Leerroute gepland" },
  { id: 7, title: "Digitale werkplek", short: "Accounts & tools", category: "Toegang", tone: "sun", symbol: "◉", mission: "Controleer je accounts, authenticator en toegangsrechten.", detail: "Zet waar gevraagd meervoudige verificatie aan, gebruik unieke wachtwoorden en vraag alleen toegang aan die je nodig hebt.", action: "Mijn digitale basis staat" },
  { id: 8, title: "E-mail met jouw handtekening", short: "Handtekening", category: "Herkenbaar", tone: "coral", symbol: "✉", mission: "Maak je e-mailhandtekening met de goedgekeurde gegevens.", detail: "Gebruik de interne sjabloon. Controleer naam, functie, team en werkcontactgegevens voordat je de handtekening activeert.", action: "Handtekening gecontroleerd" },
  { id: 9, title: "Documenten in orde", short: "PDF & ondertekenen", category: "Vastleggen", tone: "leaf", symbol: "▱", mission: "Vind de aangewezen route voor PDF’s en digitale handtekeningen.", detail: "Controleer versie, ontvanger en bevoegdheid vóór je een document ondertekent of verstuurt.", action: "Documentroute gevonden" },
  { id: 10, title: "Klik niet te snel", short: "Phishingcheck", category: "Alert", tone: "ink", symbol: "◇", mission: "Je ontvangt een onverwachte mail die direct om inloggen via een link vraagt. Wat doe je?", detail: "Verdachte berichten gebruiken vaak urgentie en onverwachte verzoeken. Open niet zomaar links of bijlagen.", quiz: { prompt: "Kies je volgende stap.", options: [ ["Ik klik snel, want de mail dreigt dat mijn account blokkeert.", false, "Urgentie is een bekende tactiek. Neem afstand en controleer eerst."], ["Ik controleer via een vertrouwd kanaal en meld het bericht volgens de interne route.", true, "Juist. Gebruik een bekende portal of IT-route en meld het verdachte bericht."], ["Ik stuur de mail door naar iedereen met de waarschuwing om erop te klikken.", false, "Verspreid een verdacht bericht niet verder; meld het gecontroleerd." ] ] } },
  { id: 11, title: "Veilig werken", short: "Zie · stop · meld", category: "Veiligheid", tone: "coral", symbol: "△", mission: "Je ziet een losliggende kabel in een looproute. Wat is in het algemeen de juiste volgorde?", detail: "Leer de lokale risico’s, vluchtwegen, EHBO- en verzamelpunten kennen. Meld incidenten en bijna-incidenten volgens de werkafspraken.", critical: true, image: "./assets/safety.jpg", quiz: { prompt: "Kies de veiligste eerste reactie.", options: [ ["Ik stap eromheen; iemand anders ziet het vast ook wel.", false, "Een zichtbaar risico kan alsnog tot een ongeval leiden."], ["Ik stop, houd afstand of maak veilig waar dat kan, en meld het via de aangewezen route.", true, "Juist. Volg altijd de lokale veiligheidsprocedure en roep hulp in als je de situatie niet veilig kunt beheersen."], ["Ik los het direct zelf op, ook als ik niet weet of de kabel onder spanning staat.", false, "Neem geen onnodig risico. Gebruik je bevoegdheid en de lokale escalatieroute." ] ] } },
  { id: 12, title: "Als er iets gebeurt", short: "Nood & onveilig", category: "Handelen", tone: "sun", symbol: "△", mission: "Sla de noodinformatie van jouw locatie op.", detail: "Vervang dit vak vóór gebruik door lokale nummers, verzamelpunt, BHV/EHBO-contact en ontruimingsinstructie. Bij acuut gevaar volg je de noodprocedure van de werkgever.", action: "Lokale noodinformatie gevonden" },
  { id: 13, title: "Werkplek die meewerkt", short: "Ergonomie", category: "Welzijn", tone: "leaf", symbol: "◌", mission: "Stel je werkplek af en weet bij wie je advies vraagt.", detail: "Neem tijd voor scherm, stoel, verlichting en afwisseling. Vraag om ondersteuning wanneer je klachten hebt of je werk verandert.", action: "Werkplek gecheckt" },
  { id: 14, title: "Vragen mogen vroeg", short: "Buddy & feedback", category: "Samen", tone: "sky", symbol: "?", mission: "Spreek af met wie je vragen, feedback en zorgen bespreekt.", detail: "Een buddy, leidinggevende, HR-contact of vertrouwenspersoon kan ieder een andere rol hebben. Vraag wie wat oppakt.", action: "Mijn hulplijnen zijn helder" },
  { id: 15, title: "Eerste week, echt geland", short: "Terugblik", category: "Reflectie", tone: "coral", symbol: "▣", mission: "Kies één inzicht, één open vraag en één volgende stap.", detail: "Bespreek wat al duidelijk is, wat nog ontbreekt en welke taak je samen prioriteit geeft. Pas de route aan je rol en werkplek aan.", action: "Mijn weekreflectie staat", image: "./assets/milestones.jpg" },
  { id: 16, title: "Jouw 30-dagenkompas", short: "Vooruitkijken", category: "Verankeren", tone: "sun", symbol: "◉", mission: "Plan een check-in voor je eerste maand.", detail: "Leg een kort gesprek vast over doelen, samenwerking, werkbelasting en leerbehoeften. Onboarding blijft daarmee een doorlopende dialoog.", action: "30-dagencheck gepland" },
  { id: 17, title: "Je bent wegwijs", short: "Finish", category: "Finish", tone: "ink", symbol: "⚑", mission: "Je hebt de eerste route verkend. Nu begint het echte samenwerken.", detail: "Bewaar je open vragen en kom terug naar deze route wanneer een onderwerp opnieuw relevant wordt. Goede onboarding is nooit een eenmalig moment.", action: "Vier je eerste mijlpaal" }
];

let position = 0;
let activeId = 0;
let selectedChoice = null;
let lastRoll = null;
const completed = new Set();

const app = document.querySelector("#app");
const pad = (number) => String(number).padStart(2, "0");
const escaped = (value) => String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));

function activeTile() { return tiles[activeId]; }
function canRoll() { return position === 0 || completed.has(position); }
function progress() { return Math.round((Array.from(completed).filter((id) => id > 0).length / 17) * 100); }

function boardHtml() {
  return tiles.map((tile) => {
    const current = tile.id === position ? " current" : "";
    const active = tile.id === activeId ? " active" : "";
    const done = completed.has(tile.id) ? " done" : "";
    return `<button class="board-tile tone-${tile.tone}${current}${active}${done}" data-action="open" data-id="${tile.id}" aria-label="Vak ${tile.id}: ${escaped(tile.title)}${tile.id === position ? ', huidige positie' : ''}">
      <span class="tile-number">${pad(tile.id)}</span><span class="tile-symbol">${tile.symbol}</span><strong>${escaped(tile.short)}</strong>${completed.has(tile.id) ? '<i>✓</i>' : ''}${tile.id === position ? '<img class="pion" src="./assets/logo.png" alt="" />' : ''}
    </button>`;
  }).join("");
}

function quizHtml(tile) {
  if (!tile.quiz) return "";
  const choices = tile.quiz.options.map(([text, correct, note], index) => {
    const chosen = selectedChoice === index;
    const state = chosen ? (correct ? " correct" : " incorrect") : "";
    return `<button class="choice${state}" data-action="choice" data-id="${index}" ${completed.has(tile.id) ? "disabled" : ""}><span>${String.fromCharCode(65 + index)}</span><b>${escaped(text)}</b>${chosen ? `<small>${escaped(note)}</small>` : ""}</button>`;
  }).join("");
  const selected = selectedChoice === null ? null : tile.quiz.options[selectedChoice];
  const retry = selected && !selected[1] && !completed.has(tile.id) ? '<p class="retry">Nog niet helemaal. Kies opnieuw; je krijgt direct uitleg.</p>' : "";
  return `<div class="quiz"><p>${escaped(tile.quiz.prompt)}</p>${choices}${retry}</div>`;
}

function missionHtml() {
  const tile = activeTile();
  const done = completed.has(tile.id);
  const selected = selectedChoice === null || !tile.quiz ? null : tile.quiz.options[selectedChoice];
  const actionText = tile.quiz ? (done ? "Kennischeck afgerond" : "Antwoord vastleggen") : (done ? "Vak afgerond" : tile.action);
  const disabled = tile.quiz ? (!selected || !selected[1] || done) : done;
  return `<section class="mission tone-${tile.tone}" aria-live="polite">
    <div class="mission-meta"><span>Vak ${pad(tile.id)} · ${escaped(tile.category)}</span>${tile.critical ? '<em>△ Eerst begrijpen</em>' : ''}${done ? '<em class="done-label">✓ Afgerond</em>' : ''}</div>
    <div class="mission-inner"><div class="mission-copy"><div class="title-line"><span class="mission-symbol">${tile.symbol}</span><div><small>Jouw opdracht</small><h3>${escaped(tile.title)}</h3></div></div>
      <p class="mission-lead">${escaped(tile.mission)}</p><p class="mission-detail">${escaped(tile.detail)}</p>${quizHtml(tile)}
      <div class="mission-footer"><button class="primary" data-action="complete" ${disabled ? "disabled" : ""}>${escaped(actionText)} <span>✓</span></button>${activeId !== position && !done ? '<span class="lookahead">Je bekijkt dit vak vooruit.</span>' : ''}</div>
    </div>${tile.image ? `<img class="mission-image" src="${tile.image}" alt="" />` : ""}</div></section>`;
}

function render() {
  const current = tiles[position];
  const isReady = canRoll();
  app.innerHTML = `<main class="paper-app">
    <header><a class="brand" href="#top"><img src="./assets/logo.png" alt="Gans die een spelroute vormt" /><span><strong>De eerste route</strong><small>Onboarding ganzenbord</small></span></a><span class="status-note"><i></i>Algemeen concept · maak het eigen</span></header>
    <section class="hero" id="top"><div class="hero-copy"><p class="eyebrow">✦ Speels, helder en doelgericht</p><h1>Je eerste werkweken, <em>stap voor stap.</em></h1><p>Een interactieve ganzenbordvariant die nieuwe medewerkers langs de mensen, afspraken en gewoonten leidt die een goede start ondersteunen.</p><a class="primary link-button" href="#board">Verken het spelbord <span>→</span></a><div class="numbers"><div><b>18</b><small>praktische vakken</small></div><div><b>4</b><small>korte kennischecks</small></div><div><b>1</b><small>eigen tempo</small></div></div></div><div class="hero-art"><img src="./assets/hero.jpg" alt="Illustratie van een onboarding-bordspel met een ganzenpion" /><span>Start hier</span><strong>Leer. Vraag. Doe.</strong></div></section>
    <section class="how"><div><p class="eyebrow ink">Eenvoudige spelwijze</p><h2>Een worp brengt je naar een opdracht.</h2></div><div class="steps"><div><b>01</b><strong>Gooi</strong><small>Land op een leerhalte.</small></div><div><b>02</b><strong>Doe</strong><small>Voltooi de actie of check.</small></div><div><b>03</b><strong>Ga</strong><small>Zet de pion weer verder.</small></div></div></section>
    <section class="game" id="board"><aside class="sidebar"><p class="eyebrow">Jouw spelpositie</p><div class="position"><span><img src="./assets/logo.png" alt="" /></span><div><small>Je staat op</small><b>vak ${pad(position)}</b><em>${escaped(current.short)}</em></div></div><div class="progress"><div><span>Route voortgang</span><b>${progress()}%</b></div><i><span style="width:${progress()}%"></span></i><small>${Array.from(completed).filter((id) => id > 0).length} van 17 vakken afgerond</small></div><div class="dice"><div><b>${lastRoll ?? "?"}</b><small>${lastRoll ? "laatste worp" : "dobbelsteen"}</small></div><button class="roll" data-action="roll" ${!isReady ? "disabled" : ""}>${isReady ? "Gooi de dobbelsteen" : "Rond eerst dit vak af"} <span>➤</span></button><p><i class="${isReady ? "ready" : "wait"}"></i>${isReady ? "Klaar voor de volgende worp" : "Rond je huidige vak af"}</p></div><button class="reset" data-action="reset">↻ Opnieuw beginnen</button></aside>
      <div class="board-wrap"><div class="board-heading"><div><p class="eyebrow ink">Het spelbord</p><h2>Kies een halte of laat de dobbelsteen beslissen.</h2></div><p>Je kunt elk vak openen om vooruit te kijken. Je pion blijft op de halte van je laatste worp.</p></div><div class="board-grid">${boardHtml()}</div>${missionHtml()}</div></section>
    <section class="topics"><div><p class="eyebrow ink">In de gereedschapskist</p><h2>Niet alleen een spel. Een start die blijft hangen.</h2><p>Gebruik de vakken als gesprekstarter met een buddy of leidinggevende. Voeg bedrijfsnamen, lokale links en teamafspraken toe voordat je dit concept gebruikt.</p></div><div class="topic-list"><span>♧ Team & rol</span><span>♡ Gedrag & inclusie</span><span>▷ Leren & tools</span><span>△ Veiligheid & nood</span><span>◇ Digitale zorgvuldigheid</span><span>◉ Reflectie & vervolg</span></div></section>
    <section class="notice"><span>▣</span><div><p class="eyebrow ink">Verantwoording</p><h2>Algemeen uitgangspunt, altijd lokaal aan te vullen.</h2><p>Vul vóór gebruik onder andere noodnummers, vluchtweg, BHV/EHBO-contact, gedragscode, privacybeleid, systemen en interne leermiddelen aan. Deze zelfstandige versie verstuurt geen analytics, roept geen externe API aan en slaat geen spelvoortgang op.</p></div></section>
    <footer><span class="brand"><img src="./assets/logo.png" alt="" /><strong>De eerste route</strong></span><p>Zelfstandige, statische versie voor eigen beheer.</p><a href="#top">Terug naar start →</a></footer>
  </main>`;
}

app.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button || button.disabled) return;
  const action = button.dataset.action;
  if (action === "open") { activeId = Number(button.dataset.id); selectedChoice = null; }
  if (action === "choice") { selectedChoice = Number(button.dataset.id); }
  if (action === "complete") { completed.add(activeId); }
  if (action === "roll" && canRoll()) { lastRoll = Math.floor(Math.random() * 3) + 1; position = Math.min(position + lastRoll, tiles.length - 1); activeId = position; selectedChoice = null; }
  if (action === "reset") { position = 0; activeId = 0; selectedChoice = null; lastRoll = null; completed.clear(); }
  render();
});

render();
