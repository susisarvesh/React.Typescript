import { ReactNode } from "react";

interface Child { 
    children: ReactNode;
}

function Children({ children }: Child) {
    return (
        <div className="flex justify-center items-center p-4 bg-blue-500 text-white rounded-md shadow-sm m-2">
            {children}
        </div>
    );
}

export default Children;
