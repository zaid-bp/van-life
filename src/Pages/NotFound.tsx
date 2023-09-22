import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex w-full min-h-screen justify-center items-center flex-col gap-5 p-4">
            <h1 className="font-bold text-lg">Sorry the page you were looking for was not found</h1>
            <Link to={'/'} className="bg-black text-white font-bold px-24 rounded-lg py-3 text-lg capitalize">Return to home</Link>
        </div>
    );
};

export default NotFound;
