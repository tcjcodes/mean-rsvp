module.exports = {
  AUTH0_DOMAIN: 'tcjcodes.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://admin:startup1@ds127783.mlab.com:27783/tc-mean-rsvp',
  NAMESPACE: 'http://myapp.com/roles'
};
