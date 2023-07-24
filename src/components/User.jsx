// variabili
const defaultImage = "https://via.placeholder.com/32x32.png";

// funzioni
function getImageOrDefaultUrl(imageUrl) {
    try {
        new URL(imageUrl);
        return imageUrl;
    } catch {
        return defaultImage;
    }
};

// componenti
export default function User({ name, image }) {
    return (
        <>
            <div className="d-flex align-items-center text-black text-decoration-none py-1">
                <img
                    src={getImageOrDefaultUrl(image)}
                    width="32"
                    height="32"
                    className="rounded-circle me-2"
                />
                <strong>{name}</strong>
            </div>
        </>
    );
}

