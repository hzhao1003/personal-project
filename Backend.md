1. created rest API: (CRUD)
    1) for different categories (Interview Tips, Job Post Share)
    2) each categories has list of post
    3) each post has different comments
-----------------------------------------
models:
1. categories
    -- name 
2. posts
    -- title, content, post_date, category_id (FK)
3. comments
    -- content, post_date, post_id (FK)