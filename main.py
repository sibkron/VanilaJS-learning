try:
    x = int(input())
except ValueError:
    print("X должен быть числом!")
    x = 0

try:
    y = int(input())
except ValueError:
    print("Y должен быть числом!")
    y = 0
else:
    print("Все верно!")
finally:
    print("Вывести в любом случае!")

try:
    res = x / y
    print(res)
except ZeroDivisionError:
    print("Ошибка! На 0 делить нельзя!")
