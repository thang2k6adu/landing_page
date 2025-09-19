import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import PageLoader from "~/components/PageLoader";

const OS = lazy(() => import("./app/OS"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={PageLoader}>
          <OS />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
