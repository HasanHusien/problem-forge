// describe('Examples', () => {
//   it('basic examples', () => {
//     assert.strictEqual(updateTabTitle('Inbox', 3), '(3) Inbox');
//     assert.strictEqual(updateTabTitle('(7) Inbox', 12), '(12) Inbox');
//     assert.strictEqual(updateTabTitle('(99) YouTube', 0), 'YouTube');
//   });

//   it('edge examples', () => {
//     assert.strictEqual(updateTabTitle('Project (3)', 5), '(5) Project (3)');
//     assert.strictEqual(updateTabTitle('(draft) Notes', 2), '(2) (draft) Notes');
//   });
// });

function updateTabTitle(title, count) {
  // Your code here
if(!count==0){

  return `(${count}) ${title}`;
}else return title
}
console.log(updateTabTitle('Inbox', 3));
