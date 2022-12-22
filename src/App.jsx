import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_REQUEST, LOGOUT} from "./store/reducers/users/actions";
import {selectError, selectIsLogPending, selectToken} from "./store/reducers/users/selectors";
import {USER_POSTS_FETCH_REQUESTED} from "./store/reducers/posts/actions";

function App() {
  const dispatch = useDispatch()
  const error = useSelector(selectError)
  const token = useSelector(selectToken)
  const isLoginPending = useSelector(selectIsLogPending)

  const fetchHandler = () => {
    dispatch({
      type: USER_POSTS_FETCH_REQUESTED,
      payload: {
        userId: 1
      }
    })
  }

  const handleLoginClick = () => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        username: 'user1',
        password: 'user1password'
      }
    })
  }

  const handleLogoutClick = () => {
    dispatch({
      type: LOGOUT
    })
  }
  return (
    <div className="App">
      <button onClick={fetchHandler}>Get fetch posts</button>
      <div>
        <button onClick={handleLoginClick}>Log in</button>
        <button onClick={handleLogoutClick}>Log out</button>
        {isLoginPending && <p>Loging in</p>}
        {error && <p>Error: {error}</p>}
        {token && <p>token: {token}</p>}

      </div>
    </div>
  );
}

export default App;
