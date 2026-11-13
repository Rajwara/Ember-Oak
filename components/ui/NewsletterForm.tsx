import { site } from "@/content/site";

/**
 * Newsletter signup used in the navbar panel and the footer. The two copies
 * share markup but use different Webflow class names, so each placement has
 * its own config. Submitting is blocked (see public/assets/js/webflow-bundle.js)
 * until the form is wired to a real email service.
 */
const placements = {
  navbar: {
    prefix: "navbar",
    formId: "email-form",
    formName: "Email Form",
    elementId: "a4483fe5-5eca-e534-66ca-ea0ee438616d",
    inputId: "email",
    submitClass: "submit-button",
    successText: "text-block-2",
    errorText: "text-block-3",
  },
  footer: {
    prefix: "footer",
    formId: "wf-form-Footer-Form",
    formName: "Footer Form",
    elementId: "a833b1c5-36af-84ee-8da8-56a39bb5a4b9",
    inputId: "email2",
    submitClass: "footer-submit-button",
    successText: "text-block-12",
    errorText: "text-block-13",
  },
} as const;

const WF_PAGE = "68d9d8a4764446c80998d6b0";

export default function NewsletterForm({ placement }: { placement: keyof typeof placements }) {
  const p = placements[placement];
  return (
    <>
      <div className={`${p.prefix}-text-1`}>Contact</div>
      <div className={`${p.prefix}-text-2`}>{site.email}</div>
      <div className={`${p.prefix}-text-1 _2nd`}>{site.newsletterPrompt}</div>
      <div className={`${p.prefix}-form-block w-form`}>
        <form
          data-local-preview="true"
          id={p.formId}
          name={p.formId}
          data-name={p.formName}
          method="get"
          className={`${p.prefix}-form`}
          data-wf-page-id={WF_PAGE}
          data-wf-element-id={p.elementId}
        >
          <input
            className={`${p.prefix}-text-field w-input`}
            maxLength={256}
            name="email"
            data-name="Email"
            placeholder="Email"
            type="email"
            id={p.inputId}
            required
          />
          <input
            type="submit"
            data-wait="Please wait..."
            className={`${p.submitClass} w-button`}
            value="Submit"
          />
        </form>
        <div className="success-message w-form-done">
          <div className={p.successText}>Thank you! Your submission has been received!</div>
        </div>
        <div className="error-message w-form-fail">
          <div className={p.errorText}>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </>
  );
}
