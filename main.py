from audioop import mul


def main():
    def squared(func):
        return lambda x: func(x) * func(x)

    @squared
    def mult_2(a):
        return a * 2

    print(mult_2(5))


if __name__ == "__main__":
    main()
