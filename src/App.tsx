import { Suspense } from "react";
import WebRoutes from "./routes/WebRoutes";

export default function App() {
  const fallback = (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <span>"Conectando !!!" </span>
    </div>
  );

  return (
    <Suspense fallback={fallback}>
      <WebRoutes />
    </Suspense>
  );
}
