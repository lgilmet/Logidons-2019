-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

CREATE DATABASE IF NOT EXISTS `logidonsdb`;
USE `logidonsdb`;

CREATE USER if NOT EXISTS 'admin' IDENTIFIED BY 'admin';
GRANT ALL privileges ON `logidonsdb`.* TO 'admin';


CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `telephoneTravail` varchar(255) DEFAULT NULL,
  `telephoneMaison` varchar(255) DEFAULT NULL,
  `telephoneMobile` varchar(255) DEFAULT NULL,
  `salaire` decimal(10,0) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idCategorie` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idCategorie` (`idCategorie`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`idCategorie`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `benificiaires` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `dateDeNaissance` datetime DEFAULT NULL,
  `situation` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `dons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datePromesse` datetime DEFAULT NULL,
  `dateReception` datetime DEFAULT NULL,
  `dateAccepter` datetime DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idDonateur` int(11) DEFAULT NULL,
  `idResponsable` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idDonateur` (`idDonateur`),
  KEY `idResponsable` (`idResponsable`),
  CONSTRAINT `dons_ibfk_1` FOREIGN KEY (`idDonateur`) REFERENCES `utilisateurs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `dons_ibfk_2` FOREIGN KEY (`idResponsable`) REFERENCES `utilisateurs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `donarticles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valeur` int(11) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idArticle` int(11) DEFAULT NULL,
  `idDon` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idArticle` (`idArticle`),
  KEY `idDon` (`idDon`),
  CONSTRAINT `donarticles_ibfk_1` FOREIGN KEY (`idArticle`) REFERENCES `articles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `donarticles_ibfk_2` FOREIGN KEY (`idDon`) REFERENCES `dons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `livraisons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateLivraison` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idBenificiaire` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idBenificiaire` (`idBenificiaire`),
  CONSTRAINT `livraisons_ibfk_1` FOREIGN KEY (`idBenificiaire`) REFERENCES `benificiaires` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `livraisondonarticles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantite` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idDonArticle` int(11) DEFAULT NULL,
  `idLivraison` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idDonArticle` (`idDonArticle`),
  KEY `idLivraison` (`idLivraison`),
  CONSTRAINT `livraisondonarticles_ibfk_1` FOREIGN KEY (`idDonArticle`) REFERENCES `donarticles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `livraisondonarticles_ibfk_2` FOREIGN KEY (`idLivraison`) REFERENCES `livraisons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

INSERT INTO `utilisateurs` (`id`, `type`, `nom`, `prenom`, `telephoneTravail`, `telephoneMaison`, `telephoneMobile`, `salaire`, `adresse`, `email`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
  (1, '0', 'admin', 'admin', NULL, NULL, NULL, NULL, '1234 rue St-Denis', 'admin@gmail.com', 'admin', 'admin', '2019-10-03 14:26:04', '2019-10-03 14:26:06'),
  (3, '1', 'Kelly', 'Vincent', '514-123-4567', NULL, '514-123-4567', NULL, '432 Vallée des fleurs', 'vincent@gmail.com', 'vkelly', '1234', '2019-10-03 18:51:39', '2019-10-03 18:51:39'),
  (4, '1', 'Kabore', 'Christian', '514-123-4567', NULL, '514-123-4567', NULL, '345 La Pente Poussiereuse', 'christian@gmail.com', 'ckabore', '1234', '2019-10-03 18:54:01', '2019-10-03 18:54:01'),
  (5, '2', 'Guillemette', 'Lucas', '514-123-4567', NULL, '514-123-4567', NULL, '567 Pie-IX', 'lulu@gmail.com', 'lguillemette', '1234', '2019-10-03 18:55:02', '2019-10-03 18:55:02'),
  (6, '2', 'Martinez', 'Hannia', '514-123-4567', NULL, '514-123-4567', NULL, '123 La Belle Montagne', 'hannia@gmail.com', 'hmartinez', '1234', '2019-10-03 18:56:28', '2019-10-03 18:56:28');

INSERT INTO `benificiaires` (`id`, `nom`, `sexe`, `dateDeNaissance`, `situation`, `adresse`, `telephone`, `email`, `createdAt`, `updatedAt`) VALUES
	(2, 'Kevin', 'dunno', '2019-10-03 19:08:35', 'poor poor lil boy', NULL, '5537-8008', NULL, '2019-10-03 20:09:45', '2019-10-03 20:09:45'),
	(3, 'Zenni Lost Boy', 'homme', '2019-10-03 19:08:35', 'verrrry lonely boy', NULL, '5537-8008', NULL, '2019-10-03 20:10:41', '2019-10-03 20:10:41'),
	(4, 'Florin Whos that', 'homme', '2019-10-03 19:08:35', 'yo ta tu 20$', NULL, '5537-8008', NULL, '2019-10-03 20:12:41', '2019-10-03 20:12:41'),
	(5, 'Peter Boolean', 'homme', '2019-10-03 19:08:35', 'Yo peux tu checker mon code?', NULL, '5537-8008', NULL, '2019-10-03 20:17:39', '2019-10-03 20:17:39');

INSERT INTO `categories` (`id`, `description`, `createdAt`, `updatedAt`) VALUES
	(1, 'Meuble', '2019-10-03 18:59:01', '2019-10-03 18:59:01'),
	(2, 'Vêtement', '2019-10-03 19:00:04', '2019-10-03 19:00:04'),
	(3, 'Nourriture', '2019-10-03 19:01:04', '2019-10-03 19:01:04'),
	(4, 'Argent', '2019-10-03 19:01:11', '2019-10-03 19:01:11');

INSERT INTO `articles` (`id`, `nom`, `createdAt`, `updatedAt`, `idCategorie`) VALUES
  (1, 'Table', '2019-10-03 19:02:54', '2019-10-03 19:02:54', 1),
  (2, 'Chaise', '2019-10-03 19:03:05', '2019-10-03 19:03:05', 1),
  (3, 'Chemise', '2019-10-03 19:03:24', '2019-10-03 19:03:24', 2),
  (4, 'Jeans', '2019-10-03 19:03:45', '2019-10-03 19:03:45', 2),
  (5, 'Robe', '2019-10-03 19:06:29', '2019-10-03 19:06:29', 2),
  (6, 'Aliment en conserve', '2019-10-03 19:08:11', '2019-10-03 19:08:11', 3),
  (7, 'Argent', '2019-10-03 19:08:35', '2019-10-03 19:08:35', 4);

INSERT INTO `dons` (`id`, `datePromesse`, `dateReception`, `dateAccepter`, `etat`, `createdAt`, `updatedAt`, `idDonateur`, `idResponsable`) VALUES
  (1, '2019-10-03 19:08:35', NULL, NULL, '1', '2019-10-03 19:19:19', '2019-10-03 19:19:19', 6, 3),
  (3, '2019-10-03 19:08:35', NULL, NULL, '1', '2019-10-03 19:20:18', '2019-10-03 19:20:18', 5, 3),
  (4, '2019-10-03 19:08:35', NULL, NULL, '1', '2019-10-03 19:20:33', '2019-10-03 19:20:33', 5, 4),
  (5, '2019-10-03 19:08:35', NULL, NULL, '1', '2019-10-03 19:21:12', '2019-10-03 19:21:12', 6, 4),
  (6, '2019-10-03 19:08:35', NULL, NULL, '2', '2019-10-03 19:22:52', '2019-10-03 19:22:52', 6, 4),
  (7, '2019-10-03 19:08:35', NULL, NULL, '2', '2019-10-03 19:22:59', '2019-10-03 19:22:59', 6, 3);

INSERT INTO `donarticles` (`id`, `valeur`, `quantite`, `description`, `createdAt`, `updatedAt`, `idArticle`, `idDon`) VALUES
	(1, 20, 1, 'Rouge', '2019-10-03 19:33:27', '2019-10-03 19:33:27', 1, 1),
	(2, 12, 4, 'Chaise en bois', '2019-10-03 19:37:04', '2019-10-03 19:37:04', 2, 1),
	(3, 16, 1, 'Petite robe noir', '2019-10-03 19:37:37', '2019-10-03 19:37:37', 5, 1),
	(4, 10, 1, 'Chemise propre', '2019-10-03 19:38:39', '2019-10-03 19:38:39', 3, 3),
	(5, 5, 3, 'Jeans blue taille 32', '2019-10-03 19:47:23', '2019-10-03 19:47:23', 4, 3),
	(6, 5, 1, 'Jeans blue taille 28', '2019-10-03 19:47:37', '2019-10-03 19:47:37', 4, 3),
	(7, 30, 2, 'Robe rouge', '2019-10-03 15:52:15', '2019-10-03 15:52:16', 5, 4),
	(8, 5, 1, 'Robe enfant ete', '2019-10-03 15:52:50', '2019-10-03 15:52:51', 5, 4),
	(9, 2, 30, 'Mais en canne', '2019-10-03 15:53:54', '2019-10-03 15:53:55', 6, 4),
	(10, 2, 2, 'Spaghetti', '2019-10-03 15:54:15', '2019-10-03 15:54:17', 6, 5),
	(11, 150, 1, 'Argent', '2019-10-03 15:58:26', '2019-10-03 15:58:27', 7, 6),
	(12, 20, 1, 'Argent', '2019-10-03 15:58:31', '2019-10-03 15:58:31', 7, 7);

INSERT INTO `livraisons` (`id`, `dateLivraison`, `createdAt`, `updatedAt`, `idBenificiaire`) VALUES
	(1, '2019-10-03 16:23:14', '2019-10-03 16:23:09', '2019-10-03 16:23:09', 4),
	(2, '2019-10-03 16:23:48', '2019-10-03 16:23:19', '2019-10-03 16:23:19', 2),
	(3, '2019-10-03 16:23:50', '2019-10-03 16:23:23', '2019-10-03 16:23:24', 3),
	(4, '2019-10-03 16:23:55', '2019-10-03 16:23:38', '2019-10-03 16:23:39', 5);
