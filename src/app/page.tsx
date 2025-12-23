import DesktopView from "@/components/layouts/desktopView";
import MobileView from "@/components/layouts/mobileView";







export default function Home() {
  return (
    <div lang="en" className="overflow-hidden">
      
      {/* desktopView ... the main view for the desktop in the components/layouts/desktopview.tsx */}
      
      <div className="lg:block --------- hidden">
        <DesktopView/>
      </div>
      
      {/* mobileView ... I collected all the pages in one section and added them here ... app/components/layouts/mobileView.tsx */}
      
      <div className="lg:hidden --------- block">
        <MobileView/>
        </div>
    </div>
  );
}
