/*
  This file is used to store unsecure, application-specific data common to all
  environments.
*/

const tenthBCH = 10000000

module.exports = {
  port: process.env.PORT || 7654,
  logPass: 'test',
  AUTHSERVER: process.env.AUTHSERVER ? process.env.AUTHSERVER : 'https://auth.fullstack.cash',
  APISERVER: process.env.APISERVER ? process.env.APISERVER : 'http://localhost:3000/v5/',
  BCHJSTOKEN: process.env.BCHJSTOKEN ? process.env.BCHJSTOKEN : '',
  stateFileName: 'state.json',
  FULLSTACKLOGIN: process.env.FULLSTACKLOGIN ? process.env.FULLSTACKLOGIN : 'demo@demo.com',
  FULLSTACKPASS: process.env.FULLSTACKPASS ? process.env.FULLSTACKPASS : 'demo',
  apiLevel: 10, // Tier of access: 10 = free, 20 = full node, 30 = indexer, 40 = SLP

  satsToSend: tenthBCH, // Amount of satoshis to send on each request.
  appAddress: 'ectest:qqhd020crqg78qhy2aky6m9j46p36yn8zc8zyddycc',
  bchPerHour: tenthBCH * 10
}
