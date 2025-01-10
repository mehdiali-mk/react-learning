import './Title.css'

export default function Title({titleText, fontSize, increment=-1}) {

    const styles={fontSize: fontSize};
    return (
        increment == -1 ? <h3 className="title" style={styles}>{titleText}</h3> : <h3 className="title" style={styles}>{titleText}: {increment}</h3>
    )
}