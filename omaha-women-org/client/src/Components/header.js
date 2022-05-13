import * as React from "react";
import UserProfile from "./UserProfile";

export default function Header({ user, children, handleLogout }) {
  const [showMenu, toggleMenu] = React.useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-pink">
      <div className="container">
        <div className="navbar-brand">International Women's Club</div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => toggleMenu(!showMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" data-testid="navbar-children">{children}</ul>
        </div>
        <div>{user && <UserProfile userInfo={user} handleLogout={handleLogout} />}</div>
      </div>
    </nav>
  );
}
