import { lazy, Suspense } from "react";
import PageLoader from "~/components/PageLoader";

const OS = lazy(() => import("./app/OS"));

function App() {
  return (
    <>
      <Suspense fallback={PageLoader}>
        <OS />
      </Suspense>
    </>
  );
}

export default App;
