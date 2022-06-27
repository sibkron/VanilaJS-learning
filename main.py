class Person:
    name = "Ivan"
    age = 40

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def set(self, name, age):
        self.name = name
        self.age = age

    def getName(self):
        return self.name

    def getAge(self):
        return self.age


class Student (Person):
    course = 1

    def __init__(self, name, age, course):
        super().__init__(name, age)
        self.course = course

    def set(self, name, age, course):
        super().set(name, age)
        self.course = course


vlad = Person("Vlad", 38)
print(vlad.getName())

petr = Person("Petr", 35)
print(petr.name)

igor = Student("Igor", 22, 2)
print(igor.name + ", student of " + str(igor.course) + " course")
igor.set("Igor", 22, 3)
print(igor.name + ", student of " + str(igor.course) + " course")

# decorators


def decorator(func):
    def wrapper():
        print("Код до выполнения функции")
        func()
        print("Код после выполнения функции")
    return wrapper


def test(func):
    def wrapper():
        print("Код до выполнения функции 2")
        func()
        print("Код после выполнения функции 2")
    return wrapper


@decorator
@test
def show():
    print("Я обычная функция")


show()
