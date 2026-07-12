/* ============================================================
   AegisIQ — lightweight i18n
   Languages: en, es, pt-BR, fr, de, ru, zh
   Usage in HTML:
     <el data-i18n="key">          -> textContent
     <el data-i18n-html="key">     -> innerHTML (for headings with <span class="em">)
     <input data-i18n-ph="key">    -> placeholder
   NOTE: UI chrome + homepage hero are translated below. Long-form marketing
   body copy and legal/financial seller text stay in English pending native
   review — extend by adding keys here and data-i18n attributes in the HTML.
   ============================================================ */
(function () {
  var DICT = {
    en: {
      "nav.company":"Company","nav.platform":"Platform","nav.pricing":"Pricing",
      "nav.governance":"Governance","nav.roadmap":"Roadmap","nav.contact":"Contact","nav.investor":"Investor Portal",
      "foot.platform":"Platform","foot.company":"Company","foot.legal":"Legal",
      "foot.privacy":"Privacy Policy","foot.terms":"Terms of Service","foot.disclosures":"Disclosures",
      "foot.tagline":"The Financial Intelligence Network — a connected suite of governance-first financial platforms on one secure data spine.",
      "hero.eyebrow":"The Financial Intelligence Network",
      "hero.title":"<span class=\"em\">Private capital,</span> measured, owned, and understood.",
      "hero.lead":"AegisIQ builds a connected suite of governance-first financial platforms — AI equity research, cap-table management, wealth consolidation, and investor operations — all sharing one secure financial data spine and one universal entity key.",
      "hero.cta1":"Explore the platform","hero.cta2":"Request a briefing",
      "pill.gov":"Governance-First","pill.secure":"Secure & Compliant","pill.ai":"AI-Powered Intelligence","pill.multi":"Multi-Entity · Multi-Currency"
    },
    es: {
      "nav.company":"Empresa","nav.platform":"Plataforma","nav.pricing":"Precios",
      "nav.governance":"Gobernanza","nav.roadmap":"Hoja de ruta","nav.contact":"Contacto","nav.investor":"Portal del inversor",
      "foot.platform":"Plataforma","foot.company":"Empresa","foot.legal":"Legal",
      "foot.privacy":"Política de privacidad","foot.terms":"Términos del servicio","foot.disclosures":"Divulgaciones",
      "foot.tagline":"La Red de Inteligencia Financiera: un conjunto conectado de plataformas financieras con gobernanza prioritaria sobre una única columna de datos segura.",
      "hero.eyebrow":"La Red de Inteligencia Financiera",
      "hero.title":"<span class=\"em\">El capital privado,</span> medido, en propiedad y comprendido.",
      "hero.lead":"AegisIQ desarrolla un conjunto conectado de plataformas financieras con gobernanza prioritaria —investigación de acciones con IA, gestión de tablas de capitalización, consolidación patrimonial y operaciones con inversores— que comparten una única columna de datos financieros segura y una clave de entidad universal.",
      "hero.cta1":"Explorar la plataforma","hero.cta2":"Solicitar una presentación",
      "pill.gov":"Gobernanza primero","pill.secure":"Seguro y conforme","pill.ai":"Inteligencia con IA","pill.multi":"Multientidad · Multidivisa"
    },
    "pt-BR": {
      "nav.company":"Empresa","nav.platform":"Plataforma","nav.pricing":"Preços",
      "nav.governance":"Governança","nav.roadmap":"Roteiro","nav.contact":"Contato","nav.investor":"Portal do investidor",
      "foot.platform":"Plataforma","foot.company":"Empresa","foot.legal":"Jurídico",
      "foot.privacy":"Política de Privacidade","foot.terms":"Termos de Serviço","foot.disclosures":"Divulgações",
      "foot.tagline":"A Rede de Inteligência Financeira — um conjunto conectado de plataformas financeiras com governança em primeiro lugar sobre uma única espinha de dados segura.",
      "hero.eyebrow":"A Rede de Inteligência Financeira",
      "hero.title":"<span class=\"em\">Capital privado,</span> medido, detido e compreendido.",
      "hero.lead":"A AegisIQ constrói um conjunto conectado de plataformas financeiras com governança em primeiro lugar — pesquisa de ações com IA, gestão de cap table, consolidação de patrimônio e operações com investidores — todas compartilhando uma única espinha de dados financeiros segura e uma chave de entidade universal.",
      "hero.cta1":"Explorar a plataforma","hero.cta2":"Solicitar uma apresentação",
      "pill.gov":"Governança em primeiro lugar","pill.secure":"Seguro e em conformidade","pill.ai":"Inteligência com IA","pill.multi":"Multi-entidade · Multimoeda"
    },
    fr: {
      "nav.company":"Société","nav.platform":"Plateforme","nav.pricing":"Tarifs",
      "nav.governance":"Gouvernance","nav.roadmap":"Feuille de route","nav.contact":"Contact","nav.investor":"Portail investisseurs",
      "foot.platform":"Plateforme","foot.company":"Société","foot.legal":"Mentions légales",
      "foot.privacy":"Politique de confidentialité","foot.terms":"Conditions d'utilisation","foot.disclosures":"Informations légales",
      "foot.tagline":"Le réseau d'intelligence financière — une suite connectée de plateformes financières axées sur la gouvernance, sur une colonne vertébrale de données sécurisée.",
      "hero.eyebrow":"Le réseau d'intelligence financière",
      "hero.title":"<span class=\"em\">Le capital privé,</span> mesuré, détenu et compris.",
      "hero.lead":"AegisIQ conçoit une suite connectée de plateformes financières axées sur la gouvernance — recherche actions par IA, gestion des tables de capitalisation, consolidation du patrimoine et opérations investisseurs — partageant toutes une colonne vertébrale de données financières sécurisée et une clé d'entité universelle.",
      "hero.cta1":"Explorer la plateforme","hero.cta2":"Demander une présentation",
      "pill.gov":"Gouvernance d'abord","pill.secure":"Sécurisé et conforme","pill.ai":"Intelligence par IA","pill.multi":"Multi-entités · Multidevises"
    },
    de: {
      "nav.company":"Unternehmen","nav.platform":"Plattform","nav.pricing":"Preise",
      "nav.governance":"Governance","nav.roadmap":"Roadmap","nav.contact":"Kontakt","nav.investor":"Investorenportal",
      "foot.platform":"Plattform","foot.company":"Unternehmen","foot.legal":"Rechtliches",
      "foot.privacy":"Datenschutzerklärung","foot.terms":"Nutzungsbedingungen","foot.disclosures":"Offenlegungen",
      "foot.tagline":"Das Financial Intelligence Network — eine vernetzte Suite von Finanzplattformen mit Governance an erster Stelle auf einer sicheren Datenbasis.",
      "hero.eyebrow":"Das Financial Intelligence Network",
      "hero.title":"<span class=\"em\">Privates Kapital,</span> gemessen, im Besitz und verstanden.",
      "hero.lead":"AegisIQ entwickelt eine vernetzte Suite von Finanzplattformen mit Governance an erster Stelle — KI-Aktienresearch, Cap-Table-Management, Vermögenskonsolidierung und Investorenprozesse — die alle eine sichere Finanzdatenbasis und einen universellen Entitätsschlüssel teilen.",
      "hero.cta1":"Plattform entdecken","hero.cta2":"Briefing anfordern",
      "pill.gov":"Governance zuerst","pill.secure":"Sicher & konform","pill.ai":"KI-gestützte Intelligenz","pill.multi":"Multi-Entität · Mehrwährungsfähig"
    },
    ru: {
      "nav.company":"Компания","nav.platform":"Платформа","nav.pricing":"Цены",
      "nav.governance":"Управление","nav.roadmap":"Дорожная карта","nav.contact":"Контакты","nav.investor":"Портал инвестора",
      "foot.platform":"Платформа","foot.company":"Компания","foot.legal":"Правовая информация",
      "foot.privacy":"Политика конфиденциальности","foot.terms":"Условия использования","foot.disclosures":"Раскрытие информации",
      "foot.tagline":"Сеть финансовой аналитики — связанный набор финансовых платформ с приоритетом управления на единой защищённой основе данных.",
      "hero.eyebrow":"Сеть финансовой аналитики",
      "hero.title":"<span class=\"em\">Частный капитал:</span> измерен, во владении и понятен.",
      "hero.lead":"AegisIQ создаёт связанный набор финансовых платформ с приоритетом управления — ИИ-аналитика акций, управление таблицей капитализации, консолидация капитала и работа с инвесторами — объединённых единой защищённой основой финансовых данных и универсальным ключом сущности.",
      "hero.cta1":"Обзор платформы","hero.cta2":"Запросить презентацию",
      "pill.gov":"Управление прежде всего","pill.secure":"Безопасно и соответствует нормам","pill.ai":"Аналитика на базе ИИ","pill.multi":"Мультиюрлицо · Мультивалюта"
    },
    zh: {
      "nav.company":"公司","nav.platform":"平台","nav.pricing":"定价",
      "nav.governance":"治理","nav.roadmap":"路线图","nav.contact":"联系","nav.investor":"投资者门户",
      "foot.platform":"平台","foot.company":"公司","foot.legal":"法律",
      "foot.privacy":"隐私政策","foot.terms":"服务条款","foot.disclosures":"披露信息",
      "foot.tagline":"金融智能网络——建立在统一安全数据主干上、以治理为先的互联金融平台套件。",
      "hero.eyebrow":"金融智能网络",
      "hero.title":"<span class=\"em\">私人资本</span>——衡量、持有、洞悉。",
      "hero.lead":"AegisIQ 打造以治理为先的互联金融平台套件——AI 股票研究、股权结构表管理、财富合并与投资者运营——全部共享同一安全金融数据主干和统一的实体标识。",
      "hero.cta1":"探索平台","hero.cta2":"预约介绍",
      "pill.gov":"治理优先","pill.secure":"安全合规","pill.ai":"AI 驱动的智能","pill.multi":"多实体 · 多币种"
    }
  };

  var SUPPORTED = ["en","es","pt-BR","fr","de","ru","zh"];

  function detect() {
    try { var s = localStorage.getItem("aegisiq_lang"); if (s && DICT[s]) return s; } catch (e) {}
    var n = navigator.language || "en";
    if (DICT[n]) return n;
    var base = n.split("-")[0];
    for (var i = 0; i < SUPPORTED.length; i++) { if (SUPPORTED[i].split("-")[0] === base) return SUPPORTED[i]; }
    return "en";
  }

  function apply(lang) {
    var d = DICT[lang] || DICT.en, en = DICT.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n"); var v = (d[k] !== undefined ? d[k] : en[k]);
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html"); var v = (d[k] !== undefined ? d[k] : en[k]);
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph"); var v = (d[k] !== undefined ? d[k] : en[k]);
      if (v !== undefined) el.setAttribute("placeholder", v);
    });
    var sel = document.getElementById("langSelect"); if (sel) sel.value = lang;
  }

  window.setLang = function (l) { try { localStorage.setItem("aegisiq_lang", l); } catch (e) {} apply(l); };
  document.addEventListener("DOMContentLoaded", function () { apply(detect()); });
})();
