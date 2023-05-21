INSERT INTO Categories (Name, CreatedBy, Created)
VALUES ('Category 1', 'User 1', GETDATE()),
('Category 2', 'User 2', GETDATE()),
('Category 3', 'User 3', GETDATE()),
('Category 4', 'User 4', GETDATE()),
('Category 5', 'User 5', GETDATE()),
('Category 6', 'User 6', GETDATE()),
('Category 7', 'User 7', GETDATE()),
('Category 8', 'User 8', GETDATE()),
('Category 9', 'User 9', GETDATE()),
('Category 10', 'User 10', GETDATE())


INSERT INTO Posts (Title, Brief, Content, ImagePath, CategoryId, CreatedBy, Created)
SELECT 'Post 1', 'Brief of Post 1', 'Content of Post 1', '/images/post1.jpg', CategoryId, 'User 1', GETDATE()
FROM Categories
WHERE CategoryId <= 10
UNION ALL
SELECT 'Post 2', 'Brief of Post 2', 'Content of Post 2', '/images/post2.jpg', CategoryId, 'User 2', GETDATE()
FROM Categories
WHERE CategoryId <= 10
UNION ALL
SELECT 'Post 3', 'Brief of Post 3', 'Content of Post 3', '/images/post3.jpg', CategoryId, 'User 3', GETDATE()
FROM Categories
WHERE CategoryId <= 10
UNION ALL
SELECT 'Post 4', 'Brief of Post 4', 'Content of Post 4', '/images/post4.jpg', CategoryId, 'User 4', GETDATE()
FROM Categories
WHERE CategoryId <= 10

INSERT INTO Comments (Content, PostId, CreatedBy, Created)
SELECT 'Comment 1 for Post ' + CAST(PostId AS VARCHAR), PostId, 'User 1', GETDATE()
FROM Posts
WHERE PostId <= 40
UNION ALL
SELECT 'Comment 2 for Post ' + CAST(PostId AS VARCHAR), PostId, 'User 2', GETDATE()
FROM Posts
WHERE PostId <= 40
UNION ALL
SELECT 'Comment 3 for Post ' + CAST(PostId AS VARCHAR), PostId, 'User 3', GETDATE()
FROM Posts
WHERE PostId <= 40