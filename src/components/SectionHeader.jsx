

function SectionHeader ({ title, subtitle }) {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl text-[#111] font-semibold mb-4">{title}</h2>
            <p className="text-lg text-[#666] mb-4">{subtitle}</p>
        </div>
    )
}

export default SectionHeader;