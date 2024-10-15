// main.js
function myLibFunction(params) {
  // Process params and return something
  return { result: "This is your result!", params };
}

// Export for CommonJS and ES Module compatibility
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { myLibFunction }; // CommonJS export
} else {
  window.myLibFunction = myLibFunction; // Global for browser
}

// import ranksJSON from "./caf-ranks.json" assert { type: "json" };

// export const rankMeta: RankMeta = {
//   uniform: ranksJSON.uniform,
//   category: ranksJSON.category,
// };

// export const allRanks: Rank[] = ranksJSON.allRanks.map((rank) => ({
//   ...rank,
//   uniforms: rank.uniforms as Uniform[],
//   category: rank.category as RankCategory,
//   getCategoryName: function () {
//     return rankMeta.category[this.category];
//   },
// }));

// export function filterRanksByUniform(ranks: Rank[], uniform: Uniform): Rank[] {
//   return ranks.filter((rank) => {
//     return rank.uniforms.filter((_uniform) => _uniform === uniform).length > 0;
//   });
// }

// export function filterRanksByCategory(
//   ranks: Rank[],
//   category: RankCategory
// ): Rank[] {
//   return ranks.filter((rank) => rank.category === category);
// }

// export default {
//   rankMeta,
//   allRanks,
//   filterRanksByUniform,
//   filterRanksByCategory,
// };
