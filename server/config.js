const BCRYPT_WORK_FACTOR = 12;

const PORT = process.env.PORT || 3001;

function getDatabaseUri() {
  return process.env.NODE_ENV === 'test'
    ? 'my_vaccine_experience_test'
    : process.env.DATABASE_URL || 'mve_two';
}

module.exports = { PORT, getDatabaseUri, BCRYPT_WORK_FACTOR };
