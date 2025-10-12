USE [OtoMeMo];
GO

INSERT INTO [User] (DisplayName, Bio, DisplayPicture, Email)
VALUES
('AlexH', 'Indie game enthusiast and visual novel fan.', 'alexh.png', 'alexh@example.com'),
('JamieL', 'Collector of otome games and retro consoles.', 'jamiel.jpg', 'jamie.l@example.com'),
('SammyQ', 'Loves narrative-driven games and romance stories.', 'sammyq.png', 'sammyq@example.com');
GO

INSERT INTO [Game] (Title, Description, Developer, Publisher, YearReleased)
VALUES
('Amnesia: Memories', 'A popular otome game where the protagonist suffers from amnesia and navigates multiple romantic storylines.', 'Idea Factory', 'Idea Factory', 2011),
('Amnesia: Later x Crowd', 'A follow-up to Amnesia: Memories introducing new characters and scenarios.', 'Idea Factory', 'Idea Factory', 2016),
('Cupid Parasite', 'The protagonist works in a matchmaking company, helping clients find love while navigating her own romance.', 'Voltage Inc.', 'Voltage Inc.', 2016),
('Diabolik Lovers', 'A dark vampire romance visual novel with six seductive vampire brothers.', 'Rejet', 'Idea Factory', 2012),
('Mr. Love: Queen''s Choice', 'A romance game mixing dating sims with detective elements, where the player interacts with multiple male leads.', 'Papergames', 'Papergames', 2019),
('Tears of Themis', 'Mystery romance game blending investigation, courtroom drama, and romantic storylines.', 'miHoYo', 'miHoYo', 2020),
('Lovebrush Chronicles', 'Fantasy otome where the protagonist can enter magical paintings to meet potential love interests.', 'Voltage Inc.', 'Voltage Inc.', 2018),
('Love and Deepspace', 'Sci-fi otome adventure where romance unfolds across interstellar missions.', 'Voltage Inc.', 'Voltage Inc.', 2021);
GO

INSERT INTO [List] (UserId, Name)
VALUES
(1, 'Played'),
(1, 'Playing'),
(1, 'Want to Play'),
(2, 'Played'),
(2, 'Playing'),
(2, 'Want to Play'),
(3, 'Played'),
(3, 'Playing'),
(3, 'Want to Play');
GO

INSERT INTO [ListGame] (ListId, GameId, DateStarted, DateFinished, Rating, Review)
VALUES
(1, 1, '2024-01-15', '2024-02-10', 9, 'Classic amnesia romance. Multiple playthroughs recommended.'),
(2, 2, '2024-02-15', NULL, NULL, NULL),
(3, 6, NULL, NULL, NULL, NULL),
(4, 3, '2023-12-01', '2023-12-20', 8, 'Fun matchmaking game with cute art.'),
(5, 5, '2024-03-05', NULL, NULL, NULL),
(6, 8, NULL, NULL, NULL, NULL),
(7, 4, '2023-11-05', '2023-12-01', 7, 'Dark vampire romance, not for everyone.'),
(8, 7, '2024-01-20', NULL, NULL, NULL),
(9, 2, NULL, NULL, NULL, NULL);
GO
