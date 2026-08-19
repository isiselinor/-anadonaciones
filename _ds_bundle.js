/* @ds-bundle: {"format":4,"namespace":"NEXOSDesignSystem_0519e6","components":[{"name":"BrandHeader","sourcePath":"components/brand/BrandHeader.jsx"},{"name":"MissionStatement","sourcePath":"components/brand/MissionStatement.jsx"},{"name":"SiteFooter","sourcePath":"components/brand/SiteFooter.jsx"},{"name":"StepCard","sourcePath":"components/brand/StepCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CopyButton","sourcePath":"components/core/CopyButton.jsx"},{"name":"Notice","sourcePath":"components/core/Notice.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CurrencyCard","sourcePath":"components/data/CurrencyCard.jsx"},{"name":"DetailField","sourcePath":"components/data/DetailField.jsx"},{"name":"DonationsTable","sourcePath":"components/data/DonationsTable.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"ExpenseCategory","sourcePath":"components/data/ExpenseCategory.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"FilterSelect","sourcePath":"components/forms/FilterSelect.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"DonateModal","sourcePath":"components/overlay/DonateModal.jsx"},{"name":"DriveLinkButton","sourcePath":"components/overlay/DriveLinkButton.jsx"},{"name":"PaymentMethod","sourcePath":"components/overlay/PaymentMethod.jsx"}],"sourceHashes":{"components/brand/BrandHeader.jsx":"0a808ae5f2b4","components/brand/MissionStatement.jsx":"6e77243a9695","components/brand/SiteFooter.jsx":"a5760c3c729a","components/brand/StepCard.jsx":"72d94a372aaa","components/core/Button.jsx":"6d84b99b592d","components/core/Card.jsx":"6cd33af4114b","components/core/CopyButton.jsx":"2ea1cbbb5bcf","components/core/Notice.jsx":"df34950aacb9","components/core/SectionTitle.jsx":"4a08e3d1efeb","components/core/Tag.jsx":"87390c2a1d8b","components/data/CurrencyCard.jsx":"46fb6568cbd9","components/data/DetailField.jsx":"8ca70f412fff","components/data/DonationsTable.jsx":"76a23bccd187","components/data/EmptyState.jsx":"65c45917b933","components/data/ExpenseCategory.jsx":"d9df8e719496","components/data/StatCard.jsx":"19a743b1b380","components/forms/FilterSelect.jsx":"96ff9834f15f","components/forms/SearchInput.jsx":"71d4096cfc39","components/overlay/DonateModal.jsx":"6dae2ac76f7d","components/overlay/DriveLinkButton.jsx":"64ddc736fa61","components/overlay/PaymentMethod.jsx":"93b934c5bce8","ui_kits/donations-site/ReportScreen.jsx":"eb7c26f71912","ui_kits/donations-site/data.js":"2d184e03e46c","ui_kits/landing/EditorialLanding.jsx":"4f895cac7aad","ui_kits/landing/GraphicLanding.jsx":"37dde6a02b6a","ui_kits/landing/Lightbox.jsx":"9784b950164a","ui_kits/landing/SectionPage.jsx":"4417a9d60bf1","ui_kits/landing/SectionWindow.jsx":"5e29fbc3b97b","ui_kits/landing/content.js":"8db87f263925","ui_kits/landing/data-source.js":"6a0408dd5849","ui_kits/landing/image-slot.js":"fff26d081c8d","ui_kits/landing/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NEXOSDesignSystem_0519e6 = window.NEXOSDesignSystem_0519e6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/MissionStatement.jsx
try { (() => {
function MissionStatement({
  label = 'Nuestra misión',
  children,
  html,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-prose)',
      margin: 'var(--space-12) auto var(--space-3)',
      textAlign: 'center',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-black)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--accent)',
      textTransform: 'uppercase',
      marginBottom: 'var(--space-5)'
    }
  }, label), html ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-prose)',
      color: 'var(--text-body)',
      textAlign: 'justify',
      textAlignLast: 'center'
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-prose)',
      color: 'var(--text-body)',
      textAlign: 'justify',
      textAlignLast: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { MissionStatement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MissionStatement.jsx", error: String((e && e.message) || e) }); }

// components/brand/SiteFooter.jsx
try { (() => {
function SiteFooter({
  tagline,
  creditLabel = 'Sistema creado por',
  creditName = 'Isis Elinor',
  creditHref = 'https://www.instagram.com/isiselinor/',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      textAlign: 'center',
      margin: 'var(--space-14) 0 90px',
      paddingTop: 'var(--space-8)',
      borderTop: '1px solid var(--line)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, tagline ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      margin: '0 0 var(--space-4)'
    }
  }, tagline) : null, /*#__PURE__*/React.createElement("span", null, creditLabel, " "), /*#__PURE__*/React.createElement("a", {
    href: creditHref,
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'var(--blue)',
      textDecoration: 'none',
      fontWeight: 'var(--weight-medium)'
    }
  }, creditName));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/brand/StepCard.jsx
