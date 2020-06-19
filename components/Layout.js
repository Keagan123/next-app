import Navbar from "./Navbar";
import Head_Component from "./Head_Component";

const Layout  = (props) => (
    <div>
        <Head_Component title="Home" />
        <Navbar />
        {props.children}
    </div>
)

export default Layout;