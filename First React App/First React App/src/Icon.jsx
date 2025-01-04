import "./Icon.css"

function Icon({iconName}) {
    return (
        <div className="icon">
            <div className="icon-name">{iconName}</div>
        </div>
    )
}

export default Icon