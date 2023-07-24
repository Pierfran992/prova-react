import User from "./User";
import ListNames from "./ListNames";
import Col from "./Col";

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