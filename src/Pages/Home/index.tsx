// @ts-nocheck
/* eslint-disable import/no-unresolved */
import * as React from "react";

import ErrorBoundary from "../../Components/ErrorBoundary";

const Page1 = React.lazy(() => import("pageWithDialog/page1"));
const ListUsers = React.lazy(() => import("accounts/listUsers"));
const CreateUser = React.lazy(() => import("accounts/createUser"));

const Home = () => {
    const [user, setUser] = React.useState();

    return (
        <div className="bg-gray-900 p-20 flex justify-center items-start flex-col text-white">
            <h1 className="text-5xl text-white">Hello World 👋</h1>
            <p className="text-gray-400 mt-5 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
                eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
            </p>
            <div className="grid grid-cols-2 gap-4 w-full mt-10">
                <div>
                    <ErrorBoundary>
                        <Page1 />
                    </ErrorBoundary>
                </div>
                <div>
                    <CreateUser callback={(res) => setUser(res)} />
                    <div className="bg-gray-900 p-5">{JSON.stringify(user)}</div>
                </div>
            </div>
            <div className="w-full mt-10">
                <ErrorBoundary>
                    <ListUsers />
                </ErrorBoundary>
            </div>
        </div>
    );
};

export { Home };
