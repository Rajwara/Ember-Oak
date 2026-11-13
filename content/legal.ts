import { site } from "@/content/site";

/**
 * Starting-point legal text. Have it reviewed by a lawyer before launch and
 * fill in the registered company name, trade licence and address.
 */
export type LegalDoc = {
  title: string;
  intro: string;
  updated: string;
  sections: { heading: string; paragraphs?: string[]; list?: string[] }[];
};

const UPDATED = "13 November 2026";

export const terms: LegalDoc = {
  title: "Terms & Conditions",
  intro: `These terms apply when you use the ${site.name} website or make a reservation with us. By using the site or booking a table, you agree to them.`,
  updated: UPDATED,
  sections: [
    {
      heading: "About us",
      paragraphs: [
        `This website is operated by ${site.name} ("we", "us", "our"). You can reach us at ${site.email} or ${site.phone}.`,
      ],
    },
    {
      heading: "Reservations",
      list: [
        "A reservation is confirmed only once you receive a confirmation from us by email, phone or message.",
        "We hold tables for 15 minutes after the booked time. After that the table may be released.",
        "Please let us know as early as possible if you need to cancel or change the number of guests.",
        "For large groups, private dining and special occasions we may ask for a deposit or a set menu. Any such terms will be shared with you before you confirm.",
      ],
    },
    {
      heading: "Menu, prices and allergies",
      paragraphs: [
        "Menus, prices and availability shown on the website are for information and may change without notice. The prices charged are those on the menu at the restaurant on the day of your visit.",
        "Our kitchen handles common allergens including nuts, gluten, dairy, eggs, soy and shellfish. Please tell your server about any allergy or dietary requirement before ordering. We cannot guarantee that any dish is completely free of allergens.",
      ],
    },
    {
      heading: "Use of the website",
      list: [
        "You may use this website for personal, non-commercial purposes only.",
        "You must not misuse the site, attempt to gain unauthorised access, or interfere with its operation.",
        "Text, photos, logos and design on this site belong to us or our licensors and may not be copied or reused without permission.",
      ],
    },
    {
      heading: "Links to other sites",
      paragraphs: [
        "Our website links to third-party sites such as social media and delivery platforms. We are not responsible for their content or practices, and their own terms apply when you use them.",
      ],
    },
    {
      heading: "Liability",
      paragraphs: [
        "We work to keep the information on this website accurate and up to date, but we do not guarantee that it is complete or error-free. To the extent permitted by law, we are not liable for any loss arising from your use of the website. Nothing in these terms limits any rights you have under applicable consumer protection law.",
      ],
    },
    {
      heading: "Changes and governing law",
      paragraphs: [
        "We may update these terms from time to time. The version published on this page applies from the date shown above.",
        "These terms are governed by the laws of the United Arab Emirates, and any dispute is subject to the jurisdiction of its competent courts.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [`Questions about these terms? Email us at ${site.email}.`],
    },
  ],
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  intro: `This policy explains what personal information ${site.name} collects through this website, how we use it and the choices you have.`,
  updated: UPDATED,
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        `${site.name} is responsible for the personal information described in this policy. Contact us at ${site.email} with any privacy question or request.`,
      ],
    },
    {
      heading: "What we collect",
      list: [
        "Reservation and contact details you give us: name, email, phone number, party size, date and time, and any notes such as allergies or occasions.",
        "Newsletter sign-ups: your email address.",
        "Basic technical information sent by your browser when you visit, such as device type, pages viewed and approximate location, used to keep the site working and secure.",
      ],
    },
    {
      heading: "How we use it",
      list: [
        "To handle and confirm reservations and reply to your messages.",
        "To send our newsletter, only if you subscribed. Every email includes a way to unsubscribe.",
        "To run, secure and improve the website.",
        "To meet our legal and accounting obligations.",
      ],
    },
    {
      heading: "Sharing your information",
      paragraphs: [
        "We do not sell your personal information. We share it only with service providers who help us run the restaurant and website, such as booking, email and hosting providers, under agreements that require them to protect it, or where the law requires us to.",
      ],
    },
    {
      heading: "Cookies and local storage",
      paragraphs: [
        "The website stores a small amount of information in your browser, for example the colour theme you picked. This stays on your device. If we add analytics or advertising tools in the future, we will update this policy and ask for your consent where required.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep reservation details for as long as needed to manage your booking and meet legal requirements, and newsletter details until you unsubscribe.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Depending on where you live, including under the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021), you may have the right to:",
      ],
      list: [
        "Access the personal information we hold about you.",
        "Ask us to correct or delete it.",
        "Object to or restrict how we use it, including for marketing.",
        "Withdraw consent at any time where we rely on consent.",
      ],
    },
    {
      heading: "Contact and changes",
      paragraphs: [
        `To exercise your rights or ask a question, email ${site.email}. We may update this policy from time to time; the date at the top shows when it last changed.`,
      ],
    },
  ],
};
