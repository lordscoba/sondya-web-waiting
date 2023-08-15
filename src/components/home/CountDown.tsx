import { useEffect, useState } from "react";
import { DotDot, Flag, Logo, Tape } from "../../images";

const CountDown = () => {
  const t: any = new Date();
  // target date
  const n: any = new Date("2024-03-01");
  // difference
  const d: any = (n - t) / (1000 * 60 * 60 * 24);

  const dz = Math.floor(d);
  const s = FractionPart(d);
  const y = s * 24;
  const yz = Math.floor(y);
  const v = FractionPart(y);
  const u = v * 60;
  const uz = Math.floor(u);
  const w = FractionPart(u);
  const p = w * 60;
  const pz: number = Math.floor(p);

  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [timetick, setTimetick] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(pz);
      setMinutes(uz);
      setHours(yz);
      setDays(dz);
    }, 1000);
  });

  useEffect(() => {
    if (timetick) {
      setTimetick(false);
    } else {
      setTimetick(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const daysArray = Array.from(days.toString()).map(Number);
  const hoursArray = Array.from(hours.toString()).map(Number);
  const minutesArray = Array.from(minutes.toString()).map(Number);
  const secondsArray = Array.from(seconds.toString()).map(Number);

  return (
    <div
      className="flex flex-col bg-no-repeat bg-cover bg-center gap-4 p-8 h-[80vh] md:h-[90vh]"
      style={{ backgroundImage: `url(${Tape})` }}
    >
      <div className=" flex items-center w-4/5 gap-2">
        <img className="h-12 md:h-16 m-0" src={Logo} alt="" />
        <div className=" text-[24px]  md:text-[36px] font-[800] text-[#EDB842] whitespace-nowrap">
          Coming Soon
        </div>
        <img className="h-5 md:h-8" src={Flag} alt="" />
      </div>
      <div className="flex flex-wrap md:space-x-2 items-center mx-auto my-auto justify-center">
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex space-x-2 mx-auto">
              {daysArray.map((digit, index) => (
                <CartNumber key={index} text={digit} />
              ))}
            </div>
            <div className="text-[22px] md:text-[32px] font-[800] mx-auto">
              DAYS
            </div>
          </div>
          {timetick ? (
            <DotDot1 />
          ) : (
            <div className="invisible">
              <DotDot1 />
            </div>
          )}
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex space-x-2 mx-auto">
              {hoursArray.map((digit, index) => (
                <CartNumber key={index} text={digit} />
              ))}
            </div>
            <div className="text-[22px] md:text-[32px] font-[800] mx-auto">
              HOURS
            </div>
          </div>
          {timetick ? (
            <DotDot1 />
          ) : (
            <div className="invisible">
              <DotDot1 />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex space-x-2 mx-auto">
            {minutesArray.map((digit, index) => (
              <CartNumber key={index} text={digit} />
            ))}
          </div>
          <div className="text-[22px] md:text-[32px] font-[800] mx-auto">
            MINUTES
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="flex space-x-2 mx-auto">
          {secondsArray.map((digit, index) => (
            <CartNumber key={index} text={digit} />
          ))}
        </div>
        <div className="text-[22px] md:text-[32px] font-[800] mx-auto">
          SECONDS
        </div>
      </div>
    </div>
  );
};

const CartNumber = ({ text }: any) => {
  return (
    <div className="rounded-xl shadow-lg shadow-zinc-700 text-[5rem] md:text-[8rem] font-[300] germania-one bg-white">
      <span className="p-2 md:p-6">{text}</span>
    </div>
  );
};

const DotDot1 = () => {
  return <img className="h-10 md:h-14 w-5" src={DotDot} alt="" />;
};

function FractionPart(t: number): number {
  const m = Math.floor(t);
  const f = t - m;
  return f;
}

export default CountDown;
