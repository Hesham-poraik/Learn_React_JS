import React, {useContext} from 'react';
import { userContext, themeContext } from './Page';

const User = () => {
  const user = useContext(userContext);
  const theme = useContext(themeContext);
  return (
    <>
      <div style={{border: '2px solid red', textAlign: 'center', margin: '30px', padding: '20px'}}>
        <h1>old way</h1>
        <hr/>
        <userContext.Consumer>
          {(user) => 
            <themeContext.Consumer>
              {(theme) =>
                <div>my name is {user.name}, I like {theme.name} 😉</div>
              }
            </themeContext.Consumer>
          }
        </userContext.Consumer>
      </div>
      <div style={{border: '2px solid green', textAlign: 'center', margin: '30px', padding: '20px'}}>
      <h1>new way</h1>
        <hr/>
        <div>my name is {user.name}, I like {theme.name} 😉</div>
      </div>
    </>
  );
}

export default User
