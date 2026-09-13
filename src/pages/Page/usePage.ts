import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

const usePage = () => {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);
};

export default usePage;
