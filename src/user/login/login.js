import React, { Component } from 'react';
import styles from './login.module.css';
import Header from '../../header/header';
import UserService from '../../services/user-services';
import withForm from '../../shared/withForm';

class Login extends Component {
  
    componentDidMount() {
        if (this.props.isLoged()) {
            this.props.history.push('/');
            return null;
        }
    }
    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        const data = this.props.getFormState();
        UserService.login(data.username,data.password).then((res) => {
            UserService.saveSession(res);
            this.props.history.push('/');
        });
    }

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
                        <input className={styles.inputs} id="password" type={"password" } name="password" placeholder="*******" onChange={this.passwordOnChangeHandler}  />
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

export default withForm(Login, { username: '', password: '' });