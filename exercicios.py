import random

def bigger(x, y):
    if x > y:
        return x
    else:
        return y

def media(list):
    soma = 0
    for elm in list :
        soma += elm
    return soma

def big_name(list_name):
    big = list_name[0]
    for name in list_name:
        if len(name) > len(big):
            big = name
    return big

random_list = random.sample(range(0, 100), 10)
name_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

maior_numero = bigger(10, 20)
media_list = media(random_list)
bigger_name = big_name(name_list)

print(maior_numero)
print(media_list)
print(media_list)
print(bigger_name)