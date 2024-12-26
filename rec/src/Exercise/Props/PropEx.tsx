interface PropShape { 
    label: string;
    onClick: () => boolean;
    disabled: boolean;
    visibility: boolean;
}

function PropEx({ label, onClick, disabled, visibility }: PropShape) {
    return (
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-md shadow-md bg-gray-50">
            {!visibility && (
                <p className="text-sm text-gray-700 italic">
                    This content shows
                </p>
            )}
            <button
                onClick={onClick}
                disabled={disabled}
                className={`px-4 py-2 text-white font-semibold rounded ${
                    disabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
                {label}
            </button>
        </div>
    );
}

export default PropEx;
