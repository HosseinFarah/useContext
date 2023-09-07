export const Footer = () => {
  return (
    <footer className="mt-5 p-3 shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
