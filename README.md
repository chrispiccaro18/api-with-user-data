API with User Data
===

Build a searchable, pageable explorer for an API of your choice, that authenticates a user, allows user to select favorites, stores favorite data, and displays user favorites.

## Process Requirements

1. Commit regularly (at least every 15-20 minutes). Demonstrate your thinking through regular incremental commits. Solo builds without an incremental commit history will not pass.
2. TDD every function that does not directly manipulate the DOM; template functions, query write/read, make search api url, data transformation. If these functions are not driven by tests (demonstrated by commit history) the build will not pass.

## API

Pick an API that:

1. Has CORS enabled
2. Accepts a search/query term
3. Supports paging

You will likely need to sign up for an API key.

## Intro spets
1. Do DDD
-search field
-search button
-example list item
- NASA takes 100items per page

2. TDD Template Literal Funciton
3. Export makeHTML function
4. make loadGallery function gallery-component.js

5, TDD query functions
    write filter to query
    write page to query
    read from query

//change hash onsubmit
//on hashchange update something
//make-url function
//update query function (assembly function)
//paging
//make sure have a search term

//hidden stuff (css classes, js func)
//filtering?
//year filter detail page?


//incorporate firebase backend
//auth shennanigans
//users
//favorite pictures