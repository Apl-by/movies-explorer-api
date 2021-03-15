const isLangValid = (value, lang) => {
  if (lang === 'ru') {
    return /^[а-яА-ЯёЁ\s.,!?:;"'()\-—0-9]*$/.test(value);
  }
  if (lang === 'en') {
    return /^[a-zA-Z\s.,!?:;"'()\-—0-9]*$/.test(value);
  }
  return /^.*$/.test(value);
};

module.exports = { isLangValid };
