
import Countdown from 'react-countdown';
// import TimeFormat from 'hh-mm-ss'

const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <div className="grid grid-cols-12 mt-6 mb-[3rem] xxl:gap-y-0 gap-4 justify-center">
        <div className='xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-3 col-span-6'>
          <div className='p-3 under-maintenance-time rounded'>
            <p className="mb-1 fs-12 op-5">Days</p>
            <h4 className="fw-semibold mb-0">{days}</h4>
          </div>
        </div>
        <div className='xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-3 col-span-6'>
          <div className='p-3 under-maintenance-time rounded'>
            <p className="mb-1 fs-12 op-5">Hours</p>
            <h4 className="fw-semibold mb-0">{hours}</h4>
          </div>
        </div>
        <div className='xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-3 col-span-6'>
          <div className='p-3 under-maintenance-time rounded'>
            <p className="mb-1 fs-12 op-5">Minutes</p>
            <h4 className="fw-semibold mb-0">{minutes}</h4>
          </div>
        </div>
        <div className='xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-3 col-span-6'>
          <div className='p-3 under-maintenance-time rounded'>
            <p className="mb-1 fs-12 op-5">Seconds</p>
            <h4 className="fw-semibold mb-0">{seconds}</h4>
          </div>
        </div>
      </div>
    );
  }
};

export function DayCounter() {
  return (<Countdown date={Date.now() + 8500590000} renderer={rendering} />);
}
