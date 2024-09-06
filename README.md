# Canadian Armed Forces (CAF) Ranks
Current Version: v0.1

Ranks in the Canadian Armed Forces mark a person's position in its hierarchical structure. As people gain more responsibility and authority, they earn promotions in rank.

## [caf_ranks.json](caf_ranks.json)
This is a complete list of ranks within the Canadian Armed Forces (CAF). It includes both English and French versions of each rank.

### Rank Object Keys
- `level`: The rank level. Multiple ranks will share a level, only seperated by element.
- `rank_en`: The full rank name in English
- `rank_fr`: The full rank name in French
- `abbr_en`: The rank abbreviation in English
- `abbr_fr`: The rank abbreviation in French
- `category_en`: The category of the rank in English
- `category_fr`: The category of the rank in French
- `element`: A list of CAF elements that use the rank (Options: CA, RCAF, RCN)

## Sources
- [Military Ranks - Canada.ca](https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html)
- [Grades militaires - Canada.ca](https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html)
