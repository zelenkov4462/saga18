import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {USER_POSTS_FETCH} from "./redux/reducers/posts/actions";
import {LOGIN_REQUEST, LOGOUT} from "./redux/reducers/users/actions";
import {selectError, selectIsLoading, selectToken} from "./redux/reducers/users/selectors";

function App() {
    const dispatch = useDispatch()

    const token = useSelector(selectToken)
    const error = useSelector(selectError)
    const isLoadingLogin = useSelector(selectIsLoading)

    const
    fetchHandler = () => {
        dispatch({
            type: USER_POSTS_FETCH, payload: {
                userId: 1
            }
        })
    }

    const loginHandler = () => {
        dispatch({
            type: LOGIN_REQUEST, payload: {
                username: 'user1', password: 'user1password'
            }
        })
    }

    const logoutHandler = () => {
        dispatch({type: LOGOUT})
    }
    return (
        <div>
            <button onClick={fetchHandler}>Get posts</button>
            <button onClick={loginHandler}>login</button>
            <button onClick={logoutHandler}>logout</button>
            {isLoadingLogin && <div>Loading...</div>}
            {error && <div>error: {error}</div>}
            {token && <div>{token}</div>}
        </div>
    );
}

export default App;
