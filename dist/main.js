import ranksJSON from "./caf-ranks.json";
export const rankMeta = {
    uniform: ranksJSON.uniform,
    category: ranksJSON.category,
};
export const allRanks = ranksJSON.allRanks.map((rank) => ({
    ...rank,
    uniforms: rank.uniforms,
    category: rank.category,
    getCategoryName: function () {
        return rankMeta.category[this.category];
    },
}));
export function filterRanksByUniform(ranks, uniform) {
    return ranks.filter((rank) => {
        return rank.uniforms.filter((_uniform) => _uniform === uniform).length > 0;
    });
}
export function filterRanksByCategory(ranks, category) {
    return ranks.filter((rank) => rank.category === category);
}
export default {
    rankMeta,
    allRanks,
    filterRanksByUniform,
    filterRanksByCategory,
};
