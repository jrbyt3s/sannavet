
import Countdown from 'react-countdown';
// import TimeFormat from 'hh-mm-ss'

const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({hours, minutes,completed}) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
        <div className="p-4 border-b dark:border-defaultborder/10 block">
        <div className="alert alert-primary text-center" role="alert">
            <span className="text-defaulttextcolor">Sale Ends in</span> <span className="font-semibold text-[0.875rem] text-primary ms-1">{hours}{minutes}</span>
        </div>
    </div>
    );
  }
};

export function DayCounter1() {
  return (<Countdown date={Date.now() + 8500590000} renderer={rendering} />);
}
