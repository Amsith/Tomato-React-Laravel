-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 19, 2024 at 12:15 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `foods`
--

CREATE TABLE `foods` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `categories` enum('Rolls','Desert','Sand-Wich','Cake') NOT NULL,
  `shortdesc` varchar(60) NOT NULL,
  `about` text NOT NULL,
  `price` int(11) NOT NULL,
  `prodimage` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `foods`
--

INSERT INTO `foods` (`id`, `name`, `categories`, `shortdesc`, `about`, `price`, `prodimage`, `created_at`, `updated_at`) VALUES
(1, 'Teriyaki Chicken Roll', 'Rolls', 'A savory roll with tender teriyaki chicken.', 'Enjoy the sweet and savory taste of teriyaki chicken, paired with crunchy vegetables and wrapped in a soft roll, offering a delicious fusion of flavors.', 12, '1724010555.png', '2024-08-18 14:19:15', '2024-08-18 14:19:15'),
(2, 'Mediterranean Falafel Roll', 'Rolls', 'A flavorful roll with crispy falafel', 'Dive into a roll filled with crispy falafel, tangy hummus, fresh vegetables, and a hint of Mediterranean spices for a satisfying and healthy option.', 6, '1724010599.png', '2024-08-18 14:19:59', '2024-08-18 14:19:59'),
(3, 'BBQ Beef Roll', 'Rolls', 'A smoky roll filled with tender BBQ', 'Experience the rich flavors of slow-cooked BBQ beef, combined with fresh vegetables and wrapped in a soft roll, perfect for a hearty meal.', 10, '1724010634.png', '2024-08-18 14:20:34', '2024-08-18 14:20:34'),
(4, 'Spicy Chicken Roll', 'Rolls', 'A zesty roll featuring spicy chicken', 'Savor the kick of spicy chicken seasoned with aromatic spices and complemented by a tangy sauce, all wrapped in a warm roll.', 5, '1724010696.png', '2024-08-18 14:21:36', '2024-08-18 14:21:36'),
(5, 'Classic Chocolate Cake', 'Desert', 'Rich and moist chocolate cake', 'Indulge in a classic chocolate cake made with high-quality cocoa, layered with smooth chocolate frosting, and topped with chocolate shavings for a decadent treat.', 3, '1724010771.png', '2024-08-18 14:22:51', '2024-08-18 14:22:51'),
(6, 'Lemon Meringue Pie', 'Desert', 'Tart lemon filling topped', 'Experience the tangy flavor of lemon curd topped with a light and airy meringue, all nestled in a flaky pie crust, perfect for a refreshing dessert.', 6, '1724010808.png', '2024-08-18 14:23:28', '2024-08-18 14:23:28'),
(7, 'Tiramisu', 'Desert', 'A rich Italian dessert with layers', 'Enjoy the flavors of Italy with a traditional tiramisu, featuring layers of coffee-dipped ladyfingers and a creamy mascarpone mixture, dusted with cocoa powder for a luxurious finish.', 8, '1724010841.png', '2024-08-18 14:24:01', '2024-08-18 14:24:01'),
(8, 'Classic Club Sandwich', 'Sand-Wich', 'A triple-decker sandwich with turkey', 'Enjoy a hearty classic club sandwich featuring layers of tender turkey, crispy bacon, fresh lettuce, and juicy tomato, all stacked between toasted bread with a side of fries.', 13, '1724010891.png', '2024-08-18 14:24:51', '2024-08-18 14:24:51'),
(9, 'Grilled Cheese Sandwich', 'Sand-Wich', 'A gooey grilled cheese with melted', 'Savor the comfort of a grilled cheese sandwich made with gooey melted cheddar cheese between slices of buttered, toasted bread, perfect for a quick and satisfying meal.', 9, '1724010916.png', '2024-08-18 14:25:16', '2024-08-18 14:25:16'),
(10, 'Chicken Caesar Wrap', 'Sand-Wich', 'A wrap filled with grilled chicken', 'A wrap filled with grilled chicken', 5, '1724010949.png', '2024-08-18 14:25:49', '2024-08-18 14:25:49'),
(11, 'Veggie Delight Sandwich', 'Sand-Wich', 'A sandwich packed with fresh', 'A sandwich packed with fresh sand wich', 14, '1724010981.png', '2024-08-18 14:26:21', '2024-08-18 14:26:21'),
(12, 'Red Velvet Cake', 'Cake', 'A rich and moist cake', 'Delight in the classic red velvet cake, featuring a deep red color and a subtle cocoa flavor, layered with smooth cream cheese frosting and garnished with a sprinkle of red velvet crumbs.', 3, '1724011048.png', '2024-08-18 14:27:28', '2024-08-18 14:27:28'),
(13, 'Chocolate Fudge Cake', 'Cake', 'A decadent chocolate cake', 'Indulge in a rich chocolate fudge cake, featuring layers of dense chocolate cake smothered in creamy chocolate fudge frosting, and finished with chocolate shavings for an extra touch of luxury.', 10, '1724011082.png', '2024-08-18 14:28:02', '2024-08-18 14:28:02'),
(14, 'Carrot Cake', 'Cake', 'A spiced cake with grated carrots', 'Enjoy a moist carrot cake filled with freshly grated carrots, walnuts, and a blend of warm spices, topped with a rich cream cheese frosting and a hint of cinnamon.', 15, '1724011124.png', '2024-08-18 14:28:44', '2024-08-18 14:28:44');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_07_25_185713_create_personal_access_tokens_table', 1),
(5, '2024_07_26_113702_create_foods_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `foods`
--
ALTER TABLE `foods`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
