import random


def main():
    s = random.getstate()
    print(s)
    a = [random.randint(1, 10) for _ in range(5)]
    print(a)

    random.setstate(s)
    b = [random.randint(1, 10) for _ in range(5)]
    print(b)

    print(a == b)


if __name__ == "__main__":
    main()
