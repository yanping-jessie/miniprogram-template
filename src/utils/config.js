const EXEC_ENV = process.env.VUE_APP_EXEC_ENV || 'test';
const ENV = EXEC_ENV === 'prod' ? '' : `-${EXEC_ENV}`;

const getDomain = name => `https://${name}${ENV}.shiguangkey.com`;

export const DOMAINS = {
  STUDY: getDomain('www'),
  OPEN: getDomain('open'),
  CRM: getDomain('crm'),
  ATTEND: getDomain('attend'),
  DATA: getDomain('data-collect'),
  OCEAN: getDomain('ocean'),
  STATIC: getDomain('res-static'),
  OSS: 'https://res.shiguangkey.com',
};
