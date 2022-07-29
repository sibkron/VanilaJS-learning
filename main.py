def main():
    def sum_dig_pow(a, b):  # range(a, b + 1) will be studied by the function
        res = []
        for i in range(a, b + 1):
            strarr = str(i)
            print(strarr)
            dig = 0
            for j, k in enumerate(strarr):
                print([j, k, j + 1, int(k) ** (j + 1)])
                dig += int(k) ** (j + 1)

            print([i, dig])
            if i == dig:
                res.append(dig)

        return res

    res = sum_dig_pow(86, 90)

    print(res)


if __name__ == "__main__":
    main()
