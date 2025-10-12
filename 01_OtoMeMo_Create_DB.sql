USE [master];

IF db_id('OtoMeMo') IS NULL
    CREATE DATABASE [OtoMeMo];
GO

USE [OtoMeMo];
GO

DROP TABLE IF EXISTS [ListGame];
DROP TABLE IF EXISTS [List];
DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS [Game];
GO

CREATE TABLE [Game] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [Title] NVARCHAR(255) NOT NULL,
    [Description] NVARCHAR(MAX) NOT NULL,
    [Developer] NVARCHAR(255),
    [Publisher] NVARCHAR(255),
    [YearReleased] INT
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
    CONSTRAINT [FK_List_User] FOREIGN KEY ([UserId])
        REFERENCES [User]([Id])
        ON DELETE CASCADE
);
GO

CREATE TABLE [ListGame] (
    [Id] INT PRIMARY KEY IDENTITY(1,1),
    [ListId] INT NOT NULL,
    [GameId] INT NOT NULL,
    [DateStarted] DATE,
    [DateFinished] DATE,
    [Rating] INT,
    [Review] NVARCHAR(MAX),
    CONSTRAINT [FK_ListGame_List] FOREIGN KEY ([ListId])
        REFERENCES [List]([Id])
        ON DELETE CASCADE,
    CONSTRAINT [FK_ListGame_Game] FOREIGN KEY ([GameId])
        REFERENCES [Game]([Id])
);
GO