try { (() => {
function StepCard({
  n,
  title,
  children,
  html,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-card)',
      borderRadius: 'var(--radius-step)',
      padding: 'var(--pad-step)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-step)',
      fontWeight: 'var(--weight-black)',
      color: 'var(--accent)',
      lineHeight: 'var(--leading-tight)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)',
      fontSize: 'var(--text-sm-plus)'
    }
  }, title)), html ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs-plus)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs-plus)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-5)',
  fontFamily: 'var(--font-ui)',
  fontWeight: 'var(--weight-black)',
  cursor: 'pointer',
  border: 'none',
  textDecoration: 'none',
  lineHeight: 'var(--leading-tight)',
  transition: 'transform var(--dur-fast), filter var(--dur-fast)'
};
const variants = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    borderRadius: 'var(--radius-pill)',
    padding: '17px',
    fontSize: '20px',
    letterSpacing: '.2px',
    width: 'var(--width-cta)',
    maxWidth: '100%',
    boxShadow: 'var(--shadow-cta)'
  },
  primarySmall: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    borderRadius: 'var(--radius-pill)',
    padding: '10px 18px',
    fontSize: 'var(--text-base)'
  },
  floating: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    borderRadius: 'var(--radius-pill)',
    padding: '16px 26px',
    fontSize: '17px',
    boxShadow: 'var(--shadow-float)'
  },
  quiet: {
    background: 'var(--action-quiet-bg)',
    color: 'var(--action-quiet-fg)',
    border: 'var(--border-card)',
    borderRadius: 'var(--radius-pill)',
    padding: '10px 16px',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-semibold)',
    gap: 'var(--space-3)',
    boxShadow: 'var(--shadow-card)'
  },
  quietBlue: {
    background: 'var(--action-quiet-bg)',
    color: 'var(--blue)',
    border: 'var(--border-card)',
    borderRadius: 'var(--radius-pill)',
    padding: '10px 16px',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-semibold)',
    gap: 'var(--space-3)',
    boxShadow: 'var(--shadow-card)'
  }
};
function Button({
  variant = 'primary',
  as,
  href,
  children,
  style,
  disabled,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const s = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...(disabled ? {
      opacity: .5,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: s,
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/BrandHeader.jsx
try { (() => {
const igIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  style: {
    width: 16,
    height: 16
  }
}, /*#__PURE__*/React.createElement("rect", {
  x: "2.5",
  y: "2.5",
  width: "19",
  height: "19",
  rx: "5.2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4.2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.6",
  cy: "6.4",
  r: "1.1",
  fill: "currentColor",
  stroke: "none"
}));
function BrandHeader({
  logoSrc,
  wordmark = 'NEXOS',
  instagram = 'https://instagram.com/somos.nexosve',
  lang = 'EN',
  onToggleLang,
  subline,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "quietBlue",
    href: instagram,
    target: "_blank",
    rel: "noopener",
    style: {
      justifySelf: 'start'
    }
  }, igIcon, /*#__PURE__*/React.createElement("span", null, "Instagram")), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'center',
      minWidth: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '13px'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: wordmark,
    style: {
      height: 78,
      width: 'auto',
      display: 'block'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-wordmark)',
      fontWeight: 'var(--weight-black)',
      letterSpacing: 'var(--tracking-wordmark)',
      color: 'var(--blue)',
      lineHeight: 'var(--leading-tight)',
      fontFamily: 'var(--font-display)'
    }
  }, wordmark)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "quiet",
    onClick: onToggleLang,
    style: {
      justifySelf: 'end'
    }
  }, lang)), subline ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#b3b8c4',
      fontSize: 'var(--text-micro)',
      textAlign: 'center',
      margin: '5px 0 var(--space-7)'
    }
  }, subline) : null);
}
Object.assign(__ds_scope, { BrandHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  radius = 'var(--radius-card)',
  pad = 'var(--pad-card)',
  accentTop,
  children,
  style,
  ...rest
}) {
  const s = {
    background: 'var(--surface-card)',
    border: 'var(--border-card)',
    boxShadow: 'var(--shadow-card)',
    borderRadius: radius,
    padding: pad,
    ...(accentTop ? {
      borderTop: 'var(--border-stat-top) solid ' + accentTop
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/CopyButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CopyButton({
  value = '',
  label = 'Copiar',
  copiedLabel = '✓ Copiado',
  style,
  ...rest
}) {
  const [ok, setOk] = React.useState(false);
  function onClick() {
    try {
      navigator.clipboard && navigator.clipboard.writeText(value);
    } catch (e) {}
    setOk(true);
    setTimeout(function () {
      setOk(false);
    }, 1400);
  }
  const s = {
    background: ok ? 'var(--accent)' : 'var(--surface-notice)',
    color: ok ? 'var(--white)' : 'var(--accent)',
    border: 'none',
    borderRadius: 'var(--radius-xs)',
    padding: '5px 10px',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-semibold)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: s
  }, rest), ok ? copiedLabel : label);
}
Object.assign(__ds_scope, { CopyButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CopyButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Notice({
  children,
  style,
  ...rest
}) {
  const s = {
    background: 'var(--surface-notice)',
    border: '1px solid var(--accent)',
    borderRadius: 'var(--radius-sm)',
    padding: '8px 10px',
    fontSize: 'var(--text-xs)',
    lineHeight: 'var(--leading-body)',
    color: 'var(--text-body)',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Notice.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionTitle({
  children,
  style,
  ...rest
}) {
  const s = {
    fontSize: 'var(--text-section)',
    margin: 'var(--space-16) 0 var(--space-7)',
    color: 'var(--text-heading)',
    fontWeight: 'var(--weight-black)',
    letterSpacing: 'var(--tracking-title)',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("h2", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  style,
  ...rest
}) {
  const s = {
    fontSize: 'var(--text-label)',
    color: 'var(--blue)',
    border: '1px solid var(--blue-lt)',
    borderRadius: 'var(--radius-lg)',
    padding: '2px 8px',
    display: 'inline-block',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/CurrencyCard.jsx
try { (() => {
function CurrencyCard({
  symbol,
  currency,
  simbolo,
  moneda,
  total,
  count,
  usd,
  countLabel = 'donaciones',
  style
}) {
  const sym = symbol != null ? symbol : simbolo;
  const cur = currency != null ? currency : moneda;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: {
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--accent)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, sym, " \xB7 ", cur), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-title)',
      fontWeight: 'var(--weight-black)',
      marginTop: 'var(--space-3)'
    }
  }, total), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      marginTop: 'var(--space-2)'
    }
  }, count, " ", countLabel), usd ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      marginTop: 'var(--space-2)'
    }
  }, "\u2248 US$ ", usd) : null);
}
Object.assign(__ds_scope, { CurrencyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CurrencyCard.jsx", error: String((e && e.message) || e) }); }

// components/data/DetailField.jsx
try { (() => {
function DetailField({
  label,
  value,
  href,
  copyValue,
  first,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-3) 0',
      borderTop: first ? 'none' : '1px dashed var(--line)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)'
    }
  }, label) : null, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-base)',
      wordBreak: 'break-all',
      textAlign: 'right',
      flex: 1,
      color: 'var(--blue)',
      textDecoration: 'none'
    }
  }, value) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-base)',
      wordBreak: 'break-all',
      textAlign: 'right',
      flex: 1
    }
  }, value), /*#__PURE__*/React.createElement(__ds_scope.CopyButton, {
    value: copyValue != null ? copyValue : String(value)
  }));
}
Object.assign(__ds_scope, { DetailField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DetailField.jsx", error: String((e && e.message) || e) }); }

// components/data/DonationsTable.jsx
try { (() => {
const th = {
  textAlign: 'left',
  padding: 'var(--pad-cell)',
  borderBottom: '1px solid var(--line)',
  color: 'var(--text-muted)',
  fontWeight: 'var(--weight-medium)',
  cursor: 'pointer',
  userSelect: 'none'
};
const td = {
  textAlign: 'left',
  padding: 'var(--pad-cell)',
  borderBottom: '1px solid var(--line)'
};
function DonationsTable({
  rows = [],
  columns,
  onSort,
  style
}) {
  const cols = columns || ['Donante', 'Método', 'Monto'];
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-ui)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, cols.map(function (c, i) {
    return /*#__PURE__*/React.createElement("th", {
      key: c,
      style: {
        ...th,
        textAlign: i === cols.length - 1 ? 'right' : 'left'
      },
      onClick: onSort ? function () {
        onSort(i);
      } : undefined
    }, c);
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(function (r, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", {
      style: td
    }, r.donante), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, r.metodo)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap'
      }
    }, r.simbolo, " ", r.monto));
  })));
}
Object.assign(__ds_scope, { DonationsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonationsTable.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  children,
  style,
  ...rest
}) {
  const s = {
    color: 'var(--text-muted)',
    padding: '34px 18px',
    textAlign: 'center',
    fontSize: 'var(--text-md)',
    border: '1px dashed var(--line)',
    borderRadius: 'var(--radius-card)',
    background: 'var(--surface-soft)',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/ExpenseCategory.jsx
try { (() => {
function ExpenseCategory({
  name,
  description,
  total,
  pct,
  items = [],
  open,
  style
}) {
  const [isOpen, setOpen] = React.useState(!!open);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      boxShadow: 'var(--shadow-card)',
      borderRadius: 'var(--radius-cat)',
      marginBottom: 'var(--space-5)',
      overflow: 'hidden',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function () {
      setOpen(!isOpen);
    },
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '13px 14px',
      cursor: 'pointer',
      fontSize: 'var(--text-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      marginRight: 'var(--space-3)',
      display: 'inline-block',
      transform: 'rotate(' + (isOpen ? 90 : 0) + 'deg)',
      transition: 'transform var(--dur-base)'
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)'
    }
  }, name), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-regular)'
    }
  }, description) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-figure)',
      fontWeight: 'var(--weight-black)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap',
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "US$ ", total), pct != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-regular)'
    }
  }, pct, "% del total") : null)), isOpen ? /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-sm)',
      margin: '0 0 var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 14px',
        borderBottom: '1px solid var(--line)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, it.concepto), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 14px',
        borderBottom: '1px solid var(--line)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap'
      }
    }, "US$ ", it.monto));
  }))) : null);
}
Object.assign(__ds_scope, { ExpenseCategory });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ExpenseCategory.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
const tones = {
  income: {
    rule: 'var(--stat-income)',
    value: 'var(--stat-income)'
  },
  expense: {
    rule: 'var(--stat-expense)',
    value: 'var(--stat-expense)'
  },
  balance: {
    rule: 'var(--stat-balance)',
    value: 'var(--stat-balance)'
  },
  neutral: {
    rule: 'var(--line)',
    value: 'var(--text-heading)'
  }
};
function StatCard({
  label,
  value,
  note,
  tone = 'neutral',
  style
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    accentTop: t.rule,
    pad: "var(--pad-stat)",
    style: {
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps-sm)',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-stat)',
      fontWeight: 'var(--weight-black)',
      marginTop: 'var(--space-2)',
      color: t.value
    }
  }, value), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      marginTop: 'var(--space-3)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterSelect.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterSelect({
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = {
    background: 'var(--surface-card)',
    border: '1px solid ' + (focus ? 'var(--border-focus)' : 'var(--line)'),
    color: 'var(--text-body)',
    padding: 'var(--pad-control)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--text-base)',
    outline: 'none',
    boxShadow: 'var(--shadow-card)',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("select", _extends({
    style: s,
    onFocus: function () {
      setFocus(true);
    },
    onBlur: function () {
      setFocus(false);
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(function (o) {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  }));
}
Object.assign(__ds_scope, { FilterSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterSelect.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchInput({
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = {
    background: 'var(--surface-card)',
    border: '1px solid ' + (focus ? 'var(--border-focus)' : 'var(--line)'),
    color: 'var(--text-body)',
    padding: 'var(--pad-control)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--text-base)',
    outline: 'none',
    boxShadow: 'var(--shadow-card)',
    flex: 1,
    minWidth: '180px',
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    style: s,
    onFocus: function () {
      setFocus(true);
    },
    onBlur: function () {
      setFocus(false);
    }
  }, rest));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/overlay/DonateModal.jsx
try { (() => {
function DonateModal({
  open,
  title = 'Quiero donar 💙',
  subtitle = 'Elige un método y copia los datos. ¡Gracias!',
  notice,
  onClose,
  children,
  style
}) {
  React.useEffect(function () {
    if (!open || !onClose) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return function () {
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: function (e) {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      zIndex: 40,
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 'var(--space-12)',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-modal)',
      maxWidth: 'var(--width-modal)',
      width: '100%',
      padding: 'var(--space-11)',
      marginTop: 'var(--space-12)',
      boxShadow: 'var(--shadow-modal)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-2)',
      fontSize: 'var(--text-title)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-step)',
      cursor: 'pointer',
      lineHeight: 'var(--leading-tight)'
    }
  }, "\xD7")), notice ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Notice, null, notice)) : null, children));
}
Object.assign(__ds_scope, { DonateModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/DonateModal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/DriveLinkButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DriveLinkButton({
  tone = 'blue',
  href,
  children,
  style,
  ...rest
}) {
  const color = tone === 'coral' ? 'var(--accent)' : 'var(--blue)';
  const s = {
    borderRadius: 'var(--radius-step)',
    padding: 'var(--space-7)',
    textAlign: 'center',
    fontWeight: 'var(--weight-black)',
    fontSize: 'var(--text-base)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 'var(--leading-snug)',
    background: 'var(--white)',
    boxShadow: 'var(--shadow-card)',
    transition: 'filter var(--dur-fast)',
    border: 'var(--border-outline-strong) solid ' + color,
    color: color,
    fontFamily: 'var(--font-ui)',
    ...style
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener",
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { DriveLinkButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/DriveLinkButton.jsx", error: String((e && e.message) || e) }); }

// components/overlay/PaymentMethod.jsx
try { (() => {
function PaymentMethod({
  name,
  fields = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-cat)',
      padding: 'var(--space-7)',
      marginBottom: 'var(--space-6)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--accent)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      marginBottom: 'var(--space-4)'
    }
  }, name), fields.map(function (fd, i) {
    return /*#__PURE__*/React.createElement(__ds_scope.DetailField, {
      key: i,
      first: i === 0,
      label: fd.campo,
      value: fd.valor,
      href: fd.enlace ? fd.copiar : undefined,
      copyValue: fd.copiar
    });
  }));
}
Object.assign(__ds_scope, { PaymentMethod });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/PaymentMethod.jsx", error: String((e && e.message) || e) }); }

// ui_kits/donations-site/ReportScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NS = window.NEXOSDesignSystem_0519e6;
const {
  BrandHeader,
  MissionStatement,
  StepCard,
  SiteFooter,
  Button,
  Card,
  Notice,
  SectionTitle,
  StatCard,
  CurrencyCard,
  DonationsTable,
  ExpenseCategory,
  EmptyState,
  SearchInput,
  FilterSelect,
  DonateModal,
  PaymentMethod,
  DriveLinkButton
} = NS;
function ReportScreen() {
  const d = window.NEXOS_FIXTURE;
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [met, setMet] = React.useState('');
  const [mon, setMon] = React.useState('');
  const busca = q.trim();
  const listos = busca.length >= 3;
  const encontrados = listos ? d.movimientos.filter(function (m) {
    if (m.donante.toLowerCase().indexOf(busca.toLowerCase()) === -1) return false;
    if (met && m.metodo !== met) return false;
    if (mon && m.moneda !== mon) return false;
    return true;
  }) : [];
  const TOPE = 25;
  const rows = encontrados.slice(0, TOPE);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-page)',
      margin: '0 auto',
      padding: '22px 20px'
    }
  }, /*#__PURE__*/React.createElement(BrandHeader, {
    logoSrc: "../../assets/logo-nexos-mark.png",
    subline: 'Actualizado ' + d.actualizado,
    lang: "EN"
  }), /*#__PURE__*/React.createElement(MissionStatement, {
    html: d.mision
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "floating",
    onClick: function () {
      setOpen(true);
    },
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 30
    }
  }, "\uD83D\uDC99 Donar"), /*#__PURE__*/React.createElement(SectionTitle, null, "C\xF3mo donar en 3 pasos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-5)',
      margin: '0 0 var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    n: 1,
    title: "Elige m\xE9todo",
    html: 'Toca <b style="color:var(--accent)">Donar ahora</b> y elige el que prefieras.'
  }), /*#__PURE__*/React.createElement(StepCard, {
    n: 2,
    title: "Copia y transfiere",
    html: 'Copia con <b style="color:var(--accent)">Copiar</b> y haz tu aporte.'
  }), /*#__PURE__*/React.createElement(StepCard, {
    n: 3,
    title: "Cuida el asunto",
    html: 'No menciones Venezuela. Tu nombre o un “gracias” basta 💙'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: function () {
      setOpen(true);
    },
    style: {
      margin: '8px auto 6px'
    }
  }, "\uD83D\uDC99 Donar ahora")), /*#__PURE__*/React.createElement(SectionTitle, null, "La ayuda en n\xFAmeros"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(var(--grid-min-stat),1fr))',
      gap: 'var(--gap-grid)',
      margin: '0 0 var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    tone: "income",
    label: "Total recaudado",
    value: '≈ US$ ' + d.totalUSD
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "expense",
    label: "Total egresos",
    value: '≈ US$ ' + d.totalEgresos
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "balance",
    label: "Saldo disponible",
    value: '≈ US$ ' + d.saldo
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      margin: '0 0 var(--space-2)'
    }
  }, d.notaTasas), /*#__PURE__*/React.createElement(SectionTitle, null, "Mira en qu\xE9 se us\xF3 tu ayuda"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 'var(--space-6)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps-sm)',
      textTransform: 'uppercase'
    }
  }, "Donaciones recibidas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-stat)',
      fontWeight: 'var(--weight-black)',
      marginTop: 'var(--space-2)'
    }
  }, d.totalDonaciones)), d.enlaceFacturas ? /*#__PURE__*/React.createElement(DriveLinkButton, {
    tone: "blue",
    href: d.enlaceFacturas
  }, "\uD83D\uDCC4 Ver facturas de compras") : null, d.enlaceFotos ? /*#__PURE__*/React.createElement(DriveLinkButton, {
    tone: "coral",
    href: d.enlaceFotos
  }, "\uD83D\uDCF7 Ver fotos de las donaciones") : null), /*#__PURE__*/React.createElement(SectionTitle, null, "Detalle por moneda"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(var(--grid-min-card),1fr))',
      gap: 'var(--gap-grid)',
      marginBottom: 'var(--space-12)'
    }
  }, d.porMoneda.map(function (m) {
    return /*#__PURE__*/React.createElement(CurrencyCard, _extends({
      key: m.moneda
    }, m));
  })), /*#__PURE__*/React.createElement(SectionTitle, null, "\xBFYa donaste? Busca tu nombre"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--gap-toolbar)',
      marginBottom: 'var(--space-6)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "\uD83D\uDD0E Escribe tu nombre\u2026",
    value: q,
    onChange: function (e) {
      setQ(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(FilterSelect, {
    placeholder: "Todos los m\xE9todos",
    options: d.metodos,
    value: met,
    onChange: function (e) {
      setMet(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(FilterSelect, {
    placeholder: "Todas las monedas",
    value: mon,
    onChange: function (e) {
      setMon(e.target.value);
    },
    options: d.porMoneda.map(function (m) {
      return {
        value: m.moneda,
        label: m.simbolo + ' (' + m.moneda + ')'
      };
    })
  })), !listos ? /*#__PURE__*/React.createElement(EmptyState, null, "\uD83D\uDD0E Escribe al menos 3 letras de tu nombre para ver tus donaciones.") : encontrados.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, null, "No encontramos donaciones con ese nombre. Revisa c\xF3mo est\xE1 escrito.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DonationsTable, {
    rows: rows
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)',
      marginTop: 'var(--space-7)',
      textAlign: 'center'
    }
  }, encontrados.length > TOPE ? 'Mostrando ' + TOPE + ' de ' + encontrados.length + ' coincidencias' : encontrados.length + ' resultado(s) mostrados')), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-13) 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Egresos por categor\xEDa"), d.egresos.map(function (c, i) {
    return /*#__PURE__*/React.createElement(ExpenseCategory, {
      key: c.categoria,
      name: c.categoria,
      description: c.descripcion,
      total: c.total,
      pct: c.pct,
      items: c.items
    });
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    tagline: d.tagline
  }), /*#__PURE__*/React.createElement(DonateModal, {
    open: open,
    onClose: function () {
      setOpen(false);
    },
    notice: /*#__PURE__*/React.createElement("span", null, "\u26A0\uFE0F Al transferir, en el asunto ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--accent)'
      }
    }, "no menciones Venezuela"), " ni la causa. Con tu nombre o un \u201Cgracias\u201D basta \uD83D\uDC99 (as\xED cuidamos la cuenta).")
  }, d.metodosDonacion.map(function (m) {
    return /*#__PURE__*/React.createElement(PaymentMethod, {
      key: m.metodo,
      name: m.metodo,
      fields: m.campos
    });
  })));
}
Object.assign(window, {
  ReportScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/donations-site/ReportScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/donations-site/data.js
try { (() => {
window.NEXOS_FIXTURE = {
  actualizado: '12/08/2026 18:40',
  mision: 'Somos <b style="color:var(--accent)">el puente</b> entre la voluntad de los que quieren aportar y la resiliencia de las comunidades que hoy necesitan reconstruirse. Somos la prueba de que cuando las manos se juntan de forma transparente, la ayuda llega <b style="color:var(--accent)">más lejos, más rápido y de forma más humana</b>.',
  tagline: 'Reconstruyendo los nexos rotos de nuestro país después del 24 de junio.',
  totalUSD: '12.480,00',
  totalEgresos: '9.340,00',
  saldo: '3.140,00',
  totalDonaciones: 114,
  notaTasas: 'Conversión estimada · ARS 1.215,00/USD · Bs 116,20/USD · EUR×1,09 · USD y USDT 1:1',
  porMoneda: [{
    simbolo: 'US$',
    moneda: 'USD',
    total: '8.120,00',
    count: 54
  }, {
    simbolo: '$',
    moneda: 'ARS',
    total: '1.240.500,00',
    count: 38,
    usd: '1.020,41'
  }, {
    simbolo: 'Bs',
    moneda: 'VES',
    total: '94.300,00',
    count: 22,
    usd: '812,00'
  }, {
    simbolo: '€',
    moneda: 'EUR',
    total: '2.310,00',
    count: 12,
    usd: '2.517,90'
  }],
  metodos: ['Zelle', 'Pago móvil', 'Transferencia', 'USDT (TRC20)'],
  movimientos: [{
    donante: 'María Pérez',
    metodo: 'Zelle',
    monto: '50,00',
    simbolo: 'US$',
    moneda: 'USD'
  }, {
    donante: 'María Fernanda R.',
    metodo: 'Pago móvil',
    monto: '1.200,00',
    simbolo: 'Bs',
    moneda: 'VES'
  }, {
    donante: 'Luis González',
    metodo: 'Transferencia',
    monto: '25.000,00',
    simbolo: '$',
    moneda: 'ARS'
  }, {
    donante: 'Ana Mariela T.',
    metodo: 'USDT (TRC20)',
    monto: '120,00',
    simbolo: 'US$',
    moneda: 'USD'
  }, {
    donante: 'Carlos Bello',
    metodo: 'Zelle',
    monto: '80,00',
    simbolo: 'US$',
    moneda: 'USD'
  }],
  egresos: [{
    categoria: 'Medicinas / antibióticos',
    descripcion: 'Farmacias de La Guaira',
    total: '2.140,00',
    pct: '22,9',
    items: [{
      concepto: 'Amoxicilina x40',
      monto: '320,00'
    }, {
      concepto: 'Analgésicos y antipiréticos',
      monto: '286,50'
    }, {
      concepto: 'Sueros y jeringas',
      monto: '1.533,50'
    }]
  }, {
    categoria: 'Comida y agua',
    descripcion: 'Mercado para 60 familias',
    total: '3.860,00',
    pct: '41,3',
    items: [{
      concepto: 'Bolsas de comida (60)',
      monto: '2.940,00'
    }, {
      concepto: 'Agua potable',
      monto: '920,00'
    }]
  }, {
    categoria: 'Ferretería',
    descripcion: 'Materiales para reconstrucción de techos',
    total: '2.410,00',
    pct: '25,8',
    items: [{
      concepto: 'Láminas de zinc (34)',
      monto: '1.780,00'
    }, {
      concepto: 'Clavos, tornillos y herramientas',
      monto: '630,00'
    }]
  }, {
    categoria: 'Transporte',
    descripcion: 'Fletes hasta las comunidades',
    total: '930,00',
    pct: '10,0',
    items: [{
      concepto: 'Flete Caracas–La Guaira',
      monto: '560,00'
    }, {
      concepto: 'Combustible y peajes',
      monto: '370,00'
    }]
  }],
  metodosDonacion: [{
    metodo: 'Zelle',
    campos: [{
      campo: 'Titular',
      valor: 'Ana Rodríguez'
    }, {
      campo: 'Correo',
      valor: 'donaciones.nexos@gmail.com'
    }]
  }, {
    metodo: 'Pago móvil (Venezuela)',
    campos: [{
      campo: 'Banco',
      valor: '0102 · Banco de Venezuela'
    }, {
      campo: 'Cédula',
      valor: 'V-18.446.902'
    }, {
      campo: 'Teléfono',
      valor: '0414-1234567'
    }]
  }, {
    metodo: 'Transferencia (Argentina)',
    campos: [{
      campo: 'Alias',
      valor: 'nexos.ayuda.mp'
    }, {
      campo: 'Titular',
      valor: 'Isis E. Rodríguez'
    }]
  }, {
    metodo: 'USDT (TRC20)',
    campos: [{
      campo: 'Wallet',
      valor: 'TQ7ks9m2Xf4hVb1LpZq8dRc3NwYu6Ae5Tz'
    }, {
      campo: 'Enlace',
      valor: 'paypal.me/nexosve',
      copiar: 'https://paypal.me/nexosve',
      enlace: true
    }]
  }],
  enlaceFacturas: 'https://drive.google.com/drive/folders/facturas',
  enlaceFotos: 'https://drive.google.com/drive/folders/fotos'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/donations-site/data.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/EditorialLanding.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NS = window.NEXOSDesignSystem_0519e6;
const {
  Button,
  Card,
  Notice,
  StatCard,
  CurrencyCard,
  DonationsTable,
  ExpenseCategory,
  EmptyState,
  SearchInput,
  FilterSelect,
  DonateModal,
  PaymentMethod,
  DriveLinkButton,
  StepCard,
  CopyButton
} = NS;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#e85d45", "#2b4fd1", "#1c2340", "#f7e3dc"],
  "portada": "Sobrio",
  "subventana": "Página",
  "overlay": "Navy",
  "winHeader": "Navy"
} /*EDITMODE-END*/;
const A = {
  wrap: {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '0 24px'
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: 'var(--accent)'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(28px,4vw,44px)',
    fontWeight: 700,
    letterSpacing: '-1px',
    lineHeight: 1.05,
    margin: '10px 0 0',
    color: 'var(--ink)'
  },
  lead: {
    fontSize: 17,
    lineHeight: 1.7,
    color: 'var(--muted)',
    maxWidth: 620,
    margin: '14px 0 0'
  }
};
function NavBar({
  onOpen,
  onDonate,
  lang,
  setLang,
  forceSolid
}) {
  const d = window.nexosContent(lang);
  const u = d.ui;
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const solid = forceSolid || scrolled;
  React.useEffect(function () {
    const el = document.getElementById('scroller') || window;
    function onScroll() {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 40);
    }
    el.addEventListener('scroll', onScroll);
    return function () {
      el.removeEventListener('scroll', onScroll);
    };
  }, []);
  React.useEffect(function () {
    document.body.style.overflow = menu ? 'hidden' : '';
    return function () {
      document.body.style.overflow = '';
    };
  }, [menu]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 25,
      background: solid ? 'rgba(255,255,255,.92)' : 'transparent',
      backdropFilter: solid ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: '1px solid ' + (solid ? 'var(--line)' : 'transparent'),
      transition: 'background .2s, border-color .2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...A.wrap,
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      height: 70
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/logo-nexos-mark.png",
    alt: "",
    style: {
      height: 30,
      filter: solid ? 'none' : 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: 3.4,
      color: solid ? 'var(--blue)' : '#fff'
    }
  }, "NEXOS")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 20,
      marginLeft: 'auto',
      alignItems: 'center',
      flexWrap: 'nowrap'
    },
    className: "navlinks"
  }, d.nav.map(function (n) {
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: '#' + n.id,
      onClick: n.id === 'quienes' || n.id === 'aliados' || n.id === 'faq' ? function (e) {
        e.preventDefault();
        onOpen(n.id);
      } : undefined,
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        color: solid ? 'var(--ink)' : 'rgba(255,255,255,.86)',
        borderBottom: ['quienes', 'aliados', 'faq'].indexOf(n.id) > -1 ? '1px dotted currentColor' : 'none',
        paddingBottom: 2
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("button", {
    className: "menubtn",
    "aria-label": u.menu,
    onClick: function () {
      setMenu(!menu);
    },
    style: {
      display: 'none',
      background: 'none',
      border: '1px solid ' + (solid ? 'var(--line)' : 'rgba(255,255,255,.4)'),
      color: solid ? 'var(--ink)' : '#fff',
      borderRadius: 999,
      width: 40,
      height: 38,
      marginLeft: 'auto',
      fontSize: 15,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, menu ? '×' : '☰'), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLang(lang === 'ES' ? 'EN' : 'ES');
    },
    "aria-label": lang === 'ES' ? 'Switch to English' : 'Cambiar a español',
    style: {
      background: 'none',
      border: '1px solid ' + (solid ? 'var(--line)' : 'rgba(255,255,255,.4)'),
      color: solid ? 'var(--ink)' : '#fff',
      borderRadius: 999,
      padding: '7px 12px',
      fontSize: 12,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, lang === 'ES' ? 'EN' : 'ES'), /*#__PURE__*/React.createElement(Button, {
    variant: "primarySmall",
    onClick: onDonate,
    style: {
      fontSize: 13.5,
      padding: '11px 20px'
    }
  }, u.donar)), menu ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderTop: '1px solid var(--line)',
      boxShadow: '0 20px 40px rgba(28,35,64,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...A.wrap,
      display: 'grid',
      padding: '8px 24px 16px'
    }
  }, d.nav.map(function (n) {
    const isWin = ['quienes', 'aliados', 'faq'].indexOf(n.id) > -1;
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: '#' + n.id,
      onClick: function (e) {
        if (isWin) {
          e.preventDefault();
          onOpen(n.id);
        }
        setMenu(false);
      },
      style: {
        padding: '14px 0',
        borderBottom: '1px solid var(--line)',
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--ink)',
        textDecoration: 'none'
      }
    }, n.label);
  }))) : null);
}
function Hero({
  onDonate,
  onOpen,
  scrimBase,
  lang
}) {
  const d = window.nexosContent(lang);
  const u = d.ui;
  const x = window.NEXOS_FIXTURE;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 'clamp(560px,78vh,760px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginTop: -70,
      paddingTop: 70
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-rescate-escombros.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 32%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, color-mix(in oklab, ' + scrimBase + ' 62%, transparent) 0%, color-mix(in oklab, ' + scrimBase + ' 28%, transparent) 34%, color-mix(in oklab, ' + scrimBase + ' 88%, transparent) 100%) '
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...A.wrap,
      position: 'relative',
      paddingBottom: 34,
      paddingTop: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...A.eyebrow,
      color: '#ffb3a3'
    }
  }, d.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(36px,6.4vw,72px)',
      fontWeight: 800,
      lineHeight: 1.02,
      letterSpacing: '-2px',
      color: '#fff',
      margin: '12px 0 0',
      maxWidth: 900,
      textWrap: 'balance'
    }
  }, d.hero.titulo), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.6vw,19px)',
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.85)',
      maxWidth: 620,
      margin: '18px 0 0'
    }
  }, d.hero.bajada), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      margin: '28px 0 0',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onDonate,
    style: {
      width: 'auto',
      padding: '16px 30px',
      fontSize: 17,
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      onOpen('quienes');
    },
    style: {
      background: 'rgba(255,255,255,.12)',
      border: '1px solid rgba(255,255,255,.42)',
      color: '#fff',
      borderRadius: 999,
      padding: '15px 26px',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
      backdropFilter: 'blur(6px)'
    }
  }, u.quienesLink)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '26px 46px',
      margin: '40px 0 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.22)'
    }
  }, [[u.recaudado, '≈ US$ ' + x.totalUSD], [u.ejecutado, '≈ US$ ' + x.totalEgresos], [u.donaciones, x.totalDonaciones]].map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p[0]
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(22px,2.6vw,32px)',
        fontWeight: 700,
        color: '#fff',
        lineHeight: 1
      }
    }, p[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        letterSpacing: .6,
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.62)',
        marginTop: 6
      }
    }, p[0]));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'rgba(255,255,255,.5)',
      alignSelf: 'flex-end'
    }
  }, d.hero.credito))));
}
function HeroSobrio({
  onDonate,
  onOpen,
  lang
}) {
  const d = window.nexosContent(lang);
  const u = d.ui;
  const x = window.NEXOS_FIXTURE;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...A.wrap,
      maxWidth: 900,
      paddingTop: 'clamp(56px,9vw,110px)',
      paddingBottom: 'clamp(40px,6vw,72px)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px,4.4vw,52px)',
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: '-1.6px',
      color: 'var(--ink)',
      margin: 0,
      maxWidth: 760,
      textWrap: 'balance'
    }
  }, d.hero.titulo), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.6vw,18px)',
      lineHeight: 1.7,
      color: 'var(--muted)',
      maxWidth: 560,
      margin: '20px 0 0'
    }
  }, d.hero.bajada), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      margin: '30px 0 0',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onDonate,
    style: {
      width: 'auto',
      padding: '15px 28px',
      fontSize: 16,
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      onOpen('quienes');
    },
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      color: 'var(--blue)',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, u.quienesLink)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      margin: '26px 0 0'
    }
  }, u.recaudado, " \u2248 US$ ", x.totalUSD, " \xB7 ", u.ejecutado, " \u2248 US$ ", x.totalEgresos, " \xB7 ", u.actualizado, " ", x.actualizado)));
}
function HeroCentrado({
  onDonate,
  onOpen,
  lang
}) {
  const d = window.nexosContent(lang);
  const u = d.ui;
  const x = window.NEXOS_FIXTURE;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...A.wrap,
      maxWidth: 860,
      textAlign: 'center',
      paddingTop: 'clamp(58px,9vw,116px)',
      paddingBottom: 'clamp(40px,6vw,70px)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/logo-nexos-mark.png",
    alt: "",
    style: {
      height: 64,
      margin: '0 auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px,5vw,58px)',
      fontWeight: 800,
      lineHeight: 1.04,
      letterSpacing: '-2px',
      color: 'var(--ink)',
      margin: '26px 0 0',
      textWrap: 'balance'
    },
    dangerouslySetInnerHTML: {
      __html: d.hero.tituloHtml
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.6vw,18px)',
      lineHeight: 1.7,
      color: 'var(--muted)',
      maxWidth: 560,
      margin: '20px auto 0'
    }
  }, d.hero.bajada), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      margin: '30px 0 0',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onDonate,
    style: {
      width: 'auto',
      padding: '15px 28px',
      fontSize: 16,
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      onOpen('quienes');
    },
    style: {
      background: 'none',
      border: '1px solid var(--line)',
      color: 'var(--ink)',
      borderRadius: 999,
      padding: '14px 24px',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, u.quienesLink)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      margin: '24px 0 0'
    }
  }, u.actualizado, " ", x.actualizado)));
}
function HeroMinimal({
  onDonate,
  onOpen,
  lang
}) {
  const d = window.nexosContent(lang);
  const u = d.ui;
  const x = window.NEXOS_FIXTURE;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...A.wrap,
      paddingTop: 'clamp(64px,10vw,132px)',
      paddingBottom: 'clamp(38px,5vw,60px)',
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: A.eyebrow
  }, d.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(38px,7vw,84px)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-2.6px',
      color: 'var(--ink)',
      margin: '18px 0 0',
      textWrap: 'balance'
    },
    dangerouslySetInnerHTML: {
      __html: d.hero.tituloHtml
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(16px,1.8vw,20px)',
      lineHeight: 1.65,
      color: 'var(--muted)',
      maxWidth: 620,
      margin: '26px 0 0'
    }
  }, d.hero.bajada), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      margin: '34px 0 0',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onDonate,
    style: {
      width: 'auto',
      padding: '16px 30px',
      fontSize: 17,
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      onOpen('quienes');
    },
    style: {
      background: 'none',
      border: '1px solid var(--line)',
      color: 'var(--ink)',
      borderRadius: 999,
      padding: '15px 26px',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, u.quienesLink))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...A.wrap,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px 56px',
      padding: '22px 26px'
    }
  }, [[u.recaudado, '≈ US$ ' + x.totalUSD], [u.ejecutado, '≈ US$ ' + x.totalEgresos], [u.donaciones, x.totalDonaciones]].map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p[0]
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px,2.2vw,27px)',
        fontWeight: 700,
        color: 'var(--ink)',
        letterSpacing: '-.8px'
      }
    }, p[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: .8,
        textTransform: 'uppercase',
        color: 'var(--muted)',
        marginTop: 6
      }
    }, p[0]));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      alignSelf: 'flex-end',
      fontSize: 11.5,
      color: 'var(--muted)'
    }
  }, u.actualizado, " ", x.actualizado))));
}
function PhotoStrip({
  onZoom,
  lang
}) {
  const d = window.nexosContent(lang);
  const u = d.ui;
  const ref = React.useRef(null);
  function nudge(dir) {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.round(el.clientWidth * .7),
      behavior: 'smooth'
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(34px,5vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, u.enTerreno), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, u.fotosPor), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      nudge(-1);
    },
    "aria-label": u.anterior,
    className: "strip-nav"
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      nudge(1);
    },
    "aria-label": u.siguiente,
    className: "strip-nav"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "strip"
  }, d.fotos.map(function (p, i) {
    return /*#__PURE__*/React.createElement("figure", {
      key: p.src,
      className: "strip-item",
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function () {
        onZoom(i);
      },
      className: "zoomable",
      "aria-label": u.ampliar,
      style: {
        display: 'block',
        width: '100%',
        height: 300,
        padding: 0,
        border: 'none',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'zoom-in',
        background: 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })));
  })));
}
function FaqRow({
  q,
  a,
  open
}) {
  const [o, setO] = React.useState(!!open);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setO(!o);
    },
    "aria-expanded": o,
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '16px 0',
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 800,
      transform: 'rotate(' + (o ? 90 : 0) + 'deg)',
      transition: 'transform .15s'
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      flex: 1,
      color: 'var(--ink)'
    }
  }, q)), o ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px 28px',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--muted)'
    }
  }, a) : null);
}
function Section({
  id,
  eyebrow,
  titulo,
  lead,
  leadWide,
  children,
  tone
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: 'clamp(56px,8vw,96px) 0',
      background: tone === 'soft' ? 'var(--soft)' : tone === 'line' ? 'var(--line)' : 'transparent',
      borderTop: tone ? '1px solid var(--line)' : 'none',
      borderBottom: tone ? '1px solid var(--line)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: A.wrap
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: A.eyebrow
  }, eyebrow) : null, titulo ? /*#__PURE__*/React.createElement("h2", {
    style: A.h2
  }, titulo) : null, lead ? /*#__PURE__*/React.createElement("p", {
    style: leadWide ? {
      ...A.lead,
      maxWidth: 'none',
      whiteSpace: 'nowrap',
      overflowX: 'auto'
    } : A.lead
  }, lead) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, children)));
}
function EditorialLanding() {
  const x = window.NEXOS_FIXTURE;
  const [lang, setLang] = React.useState(function () {
    try {
      return localStorage.getItem('nexos.lang') === 'EN' ? 'EN' : 'ES';
    } catch (e) {
      return 'ES';
    }
  });
  React.useEffect(function () {
    try {
      localStorage.setItem('nexos.lang', lang);
    } catch (e) {}
    document.documentElement.lang = lang === 'EN' ? 'en' : 'es';
  }, [lang]);
  const d = window.nexosContent(lang);
  const u = d.ui;
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const pal = t.palette || TWEAK_DEFAULTS.palette;
  React.useEffect(function () {
    const r = document.documentElement.style;
    r.setProperty('--accent', pal[0]);
    r.setProperty('--blue', pal[1]);
    r.setProperty('--ink', pal[2]);
    r.setProperty('--peach', pal[3]);
    r.setProperty('--nexos-coral', pal[0]);
    r.setProperty('--nexos-blue', pal[1]);
    r.setProperty('--blue-lt', 'color-mix(in oklab, ' + pal[1] + ' 55%, white)');
    r.setProperty('--muted', 'color-mix(in oklab, ' + pal[2] + ' 55%, white)');
    r.setProperty('--line', 'color-mix(in oklab, ' + pal[2] + ' 8%, white)');
    r.setProperty('--soft', 'color-mix(in oklab, ' + pal[2] + ' 2%, white)');
    r.setProperty('--overlay-scrim', 'color-mix(in oklab, ' + pal[2] + ' 55%, transparent)');
    r.setProperty('--row-hover', 'color-mix(in oklab, ' + pal[0] + ' 7%, white)');
    r.setProperty('--shadow-cta', '0 14px 30px color-mix(in oklab, ' + pal[0] + ' 34%, transparent)');
    r.setProperty('--shadow-float', '0 12px 28px color-mix(in oklab, ' + pal[0] + ' 42%, transparent)');
  }, [pal.join()]);
  const scrimBase = t.overlay === 'Coral' ? pal[0] : t.overlay === 'Negro' ? '#0c0c0e' : pal[2];
  const [drawer, setDrawer] = React.useState(null);
  const [donar, setDonar] = React.useState(false);
  const [zoom, setZoom] = React.useState(null);
  const [q, setQ] = React.useState('');
  const [met, setMet] = React.useState('');
  const busca = q.trim();
  const listos = busca.length >= 3;
  const encontrados = listos ? x.movimientos.filter(function (m) {
    if (m.donante.toLowerCase().indexOf(busca.toLowerCase()) === -1) return false;
    if (met && m.metodo !== met) return false;
    return true;
  }) : [];
  const TOPE = 25;
  const rows = encontrados.slice(0, TOPE);
  return /*#__PURE__*/React.createElement("div", {
    id: "top",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    onOpen: setDrawer,
    onDonate: function () {
      setDonar(true);
    },
    lang: lang,
    setLang: setLang,
    forceSolid: t.portada !== 'Foto'
  }), t.portada === 'Sobrio' ? /*#__PURE__*/React.createElement(HeroSobrio, {
    lang: lang,
    onDonate: function () {
      setDonar(true);
    },
    onOpen: setDrawer
  }) : t.portada === 'Centrado' ? /*#__PURE__*/React.createElement(HeroCentrado, {
    lang: lang,
    onDonate: function () {
      setDonar(true);
    },
    onOpen: setDrawer
  }) : t.portada === 'Titular' ? /*#__PURE__*/React.createElement(HeroMinimal, {
    lang: lang,
    onDonate: function () {
      setDonar(true);
    },
    onOpen: setDrawer
  }) : /*#__PURE__*/React.createElement(Hero, {
    lang: lang,
    onDonate: function () {
      setDonar(true);
    },
    onOpen: setDrawer,
    scrimBase: scrimBase
  }), /*#__PURE__*/React.createElement(Section, {
    id: "quienes",
    tone: "soft",
    titulo: d.ventanas.quienes.titulo,
    lead: u.seccionesLead
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 14
    }
  }, ['quienes', 'evidencia', 'aliados', 'faq'].map(function (id) {
    const c = [id, id === 'quienes' ? d.ventanas.quienes.eyebrow : d.ventanas[id].titulo, d.ventanas[id].resumen || ''];
    return /*#__PURE__*/React.createElement("button", {
      key: c[0],
      onClick: function () {
        setDrawer(c[0]);
      },
      className: "opener",
      style: {
        textAlign: 'left',
        background: '#fff',
        border: 'var(--border-card)',
        boxShadow: 'var(--shadow-card)',
        borderRadius: 'var(--radius-card)',
        padding: '20px 20px 18px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minHeight: 150
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, c[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--muted)',
        lineHeight: 1.55
      }
    }, c[2]), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 'auto',
        color: 'var(--accent)',
        fontWeight: 800,
        fontSize: 13
      }
    }, u.abrirVentana));
  })), /*#__PURE__*/React.createElement(PhotoStrip, {
    onZoom: setZoom,
    lang: lang
  })), /*#__PURE__*/React.createElement(Section, {
    id: "cifras",
    tone: "line",
    titulo: u.cifrasTitulo,
    lead: x.notaTasas,
    leadWide: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    tone: "income",
    label: u.totalRecaudado,
    value: '≈ US$ ' + x.totalUSD
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "expense",
    label: u.totalEgresos,
    value: '≈ US$ ' + x.totalEgresos
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "balance",
    label: u.saldo,
    value: '≈ US$ ' + x.saldo
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))',
      gap: 14
    }
  }, x.porMoneda.map(function (m) {
    return /*#__PURE__*/React.createElement(CurrencyCard, _extends({
      key: m.moneda
    }, m));
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "donar",
    tone: "soft",
    titulo: u.donarTitulo
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    n: 1,
    title: u.paso1t,
    html: u.paso1
  }), /*#__PURE__*/React.createElement(StepCard, {
    n: 2,
    title: u.paso2t,
    html: u.paso2
  }), /*#__PURE__*/React.createElement(StepCard, {
    n: 3,
    title: u.paso3t,
    html: u.paso3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 18,
      alignItems: 'center',
      marginTop: 20
    },
    className: "cta-row"
  }, /*#__PURE__*/React.createElement(Notice, null, "\u26A0\uFE0F ", d.aviso), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: function () {
      setDonar(true);
    },
    style: {
      width: 'auto',
      padding: '16px 28px',
      fontSize: 16
    }
  }, u.donarAhora))), /*#__PURE__*/React.createElement(Section, {
    id: "evidencia",
    tone: "line",
    titulo: d.ventanas.evidencia.titulo,
    lead: u.evidenciaLead
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 'var(--gap-grid)'
    },
    className: "ev-grid"
  }, d.fotos.slice(0, 2).map(function (p, i) {
    return /*#__PURE__*/React.createElement("figure", {
      key: p.src,
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function () {
        setZoom(i);
      },
      className: "zoomable",
      "aria-label": u.ampliar,
      style: {
        display: 'block',
        width: '100%',
        aspectRatio: '4/3',
        padding: 0,
        border: 'none',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'zoom-in',
        background: 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })));
  }), x.enlaceFacturas ? /*#__PURE__*/React.createElement("a", {
    href: x.enlaceFacturas,
    target: "_blank",
    rel: "noopener",
    className: "ev-link",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textDecoration: 'none',
      background: '#fff',
      border: '1px solid var(--line)',
      borderTop: '3px solid var(--blue)',
      borderRadius: 'var(--radius-md)',
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, u.facturas), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--blue)',
      letterSpacing: '-.4px'
    }
  }, u.verFacturas), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)',
      lineHeight: 1.5
    }
  }, u.facturasSub)) : null, x.enlaceFotos ? /*#__PURE__*/React.createElement("a", {
    href: x.enlaceFotos,
    target: "_blank",
    rel: "noopener",
    className: "ev-link",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textDecoration: 'none',
      background: '#fff',
      border: '1px solid var(--line)',
      borderTop: '3px solid var(--accent)',
      borderRadius: 'var(--radius-md)',
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, u.fotosLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--accent)',
      letterSpacing: '-.4px'
    }
  }, u.verFotos), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--muted)',
      lineHeight: 1.5
    }
  }, u.fotosSub)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'center',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDrawer('evidencia');
    },
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      color: 'var(--accent)',
      fontWeight: 800,
      fontSize: 13.5,
      cursor: 'pointer'
    }
  }, u.comoVerificamos), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'var(--muted)'
    }
  }, u.fotosCredito, d.credito))), /*#__PURE__*/React.createElement(Section, {
    id: "reporte",
    tone: "soft",
    titulo: u.reporteTitulo,
    lead: u.reporteLead
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: u.buscar,
    value: q,
    onChange: function (e) {
      setQ(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(FilterSelect, {
    placeholder: u.todosMetodos,
    options: x.metodos,
    value: met,
    onChange: function (e) {
      setMet(e.target.value);
    }
  })), !listos ? /*#__PURE__*/React.createElement(EmptyState, null, u.vacio) : encontrados.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, null, u.sinResultados) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    pad: "6px 8px"
  }, /*#__PURE__*/React.createElement(DonationsTable, {
    rows: rows
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      marginTop: 12,
      textAlign: 'center'
    }
  }, encontrados.length > TOPE ? u.mostrando(TOPE, encontrados.length) : u.resultados(encontrados.length))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      margin: '38px 0 14px'
    }
  }, u.egresosTitulo), x.egresos.map(function (c, i) {
    return /*#__PURE__*/React.createElement(ExpenseCategory, {
      key: c.categoria,
      name: c.categoria,
      description: c.descripcion,
      total: c.total,
      pct: c.pct,
      items: c.items
    });
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'rgba(255,255,255,.7)',
      padding: '54px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: A.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 58,
      height: 57,
      borderRadius: '50%',
      background: '#fff',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/logo-nexos-mark.png",
    alt: "",
    style: {
      width: 52,
      height: 45,
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: 3.4,
      color: '#fff'
    }
  }, "NEXOS")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      margin: '14px 0 0',
      maxWidth: 460
    }
  }, lang === 'EN' && x.taglineEn ? x.taglineEn : x.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '18px 26px',
      margin: '30px 0 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.16)'
    }
  }, d.nav.map(function (n) {
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: '#' + n.id,
      style: {
        color: 'rgba(255,255,255,.7)',
        textDecoration: 'none',
        fontSize: 13.5
      }
    }, n.label);
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/somos.nexosve",
    style: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: 13.5,
      fontWeight: 700,
      marginLeft: 'auto'
    }
  }, "@somos.nexosve"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/isiselinor/",
    style: {
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 12
    }
  }, u.creditoSistema)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 30,
      padding: 12,
      display: 'none',
      background: 'rgba(255,255,255,.94)',
      borderTop: '1px solid var(--line)',
      backdropFilter: 'blur(10px)'
    },
    className: "mobile-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: function () {
      setDonar(true);
    },
    style: {
      width: '100%'
    }
  }, u.donarAhora)), /*#__PURE__*/React.createElement(Lightbox, {
    index: zoom,
    fotos: d.fotos,
    credito: d.credito,
    onClose: function () {
      setZoom(null);
    },
    onIndex: setZoom
  }), t.subventana === 'Página' ? /*#__PURE__*/React.createElement(SectionPage, {
    lang: lang,
    id: drawer,
    onClose: function () {
      setDrawer(null);
    },
    onOpen: setDrawer,
    onDonate: function () {
      setDonar(true);
    }
  }) : /*#__PURE__*/React.createElement(SectionWindow, {
    lang: lang,
    variant: t.winHeader === 'Coral' ? 'grafica' : 'editorial',
    id: drawer,
    onClose: function () {
      setDrawer(null);
    },
    onOpen: setDrawer,
    onDonate: function () {
      setDonar(true);
    }
  }), /*#__PURE__*/React.createElement(DonateModal, {
    open: donar,
    onClose: function () {
      setDonar(false);
    },
    notice: /*#__PURE__*/React.createElement("span", null, u.avisoModal[0], /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--accent)'
      }
    }, u.avisoModal[1]), u.avisoModal[2])
  }, x.metodosDonacion.map(function (m) {
    return /*#__PURE__*/React.createElement(PaymentMethod, {
      key: m.metodo,
      name: m.metodo,
      fields: m.campos
    });
  })), /*#__PURE__*/React.createElement(window.TweaksPanel, null, /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Paleta"
  }), /*#__PURE__*/React.createElement(window.TweakColor, {
    label: "Colores de marca",
    value: pal,
    options: [["#e85d45", "#2b4fd1", "#1c2340", "#f7e3dc"], ["#fb6a4e", "#125edb", "#141c33", "#fde7e0"], ["#d2542f", "#23407f", "#211a16", "#f4e4d6"], ["#e85d45", "#12306b", "#0e1a33", "#e8eef9"], ["#f04e28", "#0b2a6b", "#101014", "#ffede6"]],
    onChange: function (v) {
      setTweak('palette', v);
    }
  }), /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Portada"
  }), /*#__PURE__*/React.createElement(window.TweakSelect, {
    label: "Encabezado",
    value: t.portada,
    options: ['Sobrio', 'Centrado', 'Titular', 'Foto'],
    onChange: function (v) {
      setTweak('portada', v);
    }
  }), t.portada === 'Foto' ? /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Tono del degradado",
    value: t.overlay,
    options: ['Navy', 'Coral', 'Negro'],
    onChange: function (v) {
      setTweak('overlay', v);
    }
  }) : null, /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Sub-ventanas"
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Formato",
    value: t.subventana,
    options: ['Página', 'Dos columnas'],
    onChange: function (v) {
      setTweak('subventana', v);
    }
  }), t.subventana === 'Dos columnas' ? /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Cabecera",
    value: t.winHeader,
    options: ['Navy', 'Coral'],
    onChange: function (v) {
      setTweak('winHeader', v);
    }
  }) : null));
}
Object.assign(window, {
  EditorialLanding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/EditorialLanding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/GraphicLanding.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NS = window.NEXOSDesignSystem_0519e6;
const {
  Button,
  Card,
  Notice,
  CurrencyCard,
  DonationsTable,
  ExpenseCategory,
  EmptyState,
  SearchInput,
  FilterSelect,
  DonateModal,
  PaymentMethod,
  DriveLinkButton,
  CopyButton
} = NS;
const G = {
  wrap: {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 26px'
  },
  label: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: 1.6,
    textTransform: 'uppercase'
  },
  display: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    letterSpacing: '-2px',
    lineHeight: .98
  }
};
function TopBar({
  onOpen,
  onDonate,
  lang,
  setLang
}) {
  const d = window.NEXOS_LANDING;
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 25,
      background: 'var(--ink)',
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...G.wrap,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      height: 64
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/logo-nexos-mark.png",
    alt: "",
    style: {
      height: 28,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...G.display,
      fontSize: 19,
      letterSpacing: 3.4,
      color: '#fff'
    }
  }, "NEXOS")), /*#__PURE__*/React.createElement("nav", {
    className: "navlinks",
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, d.nav.map(function (n) {
    const isWin = ['quienes', 'aliados', 'faq'].indexOf(n.id) > -1;
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: '#' + n.id,
      onClick: isWin ? function (e) {
        e.preventDefault();
        onOpen(n.id);
      } : undefined,
      className: "glink",
      style: {
        fontSize: 13,
        fontWeight: 700,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: 999
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("button", {
    className: "menubtn",
    "aria-label": "Men\xFA",
    onClick: function () {
      setMenu(!menu);
    },
    style: {
      display: 'none',
      background: 'rgba(255,255,255,.18)',
      border: '1px solid rgba(255,255,255,.5)',
      color: '#fff',
      borderRadius: 999,
      width: 40,
      height: 38,
      marginLeft: 'auto',
      fontSize: 15,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, menu ? '×' : '☰'), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLang(lang === 'ES' ? 'EN' : 'ES');
    },
    style: {
      background: 'rgba(255,255,255,.18)',
      border: '1px solid rgba(255,255,255,.5)',
      color: '#fff',
      borderRadius: 999,
      padding: '7px 12px',
      fontSize: 12,
      fontWeight: 800,
      cursor: 'pointer'
    }
  }, lang === 'ES' ? 'EN' : 'ES'), /*#__PURE__*/React.createElement("button", {
    onClick: onDonate,
    style: {
      background: 'var(--ink)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      padding: '11px 20px',
      fontSize: 13.5,
      fontWeight: 800,
      cursor: 'pointer'
    }
  }, "Donar \uD83D\uDC99")), menu ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      borderTop: '1px solid rgba(255,255,255,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...G.wrap,
      display: 'grid',
      padding: '6px 26px 16px'
    }
  }, d.nav.map(function (n) {
    const isWin = ['quienes', 'aliados', 'faq'].indexOf(n.id) > -1;
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: '#' + n.id,
      onClick: function (e) {
        if (isWin) {
          e.preventDefault();
          onOpen(n.id);
        }
        setMenu(false);
      },
      style: {
        padding: '14px 0',
        borderBottom: '1px solid rgba(255,255,255,.28)',
        fontSize: 16,
        fontWeight: 800,
        color: '#fff',
        textDecoration: 'none'
      }
    }, n.label);
  }))) : null);
}
function Hero({
  onDonate,
  onOpen
}) {
  const d = window.NEXOS_LANDING;
  const x = window.NEXOS_FIXTURE;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      paddingTop: 'clamp(40px,6vw,72px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...G.wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)',
      gap: 44,
      alignItems: 'center'
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...G.label,
      color: 'rgba(255,255,255,.75)'
    }
  }, d.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...G.display,
      fontSize: 'clamp(40px,6.6vw,80px)',
      color: '#fff',
      margin: '14px 0 0',
      textWrap: 'balance'
    }
  }, "Reconstruyendo los ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, "nexos rotos"), " de nuestro pa\xEDs."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.5vw,18px)',
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.9)',
      maxWidth: 540,
      margin: '20px 0 0'
    }
  }, d.hero.bajada), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      margin: '30px 0 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDonate,
    style: {
      background: '#fff',
      color: 'var(--accent)',
      border: 'none',
      borderRadius: 999,
      padding: '17px 32px',
      fontSize: 17,
      fontWeight: 800,
      cursor: 'pointer',
      boxShadow: '0 14px 30px rgba(28,35,64,.24)'
    }
  }, "\uD83D\uDC99 Donar ahora"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      onOpen('quienes');
    },
    style: {
      background: 'transparent',
      color: '#fff',
      border: '2px solid rgba(255,255,255,.6)',
      borderRadius: 999,
      padding: '15px 28px',
      fontSize: 15.5,
      fontWeight: 800,
      cursor: 'pointer'
    }
  }, "Qui\xE9nes somos \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      overflow: 'hidden',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-rescate-edificio.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -10,
      bottom: 18,
      background: 'var(--ink)',
      color: '#fff',
      borderRadius: 999,
      padding: '10px 18px',
      fontSize: 12.5,
      fontWeight: 700
    }
  }, d.hero.credito))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      marginTop: 'clamp(34px,5vw,60px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...G.wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
      gap: 0
    }
  }, [['Recaudado', '≈ US$ ' + x.totalUSD], ['Ejecutado', '≈ US$ ' + x.totalEgresos], ['Donaciones', x.totalDonaciones]].map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: p[0],
      style: {
        padding: '26px 20px',
        borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,.14)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...G.display,
        fontSize: 'clamp(24px,2.8vw,34px)',
        color: '#fff',
        letterSpacing: '-1px'
      }
    }, p[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        ...G.label,
        color: 'var(--blue-lt)',
        marginTop: 8
      }
    }, p[0]));
  }))));
}
function GFaq({
  q,
  a,
  open
}) {
  const [o, setO] = React.useState(!!open);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setO(!o);
    },
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '16px 0',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 15.5,
      flex: 1
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 800,
      fontSize: 20
    }
  }, o ? '–' : '+')), o ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px',
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'var(--muted)'
    }
  }, a) : null);
}
function Band({
  id,
  children,
  bg,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg || '#fff',
      padding: 'clamp(52px,7vw,88px) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: G.wrap
  }, children));
}
function Heading({
  label,
  children,
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...G.label,
      color: light ? 'var(--blue-lt)' : 'var(--accent)'
    }
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...G.display,
      fontSize: 'clamp(28px,4.4vw,52px)',
      color: light ? '#fff' : 'var(--ink)',
      margin: '12px 0 0',
      textWrap: 'balance'
    }
  }, children));
}
function GraphicLanding() {
  const x = window.NEXOS_FIXTURE;
  const d = window.NEXOS_LANDING;
  const [win, setWin] = React.useState(null);
  const [donar, setDonar] = React.useState(false);
  const [zoom, setZoom] = React.useState(null);
  const onZoom = setZoom;
  const [lang, setLang] = React.useState('ES');
  const [q, setQ] = React.useState('');
  const [met, setMet] = React.useState('');
  const busca = q.trim();
  const listos = busca.length >= 3;
  const encontrados = listos ? x.movimientos.filter(function (m) {
    if (m.donante.toLowerCase().indexOf(busca.toLowerCase()) === -1) return false;
    if (met && m.metodo !== met) return false;
    return true;
  }) : [];
  const rows = encontrados.slice(0, 25);
  const openers = [{
    id: 'quienes',
    t: 'Nuestra misión',
    s: 'El puente entre quien aporta y quien reconstruye.'
  }, {
    id: 'evidencia',
    t: 'Evidencia',
    s: 'Facturas y fotos de cada compra y entrega.'
  }, {
    id: 'aliados',
    t: 'Aliados y voluntarios',
    s: 'Suma tu tiempo, tu oficio o tu transporte.'
  }, {
    id: 'faq',
    t: 'Preguntas frecuentes',
    s: 'Las dudas antes de donar, sin vueltas.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    id: "top"
  }, /*#__PURE__*/React.createElement(TopBar, {
    onOpen: setWin,
    onDonate: function () {
      setDonar(true);
    },
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement(Hero, {
    onDonate: function () {
      setDonar(true);
    },
    onOpen: setWin
  }), /*#__PURE__*/React.createElement(Band, {
    id: "quienes"
  }, /*#__PURE__*/React.createElement(Heading, {
    label: "Explora"
  }, "Qui\xE9nes somos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
      gap: 16
    }
  }, openers.map(function (o, i) {
    const dark = i % 2 === 1;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      onClick: function () {
        setWin(o.id);
      },
      className: "opener",
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        border: 'none',
        borderRadius: 20,
        padding: '24px 22px',
        minHeight: 186,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        background: dark ? 'var(--ink)' : 'var(--soft)',
        color: dark ? '#fff' : 'var(--ink)',
        border: dark ? 'none' : '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...G.display,
        fontSize: 24,
        letterSpacing: '-.6px'
      }
    }, o.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        lineHeight: 1.55,
        opacity: .82
      }
    }, o.s), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 'auto',
        fontWeight: 800,
        fontSize: 13.5,
        color: dark ? '#fff' : 'var(--accent)'
      }
    }, "Abrir ventana \u2192"));
  }))), /*#__PURE__*/React.createElement(Band, {
    id: "donar",
    bg: "var(--soft)",
    style: {
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    label: "C\xF3mo donar"
  }, "C\xF3mo donar en 3 pasos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
      gap: 16
    }
  }, [['01', 'Elige método', 'Zelle, pago móvil, transferencia en Argentina o USDT.'], ['02', 'Copia y transfiere', 'Copia los datos con un toque y hazlo desde tu banco.'], ['03', 'Cuida el asunto', 'No menciones Venezuela ni la causa. Tu nombre basta 💙']].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s[0],
      style: {
        background: '#fff',
        border: '2px solid var(--ink)',
        borderRadius: 18,
        padding: '22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...G.display,
        fontSize: 44,
        color: 'var(--accent)',
        letterSpacing: '-2px'
      }
    }, s[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 17,
        marginTop: 10
      }
    }, s[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--muted)',
        marginTop: 6,
        lineHeight: 1.55
      }
    }, s[2]));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 18,
      alignItems: 'center',
      marginTop: 22
    },
    className: "cta-row"
  }, /*#__PURE__*/React.createElement(Notice, null, "\u26A0\uFE0F ", d.aviso), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDonar(true);
    },
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      padding: '17px 30px',
      fontSize: 16.5,
      fontWeight: 800,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-cta)'
    }
  }, "\uD83D\uDC99 Donar ahora"))), /*#__PURE__*/React.createElement(Band, {
    id: "cifras",
    bg: "var(--ink)"
  }, /*#__PURE__*/React.createElement(Heading, {
    label: "Transparencia",
    light: true
  }, "La ayuda en n\xFAmeros"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 2,
      background: 'rgba(255,255,255,.14)',
      borderRadius: 18,
      overflow: 'hidden'
    }
  }, [['Total recaudado', '≈ US$ ' + x.totalUSD, 'var(--accent)'], ['Total egresos', '≈ US$ ' + x.totalEgresos, 'var(--blue-lt)'], ['Saldo disponible', '≈ US$ ' + x.saldo, '#fff']].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s[0],
      style: {
        background: 'var(--ink)',
        padding: '26px 22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...G.label,
        color: 'var(--blue-lt)'
      }
    }, s[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        ...G.display,
        fontSize: 'clamp(26px,3.2vw,38px)',
        color: s[2],
        marginTop: 10,
        letterSpacing: '-1.4px'
      }
    }, s[1]));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.55)',
      margin: '14px 0 26px'
    }
  }, x.notaTasas), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 14
    }
  }, x.porMoneda.map(function (m) {
    return /*#__PURE__*/React.createElement(CurrencyCard, _extends({
      key: m.moneda
    }, m));
  }))), /*#__PURE__*/React.createElement(Band, {
    id: "evidencia"
  }, /*#__PURE__*/React.createElement(Heading, {
    label: "Todo verificable"
  }, "Evidencia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 10
    },
    className: "ev-mosaic"
  }, d.fotos.map(function (p, i) {
    const big = i === 0;
    return /*#__PURE__*/React.createElement("button", {
      key: p.src,
      onClick: function () {
        onZoom(i);
      },
      className: "zoomable",
      "aria-label": "Ampliar foto",
      style: {
        gridColumn: big ? 'span 2' : 'span 1',
        gridRow: big ? 'span 2' : 'span 1',
        aspectRatio: big ? '1/1' : '1/1',
        padding: 0,
        border: 'none',
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'zoom-in',
        background: 'none',
        display: 'block',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      alignItems: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--muted)',
      marginRight: 'auto'
    }
  }, "Fotos: ", d.credito), x.enlaceFacturas ? /*#__PURE__*/React.createElement(DriveLinkButton, {
    tone: "blue",
    href: x.enlaceFacturas
  }, "\uD83D\uDCC4 Ver facturas de compras") : null, x.enlaceFotos ? /*#__PURE__*/React.createElement(DriveLinkButton, {
    tone: "coral",
    href: x.enlaceFotos
  }, "\uD83D\uDCF7 Ver fotos de las donaciones") : null)), /*#__PURE__*/React.createElement(Band, {
    id: "reporte",
    bg: "var(--peach)"
  }, /*#__PURE__*/React.createElement(Heading, {
    label: "Reporte en vivo"
  }, "\xBFYa donaste? Busca tu nombre"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "\uD83D\uDD0E Escribe tu nombre\u2026",
    value: q,
    onChange: function (e) {
      setQ(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(FilterSelect, {
    placeholder: "Todos los m\xE9todos",
    options: x.metodos,
    value: met,
    onChange: function (e) {
      setMet(e.target.value);
    }
  })), !listos ? /*#__PURE__*/React.createElement(EmptyState, {
    style: {
      background: 'rgba(255,255,255,.6)'
    }
  }, "\uD83D\uDD0E Escribe al menos 3 letras de tu nombre para ver tus donaciones.") : encontrados.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    style: {
      background: 'rgba(255,255,255,.6)'
    }
  }, "No encontramos donaciones con ese nombre. Revisa c\xF3mo est\xE1 escrito.") : /*#__PURE__*/React.createElement(Card, {
    pad: "6px 10px"
  }, /*#__PURE__*/React.createElement(DonationsTable, {
    rows: rows
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...G.display,
      fontSize: 24,
      margin: '40px 0 16px',
      letterSpacing: '-.8px'
    }
  }, "Egresos por categor\xEDa"), x.egresos.map(function (c, i) {
    return /*#__PURE__*/React.createElement(ExpenseCategory, {
      key: c.categoria,
      name: c.categoria,
      description: c.descripcion,
      total: c.total,
      pct: c.pct,
      items: c.items
    });
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      padding: '52px 0 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...G.wrap,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 30,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/logo-nexos-mark.png",
    alt: "",
    style: {
      height: 30,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...G.display,
      fontSize: 19,
      letterSpacing: 3.4
    }
  }, "NEXOS")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.7,
      margin: '14px 0 0',
      color: 'rgba(255,255,255,.9)'
    }
  }, x.tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...G.label,
      color: 'rgba(255,255,255,.7)'
    }
  }, "Secciones"), d.nav.map(function (n) {
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: '#' + n.id,
      style: {
        color: '#fff',
        textDecoration: 'none'
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...G.label,
      color: 'rgba(255,255,255,.7)'
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/somos.nexosve",
    style: {
      color: '#fff',
      textDecoration: 'none'
    }
  }, "@somos.nexosve"), /*#__PURE__*/React.createElement("span", null, "www.somos.nexosve"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/isiselinor/",
    style: {
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 12
    }
  }, "Sistema creado por Isis Elinor"))))), /*#__PURE__*/React.createElement("div", {
    className: "mobile-cta",
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 30,
      padding: 12,
      display: 'none',
      background: '#fff',
      borderTop: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDonar(true);
    },
    style: {
      width: '100%',
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      padding: '16px',
      fontSize: 16.5,
      fontWeight: 800
    }
  }, "\uD83D\uDC99 Donar ahora")), /*#__PURE__*/React.createElement(Lightbox, {
    index: zoom,
    fotos: d.fotos,
    credito: d.credito,
    onClose: function () {
      setZoom(null);
    },
    onIndex: setZoom
  }), /*#__PURE__*/React.createElement(SectionWindow, {
    variant: "grafica",
    id: win,
    onClose: function () {
      setWin(null);
    },
    onOpen: setWin,
    onDonate: function () {
      setDonar(true);
    }
  }), /*#__PURE__*/React.createElement(DonateModal, {
    open: donar,
    onClose: function () {
      setDonar(false);
    },
    notice: /*#__PURE__*/React.createElement("span", null, "\u26A0\uFE0F Al transferir, en el asunto ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--accent)'
      }
    }, "no menciones Venezuela"), " ni la causa. Con tu nombre o un \u201Cgracias\u201D basta \uD83D\uDC99")
  }, x.metodosDonacion.map(function (m) {
    return /*#__PURE__*/React.createElement(PaymentMethod, {
      key: m.metodo,
      name: m.metodo,
      fields: m.campos
    });
  })));
}
Object.assign(window, {
  GraphicLanding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/GraphicLanding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Lightbox.jsx
try { (() => {
/* Visor de fotos a pantalla completa con navegación. */
function Lightbox({
  index,
  fotos,
  credito,
  onClose,
  onIndex
}) {
  React.useEffect(function () {
    if (index == null) return;
    function k(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % fotos.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + fotos.length) % fotos.length);
    }
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return function () {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = prev;
    };
  }, [index, fotos.length, onClose, onIndex]);
  if (index == null) return null;
  const nav = {
    background: 'rgba(255,255,255,.14)',
    border: '1px solid rgba(255,255,255,.4)',
    color: '#fff',
    borderRadius: 999,
    width: 44,
    height: 44,
    fontSize: 17,
    cursor: 'pointer',
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "lb-root",
    onClick: function (e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: '#0c0e16',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 20px',
      color: 'rgba(255,255,255,.75)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", null, index + 1, " / ", fotos.length), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "Foto: ", credito), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      ...nav,
      width: 38,
      height: 38,
      fontSize: 19
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '0 16px 26px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      onIndex((index - 1 + fotos.length) % fotos.length);
    },
    "aria-label": "Anterior",
    style: nav
  }, "\u2190"), /*#__PURE__*/React.createElement("img", {
    className: "lb-img",
    src: fotos[index].src,
    alt: "",
    style: {
      flex: 1,
      minWidth: 0,
      maxHeight: '100%',
      objectFit: 'contain',
      borderRadius: 10,
      display: 'block',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      onIndex((index + 1) % fotos.length);
    },
    "aria-label": "Siguiente",
    style: nav
  }, "\u2192")));
}
Object.assign(window, {
  Lightbox
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Lightbox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SectionPage.jsx
try { (() => {
/* Sub-ventana alternativa: toma toda la pantalla y se lee como una página propia (una sola columna). */
const NSP = window.NEXOSDesignSystem_0519e6;
function SectionPage({
  id,
  onClose,
  onOpen,
  onDonate,
  lang
}) {
  const {
    DriveLinkButton,
    Button
  } = NSP;
  const d = window.nexosContent(lang);
  const u = d.ui;
  const x = window.NEXOS_FIXTURE;
  const v = id ? d.ventanas[id] : null;
  const scroller = React.useRef(null);
  React.useEffect(function () {
    if (!id) return;
    function k(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (scroller.current) scroller.current.scrollTop = 0;
    return function () {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = prev;
    };
  }, [id, onClose]);
  if (!v) return null;
  const otras = Object.keys(d.ventanas).filter(function (k) {
    return k !== id;
  });
  const col = {
    maxWidth: 720,
    margin: '0 auto',
    padding: '0 24px'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "sp-root",
    ref: scroller,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: '#fff',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 3,
      background: 'rgba(255,255,255,.94)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '0 24px',
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-nexos-mark.png",
    alt: "",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, v.titulo), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: '1px solid var(--line)',
      borderRadius: 999,
      padding: '8px 16px',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, u.volver))), v.foto ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 'clamp(240px,38vh,380px)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: v.foto,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(28,35,64,.28), rgba(28,35,64,.82))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '0 0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1.6,
      textTransform: 'uppercase',
      color: '#ffb3a3'
    }
  }, v.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      letterSpacing: '-1.8px',
      fontSize: 'clamp(32px,5vw,58px)',
      color: '#fff',
      margin: '10px 0 0',
      lineHeight: 1.02
    }
  }, v.titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'rgba(255,255,255,.7)',
      marginTop: 10
    }
  }, u.fotoPor, d.credito)))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      padding: 'clamp(30px,5vw,52px) 24px 0'
    }
  }, (id === 'quienes' && (lang === 'EN' ? x.misionEn : x.mision) ? [lang === 'EN' ? x.misionEn : x.mision].concat((v.cuerpo || []).slice(1)) : v.cuerpo || []).map(function (p, i) {
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: 18,
        lineHeight: 1.85,
        color: 'var(--ink)',
        margin: i ? '22px 0 0' : 0
      },
      dangerouslySetInnerHTML: {
        __html: p
      }
    });
  })), v.datos ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '18px 40px',
      padding: '20px 0',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)'
    }
  }, v.datos.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 800,
        letterSpacing: .9,
        textTransform: 'uppercase',
        color: 'var(--muted)'
      }
    }, r.k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15.5,
        marginTop: 5
      }
    }, r.v));
  }))) : null, v.formas ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 12
    }
  }, v.formas.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.titulo,
      style: {
        borderTop: '2px solid var(--accent)',
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15.5
      }
    }, r.titulo), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--muted)',
        marginTop: 5,
        lineHeight: 1.6
      }
    }, r.detalle));
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "quietBlue",
    href: "https://instagram.com/somos.nexosve",
    target: "_blank",
    style: {
      marginTop: 22
    }
  }, u.escribirInstagram)) : null, v.items ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      marginTop: 30
    }
  }, v.items.map(function (it, i) {
    return /*#__PURE__*/React.createElement(SPFaq, {
      key: i,
      q: it.q,
      a: it.a,
      open: i === 0
    });
  })) : null, id === 'evidencia' ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      marginTop: 30,
      display: 'grid',
      gap: 12
    }
  }, x.enlaceFacturas ? /*#__PURE__*/React.createElement(DriveLinkButton, {
    tone: "blue",
    href: x.enlaceFacturas
  }, u.verFacturas) : null, x.enlaceFotos ? /*#__PURE__*/React.createElement(DriveLinkButton, {
    tone: "coral",
    href: x.enlaceFotos
  }, u.verFotos) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px,6vw,64px)',
      background: 'var(--peach)',
      padding: 'clamp(30px,4vw,46px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-.6px'
    }
  }, u.cadaAporte), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink)',
      marginTop: 8,
      lineHeight: 1.6
    }
  }, u.cadaAporteSub[0], /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)'
    }
  }, u.cadaAporteSub[1]), u.cadaAporteSub[2])), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      onClose();
      if (onDonate) onDonate();
    },
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      padding: '16px 30px',
      fontSize: 16.5,
      fontWeight: 800,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-cta)',
      whiteSpace: 'nowrap'
    }
  }, u.donarAhora))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      padding: 'clamp(34px,5vw,52px) 24px clamp(50px,7vw,80px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: .9,
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, u.seguirLeyendo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 0,
      marginTop: 12
    }
  }, otras.map(function (k) {
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function () {
        onOpen(k);
      },
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        background: 'none',
        border: 'none',
        borderTop: '1px solid var(--line)',
        padding: '18px 0',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 19,
        color: 'var(--ink)',
        letterSpacing: '-.4px'
      }
    }, d.ventanas[k].titulo), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)',
        fontWeight: 800
      }
    }, "\u2192"));
  }))));
}
function SPFaq({
  q,
  a,
  open
}) {
  const [o, setO] = React.useState(!!open);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setO(!o);
    },
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '18px 0',
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      flex: 1,
      color: 'var(--ink)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 800,
      fontSize: 21
    }
  }, o ? '–' : '+')), o ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 15.5,
      lineHeight: 1.75,
      color: 'var(--muted)'
    }
  }, a) : null);
}
Object.assign(window, {
  SectionPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SectionPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SectionWindow.jsx
try { (() => {
/* Ventana centrada de 960px a dos columnas — compartida por ambas direcciones de landing. */
const NSW = window.NEXOSDesignSystem_0519e6;
function SectionWindow({
  id,
  onClose,
  onOpen,
  onDonate,
  variant,
  lang
}) {
  const {
    DriveLinkButton,
    Button
  } = NSW;
  const d = window.nexosContent(lang);
  const u = d.ui;
  const x = window.NEXOS_FIXTURE;
  const v = id ? d.ventanas[id] : null;
  const dark = variant === 'grafica';
  React.useEffect(function () {
    if (!id) return;
    function k(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return function () {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = prev;
    };
  }, [id, onClose]);
  if (!v) return null;
  const otras = Object.keys(d.ventanas).filter(function (k) {
    return k !== id;
  });
  const headBg = dark ? 'var(--nexos-coral)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("div", {
    className: "sw-scrim",
    onClick: function (e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(28,35,64,.55)',
      backdropFilter: 'blur(10px) saturate(140%)',
      WebkitBackdropFilter: 'blur(10px) saturate(140%)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 'clamp(10px,2.5vh,30px) 16px',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-panel",
    style: {
      width: 'min(1240px,100%)',
      minHeight: 'min(880px, 92vh)',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      borderRadius: 24,
      overflow: 'hidden',
      boxShadow: '0 40px 100px rgba(28,35,64,.42)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: headBg,
      color: '#fff',
      padding: '30px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: 1.6,
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.8)' : 'var(--blue-lt)'
    }
  }, v.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      letterSpacing: '-1.2px',
      fontSize: 'clamp(30px,4vw,52px)',
      margin: '10px 0 0',
      lineHeight: 1.02
    }
  }, v.titulo)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: 'rgba(255,255,255,.16)',
      border: '1px solid rgba(255,255,255,.45)',
      color: '#fff',
      width: 38,
      height: 38,
      borderRadius: 999,
      fontSize: 19,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "sw-body",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.42fr) minmax(0,1fr)',
      gap: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 40px 44px'
    }
  }, (id === 'quienes' && x.mision ? [x.mision].concat((v.cuerpo || []).slice(1)) : v.cuerpo || []).map(function (p, i) {
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: 17,
        lineHeight: 1.8,
        color: 'var(--ink)',
        maxWidth: 640,
        margin: i ? '20px 0 0' : 0
      },
      dangerouslySetInnerHTML: {
        __html: p
      }
    });
  }), v.datos ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, v.datos.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 14,
        padding: '12px 0',
        borderTop: '1px dashed var(--line)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--muted)'
      }
    }, r.k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, r.v));
  })) : null, v.formas ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
      gap: 10,
      marginTop: 22
    }
  }, v.formas.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.titulo,
      style: {
        border: '1px solid var(--line)',
        borderLeft: '3px solid var(--accent)',
        borderRadius: 12,
        padding: '13px 15px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14.5
      }
    }, r.titulo), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--muted)',
        marginTop: 5,
        lineHeight: 1.5
      }
    }, r.detalle));
  })) : null, v.items ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, v.items.map(function (it, i) {
    return /*#__PURE__*/React.createElement(SWFaq, {
      key: i,
      q: it.q,
      a: it.a,
      open: i === 0
    });
  })) : null, id === 'evidencia' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      marginTop: 22
    }
  }, x.enlaceFacturas ? /*#__PURE__*/React.createElement(DriveLinkButton, {
    tone: "blue",
    href: x.enlaceFacturas
  }, "\uD83D\uDCC4 Ver facturas de compras") : null, x.enlaceFotos ? /*#__PURE__*/React.createElement(DriveLinkButton, {
    tone: "coral",
    href: x.enlaceFotos
  }, "\uD83D\uDCF7 Ver fotos de las donaciones") : null) : null, v.formas ? /*#__PURE__*/React.createElement(Button, {
    variant: "quietBlue",
    href: "https://instagram.com/somos.nexosve",
    target: "_blank",
    style: {
      marginTop: 18
    }
  }, "Escribirnos por Instagram") : null), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--soft)',
      borderLeft: '1px solid var(--line)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, v.foto ? /*#__PURE__*/React.createElement("img", {
    src: v.foto,
    alt: "",
    style: {
      width: '100%',
      height: 280,
      objectFit: 'cover',
      borderRadius: 16,
      display: 'block'
    }
  }) : null, v.galeria ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, v.galeria.map(function (g) {
    return /*#__PURE__*/React.createElement("img", {
      key: g,
      src: g,
      alt: "",
      style: {
        width: '100%',
        height: 96,
        objectFit: 'cover',
        borderRadius: 10,
        display: 'block'
      }
    });
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, [['Recaudado', '≈ US$ ' + x.totalUSD, 'var(--accent)'], ['Ejecutado', '≈ US$ ' + x.totalEgresos, 'var(--blue)']].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s[0],
      style: {
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 12,
        padding: '11px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: .8,
        textTransform: 'uppercase',
        color: 'var(--muted)'
      }
    }, s[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: s[2],
        marginTop: 5,
        letterSpacing: '-.4px'
      }
    }, s[1]));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--line)',
      borderRadius: 12,
      padding: '6px 12px 10px'
    }
  }, d.ficha.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 10,
        padding: '8px 0',
        borderTop: '1px solid var(--line)',
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--muted)'
      }
    }, r.k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, r.v));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--peach)',
      border: '1px solid var(--accent)',
      borderRadius: 10,
      padding: '9px 11px',
      fontSize: 11.5,
      lineHeight: 1.5
    }
  }, "\u26A0\uFE0F En el asunto ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)'
    }
  }, "no menciones Venezuela"), " ni la causa."), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      onClose();
      if (onDonate) onDonate();
    },
    style: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      padding: '14px',
      fontSize: 15,
      fontWeight: 800,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-cta)'
    }
  }, "\uD83D\uDC99 Donar ahora")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: .9,
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 8
    }
  }, "Otras ventanas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, otras.map(function (k) {
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function () {
        onOpen(k);
      },
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        textAlign: 'left',
        cursor: 'pointer',
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--blue)'
      }
    }, d.ventanas[k].titulo, " \u2192");
  })))))));
}
function SWFaq({
  q,
  a,
  open
}) {
  const [o, setO] = React.useState(!!open);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setO(!o);
    },
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '15px 0',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      flex: 1,
      color: 'var(--ink)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 800,
      fontSize: 19
    }
  }, o ? '–' : '+')), o ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--muted)'
    }
  }, a) : null);
}
Object.assign(window, {
  SectionWindow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SectionWindow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/content.js
try { (() => {
/* Contenido editorial de la landing, en ES y EN.
   Los textos de las secciones (Quiénes somos, Evidencia, Aliados, Preguntas) pueden
   sobreescribirse desde la hoja "Config" del Sheet: ver nexosContent() abajo. */

const NEXOS_ES = {
  nav: [{
    id: 'quienes',
    label: 'Quiénes somos'
  }, {
    id: 'cifras',
    label: 'La ayuda en números'
  }, {
    id: 'donar',
    label: 'Cómo donar'
  }, {
    id: 'evidencia',
    label: 'Evidencia'
  }, {
    id: 'aliados',
    label: 'Aliados'
  }, {
    id: 'faq',
    label: 'Preguntas'
  }],
  hero: {
    eyebrow: 'Ayuda humanitaria · Venezuela',
    titulo: 'Reconstruyendo los nexos rotos de nuestro país.',
    tituloHtml: 'Reconstruyendo los <span style="color:var(--accent)">nexos rotos</span> de nuestro país.',
    bajada: 'Somos el puente entre la voluntad de los que quieren aportar y la resiliencia de las comunidades que hoy necesitan reconstruirse.',
    credito: 'Foto: Francisco Rizquez — La Guaira 2026'
  },
  ventanas: {
    quienes: {
      titulo: 'Quiénes somos',
      eyebrow: 'Nuestra misión',
      resumen: 'El puente entre quien puede aportar y quien necesita reconstruirse.',
      foto: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-rescate-edificio.jpg',
      cuerpo: ['Somos <b>el puente</b> entre la voluntad de los que quieren aportar y la resiliencia de las comunidades que hoy necesitan reconstruirse.', 'Nacimos después del <b>24 de junio</b>, cuando quedó claro que la ayuda existía pero no encontraba el camino. Unimos el movimiento con la acción y la estrategia con la empatía: voluntarios en terreno, compras verificadas y cuentas publicadas.', 'Somos la prueba de que cuando las manos se juntan de forma transparente, la ayuda llega <b>más lejos, más rápido y de forma más humana</b>.'],
      datos: [{
        k: 'Fundado',
        v: 'Junio 2026'
      }, {
        k: 'Dónde operamos',
        v: 'Estado La Guaira'
      }, {
        k: 'Equipo',
        v: 'Voluntarios'
      }]
    },
    evidencia: {
      titulo: 'Evidencia',
      eyebrow: 'Todo verificable',
      resumen: 'Facturas de cada compra y fotos de cada entrega.',
      foto: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-corte-atardecer.jpg',
      cuerpo: ['Publicamos las facturas de cada compra y las fotos de cada entrega. Si algo no cuadra, escríbenos y lo corregimos a la vista de todos.']
    },
    aliados: {
      titulo: 'Aliados y voluntarios',
      eyebrow: 'Súmate',
      resumen: 'Cómo sumar tu tiempo, tu oficio o tu transporte.',
      foto: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-guante-mensaje.jpg',
      cuerpo: ['No recibimos financiamiento institucional: cada campaña se sostiene con aportes de personas y con el trabajo de voluntarios que ponen tiempo, camioneta, cocina o manos.', 'Si quieres sumar tu organización, tu oficio o tu transporte, escríbenos por Instagram y te decimos exactamente qué falta esta semana.'],
      formas: [{
        titulo: 'Voluntario en terreno',
        detalle: 'Carga, reparto, cocina y construcción en La Guaira.'
      }, {
        titulo: 'Aliado logístico',
        detalle: 'Fletes, depósito, almacenamiento o combustible.'
      }, {
        titulo: 'Proveedor',
        detalle: 'Farmacias, ferreterías y mercados con precio solidario.'
      }, {
        titulo: 'Difusión',
        detalle: 'Comparte el reporte: la transparencia también se comparte.'
      }]
    },
    faq: {
      titulo: 'Preguntas frecuentes',
      eyebrow: 'Antes de donar',
      resumen: 'Dudas antes de donar, respondidas sin vueltas.',
      foto: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-calle-derrumbe.jpg',
      items: [{
        q: '¿Cómo sé que mi dinero llegó?',
        a: 'Cada donación aparece en el reporte con tu nombre, método y monto, y cada compra tiene su factura publicada. Puedes buscar tu nombre en esta misma página.'
      }, {
        q: '¿Por qué no debo mencionar Venezuela en la transferencia?',
        a: 'Para proteger las cuentas personales que usamos para recibir los aportes. Con tu nombre o un “gracias” en el asunto es suficiente 💙'
      }, {
        q: '¿Puedo donar en bolívares, pesos o euros?',
        a: 'Sí. Recibimos USD, VES, ARS y EUR, además de USDT. En el reporte convertimos todo a dólares con la tasa publicada.'
      }, {
        q: '¿Puedo donar cosas y no dinero?',
        a: 'Sí, sobre todo medicinas y materiales. Escríbenos por Instagram para coordinar el punto de entrega.'
      }]
    }
  },
  ficha: [{
    k: 'Fundado',
    v: 'Junio 2026'
  }, {
    k: 'Zona',
    v: 'La Guaira'
  }, {
    k: 'Equipo',
    v: 'Voluntarios'
  }],
  credito: 'Francisco Rizquez — La Guaira 2026',
  fotos: [{
    src: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-rescate-edificio.jpg'
  }, {
    src: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-calle-derrumbe.jpg'
  }, {
    src: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-rescate-escombros.jpg'
  }, {
    src: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-corte-atardecer.jpg'
  }, {
    src: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-guante-mensaje.jpg'
  }, {
    src: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-muro-marca.jpg'
  }],
  aviso: 'Al transferir, en el asunto no menciones Venezuela ni la causa. Con tu nombre o un “gracias” basta 💙',
  ui: {
    donar: 'Donar',
    donarAhora: '💙 Donar ahora',
    quienesLink: 'Quiénes somos →',
    abrirVentana: 'Abrir ventana →',
    volver: '← Volver',
    menu: 'Menú',
    recaudado: 'Recaudado',
    ejecutado: 'Ejecutado',
    donaciones: 'Donaciones',
    actualizado: 'Actualizado',
    totalRecaudado: 'Total recaudado',
    totalEgresos: 'Total egresos',
    saldo: 'Saldo disponible',
    seccionesLead: 'Conoce cada parte de la historia →',
    enTerreno: 'En terreno',
    fotosPor: 'Fotos: Francisco Rizquez — La Guaira 2026',
    anterior: 'Anterior',
    siguiente: 'Siguiente',
    ampliar: 'Ampliar foto',
    cifrasTitulo: 'La ayuda en números',
    donarTitulo: 'Cómo donar en 3 pasos',
    paso1t: 'Elige método',
    paso1: 'Toca <b style="color:var(--accent)">Donar ahora</b> y elige Zelle, pago móvil, transferencia o USDT.',
    paso2t: 'Copia y transfiere',
    paso2: 'Copia los datos con <b style="color:var(--accent)">Copiar</b> y haz tu aporte desde tu banco.',
    paso3t: 'Cuida el asunto',
    paso3: 'No menciones Venezuela ni la causa. Tu nombre o un “gracias” basta 💙',
    evidenciaLead: 'Cada compra tiene su factura y cada entrega su foto.',
    facturas: 'Facturas',
    verFacturas: '📄 Ver facturas de compras',
    facturasSub: 'Carpeta de Drive, ordenada por categoría de gasto.',
    fotosLabel: 'Fotos',
    verFotos: '📷 Ver fotos de las donaciones',
    fotosSub: 'Entregas en terreno, fecha por fecha.',
    comoVerificamos: 'Cómo verificamos cada gasto →',
    fotosCredito: 'Fotos: ',
    reporteTitulo: '¿Ya donaste? Busca tu nombre',
    reporteLead: 'Los datos vienen de la hoja de cálculo del equipo.',
    buscar: '🔎 Escribe tu nombre…',
    todosMetodos: 'Todos los métodos',
    vacio: '🔎 Escribe al menos 3 letras de tu nombre para ver tus donaciones.',
    sinResultados: 'No encontramos donaciones con ese nombre. Revisa cómo está escrito.',
    mostrando: function (n, tot) {
      return 'Mostrando ' + n + ' de ' + tot + ' coincidencias — afina el nombre para ver la tuya.';
    },
    resultados: function (n) {
      return n + ' resultado(s)';
    },
    egresosTitulo: 'Egresos por categoría',
    secciones: 'Secciones',
    contacto: 'Contacto',
    creditoSistema: 'Sistema creado por Isis Elinor',
    avisoModal: ['⚠️ Al transferir, en el asunto ', 'no menciones Venezuela', ' ni la causa. Con tu nombre o un “gracias” basta 💙'],
    escribirInstagram: 'Escribirnos por Instagram',
    seguirLeyendo: 'Seguir leyendo',
    cadaAporte: 'Cada aporte se publica.',
    cadaAporteSub: ['⚠️ En el asunto ', 'no menciones Venezuela', ' ni la causa.'],
    fotoPor: 'Foto: '
  }
};
const NEXOS_EN = {
  nav: [{
    id: 'quienes',
    label: 'Who we are'
  }, {
    id: 'cifras',
    label: 'Aid in numbers'
  }, {
    id: 'donar',
    label: 'How to donate'
  }, {
    id: 'evidencia',
    label: 'Evidence'
  }, {
    id: 'aliados',
    label: 'Partners'
  }, {
    id: 'faq',
    label: 'FAQ'
  }],
  hero: {
    eyebrow: 'Humanitarian aid · Venezuela',
    titulo: 'Rebuilding the broken links of our country.',
    tituloHtml: 'Rebuilding the <span style="color:var(--accent)">broken links</span> of our country.',
    bajada: 'We are the bridge between the will of those who want to give and the resilience of the communities that need to rebuild today.',
    credito: 'Photo: Francisco Rizquez — La Guaira 2026'
  },
  ventanas: {
    quienes: {
      titulo: 'Who we are',
      eyebrow: 'Our mission',
      resumen: 'The bridge between those who can give and those who need to rebuild.',
      foto: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-rescate-edificio.jpg',
      cuerpo: ['We are <b>the bridge</b> between the will of those who want to give and the resilience of the communities that need to rebuild today.', 'We started after <b>June 24th</b>, when it became clear that the aid existed but could not find its way. We joined movement with action and strategy with empathy: volunteers on the ground, verified purchases and published accounts.', 'We are the proof that when hands come together transparently, aid travels <b>farther, faster and in a more human way</b>.'],
      datos: [{
        k: 'Founded',
        v: 'June 2026'
      }, {
        k: 'Where we work',
        v: 'La Guaira State'
      }, {
        k: 'Team',
        v: 'Volunteers'
      }]
    },
    evidencia: {
      titulo: 'Evidence',
      eyebrow: 'Everything verifiable',
      resumen: 'Receipts for every purchase and photos of every delivery.',
      foto: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-corte-atardecer.jpg',
      cuerpo: ['We publish the receipt for every purchase and photos of every delivery. If something does not add up, write to us and we will fix it in plain sight.']
    },
    aliados: {
      titulo: 'Partners and volunteers',
      eyebrow: 'Join us',
      resumen: 'How to contribute your time, your trade or your transport.',
      foto: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-guante-mensaje.jpg',
      cuerpo: ['We receive no institutional funding: every campaign is sustained by individual donations and by volunteers who give their time, their truck, their kitchen or their hands.', 'If you want to bring in your organization, your trade or your transport, write to us on Instagram and we will tell you exactly what is missing this week.'],
      formas: [{
        titulo: 'Volunteer on the ground',
        detalle: 'Loading, distribution, cooking and building in La Guaira.'
      }, {
        titulo: 'Logistics partner',
        detalle: 'Freight, storage, warehousing or fuel.'
      }, {
        titulo: 'Supplier',
        detalle: 'Pharmacies, hardware stores and markets at solidarity prices.'
      }, {
        titulo: 'Outreach',
        detalle: 'Share the report: transparency is shared too.'
      }]
    },
    faq: {
      titulo: 'Frequently asked questions',
      eyebrow: 'Before you donate',
      resumen: 'Questions before donating, answered straight.',
      foto: 'https://cdn.jsdelivr.net/gh/isiselinor/-anadonaciones@develop/assets/photo-calle-derrumbe.jpg',
      items: [{
        q: 'How do I know my money arrived?',
        a: 'Every donation appears in the report with your name, method and amount, and every purchase has its receipt published. You can search for your name on this page.'
      }, {
        q: 'Why should I not mention Venezuela in the transfer?',
        a: 'To protect the personal accounts we use to receive contributions. Your name or a “thank you” in the reference is enough 💙'
      }, {
        q: 'Can I donate in bolívares, pesos or euros?',
        a: 'Yes. We accept USD, VES, ARS and EUR, plus USDT. In the report we convert everything to dollars at the published rate.'
      }, {
        q: 'Can I donate goods instead of money?',
        a: 'Yes, especially medicine and building materials. Write to us on Instagram to arrange a drop-off point.'
      }]
    }
  },
  ficha: [{
    k: 'Founded',
    v: 'June 2026'
  }, {
    k: 'Area',
    v: 'La Guaira'
  }, {
    k: 'Team',
    v: 'Volunteers'
  }],
  credito: 'Francisco Rizquez — La Guaira 2026',
  fotos: NEXOS_ES.fotos,
  aviso: 'When transferring, do not mention Venezuela or the cause in the reference. Your name or a “thank you” is enough 💙',
  ui: {
    donar: 'Donate',
    donarAhora: '💙 Donate now',
    quienesLink: 'Who we are →',
    abrirVentana: 'Open →',
    volver: '← Back',
    menu: 'Menu',
    recaudado: 'Raised',
    ejecutado: 'Spent',
    donaciones: 'Donations',
    actualizado: 'Updated',
    totalRecaudado: 'Total raised',
    totalEgresos: 'Total spent',
    saldo: 'Available balance',
    seccionesLead: 'Explore every part of the story →',
    enTerreno: 'On the ground',
    fotosPor: 'Photos: Francisco Rizquez — La Guaira 2026',
    anterior: 'Previous',
    siguiente: 'Next',
    ampliar: 'Enlarge photo',
    cifrasTitulo: 'Aid in numbers',
    donarTitulo: 'How to donate in 3 steps',
    paso1t: 'Choose a method',
    paso1: 'Tap <b style="color:var(--accent)">Donate now</b> and choose Zelle, mobile payment, bank transfer or USDT.',
    paso2t: 'Copy and transfer',
    paso2: 'Copy the details with <b style="color:var(--accent)">Copy</b> and send your contribution from your bank.',
    paso3t: 'Mind the reference',
    paso3: 'Do not mention Venezuela or the cause. Your name or a “thank you” is enough 💙',
    evidenciaLead: 'Every purchase has its receipt and every delivery its photo.',
    facturas: 'Receipts',
    verFacturas: '📄 See purchase receipts',
    facturasSub: 'Drive folder, sorted by spending category.',
    fotosLabel: 'Photos',
    verFotos: '📷 See donation photos',
    fotosSub: 'Deliveries on the ground, date by date.',
    comoVerificamos: 'How we verify every expense →',
    fotosCredito: 'Photos: ',
    reporteTitulo: 'Already donated? Find your name',
    reporteLead: 'The data comes from the team spreadsheet.',
    buscar: '🔎 Type your name…',
    todosMetodos: 'All methods',
    vacio: '🔎 Type at least 3 letters of your name to see your donations.',
    sinResultados: 'We found no donations under that name. Check the spelling.',
    mostrando: function (n, tot) {
      return 'Showing ' + n + ' of ' + tot + ' matches — refine the name to find yours.';
    },
    resultados: function (n) {
      return n + ' result(s)';
    },
    egresosTitulo: 'Spending by category',
    secciones: 'Sections',
    contacto: 'Contact',
    creditoSistema: 'System built by Isis Elinor',
    avisoModal: ['⚠️ When transferring, ', 'do not mention Venezuela', ' or the cause in the reference. Your name or a “thank you” is enough 💙'],
    escribirInstagram: 'Write to us on Instagram',
    seguirLeyendo: 'Keep reading',
    cadaAporte: 'Every contribution is published.',
    cadaAporteSub: ['⚠️ In the reference, ', 'do not mention Venezuela', ' or the cause.'],
    fotoPor: 'Photo: '
  }
};
window.NEXOS_CONTENT = {
  ES: NEXOS_ES,
  EN: NEXOS_EN
};
/* Compatibilidad: las páginas viejas siguen leyendo window.NEXOS_LANDING (español). */
window.NEXOS_LANDING = NEXOS_ES;

/* Devuelve el contenido del idioma pedido, con los textos que venga escribiendo
   el equipo en la hoja "Config" del Sheet pisando los valores por defecto.
   Formato esperado en Config (columnas: clave | es | en):
     quienes.titulo | Quiénes somos      | Who we are
     quienes.resumen| (texto de la tarjeta de portada)
     quienes.cuerpo | párrafo 1\n\npárrafo 2 (una línea en blanco separa párrafos)
     evidencia.*, aliados.*, faq.* igual
     faq.items      | P: pregunta\nR: respuesta\n\nP: …\nR: … */
window.nexosContent = function (lang) {
  const base = window.NEXOS_CONTENT[lang === 'EN' ? 'EN' : 'ES'];
  const t = window.NEXOS_FIXTURE && window.NEXOS_FIXTURE.textos || null;
  if (!t) return base;
  const col = lang === 'EN' ? 'en' : 'es';
  const pick = function (clave) {
    const row = t[clave];
    if (!row) return '';
    const val = typeof row === 'string' ? row : row[col] || row.es || '';
    return String(val || '').trim();
  };
  const parrafos = function (s) {
    return s.split(/\n\s*\n/).map(function (p) {
      return p.trim().replace(/\n/g, ' ');
    }).filter(Boolean);
  };
  const out = Object.assign({}, base, {
    ventanas: {}
  });
  Object.keys(base.ventanas).forEach(function (id) {
    const v = Object.assign({}, base.ventanas[id]);
    ['titulo', 'eyebrow', 'resumen'].forEach(function (f) {
      const s = pick(id + '.' + f);
      if (s) v[f] = s;
    });
    const cuerpo = pick(id + '.cuerpo');
    if (cuerpo) v.cuerpo = parrafos(cuerpo);
    const items = pick(id + '.items');
    if (items) {
      const parsed = parrafos(items).map(function (b) {
        const m = b.match(/^\s*(?:P|Q)\s*:\s*([\s\S]*?)\s*(?:R|A)\s*:\s*([\s\S]*)$/i);
        return m ? {
          q: m[1].trim(),
          a: m[2].trim()
        } : null;
      }).filter(Boolean);
      if (parsed.length) v.items = parsed;
    }
    out.ventanas[id] = v;
  });
  const aviso = pick('general.aviso');
  if (aviso) out.aviso = aviso;
  const heroBajada = pick('hero.bajada');
  if (heroBajada) out.hero = Object.assign({}, base.hero, {
    bajada: heroBajada
  });
  return out;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/content.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/data-source.js
try { (() => {
/* Conector con el Apps Script de NEXOS.
   Pega aquí la URL del deployment (.../exec) y la página usa datos reales;
   si queda vacía, se muestran los datos de ejemplo de data.js.
   El script expone doGet con soporte JSONP (?callback=), así que no hace falta CORS. */
window.NEXOS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyKLVJVc4mT39F_xOuCSrjFfnIICHVYNQHpMTMlk9HxT8yg6KwwB6WLInSqY_QMsZg/exec';
(function () {
  const nf = function (n, dec) {
    return Number(n || 0).toLocaleString('es-AR', {
      minimumFractionDigits: dec == null ? 2 : dec,
      maximumFractionDigits: dec == null ? 2 : dec
    });
  };

  /* Textos editables de la hoja Config: acepta filas [{clave, es, en}] o un objeto
     { "quienes.titulo": {es, en} }. Devuelve siempre el objeto indexado por clave. */
  const normTextos = function (t) {
    if (!t) return null;
    if (Array.isArray(t)) {
      const o = {};
      t.forEach(function (r) {
        const k = String(r.clave || r.key || r.id || '').trim();
        if (k) o[k] = {
          es: r.es || r.ES || r.valor || '',
          en: r.en || r.EN || ''
        };
      });
      return Object.keys(o).length ? o : null;
    }
    return typeof t === 'object' ? t : null;
  };

  /* Normaliza la respuesta de getDatosPublicos() a la forma que consumen los componentes
     (montos ya formateados como texto es-AR). */
  window.nexosNormalizar = function (d) {
    const t = d.tasas || {};
    return {
      actualizado: d.actualizado || '',
      mision: d.misionEs || '',
      misionEn: d.misionEn || '',
      misionTitulo: d.misionTitEs || 'Nuestra misión',
      tagline: d.tagline || '',
      taglineEn: d.taglineEn || '',
      totalUSD: nf(d.totalUSD),
      totalEgresos: nf(d.totalEgresos),
      saldo: nf(d.saldo),
      totalDonaciones: d.totalDonaciones || 0,
      notaTasas: 'Conversión estimada · ARS ' + nf(t.arsPorUsd) + '/USD · Bs ' + nf(t.bsPorUsd) + '/USD · EUR×' + nf(t.usdPorEur, 3) + ' · USD y USDT 1:1',
      porMoneda: (d.porMoneda || []).map(function (m) {
        return {
          simbolo: m.simbolo,
          moneda: m.moneda,
          total: nf(m.total),
          count: m.count,
          usd: m.moneda === 'USD' || m.moneda === 'USDT' ? '' : nf(m.usd)
        };
      }),
      metodos: d.metodosPago || [],
      movimientos: (d.movimientos || []).map(function (m) {
        return {
          donante: m.donante,
          metodo: m.metodo,
          monto: nf(m.monto),
          simbolo: m.simbolo,
          moneda: m.moneda,
          responsable: m.responsable
        };
      }),
      egresos: (d.egresosPorCategoria || []).map(function (c) {
        return {
          categoria: c.categoria,
          descripcion: c.descripcion || '',
          total: nf(c.total),
          pct: String(c.pct).replace('.', ','),
          items: (c.items || []).map(function (it) {
            return {
              concepto: it.concepto,
              monto: nf(it.monto)
            };
          })
        };
      }),
      textos: normTextos(d.textos || d.config || d.secciones),
      metodosDonacion: d.metodosDonacion || [],
      enlaceFacturas: d.enlaceFacturas || '',
      enlaceFotos: d.enlaceFotos || ''
    };
  };

  /* Carga vía JSONP y vuelve a renderizar. window.__nexosRender lo define cada página. */
  window.nexosCargar = function () {
    const url = window.NEXOS_ENDPOINT;
    if (!url) return;
    const cb = 'nexosCb_' + Date.now();
    window[cb] = function (data) {
      try {
        window.NEXOS_FIXTURE = window.nexosNormalizar(data);
        if (typeof window.__nexosRender === 'function') window.__nexosRender();
      } catch (err) {
        console.error('NEXOS: respuesta inesperada', err);
      }
      delete window[cb];
    };
    const s = document.createElement('script');
    s.src = url + (url.indexOf('?') > -1 ? '&' : '?') + 'callback=' + cb;
    s.onerror = function () {
      console.error('NEXOS: no se pudo leer ' + url + ' — revisa que el deployment sea "Cualquiera con el enlace".');
    };
    document.head.appendChild(s);
  };
  document.addEventListener('DOMContentLoaded', window.nexosCargar);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/data-source.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrandHeader = __ds_scope.BrandHeader;

__ds_ns.MissionStatement = __ds_scope.MissionStatement;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CopyButton = __ds_scope.CopyButton;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CurrencyCard = __ds_scope.CurrencyCard;

__ds_ns.DetailField = __ds_scope.DetailField;

__ds_ns.DonationsTable = __ds_scope.DonationsTable;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ExpenseCategory = __ds_scope.ExpenseCategory;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.FilterSelect = __ds_scope.FilterSelect;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.DonateModal = __ds_scope.DonateModal;

__ds_ns.DriveLinkButton = __ds_scope.DriveLinkButton;

__ds_ns.PaymentMethod = __ds_scope.PaymentMethod;

})();
