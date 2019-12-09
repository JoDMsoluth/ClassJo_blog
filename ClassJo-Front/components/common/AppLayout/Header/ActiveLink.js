import { withRouter } from "next/router";

const ActiveLink = ({ router, children, href }) => {
  const style = {
    marginRight: 10,
    color: router.pathname === href ? "red" : "black"
  };

  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
