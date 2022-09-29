import * as React from "react";

import ErrorBoundary from "../../Components/ErrorBoundary";

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const Page1 = React.lazy(() => import("pageWithDialog/page1"));

const Home = () => (
    <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col text-white">
        <h1 className="text-5xl text-white">Hello World 👋</h1>
        <p className="text-gray-400 mt-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
            eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
        </p>
        <React.Suspense fallback="loading">
            <ErrorBoundary>
                <Page1 />
            </ErrorBoundary>
        </React.Suspense>
    </div>
);

export { Home };
