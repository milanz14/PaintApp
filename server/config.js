'use strict';

require('dotenv').config();

const BCRYPT_WORK_FACTOR = 12;

const PORT = process.env.PORT || 3001;

function getDatabaseUri() {
  return process.env.NODE_ENV === 'test'
    ? 'paintrest_test'
    : process.env.DATABASE_URL || 'paintrest';
}

module.exports = { PORT, getDatabaseUri, BCRYPT_WORK_FACTOR };
