import Advertisement from "./Advertisement/Advertisement";
import Competence from "./Competence/Competence";
import Services from "./Services/Services";
import Advantages from "./Advantages/Advantages";
import Benefits from "./Benefits/Benefits";
import Portfolio from "./Portfolio/Portfolio";
import Working from "./Working/Working";
import Faq from "./Faq/Faq";
import About from "./About/About";
import Conditions from "./Conditions/Conditions";
import Location from "./Location/Location";
import Topnav from "./Topnav/Topnav";

function Main(props) {
  return (
    <main className="content">
      <Topnav
        onToggleBurger={props.onToggleBurger}
        isToggleBurger={props.isToggleBurger}
      />
      <Advertisement onOpenFeedback={props.onOpenFeedback}/>
      <Competence />
      <Services onOpenFeedback={props.onOpenFeedback}/>
      <Advantages />
      <Benefits />
      <Portfolio />
      <Working />
      <Faq />
      <About />
      <Conditions />
      <Location />
    </main>
  );
}

export default Main;
