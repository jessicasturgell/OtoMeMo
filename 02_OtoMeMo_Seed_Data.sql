INSERT INTO Genres (Name) VALUES
('Modern'),
('Fantasy'),
('Mystery'),
('Historical'),
('Sci-fi'),
('Supernatural');

INSERT INTO Platforms (Name) VALUES
('iOS'),
('Android'),
('PC'),
('Switch');

INSERT INTO Regions (Name) VALUES
('Global'),
('JP'),
('CN'),
('OEL');

INSERT INTO Game (Title, [Description], Developer, Publisher, YearReleased, RouteCount, HasDigital, HasPhysical) VALUES
('Amnesia: Memories', 'A sprite called Orion accidentally attaches himself to the Heroine, causing her to lose all her memories. In order for Orion to free himself and return to his own world, the Heroine must regain these memories through interactions with important people and places in her life. Orion acts as her guide, giving her advice and perspective, and providing her with an inner voice. Orion also serves as the main narrator to the story especially in the later story sequels.', 'Idea Factory', 'Idea Factory', 2012, 5, 1, 1),
('Love and Deepspace', 'A immersive 3D Interactive Game where the player assumes the role of a Deepspace Hunter in a sci-fi universe.', 'Papergames', 'Infold', 2024, 0, 1, 0),
('Mystic Messenger', "In Mystic Messenger, the player takes the role of a female character whose name is chosen by the player. The female protagonist downloads a mysterious app that leads her into living in either a closed, secured apartment owned by Rika, the founder of a charity organization known as the RFA (Rika's Fundraising Association), or the Mint Eye HQ. She meets the remaining members of the RFA and is tasked to organize a party by inviting guests. In Another Story, Unknown tricks the protagonist into playing the game and brings her to Mint Eye, keeping her by his side. The protagonist is able to choose one out of 7 available routes, each with their own backgrounds, as well as finding out the truth behind the RFA.", 'Cheritz', 'Cheritz', 2016, 7, 1, 0);

INSERT INTO GameGenres (GameId, GenreId) VALUES
(1, 1), -- Amnesia: Modern
(1, 3), -- Amnesia: Mystery
(2, 2), -- Love and Deepspace: Fantasy
(2, 5), -- Love and Deepspace: Sci-fi
(3, 1); -- Mystic Messenger: Modern

INSERT INTO GamePlatforms (GameId, PlatformId) VALUES
(1, 4), -- Amnesia: Switch
(2, 1), -- Love and Deepspace: iOS
(2, 2), -- Love and Deepspace: Android
(3, 1), -- Mystic Messenger: iOS
(3, 2); -- Mystic Messenger: Android

INSERT INTO GameRegions (GameId, RegionId) VALUES
(1, 1), -- Amnesia: Global
(2, 1), -- Love and Deepspace: Global
(3, 1); -- Mystic Messenger: Global

INSERT INTO Users (DisplayName, DateJoined, Bio, DisplayPicture, Email) VALUES
('Daisy', '2025-10-09', 'Otome game enthusiast.', 'https://example.com/pfp.jpg', 'Daisy@example.com'),
('Alex', '2025-09-01', 'Loves fantasy routes.', NULL, 'alex@example.com');

INSERT INTO Lists (Name, [Description], UserId) VALUES
('Completed', 'Games I have fully played.', 1),
('Wishlist', 'Games I want to try.', 1),
('Favorites', 'My top love interests.', 2);

INSERT INTO UserGames (UserId, GameId, CompletedRoutes, FavoriteRoute, DateStarted, DateFinished, Rating, Review) VALUES
(1, 1, 5, 'Ikki', '2025-08-15', '2025-09-01', 5, 'Loved every route!'),
(1, 3, 0, NULL, '2025-09-15', NULL, NULL, NULL),
(2, 2, 2, 'Sylus', '2025-10-01', NULL, 5, 'Space romance is amazing.');

INSERT INTO UserGameLists (UserGamesId, ListId) VALUES
(1, 1), -- Daisy's Amnesia: Memories in Completed
(2, 2), -- Daisy's Mystic Messenger in Wishlist
(3, 3); -- Alex's Love and Deepspace in Favorites