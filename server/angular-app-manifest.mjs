
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24679, hash: '2c38f7c4064c164a0aeb520f7841d0d1333e5c258d34611610f5a8d96a133413', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17132, hash: '8ffb2cb74246ffe2b2685cd564656bfa5c78c216dcc35bc8bebe873ed8d5663f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45974, hash: '19c8af603f24ca903466ca6bd9c6633ad69ec1cf7df9dc2d30ec6e2f03c1d754', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
