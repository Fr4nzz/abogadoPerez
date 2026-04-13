export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  {
    label: 'Servicios',
    href: '/servicios',
    children: [
      { label: 'Derecho Penal', href: '/servicios/derecho-penal' },
      { label: 'Derecho de Familia, Niñez y Adolescencia', href: '/servicios/derecho-familia' },
      { label: 'Derecho Laboral y Seguridad Social', href: '/servicios/derecho-laboral' },
      { label: 'Derecho Civil', href: '/servicios/derecho-civil' },
      { label: 'Derecho de Tránsito', href: '/servicios/derecho-transito' },
      { label: 'Derecho Administrativo', href: '/servicios/derecho-administrativo' },
      { label: 'Derecho Societario y Empresarial', href: '/servicios/derecho-societario' },
      { label: 'Contratos y Asesoría Preventiva', href: '/servicios/contratos-asesoria' },
      { label: 'Cobranzas Judiciales y Recuperación de Cartera', href: '/servicios/cobranzas-judiciales' },
      { label: 'Inquilinato y Bienes Inmuebles', href: '/servicios/inquilinato-inmuebles' },
      { label: 'Asuntos Notariales y Registrales', href: '/servicios/asuntos-notariales' },
      { label: 'Asesoría Empresarial Integral', href: '/servicios/asesoria-empresarial' },
      { label: 'Derecho Constitucional y Garantías', href: '/servicios/derecho-constitucional' },
    ],
  },
  { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
  { label: 'Contacto', href: '/contacto' },
];
