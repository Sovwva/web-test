import { useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleRedirect = () => {
        navigate("/web-test", { replace: true, state: { from: location.pathname } });
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404 - Страница не найдена</h1>
            <p>Страница, которую вы ищете, не существует.</p>
            <button onClick={handleRedirect} style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}>
                На главную
            </button>
        </div>
    );
};

export default NotFound;
