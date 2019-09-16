
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/15/2019 15:03:08
-- Generated from EDMX file: C:\Users\wendw\Desktop\SCHOOL\Logidons-2019\WebAPI\WebAPI\DBModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [LogiDons];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_article_categorie]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[articles] DROP CONSTRAINT [FK_article_categorie];
GO
IF OBJECT_ID(N'[dbo].[FK_don_utilisateur]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[dons] DROP CONSTRAINT [FK_don_utilisateur];
GO
IF OBJECT_ID(N'[dbo].[FK_don_utilisateur1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[dons] DROP CONSTRAINT [FK_don_utilisateur1];
GO
IF OBJECT_ID(N'[dbo].[FK_donArticle_article1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[donArticles] DROP CONSTRAINT [FK_donArticle_article1];
GO
IF OBJECT_ID(N'[dbo].[FK_donArticle_don1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[donArticles] DROP CONSTRAINT [FK_donArticle_don1];
GO
IF OBJECT_ID(N'[dbo].[FK_livraison_beneficiare1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[livraisons] DROP CONSTRAINT [FK_livraison_beneficiare1];
GO
IF OBJECT_ID(N'[dbo].[FK_livraisonDonArticle_donArticle]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[livraisonDonArticles] DROP CONSTRAINT [FK_livraisonDonArticle_donArticle];
GO
IF OBJECT_ID(N'[dbo].[FK_livraisonDonArticle_livraison]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[livraisonDonArticles] DROP CONSTRAINT [FK_livraisonDonArticle_livraison];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[articles]', 'U') IS NOT NULL
    DROP TABLE [dbo].[articles];
GO
IF OBJECT_ID(N'[dbo].[beneficiares]', 'U') IS NOT NULL
    DROP TABLE [dbo].[beneficiares];
GO
IF OBJECT_ID(N'[dbo].[categories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[categories];
GO
IF OBJECT_ID(N'[dbo].[donArticles]', 'U') IS NOT NULL
    DROP TABLE [dbo].[donArticles];
GO
IF OBJECT_ID(N'[dbo].[dons]', 'U') IS NOT NULL
    DROP TABLE [dbo].[dons];
GO
IF OBJECT_ID(N'[dbo].[livraisonDonArticles]', 'U') IS NOT NULL
    DROP TABLE [dbo].[livraisonDonArticles];
GO
IF OBJECT_ID(N'[dbo].[livraisons]', 'U') IS NOT NULL
    DROP TABLE [dbo].[livraisons];
GO
IF OBJECT_ID(N'[dbo].[utilisateurs]', 'U') IS NOT NULL
    DROP TABLE [dbo].[utilisateurs];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'articles'
CREATE TABLE [dbo].[articles] (
    [IDarticle] int IDENTITY(1,1) NOT NULL,
    [IDcategorie] int  NULL,
    [nom] varchar(50)  NULL
);
GO

-- Creating table 'beneficiares'
CREATE TABLE [dbo].[beneficiares] (
    [IDbeneficiare] int IDENTITY(1,1) NOT NULL,
    [nom] varchar(50)  NULL,
    [sexe] nchar(2)  NULL,
    [dateDeNaissance] datetime  NULL,
    [situation] varchar(40)  NULL,
    [adresse] varchar(30)  NULL,
    [telephone] varchar(12)  NULL,
    [email] varchar(50)  NULL
);
GO

-- Creating table 'categories'
CREATE TABLE [dbo].[categories] (
    [IDcategorie] int IDENTITY(1,1) NOT NULL,
    [description] varchar(50)  NULL
);
GO

-- Creating table 'donArticles'
CREATE TABLE [dbo].[donArticles] (
    [IDarticle] int IDENTITY(1,1) NOT NULL,
    [IDdon] int  NOT NULL,
    [valeur] decimal(18,0)  NULL,
    [quantite] int  NULL,
    [description] varchar(50)  NULL,
    [IDarticleDon] int  NOT NULL
);
GO

-- Creating table 'dons'
CREATE TABLE [dbo].[dons] (
    [IDdon] int IDENTITY(1,1) NOT NULL,
    [datePromesse] datetime  NULL,
    [dateReception] datetime  NULL,
    [dateAccepter] datetime  NULL,
    [etat] bigint  NULL,
    [IDDonateur] int  NULL,
    [IDEmploye] int  NULL
);
GO

-- Creating table 'livraisonDonArticles'
CREATE TABLE [dbo].[livraisonDonArticles] (
    [IDlivraison] int IDENTITY(1,1) NOT NULL,
    [IDarticleDon] int  NOT NULL,
    [quantite] int  NULL
);
GO

-- Creating table 'livraisons'
CREATE TABLE [dbo].[livraisons] (
    [IDlivraison] int IDENTITY(1,1) NOT NULL,
    [datelivraison] datetime  NULL,
    [IDbeneficiaire] int  NOT NULL
);
GO

-- Creating table 'utilisateurs'
CREATE TABLE [dbo].[utilisateurs] (
    [IDutilisateur] int IDENTITY(1,1) NOT NULL,
    [type] varchar(30)  NULL,
    [nom] varchar(50)  NULL,
    [prenom] varchar(80)  NULL,
    [telephonetravail] varchar(12)  NULL,
    [telephoneMaison] varchar(12)  NULL,
    [telephoneMobile] varchar(12)  NULL,
    [salaire] decimal(18,0)  NULL,
    [adresse] varchar(40)  NULL,
    [email] varchar(60)  NULL,
    [username] varchar(30)  NULL,
    [password] varchar(40)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [IDarticle] in table 'articles'
ALTER TABLE [dbo].[articles]
ADD CONSTRAINT [PK_articles]
    PRIMARY KEY CLUSTERED ([IDarticle] ASC);
GO

-- Creating primary key on [IDbeneficiare] in table 'beneficiares'
ALTER TABLE [dbo].[beneficiares]
ADD CONSTRAINT [PK_beneficiares]
    PRIMARY KEY CLUSTERED ([IDbeneficiare] ASC);
GO

-- Creating primary key on [IDcategorie] in table 'categories'
ALTER TABLE [dbo].[categories]
ADD CONSTRAINT [PK_categories]
    PRIMARY KEY CLUSTERED ([IDcategorie] ASC);
GO

-- Creating primary key on [IDarticleDon] in table 'donArticles'
ALTER TABLE [dbo].[donArticles]
ADD CONSTRAINT [PK_donArticles]
    PRIMARY KEY CLUSTERED ([IDarticleDon] ASC);
GO

-- Creating primary key on [IDdon] in table 'dons'
ALTER TABLE [dbo].[dons]
ADD CONSTRAINT [PK_dons]
    PRIMARY KEY CLUSTERED ([IDdon] ASC);
GO

-- Creating primary key on [IDlivraison], [IDarticleDon] in table 'livraisonDonArticles'
ALTER TABLE [dbo].[livraisonDonArticles]
ADD CONSTRAINT [PK_livraisonDonArticles]
    PRIMARY KEY CLUSTERED ([IDlivraison], [IDarticleDon] ASC);
GO

-- Creating primary key on [IDlivraison] in table 'livraisons'
ALTER TABLE [dbo].[livraisons]
ADD CONSTRAINT [PK_livraisons]
    PRIMARY KEY CLUSTERED ([IDlivraison] ASC);
GO

-- Creating primary key on [IDutilisateur] in table 'utilisateurs'
ALTER TABLE [dbo].[utilisateurs]
ADD CONSTRAINT [PK_utilisateurs]
    PRIMARY KEY CLUSTERED ([IDutilisateur] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [IDcategorie] in table 'articles'
ALTER TABLE [dbo].[articles]
ADD CONSTRAINT [FK_article_categorie]
    FOREIGN KEY ([IDcategorie])
    REFERENCES [dbo].[categories]
        ([IDcategorie])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_article_categorie'
CREATE INDEX [IX_FK_article_categorie]
ON [dbo].[articles]
    ([IDcategorie]);
GO

-- Creating foreign key on [IDarticle] in table 'donArticles'
ALTER TABLE [dbo].[donArticles]
ADD CONSTRAINT [FK_donArticle_article1]
    FOREIGN KEY ([IDarticle])
    REFERENCES [dbo].[articles]
        ([IDarticle])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_donArticle_article1'
CREATE INDEX [IX_FK_donArticle_article1]
ON [dbo].[donArticles]
    ([IDarticle]);
GO

-- Creating foreign key on [IDbeneficiaire] in table 'livraisons'
ALTER TABLE [dbo].[livraisons]
ADD CONSTRAINT [FK_livraison_beneficiare1]
    FOREIGN KEY ([IDbeneficiaire])
    REFERENCES [dbo].[beneficiares]
        ([IDbeneficiare])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_livraison_beneficiare1'
CREATE INDEX [IX_FK_livraison_beneficiare1]
ON [dbo].[livraisons]
    ([IDbeneficiaire]);
GO

-- Creating foreign key on [IDdon] in table 'donArticles'
ALTER TABLE [dbo].[donArticles]
ADD CONSTRAINT [FK_donArticle_don1]
    FOREIGN KEY ([IDdon])
    REFERENCES [dbo].[dons]
        ([IDdon])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_donArticle_don1'
CREATE INDEX [IX_FK_donArticle_don1]
ON [dbo].[donArticles]
    ([IDdon]);
GO

-- Creating foreign key on [IDarticleDon] in table 'livraisonDonArticles'
ALTER TABLE [dbo].[livraisonDonArticles]
ADD CONSTRAINT [FK_livraisonDonArticle_donArticle]
    FOREIGN KEY ([IDarticleDon])
    REFERENCES [dbo].[donArticles]
        ([IDarticleDon])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_livraisonDonArticle_donArticle'
CREATE INDEX [IX_FK_livraisonDonArticle_donArticle]
ON [dbo].[livraisonDonArticles]
    ([IDarticleDon]);
GO

-- Creating foreign key on [IDDonateur] in table 'dons'
ALTER TABLE [dbo].[dons]
ADD CONSTRAINT [FK_don_utilisateur]
    FOREIGN KEY ([IDDonateur])
    REFERENCES [dbo].[utilisateurs]
        ([IDutilisateur])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_don_utilisateur'
CREATE INDEX [IX_FK_don_utilisateur]
ON [dbo].[dons]
    ([IDDonateur]);
GO

-- Creating foreign key on [IDEmploye] in table 'dons'
ALTER TABLE [dbo].[dons]
ADD CONSTRAINT [FK_don_utilisateur1]
    FOREIGN KEY ([IDEmploye])
    REFERENCES [dbo].[utilisateurs]
        ([IDutilisateur])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_don_utilisateur1'
CREATE INDEX [IX_FK_don_utilisateur1]
ON [dbo].[dons]
    ([IDEmploye]);
GO

-- Creating foreign key on [IDlivraison] in table 'livraisonDonArticles'
ALTER TABLE [dbo].[livraisonDonArticles]
ADD CONSTRAINT [FK_livraisonDonArticle_livraison]
    FOREIGN KEY ([IDlivraison])
    REFERENCES [dbo].[livraisons]
        ([IDlivraison])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------