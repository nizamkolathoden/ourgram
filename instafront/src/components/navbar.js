import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
function Navbar(props) {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  function renderList() {

    console.log('in nav', state);
    if (state) {
      return [

        <li key={1}><Link to="/profile">Profile</Link></li>,
        <li key={2}><Link to="/create" className="material-icons">add_a_photo</Link></li>,
        <li key={3}><Link to="/followingspost" className="material-icons">explore</Link></li>,
        <li key={0}><Link to="/settings" className="material-icons">settings</Link></li>,


        <li key={4}><i style={{ float: 'right', color: '#000', cursor: 'pointer' }} className="material-icons"

          onClick={() => {
            localStorage.clear()
            dispatch({ type: 'CLEAR' });
            history.push('/login')

          }}
        >exit_to_app
                  </i>
        </li>
      ]
    } else {
      return [
        <li key={5}><Link to="/login">Login</Link></li>,
        <li key={6}><Link to="/signup">SignUp</Link></li>
      ]
    }
  }
  return (
    <div>

      <nav>
        <div className="nav-wrapper white">
          <Link to={state ? "/" : "/login"} className="brand-logo left">Ourgram</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}

          </ul>
        </div>
      </nav>

    </div>
  );
}



export default Navbar;

