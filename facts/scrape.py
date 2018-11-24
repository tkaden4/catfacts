from bs4 import BeautifulSoup as Soup
import requests as R
import colorama
from colorama import Fore
import json


class PreloadedFacts:
    def __init__(self, path):
        self.path = path

    def name(self):
        return self.path

    def facts(self):
        return json.load(open(self.path, "r"))


def eprint(*args, **kwargs):
    import sys
    print(*args, **kwargs, file=sys.stderr)

if __name__ == "__main__":
    colorama.init()
    sources = [PreloadedFacts("purina_facts.json")]
    print("[")
    for source in sources:
        eprint(Fore.GREEN + "⊚ " + Fore.WHITE + "Loading " + Fore.YELLOW + "\"" + source.name() + "\"" + Fore.WHITE)
        try: 
            for x in source.facts():
                print(json.dumps(x) + ",")
        except Exception as e:
            eprint(Fore.RED + "⊚ " + Fore.WHITE + f"Error: {e}")
            continue
    print("]")
