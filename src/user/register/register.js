/* eslint-disable no-undef */
import React from 'react';
import Header from'../../header/header';
import styles from './register.module.css';
import withForm from '../../shared/withForm';
import UserService from '../../services/user-services';

class Register extends React.Component {
    state = {
        balanceError: null,
        imageUrl: null,
        hidden: true
    }

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
     
        UserService.register(data).then((res) => {
            UserService.saveSession(res);
            this.props.history.push('/login');
        })
         .catch(function (err) {
            notifications.handleError(err);
        });
    }

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        const data = this.props.getFormState();
        if (data['password'] !== data['rePassword'])
            errorState['rePassword'] = ['Password don\'t match!']
        return errorState && errorState[name] && errorState[name][0];
    }

    seePassword=()=>{
        this.setState({hidden: !this.state.hidden})
    }

    render() {


        return (
            <div>
       
            <Header />
            <div className={styles.all}>
            <div >
                    <div className={styles['register-page']}>
                        <form onSubmit={this.handleSubmit}>
                            <h1>Register</h1>
                            <label className={styles.labels} htmlFor="username">Username</label>
                            <input className={styles.inputs} id="username" type="text" name="username" placeholder="Username" onChange={this.usernameOnChangeHandler} />
                           

                            <label className={styles.labels} htmlFor="password">Password</label>
                            <div className={styles['password-input']}>
                                <input className={styles.inputs} id="password" type={"password" } name="password" placeholder="●●●●●●●" onChange={this.passwordOnChangeHandler} />
                            </div>
                        </form>
                            <button className={styles['register-button']} type="button" onClick={this.submitHandler}>Register</button>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

const initialFormState = {
    username: '',
    password: ''
};



export default withForm(Register,initialFormState)