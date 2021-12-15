module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: env('DATABASE_CONNECTOR', 'FAKECONNECTOR'),
      settings: {
        host: env('DATABASE_HOST', 'FAKEDBHOST'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'FAKEDBNAME'),
        username: env('DATABASE_USERNAME', 'FAKEDBUSER'),
        password: env('DATABASE_PASSWORD', 'FAKEDBPASSWORD'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
