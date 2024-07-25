import Image from "next/image";
type GameCardProps = {
  venue: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
};

export default function GameCard({
  venue,
  homeTeamLogo,
  awayTeamLogo,
}: GameCardProps) {
  return (
    <div className="flex flex-col items-center border-2 mt-4 p-5">
      <p>{venue}</p>
      <div className="flex items-center mt-3">
        <Image
          className="mr-2"
          src={homeTeamLogo}
          alt="homeTeamLogo"
          width={40}
          height={40}
        />
        <p>VS</p>
        <Image
          className="ml-2"
          src={awayTeamLogo}
          alt="awayTeamLogo"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
