import React from 'react';

function Login() {
  return (
    <div className="App-header">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario:</label>
            <input type="text" id="username" name="username" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" className="form-input" />
          </div>
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;