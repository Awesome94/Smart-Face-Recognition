import React from 'react'

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onregNameChange = (event) => {
    this.setState({ name: event.target.value })
  };

  onregEmailChange = (event) => {
    this.setState({ email: event.target.value })
  };

  onregPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  };

  onRegisterAction = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-200 w-50-m w-25-1 mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="full-Name">Full Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="first-name" id="full-name"
                  onChange={this.onregNameChange} />
              </div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                  onChange={this.onregEmailChange} />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"
                  id="password" onChange={this.onregPasswordChange} />
              </div>
            </fieldset>

            <div className="">
              <input
                className="b center ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
                onClick={this.onRegisterAction}
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default RegisterComponent;
