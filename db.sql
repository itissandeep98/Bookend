CREATE TABLE `user` (
   `user_id` INT NOT NULL,
   `name` varchar(255) NOT NULL,
   `user_type` INT NOT NULL,
   `email_id` varchar(255) NOT NULL,
   `contact_num` varchar(10) NOT NULL,
   `location` varchar(10) NOT NULL,
   `password` varchar(10) NOT NULL,
   PRIMARY KEY (`user_id`)
);
