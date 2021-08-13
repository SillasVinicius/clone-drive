import './styles.css';

function Login({ onLogin }) {
  return (
    <>
      <div className="wrapper">
        <a href="#" onClick={(e) => onLogin(e)}>
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img alt="google-logo" class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p class="btn-text"><b>Faça Login com o Google</b></p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Login;
