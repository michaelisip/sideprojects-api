CREATE DATABASE IF NOT EXISTS ballers;

USE ballers;

CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstName` varchar(191) NOT NULL,
  `lastName` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `courts` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(191) NOT NULL,
  `rating` bigint(20) NULL DEFAULT 0,
  `longitude` varchar(191) DEFAULT NULL,
  `latitude` varchar(191) NOT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;