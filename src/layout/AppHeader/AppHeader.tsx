
import AppNavbar from "@/components/AppNavbar/AppNavbar"
import Typography from "@/sharedui/Typography/Typography"
import AppSearchBar from "./AppSearchBar"
import classes from './appHeader.module.scss';
import Image from "next/image";




function AppHeader() {
  return (
    <div className={classes.appHeader_container}>
     

    <div className={classes.appHeader_headline}>
       <Typography variant="headline" theme="white">Challenge your brain everyday with <span className="animate__animated animate__bounce">BrainBoost</span></Typography> 
    </div>
      
      <div className={classes.appHeader_search}>
        <AppSearchBar/>
      </div>
    </div>
  )
}

export default AppHeader
