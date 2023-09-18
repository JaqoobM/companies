module.exports = {
     checkForbidenString(value, forbidenString) {
          if (value === forbidenString) {
               throw new Error('Nazwa "slug" jest zakazana');
          }
     },

     validateEmail(email) {
          if (value === forbidenString) {
               var re = /^\w+([/.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
               return re.test(email)
          }
     }
}