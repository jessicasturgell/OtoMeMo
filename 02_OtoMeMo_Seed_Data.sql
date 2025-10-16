USE [OtoMeMo];
GO

-- Clean tables
DELETE FROM [ListGame];
DELETE FROM [List];
DELETE FROM [User];
DELETE FROM [Game];

-- Insert Games
INSERT INTO [Game] ([Title], [Img], [Description], [Developer], [Publisher], [YearReleased])
OUTPUT INSERTED.Id, INSERTED.Title
VALUES
('Heartstrings', 'heartstrings.jpg', 'A romantic visual novel.', 'DreamSoft', 'LoveGames', 2019),
('Mystic Tales', 'mystictales.jpg', 'Fantasy adventure with branching paths.', 'MythicStudios', 'EpicPlay', 2020),
('Cafe Romance', 'caferomance.jpg', 'Manage a cafe while romancing locals.', 'BrewGames', 'SugarCo', 2018),
('Ghost Whisperer', 'ghostwhisperer.jpg', 'Solve mysteries by communicating with spirits.', 'PhantomDev', 'SpookyGames', 2021),
('Starbound Hearts', 'starboundhearts.jpg', 'Space travel and dating drama.', 'GalaxyStudios', 'CosmoPlay', 2022),
('Moonlit Promises', 'moonlitpromises.jpg', 'Night-time magical adventure.', 'LunaWorks', 'NightGames', 2017),
('Cyber Love', 'cyberlove.jpg', 'Futuristic cyberpunk romance.', 'NeonDev', 'TechPlay', 2021),
('Forest of Secrets', 'forestofsecrets.jpg', 'Hidden truths in an enchanted forest.', 'MysticArts', 'AdventureCo', 2019),
('Dreamcatcher', 'dreamcatcher.jpg', 'Explore dreams and reality.', 'IllusionSoft', 'MindGames', 2020),
('Rogue Hearts', 'roguehearts.jpg', 'Adventure and romance on the high seas.', 'PirateGames', 'OceanPlay', 2018);

-- Insert Users
INSERT INTO [User] ([DisplayName], [DateJoined], [Bio], [DisplayPicture], [Email])
OUTPUT INSERTED.Id, INSERTED.DisplayName
VALUES
('Luna', '2025-01-12', 'A lover of mystical romance.', 'luna.png', 'luna@example.com'),
('Kai', '2025-03-05', 'Tracks games and writes reviews.', 'kai.png', 'kai@example.com'),
('Aria', '2025-06-18', 'Collector of cute character art.', 'aria.png', 'aria@example.com'),
('Rin', '2025-08-21', 'VN reader and critic.', 'rin.png', 'rin@example.com'),
('Soren', '2025-09-30', 'Sci-fi and adventure fan.', 'soren.png', 'soren@example.com'),
('Eli', '2025-02-14', 'Always chasing the next story.', 'eli.png', 'eli@example.com'),
('Mira', '2025-04-10', 'Romance and mystery fan.', 'mira.png', 'mira@example.com'),
('Jax', '2025-05-22', 'Likes character-driven stories.', 'jax.png', 'jax@example.com'),
('Nova', '2025-07-11', 'Sci-fi and magical realism fan.', 'nova.png', 'nova@example.com'),
('Theo', '2025-08-05', 'Here for drama and romance.', 'theo.png', 'theo@example.com');

INSERT INTO [List] ([UserId], [Name])
OUTPUT INSERTED.Id, INSERTED.UserId, INSERTED.Name
VALUES
-- Luna (UserId = 1)
(1, 'Played'),
(1, 'Playing'),
(1, 'Want to Play'),

-- Kai (UserId = 2)
(2, 'Played'),
(2, 'Playing'),
(2, 'Want to Play'),

-- Aria (UserId = 3)
(3, 'Played'),
(3, 'Playing'),
(3, 'Want to Play'),

-- Rin (UserId = 4)
(4, 'Played'),
(4, 'Playing'),
(4, 'Want to Play'),

-- Soren (UserId = 5)
(5, 'Played'),
(5, 'Playing'),
(5, 'Want to Play'),

-- Eli (UserId = 6)
(6, 'Played'),
(6, 'Playing'),
(6, 'Want to Play'),

-- Mira (UserId = 7)
(7, 'Played'),
(7, 'Playing'),
(7, 'Want to Play'),

-- Jax (UserId = 8)
(8, 'Played'),
(8, 'Playing'),
(8, 'Want to Play'),

-- Nova (UserId = 9)
(9, 'Played'),
(9, 'Playing'),
(9, 'Want to Play'),

-- Theo (UserId = 10)
(10, 'Played'),
(10, 'Playing'),
(10, 'Want to Play');

INSERT INTO [ListGame] ([ListId], [GameId], [DateStarted], [DateFinished], [Rating], [Review])
VALUES
-- Luna (UserId = 1)
(1, 1, '2025-09-01', '2025-09-10', 5, 'A magical journey of love.'),
(1, 3, '2025-09-15', '2025-09-25', 4, 'Beautiful art and pacing.'),
(2, 5, '2025-10-01', NULL, NULL, NULL),
(3, 7, NULL, NULL, NULL, NULL),

-- Kai (UserId = 2)
(4, 2, '2025-08-10', '2025-08-20', 4, 'Well-written and immersive.'),
(4, 8, '2025-08-21', '2025-09-01', 3, 'Decent but predictable.'),
(5, 4, '2025-10-05', NULL, NULL, NULL),
(6, 9, NULL, NULL, NULL, NULL),

-- Aria (UserId = 3)
(7, 5, '2025-07-12', '2025-07-22', 5, 'Utterly adorable.'),
(8, 6, '2025-10-02', NULL, NULL, NULL),
(9, 1, NULL, NULL, NULL, NULL),

-- Rin (UserId = 4)
(10, 9, '2025-09-05', '2025-09-15', 4, 'Solid writing and characters.'),
(11, 3, '2025-10-08', NULL, NULL, NULL),
(12, 10, NULL, NULL, NULL, NULL),

-- Soren (UserId = 5)
(13, 4, '2025-09-12', '2025-09-20', 5, 'Epic story arc and world-building.'),
(14, 1, '2025-10-04', NULL, NULL, NULL),
(15, 2, NULL, NULL, NULL, NULL),

-- Eli (UserId = 6)
(16, 6, '2025-08-15', '2025-08-25', 4, 'Emotional and well-paced.'),
(17, 7, '2025-10-06', NULL, NULL, NULL),
(18, 8, NULL, NULL, NULL, NULL),

-- Mira (UserId = 7)
(19, 10, '2025-07-30', '2025-08-09', 5, 'A perfect mystery romance.'),
(20, 9, '2025-10-03', NULL, NULL, NULL),
(21, 5, NULL, NULL, NULL, NULL),

-- Jax (UserId = 8)
(22, 2, '2025-08-20', '2025-08-29', 3, 'Good, but not their best work.'),
(23, 3, '2025-10-07', NULL, NULL, NULL),
(24, 1, NULL, NULL, NULL, NULL),

-- Nova (UserId = 9)
(25, 7, '2025-09-02', '2025-09-12', 5, 'Fascinating sci-fi twist.'),
(26, 10, '2025-10-02', NULL, NULL, NULL),
(27, 4, NULL, NULL, NULL, NULL),

-- Theo (UserId = 10)
(28, 8, '2025-08-10', '2025-08-18', 4, 'Emotional and intense.'),
(29, 6, '2025-10-05', NULL, NULL, NULL),
(30, 9, NULL, NULL, NULL, NULL);