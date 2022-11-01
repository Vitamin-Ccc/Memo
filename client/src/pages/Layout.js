import { useContext } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"

const Layout = () => {
  let nav = useNavigate();
  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return <button onClick={() => handleLogout(nav)}>Logout</button>
    }
    return (
      <>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/register'>Register</Link>
        </div>
        <div>
          <Link to='/login'>Login</Link>
        </div>
      </>
    )
  }
  return (
    <div>
      <div style={styles.navbar}>
        {renderAuthLinks()}
      </div>
      <div style={styles.pageContainer}>
        <Outlet />
      </div>
    </div>
  )
}

const styles = {
  navbar: {
    display: "flex",
    border: "1px solid",
  },

  pageContainer: {
    maxWidth: "1000px",
    margin: "auto",
    border: "1px solid red",
    padding: "10px",
  }
}


export default Layout;