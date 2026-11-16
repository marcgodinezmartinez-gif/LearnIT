// Contenido del plan de 8 semanas.
// Frases: [italiano, español, nota opcional]
// Diálogos: líneas [quién ('a' = la otra persona, 'tu' = tú), italiano, español]

export const UNITS = [
  {
    title: "Rompere il ghiaccio",
    es: "Romper el hielo",
    goal: "Saludar, presentarte y salir del paso cuando no entiendes algo.",
    phrases: [
      ["Piacere di conoscerti!", "¡Encantado de conocerte!"],
      ["È un piacere rivedervi.", "Es un placer volver a veros."],
      ["Come state? Tutto bene?", "¿Cómo estáis? ¿Todo bien?"],
      ["Sto bene, grazie. E voi?", "Estoy bien, gracias. ¿Y vosotros?"],
      ["Grazie mille per l'invito.", "Muchas gracias por la invitación."],

      ["Scusa, puoi ripetere più piano?", "Perdona, ¿puedes repetir más despacio?", "«piano» = despacio (y también «flojito»)."],
      ["Non ho capito l'ultima parola.", "No he entendido la última palabra."],
      ["Come si dice in italiano?", "¿Cómo se dice en italiano?"],
      ["Che cosa vuol dire?", "¿Qué quiere decir?"],
      ["Sto imparando l'italiano, abbiate pazienza!", "Estoy aprendiendo italiano, ¡tened paciencia!"],

      ["Capisco quasi tutto, ma parlare è più difficile.", "Entiendo casi todo, pero hablar es más difícil."],
      ["Correggimi pure se sbaglio.", "Corrígeme sin problema si me equivoco.", "«pure» anima al otro a hacerlo: «adelante»."],
      ["Allora, come va il lavoro?", "Bueno, ¿cómo va el trabajo?", "«Allora» es la muletilla italiana por excelencia."],
      ["Davvero? Non lo sapevo!", "¿De verdad? ¡No lo sabía!"],
      ["Che bello!", "¡Qué bien! / ¡Qué bonito!"],

      ["Magari!", "¡Ojalá!", "También significa «quizá»: «Magari domani» = quizá mañana."],
      ["Dai, raccontami!", "¡Venga, cuéntame!", "«Dai» = venga, va (cat. «va, vinga»)."],
      ["Boh, non lo so.", "Ni idea, no lo sé."],
      ["Certo, volentieri.", "Claro, con mucho gusto."],
      ["Mi fa piacere essere qui.", "Me alegra estar aquí."],

      ["Posso darti del tu?", "¿Puedo tutearte?"],
      ["Come sta, signora?", "¿Cómo está, señora?", "Forma de cortesía (Lei)."],
      ["Mi scusi, non volevo disturbare.", "Disculpe, no quería molestar."],
      ["Permesso?", "¿Se puede?", "Se dice siempre al entrar en casa de alguien."],
      ["Che bella casa che avete!", "¡Qué casa tan bonita tenéis!"],

      ["Vi ho portato un pensierino.", "Os he traído un detallito."],
      ["Il viaggio è andato bene, grazie.", "El viaje ha ido bien, gracias."],
      ["Sono un po' stanco, ma felice.", "Estoy un poco cansado, pero feliz."],
      ["Ci vediamo dopo.", "Nos vemos luego."],
      ["Buonanotte, a domani!", "¡Buenas noches, hasta mañana!"],
    ],
    dialogues: [
      {
        title: "L'arrivo",
        who: "Paola, tu suegra",
        scene: "Llegáis a casa de sus padres. Su madre abre la puerta.",
        lines: [
          ["a", "Eccovi finalmente! Com'è andato il viaggio?", "¡Por fin estáis aquí! ¿Cómo ha ido el viaje?"],
          ["tu", "Benissimo, grazie. È un piacere rivedervi!", "Muy bien, gracias. ¡Es un placer volver a veros!"],
          ["a", "Anche per noi! Ma… parli italiano adesso?", "¡Para nosotros también! Pero… ¿ahora hablas italiano?"],
          ["tu", "Sto imparando. Capisco quasi tutto, ma parlare è più difficile.", "Estoy aprendiendo. Entiendo casi todo, pero hablar es más difícil."],
          ["a", "Ma sei bravissimo! Dai, entra, entra.", "¡Pero si lo haces genial! Venga, pasa, pasa."],
          ["tu", "Permesso? Che bella casa che avete!", "¿Se puede? ¡Qué casa tan bonita tenéis!"],
          ["a", "Grazie! Sarai stanco, vuoi un caffè?", "¡Gracias! Estarás cansado, ¿quieres un café?"],
          ["tu", "Volentieri, grazie mille. Vi ho portato un pensierino.", "Con mucho gusto, muchas gracias. Os he traído un detallito."],
        ],
      },
      {
        title: "Non ho capito",
        who: "Giorgio, tu suegro",
        scene: "Su padre habla rápido y usa una palabra que no conoces.",
        lines: [
          ["a", "Allora, hai trovato traffico sulla tangenziale?", "Bueno, ¿has encontrado tráfico en la ronda?"],
          ["tu", "Scusa, puoi ripetere più piano?", "Perdona, ¿puedes repetir más despacio?"],
          ["a", "Certo! C'era traffico… molte macchine… per strada?", "¡Claro! ¿Había tráfico… muchos coches… por la carretera?"],
          ["tu", "Ah, ho capito! No, per fortuna no. Che cosa vuol dire «tangenziale»?", "¡Ah, ya entiendo! No, por suerte no. ¿Qué quiere decir «tangenziale»?"],
          ["a", "È la strada che gira intorno alla città.", "Es la carretera que rodea la ciudad."],
          ["tu", "Ah, adesso ho capito. Grazie per la pazienza!", "Ah, ahora lo entiendo. ¡Gracias por la paciencia!"],
          ["a", "Figurati! Parli già molto bene.", "¡Faltaría más! Ya hablas muy bien."],
          ["tu", "Magari! Correggimi pure se sbaglio.", "¡Ojalá! Corrígeme sin problema si me equivoco."],
        ],
      },
    ],
    claves: [
      {
        title: "Tu, Lei y voi",
        body: `<p>Italiano tiene tres tratamientos:</p>
<ul><li><b>tu</b> — informal, como en español: <i>Come stai?</i></li>
<li><b>Lei</b> — cortesía, con el verbo en 3.ª persona (como «usted»): <i>Come sta?</i></li>
<li><b>voi</b> — plural para todos, formal o no (como «vosotros / vosaltres»): <i>Come state?</i></li></ul>
<p>Con la familia de tu novia lo normal es que enseguida te digan <i>«Dammi del tu!»</i>. Con la nonna o con desconocidos, empieza con <b>Lei</b> y deja que ellos te inviten a tutear.</p>
<p>Ojo: <i>scusa</i> (tu) / <i>scusi</i> (Lei).</p>`,
        quiz: [
          { q: "Saludas a la abuela con respeto. ¿Qué dices?", opts: ["Come sta?", "Come stai?", "Come state?"], a: 0 },
          { q: "Preguntas a sus dos padres a la vez:", opts: ["Come sta?", "Come state?", "Come stanno?"], a: 1 },
          { q: "Paras a un señor por la calle:", opts: ["Scusa!", "Scusi!", "Scusate!"], a: 1 },
        ],
      },
      {
        title: "Muletillas que te hacen sonar italiano",
        body: `<p>Estas palabritas te dan tiempo para pensar y hacen que suenes natural:</p>
<ul><li><b>Allora…</b> — bueno… / entonces…</li>
<li><b>Dai!</b> — ¡venga! (cat. «va!»)</li>
<li><b>Boh</b> — ni idea</li>
<li><b>Magari</b> — ojalá / quizá</li>
<li><b>Figurati!</b> — ¡faltaría más! / de nada</li>
<li><b>Ecco</b> — aquí está / eso es</li>
<li><b>Cioè</b> — o sea</li>
<li><b>Insomma</b> — en fin / regular</li></ul>
<p>Truco contra la vergüenza: empieza cualquier frase con <i>«Allora…»</i>. Ya estás hablando.</p>`,
        quiz: [
          { q: "Te dan las gracias. Respondes:", opts: ["Boh!", "Figurati!", "Magari!"], a: 1 },
          { q: "«¿Te tocará la lotería?» — «¡Ojalá!»", opts: ["Magari!", "Allora!", "Ecco!"], a: 0 },
          { q: "Quieres decir «o sea…»", opts: ["Dai…", "Insomma…", "Cioè…"], a: 2 },
        ],
      },
      {
        title: "Pronunciación: lo que cambia respecto al español",
        body: `<p>Casi todo se lee como en español, salvo:</p>
<ul><li><b>ce, ci</b> = «che, chi» → <i>cena</i> suena «chena»</li>
<li><b>che, chi</b> = «ke, ki» → <i>chiesa</i> suena «kiesa»</li>
<li><b>ge, gi</b> = como la <b>j</b> catalana de «jardí» → <i>gelato</i></li>
<li><b>gn</b> = ñ / cat. «ny» → <i>lasagne</i></li>
<li><b>gli</b> ≈ cat. «ll» → <i>famiglia</i></li>
<li><b>sce, sci</b> = cat. «xe, xi» → <i>uscire</i></li>
<li><b>z</b> = «ts» o «ds» → <i>grazie</i> = «gratsie»</li></ul>
<p><b>Las dobles se pronuncian</b>, alargando la consonante: <i>pala</i> (pala) ≠ <i>palla</i> (pelota), <i>nono</i> (noveno) ≠ <i>nonno</i> (abuelo). Es lo que más delata a un hispanohablante.</p>`,
        quiz: [
          { q: "«chiesa» se pronuncia…", opts: ["chiesa", "kiesa", "siesa"], a: 1 },
          { q: "«cena» se pronuncia…", opts: ["chena", "kena", "sena"], a: 0 },
          { q: "¿Cuál significa «abuelo»?", opts: ["nono", "nonno", "nonna"], a: 1 },
        ],
      },
    ],
    tutor: {
      title: "La bienvenida",
      role: "You are Paola, his girlfriend's mother. He has just arrived at your home with your daughter. Welcome him warmly, ask about the trip, offer him something, and show curiosity about him learning Italian.",
    },
    prompts: [
      "Preséntate en italiano durante un minuto: quién eres, cómo ha ido el viaje y qué tal estás.",
      "Imagina que no entiendes algo. Pide que te lo repitan de tres maneras distintas.",
      "Llega la abuela. Salúdala con respeto (Lei), dile que estás aprendiendo italiano y dale las gracias por la invitación.",
    ],
  },

  {
    title: "A tavola",
    es: "En la mesa",
    goal: "Sobrevivir (y brillar) en una comida familiar italiana.",
    phrases: [
      ["Che profumino!", "¡Qué bien huele!"],
      ["È buonissimo, complimenti!", "¡Está buenísimo, enhorabuena!"],
      ["Posso avere la ricetta?", "¿Me puedes dar la receta?"],
      ["Mi passi il pane, per favore?", "¿Me pasas el pan, por favor?"],
      ["Ne vorrei ancora un po'.", "Quisiera un poco más.", "«ne» = cat. «en»: «En voldria una mica més»."],

      ["Basta così, grazie, sono pieno.", "Ya está bien, gracias, estoy lleno."],
      ["Solo un assaggio, grazie.", "Solo para probar, gracias."],
      ["Non ne posso più!", "¡No puedo más!"],
      ["Cosa c'è di buono oggi?", "¿Qué hay de bueno hoy?"],
      ["Posso dare una mano?", "¿Puedo echar una mano?"],

      ["Apparecchio io la tavola.", "Pongo yo la mesa.", "Cat. «parar taula». Lo contrario: «sparecchiare»."],
      ["Chi vuole il caffè?", "¿Quién quiere café?"],
      ["Un goccio di vino, grazie.", "Un chorrito de vino, gracias."],
      ["Facciamo un brindisi! Alla salute!", "¡Hagamos un brindis! ¡Salud!"],
      ["Buon appetito! Altrettanto!", "¡Buen provecho! ¡Igualmente!"],

      ["Come si chiama questo piatto?", "¿Cómo se llama este plato?"],
      ["Non l'avevo mai assaggiato.", "No lo había probado nunca."],
      ["È una ricetta di famiglia?", "¿Es una receta de familia?"],
      ["Da noi si mangia più tardi.", "En mi tierra se come más tarde.", "«da noi» = en nuestra casa / en nuestro país."],
      ["Ho una fame da lupi!", "¡Tengo un hambre de lobo!"],

      ["Sono a posto così, grazie.", "Así estoy bien, gracias."],
      ["Questo olio è squisito!", "¡Este aceite está exquisito!", "aceite = olio. «Aceto» es vinagre."],
      ["Sparecchio io, non vi preoccupate.", "Recojo yo la mesa, no os preocupéis."],
      ["Lavo io i piatti!", "¡Lavo yo los platos!"],
      ["La pasta è al dente, perfetta.", "La pasta está al dente, perfecta."],

      ["Preferisco l'acqua frizzante.", "Prefiero el agua con gas.", "Sin gas: «acqua naturale»."],
      ["Mangio di tutto!", "¡Como de todo!"],
      ["Era tutto squisito, grazie davvero.", "Estaba todo exquisito, gracias de verdad."],
      ["Ho mangiato troppo, ma ne valeva la pena.", "He comido demasiado, pero valía la pena."],
      ["Cin cin!", "¡Chinchín!"],
    ],
    dialogues: [
      {
        title: "Il pranzo della domenica",
        who: "Nonna Rosa",
        scene: "Comida del domingo. La abuela ha cocinado y vigila tu plato.",
        lines: [
          ["a", "A tavola, che si fredda!", "¡A la mesa, que se enfría!"],
          ["tu", "Arrivo! Che profumino… cosa c'è di buono?", "¡Voy! Qué bien huele… ¿qué hay de bueno?"],
          ["a", "Lasagne, come le faceva mia madre.", "Lasaña, como la hacía mi madre."],
          ["tu", "Sono buonissime, complimenti! È una ricetta di famiglia?", "¡Está buenísima, enhorabuena! ¿Es una receta de familia?"],
          ["a", "Certo! Ne vuoi ancora un po'?", "¡Claro! ¿Quieres un poco más?"],
          ["tu", "Sì, ma solo un assaggio, grazie.", "Sí, pero solo para probar, gracias."],
          ["a", "Macché assaggio! Mangia, che sei magro!", "¡Qué probar ni qué probar! ¡Come, que estás flaco!"],
          ["tu", "Va bene, va bene… ma dopo non ne posso più!", "Vale, vale… ¡pero después ya no puedo más!"],
        ],
      },
      {
        title: "Dopo pranzo",
        who: "Paola, tu suegra",
        scene: "Habéis terminado de comer y quieres quedar bien.",
        lines: [
          ["a", "Chi vuole il caffè?", "¿Quién quiere café?"],
          ["tu", "Io, grazie! Intanto sparecchio io.", "¡Yo, gracias! Mientras tanto recojo yo la mesa."],
          ["a", "Ma no, lascia stare, sei ospite!", "Que no, déjalo, ¡eres invitado!"],
          ["tu", "Insisto! Voglio dare una mano.", "¡Insisto! Quiero echar una mano."],
          ["a", "Che bravo ragazzo. Ti è piaciuto il pranzo?", "Qué buen chico. ¿Te ha gustado la comida?"],
          ["tu", "Era tutto squisito. Posso avere la ricetta delle lasagne?", "Estaba todo exquisito. ¿Me puedes dar la receta de la lasaña?"],
          ["a", "Devi chiederla alla nonna… è un segreto!", "Tienes que pedírsela a la abuela… ¡es un secreto!"],
          ["tu", "Allora facciamo un brindisi alla nonna. Cin cin!", "Entonces hagamos un brindis por la abuela. ¡Chinchín!"],
        ],
      },
    ],
    claves: [
      {
        title: "«Ne» y «ci»: tu ventaja de catalanohablante",
        body: `<p>El español no tiene estas partículas, pero el catalán sí. Son casi idénticas:</p>
<ul><li><b>ne</b> = cat. <b>en</b> → <i>Ne voglio due</i> = «En vull dos» (quiero dos [de eso])</li>
<li><b>ci</b> = cat. <b>hi</b> → <i>Ci vado domani</i> = «Hi vaig demà» (voy [allí] mañana)</li>
<li><b>c'è / ci sono</b> = cat. <b>hi ha</b> → <i>C'è il pane?</i> = «Hi ha pa?»</li></ul>
<p>Regla práctica: si en catalán dirías «en» o «hi», en italiano di «ne» o «ci».</p>`,
        quiz: [
          { q: "«Vuoi del pane?» — «Sì, ___ voglio un po'.»", opts: ["ne", "ci", "lo"], a: 0 },
          { q: "«Vai a Roma?» — «Sì, ___ vado domani.»", opts: ["ne", "ci", "la"], a: 1 },
          { q: "«Hay dos sillas»", opts: ["C'è due sedie", "Ci sono due sedie", "Ne sono due sedie"], a: 1 },
        ],
      },
      {
        title: "Falsos amigos en la cocina",
        body: `<p>Palabras que parecen españolas y no lo son:</p>
<ul><li><b>burro</b> = mantequilla (el animal es <i>asino</i>)</li>
<li><b>aceto</b> = vinagre (aceite = <i>olio</i>)</li>
<li><b>caldo</b> = caliente / calor (caldo = <i>brodo</i>)</li>
<li><b>pronto</b> = listo, preparado (pronto = <i>presto</i>)</li>
<li><b>subito</b> = enseguida</li>
<li><b>prima</b> = antes</li>
<li><b>tovaglia</b> = mantel (toalla = <i>asciugamano</i>)</li>
<li><b>largo</b> = ancho (largo = <i>lungo</i>)</li></ul>
<p><i>«È pronto!»</i> en la mesa significa «¡Ya está listo!», no «es pronto».</p>`,
        quiz: [
          { q: "«Mi passi il burro?» ¿Qué te piden?", opts: ["El burro", "La mantequilla", "El aceite"], a: 1 },
          { q: "«Attento, è caldo!»", opts: ["Cuidado, es caldo", "Cuidado, está frío", "Cuidado, está caliente"], a: 2 },
          { q: "«La cena è pronta»", opts: ["La cena es temprano", "La cena está lista", "La cena es rápida"], a: 1 },
        ],
      },
      {
        title: "«Mi piace» y «mi è piaciuto»",
        body: `<p><b>Piacere</b> funciona como «gustar / agradar»:</p>
<ul><li><i>Mi piace la pasta</i> · <i>Mi piacciono i ravioli</i></li></ul>
<p>En pasado va con <b>essere</b> y concuerda con lo que te gusta:</p>
<ul><li><i>Mi è piaciut<b>o</b> il pranzo</i></li>
<li><i>Mi è piaciut<b>a</b> la torta</i></li>
<li><i>Mi sono piaciut<b>i</b> i ravioli</i></li>
<li><i>Mi sono piaciut<b>e</b> le lasagne</i></li></ul>
<p>Para elogiar: <i>Mi è piaciuto tantissimo!</i></p>`,
        quiz: [
          { q: "«Me gustan los espaguetis»", opts: ["Mi piace gli spaghetti", "Mi piacciono gli spaghetti", "Mi piaccio gli spaghetti"], a: 1 },
          { q: "«Me ha gustado la tarta»", opts: ["Mi ha piaciuto la torta", "Mi è piaciuto la torta", "Mi è piaciuta la torta"], a: 2 },
          { q: "«Me han gustado las lasañas»", opts: ["Mi sono piaciute le lasagne", "Mi è piaciuto le lasagne", "Mi hanno piaciuto le lasagne"], a: 0 },
        ],
      },
    ],
    tutor: {
      title: "La comida del domingo",
      role: "You are Nonna Rosa, his girlfriend's grandmother, hosting Sunday lunch. You are affectionate, proud of your cooking, and you keep offering more food. Talk about the dishes, ask what he eats at home in Spain, and insist he has seconds.",
    },
    prompts: [
      "Elogia la comida durante un minuto: qué te ha gustado más, pide la receta y ofrece ayuda para recoger.",
      "Te ofrecen repetir por tercera vez. Recházalo con educación de varias maneras.",
      "Explica en italiano qué se come en tu casa un domingo y a qué hora.",
    ],
  },

  {
    title: "Parlare di me",
    es: "Hablar de mí",
    goal: "Contar quién eres, a qué te dedicas y qué te gusta, y preguntar lo mismo.",
    phrases: [
      ["Vengo dalla Spagna.", "Vengo de España."],
      ["A casa parlo catalano e spagnolo.", "En casa hablo catalán y español."],
      ["Che lavoro fai?", "¿En qué trabajas?"],
      ["Lavoro in un'azienda, in ufficio.", "Trabajo en una empresa, en una oficina."],
      ["Il mio lavoro mi piace abbastanza.", "Mi trabajo me gusta bastante."],

      ["Lavoro da casa due giorni alla settimana.", "Trabajo desde casa dos días a la semana."],
      ["Quanti anni hai?", "¿Cuántos años tienes?"],
      ["Ho un fratello più grande.", "Tengo un hermano mayor."],
      ["I miei genitori vivono in Spagna.", "Mis padres viven en España.", "genitori = padres. «Parenti» son los familiares."],
      ["Nel tempo libero mi piace cucinare.", "En mi tiempo libre me gusta cocinar."],

      ["Faccio sport due volte alla settimana.", "Hago deporte dos veces a la semana."],
      ["Per che squadra tifi?", "¿De qué equipo eres?"],
      ["Mi piace molto viaggiare.", "Me gusta mucho viajar."],
      ["Suono un po' la chitarra.", "Toco un poco la guitarra.", "Tocar un instrumento = suonare."],
      ["Abito in un appartamento in centro.", "Vivo en un piso en el centro."],

      ["Stiamo insieme da due anni.", "Llevamos dos años juntos.", "da + presente = «desde hace»."],
      ["Studio italiano da poco.", "Estudio italiano desde hace poco."],
      ["Ho studiato all'università.", "Estudié en la universidad."],
      ["Da piccolo volevo fare il calciatore.", "De pequeño quería ser futbolista."],
      ["Sono una persona tranquilla.", "Soy una persona tranquila."],

      ["Sono un po' timido all'inizio.", "Soy un poco tímido al principio."],
      ["Mi alzo presto la mattina.", "Me levanto temprano por la mañana."],
      ["Di solito ceno tardi.", "Normalmente ceno tarde."],
      ["Non vedo l'ora di tornare.", "Tengo muchas ganas de volver.", "Literal: «no veo la hora de…»."],
      ["Mi trovo molto bene qui.", "Estoy muy a gusto aquí."],

      ["E tu, di cosa ti occupi?", "¿Y tú a qué te dedicas?"],
      ["Da quanto tempo abitate qui?", "¿Cuánto tiempo hace que vivís aquí?"],
      ["Che cosa ti piace fare?", "¿Qué te gusta hacer?"],
      ["Anch'io! Neanch'io.", "¡Yo también! Yo tampoco."],
      ["È una lunga storia!", "¡Es una larga historia!"],
    ],
    dialogues: [
      {
        title: "Le domande dello zio",
        who: "Zio Marco",
        scene: "El tío no te conoce y quiere saberlo todo.",
        lines: [
          ["a", "Allora, tu di cosa ti occupi?", "Bueno, ¿tú a qué te dedicas?"],
          ["tu", "Lavoro in un'azienda, in ufficio. Il mio lavoro mi piace abbastanza.", "Trabajo en una empresa, en una oficina. Mi trabajo me gusta bastante."],
          ["a", "E in Spagna dove abiti?", "¿Y en España dónde vives?"],
          ["tu", "Abito in un appartamento in centro. I miei genitori vivono lì vicino.", "Vivo en un piso en el centro. Mis padres viven allí cerca."],
          ["a", "Ah, bene! E nel tempo libero?", "¡Ah, bien! ¿Y en tu tiempo libre?"],
          ["tu", "Mi piace cucinare e faccio sport due volte alla settimana.", "Me gusta cocinar y hago deporte dos veces a la semana."],
          ["a", "Sport? Per che squadra tifi?", "¿Deporte? ¿De qué equipo eres?"],
          ["tu", "È una lunga storia! E tu, per che squadra tifi?", "¡Es una larga historia! ¿Y tú de qué equipo eres?"],
        ],
      },
      {
        title: "Con la cugina",
        who: "Giulia, la prima",
        scene: "La prima es de vuestra edad y habla contigo en confianza.",
        lines: [
          ["a", "Da quanto tempo state insieme, voi due?", "¿Cuánto tiempo lleváis juntos vosotros dos?"],
          ["tu", "Stiamo insieme da due anni.", "Llevamos dos años juntos."],
          ["a", "Che carini! E l'italiano, dove l'hai imparato?", "¡Qué monos! ¿Y el italiano dónde lo has aprendido?"],
          ["tu", "Lo studio da poco, da solo. A casa parlo catalano e spagnolo.", "Lo estudio desde hace poco, por mi cuenta. En casa hablo catalán y español."],
          ["a", "Davvero? Parli già benissimo!", "¿De verdad? ¡Ya hablas muy bien!"],
          ["tu", "Grazie! Sono un po' timido all'inizio, ma mi trovo molto bene qui.", "¡Gracias! Soy un poco tímido al principio, pero estoy muy a gusto aquí."],
          ["a", "Si vede! Tornerai presto?", "¡Se nota! ¿Volverás pronto?"],
          ["tu", "Non vedo l'ora di tornare!", "¡Tengo muchas ganas de volver!"],
        ],
      },
    ],
    claves: [
      {
        title: "«Da» + presente: desde hace",
        body: `<p>Para algo que empezó en el pasado y sigue, el italiano usa <b>presente + da</b>:</p>
<ul><li><i>Studio italiano <b>da</b> due mesi</i> = Estudio italiano desde hace dos meses</li>
<li><i>Stiamo insieme <b>da</b> due anni</i> = Llevamos dos años juntos</li>
<li><i><b>Da</b> quanto tempo abiti qui?</i> = ¿Cuánto hace que vives aquí?</li></ul>
<p>No se usa «per» ni «fa» aquí. <b>Fa</b> es para algo ya terminado: <i>due anni fa</i> = hace dos años.</p>
<p><b>Da</b> también significa «en casa de»: <i>Vado dai nonni</i> = Voy a casa de los abuelos (cat. «a cal avi»).</p>`,
        quiz: [
          { q: "«Vivo aquí desde hace tres años»", opts: ["Abito qui per tre anni", "Abito qui da tre anni", "Abito qui tre anni fa"], a: 1 },
          { q: "«Llegué hace dos días»", opts: ["Sono arrivato due giorni fa", "Sono arrivato da due giorni", "Arrivo da due giorni"], a: 0 },
          { q: "«Voy a casa de Giulia»", opts: ["Vado a Giulia", "Vado da Giulia", "Vado di Giulia"], a: 1 },
        ],
      },
      {
        title: "Posesivos: con artículo, menos la familia",
        body: `<p>Como en catalán («el meu»), el posesivo italiano lleva artículo:</p>
<ul><li><i><b>il mio</b> lavoro, <b>la mia</b> ragazza, <b>i miei</b> amici</i></li></ul>
<p><b>Excepción:</b> familiares en singular, sin artículo:</p>
<ul><li><i>mia madre, mio padre, mio fratello, tua sorella, sua nonna</i></li></ul>
<p>En plural vuelve el artículo: <i>i miei fratelli, le mie sorelle</i>.</p>
<p><b>I miei</b> a secas = «mis padres»: <i>I miei vivono in Spagna.</i> Y <b>i tuoi</b> = «tus padres»: <i>Come stanno i tuoi?</i></p>`,
        quiz: [
          { q: "«Mi hermana»", opts: ["la mia sorella", "mia sorella", "mi sorella"], a: 1 },
          { q: "«Mi trabajo»", opts: ["mio lavoro", "il mio lavoro", "il mi lavoro"], a: 1 },
          { q: "«Come stanno i tuoi?» pregunta por…", opts: ["tus amigos", "tus padres", "tus cosas"], a: 1 },
        ],
      },
      {
        title: "Falsos amigos sobre personas",
        body: `<ul><li><b>genitori</b> = padres · <b>parenti</b> = familiares</li>
<li><b>nipote</b> = sobrino/a <i>y también</i> nieto/a</li>
<li><b>suocero / suocera</b> = suegro / suegra · <b>cognato/a</b> = cuñado/a</li>
<li><b>imbarazzata</b> = avergonzada (embarazada = <i>incinta</i>)</li>
<li><b>morbido</b> = blando, suave</li>
<li><b>guardare</b> = mirar (guardar = <i>conservare, mettere via</i>)</li>
<li><b>salire</b> = subir (salir = <i>uscire</i>)</li>
<li><b>bravo</b> = bueno en algo, majo (no «valiente»)</li></ul>
<p>Si te dicen <i>«Che bravo!»</i> te están felicitando.</p>`,
        quiz: [
          { q: "«I miei parenti» son…", opts: ["mis padres", "mis familiares", "mis vecinos"], a: 1 },
          { q: "«Sono imbarazzata» significa…", opts: ["Estoy embarazada", "Estoy avergonzada", "Estoy liada"], a: 1 },
          { q: "«Guarda!» significa…", opts: ["¡Guarda!", "¡Mira!", "¡Espera!"], a: 1 },
        ],
      },
    ],
    tutor: {
      title: "El tío curioso",
      role: "You are Zio Marco, his girlfriend's uncle, meeting him for the first time at a family gathering. You are friendly, a bit of a joker, and curious: ask about his job, where he lives, his family, his hobbies and football.",
    },
    prompts: [
      "Habla un minuto sobre tu trabajo: qué haces, dónde, qué te gusta y qué no.",
      "Describe a tu familia: padres, hermanos, dónde viven.",
      "Cuenta qué haces en un día normal, de la mañana a la noche.",
    ],
  },

  {
    title: "La nostra storia",
    es: "Nuestra historia",
    goal: "Contar cosas en pasado: cómo os conocisteis, qué hiciste ayer, anécdotas.",
    phrases: [
      ["Ci siamo conosciuti tramite amici.", "Nos conocimos a través de amigos."],
      ["È stato amore a prima vista… più o meno!", "Fue amor a primera vista… ¡más o menos!"],
      ["Ieri siamo andati in centro.", "Ayer fuimos al centro."],
      ["Ho dormito benissimo.", "He dormido muy bien."],
      ["Stamattina mi sono svegliato tardi.", "Esta mañana me he despertado tarde."],

      ["Abbiamo fatto una passeggiata.", "Hemos dado un paseo."],
      ["Sono arrivato due giorni fa.", "Llegué hace dos días.", "«fa» va detrás: due giorni fa."],
      ["L'anno scorso siamo stati a Roma.", "El año pasado estuvimos en Roma."],
      ["Non ci sono mai stato.", "No he estado nunca allí.", "«ci» = cat. «hi»: «No hi he estat mai»."],
      ["Ho appena finito di mangiare.", "Acabo de terminar de comer.", "appena + participio = acabar de."],

      ["Da piccolo andavo sempre dai nonni.", "De pequeño iba siempre a casa de los abuelos."],
      ["Quando ero bambino, giocavo a calcio.", "Cuando era niño, jugaba al fútbol."],
      ["Mi è piaciuto tantissimo.", "Me ha gustado muchísimo."],
      ["Che cosa avete fatto ieri sera?", "¿Qué hicisteis anoche?"],
      ["Siamo rimasti a casa.", "Nos quedamos en casa."],

      ["Ho visto un bel film.", "He visto una buena película."],
      ["Mi sono divertito molto.", "Me he divertido mucho."],
      ["Ho perso il treno!", "¡He perdido el tren!"],
      ["È successa una cosa buffa.", "Ha pasado una cosa graciosa."],
      ["Te l'ho già detto?", "¿Ya te lo he dicho?"],

      ["Non me lo ricordavo.", "No me acordaba."],
      ["Ho dimenticato le chiavi.", "He olvidado las llaves."],
      ["Siamo usciti con degli amici.", "Salimos con unos amigos."],
      ["Lei mi ha insegnato le prime parole.", "Ella me enseñó las primeras palabras."],
      ["All'inizio non capivo niente.", "Al principio no entendía nada."],

      ["Poi, piano piano, ho imparato.", "Luego, poco a poco, aprendí."],
      ["È stata una bellissima giornata.", "Ha sido un día precioso."],
      ["Ho preso un caffè al bar.", "Me he tomado un café en el bar."],
      ["Faceva freddo, ma c'era il sole.", "Hacía frío, pero había sol."],
      ["Sono tornato a casa a mezzanotte.", "Volví a casa a medianoche."],
    ],
    dialogues: [
      {
        title: "Come vi siete conosciuti?",
        who: "Nonna Rosa",
        scene: "La abuela quiere oír la historia de cómo os conocisteis.",
        lines: [
          ["a", "Ma voi due, come vi siete conosciuti?", "Pero vosotros dos, ¿cómo os conocisteis?"],
          ["tu", "Ci siamo conosciuti tramite amici, due anni fa.", "Nos conocimos a través de amigos, hace dos años."],
          ["a", "E chi ha fatto il primo passo?", "¿Y quién dio el primer paso?"],
          ["tu", "Io! Ma ero molto nervoso. All'inizio non capivo niente di italiano.", "¡Yo! Pero estaba muy nervioso. Al principio no entendía nada de italiano."],
          ["a", "E adesso guarda come parli!", "¡Y ahora mira cómo hablas!"],
          ["tu", "Lei mi ha insegnato le prime parole. Poi, piano piano, ho imparato.", "Ella me enseñó las primeras palabras. Luego, poco a poco, aprendí."],
          ["a", "Che bella storia. È stato amore a prima vista?", "Qué historia más bonita. ¿Fue amor a primera vista?"],
          ["tu", "Più o meno! Per me sì.", "¡Más o menos! Para mí sí."],
        ],
      },
      {
        title: "Cosa avete fatto ieri?",
        who: "Giorgio, tu suegro",
        scene: "Desayuno. Su padre pregunta por el día anterior.",
        lines: [
          ["a", "Allora, cosa avete fatto ieri?", "Bueno, ¿qué hicisteis ayer?"],
          ["tu", "Siamo andati in centro e abbiamo fatto una passeggiata.", "Fuimos al centro y dimos un paseo."],
          ["a", "Vi è piaciuto?", "¿Os gustó?"],
          ["tu", "Tantissimo! Faceva freddo, ma c'era il sole.", "¡Muchísimo! Hacía frío, pero había sol."],
          ["a", "E la sera? Siete usciti?", "¿Y por la noche? ¿Salisteis?"],
          ["tu", "No, siamo rimasti a casa e abbiamo visto un bel film.", "No, nos quedamos en casa y vimos una buena película."],
          ["a", "Bravi. Hai dormito bene?", "Muy bien. ¿Has dormido bien?"],
          ["tu", "Benissimo! Infatti stamattina mi sono svegliato tardi.", "¡Muy bien! De hecho esta mañana me he despertado tarde."],
        ],
      },
    ],
    claves: [
      {
        title: "Passato prossimo: tu pasado para todo",
        body: `<p>Al hablar, el italiano usa <b>passato prossimo</b> tanto para «he hecho» como para «hice»: <i>Ieri <b>ho mangiato</b> la pizza</i>.</p>
<p>Se forma con <b>avere</b> o <b>essere</b> + participio:</p>
<ul><li><b>avere</b> — la mayoría: <i>ho mangiato, ho visto, ho fatto</i></li>
<li><b>essere</b> — movimiento, cambio y reflexivos: <i>sono andato, sono arrivato, sono rimasto, mi sono svegliato</i></li></ul>
<p>Con <b>essere</b>, el participio concuerda: <i>sono andat<b>o</b></i> (él), <i>è andat<b>a</b></i> (ella), <i>siamo andat<b>i</b></i> (nosotros).</p>
<p>Pista: si en francés o catalán antiguo iría con «ser», en italiano va con <i>essere</i>.</p>`,
        quiz: [
          { q: "«Ayer fui al cine»", opts: ["Ieri ho andato al cinema", "Ieri sono andato al cinema", "Ieri andai al cinema"], a: 1 },
          { q: "«Hemos comido bien»", opts: ["Abbiamo mangiato bene", "Siamo mangiati bene", "Abbiamo mangiati bene"], a: 0 },
          { q: "Ella dice «me he despertado»:", opts: ["Mi ho svegliato", "Mi sono svegliato", "Mi sono svegliata"], a: 2 },
        ],
      },
      {
        title: "Participios irregulares imprescindibles",
        body: `<p>Los más usados, de memoria:</p>
<ul><li>fare → <b>fatto</b> · dire → <b>detto</b></li>
<li>vedere → <b>visto</b> · prendere → <b>preso</b></li>
<li>mettere → <b>messo</b> · perdere → <b>perso</b></li>
<li>essere → <b>stato</b> · venire → <b>venuto</b></li>
<li>rimanere → <b>rimasto</b> · scrivere → <b>scritto</b></li>
<li>leggere → <b>letto</b> · bere → <b>bevuto</b></li>
<li>aprire → <b>aperto</b> · chiudere → <b>chiuso</b></li></ul>
<p>Muchos se parecen al catalán: <i>fet, dit, vist, pres, mès, escrit</i>.</p>`,
        quiz: [
          { q: "«He hecho la maleta»", opts: ["Ho faciuto la valigia", "Ho fatto la valigia", "Ho fato la valigia"], a: 1 },
          { q: "«¿Qué has dicho?»", opts: ["Cosa hai detto?", "Cosa hai dito?", "Cosa hai diciuto?"], a: 0 },
          { q: "«He cogido el tren»", opts: ["Ho prenduto il treno", "Ho preso il treno", "Sono preso il treno"], a: 1 },
        ],
      },
      {
        title: "Imperfetto: casi igual que en español",
        body: `<p>Para describir y para costumbres del pasado, como en español:</p>
<ul><li>-are → <b>-avo</b>: <i>parlavo, giocavo, andavo</i></li>
<li>-ere → <b>-evo</b>: <i>avevo, volevo, capivo</i></li>
<li>-ire → <b>-ivo</b>: <i>dormivo, uscivo</i></li>
<li>essere → <b>ero, eri, era, eravamo, eravate, erano</b></li></ul>
<p>Se combina con el passato prossimo igual que en español: <i><b>Faceva</b> freddo e <b>siamo rimasti</b> a casa</i> = Hacía frío y nos quedamos en casa.</p>`,
        quiz: [
          { q: "«De pequeño jugaba al fútbol»", opts: ["Da piccolo ho giocato a calcio", "Da piccolo giocavo a calcio", "Da piccolo giocava a calcio"], a: 1 },
          { q: "«Estaba cansado»", opts: ["Ero stanco", "Stavo stanco", "Sono stato stanco"], a: 0 },
          { q: "«No entendía nada»", opts: ["Non capivo niente", "Non capevo niente", "Non capiva niente"], a: 0 },
        ],
      },
    ],
    tutor: {
      title: "¿Cómo os conocisteis?",
      role: "You are Nonna Rosa, his girlfriend's grandmother. You love a good story: ask how he and your granddaughter met, what he did yesterday and during the trip, and what he was like as a child. Follow up on details so he keeps narrating in the past.",
    },
    prompts: [
      "Cuenta cómo os conocisteis tu novia y tú: dónde, cuándo, qué pasó.",
      "Explica qué hiciste ayer, desde que te levantaste hasta la noche.",
      "Cuenta una anécdota divertida que te haya pasado en un viaje.",
    ],
  },

  {
    title: "Opinioni e chiacchiere",
    es: "Opiniones y charla",
    goal: "Opinar, reaccionar y aguantar una sobremesa con debate.",
    phrases: [
      ["Secondo me, hai ragione.", "En mi opinión, tienes razón."],
      ["Sono d'accordo con te.", "Estoy de acuerdo contigo."],
      ["Non sono tanto d'accordo.", "No estoy muy de acuerdo."],
      ["Dipende, non è così semplice.", "Depende, no es tan sencillo."],
      ["Penso che sia una buona idea.", "Pienso que es una buena idea.", "Tras «penso che» va subjuntivo: sia."],

      ["Mi sembra giusto.", "Me parece justo."],
      ["Non ci credo!", "¡No me lo creo!"],
      ["Hai visto la partita ieri sera?", "¿Viste el partido anoche?"],
      ["Che partita! Hanno giocato benissimo.", "¡Qué partido! Jugaron muy bien."],
      ["L'arbitro era pessimo.", "El árbitro era pésimo."],

      ["Che tempo fa domani?", "¿Qué tiempo hace mañana?"],
      ["Oggi fa un freddo cane!", "¡Hoy hace un frío que pela!"],
      ["Qui si mangia meglio che in Spagna… ma non ditelo a mia madre!", "Aquí se come mejor que en España… ¡pero no se lo digáis a mi madre!"],
      ["È più caro di quanto pensavo.", "Es más caro de lo que pensaba."],
      ["Mi piace di più questo.", "Me gusta más este."],

      ["È il migliore che abbia mai assaggiato.", "Es el mejor que he probado nunca."],
      ["Tu che ne pensi?", "¿Tú qué opinas?"],
      ["Hai proprio ragione.", "Tienes toda la razón."],
      ["Non me ne intendo molto.", "No entiendo mucho del tema."],
      ["Che ne dici?", "¿Qué te parece?"],

      ["In che senso?", "¿En qué sentido?"],
      ["Per esempio?", "¿Por ejemplo?"],
      ["Cioè… non so come spiegarlo.", "O sea… no sé cómo explicarlo."],
      ["Insomma, così così.", "En fin, regular."],
      ["Meno male!", "¡Menos mal!"],

      ["Che peccato!", "¡Qué lástima!"],
      ["Non vale la pena arrabbiarsi.", "No vale la pena enfadarse."],
      ["Da noi è diverso.", "En mi tierra es distinto."],
      ["Sul serio? Raccontami tutto!", "¿En serio? ¡Cuéntamelo todo!"],
      ["Mi hai convinto.", "Me has convencido."],
    ],
    dialogues: [
      {
        title: "La partita",
        who: "Zio Marco",
        scene: "El tío está indignado con el partido de anoche.",
        lines: [
          ["a", "Hai visto la partita ieri sera?", "¿Viste el partido anoche?"],
          ["tu", "Sì! Che partita! Hanno giocato benissimo.", "¡Sí! ¡Qué partido! Jugaron muy bien."],
          ["a", "Ma dai! L'arbitro era pessimo.", "¡Anda ya! El árbitro era pésimo."],
          ["tu", "Secondo me, non è così semplice. Il rigore c'era.", "En mi opinión, no es tan sencillo. Era penalti."],
          ["a", "Il rigore?! Non ci credo!", "¿¡Penalti!? ¡No me lo creo!"],
          ["tu", "Va bene, non me ne intendo molto… Tu che ne pensi?", "Vale, no entiendo mucho del tema… ¿Tú qué opinas?"],
          ["a", "Penso che abbiamo perso per colpa dell'arbitro.", "Pienso que hemos perdido por culpa del árbitro."],
          ["tu", "Non vale la pena arrabbiarsi. Dai, la prossima andrà meglio!", "No vale la pena enfadarse. ¡Venga, la próxima irá mejor!"],
        ],
      },
      {
        title: "Italia o Spagna?",
        who: "Paola, tu suegra",
        scene: "Sobremesa. Su madre te pone a prueba con una pregunta trampa.",
        lines: [
          ["a", "Dimmi la verità: si mangia meglio qui o in Spagna?", "Dime la verdad: ¿se come mejor aquí o en España?"],
          ["tu", "Qui si mangia meglio… ma non ditelo a mia madre!", "Aquí se come mejor… ¡pero no se lo digáis a mi madre!"],
          ["a", "Ah ah! E il tempo? Qui fa un freddo cane.", "¡Ja, ja! ¿Y el tiempo? Aquí hace un frío que pela."],
          ["tu", "Da noi è diverso, fa più caldo. Ma mi piace anche il freddo.", "En mi tierra es distinto, hace más calor. Pero también me gusta el frío."],
          ["a", "E gli italiani, come ti sembrano?", "¿Y los italianos qué te parecen?"],
          ["tu", "Simpatici! Parlate tanto e velocemente, però.", "¡Simpáticos! Eso sí, habláis mucho y rápido."],
          ["a", "Hai proprio ragione! Ti dà fastidio?", "¡Tienes toda la razón! ¿Te molesta?"],
          ["tu", "No, anzi! Così imparo di più.", "No, ¡al contrario! Así aprendo más."],
        ],
      },
    ],
    claves: [
      {
        title: "Comparar: più… di / più… che",
        body: `<ul><li><b>più / meno … di</b> — delante de un nombre o pronombre: <i>Sei più alto <b>di</b> me</i> · <i>Roma è più grande <b>di</b> Milano</i></li>
<li><b>più / meno … che</b> — entre dos adjetivos, verbos o con preposición: <i>È più simpatico <b>che</b> bello</i> · <i>Si mangia meglio qui <b>che in</b> Spagna</i></li></ul>
<p>Irregulares, igual que en español:</p>
<ul><li><b>meglio</b> (mejor, adverbio): <i>Parli meglio di me</i></li>
<li><b>migliore</b> (mejor, adjetivo): <i>È il migliore ristorante</i></li>
<li><b>peggio / peggiore</b> = peor</li></ul>`,
        quiz: [
          { q: "«Eres más alto que yo»", opts: ["Sei più alto che io", "Sei più alto di me", "Sei più alto che me"], a: 1 },
          { q: "«Hablas mejor que yo»", opts: ["Parli migliore di me", "Parli meglio di me", "Parli più bene che me"], a: 1 },
          { q: "«Hace más frío aquí que en España»", opts: ["Fa più freddo qui che in Spagna", "Fa più freddo qui di in Spagna", "Fa più freddo qui come in Spagna"], a: 0 },
        ],
      },
      {
        title: "Congiuntivo de supervivencia",
        body: `<p>El subjuntivo italiano se usa donde en español… y además <b>después de opinar</b>:</p>
<ul><li><i><b>Penso che sia</b> vero</i> (esp. «pienso que <u>es</u> verdad»)</li>
<li><i><b>Credo che abbia</b> ragione</i></li>
<li><i><b>Mi sembra che sia</b> tardi</i></li>
<li><i><b>Spero che vada</b> bene</i></li></ul>
<p>Con cuatro formas cubres casi todo: <b>sia</b> (essere), <b>abbia</b> (avere), <b>vada</b> (andare), <b>faccia</b> (fare).</p>
<p>Si se te olvida, nadie se va a ofender; muchos italianos tampoco lo usan siempre. Y con <i>«Secondo me…»</i> te lo ahorras: <i>Secondo me <b>è</b> vero</i>.</p>`,
        quiz: [
          { q: "«Penso che ___ una buona idea»", opts: ["è", "sia", "sarà"], a: 1 },
          { q: "«Spero che ___ bene» (ir)", opts: ["va", "vada", "andare"], a: 1 },
          { q: "¿Cuál evita el subjuntivo?", opts: ["Credo che…", "Secondo me…", "Mi sembra che…"], a: 1 },
        ],
      },
      {
        title: "Reaccionar como un italiano",
        body: `<p>Media conversación es reaccionar a lo que dice el otro:</p>
<ul><li><b>Davvero? / Sul serio?</b> — ¿de verdad? / ¿en serio?</li>
<li><b>Ma dai!</b> — ¡anda ya! / ¡no me digas!</li>
<li><b>Non ci credo!</b> — ¡no me lo creo!</li>
<li><b>Meno male!</b> — ¡menos mal!</li>
<li><b>Che peccato!</b> — ¡qué lástima!</li>
<li><b>Anzi</b> — al contrario / es más</li>
<li><b>Però</b> — pero, eso sí (puede ir al final)</li>
<li><b>Appunto!</b> — ¡exacto, eso digo yo!</li></ul>`,
        quiz: [
          { q: "Te cuentan que perdieron el vuelo:", opts: ["Meno male!", "Che peccato!", "Appunto!"], a: 1 },
          { q: "«¿Te molesta?» — «No, al contrario»", opts: ["No, anzi!", "No, però!", "No, dai!"], a: 0 },
          { q: "Algo acabó bien por los pelos:", opts: ["Che peccato!", "Ma dai!", "Meno male!"], a: 2 },
        ],
      },
    ],
    tutor: {
      title: "Debate de sobremesa",
      role: "You are Zio Marco, his girlfriend's uncle, at the table after lunch. You have strong but good-humoured opinions about football, food (Italy versus Spain), the weather and city life. State an opinion, ask what he thinks, and playfully disagree so he has to defend his view.",
    },
    prompts: [
      "Compara la vida en Italia y en España: comida, horarios, clima, gente.",
      "Da tu opinión sobre un partido, una serie o una película que hayas visto hace poco.",
      "Defiende durante un minuto por qué tu ciudad es un buen sitio para vivir.",
    ],
  },

  {
    title: "Fare piani",
    es: "Hacer planes",
    goal: "Proponer, aceptar, rechazar y quedar a una hora.",
    phrases: [
      ["Cosa facciamo domani?", "¿Qué hacemos mañana?"],
      ["Ti va di fare un giro?", "¿Te apetece dar una vuelta?", "«Ti va di…?» = ¿te apetece…?"],
      ["Mi andrebbe un gelato.", "Me apetecería un helado."],
      ["Potremmo andare al mercato.", "Podríamos ir al mercado."],
      ["Vorrei vedere il centro storico.", "Quisiera ver el casco antiguo."],

      ["A che ora ci vediamo?", "¿A qué hora quedamos?"],
      ["Ci vediamo alle otto e mezza.", "Nos vemos a las ocho y media."],
      ["Sono le sette meno un quarto.", "Son las siete menos cuarto."],
      ["Va benissimo, ci sto!", "Perfecto, ¡me apunto!"],
      ["Purtroppo non posso, mi dispiace.", "Por desgracia no puedo, lo siento."],

      ["Magari un'altra volta.", "Quizá en otra ocasión."],
      ["Dobbiamo prenotare?", "¿Tenemos que reservar?"],
      ["Passo a prenderti io.", "Paso yo a buscarte."],
      ["Arrivo tra dieci minuti.", "Llego en diez minutos.", "tra / fra = dentro de."],
      ["Sono in ritardo, scusate!", "Llego tarde, ¡perdonad!"],

      ["Domani partiamo presto.", "Mañana salimos temprano.", "partire = salir de viaje."],
      ["Torneremo in primavera.", "Volveremos en primavera."],
      ["La prossima volta venite voi da noi!", "¡La próxima vez venid vosotros a nuestra casa!"],
      ["Vi aspettiamo in Spagna.", "Os esperamos en España."],
      ["Che programmi avete per il fine settimana?", "¿Qué planes tenéis para el fin de semana?"],

      ["Dipende dal tempo.", "Depende del tiempo."],
      ["Se piove, restiamo a casa.", "Si llueve, nos quedamos en casa."],
      ["Ho bisogno di comprare un regalo.", "Necesito comprar un regalo."],
      ["Mi serve una mano.", "Necesito que me echen una mano."],
      ["Quanto ci vuole per arrivare?", "¿Cuánto se tarda en llegar?"],

      ["Ci vogliono venti minuti a piedi.", "Se tarda veinte minutos a pie."],
      ["Andiamo in macchina o a piedi?", "¿Vamos en coche o a pie?"],
      ["Non c'è fretta.", "No hay prisa."],
      ["Sbrigati, è tardi!", "¡Date prisa, es tarde!"],
      ["Fammi sapere.", "Ya me dirás."],
    ],
    dialogues: [
      {
        title: "Programmi per domani",
        who: "Giulia, la prima",
        scene: "La prima se ofrece a enseñaros la ciudad.",
        lines: [
          ["a", "Che programmi avete per domani?", "¿Qué planes tenéis para mañana?"],
          ["tu", "Ancora niente. Vorrei vedere il centro storico.", "Todavía nada. Quisiera ver el casco antiguo."],
          ["a", "Ti va di fare un giro con me? Vi faccio da guida!", "¿Te apetece dar una vuelta conmigo? ¡Os hago de guía!"],
          ["tu", "Va benissimo, ci sto! A che ora ci vediamo?", "Perfecto, ¡me apunto! ¿A qué hora quedamos?"],
          ["a", "Alle dieci? Passo a prendervi io.", "¿A las diez? Paso yo a buscaros."],
          ["tu", "Perfetto. Quanto ci vuole per arrivare in centro?", "Perfecto. ¿Cuánto se tarda en llegar al centro?"],
          ["a", "Ci vogliono venti minuti in macchina. E se piove?", "Se tarda veinte minutos en coche. ¿Y si llueve?"],
          ["tu", "Se piove, potremmo andare a prendere un caffè. Fammi sapere!", "Si llueve, podríamos ir a tomar un café. ¡Ya me dirás!"],
        ],
      },
      {
        title: "L'invito",
        who: "Giorgio, tu suegro",
        scene: "Su padre ha reservado en una pizzería y tiene hambre.",
        lines: [
          ["a", "Stasera andiamo a mangiare una pizza. Venite?", "Esta noche vamos a comer una pizza. ¿Venís?"],
          ["tu", "Volentieri! Dobbiamo prenotare?", "¡Con mucho gusto! ¿Tenemos que reservar?"],
          ["a", "Ho già prenotato per le otto e mezza.", "Ya he reservado para las ocho y media."],
          ["tu", "Benissimo. Andiamo in macchina o a piedi?", "Muy bien. ¿Vamos en coche o a pie?"],
          ["a", "A piedi, è qui vicino. Ma sbrigatevi, sono già le otto!", "A pie, está aquí cerca. ¡Pero daos prisa, ya son las ocho!"],
          ["tu", "Arrivo tra dieci minuti, non c'è fretta!", "Llego en diez minutos, ¡no hay prisa!"],
          ["a", "Come «non c'è fretta»? Ho fame!", "¿Cómo que «no hay prisa»? ¡Tengo hambre!"],
          ["tu", "Va bene, va bene… La prossima volta venite voi da noi, in Spagna!", "Vale, vale… ¡La próxima vez venid vosotros a nuestra casa, a España!"],
        ],
      },
    ],
    claves: [
      {
        title: "El condicional para sonar educado",
        body: `<p>Como en español, el condicional suaviza:</p>
<ul><li><b>Vorrei</b> un caffè — quisiera…</li>
<li><b>Potrei</b> avere…? — ¿podría…?</li>
<li><b>Potremmo</b> andare… — podríamos ir…</li>
<li><b>Mi piacerebbe</b> vedere… — me gustaría ver…</li>
<li><b>Mi andrebbe</b> un gelato — me apetecería…</li></ul>
<p>Para proponer: <b>Ti va di</b> + infinitivo — <i>Ti va di uscire?</i> (¿Te apetece salir?). Respuesta: <i>Sì, mi va!</i> / <i>Non mi va tanto.</i></p>
<p>Evita <i>«Voglio…»</i> al pedir: suena brusco. Di <i>«Vorrei…»</i>.</p>`,
        quiz: [
          { q: "Pides un café con educación:", opts: ["Voglio un caffè", "Vorrei un caffè", "Volevo caffè"], a: 1 },
          { q: "«¿Te apetece dar una vuelta?»", opts: ["Ti va di fare un giro?", "Ti vai a fare un giro?", "Ti piace di fare un giro?"], a: 0 },
          { q: "«Podríamos ir al mercado»", opts: ["Possiamo andare al mercato", "Potremmo andare al mercato", "Potremo andare al mercato"], a: 1 },
        ],
      },
      {
        title: "La hora y las preposiciones de tiempo",
        body: `<ul><li><i>Che ore sono?</i> — <b>Sono le</b> otto · <b>È l'</b>una · <b>È</b> mezzogiorno</li>
<li><b>e mezza</b> / <b>e un quarto</b> / <b>meno un quarto</b></li>
<li><b>alle</b> otto = a las ocho · <b>all'</b>una = a la una</li></ul>
<p>Cuatro preposiciones que no hay que confundir:</p>
<ul><li><b>tra / fra</b> dieci minuti = <u>dentro de</u> diez minutos</li>
<li>dieci minuti <b>fa</b> = <u>hace</u> diez minutos</li>
<li><b>da</b> dieci minuti = <u>desde hace</u> diez minutos</li>
<li><b>per</b> dieci minuti = <u>durante</u> diez minutos</li></ul>`,
        quiz: [
          { q: "«Llego dentro de cinco minutos»", opts: ["Arrivo in cinque minuti", "Arrivo tra cinque minuti", "Arrivo cinque minuti fa"], a: 1 },
          { q: "«Nos vemos a las nueve»", opts: ["Ci vediamo a le nove", "Ci vediamo alle nove", "Ci vediamo nelle nove"], a: 1 },
          { q: "«Es la una»", opts: ["Sono le una", "È l'una", "È la una"], a: 1 },
        ],
      },
      {
        title: "«Ci vuole», «mi serve» y «bisogna»",
        body: `<p>Tres maneras de hablar de necesidad que el español resuelve distinto:</p>
<ul><li><b>ci vuole / ci vogliono</b> = se tarda / hace falta: <i>Ci vuole un'ora</i> · <i>Ci vogliono venti minuti</i></li>
<li><b>mi serve / mi servono</b> = necesito: <i>Mi serve una mano</i> · <i>Mi servono le chiavi</i></li>
<li><b>ho bisogno di</b> = necesito: <i>Ho bisogno di dormire</i></li>
<li><b>bisogna</b> + infinitivo = hay que (cat. «cal»): <i>Bisogna prenotare</i></li></ul>
<p>Ojo: <i>servire</i> funciona como <i>piacere</i>; lo necesario es el sujeto.</p>`,
        quiz: [
          { q: "«Se tarda media hora»", opts: ["Ci vuole mezz'ora", "Si tarda mezz'ora", "Ci vogliono mezz'ora"], a: 0 },
          { q: "«Hay que reservar»", opts: ["C'è che prenotare", "Bisogna prenotare", "Ha da prenotare"], a: 1 },
          { q: "«Necesito las llaves»", opts: ["Mi serve le chiavi", "Mi servono le chiavi", "Ho bisogno le chiavi"], a: 1 },
        ],
      },
    ],
    tutor: {
      title: "Organizar un plan",
      role: "You are Giulia, his girlfriend's cousin, about his age and easygoing. You want to plan something together for tomorrow: propose options (a walk in the old town, a market, an aperitivo), negotiate the time and how to get there, and ask what he would like to do.",
    },
    prompts: [
      "Propón un plan para mañana a la familia: adónde ir, a qué hora y cómo.",
      "Te invitan a algo y no puedes. Recházalo con educación y propón una alternativa.",
      "Invita a toda la familia a visitaros en España: cuándo, qué haréis, qué comeréis.",
    ],
  },

  {
    title: "In giro",
    es: "Por ahí",
    goal: "Desenvolverte solo en bares, tiendas, restaurantes y transporte.",
    phrases: [
      ["Un caffè e un cornetto, per favore.", "Un café y un cruasán, por favor."],
      ["Quant'è?", "¿Cuánto es?"],
      ["Posso pagare con la carta?", "¿Puedo pagar con tarjeta?"],
      ["Il conto, per favore.", "La cuenta, por favor."],
      ["Scusi, dov'è il bagno?", "Disculpe, ¿dónde está el baño?"],

      ["Abbiamo prenotato un tavolo per quattro.", "Hemos reservado una mesa para cuatro."],
      ["Cosa mi consiglia?", "¿Qué me recomienda?"],
      ["Per me, lo stesso.", "Para mí, lo mismo."],
      ["Prendo gli spaghetti alle vongole.", "Tomaré los espaguetis con almejas."],
      ["Scusi, per andare in stazione?", "Disculpe, ¿para ir a la estación?"],

      ["Sempre dritto, poi a destra.", "Todo recto, luego a la derecha."],
      ["È lontano da qui?", "¿Está lejos de aquí?"],
      ["Mi sono perso.", "Me he perdido."],
      ["Sto solo guardando, grazie.", "Solo estoy mirando, gracias."],
      ["Posso provarlo?", "¿Puedo probármelo?"],

      ["Ce l'ha in una taglia più grande?", "¿Lo tiene en una talla más grande?"],
      ["È troppo caro, grazie lo stesso.", "Es demasiado caro, gracias igualmente."],
      ["Lo prendo!", "¡Me lo llevo!"],
      ["Mi fa uno sconto?", "¿Me hace un descuento?"],
      ["A che ora chiude?", "¿A qué hora cierra?"],

      ["Un biglietto di andata e ritorno.", "Un billete de ida y vuelta."],
      ["A che ora parte il prossimo treno?", "¿A qué hora sale el próximo tren?"],
      ["Il treno è in ritardo.", "El tren va con retraso."],
      ["Devo scendere alla prossima fermata.", "Tengo que bajar en la próxima parada."],
      ["Non mi sento molto bene.", "No me encuentro muy bien."],

      ["Ho mal di testa.", "Me duele la cabeza."],
      ["C'è una farmacia qui vicino?", "¿Hay una farmacia aquí cerca?"],
      ["Mi può aiutare, per favore?", "¿Me puede ayudar, por favor?"],
      ["Tenga pure il resto.", "Quédese con el cambio."],
      ["Ottimo, grazie mille! Arrivederci.", "Estupendo, ¡muchas gracias! Adiós."],
    ],
    dialogues: [
      {
        title: "Al bar",
        who: "El camarero",
        scene: "Bajas tú solo a desayunar al bar de la esquina.",
        lines: [
          ["a", "Buongiorno! Cosa prende?", "¡Buenos días! ¿Qué va a tomar?"],
          ["tu", "Buongiorno! Un caffè e un cornetto, per favore.", "¡Buenos días! Un café y un cruasán, por favor."],
          ["a", "Cornetto alla crema o al cioccolato?", "¿Cruasán de crema o de chocolate?"],
          ["tu", "Cosa mi consiglia?", "¿Qué me recomienda?"],
          ["a", "Quello alla crema è appena uscito dal forno.", "El de crema acaba de salir del horno."],
          ["tu", "Allora lo prendo! Quant'è?", "¡Entonces me lo llevo! ¿Cuánto es?"],
          ["a", "Due euro e cinquanta.", "Dos euros con cincuenta."],
          ["tu", "Posso pagare con la carta? E scusi, dov'è il bagno?", "¿Puedo pagar con tarjeta? Y disculpe, ¿dónde está el baño?"],
        ],
      },
      {
        title: "In negozio",
        who: "La dependienta",
        scene: "Buscas un regalo para tu suegra.",
        lines: [
          ["a", "Buonasera, posso aiutarla?", "Buenas tardes, ¿puedo ayudarle?"],
          ["tu", "Sì, grazie. Cerco un regalo per mia suocera.", "Sí, gracias. Busco un regalo para mi suegra."],
          ["a", "Che bel pensiero! Le piace questa sciarpa?", "¡Qué detalle! ¿Le gusta esta bufanda?"],
          ["tu", "È bella. Ce l'ha in un altro colore?", "Es bonita. ¿La tiene en otro color?"],
          ["a", "Certo, anche in rosso e in verde. Costa quaranta euro.", "Claro, también en rojo y en verde. Cuesta cuarenta euros."],
          ["tu", "È un po' cara… Mi fa uno sconto?", "Es un poco cara… ¿Me hace un descuento?"],
          ["a", "Per lei, trentacinque.", "Para usted, treinta y cinco."],
          ["tu", "Perfetto, la prendo! Mi può fare un pacchetto regalo?", "Perfecto, ¡me la llevo! ¿Me la puede envolver para regalo?"],
        ],
      },
    ],
    claves: [
      {
        title: "El «Lei» en tiendas y bares",
        body: `<p>Con desconocidos adultos se usa <b>Lei</b>. Aprende las parejas:</p>
<ul><li>scusa → <b>scusi</b></li>
<li>senti → <b>senta</b> (oiga)</li>
<li>dimmi → <b>mi dica</b></li>
<li>puoi → <b>può</b>: <i>Mi può aiutare?</i></li>
<li>hai → <b>ha</b>: <i>Ce l'ha in rosso?</i></li>
<li>tieni → <b>tenga</b></li></ul>
<p>Y ellos te dirán: <i>Prego</i> (adelante / de nada), <i>Mi dica</i> (dígame), <i>Desidera?</i> (¿qué desea?), <i>Altro?</i> (¿algo más?).</p>
<p>Al despedirte: <b>Arrivederci</b>. <i>Ciao</i> solo con gente que tuteas.</p>`,
        quiz: [
          { q: "Llamas la atención del camarero:", opts: ["Scusa!", "Scusi!", "Senti!"], a: 1 },
          { q: "«¿Me puede ayudar?»", opts: ["Mi puoi aiutare?", "Mi può aiutare?", "Mi potete aiutare?"], a: 1 },
          { q: "El dependiente dice «Altro?»:", opts: ["¿Otro?", "¿Algo más?", "¿Alto?"], a: 1 },
        ],
      },
      {
        title: "Verbos trampa: salire no es salir",
        body: `<ul><li><b>salire</b> = subir → <i>Salgo sul treno</i> (subo al tren)</li>
<li><b>scendere</b> = bajar → <i>Scendo alla prossima</i></li>
<li><b>uscire</b> = salir → <i>Esco di casa</i> · <i>Usciamo stasera?</i></li>
<li><b>partire</b> = salir de viaje, partir → <i>Il treno parte alle otto</i></li>
<li><b>andare via</b> = irse → <i>Vado via</i></li>
<li><b>fermarsi</b> = pararse · <b>la fermata</b> = la parada</li>
<li><b>girare</b> = girar → <i>Giri a sinistra</i></li></ul>
<p>Presente irregular de <i>uscire</i>: <b>esco, esci, esce</b>, usciamo, uscite, <b>escono</b>.</p>`,
        quiz: [
          { q: "«¿Salimos esta noche?»", opts: ["Saliamo stasera?", "Usciamo stasera?", "Partiamo stasera?"], a: 1 },
          { q: "«Sali!» te gritan desde el coche:", opts: ["¡Sal!", "¡Sube!", "¡Salta!"], a: 1 },
          { q: "«El tren sale a las ocho»", opts: ["Il treno esce alle otto", "Il treno sale alle otto", "Il treno parte alle otto"], a: 2 },
        ],
      },
      {
        title: "Lo, la, li, le y «ce l'ho»",
        body: `<p>Los pronombres de objeto son casi como en español:</p>
<ul><li>il maglione → <b>lo</b> prendo</li>
<li>la sciarpa → <b>la</b> prendo</li>
<li>i biglietti → <b>li</b> compro</li>
<li>le chiavi → <b>le</b> ho perse</li></ul>
<p>Con <i>avere</i> en sentido de «tener», el italiano hablado añade <b>ce</b>:</p>
<ul><li><i>Hai le chiavi?</i> — <i>Sì, <b>ce le ho</b>.</i></li>
<li><i><b>Ce l'ha</b> in rosso?</i> = ¿Lo tiene en rojo?</li>
<li><i>Non <b>ce l'ho</b>.</i> = No lo tengo.</li></ul>
<p>Combinados: <i>me lo, te lo, glielo</i> → <i>Me lo dai?</i> · <i>Te l'ho detto.</i></p>`,
        quiz: [
          { q: "«La sciarpa? ___ prendo!»", opts: ["Lo", "La", "Le"], a: 1 },
          { q: "«¿Tienes el billete?» — «Sí, lo tengo»", opts: ["Sì, lo ho", "Sì, ce l'ho", "Sì, ci ho"], a: 1 },
          { q: "«I biglietti? ___ compro io.»", opts: ["Li", "Le", "Lo"], a: 0 },
        ],
      },
    ],
    tutor: {
      title: "En el bar y de compras",
      role: "You are a friendly barista in an Italian café, addressing him with the formal Lei. Take his order, ask follow-up questions (which pastry, here or takeaway, anything else), tell him the price, and make a little small talk about where he is from.",
    },
    prompts: [
      "Pide un desayuno completo en un bar y pregunta el precio y si puedes pagar con tarjeta.",
      "Estás en una tienda buscando un regalo para tu suegra. Explica qué buscas y pregunta colores, tallas y precio.",
      "Te has perdido. Pide indicaciones para llegar a la estación y repite lo que te han dicho.",
    ],
  },

  {
    title: "Uno di famiglia",
    es: "Uno más de la familia",
    goal: "Bromear, expresar cariño, brindar y despedirte como uno más.",
    phrases: [
      ["In bocca al lupo! Crepi!", "¡Mucha suerte! ¡Gracias!", "A «In bocca al lupo» se responde «Crepi!», nunca «grazie»."],
      ["Acqua in bocca!", "¡Ni una palabra a nadie!"],
      ["Sto scherzando!", "¡Estoy de broma!"],
      ["Mi prendi in giro?", "¿Me tomas el pelo?"],
      ["Che figura!", "¡Qué corte! / ¡Qué vergüenza!"],

      ["Non fa niente, tranquillo.", "No pasa nada, tranquilo."],
      ["Figurati!", "¡Faltaría más! / ¡De nada!"],
      ["Mi siete mancati.", "Os he echado de menos.", "mancare va al revés: «me habéis faltado»."],
      ["Mi mancherete tanto.", "Os echaré mucho de menos."],
      ["Mi sento a casa con voi.", "Me siento en casa con vosotros."],

      ["Grazie di cuore per tutto.", "Gracias de corazón por todo."],
      ["Siete una famiglia meravigliosa.", "Sois una familia maravillosa."],
      ["Vi voglio bene.", "Os quiero.", "«Ti amo» es solo para la pareja."],
      ["Sono contento di far parte della famiglia.", "Estoy contento de formar parte de la familia."],
      ["Ti do una mano io, non ti preoccupare.", "Te echo yo una mano, no te preocupes."],

      ["Hai bisogno di qualcosa?", "¿Necesitas algo?"],
      ["Tocca a me!", "¡Me toca a mí!"],
      ["Offro io!", "¡Invito yo!"],
      ["Ma figurati, ci mancherebbe!", "¡Qué va, faltaría más!"],
      ["Che ridere!", "¡Qué risa!"],

      ["Me la cavo abbastanza bene.", "Me las apaño bastante bien."],
      ["Non ho peli sulla lingua.", "No tengo pelos en la lengua."],
      ["Costa un occhio della testa.", "Cuesta un ojo de la cara."],
      ["Piove a dirotto.", "Llueve a cántaros."],
      ["Ho fatto una gaffe?", "¿He metido la pata?"],

      ["Vorrei dire due parole.", "Quisiera decir unas palabras."],
      ["Grazie per avermi accolto così bene.", "Gracias por haberme acogido tan bien."],
      ["Prometto che il mio italiano migliorerà!", "¡Prometo que mi italiano mejorará!"],
      ["Buon viaggio e a presto!", "¡Buen viaje y hasta pronto!"],
      ["Ci sentiamo presto!", "¡Hablamos pronto!"],
    ],
    dialogues: [
      {
        title: "Il brindisi",
        who: "Giorgio, tu suegro",
        scene: "Última cena. Te levantas con la copa en la mano.",
        lines: [
          ["a", "Silenzio tutti! Il nostro ospite vuole dire due parole.", "¡Silencio todos! Nuestro invitado quiere decir unas palabras."],
          ["tu", "Grazie! Vorrei dire due parole… in italiano!", "¡Gracias! Quisiera decir unas palabras… ¡en italiano!"],
          ["a", "Bravo! Sentiamo, sentiamo.", "¡Muy bien! A ver, a ver."],
          ["tu", "Grazie di cuore per avermi accolto così bene. Mi sento a casa con voi.", "Gracias de corazón por haberme acogido tan bien. Me siento en casa con vosotros."],
          ["a", "Ma figurati, ormai sei di famiglia!", "¡Qué va, si ya eres de la familia!"],
          ["tu", "Siete una famiglia meravigliosa. Prometto che il mio italiano migliorerà!", "Sois una familia maravillosa. ¡Prometo que mi italiano mejorará!"],
          ["a", "Parli già benissimo! Allora, un brindisi?", "¡Ya hablas muy bien! Entonces, ¿un brindis?"],
          ["tu", "Alla famiglia! Cin cin, e vi voglio bene!", "¡Por la familia! ¡Chinchín, y os quiero!"],
        ],
      },
      {
        title: "I saluti",
        who: "Nonna Rosa",
        scene: "La despedida en la puerta. La abuela no te deja ir con las manos vacías.",
        lines: [
          ["a", "Già partite? Che peccato!", "¿Ya os vais? ¡Qué lástima!"],
          ["tu", "Purtroppo sì. Mi mancherete tanto.", "Por desgracia sí. Os echaré mucho de menos."],
          ["a", "Anche tu ci mancherai. Hai mangiato abbastanza in questi giorni?", "Nosotros a ti también. ¿Has comido bastante estos días?"],
          ["tu", "Abbastanza? Sta scherzando, vero? Ho mangiato per un mese!", "¿Bastante? Está de broma, ¿no? ¡He comido para un mes!"],
          ["a", "Ah ah! Ti ho preparato qualcosa per il viaggio.", "¡Ja, ja! Te he preparado algo para el viaje."],
          ["tu", "Grazie, nonna, non doveva!", "¡Gracias, abuela, no hacía falta!"],
          ["a", "Figurati! Torna presto, mi raccomando.", "¡Faltaría más! Vuelve pronto, ¿eh?"],
          ["tu", "Promesso! Ci sentiamo presto. Vi voglio bene!", "¡Prometido! Hablamos pronto. ¡Os quiero!"],
        ],
      },
    ],
    claves: [
      {
        title: "«Ti voglio bene», «ti amo» y «mi manchi»",
        body: `<p>El italiano distingue dos «te quiero»:</p>
<ul><li><b>Ti amo</b> — solo para tu pareja.</li>
<li><b>Ti voglio bene / Vi voglio bene</b> — familia y amigos. Es lo que le dices a la nonna.</li></ul>
<p><b>Mancare</b> (echar de menos) funciona al revés que en español, como «faltar»:</p>
<ul><li><i><b>Mi manchi</b></i> = te echo de menos (lit. «me faltas»)</li>
<li><i><b>Mi mancate</b></i> = os echo de menos</li>
<li><i><b>Mi mancherete</b></i> = os echaré de menos</li>
<li><i><b>Ti manco?</b></i> = ¿me echas de menos?</li></ul>
<p>En pasado va con <i>essere</i>: <i>Mi siete mancati.</i></p>`,
        quiz: [
          { q: "A tu suegra le dices:", opts: ["Ti amo", "Ti voglio bene", "Ti voglio"], a: 1 },
          { q: "«Te echo de menos»", opts: ["Ti manco", "Mi manchi", "Ti manchi"], a: 1 },
          { q: "«Os echaré de menos»", opts: ["Mi mancherete", "Vi mancherò", "Mi mancherò"], a: 0 },
        ],
      },
      {
        title: "Modismos que hacen gracia en boca de un extranjero",
        body: `<ul><li><b>In bocca al lupo!</b> — <b>Crepi!</b> = ¡Suerte! — ¡Gracias!</li>
<li><b>Acqua in bocca</b> = ni una palabra</li>
<li><b>Prendere in giro</b> = tomar el pelo</li>
<li><b>Cavarsela</b> = apañárselas: <i>Me la cavo</i></li>
<li><b>Che figura! / Fare una figuraccia</b> = hacer el ridículo</li>
<li><b>Fare una gaffe</b> = meter la pata</li>
<li><b>Mi raccomando!</b> = ¡no te olvides, eh! / ¡pórtate bien!</li>
<li><b>Non vedo l'ora</b> = lo estoy deseando</li>
<li><b>Meglio tardi che mai</b> = más vale tarde que nunca</li></ul>
<p>Soltar uno de estos en el momento justo vale más que diez frases perfectas.</p>`,
        quiz: [
          { q: "Te dicen «In bocca al lupo!». Respondes:", opts: ["Grazie!", "Crepi!", "Prego!"], a: 1 },
          { q: "«Me la cavo» significa…", opts: ["Me la cargo", "Me las apaño", "Me voy"], a: 1 },
          { q: "«Torna presto, mi raccomando!»", opts: ["Vuelve pronto, ¿eh?", "Vuelve pronto, te lo recomiendo", "Vuelve pronto, me acuerdo"], a: 0 },
        ],
      },
      {
        title: "Cómo no bloquearte nunca",
        body: `<p>Cuatro trucos para cuando te falta una palabra:</p>
<ul><li><b>Gana tiempo:</b> <i>Allora… · Dunque… · Come dire… · Aspetta…</i></li>
<li><b>Pide la palabra:</b> <i>Come si dice…? · Come si chiama quella cosa che…?</i></li>
<li><b>Rodea:</b> <i>È una cosa che serve per… · È tipo… · È il contrario di…</i></li>
<li><b>Italianiza:</b> coge la palabra catalana o española y dale forma italiana. Acertarás muchas veces, y cuando no, te corregirán y se reirán contigo.</li></ul>
<p>Y recuerda: a la familia le importa que lo intentes, no que conjugues bien. Cada error que cometes hablando es una conversación que sí has tenido.</p>`,
        quiz: [
          { q: "Para ganar tiempo dices:", opts: ["Come dire…", "Figurati…", "Magari…"], a: 0 },
          { q: "No sabes decir «sacacorchos». Dices:", opts: ["Non lo so, scusa.", "È una cosa che serve per aprire il vino.", "(Te callas)"], a: 1 },
          { q: "«Dunque…» sirve para…", opts: ["despedirte", "empezar a hablar mientras piensas", "pedir perdón"], a: 1 },
        ],
      },
    ],
    tutor: {
      title: "El brindis y la despedida",
      role: "You are Giorgio, his girlfriend's father, at the farewell dinner on the last evening of his visit. You are warm and a little emotional. Invite him to make a toast, ask what he enjoyed most about the visit, tease him gently, and talk about when they will see each other again.",
    },
    prompts: [
      "Haz un brindis de un minuto para toda la familia: agradece, di qué te ha gustado y promete volver.",
      "Despídete de cada miembro de la familia con una frase distinta.",
      "Cuenta en italiano qué ha sido lo mejor de estas ocho semanas aprendiendo y qué quieres mejorar.",
    ],
  },
];

export const FREE_SCENARIO = {
  title: "Conversación libre",
  role: "You are Giulia, his girlfriend's cousin, chatting casually over a coffee. Talk about whatever comes up: his day, plans, food, work, travel, the family.",
};
