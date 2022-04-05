/** @format */

const Layout = ({ className, children, ...props }) => {
  return (
    <>
      <header></header>

      <main {...props} className={className}>
        {children}
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
