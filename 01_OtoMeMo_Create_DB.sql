USE [master]

IF db_id('OtoMeMo') IS NULL
    CREATE DATABASE [OtoMeMo]
GO

USE [OtoMeMo]
GO

DROP TABLE IF EXISTS [UserGameList];
DROP TABLE IF EXISTS [UserGame];
DROP TABLE IF EXISTS [List];
DROP TABLE IF EXISTS [GameGenre];
DROP TABLE IF EXISTS [GamePlatform];
DROP TABLE IF EXISTS [GameRegion];
DROP TABLE IF EXISTS [Genre];
DROP TABLE IF EXISTS [Platform];
DROP TABLE IF EXISTS [Region];
DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS [Game];
GO

CREATE TABLE [Game] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [Title] NVARCHAR(255) NOT NULL,
    [Description] NVARCHAR(MAX) NOT NULL,
    [Developer] NVARCHAR(255),
    [Publisher] NVARCHAR(255),
    [YearReleased] INT,
    [RouteCount] INT,
    [HasDigital] BIT NOT NULL DEFAULT 0,
    [HasPhysical] BIT NOT NULL DEFAULT 0
);
GO

CREATE TABLE [Genre] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [Name] NVARCHAR(255) NOT NULL
);
GO

CREATE TABLE [Platform] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [Name] NVARCHAR(255) NOT NULL
);
GO

CREATE TABLE [Region] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [Name] NVARCHAR(255) NOT NULL
);
GO

CREATE TABLE [GameGenre] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [GameId] INT NOT NULL,
    [GenreId] INT NOT NULL,
    CONSTRAINT [FK_GameGenre_Game] FOREIGN KEY ([GameId])
        REFERENCES [Game] ([Id]),
    CONSTRAINT [FK_GameGenre_Genre] FOREIGN KEY ([GenreId])
        REFERENCES [Genre] ([Id])
);
GO

CREATE TABLE [GamePlatform] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [GameId] INT NOT NULL,
    [PlatformId] INT NOT NULL,
    CONSTRAINT [FK_GamePlatform_Game] FOREIGN KEY ([GameId])
        REFERENCES [Game] ([Id]),
    CONSTRAINT [FK_GamePlatform_Platform] FOREIGN KEY ([PlatformId])
        REFERENCES [Platform] ([Id])
);
GO

CREATE TABLE [GameRegion] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [GameId] INT NOT NULL,
    [RegionId] INT NOT NULL,
    CONSTRAINT [FK_GameRegion_Game] FOREIGN KEY ([GameId])
        REFERENCES [Game] ([Id]),
    CONSTRAINT [FK_GameRegion_Region] FOREIGN KEY ([RegionId])
        REFERENCES [Region] ([Id])
);
GO

CREATE TABLE [User] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [DisplayName] NVARCHAR(255) NOT NULL,
    [DateJoined] DATETIME NOT NULL DEFAULT GETDATE(),
    [Bio] NVARCHAR(MAX),
    [DisplayPicture] NVARCHAR(255),
    [Email] NVARCHAR(255)
);
GO

CREATE TABLE [List] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [UserId] INT NOT NULL,
    [Name] NVARCHAR(255) NOT NULL,
    [Description] NVARCHAR(MAX),
    CONSTRAINT [FK_List_User] FOREIGN KEY ([UserId])
        REFERENCES [User] ([Id])
);
GO

CREATE TABLE [UserGame] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [UserId] INT NOT NULL,
    [GameId] INT NOT NULL,
    [CompletedRoutes] INT,
    [FavoriteRoute] NVARCHAR(255),
    [DateStarted] DATE,
    [DateFinished] DATE,
    [Rating] INT,
    [Review] NVARCHAR(MAX),
    CONSTRAINT [FK_UserGame_User] FOREIGN KEY ([UserId])
        REFERENCES [User] ([Id]),
    CONSTRAINT [FK_UserGame_Game] FOREIGN KEY ([GameId])
        REFERENCES [Game] ([Id])
);
GO

CREATE TABLE [UserGameList] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [UserGameId] INT NOT NULL,
    [ListId] INT NOT NULL,
    CONSTRAINT [FK_UserGameList_UserGame] FOREIGN KEY ([UserGameId])
        REFERENCES [UserGame] ([Id]),
    CONSTRAINT [FK_UserGameList_List] FOREIGN KEY ([ListId])
        REFERENCES [List] ([Id])
);
GO