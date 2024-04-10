import AppNavbar from "@/components/AppNavbar/AppNavbar"
import Typography from "@/sharedui/Typography/Typography"
import AppSearchBar from "./AppSearchBar"
import classes from './appHeader.module.scss';


function AppHeader() {
  return (
    <div className={classes.appHeader_container}>
      <AppNavbar/>

    <div className={classes.appHeader_headline}>
       <Typography variant="headline" theme="white">Challenge your brain everyday with <span>BrainBoost</span></Typography> 
    </div>
      
      <div className={classes.appHeader_search}>
        <AppSearchBar/>
      </div>
    </div>
  )
}

export default AppHeader
