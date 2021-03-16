

const footerStyle = {
    backgroundColor: "rgba(56, 151, 1, 0.925)",
    fontSize: "12px",
    color: "black",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "7px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
};

const Footer = ({ data }) => {
    return (
        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}>{data}</div>
        </div>
    )
}

export default Footer
