import React, { Component } from 'react';
import styles from './style.module.css';
import Header from '../../header/header';

class Login extends Component {
  
    render() {
  
        return (
            <div>
       
            <Header />
            <div className={styles.all}>
            <div >
                  
                <div className={styles['login-page']}>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>

                        <label className={styles.labels} htmlFor="username">Username </label>
                        <input className={styles.inputs} type="text" name="username" placeholder="UserName" onChange={this.usernameOnChangeHandler} />
                        <div className={styles['password-input']}>
                        <label className={styles.labels} htmlFor="password">Password </label>
                        <input className={styles.inputs} id="password" type={"password" } name="password" placeholder="*******"  />
                        </div>
                        <button className={styles['login-button']} type="button" onClick={this.submitHandler}>Login</button>
                    </form>
                </div>
            </div>
        </div>
         </div>
        )
    }
}
export default Login;