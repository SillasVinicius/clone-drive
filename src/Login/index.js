import './styles.css';

function Login({ onLogin }) {
  return (
    <>
      <div className="wrapper">
        <a href="#" onClick={(e) => onLogin(e)}>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img alt="google-logo" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p className="btn-text"><b>Faça Login com o Google</b></p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Login;
