import { withRouter } from "next/router";

const ActiveLink = ({ router, children, href }) => {
  const style = {
    color: router.pathname === href ? "red" : "black"
  };

  return <span style={style}>{children}</span>;
};

export default withRouter(ActiveLink);
