import { Hero } from "@/components/sections/Hero";
import { QuickHighlights } from "@/components/sections/QuickHighlights";
import { HospitalOverview } from "@/components/sections/HospitalOverview";
import { Departments } from "@/components/sections/Departments";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Facilities } from "@/components/sections/Facilities";
import { Doctors } from "@/components/sections/Doctors";
import { EmergencyHighlight } from "@/components/sections/EmergencyHighlight";
import { TrustSection } from "@/components/sections/TrustSection";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { ContactPreview } from "@/components/sections/ContactPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickHighlights />
      <HospitalOverview />
      <Departments />
      <WhyChooseUs />
      <Facilities />
      <Doctors />
      <TrustSection />
      <EmergencyHighlight />
      <AppointmentCTA />
      <ContactPreview />
    </>
  );
}
