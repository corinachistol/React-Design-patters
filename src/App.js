import { Modal } from "./Modal";
// import { NumberedList } from "./NumberedList";
// import { RegularList } from "./RegularList";
// import { LargePersonListItem } from "./people/LargePersonListItem";
// import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
// import { SmallProductListItem } from "./products/SmallProductListItem";

const people =[{
  name: "John Doe",
  age:54,
  hairColor: "brown",
  hobbies:['swimming', 'bicycling', 'video games'],
}, {
  name: "Brenda Doe",
  age:45,
  hairColor: "black",
  hobbies:['golf', 'math'],
}, {
  name: "Jane Doe",
  age:27,
  hairColor: "blonde",
  hobbies:['biology', 'maedicine', 'gymanstics'],
}]

const products =[{
  name:"Flat-Screen Tv",
  price:"$300",
  description: "Huge LCS screen, a great deal",
  rating:4.5
}, {
  name:"Basketball",
  price:"$10",
  description: "Like the pros use",
  rating:3.8
}, {
  name:"running Shoes",
  price:"$120",
  description: "Like the pros use",
  rating:4.2
}]

function App() {
  return (
    <Modal>
      <LargeProductListItem product ={products[0]} />
    </Modal>
  )
}

export default App;
