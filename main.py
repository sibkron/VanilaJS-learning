i = 1000
while i > 100:
    print(i)
    i /= 2

for j in 'Hello world':
    if j == 'w':
        break
    print(j * 2, end='')
else:
    print("\nБуквы а нет в слове")
