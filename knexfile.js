// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/new_years_drill'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}
