const tarotCards = [
    // =========================
    // MAJOR ARCANA - 22 KAARTEN
    // =========================

    {
        name: "The Fool",
        meaning: "Nieuwe beginnen, avontuur, vrijheid en vertrouwen in wat komen gaat."
    },
    {
        name: "The Magician",
        meaning: "Creativiteit, mogelijkheden, zelfvertrouwen en het gebruiken van je talenten."
    },
    {
        name: "The High Priestess",
        meaning: "Intuïtie, geheimen, innerlijke wijsheid en luisteren naar je gevoel."
    },
    {
        name: "The Empress",
        meaning: "Groei, liefde, verzorging, creativiteit en overvloed."
    },
    {
        name: "The Emperor",
        meaning: "Structuur, verantwoordelijkheid, leiderschap en stabiliteit."
    },
    {
        name: "The Hierophant",
        meaning: "Traditie, regels, leren, geloof en advies van anderen."
    },
    {
        name: "The Lovers",
        meaning: "Liefde, verbinding, keuzes en harmonie tussen mensen."
    },
    {
        name: "The Chariot",
        meaning: "Wilskracht, vooruitgang, controle en vastberadenheid."
    },
    {
        name: "Strength",
        meaning: "Innerlijke kracht, moed, geduld en rustig omgaan met moeilijke situaties."
    },
    {
        name: "The Hermit",
        meaning: "Rust, nadenken, zelfkennis en tijd nemen voor jezelf."
    },
    {
        name: "Wheel of Fortune",
        meaning: "Verandering, nieuwe kansen, een nieuwe fase en veranderende omstandigheden."
    },
    {
        name: "Justice",
        meaning: "Eerlijkheid, verantwoordelijkheid, balans en gevolgen van keuzes."
    },
    {
        name: "The Hanged Man",
        meaning: "Een andere kijk op een situatie, geduld en tijdelijk iets loslaten."
    },
    {
        name: "Death",
        meaning: "Het einde van een fase en het begin van iets nieuws."
    },
    {
        name: "Temperance",
        meaning: "Balans, geduld, harmonie en het vinden van een middenweg."
    },
    {
        name: "The Devil",
        meaning: "Verleiding, vastzitten, ongezonde gewoontes en materiële verlangens."
    },
    {
        name: "The Tower",
        meaning: "Plotselinge verandering, een onverwachte gebeurtenis en oude structuren die verdwijnen."
    },
    {
        name: "The Star",
        meaning: "Hoop, inspiratie, vertrouwen en een positieve nieuwe richting."
    },
    {
        name: "The Moon",
        meaning: "Mysterie, onzekerheid, dromen, emoties en vertrouwen op je intuïtie."
    },
    {
        name: "The Sun",
        meaning: "Geluk, succes, energie, duidelijkheid en positieve gebeurtenissen."
    },
    {
        name: "Judgement",
        meaning: "Reflectie, een belangrijke beslissing, vergeving en een nieuwe start."
    },
    {
        name: "The World",
        meaning: "Voltooiing, succes, groei en het afsluiten van een belangrijke fase."
    },

    // =========================
    // WANDS - 14 KAARTEN
    // =========================

    {
        name: "Ace of Wands",
        meaning: "Nieuwe energie, inspiratie, enthousiasme en een nieuw idee."
    },
    {
        name: "Two of Wands",
        meaning: "Plannen maken, vooruitkijken en nadenken over nieuwe mogelijkheden."
    },
    {
        name: "Three of Wands",
        meaning: "Vooruitgang, groei en wachten op de resultaten van je plannen."
    },
    {
        name: "Four of Wands",
        meaning: "Feest, stabiliteit, vriendschap en een gelukkige gebeurtenis."
    },
    {
        name: "Five of Wands",
        meaning: "Concurrentie, meningsverschillen en verschillende ideeën."
    },
    {
        name: "Six of Wands",
        meaning: "Succes, erkenning, zelfvertrouwen en trots."
    },
    {
        name: "Seven of Wands",
        meaning: "Voor jezelf opkomen, grenzen stellen en volhouden."
    },
    {
        name: "Eight of Wands",
        meaning: "Snelle ontwikkelingen, nieuws, beweging en vooruitgang."
    },
    {
        name: "Nine of Wands",
        meaning: "Doorzetten, voorzichtigheid en sterk blijven ondanks moeilijkheden."
    },
    {
        name: "Ten of Wands",
        meaning: "Veel verantwoordelijkheid, druk en te veel taken tegelijk."
    },
    {
        name: "Page of Wands",
        meaning: "Nieuwsgierigheid, enthousiasme, avontuur en nieuwe ideeën."
    },
    {
        name: "Knight of Wands",
        meaning: "Passie, actie, avontuur en snel ergens voor gaan."
    },
    {
        name: "Queen of Wands",
        meaning: "Zelfvertrouwen, warmte, onafhankelijkheid en creativiteit."
    },
    {
        name: "King of Wands",
        meaning: "Leiderschap, visie, ambitie en vertrouwen."
    },

    // =========================
    // CUPS - 14 KAARTEN
    // =========================

    {
        name: "Ace of Cups",
        meaning: "Nieuwe emoties, liefde, geluk en emotionele groei."
    },
    {
        name: "Two of Cups",
        meaning: "Verbinding, liefde, vriendschap en wederzijds begrip."
    },
    {
        name: "Three of Cups",
        meaning: "Vriendschap, feest, gezelligheid en samen zijn."
    },
    {
        name: "Four of Cups",
        meaning: "Ontevredenheid, verveling en kansen die je misschien niet ziet."
    },
    {
        name: "Five of Cups",
        meaning: "Teleurstelling, verdriet en focussen op wat verloren is gegaan."
    },
    {
        name: "Six of Cups",
        meaning: "Herinneringen, nostalgie, jeugd en mensen uit het verleden."
    },
    {
        name: "Seven of Cups",
        meaning: "Veel mogelijkheden, dromen en moeite hebben met kiezen."
    },
    {
        name: "Eight of Cups",
        meaning: "Iets achterlaten en op zoek gaan naar een nieuwe richting."
    },
    {
        name: "Nine of Cups",
        meaning: "Tevredenheid, geluk en wensen die uitkomen."
    },
    {
        name: "Ten of Cups",
        meaning: "Familie, liefde, harmonie en emotioneel geluk."
    },
    {
        name: "Page of Cups",
        meaning: "Gevoeligheid, creativiteit, intuïtie en onverwacht nieuws."
    },
    {
        name: "Knight of Cups",
        meaning: "Romantiek, gevoelens, idealen en een aanbod."
    },
    {
        name: "Queen of Cups",
        meaning: "Empathie, zorgzaamheid, intuïtie en emotionele wijsheid."
    },
    {
        name: "King of Cups",
        meaning: "Emotionele controle, wijsheid, begrip en kalmte."
    },

    // =========================
    // SWORDS - 14 KAARTEN
    // =========================

    {
        name: "Ace of Swords",
        meaning: "Duidelijkheid, waarheid, nieuwe ideeën en een belangrijke beslissing."
    },
    {
        name: "Two of Swords",
        meaning: "Twijfel, een moeilijke keuze en iets niet willen zien."
    },
    {
        name: "Three of Swords",
        meaning: "Verdriet, teleurstelling en pijnlijke emoties."
    },
    {
        name: "Four of Swords",
        meaning: "Rust, herstel, pauze en tijd nemen om na te denken."
    },
    {
        name: "Five of Swords",
        meaning: "Conflict, spanning en winnen ten koste van anderen."
    },
    {
        name: "Six of Swords",
        meaning: "Een moeilijke situatie achter je laten en naar rustiger water gaan."
    },
    {
        name: "Seven of Swords",
        meaning: "Geheimen, voorzichtigheid, onafhankelijkheid en iets achterhouden."
    },
    {
        name: "Eight of Swords",
        meaning: "Je beperkt voelen, angst en het idee dat je geen uitweg hebt."
    },
    {
        name: "Nine of Swords",
        meaning: "Zorgen, stress, piekeren en angst."
    },
    {
        name: "Ten of Swords",
        meaning: "Een moeilijk einde en het afsluiten van een zware periode."
    },
    {
        name: "Page of Swords",
        meaning: "Nieuwsgierigheid, communicatie, leren en alert zijn."
    },
    {
        name: "Knight of Swords",
        meaning: "Snelheid, vastberadenheid, directe communicatie en actie."
    },
    {
        name: "Queen of Swords",
        meaning: "Onafhankelijkheid, eerlijkheid, duidelijk denken en grenzen."
    },
    {
        name: "King of Swords",
        meaning: "Logica, wijsheid, eerlijkheid en rationele beslissingen."
    },

    // =========================
    // PENTACLES - 14 KAARTEN
    // =========================

    {
        name: "Ace of Pentacles",
        meaning: "Een nieuwe kans, financiële groei, werk en stabiliteit."
    },
    {
        name: "Two of Pentacles",
        meaning: "Balans zoeken, meerdere dingen tegelijk regelen en flexibiliteit."
    },
    {
        name: "Three of Pentacles",
        meaning: "Samenwerken, leren, talent en goed werk."
    },
    {
        name: "Four of Pentacles",
        meaning: "Vasthouden aan zekerheid, voorzichtigheid en controle."
    },
    {
        name: "Five of Pentacles",
        meaning: "Moeilijkheden, onzekerheid en het gevoel er alleen voor te staan."
    },
    {
        name: "Six of Pentacles",
        meaning: "Geven, ontvangen, hulp en vrijgevigheid."
    },
    {
        name: "Seven of Pentacles",
        meaning: "Geduld, hard werken en wachten tot je inspanningen resultaat geven."
    },
    {
        name: "Eight of Pentacles",
        meaning: "Oefenen, leren, hard werken en beter worden in iets."
    },
    {
        name: "Nine of Pentacles",
        meaning: "Onafhankelijkheid, succes, comfort en genieten van je resultaten."
    },
    {
        name: "Ten of Pentacles",
        meaning: "Familie, zekerheid, stabiliteit en langdurige rijkdom."
    },
    {
        name: "Page of Pentacles",
        meaning: "Leren, ambitie, nieuwe kansen en praktische plannen."
    },
    {
        name: "Knight of Pentacles",
        meaning: "Geduld, betrouwbaarheid, hard werken en stap voor stap vooruitgaan."
    },
    {
        name: "Queen of Pentacles",
        meaning: "Zorgzaamheid, stabiliteit, praktisch denken en comfort."
    },
    {
        name: "King of Pentacles",
        meaning: "Succes, stabiliteit, verantwoordelijkheid en materiële zekerheid."
    }
];


// =====================================
// ELEMENTEN VAN DE PAGINA
// =====================================

const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");


// =====================================
// KAARTEN WEERGEVEN
// =====================================

function showCards(cards) {
    cardContainer.innerHTML = "";

    if (cards.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    cards.forEach(card => {
        const cardElement = document.createElement("div");

        cardElement.className = "tarot-card";

        cardElement.innerHTML = `
            <h2>${card.name}</h2>

            <div class="card-line"></div>

            <p>${card.meaning}</p>
        `;

        cardContainer.appendChild(cardElement);
    });
}


// =====================================
// ZOEKEN
// =====================================

searchInput.addEventListener("input", function () {

    const search = this.value.toLowerCase().trim();

    // Als de zoekbalk leeg is
    if (search === "") {
        cardContainer.innerHTML = "";
        noResults.style.display = "none";
        return;
    }

    // Zoek naar kaarten die overeenkomen
    const results = tarotCards.filter(card =>
        card.name.toLowerCase().includes(search)
    );

    showCards(results);
});