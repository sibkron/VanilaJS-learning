import argparse

parser = argparse.ArgumentParser()
parser.add_argument("a", type=int, help="First argument")
parser.add_argument("b", type=int, help="Second argument")
parser.add_argument(
    "-a", "--action", help="What to do with numbers", default="sumerise")


args = parser.parse_args()

print(args)


def sumerise(a, b):
    print(a + b)
    return a + b


def minus(a, b):
    print(a - b)
    return a - b


if args.action == "sumerise":
    sumerise(args.a, args.b)
elif args.action == "minus":
    minus(args.a, args.b)
