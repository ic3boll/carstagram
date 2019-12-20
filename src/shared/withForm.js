import React from 'react';

export default function withForm(Cmp, initialState, schema) {
    return class extends React.Component {
        state = {
            user: {},
            form: initialState,
            errors: {}
        };

        controlChangeHandlerFactory = name => {
            let id;
            return e => {
                const newValue = e.target.value;

                if (id) { clearTimeout(id); id = null; }
               
                    this.setState(({ form }) => {
                        return { form: { ...form, [name]: newValue } };
                    });
                    id = null;
               
            };
        };

        getFormState = () => {
            return this.state.form;
        };

        getFormErrorState = () => {
            return this.state.errors;
        };

        runControlValidation = name => {
            const currentValue = this.state.form[name];
            // eslint-disable-next-line no-mixed-operators
            return schema && schema.fields[name].validate(currentValue, { abortEarly: false }) || Promise.resolve();
        };

      

        isLoged = () => {
            const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
                const [cookieName, cookieValue] = cookie.split('=');
                acc[cookieName] = cookieValue;
                return acc;
            }, {})
            return cookies['x-auth-token'];
        }

        render() {
            return <Cmp
                {...this.props}
                controlChangeHandlerFactory={this.controlChangeHandlerFactory}
                getFormState={this.getFormState}
               
                getFormErrorState={this.getFormErrorState}
                parseCookies={this.parseCookies}
                isLoged={this.isLoged}
            />
        }
    }
}