import classes from './page.module.scss';
import AppHeader from "@/layout/AppHeader/AppHeader";
import DiscoverSection from "@/layout/Discover/DiscoverSection";
import TipSection from '@/layout/Tips/TipSection';
import TipSectionTwo from '@/layout/TipSectionTwo/TipSectionTwo';
import TopAuthors from '@/layout/TopAuthors/TopAuthors';
import Categories from '@/layout/Categories/Categories';
import GetStartedSection from '@/layout/GetStartedSection/GetStartedSection';
import AppFooter from '@/components/AppFooter/AppFooter';


export default async function Home() {
  return (
    <div className={classes.home_container}>
     <AppHeader/>
     <div className={classes.home_discover_section}>
     <DiscoverSection/>
     </div>
     <div className={classes.home_tip_section}>
     <TipSection/>
     </div>

     <div className={classes.home_topAuthors_section}>
      <TopAuthors/>
     </div>

     <div className={classes.home_tip_section}>
     <TipSectionTwo/>
     </div>

     <div className={classes.home_category_section}>
     <Categories/>
     </div>

     <div className={classes.home_getStarted_section}>
      <GetStartedSection/>
     </div>
   
    </div>
  );
}
