import json

with open('caf_ranks.json') as file:
    data = json.load(file)

with open('caf_ranks.min.json', 'w') as file:
    json.dump(data, file, separators=(',', ':'), indent=None, ensure_ascii=False)
