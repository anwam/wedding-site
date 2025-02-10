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
          <div className="flex gap-x-2 items-center">
            <span className="flex flex-row justify-center items-center px-2 py-1 rounded shadow-lg min-w-8">
              {days}
            </span>
            :
            <span className="flex flex-row justify-center items-center px-2 py-1 rounded shadow-lg min-w-8">
              {hours}
            </span>
            :
            <span className="flex flex-row justify-center items-center px-2 py-1 rounded shadow-lg min-w-8">
              {minutes}
            </span>
            :
            <span className="flex flex-row justify-center items-center px-2 py-1 rounded shadow-lg min-w-8">
              {seconds}
            </span>
          </div>
        );
      }}
    />
  );
}
