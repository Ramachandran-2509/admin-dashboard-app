import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import { faMemory,faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import { Brands} from "./Brands";
import {Switch, Route, Link, useParams} from "react-router-dom"
import { Users } from './Users';
import { INITIAL_USERS_LIST} from "./IntialUserList";





function App() {
  return (
    <div>
    <Link to="/">Home</Link> <br />
    <Link to="/brands">Brands</Link><br />
    <Link to="/users">Users</Link>

 

    <Switch>
      <Route path="/brands">
      <Brands />
      </Route>
      <Route path="/users/:userid">
      <UserDetails />
      </Route>
      <Route path="/users">
      <Users/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
    
    </div>

  )
}

function Home(){
  return (
    <div>
      <h2>Welcome to our Page!!!</h2>
    </div>
  );
}
                                      

function UserDetails() {
  const {userid} = useParams();
  const user = INITIAL_USERS_LIST.find(user =>user.id === +userid);
  return (
    <div>
      <h2>User Details: {user.name} </h2>
      <h2>User Details: {user.details} </h2>
    </div>
  );
}
export default App;

