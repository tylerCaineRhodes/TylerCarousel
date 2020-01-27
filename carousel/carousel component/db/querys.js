const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Wowes'
});

connection.connect(err => {
  console.log('now connected to your database')
});


const data = {
  "Sheet1": [
      {
          "undefined": "Jordan",
          "id": "1",
          "name": "Lionheart Helm",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/2211-lionheart-helm-lionheart-helm.jpg",
          "description": "Rerum illum occaecati quis velit unde est maiores. Ut aut expedita reiciendis. Sit veritatis velit numquam cum. Necessitatibus aut ipsum esse dolores omnis et molestias et dolorum. Libero et voluptas. Voluptatem voluptas fugiat voluptatem.",
          "specs": "Binds when equipped\nHead Plate\n565 Armor\n+18 Strength\nDurability 100 / 100\nRequires Level 56\nEquip: Improves your chance to get a critical strike by 2%.\nEquip: Improves your chance to hit by 2%.",
          "rating": "4.3",
          "price": "218.94",
          "extra_url1": "https://www.wow-freakz.com/img/screenshots/wowhead_217589_s.jpg",
          "extra_url2": "https://classicdb.ch/itemmodels/item_22920.jpg",
          "category": "armor"
      },
      {
          "id": "2",
          "name": "Edgemaster's Handguards\n",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/27379-edgemasters-handguards.jpg",
          "description": "Distinctio reiciendis earum accusantium quibusdam consectetur iure. Quia dolorem non aut dicta facilis itaque dolor adipisci et. In nihil dolores est quos et. Dolores quia modi fugit est quis fugiat eveniet repellat qui. Quia omnis voluptates assumenda omnis id quasi sequi.",
          "specs": "Item Level 49\nBinds when equippedHands Mail\n201 Armor\nDurability 50 / 50",
          "rating": "4.1",
          "price": "106.01",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/183589-edgemasters-handguards.jpg",
          "category": "armor"
      },
      {
          "id": "3",
          "name": "Hide of the Wild",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/2281-hide-of-the-wild-hide-of-the-wild-craftable-by-tribal-leatherworkers-pattern-can.jpg",
          "description": "Non id recusandae esse hic ex rerum libero. Provident animi animi et rerum sit optio ab voluptate. Repellendus a sequi sint molestias numquam excepturi et quis molestiae. Inventore ut eos sed similique. Illo inventore sint et architecto magni voluptatem et.",
          "specs": "Item Level 62\nBinds when equipped\nBack\n48 Armor\n+10 Intellect\n+8 Stamina\nRequires Level 57\nEquip: Increases healing done by spells and effects by up to 42.",
          "rating": "4.4",
          "price": "208.89",
          "extra_url1": "https://classicdb.ch/itemmodels/item_30850.jpg",
          "extra_url2": "https://cafart.r.worldssl.net/images/Category_26797/subcat_102301/Phide.jpg",
          "extra_url3": "https://classicdb.ch/images/screenshots/thumb/921.jpg",
          "category": "armor"
      },
      {
          "id": "4",
          "name": "Onyxia Scale Cloak\n",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/77590-onyxia-scale-cloak.jpg",
          "description": "Voluptates blanditiis blanditiis. Quaerat et tempora. Non fugit incidunt consequatur voluptatem sint. Ut mollitia occaecati quas eligendi a at fugit a.",
          "specs": "Binds when equipped\nBack\n43 Armor\n+7 Stamina\n+16 Fire Resistance\nRequires Level 55\nEquip: Protects the wearer from being fully engulfed by Shadow Flame.",
          "rating": "4.1",
          "price": "151.98",
          "extra_url1": "https://classicdb.ch/images/screenshots/thumb/2278.jpg",
          "extra_url2": "https://classicdb.ch/itemmodels/item_25921.jpg",
          "extra_url3": "https://azerothianlife.files.wordpress.com/2012/06/wowscrnshot_061012_083849-e1339284171648.jpg",
          "extra_url4": "https://wow.zamimg.com/uploads/screenshots/normal/83733-onyxia-scale-cloak.jpg",
          "category": "armor"
      },
      {
          "id": "5",
          "name": "Black Dragonscale Boots",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/3391-black-dragonscale-boots-a-screenshot-of-the-black-dragonscale-boots-on-a-male-or.jpg",
          "description": "Accusantium dolore animi. Velit et officia libero. Quibusdam aut exercitationem et sint distinctio qui quaerat. Laudantium ullam dolores enim. Neque deserunt quibusdam sit commodi.",
          "specs": "Item Level 61\nBinds when equipped\nFeet        Mail\n270 Armor\n+10 Stamina\n+24 Fire Resistance\nDurability 70 / 70\nRequires Level 56\nEquip: +28 Attack Power.",
          "rating": "3.9",
          "price": "326.53",
          "extra_url1": "https://classicdb.ch/itemmodels/item_28760.jpg",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/small/628286.jpg",
          "extra_url3": "https://wow.zamimg.com/uploads/screenshots/normal/50073-black-dragon-mail.jpg",
          "category": "armor"
      },
      {
          "id": "6",
          "name": "Cloudkeeper Legplates",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/86408-cloudkeeper-legplates.jpg",
          "description": "Voluptatem dolor ea aspernatur omnis qui. Autem quia officia id sed soluta voluptatibus est corrupti est.",
          "specs": "Item Level 62\nBinds when equipped\nLegs        Plate\n617 Armor\n+20 Strength\n+20 Agility\n+20 Stamina\nDurability 120 / 120\nRequires Level 57\nUse: Increases Attack Power by 100 for 30 sec. (15 Min Cooldown)",
          "rating": "4.7",
          "price": "299",
          "extra_url1": "https://chloeplayswow.files.wordpress.com/2013/11/paladinset3back.jpg",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/small/506023.jpg",
          "extra_url3": "http://effysrponwyrmrestaccord.files.wordpress.com/2012/02/outfits-antpm-cloudwalker-set-1.jpg",
          "category": "armor"
      },
      {
          "id": "7",
          "name": "Savage Gladiator Chain\n",
          "image": "https://classicdb.ch/itemmodels/item_28724.jpg",
          "description": "Tempora inventore qui illo rerum sapiente aut. Harum sed a vel rerum dolores molestiae fuga et. Iste quisquam voluptatem temporibus temporibus ut. Dicta aut id illo consequatur. Nobis facere omnis quis dolorem. Eos in qui et placeat dolor sunt est.",
          "specs": "Item Level 57\nBinds when picked up\nChest        Mail\n369 Armor\n+13 Strength\n+14 Agility\n+13 Stamina\nDurability 140 / 140\nRequires Level 52\nEquip: Improves your chance to get a critical strike by 2%.\n",
          "rating": "4.8",
          "price": "335.33",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/25759-savage-gladiator-chain-lovely-chest.jpg",
          "extra_url2": "https://classicdb.ch/itemmodels/item_28724.jpg",
          "extra_url3": "\n",
          "category": "armor"
      },
      {
          "id": "8",
          "name": "Cindercloth Cloak",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/4691-cindercloth-cloak.jpg",
          "description": "Earum numquam sed odit numquam aspernatur. Perspiciatis dolorum laborum tempora neque. Sint fuga voluptas sint doloribus necessitatibus aut sed dolore et. Consequatur facilis tempore ut qui est ut est laboriosam. Ipsam est est.",
          "specs": "Item Level 55\nBinds when equippedBack \n36 Armor\n+8 Intellect",
          "rating": "4.9",
          "price": "95.03",
          "extra_url1": "https://vignette.wikia.nocookie.net/wowwiki/images/e/e6/Cindercloth_Cloak%2C_Stone_Background%2C_Human_Male.png/revision/latest/scale-to-width-down/340?cb=20091210144210",
          "extra_url2": "https://classicdb.ch/itemmodels/item_23422.jpg",
          "extra_url3": "https://wow.zamimg.com/uploads/screenshots/normal/49128-pattern-cindercloth-cloak.jpg",
          "category": "armor"
      },
      {
          "id": "9",
          "name": "Breastplate of the Chromatic Flight\n",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/10489-breastplate-of-the-chromatic-flight.jpg",
          "description": "Maiores asperiores ipsum ipsam quo est. Labore autem repellat. Natus ea temporibus rerum alias eaque assumenda libero quaerat in. Dignissimos natus cum adipisci aperiam animi ratione consectetur sit aut.",
          "specs": "Binds when picked up\nChest        Plate\n706 Armor\n+20 Strength\n+10 Agility\n+30 Stamina\n+15 Fire Resistance\nDurability 165 / 165",
          "rating": "3.3",
          "price": "294.61",
          "extra_url1": "https://classicdb.ch/itemmodels/item_28335.jpg",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/normal/166484-breastplate-of-the-chromatic-flight.jpg",
          "category": "armor"
      },
      {
          "id": "10",
          "name": "Puissant Cape\n",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/55697-puissant-cape.jpg",
          "description": "Omnis dolor maxime commodi laudantium debitis in. Veniam vitae omnis. Et unde nihil labore ducimus nulla voluptas. Cum et saepe ut qui esse aperiam aut quisquam illo.",
          "specs": "Item Level 70\nBinds when picked up\nBack\n54 Armor\n+12 Stamina\nRequires Level 60\nEquip: +40 Attack Power.\nEquip: Improves your chance to hit by 1%",
          "rating": "4.9",
          "price": "330.28",
          "extra_url1": "https://classicdb.ch/itemmodels/item_30882.jpg",
          "category": "armor"
      },
      {
          "id": "11",
          "name": "Robe of the Void",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/2282-robe-of-the-void.jpg",
          "description": "Sit commodi temporibus maiores temporibus quaerat aut qui officiis. Dicta sed provident. Voluptatem voluptas qui at non in sed. Temporibus doloribus ullam beatae quam aliquid enim rerum. Occaecati explicabo ut et omnis ea. Molestias ex consequatur asperiores beatae.",
          "specs": "Item Level 70\nBinds when picked up\nBack\n54 Armor\n+12 Stamina\nRequires Level 60\nEquip: +40 Attack Power.\nEquip: Improves your chance to hit by 1%",
          "rating": "4.2",
          "price": "289.2",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/28923-robe-of-the-void.jpg",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/normal/24344-robe-of-the-void.jpg",
          "extra_url3": "https://wow.zamimg.com/uploads/screenshots/normal/9418-robe-of-the-void-on-human-male-with-felcloth-shoulders.jpg",
          "category": "armor"
      },
      {
          "id": "12",
          "name": "Wristguards of True Flight\n",
          "image": "https://vignette.wikia.nocookie.net/wowwiki/images/c/cb/Wristguards_of_True_Flight.JPG/revision/latest/scale-to-width-down/340?cb=20070509094453",
          "description": "Libero omnis quia dolore quos sunt quidem. Quaerat commodi aut nesciunt enim qui ut. Vero sed atque voluptatem aut. A voluptatum modi. Dolorem ad sed. Blanditiis voluptas ea exercitationem velit est aut nesciunt maiores et.",
          "specs": "Item Level 71\nBinds when picked up\nWrist        Mail\n198 Armor\n+19 Agility\n+6 Intellect\n+11 Stamina\nDurability 50 / 50\nRequires Level 60\nEquip: Improves your chance to hit by 1%.",
          "rating": "2.4",
          "price": "324.58",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/217143-wristguards-of-true-flight.jpg",
          "category": "armor"
      },
      {
          "id": "13",
          "name": "Eldritch Reinforced Legplates\n",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/86463-eldritch-reinforced-legplates.jpg",
          "description": "Modi est voluptatibus nihil beatae praesentium magni error aut temporibus. Minus fuga nulla et non. Totam consequatur sequi amet aut ea omnis corrupti dicta. Nihil ex quia dicta error. Autem maiores quisquam ex pariatur et voluptas voluptas alias.",
          "specs": "Item Level 62\nBinds when picked up\nLegs        Plate\n566 Armor\n+15 Strength\n+9 Agility\n+20 Stamina\nDurability 100 / 100\nRequires Level 57",
          "rating": "4.7",
          "price": "211.35",
          "extra_url1": "http://www.wowmogcompanion.com/sites/default/files/gearpics/38-7_2.jpg",
          "extra_url2": "http://www.wowmogcompanion.com/sites/default/files/goldplate.jpg",
          "extra_url3": "https://kamaliaetalia.files.wordpress.com/2017/08/karaelia-violettower1.jpg?w=376",
          "category": "armor"
      },
      {
          "id": "14",
          "name": "Lieutenant Commander's Plate Shoulders\n",
          "image": "https://static.icy-veins.com/images/wow/transmogrification-warrior-pvp-level-60-rare-alliance-male.jpg",
          "description": "Est quo doloremque officia voluptatem ut. Nihil possimus sit porro non laboriosam nemo delectus et nesciunt. Sint voluptate et ut accusamus. Cumque amet iusto voluptatibus quaerat perspiciatis eaque quia nihil.",
          "specs": "Item Level 71\nBinds when picked up\nUnique\nShoulder        Plate\n552 Armor\n+17 Strength\n+18 Stamina\nDurability 80 / 80\nClasses: Warrior\nRequires Level 60",
          "rating": "4.9",
          "price": "127.76",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/364917-replica-lieutenant-commanders-plate-shoulders.jpg",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/normal/248434-lieutenant-commanders-plate-helmet.jpg",
          "extra_url3": "https://i.redd.it/vtd3m7hzxe921.jpg",
          "category": "armor"
      },
      {
          "id": "15",
          "name": "Deathbone Chestplate",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/890796.jpg",
          "description": "\nThe superior volunteer extends into the readable clash. The continent fire resides past a carrier. The sexual street grasps a surplus into a childish girl. An aircraft lists the marvelous acceptance.",
          "specs": "Item Level 61\nBinds when picked up\nChest        Plate\n637 Armor\n+12 Stamina\nDurability 135 / 135\nRequires Level 56\nEquip: Increased Defense +17.\nEquip: Restores 5 mana per 5 sec.",
          "rating": "3.9",
          "price": "250.78",
          "category": "armor"
      },
      {
          "id": "16",
          "name": "Robe of Power",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/81550.jpg",
          "description": "\nWhy won't the kid cow every aardvark? Why does whatever prince charter a capable bullet? A fashionable helmet breezes. The utter countryside beans the moon. The beat annoyance conforms in a device. Above a scenery exists a leaning frog.",
          "specs": "Item Level 38\nBinds when picked up\nChest        Cloth\n55 Armor\n+12 Intellect\n+8 Spirit\nDurability 80 / 80\nRequires Level 33\nEquip: Increases damage and healing done by magical spells and effects by up to 14.",
          "rating": "3.1",
          "price": "47",
          "category": "armor"
      },
      {
          "id": "17",
          "name": "Lucky Fishing Hat",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/4337.jpg",
          "description": "\nA biggest need amuses the connector in the contradictory undesirable. The timetable approaches the intellect. A grandfather errs under the lip. Past the anthology skips the noisy alias.",
          "specs": "Item Level 40\nBinds when picked up\nHead        Cloth\n43 Armor\n+15 Stamina\nDurability 45 / 45\nRequires Fishing (1)\nEquip: Increased Fishing +5.",
          "rating": "2.5",
          "price": "33.96",
          "category": "armor"
      },
      {
          "id": "18",
          "name": "Cloak of Flames",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/68136.jpg",
          "description": "How does a pump determine his edge commentary? Our terrorist recovers opposite a president. Across our teapot coughs the glue. The graduate stops! The stem messes with the forthcoming friend. Why won't an integrate workload proceed?",
          "specs": "Item Level 65\nBinds when equipped\nBack\n50 Armor\n+15 Fire Resistance\nRequires Level 60\nEquip: Deals 5 Fire damage to anyone who strikes you with a melee attack.",
          "rating": "1.8",
          "price": "260.18",
          "category": "armor"
      },
      {
          "id": "19",
          "name": "Shadowcraft Spaulders",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/12241.jpg",
          "description": "The piece mills a kernel. The money coins a bulletin. Will the tale reign? The color defeated swings above a behavior. Does a recognized pipeline joke?",
          "specs": "Item Level 60\nBinds when picked up\nShoulder        Leather\n127 Armor\n+22 Agility\n+9 Stamina\nDurability 60 / 60\nRequires Level 55",
          "rating": "2.9",
          "price": "181.75",
          "category": "armor"
      },
      {
          "id": "20",
          "name": "Tabard of the Scarlet Crusade",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/2200.jpg",
          "description": "\nThe hand tears! A prince fails a chamber behind a stretching accused. A specialist manufactures the significant holy. The camera assorts the theft past the circulating distress. A league examines a blanket keystroke past the tomato.",
          "specs": "Item Level 1\nBinds when picked up\nUnique\nTabard",
          "rating": "0.1",
          "price": "73.43",
          "category": "armor"
      },
      {
          "undefined": "Tyler",
          "id": "21",
          "name": "Nightfall",
          "image": "https://classicdb.ch/itemmodels/item_31735.jpg",
          "description": "Spell damage taken by target increased by 15% for 5 sec and allows you to control an army of haunted skeletons",
          "specs": "Item Level 70\nBinds when equipped\nTwo-Hand\tAxe\n187 - 282 Damage\tSpeed 3.50\n(67.00 damage per second)\nDurability 120 / 120\nRequires Level 60\n",
          "rating": "2",
          "price": "35",
          "extra_url1": "http://wow.zamimg.com/uploads/blog/images/5982.png",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/normal/268816-nightfall.jpg",
          "extra_url3": "https://gamepedia.cursecdn.com/wowpedia/thumb/c/c6/NightfallCata.jpg/300px-NightfallCata.jpg?version=49f137ecf71bc74e62b04a6f9fd3217f",
          "category": "weapon"
      },
      {
          "id": "22",
          "name": "Sulfuras, Hand of Ragnaros",
          "image": "https://img1.cgtrader.com/items/900746/fe53657cd3/sulfuras-hand-of-ragnaros-3d-model-low-poly-obj-mtl-fbx-c4d-ma-mb-stl.jpg",
          "description": "weapon of choice for Ragnaros the Firelord. Avatar Roku's favorite weapon",
          "specs": "Item Level 80\nBinds when picked up\nUnique\nTwo-Hand\tMace\n223 - 372 Damage\tSpeed 3.70\n(80.41 damage per second)\n+12 Strength\n+12 Stamina\n+30 Fire Resistance\nDurability 145 / 145\nRequires Level 60",
          "rating": "3.4",
          "price": "650",
          "extra_url1": "https://gamepedia.cursecdn.com/wowpedia/6/6e/Sulfuras_Hand_of_Ragnaros_TCG.jpg",
          "extra_url2": "http://quissygaming.com/wp-content/uploads/2018/11/sulfurashandofragnaros-min.png",
          "category": "weapon"
      },
      {
          "id": "23",
          "name": "Flurry Axe",
          "image": "https://classicdb.ch/itemmodels/item_19235.jpg",
          "description": "Grants 1 extra attack on your next swing, Grants a free m&m mcflurry with every use",
          "specs": "Item Level 47\nBinds when equipped\nOne-Hand\tAxe\n37 - 69 Damage\tSpeed 1.50\n(35.33 damage per second)\nDurability 105 / 105\nRequires Level 42",
          "rating": "4.8",
          "price": "4300",
          "extra_url1": "https://mattfossen.com/xmog/sites/default/files/2019-04/Flurry%20Axe.png",
          "category": "weapon"
      },
      {
          "id": "24",
          "name": "Quel'Serrar",
          "image": "https://classicdb.ch/itemmodels/item_30994.jpg",
          "description": "\nQuel'Serrar is a fantastic weapon for Warrior tanks and Protection Paladins and ninja turtles",
          "specs": "Item Level 71\nBinds when picked up\nUnique\nMain Hand\tSword\n84 - 126 Damage\tSpeed 2.00\n(52.50 damage per second)\n+12 Stamina\nDurability 105 / 105\nClasses: Warrior, Paladin\nRequires Level 60",
          "rating": "2.2",
          "price": "68000",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/340298-gleaming-quelserrar.jpg",
          "extra_url2": "https://www.raiditem.com/upload/iteminfo/20151218/20151218032756_88310.jpg",
          "extra_url3": "https://media.sketchfab.com/models/01eeb765a4fd4f2584fdaa5c184656c7/thumbnails/68f24dbeb006490c9f8385a7c6d38be9/1024.jpeg",
          "category": "weapon",
          "undefined": "https://static.turbosquid.com/Preview/2016/02/08__11_46_53/screen01.png0cf70468-2360-40bf-ae85-ea174ee46027Zoom.jpg"
      },
      {
          "id": "25",
          "name": "Brutality Blade",
          "image": "https://classicdb.ch/itemmodels/item_31309.jpg",
          "description": " Improves your chance to get a critical strike by 1%, but also makes all of your hair fall out",
          "specs": "Item Level 70\nBinds when picked up\nUnique\nOne-Hand\tSword\n90 - 168 Damage\tSpeed 2.50\n(51.60 damage per second)\n+9 Strength\n+9 Agility\nDurability 105 / 105\nRequires Level 60",
          "rating": "4.8",
          "price": "1200",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/276766-brutality-blade.jpg",
          "extra_url2": "http://www.wowtransmog.com/wp-content/uploads/2011/08/brutalityblade.png",
          "extra_url3": "https://wow.zamimg.com/uploads/screenshots/small/8193.jpg",
          "category": "weapon"
      },
      {
          "id": "26",
          "name": "Sulfuron Hammer",
          "image": "https://classicdb.ch/itemmodels/item_29699.jpg",
          "description": " Hurls a fiery ball that causes 83 to 101 Fire damage and an additional 16 damage over 8 sec. Makes apponents temporarily lose control of their bowels",
          "specs": "Item Level 67\nBinds when equipped\nTwo-Hand\tMace\n176 - 295 Damage\tSpeed 3.70\n(63.65 damage per second)\nDurability 120 / 120\nRequires Level 60",
          "rating": "4.5",
          "price": "780",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/small/330072.jpg",
          "extra_url2": "https://www.wow-freakz.com/img/screenshots/wowhead_74493.jpg",
          "extra_url3": "http://blizzardwatch.com/wp-content/uploads/2016/05/Sulfurases-NoHeader-051616.jpg",
          "category": "weapon"
      },
      {
          "id": "27",
          "name": "Annihilator",
          "image": "https://classicdb.ch/itemmodels/item_28849.jpg",
          "description": " Reduces an enemy's armor by 200.  Stacks up to 3 times. Also insults apponent's shoes",
          "specs": "Item Level 63\nBinds when equipped\nMain Hand        Axe\n49 - 92 Damage        Speed 1.70\n(41.47 damage per second)\nDurability 90 / 90\nRequires Level 58",
          "rating": "3",
          "price": "7800",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/1058-annihilator-anihilator-held-by-a-orc-warrior.jpg",
          "extra_url2": "http://www.wowtransmog.com/wp-content/uploads/2011/09/annihilator2.png",
          "category": "weapon"
      },
      {
          "id": "28",
          "name": "Bonereaver's Edge",
          "image": "https://classicdb.ch/itemmodels/item_32199.jpg",
          "description": " Your attacks ignore 700 of your enemies' armor for 10 sec. This effect stacks up to 3 times.\nEquip: Improves your chance to get a critical strike by 1%. ",
          "specs": "Item Level 77\nBinds when picked up\nTwo-Hand\tSword\n206 - 310 Damage\tSpeed 3.40\n(75.88 damage per second)\n+16 Stamina\nDurability 120 / 120\nRequires Level 60",
          "rating": "3.2",
          "price": "450",
          "extra_url1": "http://www.wowmogcompanion.com/sites/default/files/styles/two_fifty/public/gearpics/weapons/2hs45-2_0.jpg?itok=yL7BiVph",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/normal/308374-bonereavers-edge.jpg",
          "category": "weapon"
      },
      {
          "id": "29",
          "name": "Teebu's Blazing Longsword",
          "image": "https://classicdb.ch/itemmodels/item_19997.jpg",
          "description": " Blasts a target for 150 Fire damage. Uses AAA batteries",
          "specs": "Item Level 65\nBinds when equipped\nUnique\nMain Hand\tSword\n96 - 178 Damage\tSpeed 2.90\n(47.24 damage per second)\nDurability 105 / 105\nRequires Level 60",
          "rating": "2.3",
          "price": "5600",
          "extra_url1": "http://wow.zamimg.com/uploads/screenshots/resized/150513.jpg",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/normal/749380-teebus-scorching-straight-sword.jpg",
          "extra_url3": "https://mattfossen.com/xmog/sites/default/files/2019-04/Teebus%20Blazing%20Longsword.png",
          "category": "weapon"
      },
      {
          "id": "30",
          "name": "Azuresong Mageblade",
          "image": "https://classicdb.ch/itemmodels/item_29677.jpg",
          "description": " Improves your chance to get a critical strike with spells by 1%.\nEquip: Increases damage and healing done by magical spells and effects by up to 40.",
          "specs": "Item Level 71\nBinds when picked up\nMain Hand\tSword\n64 - 140 Damage\tSpeed 2.40\n(42.50 damage per second)\n+12 Intellect\n+7 Stamina\nDurability 105 / 105\nRequires Level 60",
          "rating": "5",
          "price": "210",
          "extra_url1": "https://www.wow-freakz.com/img/screenshots/wowhead_6690.jpg",
          "extra_url2": "https://www.wow-freakz.com/img/screenshots/wowhead_283294.jpg",
          "category": "weapon"
      },
      {
          "id": "31",
          "name": "Vis'kag the Bloodletter",
          "image": "https://classicdb.ch/itemmodels/item_32197.jpg",
          "description": " Delivers a fatal wound for 240 damage.",
          "specs": "Item Level 74\nBinds when picked up\nUnique\nOne-Hand\tSword\n100 - 187 Damage\tSpeed 2.60\n(55.19 damage per second)\nDurability 105 / 105\nRequires Level 60",
          "rating": "1",
          "price": "20",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/145234-tempered-viskag-the-bloodletter.jpg",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/small/89728.jpg",
          "extra_url3": "https://mattfossen.com/xmog/sites/default/files/2019-06/Singed%20Viskag%20the%20Bloodletter.png",
          "category": "weapon"
      },
      {
          "id": "32",
          "name": "\nMaladath, Runed Blade of the Black Flight",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/2402-maladath-runed-blade-of-the-black-flight.jpg",
          "description": " Increases your chance to parry an attack by 1%.\nEquip: Increased Swords +4.",
          "specs": "Item Level 75\nBinds when picked up\nUnique\nOne-Hand        Sword\n86 - 162 Damage        Speed 2.20\n(56.36 damage per second)\nDurability 105 / 105\nRequires Level 60",
          "rating": "3.4",
          "price": "4500",
          "extra_url1": "https://i.imgur.com/42cHS7S.png",
          "extra_url2": "https://i.ytimg.com/vi/WAPhIQdJL5o/maxresdefault.jpg",
          "category": "weapon"
      },
      {
          "id": "33",
          "name": "Blade of Eternal Darkness",
          "image": "https://classicdb.ch/itemmodels/item_29957.jpg",
          "description": " Chance on landing a damaging spell to deal 100 Shadow damage and restore 100 mana to you.",
          "specs": "Item Level 54\nBinds when picked up\nUnique\nMain Hand        Dagger\n34 - 70 Damage        Speed 1.50\n(34.67 damage per second)\nDurability 75 / 75\nRequires Level 49",
          "rating": "2",
          "price": "2100",
          "category": "weapon"
      },
      {
          "id": "34",
          "name": "Deathbringer",
          "image": "https://classicdb.ch/itemmodels/item_29161.jpg",
          "description": " Sends a shadowy bolt at the enemy causing 110 to 140 Shadow damage.",
          "specs": "Item Level 75\nBinds when picked up\nOne-Hand        Axe\n114 - 213 Damage        Speed 2.90\n(56.38 damage per second)\nDurability 105 / 105",
          "rating": "1",
          "price": "6300",
          "category": "weapon"
      },
      {
          "id": "35",
          "name": "Thrash Blade",
          "image": "https://classicdb.ch/itemmodels/item_29769.jpg",
          "description": " Grants an extra attack on your next swing. Can go trashy trashy on things",
          "specs": "Item Level 53\nBinds when picked up\nOne-Hand        Sword\n66 - 124 Damage        Speed 2.70\n(35.19 damage per second)\nDurability 90 / 90",
          "rating": "4",
          "price": "150",
          "category": "weapon"
      },
      {
          "id": "36",
          "name": "Chromatically Tempered Sword",
          "image": "https://classicdb.ch/itemmodels/item_31867.jpg",
          "description": "Really intense and super cool sword for fighting",
          "specs": "Item Level 77\nBinds when picked up\nUnique\nOne-Hand\tSword\n106 - 198 Damage\tSpeed 2.60\n(58.46 damage per second)\n+14 Strength\n+14 Agility\n+7 Stamina\nDurability 105 / 105\nRequires Level 60",
          "rating": "4.6",
          "price": "500",
          "category": "weapon"
      },
      {
          "id": "37",
          "name": "Whirlwind Axe",
          "image": "https://classicdb.ch/itemmodels/item_22734.jpg",
          "description": "axe that is also a tornado somehow",
          "specs": "Item Level 40\nBinds when picked up\nTwo-Hand        Axe\n102 - 154 Damage        Speed 3.60\n(35.56 damage per second)\n+15 Strength\n+14 Stamina\nDurability 100 / 100",
          "rating": "5",
          "price": "200000",
          "category": "weapon"
      },
      {
          "id": "38",
          "name": "Core Hound Tooth",
          "image": "https://classicdb.ch/itemmodels/item_33626.jpg",
          "description": "Equip: Improves your chance to get a critical strike by 1%.\nEquip: +20 Attack Power.",
          "specs": "Item Level 70\nBinds when picked up\nUnique\nOne-Hand\tDagger\n57 - 107 Damage\tSpeed 1.60\n(51.25 damage per second)\n+9 Stamina\nDurability 75 / 75\nRequires Level 60",
          "rating": "3.1",
          "price": "250",
          "category": "weapon"
      },
      {
          "id": "39",
          "name": "Ashkandi, Greatsword of the Brotherhood",
          "image": "https://www.speed4game.com/upload/image/two-handed%20sward/Reclaimed%20Ashkandi,%20Greatsword%20of%20the%20Brotherhood2.jpg",
          "description": "Here ye here ye and bask at thy great sword of the kapa deltas",
          "specs": "Item Level 81\nBinds when picked up\nTwo-Hand        Sword\n229 - 344 Damage        Speed 3.50\n(81.86 damage per second)\n+33 Stamina\nDurability 120 / 120\nRequires Level 60",
          "rating": "4.4",
          "price": "68000",
          "category": "weapon"
      },
      {
          "id": "40",
          "name": "Thunderfury, Blessed Blade of the Windseeker ",
          "image": "https://external-preview.redd.it/mbozE30M3HeddphCXgvJocGSH3fK7cHj8kcl4vDZTyE.jpg?auto=webp&s=f3ef75d08326af68dd202c3a9acaf30fb396a978",
          "description": "legendary sword once wielded by Thunderaan, Prince of Air but is now accessible to anyone who plays video games for long enough",
          "specs": "Item Level 80\nBinds when picked up\nUnique\nOne-Hand\tSword\n44 - 115 Damage\tSpeed 1.90\n+ 16 - 30 Nature Damage\n(53.95 damage per second)\n+5 Agility\n+8 Stamina\n+8 Fire Resistance\n+9 Nature Resistance\nDurability 125 / 125\nRequires Level 60",
          "rating": "4.3",
          "price": "5000",
          "category": "weapon"
      },
      {
          "undefined": "Tom",
          "id": "41",
          "name": "Quickdraw Quiver",
          "image": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_quiver_07.jpg",
          "description": "Created with at least 225 Leatherworking skill out of Thick Leather (12), Cured Thick Hide, Elixir of Agility, and Silken Thread (4). Can contain arrows (it's a quiver, duh), select trade goods, enchanting formulae, and some enchantment materials. Does not slice or dice or make perfect pancakes.",
          "specs": "Item Level 45, Bag, Requires Level 40,  Equip: Increases Attack Speed by 13%",
          "rating": "4.6",
          "price": "10",
          "extra_url1": "https://i.pinimg.com/originals/9d/07/56/9d07566ed7b250ba231619660f47f398.jpg",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/normal/9326-quickdraw-quiver.jpg",
          "category": "Projectiles"
      },
      {
          "id": "42",
          "name": "Heavy Leather Ammo Pouch",
          "image": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_09.jpg",
          "description": "Created with at least 150 Leatherworking skill out of Thick Leather (8) and Fine Thread (2). Can contain bullets (it's an ammo pouch, duh), select trade goods, enchanting formula, herbs (but no spices!), and some other stuff that only appeals to Chinese gold farmers.",
          "specs": "Item Level 35, Bag, Requires Level 30,  Equip: Increases Attack Speed by 12%",
          "rating": "4.2",
          "price": "5",
          "category": "Projectiles"
      },
      {
          "id": "43",
          "name": "Bandolier of the Night Watch",
          "image": "https://pinegroveleather-static.myshopblocks.com/images/2019/04/contain/2048x2048/ef5a688191d26f6ae4a6e86695954102.jpg",
          "description": "Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. But I can get a cool bandolier.",
          "specs": "Item Level 25, Binds when picked up, Unique, Bag, Equip: Increased ranged attack speed by 11%",
          "rating": "2.7",
          "price": "5",
          "extra_url1": "https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s1920",
          "category": "Projectiles"
      },
      {
          "id": "44",
          "name": "Quiver of the Night Watch",
          "image": "https://classicdb.ch/images/screenshots/thumb/25852.jpg",
          "description": "Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. But I can get a cool quiver.",
          "specs": "Item Level 25, Binds when picked up, Unique, Bag, Equip: Increased ranged attack speed by 11%",
          "rating": "2.8",
          "price": "5",
          "extra_url1": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_quiver_04.jpg",
          "extra_url2": "https://i.pinimg.com/474x/93/54/ff/9354ff01ba9390b96dc29ec92b91d3ab.jpg",
          "category": "Projectiles"
      },
      {
          "id": "45",
          "name": "Ancient Sinew Wrapped Lamina",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/212233-ancient-sinew-wrapped-lamina-on-a-female-tauren.jpg",
          "description": "Greetings, shopper. I am Hastat, Ancient of Lore. I hold knowledge lost eons ago.\n\nWith the proper binding, one of my leaves can serve as a quiver the likes of which has not been seen in 10,000 years. A quiver that when accompanied by a bow of Ancients, could grant untold powers.",
          "specs": "Item Level 75, Binds when picked up, Unique, Bag, Classes: Hunters, Requires Level 60, Equip: Increases ranged attack speed by 15%",
          "rating": "5",
          "price": "9950",
          "extra_url1": "https://i.ytimg.com/vi/1WcAt680erw/maxresdefault.jpg",
          "category": "Projectiles"
      },
      {
          "id": "46",
          "name": "Harpy Hide Quiver",
          "image": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_quiver_06.jpg",
          "description": "A reward from Alterac Valley that requires revered reputation there. Once you have that reputation, you can buy it from there or anywhere else it is sold. If you don't have that reputation, lots and lots of money can solve many problems.",
          "specs": "Item Level 60\nBinds when picked up\nUnique\nBag\nRequires Level 55\nEquip: Increases ranged attack speed by 15%.",
          "price": "3150",
          "extra_url1": "https://i.redd.it/dmqp3nsm0a231.jpg",
          "extra_url2": "https://wow.zamimg.com/uploads/screenshots/normal/125607-harpy-hide-quiver.jpg",
          "category": "Projectiles"
      },
      {
          "id": "47",
          "name": "Small Leather Ammo Pouch",
          "image": "https://i.pinimg.com/originals/44/f2/4d/44f24dfe857c41d5bfa51f891c5519b1.jpg",
          "description": "Made for total n00bs by total n00bs. But we all have to start somewhere. Will hold bullets and the same things as other, better quivers you want to replace this with as soon as possible.",
          "specs": "Small Leather Ammo Pouch\nItem Level 5\nBag\nEquip: Increases ranged attack speed by 10%.",
          "rating": "2.2",
          "price": "0.25",
          "extra_url1": "https://i.etsystatic.com/13871006/r/il/e14f65/1790568397/il_794xN.1790568397_i6gc.jpg",
          "extra_url2": "https://i.ebayimg.com/images/g/UDcAAOSw1BlZOZ-W/s-l300.jpg",
          "extra_url3": "https://i.etsystatic.com/12221297/r/il/83813d/1841456614/il_794xN.1841456614_sgt2.jpg",
          "extra_url4": "https://i.etsystatic.com/12221297/r/il/aadbd8/1735568371/il_570xN.1735568371_o1j4.jpg",
          "category": "Projectiles"
      },
      {
          "id": "48",
          "name": "Ribbly's Bandolier",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/192606-ribbly-screwspigot.jpg",
          "description": "Can contain bullets, herbs, select trade goods, enchanting formula, some enchantment material. Manufactured substantively out of thin air by defeating Ridley Screwspigot.",
          "specs": "Item Level 55\nBinds when picked up\nUnique\nBag\nRequires Level 50\nEquip: Increases ranged attack speed by 14%.\nDropped by: Ribbly Screwspigot\nDrop Chance: 9.00%\n",
          "rating": "4.7",
          "price": "87.5",
          "extra_url1": "https://wow.zamimg.com/uploads/screenshots/normal/192606-ribbly-screwspigot.jpg",
          "category": "Projectiles"
      },
      {
          "id": "49",
          "name": "Doomshot",
          "image": "https://tfwiki.net/mediawiki/images2/thumb/a/a8/TF-Generations-Titans-Return-Doomshot.jpg/300px-TF-Generations-Titans-Return-Doomshot.jpg",
          "description": "as for these arrows, they are so hard to get in mass that i'l never role for them anyway what's the point unless you plan on doing LBRS 20 odd times to fill a quiver :S",
          "specs": "Item Level 59\nBinds when picked up\nProjectile        Arrow\nAdds 20 damage per second\nRequires Level 54\nMax Stack: 200\nDropped by: Shadow Hunter Vosh'gajin\nDrop Chance: 27.84%",
          "rating": "4.8",
          "price": "0.62",
          "extra_url1": "https://d9nvuahg4xykp.cloudfront.net/-1323114884898054530/961257548347977876.jpg",
          "extra_url2": "http://www.transformers-universe.com/content/images/Imagemaps/GenerationsMegatronTR_Map.jpg",
          "extra_url3": "https://images-na.ssl-images-amazon.com/images/I/81x3hfIjslL._SX425_.jpg",
          "extra_url4": "https://i.ebayimg.com/images/g/PZwAAOSwK89cQtyK/s-l300.jpg",
          "extra_url5": "http://img.photobucket.com/albums/v463/Goldgaigar/TF_G1_Part14/TFTR_Voy_Megatron4.jpg",
          "category": "Projectiles"
      },
      {
          "id": "50",
          "name": "Thorium Headed Arrow",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjk09Kc6pznAhUH16wKHX_eCF0QjRx6BAgBEAQ&url=https%3A%2F%2Fwowwiki.fandom.com%2Fwiki%2FAmmunition&psig=AOvVaw0CLkDD2cc4V_WaTyf_fmkq&ust=1579975673500985",
          "description": " These are the primary reason I took up Engineering. DPS is key in the endgame, and you can get 10 stacks of these for about 5g worth of mats. (20 Thorium Bars, 20 Dense Stone).\n\nWhen playing normally, I'll use Jagged Arrows to save money, but in the high end instances and sometimes battlegrounds, I'll always switch to these.",
          "specs": "Thorium Headed Arrow\nItem Level 57\nProjectile        Arrow\nAdds 17.5 damage per second\nRequires Level 52\nMax Stack: 200",
          "rating": "4.6",
          "price": "0.1",
          "extra_url1": "https://i.ytimg.com/vi/hwZHz90j-QQ/maxresdefault.jpg",
          "category": "Projectiles"
      },
      {
          "id": "51",
          "name": "Jagged Arrow",
          "image": "https://cdn4.iconfinder.com/data/icons/arrows-65/64/arrow_jagged-512.png",
          "description": "Wowhead seems to confirm what I have found which is that there is no ammo vendor in all of winterspring for the horde. Just an ally vendor in starfall. Be sure to stock up before going to winterspring. Seems like a design oversight to me.",
          "specs": "Jagged Arrow\nItem Level 45\nProjectile        Arrow\nAdds 13 damage per second\nRequires Level 40\nMax Stack: 200",
          "rating": "4.1",
          "price": "11.25",
          "extra_url1": "https://cdn.newretirement.com/retirement/wp-content/uploads/2017/06/jagged-arrow-orig.png",
          "extra_url2": "https://image.shutterstock.com/image-photo/businessman-silhouette-against-red-green-260nw-298048289.jpg",
          "extra_url3": "https://img.charteo.com/isolated_04-003-01_031_xl.png",
          "extra_url4": "https://cdn2.iconfinder.com/data/icons/arrow-part-2/512/20-512.png",
          "extra_url5": "https://images-na.ssl-images-amazon.com/images/I/513%2BVQzPLJL.jpg",
          "category": "Projectiles"
      },
      {
          "id": "52",
          "name": "Sharp Arrow",
          "image": "https://c7.uihere.com/files/345/781/290/sharp-arrow.jpg",
          "description": "Sharp. Very sharp. Since 2016, also known as Foxconn Arrows.",
          "specs": "Item Level 15\nProjectile        Arrow\nAdds 3.5 damage per second\nRequires Level 10\nMax Stack: 200",
          "rating": "3.7",
          "price": "0.56",
          "extra_url1": "https://cdn0.iconfinder.com/data/icons/primitive/512/sharp_down_arrow-512.png",
          "extra_url2": "https://i.ebayimg.com/images/g/G6MAAOSw9mpaGRRG/s-l640.jpg",
          "category": "Projectiles"
      },
      {
          "id": "53",
          "name": "Precision Arrow",
          "image": "https://horizonzerodawn.wiki.fextralife.com/file/Horizon-Zero-Dawn/Arrow_Pack.png",
          "description": "Precision means you hit what you're aiming at. But these are just arrows, and because you're Level 40, they assume you can already hit what you're aiming at. So these aren't very accurately named.",
          "specs": "Precision Arrow\nItem Level 40\nProjectile        Arrow\nAdds 11.5 damage per second\nRequires Level 35\nMax Stack: 200\nDropped by: Baelog\nDrop Chance: 89.24%",
          "rating": "3.9",
          "price": "1.12",
          "extra_url1": "https://images-na.ssl-images-amazon.com/images/I/71Gk9kQAM0L._AC_SX425_.jpg",
          "extra_url2": "https://pbs.twimg.com/profile_images/677118394324393984/PZfVZgHb_400x400.png",
          "category": "Projectiles"
      },
      {
          "id": "54",
          "name": "Explosive Arrow",
          "image": "https://gamepedia.cursecdn.com/pathofexile_gamepedia/2/20/Explosive_Arrow_skill_screenshot.jpg",
          "description": "Made from the Explosive Arrow spell using tools Arclight Spanner and Gyromatic Micro-Adjustor and reagents Razor Arrow (100), Solid Blasting Powder (2), Mithril Bar (2). Then goes boom.",
          "specs": "Explosive Arrow\nItem Level 42\nProjectile        Arrow\nAdds 14.5 damage per second\nRequires Level 37\nMax Stack: 200",
          "rating": "3.3",
          "price": "0.98",
          "extra_url1": "https://i.pinimg.com/originals/86/ba/28/86ba2851df1109e8b75e7ed04c8f6ce4.jpg",
          "extra_url2": "https://gamepedia.cursecdn.com/infestationnewz_gamepedia_en/3/3d/Arrow_Explosive.png",
          "extra_url3": "https://i.ytimg.com/vi/qx8eOtPtKo0/hqdefault.jpg",
          "category": "Projectiles"
      },
      {
          "id": "55",
          "name": "Smooth Pebble",
          "image": "https://images-na.ssl-images-amazon.com/images/I/71WLeJzI3AL._AC_SY355_.jpg",
          "description": "Much more weak bag-friendly than sharp pebbles. Not as tasty as Fruity Peobbles. Perfect for skimming.",
          "specs": "Item Level 18\nProjectile        Bullet\nAdds 4 damage per second\nRequires Level 13\nMax Stack: 200",
          "rating": "3.4",
          "price": "0.12",
          "extra_url1": "https://www.jbprince.com/images/K756_zoom.jpg",
          "extra_url2": "https://secure.img1-fg.wfcdn.com/im/41888653/resize-h700-p1-w700%5Ecompr-r85/6479/64798970/Smooth+Pebble+1-Gang+Toggle+Light+Switch+Wall+Plate.jpg",
          "category": "Projectiles"
      },
      {
          "id": "56",
          "name": "Rockshard Pellets",
          "image": "https://i.ebayimg.com/images/g/QCIAAOSwIk9aZiZ1/s-l300.jpg",
          "description": "Lord Roccor is the first boss that you will encounter in Blackrock Depths. Roccor had angered the Firelord and was expelled from Molten Core and to guard Blackrock Depths alone. He has recorded four albums, but all were easy listening music and he refused to change his name, so he never got a recording contract.",
          "specs": "Item Level 52\nProjectile        Bullet\nAdds 18 damage per second\nRequires Level 47\nMax Stack: 200\nDropped by: Lord Roccor\nDrop Chance: 7.83%",
          "rating": "4.1",
          "price": "0.27",
          "extra_url1": "https://rocktumbler.com/620/rock-tumbler-media.jpg",
          "extra_url2": "https://i.pinimg.com/originals/17/e8/92/17e892f57667bd3589a5332361d06147.png",
          "extra_url3": "https://cookinpellets.com/wp-content/uploads/2018/04/Pellets.png",
          "category": "Projectiles"
      },
      {
          "id": "57",
          "name": "Miniature Cannon Balls",
          "image": "https://images-na.ssl-images-amazon.com/images/I/61TdemcaBGL._AC_SX522_.jpg",
          "description": "Ahhh yes the Miniature cannon balls. A true marksmens choice of ammunition. Why you ask? One, the contrast between the Doomshot (Superior Quality Arrow) and the Miniature Cannon Ball is in the consistancy in the dps (Damage per second). I have a 60 hunter on Destromath by the name of Dragonlys, and through my adventures I've noticed for the time and effort it takes to journey through LOWER* Blackrock Spire to get the Doomshot arrows *Note: Emphasis on Lower* - In my humble opinion - is not worth it.",
          "specs": "Item Level 61\nBinds when picked up\nProjectile        Bullet\nAdds 20.5 damage per second\nRequires Level 56\nMax Stack: 200\nDropped by: Cannon Master Willey\nDrop Chance: 94.34%",
          "rating": "4.9",
          "price": "0.52",
          "extra_url1": "https://fireworks-websiteworld.netdna-ssl.com/image/cache/catalog/Cannons/cannons%20new-800x800.jpg",
          "extra_url2": "https://images-na.ssl-images-amazon.com/images/I/611JHIuRJEL._SX466_.jpg",
          "category": "Projectiles"
      },
      {
          "id": "58",
          "name": "Ice Threaded Bullet",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/7475.jpg",
          "description": "These arrows scale with mob size so somtimes you'll have arrows the length of a city bus and as wide as a dwarf. They're decent DPS::Cost. Make sure you stock up since they are BoP. Also, remember that you can't give them to your friends, if they run out of ammo. May want to carry 1-2 stacks of non-binding ammo for covering other people's forgetfulnes.",
          "specs": "Item Level 54\nBinds when picked up\nProjectile        Bullet\nAdds 16.5 damage per second\nRequires Level 51\nMax Stack: 200",
          "rating": "4.4",
          "price": "0.42",
          "extra_url1": "https://static.icy-veins.com/images/classic/og-images/alterac-valley.jpg",
          "extra_url2": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/_V0int8mlI4kKNNAUyuNQn8ngXo=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/4IV35OADAYI6RA5ANSBRJJQILY.jpg",
          "category": "Projectiles"
      },
      {
          "id": "59",
          "name": "Hi-Impact Mithril Slugs",
          "image": "https://tagn.files.wordpress.com/2007/09/mithril.png?w=364",
          "description": "Can be made with skill Engineering (210) with tool Blacksmith Hammer using reagents Mithril Bar, Solid Blasting Powder",
          "specs": "Item Level 42\nProjectile        Bullet\nAdds 12.5 damage per second\nRequires Level 37\nMax Stack: 200",
          "rating": "3.8",
          "price": "0.23",
          "extra_url1": "https://thumbs.worthpoint.com/zoom/images4/1/0615/05/lord-rings-mithril-pewter-aragorn_1_cc5e3c37fd875a9767b8403958e3d316.jpg",
          "extra_url2": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc813ec9-7da7-4fcf-8880-4200ba845e27/d6fz7qg-4178f1c0-0d21-4889-b0aa-0283e72720f1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjODEzZWM5LTdkYTctNGZjZi04ODgwLTQyMDBiYTg0NWUyN1wvZDZmejdxZy00MTc4ZjFjMC0wZDIxLTQ4ODktYjBhYS0wMjgzZTcyNzIwZjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Hz8ZA2aihdb_1PeLT9COdIcmkFURBJMxVKPkfz84wTc",
          "category": "Projectiles"
      },
      {
          "id": "60",
          "name": "Mithril Gyro-Shot",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/70933-mithril-heavy-bore-rifle-in-action.jpg",
          "description": "I haven't seen any place where you can convert into arrows, meaning gun users have somewhat of an advantage. These bullets are second rate compared to Thorium Shells, but seeing as thorium is more difficult to mine, I use these in PvP matches. Thorium Shells I use, when in raiding instances.",
          "specs": "Item Level 49\nProjectile        Bullet\nAdds 15 damage per second\nRequires Level 44\nMax Stack: 200",
          "rating": "4.1",
          "price": "0.49",
          "extra_url1": "https://cdn.shopify.com/s/files/1/0004/2342/8162/products/IMG_20190911_190301_1024x1024.jpg?v=1570206415",
          "extra_url2": "http://www.icefieldtools.com/wp-content/uploads/2016/08/ICEFIELD-059-white.jpg",
          "extra_url3": "https://www.icefieldtools.com/wp-content/uploads/2013/05/Gyroshot-Case2.jpg",
          "category": "Projectiles"
      },
      {
          "undefined": "Ben",
          "id": "61",
          "name": "Essence of Water",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRabJYc7NfIABXb6wfAeyzsW2FarmuPhjMW2GEWuHdfHABHV4j8",
          "description": "Known by elemental id of H20, this element is essential for sustaining life of all forms",
          "specs": "Item Level 55, \nMax Stack: 10",
          "rating": "4.8",
          "price": "4",
          "extra_url1": "https://hips.hearstapps.com/ame-prod-goodhousekeeping-assets.s3.amazonaws.com/main/embedded/25836/glass_water.jpg",
          "extra_url2": "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
          "category": "Trade goods"
      },
      {
          "id": "62",
          "name": "Field Repair Bot 74A",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/70072-field-repair-bot-74a.jpg",
          "description": "Unfolds into a Field Repair Bot that can repair damaged items and purchase unwanted goods.  After 10 minutes its internal motor fails.",
          "specs": "Item Level 60, \nRequires Engineering (300)",
          "rating": "3.2",
          "price": "100",
          "category": "Trade goods"
      },
      {
          "id": "63",
          "name": "Black Lotus",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/498.jpg",
          "description": "Flower with magical and medicinal effects. Difficult to grow or forage, delivered directly to your door!",
          "specs": "Item Level, \nMax Stack: 2060",
          "rating": "2.1",
          "price": "10",
          "category": "Trade goods"
      },
      {
          "id": "64",
          "name": "Golden Pearl",
          "image": "https://www.thepearlsource.com/images/catalog/zoom/16GSSPLS.jpg",
          "description": "This pearl can be farmed or bought and traded for whatever products you may need!",
          "specs": "Item Level 40, \nMax Stack: 20",
          "price": "100",
          "extra_url1": "https://sep.yimg.com/ay/americanpearl/14mm-golden-south-sea-pearl-earrings-1.jpg",
          "category": "Trade goods"
      },
      {
          "id": "65",
          "name": "Essence of Air",
          "image": "https://www.koreanair.com/content/dam/koreanair/Global/backgrounds/SKYPASS/Marquee%20SKYPASS%20jump.jpg",
          "description": "Doctors recommend breathing this daily.",
          "specs": "Item Level 55, \nMax Stack: 10",
          "rating": "3.5",
          "price": "4",
          "extra_url1": "https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408-1024x683.jpg",
          "extra_url2": "https://www.shell.com/energy-and-innovation/the-energy-future/scenarios/shell-scenario-sky/_jcr_content/pagePromo/image.img.960.jpeg/1548184031017/clear-blue-sky.jpeg",
          "category": "Trade goods"
      },
      {
          "id": "66",
          "name": "Living Essence",
          "image": "https://d1u82yn7miridg.cloudfront.net/eyJidWNrZXQiOiJsYWJyb290cy1hc3NldHMiLCJrZXkiOiJfcHVibGljXC9fZmlsZXNcL3N5c3RlbVwvY2tcL3RyZW5kaW5nXC9TY3JlZW4gU2hvdCAyMDE4LTAyLTI4IGF0IDkuMjIuNDEgQU1fNDU3OTMwZGMwNWVmNzY0NmMyYzU2ZjM2NWExYjdlNjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3MDAsImZpdCI6ImNvdmVyIn19fQ==",
          "description": "This will protect you against enemies and help you heal any damage you may have already sustained. Life is priceless, but can be delivered for a mere 5 silver!",
          "specs": "Item Level 55,\nMax Stack: 10",
          "rating": "4",
          "price": "5",
          "category": "Trade goods"
      },
      {
          "id": "67",
          "name": "Advanced Target Dummy",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/167079-advanced-target-dummy.jpg",
          "description": "Drops a target dummy on the ground that attracts nearby monsters to attack it. Lasts for 15 seconds or until killed. (2 Min Cooldown)",
          "specs": "Item Level 37, Requires Engineering (185)",
          "rating": "3",
          "price": "25",
          "extra_url1": "https://static.turbosquid.com/Preview/2019/02/18__04_59_25/Crash_Test_Dummy_Rigged_c4d_00.jpg06869F8F-4BC5-4818-AAAD-72A1BCBF72C5DefaultHQ.jpg",
          "category": "Trade goods"
      },
      {
          "id": "68",
          "name": "Salt Shaker",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/71864-salt-shaker-using-a-salt-shaker.jpg",
          "description": "Allows an experienced leatherworker to turn Deeprock Salt into Refined Deeprock Salt.  Use of the device exposes the user to sub-core micro radiation and should not be used more than once every few days. (3 Days Cooldown)",
          "specs": "Item Level 50, Requires Leatherworking (250)",
          "rating": "2",
          "price": "75",
          "extra_url1": "https://static.grainger.com/rp/s/is/image/Grainger/4NCT3_AS01?$mdmain$",
          "extra_url2": "http://maryjurekdesign.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/h/m/hmt_001_-_metro_salt_pepper_set__1.jpg",
          "category": "Trade goods"
      },
      {
          "id": "69",
          "name": "Discombobulator Ray",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcallofduty.fandom.com%2Fwiki%2FRay_Gun&psig=AOvVaw3lhVXhBpOULt7LHLte6Z7J&ust=1579930554074000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjO_pXCm-cCFQAAAAAdAAAAABAX",
          "description": "Transforms the target into a Leper Gnome, reducing its melee and spell damage by 40 and its movement rate by 20% for 12 sec. (1 Min Cooldown)",
          "specs": "Discombobulator Ray, Item Level 32",
          "rating": "4.5",
          "price": "10",
          "extra_url1": "https://gamepedia.cursecdn.com/wowpedia/9/99/Leper_GnomeHS.jpg",
          "category": "Trade goods"
      },
      {
          "id": "70",
          "name": "Tranquil Mechanical Yeti",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/82740-tranquil-mechanical-yeti.jpg",
          "description": "Right Click to summon and dismiss your Tranquil Mechanical Yeti.",
          "specs": "Item Level 60, Binds when used",
          "rating": "4.3",
          "price": "12.25",
          "extra_url1": "https://target.scene7.com/is/image/Target/GUEST_560dded9-b94b-4d73-8d5e-6d593252cc58?wid=488&hei=488&fmt=pjpeg",
          "extra_url2": "https://i.ebayimg.com/images/g/lO4AAOSwWI1dj2sD/s-l640.jpg",
          "category": "Trade goods"
      },
      {
          "id": "71",
          "name": "Compact Harvest Reaper Kit",
          "image": "http://www.playthingofthegods.com/DianiusPetsGuide/CompactHarvestReaper.jpg",
          "description": "Creates a Compact Harvest Reaper that will fight for you for 10 min or until it is destroyed. (10 Min Cooldown)",
          "specs": "Item Level 35,\nRequires Level 30,\nRequires Engineering (175)",
          "rating": "5",
          "price": "40",
          "extra_url1": "https://www.deere.com/assets/images/region-4/products/harvesting/tseries-combine-r2C001197-1024x576.jpg",
          "extra_url2": "https://cdn.britannica.com/73/191073-131-0D844C57/reaper-death.jpg",
          "category": "Trade goods"
      },
      {
          "id": "72",
          "name": "Flame Deflector",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/502323-schematic-hyper-radiant-flame-reflector-showing-what-the-animation-looks-like-wh.jpg",
          "description": "Absorbs 500 fire damage.  Lasts 1 min. (15 Min Cooldown)",
          "specs": "Item Level 25,\nRequires Level 15",
          "rating": "2.1",
          "price": "2",
          "extra_url1": "https://images-na.ssl-images-amazon.com/images/I/51R%2BjwOOjgL._SX425_.jpg",
          "category": "Trade goods"
      },
      {
          "id": "73",
          "name": "Gnomish Alarm-O-Bot",
          "image": "https://gamepedia.cursecdn.com/wowpedia/6/67/Alarmobot.png",
          "description": "Summons an Alarm-O-Bot for 10 minutes that occasionally sends out a pulse that detects nearby stealthy or invisible enemies. (10 Min Cooldown)",
          "specs": "Item Level 53,\nRequires Engineering (265)",
          "rating": "3.7",
          "price": "15",
          "category": "Trade goods"
      },
      {
          "id": "74",
          "name": "Mechanical Squirrel Box",
          "image": "https://wow.zamimg.com/uploads/screenshots/normal/85764-schematic-mechanical-squirrel-box.jpg",
          "description": "Creates a Mechanical Squirrel that follows you around.  Right Click to summon and dismiss your Squirrel.",
          "rating": "4.1",
          "price": "1",
          "extra_url1": "https://gamepedia.cursecdn.com/wowpedia/thumb/7/7b/Coppertail_Imposter.jpg/300px-Coppertail_Imposter.jpg?version=4b492f5af56456b86bb99b89d266e2c2",
          "extra_url2": "https://cdn2.warcraftpets.com/images/pets/big/rabid-nut-varmint-5000.v29bbe74e0862df25c47cb54f4d9331ae4a91e074.jpg",
          "category": "Trade goods"
      },
      {
          "id": "75",
          "name": "Explosive Sheep",
          "image": "https://vignette.wikia.nocookie.net/wowwiki/images/f/f4/ExplosiveSheep.jpg/revision/latest/scale-to-width-down/340?cb=20070928152941",
          "description": "Summons an Explosive Sheep which will charge at a nearby enemy and explode for 135 to 165 damage.  Lasts for 3 min or until it explodes. (1 Min Cooldown)",
          "specs": "Item Level 30, Requires Engineering (150)",
          "rating": "4.7",
          "price": "10",
          "extra_url1": "https://gamepedia.cursecdn.com/wowpedia/thumb/9/99/Explosive_Sheep_HS.jpg/600px-Explosive_Sheep_HS.jpg?version=f41b745e2c961a2a28866fde2131797e",
          "extra_url2": "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          "category": "Trade goods"
      },
      {
          "id": "76",
          "name": "Hi-Explosive Bomb",
          "image": "https://tse2.mm.bing.net/th?id=OIP.guGFeN7I_PHsU-znHaCIHwAAAA",
          "description": "Inflicts 255 to 345 Fire damage and stuns targets in a 3 yard radius for 3 sec.  Any damage will break the effect. (1 Min Cooldown)",
          "specs": "Item Level 47, Requires Engineering (235)",
          "rating": "2.3",
          "price": "7.5",
          "extra_url1": "https://www.history.com/.image/t_share/MTU3ODc5MDg3MjQ0Mzg3NjU3/a-nuclear-explosion-at-mururoa-in-france-on-october-30-1971.jpg",
          "extra_url2": "https://cnduk.org/wp-content/uploads/2018/12/Atomic-Bomb.jpg",
          "category": "Trade goods"
      },
      {
          "id": "77",
          "name": "Big Bronze Bomb",
          "image": "https://i.etsystatic.com/11122517/r/il/9da521/2056301087/il_570xN.2056301087_l84n.jpg",
          "description": "Inflicts 85 to 115 Fire damage and stuns targets in a 5 yard radius for 2 sec.  Any damage will break the effect. (1 Min Cooldown)",
          "specs": " Item Level 33,\nRequires Engineering (140)",
          "rating": "4.3",
          "price": "5",
          "category": "Trade goods"
      },
      {
          "id": "78",
          "name": "Thick Leather",
          "image": "https://images-na.ssl-images-amazon.com/images/I/711tUVoZkbL.__AC_SX342_QL70_ML2_.jpg",
          "description": "Considered an all-around wise investment, this durable material is in high demand from gnomes, trolls, and bikers.",
          "specs": "Item Level 40,\nMax Stack: 20",
          "rating": "4.1",
          "price": "3",
          "extra_url1": "https://46fjj12eeht73lsxezcqpvlt-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/where-leather-is-made-the-tanneries-to-know-image-via-horween.jpg",
          "extra_url2": "https://miro.medium.com/max/1180/0*o3z4a0CH22-SXWIv",
          "category": "Trade goods"
      },
      {
          "id": "79",
          "name": "Deeprock Salt",
          "image": "https://previews.123rf.com/images/tuelekza/tuelekza1503/tuelekza150300051/37440867-salt-pile-in-salt-farm.jpg",
          "description": "Are you worth your weight in salt? This kitchen staple is an one of the most ancient ways of settling debt and no one will go wrong with such a sure investment",
          "specs": "Item Level 50,\nMax Stack: 20",
          "rating": "3.7",
          "price": "2.5",
          "extra_url1": "https://cdn.britannica.com/00/196200-050-A18811BA/Uyuni-Salt-Flat-Bolivia.jpg",
          "category": "Trade goods"
      },
      {
          "id": "80",
          "name": "Turtle Scale",
          "image": "https://i.pinimg.com/originals/bb/10/6a/bb106ae07692578a5ab7e77350783c78.jpg",
          "description": "A glamorous alternative to pearls or coin currency, this chelonian plate will be sure to spark conversations",
          "specs": "Item Level 35,\nMax Stack: 20",
          "rating": "3.2",
          "price": "1",
          "extra_url1": "https://cdn.discstore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/u/turtle_front_web.jpg",
          "category": "Trade goods"
      },
      {
          "undefined": "Ryan",
          "id": "81",
          "name": "Eye of the Beast",
          "description": " Eye of the Beast is considered an optional best-in-slot PvP Trinket for various classes during Phase 2. While equipped, this trinket improves your chance to get a critical strike with spells by 2%. This item is obtainable by completing  General Drakkisath's Demise /  For The Horde! within Upper Blackrock Spire.",
          "specs": "Item Level 63, Binds when picked up, Trinket, Classes: Priest, Shaman, Mage, Warlock, Druid, Equip: Improves your chance to get a critical strike with spells by 2%.",
          "rating": "4.6",
          "price": "162.5",
          "category": "armor"
      },
      {
          "id": "82",
          "name": "Devilsaur Leggings",
          "description": "This item is part of the following transmog set:  Devilsaur Garb",
          "specs": "Item Level 60\nBinds when equipped\nLegs        Leather\n148 Armor\n+12 Stamina\nDurability 75 / 75\nRequires Level 55\nEquip: +46 Attack Power.\nEquip: Improves your chance to get a critical strike by 1%.\n\nDevilsaur Armor (0/2)\nDevilsaur Leggings\nDevilsaur Gauntlets\n\n(2) Set : Improves your chance to hit by 2%.",
          "rating": "3.5",
          "price": "257.9",
          "category": "armor"
      },
      {
          "id": "83",
          "name": "Cindercloth Cloak",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/4691.jpg",
          "description": "The guidance blacks a then enterprise throughout the laugh. When will a resolved pill foam? A shout paces outside the belt. A crisp spins a spare fiddle. The scenery pins the practical assistant behind a misuse.",
          "specs": "Item Level 55\nBinds when equipped\nBack\n36 Armor\n+8 Intellect\nRequires Level 50\nEquip: Increases damage done by Fire spells and effects by up to 13.",
          "rating": "4.2",
          "price": "95.3",
          "category": "armor"
      },
      {
          "id": "84",
          "name": "Black Dragonscale Shoulders",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/32268.jpg",
          "description": "A military knee springs onto an annoyance. A food misses our comedy. Whatever bright prejudice offends without this imperative. A chancellor peers beneath the modeled novice.",
          "specs": "Item Level 60\nBinds when equipped\nShoulder        Mail\n266 Armor\n+9 Stamina\n+6 Fire Resistance\nDurability 70 / 70\nRequires Level 55\nEquip: +40 Attack Power.",
          "rating": "3.9",
          "price": "217.36",
          "category": "armor"
      },
      {
          "id": "85",
          "name": "Robe of the Archmage",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/3357.jpg",
          "description": "When can the joke reckon? The stiff steams inside the diner. A nose decays. The blanket brick worships the called badge. Can an alpha patience lean opposite the backbone? Underneath the metaphor bounces the counter wash.\n",
          "specs": "Binds when picked up\nChest        Cloth\n96 Armor\n+12 Intellect\nDurability 100 / 100\nClasses: Mage\nRequires Level 57",
          "rating": "1.9",
          "price": "288.15",
          "category": "armor"
      },
      {
          "id": "86",
          "name": "Truestrike Shoulders",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/3311.jpg",
          "description": "The overload rests. A terminology jerks the arrival. An intercourse chews on top of the unpleasant school. The granted alcoholic withdraws underneath a turnround. The boundary shouts under a company.\n",
          "specs": "Item Level 61\nBinds when picked up\nShoulder        Leather\n129 Armor\nDurability 60 / 60\nRequires Level 56",
          "rating": "4.3",
          "price": "191.49",
          "category": "armor"
      },
      {
          "id": "87",
          "name": "Cloak of the Shrouded Mists",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/6736.jpg",
          "description": "How can a bay passage withdraw the subjective piano? When can a mum squeeze rest upon the fascinated tactic? The starving hope retracts without a crown. Any crisp specimen displays the firework. The teacher wows the shout. The setting fear rattles next to a downhill.\n",
          "specs": "Item Level 74\nBinds when picked up\nBack\n57 Armor\n+22 Agility\n+12 Stamina\n+6 Fire Resistance\n+6 Nature Resistance\nRequires Level 60",
          "rating": "4.5",
          "price": "386.89",
          "category": "armor"
      },
      {
          "id": "88",
          "name": "Mish'undare, Circlet of the Mind Flayer",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/7924.jpg",
          "description": "A believer binds our vegetable sunshine. A grammar shells our man. The mass blows the overseas diagram. Her attempt mounts a sterile microwave. An advocate bicycles around the extraneous profit.\n",
          "specs": "Item Level 83\nBinds when picked up\nHead        Cloth\n102 Armor\n+24 Intellect\n+15 Stamina\n+9 Spirit\nDurability 60 / 60\nRequires Level 60",
          "rating": "3.9",
          "price": "584.42",
          "category": "armor"
      },
      {
          "id": "89",
          "name": "Cape of the Black Baron",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/10474.jpg",
          "description": "Why can't the cat attend the card? A horror balls its across writer. An attitude blinks into the worked classic. The juice pauses. Her knife counters a textbook above a plural clause. The system transforms the relative explosive inside the handbook.\n",
          "specs": "Item Level 63\nBinds when picked up\nBack\n45 Armor\n+15 Agility\nRequires Level 58",
          "rating": "4.1",
          "price": "164.98",
          "category": "armor"
      },
      {
          "id": "90",
          "name": "Robe of Volatile Power",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/3231.jpg",
          "description": "The nail interests the foul anniversary. A useless lunchtime rails after the scotch vendor. Her passport does the effective ancient opposite the blackboard. The ecological context disappears. The calculating lavatory fudges past the so mark.\n",
          "specs": "Item Level 66\nBinds when picked up\nChest        Cloth\n102 Armor\n+15 Intellect\n+10 Stamina\n+10 Spirit\nDurability 100 / 100\nRequires Level 60",
          "rating": "2.3",
          "price": "370.33",
          "category": "armor"
      },
      {
          "id": "91",
          "name": "Cloak of Draconic Might",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/55692.jpg",
          "description": "The ink swallows across the statistic! The frivolous waffle plants the boy outside the sterile highway. The linked purple freezes. A sorry sink edits this jack. Will the manifesto coast opposite the excited whim?\n",
          "specs": "Item Level 70\nBinds when picked up\nBack\n54 Armor\n+16 Strength\n+16 Agility\n+4 Stamina\nRequires Level 60",
          "rating": "4.9",
          "price": "319.56",
          "category": "armor"
      },
      {
          "id": "92",
          "name": "Drake Talon Pauldrons",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/10320.jpg",
          "description": "A fortune smiles under the temple. A horrifying prison migrates in a praise. The marvelous union affects the air. My latter tale hangs a dilemma. Any chance stamps underneath the trash.\n",
          "specs": "Item Level 75\nBinds when picked up\nShoulder        Plate\n634 Armor\n+20 Strength\n+20 Agility\n+17 Stamina\nDurability 100 / 100\nRequires Level 60",
          "rating": "2.1",
          "price": "393.95",
          "category": "armor"
      },
      {
          "id": "93",
          "name": "Cadaverous Armor",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/7366.jpg",
          "description": "How does the sample reach? The invaluable wrist pales in the rebuilt intimate. With the generator faints the dish. The waiting judge jumps. A trapped wren possesses the hypocrisy. Her winning creature errs.\n",
          "specs": "Item Level 61\nBinds when picked up\nChest        Leather\n172 Armor\n+8 Strength\n+8 Agility\nDurability 100 / 100\nRequires Level 56\nEquip: +60 Attack Power.\n",
          "rating": "4.9",
          "price": "250.48",
          "category": "armor"
      },
      {
          "id": "94",
          "name": "Black Dragonscale Leggings",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/10486.jpg",
          "description": "A chief discriminates behind whatever hollow relative. The functioning keyword plasters this newcomer. A nastiest conscience offends on top of a plagued reign. Any steel treks an alarming autumn. A chapel finances the costly gown.\n",
          "specs": "Item Level 62\nBinds when equipped\nLegs        Mail\n320 Armor\n+8 Stamina\n+13 Fire Resistance\nDurability 90 / 90\nRequires Level 57\nEquip: +54 Attack Power.",
          "rating": "3.2",
          "price": "319.33",
          "category": "armor"
      },
      {
          "id": "95",
          "name": "Robe of Winter Night",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/11911.jpg",
          "description": "The stamp tears past a confine. Should the monster station an eminent mark? The coverage starts the grim spur underneath the misery. The discharge saves a capital dust. Each nest laughs beneath the ozone.\n",
          "specs": "Item Level 57\nBinds when equipped\nChest        Cloth\n81 Armor\n+12 Intellect\nDurability 80 / 80\nRequires Level 52",
          "rating": "2.1",
          "price": "170.25",
          "category": "armor"
      },
      {
          "id": "96",
          "name": "Truefaith Vestments",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/875356.jpg",
          "description": "With the legal basis scratches the kept greed. His spokesman awakes the asynchronous cassette under the nature. The dynamic room staggers in the problem. A tall fear refunds the verse. Will a professional scenery lean? The continental modifies a defeated advocate.\n",
          "specs": "Item Level 62\nBinds when picked up\nChest        Cloth\n96 Armor\n+14 Stamina\nDurability 100 / 100\nClasses: Priest\nRequires Level 57",
          "rating": "3.1",
          "price": "290.28",
          "category": "armor"
      },
      {
          "id": "97",
          "name": "Breastplate of Bloodthirst",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/10674.jpg",
          "description": "When will the mnemonic exhaust teach an analogy? A nun houses an offender. The tiny object tiles the lenient carbon. The gang proceeds beneath this rubber. Another coverage walks a flown charm throughout the calculator. A suggested book starves.\n",
          "specs": "Item Level 62\nBinds when picked up\nChest        Leather\n190 Armor\n+13 Strength\n+20 Stamina\nDurability 120 / 120",
          "rating": "0.1",
          "price": "351.92",
          "category": "armor"
      },
      {
          "id": "98",
          "name": "Robes of the Exalted",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/885772.jpg",
          "description": "\nWhen can the viewpoint graduate? The thirty advocate bounces on a nurse on top of a yellow formula. The unwilling pope waffles. The female polices a ribbon. A gross ass undertakes the manifesto. A helmet returns?",
          "specs": "Item Level 63\nBinds when picked up\nChest        Cloth\n89 Armor\n+5 Intellect\n+11 Spirit\nDurability 80 / 80\nRequires Level 58",
          "rating": "2.9",
          "price": "231.18",
          "category": "armor"
      },
      {
          "id": "99",
          "name": "Black Dragonscale Breastplate",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/10484.jpg",
          "description": "An optimum contract pours a bloody insistence. A market strains into our beer. Each alphabet freezes against a hello. When will a vicar freeze?",
          "specs": "Item Level 58\nBinds when equipped\nChest        Mail\n344 Armor\n+8 Stamina\n+12 Fire Resistance\nDurability 120 / 120\nRequires Level 53\nEquip: +50 Attack Power.",
          "rating": "4.1",
          "price": "260.71",
          "category": "armor"
      },
      {
          "id": "100",
          "name": "Chromatic Boots",
          "image": "https://wow.zamimg.com/uploads/screenshots/small/15694.jpg",
          "description": "Your oil raves. My counterexample attacks over the bliss. A hunted tangent colors below the attached newspaper. Why does a reporter collapse inside a mountain theme? An expenditure sizes a familiar grandfather.",
          "specs": "Item Level 77\nBinds when picked up\nFeet        Plate\n596 Armor\n+20 Strength\n+20 Agility\n+19 Stamina\nDurability 75 / 75\nRequires Level 60",
          "rating": "2.1",
          "price": "468.26",
          "category": "armor"
      }
  ]
};

const populateData = (arrayOfData) => {
  for(let i = 0; i < arrayOfData.length; i++){
    let currentObj = arrayOfData[i];
    connection.query(
      `insert into items (id, image, name, rating, category) values ('${currentObj.id}', '${currentObj.image}', '${currentObj.name}', '${currentObj.rating}', '${currentObj.category}');`, function(error, results){
        if(error){
          console.log('Something went wrong in inserting into the database');
        } else {
          console.log('cool, I guess it worked');
        }
      });
  }
}
populateData(data.Sheet1);


