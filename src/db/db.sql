CREATE DATABASE IF NOT EXISTS SimpleSign;

USE SimpleSign;
CREATE TABLE IF NOT EXISTS Users (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(255),
    email VARCHAR(255),
    role VARCHAR(25),
    authCode VARCHAR(255),
    createdAt DATE,
    updatedAt DATE
);

INSERT INTO Users (`id`, `fullName`, `email`, `authCode`, `role`, `createdAt`, `updatedAt`) VALUES
('1', 'Rick Novak', 'rick.novak@gmail.com', '$2y$10$jEF6r75iDDHOP.E4Hq3bhOIF1wUQC7Ugeywv/YGviVUHXRmVL6Qee', 'admin', '2021-07-21 12:29:11', '2021-07-21 12:29:11'),
('2', 'Susan Connor', 'susan.connor@gmail.com', '$2y$10$jEF6r75iDDHOP.E4Hq3bhOIF1wUQC7Ugeywv/YGviVUHXRmVL6Qee', 'trainer', '2021-07-21 12:29:11', '2021-07-21 12:29:11'),
('3', 'John Kennedy', 'john.kennedy@gmail.com', '$2y$10$jEF6r75iDDHOP.E4Hq3bhOIF1wUQC7Ugeywv/YGviVUHXRmVL6Qee', 'student', '2021-07-21 12:29:11', '2021-07-21 12:29:11');
