import { Link } from 'react-router-dom';

function PageHeader ({ pageName, pageTitle, pageDesc }) {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <span>/</span>
                <span>{pageName}</span>
            </div>
            <h1>{pageTitle}</h1>
            <p>{pageDesc}</p>
        </div>
    );
}

export default PageHeader;