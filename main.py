from array import array


def main():
    count = int(input("Введите количество чисел Фибоначчи:"))

    def fibo(num):
        if num == 1:
            return 1
        elif num == 2:
            return [1, 1]
        else:
            arr = [1, 1]
            for i in range(num-2):
                arr.append(arr[i] + arr[i+1])
            return arr

    print(fibo(count))

    def factorial(num):
        return 1 if num == 0 else num * factorial(num-1)

    print(factorial(count))


if __name__ == "__main__":
    main()
