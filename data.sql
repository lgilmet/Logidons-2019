-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping data for table mytestdb.articles: ~0 rows (approximately)
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` (`id`, `nom`, `createdAt`, `updatedAt`, `idCategorie`) VALUES
	(1, 'Chaise', '2019-09-23 22:58:15', '2019-09-23 22:58:15', 1),
	(2, 'Table', '2019-09-23 22:58:21', '2019-09-23 22:58:21', 1),
	(3, 'Tabouret', '2019-09-23 22:58:36', '2019-09-23 22:58:36', 1),
	(4, 'Robe', '2019-09-23 22:59:41', '2019-09-23 22:59:41', 2),
	(5, 'Shorts', '2019-09-23 22:59:52', '2019-09-23 22:59:52', 2);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;

-- Dumping data for table mytestdb.benificiaires: ~0 rows (approximately)
/*!40000 ALTER TABLE `benificiaires` DISABLE KEYS */;
INSERT INTO `benificiaires` (`id`, `nom`, `sexe`, `dateDeNaissance`, `situation`, `adresse`, `telephone`, `email`, `createdAt`, `updatedAt`) VALUES
	(1, 'Jean-Kevin', 'Homme', NULL, 'Peu de meubles après déménagement.', NULL, NULL, NULL, '2019-09-23 22:41:35', '2019-09-23 22:41:35'),
	(2, 'Kevin', 'Don\'t Know', NULL, 'Vraiment dans marde', NULL, NULL, NULL, '2019-09-23 22:41:49', '2019-09-23 22:41:49');
/*!40000 ALTER TABLE `benificiaires` ENABLE KEYS */;

-- Dumping data for table mytestdb.categories: ~0 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `description`, `createdAt`, `updatedAt`) VALUES
	(1, 'Meubles', '2019-09-23 22:56:09', '2019-09-23 22:56:09'),
	(2, 'Vêtements', '2019-09-23 22:56:18', '2019-09-23 22:56:18'),
	(3, 'Nourriture', '2019-09-23 22:56:24', '2019-09-23 22:56:24');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Dumping data for table mytestdb.donarticles: ~0 rows (approximately)
/*!40000 ALTER TABLE `donarticles` DISABLE KEYS */;
INSERT INTO `donarticles` (`id`, `valeur`, `quantite`, `description`, `createdAt`, `updatedAt`, `idArticle`, `idDon`) VALUES
	(1, NULL, 3, NULL, '2019-09-23 23:02:25', '2019-09-23 23:02:25', NULL, 1),
	(2, NULL, 2, NULL, '2019-09-23 23:02:39', '2019-09-23 23:02:39', NULL, 1);
/*!40000 ALTER TABLE `donarticles` ENABLE KEYS */;

-- Dumping data for table mytestdb.dons: ~0 rows (approximately)
/*!40000 ALTER TABLE `dons` DISABLE KEYS */;
INSERT INTO `dons` (`id`, `datePromesse`, `dateReception`, `dateAccepter`, `etat`, `createdAt`, `updatedAt`, `idDonateur`, `idResponsable`) VALUES
	(1, NULL, NULL, NULL, 'Accepté', '2019-09-23 22:53:46', '2019-09-23 22:53:46', 3, 2);
/*!40000 ALTER TABLE `dons` ENABLE KEYS */;

-- Dumping data for table mytestdb.livraisondonarticles: ~0 rows (approximately)
/*!40000 ALTER TABLE `livraisondonarticles` DISABLE KEYS */;
INSERT INTO `livraisondonarticles` (`id`, `quantite`, `createdAt`, `updatedAt`, `idDonArticle`, `idLivraison`) VALUES
	(3, 3, '2019-09-23 23:08:38', '2019-09-23 23:08:38', 1, 1),
	(4, 2, '2019-09-23 23:08:46', '2019-09-23 23:08:46', 2, 1);
/*!40000 ALTER TABLE `livraisondonarticles` ENABLE KEYS */;

-- Dumping data for table mytestdb.livraisons: ~0 rows (approximately)
/*!40000 ALTER TABLE `livraisons` DISABLE KEYS */;
INSERT INTO `livraisons` (`id`, `dateLivraison`, `createdAt`, `updatedAt`, `idBenificiaire`) VALUES
	(1, NULL, '2019-09-23 22:46:05', '2019-09-23 22:46:05', 2);
/*!40000 ALTER TABLE `livraisons` ENABLE KEYS */;

-- Dumping data for table mytestdb.students: ~0 rows (approximately)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`id`, `nom`, `prenom`, `moyenne`, `cool`, `age`, `createdAt`, `updatedAt`) VALUES
	(1, NULL, NULL, 34, NULL, NULL, '2019-09-19 20:23:28', '2019-09-19 20:23:28');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Dumping data for table mytestdb.utilisateurs: ~1 rows (approximately)
/*!40000 ALTER TABLE `utilisateurs` DISABLE KEYS */;
INSERT INTO `utilisateurs` (`id`, `type`, `nom`, `prenom`, `telephoneTravail`, `telephoneMaison`, `telephoneMobile`, `salaire`, `adresse`, `email`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
	(1, 'donateur', 'lucas', 'lulu', NULL, NULL, NULL, NULL, NULL, 'asdf@asdf.asdf', 'lulu', 'asdf', '2019-09-27 02:56:11', '2019-09-27 02:56:11');
/*!40000 ALTER TABLE `utilisateurs` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
