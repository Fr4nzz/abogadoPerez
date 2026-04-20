export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneInternational: string;
  email: string;
  whatsappUrl: string;
  foundedYear: number;
  coverage: string;
  address: {
    building: string;
    floor: string;
    office: string;
    sector: string;
    city: string;
    province: string;
    country: string;
    postalCode: string;
    reference: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  social: {
    facebook: string;
  };
  officeHours: string;
}

export const siteConfig: SiteConfig = {
  name: 'Consorcio Jurídico HP — Abogados Asociados',
  shortName: 'Consorcio Jurídico HP',
  tagline: 'Asesoría y patrocinio legal con seriedad, cercanía y compromiso',
  description:
    'Somos un equipo de abogados dedicado al patrocinio y asesoría jurídica a nivel nacional, con atención personalizada y soluciones legales claras, oportunas y responsables.',
  url: 'https://cjhperez.com',
  phone: '0993646082',
  phoneInternational: '+593993646082',
  email: 'perez_hector03@hotmail.com',
  whatsappUrl: 'https://wa.me/593993646082?text=Hola%2C%20necesito%20una%20consulta%20legal',
  foundedYear: 2014,
  coverage: 'Atendemos procesos legales a nivel nacional desde nuestra oficina en Quito',
  address: {
    building: 'Edificio Parlamento',
    floor: 'Segundo piso',
    office: 'Oficina 202',
    sector: 'Sector La Alameda',
    city: 'Quito',
    province: 'Pichincha',
    country: 'Ecuador',
    postalCode: '170403',
    reference: 'Sector La Alameda, cerca del Palacio Legislativo',
  },
  coordinates: { lat: -0.213, lng: -78.4995 },
  social: {
    facebook: 'https://www.facebook.com/100088211803925/',
  },
  officeHours: '[LUNES A VIERNES DE 9:00 A 18:00 / SÁBADOS CON CITA PREVIA]',
};
