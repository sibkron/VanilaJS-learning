def main():
    a = input("Введите коэффициент уравнения A:")
    b = input("Введите коэффициент уравнения B:")

    try:
        intA = int(a)
        intB = int(b)
        print([intA, intB])
        if intA == 0 and intB == 1:
            print("Решение уравнения любое")
        elif intA == 0 and intB != 1:
            print("Уравнение не имеет корней")
        else:
            res = (intB - 1) / (intA - 1)
            print(
                f"Решение уравнения с коэффициаентами {intA} и {intB} равно {res}")
    except Exception:
        print("Введенные данные нельзя использовать в качестве коэффициентов!")


if __name__ == "__main__":
    main()
