import './App.css';
import {useDispatch} from "react-redux";
import {USER_POSTS_FETCH_REQUESTED} from "./store/actions";

function App() {
  const dispatch = useDispatch()
  const fetchHandler = () => {
    dispatch({
      type: USER_POSTS_FETCH_REQUESTED,
      payload: {
        userId: 1
      }
    })
  }
  return (
    <div className="App">
      <button onClick={fetchHandler}>Get fetch posts</button>
    </div>
  );
}

export default App;
