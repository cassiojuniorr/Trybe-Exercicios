# 1 - OK
# 0 - Instabilidades

def get_time_sever_off(numbers) -> int:
    i = 0
    sum = 0
    max = 0
    compared_range = len(numbers) - 1

    while i <= compared_range:
        if numbers[i] == 1:
            sum += 1
        else:
            sum = 0

        i += 1

        if sum >= max:
            max = sum

    return max
            

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3
print(get_time_sever_off(valores_coletados1))

valores_coletados2 = [1, 1, 1, 1, 1, 0, 1, 1]
print(get_time_sever_off(valores_coletados2))
# resultado = 4