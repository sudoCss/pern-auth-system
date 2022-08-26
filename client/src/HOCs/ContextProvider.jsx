import Auth from "../contexts/Auth";
import Theme from "../contexts/Theme";

const ContextProvider = ({ children }) => {
    return (
        <Auth>
            <Theme>{children}</Theme>
        </Auth>
    );
};
export default ContextProvider;
