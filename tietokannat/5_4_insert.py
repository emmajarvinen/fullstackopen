import sqlite3
conn = sqlite3.connect("musicalbums.db")
cursor = conn.cursor()

cursor.execute("""INSERT INTO Artists
               VALUES('Adele','F',1988)""")
#%%

cursor.execute("SELECT born FROM Artists")
rows =cursor.fetchall()
for row in rows:
    print(row)
    
#%%
for i in range(1) :
    nimi= input("Syötä firman {} nimi: ".format(i+1))
    maa= input("Syötä firman {} maa: ".format(i+1))
    wp= input("Syötä firman {} nettiosoite: ".format(i+1))
    script = "INSERT INTO Companies VALUES (?, ?, ?);"
    conn.execute(script, (nimi, maa, wp))
    
#%%
#voidaan tarkistaa, että haluttu inputti tallentui tietokantaan:
cursor.execute("SELECT* FROM Companies")
rows = cursor.fetchall()
for row in rows:
    print(row)

conn.commit()