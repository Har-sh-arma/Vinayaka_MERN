import './Style.css'
const Spage = () => {
    return (
        <div>
            <div className='center'>
                <h1 id='mainh'>Signup</h1>
                <form method='post'>

                    <div className='txt_field'>
                        <input type='text' required />
                        <span></span>
                        <label>Username</label>
                    </div>

                    <div className='txt_field'>
                        <input type='email' required />
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div className='txt_field'>
                        <input type='password' required />
                        <span></span>
                        <label>Password</label>
                    </div>

                    <input type='submit' value='Signup' />

                    <div className='signup_link'>
                        Already have an account? <a href='./Lspage'>Login</a>
                    </div>

                </form>
            </div >
        </div>
    )
}

export default Spage