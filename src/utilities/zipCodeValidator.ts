const numberRegexp = /^[0-9]+$/;

const validate = (s: string) => {
  return s.length === 5 && numberRegexp.test(s);
}

export default validate;
