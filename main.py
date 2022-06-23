def func(x):
    def add(a):
        return x + a
    return add


test = func(100)
print(test(200))
