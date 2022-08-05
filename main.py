def main():
    digit = str(input("Введите число: "))

    def digitReplace(num):
        return ''.join(list(map(lambda x: str(9 - int(x)), num)))

    print(digitReplace(digit))

    firstList = [12, 3, 456, 78]

    def digitJoin(num):
        return ''.join(list(map(lambda x: str(x), num)))

    print(digitJoin(firstList))

    def digitSrav(list1, list2):
        return str(True if list1.sort() == list2.sort() else False)

    print(digitSrav([1, 2, 3, 4, 5, 6], [2, 4, 5, 1, 3, 6]))


if __name__ == "__main__":
    main()
