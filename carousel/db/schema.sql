drop database if exists wowes_reseed;

create database wowes_reseed;

use wowes_reseed;

create table items (

  id int primary key AUTO_INCREMENT,
  image varchar(512),
  name text,
  rating tinyint,
  category text
);

insert into items
  (name, image, rating, category)
values
  ('unde pariatur et', 'http://lorempixel.com/640/480/food', '3', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('eius a quia', 'http://lorempixel.com/640/480/nightlife', '1', 'food');
insert into items
  (name, image, rating, category)
values
  ('eos et nostrum', 'http://lorempixel.com/640/480/sports', '2', 'armor');
insert into items
  (name, image, rating, category)
values
  ('aliquid laudantium placeat', 'http://lorempixel.com/640/480/sports', '2', 'armor');
insert into items
  (name, image, rating, category)
values
  ('necessitatibus vel cumque', 'http://lorempixel.com/640/480/transport', '3', 'food');
insert into items
  (name, image, rating, category)
values
  ('ut accusantium atque', 'http://lorempixel.com/640/480/city', '5', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('ullam eligendi quo', 'http://lorempixel.com/640/480/people', '1', 'armor');
insert into items
  (name, image, rating, category)
values
  ('mollitia qui vitae', 'http://lorempixel.com/640/480/fashion', '1', 'armor');
insert into items
  (name, image, rating, category)
values
  ('natus dolorum labore', 'http://lorempixel.com/640/480/cats', '5', 'power');
insert into items
  (name, image, rating, category)
values
  ('dolorem molestias eos', 'http://lorempixel.com/640/480/food', '4', 'food');
insert into items
  (name, image, rating, category)
values
  ('vel facere quo', 'http://lorempixel.com/640/480/nightlife', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('est quos animi', 'http://lorempixel.com/640/480/nightlife', '5', 'armor');
insert into items
  (name, image, rating, category)
values
  ('ratione aut reprehenderit', 'http://lorempixel.com/640/480/nature', '5', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('eos id provident', 'http://lorempixel.com/640/480/abstract', '2', 'power');
insert into items
  (name, image, rating, category)
values
  ('velit hic architecto', 'http://lorempixel.com/640/480/food', '3', 'armor');
insert into items
  (name, image, rating, category)
values
  ('nisi qui at', 'http://lorempixel.com/640/480/cats', '1', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('et quia ut', 'http://lorempixel.com/640/480/fashion', '5', 'armor');
insert into items
  (name, image, rating, category)
values
  ('doloribus commodi suscipit', 'http://lorempixel.com/640/480/nightlife', '1', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('aut veniam voluptates', 'http://lorempixel.com/640/480/cats', '2', 'power');
insert into items
  (name, image, rating, category)
values
  ('fugit non illum', 'http://lorempixel.com/640/480/city', '3', 'food');
insert into items
  (name, image, rating, category)
values
  ('natus cupiditate voluptatem', 'http://lorempixel.com/640/480/city', '5', 'food');
insert into items
  (name, image, rating, category)
values
  ('et qui deserunt', 'http://lorempixel.com/640/480/people', '5', 'armor');
insert into items
  (name, image, rating, category)
values
  ('autem quo fugiat', 'http://lorempixel.com/640/480/fashion', '4', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('reprehenderit dolores occaecati', 'http://lorempixel.com/640/480/nature', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('consequuntur ut sint', 'http://lorempixel.com/640/480/transport', '4', 'food');
insert into items
  (name, image, rating, category)
values
  ('quaerat sed blanditiis', 'http://lorempixel.com/640/480/business', '3', 'power');
insert into items
  (name, image, rating, category)
values
  ('aut commodi qui', 'http://lorempixel.com/640/480/technics', '4', 'power');
insert into items
  (name, image, rating, category)
values
  ('accusantium culpa deleniti', 'http://lorempixel.com/640/480/fashion', '4', 'armor');
insert into items
  (name, image, rating, category)
values
  ('earum vel necessitatibus', 'http://lorempixel.com/640/480/nature', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('nihil excepturi et', 'http://lorempixel.com/640/480/fashion', '1', 'food');
insert into items
  (name, image, rating, category)
values
  ('magnam ipsam quidem', 'http://lorempixel.com/640/480/business', '4', 'food');
insert into items
  (name, image, rating, category)
values
  ('doloribus assumenda labore', 'http://lorempixel.com/640/480/cats', '1', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('magni sapiente facilis', 'http://lorempixel.com/640/480/city', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('et repellendus est', 'http://lorempixel.com/640/480/business', '5', 'armor');
insert into items
  (name, image, rating, category)
values
  ('tempora vitae quis', 'http://lorempixel.com/640/480/technics', '5', 'armor');
insert into items
  (name, image, rating, category)
values
  ('culpa voluptas est', 'http://lorempixel.com/640/480/business', '1', 'armor');
insert into items
  (name, image, rating, category)
values
  ('ullam voluptatum id', 'http://lorempixel.com/640/480/sports', '2', 'power');
insert into items
  (name, image, rating, category)
values
  ('numquam dolorem unde', 'http://lorempixel.com/640/480/technics', '4', 'armor');
insert into items
  (name, image, rating, category)
values
  ('provident nam rem', 'http://lorempixel.com/640/480/nature', '5', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('maiores ullam ducimus', 'http://lorempixel.com/640/480/cats', '4', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('nam explicabo ut', 'http://lorempixel.com/640/480/abstract', '1', 'armor');
insert into items
  (name, image, rating, category)
values
  ('enim repudiandae laboriosam', 'http://lorempixel.com/640/480/sports', '5', 'power');
insert into items
  (name, image, rating, category)
values
  ('aut voluptas est', 'http://lorempixel.com/640/480/nature', '1', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('voluptas est cum', 'http://lorempixel.com/640/480/fashion', '2', 'food');
insert into items
  (name, image, rating, category)
values
  ('aut consectetur alias', 'http://lorempixel.com/640/480/animals', '2', 'power');
insert into items
  (name, image, rating, category)
values
  ('sed perferendis accusamus', 'http://lorempixel.com/640/480/city', '2', 'food');
insert into items
  (name, image, rating, category)
values
  ('beatae ab voluptatem', 'http://lorempixel.com/640/480/abstract', '5', 'food');
insert into items
  (name, image, rating, category)
values
  ('dolorem sit quo', 'http://lorempixel.com/640/480/sports', '4', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('quas id consequatur', 'http://lorempixel.com/640/480/nightlife', '3', 'power');
insert into items
  (name, image, rating, category)
values
  ('et qui quo', 'http://lorempixel.com/640/480/abstract', '5', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('et aut facilis', 'http://lorempixel.com/640/480/nightlife', '1', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('vel eveniet nulla', 'http://lorempixel.com/640/480/transport', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('et veniam iure', 'http://lorempixel.com/640/480/transport', '2', 'food');
insert into items
  (name, image, rating, category)
values
  ('optio sed at', 'http://lorempixel.com/640/480/abstract', '5', 'power');
insert into items
  (name, image, rating, category)
values
  ('in voluptas in', 'http://lorempixel.com/640/480/nightlife', '4', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('est id nisi', 'http://lorempixel.com/640/480/sports', '5', 'food');
insert into items
  (name, image, rating, category)
values
  ('beatae sit quasi', 'http://lorempixel.com/640/480/food', '5', 'food');
insert into items
  (name, image, rating, category)
values
  ('ipsam aut officia', 'http://lorempixel.com/640/480/business', '4', 'food');
insert into items
  (name, image, rating, category)
values
  ('natus itaque sunt', 'http://lorempixel.com/640/480/business', '4', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('vel fugiat nostrum', 'http://lorempixel.com/640/480/fashion', '5', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('perferendis qui accusantium', 'http://lorempixel.com/640/480/sports', '1', 'power');
insert into items
  (name, image, rating, category)
values
  ('quia doloremque et', 'http://lorempixel.com/640/480/cats', '4', 'armor');
insert into items
  (name, image, rating, category)
values
  ('expedita asperiores et', 'http://lorempixel.com/640/480/nightlife', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('qui dolore sed', 'http://lorempixel.com/640/480/abstract', '2', 'armor');
insert into items
  (name, image, rating, category)
values
  ('quis error provident', 'http://lorempixel.com/640/480/fashion', '5', 'power');
insert into items
  (name, image, rating, category)
values
  ('fugit mollitia dignissimos', 'http://lorempixel.com/640/480/fashion', '4', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('libero laborum cumque', 'http://lorempixel.com/640/480/sports', '5', 'food');
insert into items
  (name, image, rating, category)
values
  ('tempora dolor ad', 'http://lorempixel.com/640/480/food', '5', 'armor');
insert into items
  (name, image, rating, category)
values
  ('impedit non quis', 'http://lorempixel.com/640/480/technics', '2', 'food');
insert into items
  (name, image, rating, category)
values
  ('in et eaque', 'http://lorempixel.com/640/480/abstract', '1', 'armor');
insert into items
  (name, image, rating, category)
values
  ('expedita animi distinctio', 'http://lorempixel.com/640/480/abstract', '3', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('maiores porro voluptatem', 'http://lorempixel.com/640/480/fashion', '2', 'power');
insert into items
  (name, image, rating, category)
values
  ('optio sequi aperiam', 'http://lorempixel.com/640/480/nature', '2', 'armor');
insert into items
  (name, image, rating, category)
values
  ('autem illum nostrum', 'http://lorempixel.com/640/480/business', '3', 'food');
insert into items
  (name, image, rating, category)
values
  ('qui quisquam mollitia', 'http://lorempixel.com/640/480/nightlife', '3', 'armor');
insert into items
  (name, image, rating, category)
values
  ('assumenda debitis dolor', 'http://lorempixel.com/640/480/food', '4', 'food');
insert into items
  (name, image, rating, category)
values
  ('repellat cupiditate adipisci', 'http://lorempixel.com/640/480/people', '4', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('iure et reiciendis', 'http://lorempixel.com/640/480/food', '2', 'food');
insert into items
  (name, image, rating, category)
values
  ('eum perspiciatis est', 'http://lorempixel.com/640/480/fashion', '4', 'armor');
insert into items
  (name, image, rating, category)
values
  ('omnis explicabo possimus', 'http://lorempixel.com/640/480/abstract', '2', 'armor');
insert into items
  (name, image, rating, category)
values
  ('minima eum vero', 'http://lorempixel.com/640/480/technics', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('sunt sit sapiente', 'http://lorempixel.com/640/480/animals', '4', 'armor');
insert into items
  (name, image, rating, category)
values
  ('ut saepe non', 'http://lorempixel.com/640/480/business', '3', 'food');
insert into items
  (name, image, rating, category)
values
  ('quam asperiores quo', 'http://lorempixel.com/640/480/technics', '3', 'food');
insert into items
  (name, image, rating, category)
values
  ('laudantium hic delectus', 'http://lorempixel.com/640/480/technics', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('cumque illum eius', 'http://lorempixel.com/640/480/people', '4', 'armor');
insert into items
  (name, image, rating, category)
values
  ('non doloremque consequatur', 'http://lorempixel.com/640/480/animals', '4', 'armor');
insert into items
  (name, image, rating, category)
values
  ('placeat consectetur voluptatibus', 'http://lorempixel.com/640/480/nightlife', '4', 'food');
insert into items
  (name, image, rating, category)
values
  ('dolor et id', 'http://lorempixel.com/640/480/technics', '1', 'power');
insert into items
  (name, image, rating, category)
values
  ('deserunt eaque sapiente', 'http://lorempixel.com/640/480/technics', '2', 'food');
insert into items
  (name, image, rating, category)
values
  ('explicabo ut quia', 'http://lorempixel.com/640/480/technics', '3', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('non blanditiis debitis', 'http://lorempixel.com/640/480/sports', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('beatae ut consectetur', 'http://lorempixel.com/640/480/food', '2', 'armor');
insert into items
  (name, image, rating, category)
values
  ('adipisci nesciunt molestiae', 'http://lorempixel.com/640/480/animals', '3', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('et rerum laboriosam', 'http://lorempixel.com/640/480/cats', '4', 'food');
insert into items
  (name, image, rating, category)
values
  ('quo quia eos', 'http://lorempixel.com/640/480/sports', '1', 'power');
insert into items
  (name, image, rating, category)
values
  ('quam eos dolore', 'http://lorempixel.com/640/480/nature', '3', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('dolorum excepturi atque', 'http://lorempixel.com/640/480/business', '2', 'weapons');
insert into items
  (name, image, rating, category)
values
  ('et id aut', 'http://lorempixel.com/640/480/nature', '4', 'power');
insert into items
  (name, image, rating, category)
values
  ('atque deserunt aut', 'http://lorempixel.com/640/480/food', '4', 'weapons');