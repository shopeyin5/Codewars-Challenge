// function firstNonRepeatingLetter(s) {
//     let str = s.toLowerCase();
//     for(let i = 0; i < str.length; i++) {
//       if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//         return s[i];
//       }
//     }
//     return "";
//   }

// function firstNonRepeatingLetter(s) {
//     let str = s.toLowerCase();
//     for(let i = 0; i < s.length; ++i) {
//       if(str.split(str[i]).length === 2) return s[i];
//     }
//     return '';
//   }
