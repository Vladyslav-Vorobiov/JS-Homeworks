const emailsArr = [
  `simple@example.ua`,
  `very.common@example.com`,
  `disposable.style.email.with+symbol@example.com`,
  `other.email-with-hyphen@example.com`,
  `fully-qualified-domain@example.com`,
  `user.name+tag+sorting@example.com`,
  `x@example.com`,
  `example-indeed@strange-example.com`,
  `test/test@test.com`,
  `example@s.example`,
  `" "@example.org`,
  `"john..doe"@example.org`,
  `mailhost!username@example.org`,
  `user%example.com@example.org`,
  `user-@example.org`,
  `mail@withoutdot`,
  `mail@with@three@.js`,
  `.user-@example.org`,
];

const regExp =
  /^(\"[^\ \"]{1,64}(?!.*\"\")\"|^(?!^\.)(?!.*\.@)(?!.*\.\.).{1,64})@(?!\-)(?!\d*\.)[a-zA-Z0-9\-]*\.[a-zA-Z0-9]*(?<!\-)$/;

function validateEmail(arr) {
  for (let i = 0; i < arr.length; i++)
    if (regExp.test(arr[i]) === true)
      console.log(`${arr[i]} - Success validation`);
    else {
      console.log(`${arr[i]} - Failed validation`);
    }
}

validateEmail(emailsArr);
