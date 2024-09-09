import profile from "../../images/profile.png";
import "./Header.css"

const Header = () => {
    return (
        <div className="header-container w-10/12 mx-auto py-5">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold my-auto">Devlopers Cafe</h2>
                <img src={profile} alt="" />
            </div>
            <hr className="mt-6 opacity-10" />
        </div>
    );
};

export default Header;