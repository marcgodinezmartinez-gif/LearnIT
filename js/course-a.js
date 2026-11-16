// Curso por niveles, parte 1: A1 y A2.
// Ejercicios:
//   ["c", enunciado, correcta, incorrecta, incorrecta]   elegir
//   ["g", enunciado con ___, respuesta|alternativa]      escribir el hueco
//   ["t", español, italiano|alternativa]                 traducir
//   ["o", español, italiano]                             ordenar las palabras

export const A1 = {
  id: "A1",
  name: "Los cimientos",
  desc: "Artículos, presente y preposiciones: la estructura básica de cualquier frase.",
  lessons: [
    {
      t: "Artículos, género y plural",
      body: `<p>Los nombres en <b>-o</b> suelen ser masculinos, los en <b>-a</b> femeninos y los en <b>-e</b> pueden ser de cualquiera de los dos.</p>
<p><b>El plural no lleva -s</b>, cambia la vocal:</p>
<table><tr><td>-o → -i</td><td>libro → libri</td></tr><tr><td>-a → -e</td><td>casa → case</td></tr><tr><td>-e → -i</td><td>notte → notti</td></tr></table>
<p><b>Artículo determinado</b></p>
<table><tr><th></th><th>singular</th><th>plural</th></tr>
<tr><td>masc. + consonante</td><td><b>il</b> libro</td><td><b>i</b> libri</td></tr>
<tr><td>masc. + s+cons., z, gn, ps</td><td><b>lo</b> studente</td><td><b>gli</b> studenti</td></tr>
<tr><td>masc. + vocal</td><td><b>l'</b>amico</td><td><b>gli</b> amici</td></tr>
<tr><td>fem. + consonante</td><td><b>la</b> casa</td><td><b>le</b> case</td></tr>
<tr><td>fem. + vocal</td><td><b>l'</b>amica</td><td><b>le</b> amiche</td></tr></table>
<p><b>Indeterminado:</b> <i>un</i> libro, <i>uno</i> studente, <i>una</i> casa, <i>un'</i>amica.</p>`,
      vocabTitle: "La famiglia",
      vocab: [["la madre", "la madre"], ["il padre", "el padre"], ["il fratello", "el hermano"], ["la sorella", "la hermana"], ["il figlio", "el hijo"], ["la figlia", "la hija"], ["il nonno", "el abuelo"], ["la nonna", "la abuela"], ["lo zio", "el tío"], ["la zia", "la tía"], ["il marito", "el marido"], ["la moglie", "la mujer (esposa)"]],
      ex: [
        ["c", "___ studente", "lo", "il", "l'"],
        ["c", "___ amici", "gli", "i", "le"],
        ["c", "Plural de «la notte»", "le notti", "le notte", "i notti"],
        ["g", "il libro → i ___", "libri"],
        ["g", "___ zio (artículo determinado)", "lo"],
        ["c", "___ amica (indeterminado)", "un'", "una", "uno"],
        ["g", "l'amica → le ___", "amiche"],
        ["t", "los abuelos", "i nonni"],
        ["o", "La hermana de mi padre es mi tía", "La sorella di mio padre è mia zia"],
      ],
    },
    {
      t: "Essere, avere y c'è",
      body: `<table><tr><th></th><th>essere</th><th>avere</th></tr>
<tr><td>io</td><td>sono</td><td>ho</td></tr><tr><td>tu</td><td>sei</td><td>hai</td></tr><tr><td>lui / lei</td><td>è</td><td>ha</td></tr>
<tr><td>noi</td><td>siamo</td><td>abbiamo</td></tr><tr><td>voi</td><td>siete</td><td>avete</td></tr><tr><td>loro</td><td>sono</td><td>hanno</td></tr></table>
<p>El sujeto se omite, como en español. La negación es <b>non</b> delante del verbo: <i>Non sono stanco</i>.</p>
<p><b>Con avere</b> (igual que «tener»): <i>ho fame, ho sete, ho sonno, ho freddo, ho caldo, ho paura, ho fretta, ho ragione, ho trent'anni</i>.</p>
<p><b>Hay</b> = <b>c'è</b> + singular, <b>ci sono</b> + plural (cat. «hi ha»): <i>C'è un bar. Ci sono due bar.</i></p>`,
      vocabTitle: "La casa",
      vocab: [["la cucina", "la cocina"], ["il bagno", "el baño"], ["la camera da letto", "el dormitorio"], ["il soggiorno", "el salón"], ["la finestra", "la ventana"], ["la porta", "la puerta"], ["il tavolo", "la mesa"], ["la sedia", "la silla"], ["il letto", "la cama"], ["la chiave", "la llave"], ["le scale", "las escaleras"], ["il giardino", "el jardín"]],
      ex: [
        ["g", "Noi ___ spagnoli. (essere)", "siamo"],
        ["g", "Tu ___ fame? (avere)", "hai"],
        ["c", "In cucina ___ due sedie.", "ci sono", "c'è", "sono"],
        ["c", "«Tengo treinta años»", "Ho trent'anni", "Sono trent'anni", "Tengo trent'anni"],
        ["g", "Loro ___ una casa grande. (avere)", "hanno"],
        ["c", "Voi ___ italiani?", "siete", "sei", "siamo"],
        ["t", "No tengo sueño", "Non ho sonno"],
        ["t", "Tienes razón", "Hai ragione"],
        ["o", "En el jardín hay una mesa", "In giardino c'è un tavolo"],
      ],
    },
    {
      t: "El presente regular",
      body: `<table><tr><th></th><th>parl<b>are</b></th><th>prend<b>ere</b></th><th>dorm<b>ire</b></th><th>cap<b>ire</b></th></tr>
<tr><td>io</td><td>parlo</td><td>prendo</td><td>dormo</td><td>cap<b>isc</b>o</td></tr>
<tr><td>tu</td><td>parli</td><td>prendi</td><td>dormi</td><td>cap<b>isc</b>i</td></tr>
<tr><td>lui / lei</td><td>parla</td><td>prende</td><td>dorme</td><td>cap<b>isc</b>e</td></tr>
<tr><td>noi</td><td>parliamo</td><td>prendiamo</td><td>dormiamo</td><td>capiamo</td></tr>
<tr><td>voi</td><td>parlate</td><td>prendete</td><td>dormite</td><td>capite</td></tr>
<tr><td>loro</td><td>parlano</td><td>prendono</td><td>dormono</td><td>cap<b>isc</b>ono</td></tr></table>
<p>Tres pistas: <b>tu</b> siempre acaba en <b>-i</b>, <b>noi</b> siempre en <b>-iamo</b>, y en <b>loro</b> el acento va en la raíz: <i>PARlano</i>.</p>
<p>Como <i>capire</i>: <i>finire, preferire, pulire, spedire</i>.</p>
<p>Los verbos en <b>-care / -gare</b> añaden <b>h</b> para conservar el sonido: <i>cerchi, paghiamo</i>.</p>`,
      vocabTitle: "Acciones de cada día",
      vocab: [["parlare", "hablar"], ["mangiare", "comer"], ["lavorare", "trabajar"], ["abitare", "vivir (en un lugar)"], ["prendere", "coger, tomar"], ["leggere", "leer"], ["scrivere", "escribir"], ["dormire", "dormir"], ["capire", "entender"], ["finire", "terminar"], ["aprire", "abrir"], ["chiudere", "cerrar"]],
      ex: [
        ["g", "Io ___ italiano. (parlare)", "parlo"],
        ["g", "Noi ___ a Barcellona. (abitare)", "abitiamo"],
        ["g", "Loro non ___ niente. (capire)", "capiscono"],
        ["c", "Tu ___ un caffè?", "prendi", "prende", "prenda"],
        ["c", "Voi ___ tardi.", "dormite", "dormete", "dormiate"],
        ["g", "Tu ___ il conto? (pagare)", "paghi"],
        ["c", "Lei ___ la finestra.", "apre", "apra", "apri"],
        ["t", "¿A qué hora terminas?", "A che ora finisci?"],
        ["o", "Leemos un libro cada mes", "Leggiamo un libro ogni mese"],
      ],
    },
    {
      t: "Presente irregular y verbos modales",
      body: `<table><tr><th>andare</th><th>fare</th><th>venire</th><th>uscire</th><th>dire</th></tr>
<tr><td>vado</td><td>faccio</td><td>vengo</td><td>esco</td><td>dico</td></tr>
<tr><td>vai</td><td>fai</td><td>vieni</td><td>esci</td><td>dici</td></tr>
<tr><td>va</td><td>fa</td><td>viene</td><td>esce</td><td>dice</td></tr>
<tr><td>andiamo</td><td>facciamo</td><td>veniamo</td><td>usciamo</td><td>diciamo</td></tr>
<tr><td>andate</td><td>fate</td><td>venite</td><td>uscite</td><td>dite</td></tr>
<tr><td>vanno</td><td>fanno</td><td>vengono</td><td>escono</td><td>dicono</td></tr></table>
<p><b>Modales</b> + infinitivo:</p>
<table><tr><th>potere</th><th>volere</th><th>dovere</th><th>sapere</th></tr>
<tr><td>posso</td><td>voglio</td><td>devo</td><td>so</td></tr><tr><td>puoi</td><td>vuoi</td><td>devi</td><td>sai</td></tr>
<tr><td>può</td><td>vuole</td><td>deve</td><td>sa</td></tr><tr><td>possiamo</td><td>vogliamo</td><td>dobbiamo</td><td>sappiamo</td></tr>
<tr><td>potete</td><td>volete</td><td>dovete</td><td>sapete</td></tr><tr><td>possono</td><td>vogliono</td><td>devono</td><td>sanno</td></tr></table>
<p>«Tener que» es <b>dovere</b>: <i>Devo lavorare</i>. «Saber hacer algo» es <b>sapere</b>: <i>So nuotare</i>.</p>`,
      vocabTitle: "La città",
      vocab: [["la strada", "la calle, la carretera"], ["la piazza", "la plaza"], ["la stazione", "la estación"], ["il negozio", "la tienda"], ["il supermercato", "el supermercado"], ["la chiesa", "la iglesia"], ["la farmacia", "la farmacia"], ["l'ufficio", "la oficina"], ["la scuola", "la escuela"], ["l'ospedale", "el hospital"], ["il ristorante", "el restaurante"], ["la fermata", "la parada"]],
      ex: [
        ["g", "Dove ___? (andare, tu)", "vai"],
        ["g", "Stasera ___ con gli amici. (uscire, io)", "esco"],
        ["c", "Che cosa ___ domani? (voi)", "fate", "facete", "fanno"],
        ["c", "«Tengo que trabajar»", "Devo lavorare", "Tengo che lavorare", "Ho che lavorare"],
        ["g", "Loro ___ dalla Spagna. (venire)", "vengono"],
        ["c", "Noi ___ restare a casa. (volere)", "vogliamo", "voliamo", "vogliono"],
        ["g", "Che cosa ___? (dire, tu)", "dici"],
        ["t", "¿Puedes venir mañana?", "Puoi venire domani?"],
        ["o", "No sé dónde está la estación", "Non so dov'è la stazione"],
      ],
    },
    {
      t: "Las preposiciones",
      body: `<p><b>di</b> (de) · <b>a</b> (a, en) · <b>da</b> (desde, de, en casa de) · <b>in</b> (en) · <b>con</b> · <b>su</b> (sobre) · <b>per</b> (para, por) · <b>tra / fra</b> (entre, dentro de)</p>
<p>Lo que más cambia respecto al español:</p>
<ul><li><b>a</b> + ciudad: <i>Abito a Milano. Vado a Roma.</i></li>
<li><b>in</b> + país o región: <i>Vivo in Spagna. Vado in Italia.</i></li>
<li><b>da</b> + persona = a/en casa de: <i>Vado da Maria.</i></li>
<li><b>in</b> + transporte: <i>in macchina, in treno</i>; pero <i>a piedi</i>.</li></ul>
<p><b>Con artículo se funden:</b></p>
<table><tr><th></th><th>il</th><th>lo</th><th>la</th><th>l'</th><th>i</th><th>gli</th><th>le</th></tr>
<tr><td>di</td><td>del</td><td>dello</td><td>della</td><td>dell'</td><td>dei</td><td>degli</td><td>delle</td></tr>
<tr><td>a</td><td>al</td><td>allo</td><td>alla</td><td>all'</td><td>ai</td><td>agli</td><td>alle</td></tr>
<tr><td>da</td><td>dal</td><td>dallo</td><td>dalla</td><td>dall'</td><td>dai</td><td>dagli</td><td>dalle</td></tr>
<tr><td>in</td><td>nel</td><td>nello</td><td>nella</td><td>nell'</td><td>nei</td><td>negli</td><td>nelle</td></tr>
<tr><td>su</td><td>sul</td><td>sullo</td><td>sulla</td><td>sull'</td><td>sui</td><td>sugli</td><td>sulle</td></tr></table>
<p><i>Con</i> y <i>per</i> no se funden: <i>con il treno, per la casa</i>.</p>`,
      vocabTitle: "Días y tiempo",
      vocab: [["lunedì", "lunes"], ["martedì", "martes"], ["mercoledì", "miércoles"], ["giovedì", "jueves"], ["venerdì", "viernes"], ["sabato", "sábado"], ["domenica", "domingo"], ["oggi", "hoy"], ["domani", "mañana"], ["ieri", "ayer"], ["la settimana", "la semana"], ["il mese", "el mes"]],
      ex: [
        ["c", "Abito ___ Barcellona.", "a", "in", "di"],
        ["c", "Vado ___ Italia.", "in", "a", "all'"],
        ["g", "Il libro è ___ tavolo. (su + il)", "sul"],
        ["g", "Vengo ___ stazione. (da + la)", "dalla"],
        ["c", "Stasera ceno ___ Maria.", "da", "a", "in"],
        ["g", "La chiave ___ macchina. (di + la)", "della"],
        ["c", "Andiamo ___ treno.", "in", "con", "a"],
        ["t", "Voy al supermercado", "Vado al supermercato"],
        ["o", "El lunes trabajo en casa", "Lunedì lavoro a casa"],
      ],
    },
    {
      t: "Adjetivos, posesivos y demostrativos",
      body: `<p><b>Adjetivos:</b> concuerdan y suelen ir detrás. En -o: <i>rosso, rossa, rossi, rosse</i>. En -e: <i>grande, grandi</i>.</p>
<p><b>Posesivos</b>, con artículo (como en catalán):</p>
<table><tr><td>il mio</td><td>la mia</td><td>i miei</td><td>le mie</td></tr><tr><td>il tuo</td><td>la tua</td><td>i tuoi</td><td>le tue</td></tr>
<tr><td>il suo</td><td>la sua</td><td>i suoi</td><td>le sue</td></tr><tr><td>il nostro</td><td>la nostra</td><td>i nostri</td><td>le nostre</td></tr>
<tr><td>il vostro</td><td>la vostra</td><td>i vostri</td><td>le vostre</td></tr><tr><td>il loro</td><td>la loro</td><td>i loro</td><td>le loro</td></tr></table>
<p>Sin artículo con familiares en singular: <i>mia madre, tuo fratello</i>.</p>
<p><b>Demostrativos:</b> <i>questo/a/i/e</i> (este). <b>Quello</b> (aquel, ese) cambia como el artículo: <i>quel libro, quello studente, quell'amico, quella casa, quei libri, quegli amici, quelle case</i>.</p>
<p><b>Molto, poco, troppo:</b> con nombre concuerdan (<i>molti amici</i>); con adjetivo o verbo no cambian (<i>molto bella</i>).</p>`,
      vocabTitle: "Adjetivos y colores",
      vocab: [["grande", "grande"], ["piccolo", "pequeño"], ["bello", "bonito"], ["brutto", "feo"], ["nuovo", "nuevo"], ["vecchio", "viejo"], ["buono", "bueno"], ["cattivo", "malo"], ["rosso", "rojo"], ["verde", "verde"], ["bianco", "blanco"], ["nero", "negro"]],
      ex: [
        ["g", "Una casa ___. (nuovo)", "nuova"],
        ["g", "Due macchine ___. (rosso)", "rosse"],
        ["c", "___ fratello si chiama Luca.", "Mio", "Il mio", "Mi"],
        ["c", "___ amici sono simpatici.", "I miei", "Miei", "I mii"],
        ["c", "___ studente è spagnolo.", "Quello", "Quel", "Quei"],
        ["g", "Ho ___ amici a Roma. (molto)", "molti"],
        ["c", "Sono ___ stanca.", "molto", "molta", "molti"],
        ["t", "Mi casa es pequeña", "La mia casa è piccola|Casa mia è piccola"],
        ["o", "Esos libros son viejos", "Quei libri sono vecchi"],
      ],
    },
  ],
};

