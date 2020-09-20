// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript
function findAdmin(list, lang) {
  //  filter
  //   check if every dev.lanugage === lang and is githubAdmin
  return list.filter(
    ({ language, githubAdmin }) => language === lang && githubAdmin === "yes"
  );
}
