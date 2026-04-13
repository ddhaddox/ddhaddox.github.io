---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---

{% assign all_pubs = site.publications | sort: "date" | reverse %}
{% assign published_pubs = all_pubs | where_exp: "p", "p.status != 'preprint'" %}
{% assign preprint_pubs = all_pubs | where: "status", "preprint" %}

<div class="publications-list">
  {% assign current_year = "" %}
  {% for pub in published_pubs %}
    {% assign pub_year = pub.date | date: "%Y" %}
    {% if pub_year != current_year %}
      {% unless forloop.first %}  </div>
      {% endunless %}
      <div class="publications-year-group">
        <div class="publications-year">{{ pub_year }}</div>
      {% assign current_year = pub_year %}
    {% endif %}
    {% include publication-entry.html pub=pub %}
    {% if forloop.last %}  </div>
    {% endif %}
  {% endfor %}

{% if preprint_pubs.size > 0 %}
<div class="publications-year-group">
<div class="publications-year">Preprint</div>
{% for pub in preprint_pubs %}
{% include publication-entry.html pub=pub %}
{% endfor %}
</div>
{% endif %}
</div>
