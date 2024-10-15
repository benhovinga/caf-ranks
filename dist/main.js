import ranksJSON from "./caf-ranks.json";
export const rankMeta = {
    command: ranksJSON.command,
    category: ranksJSON.category,
};
export const allRanks = ranksJSON.allRanks.map((rank) => ({
    ...rank,
    commands: rank.commands,
    category: rank.category,
    getCategoryName: function () {
        return rankMeta.category[this.category];
    },
}));
export function filterRanksByCommand(ranks, command) {
    return ranks.filter((rank) => {
        return rank.commands.filter((_command) => _command === command).length > 0;
    });
}
export function filterRanksByCategory(ranks, category) {
    return ranks.filter((rank) => rank.category === category);
}
export default {
    rankMeta,
    allRanks,
    filterRanksByCommand,
    filterRanksByCategory,
};
