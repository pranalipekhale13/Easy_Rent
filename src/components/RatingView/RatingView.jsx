import "./RatingView.css";

function RatingView({ rating }) {
    const numericRating = Number(rating);
    const safeRating = Number.isFinite(numericRating)
        ? Math.min(5, Math.max(0, numericRating))
        : 0;

    return (
        <div
            className="rating-view-container"
            role="img"
            aria-label={`Rated ${safeRating.toFixed(1)} out of 5`}
        >
            {Array.from({ length: 5 }).map((_, index) => {
                const fill = Math.max(0, Math.min(100, (safeRating - index) * 100));

                return (
                    <span key={index} className="star-wrapper" aria-hidden="true">
                        <span className="star star-empty">&#9734;</span>
                        <span
                            className="star star-filled"
                            style={{ width: `${fill}%` }}
                        >
                            &#9733;
                        </span>
                    </span>
                );
            })}
            <span className="rating-value" aria-hidden="true">
                {safeRating.toFixed(1)}
            </span>
        </div>
    );
}

export default RatingView;