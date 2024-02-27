DROP TABLE IF EXISTS cards;
CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, category TEXT, url TEXT );
INSERT INTO cards (id, name, category, url) VALUES (1, 'Cat', 'Animal', 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg'), (2, 'Dog', 'Animal', 'https://images.pexels.com/photos/10149129/pexels-photo-10149129.jpeg');