1. [x] Draw a component tree diagram
2. [x] npx create-react-app etc
3. [x] Setup the folder structure
4. [x] Test the initial webpage works properly (npm start)
5. [x] remove the boilerplate code in main app.js and test it still works (blank page)
6. [x] Start with master component component first (App)
   1. [x] state: list of to dos
   2. [x] behaviour
      1. [x] add item to list
      2. [x] remove item from list
      3. [x] render an Input and List
7. [ ] Do the next component
8. [x] For Input component:
   1. [x] state: text
   2. [x] props: add function
   3. [x] behaviour
      1. [x] render an input field and a button
      2. [x] change of input text will update state of this component
      3. [x] button click will call the add function from props with value of input
9. [x] For List component:
   1.  [x] props: 
       1.  [x] array of todos
       2.  [x] delete function
   2.  [x] behaviour
       1.  [x] render an array of ListItems in a ul
10. [x] For List Item
    1.  [x] Props
        1.  [x] Text
        2.  [x] Delete function
    2.  [x] Behaviour
        1.  [x] render the text and a button
        2.  [x] when the button is clicked call the delete function to delete item at this index
11. [ ] Bonus
    1.  [x] Remember we can use the uuid package from npm to create our unique id's when creating our lists [Link](https://www.npmjs.com/package/uuid)
    2.  [ ] Style it up with CSS so your UI looks polished and is easy to use.
    3.  [ ] Add additional functionality to your todos. This could include the ability to cross off as well as delete, the ability to rank todos by date and/or priority, the ability to categorize todos, etc.
    4.  [ ] Are there any libraries or APIs you could use to add features to your todo list?




