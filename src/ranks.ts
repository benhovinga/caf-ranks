import Rank from "./models/Rank";
import { Uniform } from "./types";

const ranks: Rank[] = [
  {
    title: { en: "General", fr: "Général" },
    abbreviation: { en: "Gen", fr: "gén" },
    level: 19,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Admiral", fr: "Amiral" },
    abbreviation: { en: "Adm", fr: "am" },
    level: 19,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Lieutenant-General", fr: "Lieutenant-général" },
    abbreviation: { en: "LGen", fr: "lgén" },
    level: 18,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Vice-Admiral", fr: "Vice-amiral" },
    abbreviation: { en: "VAdm", fr: "vam" },
    level: 18,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Major-General", fr: "Major-général" },
    abbreviation: { en: "MGen", fr: "mgén" },
    level: 17,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Rear-Admiral", fr: "Contre-amiral" },
    abbreviation: { en: "RAdm", fr: "cam" },
    level: 17,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Brigadier-General", fr: "Brigadier-général" },
    abbreviation: { en: "BGen", fr: "bgén" },
    level: 16,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Commodore", fr: "Commodore" },
    abbreviation: { en: "Cmdre", fr: "cmdre" },
    level: 16,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Colonel", fr: "Colonel" },
    abbreviation: { en: "Col", fr: "col" },
    level: 15,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Captain(N)", fr: "Capitaine de vaisseau" },
    abbreviation: { en: "Capt(N)", fr: "capv" },
    level: 15,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Lieutenant-Colonel", fr: "Lieutenant-colonel" },
    abbreviation: { en: "LCol", fr: "lcol" },
    level: 14,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Commander", fr: "Capitaine de frégate" },
    abbreviation: { en: "Cdr", fr: "capf" },
    level: 14,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Major", fr: "Major" },
    abbreviation: { en: "Maj", fr: "maj" },
    level: 13,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Lieutenant-Commander", fr: "Capitaine de corvette" },
    abbreviation: { en: "LCdr", fr: "capc" },
    level: 13,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Captain", fr: "Capitaine" },
    abbreviation: { en: "Capt", fr: "capt" },
    level: 12,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Lieutenant(N)", fr: "Lieutenant de vaisseau" },
    abbreviation: { en: "Lt(N)", fr: "ltv" },
    level: 12,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Lieutenant", fr: "Lieutenant" },
    abbreviation: { en: "Lt", fr: "lt" },
    level: 11,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: {
      en: "Sub-Lieutenant",
      fr: "Enseigne de vaisseau de 1re classe",
    },
    abbreviation: { en: "SLt", fr: "ens 1" },
    level: 11,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Second Lieutenant", fr: "Sous-lieutenant" },
    abbreviation: { en: "2Lt", fr: "slt" },
    level: 10,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: {
      en: "Acting Sub-Lieutenant",
      fr: "Enseigne de vaisseau de 2e classe",
    },
    abbreviation: { en: "A/SLt", fr: "ens 2" },
    level: 10,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Officer Cadet", fr: "Élève-officier" },
    abbreviation: { en: "OCdt", fr: "élof" },
    level: 9,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Naval Cadet", fr: "Aspirant de marine" },
    abbreviation: { en: "NCdt", fr: "aspm" },
    level: 9,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Chief Warrant Officer", fr: "Adjudant-chef" },
    abbreviation: { en: "CWO", fr: "adjuc" },
    level: 8,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: {
      en: "Chief Petty Officer 1st class",
      fr: "Premier maître de 1re classe",
    },
    abbreviation: { en: "CPO 1", fr: "pm 1" },
    level: 8,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Master Warrant Officer", fr: "Adjudant-maître" },
    abbreviation: { en: "MWO", fr: "adjum" },
    level: 7,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: {
      en: "Chief Petty Officer 2nd class",
      fr: "Premier maître de 2e classe",
    },
    abbreviation: { en: "CPO 2", fr: "pm 2" },
    level: 7,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Warrant Officer", fr: "Adjudant" },
    abbreviation: { en: "WO", fr: "adj" },
    level: 6,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Petty Officer 1st class", fr: "Maître de 1re classe" },
    abbreviation: { en: "PO 1", fr: "m 1" },
    level: 6,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Sergeant", fr: "Sergent" },
    abbreviation: { en: "Sgt", fr: "stg" },
    level: 5,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Petty Officer 2nd class", fr: "Maître de 2e classe" },
    abbreviation: { en: "PO 2", fr: "m 2" },
    level: 5,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Master Corporal", fr: "Caporal-chef" },
    abbreviation: { en: "MCpl", fr: "cplc" },
    level: 4,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Master Sailor", fr: "Matelot-chef" },
    abbreviation: { en: "MS", fr: "matc" },
    level: 4,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Corporal", fr: "Caporal" },
    abbreviation: { en: "Cpl", fr: "cpl" },
    level: 3,
    uniforms: ["CA", "RCAF"],
  },
  {
    title: { en: "Sailor 1st Class", fr: "Matelot de 1re classe" },
    abbreviation: { en: "S1", fr: "mat 1" },
    level: 3,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Private (Trained)", fr: "Soldat (formé)" },
    abbreviation: { en: "Pte (T)", fr: "sdt (f)" },
    level: 2,
    uniforms: ["CA"],
  },
  {
    title: { en: "Aviator (Trained)", fr: "Aviateur (formé)" },
    abbreviation: { en: "Avr (T)", fr: "avr (f)" },
    level: 2,
    uniforms: ["RCAF"],
  },
  {
    title: { en: "Sailor 2nd Class", fr: "Matelot de 2e classe" },
    abbreviation: { en: "S2", fr: "mat 2" },
    level: 2,
    uniforms: ["RCN"],
  },
  {
    title: { en: "Private (Basic)", fr: "Soldat (confirmé)" },
    abbreviation: { en: "Pte (B)", fr: "sdt (c)" },
    level: 1,
    uniforms: ["CA"],
  },
  {
    title: { en: "Aviator (Basic)", fr: "Aviateur (confirmé)" },
    abbreviation: { en: "Avr (B)", fr: "avr (c)" },
    level: 1,
    uniforms: ["RCAF"],
  },
  {
    title: { en: "Sailor 3rd Class", fr: "Matelot de 3e classe" },
    abbreviation: { en: "S3", fr: "mat 3" },
    level: 1,
    uniforms: ["RCN"],
  },
].map(
  (rank) =>
    new Rank(
      rank.title,
      rank.abbreviation,
      rank.level,
      rank.uniforms as Uniform[]
    )
);

export default ranks;
