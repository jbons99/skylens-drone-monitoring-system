import Navbar from "./Navbar.jsx";

function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="page-wrap">{children}</div>
    </div>
  );
}

export default PageLayout;