import { Helmet } from "react-helmet-async";

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>prakritik-shongi-error</title>
            </Helmet>
            <div className="relative" style={{ backgroundImage: "url('https://i.ibb.co/BsMMCB6/Error.jpg')" }}>
                <div className="absolute inset-0 "></div>
                <div className="bg-cover bg-center h-screen">
                    <div className="py-60 bg-opacity-70 bg-black">
                        <h2 className="md:text-xl text-lg mb-16 text-center text-[#bdac8f] w-11/12 mx-auto">The page you are looking for can not be found.</h2>
                        <h1 className="md:text-9xl text-6xl font-extrabold text-center text-[#8b4513]">404</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;