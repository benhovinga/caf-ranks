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
- [Military Ranks - Canada.ca](https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html) ([2023-08-30](https://web.archive.org/web/20230913233331/https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html))
- [Grades militaires - Canada.ca](https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html) ([2023-08-30](https://web.archive.org/web/20230930204703/https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html))

## License
MIT License

Copyright (c) 2024 Ben Hovinga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
