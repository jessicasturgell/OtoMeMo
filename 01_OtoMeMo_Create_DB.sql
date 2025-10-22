USE [master];

IF db_id('OtoMeMo') IS NULL
    CREATE DATABASE [OtoMeMo];
GO

USE [OtoMeMo];
GO

DROP TABLE IF EXISTS [ListGame];
DROP TABLE IF EXISTS [List];
DROP TABLE IF EXISTS [UserRole];
DROP TABLE IF EXISTS [Role];
DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS [GamePlatform];
DROP TABLE IF EXISTS [Platform];
DROP TABLE IF EXISTS [Game];
GO

CREATE TABLE [Game] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [TitleEnglish] NVARCHAR(255),
    [TitleRomanized] NVARCHAR(255),
    [TitleCharacters] NVARCHAR(255),
    [Img] NVARCHAR(255),
    [Description] NVARCHAR(MAX),
    [Developer] NVARCHAR(255),
    [Publisher] NVARCHAR(255),
    [OriginalLanguage] NVARCHAR(3),
    [IsLocalized] BIT,
    [YearReleasedOriginal] INT,
    [YearReleasedGlobal] INT
);
GO

CREATE TABLE [Platform] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [Name] NVARCHAR(255)
);
GO

CREATE TABLE [GamePlatform] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [GameId] INT,
    [PlatformId] INT
);
GO

CREATE TABLE [User] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [DisplayName] NVARCHAR(255),
    [DateJoined] DATETIME,
    [Bio] NVARCHAR(MAX),
    [DisplayPicture] NVARCHAR(255),
    [Email] NVARCHAR(255),
);
GO

CREATE TABLE [Role] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [Name] NVARCHAR(12)
);
GO

CREATE TABLE [UserRole] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [UserId] INT,
    [RoleId] INT,
    CONSTRAINT [FK_UserRole_User] FOREIGN KEY ([UserId])
        REFERENCES [User]([Id]),
    CONSTRAINT [FK_UserRole_Role] FOREIGN KEY ([RoleId])
        REFERENCES [Role]([Id])
);
GO

CREATE TABLE [List] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [UserId] INT,
    [Name] NVARCHAR(255),
    CONSTRAINT [FK_List_User] FOREIGN KEY ([UserId])
        REFERENCES [User]([Id])
);
GO

CREATE TABLE [ListGame] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [ListId] INT,
    [GameId] INT,
    [DateStarted] DATE,
    [DateFinished] DATE,
    [Rating] INT,
    [Review] NVARCHAR(MAX),
    CONSTRAINT [FK_ListGame_List] FOREIGN KEY ([ListId])
        REFERENCES [List]([Id]),
    CONSTRAINT [FK_ListGame_Game] FOREIGN KEY ([GameId])
        REFERENCES [Game]([Id])
);
GO