/* PROYECTOS de NEXOS
   Los TEXTOS y las ETAPAS EN CURSO de cada proyecto viven aquí, en este archivo (los edita Claude cuando se pidan).
   Del Sheet vienen solos:
   - Lo invertido: la columna "Proyecto" de la pestaña Gastos (invertidoPorProyecto). Si el script aún no la envía,
     se usa la categoría con el mismo nombre; el proyecto con resto: true se queda con las demás categorías.
   - estado: 'En curso', 'Próximamente' o 'Cerrado' (decide la sección y la etiqueta). Con tipo: 'cerrado' la etiqueta puede decir otra cosa (ej. 'Fase de emergencia').
   - La fecha: la última actualización de los datos.
   - Las fotos: pestaña "Fotos_proyectos"  A: Proyecto | B: Galería | C: Pie de foto | D: Enlace de la foto | E: Pie en inglés (opcional)
     Si el Sheet trae fotos de un proyecto, reemplazan a las de este archivo.
*/
(function () {
  const VS = 'proyectos/volver-a-sonar/';

  window.NEXOS_PROYECTOS = [{
    id: 'volver-a-sonar', publicado: 'sí',
    nombre: 'Volver a Sonar', nombre_en: 'Volver a Sonar',
    lema: 'La música también necesita reconstruirse', lema_en: 'Music needs rebuilding too',
    tarjeta: 'La música también necesita reconstruirse. Apoyamos a la Orquesta Sinfónica Gran Mariscal de Ayacucho a recuperar sus instrumentos tras el doble terremoto.',
    tarjeta_en: 'Music needs rebuilding too. We are helping the Gran Mariscal de Ayacucho Symphony Orchestra recover its instruments after the double earthquake.',
    resumen: 'Nexos y La Vida Boheme nos unimos para apoyar a los músicos de la Orquesta Sinfónica Gran Mariscal de Ayacucho afectados por los terremotos de junio de 2026 en Venezuela.',
    resumen_en: 'Nexos and La Vida Boheme joined forces to support the musicians of the Gran Mariscal de Ayacucho Symphony Orchestra affected by the June 2026 earthquakes in Venezuela.',
    estado: 'En curso', estado_en: 'In progress',
    ubicacion: 'Caracas', fecha: 'Septiembre 2026', fecha_en: 'September 2026', categoria: 'Volver a Sonar', meta: 25000, gastado: 2779, actualizado: '',
    etapa_actual: '2, 3', // etapas en curso: se cambian aquí cuando el proyecto avanza
    foto: VS + 'arpa-luthier.jpg',
    historia: 'La sede de la orquesta ocupa un piso alto de la Torre Polar, en Plaza Venezuela. La víspera del sismo dejaron todo listo para ensayar. Cuando la tierra se movió, los contrabajos y la percusión fueron los primeros en caer.',
    historia_en: 'The orchestra is based on a high floor of Torre Polar, in Plaza Venezuela. The day before the earthquake they left everything ready to rehearse. When the ground shook, the double basses and the percussion were the first to fall.',
    destacado: 'Este proyecto atiende lo urgente: reparar lo dañado y equipar a cada músico para que pueda seguir trabajando.',
    destacado_en: 'This project covers what is urgent: repairing what was damaged and equipping each musician so they can keep working.',
    nota_presupuesto: 'Presupuesto etapa 1: US$ 24.547. Las facturas de cada compra se publican en Transparencia.',
    nota_presupuesto_en: 'Stage 1 budget: US$ 24,547. Every purchase invoice is published in Transparency.',
    detalle: [
      { tipo: 'cifra', titulo: '51', texto: 'músicos necesitan reparar o equipar su instrumento de trabajo', texto_en: 'musicians need to repair or equip their work instrument' },
      { tipo: 'cifra', titulo: '5', texto: 'instrumentos con daños certificados por un luthier: 4 contrabajos y 1 arpa', texto_en: 'instruments with damage certified by a luthier: 4 double basses and 1 harp' },
      { tipo: 'cifra', titulo: '32', texto: 'integrantes con su vivienda o entorno afectado', texto_en: 'members whose home or surroundings were affected' },
      { tipo: 'cifra', titulo: '8', texto: 'de ellos con daños severos en su vivienda', texto_en: 'of them with severe damage to their home' },

      { tipo: 'etapa', titulo: 'Diagnóstico', titulo_en: 'Assessment', grupo: 'Orquesta, luthier y NEXOS', grupo_en: 'Orchestra, luthier and NEXOS',
        texto: 'Los músicos hicieron el listado de lo que necesitan y un luthier profesional revisó los instrumentos dañados. Con eso armamos el presupuesto de la etapa 1.',
        texto_en: 'The musicians listed what they need and a professional luthier inspected the damaged instruments. With that we built the stage 1 budget.',
        lista: 'Certificado del luthier; Presupuesto US$ 24.547', lista_en: 'Luthier certificate; Budget US$ 24,547' },
      { tipo: 'etapa', titulo: 'Recaudación', titulo_en: 'Fundraising', grupo: 'NEXOS y La Vida Boheme', grupo_en: 'NEXOS and La Vida Boheme',
        texto: 'Recibimos aportes por los canales de NEXOS, por Bandcamp y por patrocinio de músicos en la web de La Vida Boheme.',
        texto_en: 'We receive donations through NEXOS channels, Bandcamp and musician sponsorships on La Vida Boheme’s website.',
        lista: 'Cada donación en el buscador; Avance de la meta', lista_en: 'Every donation in the search; Progress toward the goal' },
      { tipo: 'etapa', titulo: 'Compras y reparaciones', titulo_en: 'Purchases and repairs', grupo: 'NEXOS y luthier', grupo_en: 'NEXOS and luthier',
        texto: 'A medida que entra el dinero compramos los insumos y pagamos las reparaciones, empezando por los instrumentos dañados.',
        texto_en: 'As money comes in we buy supplies and pay for repairs, starting with the damaged instruments.',
        lista: 'Factura de cada compra', lista_en: 'Invoice for every purchase' },
      { tipo: 'etapa', titulo: 'Entrega a cada músico', titulo_en: 'Delivery to each musician', grupo: 'NEXOS y Orquesta', grupo_en: 'NEXOS and Orchestra',
        texto: 'Cada músico recibe su kit según su instrumento. Las reparaciones vuelven a la orquesta.',
        texto_en: 'Each musician receives a kit for their instrument. Repaired instruments return to the orchestra.',
        lista: 'Foto de cada entrega', lista_en: 'Photo of every delivery' },
      { tipo: 'etapa', titulo: 'Rendición de cuentas', titulo_en: 'Accountability', grupo: 'NEXOS', grupo_en: 'NEXOS',
        texto: 'Publicamos cada gasto y cada entrega en Transparencia, con su factura y su foto.',
        texto_en: 'We publish every expense and every delivery in Transparency, with its invoice and photo.',
        lista: 'Página de Transparencia', lista_en: 'Transparency page' },

      { tipo: 'foto', grupo: 'Los daños', grupo_en: 'The damage', titulo: 'Arpa: grietas en la madera', titulo_en: 'Harp: cracks in the wood', imagen: VS + 'arpa-grietas.jpg' },
      { tipo: 'foto', grupo: 'Los daños', grupo_en: 'The damage', titulo: 'Campanelli: láminas desprendidas', titulo_en: 'Glockenspiel: bars knocked loose', imagen: VS + 'campanelli-1.jpg' },
      { tipo: 'foto', grupo: 'Los daños', grupo_en: 'The damage', titulo: 'Campanelli: láminas sueltas en su estuche', titulo_en: 'Glockenspiel: loose bars in its case', imagen: VS + 'campanelli-2.jpg' },
      { tipo: 'foto', grupo: 'Los daños', grupo_en: 'The damage', titulo: 'Instrumento de cuerda: borde golpeado', titulo_en: 'String instrument: damaged edge', imagen: VS + 'cuerda-borde.jpg' },
      { tipo: 'foto', grupo: 'Resultados', grupo_en: 'Results', titulo: 'Arpa en reparación con el luthier', titulo_en: 'Harp being repaired by the luthier', imagen: VS + 'arpa-luthier.jpg' },
      { tipo: 'foto', grupo: 'Resultados', grupo_en: 'Results', titulo: 'Reparación de la caja del arpa', titulo_en: 'Repairing the harp’s soundbox', imagen: VS + 'arpa-caja.jpg' },

      { tipo: 'gasto', titulo: 'Instrumentos dañados y reparaciones', titulo_en: 'Damaged instruments and repairs', monto: 5829,
        texto: 'Cuatro contrabajos, un arpa y la puesta a punto de la percusión.', texto_en: 'Four double basses, a harp and a tune-up of the percussion.' },
      { tipo: 'gasto', titulo: 'Kit de continuidad por músico', titulo_en: 'Continuity kit per musician', monto: 7878,
        texto: 'Un kit básico de trabajo para cada músico, según su instrumento.', texto_en: 'A basic work kit for each musician, according to their instrument.' },
      { tipo: 'gasto', titulo: 'Necesidades específicas', titulo_en: 'Specific needs', monto: 9860,
        texto: 'Arcos, puentes, luthería, un clarinete de más de 25 años, metales y accesorios de percusión.', texto_en: 'Bows, bridges, luthier work, a clarinet over 25 years old, brass and percussion accessories.' },
      { tipo: 'gasto', titulo: 'Kit de trabajo para staff', titulo_en: 'Staff work kit', monto: 980,
        texto: 'Uniforme, gorra, botas y guantes para el equipo técnico.', texto_en: 'Uniform, cap, boots and gloves for the technical crew.' },

      { tipo: 'kit', titulo: 'Cuerdas', titulo_en: 'Strings', grupo: 'violín · viola · chelo · contrabajo', grupo_en: 'violin · viola · cello · double bass', monto: '135–385',
        texto: 'Set de cuerdas, perrubia, sordina y mantenimiento básico.', texto_en: 'String set, rosin, mute and basic maintenance.' },
      { tipo: 'kit', titulo: 'Maderas', titulo_en: 'Woodwinds', grupo: 'flauta · oboe · clarinete · fagot', grupo_en: 'flute · oboe · clarinet · bassoon', monto: '86–119',
        texto: 'Cañas e insumos, grasa de corcho, hisopo y aceite de llaves.', texto_en: 'Reeds and supplies, cork grease, swab and key oil.' },
      { tipo: 'kit', titulo: 'Metales', titulo_en: 'Brass', grupo: 'corno · trompeta · trombón · tuba', grupo_en: 'horn · trumpet · trombone · tuba', monto: '88',
        texto: 'Aceite de pistones o rotor, grasa de bombas, cepillo y paño.', texto_en: 'Valve or rotor oil, slide grease, brush and cloth.' },
      { tipo: 'kit', titulo: 'Percusión', titulo_en: 'Percussion', grupo: 'baterías · timpani · láminas', grupo_en: 'drums · timpani · mallets', monto: '98',
        texto: 'Par de baquetas de concierto, par de mazos y llave de afinación.', texto_en: 'Pair of concert sticks, pair of mallets and tuning key.' },

      { tipo: 'aporte', titulo: 'Dona a NEXOS', titulo_en: 'Donate to NEXOS', grupo: 'Donar', grupo_en: 'Donate', enlace: 'donar',
        texto: 'Por nuestros canales de siempre. Tu aporte aparece en Transparencia.', texto_en: 'Through our usual channels. Your donation shows up in Transparency.' },
      { tipo: 'aporte', titulo: 'Compra y escucha “Falla / Boconó”', titulo_en: 'Buy and listen to “Falla / Boconó”', grupo: 'Ir a Bandcamp', grupo_en: 'Go to Bandcamp', enlace: '',
        texto: 'La canción de La Vida Boheme, en Bandcamp.', texto_en: 'La Vida Boheme’s song, on Bandcamp.' },
      { tipo: 'aporte', titulo: 'Patrocina un músico', titulo_en: 'Sponsor a musician', grupo: 'Patrocinar', grupo_en: 'Sponsor', enlace: '',
        texto: 'Cubre las necesidades inmediatas de un músico para que pueda seguir tocando.', texto_en: 'Cover a musician’s immediate needs so they can keep playing.' },

      { tipo: 'aliado', titulo: 'La Vida Boheme', imagen: VS + 'logo-la-vida-boheme.png', enlace: 'https://yosoylavidaboheme.com/', instagram: 'lavidaboheme' },
      { tipo: 'beneficiario', titulo: 'Orquesta Sinfónica Gran Mariscal de Ayacucho', imagen: VS + 'logo-orquesta.png', enlace: '' }
    ]
  }, {
    id: 'volver-a-trabajar', publicado: 'sí',
    nombre: 'Volver a Trabajar', nombre_en: 'Volver a Trabajar',
    lema: 'Herramientas para recuperar la autonomía', lema_en: 'Tools to regain independence',
    resumen: 'Ayudamos a trabajadores autónomos que hayan perdido sus equipos y herramientas de trabajo tras el doble terremoto para que puedan volver a su actividad.',
    resumen_en: 'We help self-employed workers who lost their equipment and work tools in the double earthquake so they can get back to work.',
    tarjeta: 'Ayudamos a trabajadores autónomos que hayan perdido sus equipos y herramientas de trabajo tras el doble terremoto para que puedan recuperar su autonomía.',
    tarjeta_en: 'We help self-employed workers who lost their equipment and work tools in the double earthquake so they can regain their independence.',
    estado: 'Próximamente', estado_en: 'Coming soon',
    ubicacion: '', fecha: '', categoria: '🚀 Volver a Trabajar', meta: 0, gastado: 362, actualizado: '',
    foto: '', detalle: [
      { tipo: 'aporte', titulo: 'Dona a NEXOS', titulo_en: 'Donate to NEXOS', grupo: 'Donar', grupo_en: 'Donate', enlace: 'donar',
        texto: 'Por nuestros canales de siempre. Tu aporte aparece en Transparencia.', texto_en: 'Through our usual channels. Your donation shows up in Transparency.' }
    ]
  }, {
    id: 'zona-cero', publicado: 'sí', resto: true, clave: 'Zona Cero',
    nombre: 'Apoyo Zona Cero', nombre_en: 'Apoyo Zona Cero',
    lema: 'Llegó el terremoto, nos organizamos y activamos la ayuda humanitaria.', lema_en: 'The earthquake hit, we organized and activated humanitarian aid.',
    resumen: 'Tres meses trabajando directamente en las zonas más afectadas, apoyando a civiles buscando a sus familiares, rescatistas voluntarios y grupos nacionales.',
    resumen_en: 'Three months working directly in the hardest-hit areas, supporting civilians searching for their relatives, volunteer rescuers and national groups.',
    hito: 'Respondimos ante la emergencia', hito_en: 'We responded to the emergency',
    estado: 'Fase de emergencia', estado_en: 'Emergency phase', tipo: 'cerrado',
    ubicacion: 'La Guaira y Caracas', periodo: 'junio a octubre 2026', periodo_en: 'June to October 2026',
    fecha: 'Junio 2026', fecha_en: 'June 2026', categoria: '', meta: 0, gastado: 84168, actualizado: '',
    foto: 'photo-rescate-edificio.jpg',
    detalle: [
      { tipo: 'cifra', titulo: 'US$ 84.168', texto: 'invertidos en la emergencia', texto_en: 'invested in the emergency' },
      { tipo: 'cifra', titulo: '+1.500', titulo_en: '+1,500', texto: 'equipos y herramientas para rescates', texto_en: 'pieces of equipment and tools for rescues' },
      { tipo: 'cifra', titulo: '+300', texto: 'botas de seguridad', texto_en: 'pairs of safety boots' },
      { tipo: 'cifra', titulo: '+400', texto: 'carpas y toldos para civiles sin techo', texto_en: 'tents and canopies for civilians left without a roof' },

      { tipo: 'etapa', titulo: 'Zonas de Rescate', titulo_en: 'Rescue zones', cuando: 'Junio a septiembre', cuando_en: 'June to September',
        texto: 'Apoyo directo en las misiones de rescate y recuperación de cuerpos en OPPE 25, OPPE 26, OPPE 27, OPPE 33, Residencias Caribe, Bahía Mar, Belo Horizonte, Parque Azul, Residencias Luisa Cáceres de Arismendi, Sol Marino Garden y La Gabarra.',
        texto_en: 'Direct support in rescue and body recovery missions at OPPE 25, OPPE 26, OPPE 27, OPPE 33, Residencias Caribe, Bahía Mar, Belo Horizonte, Parque Azul, Residencias Luisa Cáceres de Arismendi, Sol Marino Garden and La Gabarra.' },
      { tipo: 'etapa', titulo: 'Equipos', titulo_en: 'Equipment', cuando: 'Junio a septiembre', cuando_en: 'June to September',
        texto: 'Herramientas clave para el proceso de rescate y recuperación de cuerpos: oxicortes, esmeriles, rotomartillos, plantas eléctricas, extensiones, baterías, linternas, regletas, fumigadoras, discos de corte, indumentaria de seguridad y más.',
        texto_en: 'Key tools for rescue and body recovery: oxy-fuel cutters, grinders, rotary hammers, generators, extension cords, batteries, flashlights, power strips, sprayers, cutting discs, safety gear and more.' },
      { tipo: 'etapa', titulo: 'Campamentos', titulo_en: 'Camps', cuando: 'Junio a septiembre', cuando_en: 'June to September',
        texto: 'Apoyo a campamentos de rescatistas y damnificados con carpas, toldos, comidas, hidratación, luces LED, insumos de higiene y otros equipos necesarios para la pernocta en el Campo de Golf de Caraballeda, zonas aledañas a las OPPE de Caraballeda, Tanaguarenas, Mare Abajo y Playa Verde.',
        texto_en: 'Support for rescuer and survivor camps with tents, canopies, meals, hydration, LED lights, hygiene supplies and other equipment for overnight stays at the Caraballeda Golf Course, the areas around the Caraballeda OPPE buildings, Tanaguarenas, Mare Abajo and Playa Verde.' },
      { tipo: 'etapa', titulo: 'Brigadas', titulo_en: 'Brigades', cuando: 'Junio a octubre', cuando_en: 'June to October',
        texto: 'Apoyo a grupos de defensa civil y bomberos de Mérida, Táchira, Trujillo, Cojedes, Lara y La Guaira. Grupo de médicos de Guayana, médicos voluntarios de OPPE 26 y 27, médicos de la UCV.',
        texto_en: 'Support for civil defense groups and firefighters from Mérida, Táchira, Trujillo, Cojedes, Lara and La Guaira. A group of doctors from Guayana, volunteer doctors at OPPE 26 and 27, and doctors from UCV.' },

      { tipo: 'foto', grupo: 'En terreno', grupo_en: 'On the ground', titulo: 'Ler Rosell — La Guaira', imagen: '@fotos:1' },
      { tipo: 'foto', grupo: 'En terreno', grupo_en: 'On the ground', titulo: 'Ler Rosell — La Guaira', imagen: '@fotos:2' },
      { tipo: 'foto', grupo: 'En terreno', grupo_en: 'On the ground', titulo: 'Ler Rosell — La Guaira', imagen: '@fotos:3' },
      { tipo: 'foto', grupo: 'En terreno', grupo_en: 'On the ground', titulo: 'Patricia Díaz — La Guaira', imagen: '@fotos:4' },

      { tipo: 'cita', titulo: '“Soy un reflejo de Dios en cada acción que realizo”', titulo_en: '“I am a reflection of God in every action I take”',
        texto: 'Escrito en el guante de un rescatista. Foto: Francisco Rizquez', texto_en: 'Written on a rescuer’s glove. Photo: Francisco Rizquez', imagen: 'photo-guante-mensaje.jpg' }
    ]
  }];

  /* Enlaces de Google Drive (…/file/d/ID/view o open?id=ID) -> enlace directo de imagen. */
  const img = function (u) {
    u = String(u || '').trim();
    if (!u) return '';
    if (u.indexOf('@fotos:') === 0) {
      const fx = (window.nexosContent && window.nexosContent('ES').fotos) || [];
      const fo = fx[parseInt(u.slice(7), 10)];
      return fo ? fo.src : '';
    }
    const m = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]{10,})/);
    return m ? 'https://lh3.googleusercontent.com/d/' + m[1] + '=w1600' : u;
  };
  const num = function (v) {
    if (typeof v === 'number') return v;
    const s = String(v || '').replace(/[^\d,.-]/g, '');
    if (!s) return 0;
    // 25.000 / 25.000,50 (es) o 25000.5
    const n = /,\d{1,2}$/.test(s) ? s.replace(/\./g, '').replace(',', '.') : (/\.\d{3}(\.|$)/.test(s) ? s.replace(/\./g, '') : s.replace(/,/g, ''));
    return Number(n) || 0;
  };
  const si = function (v) { const s = String(v == null ? '' : v).trim().toLowerCase(); return s === '' || ['sí', 'si', 'yes', 'x', 'true', '1', 'verdadero'].indexOf(s) > -1; };

  /* Devuelve la lista de proyectos lista para pintar, en el idioma pedido. */
  window.nexosProyectos = function (lang) {
    const en = lang === 'EN';
    const f = window.NEXOS_FIXTURE;
    const hoja = (f && f.proyectosSheet) || {};
    const slug = function (v) { return String(v || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };
    const raw = window.NEXOS_PROYECTOS.map(function (p) {
      const q = Object.assign({}, p);
      // Lo invertido: columna "Proyecto" de la pestaña Gastos (los emojis del nombre no importan).
      // Si el script todavía no envía invertidoPorProyecto, usa la categoría con el mismo nombre.
      const pid = slug(p.clave || p.nombre);
      const ip = ((f && f.invertidoPorProyecto) || []).filter(function (x) { return slug(x.proyecto) === pid; })[0];
      if (ip) {
        q.gastado = ip.total; q.compras = ip.items || [];
      } else if (f && (f.egresosRaw || []).length) {
        // Respaldo mientras el script no envíe invertidoPorProyecto
        const propias = window.NEXOS_PROYECTOS.filter(function (o) { return !o.resto; }).map(function (o) { return slug(o.categoria || o.clave || o.nombre); });
        const cats = f.egresosRaw.filter(function (c) { return p.resto ? propias.indexOf(slug(c.categoria)) === -1 : slug(c.categoria) === slug(p.categoria || p.nombre); });
        if (cats.length) {
          q.gastado = cats.reduce(function (a, c) { return a + (Number(c.total) || 0); }, 0);
          q.compras = [].concat.apply([], cats.map(function (c) { return (c.items || []).map(function (it) { return Object.assign({ categoria: c.categoria }, it); }); }));
        }
      }
      // Fecha automática: la última actualización de los datos.
      if (f && f.actualizado) q.actualizado = String(f.actualizado).split(',')[0].trim();
      const fotos = (hoja.fotos || []).filter(function (r) { return (slug(r.proyecto) === p.id || slug(r.proyecto) === slug(p.nombre)) && String(r.enlace || '').trim(); });
      if (fotos.length) {
        const tabsEn = {};
        (p.detalle || []).forEach(function (d) { if (d.tipo === 'foto' && d.grupo_en) tabsEn[slug(d.grupo)] = d.grupo_en; });
        q.detalle = (p.detalle || []).filter(function (d) { return d.tipo !== 'foto'; }).concat(fotos.map(function (r) {
          const g = String(r.galeria || '').trim();
          return { tipo: 'foto', grupo: g, grupo_en: tabsEn[slug(g)] || '', titulo: String(r.pie || '').trim(), titulo_en: String(r.pie_en || '').trim(), imagen: r.enlace };
        }));
      }
      return q;
    });
    const t = function (o, k) { const v = en ? (o[k + '_en'] || o[k]) : o[k]; return String(v == null ? '' : v).trim(); };
    const lista = function (o) { return t(o, 'lista').split(';').map(function (s) { return s.trim(); }).filter(Boolean); };
    return raw.filter(function (p) { return p && p.id && si(p.publicado); }).map(function (p) {
      const det = Array.isArray(p.detalle) ? p.detalle : [];
      const de = function (tipo) { return det.filter(function (d) { return String(d.tipo || '').trim().toLowerCase() === tipo; }); };
      return {
        id: String(p.id).trim(),
        nombre: t(p, 'nombre'), lema: t(p, 'lema'), resumen: t(p, 'resumen'), tarjeta: t(p, 'tarjeta'), hito: t(p, 'hito'), estado: t(p, 'estado'),
        tipo: p.tipo || (function () { const e = slug(p.estado); return e.indexOf('cerr') === 0 ? 'cerrado' : e.indexOf('prox') === 0 ? 'pronto' : 'curso'; })(),
        ubicacion: String(p.ubicacion || '').trim(), periodo: t(p, 'periodo'), fecha: t(p, 'fecha'),
        meta: num(p.meta), recaudado: num(p.recaudado), actualizado: String(p.actualizado || '').trim(),
        etapasActivas: (String(p.etapa_actual == null ? '' : p.etapa_actual).match(/\d+/g) || ['1']).map(function (n) { return parseInt(n, 10); }),
        gastado: num(p.gastado), compras: (p.compras || []).map(function (c) { return { concepto: String(c.concepto || '').trim(), monto: num(c.monto), categoria: String(c.categoria || '').trim() }; }),
        porCategoria: (function () {
          const m = {}, o = [];
          (p.compras || []).forEach(function (c) { const k = String(c.categoria || '').trim() || (en ? 'Other' : 'Otros'); if (!m[k]) { m[k] = { categoria: k, total: 0, n: 0 }; o.push(k); } m[k].total += num(c.monto); m[k].n++; });
          return o.map(function (k) { return m[k]; }).sort(function (a, b) { return b.total - a.total; });
        })(),
        foto: img(p.foto),
        historia: t(p, 'historia').split(/\n\s*\n/).map(function (s) { return s.trim(); }).filter(Boolean),
        destacado: t(p, 'destacado'), notaPresupuesto: t(p, 'nota_presupuesto'),
        cifras: de('cifra').map(function (d) { return { n: t(d, 'titulo'), texto: t(d, 'texto') }; }),
        citas: de('cita').map(function (d) { return { frase: t(d, 'titulo'), pie: t(d, 'texto'), src: img(d.imagen) }; }),
        etapas: de('etapa').map(function (d) { return { titulo: t(d, 'titulo'), cuando: t(d, 'cuando'), texto: t(d, 'texto'), quien: t(d, 'grupo'), evidencia: lista(d), enlace: String(d.enlace || '').trim() }; }),
        gastos: de('gasto').map(function (d) { return { titulo: t(d, 'titulo'), texto: t(d, 'texto'), monto: num(d.monto), items: lista(d) }; }),
        kits: de('kit').map(function (d) { return { titulo: t(d, 'titulo'), instrumentos: t(d, 'grupo'), texto: t(d, 'texto'), precio: String(d.monto == null ? '' : d.monto).trim() }; }),
        fotos: de('foto').map(function (d) { return { grupo: t(d, 'grupo') || (en ? 'Photos' : 'Fotos'), pie: t(d, 'titulo'), src: img(d.imagen) }; }).filter(function (x) { return x.src; }),
        aportes: de('aporte').map(function (d) { return { titulo: t(d, 'titulo'), texto: t(d, 'texto'), boton: t(d, 'grupo'), enlace: String(d.enlace || '').trim() }; }),
        aliados: de('aliado').map(function (d) { return { nombre: t(d, 'titulo'), logo: img(d.imagen), enlace: String(d.enlace || '').trim(), instagram: String(d.instagram || '').trim().replace(/^@/, '') }; }),
        beneficiarios: de('beneficiario').map(function (d) { return { nombre: t(d, 'titulo'), logo: img(d.imagen), enlace: String(d.enlace || '').trim(), instagram: String(d.instagram || '').trim().replace(/^@/, '') }; })
      };
    });
  };
})();
