import User from "../components/User";
import ListNames from "../components/ListNames";
import Col from "../components/Col";

// variabili
const customStyle = {
    boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.1)",
};


// componenti
function Sidebar({ user }) {
    return (
        <>
            <Col size={3} className="bg-light" style={customStyle}>
                <User name={user.name} image={user.image} />
                <hr />
                <ListNames />
            </Col>
        </>
    );
}

export default Sidebar;