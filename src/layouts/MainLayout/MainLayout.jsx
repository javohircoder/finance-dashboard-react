import Sidebar from '../../components/Sidebar/Sidebar';

function MainLayout({ children }) {
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
}

export default MainLayout;
