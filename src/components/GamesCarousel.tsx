import GameCard from "./GameCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Response = [
  {
    game: {
      id: 2907,
    },
    league: {
      id: 1,
      season: 2024,
    },
    date: "2024-07-25T14:00:00+00:00",
    time: "14:00",
    timestamp: "1721916000",
    timezone: "UTC",
    round: "Regular Season",
    week: 20,
    venue: "Adelaide Oval",
    attendance: null,
    status: {
      long: "Cancelled",
      short: "CANC",
    },
    teams: {
      home: {
        id: 1,
        name: "Adelaide Crows",
        logo: "https://media.api-sports.io/afl/teams/1.png",
      },
      away: {
        id: 8,
        name: "Hawthorn Hawks",
        logo: "https://media.api-sports.io/afl/teams/8.png",
      },
    },
    scores: {
      home: {
        score: 0,
        goals: 0,
        behinds: 0,
        psgoals: 0,
        psbehinds: 0,
      },
      away: {
        score: 0,
        goals: 0,
        behinds: 0,
        psgoals: 0,
        psbehinds: 0,
      },
    },
  },
  {
    game: {
      id: 2909,
    },
    league: {
      id: 1,
      season: 2024,
    },
    date: "2024-07-25T14:00:00+00:00",
    time: "14:00",
    timestamp: "1721916000",
    timezone: "UTC",
    round: "Regular Season",
    week: 20,
    venue: "Melbourne Cricket Ground",
    attendance: null,
    status: {
      long: "Cancelled",
      short: "CANC",
    },
    teams: {
      home: {
        id: 4,
        name: "Collingwood Magpies",
        logo: "https://media.api-sports.io/afl/teams/4.png",
      },
      away: {
        id: 12,
        name: "Richmond Tigers",
        logo: "https://media.api-sports.io/afl/teams/12.png",
      },
    },
    scores: {
      home: {
        score: 0,
        goals: 0,
        behinds: 0,
        psgoals: 0,
        psbehinds: 0,
      },
      away: {
        score: 0,
        goals: 0,
        behinds: 0,
        psgoals: 0,
        psbehinds: 0,
      },
    },
  },
  {
    game: {
      id: 2907,
    },
    league: {
      id: 1,
      season: 2024,
    },
    date: "2024-07-25T14:00:00+00:00",
    time: "14:00",
    timestamp: "1721916000",
    timezone: "UTC",
    round: "Regular Season",
    week: 20,
    venue: "Adelaide Oval",
    attendance: null,
    status: {
      long: "Cancelled",
      short: "CANC",
    },
    teams: {
      home: {
        id: 1,
        name: "Adelaide Crows",
        logo: "https://media.api-sports.io/afl/teams/1.png",
      },
      away: {
        id: 8,
        name: "Hawthorn Hawks",
        logo: "https://media.api-sports.io/afl/teams/8.png",
      },
    },
    scores: {
      home: {
        score: 0,
        goals: 0,
        behinds: 0,
        psgoals: 0,
        psbehinds: 0,
      },
      away: {
        score: 0,
        goals: 0,
        behinds: 0,
        psgoals: 0,
        psbehinds: 0,
      },
    },
  },
  {
    game: {
      id: 2907,
    },
    league: {
      id: 1,
      season: 2024,
    },
    date: "2024-07-25T14:00:00+00:00",
    time: "14:00",
    timestamp: "1721916000",
    timezone: "UTC",
    round: "Regular Season",
    week: 20,
    venue: "Adelaide Oval",
    attendance: null,
    status: {
      long: "Cancelled",
      short: "CANC",
    },
    teams: {
      home: {
        id: 1,
        name: "Adelaide Crows",
        logo: "https://media.api-sports.io/afl/teams/1.png",
      },
      away: {
        id: 8,
        name: "Hawthorn Hawks",
        logo: "https://media.api-sports.io/afl/teams/8.png",
      },
    },
    scores: {
      home: {
        score: 0,
        goals: 0,
        behinds: 0,
        psgoals: 0,
        psbehinds: 0,
      },
      away: {
        score: 0,
        goals: 0,
        behinds: 0,
        psgoals: 0,
        psbehinds: 0,
      },
    },
  },
];

export default function GamesCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Response.map((game, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <GameCard
                venue={game.venue}
                homeTeamLogo={game.teams.home.logo}
                awayTeamLogo={game.teams.away.logo}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
