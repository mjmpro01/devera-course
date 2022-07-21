module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'database-1.c9qrogir5qab.ap-southeast-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'devera'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'jgspNO5iEBrZdzseAea7'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
