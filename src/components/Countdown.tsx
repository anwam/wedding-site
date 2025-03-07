import CountdownComponent from "react-countdown";

type Props = {
  date: number | Date;
};

export default function Countdown({ date }: Props) {
  return (
    <CountdownComponent
      date={date}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return "Happy Wedding Day!";
        }
        return (
          <div className="flex items-center gap-x-4 md:gap-x-12">
            <p className="flex flex-col items-center justify-center gap-y-2 min-w-8">
              <span className="text-4xl">{days}</span>
              <span className="text-xs">DAYS</span>
            </p>
            <p className="flex flex-col items-center justify-center gap-y-2 min-w-8">
              <span className="text-4xl">{hours}</span>
              <span className="text-xs">HOURS</span>
            </p>
            <p className="flex flex-col items-center justify-center gap-y-2 min-w-8">
              <span className="text-4xl">{minutes}</span>
              <span className="text-xs">MINUTES</span>
            </p>
            <p className="flex flex-col items-center justify-center gap-y-2 min-w-8">
              <span className="text-4xl">{seconds}</span>
              <span className="text-xs">SECONDS</span>
            </p>
          </div>
        );
      }}
    />
  );
}
