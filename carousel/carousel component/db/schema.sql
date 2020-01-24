drop database if exists Wowes;

create database Wowes;

use Wowes;



create table items (

  id int primary key,
  image varchar(512),
  name text,
  rating tinyint,
  category text

);

insert into items (id, image, name, rating, category) values (1, "https://wow.zamimg.com/uploads/screenshots/normal/2211-lionheart-helm-lionheart-helm.jpg","Lionheart Helm", 4.3, "armor");
insert into items (id, image, name, rating, category) values (2, "https://wow.zamimg.com/uploads/screenshots/normal/27379-edgemasters-handguards.jpg", "Edgemaster's Handguards", 4.1, "armor");



