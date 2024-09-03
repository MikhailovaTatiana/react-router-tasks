import { ReactNode } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import { AuthContextType } from "./AuthContextType";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { isLoggedIn } = useOutletContext<AuthContextType>();

    if (!isLoggedIn) {
        return (
            <Navigate
                to='/login'
                replace
            />
        );
    }
    return <>{children}</>;
};
