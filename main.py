def main():
    def even(k) -> bool:
        if (k % 2) == 0:
            return True
        else:
            return False

    nabor = (1, 2, 3, 4, 5, 6, 4, 7, 7, 8)
    count = 0

    for value in nabor:
        if even(value):
            count += 1

    print("Набор:", nabor)
    print("Количество четных числе в наборе nabor: ", count)

    def remove_smallest(numbers):
        print(min(numbers))
        print(numbers.index(min(numbers)))
        print(numbers.pop(numbers.index(min(numbers))))
        print(numbers)
        return [] if numbers == [] else numbers.pop(numbers.index(min(numbers)))

    remove_smallest([1, 2, 3, 4, 5])


if __name__ == "__main__":
    main()
