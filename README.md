# Canadian Armed Forces (CAF) Ranks
Current Version: v0.3

Ranks in the Canadian Armed Forces mark a person's position in its hierarchical structure. As people gain more responsibility and authority, they earn promotions in rank.

## [caf-ranks.json](caf-ranks.json)
This is a complete list of ranks within the Canadian Armed Forces (CAF). It includes both English and French versions of each rank. A minified version of this dataset exists as [caf-ranks.min.json](caf-ranks.min.json) after running `python3 minify.py`.

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

## License
[caf-ranks](https://github.com/benhovinga/caf-ranks) by [Ben Hovinga](https://github.com/benhovinga) is licensed under [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).

Contains information licensed under the [Open Government Licence – Canada](https://open.canada.ca/en/open-government-licence-canada).

### Canadian Armed Forces Ranks JSON `caf-ranks.json`
- __License__: [Open Government Licence - Canada 2.0](https://open.canada.ca/en/open-government-licence-canada)
- __Author__: Compiled by [Ben Hovinga](https://github.com/benhovinga)
- __Sources__:
    - Tables found on [Military Ranks - Canada.ca](https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html) ([2023-08-30](https://web.archive.org/web/20230913233331/https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html))
    - Tables found on [Grades militaires - Canada.ca](https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html) ([2023-08-30](https://web.archive.org/web/20230930204703/https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html))

### Canadian Armed Forces Ranks SVG's  `/images`
- __License__: [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/deed.en)
- __Author__: Created by [Sodacan](https://commons.wikimedia.org/wiki/User:Sodacan)
- __Source__: Tables found on [Canadian Armed Forces ranks and insignia - Wikipedia](https://en.wikipedia.org/wiki/Canadian_Armed_Forces_ranks_and_insignia)
