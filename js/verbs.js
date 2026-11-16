// Conjugador para el entrenador de verbos.
// aux: "a" = avere, "e" = essere. pp = participio. pres/cong/imp = formas irregulares completas.
// fut = raíz irregular de futuro y condicional. impBase = raíz irregular del imperfetto.

export const PERSONS = ["io", "tu", "lui / lei", "noi", "voi", "loro"];

export const TENSES = [
  { id: "pres", name: "Presente", level: 0 },
  { id: "pp", name: "Passato prossimo", level: 1 },
  { id: "imp", name: "Imperfetto", level: 1 },
  { id: "fut", name: "Futuro", level: 1 },
  { id: "cond", name: "Condizionale", level: 2 },
  { id: "cong", name: "Congiuntivo presente", level: 2 },
];

export const VERBS = [
  { inf: "essere", es: "ser, estar", aux: "e", pp: "stato", fut: "sar",
    pres: ["sono", "sei", "è", "siamo", "siete", "sono"],
    imp: ["ero", "eri", "era", "eravamo", "eravate", "erano"],
    cong: ["sia", "sia", "sia", "siamo", "siate", "siano"] },
  { inf: "avere", es: "tener, haber", aux: "a", pp: "avuto", fut: "avr",
    pres: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
    cong: ["abbia", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"] },
  { inf: "andare", es: "ir", aux: "e", pp: "andato", fut: "andr",
    pres: ["vado", "vai", "va", "andiamo", "andate", "vanno"],
    cong: ["vada", "vada", "vada", "andiamo", "andiate", "vadano"] },
  { inf: "fare", es: "hacer", aux: "a", pp: "fatto", fut: "far", impBase: "face",
    pres: ["faccio", "fai", "fa", "facciamo", "fate", "fanno"],
    cong: ["faccia", "faccia", "faccia", "facciamo", "facciate", "facciano"] },
  { inf: "stare", es: "estar, quedarse", aux: "e", pp: "stato", fut: "star",
    pres: ["sto", "stai", "sta", "stiamo", "state", "stanno"],
    cong: ["stia", "stia", "stia", "stiamo", "stiate", "stiano"] },
  { inf: "dare", es: "dar", aux: "a", pp: "dato", fut: "dar",
    pres: ["do", "dai", "dà", "diamo", "date", "danno"],
    cong: ["dia", "dia", "dia", "diamo", "diate", "diano"] },
  { inf: "dire", es: "decir", aux: "a", pp: "detto", fut: "dir", impBase: "dice",
    pres: ["dico", "dici", "dice", "diciamo", "dite", "dicono"],
    cong: ["dica", "dica", "dica", "diciamo", "diciate", "dicano"] },
  { inf: "venire", es: "venir", aux: "e", pp: "venuto", fut: "verr",
    pres: ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
    cong: ["venga", "venga", "venga", "veniamo", "veniate", "vengano"] },
  { inf: "potere", es: "poder", aux: "a", pp: "potuto", fut: "potr",
    pres: ["posso", "puoi", "può", "possiamo", "potete", "possono"],
    cong: ["possa", "possa", "possa", "possiamo", "possiate", "possano"] },
  { inf: "volere", es: "querer", aux: "a", pp: "voluto", fut: "vorr",
    pres: ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
    cong: ["voglia", "voglia", "voglia", "vogliamo", "vogliate", "vogliano"] },
  { inf: "dovere", es: "deber, tener que", aux: "a", pp: "dovuto", fut: "dovr",
    pres: ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"],
    cong: ["debba", "debba", "debba", "dobbiamo", "dobbiate", "debbano"] },
  { inf: "sapere", es: "saber", aux: "a", pp: "saputo", fut: "sapr",
    pres: ["so", "sai", "sa", "sappiamo", "sapete", "sanno"],
    cong: ["sappia", "sappia", "sappia", "sappiamo", "sappiate", "sappiano"] },
  { inf: "uscire", es: "salir", aux: "e", pp: "uscito",
    pres: ["esco", "esci", "esce", "usciamo", "uscite", "escono"],
    cong: ["esca", "esca", "esca", "usciamo", "usciate", "escano"] },
  { inf: "bere", es: "beber", aux: "a", pp: "bevuto", fut: "berr", impBase: "beve",
    pres: ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"],
    cong: ["beva", "beva", "beva", "beviamo", "beviate", "bevano"] },
  { inf: "parlare", es: "hablar", aux: "a" },
  { inf: "lavorare", es: "trabajar", aux: "a" },
  { inf: "mangiare", es: "comer", aux: "a" },
  { inf: "arrivare", es: "llegar", aux: "e" },
  { inf: "tornare", es: "volver", aux: "e" },
  { inf: "prendere", es: "coger, tomar", aux: "a", pp: "preso" },
  { inf: "vedere", es: "ver", aux: "a", pp: "visto", fut: "vedr" },
  { inf: "scrivere", es: "escribir", aux: "a", pp: "scritto" },
  { inf: "leggere", es: "leer", aux: "a", pp: "letto" },
  { inf: "mettere", es: "poner", aux: "a", pp: "messo" },
  { inf: "credere", es: "creer", aux: "a" },
  { inf: "dormire", es: "dormir", aux: "a" },
  { inf: "partire", es: "salir de viaje", aux: "e" },
  { inf: "sentire", es: "oír, sentir", aux: "a" },
  { inf: "capire", es: "entender", aux: "a", isc: true },
  { inf: "finire", es: "terminar", aux: "a", isc: true },
  { inf: "preferire", es: "preferir", aux: "a", isc: true },
];

const ESSERE = VERBS[0], AVERE = VERBS[1];
// Une raíz y terminación; los verbos en -iare no duplican la i (mangi + iamo → mangiamo).
const join = (stem, end) => (stem.endsWith("i") && end.startsWith("i") ? stem + end.slice(1) : stem + end);

export function conjugate(v, tense) {
  const conj = v.inf.slice(-3); // are / ere / ire
  const stem = v.inf.slice(0, -3);
  const pp = v.pp || stem + { are: "ato", ere: "uto", ire: "ito" }[conj];

  if (tense === "pres") {
    if (v.pres) return v.pres;
    const isc = v.isc ? "isc" : "";
    const ends = { are: ["o", "i", "a", "iamo", "ate", "ano"], ere: ["o", "i", "e", "iamo", "ete", "ono"], ire: ["o", "i", "e", "iamo", "ite", "ono"] }[conj];
    return ends.map((e, i) => join(stem + (i < 3 || i === 5 ? isc : ""), e));
  }
  if (tense === "imp") {
    if (v.imp) return v.imp;
    const base = v.impBase || stem + conj[0];
    return ["vo", "vi", "va", "vamo", "vate", "vano"].map((e) => base + e);
  }
  if (tense === "fut" || tense === "cond") {
    let root = v.fut;
    if (!root) {
      const s = conj === "are" && stem.endsWith("i") ? stem.slice(0, -1) : stem; // mangiare → manger-
      root = s + (conj === "ire" ? "ir" : "er");
    }
    const ends = tense === "fut" ? ["ò", "ai", "à", "emo", "ete", "anno"] : ["ei", "esti", "ebbe", "emmo", "este", "ebbero"];
    return ends.map((e) => root + e);
  }
  if (tense === "cong") {
    if (v.cong) return v.cong;
    const isc = v.isc ? "isc" : "";
    const ends = conj === "are" ? ["i", "i", "i", "iamo", "iate", "ino"] : ["a", "a", "a", "iamo", "iate", "ano"];
    return ends.map((e, i) => join(stem + (i < 3 || i === 5 ? isc : ""), e));
  }
  if (tense === "pp") {
    const aux = (v.aux === "e" ? ESSERE : AVERE).pres;
    return aux.map((a, i) => `${a} ${v.aux === "e" && i >= 3 ? pp.slice(0, -1) + "i" : pp}`);
  }
  return [];
}

// Con essere también vale el femenino: «sono andata», «siamo andate».
export function accepted(v, tense, person) {
  const form = conjugate(v, tense)[person];
  if (tense !== "pp" || v.aux !== "e") return [form];
  return [form, form.slice(0, -1) + (person >= 3 ? "e" : "a")];
}
