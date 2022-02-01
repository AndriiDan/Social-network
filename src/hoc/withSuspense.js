import React from "react";

export const withSuspense = (Component) => {
    return (props) => {
        // Відображає 'Loading...' поки завантажується Component
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </React.Suspense>
    };
}