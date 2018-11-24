#!/bin/sh

source env/bin/activate

echo "[" > facts.json
python scrape.py | xargs -n1 python -c \
    "import sys; import json; print(json.dumps(sys.argv[1]) + ',' + '\n')" >> facts.json
echo "]" >> facts.json
