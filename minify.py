import json

with open('caf-ranks.json') as file:
    data = json.load(file)

with open('caf-ranks.min.json', 'w') as file:
    json.dump(data, file, separators=(',', ':'), indent=None, ensure_ascii=False)
