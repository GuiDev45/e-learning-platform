import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Error 404 not found page.</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
