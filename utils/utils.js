const isLangValid = (value, lang) => {
  if (lang === 'ru') {
    return /^[^a-zA-Z]*$/.test(value);
  }
  if (lang === 'en') {
    return /^[^а-яА-ЯёЁ]*$/.test(value);
  }
  return /^.*$/.test(value);
};

module.exports = { isLangValid };
