export class ByeWeekResponse {
    ByeWeek: ByeWeek[];
}

class ByeWeek {
    byeWeekTeams: ByeWeekTeam[];
}

class ByeWeekTeam {
    team: string;
    byeWeek: string;
    displayName: string;
}
