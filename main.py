from re import X


list = [int(x) for x in input("Введите числа через пробел:").split()]
print(list)


def f(ham: str, eggs: str = 'eggs') -> str:
    print("Annotations:", f.__annotations__)
    print("Arguments:", ham, eggs)
    return ham + ' and ' + eggs


print(f('spam'))

x, y = 10, 20
print(x, y)
x, y = y, x
print(x, y)
