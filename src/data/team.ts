export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  shortTitle?: string;
  specialization: string;
  practiceAreas: string[];
  bio: string;
  longBio?: string;
  imageUrl?: string;
  credentials?: string[];
  yearJoined?: number;
  university?: string;
  graduationYear?: number;
  positions?: string[];
}

export const team: TeamMember[] = [
  {
    slug: 'hector-perez-vilema',
    name: 'Dr. Héctor Pérez Vilema',
    title: 'Director Jurídico',
    shortTitle: 'Abogado de los Tribunales y Juzgador de la República del Ecuador',
    specialization:
      'Derecho Penal, Administrativo, Procedimientos Disciplinarios (Fuerzas Armadas, Policía y Educación), Familia y Civil',
    practiceAreas: [
      'Derecho Penal',
      'Derecho Administrativo',
      'Procedimientos Disciplinarios (Fuerzas Armadas, Policía y Educación)',
      'Derecho de Familia',
      'Derecho Civil',
    ],
    bio: 'Abogado de los Tribunales y Juzgador de la República del Ecuador. Propietario y director del Consorcio Jurídico HP — Abogados Asociados desde 2014. Se desempeñó como Asesor Jurídico de la Presidencia de la República del Ecuador entre 2014 y 2018. Su práctica profesional combina la asesoría estratégica, el patrocinio judicial y la defensa técnica de los derechos e intereses de sus clientes.',
    longBio:
      'El Dr. Héctor Pérez Vilema es Abogado de los Tribunales y Juzgador de la República del Ecuador, fundador y director del Consorcio Jurídico HP — Abogados Asociados desde 2014. Su trayectoria profesional combina el ejercicio en el sector público y privado: entre 2014 y 2018 se desempeñó como Asesor Jurídico de la Presidencia de la República del Ecuador, experiencia que aporta una visión integral del derecho público, administrativo y constitucional. Como director del consorcio, lidera la atención de procesos a nivel nacional, con un enfoque centrado en la defensa técnica, el análisis estratégico de cada caso y el acompañamiento personalizado al cliente. Su práctica abarca litigación penal de alta complejidad, asuntos administrativos contenciosos, procedimientos disciplinarios en las Fuerzas Armadas, Policía Nacional y sector educativo, así como controversias en materia familiar y civil.',
    imageUrl: '/foto-oficina.jpg',
    university: 'Universidad Iberoamericana del Ecuador',
    graduationYear: 2013,
    positions: [
      'Director Jurídico — Consorcio Jurídico HP — Abogados Asociados (2014 — actualidad)',
      'Asesor Jurídico de la Presidencia de la República del Ecuador (2014 — 2018)',
      'Abogado en libre ejercicio profesional (2013 — actualidad)',
    ],
    credentials: [
      'Magíster en Argumentación Jurídica y Litigación Oral',
      'Magíster en Derecho Procesal Penal',
      'Magíster en Derecho Procesal Constitucional',
      'Diplomado en Estrategias Penales',
      'Diplomado en Derecho Constitucional',
      'Diplomado en Derecho Administrativo',
    ],
  },
  {
    slug: 'andrea-hernandez',
    name: 'Ab. Andrea Hernández',
    title: 'Abogada Asociada',
    specialization: 'Derecho Notarial, Familia y Civil',
    practiceAreas: [
      'Derecho Notarial',
      'Derecho de Familia',
      'Derecho Civil',
    ],
    bio: 'Profesional integrante del Consorcio Jurídico HP desde 2019. Se enfoca en trámites notariales, procesos de familia (divorcio, alimentos, tenencia, régimen de visitas, unión de hecho) y controversias civiles, brindando atención cercana y orientación práctica en cada caso.',
    longBio:
      'La Abogada Andrea Hernández forma parte del equipo del Consorcio Jurídico HP desde 2019. Graduada en 2015 por la Universidad Iberoamericana del Ecuador, ha enfocado su práctica profesional en el derecho notarial, los procesos de familia y las controversias civiles. Acompaña a sus clientes en trámites como divorcios por mutuo consentimiento o controvertidos, fijación y revisión de pensiones alimenticias, tenencia y régimen de visitas, uniones de hecho, posesiones efectivas, partición de bienes, escrituras públicas, poderes y reconocimientos de firma. Su estilo de trabajo combina rigor técnico con una atención cercana y empática, especialmente importante en los asuntos de familia que requieren sensibilidad además de conocimiento jurídico.',
    university: 'Universidad Iberoamericana del Ecuador',
    graduationYear: 2015,
    yearJoined: 2019,
    positions: [
      'Abogada Asociada — Consorcio Jurídico HP (2019 — actualidad)',
    ],
  },
  {
    slug: 'mayra-chango',
    name: 'Ab. Mayra Chango',
    title: 'Abogada Asociada',
    specialization: 'Derecho Laboral, Familia y Civil',
    practiceAreas: [
      'Derecho Laboral y Seguridad Social',
      'Derecho de Familia',
      'Derecho Civil',
    ],
    bio: 'Abogada enfocada en conflictos laborales individuales y colectivos, reclamaciones de trabajadores y empleadores, vistos buenos, liquidaciones, así como asuntos de familia y materia civil. Acompaña a sus clientes con responsabilidad y atención personalizada.',
    longBio:
      'La Abogada Mayra Chango es parte del equipo del Consorcio Jurídico HP. Graduada en 2015 por la Universidad Iberoamericana del Ecuador, su ejercicio profesional se concentra en el derecho laboral —tanto individual como colectivo—, atendiendo a trabajadores y empleadores en reclamaciones por despido intempestivo, despido ineficaz, vistos buenos ante el Inspector del Trabajo, liquidaciones, actas de finiquito, reclamos por décimo tercer y cuarto sueldo, vacaciones y beneficios sociales, así como afiliaciones al IESS. Complementa esta práctica con el patrocinio en asuntos de familia y materia civil, ofreciendo una atención técnica, oportuna y centrada en proteger los derechos de cada cliente.',
    university: 'Universidad Iberoamericana del Ecuador',
    graduationYear: 2015,
    positions: [
      'Abogada Asociada — Consorcio Jurídico HP',
    ],
  },
];
