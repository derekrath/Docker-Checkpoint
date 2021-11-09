
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('greetings').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('greetings').insert([
        { text: 'Greetings from Lindsay, Dustin, and Derek' },
        { text: 'Extra Greetings from Lindsay, Dustin, and Derek' },
        { text: 'Very Merry Greetings from Lindsay, Dustin, and Derek' }
      ]);
    });
};
