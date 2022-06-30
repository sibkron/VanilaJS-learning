from pickle import GLOBAL


GLOBAL = 'GLOBAL'


def sum_module(a, b):
    return a + b


def multiply(a, b):
    return a * b


def _im_hidden():
    print('I\'m hidden!')


if __name__ == '__main__':
    print('Hi there, I am module!')
    assert sum_module(4,4)
    print("Sum of 10 and 10: ", sum_module(10, 10))
