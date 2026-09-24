const tarotCards = [

    // =========================
    // MAJOR ARCANA
    // =========================

    {
        name: "The Fool",
        upright: "Nieuwe beginnen, avontuur, vrijheid, spontaniteit en vertrouwen in wat komen gaat.",
        reversed: "Roekeloosheid, impulsieve keuzes, gebrek aan richting of bang zijn om iets nieuws te proberen."
    },

    {
        name: "The Magician",
        upright: "Creativiteit, mogelijkheden, zelfvertrouwen en het gebruiken van je talenten.",
        reversed: "Onzekerheid, ongebruikte talenten, manipulatie of kansen niet goed benutten."
    },

    {
        name: "The High Priestess",
        upright: "Intuïtie, geheimen, innerlijke wijsheid en luisteren naar je gevoel.",
        reversed: "Je intuïtie negeren, verborgen informatie, verwarring of te veel luisteren naar anderen."
    },

    {
        name: "The Empress",
        upright: "Groei, liefde, verzorging, creativiteit en overvloed.",
        reversed: "Gebrek aan zelfzorg, creatieve blokkade, afhankelijkheid of te veel zorgen voor anderen."
    },

    {
        name: "The Emperor",
        upright: "Structuur, verantwoordelijkheid, leiderschap, discipline en stabiliteit.",
        reversed: "Te veel controle, koppigheid, machtsproblemen of gebrek aan structuur."
    },

    {
        name: "The Hierophant",
        upright: "Traditie, regels, leren, geloof, kennis en advies van anderen.",
        reversed: "Regels in twijfel trekken, onafhankelijk denken, rebellie of een eigen pad kiezen."
    },

    {
        name: "The Lovers",
        upright: "Liefde, verbinding, keuzes, harmonie en sterke relaties.",
        reversed: "Onenigheid, moeilijke keuzes, misverstanden of een gebrek aan verbinding."
    },

    {
        name: "The Chariot",
        upright: "Wilskracht, vooruitgang, controle, vastberadenheid en succes door doorzettingsvermogen.",
        reversed: "Gebrek aan richting, verlies van controle, twijfel of te weinig vooruitgang."
    },

    {
        name: "Strength",
        upright: "Innerlijke kracht, moed, geduld, vertrouwen en rustig omgaan met moeilijke situaties.",
        reversed: "Onzekerheid, weinig zelfvertrouwen, twijfel aan jezelf of moeite om rustig te blijven."
    },

    {
        name: "The Hermit",
        upright: "Rust, nadenken, zelfkennis, wijsheid en tijd nemen voor jezelf.",
        reversed: "Te veel afzondering, eenzaamheid, jezelf afsluiten of advies van anderen negeren."
    },

    {
        name: "Wheel of Fortune",
        upright: "Verandering, nieuwe kansen, een nieuwe fase en veranderende omstandigheden.",
        reversed: "Tegenslag, ongewenste veranderingen, vastzitten of het gevoel geen controle te hebben."
    },

    {
        name: "Justice",
        upright: "Eerlijkheid, verantwoordelijkheid, balans en gevolgen van keuzes.",
        reversed: "Oneerlijkheid, gebrek aan verantwoordelijkheid, verkeerde beoordeling of onbalans."
    },

    {
        name: "The Hanged Man",
        upright: "Een andere kijk op een situatie, geduld en tijdelijk iets loslaten.",
        reversed: "Vastzitten, weerstand tegen verandering, uitstel of moeite om iets los te laten."
    },

    {
        name: "Death",
        upright: "Het einde van een fase, verandering, loslaten en het begin van iets nieuws.",
        reversed: "Moeite met verandering, vasthouden aan het verleden of een verandering uitstellen."
    },

    {
        name: "Temperance",
        upright: "Balans, geduld, harmonie en het vinden van een middenweg.",
        reversed: "Onbalans, ongeduld, te veel van iets of moeite om verschillende dingen te combineren."
    },

    {
        name: "The Devil",
        upright: "Verleiding, vastzitten, ongezonde gewoontes en materiële verlangens.",
        reversed: "Loskomen van beperkingen, slechte gewoontes doorbreken en meer vrijheid krijgen."
    },

    {
        name: "The Tower",
        upright: "Plotselinge verandering, onverwachte gebeurtenissen en oude structuren die verdwijnen.",
        reversed: "Verandering proberen te vermijden, angst voor verandering of een moeilijke verandering die langzaam plaatsvindt."
    },

    {
        name: "The Star",
        upright: "Hoop, inspiratie, vertrouwen, rust en een positieve nieuwe richting.",
        reversed: "Twijfel, verlies van hoop, onzekerheid of moeite om positief te blijven."
    },

    {
        name: "The Moon",
        upright: "Mysterie, onzekerheid, dromen, emoties en vertrouwen op je intuïtie.",
        reversed: "Verwarring die duidelijker wordt, verborgen gevoelens of angst die langzaam wordt losgelaten."
    },

    {
        name: "The Sun",
        upright: "Geluk, succes, energie, duidelijkheid en positieve gebeurtenissen.",
        reversed: "Tijdelijke teleurstelling, minder energie, onzekerheid of moeite om het positieve te zien."
    },

    {
        name: "Judgement",
        upright: "Reflectie, een belangrijke beslissing, vergeving en een nieuwe start.",
        reversed: "Zelfkritiek, spijt, moeite om het verleden los te laten of bang zijn om een beslissing te nemen."
    },

    {
        name: "The World",
        upright: "Voltooiing, succes, groei en het afsluiten van een belangrijke fase.",
        reversed: "Een onafgemaakt doel, vertraging, gebrek aan afsluiting of moeite om verder te gaan."
    },


    // =========================
    // WANDS
    // =========================

    {
        name: "Ace of Wands",
        upright: "Nieuwe energie, inspiratie, enthousiasme en een nieuw idee.",
        reversed: "Gebrek aan motivatie, vertraging, weinig energie of een idee dat nog niet klaar is om te beginnen."
    },

    {
        name: "Two of Wands",
        upright: "Plannen maken, vooruitkijken en nadenken over nieuwe mogelijkheden.",
        reversed: "Twijfel, angst voor het onbekende, slechte planning of moeite om een beslissing te nemen."
    },

    {
        name: "Three of Wands",
        upright: "Vooruitgang, groei en wachten op de resultaten van je plannen.",
        reversed: "Vertraging, gebrek aan vooruitgang of plannen die anders lopen dan verwacht."
    },

    {
        name: "Four of Wands",
        upright: "Feest, stabiliteit, vriendschap en een gelukkige gebeurtenis.",
        reversed: "Spanning thuis, instabiliteit, een uitgestelde viering of gebrek aan harmonie."
    },

    {
        name: "Five of Wands",
        upright: "Concurrentie, meningsverschillen en verschillende ideeën.",
        reversed: "Een conflict oplossen, spanning verminderen of proberen vrede te sluiten."
    },

    {
        name: "Six of Wands",
        upright: "Succes, erkenning, zelfvertrouwen en trots.",
        reversed: "Gebrek aan erkenning, onzekerheid, teleurstelling of succes dat minder wordt gevoeld."
    },

    {
        name: "Seven of Wands",
        upright: "Voor jezelf opkomen, grenzen stellen en volhouden.",
        reversed: "Opgeven, onzekerheid, je overweldigd voelen of moeite hebben om je grenzen te bewaken."
    },

    {
        name: "Eight of Wands",
        upright: "Snelle ontwikkelingen, nieuws, beweging en vooruitgang.",
        reversed: "Vertraging, misverstanden, wachten op nieuws of gebrek aan vooruitgang."
    },

    {
        name: "Nine of Wands",
        upright: "Doorzetten, voorzichtigheid en sterk blijven ondanks moeilijkheden.",
        reversed: "Uitputting, onzekerheid, moeite om vol te houden of te veel verantwoordelijkheid dragen."
    },

    {
        name: "Ten of Wands",
        upright: "Veel verantwoordelijkheid, druk en te veel taken tegelijk.",
        reversed: "Een last loslaten, hulp accepteren of leren om niet alles alleen te dragen."
    },

    {
        name: "Page of Wands",
        upright: "Nieuwsgierigheid, enthousiasme, avontuur en nieuwe ideeën.",
        reversed: "Gebrek aan richting, onzekerheid, impulsiviteit of een plan dat niet goed wordt uitgevoerd."
    },

    {
        name: "Knight of Wands",
        upright: "Passie, actie, avontuur en snel ergens voor gaan.",
        reversed: "Impulsiviteit, ongeduld, roekeloosheid of snel van plan veranderen."
    },

    {
        name: "Queen of Wands",
        upright: "Zelfvertrouwen, warmte, onafhankelijkheid en creativiteit.",
        reversed: "Onzekerheid, jaloezie, gebrek aan zelfvertrouwen of te veel aandacht voor wat anderen denken."
    },

    {
        name: "King of Wands",
        upright: "Leiderschap, visie, ambitie en vertrouwen.",
        reversed: "Te veel controle, impulsiviteit, arrogantie of gebrek aan richting."
    },


    // =========================
    // CUPS
    // =========================

    {
        name: "Ace of Cups",
        upright: "Nieuwe emoties, liefde, geluk en emotionele groei.",
        reversed: "Emotionele blokkade, gevoelens onderdrukken of moeite hebben om liefde te ontvangen."
    },

    {
        name: "Two of Cups",
        upright: "Verbinding, liefde, vriendschap en wederzijds begrip.",
        reversed: "Misverstanden, afstand, ruzie of een gebrek aan wederzijds begrip."
    },

    {
        name: "Three of Cups",
        upright: "Vriendschap, feest, gezelligheid en samen zijn.",
        reversed: "Drama in een vriendengroep, buitengesloten voelen of te veel feest en afleiding."
    },

    {
        name: "Four of Cups",
        upright: "Ontevredenheid, verveling en kansen die je misschien niet ziet.",
        reversed: "Nieuwe motivatie, kansen opnieuw zien of weer interesse krijgen in iets."
    },

    {
        name: "Five of Cups",
        upright: "Teleurstelling, verdriet en focussen op wat verloren is gegaan.",
        reversed: "Herstel, acceptatie, vooruitkijken en langzaam loslaten."
    },

    {
        name: "Six of Cups",
        upright: "Herinneringen, nostalgie, jeugd en mensen uit het verleden.",
        reversed: "Vasthouden aan het verleden, moeite met loslaten of eindelijk verdergaan."
    },

    {
        name: "Seven of Cups",
        upright: "Veel mogelijkheden, dromen en moeite hebben met kiezen.",
        reversed: "Meer duidelijkheid, een keuze maken en realistischer naar mogelijkheden kijken."
    },

    {
        name: "Eight of Cups",
        upright: "Iets achterlaten en op zoek gaan naar een nieuwe richting.",
        reversed: "Bang zijn om iets los te laten, teruggaan naar het verleden of blijven hangen."
    },

    {
        name: "Nine of Cups",
        upright: "Tevredenheid, geluk en wensen die uitkomen.",
        reversed: "Ontevredenheid, iets blijkt minder leuk dan verwacht of te veel gericht zijn op wensen."
    },

    {
        name: "Ten of Cups",
        upright: "Familie, liefde, harmonie en emotioneel geluk.",
        reversed: "Spanning in relaties, misverstanden thuis of een gebrek aan harmonie."
    },

    {
        name: "Page of Cups",
        upright: "Gevoeligheid, creativiteit, intuïtie en onverwacht nieuws.",
        reversed: "Emotionele onzekerheid, onvolwassen reacties of moeite om gevoelens te begrijpen."
    },

    {
        name: "Knight of Cups",
        upright: "Romantiek, gevoelens, idealen en een aanbod.",
        reversed: "Onrealistische verwachtingen, stemmingswisselingen of mooie woorden zonder actie."
    },

    {
        name: "Queen of Cups",
        upright: "Empathie, zorgzaamheid, intuïtie en emotionele wijsheid.",
        reversed: "Emotionele overbelasting, te veel zorgen voor anderen of je eigen behoeften vergeten."
    },

    {
        name: "King of Cups",
        upright: "Emotionele controle, wijsheid, begrip en kalmte.",
        reversed: "Emotionele instabiliteit, gevoelens onderdrukken of moeite hebben met emoties."
    },


    // =========================
    // SWORDS
    // =========================

    {
        name: "Ace of Swords",
        upright: "Duidelijkheid, waarheid, nieuwe ideeën en een belangrijke beslissing.",
        reversed: "Verwarring, misverstanden, gebrek aan duidelijkheid of verkeerde informatie."
    },

    {
        name: "Two of Swords",
        upright: "Twijfel, een moeilijke keuze en iets niet willen zien.",
        reversed: "Een beslissing nemen, verborgen informatie ontdekken of niet langer kunnen blijven twijfelen."
    },

    {
        name: "Three of Swords",
        upright: "Verdriet, teleurstelling en pijnlijke emoties.",
        reversed: "Herstel, vergeving, genezing en langzaam verdergaan."
    },

    {
        name: "Four of Swords",
        upright: "Rust, herstel, pauze en tijd nemen om na te denken.",
        reversed: "Rusteloosheid, te snel weer doorgaan of moeite hebben om voldoende rust te nemen."
    },

    {
        name: "Five of Swords",
        upright: "Conflict, spanning en winnen ten koste van anderen.",
        reversed: "Een conflict beëindigen, vergeving of proberen vrede te sluiten."
    },

    {
        name: "Six of Swords",
        upright: "Een moeilijke situatie achter je laten en naar rustiger water gaan.",
        reversed: "Moeite om verder te gaan, vasthouden aan het verleden of terugkeren naar een oude situatie."
    },

    {
        name: "Seven of Swords",
        upright: "Geheimen, voorzichtigheid, onafhankelijkheid en iets achterhouden.",
        reversed: "Een geheim komt uit, eerlijkheid of erkennen dat iets niet goed is aangepakt."
    },

    {
        name: "Eight of Swords",
        upright: "Je beperkt voelen, angst en het idee dat je geen uitweg hebt.",
        reversed: "Bevrijding, nieuwe mogelijkheden zien en beseffen dat je meer keuze hebt dan gedacht."
    },

    {
        name: "Nine of Swords",
        upright: "Zorgen, stress, piekeren en angst.",
        reversed: "Angst verminderen, zorgen loslaten of langzaam herstellen van een moeilijke periode."
    },

    {
        name: "Ten of Swords",
        upright: "Een moeilijk einde en het afsluiten van een zware periode.",
        reversed: "Herstel, een nieuw begin en langzaam weer vooruitkijken."
    },

    {
        name: "Page of Swords",
        upright: "Nieuwsgierigheid, communicatie, leren en alert zijn.",
        reversed: "Roddel, misverstanden, impulsieve woorden of informatie niet goed controleren."
    },

    {
        name: "Knight of Swords",
        upright: "Snelheid, vastberadenheid, directe communicatie en actie.",
        reversed: "Roekeloosheid, agressieve communicatie, ongeduld of te snel handelen."
    },

    {
        name: "Queen of Swords",
        upright: "Onafhankelijkheid, eerlijkheid, duidelijk denken en grenzen.",
        reversed: "Kritiek, afstandelijkheid, bitterheid of te streng zijn voor jezelf of anderen."
    },

    {
        name: "King of Swords",
        upright: "Logica, wijsheid, eerlijkheid en rationele beslissingen.",
        reversed: "Misbruik van macht, harde communicatie, manipulatie of oneerlijke beslissingen."
    },


    // =========================
    // PENTACLES
    // =========================

    {
        name: "Ace of Pentacles",
        upright: "Een nieuwe kans, financiële groei, werk en stabiliteit.",
        reversed: "Een gemiste kans, vertraging, financiële onzekerheid of een plan dat niet doorgaat."
    },

    {
        name: "Two of Pentacles",
        upright: "Balans zoeken, meerdere dingen tegelijk regelen en flexibiliteit.",
        reversed: "Overweldigd zijn, slechte planning of moeite om verschillende dingen te combineren."
    },

    {
        name: "Three of Pentacles",
        upright: "Samenwerken, leren, talent en goed werk.",
        reversed: "Slechte samenwerking, gebrek aan motivatie of werk dat niet goed wordt afgestemd."
    },

    {
        name: "Four of Pentacles",
        upright: "Vasthouden aan zekerheid, voorzichtigheid en controle.",
        reversed: "Loslaten, vrijgevigheid of leren om minder controle te willen hebben."
    },

    {
        name: "Five of Pentacles",
        upright: "Moeilijkheden, onzekerheid en het gevoel er alleen voor te staan.",
        reversed: "Hulp vinden, herstel en langzaam uit een moeilijke situatie komen."
    },

    {
        name: "Six of Pentacles",
        upright: "Geven, ontvangen, hulp en vrijgevigheid.",
        reversed: "Ongelijkheid, hulp met voorwaarden of te veel geven zonder iets terug te krijgen."
    },

    {
        name: "Seven of Pentacles",
        upright: "Geduld, hard werken en wachten tot je inspanningen resultaat geven.",
        reversed: "Ongeduld, weinig resultaat zien of twijfelen of je inspanningen het waard zijn."
    },

    {
        name: "Eight of Pentacles",
        upright: "Oefenen, leren, hard werken en beter worden in iets.",
        reversed: "Gebrek aan motivatie, slordigheid of niet genoeg aandacht besteden aan iets."
    },

    {
        name: "Nine of Pentacles",
        upright: "Onafhankelijkheid, succes, comfort en genieten van je resultaten.",
        reversed: "Afhankelijkheid, financiële onzekerheid of succes dat minder voldoening geeft."
    },

    {
        name: "Ten of Pentacles",
        upright: "Familie, zekerheid, stabiliteit en langdurige rijkdom.",
        reversed: "Familieproblemen, financiële onzekerheid of instabiliteit."
    },

    {
        name: "Page of Pentacles",
        upright: "Leren, ambitie, nieuwe kansen en praktische plannen.",
        reversed: "Gebrek aan focus, uitstel, slechte planning of motivatieproblemen."
    },

    {
        name: "Knight of Pentacles",
        upright: "Geduld, betrouwbaarheid, hard werken en stap voor stap vooruitgaan.",
        reversed: "Vastzitten, verveling, traagheid of te weinig initiatief."
    },

    {
        name: "Queen of Pentacles",
        upright: "Zorgzaamheid, stabiliteit, praktisch denken en comfort.",
        reversed: "Te veel zorgen voor anderen, gebrek aan balans of jezelf vergeten."
    },

    {
        name: "King of Pentacles",
        upright: "Succes, stabiliteit, verantwoordelijkheid en materiële zekerheid.",
        reversed: "Hebzucht, materialisme, controle of te veel waarde hechten aan geld en status."
    }
];


// =====================================
// HTML-ELEMENTEN
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

            <div class="meaning-section">
                <h3>✦ Upright</h3>
                <p>${card.upright}</p>
            </div>

            <div class="meaning-section">
                <h3>↕ Reversed</h3>
                <p>${card.reversed}</p>
            </div>
        `;

        cardContainer.appendChild(cardElement);
    });
}


// =====================================
// ZOEKFUNCTIE
// =====================================

searchInput.addEventListener("input", function () {

    const search = this.value.toLowerCase().trim();

    // Zoekbalk is leeg
    if (search === "") {

        cardContainer.innerHTML = "";

        noResults.style.display = "none";

        return;
    }

    // Zoek naar kaarten
    const results = tarotCards.filter(card =>
        card.name.toLowerCase().includes(search)
    );

    showCards(results);
});