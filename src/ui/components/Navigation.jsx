import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const selectedStyle = "navigation__li-selected";
  const unselectedStyle = "navigation__li";
  const currentPath = window.location.pathname;

  const isPageSelected = (path) => {
    return currentPath === path
      ? selectedStyle
      : unselectedStyle
  }
  const [linkStyle, setLinkStyle] = useState({
    shop: isPageSelected("/"),
    possession: isPageSelected("/possession"),
    warehouse: isPageSelected("/warehouse")
  });

  const onClickLink = (name) => {
    for (const prop in linkStyle) {
      if (prop === name)
        linkStyle[name] = selectedStyle;
      else
        linkStyle[prop] = unselectedStyle;
    }
    setLinkStyle({ ...linkStyle});
  }

  return (
    <div className="navigation">
      <ul className="navigation__ul">
        <li>
          <Link
            onClick={() => onClickLink("shop")}
            className={linkStyle.shop}
            to="/"
          >
            SHOP
          </Link>
        </li>
        <li>
          <Link
            onClick={() => onClickLink("possession")}
            className={linkStyle.possession}
            to="/possession"
          >
            POSSESSION
          </Link>
        </li>
        <li>
          <Link
            onClick={() => onClickLink("warehouse")}
            className={linkStyle.warehouse}
            to="/warehouse"
          >
            WAREHOUSE
          </Link>
        </li>
      </ul>
    </div>
  );
}