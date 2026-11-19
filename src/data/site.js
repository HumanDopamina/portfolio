  import profileImg from '../assets/profile.png'

  /**
   * Contenido centralizado del portfolio.
   * Cambia aquí tus datos en lugar de buscarlos por los componentes.
   */
  export const site = {
    name: 'Leonel Hernández',
    role: 'Ingeniero en Cibernética Electrónica',
    heroRoles: [
      'Cybernetic Engineer &',
      'Full Stack Developer',
    ],
    tagline:
      'Me dedico a diseñar y desarrollar soluciones tecnológicas que conecten software, sistemas y redes. Combino mis conocimientos de ingeniería cibernética con el desarrollo de aplicaciones web, explorando nuevas tecnologías y herramientas para resolver problemas mediante soluciones funcionales, innovadoras y eficientes.',
    email: 'leonelher0307@gmail.com',
    location: 'Chinandega, Nicaragua',
    avatar: profileImg,
    socials: {
      github: 'https://github.com/HumanDopamina',
      linkedin: 'https://www.linkedin.com/in/leonelhernandez07/',
    },
    nav: [
      { id: 'sobre-mi', num: '01', label: 'Sobre mí' },
      { id: 'enfoque', num: '02', label: 'Intereses' },
      { id: 'experiencia', num: '03', label: 'Experiencia' },
      { id: 'proyectos', num: '04', label: 'Proyectos' },
      { id: 'contacto', num: '05', label: 'Contacto' },
    ],
    // Paleta única (definida en src/styles/themes.css)
    sectionThemes: {
      inicio: 'palette',
      'sobre-mi': 'palette',
      enfoque: 'palette',
      experiencia: 'palette',
      proyectos: 'palette',
      contacto: 'palette',
    },
    about: {
      paragraphs: [
        'Egresado de Ingeniería en Cibernética Electrónica, con formación en desarrollo de software, sistemas computacionales, redes y tecnologías aplicadas. Mi formación me ha permitido adquirir una perspectiva amplia de la tecnología, desde el funcionamiento de los sistemas hasta el desarrollo de soluciones que integran diferentes herramientas y plataformas.',

        'Me enfoco en el desarrollo de aplicaciones web Full Stack, utilizando tecnologías como React, Next.js, JavaScript, TypeScript, Python y Django. También tengo conocimientos en bases de datos SQL, APIs REST, control de versiones e infraestructura. Mis intereses abarcan áreas como sistemas y redes, Machine Learning y análisis de datos, campos en los que busco seguir ampliando mis conocimientos.'
      ],
      facts: [
        {
          label: 'Formación',
          value: 'Ing. en Cibernética Electrónica',
        },
        { label: 'Ubicación', value: 'Nicaragua' },
        { label: 'Idiomas', value: 'Español (nativo) · Inglés (A2)' },
      ],
      capabilitiesTitle: 'Con qué trabajo',
      capabilities: [
        {
          title: 'Frontend & web',
          desc: 'Interfaces modernas y analítica web para experiencias claras y medibles.',
          tags: [
            'React',
            'Next.js',
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'Figma',
          ],
        },
        {
          title: 'Backend & datos',
          desc: 'APIs, lógica de negocio y persistencia para aplicaciones completas.',
          tags: ['Python', 'Django', 'FastApi', 'APIs REST', 'node.js', 'PostgreSQL'],
        },
        {
          title: 'Herramientas & infraestructura',
          desc: 'Flujos de trabajo, despliegue y ecosistema para entregar y mantener producto.',
          tags: ['Git', 'GitHub', 'docker', 'redis', 'celery'],
        },
      ],
    },
    projects: [
      {
        name: 'Sistema Clínico Dental',
        kind: 'Aplicación web Full Stack',
        year: '2025',
        url: 'https://github.com/HumanDopamina/Aplicacion_web_Sistema_Clinico/tree/main',
        description:
          'Aplicación para la gestión clínica y administrativa de una clínica odontológica: autenticación, roles y permisos, pacientes, expedientes, consultas, documentos, odontogramas y agenda de citas, con interfaz en React e API REST en Django.',
        tags: ['React', 'Vite', 'Tailwind CSS', 'Django', 'DRF'],
      },
      {
        name: 'Groove Archive',
        kind: 'E-commerce musical',
        year: '2025',
        url: 'https://github.com/HumanDopamina/Groove-Archive',
        description:
          'E-commerce con storefront en Next.js y API en Django: catálogo con búsqueda y filtros, carrito persistente, cuentas de usuario, checkout, pedidos y reserva de inventario. Integración de PostgreSQL, Redis, Celery, MinIO y Docker.',
        tags: ['Next.js', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
      },
    ],
    contact: {
      eyebrow: '05 — ¿Hablamos?',
      title: 'Construyamos algo juntos',
      lead: 'Estoy abierto a nuevas oportunidades, proyectos y colaboraciones en desarrollo web. Si buscas a alguien que pueda aportar en frontend, backend o en la mejora continua de un producto, escríbeme.',
      primaryCta: 'Escríbeme',
      secondaryCta: 'LinkedIn',
      footerNote: 'Todos los derechos reservados.',
    },
    approach: {

      titleLead: 'Áreas de ',
      titleAccent: 'interés',
      lead: 'Mi formación en Ingeniería Cibernética Electrónica y mi interés por el desarrollo de software me llevan a explorar distintas áreas de la tecnología, desde la creación de aplicaciones hasta el análisis de datos y los sistemas computacionales.',
      steps: [
        {
          label: '01',
          title: 'Desarrollo de software',
          desc: 'Creación de aplicaciones web, desarrollo frontend y backend, APIs e integración de servicios.',
        },
        {
          label: '02',
          title: 'Sistemas y redes',
          desc: 'Funcionamiento de sistemas computacionales, infraestructura, redes y comunicación entre dispositivos.',
        },
        {
          label: '03',
          title: 'Machine Learning',
          desc: 'Exploración de algoritmos de aprendizaje automático, modelos predictivos y aplicaciones de inteligencia artificial.',
        },
        {
          label: '04',
          title: 'Datos y análisis',
          desc: 'Gestión, procesamiento y análisis de datos para identificar patrones, extraer información y apoyar la toma de decisiones.',
        },
      ],
      quote: 'La tecnología ofrece distintas formas de comprender y resolver problemas.',
      cta: 'Conoce mis proyectos',
  },
    experience: [
      {
        company: 'Nara Consultores',
        role: 'Pasante de Desarrollador Odoo Jr.',
        period: '5 meses (pasantía remota)',
        url: '',
        bullets: [
          'Desarrollé un módulo personalizado para Odoo Point of Sale que extendió la funcionalidad nativa para aceptar pagos en dólares y córdobas dentro de una misma operación.',
          'Implementé en Python la lógica de negocio del flujo multimoneda y adapté el comportamiento estándar del POS.',
          'Modifiqué interfaces y formularios del sistema y desarrollé reportes mediante XML.',
          'Gestioné versiones y despliegues con Git y Odoo.sh en entornos de desarrollo, staging y SaaS, trabajando con autonomía como principal desarrollador del proyecto.',
        ],
      },
    ],
  }
