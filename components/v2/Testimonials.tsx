import { testimonials } from "@/content/site";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <div data-w-id="b21cb333-7f38-ed9c-39ad-310cd34041b2" className="testimonial-scroll-block">
      <section className="testimonial-section">
        <div className="w-layout-blockcontainer testimonial-container w-container">
          <div className="testimonial-block">
            <h2 className="testimonial-heading">{testimonials.heading}</h2>
            {testimonials.items.map((review, i) => (
              <div key={review.name} className={`testimonial-item-block _${i + 1}`}>
                <div className="testimonial-item-text-1">“</div>
                <div className="testimonial-item-flex-1">
                  {review.paragraphs.map((text, j) => (
                    <div key={j} className="testimonial-item-text-2">
                      {text}
                    </div>
                  ))}
                  <div className="testimonial-item-flex-2">
                    <div className="testimonial-item-name">{review.name}</div>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
