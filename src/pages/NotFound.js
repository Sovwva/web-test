import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Задержка для демонстрации 404 перед редиректом
        setTimeout(() => {
            navigate("/", { replace: true, state: { from: location.pathname } });
        }, 8000); // Редирект через 2 секунды
    }, [navigate, location]);

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404 - Страница не найдена</h1>
            <p>Вы будете перенаправлены на главную страницу...</p>
        </div>
    );
};

export default NotFound;
