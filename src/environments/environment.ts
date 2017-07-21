// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  ffn: {
    apiKey: 'ym953vezh2ke',
    nflTeamsApi: 'https://www.fantasyfootballnerd.com/service/nfl-teams/json/',
    nflScheduleApi: 'https://www.fantasyfootballnerd.com/service/schedule/json/',
    nflPlayersApi: 'https://www.fantasyfootballnerd.com/service/players/json/',
    nflTeamByeWeekApi: 'https://www.fantasyfootballnerd.com/service/byes/json/',
    weatherForcastApi: 'https://www.fantasyfootballnerd.com/service/weather/json/'
  }
};
