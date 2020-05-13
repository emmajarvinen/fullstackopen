import sqlite3
conn = sqlite3.connect("musicalbums.db")
cursor = conn.cursor()
#cursor.execute("""
#CREATE TABLE  Companies(
#companyName TEXT PRIMARY KEY,
#country TEXT DEFAULT 'USA',
#webpage TEXT NOT NULL
#)""")

cursor.execute("""
CREATE TABLE Albums(
albumName TEXT NOT NULL,
companyName TEXT REFERENCES Companies(companyName) NOT NULL,
year INTEGER,
length REAL,
genre TEXT CHECK (genre IN('pop', 'rock', 'jazz', 'classical', 'folk')),
PRIMARY KEY(albumName, companyName)
)""")

cursor.execute("""
CREATE TABLE Artists(
artistName TEXT PRIMARY KEY NOT NULL,
gender TEXT CHECK (gender IN ('M','F','O')),
born INT
)""")

cursor.execute("""
CREATE TABLE Tracks(
trackNo INT NOT NULL CHECK (trackNo > 0 AND trackNo < 100),
albumName TEXT NOT NULL,
companyName TEXT NOT NULL,
trackName TEXT,
artistName TEXT NOT NULL,
composer TEXT,
lyricist TEXT,
length INT,
FOREIGN KEY (albumName, companyName) REFERENCES Albums(albumName, companyName)
FOREIGN KEY (artistName) REFERENCES Artists(artistName)
)""")

conn.commit()