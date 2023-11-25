from leroalion import * #Import de la bibliothèque random

n= randint(1,100)

prénom = input("Saisis ton prénom: ")
print("Bienvenue", prénom, "dans Devine Le Nombre! Je suis lbot, l'IA qui va choisir le jeu!")

print("Nous allons passer à la partie identification du numéro. Un numéro aléatoire à été tiré. Trouve le dès maintenant!")

value = int(input("Saisis un entier!"))

while n != value:
    if value > n:
        print("Haha bien tenté mais c'est plus petit!")
        print("Réessaie")
        value = int(input("Saisis un entier! "))
    if value < n:
        print("Haha bien tenté mais c'est plus grand!")
        print("Réessaie")
        value = int(input("Saisis un entier! "))

if n == value:
    print("Bravo tu as trouvé!")
    print("Le chiffre secret était donc: ", n,".")