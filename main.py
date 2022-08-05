from audioop import mul


def main():
    def points(games):
        res = 0
        for i in games:
            x = int(i[0])
            y = int(i[-1])
            if (x > y):
                res += 3
            elif (x == y):
                res += 1
        return res

    print(points(['1:0', '2:0', '3:0', '4:0', '2:1',
          '3:1', '4:1', '3:2', '4:2', '4:3']))


if __name__ == "__main__":
    main()
