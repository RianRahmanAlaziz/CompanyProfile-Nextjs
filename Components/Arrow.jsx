
export function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-transparent p-2 rounded-full  transition"
            onClick={onClick}
        >
            <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
};

export function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-transparent p-2 rounded-full  transition"
            onClick={onClick}
        >
            <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );
};