import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    Всі працівники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    Підвищення заслуговують
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    З.П Більше 1000$
            </button>
        </div>
    )
}

export default AppFilter;