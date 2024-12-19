module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // Permite conexión a fuentes seguras y a Cloudinary
          'connect-src': ["'self'", 'https:'],
          // Permite cargar imágenes desde 'self', datos, blobs, y tu subdominio de Cloudinary
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com', // Reemplaza esto si tu subdominio cambia
          ],
          // Permite carga de medios desde 'self', datos, blobs y Cloudinary
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com', // Tu subdominio de Cloudinary
          ],
          // Opcional: desactiva las actualizaciones automáticas de solicitudes inseguras
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://inmobiliariacruzdelsur.netlify.app', // Dominio de tu frontend
        'https://cdelsur.com/', // Dominio de tu frontend producción
        'https://back-inmobiliaria-cruz-del-sur.onrender.com', // Dominio de tu backend
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
