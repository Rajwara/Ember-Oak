import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

/** Frame for every page except the homepage: site header, page content, site footer. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="eo-page">
      <div className="eo-page-header">
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
