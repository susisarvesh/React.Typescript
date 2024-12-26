interface Usershape { 
    name: string;
    age: number;
    heading: string; // Added heading prop
}

function User({ name, age, heading }: Usershape) {
    const userStyle = {
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        maxWidth: "300px",
        margin: "10px auto",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };

    const headingStyle = {
        color: "#007bff",
        fontSize: "1.5rem",
        margin: "10px 0"
    };

    const textStyle = {
        fontSize: "1rem",
        color: "#555"
    };

    return (
        <div style={userStyle}>
            <h1 style={headingStyle}>{heading}</h1>
            <div style={textStyle}>{name}, {age}</div>
        </div>
    );
}

export default User;