export const A2 = {
  id: "A2",
  name: "Contar y entenderse",
  desc: "Pasado, futuro, pronombres y órdenes: ya puedes contar lo que hiciste y lo que harás.",
  lessons: [
    {
      t: "Passato prossimo",
      body: `<p>Presente de <b>avere</b> o <b>essere</b> + participio (<i>-ato, -uto, -ito</i>). Al hablar sirve tanto para «he hecho» como para «hice».</p>
<ul><li><b>avere</b>: la mayoría → <i>ho mangiato, hai dormito</i></li>
<li><b>essere</b>: movimiento, estado y cambio (<i>andare, venire, arrivare, partire, tornare, uscire, entrare, restare, rimanere, nascere, morire, diventare, essere, stare</i>) y todos los reflexivos.</li></ul>
<p>Con <b>essere</b> el participio concuerda: <i>è andat<b>o</b> / è andat<b>a</b> / sono andat<b>i</b> / sono andat<b>e</b></i>.</p>
<p><b>Participios irregulares:</b> fare → <i>fatto</i>, dire → <i>detto</i>, vedere → <i>visto</i>, prendere → <i>preso</i>, mettere → <i>messo</i>, scrivere → <i>scritto</i>, leggere → <i>letto</i>, aprire → <i>aperto</i>, chiudere → <i>chiuso</i>, essere → <i>stato</i>, venire → <i>venuto</i>, rimanere → <i>rimasto</i>, nascere → <i>nato</i>, bere → <i>bevuto</i>, perdere → <i>perso</i>, chiedere → <i>chiesto</i>, rispondere → <i>risposto</i>.</p>`,
      vocabTitle: "Viajes y vacaciones",
      vocab: [["il viaggio", "el viaje"], ["la vacanza", "las vacaciones"], ["il biglietto", "el billete"], ["la valigia", "la maleta"], ["l'aereo", "el avión"], ["il treno", "el tren"], ["l'albergo", "el hotel"], ["la spiaggia", "la playa"], ["la montagna", "la montaña"], ["il mare", "el mar"], ["partire", "salir de viaje"], ["tornare", "volver"]],
      ex: [
        ["g", "Ieri ___ una pizza. (mangiare, io)", "ho mangiato"],
        ["g", "Maria ___ alle otto. (arrivare)", "è arrivata"],
        ["g", "Noi ___ un film. (vedere)", "abbiamo visto"],
        ["c", "I ragazzi ___ presto.", "sono partiti", "hanno partito", "sono partito"],
        ["c", "Che cosa ___? (fare, tu)", "hai fatto", "hai faciuto", "sei fatto"],
        ["g", "Loro ___ a casa. (rimanere)", "sono rimasti|sono rimaste"],
        ["c", "Dove ___ nato?", "sei", "hai", "stai"],
        ["t", "He perdido el billete", "Ho perso il biglietto"],
        ["o", "El año pasado fuimos a la playa", "L'anno scorso siamo andati in spiaggia"],
      ],
    },
    {
      t: "Verbos reflexivos",
      body: `<p>Pronombre delante del verbo: <b>mi, ti, si, ci, vi, si</b>.</p>
<table><tr><td>mi alzo</td><td>ci alziamo</td></tr><tr><td>ti alzi</td><td>vi alzate</td></tr><tr><td>si alza</td><td>si alzano</td></tr></table>
<p>Con infinitivo, pegado detrás o delante del modal: <i>Devo alzar<b>mi</b></i> = <i><b>Mi</b> devo alzare</i>.</p>
<p>El pasado va <b>siempre con essere</b>: <i>mi sono alzato/a, ci siamo divertiti</i>.</p>
<p>Los más útiles: <i>svegliarsi, alzarsi, lavarsi, vestirsi, riposarsi, addormentarsi, sentirsi, divertirsi, annoiarsi, arrabbiarsi</i> (enfadarse), <i>sbrigarsi</i> (darse prisa), <i>fermarsi</i> (pararse), <i>ricordarsi, dimenticarsi, chiamarsi</i>.</p>`,
      vocabTitle: "La rutina",
      vocab: [["svegliarsi", "despertarse"], ["alzarsi", "levantarse"], ["lavarsi", "lavarse"], ["vestirsi", "vestirse"], ["riposarsi", "descansar"], ["addormentarsi", "dormirse"], ["divertirsi", "divertirse"], ["arrabbiarsi", "enfadarse"], ["la faccia", "la cara"], ["le mani", "las manos"], ["i denti", "los dientes"], ["i capelli", "el pelo"]],
      ex: [
        ["g", "Io ___ alle sette. (svegliarsi)", "mi sveglio"],
        ["g", "Come ___? (chiamarsi, tu)", "ti chiami"],
        ["c", "Ieri Anna ___ tardi.", "si è alzata", "ha alzato", "si ha alzata"],
        ["c", "Noi ___ molto alla festa.", "ci siamo divertiti", "abbiamo divertiti", "ci abbiamo divertito"],
        ["g", "I bambini ___ le mani. (lavarsi)", "si lavano"],
        ["c", "Voglio ___ un po'.", "riposarmi", "mi riposare", "riposarsi"],
        ["g", "Ieri sera ___ subito. (addormentarsi, io)", "mi sono addormentato|mi sono addormentata"],
        ["t", "Tengo que darme prisa", "Devo sbrigarmi|Mi devo sbrigare"],
        ["o", "Por qué te enfadas siempre", "Perché ti arrabbi sempre"],
      ],
    },
    {
      t: "Pronombres directos",
      body: `<p><b>mi, ti, lo, la, ci, vi, li, le</b> — delante del verbo: <i>Lo conosco. Le compro.</i></p>
<p>Con infinitivo, pegado: <i>Voglio veder<b>lo</b></i> = <i><b>Lo</b> voglio vedere</i>.</p>
<p><i>Lo</i> y <i>la</i> se apostrofan ante vocal o h: <i><b>L'</b>ho visto</i>.</p>
<p><b>En el passato prossimo el participio concuerda</b> con <i>lo, la, li, le</i>:</p>
<ul><li><i>Maria? L'ho vist<b>a</b>.</i></li><li><i>I biglietti? Li ho comprat<b>i</b>.</i></li><li><i>Le chiavi? Le ho pers<b>e</b>.</i></li></ul>
<p><b>La</b> es también «a usted»: <i>La ringrazio.</i></p>`,
      vocabTitle: "Hacer la compra",
      vocab: [["il pane", "el pan"], ["il latte", "la leche"], ["le uova", "los huevos"], ["il formaggio", "el queso"], ["la carne", "la carne"], ["il pesce", "el pescado"], ["la frutta", "la fruta"], ["la verdura", "la verdura"], ["i pomodori", "los tomates"], ["le mele", "las manzanas"], ["lo zucchero", "el azúcar"], ["il sale", "la sal"]],
      ex: [
        ["c", "Conosci Marco? — Sì, ___ conosco.", "lo", "la", "gli"],
        ["c", "Compri le mele? — Sì, ___ compro.", "le", "li", "la"],
        ["g", "Hai visto Maria? — Sì, l'ho ___. (vedere)", "vista"],
        ["g", "Hai comprato i pomodori? — Sì, ___ ho comprati.", "li"],
        ["c", "Il pane? ___ ho già preso.", "L'", "Li", "Le"],
        ["g", "Le uova? Le ho ___. (finire)", "finite"],
        ["c", "«¿Me ayudas?»", "Mi aiuti?", "Aiuti mi?", "Io aiuti?"],
        ["t", "No lo entiendo", "Non lo capisco"],
        ["o", "Quiero verla mañana", "Voglio vederla domani"],
      ],
    },
    {
      t: "Pronombres indirectos y piacere",
      body: `<p><b>mi, ti, gli</b> (a él), <b>le</b> (a ella, a usted), <b>ci, vi, gli</b> (a ellos): <i>Gli telefono. Le scrivo.</i></p>
<p><b>Piacere</b> funciona como «gustar»:</p>
<ul><li><i>Mi piace</i> + singular o infinitivo: <i>Mi piace il mare. Mi piace nuotare.</i></li>
<li><i>Mi piacciono</i> + plural: <i>Mi piacciono i film italiani.</i></li>
<li>Pasado con <b>essere</b>: <i>Mi è piaciuto/a. Mi sono piaciuti/e.</i></li></ul>
<p>Para insistir: <i>A me piace</i>. Para coincidir: <i>Anche a me</i> / <i>Neanche a me</i>.</p>
<p>Igual que piacere: <i>servire, mancare, sembrare, bastare, interessare</i>.</p>`,
      vocabTitle: "Gustos y tiempo libre",
      vocab: [["il calcio", "el fútbol"], ["la musica", "la música"], ["il cinema", "el cine"], ["la partita", "el partido"], ["la canzone", "la canción"], ["ballare", "bailar"], ["nuotare", "nadar"], ["correre", "correr"], ["cucinare", "cocinar"], ["viaggiare", "viajar"], ["suonare", "tocar (un instrumento)"], ["il tempo libero", "el tiempo libre"]],
      ex: [
        ["c", "A Marco? ___ telefono stasera.", "Gli", "Lo", "Le"],
        ["c", "A Maria? ___ scrivo domani.", "Le", "La", "Gli"],
        ["g", "Mi ___ i film italiani. (piacere)", "piacciono"],
        ["g", "Ti ___ ballare? (piacere)", "piace"],
        ["c", "«A mí tampoco»", "Neanche a me", "Anche a me", "A me no"],
        ["g", "Vi ___ le canzoni? (piacere, pasado: aux + participio)", "sono piaciute"],
        ["c", "Che cosa ___ sembra?", "ti", "te", "tu"],
        ["t", "¿Te ha gustado la película?", "Ti è piaciuto il film?"],
        ["o", "No nos gusta correr", "Non ci piace correre"],
      ],
    },
    {
      t: "Imperfetto",
      body: `<table><tr><th></th><th>parlare</th><th>avere</th><th>dormire</th><th>essere</th></tr>
<tr><td>io</td><td>parlavo</td><td>avevo</td><td>dormivo</td><td>ero</td></tr><tr><td>tu</td><td>parlavi</td><td>avevi</td><td>dormivi</td><td>eri</td></tr>
<tr><td>lui / lei</td><td>parlava</td><td>aveva</td><td>dormiva</td><td>era</td></tr><tr><td>noi</td><td>parlavamo</td><td>avevamo</td><td>dormivamo</td><td>eravamo</td></tr>
<tr><td>voi</td><td>parlavate</td><td>avevate</td><td>dormivate</td><td>eravate</td></tr><tr><td>loro</td><td>parlavano</td><td>avevano</td><td>dormivano</td><td>erano</td></tr></table>
<p>Irregulares: <i>fare → facevo, dire → dicevo, bere → bevevo</i>.</p>
<p>Se usa como en español: descripciones, costumbres y acciones en curso. El contraste con el passato prossimo también es el mismo:</p>
<ul><li><i>Da piccolo <b>andavo</b> al mare ogni estate.</i> (costumbre)</li><li><i>Ieri <b>sono andato</b> al mare.</i> (hecho puntual)</li><li><i>Mentre <b>mangiavo</b>, <b>è arrivato</b> Luca.</i></li></ul>`,
      vocabTitle: "Recuerdos y frecuencia",
      vocab: [["da piccolo", "de pequeño"], ["una volta", "antes; una vez"], ["spesso", "a menudo"], ["sempre", "siempre"], ["mai", "nunca"], ["di solito", "normalmente"], ["ogni tanto", "de vez en cuando"], ["all'improvviso", "de repente"], ["mentre", "mientras"], ["il ricordo", "el recuerdo"], ["l'infanzia", "la infancia"], ["giocare", "jugar"]],
      ex: [
        ["g", "Da piccolo ___ a calcio. (giocare, io)", "giocavo"],
        ["g", "Quando ___ bambini, abitavamo a Roma. (essere, noi)", "eravamo"],
        ["c", "Mentre ___, è suonato il telefono.", "dormivo", "ho dormito", "dormo"],
        ["c", "Ieri ___ al cinema.", "sono andato", "andavo", "vado"],
        ["g", "Che cosa ___? (fare, tu, imperfetto)", "facevi"],
        ["c", "Ogni estate ___ dai nonni.", "andavamo", "siamo andati", "andiamo"],
        ["g", "Loro ___ sempre vino. (bere, imperfetto)", "bevevano"],
        ["t", "Hacía frío y no había nadie", "Faceva freddo e non c'era nessuno"],
        ["o", "Antes fumaba pero ya no fumo", "Una volta fumavo ma non fumo più"],
      ],
    },
    {
      t: "El futuro",
      body: `<p>-are y -ere → <b>-erò</b>; -ire → <b>-irò</b>:</p>
<table><tr><td>parlerò</td><td>parleremo</td></tr><tr><td>parlerai</td><td>parlerete</td></tr><tr><td>parlerà</td><td>parleranno</td></tr></table>
<p><b>Raíces irregulares:</b> essere → <i>sarò</i>, avere → <i>avrò</i>, andare → <i>andrò</i>, fare → <i>farò</i>, potere → <i>potrò</i>, dovere → <i>dovrò</i>, sapere → <i>saprò</i>, vedere → <i>vedrò</i>, venire → <i>verrò</i>, volere → <i>vorrò</i>, rimanere → <i>rimarrò</i>, bere → <i>berrò</i>, stare → <i>starò</i>, dare → <i>darò</i>.</p>
<p>Ortografía: <i>cercherò, pagherò</i>; <i>mangerò, comincerò</i>.</p>
<p><b>Usos:</b> futuro; suposiciones (<i>Sarà a casa</i> = estará en casa); y tras <i>quando</i> o <i>se</i> donde el español usa subjuntivo: <i>Quando arriverò, ti chiamerò</i> (cuando llegue).</p>
<p>En la conversación, para algo cercano basta el presente: <i>Domani vado a Roma.</i></p>`,
      vocabTitle: "El trabajo",
      vocab: [["il lavoro", "el trabajo"], ["il collega", "el compañero de trabajo"], ["il capo", "el jefe"], ["la riunione", "la reunión"], ["lo stipendio", "el sueldo"], ["il progetto", "el proyecto"], ["il colloquio", "la entrevista"], ["l'azienda", "la empresa"], ["le ferie", "las vacaciones (del trabajo)"], ["l'orario", "el horario"], ["il contratto", "el contrato"], ["il cliente", "el cliente"]],
      ex: [
        ["g", "Domani ___ con Luca. (parlare, io)", "parlerò"],
        ["g", "L'anno prossimo ___ in Italia. (andare, noi)", "andremo"],
        ["c", "Quando ___, ti chiamerò.", "arriverò", "arrivassi", "arrivare"],
        ["c", "Loro ___ alle nove. (venire)", "verranno", "veniranno", "vengeranno"],
        ["g", "Tu ___ il conto? (pagare, futuro)", "pagherai"],
        ["c", "«Estará cansado» (suposición)", "Sarà stanco", "Era stanco", "Sarebbe stato stanco"],
        ["g", "Voi ___ il progetto? (vedere, futuro)", "vedrete"],
        ["t", "Mañana tendré una reunión", "Domani avrò una riunione"],
        ["o", "Si puedo vendré a la fiesta", "Se potrò verrò alla festa"],
      ],
    },
    {
      t: "Ci y ne",
      body: `<p>El español no las tiene; el catalán sí (<b>hi</b> y <b>en</b>).</p>
<p><b>Ci</b> (= cat. hi)</p>
<ul><li>lugar: <i>Vai a Roma? — Sì, <b>ci</b> vado domani.</i></li>
<li>«en ello, a ello»: <i><b>Ci</b> penso. Non <b>ci</b> credo. <b>Ci</b> provo.</i></li>
<li>expresiones: <i>c'è, ci vuole</i> (se tarda, hace falta), <i>ci metto un'ora</i> (tardo una hora).</li></ul>
<p><b>Ne</b> (= cat. en)</p>
<ul><li>cantidad: <i>Quanti <b>ne</b> vuoi? — <b>Ne</b> voglio due.</i></li>
<li>«de ello»: <i><b>Ne</b> parliamo dopo. Che <b>ne</b> pensi?</i></li>
<li><i>andarsene</i> (irse): <i>Me <b>ne</b> vado.</i></li></ul>
<p>En pasado, con cantidad, el participio concuerda: <i>Ne ho comprat<b>e</b> due.</i></p>`,
      vocabTitle: "Cantidades",
      vocab: [["un chilo", "un kilo"], ["un etto", "cien gramos"], ["mezzo chilo", "medio kilo"], ["un litro", "un litro"], ["una bottiglia", "una botella"], ["un pacco", "un paquete"], ["una fetta", "una loncha, una rebanada"], ["un pezzo", "un trozo"], ["una scatola", "una caja, una lata"], ["un po' di", "un poco de"], ["abbastanza", "bastante, suficiente"], ["troppo", "demasiado"]],
      ex: [
        ["c", "Vai in palestra? — Sì, ___ vado domani.", "ci", "ne", "lo"],
        ["c", "Quanti fratelli hai? — ___ ho due.", "Ne", "Ci", "Li"],
        ["g", "Vuoi del pane? — Sì, ___ voglio una fetta.", "ne"],
        ["g", "Credi a questa storia? — No, non ___ credo.", "ci"],
        ["c", "«¿Qué opinas (de eso)?»", "Che ne pensi?", "Che ci pensi?", "Che lo pensi?"],
        ["c", "«Se tarda una hora»", "Ci vuole un'ora", "Ne vuole un'ora", "Si tarda un'ora"],
        ["g", "Quanto tempo ___ metti per arrivare?", "ci"],
        ["t", "Me voy", "Me ne vado"],
        ["o", "Quisiera dos kilos de eso", "Ne vorrei due chili"],
      ],
    },
    {
      t: "El imperativo",
      body: `<table><tr><th></th><th>parlare</th><th>prendere</th><th>dormire</th></tr>
<tr><td>tu</td><td>parl<b>a</b>!</td><td>prendi!</td><td>dormi!</td></tr>
<tr><td>noi</td><td>parliamo!</td><td>prendiamo!</td><td>dormiamo!</td></tr>
<tr><td>voi</td><td>parlate!</td><td>prendete!</td><td>dormite!</td></tr></table>
<p><b>Negativo con tu:</b> <i>non</i> + infinitivo → <i>Non parlare! Non ti preoccupare!</i></p>
<p><b>Irregulares (tu):</b> <i>va', fa', da', sta', di', vieni, sii</i> (essere), <i>abbi</i> (avere).</p>
<p><b>Los pronombres van detrás, pegados:</b> <i>Prendilo! Scrivimi! Alzati!</i> Con las formas cortas se dobla la consonante: <i>dimmi, fammi, dammi, dillo, fallo, vacci</i>.</p>`,
      vocabTitle: "En la cocina",
      vocab: [["tagliare", "cortar"], ["mescolare", "mezclar, remover"], ["cuocere", "cocer, cocinar"], ["bollire", "hervir"], ["friggere", "freír"], ["aggiungere", "añadir"], ["assaggiare", "probar (comida)"], ["la pentola", "la olla"], ["la padella", "la sartén"], ["il coltello", "el cuchillo"], ["il cucchiaio", "la cuchara"], ["la forchetta", "el tenedor"]],
      ex: [
        ["g", "___ più piano! (parlare, tu)", "Parla"],
        ["g", "Non ___! (preoccuparsi, tu)", "ti preoccupare|preoccuparti"],
        ["c", "___ la verità! (dire + mi)", "Dimmi", "Dicimi", "Mi di'"],
        ["c", "Ragazzi, ___ a tavola!", "venite", "vieni", "venire"],
        ["c", "Non ___ il sale! (tu)", "dimenticare", "dimentica", "dimentichi"],
        ["g", "___ un favore! (fare + mi, tu)", "Fammi"],
        ["g", "___ pazienza! (avere, tu)", "Abbi"],
        ["t", "¡Pruébalo!", "Assaggialo!"],
        ["o", "Corta el pan y ponlo en la mesa", "Taglia il pane e mettilo sul tavolo"],
      ],
    },
  ],
};
