# landing-page
Simple static landing page to direct to subdomains

This is a bare bones bootstrap-styled landing page with a notice at the top letting users know they can click cards to visit subdomains.

## What is this for?
If you have various subdomains that host content but you don't have anything going on at the top domain, you can host this page to show users _something_ if they poke around

## SETUP
Very simple! Just create a file called `sites.json` and fill it up with the sites you want to link to. Note that this file is actually sort of javascript because we set the json string to a variable, but the bulk is still properly formatted.

The file must be formatted like this. Copy-paste to get started:

```
sites = `
[
  { "name"          : "Site 1 name",
    "url"           : "https://site1url.com",
    "description"   : "Description of site 1",
    "icon"          : "fa fa-icon-for-site-1"
  },
  { "name"          : "Site 2 name",
    "url"           : "https://site2url.com",
    "description"   : "Description of site 2",
    "icon"          : "fa fa-icon-for-site-2"
  }
]`
```
