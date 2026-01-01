import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

function PageHeader ({ pageName, pageTitle, pageDesc }) {
    return (
        <Reveal className="max-w-[600px] mx-auto text-center mb-4">
            <div className="text-[#666] mb-6 text-sm">
                <Link className="text-[#111]" to="/">Home</Link>
                <span> / </span>
                <span>{pageName}</span>
            </div>
            <h1 className="text-5xl text-[#111] font-semibold mb-6">{pageTitle}</h1>
            <p className="text-xl text-[#666] mb-4">{pageDesc}</p>
        </Reveal>
    );
}

export default PageHeader;