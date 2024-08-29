import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-40">
      <h2 className="font-bold text-7xl mb-10">Oops!!!!</h2>
      <button className="btn btn-primary">
        <Link to="/">Go back</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
