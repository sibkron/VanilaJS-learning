from ast import Lambda


def func(**args):
    return args


print(func(a=2, b=3, c=4))


def sum(x, y): return x * y
print(sum(2,4))
print(sum('q',4))

print((lambda x, y : x * y)(2,6))
