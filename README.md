# Canadian Armed Forces (CAF) Ranks
Current Version: v0.2

Ranks in the Canadian Armed Forces mark a person's position in its hierarchical structure. As people gain more responsibility and authority, they earn promotions in rank.

## [caf_ranks.json](caf_ranks.json)
This is a complete list of ranks within the Canadian Armed Forces (CAF). It includes both English and French versions of each rank.

### Rank Object Keys
- `level`: The rank level. Multiple ranks will share a level, only seperated by element. 
- `title`: The full rank title
    - `en`: English text
    - `fr`: French text
- `abbreviation`: The rank abbreviation
    - `en`: English text
    - `fr`: French text
- `category`: The category of the rank
    - `en`: English text
    - `fr`: French text
- `element`: A list of CAF elements that use the rank (Options: CA, RCAF, RCN)

## Sources
- [Military Ranks - Canada.ca](https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html) ([2023-08-30](https://web.archive.org/web/20230913233331/https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html))
- [Grades militaires - Canada.ca](https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html) ([2023-08-30](https://web.archive.org/web/20230930204703/https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html))

## License

This data is made available under the Public Domain Dedication and License v1.0 whose full text can be found at: http://opendatacommons.org/licenses/pddl/1.0/
