import './App.css';
// import SingleBook from './components/SingleBook'
import MyBadge from './components/MyBadge';
import {books} from './romance'
import BookList from './components/BookList'

function App() {
  const Filtered = books.filter((book) => book.asin === "0307969401" )
  console.log(Filtered[0])
  return (
    <div className="App">
     <MyBadge text={'Andrea'} bg={'primary'}/>
     <MyBadge text={'Andrea'} bg={'secondary'}/>
     {/* <SingleBook props={Filtered[0]}></SingleBook> */}
    <BookList/>
     </div>
  );
}

export default App;
