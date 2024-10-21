import { Uniform } from "./types";
import Rank from "./models/Rank";

function filterRanksByUniform(ranks: Rank[], uniform: Uniform): Rank[] {
  return ranks.filter((rank) => {
    return rank.uniforms.filter((_uniform) => _uniform === uniform).length > 0;
  });
}

export default {
  filterRanksByUniform,
};
