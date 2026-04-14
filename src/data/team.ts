export interface TeamMember {
  name: string;
  title: string;
  specialization: string;
  bio: string;
  imageUrl?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Dr. Héctor Pérez Vilema',
    title: 'Director Jurídico / Abogado Principal',
    specialization: '[INSERTAR ESPECIALIDAD PRINCIPAL]',
    bio: 'Abogado en libre ejercicio con experiencia en asesoría jurídica, patrocinio legal y atención personalizada de casos en distintas materias. Lidera el despacho con un enfoque de responsabilidad, claridad y compromiso con cada cliente.',
    imageUrl: '/foto-oficina.jpg',
  },
  {
    name: 'Ab. [NOMBRE DEL PROFESIONAL]',
    title: 'Abogada / Abogado Asociado',
    specialization: 'Derecho de Familia, Niñez y Adolescencia',
    bio: 'Profesional enfocado en procesos de familia, alimentos, régimen de visitas, tenencia y demás controversias familiares, con atención cercana y orientación práctica.',
    imageUrl: '/team/abogado-2.jpg',
  },
  {
    name: 'Ab. [NOMBRE DEL PROFESIONAL]',
    title: 'Abogada / Abogado Asociado',
    specialization: 'Derecho Laboral y Seguridad Social',
    bio: 'Responsable del acompañamiento en conflictos laborales, reclamaciones de trabajadores, vistos buenos, liquidaciones y asesoría preventiva para empleadores.',
    imageUrl: '/team/abogado-3.jpg',
  },
  {
    name: 'Ab. [NOMBRE DEL PROFESIONAL]',
    title: 'Abogada / Abogado Asociado',
    specialization: 'Derecho Civil, Contratos y Cobranzas',
    bio: 'Profesional orientado a la solución de conflictos civiles, recuperación de cartera, redacción contractual y acompañamiento en trámites judiciales y extrajudiciales.',
    imageUrl: '/team/abogado-4.jpg',
  },
];
