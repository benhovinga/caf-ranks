import json

with open('caf_ranks.json') as file:
    data = json.load(file)

for item in data:
    item['title'] = {'en': item['rank_en'], 'fr': item['rank_fr']}
    del item['rank_en'], item['rank_fr']
    item['abbreviation'] = {'en': item['abbr_en'], 'fr': item['abbr_fr']}
    del item['abbr_en'], item['abbr_fr']
    item['category'] = {'en': item['category_en'], 'fr': item['category_fr']}
    del item['category_en'], item['category_fr']
    

with open('caf_ranks2.json', 'w') as file:
    json.dump(data, file, ensure_ascii=False, indent=2)
