// Curso por niveles, parte 2: B1 y B2. Mismo formato que course-a.js.

export const B1 = {
  id: "B1",
  name: "Con soltura",
  desc: "Condicional, subjuntivo y pronombres combinados: hablar con matices y sin rodeos.",
  lessons: [
    {
      t: "El condicional",
      body: `<p>La misma raíz que el futuro + <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>:</p>
<table><tr><td>parlerei</td><td>parleremmo</td></tr><tr><td>parleresti</td><td>parlereste</td></tr><tr><td>parlerebbe</td><td>parlerebbero</td></tr></table>
<p>Irregulares como en el futuro: <i>sarei, avrei, andrei, farei, potrei, dovrei, vorrei, verrei, saprei, vedrei</i>.</p>
<ul><li><b>Cortesía:</b> <i>Vorrei un caffè. Potrebbe aiutarmi?</i></li>
<li><b>Deseo:</b> <i>Mi piacerebbe vivere qui.</i></li>
<li><b>Consejo:</b> <i>Dovresti riposarti. Al posto tuo, ci andrei.</i></li>
<li><b>Información no confirmada:</b> <i>Secondo i giornali, sarebbe malato.</i></li></ul>
<p>No confundas <i>parler<b>emmo</b></i> (hablaríamos) con <i>parler<b>emo</b></i> (hablaremos).</p>`,
      vocabTitle: "En el restaurante",
      vocab: [["il cameriere", "el camarero"], ["l'antipasto", "el entrante"], ["il primo", "el primer plato"], ["il secondo", "el segundo plato"], ["il contorno", "la guarnición"], ["il dolce", "el postre"], ["il conto", "la cuenta"], ["la mancia", "la propina"], ["prenotare", "reservar"], ["ordinare", "pedir (en un restaurante)"], ["consigliare", "recomendar, aconsejar"], ["assaggiare", "probar"]],
      ex: [
        ["g", "___ un caffè, per favore. (volere, io)", "Vorrei"],
        ["g", "Mi ___ visitare Napoli. (piacere)", "piacerebbe"],
        ["c", "___ studiare di più. (consejo, tu)", "Dovresti", "Doveresti", "Dovesti"],
        ["c", "Noi ___ volentieri, ma non possiamo.", "verremmo", "verremo", "veniremmo"],
        ["g", "Mi ___ passare il sale? (potere, Lei)", "potrebbe"],
        ["c", "Al posto tuo, non ci ___.", "andrei", "anderei", "andrò"],
        ["g", "Che cosa ___ al posto mio? (fare, tu)", "faresti"],
        ["t", "¿Podrías ayudarme?", "Potresti aiutarmi?|Mi potresti aiutare?"],
        ["o", "Me gustaría reservar una mesa", "Mi piacerebbe prenotare un tavolo"],
      ],
    },
    {
      t: "Pronombres combinados",
      body: `<p>Indirecto + directo. Primero el indirecto, que cambia la <b>i</b> por <b>e</b>:</p>
<table><tr><th></th><th>lo</th><th>la</th><th>li</th><th>le</th><th>ne</th></tr>
<tr><td>mi</td><td>me lo</td><td>me la</td><td>me li</td><td>me le</td><td>me ne</td></tr>
<tr><td>ti</td><td>te lo</td><td>te la</td><td>te li</td><td>te le</td><td>te ne</td></tr>
<tr><td>gli / le</td><td>glielo</td><td>gliela</td><td>glieli</td><td>gliele</td><td>gliene</td></tr>
<tr><td>ci</td><td>ce lo</td><td>ce la</td><td>ce li</td><td>ce le</td><td>ce ne</td></tr>
<tr><td>vi</td><td>ve lo</td><td>ve la</td><td>ve li</td><td>ve le</td><td>ve ne</td></tr></table>
<p><b>Glielo</b> es una sola palabra y vale para «a él, a ella, a ellos, a usted»: es el «se lo» español.</p>
<p>Posición: <i>Te lo dico. Voglio dir<b>telo</b>. Dim<b>melo</b>!</i></p>
<p>En pasado el participio concuerda: <i>Te l'ho dett<b>o</b>. Gliel'ho dat<b>a</b>. Me li ha regalat<b>i</b>.</i></p>`,
      vocabTitle: "Dar y recibir",
      vocab: [["regalare", "regalar"], ["prestare", "prestar"], ["restituire", "devolver"], ["spedire", "enviar"], ["mostrare", "enseñar, mostrar"], ["portare", "llevar, traer"], ["offrire", "ofrecer, invitar"], ["chiedere", "pedir, preguntar"], ["promettere", "prometer"], ["il regalo", "el regalo"], ["il favore", "el favor"], ["i soldi", "el dinero"]],
      ex: [
        ["c", "Mi presti il libro? — Sì, ___ presto.", "te lo", "ti lo", "lo ti"],
        ["c", "Hai dato le chiavi a Luca? — Sì, ___ ho date.", "gliele", "le gli", "glielo"],
        ["g", "Il regalo per Anna? ___ ho già spedito. (a lei + lo, con apóstrofo)", "Gliel'"],
        ["g", "Mi dici la verità? — Sì, ___ dico. (a ti + la)", "te la"],
        ["c", "«Dímelo»", "Dimmelo", "Dicimelo", "Me lo di'"],
        ["c", "Quante mele vuoi? — ___ due.", "Dammene", "Dammi ne", "Me ne dai le"],
        ["g", "I soldi? ___ ha restituiti ieri. (a mí + li)", "Me li"],
        ["t", "Te lo prometo", "Te lo prometto"],
        ["o", "No quiero decírselo", "Non voglio dirglielo"],
      ],
    },
    {
      t: "Comparativos y superlativos",
      body: `<ul><li><b>più / meno … di</b> ante nombre o pronombre: <i>Luca è più alto <b>di</b> me.</i></li>
<li><b>più / meno … che</b> entre dos adjetivos, verbos, cantidades o con preposición: <i>È più simpatico <b>che</b> bello. Mangio più pasta <b>che</b> carne.</i></li>
<li><b>come / quanto</b> para igualdad: <i>È alto <b>come</b> me.</i></li></ul>
<p><b>Superlativo relativo:</b> <i>la città <b>più</b> bella <b>d'</b>Italia</i>.</p>
<p><b>Superlativo absoluto:</b> <b>-issimo</b> o <i>molto</i>: <i>bellissimo, bravissima</i>.</p>
<table><tr><th></th><th>comparativo</th><th>superlativo</th></tr>
<tr><td>buono</td><td>migliore</td><td>ottimo</td></tr><tr><td>cattivo</td><td>peggiore</td><td>pessimo</td></tr>
<tr><td>grande</td><td>maggiore</td><td>massimo</td></tr><tr><td>piccolo</td><td>minore</td><td>minimo</td></tr>
<tr><td>bene</td><td>meglio</td><td>benissimo</td></tr><tr><td>male</td><td>peggio</td><td>malissimo</td></tr></table>`,
      vocabTitle: "El carácter",
      vocab: [["simpatico", "simpático"], ["antipatico", "antipático"], ["gentile", "amable"], ["timido", "tímido"], ["allegro", "alegre"], ["serio", "serio"], ["pigro", "vago"], ["generoso", "generoso"], ["testardo", "cabezota"], ["furbo", "listo, pillo"], ["educato", "educado"], ["maleducato", "maleducado"]],
      ex: [
        ["c", "Luca è più alto ___ me.", "di", "che", "come"],
        ["c", "È più simpatico ___ bello.", "che", "di", "come"],
        ["g", "Questo vino è ___ di quello. (buono, comparativo)", "migliore|più buono"],
        ["g", "Oggi sto ___ di ieri. (bene, comparativo)", "meglio"],
        ["c", "È la città ___ bella d'Italia.", "più", "la più", "molta"],
        ["g", "Il film era ___. (bello, superlativo en -issimo)", "bellissimo"],
        ["c", "Mangio più pasta ___ carne.", "che", "di", "della"],
        ["t", "Mi hermano es tan cabezota como yo", "Mio fratello è testardo come me|Mio fratello è tanto testardo quanto me"],
        ["o", "Es el peor restaurante de la ciudad", "È il peggiore ristorante della città"],
      ],
    },
    {
      t: "Pronombres relativos",
      body: `<ul><li><b>che</b> = que (sujeto u objeto), sin preposición: <i>Il libro <b>che</b> leggo. La ragazza <b>che</b> parla.</i></li>
<li><b>cui</b> = con preposición: <i>la ragazza <b>con cui</b> esco · la città <b>in cui</b> vivo · l'amico <b>di cui</b> ti parlo · il motivo <b>per cui</b> sono qui</i></li>
<li><b>il / la cui</b> = cuyo: <i>l'autore <b>il cui</b> libro ho letto</i></li>
<li><b>il quale, la quale, i quali, le quali</b> = versión formal de <i>che / cui</i></li>
<li><b>chi</b> = quien, el que: <i><b>Chi</b> cerca, trova.</i></li>
<li><b>quello che / ciò che</b> = lo que: <i>Non capisco <b>quello che</b> dici.</i></li></ul>
<p>El error típico del hispanohablante es decir «con che»: tras preposición, siempre <b>cui</b>.</p>`,
      vocabTitle: "Tecnología y medios",
      vocab: [["il telefonino", "el móvil"], ["lo schermo", "la pantalla"], ["la rete", "la red"], ["il sito", "la página web"], ["scaricare", "descargar"], ["caricare", "cargar, subir"], ["inviare", "enviar"], ["il messaggio", "el mensaje"], ["la notizia", "la noticia"], ["il giornale", "el periódico"], ["il programma", "el programa"], ["la puntata", "el episodio"]],
      ex: [
        ["c", "Il film ___ ho visto era bello.", "che", "cui", "chi"],
        ["c", "La ragazza con ___ esco è italiana.", "cui", "che", "chi"],
        ["g", "Non capisco ___ che dici.", "quello"],
        ["g", "La città in ___ vivo è piccola.", "cui"],
        ["c", "___ cerca, trova.", "Chi", "Che", "Cui"],
        ["c", "È il motivo ___ sono qui.", "per cui", "per che", "che per"],
        ["g", "Il collega ___ ti ho presentato si chiama Paolo.", "che"],
        ["t", "El amigo del que te hablo", "L'amico di cui ti parlo"],
        ["o", "Ese es el sitio que uso siempre", "Quello è il sito che uso sempre"],
      ],
    },
    {
      t: "Congiuntivo presente",
      body: `<table><tr><th></th><th>parlare</th><th>prendere</th><th>capire</th></tr>
<tr><td>io, tu, lui</td><td>parl<b>i</b></td><td>prend<b>a</b></td><td>capisc<b>a</b></td></tr>
<tr><td>noi</td><td>parliamo</td><td>prendiamo</td><td>capiamo</td></tr>
<tr><td>voi</td><td>parliate</td><td>prendiate</td><td>capiate</td></tr>
<tr><td>loro</td><td>parlino</td><td>prendano</td><td>capiscano</td></tr></table>
<p><b>Irregulares:</b> <i>sia, abbia, vada, faccia, venga, possa, voglia, debba, sappia, dica, stia, dia</i>.</p>
<p><b>Se usa tras:</b></p>
<ul><li>opinión: <i>penso / credo / mi sembra <b>che</b></i> — aquí el español usa indicativo</li>
<li>deseo y emoción: <i>voglio che, spero che, sono contento che, ho paura che</i></li>
<li>impersonales: <i>bisogna che, è meglio che, è importante che</i></li>
<li>conjunciones: <i>benché, sebbene</i> (aunque), <i>affinché</i> (para que), <i>prima che, a patto che, senza che</i></li></ul>
<p>Con el mismo sujeto, infinitivo: <i>Penso <b>di</b> avere ragione.</i> Y sin subjuntivo: <i>secondo me, so che, sono sicuro che</i>.</p>`,
      vocabTitle: "Opiniones y emociones",
      vocab: [["l'opinione", "la opinión"], ["il dubbio", "la duda"], ["la speranza", "la esperanza"], ["la paura", "el miedo"], ["la gioia", "la alegría"], ["sperare", "esperar (desear)"], ["temere", "temer"], ["dubitare", "dudar"], ["sembrare", "parecer"], ["convincere", "convencer"], ["preoccuparsi", "preocuparse"], ["essere d'accordo", "estar de acuerdo"]],
      ex: [
        ["g", "Penso che Luca ___ ragione. (avere)", "abbia"],
        ["g", "Spero che voi ___ bene. (stare)", "stiate"],
        ["c", "Voglio che tu ___ con me.", "venga", "vieni", "verrai"],
        ["c", "Benché ___ tardi, esco.", "sia", "è", "sarà"],
        ["c", "Secondo me, ___ una buona idea.", "è", "sia", "essere"],
        ["g", "Bisogna che io ___ di più. (studiare)", "studi"],
        ["c", "Penso ___ avere ragione.", "di", "che", "a"],
        ["t", "Espero que te guste", "Spero che ti piaccia"],
        ["o", "Te llamo antes de que salgas", "Ti chiamo prima che tu esca"],
      ],
    },
    {
      t: "Imperativo formal y stare + gerundio",
      body: `<p><b>Para dar órdenes o indicaciones de usted (Lei)</b> se usa el congiuntivo:</p>
<ul><li>-are → <b>-i</b>: <i>Scusi! Aspetti! Guardi!</i></li>
<li>-ere, -ire → <b>-a</b>: <i>Prenda! Senta! Venga! Dica! Faccia! Vada!</i></li></ul>
<p>Los pronombres van <b>delante</b>: <i>Mi dica. Si accomodi</i> (tome asiento). <i>Non si preoccupi.</i></p>
<p><b>Stare + gerundio</b> (acción en curso): <b>-ando</b> / <b>-endo</b></p>
<ul><li><i>Sto mangiando. Stavo dormendo.</i></li><li>Irregulares: <i>facendo, dicendo, bevendo</i></li></ul>
<p><b>Stare per</b> + infinitivo = estar a punto de: <i>Sto per uscire.</i></p>`,
      vocabTitle: "La salud",
      vocab: [["il medico", "el médico"], ["la visita", "la consulta"], ["la ricetta", "la receta"], ["la medicina", "el medicamento"], ["la febbre", "la fiebre"], ["la tosse", "la tos"], ["il raffreddore", "el resfriado"], ["il dolore", "el dolor"], ["la gola", "la garganta"], ["lo stomaco", "el estómago"], ["la schiena", "la espalda"], ["guarire", "curarse"]],
      ex: [
        ["c", "Signora, ___ pure!", "si accomodi", "accomodati", "si accomoda"],
        ["g", "Mi ___, dov'è la stazione? (scusare, Lei)", "scusi"],
        ["g", "Che cosa ___ facendo? (stare, tu)", "stai"],
        ["g", "Sto ___ un libro. (leggere)", "leggendo"],
        ["c", "«Estoy a punto de salir»", "Sto per uscire", "Sto uscendo", "Sto a uscire"],
        ["c", "Dottore, mi ___!", "dica", "dici", "dire"],
        ["c", "Non ___ preoccupi, signore.", "si", "ti", "lo"],
        ["t", "¿Qué estás diciendo?", "Che cosa stai dicendo?|Cosa stai dicendo?|Che stai dicendo?"],
        ["o", "Tome esta medicina dos veces al día", "Prenda questa medicina due volte al giorno"],
      ],
    },
    {
      t: "Trapassato prossimo y conectores",
      body: `<p><b>Trapassato prossimo</b> = imperfetto de <i>avere / essere</i> + participio: <i>avevo mangiato, ero andato/a</i>. Sirve para lo que pasó <b>antes</b> de otro pasado:</p>
<p><i>Quando sono arrivato, il treno <b>era</b> già <b>partito</b>.</i></p>
<p><b>Antes y después:</b> <i>prima di uscire</i> · <i>dopo aver mangiato</i> · <i>dopo essere arrivato</i>.</p>
<p><b>Conectores para contar bien:</b></p>
<ul><li>orden: <i>all'inizio, poi, dopo, alla fine, appena</i> (en cuanto)</li>
<li>causa: <i>perché, siccome</i> (como…, al principio de la frase)</li>
<li>consecuencia: <i>quindi, perciò, così</i></li>
<li>contraste: <i>ma, però, invece</i> (en cambio), <i>eppure</i> (y sin embargo), <i>comunque</i> (de todos modos)</li>
<li>confirmar y aclarar: <i>infatti</i> (de hecho), <i>cioè, anzi, insomma</i></li></ul>`,
      vocabTitle: "Conectores",
      vocab: [["siccome", "como (causa)"], ["quindi", "así que"], ["perciò", "por eso"], ["invece", "en cambio"], ["comunque", "de todos modos"], ["eppure", "y sin embargo"], ["infatti", "de hecho"], ["appena", "en cuanto; apenas"], ["ormai", "ya, a estas alturas"], ["ancora", "todavía; otra vez"], ["già", "ya"], ["all'inizio", "al principio"]],
      ex: [
        ["g", "Quando sono arrivato, Luca ___ già uscito.", "era"],
        ["g", "Non avevo fame perché ___ già mangiato. (io)", "avevo"],
        ["c", "___ pioveva, siamo rimasti a casa.", "Siccome", "Perciò", "Invece"],
        ["c", "Ero stanco, ___ sono andato a letto.", "quindi", "siccome", "eppure"],
        ["c", "Io prendo la pasta; lui, ___, la pizza.", "invece", "infatti", "perciò"],
        ["c", "Dopo ___ mangiato, siamo usciti.", "aver", "essere", "avendo"],
        ["g", "Prima ___ uscire, chiudi la finestra.", "di"],
        ["t", "Ya lo había visto", "L'avevo già visto"],
        ["o", "En cuanto llegué la llamé", "Appena sono arrivato l'ho chiamata"],
      ],
    },
    {
      t: "El «si» impersonal",
      body: `<p><b>si</b> + 3.ª persona = «se», «uno», «la gente»: <i>In Italia <b>si mangia</b> bene.</i></p>
<ul><li>Si lo que sigue es plural, el verbo va en plural: <i><b>Si vendono</b> case. <b>Si parlano</b> tre lingue.</i></li>
<li>Con adjetivo, plural masculino: <i>Quando si è giovan<b>i</b>…</i></li>
<li>Con verbos reflexivos: <b>ci si</b> → <i>Ci si alza presto.</i></li>
<li>En pasado, con <b>essere</b>: <i>Si è mangiato bene. Si sono viste molte cose.</i></li></ul>
<p>Otras formas de generalizar: <i>uno, la gente, dicono che…</i></p>
<p><b>Bisogna</b> + infinitivo = hay que (cat. «cal»). <b>Basta</b> + infinitivo = basta con.</p>`,
      vocabTitle: "Sociedad y costumbres",
      vocab: [["la gente", "la gente"], ["l'abitudine", "la costumbre"], ["la tradizione", "la tradición"], ["la regola", "la regla"], ["la legge", "la ley"], ["il diritto", "el derecho"], ["il dovere", "el deber"], ["vietato", "prohibido"], ["permesso", "permitido"], ["comportarsi", "comportarse"], ["rispettare", "respetar"], ["la società", "la sociedad"]],
      ex: [
        ["c", "In Spagna ___ cena tardi.", "si", "ci", "se"],
        ["c", "Qui ___ vendono biglietti.", "si", "ne", "ci"],
        ["g", "In questa casa si ___ tre lingue. (parlare)", "parlano"],
        ["g", "D'estate ci ___ alza presto.", "si"],
        ["c", "«Hay que reservar»", "Bisogna prenotare", "Si ha da prenotare", "C'è che prenotare"],
        ["c", "Quando si è ___, si dorme poco.", "giovani", "giovane", "giovano"],
        ["g", "Ieri si ___ mangiato benissimo. (auxiliar)", "è"],
        ["t", "Aquí no se puede fumar", "Qui non si può fumare"],
        ["o", "En Italia se bebe mucho café", "In Italia si beve molto caffè"],
      ],
    },
  ],
};

