def main():
    n = int(input("Введите количество матрешек:"))
    v = int(input("Введите объем наименьшей матрешки:"))

    def sumV(n, v):
        res = 0
        for i in range(n):
            print(i)
            res += (1 + 3 * i / 10) ** 3 * v

        return res

    vAllToys = sumV(n, v)
    bigVToys = (1 + 3 * (n - 1) / 10) ** 3 * v
    times = vAllToys / bigVToys
    print(f'Объем самой большой матрешки {bigVToys}')
    print(f'Объем всех матрешек {vAllToys}')
    print(f'Объем развернутых матрешек увеличится в {times} раз')


if __name__ == "__main__":
    main()
