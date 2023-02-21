import './App.css';
// import SingleBook from './components/SingleBook'
import MyBadge from './components/MyBadge';
import BookList from './components/BookList'

function App() {
  // const Filtered = books.filter((book) => book.asin === "0307969401" )
  // console.log(Filtered[0])
  return (
    <div className="App">
     {/* <MyBadge text={'Andrea'} bg={'primary'}/>
     <MyBadge text={'Andrea'} bg={'secondary'}/> */}
     <h1 className='text-danger'>EpiBooks</h1>
    <BookList/>
     </div>
  );
}

export default App;
