// Interacciones principales de Fox Abogados & Consultores.

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector("[data-site-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const siteNav = document.querySelector("[data-site-nav]");
  const navLinks = document.querySelectorAll(".SiteHeader-link");
  const revealItems = document.querySelectorAll(".RevealItem");
  const carousel = document.querySelector("[data-carousel]");
  const scrollProgress = document.querySelector("[data-scroll-progress]");
  const backTopButton = document.querySelector("[data-back-top]");
  const counterItems = document.querySelectorAll("[data-counter]");
  const skillBars = document.querySelectorAll("[data-skill-progress]");
  const magneticLinks = document.querySelectorAll("[data-magnetic-link]");
  const tiltCards = document.querySelectorAll("[data-tilt-card]");
  const teamCards = document.querySelectorAll("[data-team-card]");
  const caseButtons = document.querySelectorAll("[data-case-open]");
  const caseModal = document.querySelector("[data-case-modal]");
  const serviceButtons = document.querySelectorAll("[data-service-open]");
  const servicePanels = document.querySelectorAll(".ServicePanel");
  const serviceModal = document.querySelector("[data-service-modal]");
  const serviceFilters = document.querySelectorAll("[data-service-filter]");
  const servicesTrack = document.querySelector("[data-services-track]");
  const servicesViewport = document.querySelector("[data-services-viewport]");
  const servicesScrollButtons = document.querySelectorAll("[data-services-scroll]");
  const processCards = document.querySelectorAll("[data-process-card]");
  const blogButtons = document.querySelectorAll("[data-blog-open]");
  const blogModal = document.querySelector("[data-blog-modal]");
  const casesPageFilters = document.querySelectorAll("[data-cases-filter]");
  const casesPageCards = document.querySelectorAll("[data-case-page-card]");
  const casesPageModal = document.querySelector("[data-cases-modal]");
  const contactForm = document.querySelector("[data-contact-form]");
  const adviceLinks = document.querySelectorAll("[data-advice-whatsapp]");
  const whatsappPhone = "573008430279";

  const buildWhatsAppUrl = (message) => {
    const cleanMessage = message || "Hola, quiero agendar una asesoria con Fox Abogados & Consultores.";

    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(cleanMessage)}`;
  };

  const caseDetails = {
    traffic: {
      category: "Criminal Lawyer",
      title: "Traffic Tickets",
      copy: "Acompanamiento juridico en comparendos, actuaciones de transito y defensa de garantias dentro de procedimientos administrativos o sancionatorios.",
    },
    insurance: {
      category: "Banking & Finance",
      title: "Insurance Defense",
      copy: "Revision documental, analisis de cobertura y estrategia para la defensa de intereses en reclamaciones financieras, contractuales o aseguradoras.",
    },
    health: {
      category: "Health Law",
      title: "One More Case Won",
      copy: "Estructuracion de argumentos, soporte probatorio y seguimiento procesal para controversias relacionadas con derechos, servicios y obligaciones del sector salud.",
    },
    criminal: {
      category: "Business Company",
      title: "Criminal Justice",
      copy: "Defensa tecnica en escenarios de alta complejidad, con evaluacion de riesgos, pruebas y lineas de actuacion para proteger libertad, reputacion y patrimonio.",
    },
  };

  const serviceDetails = {
    penal: {
      category: "Legal",
      title: "Derecho penal",
      image: "assets/img/servicio-penal.jpg",
      copy: "Defensa tecnica para proteger libertad, reputacion y patrimonio ante investigaciones, audiencias y procesos penales.",
      items: [
        { title: "Defensa en procesos penales", text: "Representacion estrategica en tribunales de alta complejidad." },
        { title: "Asesoria preventiva", text: "Blindaje legal corporativo y gestion de riesgos penales." },
        { title: "Recursos de apelacion", text: "Impugnaciones y casacion ante instancias superiores." },
      ],
    },
    policivo: {
      category: "Legal",
      title: "Derecho policivo",
      image: "assets/img/boris-batista.jpg",
      copy: "Acompanamiento frente a actuaciones policivas, querellas, comparendos y medidas que afecten derechos ciudadanos o empresariales.",
      items: [
        { title: "Comparendos y actuaciones", text: "Revision del procedimiento y construccion de respuesta juridica." },
        { title: "Querellas policivas", text: "Acompanamiento en conflictos de convivencia, propiedad y uso del espacio." },
        { title: "Recursos y garantias", text: "Impugnacion de decisiones y proteccion del debido proceso." },
      ],
    },
    civil: {
      category: "Legal",
      title: "Derecho civil y procesal",
      image: "assets/img/servicio-civil.jpg",
      copy: "Estrategia para reclamaciones civiles, contratos, cobros, responsabilidad y litigios con enfoque en prueba y oportunidad.",
      items: [
        { title: "Contratos y reclamaciones", text: "Revision, redaccion y exigibilidad de obligaciones civiles." },
        { title: "Procesos judiciales", text: "Estrategia en procesos ejecutivos, declarativos y responsabilidad civil." },
        { title: "Conciliacion", text: "Negociacion tecnica para resolver controversias antes del litigio." },
      ],
    },
    administrativo: {
      category: "Legal",
      title: "Derecho administrativo",
      image: "assets/img/servicio-administrativo.jpg",
      copy: "Defensa y asesoria frente a entidades publicas, actos administrativos, sanciones y procedimientos estatales.",
      items: [
        { title: "Peticiones y recursos", text: "Respuesta juridica frente a actos, omisiones y decisiones administrativas." },
        { title: "Defensa ante entidades", text: "Representacion en investigaciones, sanciones y actuaciones publicas." },
        { title: "Contratacion estatal", text: "Acompanamiento en ejecucion contractual y responsabilidad del Estado." },
      ],
    },
    laboral: {
      category: "Legal",
      title: "Derecho laboral",
      image: "assets/img/servicio-laboral.jpg",
      copy: "Soporte para empresas y trabajadores en relaciones laborales, contratos, liquidaciones, reclamaciones y conflictos.",
      items: [
        { title: "Contratos y reglamentos", text: "Estructura documental para relaciones laborales claras y sostenibles." },
        { title: "Despidos y liquidaciones", text: "Revision de terminaciones, pagos, prestaciones y reclamaciones." },
        { title: "Procesos laborales", text: "Conciliaciones, demandas y defensa judicial." },
      ],
    },
    insolvencia: {
      category: "Legal",
      title: "Insolvencia economica",
      image: "assets/img/servicio-insolvencia.jpg",
      copy: "Ruta juridica para reorganizar obligaciones, negociar con acreedores y recuperar estabilidad patrimonial.",
      items: [
        { title: "Diagnostico de deudas", text: "Lectura integral de obligaciones, riesgos y capacidad de pago." },
        { title: "Negociacion con acreedores", text: "Acuerdos de pago y reorganizacion con soporte juridico." },
        { title: "Proteccion patrimonial", text: "Medidas para recuperar estabilidad y prevenir nuevas contingencias." },
      ],
    },
    familia: {
      category: "Legal",
      title: "Derecho de familia",
      image: "assets/img/servicio-familia.jpg",
      copy: "Acompanamiento sensible y estrategico en asuntos familiares que requieren acuerdos claros y proteccion de derechos.",
      items: [
        { title: "Alimentos, custodia y visitas", text: "Definicion de acuerdos equilibrados y proteccion de menores." },
        { title: "Divorcios y liquidacion", text: "Ruta juridica para separaciones y asuntos patrimoniales." },
        { title: "Conciliaciones familiares", text: "Soluciones dialogadas con respaldo legal." },
      ],
    },
    inmobiliario: {
      category: "Legal",
      title: "Bienes raices",
      image: "assets/img/servicio-bienes-raices.jpg",
      copy: "Revision y estructura legal para operaciones inmobiliarias, contratos, arrendamientos y saneamiento de riesgos.",
      items: [
        { title: "Estudio de titulos", text: "Revision de antecedentes, cargas y riesgos de la operacion." },
        { title: "Contratos inmobiliarios", text: "Promesas, compraventas, arrendamientos y garantias." },
        { title: "Saneamiento", text: "Regularizacion y defensa en controversias sobre inmuebles." },
      ],
    },
    frontend: {
      category: "Consultoria",
      title: "Desarrollo frontend",
      image: "assets/img/servicio-frontend.jpg",
      copy: "Construccion de interfaces web limpias, responsive y mantenibles para proyectos que necesitan presencia digital seria.",
      items: [
        { title: "Interfaces web", text: "Construccion HTML, CSS y JavaScript con estructura mantenible." },
        { title: "Optimizacion", text: "Mejora responsive, rendimiento y experiencia de usuario." },
        { title: "Componentes reutilizables", text: "Sistemas visuales consistentes y faciles de escalar." },
      ],
    },
    contaduria: {
      category: "Consultoria",
      title: "Contaduria",
      image: "assets/img/servicio-contaduria.jpg",
      copy: "Apoyo contable para ordenar informacion financiera, entender obligaciones y tomar decisiones con datos claros.",
      items: [
        { title: "Soportes contables", text: "Orden documental y clasificacion de informacion financiera." },
        { title: "Reportes", text: "Lectura clara para tomar decisiones administrativas." },
        { title: "Apoyo tributario", text: "Revision basica de obligaciones y fechas relevantes." },
      ],
    },
    comunicacion: {
      category: "Consultoria",
      title: "Comunicacion social",
      image: "assets/img/servicio-comunicacion.jpg",
      copy: "Construccion de mensajes, reputacion y contenidos para organizaciones que necesitan comunicar con precision.",
      items: [
        { title: "Mensajes institucionales", text: "Narrativas claras para clientes, equipos y aliados." },
        { title: "Reputacion", text: "Gestion de comunicacion en contextos sensibles." },
        { title: "Canales digitales", text: "Contenido adaptado para redes, web y piezas informativas." },
      ],
    },
    marketing: {
      category: "Consultoria",
      title: "Marketing digital",
      image: "assets/img/servicio-marketing.jpg",
      copy: "Estrategias de visibilidad digital orientadas a atraer clientes, ordenar canales y medir resultados.",
      items: [
        { title: "Estrategia de contenido", text: "Plan editorial orientado a posicionamiento y confianza." },
        { title: "Redes y pauta", text: "Ejecucion de canales digitales con criterio de marca." },
        { title: "Analisis", text: "Medicion de conversion, alcance y oportunidades de mejora." },
      ],
    },
    sst: {
      category: "Consultoria",
      title: "Salud y seguridad en el trabajo",
      image: "assets/img/servicio-sst.jpg",
      copy: "Acompanamiento para prevenir riesgos, documentar procesos y cumplir obligaciones en seguridad laboral.",
      items: [
        { title: "Diagnostico de riesgos", text: "Identificacion de amenazas y prioridades de intervencion." },
        { title: "Documentacion", text: "Soportes, politicas y capacitaciones para cumplimiento." },
        { title: "Seguimiento", text: "Control de medidas preventivas y mejora continua." },
      ],
    },
    recursos: {
      category: "Consultoria",
      title: "Recursos humanos",
      image: "assets/img/equipo-fox.jpg",
      copy: "Gestion de talento, estructura documental y procesos internos para equipos mas ordenados y sostenibles.",
      items: [
        { title: "Seleccion y perfiles", text: "Definicion de cargos, requisitos y procesos de vinculacion." },
        { title: "Documentacion interna", text: "Formatos, soportes y procesos de gestion laboral." },
        { title: "Clima y convivencia", text: "Acompanamiento para equipos mas claros y sostenibles." },
      ],
    },
  };

  const blogDetails = {
    recicladores: {
      date: "Noviembre 2026",
      title: "Corte Constitucional convoca audiencia pública sobre los derechos de los recicladores en Bogotá",
      tags: ["Constitucional", "Acciones Afirmativas"],
      source: "https://www.asuntoslegales.com.co/actualidad/audiencia-para-revisar-garantias-de-los-recicladores-4517049",
      body: "La Corte Constitucional convocó para el 13 de noviembre de 2026 una audiencia pública para examinar cómo se garantizarán los derechos y la participación de los recicladores de oficio en el nuevo esquema de prestación y contratación del servicio de aseo en Bogotá.\n\nLa diligencia hace parte del seguimiento a la Sentencia T-724 de 2003, que ordenó adoptar acciones afirmativas a favor de esta población, y contará con organizaciones de recicladores, entidades del Gobierno Nacional y del Distrito, y organismos de vigilancia y regulación.\n\nPara empresas de servicios públicos y contratistas del sector, el mensaje es claro: los procesos de contratación deben incorporar medidas verificables de inclusión, so pena de enfrentar cuestionamientos judiciales.",
    },
    rescate: {
      date: "Octubre 2026",
      title: "Gobierno radica la Ley de Rescate Económico con cambios en renta, IVA y sanciones",
      tags: ["Tributario", "Proyecto de Ley"],
      source: "https://www.larepublica.co/economia/estos-son-los-cinco-puntos-claves-que-contiene-la-ley-de-rescate-economico-del-gobierno-4514369",
      body: "El Ministerio de Hacienda radicó el 29 de octubre de 2026 en la Cámara de Representantes el Proyecto de Ley 477 de 2026, conocido como Ley de Rescate Económico. Con 105 artículos, combina cambios tributarios, recortes al gasto estatal y la devolución del IVA a hogares vulnerables.\n\nEntre sus propuestas figuran ajustes en el impuesto de renta, el IVA y el régimen sancionatorio, como una sanción por no facturar calculada sobre los ingresos del mes anterior. El Gobierno solicitó mensaje de urgencia para que el Congreso lo apruebe antes de terminar el año.\n\nAl tratarse de un proyecto, su texto puede cambiar durante el trámite. Recomendamos a empresas y personas naturales revisar su planeación tributaria para 2027 y hacer seguimiento a los debates.",
    },
    laboral: {
      date: "Octubre 2026",
      title: "MinTrabajo y la Corte Suprema firman acuerdo para difundir derechos laborales y el nuevo Código Procesal del Trabajo",
      tags: ["Derecho Laboral", "Código Procesal del Trabajo"],
      source: "https://www.radiohoy.com/2026/10/14/mintrabajo-y-corte-suprema-firman-acuerdo-para-fortalecer-los-derechos-laborales-en-colombia/825160/",
      body: "El Ministerio del Trabajo y la Corte Suprema de Justicia firmaron el 14 de octubre de 2026 un memorando de entendimiento para difundir la legislación laboral y facilitar el acceso de trabajadores y empleadores a la información sobre sus derechos y a las decisiones judiciales.\n\nEl acuerdo tendría una duración aproximada de cuatro años e incluye la divulgación del nuevo Código Procesal del Trabajo y de la Seguridad Social (Ley 2452 de 2025), vigente desde abril de 2026, que convierte la doble instancia en la regla general.\n\nPara las empresas, es un buen momento para revisar sus procedimientos disciplinarios, contratos y políticas internas a la luz de las nuevas reglas procesales.",
    },
    tutelas: {
      date: "Septiembre 2026",
      title: "Tutelas contra el presidente vuelven a ser repartidas al Consejo de Estado",
      tags: ["Constitucional", "Acción de Tutela"],
      source: "https://www.asuntoslegales.com.co/actualidad/tutelas-contra-el-presidente-volveran-a-ser-competencia-del-consejo-de-estado-4492561",
      body: "El Ministerio de Justicia expidió el Decreto 1446 del 28 de septiembre de 2026, que modifica las reglas de reparto de la acción de tutela. Las tutelas contra actuaciones u omisiones del presidente de la República en ejercicio de sus funciones se repartirán en primera instancia al Consejo de Estado.\n\nLa norma retoma una regla que ya existía en decretos anteriores y que había cambiado en 2025, cuando estas tutelas pasaron a los jueces del circuito. El decreto contempla una excepción para las tutelas relacionadas con la erradicación de cultivos ilícitos y rige desde su publicación en el Diario Oficial.\n\nSe trata de una regla de reparto, no de competencia: la tutela sigue disponible para cualquier ciudadano y la Corte Constitucional conserva su función de revisión.",
    },
    trabajoforzoso: {
      date: "Septiembre 2026",
      title: "Colombia prohíbe importar bienes producidos con trabajo forzoso",
      tags: ["Comercio Exterior", "Compliance"],
      source: "https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1444_2026.htm",
      body: "El Decreto 1444 del 28 de septiembre de 2026, expedido por el Ministerio de Comercio, Industria y Turismo, prohíbe la importación de bienes extraídos, producidos, manufacturados o transformados total o parcialmente con trabajo forzoso u obligatorio, según la definición del Convenio 29 de la OIT.\n\nLa mercancía en esa situación se considera de prohibida importación, lo que puede llevar a su aprehensión y decomiso, y a sanciones conforme a la Ley 2586 de 2026. La DIAN está a cargo del control y la fiscalización.\n\nEl decreto no crea un certificado único que acredite que una importación está libre de trabajo forzoso. Por eso recomendamos a los importadores mapear su cadena de suministro, exigir declaraciones a sus proveedores y conservar la documentación de origen.",
    },
    sismo: {
      date: "Agosto 2026",
      title: "SIC prohíbe alzas injustificadas de precios tras el sismo del 10 de agosto",
      tags: ["Consumo", "Protección al Consumidor"],
      source: "https://www.asuntoslegales.com.co/actualidad/superindustria-expide-medidas-para-proteger-a-damnificados-del-terremoto-4469909",
      body: "La Superintendencia de Industria y Comercio expidió la Circular 003 del 27 de agosto de 2026, tras la declaratoria de desastre nacional por el sismo del 10 de agosto. La circular prohíbe incrementar de manera sustancial e injustificada los precios de bienes y servicios necesarios para atender la emergencia, como víveres, medicamentos y materiales de construcción.\n\nTambién recuerda que siguen prohibidos los acuerdos entre competidores para fijar precios o restringir la oferta, y que los operadores no pueden cobrar por los periodos en que sus servicios estuvieron interrumpidos por el sismo. La medida rige mientras subsistan los efectos de la emergencia.\n\nComerciantes y distribuidores deben documentar la justificación de cualquier ajuste de precios para responder ante eventuales investigaciones de la SIC.",
    },
  };

  const closeMenu = () => {
    if (!menuToggle || !siteNav) {
      return;
    }

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("title", "Abrir menu principal");
    siteNav.classList.remove("is-open");
    header?.classList.remove("is-open");
    body.classList.remove("is-menuOpen");
  };

  const openMenu = () => {
    if (!menuToggle || !siteNav) {
      return;
    }

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("title", "Cerrar menu principal");
    siteNav.classList.add("is-open");
    header?.classList.add("is-open");
    body.classList.add("is-menuOpen");
  };

  const menuToggleHandler = () => {
    const isExpanded = menuToggle?.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      closeMenu();
      return;
    }

    openMenu();
  };

  const updateScrollUi = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

    header?.classList.toggle("is-scrolled", window.scrollY > 50);
    scrollProgress?.style.setProperty("width", `${progress}%`);
    backTopButton?.classList.toggle("is-visible", window.scrollY > 420);
  };

  const keydownHandler = (event) => {
    if (event.key === "Escape") {
      closeMenu();
      if (caseModal?.open) {
        caseModal.close();
      }
      if (serviceModal?.open) {
        serviceModal.close();
      }
      if (blogModal?.open) {
        blogModal.close();
      }
    }
  };

  const animateCounter = (item) => {
    const target = Number(item.dataset.counter || 0);
    const duration = 900;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * easedProgress);

      item.textContent = `+${value}`;

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    window.requestAnimationFrame(tick);
  };

  const revealHandler = (entries) => {
    entries.forEach((entry) => {
      const delay = Number(entry.target.dataset.revealDelay || 0);

      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add("is-visible");

        if (entry.target.matches("[data-counter]") && !entry.target.dataset.hasCounted) {
          entry.target.dataset.hasCounted = "true";
          animateCounter(entry.target);
        }

        return;
      }

      entry.target.style.transitionDelay = "0ms";
      entry.target.classList.remove("is-visible");
    });
  };

  const setupRevealItems = () => {
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      counterItems.forEach(animateCounter);
      skillBars.forEach((bar) => bar.style.setProperty("width", `${bar.dataset.skillProgress}%`));
      return;
    }

    const revealObserver = new IntersectionObserver(revealHandler, {
      threshold: 0.18,
    });

    revealItems.forEach((item) => revealObserver.observe(item));
    counterItems.forEach((item) => revealObserver.observe(item));
  };

  const setupSkillBars = () => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const bar = entry.target;
        const percent = bar.dataset.skillProgress || "0";

        bar.style.setProperty("width", entry.isIntersecting ? `${percent}%` : "0%");
      });
    }, { threshold: 0.4 });

    skillBars.forEach((bar) => skillObserver.observe(bar));
  };

  const setupCarousel = () => {
    if (!carousel) {
      return;
    }

    const track = carousel.querySelector("[data-carousel-track]");
    const previousButton = carousel.querySelector('[data-carousel-action="previous"]');
    const nextButton = carousel.querySelector('[data-carousel-action="next"]');

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const getScrollAmount = () => {
      const card = track?.querySelector(".TeamCarousel-card");

      if (!track || !card) {
        return 0;
      }

      const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const cardWidth = card.getBoundingClientRect().width + gap;
      const visibleCards = Math.max(1, Math.floor(track.getBoundingClientRect().width / cardWidth));

      return cardWidth * visibleCards;
    };

    const carouselButtonHandler = (direction) => {
      if (!track) {
        return;
      }

      const scrollAmount = getScrollAmount();
      const maxScrollLeft = track.scrollWidth - track.clientWidth;

      if (direction > 0 && track.scrollLeft >= maxScrollLeft - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      if (direction < 0 && track.scrollLeft <= 0) {
        track.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
        return;
      }

      track.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
    };

    const pointerDownHandler = (event) => {
      if (!track) {
        return;
      }

      isDragging = true;
      startX = event.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.classList.add("is-dragging");
    };

    const pointerUpHandler = () => {
      if (!track) {
        return;
      }

      isDragging = false;
      track.classList.remove("is-dragging");
    };

    const pointerMoveHandler = (event) => {
      if (!track || !isDragging) {
        return;
      }

      event.preventDefault();
      track.scrollLeft = scrollLeft - (event.pageX - track.offsetLeft - startX) * 1.35;
    };

    previousButton?.addEventListener("click", () => carouselButtonHandler(-1));
    nextButton?.addEventListener("click", () => carouselButtonHandler(1));
    track?.addEventListener("mousedown", pointerDownHandler);
    track?.addEventListener("mouseleave", pointerUpHandler);
    track?.addEventListener("mouseup", pointerUpHandler);
    track?.addEventListener("mousemove", pointerMoveHandler);
  };

  const setupMagneticLinks = () => {
    magneticLinks.forEach((link) => {
      link.addEventListener("mousemove", (event) => {
        const rect = link.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.22;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.22;

        link.style.transform = `translate(${x}px, ${y}px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  const setupTiltCards = () => {
    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        card.style.setProperty("--tilt-x", `${x * 5}deg`);
        card.style.setProperty("--tilt-y", `${y * -5}deg`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  };

  const setupAdviceLinks = () => {
    adviceLinks.forEach((link) => {
      const message = link.dataset.adviceWhatsapp;

      link.href = buildWhatsAppUrl(message);
      link.target = "_blank";
      link.rel = "noreferrer";
    });
  };

  const setupTeamCards = () => {
    teamCards.forEach((card) => {
      card.addEventListener("click", () => {
        teamCards.forEach((item) => item.classList.remove("is-selected"));
        card.classList.add("is-selected");
      });
    });
  };

  const setupCaseModal = () => {
    if (!caseModal) {
      return;
    }

    const closeButton = caseModal.querySelector("[data-case-close]");
    const categoryNode = caseModal.querySelector("[data-case-category]");
    const titleNode = caseModal.querySelector("[data-case-title]");
    const copyNode = caseModal.querySelector("[data-case-copy]");

    caseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const detail = caseDetails[button.dataset.caseOpen || ""];

        if (!detail) {
          return;
        }

        categoryNode.textContent = detail.category;
        titleNode.textContent = detail.title;
        copyNode.textContent = detail.copy;
        caseModal.showModal();
      });
    });

    closeButton?.addEventListener("click", () => caseModal.close());
    caseModal.addEventListener("click", (event) => {
      if (event.target === caseModal) {
        caseModal.close();
      }
    });
  };

  const setupProfileModals = () => {
    document.querySelectorAll("[data-profile-open]").forEach((button) => {
      const modal = document.querySelector(`[data-profile="${button.dataset.profileOpen}"]`);

      if (!modal) {
        return;
      }

      button.addEventListener("click", (event) => {
        event.stopPropagation();
        modal.showModal();
      });
    });

    document.querySelectorAll("[data-profile]").forEach((modal) => {
      modal.querySelector("[data-profile-close]")?.addEventListener("click", () => modal.close());
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.close();
        }
      });
    });
  };

  const setupServiceFilters = () => {
    if (!servicesTrack) {
      return;
    }

    const panels = servicesTrack.querySelectorAll("[data-service-category]");

    serviceFilters.forEach((filterButton) => {
      filterButton.addEventListener("click", () => {
        const filter = filterButton.dataset.serviceFilter || "all";

        serviceFilters.forEach((button) => button.classList.remove("is-active"));
        filterButton.classList.add("is-active");

        panels.forEach((panel) => {
          const canShow = filter === "all" || panel.dataset.serviceCategory === filter;
          panel.classList.toggle("is-hidden", !canShow);
        });

        setActiveServicePanel(0);
      });
    });
  };

  let activeServiceIndex = Math.max(0, Array.from(servicePanels).findIndex((panel) => panel.classList.contains("is-active")));

  const getServicesTranslateX = () => {
    if (!servicesTrack) {
      return 0;
    }

    const transform = window.getComputedStyle(servicesTrack).transform;

    if (!transform || transform === "none") {
      return 0;
    }

    const matrix = transform.match(/matrix\((.+)\)/);

    if (!matrix) {
      return 0;
    }

    return Number(matrix[1].split(",")[4]) || 0;
  };

  const centerActiveServicePanel = () => {
    const activePanel = servicePanels[activeServiceIndex];

    if (!servicesTrack || !servicesViewport || !activePanel) {
      return;
    }

    const viewportRect = servicesViewport.getBoundingClientRect();
    const panelRect = activePanel.getBoundingClientRect();
    const currentTranslate = getServicesTranslateX();
    const panelCenter = panelRect.left - viewportRect.left + panelRect.width / 2;
    const viewportCenter = viewportRect.width / 2;
    const nextTranslate = currentTranslate - (panelCenter - viewportCenter);
    const minTranslate = Math.min(0, servicesViewport.clientWidth - servicesTrack.scrollWidth);
    const clampedTranslate = Math.max(minTranslate, Math.min(0, nextTranslate));

    servicesTrack.style.transform = `translateX(${clampedTranslate}px)`;
  };

  const setActiveServicePanel = (index, options = {}) => {
    if (!servicePanels.length) {
      return;
    }

    activeServiceIndex = (index + servicePanels.length) % servicePanels.length;
    servicePanels.forEach((panel, panelIndex) => {
      panel.classList.toggle("is-active", panelIndex === activeServiceIndex);
    });

    if (options.canCenter !== false) {
      window.requestAnimationFrame(centerActiveServicePanel);
    }
  };

  const setupServicesScroll = () => {
    if (!servicesTrack || !servicesViewport) {
      return;
    }

    servicesScrollButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.servicesScroll === "previous" ? -1 : 1;

        setActiveServicePanel(activeServiceIndex + direction);
      });
    });

    servicePanels.forEach((panel, index) => {
      panel.addEventListener("mouseenter", () => setActiveServicePanel(index, { canCenter: false }));
      panel.addEventListener("focusin", () => setActiveServicePanel(index));
    });

    servicesViewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveServicePanel(activeServiceIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveServicePanel(activeServiceIndex + 1);
      }
    });

    window.addEventListener("resize", centerActiveServicePanel);
    setActiveServicePanel(activeServiceIndex);
  };

  const setupServiceModal = () => {
    if (!serviceModal) {
      return;
    }

    const closeButton = serviceModal.querySelector("[data-service-close]");
    const categoryNode = serviceModal.querySelector("[data-service-category-label]");
    const titleNode = serviceModal.querySelector("[data-service-title]");
    const copyNode = serviceModal.querySelector("[data-service-copy]");
    const listNode = serviceModal.querySelector("[data-service-list]");
    const imageNode = serviceModal.querySelector("[data-service-image]");
    const actionNode = serviceModal.querySelector("[data-service-action]");

    const renderServiceDetail = (button) => {
      const detail = serviceDetails[button?.dataset.serviceOpen || ""];
      const panel = button?.closest(".ServicePanel");
      const panelIndex = Array.from(servicePanels).indexOf(panel);

      if (!detail) {
        return;
      }

      if (panelIndex >= 0) {
        setActiveServicePanel(panelIndex);
      }

      categoryNode.textContent = detail.category;
      titleNode.textContent = detail.title;
      copyNode.textContent = `"${detail.copy}"`;
      const panelImage = panel?.querySelector("img");
      const imageSource = panelImage?.currentSrc || panelImage?.src || detail.image;

      imageNode.style.setProperty("--service-image", `url("${imageSource}")`);
      imageNode.style.backgroundImage = `url("${imageSource}")`;
      if (actionNode) {
        actionNode.href = buildWhatsAppUrl(`Hola, quiero consultar sobre el servicio de ${detail.title} con Fox Abogados & Consultores.`);
        actionNode.target = "_blank";
        actionNode.rel = "noreferrer";
      }
      listNode.innerHTML = detail.items.map((item) => {
        if (typeof item === "string") {
          return `<li><div><strong>${item}</strong><span>Solucion especializada segun el diagnostico del caso.</span></div></li>`;
        }

        return `<li><div><strong>${item.title}</strong><span>${item.text}</span></div></li>`;
      }).join("");
    };

    serviceButtons.forEach((button) => {
      button.addEventListener("click", () => {
        renderServiceDetail(button);
        serviceModal.showModal();
      });
    });

    closeButton?.addEventListener("click", () => serviceModal.close());
    serviceModal.addEventListener("click", (event) => {
      if (event.target === serviceModal) {
        serviceModal.close();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (!serviceModal.open || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) {
        return;
      }

      event.preventDefault();
      setActiveServicePanel(activeServiceIndex + (event.key === "ArrowRight" ? 1 : -1));
      renderServiceDetail(serviceButtons[activeServiceIndex]);
    });
  };

  const setupBlogModal = () => {
    if (!blogModal) {
      return;
    }

    const closeButton = blogModal.querySelector("[data-blog-close]");
    const dateNode = blogModal.querySelector("[data-blog-date]");
    const tagsNode = blogModal.querySelector("[data-blog-tags]");
    const titleNode = blogModal.querySelector("[data-blog-title]");
    const bodyNode = blogModal.querySelector("[data-blog-body]");
    const sourceNode = blogModal.querySelector("[data-blog-source]");
    let lastFocusedElement = null;

    const renderBlogPost = (postId) => {
      const detail = blogDetails[postId];

      if (!detail) {
        return false;
      }

      dateNode.textContent = detail.date;
      titleNode.textContent = detail.title;
      bodyNode.textContent = detail.body;
      tagsNode.innerHTML = "";

      detail.tags.forEach((tag) => {
        const chip = document.createElement("span");
        chip.textContent = tag;
        tagsNode.appendChild(chip);
      });

      if (detail.source) {
        sourceNode.href = detail.source;
        sourceNode.hidden = false;
      } else {
        sourceNode.removeAttribute("href");
        sourceNode.hidden = true;
      }

      return true;
    };

    blogButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const canOpen = renderBlogPost(button.dataset.blogOpen);

        if (!canOpen) {
          return;
        }

        lastFocusedElement = document.activeElement;
        blogModal.showModal();
        closeButton?.focus();
      });
    });

    closeButton?.addEventListener("click", () => {
      blogModal.close();
      lastFocusedElement?.focus();
    });

    blogModal.addEventListener("click", (event) => {
      if (event.target === blogModal) {
        blogModal.close();
        lastFocusedElement?.focus();
      }
    });

    blogModal.addEventListener("close", () => {
      lastFocusedElement?.focus();
    });
  };

  const setupCasesPage = () => {
    if (!casesPageCards.length) {
      return;
    }

    const modalImage = casesPageModal?.querySelector("[data-cases-modal-image]");
    const modalArea = casesPageModal?.querySelector("[data-cases-modal-area]");
    const modalTitle = casesPageModal?.querySelector("[data-cases-modal-title]");
    const modalResumen = casesPageModal?.querySelector("[data-cases-modal-resumen]");
    const modalProblema = casesPageModal?.querySelector("[data-cases-modal-problema]");
    const modalActuacion = casesPageModal?.querySelector("[data-cases-modal-actuacion]");
    const modalAutoridad = casesPageModal?.querySelector("[data-cases-modal-autoridad]");
    const modalResultado = casesPageModal?.querySelector("[data-cases-modal-resultado]");
    const modalImpacto = casesPageModal?.querySelector("[data-cases-modal-impacto]");
    const modalNav = casesPageModal?.querySelector("[data-cases-modal-nav]");
    const previousButton = casesPageModal?.querySelector("[data-cases-prev]");
    const nextButton = casesPageModal?.querySelector("[data-cases-next]");
    const closeButtons = casesPageModal?.querySelectorAll("[data-cases-close]") || [];
    let activeCaseIndex = 0;
    let lastFocusedElement = null;

    const getVisibleCards = () => Array.from(casesPageCards).filter((card) => !card.classList.contains("is-hidden"));

    const setCasesFilter = (filter) => {
      casesPageFilters.forEach((button) => {
        const isOn = button.dataset.casesFilter === filter;

        button.classList.toggle("is-on", isOn);
        button.setAttribute("aria-selected", isOn ? "true" : "false");
      });

      casesPageCards.forEach((card) => {
        const canShow = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !canShow);
      });
    };

    const fillCasesModal = (card) => {
      if (!casesPageModal || !card) {
        return;
      }

      modalImage.style.backgroundImage = `url("${card.dataset.image || ""}")`;
      modalArea.textContent = (card.dataset.area || "Area").toUpperCase();
      modalTitle.textContent = card.dataset.title || "Caso";
      modalResumen.textContent = card.dataset.resumen || "";
      modalProblema.textContent = card.dataset.problema || "";
      modalActuacion.textContent = card.dataset.actuacion || "";
      modalAutoridad.textContent = card.dataset.autoridad || "";
      modalResultado.textContent = card.dataset.resultado || "";
      modalImpacto.textContent = card.dataset.impacto || "";
      modalNav.innerHTML = `Navegando: <span>${(card.dataset.title || "Caso").toUpperCase()}</span>`;
    };

    const openCasesModal = (index) => {
      const visibleCards = getVisibleCards();

      if (!casesPageModal || !visibleCards.length) {
        return;
      }

      activeCaseIndex = (index + visibleCards.length) % visibleCards.length;
      fillCasesModal(visibleCards[activeCaseIndex]);
      casesPageModal.classList.add("is-open");
      casesPageModal.setAttribute("aria-hidden", "false");
      casesPageModal.querySelector("[data-cases-close]")?.focus({ preventScroll: true });
    };

    const closeCasesModal = () => {
      if (!casesPageModal) {
        return;
      }

      casesPageModal.classList.remove("is-open");
      casesPageModal.setAttribute("aria-hidden", "true");
      lastFocusedElement?.focus({ preventScroll: true });
    };

    casesPageFilters.forEach((button) => {
      button.addEventListener("click", () => setCasesFilter(button.dataset.casesFilter || "all"));
    });

    casesPageCards.forEach((card) => {
      card.addEventListener("click", () => {
        lastFocusedElement = card;
        openCasesModal(getVisibleCards().indexOf(card));
      });

      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        lastFocusedElement = card;
        openCasesModal(getVisibleCards().indexOf(card));
      });
    });

    closeButtons.forEach((button) => button.addEventListener("click", closeCasesModal));
    previousButton?.addEventListener("click", () => openCasesModal(activeCaseIndex - 1));
    nextButton?.addEventListener("click", () => openCasesModal(activeCaseIndex + 1));

    document.addEventListener("keydown", (event) => {
      if (!casesPageModal?.classList.contains("is-open")) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeCasesModal();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        openCasesModal(activeCaseIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        openCasesModal(activeCaseIndex + 1);
      }
    });

    setCasesFilter("all");
  };

  const setupContactForm = () => {
    if (!contactForm) {
      return;
    }

    const statusNode = contactForm.querySelector("[data-contact-status]");

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const service = String(formData.get("service") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const whatsappMessage = [
        `Hola, soy ${name}.`,
        `Quiero solicitar una asesoria en: ${service}.`,
        `Telefono / WhatsApp: ${phone}.`,
        `Correo: ${email}.`,
        `Mensaje: ${message}`,
      ].join("\n");

      if (statusNode) {
        statusNode.textContent = "Abriendo WhatsApp con tu mensaje organizado...";
      }

      window.open(buildWhatsAppUrl(whatsappMessage), "_blank", "noopener");
      contactForm.reset();
    });
  };

  const setupProcessCards = () => {
    processCards.forEach((card) => {
      card.addEventListener("click", () => {
        processCards.forEach((item) => item.classList.remove("is-active"));
        card.classList.add("is-active");
      });
    });
  };

  menuToggle?.addEventListener("click", menuToggleHandler);
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", updateScrollUi, { passive: true });
  document.addEventListener("keydown", keydownHandler);
  backTopButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  updateScrollUi();
  setupRevealItems();
  setupSkillBars();
  setupCarousel();
  setupMagneticLinks();
  setupTiltCards();
  setupAdviceLinks();
  setupTeamCards();
  setupCaseModal();
  setupProfileModals();
  setupServiceFilters();
  setupServicesScroll();
  setupServiceModal();
  setupBlogModal();
  setupCasesPage();
  setupContactForm();
  setupProcessCards();
});
