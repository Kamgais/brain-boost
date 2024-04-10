import { IoSearch } from "react-icons/io5";
import classes from './appHeader.module.scss';

function AppSearchBar() {
  return (
    <div className={classes.appSearchBar_container}>
      <input type="text" placeholder="Search for quizzes,users or categories" />
      <div className={classes.appSearchBar_icon}>
      <IoSearch/>
      </div>
    </div>
  )
}

export default AppSearchBar