export const B2 = {
  id: "B2",
  name: "Con precisión",
  desc: "Hipótesis, estilo indirecto, pasiva y passato remoto: el italiano de los libros y las noticias.",
  lessons: [
    {
      t: "Congiuntivo imperfetto y trapassato",
      body: `<table><tr><th></th><th>parlare</th><th>avere</th><th>dormire</th><th>essere</th></tr>
<tr><td>io</td><td>parlassi</td><td>avessi</td><td>dormissi</td><td>fossi</td></tr><tr><td>tu</td><td>parlassi</td><td>avessi</td><td>dormissi</td><td>fossi</td></tr>
<tr><td>lui / lei</td><td>parlasse</td><td>avesse</td><td>dormisse</td><td>fosse</td></tr><tr><td>noi</td><td>parlassimo</td><td>avessimo</td><td>dormissimo</td><td>fossimo</td></tr>
<tr><td>voi</td><td>parlaste</td><td>aveste</td><td>dormiste</td><td>foste</td></tr><tr><td>loro</td><td>parlassero</td><td>avessero</td><td>dormissero</td><td>fossero</td></tr></table>
<p>Irregulares: <i>fare → facessi, dire → dicessi, dare → dessi, stare → stessi, bere → bevessi</i>.</p>
<p><b>Trapassato:</b> <i>avessi / fossi</i> + participio → <i>avessi saputo, fossi andato</i>.</p>
<p><b>Concordancia:</b></p>
<ul><li>principal en presente → <i>Penso che <b>sia</b></i> / <i>che <b>sia stato</b></i></li>
<li>principal en pasado o condicional → <i>Pensavo che <b>fosse</b></i> / <i>che <b>fosse stato</b></i> · <i>Vorrei che tu <b>venissi</b></i></li></ul>
<p>Además: <i><b>Magari</b> fosse vero!</i> (ojalá) y <i><b>come se</b> fosse facile</i>.</p>`,
      vocabTitle: "Sentimientos",
      vocab: [["la nostalgia", "la nostalgia"], ["il rimpianto", "el arrepentimiento, la añoranza"], ["la delusione", "la decepción"], ["l'orgoglio", "el orgullo"], ["la vergogna", "la vergüenza"], ["la gelosia", "los celos"], ["l'invidia", "la envidia"], ["il sollievo", "el alivio"], ["la rabbia", "la rabia"], ["commuoversi", "emocionarse"], ["deludere", "decepcionar"], ["vergognarsi", "avergonzarse"]],
      ex: [
        ["g", "Pensavo che tu ___ italiano. (essere)", "fossi"],
        ["g", "Vorrei che voi ___ con noi. (venire)", "veniste"],
        ["c", "Magari ___ vero!", "fosse", "sia", "sarebbe"],
        ["c", "Credevo che Luca ___ già partito.", "fosse", "sia", "era"],
        ["c", "Parla come se ___ tutto.", "sapesse", "sappia", "sa"],
        ["g", "Non sapevo che loro ___ un figlio. (avere)", "avessero"],
        ["c", "Penso che ieri Maria ___ a casa.", "sia rimasta", "fosse rimasta", "rimanga"],
        ["t", "Quería que lo supieras", "Volevo che tu lo sapessi|Volevo che lo sapessi"],
        ["o", "Ojalá pudiera quedarme más", "Magari potessi restare di più"],
      ],
    },
    {
      t: "El periodo hipotético",
      body: `<table><tr><th>tipo</th><th>se +</th><th>principal</th></tr>
<tr><td>I · real</td><td>presente / futuro</td><td>presente / futuro / imperativo</td></tr>
<tr><td>II · posible o irreal</td><td>congiuntivo imperfetto</td><td>condizionale presente</td></tr>
<tr><td>III · irreal en el pasado</td><td>congiuntivo trapassato</td><td>condizionale passato</td></tr></table>
<ul><li><i>Se piove, resto a casa. Se verrai, ti divertirai.</i></li>
<li><i>Se <b>avessi</b> tempo, <b>viaggerei</b> di più.</i></li>
<li><i>Se <b>avessi studiato</b>, <b>avrei passato</b> l'esame.</i></li>
<li>Mixto: <i>Se avessi dormito, ora non sarei stanco.</i></li></ul>
<p>Como en español, nunca condicional tras <i>se</i>. La diferencia es el tipo I con futuro: <i>Se <b>verrai</b>…</i> (si vienes).</p>
<p>En el habla coloquial oirás: <i>Se lo sapevo, venivo.</i></p>`,
      vocabTitle: "Hipótesis y decisiones",
      vocab: [["l'ipotesi", "la hipótesis"], ["la possibilità", "la posibilidad"], ["il caso", "el caso, la casualidad"], ["la scelta", "la elección"], ["l'occasione", "la oportunidad"], ["lo sbaglio", "el error"], ["pentirsi", "arrepentirse"], ["rischiare", "arriesgar"], ["immaginare", "imaginar"], ["cambiare idea", "cambiar de opinión"], ["al posto tuo", "en tu lugar"], ["per fortuna", "por suerte"]],
      ex: [
        ["g", "Se ___ tempo, verrei. (avere, io)", "avessi"],
        ["g", "Se piove, ___ a casa. (restare, noi)", "restiamo|resteremo"],
        ["c", "Se avessi studiato, ___ l'esame.", "avrei passato", "passerei", "avessi passato"],
        ["c", "Se fossi in te, non lo ___.", "farei", "facessi", "farò"],
        ["c", "Se ___ ricco, comprerei una casa al mare.", "fossi", "sarei", "sono"],
        ["g", "Se me l'avessi detto, ti ___ aiutato. (avere, io)", "avrei"],
        ["c", "Se verrai alla festa, ___.", "ti divertirai", "ti divertissi", "ti saresti divertito"],
        ["t", "Si pudiera, lo haría", "Se potessi, lo farei"],
        ["o", "Si lo hubiera sabido habría venido", "Se l'avessi saputo sarei venuto"],
      ],
    },
    {
      t: "Condizionale passato",
      body: `<p><i>avrei / sarei</i> + participio: <i>avrei mangiato, sarei andato/a</i>.</p>
<ul><li><b>Lo que no llegó a pasar:</b> <i>Sarei venuto, ma ero malato.</i></li>
<li><b>Reproche y arrepentimiento:</b> <i>Avresti dovuto dirmelo. Avrei voluto vederti.</i></li>
<li><b>Noticias sin confirmar:</b> <i>Il ladro sarebbe fuggito in macchina.</i></li>
<li><b>Futuro en el pasado</b> — la gran diferencia con el español:<br><i>Ha detto che <b>sarebbe venuto</b>.</i> = Dijo que <u>vendría</u>.</li></ul>
<p>En italiano, lo que en español es «dijo que haría» se dice siempre con condicional compuesto: <i>Pensavo che avresti chiamato.</i></p>`,
      vocabTitle: "Noticias y actualidad",
      vocab: [["il telegiornale", "el telediario"], ["il giornalista", "el periodista"], ["l'intervista", "la entrevista"], ["il governo", "el gobierno"], ["lo sciopero", "la huelga"], ["l'incidente", "el accidente"], ["il furto", "el robo"], ["il ladro", "el ladrón"], ["la polizia", "la policía"], ["dichiarare", "declarar"], ["la fonte", "la fuente"], ["il testimone", "el testigo"]],
      ex: [
        ["c", "Ha detto che ___ alle otto.", "sarebbe arrivato", "arriverebbe", "arrivasse"],
        ["g", "___ dovuto dirmelo! (avere, tu)", "Avresti"],
        ["g", "Sarei ___, ma ero stanca. (venire)", "venuta"],
        ["c", "«Me habría gustado ir»", "Mi sarebbe piaciuto andare", "Mi avrebbe piaciuto andare", "Mi piacerebbe andato"],
        ["c", "Pensavo che ___.", "avresti chiamato", "chiameresti", "chiamerai"],
        ["c", "Secondo la polizia, il ladro ___ dalla finestra.", "sarebbe entrato", "avrebbe entrato", "entrasse"],
        ["g", "Non ___ mai immaginato una cosa così. (avere, io)", "avrei"],
        ["t", "Habría querido verte", "Avrei voluto vederti"],
        ["o", "Prometió que me escribiría", "Ha promesso che mi avrebbe scritto"],
      ],
    },
    {
      t: "Passato remoto",
      body: `<p>Es el pasado de las novelas, los cuentos y los libros de historia (y del habla del sur). En la conversación neutra se usa el passato prossimo, así que <b>basta con reconocerlo</b>.</p>
<table><tr><th>parlare</th><th>credere</th><th>dormire</th><th>essere</th><th>avere</th></tr>
<tr><td>parlai</td><td>credei</td><td>dormii</td><td>fui</td><td>ebbi</td></tr><tr><td>parlasti</td><td>credesti</td><td>dormisti</td><td>fosti</td><td>avesti</td></tr>
<tr><td>parlò</td><td>credé</td><td>dormì</td><td>fu</td><td>ebbe</td></tr><tr><td>parlammo</td><td>credemmo</td><td>dormimmo</td><td>fummo</td><td>avemmo</td></tr>
<tr><td>parlaste</td><td>credeste</td><td>dormiste</td><td>foste</td><td>aveste</td></tr><tr><td>parlarono</td><td>crederono</td><td>dormirono</td><td>furono</td><td>ebbero</td></tr></table>
<p><b>Irregulares</b> (solo cambian <i>io, lui, loro</i>): fare → <i>feci, fece, fecero</i> · dire → <i>dissi</i> · vedere → <i>vidi</i> · venire → <i>venni</i> · prendere → <i>presi</i> · mettere → <i>misi</i> · scrivere → <i>scrissi</i> · nascere → <i>nacque</i> · sapere → <i>seppi</i> · volere → <i>volli</i> · dare → <i>diedi</i> · stare → <i>stetti</i> · chiedere → <i>chiesi</i> · rispondere → <i>risposi</i>.</p>`,
      vocabTitle: "Historia y relatos",
      vocab: [["il secolo", "el siglo"], ["la guerra", "la guerra"], ["la pace", "la paz"], ["il re", "el rey"], ["la regina", "la reina"], ["l'impero", "el imperio"], ["il popolo", "el pueblo"], ["la battaglia", "la batalla"], ["la scoperta", "el descubrimiento"], ["fondare", "fundar"], ["conquistare", "conquistar"], ["c'era una volta", "érase una vez"]],
      ex: [
        ["c", "«Dante nacque a Firenze.» nacque =", "nació", "nacía", "nacerá"],
        ["c", "«Dissero di no.» ¿Quién lo dijo?", "ellos", "él", "vosotros"],
        ["g", "Infinitivo de «fece»:", "fare"],
        ["g", "Infinitivo de «vidi»:", "vedere"],
        ["c", "«Roma fu fondata nel 753 a.C.» fu =", "fue", "era", "fuera"],
        ["c", "Passato remoto de «prendere» (io):", "presi", "prendei", "prenduto"],
        ["g", "Infinitivo de «vennero»:", "venire"],
        ["c", "«Ebbe» es una forma de…", "avere", "essere", "bere"],
        ["t", "Érase una vez un rey", "C'era una volta un re"],
      ],
    },
    {
      t: "La forma pasiva",
      body: `<ul><li><b>essere</b> + participio (concuerda) + <b>da</b>: <i>Il libro è stato scritto <b>da</b> Eco.</i></li>
<li><b>venire</b> + participio — solo en tiempos simples, subraya la acción: <i>La porta <b>viene chiusa</b> alle otto.</i></li>
<li><b>andare</b> + participio = «debe ser»: <i>Il modulo <b>va compilato</b>.</i> (hay que rellenarlo)</li>
<li><b>si</b> pasivo: <i>Si vendono libri usati.</i></li></ul>
<table><tr><td>presente</td><td>è / viene fatto</td></tr><tr><td>passato prossimo</td><td>è stato fatto</td></tr><tr><td>imperfetto</td><td>era / veniva fatto</td></tr>
<tr><td>futuro</td><td>sarà / verrà fatto</td></tr><tr><td>condizionale passato</td><td>sarebbe stato fatto</td></tr></table>
<p>El agente siempre con <b>da</b>, nunca con «per».</p>`,
      vocabTitle: "Economía y trámites",
      vocab: [["il mercato", "el mercado"], ["il prezzo", "el precio"], ["le tasse", "los impuestos"], ["lo sconto", "el descuento"], ["la bolletta", "la factura (luz, gas)"], ["il modulo", "el formulario"], ["compilare", "rellenar"], ["firmare", "firmar"], ["la scadenza", "el vencimiento, el plazo"], ["il pagamento", "el pago"], ["la banca", "el banco"], ["il mutuo", "la hipoteca"]],
      ex: [
        ["g", "Il libro è ___ scritto da Eco.", "stato"],
        ["c", "La cena ___ servita alle otto.", "viene", "va a", "ha"],
        ["c", "«Il modulo va compilato» =", "Debe rellenarse", "Se va a rellenar", "Ya está rellenado"],
        ["g", "Le bollette ___ pagate ogni mese. (venire)", "vengono"],
        ["c", "La casa è stata ___ nel 1900.", "costruita", "costruito", "costruire"],
        ["c", "L'America fu scoperta ___ Colombo.", "da", "per", "di"],
        ["g", "I prezzi ___ stati aumentati. (auxiliar)", "sono"],
        ["t", "La carta fue enviada ayer", "La lettera è stata inviata ieri|La lettera è stata spedita ieri"],
        ["o", "Este documento debe firmarse hoy", "Questo documento va firmato oggi"],
      ],
    },
    {
      t: "El estilo indirecto",
      body: `<p>Si el verbo que introduce está en presente, nada cambia: <i>Dice che <b>è</b> stanco.</i></p>
<p>Si está en pasado, los tiempos retroceden:</p>
<table><tr><th>directo</th><th>indirecto</th></tr>
<tr><td>«Sono stanco.»</td><td>Ha detto che <b>era</b> stanco.</td></tr>
<tr><td>«Ho mangiato.»</td><td>Ha detto che <b>aveva mangiato</b>.</td></tr>
<tr><td>«Verrò.»</td><td>Ha detto che <b>sarebbe venuto</b>.</td></tr>
<tr><td>«Aspetta!»</td><td>Mi ha detto <b>di aspettare</b>.</td></tr>
<tr><td>«Hai fame?»</td><td>Mi ha chiesto <b>se avessi</b> fame.</td></tr></table>
<p>También cambian las referencias: <i>qui → lì · oggi → quel giorno · domani → il giorno dopo · ieri → il giorno prima · questo → quello</i>.</p>`,
      vocabTitle: "Verbos para contar lo que se dijo",
      vocab: [["affermare", "afirmar"], ["sostenere", "sostener, defender"], ["ammettere", "admitir"], ["negare", "negar"], ["aggiungere", "añadir"], ["spiegare", "explicar"], ["rispondere", "responder"], ["avvertire", "avisar"], ["lamentarsi", "quejarse"], ["suggerire", "sugerir"], ["ribadire", "reiterar"], ["accennare", "mencionar de pasada"]],
      ex: [
        ["c", "«Sono stanco.» → Ha detto che ___ stanco.", "era", "è stato", "sarebbe"],
        ["c", "«Verrò domani.» → Ha detto che ___ il giorno dopo.", "sarebbe venuto", "verrà", "venisse"],
        ["g", "«Aspetta!» → Mi ha detto ___ aspettare.", "di"],
        ["c", "«Hai fame?» → Mi ha chiesto ___ avessi fame.", "se", "che", "di"],
        ["g", "«Ho già mangiato.» → Ha detto che ___ già mangiato.", "aveva"],
        ["c", "«domani» en estilo indirecto:", "il giorno dopo", "il giorno prima", "quel giorno"],
        ["c", "«Non toccare!» → Mi ha avvertito di non ___.", "toccare", "toccavo", "toccassi"],
        ["t", "Me dijo que me llamaría", "Mi ha detto che mi avrebbe chiamato"],
        ["o", "Me preguntó dónde vivía", "Mi ha chiesto dove abitassi"],
      ],
    },
  ],
};
