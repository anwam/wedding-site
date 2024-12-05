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
          <div className="flex items-center gap-x-2">
            <span className="px-2 py-1 bg-white rounded shadow-lg">
              {days} days
            </span>
            :
            <span className="px-2 py-1 bg-white rounded shadow-lg">
              {hours} hours
            </span>
            :
            <span className="px-2 py-1 bg-white rounded shadow-lg">
              {minutes} minutes
            </span>
            :
            <span className="px-2 py-1 bg-white rounded shadow-lg">
              {seconds} seconds
            </span>
          </div>
        );
      }}
    />
  );
}
