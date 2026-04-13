# Tools

Offline helper scripts that are not part of the built site. Jekyll ignores underscore-prefixed folders, so nothing here ships to production.

## `markdown_generator/`

Python + Jupyter notebooks that bulk-generate markdown files for the `_publications/` and `_talks/` collections from structured data.

- `publications.ipynb` / `publications.py` — generate publication entries from `publications.tsv`
- `talks.ipynb` / `talks.py` — generate talk entries from `talks.tsv`
- `PubsFromBib.ipynb` / `pubsFromBib.py` — generate publication entries from a BibTeX file
- `OrcidToBib.ipynb` — pull your ORCID publications list into a BibTeX file

**When to use:** If you ever have a spreadsheet or BibTeX export with many publications or talks, edit the `.tsv` or `.bib` file, then run the matching notebook/script to generate all markdown files at once instead of typing them by hand.

## `talkmap.py`, `talkmap.ipynb`, `talkmap_out.ipynb`

Generate a geographic map visualization of talk locations (Leaflet.js + geocoding).

**When to use:**

1. Ensure your talks in `_talks/` have `location:` front matter fields (e.g., `location: "San Francisco, CA"`)
2. Run `jupyter notebook talkmap.ipynb` to regenerate the map output
3. Restore `_pages/talkmap.html` from git history (deleted when talks were placeholder content)
4. Set `talkmap_link: true` in `_config.yml` to show the map link on the Talks page

These scripts are currently unused because the talks collection is empty. Restore when you have real talk entries with locations.
