import Navbar from "./Navbar.jsx";

function PageLayout({ title, children }) {
  return (
    <div>
      <Navbar />
      <main className="page-layout">
        <div className="page-header">
          <h1>{title}</h1>
        </div>
        {children}
      </main>
    </div>
  );
}

export default PageLayout;