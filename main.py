def main():
    A = dict(zip([1, 2, 3], ['K', 'L', 'M']))
    B = dict.fromkeys([10, 20, 30], 'Z')
    print("A=", A)
    print("B=", B)
    print("Сравнение словарей:")
    print("A==B:", A == B)
    print("A!=B:", A != B)
    A.update(B)
    print("Объединение словарей:")
    print("A=", A)
    print("Проверка содержимого словарей:")
    print((20, 'Z') in A.items())
    print(20 in A)
    print('Z' in A)
    A.clear()
    print("Словарь после очистки:")
    print("A=", A)


if __name__ == "__main__":
    main()
