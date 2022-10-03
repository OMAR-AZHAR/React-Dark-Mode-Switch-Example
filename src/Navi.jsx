import React from 'react';

const Navi = (props) => {

   
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-md ">
    <a className="navbar-brand" href="/">Navbar</a>
  </div>

  <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
  <label class="form-check-label" for="flexSwitchCheckChecked">Dark Mode</label>

  </div>
</nav>
        </div>
    );
}

export default Navi;
