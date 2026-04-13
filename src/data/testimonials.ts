export interface Testimonial {
  name: string;
  caseType: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'María Fernanda C.',
    caseType: 'Caso de familia',
    quote:
      '“Recibí acompañamiento claro y respetuoso durante mi proceso de divorcio y fijación de pensión alimenticia. Siempre me explicaron cada paso con paciencia y profesionalismo.”',
  },
  {
    name: 'Jorge Luis P.',
    caseType: 'Caso laboral',
    quote:
      '“Me asesoraron en un problema de despido y lograron orientarme de forma seria y responsable. Valoro mucho la atención directa y la claridad con la que llevaron mi caso.”',
  },
  {
    name: 'Andrea M.',
    caseType: 'Caso de tránsito',
    quote:
      '“Tuve un inconveniente por un accidente de tránsito y encontré respaldo inmediato. Me ayudaron con la defensa, los trámites y la estrategia legal desde el inicio.”',
  },
  {
    name: 'Carlos A.',
    caseType: 'Cobranza y contratos',
    quote:
      '“Necesitaba recuperar una deuda y revisar documentación importante. El trabajo fue ordenado, transparente y con seguimiento constante hasta obtener resultados.”',
  },
];
