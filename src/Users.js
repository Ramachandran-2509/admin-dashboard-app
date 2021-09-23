import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { INITIAL_USERS_LIST} from "./IntialUserList";


export function Users() {
    const [users, setUsers] = useState(INITIAL_USERS_LIST);
    const [username, setUsername] = useState("");
    const [userPic, setUserPic] = useState("");
    


  return (
    <div>
      <div className="add-user-form">
       <TextField  
       value={username} 
       onChange={(event) => setUsername(event.target.value)} 
       type="text" 
       label="Name"
       variant="outlined"
       />
      <TextField  
       value={userPic}  
       onChange={(event) => setUserPic(event.target.value)} 
       type="text" 
       label="Profile pic"
       variant="outlined"
       />
      <Button
      variant="outlined"
      color="primary"
      onClick={() => 
        setUsers([
          ...users, 
          {
            name: username,
            pic: userPic
          },
        ])
      }
    >
      Add users
    </Button>
    </div>

      
    <div className="user-list">
       {users.map((user) => (   
       <User name = {user.name} pic={user.pic} id={user.id}/>
       ))}
     </div>
     </div> 
  );
}

function User({name, pic, id} ){
  const histroy = useHistory();
  return(
  <Card  onClick={() => histroy.push("/users/" + id)}
  className="user-card">
    <img 
     style={{
       borderRadius: "50%", 
       height:"75px", 
       width:"75px",
       objectFit:"cover",
      }}
    src={pic} 
    alt="profile pic" 
    />
    <h2>{name}</h2>
  </Card>

 );
}
