import './Lstyle.css'

const Lspage = () => {
  return (
    <div className='center'>
      <h1 id='mainh'>Login</h1>
      <form method='post'>

        <div className='txt_field'>
          <input type='text' required />
          <span></span>
          <label>Username</label>
        </div>

        <div className='txt_field'>
          <input type='password' required />
          <span></span>
          <label>Password</label>
        </div>

        <div className='pass'>Forgot Password?</div>

        <input type='submit' value='Login' />

        <div className='signup_link'>
          Not a member? <a href='./Spage'>Signup</a>
        </div>

      </form>
    </div >
  )
}

export default Lspage