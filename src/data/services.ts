export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  relatedSlugs: [string, string, string];
}

export const services: Service[] = [
  {
    slug: 'derecho-penal',
    title: 'Derecho Penal',
    shortDescription:
      'Ofrecemos defensa técnica y patrocinio legal en procesos penales, desde la etapa inicial de investigación hasta audiencias y demás actuaciones procesales. Asesoramos tanto a personas investigadas como a víctimas que requieren acompañamiento jurídico y orientación frente a actuaciones ante Fiscalía y autoridades competentes.',
    longDescription:
      'Governed by the COIP, which unified substantive criminal law, criminal procedure, and penitentiary law into one code. Criminal proceedings follow the sequence: investigación previa → instrucción fiscal → evaluación y preparatoria de juicio → juicio, all through oral hearings. The Fiscalía General del Estado directs all criminal investigations and holds exclusive power over public criminal action. Common cases include robbery, fraud (estafa), domestic violence, drug offenses, and organized crime. Defense attorneys appear before Unidades Judiciales Penales and Tribunales de Garantías Penales. Ecuador\'s ongoing security crisis has sharply increased demand for criminal defense.',
    icon: 'scale',
    relatedSlugs: ['derecho-transito', 'derecho-constitucional', 'derecho-civil'],
  },
  {
    slug: 'derecho-familia',
    title: 'Derecho de Familia, Niñez y Adolescencia',
    shortDescription:
      'Brindamos acompañamiento legal en divorcios, tenencia o custodia, régimen de visitas, pensiones alimenticias, incidentes de rebaja o aumento de pensión, unión de hecho, liquidación de sociedad conyugal y demás asuntos familiares. Sabemos que son procesos sensibles y por eso priorizamos un trato humano y responsable.',
    longDescription:
      'One of the highest-demand areas. Ecuador processes 17,000+ divorces annually. Key legislation includes the Código Civil (Books I–III), the Código de la Niñez y Adolescencia, and the COGEP (procedimiento sumario). Divorce by mutual consent without minor children can be processed at a notaría — no court required. Contested divorces require proving legal grounds (abandonment over 6 months, violence, adultery). Pensiones alimenticias (child support) are calculated per an official table set by the Consejo de la Judicatura based on income, number of children, and ages; 80% of awards fall under $125/month. Non-payment can trigger apremio personal (arrest). Cases go before Unidades Judiciales de Familia, Mujer, Niñez y Adolescencia. The SUPA system (Sistema Único de Pensiones Alimenticias) digitally manages support payments.',
    icon: 'family',
    relatedSlugs: ['derecho-civil', 'asuntos-notariales', 'derecho-constitucional'],
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho Laboral y Seguridad Social',
    shortDescription:
      'Atendemos controversias laborales de trabajadores y empleadores, incluyendo despidos, liquidaciones, actas de finiquito, vistos buenos, remuneraciones pendientes, accidentes de trabajo, estabilidad laboral y reclamaciones relacionadas con seguridad social. Buscamos proteger derechos y prevenir contingencias legales.',
    longDescription:
      'Governed by the Código del Trabajo (private sector) and LOSEP (public sector). Claims follow the procedimiento sumario (single audiencia única). The most common claim is despido intempestivo (unfair dismissal), with indemnification of up to 3 months\' salary (under 3 years of service) or 1 month per year (over 3 years, max 25 months). Key procedures include the visto bueno (administrative termination via the Inspector del Trabajo) and despido ineficaz (special protection for pregnant women, union leaders, and persons with disabilities). Workers are also entitled to décimo tercer sueldo, décimo cuarto sueldo, 15% profit sharing (utilidades), and vacation. The Ministerio de Trabajo and IESS (Instituto Ecuatoriano de Seguridad Social) are the key institutions.',
    icon: 'briefcase',
    relatedSlugs: ['asesoria-empresarial', 'derecho-administrativo', 'contratos-asesoria'],
  },
  {
    slug: 'derecho-civil',
    title: 'Derecho Civil',
    shortDescription:
      'Asesoramos y patrocinamos en conflictos civiles relacionados con obligaciones, incumplimiento de contratos, cobro de deudas, daños y perjuicios, controversias patrimoniales y otros asuntos entre particulares. Analizamos cada caso para buscar una solución efectiva, ya sea mediante negociación, mediación o vía judicial.',
    longDescription:
      'Covers contracts, obligations, property, torts (responsabilidad civil), and inheritance. The Código Civil\'s four books address persons, property, successions, and obligations/contracts. Under the COGEP, complex civil cases follow the procedimiento ordinario (two hearings: preliminar + juicio), while simpler disputes use the procedimiento sumario (single hearing). Common matters include real estate transactions, rental disputes (Ley de Inquilinato), inheritance proceedings (posesión efectiva, partición de bienes), and prescription claims. Notarías handle non-contentious matters; the Registro de la Propiedad and Registro Mercantil are key registries.',
    icon: 'landmark',
    relatedSlugs: ['contratos-asesoria', 'cobranzas-judiciales', 'inquilinato-inmuebles'],
  },
  {
    slug: 'derecho-transito',
    title: 'Derecho de Tránsito',
    shortDescription:
      'Asesoramos en contravenciones y delitos de tránsito, impugnación de citaciones, defensa en procesos relacionados con accidentes, daños materiales, lesiones y responsabilidades derivadas de hechos de tránsito. También orientamos en trámites y actuaciones ante las entidades competentes.',
    longDescription:
      'A uniquely prominent practice area in Ecuador due to high accident rates. Since 2014, traffic infractions are codified within the COIP (Articles 371–392). Traffic contravenciones (minor infractions) are processed by judges of contravenciones through oral hearings. Traffic delitos (cases involving death or serious injury) follow full criminal procedure. The ANT (Agencia Nacional de Tránsito) regulates licensing, while SIAT (Sistema de Investigación de Accidentes de Tránsito) handles crash investigations. The SPPAT (Sistema Público para Pago de Accidentes de Tránsito) is the mandatory accident insurance fund. Drunk driving cases, accident claims, and license-point disputes are extremely common.',
    icon: 'car',
    relatedSlugs: ['derecho-penal', 'derecho-civil', 'derecho-administrativo'],
  },
  {
    slug: 'derecho-administrativo',
    title: 'Derecho Administrativo',
    shortDescription:
      'Patrocinamos asuntos relacionados con entidades públicas, procedimientos administrativos, impugnación de actos, recursos, sanciones y defensa de derechos frente a resoluciones de la administración pública. Acompañamos al cliente en cada etapa del trámite con enfoque técnico y estratégico.',
    longDescription:
      'Regulates citizen-versus-State disputes. The COA (Código Orgánico Administrativo, 2017) created a unified framework for administrative procedures. Contentious-administrative claims follow the procedimiento ordinario under COGEP before the Tribunales de lo Contencioso Administrativo. Key actions include the recurso subjetivo (for individual rights violations), recurso objetivo (for annulment of illegal acts), and challenges to administrative silence (silencio administrativo). Relevant institutions include the Procuraduría General del Estado, Contraloría General del Estado, and SERCOP for public procurement disputes.',
    icon: 'building',
    relatedSlugs: ['derecho-constitucional', 'derecho-laboral', 'derecho-societario'],
  },
  {
    slug: 'derecho-societario',
    title: 'Derecho Societario y Empresarial',
    shortDescription:
      'Asesoramos a emprendedores, comerciantes y compañías en constitución de sociedades, reformas estatutarias, actas, nombramientos, cumplimiento societario, relaciones entre socios y ordenamiento documental. Nuestro objetivo es brindar respaldo legal preventivo para el adecuado funcionamiento del negocio.',
    longDescription:
      'Governed by the Ley de Compañías, which was significantly reformed in March 2023 to simplify business formation. Companies (Cía. Ltda. and S.A.) can now be constituted with a private document rather than a public deed. The Superintendencia de Compañías, Valores y Seguros is the primary regulatory body. Common services include company incorporation (including the new SAS — Sociedad por Acciones Simplificada), capital increases, mergers, dissolutions, shareholder disputes, commercial contracts, and regulatory compliance. The SRI (Servicio de Rentas Internas) handles tax registration. Quito, as Ecuador\'s economic center, generates constant demand.',
    icon: 'briefcase-business',
    relatedSlugs: ['asesoria-empresarial', 'contratos-asesoria', 'asuntos-notariales'],
  },
  {
    slug: 'contratos-asesoria',
    title: 'Contratos y Asesoría Preventiva',
    shortDescription:
      'Redactamos, revisamos y negociamos contratos civiles, mercantiles, laborales y de prestación de servicios. Una buena asesoría preventiva permite evitar conflictos futuros, reducir riesgos y dejar claras las obligaciones y derechos de cada parte desde el inicio.',
    longDescription:
      'Covers contracts, obligations, property, torts (responsabilidad civil), and inheritance. The Código Civil\'s four books address persons, property, successions, and obligations/contracts. Under the COGEP, complex civil cases follow the procedimiento ordinario (two hearings: preliminar + juicio), while simpler disputes use the procedimiento sumario (single hearing). Common matters include real estate transactions, rental disputes (Ley de Inquilinato), inheritance proceedings (posesión efectiva, partición de bienes), and prescription claims. Notarías handle non-contentious matters; the Registro de la Propiedad and Registro Mercantil are key registries.',
    icon: 'file-signature',
    relatedSlugs: ['derecho-civil', 'derecho-societario', 'asesoria-empresarial'],
  },
  {
    slug: 'cobranzas-judiciales',
    title: 'Cobranzas Judiciales y Recuperación de Cartera',
    shortDescription:
      'Gestionamos procesos de cobro y recuperación de valores adeudados, tanto en fase extrajudicial como judicial. Evaluamos la mejor vía para cada caso, buscando una recuperación efectiva, ordenada y conforme a Derecho.',
    longDescription:
      'A high-demand area transformed by the COGEP. Two key procedures exist: the procedimiento ejecutivo (for debts backed by a título ejecutivo — pagarés, letras de cambio, protested checks, court judgments) requires two hearings; the procedimiento monitorio (for debts up to 50 SBU without a título ejecutivo) is a COGEP innovation that dramatically simplified small debt collection. If the debtor fails to appear, the judge proceeds directly to execution. Enforcement mechanisms include embargo, retención, and prohibición de enajenar bienes.',
    icon: 'wallet',
    relatedSlugs: ['derecho-civil', 'contratos-asesoria', 'asesoria-empresarial'],
  },
  {
    slug: 'inquilinato-inmuebles',
    title: 'Inquilinato y Bienes Inmuebles',
    shortDescription:
      'Atendemos conflictos derivados de arrendamientos, incumplimiento de pago, restitución de inmuebles, terminación de contratos y controversias relacionadas con la ocupación o uso de bienes. Brindamos respaldo legal tanto a arrendadores como a arrendatarios.',
    longDescription:
      'Covers property transactions, leases, mortgages, condominium law (Ley de Propiedad Horizontal), easements, and construction disputes. All real estate sales require an escritura pública (public deed) and registration at the Registro de la Propiedad. Evictions follow procedimiento sumario. Prescription claims (prescripción adquisitiva/usucapión) for property acquired through long possession are common.',
    icon: 'house',
    relatedSlugs: ['derecho-civil', 'asuntos-notariales', 'contratos-asesoria'],
  },
  {
    slug: 'asuntos-notariales',
    title: 'Asuntos Notariales y Registrales',
    shortDescription:
      'Orientamos en elaboración y revisión de documentos, poderes, declaraciones juramentadas, compraventas, posesiones efectivas, reconocimiento de firmas y otros trámites notariales o registrales. Acompañamos al cliente para que cada gestión se realice con seguridad jurídica.',
    longDescription:
      'Covers contracts, obligations, property, torts (responsabilidad civil), and inheritance. The Código Civil\'s four books address persons, property, successions, and obligations/contracts. Under the COGEP, complex civil cases follow the procedimiento ordinario (two hearings: preliminar + juicio), while simpler disputes use the procedimiento sumario (single hearing). Common matters include real estate transactions, rental disputes (Ley de Inquilinato), inheritance proceedings (posesión efectiva, partición de bienes), and prescription claims. Notarías handle non-contentious matters; the Registro de la Propiedad and Registro Mercantil are key registries.',
    icon: 'stamp',
    relatedSlugs: ['derecho-civil', 'inquilinato-inmuebles', 'derecho-familia'],
  },
  {
    slug: 'asesoria-empresarial',
    title: 'Asesoría Empresarial Integral',
    shortDescription:
      'Brindamos acompañamiento jurídico permanente a negocios y empresas que requieren respaldo en contratos, relaciones laborales, cumplimiento normativo, cobranza, temas societarios y prevención de contingencias legales. Nuestro enfoque busca que la empresa opere con orden y seguridad.',
    longDescription:
      'Governed by the Ley de Compañías, which was significantly reformed in March 2023 to simplify business formation. Companies (Cía. Ltda. and S.A.) can now be constituted with a private document rather than a public deed. The Superintendencia de Compañías, Valores y Seguros is the primary regulatory body. Common services include company incorporation (including the new SAS — Sociedad por Acciones Simplificada), capital increases, mergers, dissolutions, shareholder disputes, commercial contracts, and regulatory compliance. The SRI (Servicio de Rentas Internas) handles tax registration. Quito, as Ecuador\'s economic center, generates constant demand.',
    icon: 'shield-check',
    relatedSlugs: ['derecho-societario', 'derecho-laboral', 'cobranzas-judiciales'],
  },
  {
    slug: 'derecho-constitucional',
    title: 'Derecho Constitucional y Garantías',
    shortDescription:
      'Asesoramos en la protección de derechos constitucionales cuando la situación lo amerita, analizando las acciones legales disponibles y la estrategia más adecuada para la tutela efectiva de derechos.',
    longDescription:
      'Ecuador\'s 2008 Constitution created a robust system of constitutional protections. Any judge can hear garantías jurisdiccionales. The key actions are: Acción de Protección (Article 88, protects all constitutional rights against acts of public authorities or certain private parties), Hábeas Corpus (Article 89, protects liberty), Hábeas Data (Article 92, personal data access/correction), and Acción de Acceso a la Información Pública (Article 91). These are summary, oral proceedings with hearings within 24–48 hours. The Corte Constitucional del Ecuador reviews all constitutional actions.',
    icon: 'shield',
    relatedSlugs: ['derecho-administrativo', 'derecho-penal', 'derecho-familia'],
  },
];
