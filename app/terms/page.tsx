import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { terms } from "@/content/legal";

export const metadata: Metadata = { title: terms.title, description: terms.intro };

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
