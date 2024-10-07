"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRanks = exports.rankMeta = exports.RankCategory = exports.CAFElement = void 0;
exports.getRanksByElement = getRanksByElement;
exports.getRanksByCategory = getRanksByCategory;
const caf_ranks_json_1 = __importDefault(require("./caf-ranks.json"));
var CAFElement;
(function (CAFElement) {
    CAFElement["CA"] = "CA";
    CAFElement["RCAF"] = "RCAF";
    CAFElement["RCN"] = "RCN";
})(CAFElement || (exports.CAFElement = CAFElement = {}));
var RankCategory;
(function (RankCategory) {
    RankCategory["FlagOfficer"] = "FlagOfficer";
    RankCategory["SeniorOfficer"] = "SeniorOfficer";
    RankCategory["JuniorOfficer"] = "JuniorOfficer";
    RankCategory["SubordinateOfficer"] = "SubordinateOfficer";
    RankCategory["SeniorNCO"] = "SeniorNCO";
    RankCategory["JuniorNCM"] = "JuniorNCM";
})(RankCategory || (exports.RankCategory = RankCategory = {}));
exports.rankMeta = {
    element: caf_ranks_json_1.default.element,
    category: caf_ranks_json_1.default.category,
};
exports.allRanks = caf_ranks_json_1.default.allRanks.map((rank) => (Object.assign(Object.assign({}, rank), { element: rank.element, category: rank.category, getCategoryName: function () {
        return exports.rankMeta.category[this.category];
    } })));
function getRanksByElement(ranks, element) {
    return ranks.filter((rank) => {
        return rank.element.filter((elem) => elem === element).length > 0;
    });
}
function getRanksByCategory(ranks, category) {
    return ranks.filter((rank) => rank.category === category);
}
exports.default = exports.allRanks;
