import Col from "../components/Col";
import TodoList from "../components/TodoList";

export default function Main(props) {
    return (
        <Col size={9}>
            <TodoList />
        </Col>
    );
}