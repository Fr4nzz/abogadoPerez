export interface TeamMember {
  name: string;
  title: string;
  specialization: string;
  bio: string;
  imageUrl?: string;
  credentials?: string[];
  yearJoined?: number;
  university?: string;
  graduationYear?: number;
}

export const team: TeamMember[] = [
  {
    name: 'Dr. Héctor Pérez Vilema',
    title: 'Director Jurídico',
    specialization:
      'Derecho Penal, Administrativo, Procedimientos Disciplinarios (Fuerzas Armadas, Policía y Educación), Familia y Civil',
    bio: 'Abogado de los Tribunales y Juzgador de la República del Ecuador. Propietario y director del Consorcio Jurídico HP — Abogados Asociados desde 2014. Se desempeñó como Asesor Jurídico de la Presidencia de la República del Ecuador entre 2014 y 2018. Su práctica profesional combina la asesoría estratégica, el patrocinio judicial y la defensa técnica de los derechos e intereses de sus clientes.',
    imageUrl: '/foto-oficina.jpg',
    university: 'Universidad Iberoamericana del Ecuador',
    graduationYear: 2013,
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
    name: 'Ab. Andrea Hernández',
    title: 'Abogada Asociada',
    specialization: 'Derecho Notarial, Familia y Civil',
    bio: 'Profesional integrante del Consorcio Jurídico HP desde 2019. Se enfoca en trámites notariales, procesos de familia (divorcio, alimentos, tenencia, régimen de visitas, unión de hecho) y controversias civiles, brindando atención cercana y orientación práctica en cada caso.',
    university: 'Universidad Iberoamericana del Ecuador',
    graduationYear: 2015,
    yearJoined: 2019,
  },
  {
    name: 'Ab. Mayra Chango',
    title: 'Abogada Asociada',
    specialization: 'Derecho Laboral, Familia y Civil',
    bio: 'Abogada enfocada en conflictos laborales individuales y colectivos, reclamaciones de trabajadores y empleadores, vistos buenos, liquidaciones, así como asuntos de familia y materia civil. Acompaña a sus clientes con responsabilidad y atención personalizada.',
    university: 'Universidad Iberoamericana del Ecuador',
    graduationYear: 2015,
  },
];
