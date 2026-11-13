export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="testimonial-item-rating-block">
      {Array.from({ length: rating }, (_, i) => (
        <img
          key={i}
          src="/assets/images/icon-star.svg"
          loading="lazy"
          alt=""
          className="testimonial-item-rating-icon"
        />
      ))}
    </div>
  );
}
