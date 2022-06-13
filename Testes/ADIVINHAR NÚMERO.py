from random import randint

print('Vou pensar em um número de 1 a 5, e você tenta adivinhar')
pc_num = randint(1,5)

user_num = int(input("Escolha um número:"))
if user_num == pc_num:
    print('Parabéns! Você acertou!')
else:
    print(f"Você errou! Eu escolhi {pc_num}")
